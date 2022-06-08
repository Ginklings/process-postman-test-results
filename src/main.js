const core = require('@actions/core');
const fg = require('fast-glob');
const fs = require('fs');
const path = require('path');
const { readJsonResultsFromFile } = require('./utils');
const { createStatusCheck, createPrComment } = require('./github');
const { getMarkupForJson } = require('./markup');

const requiredArgOptions = {
  required: true,
  trimWhitespace: true
};

const token = core.getInput('github-token', requiredArgOptions);
const resultsFileList = core.getInput('results-file', requiredArgOptions);
const ignoreTestFailures = core.getInput('ignore-test-failures') == 'true';
const shouldCreateStatusCheck = core.getInput('create-status-check') == 'true';
const shouldCreatePRComment = core.getInput('create-pr-comment') == 'true';
const updateCommentIfOneExists = core.getInput('update-comment-if-one-exists') == 'true';
const patternReportName = core.getInput('report-name');
const workingDir = core.getInput('working-dir');

async function run() {
  core.startGroup(`Logs - creating report...`);
  resultsFiles = resultsFileList.split(',');
  var i = 0;
  if (resultsFiles.length > 1 || !fs.existsSync(resultsFileList)) {
    for (const fileName of resultsFiles) {
      var filePath = path.join(workingDir, fileName);
      if (fs.existsSync(filePath)) {
        i += 1;
        await process_file(filePath, i, true);
      } else {
        unpackedFiles = fg.sync(filePath, { dot: true });
        for (const unpackedFile of unpackedFiles) {
          i += 1;
          await process_file(unpackedFile, i, true);
        }
      }
    }
  } else {
    await process_file(path.join(workingDir, resultsFileList), i, false);
  }
  core.endGroup();
}

async function process_file(resultsFile, reportIndex, multiFileMode) {
  try {
    const resultsJson = await readJsonResultsFromFile(resultsFile);
    if (!resultsJson) {
      core.setOutput('test-outcome', 'Failed');
      return;
    }

    if (multiFileMode) {
      if (patternReportName == 'filename') {
        var _reportName = resultsFile.replace(/\//g, '_');
      } else {
        var _reportName = patternReportName + ' ' + reportIndex;
      }
    } else {
      var _reportName = patternReportName;
    }

    const reportName = _reportName;
    const markupData = getMarkupForJson(resultsJson, reportName);

    let conclusion = 'success';
    if (resultsJson.hasFailures) {
      core.warning(`At least one failure was found.`);
      conclusion = ignoreTestFailures ? 'neutral' : 'failure';
    } else {
      core.info(`There are no failures.`);
    }

    if (shouldCreateStatusCheck) {
      await createStatusCheck(token, markupData, conclusion, reportName);
    }
    if (shouldCreatePRComment) {
      await createPrComment(token, markupData, updateCommentIfOneExists);
    }

    core.setOutput('test-outcome', resultsJson.outcome);
  } catch (error) {
    if (error instanceof RangeError) {
      core.info(error.message);
      core.setOutput('test-outcome', 'Failed');
      return;
    } else {
      core.setFailed(`An error occurred processing the cypress results file: ${error.message}`);
      core.setOutput('test-outcome', 'Failed');
    }
  }
}

run();

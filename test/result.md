
# 
![Generic badge](https://img.shields.io/badge/Requests_70/70-PASSED-brightgreen.svg)
![Generic badge](https://img.shields.io/badge/Assertions_29/98-FAILED-red.svg)

<details>  
  <summary> Duration: less than 20 seconds </summary>
  <table>
    <tr>
      <th>Start:</th>
      <td><code>2022-05-24 02:42:58.734 UTC</code></td>
    </tr>
    <tr>
      <th>Finish:</th>
      <td><code>2022-05-24 02:43:15.956 UTC</code></td>    
    </tr>
    <tr>
      <th>Duration:</th>
      <td><code>17.222</code></td>
    </tr>
    <tr>
      <th>Response Time Average:</th>
      <td><code>200.57142857142858</code></td>
    </tr>
    <tr>
      <th>Response Time Min:</th>
      <td><code>144</code></td>
    </tr>
    <tr>
      <th>Response Time Max:</th>
      <td><code>879</code></td>
    </tr>
  </table>
</details>
  

<details>
  <summary> Outcome: Failed</summary>
  <table>
    <tr>
      <th></th>
      <th>executed</th>
      <td>failed</td>
    </tr>
    <tr>
      <th>iterations</th>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <th>requests</th>
      <td>70</td>
      <td>0</td>
    </tr>
    <tr>
      <th>test-scripts</th>
      <td>140</td>
      <td>0</td>
    </tr>
    <tr>
      <th>prerequest-scripts</th>
      <td>70</td>
      <td>0</td>
    </tr>
    <tr>
      <th>assertions</th>
      <td>98</td>
      <td>29</td>
    </tr>
  </table>
</details>

  
#### DADOS-GERAIS / Busca empreendimento por filtro / Filtro idBuilding
<details>
  <summary>:x: Deve retornar os dados do idBuilding consultado</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:01.273 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Filtro idBuilding</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/todos</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected [ Array(992) ] to have a length of 1 but got 992
   at Object.eval sandbox-script.js:2:6)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar os dados do idBuilding consultado</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:01.284 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Filtro idBuilding</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/todos</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected { Object (_id, idBuilding, ...) } to deeply equal '[object Object]'
   at Object.eval sandbox-script.js:3:6)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve ter valor do filtro</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:02.005 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Filtro cidade</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/todos</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected '' to equal 'Florianópolis'
   at Object.eval sandbox-script.js:3:7)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve ter valor do filtro</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:02.873 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Filtro estado</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/todos</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected 'CABA' to equal 'SC'
   at Object.eval sandbox-script.js:3:8)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve ter valor do filtro</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:03.277 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Filtro país</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/todos</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected 'pt-BR' to equal 'es-AR'
   at Object.eval sandbox-script.js:3:9)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve ter valor do filtro</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:03.681 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Filtro logradouro</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/todos</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected 'Avenida Mauro Ramos' to equal 'Avenida Brasil'
   at Object.eval sandbox-script.js:3:10)</pre></td>
    </tr>
  </table>
</details>#### DADOS-GERAIS / Busca empreendimento com idBulding inexistente / Busca empreendimento com idBuilding inexistente
<details>
  <summary>:x: Deve retornar 404</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:05.618 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Busca empreendimento com idBuilding inexistente</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/todos</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 404 but got 200
   at Object.eval sandbox-script.js:1:17)</pre></td>
    </tr>
  </table>
</details>#### DADOS-GERAIS / Busca empreendimento por id / Busca empreendimento
<details>
  <summary>:x: Deve retornar o documento criado</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:05.981 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Busca empreendimento</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idDadoGeral}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected { Object (_id, idBuilding, ...) } to deeply equal '[object Object]'
   at Object.eval sandbox-script.js:3:19)</pre></td>
    </tr>
  </table>
</details>#### DADOS-GERAIS / Cria empreendimento com idBuilding repetido / Cria empreendimento
<details>
  <summary>:x: Deve retornar 201</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:06.700 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Cria empreendimento</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 201 but got 500
   at Object.eval sandbox-script.js:1:22)</pre></td>
    </tr>
  </table>
</details>#### DADOS-GERAIS / Cria empreendimento com dados inválidos / Cria empreendimento sem número
<details>
  <summary>:x: Deve retornar 500</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:07.582 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Cria empreendimento sem número</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{$guid}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 500 but got 201
   at Object.eval sandbox-script.js:1:27)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 500</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:07.758 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Cria empreendimento com número negativo</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{$guid}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 500 but got 201
   at Object.eval sandbox-script.js:1:28)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 500</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:08.645 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Cria empreendimento sem areaEmpreendimento</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{$guid}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 500 but got 201
   at Object.eval sandbox-script.js:1:33)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 500</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:08.822 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Cria empreendimento com areaEmpreendimento negativo</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{$guid}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 500 but got 201
   at Object.eval sandbox-script.js:1:34)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 500</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:09.175 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Cria empreendimento com areaTerreno negativo</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{$guid}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 500 but got 201
   at Object.eval sandbox-script.js:1:36)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 500</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:09.711 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Cria empreendimento com bdi negativo</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{$guid}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 500 but got 201
   at Object.eval sandbox-script.js:1:39)</pre></td>
    </tr>
  </table>
</details>#### DADOS-GERAIS / Atualiza empreendimento com dados inválidos / Atualiza empreendimento com nome vazio
<details>
  <summary>:x: Deve retornar 400</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:10.065 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Atualiza empreendimento com nome vazio</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idDadoGeral}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 400 but got 404
   at Object.eval sandbox-script.js:1:41)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 400</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:10.248 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Atualiza empreendimento com descrição vazia</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 400 but got 200
   at Object.eval sandbox-script.js:1:42)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 400</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:10.433 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Atualiza empreendimento com logradouro vazio</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 400 but got 200
   at Object.eval sandbox-script.js:1:43)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 400</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:10.785 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Atualiza empreendimento com cidade vazia</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 400 but got 200
   at Object.eval sandbox-script.js:1:45)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 400</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:10.966 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Atualiza empreendimento com estado vazio</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 400 but got 200
   at Object.eval sandbox-script.js:1:46)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 400</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:11.157 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Atualiza empreendimento com país vazio</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 400 but got 200
   at Object.eval sandbox-script.js:1:47)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 400</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:11.864 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Atualiza empreendimento com cliente vazio</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 400 but got 200
   at Object.eval sandbox-script.js:1:51)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar o documento criado</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:12.567 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Busca empreendimento</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/todos</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected [ Array(999) ] to deeply equal '[object Object]'
   at Object.eval sandbox-script.js:3:53)</pre></td>
    </tr>
  </table>
</details>#### DADOS-GERAIS / Atualiza empreendimento com dados válidos / Atualiza número
<details>
  <summary>:x: Deve retornar 200</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:13.478 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Atualiza número</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 200 but got 400
   at Object.eval sandbox-script.js:1:58)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 200</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:14.730 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Atualiza BDI</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 200 but got 400
   at Object.eval sandbox-script.js:1:65)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar 200</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:14.892 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Busca empreendimento</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 200 but got 400
   at Object.eval sandbox-script.js:1:66)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Deve retornar o documento atualizado</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:14.894 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Busca empreendimento</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idBuilding}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected { Object (statusCode, message, ...) } to deeply equal { Object (idBuilding, nome, ...) }
   at Object.eval sandbox-script.js:3:66)</pre></td>
    </tr>
  </table>
</details>#### DADOS-GERAIS / Exclui empreendimento / Exclui
<details>
  <summary>:x: Deve retornar 400</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:15.419 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Exclui</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/{{idDadoGeral}}</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected response to have status code 400 but got 200
   at Object.eval sandbox-script.js:1:69)</pre></td>
    </tr>
  </table>
</details><details>
  <summary>:x: Retorno deve ser um objeto</summary>    
  <table>
    <tr>
      <th>Error Type:</th>
      <td><code>AssertionError</code></td>
    </tr>
    <tr>
      <th>Timestamp:</th>
      <td><code>2022-05-24 02:43:15.951 UTC</code></td>
    </tr>
    <tr>
      <th>Source name:</th>
      <td><code>Busca empreendimento</code></td>
    </tr>
    <tr>
      <th>Path:</th>
      <td><code>/empreendimentos/dados-gerais/todos</code></td>
    </tr>
    <tr>
      <th>Stack:</th>
      <td><pre>AssertionError: expected [ Array(1000) ] to be empty
   at Object.eval sandbox-script.js:2:70)</pre></td>
    </tr>
  </table>
</details>
  

# Data Lovers

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Usuário](#2-Usuário)
* [3. Funcionalidades](#3-Funcionalidades-(História-de-Usuário))
* [4. Protótipo de baixa fidelidade  ](#4-Protótipo-de-baixa-fidelidade)
* [5. Teste e feedbacks de usabilidade](#5-Teste-e-feedbacks-de-usabilidade)
* [6. Ferramentas Utilizadas](#6-Feramentas-Utilizadas)

***


## 2. Usuário

Criamos duas protopersonas para dar partida às necessidades mais específicas do projeto e inserir um contexto a ele.

São elas:

![](/src/imagens/persona1.jpg)

![](/src/imagens/persona2.jpg)

## 3. Funcionalidades - História do Usuário

Para atender as espectativas dos clientes, criamos 2 histórias de usuário. Cada uma delas implementa de uma a duas funcionalidades que são consideradas básicas para usabilidade do site, dessa maneira criamos pequenos botões com as funções de filtros para triar cada vez mais as informações.

História 1

"Eu como usuário gostaria de poder saber qual é a espécie dos personagens através de um botão, mas apenas visualizar o personagem depois de filtrado, podendo realizar uma busca pelo nome."

O primeiro filtro, busca no banco de dados a informação se o personagem possui o genero masculino, feminino ou alien, o que corresponde com as espécies da animação Rick and Morty.  

História 2

"Eu como usuário gostaria que todos os personagens que pudessem aparecer na tela ao clicar em um botão e que tivesse a opção de saber se o personagem está vivo ou morto."

O segundo filtro, ou história, foi responsável por filtrar o banco de dados e trazer em cards as informações destes separadas por vivo, morto ou status desconhecido. 

* Todos os filtros possuem um parametro que permite o usuário saber em porcentagem quantos personagens dentre todos que aparecem na animação possuem determinada característica.  

## 4. Protótipo de baixa fidelidade

* A partir das protopersonas e do banco de dados desenvolvemos um layout que acreditamso ser ideal para atender as requisições do usuário.

* Para criar um dashboard, precisamos de cards para mostrar as informações de maneira clara e campos para o usuário interagir com os dados (inputs - botões - campos para digitação).

Este foi o primeiro protótipo.

![](/src/imagens/prototipo.png)

Protótipo utilizando a ferramenta Marvel : https://marvelapp.com/4g50b82

## 5. Teste e feedbacks de usabilidade

O protótipo 1 foi testado com potenciais usuários a partir das tarefas:

Ao clique de um botão filtrar o personagem de acordo com as características pré habilitadas 

Perfil dos potenciais usuários que testaram:

Mulher, 38 anos, desconhecia os personagens

Homem, 16 anos, assistiu todos os episódios da série

Homem, 22 anos, já teve acesso e assitiu alguns episódios 

Mulher, 30 anos, assiste a série a pouco tempo

Mulher, 17 anos, só assistiu a três episódios

Resultados do teste com protótipo 1:

Layout foi considerado adequado;

Alguns usuários acreditaram que o layout poderia ser considerado um pouco poluído pelo excesso de botões apresentados. 

Todos os usuários demonstraram gostar da parte que apresenta o percentual de personagens com as características escolhidas. 

Reorganização do protótipo:
Devido ao feedback recebido nos testes de usabilidade, foram refatorados os botões compactandos estes na forma de selects mantendo a funcionalidade anterior aprovada pelos usuários. 
## 6. Ferramentas Utilizadas 

* Vanilla JS
* HTML 5
* CSS

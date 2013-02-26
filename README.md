Comment Responsive
==================

Plugin para trabalhar com Mobile First e carregamento assincrono de elementos via javascript.


Como funciona
--------------

A lógica é bem simples, após realizar alguns testes eu percebi que diferente do que ocorre com CSS display:none, todo o conteúdo que é jogado dentro das tags comentário não é interpretado no pelo navegador.

Ex: Se eu criar uma tag img e deixar com display:none os kb dessa imagem serão processados pelo navegador.

Já se eu colocar essa mesma tag de imagem dentro de comentários do HTML, ele será lido como um comentário e não será interpretado pelo navegador, consequentemente não terá peso algum.

Então a idéia é atravez de javascript, fazer a leitura da largura atual da tela e após atingir uma largura especifica ele retirar o comentário condicional fazendo imagem ou bloco de código ser carregada somente para uma determinada resolução.

E no decorrer do desenvolvimento tive a idéia de fazer também um carregamento assíncrono, dessa forma facilitaria pois na própria marcação html o usuário define se quer um elemento assincrono ou não, sem precisar criar document.write via javascript ou similares.

O que facilitaria até mesmo para fazer carregamento assincrono de itens dinâmicos o que por javascript dependeria inclusive de uma requisição ajax.


Como utilizar
-------------

**data-mobilefirst**

Utilizando o atributo **data-mobilefirst** na div é possível dizer com quantos pixels você quer que um elemento seja exibido.

> `<div data-mobilefirst="767"><!-- <img src="img/bg-1.jpg" /--></div>`

Dessa forma uma imagem (ou bloco de código) só sera executado quando a largura da tela for igual ou superior a 767 pixels.

E essa imagem pode continuar no HTML sem problemas pois não irá pesar na conexão de pessoas que possuem resoluções menores, já que ela será interpretada como um comentário não como uma marcação HTML


**data-async** **Obs: este atributo no momento não está mais funcionando (mais informações em estado atual do plugin)*

Com o atributo **data-async** é possível fazer um carregamento assincrono sem precisar fazer mais trabalhos com javascript.

> `<div data-async="2000"><!-- <img src="img/bg-1.jpg" /--></div>`

Dessa forma a imagem só será exibida (e carregada) somente 2 segundos após o carregamento da página. Muito interessante para um likebox do facebook por exemplo.


Ver o resultado
----------------------

Abrindo o Debug do Chrome na opção Rede você pode perceber que a imagem só é requisitada após atingir o requisito da resolução ou do async.


Estado atual do Plugin
----------------------

Faz tempo desde que comecei a trabalhar nele, mas estou querendo ver se consigo fazer com que os 2 atributos também possam trabalhar juntos, ou seja.

> `<div data-mobilefirst="767" data-async="2000"><!-- <img src="img/bg-1.jpg" /--></div>`

O problema é que o data-mobilefirst cancela o data-async mas acredito que não terei problemas com isso.

***OBS: O data-async não vai funcionar no momento pois estava realizando essa implementação, infelizmente e não tive tempo de concluir quando parei, mas ela já funcionou direitinho.***



Desmembrar da Biblioteca jQuery
--------------------

Uma coisa que quero fazer e tem me faltado muito tempo é passar esse plugin para javascript puro, para que não fique na dependência de outra biblioteca.

Eu comecei em jQuery pois não tinha certeza se a idéia iria funcionar, a principio penso em liberar a versão jQuery e posteriormente a versão javascript puro.


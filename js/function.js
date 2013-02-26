// JavaScript Document
$(document).ready(function() {	map();				});
$(window).resize(function()  { 	remap('resize');	}); 
$(window).load(function()    { 	loadAsync();		}); 

/*
* Function: map
* Constroi o cenário, gera o objeto para carregar elementos
*/
var map = function(){	
	
	// Gera array com lista de resoluções mobile-firsts em atributos
	var attrBody = new Array();	 
	
	// Gera um array com todos os valores utilizados no atributo data-mobilefirst
	$("*[data-mobilefirst]").each(function(){
		widthWindow = $(this).attr('data-mobilefirst');		// Pega vaor do atributo
		attrBody.push( widthWindow );						// Salva no Array		
	});
	 
	
	// Grava todos os valores do array em um atributo data-breakpoint da tag body
	$("body").attr("data-breakpoint", attrBody.join());	  
	
	// Indice do Objeto
	var indice = 0;
	
	// Gera um objeto com todos os elementos com atributos data-async
	$("*[data-async]").each(function(){ 
		$('body').data( 'itemAsync_'+indice, $(this) );		// Grava objeto no cache com chave itemAsync_#loop#
		indice++;											// Incrementa o indice
	});
		 
	// Chama a função que faz um remap do ambiente
	remap('ready');
}

/*
* Function: remap
* Verifica a largura da janela atual, e atualiza o cenário removendo os breakpoints da tag body e exibe itens de breakpoints dentro de resolução 
*/
var remap = function ( evento ){	
	// Gera array a partir do atributo data-breakpoint na tag body	
	var breakpoints = $("body").attr("data-breakpoint").split(","); 
	// Pega largura da janela atual
	var widthWindow = $(window).width(); 	
	// Atualiza o array de breakpoint e exibe itens que estão dentro da resolução
	removerBreakpoint(breakpoints, widthWindow, evento); 	
	// Atualiza valores do atributo data-breakpoint na tag body
	$("body").attr("data-breakpoint",breakpoints.join());		
}

/*
* Function: removerBreakpoint
* Remove breakpoints da Array attrBody e exibe itens que estão dentro da resolução
*/
var removerBreakpoint = function (breakpoints, widthWindow, evento) {	
	// Grava quantidade de elementos da array breakpoints na variavel total
	total = breakpoints.length;	
	// Percorre array
    for(var i=0; i<=total; i++) { 		
		// Se o breakpoint atual for menor que a largura da janela (Ex.:  950 < 1400)
        if( breakpoints[0] < widthWindow ) {		
			// Varre todo o documento atrás de breakpoints com o mesmo valor (Del elementos que seriam exibidos na mesma resolução)
			$("*[data-mobilefirst='"+breakpoints[0]+"']").each(function(){  
				// Se o elemento atual não possuir o atributo data-sync e o evento for o ready (document.ready)
				// console.log( !$(this).attr('data-async') );
				// if ( !$(this).attr('data-async') ){	
					output = $(this).html().replace('<!--','').replace('-->','');		// Retira os comentários e exibe os itens daquela resolução					
					$(this).html(output);												// Atualiza saida HTML					
					$(this).fadeIn(1000);												// Faz um fadeIn para os novos elementos
				// }	
							
			}); 			
			// Elimina breakpoint atual do Array
            breakpoints.splice(0, 1);  
        }
    }	
}


/*
* Function: loadAsync
* Carrega objetos gravados no cache e exibe com o delay passado no atributo
*/
var loadAsync = function(){  
	// Percorre os objetos salvos em cache
	for ( nome in $('body').data() ) {
		// Verifica se o valor atual é um objeto
	 	if ( typeof $('body').data(nome) === 'object'){
			// Salva elemento do cache com a variavel elementAsync
			elementAsync = $('body').data(nome);
			// Captura o valor do delay passado no atributo
			delay = elementAsync.attr('data-async'); 
			// Aplica o delay, após o tempo passado executa a função
			elementAsync.delay(delay).hide(0, function(){ 
				// Se o elemento possuir dimensões para ser exibido nessa tela
				if ( elementAsync.attr('data-mobilefirst')  <  $(window).width() ){					
					output = $(this).html().replace('<!--','').replace('-->','');			// Retira os comentários e exibe os itens daquela resolução								
					$(this).html(output);													// Atualiza saida HTML				
					$(this).fadeIn('slow');													// Faz um fadeIn para os novos elementos
				}  	 
			}); 
		} 
	}; 	 
}
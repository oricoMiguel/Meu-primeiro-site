var tabela = document.querySelector("table");

//Escuta o duplo click na linha que será excluida
tabela.addEventListener("dblclick", function(event){
    
    //Adicioa o efeito da linha
    event.target.parentNode.classList.add("fadeOut");

    //Atrasa a exclusão da linha para ver o efeito
    setTimeout(function(){
    //Exclui a linha clicada
    event.target.parentNode.remove();
    }, 600);
});
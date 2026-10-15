var botaoAPI = document.querySelector("#api-encomenda");

botaoAPI.addEventListener("click", function(){
    //Consome a API
    var api = new XMLHttpRequest();
    api.open("GET", "http://localhost:3000/encomendas_web")
    api.addEventListener("load", function(){
        //Formata os dados vindos do JSON
        var resposta = JSON.parse(api.responseText);

        //Passa por cada item do JSON e adiciona na tabela
        resposta.forEach(function(encomendaAPI) {adicionaEncomendaTabela(encomendaAPI)}); 
            
        
    })
    api.send();
})
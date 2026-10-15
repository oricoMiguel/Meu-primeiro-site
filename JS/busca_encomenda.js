var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var clientes = document.querySelectorAll(".cliente");

    //Verifica se tem informação para busca
    if(this.value.length > 0) {
        //Há filtro de busca
        for(var cli = 0; cli < clientes.length; cli++){
        var cliente = clientes[cli];
        var nome = cliente.querySelector(".nome").textContent;
        var expressao = new RegExp(this.value, "i");

        //Verifica se o nome digitado é igual ao do contador
        if( !expressao.test(nome)) {
            //Torna invisível
            cliente.classList.add("invisivel");
        }else{
            //Deixa Visível
            cliente.classList.remove("invisivel"); 
            }
        }    

    } else {
        //Não há filtro de busca, exibe a lista completa
        for(var cli=0; cli < clientes.length; cli++){
            clientes[cli].classList.remove("invisivel");
        }
    }

})
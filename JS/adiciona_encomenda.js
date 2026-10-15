var botaoAdicionar = document.querySelector("#botao_form");


botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    //Captura o formulário
    var form = document.querySelector("#frmEncomenda");

    //Captura a nova encomenda
    var novaEncomenda = obtemEncomenda(form);

    //Adiciona a Encomenda
    adicionaEncomendaTabela(novaEncomenda);

    //Capturando a tabela de encomendas
    //var tabela = document.querySelector("#tabela-clientes");

    //Insere a nova encomenda na tabela
    //tabela.appendChild(montaTR(novaEncomenda));

    //Limpa o Formulário
    form.reset();

});

//Função para adicionar nova encomenda na tabela
function adicionaEncomendaTabela(dadosEncomenda){
    //Capturando a tabela de encomendas
    var tabela = document.querySelector("#tabela-clientes");

    //Insere a nova encomenda na tabela
    tabela.appendChild(montaTR(dadosEncomenda));
}

//Captura os dados do formulário
function obtemEncomenda(formulario){
    var encomenda = {
        nome: formulario.nome.value,
        produto: formulario.produto.value,
        qtde: formulario.qtde.value,
        valor: formulario.valor.value,
    }
    return encomenda;
}

//Função para criar uma nova linha
function montaTR(dadosNovaEncomenda){
    var linha = document.createElement('tr');

    linha.appendChild(montaTD(dadosNovaEncomenda.nome));
    linha.appendChild(montaTD(dadosNovaEncomenda.produto));
    linha.appendChild(montaTD(dadosNovaEncomenda.qtde));
    linha.appendChild(montaTD(formatarValor(dadosNovaEncomenda.valor)));
    linha.appendChild(montaTD(calculoTotal(dadosNovaEncomenda.qtde,dadosNovaEncomenda.valor)));

    return linha;
    
}
//Função para criar uma nova coluna
function montaTD(dadoColuna){
    var coluna = document.createElement('td');
    coluna.textContent = dadoColuna;

    return coluna;
}
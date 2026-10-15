
//captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

//Passa por todas as encomendas e calcula o valor total
for(var count=0; count < clientes.length; count++){
    //quantidade de encomenda
    var tab_qtde = clientes[count].querySelector(".qtde").textContent;
    //valor unitario da encomenda
    var tab_unitario = clientes[count].querySelector(".unitario").textContent;

    //verifica se a quatidade é válida
    if(tab_qtde < 1 || isNaN(tab_qtde)){
        //A quatidade é menor que 1 ou não é número
        clientes[count].querySelector(".qtde").textContent= "Quatidade Inválida!";
        
        //texto da quatidade em vermelho
        clientes[count].classList.add("info-invalida");

        //linha toda com texto vermelho:
        //clientes[count].style.color = "red";

        //linha toda vermelha
        //clientes[count].style.backgroundColor = "red";

    } else if (tab_unitario < 1 || isNaN(tab_unitario)){
        //A quatidade é menor que 1 ou não é número
        clientes[count].querySelector(".unitario").textContent= "R$ Unitário Inválido!";
        
        //texto da quatidade em vermelho
        clientes[count].classList.add("info-invalida-unitario");
    

    }else{
        //calcula e exibe o total
        clientes[count].querySelector(".total").textContent = calculoTotal(tab_qtde,tab_unitario); 
        //envia formatação para o valor unitário
        clientes[count].querySelector(".unitario").textContent= parseFloat(tab_unitario);
    }
  
}

//função de calculo do valor total
function calculoTotal(qtde,unit){
    var total = 0;

    total = qtde * unit;

    return formatarValor(total);
}

//função que formata os valor em reais
function formatarValor(valor){
    var valor_formatado = valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
    return valor_formatado;
}
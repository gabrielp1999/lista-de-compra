let itensDaCompra = []; 
let selecionados = [];

function listar() {
    const inputListaDeCompra = document.getElementById('inputListaDeCompra');
    const compras = document.getElementById('compras');
    
    let inputCompras = inputListaDeCompra.value;

    if(inputCompras.length < 2) {
        alert('digite o item que deseja comprar');
        return;
    }
    
    itensDaCompra.push(inputCompras);
     
    let conteudo = "<ul>";

    for(let indice in itensDaCompra) {
        const name = `${indice}-${itensDaCompra[indice]}`;
        conteudo += `
            <li>
                <input type="checkbox" id="${name}" class="item" name="${name}" onchange="valorCheckbox(${indice}, this)" />
                <label for="${name}">${itensDaCompra[indice]}</label>
            </li>`;
    }

    conteudo += "</ul>";
    
    compras.innerHTML = conteudo;
    
    document.getElementById('inputListaDeCompra').value = "";
} 



function valorCheckbox(valor, elemento) {
    const contador = document.getElementById('contador');
    
    if(elemento.checked){
        selecionados.push(valor);
        
    }else{
        selecionados = selecionados.filter(function(marcado){
            return marcado !== valor;
        });

    };
        
    contador.innerHTML = `${selecionados.length} iten(s) no carrinho`;
        
}


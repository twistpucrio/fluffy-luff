//Busca no Json Principal, Carrinho e Favoritos.

/*Busca na barra de pesquisa: por nome, por material e por categoria.*/
/*Todos os Filtros da Página de Resultado.*/

function criaArrayProdutos() {
    return fetch("../jsons/principal.json")
        .then(response => response.json())
        .then(Produtos => {
            return Produtos.produtos; 
        })
        
}

function buscaPorNome(array) {
    let inputTexto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    for (let produto of array) {
        if(inputTexto.includes(produto.nome.toLowerCase())){
            // vamos adicionar os elementos hmls achados na pagina aqui
        }
    }
}

function buscaPorMaterial(array) {
    let inputTexto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    // [.normalize('NFD').replace(/[\u0300-\u036f]/g, "")] retira os acentos para que quando a comparação for feita não interferir em nada ----- retirar os acentos do json

    for (let produto of array) {
        if(inputTexto.includes(produto.material.toLowerCase())){
            // vamos adicionar os elementos hmls achados na pagina aqui
        }
    }
}

function buscaPorCategoria(array) {
    let inputTexto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    for (let produto of array) {
        if(inputTexto.includes(produto.categoria.toLowerCase())){
           // vamos adicionar os elementos hmls achados na pagina aqui
        }
    }
}

window.addEventListener("load", function() {
    criaArrayProdutos().then(array => {
        let inputTexto = document.getElementById("texto");

        inputTexto.addEventListener("keypress", function(event){
            if(event.key === 'Enter'){
                buscaPorNome(array);
                buscaPorMaterial(array);
                buscaPorCategoria(array);
            }
        });
    });
});

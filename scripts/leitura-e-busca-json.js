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
    let dive = document.getElementById("au");
    let inputTexto = document.getElementById("texto");

    for (let produto of array) {
        dive.innerHTML += `<p>${produto.nome}</p>`;
    }
}

window.addEventListener("load", function() {
    criaArrayProdutos().then(array => {

        buscaPorNome(array);
    });
});

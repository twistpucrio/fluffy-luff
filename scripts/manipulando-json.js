async function adicionarAoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produto = await buscaPorId(id); // Função que busca o produto pelo nome

    const produtoExistente = carrinho.find(item => item.nome === produto.nome);
    
    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({ nome: produto.nome, quantidade: 1 }); 
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}


async function adicionarAosFavoritos(id) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const produto = await buscaPorId(id);
    const produtoFavorito = favoritos.find(item => item.nome === produto.nome);
    
    if (!produtoFavorito) {
        favoritos.push(produto);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

window.addEventListener("load", function(){
    addFavoritos = document.getElementById("add-favoritos");
    addCarrinho = document.getElementById("add-carrinho");

    addFavoritos.addEventListener("click", function(){
        const id = new URL(window.location.href).searchParams.get('id'); 
        
        
        
        adicionarAosFavoritos(id);
        console.log(obterFavoritos());
        
    });
    addCarrinho.addEventListener("click", async function(){
        const id = new URL(window.location.href).searchParams.get('id'); 
        
        
        
        adicionarAoCarrinho(id);
        console.log(obterCarrinho());
        
    });
});

function obterCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho')) || [];
}

function obterFavoritos() {
    return JSON.parse(localStorage.getItem('favoritos')) || [];
}
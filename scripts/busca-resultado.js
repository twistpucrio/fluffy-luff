//async

//let array = await criaArrayProdutos();

// Função para aplicar os filtros (mesma lógica de antes)
function filtrarProdutos() {
    // Captura os filtros selecionados
    const precoOrdenacao = document.querySelector('input[name="preco"]:checked')?.value;
    const avaliacoes = Array.from(document.querySelectorAll('input[name="avaliacao"]:checked')).map(e => parseFloat(e.value));
    const materiais = Array.from(document.querySelectorAll('input[name="material"]:checked')).map(e => e.value);
    const categorias = Array.from(document.querySelectorAll('input[name="categoria"]:checked')).map(e => e.value);

    // Filtro por material, categoria, avaliação e ordenação de preço
    let resultados = produtos.filter(produto => {
        // Filtrar por materiais
        if (materiais.length > 0 && !materiais.includes(produto.material)) return false;

        // Filtrar por categorias
        if (categorias.length > 0 && !categorias.includes(produto.categoria)) return false;

        // Filtrar por avaliações
        const mediaAvaliacoes = produto.avaliacoes.reduce((acc, curr) => acc + curr.nota, 0) / produto.avaliacoes.length;
        if (avaliacoes.length > 0 && !avaliacoes.some(nota => Math.floor(mediaAvaliacoes) === nota)) return false;

        return true;
    });

    // Ordenar por preço
    if (precoOrdenacao === 'maior') {
        resultados.sort((a, b) => b.preco - a.preco);
    } else if (precoOrdenacao === 'menor') {
        resultados.sort((a, b) => a.preco - b.preco);
    }

    // Atualizar os resultados no HTML
    mostrarResultados(resultados);
}

// Função para exibir os produtos filtrados
function mostrarResultados(produtosFiltrados) {
    const container = document.getElementById('resultados');
    container.innerHTML = '';

    produtosFiltrados.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        const preco = produto.preco !== undefined ? `R$${produto.preco.toFixed(2)}` : 'Preço Indisponível';
        produtoDiv.innerHTML = `
            <h4>${produto.nome}</h4>
            <p>Preço: ${preco}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Material: ${produto.material}</p>
            <img src="${produto.caminho}" alt="${produto.nome}">
        `;
        container.appendChild(produtoDiv);
    });
}



window.addEventListener("load", function() {
    // Chamar a função filtrarProdutos quando os filtros forem alterados
    const filtros = document.querySelectorAll('input[name="preco"], input[name="avaliacao"], input[name="material"], input[name="categoria"]');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('change', filtrarProdutos);
    });
    
    // Supondo que criaArrayProdutos é uma função que retorna uma Promise com os produtos
    criaArrayProdutos().then(produtosCarregados => {
        produtos = produtosCarregados; // Armazenar os produtos carregados
        filtrarProdutos(); // Aplicar o filtro inicial
    });
});
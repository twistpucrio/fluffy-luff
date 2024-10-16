async function media_avaliacoes(id) { /*calcula a média de avaliações de um produto*/
    let array = await criaArrayProdutos();
    let produto = array[id];
    let soma = 0;
    let qtd = 0;
    for (let avaliacao of produto.avaliacoes) {
        soma += avaliacao.nota;
        qtd++;
    }
    return soma/qtd;
}

async function get_comentarios(id) { /*retorna string com todos os comentários de um produto*/
    let array = await criaArrayProdutos();
    let produto = array[id];
    let todos_comentarios = "<br/>";

    for (let comentario of produto.avaliacoes) {
        todos_comentarios += `${comentario.comentário} - ${comentario.nome}<br/>`;
    }
    return todos_comentarios;
}

async function criaProduto(i) { /*cria produto na página de produto*/
    try {
        let array = await criaArrayProdutos(); //cria array de produtos

        //adicionando imagem
        let imagem = document.getElementById("img-produto");
        imagem.innerHTML += `<img src="${array[i].caminho}" alt="${array[i].nome}">`;

        //adicionando nome
        let nome = document.getElementById("nome-produto");
        nome.innerHTML = `${array[i].nome}`;
        
        //adicionando preço
        let preco = document.getElementById("preco-produto");
        preco.innerHTML = `Preço: R$ ${array[i].preço},00`; //Ver se a ç vai alterar o código ou causar erros !!!
        
        //adicionando descrição
        let descricao = document.getElementById("descricao-produto");
        descricao.innerHTML = `Descrição: ${array[i].descricao}`;
        
        //adicionando avaliação
        let avaliacao = document.getElementById("avaliacao-produto");
        let media_avaliacao = await media_avaliacoes(i);
        avaliacao.innerHTML = `Avaliação: ${media_avaliacao}`;

        //adicionando comentários
        let comentarios = document.getElementById("comentarios-produto");
        let todos_comentarios = await get_comentarios(i);
        comentarios.innerHTML = `Comentários: ${todos_comentarios}`;

    } catch (error) {
        console.error("Erro ao preencher dados do produto no HTML:", error);
    }
}

window.addEventListener("load", async function () {
    const id = new URL(window.location.href).searchParams.get('id');

    produto = await buscaPorId(id);

    console.warn(id)
    console.warn(produto)

    criaProduto(id);
});
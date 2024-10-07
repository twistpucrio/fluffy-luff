//CRUD do json (adição de produtos no carrinho e no favoritos, remoção de produtos no carrinho e no favoritos)

function  quantidade_elementos(lista){ //função para contar elementos de uma lista (exemplo: carrinho, produtos e favoritos).
    let qtd = 0;
    for (let elemento of lista) {
        qtd ++;
    }
    return qtd;
}

const fs = require('fs');

//função para carregar o JSON de um arquivo
function carregarJSON(caminho) {
    return JSON.parse(fs.readFileSync(caminho, 'utf8'));
}

//função para salvar o JSON em um arquivo
function salvarJSON(caminho, data) {
    fs.writeFileSync(caminho, JSON.stringify(data, null, 2), 'utf8');
}

//função para adicionar produto a uma lista (exemplo: carrinho, produtos e favoritos).
function adicionar_lista(produto) {
    const produtos = carregarJSON('produtos.json'); //carrega produtos
    let carrinho = carregarJSON('carrinho.json');   //carrega o carrinho

    //busca o produto pelo nome
    const produto = produtos.produtos.find(p => p.nome === produto);

    if (produto) {
        //verifica se o produto já está no carrinho
        const produtoNoCarrinho = carrinho.find(p => p.nome === produto);
        
        if (produtoNoCarrinho) {
            produtoNoCarrinho.quantidade += 1; //aumenta a quantidade se já existir no carrinho
        } else {
            //adiciona o produto ao carrinho com quantidade 1
            carrinho.push({ ...produto, quantidade: 1 });
        }

        salvarJSON('carrinho.json', carrinho); //salva o carrinho atualizado
        console.log(`Produto ${produto} adicionado ao carrinho.`);
    } else {
        console.log(`Produto ${produto} não encontrado.`);
    }
}

//função para remover produto de uma lista (exemplo: carrinho, produtos e favoritos).
function remover_elemento(produto) {
    let carrinho = carregarJSON('carrinho.json');

    //filtra o produto do carrinho
    const novoCarrinho = carrinho.filter(p => p.nome !== produto);

    if (novoCarrinho.length !== carrinho.length) {
        salvarJSON('carrinho.json', novoCarrinho); // Salva o carrinho atualizado
        console.log(`Produto ${produto} removido do carrinho.`);
    } else {
        console.log(`Produto ${produto} não encontrado no carrinho.`);
    }
}

//função para visualizar o carrinho
function visualizar_lista() {
    const carrinho = carregarJSON('carrinho.json');
    console.log('Carrinho de compras:', carrinho);
    return carrinho;
}

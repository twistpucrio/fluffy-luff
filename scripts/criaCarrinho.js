async function criaCarrinho() {
    try {
        let array = await criaArrayCarrinho(); // Aguarda a promessa ser resolvida
        let mein = document.getElementById("main");
        for (let i = 0; i < array.length; i++) {
            // Criando uma nova div para cada produto

            mein.innerHTML += `<a href="./carrinho-de-compras.html?id=${i}">
            <div id="produto-${i}" class="produto">
                <img src="${array[i].caminho}" alt="${array[i].nome}">
                <p>${array[i].nome}</p>
                 <button class="quantidadeBtn" onclick="mudarQuantidade(-1)">-</button>
                    <input type="number" id="quantidadeInput" value="1" min="1">
                    <button class="quantidadeBtn" onclick="mudarQuantidade(1)">+</button>
                  
                  <p class="preco"> R$: xx,xx </p>
            
            `;
        }
    } catch (error) {
        console.error("Erro ao criar os elementos:", error);
    }
}


window.addEventListener("load", function() {
    criaCarrinho();
});


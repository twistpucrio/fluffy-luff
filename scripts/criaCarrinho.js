async function criaCarrinho() {
    try {
        let array = await criaArrayCarrinho(); 
        let mein = document.getElementById("main");
        main.innerHTML = '';
        
                for (let i = 0; i < array.length; i++) {
            
            mein.innerHTML += `
            <a href="./carrinho-de-compras.html?id=${i}">
             </a>
                <div id="produto-${i}" class="produto">
                    <img src="${array[i].caminho}" alt="${array[i].nome}">
                    <p>${array[i].nome}</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="number" id="quantidadeInput-${i}" value="1" min="1"
                        onchange="atualizarPreco(${i}, ${array[i].preço})">

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p class="preco" id="preco-${i}"> R$: ${array[i].preço.toFixed(2)} </p>

           </div>`;
            
        }
    } catch (error) {
        console.error("Erro ao criar os elementos:", error);
    }
}


window.addEventListener("load", function() {
    criaCarrinho();
});

function atualizarPreco(index, precoBase) {
    // Captura a quantidade a partir do input
    let quantidade = parseInt(document.getElementById(`quantidadeInput-${index}`).value);

    // Calcula o novo preço com base na quantidade
    let novoPreco = precoBase * quantidade;

    // Atualiza o preço no HTML
    document.getElementById(`preco-${index}`).textContent = `R$: ${novoPreco.toFixed(2)}`;
}


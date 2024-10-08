async function criaElemento() {
    try {
        let array = await criaArrayProdutos(); // Aguarda a promessa ser resolvida
        let mein = document.getElementById("main");
        console.log(array);
        for (let i = 0; i < array.length; i++) {
            // Criando uma nova div para cada produto
            mein.innerHTML += `<div id="produto-${i}" class="produto">
                                   <img src="${array[i].caminho}" alt="${array[i].nome}">
                                   <p>${array[i].nome}</p>
                               </div> <br>`;
        }
    } catch (error) {
        console.error("Erro ao criar os elementos:", error);
    }
}

window.addEventListener("load", function() {
    criaElemento();
});

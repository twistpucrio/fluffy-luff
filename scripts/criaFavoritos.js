async function criaElemento() { /*cria elemento na página principal, produtos*/
    try {
        let array = await obterFavoritos(); // Aguarda a promessa ser resolvida
        let mein = document.getElementById("main");
        for (let i = 0; i < array.length; i++) {
            try {
            id = await buscaPorNome(array[i])
            mein.innerHTML += `<a href="./produto.html?id=${id}">
            <div id="produto-${i}" class="produto">
            <img src="${array[i].caminho}" alt="${array[i].nome}">
            <p>${array[i].nome}</p>
            
            `;} 
            catch (error) {
                console.error("Erro ao criar os elementos:", error);
            }
        }
        
    } catch (error) {
        console.error("Erro ao criar os elementos:", error);
    }
}
async function buscaPorNome(produto) {
    try {
        let array = await criaArrayProdutos()
        for (let i = 0; i < array.length; i++) {
            if (array[i].nome == produto.nome){
                return i;
            }
        }
    } catch (error) {
        console.error("Erro ao criar os elementos:", error);
}
    
}

window.addEventListener("load", function() {
    criaElemento();
});
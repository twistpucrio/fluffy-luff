
window.addEventListener("load", async function () {
    const id = new URL(window.location.href).searchParams.get('id');

    produto = await buscaPorId(id);

    console.warn(id)
    console.warn(produto)
});
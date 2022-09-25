function buscaImagem() {
    return fetch("https://dog.ceo/api/breeds/image/random/30")
        .then(function (resp) {
            return resp.json();

        });
}

buscaImagem().then(construirLista);

function construirLista(listaImg) {
    const lista = listaImg.message;
    const olListaImg = document.getElementById("lista-img");

    for (let posicao = 0; posicao < lista.length; posicao++) {
        const item = lista[posicao];
        const itemHtml = "<li><img src=\"" + item + "\"></li>";
        olListaImg.innerHTML = olListaImg.innerHTML + itemHtml;

    }

}











/*console.log(buscaImagem());


<li>
    <img scc="">
</li>*/
// =========================================
// BOTÃO "ABRIR O MANUSCRITO"
// =========================================

const botaoLer = document.getElementById("btnLer");

botaoLer.addEventListener("click", function () {

    const prefacio = document.getElementById("prefacio");

    prefacio.scrollIntoView({
        behavior: "smooth"
    });

});


// =========================================
// MENU COM DESTAQUE DA SEÇÃO ATUAL
// =========================================

const secoes = document.querySelectorAll("section[id]");
const linksMenu = document.querySelectorAll(".menu a");

window.addEventListener("scroll", function () {

    let secaoAtual = "";

    secoes.forEach(function (secao) {

        const distanciaTopo = secao.offsetTop;

        if (window.scrollY >= distanciaTopo - 180) {
            secaoAtual = secao.getAttribute("id");
        }

    });

    linksMenu.forEach(function (link) {

        link.classList.remove("ativo");

        if (
            link.getAttribute("href") === "#" + secaoAtual
        ) {
            link.classList.add("ativo");
        }

    });

});


// =========================================
// EFEITO DE ENTRADA DOS ELEMENTOS
// =========================================

const elementos = document.querySelectorAll(
    ".card, .caminho, .trofeu, .texto-prefacio"
);

const observador = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

                observador.unobserve(entrada.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function (elemento) {

    elemento.classList.add("entrada");

    observador.observe(elemento);

});


// =========================================
// ADICIONA ESTILO DINÂMICO PARA ANIMAÇÃO
// =========================================

const estiloAnimacao = document.createElement("style");

estiloAnimacao.textContent = `

    .entrada {
        opacity: 0;
        transform: translateY(25px);
        transition:
            opacity 0.8s ease,
            transform 0.8s ease;
    }

    .entrada.visivel {
        opacity: 1;
        transform: translateY(0);
    }

    .menu a.ativo {
        color: #e5c985;
        border-bottom: 1px solid #a88b52;
        padding-bottom: 4px;
    }

`;

document.head.appendChild(estiloAnimacao);

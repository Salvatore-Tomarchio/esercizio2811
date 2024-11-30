function cambiaNome() {
    document.getElementById("primoTitolo").innerText = "Il nuovo nome è Salvos Tech";
}


function cambiaColorePagina() {
    document.body.style.backgroundColor = "cadetblue";
}

function nuovoIndirizzo() {
    document.getElementById("indirizzo").innerText = "Via roma,4  Catania(CT)"
}

function modificaVis() {
    const links = document.querySelectorAll("table a");

    links.forEach(link => {
        if (link.href.includes("amazon.it")) {
            link.classList.add("amazonLink");
        }
    })
}

function aggPointerImm() {
    const images = document.querySelectorAll("table img");

    images.forEach(img => {
        img.classList.add("pointerImage");
    })
}

function randomColor() {
    const prezzi = document.querySelectorAll("table p:last-child()");
    
    function colorRandom(){
        const parole = '0123456789ABCDEF';
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += parole[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    prices.forEach(price => {
        price.style.color = colorRandom();
    })
}
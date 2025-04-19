const fields = document.querySelector('.fields');
const search = document.querySelector(".search");
const open = document.querySelector(".open");
const close = document.querySelector('.close');
const icon = document.querySelector(".fa-circle-check")
const select = document.querySelector("#status");
select.addEventListener("change", (e) => {
    switch (e.target.value) {
        case "ativo":
            icon.style.color = "#75E18A";
            break;
        case "manutencao":
            icon.style.color = "#E0590D";
            break;
        case "desativado":
            icon.style.color = "#E0180D"
            break;
    }
})

const isMobile = window.matchMedia("(max-width: 650px)")
open.addEventListener("click", () => {
    if (isMobile.matches) {
        fields.classList.add("none");
        search.classList.add("block");
        open.classList.remove("block");
        open.classList.add("none");
        close.classList.add("block");
    }

})
close.addEventListener("click", () => {
    if (isMobile.matches) {
        fields.classList.remove("none");
        search.classList.remove("block");
        open.classList.remove("none");
        close.classList.remove("block");
    }
})
isMobile.addEventListener("change", e => {
    if (!e.matches) {
        open.classList.add("none");
        close.classList.add("none");
    } else {
        open.classList.add("block");
    }
})
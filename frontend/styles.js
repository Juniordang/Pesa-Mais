const fields = document.querySelector('.fields');
const search = document.querySelector(".search");
const open = document.querySelector(".open");
const close = document.querySelector('.close');
const icon = document.querySelector(".fa-circle-check")
const select = document.querySelector("#status");
const menu = document.querySelector(".menu");
select.addEventListener("change", (e) => {
    colorSelect(e.target.value);
})
function colorSelect(status) {
    const color = {
        ativo: "#75E18A",
        manutencao: "#E0590D",
        desativado: "#E0180D"
    }
    return icon.style.color = color[status];
}
const isMobile = window.matchMedia("(max-width: 649px)")
open.addEventListener("click", () => menuStyle('add'))
close.addEventListener("click", () => menuStyle('remove'))
function menuStyle(type) {
    if (isMobile.matches) {
        fields.classList[type]("none");
        search.classList[type]("block");
        open.classList[type]("none");
        close.classList[type]("block");
    }
}
isMobile.addEventListener("change", e => {
    if (e.matches) {
        console.log("none")
        menu.classList.remove("none");
        open.classList.add("block");
        return;
    } 
    menu.classList.add("none");
})
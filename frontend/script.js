lucide.createIcons();

let inputsOption = document.querySelectorAll("#option input"),
    optionViewsButton = document.querySelector("#options_views_button"),
    selectedValue = document.querySelector("#selected_value"),
    menu = document.querySelector("#menu"),
    btnMenu = document.querySelector(".btn_menu"),
    closeMenu = document.querySelector("#close_menu"),
    select = document.querySelector(".select");

btnMenu.addEventListener('click', () => {
    closeMenu.click();
})
inputsOption.forEach((input) => {
    input.addEventListener('click', (e) => {
        selectedValue.textContent = input.dataset.label;
        const isMouseOrTouch = e.pointerType == "mouse" || e.pointerType == "touch";
        isMouseOrTouch && optionViewsButton.click();
    })
})
window.addEventListener("keydown", (e) => {
    if (!select.classList.contains("open")) return;

    if (e.key === "Escape" || e.key === " ") {
        optionViewsButton.click();
    }
})
optionViewsButton.addEventListener("input", () => {
    select.classList.toggle("open");
    if (!select.classList.contains("open")) return;

    let input = document.querySelector("#option input:checked") ||
        document.querySelector("#option input");
    input.focus();
})

async function getBalance(endpoint) {
    const url = `http://localhost:3333/${endpoint}`
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err)
    }
}
async function getById(tag) {
    const balance = await getBalance(`balance/${tag}`)
    const { id, modelo, serie, certificado, divisao, capacidade, data_calibracao, localizacao, status } = balance;
    console.log(id)
}
getById(4)


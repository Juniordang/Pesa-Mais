const changeStatusColor = () => {
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
}
changeStatusColor()
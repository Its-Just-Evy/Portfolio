var boomies = document.getElementById("Boomies");
// var axi = document.getElementById(AXI);

function showBoomies() {
    boomies.classList.remove("hidden")
    boomies.classList.add("flex")
}

function noshowBoomies() {
    boomies.classList.remove("block")
    boomies.classList.add("hidden")
}
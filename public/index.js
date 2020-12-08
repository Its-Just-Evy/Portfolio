var boomies = document.getElementById("Boomies");
var axi = document.getElementById("AXI");

function showBoomies() {
    boomies.classList.remove("hidden")
    boomies.classList.add("flex")
    axi.classList.remove("flex")
    axi.classList.add("hidden")
}

function noshowBoomies() {
    boomies.classList.remove("flex")
    boomies.classList.add("hidden")
}

function showAxi() {
    axi.classList.remove("hidden")
    axi.classList.add("flex")
    boomies.classList.remove("flex")
    boomies.classList.add("hidden")
}

function noshowAxi() {
    axi.classList.remove("flex")
    axi.classList.add("hidden")
}
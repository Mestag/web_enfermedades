let button = document.getElementById("click")
let accordion = document.getElementById("accordionFlushExample")
console.log(button.checked)
console.log("algo")

button.onclick = function() {
if (button.checked) {
    accordion.style.display="none"
    console.log("esconderse")
} else {
    accordion.style.display = "block"
    console.log("abrirse")
}
}

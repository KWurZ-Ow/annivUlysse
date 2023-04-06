let currentPage = "accueil"
let pages = ["accueil", "intro", "enigme1", "enigme2", "enigme3", "felicitations"]
let input
let validator = document.getElementById("validator")

function switchPage(page){
    pages.forEach(p => {
        document.getElementById(p).style.display = "none"
    });
    document.getElementById(page).style.display = "flex"
}

let inputValue = ""
const inputHandler = (e) => {
    let v = e.target.value
    console.log(v);
    if (v.length <= 5) {
        inputValue = v.toUpperCase()
    }
    input.value = inputValue

    if (inputValue.length == 5){
        if (inputValue == "4H7JF") {
            validator.textContent = "✅"
            document.getElementById("top").textContent = "4H7JF - •••••• - ••••••"
            document.getElementById("next").style.visibility = "visible"
        } else {
            validator.textContent = "❌"
        }
    } else {
        validator.textContent = "👀"
    }
}

function findInput() {
    validator = document.getElementById("validator")
    input = document.getElementById("input")
    input.addEventListener('input', inputHandler)
}
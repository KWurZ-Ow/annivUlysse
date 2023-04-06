let currentPage = "accueil"
let pages = ["accueil", "intro", "enigme1", "enigme2", "enigme3", "felicitations"]
let answers = ["4H7JF", "8NN7C", "VBH0W"]
let answersGlobal = ["4H7JF - •••••• - ••••••", "4H7JF - 8NN7C - ••••••", "4H7JF - 8NN7C - VBH0W"]
let input
let validator

function switchPage(pageId){
    currentPage = pageId
    pages.forEach(page => {
        document.getElementById(page).style.display = "none"
    });
    document.getElementById(pages[pageId]).style.display = "flex"
    if (currentPage == 5) {
        document.getElementById(pages[pageId]).classList.add("tada")
        setTimeout(() => {
            document.getElementById(pages[pageId]).classList.remove("tada")
        }, 6000);
    }
}

let inputValue = ""
const inputHandler = (e) => {
    let v = e.target.value
    console.log(v);
    if (v.length <= 5 && (/[A-Z0-9]$/gi.test(v) || v == "")) {
        inputValue = v.toUpperCase()
    }
    input.value = inputValue

    if (inputValue.length == 5){
        if (inputValue == "JBSHO" && currentPage == 4){
            validator.textContent = "👆"
            document.getElementById("clue").textContent = "\"Comme tu peux le voir, il y a une lettre en trop, enlève la plus Simple\""
        }else if (inputValue == "JBHOW" && currentPage == 4) {
            validator.textContent = "👆"
            document.getElementById("clue").textContent = "\"Hum, je n'aime pas le Jaune, met du bleu dedans\""
        }else if (inputValue == "VBHOW" && currentPage == 4) {
            validator.textContent = "👆"
            document.getElementById("clue").textContent = "\"Beaucoup mieux ! Mais il nous faut aussi un chiffre. Remplace une lettre par son chiffre le plus proche\""
        } else if (inputValue == answers[currentPage-2]) {
            validator.textContent = "✅"
            document.getElementById(`top${currentPage}`).textContent = answersGlobal[currentPage-2]
            document.getElementById(`next${currentPage}`).style.visibility = "visible"
            input.blur()
        } else {
            validator.textContent = "❌"
        }
    } else {
        validator.textContent = "👀"
    }
}

function findInput() {
    validator = document.getElementById(`validator${currentPage}`)
    input = document.getElementById(`input${currentPage}`)
    input.addEventListener('input', inputHandler)
}
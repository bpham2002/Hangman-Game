var theme = ["Masha", "Anna", "Brian", "Madona", "Maui", "John", "Mathew", "The Lord of the Rings", "The Notebook", "Crime and Punishment"];
document.getElementById("startGame").innerHTML = "Please Press Start to Play!";

var selWord
var viewWord = []
var randWord = []
var attempts

function startGame() {
    selWord = theme[Math.floor(Math.random() * 10)]
    console.log(selWord)
    randWord = selWord.split("")
    var hidWord = []
    attempts = 0

    for (var i = 0; i < selWord.length; i++) {
        if (selWord[i] !== " ") {
            hidWord[i] = selWord[i].replace(selWord[i], "_")
        } else {
            hidWord[i] = ' '
        }
    }
    // document.getElementById("word").innerHTML = "Current Word: " + viewWord
    viewWord = hidWord
    display()
    document.getElementById("user-guess").value = ""
    document.getElementById("your-chances").innerHTML = "Your chances: " + (16 - attempts)
}

function display() {
    var span = document.getElementById("word").innerHTML = "Current Word: "
    for (var i = 0; i < selWord.length; i++) {
        var view = document.createElement("SPAN")
        var viewnode = document.createTextNode(viewWord[i] + " ")
        view.appendChild(viewnode)
        document.getElementById("word").appendChild(view)
    }
}

function userGuess(event) {
    var temp = []
    var userText = event.key;
    for (i = 0; i < selWord.length; i++) {
        var pos = selWord[i].toLowerCase().search(userText)
        if (pos < 0) {
            temp[i] = selWord[i].replace(selWord[i], "_")
        } else {
            temp[i] = selWord[i]
        }
        if (temp[i] !== "_") {
            viewWord[i] = temp[i]
        } else if (selWord[i] === " ") {
            viewWord[i] = ' '

        } else {
            viewWord[i] = viewWord[i]
        }
    }
    attempts += 1
    document.getElementById("your-chances").innerHTML = "Your chances: " + (16 - attempts)
    display()
    check()

}

function check() {
    var isEqual = true
    for (var i = 0; i < viewWord.length; i++) {
        if (viewWord[i] !== randWord[i]) {
            isEqual = false
        }
    }
    if ((isEqual) && (attempts <= 15)) {
        display()
        window.alert("The word is: " + selWord + " " + "YOU WIN!")
        startGame()
    } else if (attempts > 15) {
        window.alert("SORRY YOU LOSE!")
        startGame()
    }
}
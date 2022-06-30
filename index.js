// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true
let player1Name = "";
let player2Name = "";
let playersNames = []

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const playersNamesLocalStorage = JSON.parse(localStorage.getItem("playersNames"))
let errorMessage = document.getElementById("error-message")
// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
   
}

function showRollButton() {
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
}


/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function () {
   
    const randomNumber = Math.floor(Math.random() * 6) + 1
    if (player1Name == "") {
        player1Name = document.getElementById("inputName1").value
    }
    if (player2Name == "") {
        player2Name = document.getElementById("inputName2").value

    }
    if (player1Name == "" && player2Name == "") {

        errorMessage.textContent = "Please add player names on the input fields"
    } else if(player1Name != "" && player2Name != "") {
      
        errorMessage.textContent = ""

        if (player1Turn) {
            player1Score += randomNumber
            player1Scoreboard.textContent = player1Score
            player1Dice.textContent = randomNumber
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            message.textContent = player1Name + " has played"

        } else {
            player2Score += randomNumber
            player2Scoreboard.textContent = player2Score
            player2Dice.textContent = randomNumber
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            message.textContent = player2Name + " has played"
            // player2Name=""

        }


        if (player1Score >= 20) {
            message.textContent = player1Name + " won the game 🥳"
            showResetButton()
        } else if (player2Score >= 20) {
            message.textContent = player2Name + " won the game 🎉"
            showResetButton()
        }
        player1Name.value=""
        player2Name.value=""

        player1Turn = !player1Turn
    }
})

resetBtn.addEventListener("click", function () {
    player1Score = 0
    player2Score = 0
    player2Scoreboard.textContent = player2Score
    player1Scoreboard.textContent = player1Score
    player2Dice.textContent = 0
    player1Dice.textContent = 0
    message.textContent = "Player 1 Turn"
    document.getElementById("inputName1").value = ""
    document.getElementById("inputName2").value = ""
   
    showRollButton()
    console.log(player1Score)
})



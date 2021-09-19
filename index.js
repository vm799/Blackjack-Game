

// plan of action------------------

// 1. when the start game button is clicked
// 2. a random card is generated
// 3. this is displayed in the Cards element
// 4. and displayed in total score
// 5. if score is <21 the next card button is still active
// 6. change the directions to Do you want another card?
// 7. if new card button is clicked and 
// 7a. score = 21 change directions to "KER-CHING YOU WON THE JACKPOT!!"
// 7b. if score >21 change to "You are BUST! Better luck next time"


// Assign Variables needed----------

let directionsEl = document.getElementById("directions-el")
let cardsEl = document.getElementById("cards-el")
let scoreEl = document.getElementById("score-el")
let currentPotEl = document.getElementById("currentPot-el")

currentPotEl.textContent = "V" + " : " + "£2000"

//Set start state of game variables------

let cards = []

let isAlive = false
let hasBlackJack = false
let sum = 0

// Create functions-----------------


//create a function that takes a random number to 13, assigning anything larger than 10 to equal 10 and ace equalling to 11.

function randomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber === 1) {
        return 11 
    }  else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}



//  -create a start game function that lets the game state change to active
//  -assign firstcard and second card to randomly generated card
// -create the array
// - assign the sum
// -render the game function

function startGame() {
    
    isAlive = true
   let firstCard = randomCard()
   let secondCard = randomCard()
   cards = [firstCard, secondCard]
   sum += firstCard + secondCard
   document.getElementById("gameStart").style.display ="none"
   renderGame()
}   
    
// create render game function
//- update the cards variable with the new randomly drawn card
//log thro the cards array and display the individual items in the cards section
//- use  if else statements for 3 states
//- new, won, lost
//- update live state
//-update the instructions

function renderGame() {
    document.getElementById("gameEnd").style.display ="block"

     for (let i=0; i<cards.length; i++) {
         cardsEl.textContent += cards[i] + "  "
     }
   
    scoreEl.textContent += sum + "  "

    if (sum === 21) {
        directionsEl.textContent = "You hit the JACKPOT!!"
        isAlive = false
        hasBlackJack = true
    } else if (sum < 21){
        directionsEl.textContent = "Would you like another card?"
        isAlive = true
        hasBlackJack = false
    } else if (sum > 21) {
        directionsEl.textContent = "BUSTED! Better luck next time"
        isAlive = false
        hasBlackJack = false
document.getElementById("gameStart").style.display ="block"
document.getElementById("gameEnd").style.display ="none"
// scoreEl.textContent = "Total score: " + "  " + 0
// cardsEl.textContent = "Cards: " + "  "  + 0
startGame()
    }
}

//create a function that holds 2 key values to be true
//only then can another card be generated and appended to the cards array and added to sum variable 
// then rendergame again

function newCard() {
    
    if (isAlive === true && hasBlackJack === false) {
    let card = randomCard()
    sum += card
    cards.push(card)
    renderGame()
}
}






let cards = []
let sum = 0
let isAlive = false
let hasBlackjack = false
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message")
let startGameBtn = document.getElementById("start-game-btn")
let newCardBtn = document.getElementById("new-card-btn")
let gameRestartBtn = document.getElementById("game-restart-btn")
let choiceEl = document.getElementById("choice")
let gameStartedEl = document.getElementById("game-started")
let redBtn = document.getElementById("red-btn")
let blueBtn = document.getElementById("blue-btn")
let blueBtnMessageEl = document.getElementById("blue-btn-message")

redBtn.addEventListener('click', () => {
    choiceEl.classList.remove('choice')
    choiceEl.classList.add('choice-removed')
    gameStartedEl.classList.remove('game-started')
    gameStartedEl.classList.add('game-started-added')
    messageEl.innerText = "Welcome to the rabbit hole of Blackjack"
})

blueBtn.addEventListener('click', () => {
    blueBtnMessageEl.innerText = "The story ends, you can believe whatever you want to beleive" 
})

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1
    if(randomCard > 10){
        randomCard = 10
    }
    if(randomCard === 1){
        randomCard = 11
    }
    return randomCard
}

startGameBtn.addEventListener('click', () =>  {
    isAlive = true
    hasBlackjack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
    startGameBtn.disabled = true
})


function renderGame(){
    cardsEl.innerText = "Cards : " + cards
    sumEl.innerText = "Sum : " + sum
    if(sum === 21){
        hasBlackjack = true
        isAlive = false
        messageEl.innerText = "You got a Blackjack."
    }
    if(sum < 21){
        hasBlackjack = false
        isAlive = true
        messageEl.innerHTML = "Draw a new card"
    }

    if(sum > 21){
        hasBlackjack = false
        isAlive = false
        messageEl.innerHTML = "You are out of game."
    }
}

newCardBtn.addEventListener('click', () => {
    if(!hasBlackjack && isAlive){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
})

startGameBtn.addEventListener('click', () => {
        gameRestartBtn.addEventListener('click', () => {
            isAlive = false
            hasBlackjack = false
            cards = []
            sum = ""
            cardsEl.innerText = "Cards : " + cards
            sumEl.innerText = "Sum : " + sum
            messageEl.innerText = "Want to play again?"
            startGameBtn.disabled = false
        })
        
    })
    
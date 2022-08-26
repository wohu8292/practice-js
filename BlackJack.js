let firstcard=getrandomcard()
let secondcard=getrandomcard()
let cards=[firstcard, secondcard]
let sum=firstcard+secondcard
let hasBlackjack=false
let isAlive=true
let message=" "
let messenger=document.getElementById("mes")
let counting=document.getElementById("card")
let summing=document.getElementById("sum")

function startGame(){
    renderGame()
}

function renderGame(){
    counting.textContent="Cards: "
    for (let i=0;  i<cards.length; i++){
        counting.textContent+=cards[i]+" "
    }
    summing.textContent="Sum: " + sum
    if(sum<=20){
        message="Do you want to draw new card?"
    }
    else if(sum===21){
        message="You've got blackjack!"
        hasBlackjack=true
    }
    else{
        message="You're out of the game."
        isAlive=false
    }
    messenger.textContent=message
}

function newCard(){
    let card=getrandomcard()
    sum+=card
    cards.push(card)
    renderGame()
}

function getrandomcard(){
    let rn=Math.floor(Math.random()*13)+1
    if (rn>10){
        return 10
    }
    else if (rn===1){
        return 11
    }
    else {
        return rn
    }
}
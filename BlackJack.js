
let cards=[]
let sum=0
let hasBlackjack=false
let isAlive=false
let message=" "
let messenger=document.getElementById("mes")
let counting=document.getElementById("card")
let summing=document.getElementById("sum")
let playerEl=document.getElementById("player_el")
let player= {
    name:"james",
    chips:200,
    sayHello: function(){
        console.log("heisann!")
    }
}

player.sayHello()

playerEl.textContent=player.name +": $" + player.chips


function startGame(){
    isAlive=true
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()
    cards=[firstcard, secondcard]
    sum=firstcard+secondcard
    renderGame()
}

function renderGame(){
    counting.textContent="  : "
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
    if (isAlive===true && hasBlackjack===false){
        let card=getrandomcard()
        sum+=card
        cards.push(card)
        renderGame()
    }
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
let num=document.getElementById("pop")
console.log(num)
let count=0
let saving=document.getElementById("saved")

function counter_plus(){
    count=count+1
    num.innerText=count
}

function counter_minus(){
    count=count-1
    num.innerText=count
}

function record(){
    let counterStr = count + " : "
    saving.textContent += counterStr
    num.textContent=0
    count=0
}
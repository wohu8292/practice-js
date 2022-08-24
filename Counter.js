let num=document.getElementById("pop")
console.log(num)
let count=0

function counter_plus(){
    count=count+1
    num.innerText=count
}

function counter_minus(){
    count=count-1
    num.innerText=count
}
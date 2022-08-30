const btn_El=document.getElementById("btn_el")
let myLeads=[]
const input_El=document.getElementById("input_el")

btn_El.addEventListener("click",function(){
    myLeads.push("www.awsomelead.com")
    console.log(myLeads)
})
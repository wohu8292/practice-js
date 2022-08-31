const btn_El=document.getElementById("btn_el")
const input_El=document.getElementById("input_el")
const ul_El=document.getElementById("ul_el")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const delete_El=document.getElementById("delete_el")
let myLeads=[]
let oldLeads=[] 

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

btn_El.addEventListener("click",function(){
    myLeads.push(input_El.value)
    input_El.value=""
    render(myLeads)
})

delete_El.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)   
})

// for (let i=0; i<myLeads.length; i++){
//     ul_El.innerHTML+="<li>"+myLeads[i]+"</li>"
// }



function render(leads){
    let listItems=""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ul_El.innerHTML=listItems
}
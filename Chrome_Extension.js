const btn_El=document.getElementById("btn_el")
const input_El=document.getElementById("input_el")
const ul_El=document.getElementById("ul_el")
let myLeads=[]

btn_El.addEventListener("click",function(){
    myLeads.push(input_El.value)
    input_El.value=""
    renderLeads()
})

// for (let i=0; i<myLeads.length; i++){
//     ul_El.innerHTML+="<li>"+myLeads[i]+"</li>"
// }



function renderLeads(){
    let listItems=""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ul_El.innerHTML=listItems
}
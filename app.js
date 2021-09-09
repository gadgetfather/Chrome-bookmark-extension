let inputBtn = document.querySelector("#input-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
let tabBtn = document.getElementById("tab-btn")





let myLeads = []

// for keeping links on page
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads= leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
    
    myLeads.push(tab[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
      });
   
})

// delete button
deleteBtn.addEventListener("click",function (){
    localStorage.clear()
    myLeads= []
    render(myLeads)
})
// save button
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    render(myLeads)
    inputEl.value=""
    console.log(leadsFromLocalStorage)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    

})

// for rendering things on screen
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li><a target="blank" href="${leads[i]}">${leads[i]}</li>`

    }
    ulEl.innerHTML = listItems

}


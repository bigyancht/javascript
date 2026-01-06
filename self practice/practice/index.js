let a=0
let countEl = document.getElementById("count-el")

function increment() {
    console.log("The button was clicked")
    a=a+1
countEl.innerText = a 
}

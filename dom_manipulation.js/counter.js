let counter = 0

function incrementCounter(){
    counter++
    document.querySelector("#counter").textContent = counter
}

function decrementCounter(){
    counter--
    document.querySelector("#counter").textContent = counter
}
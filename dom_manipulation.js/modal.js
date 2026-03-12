document.querySelector('#openModal').addEventListener("click", function(){
    document.querySelector("#modal").style.display = 'flex'
})

document.querySelector('#closeModal').addEventListener("click", function(){
    document.querySelector("#modal").style.display = 'none'
})

//if press out of the modal
document.querySelector('#modal').addEventListener('click', function(e){
    if(e.target === this){
        this.style.display = 'none'
    }
})

//if press esc key
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        document.querySelector('#modal').style.display = 'none'
    }
})
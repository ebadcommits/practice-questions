const button = document.querySelector('#topBtn')

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 200){
        button.style.display = 'block'
    }
    else{
        button.style.display = 'none'
    }
})

button.addEventListener('click', function(){
    window.scrollTo({top : 0, behavior : "smooth" })
    button.style.display = 'none'
})
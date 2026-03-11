document.querySelector('#togglePass').addEventListener('click', function(){
    let input = document.querySelector('#password')
    let btn = document.querySelector('#togglePass')

    if(input.type === 'password'){
        input.type = 'text'
        btn.textContent = 'hide'
    }
    else {
        input.type = 'password'
        btn.textContent = 'show'
    }
})
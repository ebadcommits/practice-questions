let btn = document.querySelector('#toggleButton')
let para = document.querySelector('#myParagraph')
btn.addEventListener('click', function(){
    if(para.style.display === 'none'){
        para.style.display = 'block'
    }    else{
        para.style.display = 'none'
    }
})
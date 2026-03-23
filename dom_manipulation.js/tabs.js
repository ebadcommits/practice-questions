const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', function(){
        tabs.forEach(t => t.classList.remove('active'))
        contents.forEach(c => c.classList.remove('active'))

        tab.classList.add('active')

        const tabdata = tab.dataset.tab

        document.querySelector(`.content[data-content = "${tabdata}"]`).classList.add('active')
    } )
})
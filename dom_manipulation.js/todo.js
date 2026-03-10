document.querySelector('#addTodo').addEventListener('click', function(){
    const todoinput = document.querySelector('#newTodo')
    const newtodo = todoinput.value.trim()

    if(newtodo !== ''){
        const todoList = document.querySelector('#todoList')
        const newtodolist = document.createElement('li')
        newtodolist.textContent = newtodo

        const delbtn = document.createElement('button')
        delbtn.textContent = 'delete'

        delbtn.addEventListener('click', function(){
            newtodolist.remove()
        })

        todoList.appendChild(newtodolist)
        newtodolist.appendChild(delbtn)

        todoinput.value = ''
    }
})
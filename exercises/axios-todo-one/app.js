let form = document.addTodos

axios.get("https://api.vschool.io/strauss/todo/").then((response) => {
    console.log(response.data)
    displayTodos(response.data)
})

function displayTodos(todos){
    todos.forEach((todo) => {
        let parentDiv = document.createElement("div")
        let titleH2 = document.createElement("h2")
        let descP = document.createElement('p')
        titleH2.innerText = todo.title
        descP.innerText = todo.description
        parentDiv.appendChild(titleH2)
        parentDiv.appendChild(descP)
        document.getElementById("main").appendChild(parentDiv)

    });
}

form.addEventListener("submit", function(event){
    event.preventDefault()

    let title = form.title.value
    let description = form.description.value


    const newTodo = {
        title,
        description
    }

    postTodo(newTodo)

})

const postTodo = (newTodo) => {
    axios.post('https://api.vschool.io/strauss/todo/', newTodo).then(response => {
        displayTodos([response.data])
})
}
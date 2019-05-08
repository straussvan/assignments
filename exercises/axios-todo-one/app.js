axios.get("https://api.vschool.io/[strauss]/todo/").then(() => {
    console.log(response.data)
    display.todos(response.data)
})

function displayTodos(todos){
    todos.forEach((todos) => {
        let parentDiv = document.createElement("div")
        let titleH2 = document.createElement("h2")
        titleH2.innerText = todo.title
        parentDiv.appendChild(titleH2)
        document.getElementById("main").appendChild(parentDiv)

    });
}
const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList"),
toDoFinish = document.querySelector(".js-toDoFinish");

function init() {
    loadToDos();
}
init();
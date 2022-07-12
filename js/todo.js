const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// const savedToDos = localStorage.getItem(TODOS_KEY);
const TODOS_KEY = "toDoArray";
let toDoArray = []; //todos 매번 localstorage를 빈 문자열로 초기화할 수 없으니 let으로 변경

//toDoArray를 array로 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray)); 
}

function deleteToDo(event) {
    const buttonLi = event.target.parentElement;
    buttonLi.remove();
    toDoArray = toDoArray.filter((toDo) => toDo.id !== parseInt(buttonLi.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "🙅🏻"
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button); 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDoArray.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);



if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDoArray = parsedToDos; //toDoArray교체
    parsedToDos.forEach(paintToDo);
}

//filter 함수는 true 만  return한다.
const new_todo = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const destroy = document.querySelectorAll(".destroy");


function ToDoCreat(){
  if(new_todo.value == ""){

  }else{
    todoList.innerHTML +=
    `<li>
      <div class="view">
        <input class="toggle" type="checkbox">
        <label>${new_todo.value}</label>
        <button class="destroy"></button>
      </div>
    </li>`
  }
  new_todo.value = ""
}  
  

// destroy.forEach((data), () =>{
  
// })


new_todo.addEventListener('keypress',(e)=>{ 
  if(e.keyCode == 13){
    ToDoCreat()
  }
})
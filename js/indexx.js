const new_todo = document.querySelector(".new-todo")
const todoList = document.querySelector(".todo-list")

function creatodo() {
  todoList.innerHTML += 
  `<li>
  <div class = "view">
  <input class= "toggle" type="checkbox">
  <label>${new_todo.value}</label>
  <button class= "destroy"></button>
  </div>
  </li>`
  new_todo.value = "";
}


console.log(new_todo);


new_todo.addEventListener('keypress',(e)=>{
  if(new_todo.value == ""){
    
  }else{
    creatodo();
    Deltodo();
  }
})

function Deltodo(){
  const destroy = document.querySelectorAll(".destroy")
  destroy.forEach(data => {
    data.addEventListener('click' , ()=>{
      data.parentNode.parentNode.remove();
    })
  });
}

Deltodo();
// creatodo();
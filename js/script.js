const todoapp = document.querySelector(".todoapp");
const new_todo = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const checkbox = document.querySelectorAll(".toggle");
const filters = document.querySelector(".filters");
const completed_filter = filters.lastChild;
const toggleAll = document.querySelector(".toggle-all");
console.log(todoapp);
console.log(todoapp.classList);
console.log([...todoapp.classList].includes('todoapp1'));
console.log([...todoapp.classList].includes('todoapp3'));

// todoapp.addEventListener('click', function(event) {
//   const target = event.target;
//   const classList = [...target.classList];

//   if (classList.includes('destroy')) {
//     event.target.parentNode.parentNode.remove();
//   }

//   if (classList.includes('toggle')) {
//     console.log('toggle');
//   }
// });

function ToDoCreat() {
  if (!new_todo.value.trim()) {
    alert("입력하세요.")
  } else {
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

function delLi() {
  const destroy = document.querySelectorAll(".destroy");
  destroy.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentNode.parentNode.remove();
    })
  })
}


function check() {
  const $checkBox = document.querySelectorAll(".toggle");
  $checkBox.forEach(toggleInput => {
    
    toggleInput.addEventListener('click', (event) => {
      // console.log(event);
      // console.log(event.target);

      // toggleInput.parentNode.parentNode.classList.toggle('completed');
    })
  })
}




new_todo.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    ToDoCreat();
    delLi();
    // check();
    console.log(e);
  }
});

check();

// toggle_all.addEventListener('click' , () =>{
//   document.querySelectorAll(".toggle").forEach(toggle => {
//     // toggle.
//   });
// })


// console.lo`g(toggle_all);

// window.addEventListener('hashchange',()=>{
//   Array.from(filters.children).forEach(filterItem => {
//     console.log();
//     filterItem.childNodes[1].hash === window.location.hash ? filterItem.childNodes[1].classList.add('selected') :filterItem.childNodes[1].classList.remove('selected') 

//   });
// })   completed입니다


// checkbox.forEach(data => {
//   data.addEventListener('click',()=>{
//     console.log(data);
//   })
// });

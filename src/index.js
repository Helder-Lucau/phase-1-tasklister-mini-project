document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
  })
});

function listToDo(){

}

function listDelete(e){
  e.target.parentNode.remove()
}

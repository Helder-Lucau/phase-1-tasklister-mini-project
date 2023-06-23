document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
    form.addEventListener('submit', (e) => {
    e.preventDefault()
    toDoList(document.getElementById('new-task-description').value)
    form.reset()
   })
});
// function to add tasks to the list 
 function toDoList(task){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', listDelete)
  btn.textContent = 'x'
  li.textContent = `${task}`
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}
// function to delete tasks from the list 
function listDelete(e){
  e.target.parentNode.remove()
}

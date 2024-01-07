document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

  let newTodo = event.target['new-task-description'].value;
    console.log(newTodo);
    Todo(newTodo);
    form.reset();
  });
});

function Todo(todo) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  li.addEventListener('mouseover', () => setColor(li, 'Urgent')); // Example priority value
  btn.innerText = 'x';
  li.innerHTML = `${todo} `; // Example priority value
  li.appendChild(btn);

  document.querySelector('#tasks').appendChild(li);
}

function setColor(li, priority) {
  if (priority === 'Urgent') {
    li.style.color = "#cccfffggg";
  } else if (priority === 'Less Urgent') {
    li.style.color = "green";
  }
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
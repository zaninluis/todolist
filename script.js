const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const list = document.querySelector(".list-tasks");

let listItens = [];

function addTasks() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa antes de adicionar!");
    return;
  }

  listItens.push({
    task: taskText,
    checked: false,
  });

  input.value = "";

  showTasks();
}

function showTasks() {
  let newLi = "";
  listItens.forEach((item, index) => {
    newLi += `<li class="task ${item.checked && "done"}">
        <img src="img/checked.png" alt="check" onclick="checkTask(${index})">
        <span>${item.task}</span>
        <img src="img/trash.png" alt="delete" onclick="deleteTask(${index})">
      </li>`;
  });

  list.innerHTML = newLi;

  localStorage.setItem("list", JSON.stringify(listItens));
}

function checkTask(index) {
  listItens[index].checked = !listItens[index].checked;
  showTasks();
}

function deleteTask(index) {
  listItens.splice(index, 1);
  showTasks();
}

function loadTasks() {
  const taketasks = localStorage.getItem("list");
  listItens = JSON.parse(taketasks);

  if (listItens) {
    listItens = JSON.parse(taketasks);
  }

  showTasks();
}
button.addEventListener("click", addTasks);

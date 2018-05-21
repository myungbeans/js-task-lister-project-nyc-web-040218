document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  const listDiv = document.getElementById("app-content");


  const createListForm = document.querySelector('#create-list-form');
  createListForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let listTitle = document.querySelector('#new-list-title').value;
    new List(listTitle);
    List.prototype.render(createTaskFormTemplate, listDiv, List.prototype.dropdownOptionsToHTML);
    // List.prototype.render(displayListTitle, listDiv, List.prototype.listTitleBucket);
  });

  const createTaskForm = document.querySelector('#create-task-form');
  if (createTaskForm){
    createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let taskDescription = document.querySelector('#new-task-description').value;
    let taskPriority = document.querySelector('#new-task-priority').value;
    // let listId = document.querySelector()
    })
  };



  const createTaskFormTemplate =
    `
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">
          
        </select>
    
        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">
    
        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
    `;

  const displayListsAndTasks = 
    `<div id="lists">
      <div>
        <h2>

        </h2>

        
      </div>
    </div>`

  const displayListTitle = 
  `<span id="list-title"></span>
  <button data-title="" class="delete-list">
    X
  </button>`;

  const displayTasks = 
    `<ul>
      <li>
        Task: <span id="task-name"></span>
        <button data-list-title="=" data-task-name="" class="delete-task">
          X
        </button>
      <br>
        Priority: <span id="task-priority"></span>
      </li>
    </ul>`;
});
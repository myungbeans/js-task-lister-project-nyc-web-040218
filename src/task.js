let taskId = 0;
let store = {tasks:[]};

class Task {
  constructor(listId, description, priority){
    this.id = ++taskId;
    this.listId = listId;
    this.description = description;
    this.priority = priority;
    store.tasks.push(this);
  }

  all(){
    return store.tasks;
  }

  taskToHTML(){
    for (let task of store.tasks){
      
    }
  }
}

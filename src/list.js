store = {lists:[]};

let listId = 0;

class List {
  constructor(title) {
    this.title = title;
    this.id = ++listId;
    store.lists.unshift(this);
  }

  all(){
    return store.lists;
  }

  dropdownOptionsToHTML(){
    for(let list of store.lists){
      let option = document.createElement(`option`);
      option.value = `${list.id}`;
      option.innerHTML = `${list.title}`;
      const parent = document.getElementById(`parent-list`);
      parent.appendChild(option);
    }
  }

  listTitleBucket(){
    console.log(`hi`);
  }



  render(template, node, htmler) {
    node.innerHTML = template;
    htmler();
  }
};

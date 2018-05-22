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
      option.value = `${list.title}`;
      option.innerHTML = `${list.title}`;
      const parent = document.getElementById(`parent-list`);
      parent.appendChild(option);
    }
  }

  listTitleBucket(){
    console.log(`hi`);
  }

  parser(template) {
    const parser = new DOMParser();
    let stringToDOM = parser.parseFromString(template, 'text/html');
    return stringToDOM.body.firstChild;
  }

  renderForm(template, node, htmler) {
    node.replaceChild(this.parser(template), node.firstChild);
    htmler();
  }

  renderList(template, node, htmler) {
    node.append(this.parser(template));
    let title = document.querySelector(`#lists > div:nth-child(${this.id}) > h2 > span`);
    title.id = this.title;
    title.innerHTML = this.title;
    htmler();
  }
};

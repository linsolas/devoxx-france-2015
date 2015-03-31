import {Component, Template, bootstrap, For, If} from 'angular2/angular2';

@Component({
  selector: 'todo-app'
})
@Template({
  url: 'templates/todo.html?' + +new Date(),
  directives: [For, If]
})
class TodoApp {

  constructor() {
    this.tasks = [
      {name: "Devoxx France 2015", done: false},
      {name: "Mix-IT", done: true},
      {name: "Devoxx World 2015", done: false}
    ];
  }

  addTask($event, newtodo) {
    console.log('Adding "%s"', newtodo.value);
    this.tasks.push({
      name: newtodo.value,
      done: false
    });
    newtodo.value = '';
  }

  changeState(todo) {
    todo.done = !todo.done;
  }

  remaining() {
    return this.tasks.filter(function (t) {
      return !t.done
    }).length;
  }


}

bootstrap(TodoApp);

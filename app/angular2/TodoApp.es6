import {Component, Template, bootstrap,For} from 'angular2/angular2';
//import {TodoStore} from 'services/TodoStore';
@Component({
    selector: 'todo-app'//,
    //componentServices: [
    //    TodoStore
    //]
})
@Template({
    url: 'templates/todo.html?' + +new Date(),
    directives: [For]
})
class TodoApp {

    //todoStore : TodoStore;

    //constructor(todoStore: TodoStore) {
    //    this.todoStore = todoStore;
    //}

    constructor() {
        this.tasks = [
            {name: "Devoxx France 2015", done: false},
            {name: "Mix-IT", done: true},
            {name: "Devoxx World 2015", done: false}
        ];
    }

    add($event, newtodo) {
        if ($event.which === 13) {
            console.log('Adding "%s"', newtodo.value);
            //this.todoStore.add(newtodo.value);
            this.tasks.push({
                name: newtodo.value,
                done: false
            });
            newtodo.value = '';
        }
    }

    toggleTodoState(todo){
        todo.done = !todo.done;
    }

    remaining() {
        return this.tasks.filter(function (t) { return !t.done }).length;
    }


}

bootstrap(TodoApp);

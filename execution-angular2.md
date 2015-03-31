Angular 2 demo execution
========================

Use `http-server` (installation with `npm install -g http-server`) to run the application (in `./app/angular2` directory).

## index.html

In main page, we add the default Angular 2 files (:1234: **ng1**):

```html
  <todo-app><span><i class="fa fa-spin fa-spinner"></i> Starting application...</span></todo-app>

  <script>
      System.paths = {
          'angular2/*':'/angular2/*.js',
          'rtts_assert/*': '/rtts_assert/*.js',
          'todoApp': 'TodoApp.es6'
      };
      System.import('todoApp');
  </script>
```

`System` is used to load Angular 2 libraries and my application.


## TodoApp.es6

Extension is `.es6` for ECMAScript 6, but can be JavaScript too.

We start with the import (:1234: **ng2**) : `import {Component, Template, bootstrap, For, If} from 'angular2/angular2';`


We create a `class TodoApp` with a basic `constructor` (:1234: **ng3**):

```javascript
class TodoApp {

  constructor() {
    this.tasks = [
      {name: "Devoxx France 2015", done: false},
      {name: "Mix-IT", done: true},
      {name: "Devoxx World 2015", done: false}
    ];
  }
  
  remaining() {
    return this.tasks.filter(function (t) {
      return !t.done
    }).length;
  }

  addTask($event, newtodo) {
    this.tasks.push({
      name: newtodo.value,
      done: false
    });
    newtodo.value = '';
  }

  changeState(todo) {
    todo.done = !todo.done;
  }
}

bootstrap(TodoApp);
```

Now, we add **annotations**.
First, a `@Component` to indicate that we are dealing with the `<todo-app>` tag (:1234: **ng4**):

```
@Component({
  selector: 'todo-app'
})
```

Then a `@Template` to indicate that there is an external template for the component (:1234: **ng5**):

```
@Template({
  url: 'templates/todo.html?' + +new Date(),
  directives: [For, If]
})
```

## template/todo.html

We start with the skeleton of the template (:1234: **ng6**):

```
<div class="container">

  <!-- Counter and remaining tasks -->

  <div class="tasks">
    <!-- Iterate on tasks -->
  </div>

  <hr/>

  <div class="form-group">
    <div class="input-group">
      <div class="input-group-addon">New Task</div>
      <!-- Addition of new task -->
    </div>
  </div>
</div>
```

Add the counter (:1234: **ng7**):

```
  <h4>You have {{ tasks.length }} tasks, {{ remaining() }} remaining</h4>
```

Add the iteration on the tasks (:1234: **ng8**):

```
    <div class="task" [class.done]="task.done" *for="#task of tasks #i=index">
      <span class="id">{{ i + 1 }}</span>
      <span>{{ task.name }}</span>
      <button class="btn btn-danger pull-right btn-sm" *if="task.done" (click)="changeState(task)">
        <i class="fa fa-square-o"></i> Not done
      </button>
      <button class="btn btn-success pull-right btn-sm" *if="!task.done" (click)="changeState(task)">
        <i class="fa fa-check-square-o"></i> Done
      </button>
      <div class="clearfix"></div>
    </div>
```

Finally add the new task addition button and field (:1234: **ng9**):

```
      <input type="text" class="form-control" id="taskName" placeholder="What to do?" #newtodo>

      <div class="input-group-addon add-btn" (click)="addTask($event,newtodo)">
        Add <i class="fa fa-reply fa-rotate-90"></i>
      </div>
```

Test :smirk:






Aurelia demo execution
======================

## index.html

In `index.html`, we simply have that:

```
<section aurelia-app>
    <!-- this is where Aurelia will fill out the content -->
</section>
```

and the configuration:

```
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>
    System.baseUrl = 'dist';
    System.import('aurelia-bootstrapper');
</script>
```

## Application

In `app.js`, we set the import of todo as `import {Todos} from './todos';`.


Now we create a  `todo.js` like that (:1234: **or1**):

```javascript
export class Todos {

    constructor() {
        this.tasks = [
            // List of tasks
        ];
        this.newTask = null;
    }
    
    get remaining() {
        return this.tasks.filter(i => !i.done).length;
    }
    
    // Add task

}
```

For easier use, we will use a `class` called `TodoItem`. So we need to import it (:1234: **or2**):

```javascript
import {TodoItem} from './todo-item';
```

and use it in `tasks` (:1234: **or3**):

```
new TodoItem('Devoxx France 2015'),
new TodoItem('Mix-IT', true),
new TodoItem('Devoxx World 2015')
```

Finally we add a `addNewTodo` function (:1234: **or4**):

```javascript
addNewTodo(title = this.newTask) {
    if (title == undefined) { return; }

    title = title.trim();
    if (title.length == 0) { return; }

    this.tasks.push(
        new TodoItem(this.newTask)
    );
    this.newTask = null;
}
```

The `class TodoItem` is something like that (:1234: **or5**):

```javascript
export class TodoItem {

    constructor(name, done = false) {
        this.name = name;
        this.done = done;
    }
    
    changeState() {
        this.done = !this.done;
    }

}
```

## The view

Start with the following code (:1234: **or6**):

```
<template>
    <h4>You have ${ tasks.length } tasks, ${ remaining } remaining</h4>
    
    <!-- Iterate on items -->
    
    <hr>
    


</template>
```

The buttons (:1234: **or7**):

```
<div class="tasks">
    <div repeat.for="task of tasks" class="task ${ task.done ? 'done' : '' }">
        <span class="id">${ $index + 1 }</span>
        <span>${ task.name }</span>
    
        <button if.bind="task.done" class="btn btn-danger pull-right btn-sm" click.delegate="task.changeState()">
            <i class="fa fa-square-o"></i> Not done
        </button>
        <button if.bind="!task.done" class="btn btn-success pull-right btn-sm" click.delegate="task.changeState()">
            <i class="fa fa-check-square-o"></i> Done
        </button>
    
        <div class="clearfix"></div>
    </div>
</div>
```

The new task addition panel (:1234: **or8**):

```
<div class="form-group">
    <div class="input-group">
        <div class="input-group-addon">New Task</div>
        <input type="text" class="form-control" id="taskName" placeholder="What to do?" value.bind="newTask">

        <div class="input-group-addon add-btn" click.delegate="addNewTodo(newTask)">
            Add <i class="fa fa-reply fa-rotate-90"></i>
        </div>
    </div>
</div>
```

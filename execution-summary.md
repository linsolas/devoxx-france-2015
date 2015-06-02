## Startup

* **Angular2** : `http-server` in `app/angular2` dir on port `8080`.
* **Polymer**, **React**: `grunt serve` on root dir on port `35792`.
* **Aurelia**:  `gulp serve` on port `9000`.

## Web Components

**Files**

* To show: `app/polymer/index-polymer.html`
* To edit: `app/polymer/toto-list-polymer.html`

**Steps**

* `wc1` **HTML** Skeleton of component
* `wc2` **HTML** Template
* `wc3` **HTML** Tasks iteration
* `wc4` **HTML** Buttons
* `wc5` **JS** changeState()
* `wc6` **HTML** Add task
* `wc7` **JS** addTask()


## Angular v2

**Files**

* To show: `app/angular2/index.html`
* To edit: `app/angular2/index.html`, `app/angular2/TodoApp.es6`, `app/angular2/templates/todo.html`

**Steps**

* In `index.html`:
  * `ng1` **HTML** `<todo-app>` and `<script>`
* In `TodoApp.es6`:
  * `ng2` **JS** import
  * `ng3` **JS** class TodoApp
  * `ng4` **JS** @Component
  * `ng5` **JS** @Template
* In `template/todo.html`:
  * `ng6` **HTML** Template skeleton
  * `ng7` **HTML** Counter
  * `ng8` **HTML** Task iteration
  * `ng9` **HTML** Task addition


## React

**Steps**

File `app/react/index-react.html`

* `TodoApp`:
  * `rea1` **JS** Skeleton
  * `rea2` **JS** main functions
  * `rea3` **JSX** render()
  * `rea4` **JSX** JSX in render() method
* Task
  * `rea5` **JS** skeleton
  * `rea6` **JSX** JSX in render() method


## Ionic

**Commands**

* `ionic start XXX tabs`
* `cd XXX`
* `ionic platform add ios`
* `ionic emulate ios`


Files `www/js/controllers.js` and `www/templates/tab-dash.html`

**Steps**

* In `www/js/controllers.js`:
  * `ion1` **JS** `DashCtrl` Controller code.
* In `www/templates/tab-dash.html`:
  * remove `<ion-content class="padding">`
  * `ion2` **HTML** Tasks iteration
  * `ion3` **HTML** Add task


## Aurelia

**Files**

* To show: `index.html`
* To edit: `src/todos.js`, `src/todo-item.js` and `src/todos.html`

**Steps**

* In `In src/todos.js`:
 * `or1` **JS** Todo skeleton
 * `or2` **JS** import
 * `or3` **JS** use of TodoItem
 * `or4` **JS** addNewTodo()
* In `src/todo-item.js`:
  * `or5` **JS** class
* In `src/todos.html`:
  * `or6` **HTML** skeleton
  * `or7` **HTML** buttons
  * `or8` **HTML** add item

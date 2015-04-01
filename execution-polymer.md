Polymer demo execution
======================

Run the application with `grunt serve` on the root directory.

In the main page, we have:

* the import of polyfill for web components: `<script src="../../bower_components/webcomponentsjs/webcomponents.min.js"></script>` (optional for latest Chrome versions).
* the import of the tag: `<link rel="import" href="todo-list-polymer.html"/>`.
* the tag itself: `<todo-list></todo-list>`.


## Template

Create skeleton of the application (:1234: **wc1**):

```html
<link rel="import" href="../../bower_components/polymer/polymer.html">

<polymer-element name="todo-list">
  <template>
    <!-- HTML code goes here -->
  </template>
  
  <script>
      Polymer({
          tasks: [
              {name: "Devoxx France 2015", done: false},
              {name: "Mix-IT", done: true},
              {name: "Devoxx World 2015", done: false}
          ],
          get remaining() {
              return this.tasks.filter(function(t) {
                  return !t.done
              }).length;
          }
      });
  </script>
</polymer-element>
```


Add default HTML code (:1234: **wc2**):

```html
    <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../../bower_components/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="../angular2/styles/todo-list.css">

    <h4>You have {{ tasks.length }} tasks, {{ remaining }} remaining</h4>

    <div class="tasks">
      <!-- Iterate on tasks -->
    </div>

    <hr/>
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-addon">New Task</div>
        <input type="text" class="form-control" id="taskName" placeholder="What to do?">

        <!-- "Add task" button -->
      </div>
    </div>
```

Iterate on the tasks (:1234: **wc3**):

```html
      <template repeat="{{ t, taskIndex in tasks }}">
        <div class="task {{ t.done ? 'done' : '' }}">
          <span class="id">{{ taskIndex + 1 }}</span>
          <span>{{ t.name }}</span>

          <!-- "Done" / "Not done" buttons -->

          <div class="clearfix"></div>
        </div>
      </template>
```

Add buttons to close / open a task (:1234: **wc4**):

```
          <template if="{{t.done}}">
            <button class="btn btn-danger pull-right btn-sm" on-click="{{ changeState }}" data-task-id="{{ taskIndex }}">
              <i class="fa fa-square-o"></i> Not done
            </button>
          </template>
          <template if="{{!t.done}}">
            <button class="btn btn-success pull-right btn-sm" on-click="{{ changeState }}" data-task-id="{{ taskIndex }}">
              <i class="fa fa-check-square-o"></i> Done
            </button>
          </template>
```

and the JS code (:1234: **wc5**):
```javascript
          changeState: function(e) {
            var _id = e.target.getAttribute('data-task-id');
            this.tasks[_id].done = !this.tasks[_id].done;
            // By default, the Object.observe does not work on property modification of an object inside an array...
            Object.getNotifier(this.tasks).notify({
              type: 'update',
              name: '0'
            });
          }
```

Finally the "Add task" button (:1234: **wc6**):

```
        <div class="input-group-addon add-btn" on-click="{{addTask}}">
          Add <i class="fa fa-reply fa-rotate-90"></i>
        </div>
```

and the corresponding action (:1234: **wc7**):

```javascript
          addTask: function() {
              var _name = this.$.taskName.value;
              if (_name !== '') {
                  this.tasks.push({name: _name, done: false});
                  this.$.taskName.value = "";
              }
          }
```


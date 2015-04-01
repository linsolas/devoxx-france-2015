React demo execution
====================

Include the code for the React application in a `<script type="text/jsx">` block.

Create the skeleton (:1234: **rea1**):

```javascript
var Task = React.createClass({
    // Code for TASK object
});

var TodoApp = React.createClass({
    // Code for the APPLICATION
});

React.render(
    <TodoApp />,
    document.getElementById('tasks')
);
```

## TodoApp

Add in TodoApp the basic codes (:1234: **rea2**):

```
getInitialState: function () {
    return {
        tasks: [
          {name: "Devoxx France 2015", done: false},
          {name: "Mix-IT", done: true},
          {name: "Devoxx World 2015", done: false}
        ]
    }
}

addTask: function () {
    var _node = this.refs.taskName.getDOMNode();
    var _task = _node.value.trim();
    if (_task) {
        this.state.tasks.push({
            name: _task,
            done: false
        });
        this.setState({
          tasks: this.state.tasks
        });
      _node.value = '';
    }
},

toggleTask: function (task) {
    task.done = !task.done;
    this.setState({
        tasks: this.state.tasks
    });
}
```

Prepare for rendering (:1234: **rea3**):

```javascript
render: function () {
    // Utils functions go here
    
    return (
        <div>
            <h4>You have {this.state.tasks.length} tasks, {remaining} remaining</h4>
            <div className="tasks" ref="tasks">
                {items}
            </div>
            <hr/>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-addon">New Task</div>
                    <input type="text" className="form-control" ref="taskName" placeholder="What to do?"/>
                    <div className="input-group-addon add-btn" onClick={this.addTask}>
                        Add <i className="fa fa-reply fa-rotate-90"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
```

Add required functions (:1234: **rea4**):

```javascript
    var remaining = this.state.tasks.reduce(function (count, task) {
        return task.done ? count : count + 1;
    }, 0);

    var items = this.state.tasks.map(function (task, index) {
        return (
            <Task key={index + 1}
                index={index + 1}
                task={task}
                onToggle={this.toggleTask.bind(this, task)}
            />
        )
    }, this);
```


Now we need to create the `Task` element (:1234: **rea5**):

```javascript
var Task = React.createClass({
    // Code goes here...
});
```

Finally, add the following code (:1234: **rea6**):

```javascript
// this.props is immutable. this.state is mutable and specific to the component.
render: function () {
    var cx = React.addons.classSet;
    var divClasses = cx({'task': true, 'done': this.props.task.done});
    var iClasses = cx({'fa fa-square-o': this.props.task.done, 'fa fa-check-square-o': !this.props.task.done});
    var btnClasses = cx({
        'btn pull-right btn-sm btn-danger': this.props.task.done,
        'btn pull-right btn-sm btn-success': !this.props.task.done
    });
    var btnLabel = this.props.task.done ? 'Not Done' : 'Done';
    // JSX part goes here
}
```

And the JSX part (:1234: **rea7**):

```javascript
return (
    <div className={divClasses}>
        <span className="id">{ this.props.index }</span>
        <span>{this.props.task.name}</span>
        <button className={btnClasses} onClick={this.props.onToggle}>
            <i className={iClasses}></i>{btnLabel}
        </button>
        <div className="clearfix"></div>
    </div>
);
```

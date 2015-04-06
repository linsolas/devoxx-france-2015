Ionic demo execution
====================

First, create the project with `ionic start todo-ionic tabs`.
Now add the iOS platform to the project: `ionic platform add ios`.

Run with `ionic emulate ios`.

In `controllers.js`, in `DashCtrl`, add the following code (:1234: **ion1**):

```javascript
$scope.tasks = [
    {name: "Devoxx France 2015", done: false},
    {name: "Mix-IT", done: true},
    {name: "Devoxx World 2015", done: false}
];

$scope.changeState = function (task) {
    task.done = !task.done;
};

$scope.remaining = function () {
    return $scope.tasks.filter(function (t) {
        return !t.done
    }).length;
};

$scope.addTask = function (someTask) {
    $scope.tasks.push({name: someTask, done: false});
}
```

In the `templates/tab-dash.html`, remove the content of the `<ion-content class="padding">` and add (:1234: **ion2**):

```javascript
<h2>{{ tasks.length }} tasks, {{ remaining() }} remaining</h2>

<div ng-repeat="task in tasks" class="list card">
    <div>
        <ion-toggle ng-model="task.done">{{ task.name }}</ion-toggle>
    </div>
</div>
```

Finally, the last block (:1234: **ion3**):

```javascript
<div class="list card">
    <div class="item item-divider">Add new task</div>
    <div class="item item-body">
        <div class="list">
            <span class="item item-input-inset">
                <label class="item-input-wrapper">
                    <input type="text" placeholder="New task" ng-model="newTask">
                </label>
            <button class="button button-small" type="button" ng-click="addTask(newTask)">
                Add task
            </button>
        </span>
        </div>
    </div>
</div>
```

Run again `ionic emulate ios` to show the demo.

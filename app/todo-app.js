export class Todo {

  static inject() { return []; }

  constructor() {
    console.log('CONSTRUCTOR');
    this.tasks = [
      {name: "Devoxx France 2015", done: false},
      {name: "Mix-IT", done: true},
      {name: "Devoxx World 2015", done: false}
    ];
    this.remaining = 0;
    this.newTask = '';
  }

  addTask() {
    if (this.newTask != '') {
      this.tasks.push({
        name: this.newTask,
        done: false
      });
      this.newTask = '';
    }
  }

  handleChange() {
    this.remaining = this.tasks.filter(function(t) {
      return !t.done;
    }).length;
  }


}

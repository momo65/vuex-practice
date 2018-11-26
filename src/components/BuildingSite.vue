
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'EatingSite',
  methods: {
    addWorker: function () {
      this.$store.commit({ type:'BuildingSite/ADD_WORKER', worker: { firstName: this.workerFirstName,
        lastName: this.workerLastName, age: this.workerAge, tasks:this.addedTasks } })
    },
    addTask: function () {
      this.$store.commit({ type: 'BuildingSite/ADD_TASK', task: this.task })
      this.addedTasks.push(this.task)
    },
    ...mapActions('BuildingSite', {
      initWorkers: 'getAllWorkers',
      initTasks: 'getAllTasks'
    }),
    workerFNChange : function (event) {
      this.workerFirstName = event.target.value
    },
    workerLNChange : function (event) {
      this.workerLastName = event.target.value
    },
    workerAgeChange : function (event) {
      this.workerAge = event.target.value
    },
    taskNameChange : function (event) {
      this.taskName = event.target.value
    },
    taskPayChange : function (event) {
      this.taskPay = event.target.value
    }
    /* workerTasks: function (h, tasks) {
      if (tasks.length>0) {
        return (<span>
        {', number of tasks: ' + tasks.length}</span>)
      }
    } */
  }, 
  data() {
    return {
      workerFirstName: '',
      workerLastName: '',
      workerAge: null,
      taskName: '',
      taskPay: null,
      addedTasks: []
    }
  },
  computed: {
    task: function () {
      return { name: this.taskName, pay: this.taskPay }
    },
    ...mapState('BuildingSite', {
      workersS: state => state.workers,
      tasksS: state => state.tasks
    }),
    ...mapGetters('BuildingSite', {
      workers: 'getWorkers',
      tasks: 'getTasks'
    })
  },
  mounted () {
    this.initWorkers().then(() => {
      console.log('Workers ready')
    })  //$store.dispatch({type:'BuildingSite/getAllWorkers'})
    this.initTasks().then(() => {
      console.log('Tasks received')
    })
  },
  render (h) {
    let tasks = function (tasks) {
      if (tasks.length) {
        return (
          <span>
          {', number of tasks: ' + tasks.length}</span>
        )
      }
    }
    return (
      <div class="buildingSite">
        <p>
          Number of workers {this.workersS.length}
        </p>
        <ul>
          {this.workersS.map(worker =>
            (<li>
              <p>
                {worker.firstName + ' ' + worker.lastName + ' age: ' + worker.age}
                {tasks(worker.tasks)
                  // this.workerTasks(h, worker.tasks)
                  /* (h, worker) => {
                  if (worker.tasks.length>0) {
                    return (<span>
                      {', number of tasks: ' + worker.tasks.length}</span>)
                  }
                } */
                }
                <ul>
                  {worker.tasks.map(task =>
                    (<li>
                      <p>
                        {task.name + '   pay: ' + task.pay}
                      </p>
                    </li>)
                  )}
                </ul>
              </p>
            </li>)
          )}
        </ul>
        <p>
          Total number of tasks: {this.tasksS.length}
        </p>
        <div>
          The tasks are: {this.tasksS.map((task,index) => (
            <span>{index + '.' + task.name + '  '}</span>
          ))}
        </div>
        <br /><br />
        <div>
          <label for="workerFirstName">Worker first Name</label>
          <input type="text" id="workerFirstName" value={this.workerFirstName} onInput={this.workerFNChange}/>
          <label for="workerLastName">Worker last name</label>
          <input type="text" id="workerLastName" value={this.workerLastName} onInput={this.workerLNChange} />
          <label for="workerAge">Worker age</label>
          <input type="number" id="workerAge" value={this.workerAge} onInput={this.workerAgeChange} />
          <label for="taskName">Task name</label>
          <input type="text" id="TaskName" value={this.taskName} onInput={this.taskNameChange} />
          <label for="taskPay">Task pay</label>
          <input type="number" id="taskPay" value={this.taskPay} onInput={this.taskPayChange} /><span>$</span>
          <button type="button" onClick={this.addTask}>Add task</button>
          <button type="button" onClick={this.addWorker}>Add worker</button>
        </div>
       </div>
    )
  }
}
</script>

<style scoped>

</style>

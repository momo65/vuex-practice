<template>
  <div class="buildingSite">
    <p>
      Number of workers {{workers.length}}
    </p>
    <ul>
      <li v-for="(worker,index) in workers" v-bind:key="index">
        <p>
          {{worker.firstName+' '+worker.lastName+' age: '+worker.age}}<span v-if="worker.tasks">
            {{', number of tasks: '+worker.tasks.length}}</span>
          <ul>
            <li v-for="(task,index) in worker.tasks" v-bind:key="index">
              <p>
                {{task.name+'   pay: '+task.pay}}
              </p>
            </li>
          </ul>
        </p>
      </li>
    </ul>
    <p>
      Total number of tasks: {{tasks.length}}
    </p>
    <div>
      <label for="workerFirstName">Worker first Name</label>
      <input type="text" id="workerFirstName" v-model="workerFirstName" />
      <label for="workerLastName">Worker last name</label>
      <input type="text" id="workerLastName" v-model="workerLastName" />
      <label for="workerAge">Worker age</label>
      <input type="number" id="workerAge" v-model="workerAge" />
      <label for="taskName">Task name</label>
      <input type="text" id="TaskName" v-model="taskName" />
      <label for="taskPay">Task pay</label>
      <input type="number" id="taskPay" v-model="taskPay" /><span>$</span>
      <button type="button" @click="addTask">Add task</button>
      <button type="button" @click="addWorker">Add worker</button>
    </div>
   </div>
</template>

<script>
//import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'EatingSite',
  methods:{
    addWorker:function(){
      this.$store.commit({type:"BuildingSite/ADD_WORKER",worker:{firstName:workerFirstName.value,
        lastName:workerLastName.value,age:workerAge.value,tasks:this.addedTasks}})
    },
    addTask:function(){
      this.$store.commit({type:"BuildingSite/ADD_TASK",task:this.task})
      this.addedTasks.push(this.task)
    },
    ...mapActions('BuildingSite',{
      initWorkers:'getAllWorkers',
      initTasks:'getAllTasks'
    })
  },
  data() {
    return {
      workerFirstName:'',
      workerLastName:'',
      workerAge:null,
      taskName:'',
      taskPay:null,
      addedTasks:[]
    }
  },
  computed:{
    task:function(){
      return {name:this.taskName,pay:this.taskPay}
    },
    ...mapGetters('BuildingSite',{
      workers:'getWorkers',
      tasks:'getTasks'
    })
  },
  mounted(){
    this.initWorkers().then(()=>{
      console.log("Workers ready")
    })  //$store.dispatch({type:'BuildingSite/getAllWorkers'})
    this.initTasks().then(()=>{
      console.log("Tasks received")
    })
  }
}
</script>

<style scoped>

</style>

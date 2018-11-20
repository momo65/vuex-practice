import {ADD_WORKER} from '../mutations'
import {ADD_TASK} from '../mutations'
import {SET_WORKERS} from '../mutations'
import {SET_TASKS} from '../mutations'
import * as actions from '../actions'

export default{
  namespaced:true,
  state:{
    workers: [],
    tasks:[]
  },
  getters:{
    getWorkers:(state)=>{
      return state.workers
    },
    getTasks:(state)=>{
      return state.tasks
    }
  },
  actions:actions.buildingSiteActions,
  mutations : {
    [ADD_WORKER](state,payload){
      state.workers.push(payload.worker)
    },
    [SET_WORKERS](state, payload){
      state.workers = payload.workers
    },
    [ADD_TASK](state,payload){
      console.log(payload.task)
      state.tasks.push(payload.task)
    },
    [SET_TASKS](state, payload){
      console.log(payload.tasks)
      state.tasks = payload.tasks
    }
  }
}

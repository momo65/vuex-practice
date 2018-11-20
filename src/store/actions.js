import {SET_RECIPES} from './mutations'
import {SET_WORKERS} from './mutations'
import {SET_TASKS} from './mutations'
import apiRecipes from '../api/apiRecipes'
import apiWorkers from '../api/apiWorkers'

export const eatingSiteActions={
  /*async*/
  getAllRecipes ({ commit }) {
    return new Promise((resolve,reject)=>{
      apiRecipes.getRecipes(recipes => {
        commit({type:SET_RECIPES,recipes:recipes})
        resolve()
      })
    })
    /*await apiRecipes.getRecipes(recipes => {
      commit({type:'SET_RECIPES',recipes:recipes})
    })*/
  }
}

export const buildingSiteActions={
  /*async*/
  getAllWorkers ({ commit }) {
    return new Promise((resolve,reject)=>{
      apiWorkers.getWorkers(workers => {
        commit({type:SET_WORKERS,workers:workers})
        resolve()
      })
    })
    /*await apiRecipes.getRecipes(recipes => {
      commit({type:'SET_RECIPES',recipes:recipes})
    })*/
  },
  getAllTasks ({ commit }) {
    return new Promise((resolve,reject)=>{
      apiWorkers.getTasks(tasks => {
        commit({type:SET_TASKS,tasks:tasks})
        resolve()
      })
    })
  }
}

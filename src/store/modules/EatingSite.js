import {ADD_RECIPE} from '../mutations'
import {SET_RECIPES} from '../mutations'
import * as actions from '../actions'

export default{
  namespaced:true,
  state:{
  recipes: []
  },
  getters:{
    getRecipes:(state)=>{
      return state.recipes
    }
  },
  actions:actions.eatingSiteActions,
  mutations : {
    [ADD_RECIPE](state,payload){
      state.recipes.push(payload.recipe)
    },
    [SET_RECIPES](state, payload){
      state.recipes = payload.recipes
    }
  }
}

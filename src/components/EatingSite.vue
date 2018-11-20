<template>
  <div class="eatingSite">
    <p>
      Number of recipes {{recipes.length}}
    </p>
    <ul>
      <li v-for="(recipe,index) in recipes" v-bind:key="index">
        <p>
          {{recipe.name+' '+'('+recipe.quantity+')'}}
        </p>
      </li>
    </ul>
    <div>
      <label for="recipeName">Recipe Name</label>
      <input type="text" id="recipeName" v-model="recipeName" />
      <label for="recipeQuant">Recipe Quantity</label>
      <input type="number" id="recipeQuant" v-model="recipeQuant" />
      <button type="button" @click="addRecipe">Add Recipe</button>
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
    addRecipe:function(){
      this.$store.commit({type:"EatingSite/ADD_RECIPE",recipe:{name:recipeName.value,quantity:recipeQuant.value}})
    },
    ...mapActions('EatingSite',{
      initRecipes:'getAllRecipes'
    })
  },
  data() {
    return {
      recipeName:'',
      recipeQuant:0
    }
  },
  computed:{
    ...mapGetters('EatingSite',{
      recipes:'getRecipes'
    })
  },
  mounted(){
    this.initRecipes().then(()=>{
      console.log("Recipes received")
    })  //$store.dispatch({type:'EatingSite/getAllRecipes'})
  }
}
</script>

<style scoped>

</style>

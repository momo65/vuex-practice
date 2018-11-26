
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'EatingSite',
  methods: {
    addRecipe:function () {
      this.$store.commit({ type: 'EatingSite/ADD_RECIPE', recipe: { name: this.recipeName, quantity: this.recipeQuant } })
    },
    ...mapActions('EatingSite', {
      initRecipes: 'getAllRecipes'
    }),
    recipeNameChange: function (event) {
      this.recipeName = event.target.value
    },
    recipeQuantChange: function (event) {
      this.recipeQuant = event.target.value
    }
  },
  data() {
    return {
      recipeName: '',
      recipeQuant: 0
    }
  },
  computed: {
    ...mapState('EatingSite', {
      recipesS: state => state.recipes
    }),
    ...mapGetters('EatingSite', {
      recipes: 'getRecipes'
    })
  },
  mounted() {
    this.initRecipes().then(() => {
      console.log("Recipes received")
    })  //$store.dispatch({type:'EatingSite/getAllRecipes'})
  },
  render (h) {
    return (
      <div class="eatingSite">
        <p>
          Number of recipes {this.recipesS.length}
        </p>
        <ul>
          {this.recipesS.map(recipe =>
            (<li>
              <p>
                {recipe.name + ' ' + '(' +recipe.quantity + ')'}
              </p>
            </li>)
          )}
        </ul>
        <div>
          <label for="recipeName">Recipe Name</label>
          <input type="text" id="recipeName" value={this.recipeName} onInput={this.recipeNameChange}/>
          <label for="recipeQuant">Recipe Quantity</label>
          <input type="number" id="recipeQuant" value={this.recipeQuant} onInput={this.recipeQuantChange}/>
          <button type="button" onClick={this.addRecipe}>Add Recipe</button>
        </div>
       </div>
    )
  }
}
</script>

<style scoped>

</style>

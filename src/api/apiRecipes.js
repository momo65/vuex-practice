const _recipes = [
  {name:"pizza with ognon",quantity:9},{name:"spaghetti with olives",quantity:6},
    {name:"pizza with thuna",quantity:4},{name:"spaghetti with Turkey",quantity:5},
    {name:"pizza with crevette",quantity:5},{name:"spaghetti with harissa & ognon",quantity:4},
    {name:"Hamburger with cheese",quantity:15},{name:"Hamburger with meat",quantity:8},
    {name:"Hamburger with olive & ognon",quantity:7},{name:"Hamburger with egg & vegetables",quantity:5},
    {name:"Sushi",quantity:6}
]

export default {
  getRecipes (cb) {
    setTimeout(() => cb(_recipes), 100)
  }
}

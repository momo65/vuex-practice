<template>
  <div class="hello">
    <BuildingSite></BuildingSite><br />
    <EatingSite></EatingSite><br />
    <!--<GamingSite></GamingSite>-->
  </div>
</template>

<script>
import EatingSite from './EatingSite'
import BuildingSite from './BuildingSite'

export default {
  name: 'HelloWorld',
  components:{
    EatingSite,
    BuildingSite
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

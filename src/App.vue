<template>
  <div id="app">
    <Header/>
    <Listmenu 
      :listitem= "listitems"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Listmenu from './components/Listmenu.vue'

export default {
  name: 'app',
  components: {
    Header,
    Listmenu
  },
  data() {
      return {
        listitems: ''
      }  
  },
  mounted: function() {
    fetch('http://www.randomtext.me/api',{
      method: 'get'
    })
      .then((response) => {
        console.log(response.json())
    })
      .then((jsonData) => {
      this.listitems = jsonData.text_out
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

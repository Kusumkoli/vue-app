<template>
  <div id="app">
    <Header/>
    <Listmenu />
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
      listitems: []
    }  
  },
  mounted: function() {
    fetch('http://www.randomtext.me/api')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.$data.listitems = data.text_out.split("\r");
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

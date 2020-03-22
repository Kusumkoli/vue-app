<template>
  <div id="app">
    <Header/>
    <Listmenu />
    <ul>
      <li class="items">type: {{ type }}</li>
      <li class="items">format: {{ format }}</li>
      <li class="items">number: {{ number }}</li>
      <li class="items">number_max: {{ number_max }}</li>
      <li class="items">amount: {{ amount }}</li>
      <li class="items">time: {{ time }}</li>
      <li class="items" v-html="text_out"></li>
    </ul>
    <img src="https://picsum.photos/350">
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
      type : '',
      format: '',
      number: 10, 
      number_max: 100,
      amount: 10,
      time: '',
      text_out: ''
    }  
  },
  mounted: function() {
    fetch('http://www.randomtext.me/api')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.type)
        this.$data.type = data.type
        this.$data.format = data.format
        this.$data.number = data.number
        this.$data.number_max = data.number_max
        this.$data.amount = data.amount
        this.$data.time = data.time
        this.$data.text_out = data.text_out
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.items {
  padding: 10px;
}
</style>

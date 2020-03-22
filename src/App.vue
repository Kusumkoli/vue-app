<template>
  <div id="app">
    <Listmenu />
    <div class="sticky">
      Scrolled to bottom: {{ scrolledToBottom }}
      
    </div>
    <button id="myBtn">
      <p>List 1</p>
      <p>{{text_out | subStr }} ....</p>
    </button>
    <button id="myBtn">
      <p>List 2</p>
      <p>{{text_out | subStr }} ....</p>
    </button>
    <button id="myBtn">
      <p>List 3</p>
      <p>{{text_out | subStr }} ....</p>
    </button>
    <button id="myBtn">
      <p>List 3</p>
      <p>{{text_out | subStr }} ....</p>
    </button>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
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
    </div>
  </div> 
</template>

<script>
import Listmenu from './components/Listmenu.vue'
import main from './main.js'

export default {
  name: 'app',
  components: {
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
      text_out: '',
      scrolledToBottom: false
    }
  },
  function() {
    return main
  },
  methods : {
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.scrolledToBottom = true // replace it with your code
        }
      }
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
      }),
      this.scroll()
  }
};
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

#myBtn {
  display: block;
  margin: 100px 0px;
}

.modal {
  display: none;
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover, .close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.sticky {
  position: sticky;
  top: 0;
}

</style>



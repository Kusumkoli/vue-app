<template>
  <div id="app">
    <h1>Fetchin Data from APi</h1>
    <div class="sticky">
      Scrolled to bottom: {{ scrolledToBottom }} 
    </div>
    <div>
      <div class="myBtn" v-on:click="openModal(); addData0();">
        <p>List 1</p>
        <p v-bind:title="queue">{{queue[0].text_out | subStr}} ....</p>
      </div>
      <div class="myBtn" v-on:click="openModal(); addData1();">
        <p>List 2</p>
        <p v-bind:title="queue">{{queue[1].text_out | subStr}} ....</p>
      </div>
      <div class="myBtn" v-on:click="openModal(); addData2();">
        <p>List 3</p>
        <p v-bind:title="queue">{{queue[2].text_out | subStr}} ....</p>
      </div>
      <div class="myBtn" v-on:click="openModal(); addData3();">
        <p>List 4</p>
        <p v-bind:title="queue">{{queue[3].text_out | subStr}} ....</p>
      </div>
      <div class="myBtn" v-on:click="openModal(); addData4();">
        <p>List 5</p>
        <p v-bind:title="queue">{{queue[4].text_out | subStr}} ....</p>
      </div>
    </div>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <ul v-bind:title = "apidata">
          <li class="items">type: {{ apidata.type }}</li>
          <li class="items">format: {{ apidata.format }}</li>
          <li class="items">number: {{ apidata.number }}</li>
          <li class="items">number_max: {{ apidata.number_max }}</li>
          <li class="items">amount: {{ apidata.amount }}</li>
          <li class="items">time: {{ apidata.time }}</li>
          <li class="items" v-html="apidata.text_out"></li>
        </ul>
        <img src="https://picsum.photos/350">
      </div>
    </div>
  </div> 
</template>

<script>

import main from './main.js'

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      queue: [],
      scrolledToBottom: false,
      apidata: {
        type : '',
        format: '',
        number: 10, 
        number_max: 100,
        amount: 10,
        time: '',
        text_out: ''        
      }
    }
  },
  function() {
    return main
  },
  methods : {
    openModal: function() {
      var modal = document.getElementById("myModal");
      var span = document.getElementsByClassName("close");
      modal.style.display = "block";
      span[0].onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    },
    scroll: function() {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.scrolledToBottom = true //replace it with your code
        }
      }
    },
    fetchdata: function() {
      fetch('http://www.randomtext.me/api')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.$data.apidata = data
        this.queue.push({...this.apidata})
      }),
      this.scroll()
    },

    addData0: function() {
      this.$data.apidata = this.queue[0]
      console.log(this.apidata)
    },
    addData1: function() {
      this.$data.apidata = this.queue[1]
      console.log(this.apidata)
    },
    addData2: function() {
      this.$data.apidata = this.queue[2]
      console.log(this.apidata)
    },
    addData3: function() {
      this.$data.apidata = this.queue[3]
      console.log(this.apidata)
    }
  },
  mounted() {
    this.fetchdata()
    this.fetchdata()
    this.fetchdata()
    this.fetchdata()
    this.fetchdata()
    console.log(this.queue)
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

.sticky {
  position: sticky;
  top: 0;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>



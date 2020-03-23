<template>
  <div id="app">
    <h1>Fetching API Data</h1>
    <div class="sticky">
      Scrolled to bottom: {{ scrolledToBottom }} 
    </div>
    <div class="list_items">
      <div class="myBtn" v-on:click="openModal(); addData0();">
        <p v-bind:title="queue"><b>Time:</b> {{queue[0].time}}</p>
        <p v-bind:title="queue">{{queue[0].text_out | subStr}} ....</p>
      </div>
      <div class="myBtn" v-on:click="openModal(); addData1();">
        <p v-bind:title="queue"><b>Time:</b> {{queue[1].time}}</p>
        <p v-bind:title="queue">{{queue[1].text_out | subStr}} ....</p>
      </div>
      <div class="myBtn" v-on:click="openModal(); addData2();">
        <p v-bind:title="queue"><b>Time:</b> {{queue[2].time}}</p>
        <p v-bind:title="queue">{{queue[2].text_out | subStr}} ....</p>
      </div>
      <div class="myBtn" v-on:click="openModal(); addData3();">
        <p v-bind:title="queue"><b>Time:</b> {{queue[3].time}}</p>
        <p v-bind:title="queue">{{queue[3].text_out | subStr}} ....</p>
      </div>
      <div class="myBtn" v-on:click="openModal(); addData4();">
        <p v-bind:title="queue"><b>Time:</b> {{queue[3].time}}</p>
        <p v-bind:title="queue">{{queue[4].text_out | subStr}} ....</p>
      </div>
    </div>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="api_data" v-bind:title = "apidata">
          <p class="items"><b>type:</b> {{ apidata.type }}</p>
          <p class="items"><b>format:</b> {{ apidata.format }}</p>
          <p class="items"><b>number:</b> {{ apidata.number }}</p>
          <p class="items"><b>number_max:</b> {{ apidata.number_max }}</p>
          <p class="items"><b>amount:</b> {{ apidata.amount }}</p>
          <p class="items"><b>time:</b> {{ apidata.time }}</p>
          <p class="items" v-html="apidata.text_out"></p>
        </div>
        <div class="picsum_img">
          <img src="https://picsum.photos/350">
        </div>
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
  position: fixed;
  right: 0%;
  top: 0%;
  padding: 20px;
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
  text-align: left;
  color: #17252a;
}

/* Modal Content/Box */
.modal-content {
  background-color: #feffff;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  display: flex;
  flex-direction: row;
  position: relative;
}

.myBtn p {
  cursor: pointer;
}

.list_items {
  margin: 50px 100px;
}

.myBtn {
  padding: 20px;
  cursor: pointer;
  margin: 10px;
  text-align: left;
}

.myBtn:nth-child(even) {
  background-color: #def2f1;
} 

.myBtn:nth-child(odd) {
  background-color: #3aafa9;
} 

.api_data {
  padding: 20px;
  font-size: 15px; 
}

.picsum_img {
  display: grid;
  align-content: center;
  justify-content: center;
}

/* The Close Button */
.close {
  color: #aaa;
  position: absolute;
  right: 0%;
  top: 0%;
  font-size: 28px;
  font-weight: bold;
  padding: 5px 10px;
}

h1 {
  color: #2b7a78;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>



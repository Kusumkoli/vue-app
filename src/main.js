import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('subStr', function(string) {
    return string.substring(3,20);
})

new Vue({
  render: h => h(App),
}).$mount('#app')

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close");

btn.onclick = function() {
  modal.style.display = "block";
}

span[0].onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
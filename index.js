var countDownDate = new Date("Mar 01, 2024 07:12:00").getTime();

function calculateRemainingTime() {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
      
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d"
  document.getElementById("hours").innerHTML = hours + "h"
  document.getElementById("minutes").innerHTML = minutes + "m"
  document.getElementById("seconds").innerHTML = seconds + "s"
}


console.log("Opa")

var myfunc = setInterval(function() {
  calculateRemainingTime()  
}, 1000)
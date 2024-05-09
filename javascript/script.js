// const changeButton = document.querySelector(".clock")

// document.getElementById("clock").style.color ="blue";

//  to set a digital clock

let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let pm = document.getElementById('am')

setInterval(() => {
  let currentTime = new Date()

  hrs.innerHTML = currentTime.toLocaleTimeString("en-NG", {
    hour12: true
  }).split(":")[0]

  mins.innerHTML =
  currentTime.getMinutes() < 10
  ? `0${currentTime.getMinutes()}`
  : currentTime.getMinutes();

  secs.innerHTML =
    currentTime.getSeconds() < 10
      ? `0${currentTime.getSeconds()}`
      : currentTime.getSeconds();

      pm.innerHTML = currentTime.toLocaleTimeString("en-NG", {
        hour12 : true
    }).split(" ")[1].toUpperCase()

  // hrs.innerHTML= currentTime.getHours()<10 ? "0": "" + currentTime.getHours();
  // mins.innerHTML = currentTime.getMinutes()<10?"0": "" +  currentTime.getMinutes();
  // secs.innerHTML = currentTime.getSeconds()<10?"0": "" +  currentTime.getSeconds();

  

}, 1000);



console.log("currentTime");

//  const hr = new Date();

//  document.getElementById("hrs").innerHTML = hr;

//  console.log("hr");

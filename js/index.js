// Your code goes here

//functions
//  Random Color function
function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// toggle Nav
function menuToggle() {
  if (menuStatus == false) {
    nav.style.marginTop = "0px";
    menuStatus = true;
  } else if (menuStatus == true) {
    nav.style.marginTop = "-300px";
    menuStatus = false;
  }
}

const nav = document.querySelector("nav");
const navHead = document.querySelector(".main-navigation");

// sets nav offscreen
nav.style.marginTop = "-300px";
const navBtn = document.querySelector(".logo-heading");

const logoText = document.querySelector(".logo-heading");
//1 logo color over
logoText.addEventListener("mouseover", function() {
  logoText.style.color = randomColor();
});
// 2 logo color off
logoText.addEventListener("mouseout", function() {
  logoText.style.color = "black";
});

// 3 Toggle Nav offscreen
navBtn.addEventListener("click", menuToggle);
let menuStatus = false;

// 4 Color Changing Nav
nav.addEventListener("dblclick", function(event) {
  nav.style.backgroundColor = randomColor();
});

// 5 Color Changing Top Section
navHead.addEventListener("click", function() {
  navHead.style.background = randomColor();
});

// 6 ...and items
const navItems = document.querySelectorAll("nav a");
navItems.forEach(function(item) {
  item.addEventListener("click", function(event) {
    event.target.style.color = randomColor();
    event.preventDefault();
    event.stopPropagation();
  });
});

//  7 color changing buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(btn) {
  btn.addEventListener("mouseover", function(event) {
    event.currentTarget.style.backgroundColor = randomColor(true);
  });
});

//  8 color changing header
const header = document.querySelector(".intro");
header.addEventListener("click", function(event) {
  event.currentTarget.style.backgroundColor = randomColor();
  event.stopPropagation();
});

let rick = new Image();
let ricked = true;
rick.src =
  "http://pm1.narvii.com/6350/75953997c8fbb2766b8feb9cf347b2464df25b9c_hq.jpg";

// 9
const imgs = document.querySelectorAll("img");
rick.onload = function() {
  //this just makes sure the image is loaded in the background before letting you rick roll;

  imgs.forEach(function(img) {
    img.addEventListener("click", function() {
      img.src = rick.src;
      ricked = true;
    });
  });

  // 10
  const body = document.querySelector("body");
  window.addEventListener("resize", function(event) {
    if (ricked) {
      body.style.background = `url(${rick.src})`;
      body.style.backgroundSize = "100%";
      body.style.backgroundAttachment = "fixed";
    }
  });
};

// mooooooooooooooooooooooooore

// Get help with this during standup // forEach because it is a node list it needs to be iterated // see above forEach examples
const text = document.querySelectorAll("h4");
text.addEventListener("click", function() {
  text.textContent = "I'm Pickle Rick!";
});

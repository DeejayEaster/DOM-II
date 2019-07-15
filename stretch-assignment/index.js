// const redBtn = document
//   .querySelectorAll(".red")
//   .addEventListener("click", function() {
//     console.log("clicked");
//   });

// const blueBtn = document
//   .getElementByClassName("blue")
//   .addEventListener("click", function() {
//     console.log("clicked");
//   });

// const greenBtn = document
//   .getElementByClassName("green")
//   .addEventListener("click", function() {
//     console.log("clicked");
//   });

// const pinkBtn = document
//   .getElementByClassName("pink")
//   .addEventListener("click", function() {
//     console.log("clicked");
//   });

// const grayBtn = document
//   .getElementByClassName("gray")
const container = document.querySelector(".blocks");
const blocks = document.querySelectorAll(".block");

// blocks.forEach(btn =>
//   btn.addEventListener("click", function(e) {
//     blocks.forEach(blk => blk.appendChild(blk.firstElementChild));
//   })
// );

const toTop = (event, selectedBlock) => {
  container.prepend(selectedBlock);
};

blocks.forEach(blk =>
  blk.addEventListener("click", event => {
    console.log("clicked");
    toTop(event, event.target);
  })
);
console.log(blocks);

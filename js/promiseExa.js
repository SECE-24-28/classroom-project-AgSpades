// callback hell example

console.log("Process 1");
setTimeout(() => {
  console.log("Process 2");
  setTimeout(() => {
    console.log("Process 3");
  }, 2000);
}, 2000);

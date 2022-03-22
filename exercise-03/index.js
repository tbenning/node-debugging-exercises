// Implementation A
// this is a globally scoped variable
let i;
for (i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}

// Implementation B
// locally scoped inside of the for loop
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}

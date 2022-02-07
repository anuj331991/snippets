const obj = {
  myFunction() {
    console.log("myFunction");
    console.log(this);
  },
  myFunction2() {
    for (let i = 1; i < 2; i++) {
      console.log(this);
    }
  },
};

let test = obj.myFunction;
test();
obj.myFunction2();
// console.log(test());

var x = 90;
const x = 8;
console.log(x);

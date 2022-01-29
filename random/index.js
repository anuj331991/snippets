var a = 1;
function x() {
  var a = 2;
  function y() {
    console.log(a); //2
    a++;
    console.log(a); //3
    //a = 8;
  }

  y();
  console.log(a);
}
x();
console.log(a); //1

let obj = {
  a: "5",
  function1: function () {
    console.log(this);
  },
  function2: () => {
    console.log(this);
  },
};
obj.function1();
obj.function2();

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b); // it takes an argument and return a function which again can take an argument.
    }
    return a; // it will keep on adding 1+2+3+4..
  };
};
console.log(sum(1)(2)(3)());

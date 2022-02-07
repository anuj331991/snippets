var a = 1;
function x() {
  var a = 2;
  function y() {
    console.log(a); //undefnined
    a++;
    console.log(a); //NaN
    a = 8;
    console.log(a); //8
    var a = 10;
  }

  y();
  console.log(a); //2
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

var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      alert(this.name + " wants to " + task);
    });
  },
};

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b); // it takes an argument and return a function which again can take an argument.
    }
    return a; // it will keep on adding 1+2+3+4..
  };
};
console.log(sum(1)(2)(3)());

console.log("Closure starts here");

function x() {
  let a = 1;
  function y() {
    let c = 2;
    console.log(a);
  }
  return y;
}
let z = x();
console.dir(z);
console.log(z());

/**
 * Advantage of closure
 */

let counterHelper = function () {
  let counter = 0;
  return {
    getCounter: function () {},
    setCounter: function () {},
  };
};

console.log("Closure ends here");
function outer() {
  const a = 10;
  let b = 100;

  function inner() {
    var c = 20; //whether its var or let value will be same
    console.log(`a=${a}, b=${b}, c=${c}`);
    b++;
    c++;
  }
  return inner;
}
const fnFirst = outer();
const fnSecond = outer();
console.dir(fnFirst);
fnFirst(); // 10, 100, 20
fnFirst(); // 10, 101,20
fnFirst(); //10,102,20
fnSecond(); // 10,100,20

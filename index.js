function pizza() {
  this.name = "margeritta";
}
let obj = new pizza();
pizza.prototype.random = 23223;
// console.log(obj);
console.log(obj);
// console.log(pizza.prototype);

let arr = [1, 2, 3];
arr.__proto__.yummy = function () {
  return "lol";
};
console.log(arr.__proto__);
console.log(Array.prototype);

console.log("===>>>Currrying starts");
// function volume(length, width, height) {
//   return length * width * height;
// }
function volume(length) {
  return function (width) {
    return function (height) {
      return length * width * height;
    };
  };
}
console.log("Volume", volume(1)(2)(3));
console.log("Currrying ends<<<====");

console.log("===>>>Custom deep clone");

let nestedObject = {
  a: 3,
  b: {
    c: {
      d: 9,
    },
  },
};
let nested2 = deepClone(nestedObject);

nested2["b"]["c"]["d"] = "anuj";
console.log(nestedObject);

function deepClone(obj) {
  let clone = {};
  for (let key in obj) {
    if (key != null && typeof obj[key] == "object") {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

console.log("Custom deep clone<<<====");

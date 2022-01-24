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

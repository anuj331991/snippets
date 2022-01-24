/*
1. Using object literal, liner flat objecs can be easily mutated (same as new Oject())
*/
let obj = { key: "value" };

/*
2. Using new keyword
*/

function Animal() {
  this.myAnimal = function () {
    return "My animal";
  };
}
let newObj = new Animal();
console.log(newObj.myAnimal());

/*
3. Using create keyword
*/
let createObj = Object.create(Animal, {
  sound: { value: "roarrr", writable: true },
});

console.log(createObj); // this will log an object with prop sound and the __proto__ will have Animal proptype

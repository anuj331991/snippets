let obj = {
  firstName: "Anuj",
  lastName: "Kumar",
};

function printName(city, state, country) {
  console.log(
    `First Name: ${this.firstName}, Last Name: ${this.lastName}, city:${city} ,state:${state}, country:${country}`
  );
}
let printMyName = printName.bind(obj, "meerut");

printMyName("up", "india");

//Polyfill for bind
Function.prototype.customBind = function (context, ...arg) {
  let fun = this;
  return function (...args2) {
    fun.apply(context, [...arg, ...args2]);
  };
};

let printMyName2 = printName.customBind(obj, "meerut");
printMyName2("up", "india");

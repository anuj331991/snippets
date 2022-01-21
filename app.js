class Name {
  constructor(name) {
    this.title = name;
    console.log(this);
  }

  getName() {
    console.log(this);
    //console.log("get my name");
  }
}

let obj = new Name("lol");
obj.getName();
//Arrow function()

//The value of this inside an arrow function remains the same throughout
// the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.
//"this" inside arrow function does not depend on how its called
let me = {
  name: "Ashutosh Verma",
  thisInArrow: () => {
    console.log("this in arrow", this);
    // console.log("My name is " + this.name); // no 'this' binding here
  },
  thisInRegular() {
    console.log("this in normal functions ", this); // 'this' binding works here
  },
};
me.thisInArrow();
me.thisInRegular();

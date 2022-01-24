class Dummy {
  constructor() {
    /**
     * We don’t need to do this in the constructor, and we can do this somewhere else as well.
     */
    this.sample = this.sample.bind(this); //binding
  }
  /**
   *
   * In the case of arrow functions, this is bound lexically.
   * This means that it uses the context of the enclosing function — or global
   *  — scope as its this value.
   */

  foo() {
    console.log("inside foo");
    return "returned from foo";
  }

  sample() {
    console.log("this", this);
    console.log("inside sample");
  }
}

let dummyObj = new Dummy();
console.log(dummyObj.sample()); //this works because this would point to the current obj in this case
let lol = dummyObj.sample; // This is similar when we call a function in react on click in class component
/**
 * Here this shows undefined because the context is lost ,this does not work here because as it called directly,
 *  now it would point to global object but it shows undefined in this case because class use strict mode
 */
lol();

let person = {
  name: "anuj",
  age: 31,
  nationality: "indian",
};

/**
 *
 * “A proxy can be useful to add validation. A user shouldn't be able to change person's age to a string value,
 * or give him an empty name.
 * Or if the user is trying to access a property on the object that doesn't exist, we should￼ let the user know”
 */

let personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`This value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Setting ${prop} from ${obj[prop]} to ${value}`);
    return "lol";
  },
});

personProxy.nationality;
personProxy.age = 43;

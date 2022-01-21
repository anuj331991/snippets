class Pubsub {
  constructor() {
    this.events = {};
  }
  subscription(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((subscriberCallback) =>
        subscriberCallback(data)
      );
    }
  }
}
const sayName = (name) => {
  console.log(`I am ${name}`);
};
const greet = (name) => {
  console.log(`Hello ${name}`);
};
const pubsub = new Pubsub();
pubsub.subscription("greet", greet);
pubsub.subscription("sayName", sayName);

pubsub.publish("greet", "anuj");
pubsub.publish("greet", "Lawrence Eagles"); // prints Hello Lawrence Eagles, John Doe, Jane Doe
pubsub.publish("sayName", "Lawrence Eagles"); // prints I am Lawrence Eagles

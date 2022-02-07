class Middleware {
  constructor() {
    this.events = [];
  }

  push = (call) => {
    this.events.push(call);
  };

  execute = (arg) => {
    this.events.forEach((func) => {
      func(arg);
    });
  };
}

const next = () => {
  return "done";
};

let obj = new Middleware();
obj.push((arg, next) => {
  console.log("push 2", arg);
});
obj.push((arg, next) => {
  console.log("push 2", arg);
  next();
});
obj.execute("anuj");

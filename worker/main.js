const myWorker = new Worker("worker.js");

myWorker.postMessage("Message sent");

myWorker.onmessage = function (data) {
  console.log(data.data);
};

console.log("end");

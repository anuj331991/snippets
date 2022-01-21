self.onmessage = function (data) {
  console.log(data.data);
  self.postMessage("MEssage from worker");
};

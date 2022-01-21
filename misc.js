//deep clone
let complexObj = {
  a: 7,
  b: {
    x: {
      c: 3,
    },
  },
};

let cloneObj = deepclone(complexObj);
complexObj.b.x.c = 98;
cloneObj;

function deepclone(obj) {
  var clone = {};
  for (let x in obj) {
    let val = obj[x];

    if (val !== null && typeof val === "object") {
      clone[x] = deepclone(val);
    } else {
      clone[x] = obj[x];
    }
  }
  return clone;
}

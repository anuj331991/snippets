console.log("===>>>Currrying starts");
// function volume(length, width, height) {
//   return length * width * height;
// }
function volume(length) {
  return function (width) {
    return function (height) {
      return length * width * height;
    };
  };
}
console.log("Volume", volume(1)(2)(3));
console.log("Currrying ends<<<====");

console.log("===>>>Custom deep clone");

let nestedObject = {
  a: 3,
  b: {
    c: {
      d: 9,
    },
  },
};
let nested2 = deepClone(nestedObject);

nested2["b"]["c"]["d"] = "anuj";
console.log(nestedObject);

function deepClone(obj) {
  let clone = {};
  for (let key in obj) {
    if (key != null && typeof obj[key] == "object") {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

console.log("Custom deep clone<<<====");

console.log("===>>Flatten array");

let arr1 = [1, [2, 3]];

function flatArray(arr) {
  var result = [];
  arr.forEach((element, index) => {
    if (Array.isArray(element)) {
      result = result.concat(flatArray(element));
    } else {
      result.push(element);
    }
  });
  return result;
}
console.log(flatArray(arr1));

console.log("<<<====Flatten array");

console.log("====>>diff finder");

let obj1 = {
  name: "anuj",
  address: {
    location: {
      complete: {
        pin: "110027",
      },
      area: {
        land: 234,
      },
    },
  },
};

let obj2 = {
  name: "anuj",
  address: {
    location: {
      complete: {
        pin: "110027",
      },
      area: {
        land: 235,
      },
    },
  },
};

function diffFinder(obj1, obj2) {
  var result = {};
  for (let key in obj1) {
    if (obj1[key] && typeof obj1[key] === "object") {
      result[key] = diffFinder(obj1[key], obj2[key]);
    } else if (obj1[key] && obj1[key] !== obj2[key]) {
      result[key] = obj1[key];
    }
  }
  return result;
}
let diff = diffFinder(obj1, obj2);
console.log(diff);
console.log("<<<==== diff finder");

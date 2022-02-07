/**
 * ====== CURRING STARTS HERE======
 */

function simpleVolume(length, width, height) {
  return length * width * height;
}
function volume(length) {
  return function (width) {
    return function (height) {
      return length * width * height;
    };
  };
}
console.log("Volume", volume(1)(2)(3));

recursiveVolume(1)(2)(3)(4)();

function recursiveVolume(a) {
  return function (b) {
    if (b) {
      return recursiveVolume(a * b);
    }
    return a;
  };
}

console.log("recursiveVolume", recursiveVolume(1)(2)(3)(4)());

/**
 * ====== CURRING ENDS HERE======
 */

/**
 *  ====== DEEP CLONE STARTS HERE =====
 */
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

/**
 *  ====== DEEP CLONE ENDS HERE =====
 */

/**
 *  ====== FLAT ARRAY STARTS HERE =====
 */

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

/**
 *  ====== FLAT ARRAY ENDS HERE =====
 */

/**
 *  ====== FLAT OBJECT STARTS HERE =====
 */
let obj = {
  name: "Anuj",
  address: {
    personal: {
      city: "delhi",
      state: "Delhi",
    },
    office: {
      city: "gurgaon",
      state: "haryana",
    },
  },
};

let output = {
  user_name: "Anuj",
  user_address_personal_city: "Delhi",
  user_address_personal_state: "delhi",
  user_address_office_city: "gurgaon",
  user_address_office_state: "haryana",
};

let finalObj = {};
function flatObj(inputObj, parent) {
  for (let key in inputObj) {
    if (typeof inputObj[key] === "object") {
      flatObj(inputObj[key], `${parent}.${key}`);
    } else {
      finalObj[`${parent}.${key}`] = inputObj[key];
    }
  }
  return finalObj;
}
let result = flatObj(obj, "user");
console.log(result);
/**
 *  ====== FLAT OBJECT ENDS HERE =====
 */

/**
 *  ====== DIFF FINDER STARTS HERE =====
 */

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
console.log("diffFinder", diff);
/**
 *  ====== DIFF FINDER ENDS HERE =====
 */

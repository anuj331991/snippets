// foreach polyfill
//forEach(function(element, index, array) { /* ... */ }, thisArg)

Array.prototype.eachAlbum = function (callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this); // currentValue, index, array
  }
};

// map(function(element, index, array) { /* ... */ }, thisArg)

//Map polyfill
Array.prototype.ourMap = function (callback) {
  var arr = []; // since, we need to return an array
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)); // pushing currentValue, index, array
  }
  return arr; // finally returning the array
};

//Filter pollyfill
// filter(function(element, index, array) { /* ... */ }, thisArg)

var logicAlbums = [
  {
    name: "Bobby Tarantino",
    rating: 5,
  },
  { name: "The Incredible True Story", rating: 4.5 },
  {
    name: "Supermarket",
    rating: 4.9,
  },
  { name: "Under Pressure", rating: 5 },
];
logicAlbums.filter((album, index, array) => {
  return album.rating > 4.9;
}, this);
console.log(logicAlbums);

Array.prototype.ourFilter = function (callback, context) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

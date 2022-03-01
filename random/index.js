var v;
function f1() {
  console.log(v);
}
function f2() {
  var v = 2;
  f1();
}
f2();

// function x() {
//    var a = 7;
//    function y() {
//       var b = 20;
//       console.log(a);
//       function z() {
//          console.log(b);
//       }
//       z();
//    }
//    y();
// }
// x();

function x() {
   return function y() {
      var x = 10;
      console.log(x);
   }
}
var z = x();
console.log(z);
z();
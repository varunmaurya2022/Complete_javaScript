function x() {
   var a = 7;
   function y() {
      var b = 20;
      console.log(a);
      function z() {
         console.log(b);
      }
      z();
   }
   y();
}
x();
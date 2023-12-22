let n = prompt("Enter you number to find Factorial ");
let fact = 1;
for (let i = 1; i <= n; i++) {
   fact = fact * i;
}
console.log("fcatorial of " + n + " is " + fact);
document.write("factorial of " + n + " is " + fact);
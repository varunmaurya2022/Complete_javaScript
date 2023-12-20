const student = {
   fullName: "varun maurya",
   location: "New Delhi",
   age: 23,
   isPass: true
};
console.log(student);

for (let i in student) {
   console.log(student[i]);
}
console.log("FullName ", student["fullName"]);
student.age = 22;
console.log("Age Update " + student.age); //but can't change the name of objects.

console.log("Product Object");

const product = {
   Name: "watch",
   price: 1250,
   offer: 20,
   isDeal: true,
   rating: 4
};
console.log(product.rating);
for (let i in product) {
   console.log(product[i]);
}

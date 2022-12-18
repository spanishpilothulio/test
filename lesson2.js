//point 6
let user = "Jon Doe";
let student = "Dmitry";
user = student;
console.log(user);

//point 7
let test = 1;
test += 1;
console.log(test);

--test;
console.log(test);

test = Boolean(test);
console.log(test);

//point 8
let array1 = [2, 3, 5, 8];
let result = 0;

for (i = 0; i < array1.length; i++) {
  result += array1[i];
}

console.log(result);

//point 9
let array2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (i = 0; i < array2.length; i++) {
  if (array2[i] > 5 && array2[i] < 10) {
    console.log(array2[i]);
  }
}

//point 10
for (i = 0; i < array2.length; i++) {
    if (array2[i] % 2 == 0) {
      console.log(array2[i]);
    }
  }
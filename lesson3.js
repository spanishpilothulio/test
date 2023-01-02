// the polindrome function
const polindrome = function (word) {
  let firstWord = word;
  let secondWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    secondWord += word[i];
  }

  firstWord === secondWord ? console.log("true") : console.log("false");
};

polindrome("salas");

// the min/max functions
// const comparser = function (a, b) {
//   a > b
//     ? console.log(`${a}`)
//     : a < b
//     ? console.log(`${b}`)
//     : console.log(`${a} and ${b} are equal`);
// };

// the min function

function min(a, b) {
  return a < b ? a : b;
}

// the max function

function max(a, y) {
  return a > y ? a : y;
}

console.log(min(2, 4));
console.log(max(2, 4));

// random array creating

const generateArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

oldArray = generateArray(10, 100);
console.log(oldArray);

// the zeroReplacer function
const zeroReplacer = oldArray.map(function (element) {
  if (element == 0) {
    return 'zero';
  } else if (element % 10 == 0) {
    return element.toString().replaceAll(0, 'zero');
  }
  return element;
});

console.log(zeroReplacer);

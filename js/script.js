let sayHi = function (text) {
  let wordArray = text.split(" ");

  let longestWord = wordArray[0];

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < longestWord.length) {
      longestWord = wordArray[i];
    };
  };

  return longestWord;
};
let result = sayHi("Hello Good Bad Luck Idiot Happy Congratulations");
console.log("Shortest one of this words: Hello Good Bad Luck Idiot Happy Congratulations");
console.log(result);

//uy ishi 2
let sayHiNumber = function (text) {

  let longestNumber = numbers[0];

  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > longestNumber) {
      longestNumber = numbers[j];
    }
  }

  return longestNumber;
}
let numbers = [10, 20, 30, 40, 70, -70, 4, 80, 100];
let resultNumbers = sayHiNumber();
console.log(`The biggest one of this Numbers: 10, 20, 30, 40, 70, -70, 4, 80, 100`);
console.log(` ${resultNumbers}`);

//uy ishi 3
let sayHiNumbers = function (number) {

  let longNumbers2 = numbers2[0];

  for (let k = 0; k < numbers2.length; k++) {
    if (numbers2[k] < longNumbers2) {
      longNumbers2 = numbers2[k];
    }
  }

  return longNumbers2;
}
let numbers2 = [10, 20, 30, 40, 70, -70, 4, 80, 100];
let resulnumber = sayHiNumber();
console.log(`The most litle one of this numbers: 10, 20, 30, 40, 70, -70, 4, 80, 100`);
console.log(`${resulnumber}`);
//? let word = "JavaScript";  sözündə 3 nömrəli indeksin hansı hərf olduğunu tapın
let word = "JavaScript";
console.log(word[3]);

//?let sentence = "This is a simple sentence."; “is ” sözünün indeksini tapın
let sentence = "This is a simple sentence.";
let indexOfIs = sentence.indexOf("is");
console.log(indexOfIs);

//?let sentence = "This is a sample sentence.";   sözü boşluqlardan ayıraraq array-ə çevirin .
//?Output: ["This", "is", "a", "sample", "sentence."]
let sentence1 = "This is a sample sentence.";
console.log(sentence1.split(" "));

//?let phrase = "Programming is fun!";  “Programming” sözünü ayırın cümlədən.
//? Output: Programming
let phrase = "Programming is fun!";
// let programming = phrase.split(" ")[0];
// console.log(programming);
let indexOfProg = phrase.indexOf("Programming") + "Programming".length;
console.log(phrase.slice(phrase.indexOf("Programming"), indexOfProg));

//?let phrase = "Programming is fun!";  “fun” sözünü ayırın cümlədən.
//? Output: fun
let phrase1 = "Programming is fun!";
console.log(phrase1.substring(15, 18));
//? Verilmiş ifadəni tərsinə çevirən metod yazın.
//? let originalString = "Hello, World!"; let reversedString = reverseString(originalString);
//? console.log(reversedString); // Output: "!dlroW ,olleH"
let originalString = "Hello, World!";
let reversedString = function (originalString) {
  let reversedString = " ";
  for (let index = originalString.length - 1; index >= 0; index--) {
    reversedString += originalString[index];
  }
  console.log(reversedString);
};
reversedString(originalString);

//? Verilmiş ifadənin ilk hərflərini böyüklə yazan metod yazın tərsinə çevirən metod yazın
//? let sentence = "javascript is fun";
//? console.log(capitalizeWords(sentence)); // Output: "Javascript Is Fun"
let sentence2 = "javascript is fun";
let capitalizeWords = function (sentence) {
  const splitString = sentence.split(" ");
  for (let i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
  }
  const joinString = splitString.join(" ");
  return joinString;
};
console.log(capitalizeWords(sentence2));

//? Verilmiş cümlədəki qalın saitləri tapan metod yazın
//? let text = "JavaScript is awesome!";
//? console.log(countVowels(text)); // Output: 8

let text = "JavaScript is awesome!";
const countVowels = function (text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }

  return count;
};

console.log(countVowels(text));

//? Verilmiş cümlədəki ən uzun sözü tapan metod yazın
//? let sentence = "This is a sample sentence with long words.";
//? console.log(findLongestWord(sentence)); // Output: "sentence"
let sentence3 = "This is a sample sentence with long words.";
const findLongestWord = function (sentence) {
  let words = sentence.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
};
console.log(findLongestWord(sentence));

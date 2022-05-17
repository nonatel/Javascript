let word1 = "abanane";
let word2 = "asdfghp";
let word3 = "qaxswerq";

function isogram(word) {

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[i] == word[j + 1]) {
        let isIsogram = false;
      } else {
        isIsogram = true;
      }
    }
  }
  return isIsogram;
}
console.log(isogram(word1))
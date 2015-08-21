
function findLongestWord(str) {
  var wordArray = str.split(" ");
  var lWord = 0;
  for (var i = 0; i < wordArray.length; i++) {
    // if (wordArray[i].length > lWord.length) {
    if (wordArray[i].length > lWord) {
      lWord = wordArray[i].length;
    }
  }
  return lWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

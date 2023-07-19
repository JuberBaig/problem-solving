function getLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  
  let str = "hello i am ankit jain $ i'm from morena";
  let result = getLongestWord(str);
  console.log("The longest word is:", result);
  
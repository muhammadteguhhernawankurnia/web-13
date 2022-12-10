const deteksiPalidrome = (word) => {
  if (word.length <= 2) {
    return "Teks Harus Lebih Dari 2 Huruf";
  } else {
    if (word.length > 2) {
      let strArray = word.toLowerCase().split("");
      //   console.log(strArray);
      let reverseArr = [...strArray].reverse().join("");
      //   console.log(reverseArr);

      if (word === reverseArr) {
        return "palindrome";
      } else {
        return "bukan palindrome";
      }
    }
  }
};

console.log(deteksiPalidrome("ra"));

// let word1 = "aabaA";
// let word2 = "fraza";
// let word3 = "a";

// function checkPalindrome(input) {
// let strArray = input.toLowerCase().split("");
// let newArr = strArray.join("");
// let reverseArr = [...newArr].reverse().join("");

//   if (newArr === reverseArr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkPalindrome(word1));
// console.log(checkPalindrome(word2));
// console.log(checkPalindrome(word3));

// let palindrome = function (word){
//     let len = word.length;
//     let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
//     let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
//     let flip = end.split('').reverse().join('');
//     return (start === flip)
// }

// console.log(palindrome('radar'));
// console.log(palindrome('raddar'));

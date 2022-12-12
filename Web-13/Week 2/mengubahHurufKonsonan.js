const inputWord = (input) => {
  let result = "";

  if (typeof input !== "string") {
    result = "Tipe Data Teks Harus String!";
  } else {
    let replaceWord = input.replace(/a/g, "o");

    result = replaceWord;
  }
  return result;
};

console.log(inputWord("Jakarta is my city"));

// const word = "jakarta";

// if (typeof word !== "string") {
//   console.log("Tipe Data Teks Harus String!");
// } else {
//   let replaceWord = word.replace(/a/g, "o");

//   console.log(replaceWord);
// }

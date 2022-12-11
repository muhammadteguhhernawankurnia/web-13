const word = "jakarta";

if (typeof word !== "string") {
  console.log("Tipe Data Teks Harus String!");
} else {
  let replaceWord = word.replace(/a/g, "o");

  console.log(replaceWord);
}

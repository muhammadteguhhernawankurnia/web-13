function ubah(kata) {
  // a. Jika dalam sebuah string terdapat huruf “C” yang diikuti dengan huruf vocal “A”,”I”,”U”,”E”,”O” maka ubahlah huruf “C” tersebut menjadi huruf “Z”.
  let langkah1 = kata.replace(/(c[aiueo])/gi, "Z");

  // b. Hilangkan semua huruf vokal yang ada dalam sebuah String.
  let langkah2 = langkah1.replace(/[aiueo]/gi, "");

  // c. Ganti semua huruf “S” dengan huruf “B” begitu juga sebaliknya ganti huruf “B” dengan huruf “S”.
  let langkah3 = langkah2
    .split("")
    .map((huruf) => {
      if (/[sb]/i.test(huruf)) {
        return huruf === "S" ? "B" : "S";
      }
      return huruf;
    })
    .join("");

  return langkah3;
}

console.log(ubah("SCOOTER"));
// BZTR

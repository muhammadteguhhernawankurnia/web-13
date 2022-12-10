const bahasaIndonesia = null;
const bahasaInggris = 59;
const matematika = 59;
const ipa = 59;
const rataRataNilai = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;

if (
  bahasaIndonesia == null ||
  bahasaInggris == null ||
  matematika == null ||
  ipa == null
) {
  console.log("Semua Nilai Harus Terisi!");
} else if (rataRataNilai >= 90 && rataRataNilai <= 100) {
  console.log("Rata-rata = " + rataRataNilai);
  console.log("Grade = A ");
} else if (rataRataNilai >= 80 && rataRataNilai <= 89) {
  console.log("Rata-rata = " + rataRataNilai);
  console.log("Grade = B ");
} else if (rataRataNilai >= 70 && rataRataNilai <= 79) {
  console.log("Rata-rata = " + rataRataNilai);
  console.log("Grade = C ");
} else if (rataRataNilai >= 60 && rataRataNilai <= 69) {
  console.log("Rata-rata = " + rataRataNilai);
  console.log("Grade = D ");
} else if (rataRataNilai >= 0 && rataRataNilai <= 59) {
  console.log("Rata-rata = " + rataRataNilai);
  console.log("Grade = E ");
} else {
  console.log("Nilai Tidak Valid, Cek Kembali Inputan Nilai Anda!");
}

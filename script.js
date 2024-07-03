async function inipesan() {
  var { value: nama } = await swals.fire({
    title: "Masukin Nama Kamu",
    input: "text",
  });
  if (nama && nama.length < 11) {
    window.nama = nama;
    vketikhalo = "Hai, " + nama + " ✨";
    mulainama();
  } else {
    await swals.fire(
      "Ups!",
      "Nama tidak boleh kosong atau lebih dari 10 karakter, ya!"
    );
    inipesan();
  }
}

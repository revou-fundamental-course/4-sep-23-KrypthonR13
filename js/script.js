const hasilL = document.getElementById("hasilLuas");
const hasilK = document.getElementById("hasilKeliling");

function hitungLuas() {
  const sisi = parseInt(document.getElementById("luasSisi").value);
  if (isNaN(sisi) || sisi <= 0) {
    alert("Jumlah sisi harus bilangan positif dan tidak boleh 0.");
    return;
  }
  const luas = sisi * sisi;
  hasilL.innerHTML = `
        <p>Hasil :</p>
        <p>${luas} cm²</p>
    `;
}

function hitungKeliling() {
  const sisi = parseInt(document.getElementById("kelilingSisi").value);
  if (isNaN(sisi) || sisi <= 0) {
    alert("Jumlah sisi harus bilangan positif dan tidak boleh 0.");
    return;
  }
  const keliling = 4 * sisi;
  hasilK.innerHTML = `
        <p>Hasil :</p>
        <p>${keliling} cm</p>
    `;
}

document.getElementById("hitungLuas").addEventListener("click", hitungLuas);
document.getElementById("hitungKeliling").addEventListener("click", hitungKeliling);

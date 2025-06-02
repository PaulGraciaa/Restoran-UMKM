document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const meja = document.getElementById("meja").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Validasi sederhana: nama tidak boleh kosong dan nomor meja harus angka 1-20
if (nama.length < 2) {
  errorMsg.textContent = "Nama harus lebih dari 1 huruf.";
} else if (isNaN(meja) || meja < 1 || meja > 20) {
  errorMsg.textContent = "Nomor meja harus antara 1 hingga 20.";
} else {
  alert(`Selamat datang, ${nama}! Anda duduk di meja ${meja}.`);
  localStorage.setItem("nama", nama);
  localStorage.setItem("meja", meja);
  window.location.href = "dashboard.html";
}
});

const pesanan = JSON.parse(localStorage.getItem('pesanan')) || [];

function renderPesanan() {
  const container = document.getElementById('pesananList');
  const totalContainer = document.getElementById('totalKeseluruhan');
  const nilaiTotalSpan = document.getElementById('nilaiTotal');
  container.innerHTML = ''; // Bersihkan kontainer
  let total = 0;

  if (pesanan.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#7f8c8d;">Keranjang pesanan Anda kosong.</p>';
    const btnLanjut = document.querySelector('.btn-lanjut');
    if(btnLanjut) btnLanjut.style.display = 'none';
    if(totalContainer) totalContainer.style.display = 'none';
    return;
  }

  const btnLanjut = document.querySelector('.btn-lanjut');
  if(btnLanjut) btnLanjut.style.display = 'inline-block'; // Pastikan tombol lanjut tampil jika ada pesanan

  pesanan.forEach(item => {
    const subtotal = item.harga * item.qty;
    total += subtotal;
    const formattedSubtotal = subtotal.toLocaleString('id-ID');
    container.innerHTML += `
      <div class="pesanan-item">
        <span>${item.nama} (x${item.qty})</span>
        <span>Rp ${formattedSubtotal}</span>
      </div>
    `;
  });

  const formattedTotal = total.toLocaleString('id-ID');
  if (nilaiTotalSpan) nilaiTotalSpan.textContent = formattedTotal;
  if (totalContainer) totalContainer.style.display = 'block';
}

function lanjutkanPembayaran() {
  if (pesanan.length === 0) {
    tampilkanModalNotifikasi("Pesanan Kosong", "Keranjang pesanan Anda kosong. Silakan kembali untuk memilih menu.");
    return;
  }
  // Simpan data pesanan ke localStorage (atau kirim ke server) sebelum pindah halaman
  // localStorage.setItem('pesananUntukPembayaran', JSON.stringify(pesanan));
  // localStorage.removeItem('pesanan'); // Hapus keranjang belanja setelah diproses ke pembayaran

  // Arahkan ke halaman pembayaran
  window.location.href = 'Payment.html'; // Ganti dengan nama file halaman pembayaran Anda
}

function tampilkanModalNotifikasi(judul, pesan) {
    const modal = document.getElementById('modalNotifikasi');
    const modalJudul = document.getElementById('modalNotifikasiJudul');
    const modalPesan = document.getElementById('modalNotifikasiPesan');
    if (modal && modalJudul && modalPesan) {
        modalJudul.innerText = judul;
        modalPesan.innerText = pesan;
        modal.classList.add('active');
    }
}

function tutupModalNotifikasi() {
  const modal = document.getElementById('modalNotifikasi');
  if (modal) {
    modal.classList.remove('active');
  }
  // Jika perlu, arahkan ke dashboard setelah menutup modal notifikasi tertentu
  window.location.href = "dashboard.html"; 
}

// Event listener untuk menutup modal jika diklik di luar kontennya
const modalNotifikasi = document.getElementById('modalNotifikasi');
if(modalNotifikasi) {
    modalNotifikasi.addEventListener('click', function(event) {
    if (event.target === modalNotifikasi) { // Pastikan yang diklik adalah area overlay modal, bukan kontennya
        tutupModalNotifikasi();
    }
    });
}

window.onload = renderPesanan;
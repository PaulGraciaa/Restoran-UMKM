// dashboard.js

const pesanan = [];
const kategoriList = ['makanan', 'minuman', 'icecream', 'coffee', 'alacarte'];

const menuItems = [
  // Makanan (15 items)
  { nama: "Nasi Goreng Spesial", harga: 28000, gambar: "img/nasi-goreng.jpg", kategori: "makanan" },
  { nama: "Sate Ayam Madura", harga: 30000, gambar: "img/sate-ayam-madura.jpg", kategori: "makanan" },
  { nama: "Mie Ayam Bakso", harga: 25000, gambar: "img/mie-ayam-bakso.jpg", kategori: "makanan" },
  { nama: "Gado-Gado", harga: 22000, gambar: "img/gado-gado.jpg", kategori: "makanan" },
  { nama: "Soto Ayam Lamongan", harga: 26000, gambar: "img/soto-ayam.jpg", kategori: "makanan" },
  { nama: "Rawon Daging", harga: 35000, gambar: "img/rawon.jpg", kategori: "makanan" },
  { nama: "Ayam Bakar Taliwang", harga: 40000, gambar: "img/mie-ayam.jpg", kategori: "makanan" }, // Nama file gambar mungkin perlu disesuaikan jika tidak sesuai dengan nama item
  { nama: "Iga Bakar Madu", harga: 55000, gambar: "img/iga-bakar.jpg", kategori: "makanan" },
  { nama: "Capcay Seafood", harga: 38000, gambar: "img/capcay-seafood.jpg", kategori: "makanan" },
  { nama: "Nasi Uduk Komplit", harga: 32000, gambar: "img/nasi-uduk.jpg", kategori: "makanan" },
  { nama: "Pempek Palembang", harga: 27000, gambar: "img/pempek.jpg", kategori: "makanan" },
  { nama: "Rendang Daging", harga: 45000, gambar: "img/rendang.jpg", kategori: "makanan" },
  { nama: "Bakso Malang", harga: 28000, gambar: "img/bakso-malang.jpg", kategori: "makanan" },
  { nama: "Ketoprak", harga: 20000, gambar: "img/ketoprak.jpg", kategori: "makanan" },
  { nama: "Sop Buntut", harga: 60000, gambar: "img/sop-buntut.jpg", kategori: "makanan" },

  // Minuman (15 items)
  { nama: "Es Teh Manis", harga: 8000, gambar: "img/es-teh-manis.jpg", kategori: "minuman" },
  { nama: "Es Jeruk", harga: 10000, gambar: "img/es-jeruk.jpg", kategori: "minuman" },
  { nama: "Jus Alpukat", harga: 18000, gambar: "img/jus-alpukat.jpg", kategori: "minuman" },
  { nama: "Jus Mangga", harga: 17000, gambar: "img/jus-mangga.jpg", kategori: "minuman" },
  { nama: "Es Kelapa Muda", harga: 15000, gambar: "img/es-kelapa.jpg", kategori: "minuman" },
  { nama: "Lemon Tea", harga: 12000, gambar: "img/lemon-tea.jpg", kategori: "minuman" },
  { nama: "Air Mineral", harga: 5000, gambar: "img/air-mineral.jpg", kategori: "minuman" },
  { nama: "Soda Gembira", harga: 20000, gambar: "img/soda-gembira.jpg", kategori: "minuman" },
  { nama: "Es Cincau Hijau", harga: 13000, gambar: "img/es-cincau.jpg", kategori: "minuman" },
  { nama: "Wedang Jahe", harga: 12000, gambar: "img/wedang-jahe.jpg", kategori: "minuman" },
  { nama: "Teh Tarik", harga: 15000, gambar: "img/teh-tarik.jpg", kategori: "minuman" },
  { nama: "Jus Sirsak", harga: 18000, gambar: "img/jus-sirsak.jpg", kategori: "minuman" },
  { nama: "Es Lidah Buaya", harga: 16000, gambar: "img/es-lidah-buaya.jpg", kategori: "minuman" },
  { nama: "Bandrek", harga: 14000, gambar: "img/bandrek.jpg", kategori: "minuman" },
  { nama: "Coklat Panas", harga: 18000, gambar: "img/coklat-panas.jpg", kategori: "minuman" },

  // Ice Cream (15 items)
  { nama: "Vanilla Cone", harga: 10000, gambar: "img/vanilla-cone.jpg", kategori: "icecream" },
  { nama: "Chocolate Sundae", harga: 18000, gambar: "img/chocolate-sundae.jpg", kategori: "icecream" },
  { nama: "Strawberry Sorbet", harga: 15000, gambar: "img/strawberry-sorbet.jpg", kategori: "icecream" },
  { nama: "Cookies and Cream Cup", harga: 20000, gambar: "img/cookies-cream.jpg", kategori: "icecream" },
  { nama: "Mango Tango Ice", harga: 17000, gambar: "img/mango-ice.jpg", kategori: "icecream" },
  { nama: "Pistachio Gelato", harga: 22000, gambar: "img/pistachio-gelato.jpg", kategori: "icecream" },
  { nama: "Banana Split", harga: 25000, gambar: "img/banana-split.jpg", kategori: "icecream" },
  { nama: "Rum Raisin", harga: 20000, gambar: "img/rum-raisin.jpg", kategori: "icecream" },
  { nama: "Matcha Ice Cream", harga: 19000, gambar: "img/matcha-ice.jpg", kategori: "icecream" },
  { nama: "Durian Delight", harga: 28000, gambar: "img/durian-ice.jpg", kategori: "icecream" },
  { nama: "Salted Caramel Swirl", harga: 21000, gambar: "img/salted-caramel.jpg", kategori: "icecream" },
  { nama: "Blueberry Cheesecake Ice", harga: 23000, gambar: "img/blueberry-cheesecake.jpg", kategori: "icecream" },
  { nama: "Coconut Bliss", harga: 18000, gambar: "img/coconut-ice.jpg", kategori: "icecream" },
  { nama: "Tutti Frutti", harga: 16000, gambar: "img/tutti-frutti.jpg", kategori: "icecream" },
  { nama: "Coffee Affogato Style", harga: 24000, gambar: "img/affogato-ice.jpg", kategori: "icecream" },

  // Coffee (15 items)
  { nama: "Kopi Hitam Tubruk", harga: 12000, gambar: "img/kopi-tubruk.jpg", kategori: "coffee" },
  { nama: "Espresso Single", harga: 15000, gambar: "img/espresso-single.jpg", kategori: "coffee" },
  { nama: "Americano", harga: 18000, gambar: "img/americano.jpeg", kategori: "coffee" },
  { nama: "Cappuccino", harga: 22000, gambar: "img/cappuccino.jpg", kategori: "coffee" },
  { nama: "Caffe Latte", harga: 23000, gambar: "img/latte.jpg", kategori: "coffee" },
  { nama: "Mocha Latte", harga: 25000, gambar: "img/mocha-latte.jpg", kategori: "coffee" },
  { nama: "Caramel Macchiato", harga: 28000, gambar: "img/caramel-macchiato.jpg", kategori: "coffee" },
  { nama: "Kopi Susu Gula Aren", harga: 20000, gambar: "img/kopi-susu-aren.jpg", kategori: "coffee" },
  { nama: "Vietnam Drip", harga: 24000, gambar: "img/vietnam-drip.jpg", kategori: "coffee" },
  { nama: "Cold Brew", harga: 26000, gambar: "img/cold-brew.jpg", kategori: "coffee" },
  { nama: "Flat White", harga: 22000, gambar: "img/flat-white.jpg", kategori: "coffee" },
  { nama: "Irish Coffee (Non-Alkohol)", harga: 30000, gambar: "img/irish-coffee.jpg", kategori: "coffee" },
  { nama: "Hazelnut Latte", harga: 27000, gambar: "img/hazelnut-latte.jpg", kategori: "coffee" },
  { nama: "Vanilla Latte", harga: 27000, gambar: "img/vanilla-latte.jpg", kategori: "coffee" },
  { nama: "Affogato", harga: 25000, gambar: "img/affogato.jpg", kategori: "coffee" },

  // Alacarte (15 items)
  { nama: "Steak Daging Sapi Sirloin", harga: 75000, gambar: "img/sirloin-steak.jpg", kategori: "alacarte" },
  { nama: "Ikan Bakar Jimbaran", harga: 65000, gambar: "img/ikan-bakar-jimbaran.jpg", kategori: "alacarte" },
  { nama: "Udang Saus Padang", harga: 55000, gambar: "img/udang-saus-padang.jpg", kategori: "alacarte" },
  { nama: "Cumi Goreng Tepung", harga: 45000, gambar: "img/cumi-goreng.jpg", kategori: "alacarte" },
  { nama: "Pasta Carbonara", harga: 60000, gambar: "img/pasta-carbonara.jpg", kategori: "alacarte" },
  { nama: "Pizza Margherita", harga: 70000, gambar: "img/pizza-margherita.jpg", kategori: "alacarte" },
  { nama: "Chicken Cordon Bleu", harga: 68000, gambar: "img/cordon-bleu.jpg", kategori: "alacarte" },
  { nama: "Salmon Panggang Lemon", harga: 95000, gambar: "img/salmon-panggang.jpg", kategori: "alacarte" },
  { nama: "Bebek Goreng Krispi", harga: 58000, gambar: "img/bebek-goreng.jpg", kategori: "alacarte" },
  { nama: "Lasagna Klasik", harga: 62000, gambar: "img/lasagna.jpg", kategori: "alacarte" },
  { nama: "Tom Yum Seafood", harga: 50000, gambar: "img/tom-yum.jpg", kategori: "alacarte" },
  { nama: "Nasi Goreng Seafood XO", harga: 48000, gambar: "img/nasi-goreng-xo.jpg", kategori: "alacarte" },
  { nama: "Kepiting Saus Tiram", harga: 85000, gambar: "img/kepiting-tiram.jpg", kategori: "alacarte" },
  { nama: "Gurame Asam Manis", harga: 72000, gambar: "img/gurame-asam-manis.jpg", kategori: "alacarte" },
  { nama: "Lamb Chop Rosemary", harga: 120000, gambar: "img/lamb-chop.jpg", kategori: "alacarte" }
];

function buatKategori() {
  const container = document.getElementById('kategoriContainer');
  kategoriList.forEach((kategori, index) => {
    const btn = document.createElement('button');
    btn.className = `kategori-btn${index === 0 ? ' active' : ''}`;
    btn.innerText = kategori.charAt(0).toUpperCase() + kategori.slice(1);
    btn.onclick = () => showMenu(kategori);
    container.appendChild(btn);
  });
}

function buatMenu() {
  const container = document.getElementById('menuContainer');
  // Bersihkan menu container sebelum membuat yang baru (jika fungsi ini dipanggil ulang)
  container.innerHTML = ''; 
  kategoriList.forEach(kategori => {
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    grid.id = `grid-${kategori}`;
    // Tampilkan grid kategori pertama (makanan) secara default, sembunyikan yang lain
    grid.style.display = kategori === kategoriList[0] ? 'grid' : 'none';

    menuItems.filter(item => item.kategori === kategori).forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-item';
      // Menggunakan path gambar yang sudah lengkap dari item.gambar
      card.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}" onerror="this.onerror=null;this.src='https://placehold.co/220x150/cccccc/333333?text=Gambar+Tidak+Tersedia&font=montserrat';">
        <div class="menu-item-content">
          <p class="nama">${item.nama}</p>
          <p class="harga">Rp ${item.harga.toLocaleString('id-ID')}</p>
          <p class="jumlah" data-nama="${item.nama}"></p>
          <button class="tambah-btn" onclick="tambahPesanan('${item.nama}', ${item.harga})">Pilih</button>
        </div>
      `;
      grid.appendChild(card);
    });

    container.appendChild(grid);
  });
}

function showMenu(kategori) {
  kategoriList.forEach(kat => {
    const gridElement = document.getElementById(`grid-${kat}`);
    if (gridElement) {
      gridElement.style.display = kat === kategori ? 'grid' : 'none';
    }
  });

  document.querySelectorAll('.kategori-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.innerText.toLowerCase() === kategori.toLowerCase()) {
      btn.classList.add('active');
    }
  });
}

function tambahPesanan(nama, harga) {
  const existing = pesanan.find(item => item.nama === nama);
  if (existing) {
    existing.qty += 1;
  } else {
    pesanan.push({ nama, harga, qty: 1 });
  }
  updateJumlahDipilih();
  updateBadgePesanan(); // Panggil fungsi update badge
}

function updateJumlahDipilih() {
  document.querySelectorAll('.menu-item').forEach(card => {
    const namaMenu = card.querySelector('.nama').innerText;
    const elJumlah = card.querySelector('.jumlah');
    if(elJumlah) {
        const itemDipesan = pesanan.find(p => p.nama === namaMenu);
        elJumlah.innerText = itemDipesan ? `Dipilih: ${itemDipesan.qty}` : '';
    }
  });
}

// Fungsi baru untuk update badge di tombol floating
function updateBadgePesanan() {
  const floatingButton = document.querySelector('.floating-button'); // Asumsi tombol memiliki kelas .floating-button
  if (!floatingButton) return;

  let totalQty = 0;
  pesanan.forEach(item => {
    totalQty += item.qty;
  });

  let badge = floatingButton.querySelector('.item-count-badge');
  if (totalQty > 0) {
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'item-count-badge';
      // Masukkan badge sebelum teks tombol jika ada teks, atau sebagai child pertama
      const buttonTextNode = Array.from(floatingButton.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
      if (buttonTextNode) {
        floatingButton.insertBefore(badge, buttonTextNode);
      } else {
        floatingButton.prepend(badge);
      }
    }
    badge.innerText = totalQty;
  } else {
    if (badge) {
      badge.remove();
    }
  }
}


function goToTinjau() {
  if (pesanan.length === 0) {
    const modal = document.getElementById('modalKosong');
    if (modal) {
        modal.style.display = 'flex'; // Atau 'block', tergantung CSS modal
        modal.classList.add('active'); // Jika menggunakan kelas 'active' untuk display
    }
    return;
  }

  localStorage.setItem('pesanan', JSON.stringify(pesanan));
  window.location.href = 'tinjau.html'; // Pastikan halaman tinjau.html ada
}

function tutupModalKosong() {
  const modal = document.getElementById('modalKosong');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('active'); // Jika menggunakan kelas 'active'
  }
}

// Memanggil fungsi saat DOM sudah dimuat
window.onload = () => {
  buatKategori();
  buatMenu();
  updateBadgePesanan(); // Inisialisasi badge saat load
  // Menutup modal jika diklik di luar kontennya
  const modalKosong = document.getElementById('modalKosong');
  if(modalKosong) {
    modalKosong.addEventListener('click', function(event) {
      if (event.target === modalKosong) {
        tutupModalKosong();
      }
    });
  }
};

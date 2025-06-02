document.addEventListener('DOMContentLoaded', function () {
  const qrisBtn = document.getElementById('qrisBtn');
  const cashierBtn = document.getElementById('cashierBtn');
  const qrisPopup = document.getElementById('qrisPopup');
  const closePopup = document.getElementById('closePopup');
  const confirmPayment = document.getElementById('confirmPayment');
  const paymentSuccess = document.getElementById('paymentSuccess');

  qrisBtn.addEventListener('click', showQRISPopup);
  cashierBtn.addEventListener('click', () => pilihMetode('Kasir'));
  closePopup.addEventListener('click', hideQRISPopup);
  confirmPayment.addEventListener('click', () => pilihMetode('QRIS'));

  qrisPopup.addEventListener('click', function (e) {
    if (e.target === this) {
      hideQRISPopup();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && qrisPopup.classList.contains('active')) {
      hideQRISPopup();
    }
  });

  // Fungsi Notifikasi
  function showNotification() {
    paymentSuccess.classList.add('show');
    setTimeout(() => {
      paymentSuccess.classList.add('hide');
    }, 2000);
    setTimeout(() => {
      paymentSuccess.classList.remove('show', 'hide');
    }, 3000);
  }function showNotification(id) {
  const notif = document.getElementById(id);
  notif.classList.add('show');

  setTimeout(() => {
    notif.classList.add('hide');
  }, 2000);
  setTimeout(() => {
    notif.classList.remove('show', 'hide');
  }, 3000);
}

  function pilihMetode(metode) {
  hideQRISPopup();

  if (metode === 'QRIS') {
    showNotification('paymentSuccess');
  } else if (metode === 'Kasir') {
    showNotification('cashierNotification');
  }
}

});

function showQRISPopup() {
  document.getElementById('qrisPopup').classList.add('active');
}

function hideQRISPopup() {
  document.getElementById('qrisPopup').classList.remove('active');
}

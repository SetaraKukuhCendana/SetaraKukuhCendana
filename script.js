// Fungsi Menampilkan Detail Layanan
function showDetail(event) {
  // Ambil elemen parent kartu layanan yang diklik
  const card = event.currentTarget.closest(".service-card");

  // Ambil gambar, judul, dan deskripsi dari elemen kartu layanan
  const imageSrc = card.querySelector("img").src;
  const title = card.querySelector("h3").innerText;
  const description = card.querySelector("p").innerText;

  // Sembunyikan tampilan awal
  document.getElementById("layanan-container").style.display = "none";

  // Tampilkan tampilan detail
  document.getElementById("detail-layanan").style.display = "block";

  // Masukkan data ke dalam elemen detail
  document.getElementById("detail-image").src = imageSrc; // Gambar
  document.getElementById("detail-title").innerText = title; // Judul
  document.getElementById("detail-description").innerText = description; // Deskripsi
}

// Fungsi Kembali ke Tampilan Awal
function goBack() {
  // Tampilkan kembali tampilan awal layanan
  document.getElementById("layanan-container").style.display = "flex";

  // Sembunyikan tampilan detail layanan
  document.getElementById("detail-layanan").style.display = "none";
}

// Filter Gambar
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-filter");
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".gallery-item").forEach((item) => {
      if (
        category === "all" ||
        item.getAttribute("data-category") === category
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Modal Popup
document.querySelectorAll(".gallery-item .icon").forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const img = event.target
      .closest(".gallery-item")
      .querySelector("img")
      .cloneNode();
    modal.appendChild(img);
    document.body.appendChild(modal);
    modal.style.display = "flex";

    modal.addEventListener("click", () => {
      modal.remove();
    });
  });
});

//send to whatsapp
document.getElementById("sendButton").addEventListener("click", function () {
  // Ambil data dari input form
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const captcha = document.getElementById("captcha").value.trim();

  // Validasi input form
  if (!name || !email || !subject || !message || !captcha) {
    alert("Harap lengkapi semua field sebelum mengirim pesan.");
    return;
  }

  // Validasi captcha
  if (captcha !== "653487") {
    alert("Captcha tidak valid!");
    return;
  }

  // Format pesan untuk WhatsApp
  const whatsappNumber = "6282298811285"; // Nomor WhatsApp tujuan
  const whatsappMessage = `Halo, saya ${name}.\n\nEmail: ${email}\nSubyek: ${subject}\nPesan: ${message}`;

  // Buka link WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(whatsappURL, "_blank");
});

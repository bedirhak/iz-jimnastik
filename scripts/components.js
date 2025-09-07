document.addEventListener("DOMContentLoaded", function () {
  const header = `
   <header class="iz-header">
     <a href="./index.html">
      <div class="iz-header-logo">
      </div>
    </a>

    <nav class="iz-header-nav">
      <ul class="iz-header-nav-list">
        <li class="nav-links"><a class="nav-direct" href="./index.html">Anasayfa</a></li>
        <li class="nav-links"><a class="nav-direct" href="./about.html">Hakkımızda</a></li>
        <li class="nav-links"><a class="nav-direct" href="./services.html">Derslerimiz</a></li>
        <!-- <li class="nav-links"><a class="nav-direct" href="./team.html">Eğitmenlerimiz</a></li> -->
        <li class="nav-links"><a class="nav-direct" href="./contact.html">İletişim</a></li>
      </ul>
    </nav>
    <div class="iz-mobile-menu">
      <i class="fa-solid fa-bars"></i>
    </div>


  </header>
  `;

  const footer = `
     <footer>
    <div class="footer-container">
      <div class="footer-content-container">
        <div class="footer-logo">
        </div>
        <div class="footer-content">
          <h6>İletişim</h6>
          <div class="footer-each">
            <div><i class="fa-solid fa-location-dot"></i></div>
            <p>Merkez Mahallesi, Spor Caddesi No:15, 34000 İstanbul</p>
          </div>
          <div class="footer-each">
            <div><i class="fa-solid fa-phone"></i></div>
             <a class="footer-phone-number" href="tel:+902121234567">+90 212 123 45 67</a>
          </div>
          <div class="footer-each">
            <div><i class="fa-solid fa-envelope"></i></div>
            <p>info@izcimnastik.com.tr</p>
          </div>
        </div>
      </div>
    </div>
    <div class="parallax-footer"></div>

  </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
});

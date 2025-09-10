document.addEventListener("DOMContentLoaded", function () {
    const header = `
   <header class="iz-header">
     <a href="./index.html">
      <div class="iz-header-logo">
      </div>
    </a>

  <div class="iz-header-love">
      <img src="./assets/images/home/love.png" alt="I love gymnastics" class="love-image">
    </div>

    <nav class="iz-header-nav">
      <ul class="iz-header-nav-list">
        <li class="nav-links"><a class="nav-direct" href="./index.html"><i class="fas fa-home"></i> Anasayfa</a></li>
        <li class="nav-links"><a class="nav-direct" href="./about.html"><i class="fas fa-info-circle"></i> Hakkımızda</a></li>
        <li class="nav-links"><a class="nav-direct" href="./services.html"><i class="fas fa-dumbbell"></i> Hizmetlerimiz</a></li>
        <!-- <li class="nav-links"><a class="nav-direct" href="./galery.html"><i class="fas fa-images"></i> Galeri</a></li> -->
        <li class="nav-links"><a class="nav-direct" href="./contact.html"><i class="fas fa-envelope"></i> İletişim</a></li>
      </ul>
    </nav>
    <div class="iz-mobile-menu">
      <i class="fa-solid fa-bars"></i>
    </div>


  </header>
  `;

    const footer = `
    <footer class="modern-footer">
        <div class="footer-wave"></div>
        <div class="footer-content">
            <div class="footer-main">

                <!-- Company Info -->
                <div class="footer-company">
                    <div class="footer-logo-modern"></div>
                    <p class="footer-company-desc">
                        İz Cimnastik olarak profesyonel eğitmenlerimiz ile çocuklarınızın artistik cimnastik
                        yolculuğunda yanınızdayız.
                        Güvenli ve modern tesislerimizde kaliteli eğitim sunarak, her yaştan sporcuyu destekliyoruz.
                    </p>
                    <div class="footer-social-modern">
                        <a href="https://www.instagram.com/izcimnastik?igsh=eG1qcHdpNDUwazhz" target="_blank" class="social-btn"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section-modern">
                    <h3 class="footer-section-title">Hızlı Linkler</h3>
                    <ul class="footer-menu-modern">
                        <li><a href="./index.html">Anasayfa</a></li>
                        <li><a href="./about.html">Hakkımızda</a></li>
                        <li><a href="./services.html">Derslerimiz</a></li>
                        <li><a href="./contact.html">İletişim</a></li>
                         <!-- <li><a href="#">Galeri</a></li>  -->
                    </ul>
                </div>

                <!-- Services -->
                <div class="footer-section-modern">
                    <h3 class="footer-section-title">Hizmetlerimiz</h3>
                    <ul class="footer-menu-modern">
                        <li><a href="./about.html">4-12 Yaş Artistik Cimnastik</a></li>
                        <li><a href="./about.html">Temel Hareket Eğitimi</a></li>
                        <li><a href="./about.html">Yarışma Hazırlığı</a></li>
                        <li><a href="./about.html">Grup Dersleri</a></li>
                        <li><a href="./about.html">Özel Ders</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="footer-section-modern footer-contact-modern">
                    <h3 class="footer-section-title">İletişim</h3>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h6>Adres</h6>
                            <p>Altay, Söğüt Cd. No:12/C<br>06874 Etimesgut/Ankara</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h6>Telefon</h6>
                            <a href="tel:+905309491706">+90 (530) 949 17 06</a>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h6>E-posta</h6>
                            <a href="mailto:izcimnastik@gmail.com">izcimnastik@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom-modern">
                <div class="footer-bottom-content">
                    <p class="footer-copyright">&copy; 2025 İz Cimnastik. Tüm hakları saklıdır.</p>
                    <p class="footer-copyright"><a href="https://sakarya.digital/">Sakarya Digital</a> tarafından kodlanmıştır.</p>
                    
                </div>
            </div>
        </div>
    </footer>
  `;

    document.body.insertAdjacentHTML("afterbegin", header);
    document.body.insertAdjacentHTML("beforeend", footer);
});

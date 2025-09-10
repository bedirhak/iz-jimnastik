document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Form verilerini al ve console'a yazdır
    const formData = {
        name: e.target.name.value,
        mail: e.target.mail.value,
        phone: e.target.phone.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    };

    console.log("📋 Form Verileri:");
    console.log("==================");
    console.log("👤 Ad Soyad:", formData.name);
    console.log("📧 E-posta:", formData.mail);  
    console.log("📱 Telefon:", formData.phone);
    console.log("💬 Konu:", formData.subject);
    console.log("✉️ Mesaj:", formData.message);
    console.log("==================");
    console.log("📦 Tam Veri Objesi:", formData);

    // Loading state göster
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Gönderiliyor...';
    submitBtn.disabled = true;

    // Başarılı gönderim simülasyonu (test için)
    setTimeout(() => {
        console.log("✅ Form başarıyla işlendi!");
        alert("✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
        
        // Formu temizle
        e.target.reset();
        console.log("🧹 Form temizlendi");
        
        // Button'u eski haline getir
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000); // 2 saniye bekle (loading simülasyonu)
});

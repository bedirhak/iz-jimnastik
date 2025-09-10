// document.querySelector("form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Form verilerini al ve console'a yazdır
//     const formData = {
//         name: e.target.name.value,
//         mail: e.target.mail.value,
//         phone: e.target.phone.value,
//         subject: e.target.subject.value,
//         message: e.target.message.value
//     };

//     console.log("📋 Form Verileri:");
//     console.log("==================");
//     console.log("👤 Ad Soyad:", formData.name);
//     console.log("📧 E-posta:", formData.mail);
//     console.log("📱 Telefon:", formData.phone);
//     console.log("💬 Konu:", formData.subject);
//     console.log("✉️ Mesaj:", formData.message);
//     console.log("==================");
//     console.log("📦 Tam Veri Objesi:", formData);

//     // Loading state göster
//     const submitBtn = e.target.querySelector('button[type="submit"]');
//     const originalText = submitBtn.textContent;
//     submitBtn.textContent = 'Gönderiliyor...';
//     submitBtn.disabled = true;

//     // Form verilerini body'de gönder
//     console.log("🚀 Sunucuya gönderiliyor:", formData);

//     fetch("https://script.google.com/macros/s/AKfycbzsNLAm4qzQMur-wKeBMVO9dS4H7XbnJu5QIrTeZRea5OIa1tq2E5Xg3QxYH-GbdzZEqA/exec", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//     })
//         .then(response => {
//             console.log("📡 Sunucu yanıtı alındı:", response);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.text();
//         })
//         .then(result => {
//             console.log("✅ Başarılı yanıt:", result);
//             alert("✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");

//             // Formu temizle
//             e.target.reset();
//             console.log("🧹 Form temizlendi");
//         })
//         .catch(error => {
//             console.error("💥 Hata oluştu:", error);
//             console.log("📋 Gönderilmeye çalışılan veri:", formData);
//             alert("❌ Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan bizi arayın.");
//         })
//         .finally(() => {
//             // Button'u eski haline getir
//             submitBtn.textContent = originalText;
//             submitBtn.disabled = false;
//             console.log("🔄 Form durumu sıfırlandı");
//         });
// });
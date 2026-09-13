# Düzeltme doğrulaması — 13 Eylül 2026

Başlangıç sürümü: b37e9495e22b83dcfc3322bb10ff942458e71ef2.

- Next.js 16.3.5, React 19.3.0, OpenNext 1.20.6 ve js-cookie 3.0.8.
- npm audit: geliştirme paketleri dahil 0 bulgu.
- TypeScript: geçti.
- ESLint: 0 hata, 0 uyarı.
- Node birim testleri: 29/29 geçti. Windows işlem kısıtlaması nedeniyle yerel çalıştırmada test isolation=none kullanıldı.
- HTTP: TR/EN toplam 58 içerik adresi 200; her birinde tek h1, tek main ve og:image.
- Sitemap: 58 adres, eksik veya fazla içerik adresi yok.
- Eksik/joker/geçersiz dil başlıkları güvenli varsayılana döner; yönlendirmede UTM korunur.
- TR/EN bulunamayan adresler 404 döner. İngilizce 404 metni tarayıcıda doğrulandı.
- Paylaşım görseli uç noktası 200 ve image/png döndürdü.
- Tarayıcı: iletişim sayfası; servis yapılandırılmadığında hata ve girdi koruma; çerez reddi ve yenileme; EN hizmet bağlantısında dil koruma; 390×844 mobil başlık; İngilizce mobil menü ve Escape; APD demo bağlantısı kontrol edildi.
- Playwright: 7 E2E senaryosu eklendi ve keşfedildi. Yerel runner worker başlatırken spawn EPERM verdi; bu 7 senaryonun tamamı yerelde otomatik olarak çalışmış sayılmaz.
- Üretim kodu derlendi; sonraki worker aşaması Windows ortamında spawn EPERM nedeniyle tamamlanamadı. HTTP/tarayıcı kontrolleri için geçici workerThreads ayarı kullanıldı ve Git değişikliklerinden çıkarıldı.

GitHub Actions Linux üzerinde normal kurulum, lint, tip kontrolü, birim testleri, üretim derlemesi, Playwright ve OpenNext derlemesini çalıştırır. Bu dosya yerel doğrulamayı kaydeder; uzaktaki sonucu ilgili Actions çalışmasından kontrol edin. İş akışı canlı yayın yapmaz.

Gerçek e-posta teslimatı test edilmedi. RESEND_API_KEY, doğrulanmış CONTACT_FROM_EMAIL ve Cloudflare hız sınırı bağlaması olmadan form bilerek başarı göstermez. Kurulum adımları README'de.

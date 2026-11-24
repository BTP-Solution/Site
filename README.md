# BTP Solution Site

Türkçe ve İngilizce SAP danışmanlık sitesi. Next.js App Router, React, TypeScript ve Tailwind CSS kullanır; Cloudflare Workers yayını OpenNext ile hazırlanır.

## Yerel geliştirme

Node.js 22.20 veya daha yeni desteklenen bir sürüm kullanın.

```sh
npm ci
npm run dev
```

Türkçe: http://localhost:3000/tr — English: http://localhost:3000/en

## Kontroller

```sh
npm run lint -- --max-warnings=0
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run build:cloudflare
PLAYWRIGHT_TARGET=worker npm run test:e2e
```

Birim testleri Node.js test runner ile çalışır; dil yönlendirmesi, bağlantılar, çeviri yapısı, form doğrulaması, APD talep konusu, hız sınırı ve Resend sonuçlarını kapsar. E2E testleri Playwright kullanır; mevcut 58 URL'nin yanıtını, canonical/hreflang etiketlerini, sitemap kapsamını, menüyü ve mobil/masaüstü yerleşimi doğrular. Mevcut adresler `src/tests/e2e/existing-urls.json` dosyasında tutulur. E-posta gönderen test yoktur: servis yanıtları taklit edilir.

Windows'ta kısıtlı bir işlem ortamı `spawn EPERM` verirse birim testleri aynı işlemde çalıştırılabilir:

```sh
node --experimental-strip-types --experimental-test-isolation=none --test src/tests/unit/*.test.mjs
```

Bu seçenek üretim derlemesi veya tarayıcı testlerinin yerini tutmaz. GitHub Actions, Linux üzerinde lint, tip kontrolü, testler, üretim derlemesi ve Playwright kontrollerini çalıştırır. Ardından OpenNext paketini oluşturup aynı tarayıcı kontrollerini yerel Cloudflare Worker üzerinde tekrarlar; bu adımlar yayın yapmaz. `PLAYWRIGHT_TARGET=worker` için önce `npm run build:cloudflare` çalıştırılmalıdır.

## İletişim ve APD kapsam görüşmesi

`/tr/contact`, `/en/contact` ve APD görüşme formu aynı `POST /api/contact` uç noktasını kullanır. APD formu, talep konusunu `apd` olarak iletir; konu ve alıcı sunucuda sınırlandırılır.

Alıcı varsayılan olarak **info@btpsolution.com**. Gönderim için:
1. Resend'de gönderici alan adını doğrulayın.
2. Cloudflare Worker için aşağıdaki değerleri ayarlayın. Gerçek anahtarları Git'e veya istemci tarafındaki `NEXT_PUBLIC_*` değişkenlerine koymayın.

```sh
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CONTACT_FROM_EMAIL
```

`CONTACT_FROM_EMAIL`, Resend'de doğrulanmış alan adınızdan bir gönderici olmalı. Alıcı `wrangler.jsonc` içindeki `CONTACT_TO_EMAIL` ile değiştirilebilir. Yerel Wrangler önizlemesinde bu iki değeri Git tarafından yok sayılan `.dev.vars` dosyasına koyabilirsiniz. `.env.example` yalnızca değişken adlarını gösterir.

`CONTACT_RATE_LIMITER` bağlaması, Cloudflare konumu başına IP başına dakikada 5 isteğe izin verir. `namespace_id: "1001"` bu site için ayrılmıştır; aynı Cloudflare hesabında başka bir sınırlayıcı bu kimliği kullanıyorsa farklı bir kimlik seçin. IP paylaşan kullanıcılar aynı sınıra dahildir; bu sınırlayıcı kesin veya küresel bir kota sistemi değildir.

Anahtar, gönderici veya hız sınırı bağlaması yoksa API 503 döner. Normal `next dev` e-posta göndermez; gerçek bağlantıyı Wrangler önizlemesinde deneyin. Form girişleri hata durumunda korunur. Başarı yalnızca Resend geçerli bir ileti kimliği döndürdüğünde gösterilir; bu, alıcının gelen kutusuna teslim garantisi değildir. Aynı içeriğin tekrar denemesinde aynı idempotency anahtarı kullanılır.

## Cloudflare

```sh
npm run preview
npm run deploy
```

`preview` derleyip yerel Worker önizlemesini açar; `deploy` canlı yayın yapar. CI yalnızca derleme yapar, yayın yapmaz.

OpenNext'in Node proxy desteği kısıtlı olduğu için dil yönlendirmesi Edge `middleware.ts` içinde tutulur. Next.js'in dosya adı uyarısı bu nedenle şu aşamada beklenir. [OpenNext uyumluluğu](https://opennext.js.org/cloudflare), [Resend API](https://resend.com/docs/api-reference/emails/send-email), [Cloudflare hız sınırı](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/).

## İçerik ve SEO

- TR/EN ana metinleri: `src/lib/i18n/dictionaries/`.
- Hizmet ve APD metinleri: `src/lib/i18n/services/`.
- Ana sayfa ve APD sunumu: `src/components/marketing/`. Ürün adı AIA, başlığı “SAP için Yapay Zekâ Destekli Fatura Otomasyonu” / “AI-Powered Invoice Automation for SAP” olarak kullanılır; APD URL ve form konu anahtarı korunur. İlk kullanım alanı gelen faturalar, genişleyen muhasebe kapsamı ise ürün vizyonudur. İç geliştirme notlarını pazarlama sayfasına taşımayın; canlı müşteri referansı, ölçülmüş sonuç veya hazır olmayan özellik iddiası eklemeyin.
- Yeni sayfa eklerken `src/app/sitemap.ts` listesini güncelleyin.
- Site içi etkileşimli bağlantılarda `TransitionLink`, sunucu bileşenlerinde `withLocale` kullanın.
- Ortak layout tek `main` öğesi sağlar; sayfalarda `section`/ `div` kullanın.
- Paylaşım görseli: `/api/og`. Üretim alan adı `NEXT_PUBLIC_SITE_URL` ile ayarlanabilir.
- Derleme çıktıları, test raporları ve ortam dosyaları Git'e alınmaz.

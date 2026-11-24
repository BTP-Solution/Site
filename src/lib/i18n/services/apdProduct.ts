export const apdContent = {
    tr: {
        pillars: [
            ['Faturayı anlamak', 'Gelen faturadaki bilgileri muhasebe sürecinin parçası olarak ele alan yapay zekâ geliştiriyoruz. Belgeden iş anlamı çıkarmaya odaklanıyoruz.'],
            ['Muhasebenize uyarlamak', 'Hesap planınızı, şirket yapınızı ve çalışma biçiminizi merkeze alıyoruz. Yapay zekâyı sizin işinize göre yazıyoruz.'],
            ['SAP ile buluşturmak', 'Yapay zekâ ile SAP arasındaki yazılımı ve entegrasyonu birlikte ele alıyoruz. Belge işleme ile muhasebe kaydını aynı sürecin parçaları olarak tasarlıyoruz.'],
        ],
        faq: [
            ['Yalnızca gelen faturalar için mi?', 'Gelen fatura işleme, ürünün ilk kullanım alanı. AIA’yı, ilerleyen aşamalarda muhasebenin farklı iş akışlarına uzanacak bir ürün vizyonuyla geliştiriyoruz.'],
            ['Şirketimize özel geliştirilebilir mi?', 'Evet. Şirketinizin muhasebe yapısını, belge akışını ve iş ihtiyaçlarını birlikte ele alarak size özel yapay zekâ ve yazılım geliştirme çalışmaları yapıyoruz.'],
            ['SAP sistemimizle nasıl çalışır?', 'SAP ortamınızı ve hedef muhasebe işlemini birlikte inceliyor, entegrasyonu bu yapıya göre tasarlıyoruz. S/4HANA veya ECC ortamınız için teknik yaklaşımı görüşmede netleştirebiliriz.'],
            ['Nereden başlayabiliriz?', 'Gelen fatura sürecinizi ve SAP ortamınızı konuşarak başlayabiliriz. Ekibimizle görüşmek için aşağıdaki formu doldurabilir veya doğrudan bize yazabilirsiniz.'],
        ],
    },
    en: {
        pillars: [
            ['Understand the invoice', 'We develop AI that treats invoice information as part of an accounting process. Our focus is on turning document data into business meaning.'],
            ['Build around your accounting', 'Your chart of accounts, company structure and way of working are our starting point. We build the AI around your business.'],
            ['Connect with SAP', 'We design the software and integration between AI and SAP together, treating document processing and the accounting entry as parts of the same workflow.'],
        ],
        faq: [
            ['Is it only for incoming invoices?', 'Incoming invoice processing is the first use case. We are developing AIA with a vision to extend into other accounting workflows in future stages.'],
            ['Can you develop it for our business?', 'Yes. We work with your accounting structure, document flow and business needs to develop AI and software tailored to your company.'],
            ['How will it work with our SAP system?', 'We review your SAP landscape and target accounting transaction together, then design the integration around them. We can discuss the technical approach for your S/4HANA or ECC environment.'],
            ['How do we get started?', 'Start by telling us about your incoming invoice process and SAP environment. Use the form below or contact our team directly.'],
        ],
    },
};
export function getApdContent(lang: string) { return lang === 'en' ? apdContent.en : apdContent.tr; }

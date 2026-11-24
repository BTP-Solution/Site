export const apdContent = {
    tr: {
        stageTitle: 'Geliştirme aşamasında',
        stageDescription: 'APD henüz müşteri sisteminde canlı değildir. Mevcut geliştirme kapsamını ve sürecinize uygunluğunu birlikte değerlendiriyoruz.',
        flow: [
            ['Belgeyi anlamak', 'Belge türünü, veri alanlarını ve kaynağı tanımlamak. İşlem senaryosuna göre hangi bilgilerin gerekli olduğunu belirlemek.'],
            ['Kontrolleri kurgulamak', 'İş kurallarını, kullanıcı onayını ve istisnaları aynı akışta ele almak. Otomasyonun sınırlarını görünür kılmak.'],
            ['SAP kaydını planlamak', 'Hedef SAP işlemini ve entegrasyon gereksinimlerini belirlemek. Sonucu tanımlı test senaryolarıyla değerlendirmek.'],
        ],
        scope: [
            ['Ürünün durumu', 'Geliştirme aşamasında', 'Müşteri sisteminde canlı kullanım ve müşteri ortamında ölçülmüş performans sonucu henüz yoktur.'],
            ['SAP entegrasyonu', 'Senaryoya göre değerlendirme', 'SAP sürümü, hedef işlem ve kullanılan modüller birlikte ele alınır. Entegrasyon kapsamı, seçilen FI/MM senaryosu ve sistem gereksinimleri üzerinden netleştirilir.'],
            ['Belge ve veri kapsamı', 'Örneklerle netleştirme', 'Belge türleri, veri alanları ve formatlar, anonim örnekler ve iş ihtiyacı üzerinden değerlendirilir.'],
            ['Onay ve istisnalar', 'Kapsam görüşmesinde', 'Kullanıcı kontrolü, mükerrer belge ve tutarsız veri gibi durumlar için gereksinimler belirlenir.'],
            ['Dağıtım ve veri akışı', 'Mimari değerlendirme', 'Barındırma, erişim ve veri saklama koşulları teknik kapsamla birlikte netleştirilir.'],
        ],
        faq: [
            ['APD bugün kullanıma hazır mı?', 'APD geliştirme aşamasındadır ve henüz müşteri sisteminde canlı değildir. Birlikte güncel kapsamı değerlendirebilir, sonraki gösterim veya PoC adımlarını planlayabiliriz.'],
            ['S/4HANA veya ECC sistemimize uygun mu?', 'Uygunluğu SAP sürümü, hedef işlem, modül ve entegrasyon gereksinimleri üzerinden değerlendiriyoruz. İlk görüşmede sisteminizi ve hedef senaryonuzu netleştirerek teknik değerlendirme kapsamını belirleyebiliriz.'],
            ['Demo veya PoC görüşmesi yapabilir miyiz?', 'Görüşmede güncel geliştirme durumunu ve gösterim kapsamını netleştirebiliriz. PoC için örnek belgeler, hedef senaryo, değerlendirme ölçütleri ve takvim ayrıca belirlenir.'],
            ['İnsan onayı sürecin neresinde olacak?', 'Onay gereksinimleri, kullanıcı rolleri ve istisna adımları süreç analizinde belirlenir. Hangi işlemlerin otomasyona uygun olduğunu, hangilerinin kullanıcı kontrolü gerektirdiğini birlikte değerlendiririz.'],
            ['Veri güvenliği ve barındırma nasıl değerlendiriliyor?', 'Belgenin izlediği yol, erişim yetkileri ve saklama koşulları teknik görüşmede ele alınır. Proje için geçerli güvenlik gereksinimleri ve uygulanacak mimari ayrıca doğrulanır.'],
            ['Ne kadar zaman kazandırır, ne zaman canlıya geçer?', 'Kazanım ve takvim, belge çeşitliliğine, işlem hacmine ve entegrasyon kapsamına bağlıdır. Önce mevcut süreci ve değerlendirme ölçütlerini belirlemek, ardından tanımlı senaryolar üzerinden ölçüm yapmak gerekir.'],
        ],
    },
    en: {
        stageTitle: 'In development',
        stageDescription: 'APD is not yet live in a customer system. We evaluate its current development scope and suitability for your processes together.',
        flow: [
            ['Understand the document', 'Define document types, data fields and sources. Identify the information each business scenario needs.'],
            ['Design the controls', 'Consider business rules, human review and exceptions in one workflow. Make the boundaries of automation clear.'],
            ['Plan the SAP record', 'Identify the target SAP transaction and integration needs. Evaluate the outcome against defined test scenarios.'],
        ],
        scope: [
            ['Product status', 'In development', 'There is no live customer deployment or measured performance result from a customer environment yet.'],
            ['SAP integration', 'Scenario assessment', 'The SAP version, target transaction and modules are assessed together. Integration scope is defined around the selected FI/MM scenario and system requirements.'],
            ['Document and data scope', 'Defined through examples', 'Document types, fields and formats are evaluated using anonymised examples and business requirements.'],
            ['Approvals and exceptions', 'Scope discussion', 'Requirements for human review, duplicate documents and inconsistent data need to be defined.'],
            ['Deployment and data flow', 'Architecture assessment', 'Hosting, access and retention conditions are clarified as part of the technical scope.'],
        ],
        faq: [
            ['Is APD ready to use today?', 'APD is in development and is not yet live in a customer system. We can review the current scope together and plan the next demonstration or proof-of-concept steps.'],
            ['Will it fit our S/4HANA or ECC system?', 'We assess suitability against the SAP version, target transaction, modules and integration requirements. An initial discussion helps define your system, target scenario and technical evaluation scope.'],
            ['Can we discuss a demo or proof of concept?', 'We can clarify the current development status and demonstration scope in a meeting. Sample documents, the target scenario, evaluation criteria and timeline for a proof of concept are agreed separately.'],
            ['Where does human review fit?', 'Approval needs, user roles and exception handling are defined during process analysis. We evaluate which steps suit automation and which require human review.'],
            ['How are data security and hosting assessed?', 'Document flow, access permissions and retention conditions are discussed in a technical review. Project-specific security requirements and the proposed architecture must be verified.'],
            ['How much time will it save, and when can it go live?', 'Potential savings and timing depend on document variety, volume and integration scope. The first step is to establish the current process and evaluation criteria, then measure against defined scenarios.'],
        ],
    },
};
export function getApdContent(lang: string) { return lang === 'en' ? apdContent.en : apdContent.tr; }

'use client';

const benefits = [
    {
        title: 'Zaman Kazancı',
        points: [
            'Belge formatlama ve giriş süresini %80 oranında düşürün.',
            'Ekiplerinizi veri girişinden kurtarıp analize yönlendirin.',
        ],
        result: 'Odak noktanızı veri girişinden veri analizine kaydırın.',
        accent: 'border-[#3463ac]',
    },
    {
        title: 'Maliyet',
        points: [
            'Hatalı kayıtların getirdiği geri dönüş maliyetlerini sıfırlayın.',
            'Belge başı işleme maliyetini minimize edin.',
        ],
        result: 'Operasyonel giderlerinizi (OPEX) ilk aydan itibaren optimize edin.',
        accent: 'border-[#ff7700]',
    },
    {
        title: 'Risk ve Uyum',
        points: [
            'Düzenleyici kurumlara %100 uyumlu bir akış kurun.',
            'e-Dönüşüm mevzuatlarında gecikme cezalarından kurtulun.',
        ],
        result: 'Finansal cezalar ve yasal riskleri operasyonlardan uzaklaştırın.',
        accent: 'border-emerald-500',
    },
    {
        title: 'Operasyonel Şeffaflık',
        points: [
            'Tüm evrak trafiğini tek bir dashboard üzerinden anlık izleyin.',
            'Karar alma mekanizmalarını güncel verilerle besleyin.',
        ],
        result: 'Süreçlerinizi uçtan uca, %100 görünürlükle yönetin.',
        accent: 'border-purple-500',
    },
];

export default function ApdBenefits() {
    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        İşletmenize Somut Değer Katın
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className={`bg-[#0a1628]/40 border-l-4 ${benefit.accent} rounded-r-2xl p-8 hover:bg-[#0a1628]/80 transition-colors duration-300`}
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                            <ul className="space-y-3 mb-6">
                                {benefit.points.map((point, i) => (
                                    <li key={i} className="flex items-start text-slate-300">
                                        <span className="mr-3 text-[#ff7700] mt-1">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-sm text-[#3463ac] font-medium italic">
                                    Sonuç: {benefit.result}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

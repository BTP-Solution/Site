'use client';

import { Building2, Factory, FileSpreadsheet } from 'lucide-react';

const scenarios = [
    {
        icon: Factory,
        title: 'Üretim ve Lojistik',
        problem: 'Günde yüzlerce taşeron faturası ve kağıt irsaliyenin sisteme manuel, geç ve hatalı girilmesi.',
        solution: 'APD, taranan irsaliyeleri okur, SAP MM modülünde ilgili sipariş (PO) numarasıyla anında %99 doğrulukla eşleştirir.',
        result: 'Tedarik zinciri görünürlüğü anlık hale gelir, stok girişleri beklemez.',
    },
    {
        icon: Building2,
        title: 'Finans ve Holding Mimarisi',
        problem: 'İştiraklerden gelen dağınık masraf fişleri ve faturaların ay sonu kapanış (Month-End Close) süreçlerini kilitlemesi.',
        solution: 'Akıllı OCR ile KDV, Tutar ve Cari kodları otomatik ayrıştırılır, doğrudan SAP FI belgeleri yaratılır.',
        result: 'Ay sonu kapanış süreleri %40 oranında kısalır.',
    },
    {
        icon: FileSpreadsheet,
        title: 'Sıfır Temas e-Dönüşüm',
        problem: 'e-Fatura portallarına düşen yasal faturaların ERP sistemine manuel indirilip onaylatılması.',
        solution: 'Uçtan uca adaptasyon sayesinde APD, gelen kutusundaki onaylı faturaları otomatik yakalar ve SAP iş akışına sokar.',
        result: 'Yasal bildirim sürelerine %100 uyum; dosya indirme/yükleme yükü sıfırlanır.',
    },
];

export default function ApdScenarios() {
    return (
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Her Sektör İçin <span className="text-[#3463ac]">Kusursuz Otomasyon</span>
                    </h2>
                    <p className="text-slate-400">
                        Farklı endüstrilerin kendine has evrak işleme darboğazlarını,
                        özel algoritmalarla çözüyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scenarios.map((scenario, idx) => (
                        <div
                            key={idx}
                            className="group bg-[#0a1628]/40 border border-white/5 rounded-2xl p-8 hover:bg-[#0a1628]/80 hover:border-[#3463ac]/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="w-14 h-14 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 border border-white/5">
                                <scenario.icon className="w-7 h-7 text-slate-300 group-hover:text-[#3463ac] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6">{scenario.title}</h3>

                            <div className="flex flex-col gap-4 flex-grow">
                                <div>
                                    <h4 className="text-xs font-semibold text-[#ff7700] uppercase mb-1">Sorun</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">{scenario.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-[#3463ac] uppercase mb-1">Çözüm</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">{scenario.solution}</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/10">
                                <p className="text-sm font-semibold text-emerald-400">
                                    <span className="text-slate-500 mr-2">Çıktı:</span>
                                    {scenario.result}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

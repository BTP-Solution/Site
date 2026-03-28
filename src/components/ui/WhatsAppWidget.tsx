'use client';

import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

// You can update this with your actual WhatsApp business number
const WHATSAPP_NUMBER = '905547251187';
// Update this with the actual Microsoft Teams email or user link
const TEAMS_EMAIL = 'erdal.eser@btpsolution.com';

export default function WhatsAppWidget({ lang }: { lang: string }) {
    const [mounted, setMounted] = useState(false);
    const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
    const [isTeamsHovered, setIsTeamsHovered] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const message = lang === 'tr'
        ? 'Merhaba, BTP Solution hizmetleri hakkında bilgi almak istiyorum.'
        : 'Hello, I would like to get information about BTP Solution services.';

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const whatsappTooltip = lang === 'tr' ? 'Bize Ulaşın' : 'Chat with Us';

    const teamsUrl = `https://teams.microsoft.com/l/chat/0/0?users=${TEAMS_EMAIL}`;
    const teamsTooltip = lang === 'tr' ? 'Teams\'ten Ulaşın' : 'Chat on Teams';

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
            style={{ animation: 'float-in 0.6s cubic-bezier(0.16,1,0.3,1) 1s both' }}
        >
            {/* Teams Button */}
            <div
                className="relative flex items-center justify-end group"
                onMouseEnter={() => setIsTeamsHovered(true)}
                onMouseLeave={() => setIsTeamsHovered(false)}
            >
                {/* Tooltip */}
                <div
                    className={`absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold py-2 px-4 rounded-xl shadow-xl whitespace-nowrap transition-all duration-300 origin-right ${isTeamsHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
                        }`}
                >
                    {teamsTooltip}
                    <div className="absolute top-1/2 -translate-y-1/2 right-[-5px] w-3 h-3 bg-white rotate-45" />
                </div>

                <a
                    href={teamsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-12 h-12 bg-[#6264A7] text-white rounded-full shadow-[0_8px_20px_-5px_rgba(98,100,167,0.5)] hover:shadow-[0_12px_25px_-5px_rgba(98,100,167,0.6)] hover:-translate-y-1 transition-all duration-300 group-hover:bg-[#50528c]"
                    aria-label="Microsoft Teams Support"
                >
                    <Users className="w-5 h-5 relative z-10" />
                </a>
            </div>

            {/* Main WhatsApp Button */}
            <div
                className="relative flex items-center justify-end group"
                onMouseEnter={() => setIsWhatsAppHovered(true)}
                onMouseLeave={() => setIsWhatsAppHovered(false)}
            >
                {/* Tooltip */}
                <div
                    className={`absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold py-2 px-4 rounded-xl shadow-xl whitespace-nowrap transition-all duration-300 origin-right ${isWhatsAppHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
                        }`}
                >
                    {whatsappTooltip}
                    {/* Inner Triangle pointer */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-[-5px] w-3 h-3 bg-white rotate-45" />
                </div>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group-hover:bg-[#1ebd5a]"
                    aria-label="WhatsApp Support"
                >
                    {/* Ring animation */}
                    <span className="absolute w-full h-full rounded-full border-[2.5px] border-[#25D366] animate-ping opacity-60" style={{ animationDuration: '3s' }} />

                    {/* WhatsApp Icon SVG */}
                    <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] fill-current relative z-10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

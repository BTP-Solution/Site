'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/getDictionary';
import Navbar from './Navbar';
import styles from '@/components/marketing/Marketing.module.css';

export default function Header({ dict, lang }: { dict: Dictionary; lang: string }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLButtonElement>(null);
    const servicesRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();
    const en = lang === 'en';
    const close = () => { setMobileOpen(false); setServicesOpen(false); };
    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return;
            if (mobileOpen) { setMobileOpen(false); setServicesOpen(false); menuRef.current?.focus(); }
            else if (servicesOpen) { setServicesOpen(false); servicesRef.current?.focus(); }
        };
        const onOutside = (event: MouseEvent) => {
            if (!headerRef.current?.contains(event.target as Node)) { setServicesOpen(false); setMobileOpen(false); }
        };
        const onResize = () => { if (window.innerWidth > 900) { setMobileOpen(false); setServicesOpen(false); } };
        document.addEventListener('keydown', onKey);
        document.addEventListener('click', onOutside);
        window.addEventListener('resize', onResize);
        return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onOutside); window.removeEventListener('resize', onResize); };
    }, [mobileOpen, servicesOpen]);
    useEffect(() => {
        if (!mobileOpen) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = original; };
    }, [mobileOpen]);
    const languagePath = (locale: string) => '/' + [locale, ...pathname.split('/').slice(2)].join('/');
    return <header className={styles.header} ref={headerRef}>
        <div className={styles.headerInner}>
            <Link className={styles.brand} href={`/${lang}`} onClick={close} aria-label="BTP Solution">
                <Image src="/btp_logo-2.png" alt="BTP" width={120} height={31} priority /><span>SOLUTION</span>
            </Link>
            <nav className={styles.desktopNav} aria-label={en ? 'Main navigation' : 'Ana menü'}>
                <Link href={`/${lang}/products/apd`} aria-current={pathname.includes('/products/apd') ? 'page' : undefined} onClick={close}>APD</Link>
                <button ref={servicesRef} type="button" className={styles.navButton} aria-expanded={servicesOpen} aria-controls="desktop-services" onClick={() => setServicesOpen(!servicesOpen)}>{en ? 'SAP Services' : 'SAP Hizmetleri'}<ChevronDown aria-hidden="true" /></button>
                <Link href={`/${lang}/about`} aria-current={pathname.endsWith('/about') ? 'page' : undefined} onClick={close}>{dict.navigation.about}</Link>
            </nav>
            <div className={styles.headerActions}>
                <nav className={styles.language} aria-label={en ? 'Language' : 'Dil'}>
                    {['tr', 'en'].map((locale, i) => <span key={locale} style={{ display: 'contents' }}>
                        {i > 0 && <span aria-hidden="true">/</span>}
                        <a href={languagePath(locale)} hrefLang={locale} lang={locale} aria-label={locale === 'tr' ? 'Türkçe' : 'English'} aria-current={lang === locale ? 'page' : undefined} onClickCapture={event => { event.currentTarget.href = languagePath(locale) + window.location.search + window.location.hash; }}>{locale.toUpperCase()}</a>
                    </span>)}
                </nav>
                <Link className={styles.headerCta} href={`/${lang}/contact`} onClick={close}>{dict.navigation.getConsultation}<ArrowUpRight aria-hidden="true" /></Link>
                <button ref={menuRef} type="button" className={styles.menuToggle} aria-label={en ? 'Toggle mobile menu' : 'Mobil menüyü aç/kapat'} aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => { setMobileOpen(!mobileOpen); setServicesOpen(false); }}>{mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
            </div>
        </div>
        <div id="desktop-services" className={styles.servicesPanel} hidden={!servicesOpen}><Navbar dict={dict} lang={lang} onNavigate={close} /></div>
        <nav id="mobile-menu" className={styles.mobileMenu} hidden={!mobileOpen} inert={!mobileOpen} aria-label={en ? 'Mobile navigation' : 'Mobil menü'}>
            <Link href={`/${lang}/products/apd`} onClick={close}>APD Automation<ArrowUpRight size={16} aria-hidden="true" /></Link>
            <button type="button" aria-expanded={servicesOpen} aria-controls="mobile-services" onClick={() => setServicesOpen(!servicesOpen)}>{dict.navigation.services}<ChevronDown aria-hidden="true" /></button>
            <div id="mobile-services" hidden={!servicesOpen}><Navbar dict={dict} lang={lang} onNavigate={close} /></div>
            <Link href={`/${lang}/about`} onClick={close}>{dict.navigation.about}</Link>
            <Link href={`/${lang}/contact`} onClick={close}>{dict.navigation.getConsultation}<ArrowUpRight size={16} aria-hidden="true" /></Link>
        </nav>
    </header>;
}

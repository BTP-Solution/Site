type FooterProps = {
    dict: any;
};

export default function Footer({ dict }: FooterProps) {
    return (
        <footer className="relative border-t border-[#3463ac]/10 bg-gradient-to-b from-[#0c1829] to-[#091320]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3463ac]/30 to-transparent"></div>
            <div className="container mx-auto px-4 py-12 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <span className="text-xl font-bold tracking-tight text-[#5b8fd4]">
                            BTP<span className="text-slate-200">Solution</span>
                        </span>
                        <p className="text-sm text-slate-400 max-w-xs">
                            {dict.footer.description}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-200">{dict.footer.links}</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>{dict.navigation.services}</li>
                            <li>{dict.navigation.about}</li>
                            <li>{dict.navigation.contact}</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-200">{dict.navigation.contact}</h4>
                        <address className="not-italic text-sm text-slate-400 space-y-1">
                            <p>Ferahevler</p>
                            <p>Tech City, TC 12345</p>
                            <p>+1-401-555-1212</p>
                        </address>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 border-[#3463ac]/10">
                    <p className="text-xs text-center text-slate-500">
                        &copy; {new Date().getFullYear()} BTP Solution. {dict.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}

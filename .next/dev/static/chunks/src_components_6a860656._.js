(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/PageTransition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageTransitionProvider,
    "usePageTransition",
    ()=>usePageTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const PageTransitionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    navigateWithTransition: ()=>{},
    isTransitioning: false
});
const usePageTransition = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "7c36285eccc6de0929e76662bae941b04eb5a5b426f8254269bb36096aa9324c") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7c36285eccc6de0929e76662bae941b04eb5a5b426f8254269bb36096aa9324c";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PageTransitionContext);
};
_s(usePageTransition, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function PageTransitionProvider(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "7c36285eccc6de0929e76662bae941b04eb5a5b426f8254269bb36096aa9324c") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7c36285eccc6de0929e76662bae941b04eb5a5b426f8254269bb36096aa9324c";
    }
    const { children } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFadingOut, setIsFadingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [targetPath, setTargetPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const wasPendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t1;
    let t2;
    if ($[1] !== isPending) {
        t1 = ({
            "PageTransitionProvider[useEffect()]": ()=>{
                if (isPending) {
                    wasPendingRef.current = true;
                }
            }
        })["PageTransitionProvider[useEffect()]"];
        t2 = [
            isPending
        ];
        $[1] = isPending;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== pathname || $[5] !== router) {
        t3 = ({
            "PageTransitionProvider[navigateWithTransition]": (href)=>{
                if (href === pathname) {
                    return;
                }
                wasPendingRef.current = false;
                setIsVisible(true);
                setIsFadingOut(false);
                setTargetPath(href);
                setTimeout({
                    "PageTransitionProvider[navigateWithTransition > setTimeout()]": ()=>{
                        startTransition({
                            "PageTransitionProvider[navigateWithTransition > setTimeout() > startTransition()]": ()=>{
                                router.push(href);
                            }
                        }["PageTransitionProvider[navigateWithTransition > setTimeout() > startTransition()]"]);
                    }
                }["PageTransitionProvider[navigateWithTransition > setTimeout()]"], 300);
            }
        })["PageTransitionProvider[navigateWithTransition]"];
        $[4] = pathname;
        $[5] = router;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const navigateWithTransition = t3;
    let t4;
    let t5;
    if ($[7] !== isPending || $[8] !== isVisible || $[9] !== targetPath) {
        t4 = ({
            "PageTransitionProvider[useEffect()]": ()=>{
                if (!isPending && wasPendingRef.current && targetPath && isVisible) {
                    wasPendingRef.current = false;
                    const timer = setTimeout({
                        "PageTransitionProvider[useEffect() > setTimeout()]": ()=>{
                            setIsFadingOut(true);
                            setTimeout({
                                "PageTransitionProvider[useEffect() > setTimeout() > setTimeout()]": ()=>{
                                    setIsVisible(false);
                                    setIsFadingOut(false);
                                    setTargetPath(null);
                                }
                            }["PageTransitionProvider[useEffect() > setTimeout() > setTimeout()]"], 400);
                        }
                    }["PageTransitionProvider[useEffect() > setTimeout()]"], 200);
                    return ()=>clearTimeout(timer);
                }
            }
        })["PageTransitionProvider[useEffect()]"];
        t5 = [
            isPending,
            targetPath,
            isVisible
        ];
        $[7] = isPending;
        $[8] = isVisible;
        $[9] = targetPath;
        $[10] = t4;
        $[11] = t5;
    } else {
        t4 = $[10];
        t5 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[12] !== isVisible || $[13] !== navigateWithTransition) {
        t6 = {
            navigateWithTransition,
            isTransitioning: isVisible
        };
        $[12] = isVisible;
        $[13] = navigateWithTransition;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== isFadingOut || $[16] !== isVisible) {
        t7 = isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xl ${isFadingOut ? "page-transition-out" : "page-transition-in"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "page-transition-logo mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/btp_logo-2.png",
                        alt: "BTP Solution",
                        width: 160,
                        height: 41,
                        priority: true,
                        className: "h-10 w-auto object-contain drop-shadow-[0_0_20px_rgba(52,99,172,0.3)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageTransition.tsx",
                        lineNumber: 139,
                        columnNumber: 245
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/PageTransition.tsx",
                    lineNumber: 139,
                    columnNumber: 202
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-48 h-[2px] rounded-full bg-white/[0.06] overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-full rounded-full bg-gradient-to-r from-[#3463ac] to-[#7e22ce] ${isFadingOut ? "page-progress-complete" : "page-progress-loading"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageTransition.tsx",
                        lineNumber: 139,
                        columnNumber: 498
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/PageTransition.tsx",
                    lineNumber: 139,
                    columnNumber: 423
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/PageTransition.tsx",
            lineNumber: 139,
            columnNumber: 23
        }, this);
        $[15] = isFadingOut;
        $[16] = isVisible;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== children || $[19] !== t6 || $[20] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageTransitionContext.Provider, {
            value: t6,
            children: [
                children,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/PageTransition.tsx",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[18] = children;
        $[19] = t6;
        $[20] = t7;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    return t8;
}
_s1(PageTransitionProvider, "ml1DFsUCF/XpqbLr0H5nakIj9Ao=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = PageTransitionProvider;
var _c;
__turbopack_context__.k.register(_c, "PageTransitionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/TransitionLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransitionLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageTransition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function TransitionLink(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "96198c2913d15cd18e53775aa5af31346c2a3bb030d3418aafe24f2542da9cfd") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "96198c2913d15cd18e53775aa5af31346c2a3bb030d3418aafe24f2542da9cfd";
    }
    let children;
    let href;
    let onClick;
    let rest;
    if ($[1] !== t0) {
        ({ href, onClick, children, ...rest } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = href;
        $[4] = onClick;
        $[5] = rest;
    } else {
        children = $[2];
        href = $[3];
        onClick = $[4];
        rest = $[5];
    }
    const { navigateWithTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageTransition"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[6] !== href || $[7] !== navigateWithTransition || $[8] !== onClick || $[9] !== pathname) {
        t1 = ({
            "TransitionLink[handleClick]": (e)=>{
                const hrefString = typeof href === "string" ? href : href.pathname || "";
                if (hrefString.startsWith("#") || hrefString.includes("#") && hrefString.split("#")[0] === pathname) {
                    onClick?.(e);
                    return;
                }
                e.preventDefault();
                onClick?.(e);
                navigateWithTransition(hrefString);
            }
        })["TransitionLink[handleClick]"];
        $[6] = href;
        $[7] = navigateWithTransition;
        $[8] = onClick;
        $[9] = pathname;
        $[10] = t1;
    } else {
        t1 = $[10];
    }
    const handleClick = t1;
    let t2;
    if ($[11] !== children || $[12] !== handleClick || $[13] !== href || $[14] !== rest) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            onClick: handleClick,
            ...rest,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/TransitionLink.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[11] = children;
        $[12] = handleClick;
        $[13] = href;
        $[14] = rest;
        $[15] = t2;
    } else {
        t2 = $[15];
    }
    return t2;
}
_s(TransitionLink, "oQOi4eE4808INFNda9kwYLA8lo4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = TransitionLink;
var _c;
__turbopack_context__.k.register(_c, "TransitionLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TransitionLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check-corner.js [app-client] (ecmascript) <export default as FileCheck2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/blocks.js [app-client] (ecmascript) <export default as Blocks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/* ─── service categories data ─── */ const SERVICE_CATEGORIES = [
    {
        key: 'sap',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
        color: '#3463ac',
        label: 'SAP Danışmanlık ve Uygulama Hizmetleri',
        href: '/services/sap-consulting',
        items: [
            {
                label: 'Tedarik Zinciri, Üretim ve Lojistik',
                href: '/services/sap-consulting/supply-chain'
            },
            {
                label: 'Süreç Analizi ve Proje Yönetimi',
                href: '/services/sap-consulting/process-analysis'
            },
            {
                label: 'SAP Roll-out ve Destek Hizmetleri',
                href: '/services/sap-consulting/roll-out'
            },
            {
                label: 'Finansal Çözümler',
                href: '/services/sap-consulting/financial-solutions'
            },
            {
                label: 'İnsan Kaynakları Çözümleri',
                href: '/services/sap-consulting/hr-solutions'
            },
            {
                label: 'İş Zekası ve Veri Analitiği',
                href: '/services/sap-consulting/business-intelligence'
            },
            {
                label: 'Müşteri Deneyimi ve Satış',
                href: '/services/sap-consulting/customer-experience'
            }
        ]
    },
    {
        key: 'tech',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        color: '#a78bfa',
        label: 'Teknoloji ve Yazılım Geliştirme',
        href: '/services/tech-development',
        items: [
            {
                label: 'SAP BTP Çözümleri',
                href: '/services/tech-development/sap-btp'
            },
            {
                label: 'ABAP, RAP / CAP Geliştirme',
                href: '/services/tech-development/abap-rap-cap'
            },
            {
                label: 'SAP Fiori ve SAPUI5 Arayüzleri',
                href: '/services/tech-development/fiori-sapui5'
            },
            {
                label: 'Bulut Geçiş ve Modernizasyon',
                href: '/services/tech-development/cloud-migration'
            },
            {
                label: 'İş Akışı ve Süreç Otomasyonu',
                href: '/services/tech-development/workflow-automation'
            }
        ]
    },
    {
        key: 'integration',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__["Blocks"],
        color: '#f59e0b',
        label: 'Entegrasyon Çözümleri',
        href: '/services/integration-solutions',
        items: [
            {
                label: 'E-Dönüşüm ve Dijital Arşivleme',
                href: '/services/integration-solutions/e-donusum'
            },
            {
                label: 'API ve Sistem Entegrasyonları',
                href: '/services/integration-solutions/api-integration'
            },
            {
                label: 'SAP ve Non-SAP Sistem Entegrasyonları',
                href: '/services/integration-solutions/sap-nonsap'
            },
            {
                label: 'Banka ve Fintech Entegrasyonları',
                href: '/services/integration-solutions/banka-fintech'
            }
        ]
    },
    {
        key: 'ai',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        color: '#818cf8',
        label: 'Veri, Yapay Zeka ve Akıllı Çözümler',
        href: '/services/ai-data-solutions',
        items: [
            {
                label: 'Veri Yönetimi ve Dönüşümü',
                href: '/services/ai-data-solutions/data-management'
            },
            {
                label: 'İş Zekası ve Gelişmiş Analitik',
                href: '/services/ai-data-solutions/business-analytics'
            },
            {
                label: 'Yapay Zeka ve Makine Öğrenimi',
                href: '/services/ai-data-solutions/ai-ml'
            },
            {
                label: 'Akıllı İş Akışı ve Süreç Otomasyonu',
                href: '/services/ai-data-solutions/rpa-automation'
            }
        ]
    }
];
function Navbar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(77);
    if ($[0] !== "1a3072e88f8ae9535553767d5a4cb747bc294345ee165e5857ebc50e76656d62") {
        for(let $i = 0; $i < 77; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a3072e88f8ae9535553767d5a4cb747bc294345ee165e5857ebc50e76656d62";
    }
    const { dict, lang } = t0;
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimatingOut, setIsAnimatingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== openDropdown) {
        t1 = ({
            "Navbar[closeDropdown]": ()=>{
                if (openDropdown === null) {
                    return;
                }
                setIsAnimatingOut(true);
                setTimeout({
                    "Navbar[closeDropdown > setTimeout()]": ()=>{
                        setOpenDropdown(null);
                        setIsAnimatingOut(false);
                    }
                }["Navbar[closeDropdown > setTimeout()]"], 250);
            }
        })["Navbar[closeDropdown]"];
        $[1] = openDropdown;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const closeDropdown = t1;
    let t2;
    if ($[3] !== closeDropdown || $[4] !== isAnimatingOut || $[5] !== openDropdown) {
        t2 = ({
            "Navbar[toggleDropdown]": (menu)=>{
                if (openDropdown === menu && !isAnimatingOut) {
                    closeDropdown();
                } else {
                    setIsAnimatingOut(false);
                    setOpenDropdown(menu);
                }
            }
        })["Navbar[toggleDropdown]"];
        $[3] = closeDropdown;
        $[4] = isAnimatingOut;
        $[5] = openDropdown;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const toggleDropdown = t2;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Navbar[handleMouseEnter]": (menu_0)=>{
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                setIsAnimatingOut(false);
                setOpenDropdown(menu_0);
            }
        })["Navbar[handleMouseEnter]"];
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleMouseEnter = t3;
    let t4;
    if ($[8] !== closeDropdown) {
        t4 = ({
            "Navbar[handleMouseLeave]": ()=>{
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                timeoutRef.current = setTimeout({
                    "Navbar[handleMouseLeave > setTimeout()]": ()=>{
                        closeDropdown();
                    }
                }["Navbar[handleMouseLeave > setTimeout()]"], 200);
            }
        })["Navbar[handleMouseLeave]"];
        $[8] = closeDropdown;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleMouseLeave = t4;
    let t5;
    let t6;
    if ($[10] !== closeDropdown) {
        t5 = ({
            "Navbar[useEffect()]": ()=>{
                const handleClickOutside = {
                    "Navbar[useEffect() > handleClickOutside]": (e)=>{
                        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                            closeDropdown();
                        }
                    }
                }["Navbar[useEffect() > handleClickOutside]"];
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["Navbar[useEffect()]"];
        t6 = [
            closeDropdown
        ];
        $[10] = closeDropdown;
        $[11] = t5;
        $[12] = t6;
    } else {
        t5 = $[11];
        t6 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[13] !== closeDropdown) {
        t7 = ({
            "Navbar[useEffect()]": ()=>{
                const handleEsc = {
                    "Navbar[useEffect() > handleEsc]": (e_0)=>{
                        if (e_0.key === "Escape") {
                            closeDropdown();
                        }
                    }
                }["Navbar[useEffect() > handleEsc]"];
                document.addEventListener("keydown", handleEsc);
                return ()=>document.removeEventListener("keydown", handleEsc);
            }
        })["Navbar[useEffect()]"];
        t8 = [
            closeDropdown
        ];
        $[13] = closeDropdown;
        $[14] = t7;
        $[15] = t8;
    } else {
        t7 = $[14];
        t8 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    const isServicesOpen = openDropdown === "services";
    const isProductsOpen = openDropdown === "products";
    const t9 = `/${lang}`;
    let t10;
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 rounded-xl bg-[#3463ac]/0 blur-xl transition-all duration-500 group-hover:bg-[#3463ac]/20"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/btp_logo-2.png",
            alt: "BTP Solution Logo",
            width: 180,
            height: 46,
            priority: true,
            className: "relative h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(52,99,172,0.15)]"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
    } else {
        t10 = $[16];
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t9,
                className: "group relative transition-transform duration-300 hover:scale-105",
                children: [
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 263,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[18] = t9;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            animation: "float-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both"
        };
        t14 = ({
            "Navbar[<div>.onMouseEnter]": ()=>handleMouseEnter("services")
        })["Navbar[<div>.onMouseEnter]"];
        $[20] = t13;
        $[21] = t14;
    } else {
        t13 = $[20];
        t14 = $[21];
    }
    let t15;
    if ($[22] !== toggleDropdown) {
        t15 = ({
            "Navbar[<button>.onClick]": ()=>toggleDropdown("services")
        })["Navbar[<button>.onClick]"];
        $[22] = toggleDropdown;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    const t16 = `nav-link-premium flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none ${isServicesOpen ? "bg-white/[0.1] text-white" : "text-slate-300 hover:bg-white/[0.07] hover:text-white"}`;
    const t17 = `h-3.5 w-3.5 transition-all duration-400 ${isServicesOpen ? "rotate-180 opacity-100" : "opacity-40"}`;
    let t18;
    if ($[24] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t17
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[24] = t17;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    if ($[26] !== dict.navigation.services || $[27] !== t15 || $[28] !== t16 || $[29] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t15,
            className: t16,
            children: [
                dict.navigation.services,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[26] = dict.navigation.services;
        $[27] = t15;
        $[28] = t16;
        $[29] = t18;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== closeDropdown || $[32] !== handleMouseLeave || $[33] !== isAnimatingOut || $[34] !== isServicesOpen || $[35] !== lang || $[36] !== openDropdown) {
        t20 = (isServicesOpen || isAnimatingOut) && openDropdown === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `absolute left-1/2 top-full pt-4 -translate-x-1/2 z-50 w-[1080px] ${isAnimatingOut ? "mega-dropdown-exit" : "mega-dropdown-enter"}`,
            onMouseEnter: {
                "Navbar[<div>.onMouseEnter]": ()=>{
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }
            }["Navbar[<div>.onMouseEnter]"],
            onMouseLeave: handleMouseLeave,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-white/[0.06] bg-[#0c1222]/[0.97] backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px w-full bg-gradient-to-r from-transparent via-[#3463ac]/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 323,
                        columnNumber: 223
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-0 px-2 py-6",
                        children: SERVICE_CATEGORIES.map({
                            "Navbar[SERVICE_CATEGORIES.map()]": (cat, catIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mega-content-item flex flex-col px-5 ${catIdx < SERVICE_CATEGORIES.length - 1 ? "border-r border-white/[0.04]" : ""}`,
                                    style: {
                                        animationDelay: `${catIdx * 50}ms`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${lang}${cat.href}`,
                                            onClick: {
                                                "Navbar[SERVICE_CATEGORIES.map() > <TransitionLink>.onClick]": ()=>{
                                                    closeDropdown();
                                                }
                                            }["Navbar[SERVICE_CATEGORIES.map() > <TransitionLink>.onClick]"],
                                            className: "group/cat flex items-center gap-2 mb-3 pb-3 border-b transition-colors duration-200",
                                            style: {
                                                borderBottomColor: `${cat.color}15`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-semibold uppercase tracking-[0.12em] transition-opacity duration-200 group-hover/cat:opacity-80",
                                                    style: {
                                                        color: cat.color
                                                    },
                                                    children: cat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover/cat:opacity-60 group-hover/cat:translate-x-0",
                                                    style: {
                                                        color: cat.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 326,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: cat.items.map({
                                                "Navbar[SERVICE_CATEGORIES.map() > cat.items.map()]": (item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/${lang}${item.href}`,
                                                        onClick: {
                                                            "Navbar[SERVICE_CATEGORIES.map() > cat.items.map() > <TransitionLink>.onClick]": ()=>{
                                                                closeDropdown();
                                                            }
                                                        }["Navbar[SERVICE_CATEGORIES.map() > cat.items.map() > <TransitionLink>.onClick]"],
                                                        className: "mega-content-item group/item relative rounded-md py-2 pl-3 pr-2 text-[13px] text-slate-500 transition-all duration-150 hover:text-white hover:bg-white/[0.03]",
                                                        style: {
                                                            animationDelay: `${catIdx * 50 + i * 30}ms`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 rounded-full transition-all duration-200 group-hover/item:h-4",
                                                                style: {
                                                                    backgroundColor: cat.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 22
                                                            }, this),
                                                            item.label
                                                        ]
                                                    }, item.label, true, {
                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 86
                                                    }, this)
                                            }["Navbar[SERVICE_CATEGORIES.map() > cat.items.map()]"])
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 336,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, cat.key, true, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 324,
                                    columnNumber: 66
                                }, this)
                        }["Navbar[SERVICE_CATEGORIES.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 323,
                        columnNumber: 320
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/[0.04] mx-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${lang}/services`,
                            onClick: {
                                "Navbar[<TransitionLink>.onClick]": ()=>{
                                    closeDropdown();
                                }
                            }["Navbar[<TransitionLink>.onClick]"],
                            className: "group/cta flex items-center gap-2 py-3.5 text-[12px] font-medium text-slate-500 transition-colors duration-200 hover:text-slate-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Tüm Hizmetleri Keşfedin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 351,
                                    columnNumber: 194
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-3 w-3 transition-transform duration-200 group-hover/cta:translate-x-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 351,
                                    columnNumber: 230
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 347,
                            columnNumber: 107
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 347,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 323,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 317,
            columnNumber: 80
        }, this);
        $[31] = closeDropdown;
        $[32] = handleMouseLeave;
        $[33] = isAnimatingOut;
        $[34] = isServicesOpen;
        $[35] = lang;
        $[36] = openDropdown;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== handleMouseLeave || $[39] !== t19 || $[40] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            style: t13,
            onMouseEnter: t14,
            onMouseLeave: handleMouseLeave,
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[38] = handleMouseLeave;
        $[39] = t19;
        $[40] = t20;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    let t23;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            animation: "float-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both"
        };
        t23 = ({
            "Navbar[<div>.onMouseEnter]": ()=>handleMouseEnter("products")
        })["Navbar[<div>.onMouseEnter]"];
        $[42] = t22;
        $[43] = t23;
    } else {
        t22 = $[42];
        t23 = $[43];
    }
    let t24;
    if ($[44] !== toggleDropdown) {
        t24 = ({
            "Navbar[<button>.onClick]": ()=>toggleDropdown("products")
        })["Navbar[<button>.onClick]"];
        $[44] = toggleDropdown;
        $[45] = t24;
    } else {
        t24 = $[45];
    }
    const t25 = `nav-link-premium flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none ${isProductsOpen ? "bg-white/[0.1] text-white" : "text-slate-300 hover:bg-white/[0.07] hover:text-white"}`;
    const t26 = `h-3.5 w-3.5 transition-all duration-400 ${isProductsOpen ? "rotate-180 opacity-100" : "opacity-40"}`;
    let t27;
    if ($[46] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t26
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== dict.navigation.products || $[49] !== t24 || $[50] !== t25 || $[51] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t24,
            className: t25,
            children: [
                dict.navigation.products,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[48] = dict.navigation.products;
        $[49] = t24;
        $[50] = t25;
        $[51] = t27;
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    let t29;
    if ($[53] !== closeDropdown || $[54] !== dict.navigation.products || $[55] !== handleMouseLeave || $[56] !== isAnimatingOut || $[57] !== isProductsOpen || $[58] !== lang || $[59] !== openDropdown) {
        t29 = (isProductsOpen || isAnimatingOut) && openDropdown === "products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `absolute left-1/2 top-full pt-4 -translate-x-1/2 w-[340px] z-50 ${isAnimatingOut ? "mega-dropdown-exit" : "mega-dropdown-enter"}`,
            onMouseEnter: {
                "Navbar[<div>.onMouseEnter]": ()=>{
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }
            }["Navbar[<div>.onMouseEnter]"],
            onMouseLeave: handleMouseLeave,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-white/[0.08] bg-[#0a1628]/[0.98] backdrop-blur-3xl p-2 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.05] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[2px] w-full bg-gradient-to-r from-[#ff7700] via-purple-500 to-[#3463ac] mega-gradient-line mb-2 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 426,
                        columnNumber: 252
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pt-1 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500",
                            children: dict.navigation.products
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 426,
                            columnNumber: 415
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 426,
                        columnNumber: 383
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${lang}/products/apd`,
                        onClick: {
                            "Navbar[<TransitionLink>.onClick]": ()=>{
                                closeDropdown();
                            }
                        }["Navbar[<TransitionLink>.onClick]"],
                        className: "group/item flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm text-slate-300 transition-all duration-250 hover:bg-white/[0.05] mega-content-item",
                        style: {
                            animationDelay: "0ms"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff7700]/20 to-[#3463ac]/10 ring-1 ring-white/[0.06] transition-all duration-300 group-hover/item:from-[#ff7700]/30 group-hover/item:to-[#3463ac]/20 group-hover/item:shadow-[0_0_16px_rgba(255,119,0,0.2)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__["FileCheck2"], {
                                    className: "h-4.5 w-4.5 text-[#ff7700] transition-colors group-hover/item:text-[#ff8c2b]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 432,
                                    columnNumber: 320
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 432,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white/90 transition-colors group-hover/item:text-white",
                                        children: "APD Automation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 432,
                                        columnNumber: 460
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 transition-colors group-hover/item:text-slate-400",
                                        children: "Smart posting document engine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 432,
                                        columnNumber: 573
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 432,
                                columnNumber: 429
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 426,
                        columnNumber: 536
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 426,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 420,
            columnNumber: 80
        }, this);
        $[53] = closeDropdown;
        $[54] = dict.navigation.products;
        $[55] = handleMouseLeave;
        $[56] = isAnimatingOut;
        $[57] = isProductsOpen;
        $[58] = lang;
        $[59] = openDropdown;
        $[60] = t29;
    } else {
        t29 = $[60];
    }
    let t30;
    if ($[61] !== handleMouseLeave || $[62] !== t28 || $[63] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            style: t22,
            onMouseEnter: t23,
            onMouseLeave: handleMouseLeave,
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[61] = handleMouseLeave;
        $[62] = t28;
        $[63] = t29;
        $[64] = t30;
    } else {
        t30 = $[64];
    }
    let t31;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            animation: "float-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both"
        };
        $[65] = t31;
    } else {
        t31 = $[65];
    }
    const t32 = `/${lang}/about`;
    let t33;
    if ($[66] !== dict.navigation.about || $[67] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t31,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t32,
                className: "nav-link-premium rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none",
                children: dict.navigation.about
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 466,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[66] = dict.navigation.about;
        $[67] = t32;
        $[68] = t33;
    } else {
        t33 = $[68];
    }
    let t34;
    if ($[69] !== t21 || $[70] !== t30 || $[71] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 top-1/2 hidden lg:flex -translate-x-1/2 -translate-y-1/2",
            ref: dropdownRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navbar-capsule-border shadow-[0_4px_30px_-8px_rgba(52,99,172,0.2)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "navbar-capsule-inner flex items-center gap-0.5 px-2 py-1.5",
                    children: [
                        t21,
                        t30,
                        t33
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 475,
                    columnNumber: 205
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 475,
                columnNumber: 121
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[69] = t21;
        $[70] = t30;
        $[71] = t33;
        $[72] = t34;
    } else {
        t34 = $[72];
    }
    let t35;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-32"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, this);
        $[73] = t35;
    } else {
        t35 = $[73];
    }
    let t36;
    if ($[74] !== t12 || $[75] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex w-full items-center justify-between py-2",
            children: [
                t12,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[74] = t12;
        $[75] = t34;
        $[76] = t36;
    } else {
        t36 = $[76];
    }
    return t36;
}
_s(Navbar, "Z8SvN1s9ii/WcAlcxwJ5yMQs1Ho=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TransitionLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check-corner.js [app-client] (ecmascript) <export default as FileCheck2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const SUPPORTED_LANGUAGES = [
    {
        code: 'tr',
        name: 'Türkçe',
        flag: '🇹🇷'
    },
    {
        code: 'en',
        name: 'English',
        flag: '🇬🇧'
    }
];
function Header(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(177);
    if ($[0] !== "4c02917803a25c8ce045779e72f9ef60e82d2d95bfa217bd0b806d6235ed99f8") {
        for(let $i = 0; $i < 177; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c02917803a25c8ce045779e72f9ef60e82d2d95bfa217bd0b806d6235ed99f8";
    }
    const { dict, lang } = t0;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedMobileSection, setExpandedMobileSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[1] !== pathname) {
        t1 = ({
            "Header[redirectedPathname]": (locale)=>{
                if (!pathname) {
                    return `/${locale}`;
                }
                const segments = pathname.split("/");
                segments[1] = locale;
                return segments.join("/");
            }
        })["Header[redirectedPathname]"];
        $[1] = pathname;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const redirectedPathname = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Header[useEffect()]": ()=>{
                const handleScroll = {
                    "Header[useEffect() > handleScroll]": ()=>{
                        const y = window.scrollY;
                        setIsScrolled({
                            "Header[useEffect() > handleScroll > setIsScrolled()]": (prev)=>{
                                if (!prev && y > 50) {
                                    return true;
                                }
                                if (prev && y < 10) {
                                    return false;
                                }
                                return prev;
                            }
                        }["Header[useEffect() > handleScroll > setIsScrolled()]"]);
                    }
                }["Header[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                handleScroll();
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Header[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] !== isMobileMenuOpen) {
        t4 = ({
            "Header[useEffect()]": ()=>{
                if (isMobileMenuOpen) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "";
                }
                return _temp;
            }
        })["Header[useEffect()]"];
        t5 = [
            isMobileMenuOpen
        ];
        $[5] = isMobileMenuOpen;
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Header[toggleSection]": (section)=>{
                setExpandedMobileSection({
                    "Header[toggleSection > setExpandedMobileSection()]": (prev_0)=>prev_0 === section ? null : section
                }["Header[toggleSection > setExpandedMobileSection()]"]);
            }
        })["Header[toggleSection]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const toggleSection = t6;
    const t7 = `header-glass sticky top-0 z-50 w-full border-b bg-slate-950/50 backdrop-blur-xl ${isScrolled ? "scrolled border-white/[0.06]" : "border-white/[0.03]"}`;
    const t8 = `container relative mx-auto flex items-center justify-between px-4 sm:px-8 transition-all duration-400 ${isScrolled ? "h-16" : "h-24"}`;
    let t9;
    if ($[9] !== dict || $[10] !== lang) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 pr-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                dict: dict,
                lang: lang
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 133,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[9] = dict;
        $[10] = lang;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== lang) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "uppercase",
            children: lang
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[13] = lang;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-3.5 w-3.5 opacity-40 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-80"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-md text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.15] hover:shadow-[0_0_20px_rgba(52,99,172,0.12)] focus-visible:outline-none",
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-1 px-3 pt-2 pb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold uppercase tracking-widest text-slate-500",
                children: "Language"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 172,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== lang || $[20] !== redirectedPathname) {
        t15 = SUPPORTED_LANGUAGES.map({
            "Header[SUPPORTED_LANGUAGES.map()]": (l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: redirectedPathname(l.code),
                    className: `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${lang === l.code ? "bg-[#3463ac]/15 text-white font-semibold shadow-[inset_0_0_0_1px_rgba(52,99,172,0.2)]" : "text-slate-400 hover:text-white hover:bg-white/[0.06]"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base",
                            children: l.flag
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 180,
                            columnNumber: 366
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1",
                            children: l.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 180,
                            columnNumber: 409
                        }, this),
                        lang === l.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-3.5 w-3.5 text-[#5b8fd4]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 180,
                            columnNumber: 469
                        }, this)
                    ]
                }, l.code, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 180,
                    columnNumber: 49
                }, this)
        }["Header[SUPPORTED_LANGUAGES.map()]"]);
        $[19] = lang;
        $[20] = redirectedPathname;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-52 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dropdown-panel flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/95 backdrop-blur-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05] p-1.5 max-h-64 overflow-y-auto custom-scrollbar",
                children: [
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 190,
                columnNumber: 161
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[22] = t15;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== t13 || $[25] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden sm:flex group relative items-center",
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t16;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    const t18 = `/${lang}/contact`;
    let t19;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] !== dict.navigation.getConsultation) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 flex items-center gap-2",
            children: [
                t19,
                dict.navigation.getConsultation
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[28] = dict.navigation.getConsultation;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] !== t18 || $[31] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t18,
            className: "cta-shimmer hidden sm:inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(52,99,172,0.25)] transition-all duration-300 hover:shadow-[0_4px_30px_rgba(52,99,172,0.4)] hover:-translate-y-0.5 focus-visible:outline-none",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[30] = t18;
        $[31] = t20;
        $[32] = t21;
    } else {
        t21 = $[32];
    }
    let t22;
    if ($[33] !== isMobileMenuOpen) {
        t22 = ({
            "Header[<button>.onClick]": ()=>{
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (!isMobileMenuOpen) {
                    setExpandedMobileSection(null);
                }
            }
        })["Header[<button>.onClick]"];
        $[33] = isMobileMenuOpen;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    const t23 = `absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"}`;
    let t24;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t23,
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[36] = t23;
        $[37] = t25;
    } else {
        t25 = $[37];
    }
    const t26 = `absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"}`;
    let t27;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[38] = t27;
    } else {
        t27 = $[38];
    }
    let t28;
    if ($[39] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t26,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[39] = t26;
        $[40] = t28;
    } else {
        t28 = $[40];
    }
    let t29;
    if ($[41] !== t25 || $[42] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-5 w-5",
            children: [
                t25,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[41] = t25;
        $[42] = t28;
        $[43] = t29;
    } else {
        t29 = $[43];
    }
    let t30;
    if ($[44] !== t22 || $[45] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t22,
            className: "lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.15] focus-visible:outline-none",
            "aria-label": "Toggle mobile menu",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[44] = t22;
        $[45] = t29;
        $[46] = t30;
    } else {
        t30 = $[46];
    }
    let t31;
    if ($[47] !== t17 || $[48] !== t21 || $[49] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end gap-3 w-auto shrink-0",
            children: [
                t17,
                t21,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[47] = t17;
        $[48] = t21;
        $[49] = t30;
        $[50] = t31;
    } else {
        t31 = $[50];
    }
    let t32;
    if ($[51] !== t31 || $[52] !== t8 || $[53] !== t9) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[51] = t31;
        $[52] = t8;
        $[53] = t9;
        $[54] = t32;
    } else {
        t32 = $[54];
    }
    const t33 = `absolute left-0 w-full bg-slate-950 backdrop-blur-3xl z-40 lg:hidden overflow-y-auto custom-scrollbar transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`;
    const t34 = isScrolled ? "4rem" : "6rem";
    const t35 = isScrolled ? "calc(100dvh - 4rem)" : "calc(100dvh - 6rem)";
    let t36;
    if ($[55] !== t34 || $[56] !== t35) {
        t36 = {
            top: t34,
            height: t35
        };
        $[55] = t34;
        $[56] = t35;
        $[57] = t36;
    } else {
        t36 = $[57];
    }
    const t37 = `flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden backdrop-blur-sm ${isMobileMenuOpen ? "mobile-stagger-1" : ""}`;
    let t38;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = ({
            "Header[<button>.onClick]": ()=>toggleSection("services")
        })["Header[<button>.onClick]"];
        $[58] = t38;
    } else {
        t38 = $[58];
    }
    let t39;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3463ac]/20 to-purple-500/10 ring-1 ring-white/[0.06]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                className: "h-4 w-4 text-[#5b8fd4]"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 342,
                columnNumber: 158
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[59] = t39;
    } else {
        t39 = $[59];
    }
    let t40;
    if ($[60] !== dict.navigation.services) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-200",
                    children: dict.navigation.services
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 349,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[60] = dict.navigation.services;
        $[61] = t40;
    } else {
        t40 = $[61];
    }
    const t41 = `h-4 w-4 text-slate-500 transition-transform duration-400 ${expandedMobileSection === "services" ? "rotate-180 text-[#5b8fd4]" : ""}`;
    let t42;
    if ($[62] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t41
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[62] = t41;
        $[63] = t42;
    } else {
        t42 = $[63];
    }
    let t43;
    if ($[64] !== t40 || $[65] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t38,
            className: "flex items-center justify-between p-5 w-full text-left focus-visible:outline-none group",
            children: [
                t40,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[64] = t40;
        $[65] = t42;
        $[66] = t43;
    } else {
        t43 = $[66];
    }
    const t44 = `flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${expandedMobileSection === "services" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`;
    let t45;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[67] = t45;
    } else {
        t45 = $[67];
    }
    let t46;
    let t47;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 pt-3 pb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold uppercase tracking-widest text-[#3463ac]/70",
                children: "SAP Danışmanlık ve Uygulama"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 384,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        t47 = [
            {
                label: "Tedarik Zinciri, \xDCretim ve Lojistik",
                href: "/services/sap-consulting/supply-chain"
            },
            {
                label: "S\xFCre\xE7 Analizi ve Proje Y\xF6netimi",
                href: "/services/sap-consulting/process-analysis"
            },
            {
                label: "SAP Roll-out ve Destek Hizmetleri",
                href: "/services/sap-consulting/roll-out"
            },
            {
                label: "Finansal \xC7\xF6z\xFCmler",
                href: "/services/sap-consulting/financial-solutions"
            },
            {
                label: "\u0130nsan Kaynaklar\u0131 \xC7\xF6z\xFCmleri",
                href: "/services/sap-consulting/hr-solutions"
            },
            {
                label: "\u0130\u015F Zekas\u0131 ve Veri Analiti\u011Fi",
                href: "/services/sap-consulting/business-intelligence"
            },
            {
                label: "M\xFC\u015Fteri Deneyimi ve Sat\u0131\u015F",
                href: "/services/sap-consulting/customer-experience"
            }
        ];
        $[68] = t46;
        $[69] = t47;
    } else {
        t46 = $[68];
        t47 = $[69];
    }
    let t48;
    if ($[70] !== lang) {
        t48 = t47.map({
            "Header[(anonymous)()]": (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/${lang}${s.href}`,
                    onClick: {
                        "Header[(anonymous)() > <TransitionLink>.onClick]": ()=>setIsMobileMenuOpen(false)
                    }["Header[(anonymous)() > <TransitionLink>.onClick]"],
                    className: "flex items-center gap-3 py-2 px-5 text-slate-400 hover:text-white transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-[13px]",
                        children: s.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 418,
                        columnNumber: 158
                    }, this)
                }, s.label, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 416,
                    columnNumber: 37
                }, this)
        }["Header[(anonymous)()]"]);
        $[70] = lang;
        $[71] = t48;
    } else {
        t48 = $[71];
    }
    let t49;
    let t50;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 pt-3 pb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold uppercase tracking-widest text-[#a78bfa]/70",
                children: "Teknoloji ve Yazılım Geliştirme"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 428,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        t50 = [
            {
                label: "SAP BTP \xC7\xF6z\xFCmleri",
                href: "/services/tech-development/sap-btp"
            },
            {
                label: "ABAP, RAP / CAP Geli\u015Ftirme",
                href: "/services/tech-development/abap-rap-cap"
            },
            {
                label: "SAP Fiori ve SAPUI5 Aray\xFCzleri",
                href: "/services/tech-development/fiori-sapui5"
            },
            {
                label: "Bulut Ge\xE7i\u015F ve Modernizasyon",
                href: "/services/tech-development/cloud-migration"
            },
            {
                label: "\u0130\u015F Ak\u0131\u015F\u0131 ve S\xFCre\xE7 Otomasyonu",
                href: "/services/tech-development/workflow-automation"
            }
        ];
        $[72] = t49;
        $[73] = t50;
    } else {
        t49 = $[72];
        t50 = $[73];
    }
    let t51;
    if ($[74] !== lang) {
        t51 = t50.map({
            "Header[(anonymous)()]": (s_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/${lang}${s_0.href}`,
                    onClick: {
                        "Header[(anonymous)() > <TransitionLink>.onClick]": ()=>setIsMobileMenuOpen(false)
                    }["Header[(anonymous)() > <TransitionLink>.onClick]"],
                    className: "flex items-center gap-3 py-2 px-5 text-slate-400 hover:text-white transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-[13px]",
                        children: s_0.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 456,
                        columnNumber: 158
                    }, this)
                }, s_0.label, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 454,
                    columnNumber: 39
                }, this)
        }["Header[(anonymous)()]"]);
        $[74] = lang;
        $[75] = t51;
    } else {
        t51 = $[75];
    }
    let t52;
    let t53;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 pt-3 pb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold uppercase tracking-widest text-[#f59e0b]/70",
                children: "Entegrasyon Çözümleri"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 466,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        t53 = [
            {
                label: "E-D\xF6n\xFC\u015F\xFCm ve Dijital Ar\u015Fivleme",
                href: "/services/integration-solutions/e-donusum"
            },
            {
                label: "API ve Sistem Entegrasyonlar\u0131",
                href: "/services/integration-solutions/api-integration"
            },
            {
                label: "SAP ve Non-SAP Sistem Entegrasyonlar\u0131",
                href: "/services/integration-solutions/sap-nonsap"
            },
            {
                label: "Banka ve Fintech Entegrasyonlar\u0131",
                href: "/services/integration-solutions/banka-fintech"
            }
        ];
        $[76] = t52;
        $[77] = t53;
    } else {
        t52 = $[76];
        t53 = $[77];
    }
    let t54;
    if ($[78] !== lang) {
        t54 = t53.map({
            "Header[(anonymous)()]": (s_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/${lang}${s_1.href}`,
                    onClick: {
                        "Header[(anonymous)() > <TransitionLink>.onClick]": ()=>setIsMobileMenuOpen(false)
                    }["Header[(anonymous)() > <TransitionLink>.onClick]"],
                    className: "flex items-center gap-3 py-2 px-5 text-slate-400 hover:text-white transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-[13px]",
                        children: s_1.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 491,
                        columnNumber: 158
                    }, this)
                }, s_1.label, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 489,
                    columnNumber: 39
                }, this)
        }["Header[(anonymous)()]"]);
        $[78] = lang;
        $[79] = t54;
    } else {
        t54 = $[79];
    }
    let t55;
    let t56;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 pt-3 pb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold uppercase tracking-widest text-[#818cf8]/70",
                children: "Veri & Yapay Zeka"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 501,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        t56 = [
            {
                label: "Veri Y\xF6netimi ve D\xF6n\xFC\u015F\xFCm\xFC",
                href: "/services/ai-data-solutions/data-management"
            },
            {
                label: "\u0130\u015F Zekas\u0131 ve Geli\u015Fmi\u015F Analitik",
                href: "/services/ai-data-solutions/business-analytics"
            },
            {
                label: "Yapay Zeka ve Makine \xD6\u011Frenimi",
                href: "/services/ai-data-solutions/ai-ml"
            },
            {
                label: "Ak\u0131ll\u0131 \u0130\u015F Ak\u0131\u015F\u0131 ve S\xFCre\xE7 Otomasyonu",
                href: "/services/ai-data-solutions/rpa-automation"
            }
        ];
        $[80] = t55;
        $[81] = t56;
    } else {
        t55 = $[80];
        t56 = $[81];
    }
    let t57;
    if ($[82] !== lang) {
        t57 = t56.map({
            "Header[(anonymous)()]": (s_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/${lang}${s_2.href}`,
                    onClick: {
                        "Header[(anonymous)() > <TransitionLink>.onClick]": ()=>setIsMobileMenuOpen(false)
                    }["Header[(anonymous)() > <TransitionLink>.onClick]"],
                    className: "flex items-center gap-3 py-2 px-5 text-slate-400 hover:text-white transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-[13px]",
                        children: s_2.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 526,
                        columnNumber: 158
                    }, this)
                }, s_2.label, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 524,
                    columnNumber: 39
                }, this)
        }["Header[(anonymous)()]"]);
        $[82] = lang;
        $[83] = t57;
    } else {
        t57 = $[83];
    }
    let t58;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-3"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        $[84] = t58;
    } else {
        t58 = $[84];
    }
    let t59;
    if ($[85] !== t44 || $[86] !== t48 || $[87] !== t51 || $[88] !== t54 || $[89] !== t57) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t44,
            children: [
                t45,
                t46,
                t48,
                t49,
                t51,
                t52,
                t54,
                t55,
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 542,
            columnNumber: 11
        }, this);
        $[85] = t44;
        $[86] = t48;
        $[87] = t51;
        $[88] = t54;
        $[89] = t57;
        $[90] = t59;
    } else {
        t59 = $[90];
    }
    let t60;
    if ($[91] !== t37 || $[92] !== t43 || $[93] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t37,
            children: [
                t43,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 554,
            columnNumber: 11
        }, this);
        $[91] = t37;
        $[92] = t43;
        $[93] = t59;
        $[94] = t60;
    } else {
        t60 = $[94];
    }
    const t61 = `flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden backdrop-blur-sm ${isMobileMenuOpen ? "mobile-stagger-2" : ""}`;
    let t62;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = ({
            "Header[<button>.onClick]": ()=>toggleSection("products")
        })["Header[<button>.onClick]"];
        $[95] = t62;
    } else {
        t62 = $[95];
    }
    let t63;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-[#3463ac]/10 ring-1 ring-white/[0.06]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                className: "h-4 w-4 text-purple-400"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 574,
                columnNumber: 158
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[96] = t63;
    } else {
        t63 = $[96];
    }
    let t64;
    if ($[97] !== dict.navigation.products) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t63,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-200",
                    children: dict.navigation.products
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 581,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 581,
            columnNumber: 11
        }, this);
        $[97] = dict.navigation.products;
        $[98] = t64;
    } else {
        t64 = $[98];
    }
    const t65 = `h-4 w-4 text-slate-500 transition-transform duration-400 ${expandedMobileSection === "products" ? "rotate-180 text-purple-400" : ""}`;
    let t66;
    if ($[99] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t65
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[99] = t65;
        $[100] = t66;
    } else {
        t66 = $[100];
    }
    let t67;
    if ($[101] !== t64 || $[102] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t62,
            className: "flex items-center justify-between p-5 w-full text-left focus-visible:outline-none group",
            children: [
                t64,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 598,
            columnNumber: 11
        }, this);
        $[101] = t64;
        $[102] = t66;
        $[103] = t67;
    } else {
        t67 = $[103];
    }
    const t68 = `flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${expandedMobileSection === "products" ? "max-h-72 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`;
    let t69;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, this);
        $[104] = t69;
    } else {
        t69 = $[104];
    }
    const t70 = `/${lang}/products/apd`;
    let t71;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = ({
            "Header[<TransitionLink>.onClick]": ()=>setIsMobileMenuOpen(false)
        })["Header[<TransitionLink>.onClick]"];
        $[105] = t71;
    } else {
        t71 = $[105];
    }
    let t72;
    let t73;
    if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__["FileCheck2"], {
            className: "h-4 w-4 text-[#ff7700]"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-sm",
            children: "APD Automation"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 627,
            columnNumber: 11
        }, this);
        $[106] = t72;
        $[107] = t73;
    } else {
        t72 = $[106];
        t73 = $[107];
    }
    let t74;
    if ($[108] !== t70) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t70,
            onClick: t71,
            className: "flex items-center gap-3 py-3.5 px-5 text-slate-400 hover:text-white transition-colors",
            children: [
                t72,
                t73
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[108] = t70;
        $[109] = t74;
    } else {
        t74 = $[109];
    }
    let t75;
    if ($[110] !== t68 || $[111] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t68,
            children: [
                t69,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 644,
            columnNumber: 11
        }, this);
        $[110] = t68;
        $[111] = t74;
        $[112] = t75;
    } else {
        t75 = $[112];
    }
    let t76;
    if ($[113] !== t61 || $[114] !== t67 || $[115] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t61,
            children: [
                t67,
                t75
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 653,
            columnNumber: 11
        }, this);
        $[113] = t61;
        $[114] = t67;
        $[115] = t75;
        $[116] = t76;
    } else {
        t76 = $[116];
    }
    const t77 = `flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden backdrop-blur-sm ${isMobileMenuOpen ? "mobile-stagger-3" : ""}`;
    const t78 = `/${lang}/about`;
    let t79;
    if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
        t79 = ({
            "Header[<TransitionLink>.onClick]": ()=>setIsMobileMenuOpen(false)
        })["Header[<TransitionLink>.onClick]"];
        $[117] = t79;
    } else {
        t79 = $[117];
    }
    let t80;
    if ($[118] === Symbol.for("react.memo_cache_sentinel")) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] ring-1 ring-white/[0.06]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: "💡"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 674,
                columnNumber: 157
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 674,
            columnNumber: 11
        }, this);
        $[118] = t80;
    } else {
        t80 = $[118];
    }
    let t81;
    if ($[119] !== dict.navigation.about) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t80,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-200",
                    children: dict.navigation.about
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 681,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 681,
            columnNumber: 11
        }, this);
        $[119] = dict.navigation.about;
        $[120] = t81;
    } else {
        t81 = $[120];
    }
    let t82;
    if ($[121] === Symbol.for("react.memo_cache_sentinel")) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 689,
            columnNumber: 11
        }, this);
        $[121] = t82;
    } else {
        t82 = $[121];
    }
    let t83;
    if ($[122] !== t78 || $[123] !== t81) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t78,
            onClick: t79,
            className: "flex items-center justify-between p-5 w-full text-left group",
            children: [
                t81,
                t82
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 696,
            columnNumber: 11
        }, this);
        $[122] = t78;
        $[123] = t81;
        $[124] = t83;
    } else {
        t83 = $[124];
    }
    let t84;
    if ($[125] !== t77 || $[126] !== t83) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t77,
            children: t83
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 705,
            columnNumber: 11
        }, this);
        $[125] = t77;
        $[126] = t83;
        $[127] = t84;
    } else {
        t84 = $[127];
    }
    const t85 = `flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden backdrop-blur-sm ${isMobileMenuOpen ? "mobile-stagger-4" : ""}`;
    let t86;
    if ($[128] === Symbol.for("react.memo_cache_sentinel")) {
        t86 = ({
            "Header[<button>.onClick]": ()=>toggleSection("language")
        })["Header[<button>.onClick]"];
        $[128] = t86;
    } else {
        t86 = $[128];
    }
    let t87;
    if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] ring-1 ring-white/[0.06]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                className: "h-4 w-4 text-slate-400"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 724,
                columnNumber: 157
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 724,
            columnNumber: 11
        }, this);
        $[129] = t87;
    } else {
        t87 = $[129];
    }
    let t88;
    if ($[130] !== lang) {
        t88 = SUPPORTED_LANGUAGES.find({
            "Header[SUPPORTED_LANGUAGES.find()]": (l_0)=>l_0.code === lang
        }["Header[SUPPORTED_LANGUAGES.find()]"])?.flag;
        $[130] = lang;
        $[131] = t88;
    } else {
        t88 = $[131];
    }
    let t89;
    if ($[132] !== lang) {
        t89 = SUPPORTED_LANGUAGES.find({
            "Header[SUPPORTED_LANGUAGES.find()]": (l_1)=>l_1.code === lang
        }["Header[SUPPORTED_LANGUAGES.find()]"])?.name || lang.toUpperCase();
        $[132] = lang;
        $[133] = t89;
    } else {
        t89 = $[133];
    }
    let t90;
    if ($[134] !== t88 || $[135] !== t89) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t87,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-200",
                    children: [
                        t88,
                        " ",
                        t89
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 751,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 751,
            columnNumber: 11
        }, this);
        $[134] = t88;
        $[135] = t89;
        $[136] = t90;
    } else {
        t90 = $[136];
    }
    const t91 = `h-4 w-4 text-slate-500 transition-transform duration-400 ${expandedMobileSection === "language" ? "rotate-180 text-white" : ""}`;
    let t92;
    if ($[137] !== t91) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t91
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 761,
            columnNumber: 11
        }, this);
        $[137] = t91;
        $[138] = t92;
    } else {
        t92 = $[138];
    }
    let t93;
    if ($[139] !== t90 || $[140] !== t92) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t86,
            className: "flex items-center justify-between p-5 w-full text-left focus-visible:outline-none",
            children: [
                t90,
                t92
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 769,
            columnNumber: 11
        }, this);
        $[139] = t90;
        $[140] = t92;
        $[141] = t93;
    } else {
        t93 = $[141];
    }
    const t94 = `flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${expandedMobileSection === "language" ? "max-h-72 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`;
    let t95;
    if ($[142] === Symbol.for("react.memo_cache_sentinel")) {
        t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 779,
            columnNumber: 11
        }, this);
        $[142] = t95;
    } else {
        t95 = $[142];
    }
    let t96;
    if ($[143] !== lang || $[144] !== redirectedPathname) {
        t96 = SUPPORTED_LANGUAGES.map({
            "Header[SUPPORTED_LANGUAGES.map()]": (l_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: redirectedPathname(l_2.code),
                    onClick: {
                        "Header[SUPPORTED_LANGUAGES.map() > <Link>.onClick]": ()=>setIsMobileMenuOpen(false)
                    }["Header[SUPPORTED_LANGUAGES.map() > <Link>.onClick]"],
                    className: `flex items-center gap-3 py-3.5 px-5 text-sm transition-all ${lang === l_2.code ? "bg-[#3463ac]/10 text-white font-semibold" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base",
                            children: l_2.flag
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 789,
                            columnNumber: 261
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1",
                            children: l_2.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 789,
                            columnNumber: 306
                        }, this),
                        lang === l_2.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-3.5 w-3.5 text-[#5b8fd4]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 789,
                            columnNumber: 370
                        }, this)
                    ]
                }, l_2.code, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 787,
                    columnNumber: 51
                }, this)
        }["Header[SUPPORTED_LANGUAGES.map()]"]);
        $[143] = lang;
        $[144] = redirectedPathname;
        $[145] = t96;
    } else {
        t96 = $[145];
    }
    let t97;
    if ($[146] !== t94 || $[147] !== t96) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t94,
            children: [
                t95,
                t96
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 799,
            columnNumber: 11
        }, this);
        $[146] = t94;
        $[147] = t96;
        $[148] = t97;
    } else {
        t97 = $[148];
    }
    let t98;
    if ($[149] !== t85 || $[150] !== t93 || $[151] !== t97) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t85,
            children: [
                t93,
                t97
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 808,
            columnNumber: 11
        }, this);
        $[149] = t85;
        $[150] = t93;
        $[151] = t97;
        $[152] = t98;
    } else {
        t98 = $[152];
    }
    const t99 = `mt-4 pb-6 ${isMobileMenuOpen ? "mobile-stagger-5" : ""}`;
    const t100 = `/${lang}/contact`;
    let t101;
    if ($[153] === Symbol.for("react.memo_cache_sentinel")) {
        t101 = ({
            "Header[<TransitionLink>.onClick]": ()=>setIsMobileMenuOpen(false)
        })["Header[<TransitionLink>.onClick]"];
        $[153] = t101;
    } else {
        t101 = $[153];
    }
    let t102;
    if ($[154] === Symbol.for("react.memo_cache_sentinel")) {
        t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 829,
            columnNumber: 12
        }, this);
        $[154] = t102;
    } else {
        t102 = $[154];
    }
    let t103;
    if ($[155] !== dict.navigation.getConsultation) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 flex items-center gap-2",
            children: [
                t102,
                dict.navigation.getConsultation
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 836,
            columnNumber: 12
        }, this);
        $[155] = dict.navigation.getConsultation;
        $[156] = t103;
    } else {
        t103 = $[156];
    }
    let t104;
    if ($[157] !== t100 || $[158] !== t103) {
        t104 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t100,
            onClick: t101,
            className: "cta-shimmer flex w-full h-14 items-center justify-center rounded-2xl px-6 text-base font-semibold text-white shadow-[0_0_30px_rgba(52,99,172,0.3)] transition-all",
            children: t103
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 844,
            columnNumber: 12
        }, this);
        $[157] = t100;
        $[158] = t103;
        $[159] = t104;
    } else {
        t104 = $[159];
    }
    let t105;
    if ($[160] !== t104 || $[161] !== t99) {
        t105 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t99,
            children: t104
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 853,
            columnNumber: 12
        }, this);
        $[160] = t104;
        $[161] = t99;
        $[162] = t105;
    } else {
        t105 = $[162];
    }
    let t106;
    if ($[163] !== t105 || $[164] !== t60 || $[165] !== t76 || $[166] !== t84 || $[167] !== t98) {
        t106 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col px-6 py-8 gap-4",
            children: [
                t60,
                t76,
                t84,
                t98,
                t105
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 862,
            columnNumber: 12
        }, this);
        $[163] = t105;
        $[164] = t60;
        $[165] = t76;
        $[166] = t84;
        $[167] = t98;
        $[168] = t106;
    } else {
        t106 = $[168];
    }
    let t107;
    if ($[169] !== t106 || $[170] !== t33 || $[171] !== t36) {
        t107 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t33,
            style: t36,
            children: t106
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 874,
            columnNumber: 12
        }, this);
        $[169] = t106;
        $[170] = t33;
        $[171] = t36;
        $[172] = t107;
    } else {
        t107 = $[172];
    }
    let t108;
    if ($[173] !== t107 || $[174] !== t32 || $[175] !== t7) {
        t108 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t7,
            children: [
                t32,
                t107
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 884,
            columnNumber: 12
        }, this);
        $[173] = t107;
        $[174] = t32;
        $[175] = t7;
        $[176] = t108;
    } else {
        t108 = $[176];
    }
    return t108;
}
_s(Header, "RtmAbzy2DZlhft39Azok3plpKdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
function _temp() {
    document.body.style.overflow = "";
}
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CookieBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CookieBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CookieBanner({ dict }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieBanner.useEffect": ()=>{
            // Check if user already accepted cookies
            const consent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('btp-cookie-consent');
            if (!consent) {
                setIsVisible(true);
            } else {
                // Track visit analytics since they consented
                trackVisit();
            }
        }
    }["CookieBanner.useEffect"], []);
    const trackVisit = ()=>{
        const visits = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('btp-visits') || '0';
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('btp-visits', (parseInt(visits) + 1).toString(), {
            expires: 365
        });
        const firstVisit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('btp-first-visit');
        if (!firstVisit) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('btp-first-visit', new Date().toISOString(), {
                expires: 365
            });
        }
    };
    const handleAccept = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('btp-cookie-consent', 'true', {
            expires: 365
        });
        setIsVisible(false);
        trackVisit(); // Start tracking immediately after consent
    };
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 md:max-w-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-white",
                            children: "Çerez Politikası"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CookieBanner.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsVisible(false),
                            className: "text-slate-400 hover:text-white transition-colors focus-visible:outline-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CookieBanner.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CookieBanner.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/CookieBanner.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-300",
                    children: "Sitemizi daha iyi deneyimlemeniz ve kişiselleştirilmiş hizmet sunabilmemiz için çerezleri kullanıyoruz."
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/CookieBanner.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAccept,
                            className: "flex-1 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all hover:bg-purple-500 active:scale-95 focus-visible:outline-none",
                            children: "Kabul Ediyorum"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CookieBanner.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsVisible(false),
                            className: "px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white transition-colors focus-visible:outline-none",
                            children: "Reddet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CookieBanner.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/CookieBanner.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/CookieBanner.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CookieBanner.tsx",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
_s(CookieBanner, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = CookieBanner;
var _c;
__turbopack_context__.k.register(_c, "CookieBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_6a860656._.js.map
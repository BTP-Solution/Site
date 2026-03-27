(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TransitionLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AnimatedCounter(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "f2772df69367c859850e9e3624e5ee236b5209991621287b628199b1909a8d2d") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f2772df69367c859850e9e3624e5ee236b5209991621287b628199b1909a8d2d";
    }
    const { target, suffix } = t0;
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t1;
    let t2;
    if ($[1] !== target) {
        t1 = ({
            "AnimatedCounter[useEffect()]": ()=>{
                const observer = new IntersectionObserver((t3)=>{
                    const [entry] = t3;
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        const start = performance.now();
                        const animate = {
                            "AnimatedCounter[useEffect() > <anonymous> > animate]": (now)=>{
                                const elapsed = now - start;
                                const progress = Math.min(elapsed / 2000, 1);
                                const eased = 1 - Math.pow(1 - progress, 3);
                                setCount(Math.floor(eased * target));
                                if (progress < 1) {
                                    requestAnimationFrame(animate);
                                }
                            }
                        }["AnimatedCounter[useEffect() > <anonymous> > animate]"];
                        requestAnimationFrame(animate);
                    }
                }, {
                    threshold: 0.5
                });
                if (ref.current) {
                    observer.observe(ref.current);
                }
                return ()=>observer.disconnect();
            }
        })["AnimatedCounter[useEffect()]"];
        t2 = [
            target
        ];
        $[1] = target;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== count || $[5] !== suffix) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            ref: ref,
            children: [
                count,
                suffix
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[4] = count;
        $[5] = suffix;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_s(AnimatedCounter, "lKCxpPtoTj/gf3ANhT1pbLWypxk=");
_c = AnimatedCounter;
function Hero(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "f2772df69367c859850e9e3624e5ee236b5209991621287b628199b1909a8d2d") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f2772df69367c859850e9e3624e5ee236b5209991621287b628199b1909a8d2d";
    }
    const { dict, lang } = t0;
    const [morphIndex, setMorphIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            x: 0,
            y: 0
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const words = dict.hero.morphWords;
    let t2;
    let t3;
    if ($[2] !== words.length) {
        t2 = ({
            "Hero[useEffect()]": ()=>{
                const interval = setInterval({
                    "Hero[useEffect() > setInterval()]": ()=>{
                        setIsVisible(false);
                        setTimeout({
                            "Hero[useEffect() > setInterval() > setTimeout()]": ()=>{
                                setMorphIndex({
                                    "Hero[useEffect() > setInterval() > setTimeout() > setMorphIndex()]": (prev)=>(prev + 1) % words.length
                                }["Hero[useEffect() > setInterval() > setTimeout() > setMorphIndex()]"]);
                                setIsVisible(true);
                            }
                        }["Hero[useEffect() > setInterval() > setTimeout()]"], 400);
                    }
                }["Hero[useEffect() > setInterval()]"], 3000);
                return ()=>clearInterval(interval);
            }
        })["Hero[useEffect()]"];
        t3 = [
            words.length
        ];
        $[2] = words.length;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Hero[handleMouseMove]": (e)=>{
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        })["Hero[handleMouseMove]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleMouseMove = t4;
    const t5 = `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 99, 172, 0.08), transparent 40%)`;
    let t6;
    if ($[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 z-0 transition-opacity duration-300",
            style: {
                background: t5
            }
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)] opacity-30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -top-[50px] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform-origin:50%_0%] animate-retro-grid border-t border-white/[0.02]"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 163,
                columnNumber: 161
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 163,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none z-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-[-10%] right-[10%] h-[500px] w-[500px] rounded-full bg-[#3463ac]/15 blur-[120px] animate-orb-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 170,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-[-10%] left-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-orb-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 170,
                    columnNumber: 211
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 170,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-badge mb-8 flex items-center gap-2 rounded-full border border-[#3463ac]/40 bg-white/[0.03] backdrop-blur-md px-4 py-1.5 text-sm font-medium text-slate-300",
            style: {
                animationDelay: "0s",
                animation: "float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0s both, badge-glow 4s ease-in-out infinite"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "h-4 w-4 text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 180,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Yeni Nesil SAP ve AI Çözümleri"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 180,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            animation: "float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both"
        };
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== dict.hero.title) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-[1.1] pb-2",
            style: t10,
            children: dict.hero.title
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[12] = dict.hero.title;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            animation: "float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both"
        };
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-px w-8 bg-gradient-to-r from-transparent to-[#3463ac]/50"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[14] = t12;
        $[15] = t13;
    } else {
        t12 = $[14];
        t13 = $[15];
    }
    const t14 = `text-base sm:text-lg font-medium bg-gradient-to-r from-[#5b8fd4] via-[#7e6fcf] to-[#a855f7] bg-clip-text text-transparent transition-all duration-400 ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-2 blur-sm"}`;
    const t15 = words[morphIndex];
    let t16;
    if ($[16] !== t14 || $[17] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t14,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[16] = t14;
        $[17] = t15;
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-px w-8 bg-gradient-to-l from-transparent to-purple-500/50"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex items-center justify-center gap-3",
            style: t12,
            children: [
                t13,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[20] = t16;
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    let t19;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            animation: "float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both"
        };
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    if ($[23] !== dict.hero.subtitle) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-slate-400 font-light leading-relaxed",
            style: t19,
            children: dict.hero.subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[23] = dict.hero.subtitle;
        $[24] = t20;
    } else {
        t20 = $[24];
    }
    let t21;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            animation: "float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both"
        };
        $[25] = t21;
    } else {
        t21 = $[25];
    }
    const t22 = `/${lang}/services`;
    let t23;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            className: "h-4 w-4 transition-transform group-hover:translate-x-1"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[26] = t23;
    } else {
        t23 = $[26];
    }
    let t24;
    if ($[27] !== dict.hero.primaryCta) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 flex items-center gap-2.5",
            children: [
                dict.hero.primaryCta,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[27] = dict.hero.primaryCta;
        $[28] = t24;
    } else {
        t24 = $[28];
    }
    let t25;
    if ($[29] !== t22 || $[30] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t22,
            className: "cta-shimmer group flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-10 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(52,99,172,0.4)] focus-visible:outline-none",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[29] = t22;
        $[30] = t24;
        $[31] = t25;
    } else {
        t25 = $[31];
    }
    const t26 = `/${lang}/contact`;
    let t27;
    if ($[32] !== dict.hero.secondaryCta || $[33] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t26,
            className: "group flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-10 text-base font-semibold text-slate-300 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white focus-visible:outline-none",
            children: dict.hero.secondaryCta
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[32] = dict.hero.secondaryCta;
        $[33] = t26;
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    let t28;
    if ($[35] !== t25 || $[36] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4",
            style: t21,
            children: [
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[35] = t25;
        $[36] = t27;
        $[37] = t28;
    } else {
        t28 = $[37];
    }
    let t29;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            animation: "float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s both"
        };
        $[38] = t29;
    } else {
        t29 = $[38];
    }
    let t30;
    if ($[39] !== dict.hero.stats) {
        t30 = dict.hero.stats.map(_HeroDictHeroStatsMap);
        $[39] = dict.hero.stats;
        $[40] = t30;
    } else {
        t30 = $[40];
    }
    let t31;
    if ($[41] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-20 w-full max-w-4xl mx-auto rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 sm:p-8",
            style: t29,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 divide-y divide-white/5 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-white/5",
                children: t30
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 330,
                columnNumber: 149
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[41] = t30;
        $[42] = t31;
    } else {
        t31 = $[42];
    }
    let t32;
    if ($[43] !== t11 || $[44] !== t18 || $[45] !== t20 || $[46] !== t28 || $[47] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container relative mx-auto px-4 sm:px-8 z-10 pt-12 md:pt-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-5xl text-center flex flex-col items-center",
                children: [
                    t9,
                    t11,
                    t18,
                    t20,
                    t28,
                    t31
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 338,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[43] = t11;
        $[44] = t18;
        $[45] = t20;
        $[46] = t28;
        $[47] = t31;
        $[48] = t32;
    } else {
        t32 = $[48];
    }
    let t33;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            animation: "float-in 1s cubic-bezier(0.16,1,0.3,1) 1.2s both"
        };
        $[49] = t33;
    } else {
        t33 = $[49];
    }
    let t34;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40",
            style: t33,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 w-5 rounded-full border border-white/30 flex justify-center pt-1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-2 w-1 rounded-full bg-white/60 animate-scroll-dot"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 359,
                    columnNumber: 216
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 359,
                columnNumber: 128
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        $[50] = t34;
    } else {
        t34 = $[50];
    }
    let t35;
    if ($[51] !== t32 || $[52] !== t6) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden bg-[#060d1a] min-h-[95vh] flex items-center pt-24 pb-16",
            onMouseMove: handleMouseMove,
            children: [
                t6,
                t7,
                t8,
                t32,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[51] = t32;
        $[52] = t6;
        $[53] = t35;
    } else {
        t35 = $[53];
    }
    return t35;
}
_s1(Hero, "e6E3Biznf5vevABCLxwBzF4ZeAM=");
_c1 = Hero;
function _HeroDictHeroStatsMap(stat, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center py-4 sm:py-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tabular-nums",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                    target: stat.value,
                    suffix: stat.suffix
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 376,
                    columnNumber: 212
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 376,
                columnNumber: 75
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-2 text-xs sm:text-sm text-slate-400 font-medium tracking-wide",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 376,
                columnNumber: 279
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 376,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ParticleCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ParticleCanvas(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "b0b5621ee3deefb1feef19b69d05dd6be8b8d889ebb3832d3bd2aea9dbd0f48e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b0b5621ee3deefb1feef19b69d05dd6be8b8d889ebb3832d3bd2aea9dbd0f48e";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ParticleCanvas[useEffect()]": ()=>{
                const canvas = canvasRef.current;
                if (!canvas) {
                    return;
                }
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    return;
                }
                const FRAG_COLORS = [
                    "#3463ac",
                    "#7e22ce",
                    "#a855f7",
                    "#60a5fa",
                    "#ffffff"
                ];
                let animationFrameId;
                const core = {
                    x: canvas.width / 2,
                    y: canvas.height / 2,
                    vx: (Math.random() - 0.5) * 3,
                    vy: (Math.random() - 0.5) * 3,
                    radius: 6
                };
                const fragments = [];
                const spawnExplosion = {
                    "ParticleCanvas[useEffect() > spawnExplosion]": (x, y)=>{
                        const count = Math.floor(Math.random() * 20) + 30;
                        for(let i = 0; i < count; i++){
                            const angle = Math.random() * Math.PI * 2;
                            const speed = Math.random() * 3 + 1;
                            fragments.push({
                                x,
                                y,
                                vx: Math.cos(angle) * speed,
                                vy: Math.sin(angle) * speed,
                                radius: Math.random() * 2 + 1,
                                color: FRAG_COLORS[Math.floor(Math.random() * FRAG_COLORS.length)],
                                maxLife: Math.random() * 60 + 30,
                                life: Math.random() * 60 + 30
                            });
                        }
                    }
                }["ParticleCanvas[useEffect() > spawnExplosion]"];
                const resize = {
                    "ParticleCanvas[useEffect() > resize]": ()=>{
                        const parent = canvas.parentElement;
                        if (parent) {
                            canvas.width = parent.clientWidth;
                            canvas.height = parent.clientHeight;
                            core.x = canvas.width / 2;
                            core.y = canvas.height / 2;
                            core.vx = (Math.random() - 0.5) * 4;
                            core.vy = (Math.random() - 0.5) * 4;
                        }
                    }
                }["ParticleCanvas[useEffect() > resize]"];
                window.addEventListener("resize", resize);
                const p = canvas.parentElement;
                if (p) {
                    canvas.width = p.clientWidth;
                    canvas.height = p.clientHeight;
                    core.x = canvas.width / 2;
                    core.y = canvas.height / 2;
                }
                const animate = {
                    "ParticleCanvas[useEffect() > animate]": ()=>{
                        ctx.fillStyle = "rgba(10, 22, 40, 0.2)";
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        core.x = core.x + core.vx;
                        core.y = core.y + core.vy;
                        let hit = false;
                        let explosionX = core.x;
                        let explosionY = core.y;
                        if (core.x - core.radius <= 0) {
                            core.x = core.radius;
                            core.vx = core.vx * -1;
                            hit = true;
                            explosionX = 0;
                        } else {
                            if (core.x + core.radius >= canvas.width) {
                                core.x = canvas.width - core.radius;
                                core.vx = core.vx * -1;
                                hit = true;
                                explosionX = canvas.width;
                            }
                        }
                        if (core.y - core.radius <= 0) {
                            core.y = core.radius;
                            core.vy = core.vy * -1;
                            hit = true;
                            explosionY = 0;
                        } else {
                            if (core.y + core.radius >= canvas.height) {
                                core.y = canvas.height - core.radius;
                                core.vy = core.vy * -1;
                                hit = true;
                                explosionY = canvas.height;
                            }
                        }
                        if (hit) {
                            spawnExplosion(explosionX, explosionY);
                            core.vx = core.vx + (Math.random() - 0.5) * 0.4;
                            core.vy = core.vy + (Math.random() - 0.5) * 0.4;
                            const speed_0 = Math.sqrt(core.vx * core.vx + core.vy * core.vy);
                            if (speed_0 > 2.5) {
                                core.vx = core.vx / speed_0 * 2.5;
                                core.vy = core.vy / speed_0 * 2.5;
                            }
                        }
                        ctx.beginPath();
                        ctx.arc(core.x, core.y, core.radius, 0, Math.PI * 2);
                        ctx.fillStyle = "#c084fc";
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = "#c084fc";
                        ctx.fill();
                        for(let i_0 = fragments.length - 1; i_0 >= 0; i_0--){
                            const f = fragments[i_0];
                            f.x = f.x + f.vx;
                            f.y = f.y + f.vy;
                            f.vx = f.vx * 0.92;
                            f.vy = f.vy * 0.92;
                            f.life = f.life - 1;
                            if (f.life <= 0) {
                                fragments.splice(i_0, 1);
                            } else {
                                ctx.beginPath();
                                ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
                                ctx.globalAlpha = f.life / f.maxLife;
                                ctx.fillStyle = f.color;
                                ctx.shadowBlur = 5;
                                ctx.shadowColor = f.color;
                                ctx.fill();
                            }
                        }
                        ctx.globalAlpha = 1;
                        ctx.shadowBlur = 0;
                        animationFrameId = requestAnimationFrame(animate);
                    }
                }["ParticleCanvas[useEffect() > animate]"];
                animate();
                return ()=>{
                    window.removeEventListener("resize", resize);
                    cancelAnimationFrame(animationFrameId);
                };
            }
        })["ParticleCanvas[useEffect()]"];
        t3 = [];
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const t4 = `absolute inset-0 pointer-events-none ${className}`;
    let t5;
    if ($[3] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ParticleCanvas.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, this);
        $[3] = t4;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    return t5;
}
_s(ParticleCanvas, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = ParticleCanvas;
var _c;
__turbopack_context__.k.register(_c, "ParticleCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/BentoGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BentoGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ParticleCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ParticleCanvas.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/* ══════════════════════════════════
   SERVICE DATA
   ══════════════════════════════════ */ const SERVICES = [
    {
        id: 'tech',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        accent: '#a78bfa'
    },
    {
        id: 'consulting',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        accent: '#3463ac'
    },
    {
        id: 'integration',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"],
        accent: '#f59e0b'
    },
    {
        id: 'supplychain',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
        accent: '#34d399'
    },
    {
        id: 'edonusum',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        accent: '#22d3ee'
    }
];
function BentoGrid(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(85);
    if ($[0] !== "acbee72072413cd3cd9d13604ebf09d08e17de08e8a09f78362ef3a2c21581fc") {
        for(let $i = 0; $i < 85; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "acbee72072413cd3cd9d13604ebf09d08e17de08e8a09f78362ef3a2c21581fc";
    }
    const { dict } = t0;
    const b = dict.bento;
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeRndIndex, setActiveRndIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isRndHovered, setIsRndHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const serviceData = {
        consulting: {
            title: b.consulting.title,
            description: b.consulting.description,
            tags: b.consulting.tags || []
        },
        edonusum: {
            title: b.edonusum?.title || "E-D\xF6n\xFC\u015F\xFCm",
            description: b.edonusum?.description || "",
            tags: b.edonusum?.tags || []
        },
        supplychain: {
            title: b.supplychain?.title || "Dijital Tedarik Zinciri",
            description: b.supplychain?.description || "",
            tags: b.supplychain?.tags || []
        },
        integration: {
            title: b.integration?.title || "Entegrasyon",
            description: b.integration?.description || "",
            tags: b.integration?.tags || []
        },
        tech: {
            title: b.tech?.title || "Teknoloji & Cloud",
            description: b.tech?.description || "",
            tags: b.tech?.tags || []
        }
    };
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "BentoGrid[useEffect()]": ()=>{
                const observer = new IntersectionObserver((t3)=>{
                    const [entry] = t3;
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                }, {
                    threshold: 0.1
                });
                if (sectionRef.current) {
                    observer.observe(sectionRef.current);
                }
                return ()=>observer.disconnect();
            }
        })["BentoGrid[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== b.rnd.products?.length || $[4] !== isRndHovered) {
        t3 = ({
            "BentoGrid[useEffect()]": ()=>{
                if (isRndHovered) {
                    return;
                }
                const productCount = b.rnd.products?.length || 1;
                if (productCount <= 1) {
                    return;
                }
                const timer = setInterval({
                    "BentoGrid[useEffect() > setInterval()]": ()=>{
                        setActiveRndIndex({
                            "BentoGrid[useEffect() > setInterval() > setActiveRndIndex()]": (prev)=>(prev + 1) % productCount
                        }["BentoGrid[useEffect() > setInterval() > setActiveRndIndex()]"]);
                    }
                }["BentoGrid[useEffect() > setInterval()]"], 5000);
                return ()=>clearInterval(timer);
            }
        })["BentoGrid[useEffect()]"];
        $[3] = b.rnd.products?.length;
        $[4] = isRndHovered;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== b.rnd || $[7] !== isRndHovered) {
        t4 = [
            isRndHovered,
            b.rnd
        ];
        $[6] = b.rnd;
        $[7] = isRndHovered;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[9] !== b.rnd.products?.length) {
        t5 = ({
            "BentoGrid[handleNextRnd]": (e)=>{
                e.stopPropagation();
                const productCount_0 = b.rnd.products?.length || 1;
                setActiveRndIndex({
                    "BentoGrid[handleNextRnd > setActiveRndIndex()]": (prev_0)=>(prev_0 + 1) % productCount_0
                }["BentoGrid[handleNextRnd > setActiveRndIndex()]"]);
            }
        })["BentoGrid[handleNextRnd]"];
        $[9] = b.rnd.products?.length;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const handleNextRnd = t5;
    let t6;
    if ($[11] !== b.rnd.products?.length) {
        t6 = ({
            "BentoGrid[handlePrevRnd]": (e_0)=>{
                e_0.stopPropagation();
                const productCount_1 = b.rnd.products?.length || 1;
                setActiveRndIndex({
                    "BentoGrid[handlePrevRnd > setActiveRndIndex()]": (prev_1)=>(prev_1 - 1 + productCount_1) % productCount_1
                }["BentoGrid[handlePrevRnd > setActiveRndIndex()]"]);
            }
        })["BentoGrid[handlePrevRnd]"];
        $[11] = b.rnd.products?.length;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const handlePrevRnd = t6;
    const t7 = "relative py-28 sm:py-36 overflow-hidden";
    let t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            background: "linear-gradient(180deg, #060d1a 0%, #0c1829 50%, #060d1a 100%)"
        };
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,_rgba(52,99,172,0.05)_0%,_transparent_70%)] pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 190,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t8 = $[13];
        t9 = $[14];
    }
    const t10 = "container mx-auto px-4 sm:px-8";
    const t11 = `mx-auto max-w-2xl text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
    let t12;
    if ($[15] !== b.sectionTitle) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl",
            children: b.sectionTitle
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[15] = b.sectionTitle;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== b.sectionSubtitle) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-5 text-base sm:text-lg text-slate-500 font-light leading-relaxed",
            children: b.sectionSubtitle
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[17] = b.sectionSubtitle;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== t11 || $[20] !== t12 || $[21] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t12;
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    const t15 = "mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]";
    const t16 = SERVICES.map({
        "BentoGrid[SERVICES.map()]": (svc, i)=>{
            const Icon = svc.icon;
            const info = serviceData[svc.id];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `group relative bg-[#0a1628] p-6 sm:p-7 transition-all duration-500 hover:bg-white/[0.04] cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                style: {
                    transitionDelay: `${200 + i * 80}ms`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                        style: {
                            background: `radial-gradient(circle at 50% 0%, ${svc.accent}08 0%, transparent 70%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/BentoGrid.tsx",
                        lineNumber: 232,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center rounded-xl mb-5 transition-all duration-300 group-hover:scale-110 shrink-0",
                                style: {
                                    background: `${svc.accent}10`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-[18px] w-[18px]",
                                    style: {
                                        color: svc.accent
                                    },
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/BentoGrid.tsx",
                                    lineNumber: 236,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                                lineNumber: 234,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-white mb-2 group-hover:translate-x-0.5 transition-transform duration-300",
                                children: info.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                                lineNumber: 238,
                                columnNumber: 42
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] text-slate-500 leading-relaxed font-light mb-6",
                                children: info.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                                lineNumber: 238,
                                columnNumber: 175
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto pt-8 relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-max animate-marquee-half group-hover:[animation-play-state:paused]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex w-max shrink-0 items-center justify-around gap-6 pr-6",
                                            children: [
                                                ...info.tags,
                                                ...info.tags,
                                                ...info.tags
                                            ].map(_BentoGridSERVICESMapAnonymous)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/BentoGrid.tsx",
                                            lineNumber: 238,
                                            columnNumber: 512
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": "true",
                                            className: "flex w-max shrink-0 items-center justify-around gap-6 pr-6",
                                            children: [
                                                ...info.tags,
                                                ...info.tags,
                                                ...info.tags
                                            ].map(_BentoGridSERVICESMapAnonymous2)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/BentoGrid.tsx",
                                            lineNumber: 238,
                                            columnNumber: 674
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/BentoGrid.tsx",
                                    lineNumber: 238,
                                    columnNumber: 421
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                                lineNumber: 238,
                                columnNumber: 271
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/BentoGrid.tsx",
                        lineNumber: 234,
                        columnNumber: 14
                    }, this)
                ]
            }, svc.id, true, {
                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                lineNumber: 230,
                columnNumber: 14
            }, this);
        }
    }["BentoGrid[SERVICES.map()]"]);
    let t17;
    if ($[23] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[23] = t16;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    const t18 = `mx-auto max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            transitionDelay: "600ms"
        };
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    let t21;
    let t22;
    let t23;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "BentoGrid[<div>.onMouseEnter]": ()=>setIsRndHovered(true)
        })["BentoGrid[<div>.onMouseEnter]"];
        t21 = ({
            "BentoGrid[<div>.onMouseLeave]": ()=>setIsRndHovered(false)
        })["BentoGrid[<div>.onMouseLeave]"];
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ParticleCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[radial-gradient(circle,_rgba(168,85,247,0.15)_0%,_transparent_70%)] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[26] = t20;
        $[27] = t21;
        $[28] = t22;
        $[29] = t23;
    } else {
        t20 = $[26];
        t21 = $[27];
        t22 = $[28];
        t23 = $[29];
    }
    let t24;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                className: "h-6 w-6 text-purple-400",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                lineNumber: 284,
                columnNumber: 206
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[30] = t24;
    } else {
        t24 = $[30];
    }
    let t25;
    if ($[31] !== b.rnd.tag) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-6 pointer-events-none",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold uppercase tracking-[0.2em] text-purple-400",
                    children: b.rnd.tag
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/BentoGrid.tsx",
                    lineNumber: 291,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[31] = b.rnd.tag;
        $[32] = t25;
    } else {
        t25 = $[32];
    }
    let t26;
    if ($[33] !== activeRndIndex || $[34] !== b.rnd.description || $[35] !== b.rnd.products || $[36] !== b.rnd.title) {
        t26 = b.rnd.products ? b.rnd.products.map({
            "BentoGrid[b.rnd.products.map()]": (prod, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${activeRndIndex === idx ? "opacity-100 translate-y-0 z-10 visible" : "opacity-0 translate-y-4 z-0 invisible"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-100 transition-colors duration-300",
                            children: prod.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/BentoGrid.tsx",
                            lineNumber: 300,
                            columnNumber: 266
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl",
                            children: prod.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/BentoGrid.tsx",
                            lineNumber: 300,
                            columnNumber: 420
                        }, this)
                    ]
                }, idx, true, {
                    fileName: "[project]/src/components/sections/BentoGrid.tsx",
                    lineNumber: 300,
                    columnNumber: 57
                }, this)
        }["BentoGrid[b.rnd.products.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-full opacity-100 z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-100 transition-colors duration-300",
                    children: b.rnd.title
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/BentoGrid.tsx",
                    lineNumber: 301,
                    columnNumber: 108
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl",
                    children: b.rnd.description
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/BentoGrid.tsx",
                    lineNumber: 301,
                    columnNumber: 263
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 301,
            columnNumber: 45
        }, this);
        $[33] = activeRndIndex;
        $[34] = b.rnd.description;
        $[35] = b.rnd.products;
        $[36] = b.rnd.title;
        $[37] = t26;
    } else {
        t26 = $[37];
    }
    let t27;
    if ($[38] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[110px] sm:h-[90px] w-full pointer-events-none",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[38] = t26;
        $[39] = t27;
    } else {
        t27 = $[39];
    }
    let t28;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[40] = t28;
    } else {
        t28 = $[40];
    }
    let t29;
    if ($[41] !== handlePrevRnd) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handlePrevRnd,
            className: "h-6 w-6 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-300",
            "aria-label": "Previous product",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[41] = handlePrevRnd;
        $[42] = t29;
    } else {
        t29 = $[42];
    }
    let t30;
    if ($[43] !== activeRndIndex || $[44] !== b.rnd.products) {
        t30 = b.rnd.products && b.rnd.products.map({
            "BentoGrid[b.rnd.products.map()]": (_, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "BentoGrid[b.rnd.products.map() > <button>.onClick]": (e_1)=>{
                            e_1.stopPropagation();
                            setActiveRndIndex(idx_0);
                        }
                    }["BentoGrid[b.rnd.products.map() > <button>.onClick]"],
                    className: `h-1.5 rounded-full transition-all duration-500 ${activeRndIndex === idx_0 ? "w-6 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "w-2 bg-white/20 hover:bg-white/40"}`,
                    "aria-label": `Go to slide ${idx_0 + 1}`
                }, idx_0, false, {
                    fileName: "[project]/src/components/sections/BentoGrid.tsx",
                    lineNumber: 336,
                    columnNumber: 56
                }, this)
        }["BentoGrid[b.rnd.products.map()]"]);
        $[43] = activeRndIndex;
        $[44] = b.rnd.products;
        $[45] = t30;
    } else {
        t30 = $[45];
    }
    let t31;
    if ($[46] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 px-2",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[46] = t30;
        $[47] = t31;
    } else {
        t31 = $[47];
    }
    let t32;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        $[48] = t32;
    } else {
        t32 = $[48];
    }
    let t33;
    if ($[49] !== handleNextRnd) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleNextRnd,
            className: "h-6 w-6 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-300",
            "aria-label": "Next product",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[49] = handleNextRnd;
        $[50] = t33;
    } else {
        t33 = $[50];
    }
    let t34;
    if ($[51] !== t29 || $[52] !== t31 || $[53] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 bg-black/20 px-3 py-1.5 rounded-full border border-white/5 pointer-events-auto",
            children: [
                t29,
                t31,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[51] = t29;
        $[52] = t31;
        $[53] = t33;
        $[54] = t34;
    } else {
        t34 = $[54];
    }
    let t35;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm font-semibold text-purple-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer pointer-events-auto hover:text-purple-300",
            children: [
                "Ürünlerimizi Keşfedin",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: "h-4 w-4 transition-transform group-hover:translate-x-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/BentoGrid.tsx",
                    lineNumber: 384,
                    columnNumber: 235
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[55] = t35;
    } else {
        t35 = $[55];
    }
    let t36;
    if ($[56] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 flex items-center justify-between w-full max-w-xl",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[56] = t34;
        $[57] = t36;
    } else {
        t36 = $[57];
    }
    let t37;
    if ($[58] !== t25 || $[59] !== t27 || $[60] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#0a1628] to-[#111e36] p-8 md:p-10 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_40px_-15px_rgba(126,34,206,0.3)]",
            onMouseEnter: t20,
            onMouseLeave: t21,
            children: [
                t22,
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex flex-col h-full justify-center",
                    children: [
                        t25,
                        t27,
                        t36
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/BentoGrid.tsx",
                    lineNumber: 399,
                    columnNumber: 324
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[58] = t25;
        $[59] = t27;
        $[60] = t36;
        $[61] = t37;
    } else {
        t37 = $[61];
    }
    let t38;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-b from-transparent to-[#3463ac]/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[62] = t38;
    } else {
        t38 = $[62];
    }
    let t39;
    if ($[63] !== b.statCard.value) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 text-5xl font-extrabold bg-gradient-to-br from-[#3463ac] via-[#5b8fd4] to-[#a855f7] bg-clip-text text-transparent",
            children: b.statCard.value
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[63] = b.statCard.value;
        $[64] = t39;
    } else {
        t39 = $[64];
    }
    let t40;
    if ($[65] !== b.statCard.sub) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 text-base font-semibold text-white mt-2 mb-1",
            children: b.statCard.sub
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[65] = b.statCard.sub;
        $[66] = t40;
    } else {
        t40 = $[66];
    }
    let t41;
    if ($[67] !== b.statCard.label) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 text-xs text-slate-500 max-w-[160px] leading-relaxed",
            children: b.statCard.label
        }, void 0, false, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[67] = b.statCard.label;
        $[68] = t41;
    } else {
        t41 = $[68];
    }
    let t42;
    if ($[69] !== t39 || $[70] !== t40 || $[71] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex flex-col justify-center items-center text-center transition-all duration-500 hover:bg-white/[0.04]",
            children: [
                t38,
                t39,
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[69] = t39;
        $[70] = t40;
        $[71] = t41;
        $[72] = t42;
    } else {
        t42 = $[72];
    }
    let t43;
    if ($[73] !== t18 || $[74] !== t37 || $[75] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t18,
            style: t19,
            children: [
                t37,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        $[73] = t18;
        $[74] = t37;
        $[75] = t42;
        $[76] = t43;
    } else {
        t43 = $[76];
    }
    let t44;
    if ($[77] !== t14 || $[78] !== t17 || $[79] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t14,
                t17,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[77] = t14;
        $[78] = t17;
        $[79] = t43;
        $[80] = t44;
    } else {
        t44 = $[80];
    }
    let t45;
    if ($[81] !== t44 || $[82] !== t8 || $[83] !== t9) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: t7,
            style: t8,
            children: [
                t9,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/BentoGrid.tsx",
            lineNumber: 470,
            columnNumber: 11
        }, this);
        $[81] = t44;
        $[82] = t8;
        $[83] = t9;
        $[84] = t45;
    } else {
        t45 = $[84];
    }
    return t45;
}
_s(BentoGrid, "vBjPIPD9KdL0lwCXdm9KsqS8o6Y=");
_c = BentoGrid;
function _BentoGridSERVICESMapAnonymous2(tag_0, tagIdx_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors duration-500 group-hover:text-slate-300",
                children: tag_0
            }, void 0, false, {
                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                lineNumber: 481,
                columnNumber: 74
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 w-1 rounded-full bg-purple-500/30 transition-all duration-500 group-hover:bg-purple-400/80 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                lineNumber: 481,
                columnNumber: 228
            }, this)
        ]
    }, `b2-${tagIdx_0}`, true, {
        fileName: "[project]/src/components/sections/BentoGrid.tsx",
        lineNumber: 481,
        columnNumber: 10
    }, this);
}
function _BentoGridSERVICESMapAnonymous(tag, tagIdx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors duration-500 group-hover:text-slate-300",
                children: tag
            }, void 0, false, {
                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                lineNumber: 484,
                columnNumber: 72
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 w-1 rounded-full bg-purple-500/30 transition-all duration-500 group-hover:bg-purple-400/80 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/BentoGrid.tsx",
                lineNumber: 484,
                columnNumber: 224
            }, this)
        ]
    }, `b1-${tagIdx}`, true, {
        fileName: "[project]/src/components/sections/BentoGrid.tsx",
        lineNumber: 484,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "BentoGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/ClientLogos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLogos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const CLIENTS = [
    'TechCorp',
    'GlobalFinans',
    'EcoSystems',
    'DataBridge',
    'CloudNova',
    'SmartOps',
    'InnoVenture',
    'PrimeLogic'
];
function ClientLogos(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "8de0238525ca3187a91aef49322d333d26029bd855ef35ce3cc290cb6735eb1b") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8de0238525ca3187a91aef49322d333d26029bd855ef35ce3cc290cb6735eb1b";
    }
    const { dict } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            ...CLIENTS,
            ...CLIENTS,
            ...CLIENTS,
            ...CLIENTS
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const quadrupled = t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-r from-[#060d1a] to-transparent z-[5]"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ClientLogos.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-l from-[#0a1628] to-transparent z-[5]"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ClientLogos.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-px w-8 bg-gradient-to-r from-transparent to-[#3463ac]/40"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ClientLogos.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-px w-8 bg-gradient-to-l from-transparent to-[#3463ac]/40"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ClientLogos.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== dict.clients.title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-600",
                children: [
                    t4,
                    dict.clients.title,
                    t5
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ClientLogos.tsx",
                lineNumber: 54,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ClientLogos.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[6] = dict.clients.title;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            "--marquee-speed": "12s"
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-marquee-left flex gap-8 whitespace-nowrap",
            style: t7,
            children: quadrupled.map(_ClientLogosQuadrupledMap)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ClientLogos.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden bg-gradient-to-b from-[#060d1a] to-[#0a1628] py-14 border-y border-white/[0.02]",
            children: [
                t2,
                t3,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/ClientLogos.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    return t9;
}
_c = ClientLogos;
function _ClientLogosQuadrupledMap(client, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group inline-flex items-center justify-center h-16 px-10 transition-all duration-500 cursor-default shrink-0 opacity-40 hover:opacity-100 grayscale hover:grayscale-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xl sm:text-2xl font-bold tracking-widest text-slate-400 group-hover:text-white transition-colors duration-500",
            children: client
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ClientLogos.tsx",
            lineNumber: 87,
            columnNumber: 201
        }, this)
    }, i, false, {
        fileName: "[project]/src/components/sections/ClientLogos.tsx",
        lineNumber: 87,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ClientLogos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Briefcase
]);
/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
            key: "jecpp"
        }
    ],
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "6",
            rx: "2",
            key: "i6l2r4"
        }
    ]
];
const Briefcase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("briefcase", __iconNode);
;
 //# sourceMappingURL=briefcase.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Briefcase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FileText
]);
/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
            key: "1oefj6"
        }
    ],
    [
        "path",
        {
            d: "M14 2v5a1 1 0 0 0 1 1h5",
            key: "wfsgrz"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
];
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("file-text", __iconNode);
;
 //# sourceMappingURL=file-text.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Truck
]);
/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
            key: "wrbu53"
        }
    ],
    [
        "path",
        {
            d: "M15 18H9",
            key: "1lyqi6"
        }
    ],
    [
        "path",
        {
            d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
            key: "lysw3i"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "18",
            r: "2",
            key: "332jqn"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "18",
            r: "2",
            key: "19iecd"
        }
    ]
];
const Truck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("truck", __iconNode);
;
 //# sourceMappingURL=truck.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Truck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Link2
]);
/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9 17H7A5 5 0 0 1 7 7h2",
            key: "8i5ue5"
        }
    ],
    [
        "path",
        {
            d: "M15 7h2a5 5 0 1 1 0 10h-2",
            key: "1b9ql8"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "16",
            y1: "12",
            y2: "12",
            key: "1jonct"
        }
    ]
];
const Link2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("link-2", __iconNode);
;
 //# sourceMappingURL=link-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Settings
]);
/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("settings", __iconNode);
;
 //# sourceMappingURL=settings.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Lightbulb
]);
/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb"
        }
    ],
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ]
];
const Lightbulb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("lightbulb", __iconNode);
;
 //# sourceMappingURL=lightbulb.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lightbulb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_06e9debe._.js.map
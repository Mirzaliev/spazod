/**
 * Spotlight.js v0.7.8
 * Copyright 2019-2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */ (function() {
    var d = function d(a, b, c) {
        a.classList[c ? "add" : "remove"](b);
    };
    var g = function g(a, b, c) {
        c = "" + c;
        a["_s_" + b] !== c && (a.style.setProperty(b, c), a["_s_" + b] = c);
    };
    var ba = function ba(a, b) {
        b && (g(a, "transition", "none"), b());
        aa || (aa = a.clientTop && 0);
        b && g(a, "transition", "");
    };
    var h = function h(a, b, c, e) {
        k(!0, a, b, c, e);
    };
    var k = function k(a, b, c, e, f) {
        b[(a ? "add" : "remove") + "EventListener"](c, e, f || !1 === f ? f : !0);
    };
    var ca = function ca(a, b) {
        a.stopPropagation();
        b && a.preventDefault();
    };
    var l = function l(a, b) {
        g(a, "display", b ? "" : "none");
    };
    var da = function da(a, b) {
        g(a, "visibility", b ? "" : "hidden");
    };
    var m = function m(a, b) {
        g(a, "transition", b ? "" : "none");
    };
    var ia = function ia(a, b, c, e) {
        if ("node" !== e) {
            for(var f = Object.keys(c), A = 0, w; A < f.length; A++)if (w = f[A], 3 < w.length && 0 === w.indexOf("src")) {
                if ("video" === e) {
                    var F = fa[w];
                    if (F) {
                        if (0 < F) {
                            var Ea = c[w];
                            break;
                        }
                    } else if (ha.canPlayType("video/" + w.substring(3).replace("-", "").toLowerCase())) {
                        fa[w] = 1;
                        Ea = c[w];
                        break;
                    } else fa[w] = -1;
                } else if (F = parseInt(w.substring(4), 10)) {
                    if (F = Math.abs(b - F), !hb || F < hb) {
                        var hb = F;
                        Ea = c[w];
                    }
                }
            }
        }
        return Ea || c.src || c.href || a.src || a.href;
    };
    var Za = function Za() {
        function a(c) {
            return q[c] = (p || document).getElementsByClassName("spl-" + c)[0];
        }
        if (!K) {
            K = document.body;
            Ka = a("scene");
            La = a("header");
            Ma = a("footer");
            Na = a("title");
            Oa = a("description");
            Pa = a("button");
            Qa = a("prev");
            Ra = a("next");
            Ta = a("page");
            O = a("progress");
            Va = a("spinner");
            M = [
                a("pane")
            ];
            U("close", $a);
            K[T = "requestFullscreen"] || K[T = "msRequestFullscreen"] || K[T = "webkitRequestFullscreen"] || K[T = "mozRequestFullscreen"] || (T = "");
            T ? (Xa = T.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit"), Sa = U("fullscreen", ab)) : n.pop();
            U("autofit", V);
            U("zoom-in", bb);
            U("zoom-out", cb);
            U("theme", db);
            Ua = U("play", W);
            U("download", eb);
            h(Qa, "click", fb);
            h(Ra, "click", gb);
            var b = a("track");
            h(b, "mousedown", ib);
            h(b, "mousemove", jb);
            h(b, "mouseleave", kb);
            h(b, "mouseup", kb);
            h(b, "touchstart", ib, {
                passive: !1
            });
            h(b, "touchmove", jb, {
                passive: !0
            });
            h(b, "touchend", kb);
            h(Pa, "click", function() {
                Da ? Da(z, D) : Ca && (location.href = Ca);
            });
        }
    };
    var U = function U(a, b) {
        var c = document.createElement("div");
        c.className = "spl-" + a;
        h(c, "click", b);
        La.appendChild(c);
        return q[a] = c;
    };
    var Ya = function Ya(a) {
        var b = a.target.closest(".spotlight");
        if (b) {
            ca(a, !0);
            a = b.closest(".spotlight-group");
            C = (a || document).getElementsByClassName("spotlight");
            for(var c = 0; c < C.length; c++)if (C[c] === b) {
                E = a && a.dataset;
                lb(c + 1);
                break;
            }
        }
    };
    var lb = function lb(a) {
        if (B = C.length) {
            K || Za();
            va && va(a);
            for(var b = M[0], c = b.parentNode, e = M.length; e < B; e++){
                var f = b.cloneNode(!1);
                g(f, "left", 100 * e + "%");
                c.appendChild(f);
                M[e] = f;
            }
            L || (K.appendChild(p), mb());
            z = a || 1;
            m(Ka);
            nb(!0);
            T && l(Sa, 0 < screen.availHeight - window.innerHeight);
            history.pushState({
                spl: 1
            }, "");
            history.pushState({
                spl: 2
            }, "");
            m(p, !0);
            d(K, "hide-scrollbars", !0);
            d(p, "show", !0);
            ob(!0);
            mb();
            X();
            H && W(!0, !0);
        }
    };
    var Y = function Y(a, b) {
        a = D[a];
        return "undefined" !== typeof a ? (a = "" + a, "false" !== a && (a || b)) : b;
    };
    var tb = function tb(a, b) {
        a && d(Va, "spin", b);
    };
    var wb = function wb() {
        return document.fullscreen || document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
    };
    var xb = function xb() {
        mb();
        N && ub();
        if (T) {
            var a = wb();
            d(Sa, "on", a);
            a || l(Sa, 0 < screen.availHeight - window.innerHeight);
        }
    };
    var mb = function mb() {
        u = p.clientWidth;
        na = p.clientHeight;
    };
    var ub = function ub() {
        oa = N.clientWidth;
        pa = N.clientHeight;
    };
    var qb = function qb(a) {
        g(N, "transform", "translate(-50%, -50%) scale(" + (a || v) + ")");
    };
    var Z = function Z(a, b) {
        g(L, "transform", a || b ? "translate(" + a + "px, " + b + "px)" : "");
    };
    var ob = function ob(a) {
        k(a, window, "keydown", zb);
        k(a, window, "wheel", Ab);
        k(a, window, "resize", xb);
        k(a, window, "popstate", Bb);
    };
    var Bb = function Bb(a) {
        L && a.state.spl && $a(!0);
    };
    var zb = function zb(a) {
        if (L) {
            var b = !1 !== D["zoom-in"];
            switch(a.keyCode){
                case 8:
                    b && V();
                    break;
                case 27:
                    $a();
                    break;
                case 32:
                    H && W();
                    break;
                case 37:
                    fb();
                    break;
                case 39:
                    gb();
                    break;
                case 38:
                case 107:
                case 187:
                    b && bb();
                    break;
                case 40:
                case 109:
                case 189:
                    b && cb();
            }
        }
    };
    var Ab = function Ab(a) {
        L && !1 !== D["zoom-in"] && (a = a.deltaY, 0 > 0.5 * (0 > a ? 1 : a ? -1 : 0) ? cb() : bb());
    };
    var W = function W(a, b) {
        ("boolean" === typeof a ? a : !R) === !R && (R = R ? clearTimeout(R) : 1, d(Ua, "on", R), b || sb(R));
    };
    var sb = function sb(a) {
        ua && (ba(O, function() {
            g(O, "transition-duration", "");
            g(O, "transform", "");
        }), a && (g(O, "transition-duration", Fa + "s"), g(O, "transform", "translateX(0)")));
        a && (R = setTimeout(gb, 1000 * Fa));
    };
    var X = function X() {
        za && (Wa = Date.now() + 2950, S || (d(p, "menu", !0), Cb(3000)));
    };
    var Db = function Db(a) {
        "boolean" === typeof a && (S = a ? S : 0);
        S ? (S = clearTimeout(S), d(p, "menu")) : X();
    };
    var ib = function ib(a) {
        ca(a, !0);
        qa = !0;
        ra = !1;
        var b = a.touches;
        b && (b = b[0]) && (a = b);
        sa = oa * v <= u;
        la = a.pageX;
        ma = a.pageY;
        m(L);
    };
    var kb = function kb(a) {
        ca(a);
        if (qa) {
            if (ra) {
                if (sa && ra) {
                    var b = (a = r < -(u / 7) && (z < B || G)) || r > u / 7 && (1 < z || G);
                    if (a || b) yb(z - 1, !0, r / u * 100), a && gb() || b && fb();
                    r = 0;
                    Z();
                }
                m(L, !0);
            } else Db();
            qa = !1;
        }
    };
    var jb = function jb(a) {
        ca(a);
        if (qa) {
            var b = a.touches;
            b && (b = b[0]) && (a = b);
            b = (oa * v - u) / 2;
            r -= la - (la = a.pageX);
            sa || (r > b ? r = b : r < -b && (r = -b), pa * v > na && (b = (pa * v - na) / 2, t -= ma - (ma = a.pageY), t > b ? t = b : t < -b && (t = -b)));
            ra = !0;
            Z(r, t);
        } else X();
    };
    var ab = function ab(a) {
        var b = wb();
        if ("boolean" !== typeof a || a !== !!b) {
            if (b) document[Xa]();
            else p[T]();
        }
    };
    var db = function db(a) {
        "string" !== typeof a && (a = y ? "" : Aa || "white");
        y !== a && (y && d(p, y), a && d(p, a, !0), y = a);
    };
    var V = function V(a) {
        "boolean" === typeof a && (x = !a);
        x = 1 === v && !x;
        d(N, "autofit", x);
        g(N, "transform", "");
        v = 1;
        t = r = 0;
        ub();
        m(L);
        Z();
    };
    var bb = function bb() {
        var a = v / 0.65;
        50 >= a && (x && V(), r /= 0.65, t /= 0.65, Z(r, t), Eb(a));
    };
    var cb = function cb() {
        var a = 0.65 * v;
        x && V();
        1 <= a && (1 === a ? r = t = 0 : (r *= 0.65, t *= 0.65), Z(r, t), Eb(a));
    };
    var Eb = function Eb(a) {
        v = a || 1;
        qb();
    };
    var eb = function eb() {
        var a = K, b = document.createElement("a"), c = N.src;
        b.href = c;
        b.download = c.substring(c.lastIndexOf("/") + 1);
        a.appendChild(b);
        b.click();
        a.removeChild(b);
    };
    var $a = function $a(a) {
        setTimeout(function() {
            K.removeChild(p);
            L = N = P = D = E = C = va = wa = xa = Da = null;
        }, 200);
        d(K, "hide-scrollbars");
        d(p, "show");
        ab(!1);
        ob();
        history.go(!0 === a ? -1 : -2);
        Q && (Ja.src = "");
        R && W();
        N && vb(N);
        S && (S = clearTimeout(S));
        y && db();
        I && d(p, I);
        xa && xa();
    };
    var vb = function vb(a) {
        if (a.g) a.g.appendChild(a), a.g = null;
        else {
            var b = a.parentNode;
            b && b.removeChild(a);
            a.src = a.onerror = "";
        }
    };
    var fb = function fb(a) {
        a && X();
        if (1 < B) {
            if (1 < z) return Fb(z - 1);
            if (G) return yb(B, !0), Fb(B);
        }
    };
    var gb = function gb(a) {
        a && X();
        if (1 < B) {
            if (z < B) return Fb(z + 1);
            if (G) return yb(-1, !0), Fb(1);
            R && W();
        }
    };
    var Fb = function Fb(a) {
        if (a !== z) {
            R ? (clearTimeout(R), sb()) : X();
            var b = a > z;
            z = a;
            nb(b);
            return !0;
        }
    };
    var Gb = function Gb(a) {
        var b = C[z - 1], c = b;
        D = {
        };
        E && Object.assign(D, E);
        Object.assign(D, c.dataset || c);
        ta = D.media;
        Da = D.onclick;
        Aa = D.theme;
        I = D["class"];
        za = Y("autohide", !0);
        G = Y("infinite");
        ua = Y("progress", !0);
        H = Y("autoslide");
        Ba = Y("preload", !0);
        Ca = D.buttonHref;
        Fa = H && parseFloat(H) || 7;
        y || Aa && db(Aa);
        I && d(p, I, !0);
        I && ba(p);
        if (c = D.control) {
            c = "string" === typeof c ? c.split(",") : c;
            for(var e = 0; e < n.length; e++)D[n[e]] = !1;
            for(e = 0; e < c.length; e++){
                var f = c[e].trim();
                "zoom" === f ? D["zoom-in"] = D["zoom-out"] = !0 : D[f] = !0;
            }
        }
        c = D.animation;
        Ga = Ha = Ia = !c;
        J = !1;
        if (c) for(c = "string" === typeof c ? c.split(",") : c, e = 0; e < c.length; e++)f = c[e].trim(), "scale" === f ? Ga = !0 : "fade" === f ? Ha = !0 : "slide" === f ? Ia = !0 : f && (J = f);
        ya = D.fit;
        e = ja && ja.downlink;
        c = Math.max(na, u) * ka;
        e && 1200 * e < c && (c = 1200 * e);
        var A;
        P = {
            media: ta,
            src: ia(b, c, D, ta),
            title: Y("title", b.alt || b.title || (A = b.firstElementChild) && (A.alt || A.title))
        };
        Q && (Ja.src = Q = "");
        Ba && a && (b = C[z]) && (a = b.dataset || b, (A = a.media) && "image" !== A || (Q = ia(b, c, a, A)));
        for(b = 0; b < n.length; b++)a = n[b], l(q[a], Y(a, ea[a]));
    };
    var nb = function nb(a) {
        t = r = 0;
        v = 1;
        if (N) {
            if (N.onerror) vb(N);
            else {
                var b = N;
                setTimeout(function() {
                    b && N !== b && (vb(b), b = null);
                }, 650);
                pb();
                Z();
            }
        }
        Gb(a);
        yb(z - 1);
        d(Va, "error");
        rb(z);
        m(L);
        Z();
        a = P.title;
        var c = Y("description"), e = Y("button"), f = a || c || e;
        f && (a && (Na.firstChild.nodeValue = a), c && (Oa.firstChild.nodeValue = c), e && (Pa.firstChild.nodeValue = e), l(Na, a), l(Oa, c), l(Pa, e), g(Ma, "transform", "all" === za ? "" : "none"));
        za || d(p, "menu", !0);
        da(Ma, f);
        da(Qa, G || 1 < z);
        da(Ra, G || z < B);
        Ta.firstChild.nodeValue = 1 < B ? z + " / " + B : "";
        wa && wa(z, D);
    };
    Object.assign || (Object.assign = function(a, b) {
        for(var c = Object.keys(b), e = 0, f; e < c.length; e++)f = c[e], a[f] = b[f];
        return a;
    });
    Element.prototype.closest || (Element.prototype.closest = function(a) {
        a = a.substring(1);
        for(var b = this; b && 1 === b.nodeType;){
            if (b.classList.contains(a)) return b;
            b = b.parentElement;
        }
        return null;
    });
    var aa = 0;
    var n = "theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "), ea = {
        page: 1,
        close: 1,
        autofit: 1,
        "zoom-in": 1,
        "zoom-out": 1,
        prev: 1,
        next: 1,
        fullscreen: 1
    };
    var p = document.createElement("div");
    p.id = "spotlight";
    p.innerHTML = "<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>";
    var fa = {
    }, ha = document.createElement("video");
    var q = {
    }, ja = navigator.connection, ka = window.devicePixelRatio || 1, r, t, la, ma, u, na, oa, pa, v, qa, ra, sa, x, y, z, B, C, D, ta, E, G, ua, va, wa, xa, ya, za, H, Aa, Ba, Ca, Da, I, Fa, Ga, Ha, Ia, J, K, L, M, N, Ja = document.createElement("img"), Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, O, Va, P, Q, R, S, Wa, T, Xa;
    h(document, "click", Ya);
    function pb(a) {
        a ? ba(N, pb) : (m(Ka, Ia), g(N, "opacity", Ha ? 0 : 1), qb(Ga && 0.8), J && d(N, J, !0));
    }
    function rb(a) {
        L = M[a - 1];
        N = L.firstChild;
        z = a;
        if (N) x && V(), ya && d(N, ya, !0), pb(!0), J && d(N, J), Ha && g(N, "opacity", 1), Ga && g(N, "transform", ""), g(N, "visibility", "visible"), Q && (Ja.src = Q), H && sb(R);
        else {
            var b = P.media, c = Y("spinner", !0);
            if ("video" === b) tb(c, !0), N = document.createElement("video"), N.onloadedmetadata = function() {
                N === this && (N.onerror = null, N.width = N.videoWidth, N.height = N.videoHeight, ub(), tb(c), rb(a));
            }, N.poster = D.poster, N.preload = Ba ? "auto" : "metadata", N.controls = Y("controls", !0), N.autoplay = D.autoplay, N.h = Y("inline"), N.muted = Y("muted"), N.src = P.src, L.appendChild(N);
            else {
                if ("node" === b) {
                    N = P.src;
                    "string" === typeof N && (N = document.querySelector(N));
                    N && (N.g || (N.g = N.parentNode), ub(), L.appendChild(N), rb(a));
                    return;
                }
                tb(c, !0);
                N = document.createElement("img");
                N.onload = function() {
                    N === this && (N.onerror = null, tb(c), rb(a), ub());
                };
                N.src = P.src;
                L.appendChild(N);
            }
            N && (c || g(N, "visibility", "visible"), N.onerror = function() {
                N === this && (vb(N), d(Va, "error", !0), tb(c));
            });
        }
    }
    function yb(a, b, c) {
        b ? ba(Ka, function() {
            yb(a, !1, c);
        }) : g(Ka, "transform", "translateX(" + (100 * -a + (c || 0)) + "%)");
    }
    function Cb(a) {
        S = setTimeout(function() {
            var b = Date.now();
            b >= Wa ? (d(p, "menu"), S = 0) : Cb(Wa - b);
        }, a);
    }
    window.Spotlight = {
        init: Za,
        theme: db,
        fullscreen: ab,
        download: eb,
        autofit: V,
        next: gb,
        prev: fb,
        goto: Fb,
        close: $a,
        zoom: Eb,
        menu: Db,
        show: function show(a, b, c) {
            C = a;
            b && (E = b, va = b.onshow, wa = b.onchange, xa = b.onclose, c = c || b.index);
            lb(c);
        },
        play: W,
        addControl: U,
        removeControl: function removeControl(a) {
            var b = q[a];
            b && (La.removeChild(b), q[a] = null);
        }
    };
}).call(this);

//# sourceMappingURL=gallery.cd1f039b.js.map

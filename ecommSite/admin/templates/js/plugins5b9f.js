/*!
    * jQuery Cookie Plugin v1.4.1
    * https://github.com/carhartl/jquery-cookie
    *
    * Copyright 2013 Klaus Hartl
    * Released under the MIT license
    */
!function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery) }(function (e) { function n(e) { return u.raw ? e : encodeURIComponent(e) } function o(e) { return u.raw ? e : decodeURIComponent(e) } function i(e) { return n(u.json ? JSON.stringify(e) : String(e)) } function r(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e } catch (n) { } } function t(n, o) { var i = u.raw ? n : r(n); return e.isFunction(o) ? o(i) : i } var c = /\+/g, u = e.cookie = function (r, c, f) { if (void 0 !== c && !e.isFunction(c)) { if (f = e.extend({}, u.defaults, f), "number" == typeof f.expires) { var a = f.expires, d = f.expires = new Date; d.setTime(+d + 864e5 * a) } return document.cookie = [n(r), "=", i(c), f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("") } for (var p = r ? void 0 : {}, s = document.cookie ? document.cookie.split("; ") : [], m = 0, x = s.length; x > m; m++) { var v = s[m].split("="), k = o(v.shift()), l = v.join("="); if (r && r === k) { p = t(l, c); break } r || void 0 === (l = t(l)) || (p[k] = l) } return p }; u.defaults = {}, e.removeCookie = function (n, o) { return void 0 === e.cookie(n) ? !1 : (e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n)) } });

/*
	// SweetAlert2
    // 2014 (c) - Tristan Edwards
	http://t4t5.github.io/sweetalert/
	forked by: https://github.com/limonte/sweetalert2

*/
!function (e, t) { "use strict"; function n() { function n(e, t) { for (var n = 0; n < S.length; n++) if (e += t, e === S.length ? e = 0 : -1 === e && (e = S.length - 1), S[e].offsetWidth || S[e].offsetHeight || S[e].getClientRects().length) return void S[e].focus() } function i(t) { var a = t || e.event, o = a.keyCode || a.which, s = b(f, "visible"); if (-1 !== [9, 13, 32, 27].indexOf(o)) { for (var l = a.target || a.srcElement, r = -1, i = 0; i < S.length; i++) if (l === S[i]) { r = i; break } if (9 === o) { if (!s) return; a.shiftKey ? n(r, -1) : n(r, 1), M(a) } else 13 === o || 32 === o ? -1 === r && L(k, a) : 27 === o && u.allowEscapeKey === !0 && L(B, a) } } if (void 0 === arguments[0]) return e.console.error("sweetAlert expects at least 1 attribute!"), !1; var u = s({}, p); switch (typeof arguments[0]) { case "string": u.title = arguments[0], u.text = arguments[1] || "", u.type = arguments[2] || ""; break; case "object": u.title = arguments[0].title || p.title, u.text = arguments[0].text || p.text, u.html = arguments[0].html || p.html, u.type = arguments[0].type || p.type, u.animation = void 0 !== arguments[0].animation ? arguments[0].animation : p.animation, u.customClass = arguments[0].customClass || u.customClass, u.allowOutsideClick = void 0 !== arguments[0].allowOutsideClick ? arguments[0].allowOutsideClick : p.allowOutsideClick, u.allowEscapeKey = void 0 !== arguments[0].allowEscapeKey ? arguments[0].allowEscapeKey : p.allowEscapeKey, u.showConfirmButton = void 0 !== arguments[0].showConfirmButton ? arguments[0].showConfirmButton : p.showConfirmButton, u.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : p.showCancelButton, u.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : p.closeOnConfirm, u.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : p.closeOnCancel, u.timer = parseInt(arguments[0].timer) || p.timer, u.width = parseInt(arguments[0].width) || p.width, u.padding = parseInt(arguments[0].padding) || p.padding, u.background = void 0 !== arguments[0].background ? arguments[0].background : p.background, u.confirmButtonText = arguments[0].confirmButtonText || p.confirmButtonText, u.confirmButtonColor = arguments[0].confirmButtonColor || p.confirmButtonColor, u.confirmButtonClass = arguments[0].confirmButtonClass || u.confirmButtonClass, u.cancelButtonText = arguments[0].cancelButtonText || p.cancelButtonText, u.cancelButtonColor = arguments[0].cancelButtonColor || p.cancelButtonColor, u.cancelButtonClass = arguments[0].cancelButtonClass || u.cancelButtonClass, u.buttonsStyling = void 0 !== arguments[0].buttonsStyling ? arguments[0].buttonsStyling : p.buttonsStyling, u.reverseButtons = void 0 !== arguments[0].reverseButtons ? arguments[0].reverseButtons : p.reverseButtons, u.imageUrl = arguments[0].imageUrl || p.imageUrl, u.imageWidth = arguments[0].imageWidth || p.imageWidth, u.imageHeight = arguments[0].imageHeight || p.imageHeight, u.imageClass = arguments[0].imageClass || p.imageClass, u.callback = arguments[1] || null, e.sweetAlert.callback = e.swal.callback = function (e) { "function" == typeof u.callback && u.callback(e) }; break; default: return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1 } a(u), c(), l(); var f = w(); u.timer && (f.timeout = setTimeout(function () { r(), "function" == typeof u.callback && u.callback() }, u.timer)); var y, C = function (t) { var n = t || e.event, a = n.target || n.srcElement, s = b(a, e.swalClasses.confirm), l = b(a, e.swalClasses.cancel), i = b(f, "visible"); switch (n.type) { case "mouseover": case "mouseup": case "focus": u.buttonsStyling && (s ? a.style.backgroundColor = o(u.confirmButtonColor, -.1) : l && (a.style.backgroundColor = o(u.cancelButtonColor, -.1))); break; case "mouseout": case "blur": u.buttonsStyling && (s ? a.style.backgroundColor = u.confirmButtonColor : l && (a.style.backgroundColor = u.cancelButtonColor)); break; case "mousedown": u.buttonsStyling && (s ? a.style.backgroundColor = o(u.confirmButtonColor, -.2) : l && (a.style.backgroundColor = o(u.cancelButtonColor, -.2))); break; case "click": s && u.callback && i ? (u.callback(!0), u.closeOnConfirm && r()) : u.callback && i ? (u.callback.length > 0 && u.callback(!1), u.closeOnCancel && r()) : r() } }, h = f.querySelectorAll("button"); for (y = 0; y < h.length; y++) h[y].onclick = C, h[y].onmouseover = C, h[y].onmouseout = C, h[y].onmousedown = C; m = t.onclick, t.onclick = function (t) { var n = t || e.event, a = n.target || n.srcElement; a === v() && u.allowOutsideClick && (r(), "function" == typeof u.callback && u.callback()) }; var k = f.querySelector("button." + e.swalClasses.confirm), B = f.querySelector("button." + e.swalClasses.cancel), S = f.querySelectorAll("button, input:not([type=hidden]), textarea, select"); for (y = 0; y < S.length; y++) S[y].onfocus = C, S[y].onblur = C; u.reverseButtons && k.parentNode.insertBefore(B, k), n(-1, 1), d = e.onkeydown, e.onkeydown = i, u.buttonsStyling && (k.style.borderLeftColor = u.confirmButtonColor, k.style.borderRightColor = u.confirmButtonColor), e.swal.toggleLoading = function () { k.disabled = !k.disabled, B.disabled = !B.disabled }, e.swal.enableButtons = function () { k.disabled = !1, B.disabled = !1 }, e.swal.disableButtons = function () { k.disabled = !0, B.disabled = !0 }, swal.enableButtons(), e.onfocus = function () { e.setTimeout(function () { void 0 !== g && (g.focus(), g = void 0) }, 0) } } function a(n) { var a = w(); a.style.width = n.width + "px", a.style.padding = n.padding + "px", a.style.marginLeft = -n.width / 2 + "px", a.style.background = n.background; var o = t.getElementsByTagName("head")[0], s = t.createElement("style"); s.type = "text/css", s.id = f, s.innerHTML = "@media screen and (max-width: " + n.width + "px) {." + e.swalClasses.modal + " {max-width: 100%;left: 0 !important;margin-left: 0 !important;}}", o.appendChild(s); var l = a.querySelector("h2"), r = a.querySelector("div.sweet-content"), i = a.querySelector("button." + e.swalClasses.confirm), c = a.querySelector("button." + e.swalClasses.cancel), u = a.querySelector("hr.sweet-spacer"); if (l.innerHTML = k(n.title).split("\n").join("<br>"), e.jQuery ? r = jQuery(r).html(n.html || "<p>" + k(n.text.split("\n").join("<br>")) + "</p>") : (r.innerHTML = n.html || "<p>" + k(n.text.split("\n").join("<br>")) + "</p>", r.innerHTML && S(r)), a.className = e.swalClasses.modal, n.customClass && C(a, n.customClass), E(a.querySelectorAll(".icon")), n.type) { for (var m = !1, d = 0; d < y.length; d++) if (n.type === y[d]) { m = !0; break } if (!m) return e.console.error("Unknown alert type: " + n.type), !1; var g = a.querySelector(".icon." + n.type); switch (S(g), n.type) { case "success": C(g, "animate"), C(g.querySelector(".tip"), "animate-success-tip"), C(g.querySelector(".long"), "animate-success-long"); break; case "error": C(g, "animate-error-icon"), C(g.querySelector(".x-mark"), "animate-x-mark"); break; case "warning": C(g, "pulse-warning"), C(g.querySelector(".body"), "pulse-warning-ins"), C(g.querySelector(".dot"), "pulse-warning-ins") } } var p = a.querySelector(".sweet-image"); n.imageUrl ? (p.setAttribute("src", n.imageUrl), S(p), n.imageWidth && p.setAttribute("width", n.imageWidth), n.imageHeight && p.setAttribute("height", n.imageHeight), n.imageClass && C(p, n.imageClass)) : E(p), n.showCancelButton ? c.style.display = "inline-block" : E(c), n.showConfirmButton ? q(i, "display") : E(i), n.showConfirmButton || n.showCancelButton ? S(u) : E(u), i.innerHTML = k(n.confirmButtonText), c.innerHTML = k(n.cancelButtonText), n.buttonsStyling && (i.style.backgroundColor = n.confirmButtonColor, c.style.backgroundColor = n.cancelButtonColor), i.className = e.swalClasses.confirm, C(i, n.confirmButtonClass), c.className = e.swalClasses.cancel, C(c, n.cancelButtonClass), n.buttonsStyling ? (C(i, "styled"), C(c, "styled")) : (h(i, "styled"), h(c, "styled"), i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = "", c.style.backgroundColor = c.style.borderLeftColor = c.style.borderRightColor = ""), n.animation === !0 ? h(a, "no-animation") : C(a, "no-animation") } function o(e, t) { e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0; for (var n = "#", a = 0; 3 > a; a++) { var o = parseInt(e.substr(2 * a, 2), 16); o = Math.round(Math.min(Math.max(0, o + o * t), 255)).toString(16), n += ("00" + o).substr(o.length) } return n } function s(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]); return e } function l() { var e = w(); O(v(), 10), S(e), C(e, "show-sweet-alert"), h(e, "hide-sweet-alert"), u = t.activeElement, setTimeout(function () { C(e, "visible") }, 500) } function r() { var e = w(); x(v()), x(e), h(e, "showSweetAlert"), C(e, "hideSweetAlert"), h(e, "visible"); var t = e.querySelector(".icon.success"); h(t, "animate"), h(t.querySelector(".tip"), "animate-success-tip"), h(t.querySelector(".long"), "animate-success-long"); var n = e.querySelector(".icon.error"); h(n, "animate-error-icon"), h(n.querySelector(".x-mark"), "animate-x-mark"); var a = e.querySelector(".icon.warning"); h(a, "pulse-warning"), h(a.querySelector(".body"), "pulse-warning-ins"), h(a.querySelector(".dot"), "pulse-warning-ins"), i() } function i() { var n = w(); e.onkeydown = d, t.onclick = m, u && u.focus(), g = void 0, clearTimeout(n.timeout); var a = t.getElementsByTagName("head")[0], o = t.getElementById(f); o && a.removeChild(o) } function c() { var e = w(); e.style.marginTop = T(w()) } e.swalClasses = { modal: "sweet-alert", overlay: "sweet-overlay", confirm: "sweet-confirm", cancel: "sweet-cancel" }; var u, m, d, g, f = "sweet-alert-mediaquery", y = ["error", "warning", "info", "success"], p = { title: "", text: "", html: "", type: null, animation: !0, allowOutsideClick: !0, allowEscapeKey: !0, showConfirmButton: !0, showCancelButton: !1, closeOnConfirm: !0, closeOnCancel: !0, confirmButtonText: "OK", confirmButtonColor: "#3085d6", confirmButtonClass: null, cancelButtonText: "Cancel", cancelButtonColor: "#aaa", cancelButtonClass: null, buttonsStyling: !0, reverseButtons: !1, imageUrl: null, imageWidth: null, imageHeight: null, imageClass: null, timer: null, width: 500, padding: 20, background: "#fff" }, w = function () { return t.querySelector("." + e.swalClasses.modal) }, v = function () { return t.querySelector("." + e.swalClasses.overlay) }, b = function (e, t) { return new RegExp(" " + t + " ").test(" " + e.className + " ") }, C = function (e, t) { t && !b(e, t) && (e.className += " " + t) }, h = function (e, t) { var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " "; if (b(e, t)) { for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " "); e.className = n.replace(/^\s+|\s+$/g, "") } }, k = function (e) { var n = t.createElement("div"); return n.appendChild(t.createTextNode(e)), n.innerHTML }, B = function (e) { e.style.opacity = "", e.style.display = "block" }, S = function (e) { if (e && !e.length) return B(e); for (var t = 0; t < e.length; ++t) B(e[t]) }, x = function (e) { e.style.opacity = "", e.style.display = "none" }, E = function (e) { if (e && !e.length) return x(e); for (var t = 0; t < e.length; ++t) x(e[t]) }, q = function (e, t) { e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t) }, T = function (e) { e.style.left = "-9999px", e.style.display = "block"; var t = e.clientHeight, n = parseInt(getComputedStyle(e).getPropertyValue("padding"), 10); return e.style.left = "", e.style.display = "none", "-" + parseInt(t / 2 + n) + "px" }, O = function (e, t) { if (+e.style.opacity < 1) { t = t || 16, e.style.opacity = 0, e.style.display = "block"; var n = +new Date, a = function () { e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(a, t) }; a() } e.style.display = "block" }, L = function (n) { if ("function" == typeof MouseEvent) { var a = new MouseEvent("click", { view: e, bubbles: !1, cancelable: !0 }); n.dispatchEvent(a) } else if (t.createEvent) { var o = t.createEvent("MouseEvents"); o.initEvent("click", !1, !1), n.dispatchEvent(o) } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick() }, M = function (t) { "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0) }; e.sweetAlert = e.swal = function () { var e = arguments, t = w(); if (null !== t) b(t, "visible") && i(), n.apply(this, e); else var a = setInterval(function () { null !== w() && (clearInterval(a), n.apply(this, e)) }, 100) }, e.sweetAlert.closeModal = e.swal.closeModal = function () { r() }, e.sweetAlert.clickConfirm = e.swal.clickConfirm = function () { var t = w(), n = t.querySelector("button." + e.swalClasses.confirm); n.click() }, e.sweetAlert.clickCancel = e.swal.clickCancel = function () { var t = w(), n = t.querySelector("button." + e.swalClasses.cancel); n.click() }, e.swal.init = function () { var n = '<div class="' + e.swalClasses.overlay + '" tabIndex="-1"></div><div class="' + e.swalClasses.modal + '" style="display: none" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <img class="sweet-image"> <h2>Title</h2><div class="sweet-content">Text</div><hr class="sweet-spacer"><button class="' + e.swalClasses.confirm + '">OK</button><button class="' + e.swalClasses.cancel + '">Cancel</button></div>', a = t.createElement("div"); a.className = "sweet-container", a.innerHTML = n, t.body.appendChild(a) }, e.swal.setDefaults = function (e) { if (!e) throw new Error("userParams is required"); if ("object" != typeof e) throw new Error("userParams has to be a object"); s(p, e) }, function () { "complete" === t.readyState || "interactive" === t.readyState && t.body ? swal.init() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function e() { t.removeEventListener("DOMContentLoaded", e, !1), swal.init() }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function n() { "complete" === t.readyState && (t.detachEvent("onreadystatechange", n), swal.init()) }) }() }(window, document);

/*
	// Unibox

*/
!function (e) { e.fn.unibox = function (i) { var t = this, n = function () { function i(e) { if (void 0 !== e) { var i = u.val(); (9 == e.keyCode || 13 == e.keyCode || i.length < C) && (d.slideUp(y), p = -1) } else d.slideUp(y), p = -1 } function t(e, i) { var t = null; return function () { var n = this, a = arguments; clearTimeout(t), t = window.setTimeout(function () { e.apply(n, a) }, i || 50) } } function n(i, t) { if (!x) return i; var n = t.split(" "), a = {}; return e.each(n, function (e, t) { t.length < 2 || (i = i.replace(new RegExp(t, "gi"), "##" + e + "##"), a["##" + e + "##"] = "<span>" + t + "</span>") }), e.each(a, function (e, t) { i = i.replace(new RegExp(e, "gi"), t) }), i } function a(t) { if (13 == U) return void i(); var a = u.val(); d.html(""); var s = !1; e.each(t.suggests, function (i, t) { var o = e('<div class="unibox-suggest-' + i + '"></div>'); if (i.replace(/_/, "").length > 0 && t.length > 0) { var l = e("<h4>" + i + "</h4>"); o.append(l) } e.each(t, function (i, t) { var l = '<div class="unibox-selectable">'; if (void 0 != t.image && (l += '<div class="unibox-selectable-img-container"><img src="' + t.image + '"/></div>'), void 0 != t.link ? (l += '<a href="' + t.link + '">', l += n(t.name, a), l += "</a>") : l += "<span>" + n(t.name, a) + "</span>", void 0 != f) { var r = f.match(/##(.*?)##/gi), c = f, u = !1; for (var d in r) { var v = r[d].replace(/#/g, ""), g = t[v]; if (void 0 != g) { var p = new RegExp(r[d], "g"); c = c.replace(p, g) } else u = !0 } u || (l += '<div class="unibox-extra">' + c + "</div>") } l += '<div class="unibox-ca"></div></div>'; var h = e(l); o.append(h), s = !0 }), d.append(o) }), b = e(".unibox-selectable"), p = -1, b.click(function () { var t = e(this).find("span").first().text(); u.val(t); var n = void 0; try { n = e(this).find("a").attr("href") } catch (a) { } g.call(this, t, n), i() }), e(".unibox-selectable .unibox-extra").click(function () { event.stopPropagation() }), t.words.length > 0 && k.length > 0 && ("all" == I || "bottom" == I) && (d.append("<h4>" + k + "</h4>"), s = !0); var l = []; e.each(t.words, function (i, t) { ("all" == I || "bottom" == I) && (void 0 != t.overlayImage ? d.append('<img class="unibox-vis" src="' + m + t.overlayImage + '" style="background-image: url(\'' + m + t.image + "');background-size: 75%;background-repeat: no-repeat;background-position: center;\">") : void 0 != t.image && d.append('<img class="unibox-vis" src="' + m + t.image + '">')); var n = e("#unibox-invisible"); if (n.html(a.replace(new RegExp(t.name, "gi"), "<span>" + t.name + "</span>")), "all" != I && "top" != I || -1 != jQuery.inArray(t.image, w)) jQuery.inArray(t.image, w) > -1 && l.push(t.image); else { var s = e("#unibox-invisible span")[0]; if (void 0 != s && t.name.length > 0 && void 0 != t.image) { var r = e(s).position().left; visImage = e('<div class="unibox-ivf"><img src="' + m + t.image + '" alt="' + t.name + '"></div>'), visImage.css("left", o().left + r - 10), visImage.css("top", o().top - u.outerHeight() - 80), e("#unibox").append(visImage), setTimeout(function () { e(".unibox-ivf").find("img").addClass("l") }, 10), l.push(t.image) } } }), w = l, e("img").error(function () { e(this).hide() }), d.css("left", o().left), d.css("top", o().top), s ? d.slideDown(y, function () { d.css("left", o().left), d.css("top", o().top) }) : i() } function o() { return { left: u.offset().left - e("#unibox").offset().left, top: u.offset().top - e("#unibox").offset().top + u.outerHeight() } } function s() { for (var i = e(".unibox-ivf img").map(function () { return e(this).attr("src") }).get(), t = 0; t < i.length; t++) -1 == jQuery.inArray(i[t].replace(m, ""), w) && e('.unibox-ivf:has(img[src*="' + i[t] + '"])').remove() } function l() { w = [], e(".unibox-ivf").remove() } function r(i) { if (u.val().length <= 1 && l(), 38 != i.keyCode && 40 != i.keyCode && 13 != i.keyCode) return void s(); if (38 == i.keyCode && p > 0 ? p-- : 40 == i.keyCode && p++, b.length > 0 && p > -1) { p %= b.length, b.removeClass("active"); var t = e(b[p]); t.addClass("active") } if (13 == i.keyCode) { if (void 0 != g) { var n = u.val(), a = void 0; if (-1 != p) { n = e(e(".unibox-selectable.active span")[0]).text(), u.val(n); try { a = e(e(".unibox-selectable.active")[0]).find("a").attr("href") } catch (o) { } } g.call(this, n, a) } else -1 != p && (window.location.href = e(e(".unibox-selectable.active")[0]).find("a").attr("href")); return !1 } } function c(i) { if (U = i.keyCode, 38 != i.keyCode && 40 != i.keyCode && 13 != i.keyCode) { var t = u.val(); 46 == U && 0 == t.length && l(), t.length >= C && e.ajax(h + encodeURIComponent(t), { dataType: "json", success: function (e) { a(e) } }) } } var u, d, v, f, g, p = -1, h = "", m = "", b = [], x = !0, y = 300, k = "", C = 2, w = [], I = "all", U = -1; return { updateSuggestUrl: function (e) { h = e }, setIvfImagePath: function (e) { m = e, "/" != m.charAt(m.length - 1) && (m += "/") }, changeInstantVisualFeedbackState: function (e) { I = e }, init: function (n, a) { u = n, x = a.highlight, f = a.extraHtml, h = a.suggestUrl, m = a.ivfImagePath, v = a.throttleTime, y = a.animationSpeed, C = a.minChars, g = a.enterCallback, I = a.instantVisualFeedback, k = a.queryVisualizationHeadline, u.attr("autocomplete", "off"), d = e('<div id="unibox-suggest-box"></div>'), e("#unibox").append(d), d.css("min-width", u.outerWidth()), d.css("max-width", a.maxWidth), u.keydown(r), u.keydown(t(c, v)), u.keydown(i), u.keyup(i), e("html").click(function () { d.slideUp(y) }), d.click(function (e) { e.stopPropagation() }); var o = e('<div id="unibox-invisible">text <span>more</span></div>'); u.parent().append(o) } } }(), a = e.extend({ suggestUrl: "", ivfImagePath: "", queryVisualizationHeadline: "", highlight: !0, throttleTime: 50, animationSpeed: 300, instantVisualFeedback: "all", enterCallback: void 0, extraHtml: void 0, minChars: 3, maxWidth: t.outerWidth() }, i); return n.init(t, a), this } }(jQuery);

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        module.exports = mod();
    else if (typeof define == "function" && define.amd) // AMD
        return define([], mod);
    else // Plain browser env
        this.CodeMirror = mod();
})(function () {
    "use strict";

    // BROWSER SNIFFING

    // Kludges for bugs and behavior differences that can't be feature
    // detected are enabled based on userAgent etc sniffing.

    var gecko = /gecko\/\d/i.test(navigator.userAgent);
    // ie_uptoN means Internet Explorer version N or lower
    var ie_upto10 = /MSIE \d/.test(navigator.userAgent);
    var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
    var ie = ie_upto10 || ie_11up;
    var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]);
    var webkit = /WebKit\//.test(navigator.userAgent);
    var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(navigator.userAgent);
    var chrome = /Chrome\//.test(navigator.userAgent);
    var presto = /Opera\//.test(navigator.userAgent);
    var safari = /Apple Computer/.test(navigator.vendor);
    var khtml = /KHTML\//.test(navigator.userAgent);
    var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
    var phantom = /PhantomJS/.test(navigator.userAgent);

    var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
    // This is woefully incomplete. Suggestions for alternative methods welcome.
    var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
    var mac = ios || /Mac/.test(navigator.platform);
    var windows = /win/i.test(navigator.platform);

    var presto_version = presto && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    if (presto_version) presto_version = Number(presto_version[1]);
    if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
    // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
    var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
    var captureRightClick = gecko || (ie && ie_version >= 9);

    // Optimize some code when these features are not used.
    var sawReadOnlySpans = false, sawCollapsedSpans = false;

    // EDITOR CONSTRUCTOR

    // A CodeMirror instance represents an editor. This is the object
    // that user code is usually dealing with.

    function CodeMirror(place, options) {
        if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

        this.options = options = options ? copyObj(options) : {};
        // Determine effective options based on given values and defaults.
        copyObj(defaults, options, false);
        setGuttersForLineNumbers(options);

        var doc = options.value;
        if (typeof doc == "string") doc = new Doc(doc, options.mode);
        this.doc = doc;

        var display = this.display = new Display(place, doc);
        display.wrapper.CodeMirror = this;
        updateGutters(this);
        themeChanged(this);
        if (options.lineWrapping)
            this.display.wrapper.className += " CodeMirror-wrap";
        if (options.autofocus && !mobile) focusInput(this);
        initScrollbars(this);

        this.state = {
            keyMaps: [],  // stores maps added by addKeyMap
            overlays: [], // highlighting overlays, as added by addOverlay
            modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
            overwrite: false, focused: false,
            suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
            pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in readInput
            draggingText: false,
            highlight: new Delayed(), // stores highlight worker timeout
            keySeq: null  // Unfinished key sequence
        };

        // Override magic textarea content restore that IE sometimes does
        // on our hidden textarea on reload
        if (ie && ie_version < 11) setTimeout(bind(resetInput, this, true), 20);

        registerEventHandlers(this);
        ensureGlobalHandlers();

        startOperation(this);
        this.curOp.forceUpdate = true;
        attachDoc(this, doc);

        if ((options.autofocus && !mobile) || activeElt() == display.input)
            setTimeout(bind(onFocus, this), 20);
        else
            onBlur(this);

        for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
            optionHandlers[opt](this, options[opt], Init);
        maybeUpdateLineNumberWidth(this);
        if (options.finishInit) options.finishInit(this);
        for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
        endOperation(this);
        // Suppress optimizelegibility in Webkit, since it breaks text
        // measuring on line wrapping boundaries.
        if (webkit && options.lineWrapping &&
            getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
            display.lineDiv.style.textRendering = "auto";
    }

    // DISPLAY CONSTRUCTOR

    // The display handles the DOM integration, both for input reading
    // and content drawing. It holds references to DOM nodes and
    // display-related state.

    function Display(place, doc) {
        var d = this;

        // The semihidden textarea that is focused when the editor is
        // focused, and receives input.
        var input = d.input = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
        // The textarea is kept positioned near the cursor to prevent the
        // fact that it'll be scrolled into view on input from scrolling
        // our fake cursor out of view. On webkit, when wrap=off, paste is
        // very slow. So make the area wide instead.
        if (webkit) input.style.width = "1000px";
        else input.setAttribute("wrap", "off");
        // If border: 0; -- iOS fails to open keyboard (issue #1287)
        if (ios) input.style.border = "1px solid black";
        input.setAttribute("autocorrect", "off"); input.setAttribute("autocapitalize", "off"); input.setAttribute("spellcheck", "false");

        // Wraps and hides input textarea
        d.inputDiv = elt("div", [input], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        // Covers bottom-right square when both scrollbars are present.
        d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
        d.scrollbarFiller.setAttribute("not-content", "true");
        // Covers bottom of gutter when coverGutterNextToScrollbar is on
        // and h scrollbar is present.
        d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
        d.gutterFiller.setAttribute("not-content", "true");
        // Will contain the actual code, positioned to cover the viewport.
        d.lineDiv = elt("div", null, "CodeMirror-code");
        // Elements are added to these to represent selection and cursors.
        d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
        d.cursorDiv = elt("div", null, "CodeMirror-cursors");
        // A visibility: hidden element used to find the size of things.
        d.measure = elt("div", null, "CodeMirror-measure");
        // When lines outside of the viewport are measured, they are drawn in this.
        d.lineMeasure = elt("div", null, "CodeMirror-measure");
        // Wraps everything that needs to exist inside the vertically-padded coordinate system
        d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                          null, "position: relative; outline: none");
        // Moved around its parent to cover visible view.
        d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
        // Set to the height of the document, allowing scrolling.
        d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
        d.sizerWidth = null;
        // Behavior of elts with overflow: auto and padding is
        // inconsistent across browsers. This is used to ensure the
        // scrollable area is big enough.
        d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
        // Will contain the gutters, if any.
        d.gutters = elt("div", null, "CodeMirror-gutters");
        d.lineGutter = null;
        // Actual scrollable element.
        d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
        d.scroller.setAttribute("tabIndex", "-1");
        // The element in which the editor lives.
        d.wrapper = elt("div", [d.inputDiv, d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

        // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
        if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
        // Needed to hide big blue blinking cursor on Mobile Safari
        if (ios) input.style.width = "0px";
        if (!webkit) d.scroller.draggable = true;
        // Needed to handle Tab key in KHTML
        if (khtml) { d.inputDiv.style.height = "1px"; d.inputDiv.style.position = "absolute"; }

        if (place) {
            if (place.appendChild) place.appendChild(d.wrapper);
            else place(d.wrapper);
        }

        // Current rendered range (may be bigger than the view window).
        d.viewFrom = d.viewTo = doc.first;
        d.reportedViewFrom = d.reportedViewTo = doc.first;
        // Information about the rendered lines.
        d.view = [];
        d.renderedView = null;
        // Holds info about a single rendered line when it was rendered
        // for measurement, while not in view.
        d.externalMeasured = null;
        // Empty space (in pixels) above the view
        d.viewOffset = 0;
        d.lastWrapHeight = d.lastWrapWidth = 0;
        d.updateLineNumbers = null;

        d.nativeBarWidth = d.barHeight = d.barWidth = 0;
        d.scrollbarsClipped = false;

        // Used to only resize the line number gutter when necessary (when
        // the amount of lines crosses a boundary that makes its width change)
        d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
        // See readInput and resetInput
        d.prevInput = "";
        // Set to true when a non-horizontal-scrolling line widget is
        // added. As an optimization, line widget aligning is skipped when
        // this is false.
        d.alignWidgets = false;
        // Flag that indicates whether we expect input to appear real soon
        // now (after some event like 'keypress' or 'input') and are
        // polling intensively.
        d.pollingFast = false;
        // Self-resetting timeout for the poller
        d.poll = new Delayed();

        d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

        // Tracks when resetInput has punted to just putting a short
        // string into the textarea instead of the full selection.
        d.inaccurateSelection = false;

        // Tracks the maximum line length so that the horizontal scrollbar
        // can be kept static when scrolling.
        d.maxLine = null;
        d.maxLineLength = 0;
        d.maxLineChanged = false;

        // Used for measuring wheel scrolling granularity
        d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

        // True when shift is held down.
        d.shift = false;

        // Used to track whether anything happened since the context menu
        // was opened.
        d.selForContextMenu = null;
    }

    // STATE UPDATES

    // Used to get the editor into a consistent state again when options change.

    function loadMode(cm) {
        cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
        resetModeState(cm);
    }

    function resetModeState(cm) {
        cm.doc.iter(function (line) {
            if (line.stateAfter) line.stateAfter = null;
            if (line.styles) line.styles = null;
        });
        cm.doc.frontier = cm.doc.first;
        startWorker(cm, 100);
        cm.state.modeGen++;
        if (cm.curOp) regChange(cm);
    }

    function wrappingChanged(cm) {
        if (cm.options.lineWrapping) {
            addClass(cm.display.wrapper, "CodeMirror-wrap");
            cm.display.sizer.style.minWidth = "";
            cm.display.sizerWidth = null;
        } else {
            rmClass(cm.display.wrapper, "CodeMirror-wrap");
            findMaxLine(cm);
        }
        estimateLineHeights(cm);
        regChange(cm);
        clearCaches(cm);
        setTimeout(function () { updateScrollbars(cm); }, 100);
    }

    // Returns a function that estimates the height of a line, to use as
    // first approximation until the line becomes visible (and is thus
    // properly measurable).
    function estimateHeight(cm) {
        var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
        var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
        return function (line) {
            if (lineIsHidden(cm.doc, line)) return 0;

            var widgetsHeight = 0;
            if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
                if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
            }

            if (wrapping)
                return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
            else
                return widgetsHeight + th;
        };
    }

    function estimateLineHeights(cm) {
        var doc = cm.doc, est = estimateHeight(cm);
        doc.iter(function (line) {
            var estHeight = est(line);
            if (estHeight != line.height) updateLineHeight(line, estHeight);
        });
    }

    function themeChanged(cm) {
        cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
          cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
        clearCaches(cm);
    }

    function guttersChanged(cm) {
        updateGutters(cm);
        regChange(cm);
        setTimeout(function () { alignHorizontally(cm); }, 20);
    }

    // Rebuild the gutter elements, ensure the margin to the left of the
    // code matches their width.
    function updateGutters(cm) {
        var gutters = cm.display.gutters, specs = cm.options.gutters;
        removeChildren(gutters);
        for (var i = 0; i < specs.length; ++i) {
            var gutterClass = specs[i];
            var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
            if (gutterClass == "CodeMirror-linenumbers") {
                cm.display.lineGutter = gElt;
                gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
            }
        }
        gutters.style.display = i ? "" : "none";
        updateGutterSpace(cm);
    }

    function updateGutterSpace(cm) {
        var width = cm.display.gutters.offsetWidth;
        cm.display.sizer.style.marginLeft = width + "px";
    }

    // Compute the character length of a line, taking into account
    // collapsed ranges (see markText) that might hide parts, and join
    // other lines onto it.
    function lineLength(line) {
        if (line.height == 0) return 0;
        var len = line.text.length, merged, cur = line;
        while (merged = collapsedSpanAtStart(cur)) {
            var found = merged.find(0, true);
            cur = found.from.line;
            len += found.from.ch - found.to.ch;
        }
        cur = line;
        while (merged = collapsedSpanAtEnd(cur)) {
            var found = merged.find(0, true);
            len -= cur.text.length - found.from.ch;
            cur = found.to.line;
            len += cur.text.length - found.to.ch;
        }
        return len;
    }

    // Find the longest line in the document.
    function findMaxLine(cm) {
        var d = cm.display, doc = cm.doc;
        d.maxLine = getLine(doc, doc.first);
        d.maxLineLength = lineLength(d.maxLine);
        d.maxLineChanged = true;
        doc.iter(function (line) {
            var len = lineLength(line);
            if (len > d.maxLineLength) {
                d.maxLineLength = len;
                d.maxLine = line;
            }
        });
    }

    // Make sure the gutters options contains the element
    // "CodeMirror-linenumbers" when the lineNumbers option is true.
    function setGuttersForLineNumbers(options) {
        var found = indexOf(options.gutters, "CodeMirror-linenumbers");
        if (found == -1 && options.lineNumbers) {
            options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
        } else if (found > -1 && !options.lineNumbers) {
            options.gutters = options.gutters.slice(0);
            options.gutters.splice(found, 1);
        }
    }

    // SCROLLBARS

    // Prepare DOM reads needed to update the scrollbars. Done in one
    // shot to minimize update/measure roundtrips.
    function measureForScrollbars(cm) {
        var d = cm.display, gutterW = d.gutters.offsetWidth;
        var docH = Math.round(cm.doc.height + paddingVert(cm.display));
        return {
            clientHeight: d.scroller.clientHeight,
            viewHeight: d.wrapper.clientHeight,
            scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
            viewWidth: d.wrapper.clientWidth,
            barLeft: cm.options.fixedGutter ? gutterW : 0,
            docHeight: docH,
            scrollHeight: docH + scrollGap(cm) + d.barHeight,
            nativeBarWidth: d.nativeBarWidth,
            gutterWidth: gutterW
        };
    }

    function NativeScrollbars(place, scroll, cm) {
        this.cm = cm;
        var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
        var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        place(vert); place(horiz);

        on(vert, "scroll", function () {
            if (vert.clientHeight) scroll(vert.scrollTop, "vertical");
        });
        on(horiz, "scroll", function () {
            if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal");
        });

        this.checkedOverlay = false;
        // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
        if (ie && ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
    }

    NativeScrollbars.prototype = copyObj({
        update: function (measure) {
            var needsH = measure.scrollWidth > measure.clientWidth + 1;
            var needsV = measure.scrollHeight > measure.clientHeight + 1;
            var sWidth = measure.nativeBarWidth;

            if (needsV) {
                this.vert.style.display = "block";
                this.vert.style.bottom = needsH ? sWidth + "px" : "0";
                var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
                // A bug in IE8 can cause this value to be negative, so guard it.
                this.vert.firstChild.style.height =
                  Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
            } else {
                this.vert.style.display = "";
                this.vert.firstChild.style.height = "0";
            }

            if (needsH) {
                this.horiz.style.display = "block";
                this.horiz.style.right = needsV ? sWidth + "px" : "0";
                this.horiz.style.left = measure.barLeft + "px";
                var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
                this.horiz.firstChild.style.width =
                  (measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
            } else {
                this.horiz.style.display = "";
                this.horiz.firstChild.style.width = "0";
            }

            if (!this.checkedOverlay && measure.clientHeight > 0) {
                if (sWidth == 0) this.overlayHack();
                this.checkedOverlay = true;
            }

            return { right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0 };
        },
        setScrollLeft: function (pos) {
            if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos;
        },
        setScrollTop: function (pos) {
            if (this.vert.scrollTop != pos) this.vert.scrollTop = pos;
        },
        overlayHack: function () {
            var w = mac && !mac_geMountainLion ? "12px" : "18px";
            this.horiz.style.minHeight = this.vert.style.minWidth = w;
            var self = this;
            var barMouseDown = function (e) {
                if (e_target(e) != self.vert && e_target(e) != self.horiz)
                    operation(self.cm, onMouseDown)(e);
            };
            on(this.vert, "mousedown", barMouseDown);
            on(this.horiz, "mousedown", barMouseDown);
        },
        clear: function () {
            var parent = this.horiz.parentNode;
            parent.removeChild(this.horiz);
            parent.removeChild(this.vert);
        }
    }, NativeScrollbars.prototype);

    function NullScrollbars() { }

    NullScrollbars.prototype = copyObj({
        update: function () { return { bottom: 0, right: 0 }; },
        setScrollLeft: function () { },
        setScrollTop: function () { },
        clear: function () { }
    }, NullScrollbars.prototype);

    CodeMirror.scrollbarModel = { "native": NativeScrollbars, "null": NullScrollbars };

    function initScrollbars(cm) {
        if (cm.display.scrollbars) {
            cm.display.scrollbars.clear();
            if (cm.display.scrollbars.addClass)
                rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
        }

        cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function (node) {
            cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
            on(node, "mousedown", function () {
                if (cm.state.focused) setTimeout(bind(focusInput, cm), 0);
            });
            node.setAttribute("not-content", "true");
        }, function (pos, axis) {
            if (axis == "horizontal") setScrollLeft(cm, pos);
            else setScrollTop(cm, pos);
        }, cm);
        if (cm.display.scrollbars.addClass)
            addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
    }

    function updateScrollbars(cm, measure) {
        if (!measure) measure = measureForScrollbars(cm);
        var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
        updateScrollbarsInner(cm, measure);
        for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
            if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
                updateHeightsInViewport(cm);
            updateScrollbarsInner(cm, measureForScrollbars(cm));
            startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
        }
    }

    // Re-synchronize the fake scrollbars with the actual size of the
    // content.
    function updateScrollbarsInner(cm, measure) {
        var d = cm.display;
        var sizes = d.scrollbars.update(measure);

        d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
        d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";

        if (sizes.right && sizes.bottom) {
            d.scrollbarFiller.style.display = "block";
            d.scrollbarFiller.style.height = sizes.bottom + "px";
            d.scrollbarFiller.style.width = sizes.right + "px";
        } else d.scrollbarFiller.style.display = "";
        if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
            d.gutterFiller.style.display = "block";
            d.gutterFiller.style.height = sizes.bottom + "px";
            d.gutterFiller.style.width = measure.gutterWidth + "px";
        } else d.gutterFiller.style.display = "";
    }

    // Compute the lines that are visible in a given viewport (defaults
    // the the current scroll position). viewport may contain top,
    // height, and ensure (see op.scrollToPos) properties.
    function visibleLines(display, doc, viewport) {
        var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
        top = Math.floor(top - paddingTop(display));
        var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

        var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
        // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
        // forces those lines into the viewport (if possible).
        if (viewport && viewport.ensure) {
            var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
            if (ensureFrom < from) {
                from = ensureFrom;
                to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
            } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
                from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
                to = ensureTo;
            }
        }
        return { from: from, to: Math.max(to, from + 1) };
    }

    // LINE NUMBERS

    // Re-align line numbers and gutter marks to compensate for
    // horizontal scrolling.
    function alignHorizontally(cm) {
        var display = cm.display, view = display.view;
        if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
        var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
        var gutterW = display.gutters.offsetWidth, left = comp + "px";
        for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
            if (cm.options.fixedGutter && view[i].gutter)
                view[i].gutter.style.left = left;
            var align = view[i].alignable;
            if (align) for (var j = 0; j < align.length; j++)
                align[j].style.left = left;
        }
        if (cm.options.fixedGutter)
            display.gutters.style.left = (comp + gutterW) + "px";
    }

    // Used to ensure that the line number gutter is still the right
    // size for the current document size. Returns true when an update
    // is needed.
    function maybeUpdateLineNumberWidth(cm) {
        if (!cm.options.lineNumbers) return false;
        var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
        if (last.length != display.lineNumChars) {
            var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                       "CodeMirror-linenumber CodeMirror-gutter-elt"));
            var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
            display.lineGutter.style.width = "";
            display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding);
            display.lineNumWidth = display.lineNumInnerWidth + padding;
            display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
            display.lineGutter.style.width = display.lineNumWidth + "px";
            updateGutterSpace(cm);
            return true;
        }
        return false;
    }

    function lineNumberFor(options, i) {
        return String(options.lineNumberFormatter(i + options.firstLineNumber));
    }

    // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
    // but using getBoundingClientRect to get a sub-pixel-accurate
    // result.
    function compensateForHScroll(display) {
        return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
    }

    // DISPLAY DRAWING

    function DisplayUpdate(cm, viewport, force) {
        var display = cm.display;

        this.viewport = viewport;
        // Store some values that we'll need later (but don't want to force a relayout for)
        this.visible = visibleLines(display, cm.doc, viewport);
        this.editorIsHidden = !display.wrapper.offsetWidth;
        this.wrapperHeight = display.wrapper.clientHeight;
        this.wrapperWidth = display.wrapper.clientWidth;
        this.oldDisplayWidth = displayWidth(cm);
        this.force = force;
        this.dims = getDimensions(cm);
    }

    function maybeClipScrollbars(cm) {
        var display = cm.display;
        if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
            display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
            display.heightForcer.style.height = scrollGap(cm) + "px";
            display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
            display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
            display.scrollbarsClipped = true;
        }
    }

    // Does the actual updating of the line display. Bails out
    // (returning false) when there is nothing to be done and forced is
    // false.
    function updateDisplayIfNeeded(cm, update) {
        var display = cm.display, doc = cm.doc;

        if (update.editorIsHidden) {
            resetView(cm);
            return false;
        }

        // Bail out if the visible area is already rendered and nothing changed.
        if (!update.force &&
            update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
            (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
            display.renderedView == display.view && countDirtyView(cm) == 0)
            return false;

        if (maybeUpdateLineNumberWidth(cm)) {
            resetView(cm);
            update.dims = getDimensions(cm);
        }

        // Compute a suitable new viewport (from & to)
        var end = doc.first + doc.size;
        var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
        var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
        if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
        if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
        if (sawCollapsedSpans) {
            from = visualLineNo(cm.doc, from);
            to = visualLineEndNo(cm.doc, to);
        }

        var different = from != display.viewFrom || to != display.viewTo ||
          display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
        adjustView(cm, from, to);

        display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
        // Position the mover div to align with the current scroll position
        cm.display.mover.style.top = display.viewOffset + "px";

        var toUpdate = countDirtyView(cm);
        if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
            (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
            return false;

        // For big changes, we hide the enclosing element during the
        // update, since that speeds up the operations on most browsers.
        var focused = activeElt();
        if (toUpdate > 4) display.lineDiv.style.display = "none";
        patchDisplay(cm, display.updateLineNumbers, update.dims);
        if (toUpdate > 4) display.lineDiv.style.display = "";
        display.renderedView = display.view;
        // There might have been a widget with a focused element that got
        // hidden or updated, if so re-focus it.
        if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();

        // Prevent selection and cursors from interfering with the scroll
        // width and height.
        removeChildren(display.cursorDiv);
        removeChildren(display.selectionDiv);
        display.gutters.style.height = 0;

        if (different) {
            display.lastWrapHeight = update.wrapperHeight;
            display.lastWrapWidth = update.wrapperWidth;
            startWorker(cm, 400);
        }

        display.updateLineNumbers = null;

        return true;
    }

    function postUpdateDisplay(cm, update) {
        var force = update.force, viewport = update.viewport;
        for (var first = true; ; first = false) {
            if (first && cm.options.lineWrapping && update.oldDisplayWidth != displayWidth(cm)) {
                force = true;
            } else {
                force = false;
                // Clip forced viewport to actual scrollable area.
                if (viewport && viewport.top != null)
                    viewport = { top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top) };
                // Updated line heights might result in the drawn area not
                // actually covering the viewport. Keep looping until it does.
                update.visible = visibleLines(cm.display, cm.doc, viewport);
                if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
                    break;
            }
            if (!updateDisplayIfNeeded(cm, update)) break;
            updateHeightsInViewport(cm);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm);
            setDocumentHeight(cm, barMeasure);
            updateScrollbars(cm, barMeasure);
        }

        signalLater(cm, "update", cm);
        if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
            signalLater(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
            cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
        }
    }

    function updateDisplaySimple(cm, viewport) {
        var update = new DisplayUpdate(cm, viewport);
        if (updateDisplayIfNeeded(cm, update)) {
            updateHeightsInViewport(cm);
            postUpdateDisplay(cm, update);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm);
            setDocumentHeight(cm, barMeasure);
            updateScrollbars(cm, barMeasure);
        }
    }

    function setDocumentHeight(cm, measure) {
        cm.display.sizer.style.minHeight = measure.docHeight + "px";
        var total = measure.docHeight + cm.display.barHeight;
        cm.display.heightForcer.style.top = total + "px";
        cm.display.gutters.style.height = Math.max(total + scrollGap(cm), measure.clientHeight) + "px";
    }

    // Read the actual heights of the rendered lines, and update their
    // stored heights to match.
    function updateHeightsInViewport(cm) {
        var display = cm.display;
        var prevBottom = display.lineDiv.offsetTop;
        for (var i = 0; i < display.view.length; i++) {
            var cur = display.view[i], height;
            if (cur.hidden) continue;
            if (ie && ie_version < 8) {
                var bot = cur.node.offsetTop + cur.node.offsetHeight;
                height = bot - prevBottom;
                prevBottom = bot;
            } else {
                var box = cur.node.getBoundingClientRect();
                height = box.bottom - box.top;
            }
            var diff = cur.line.height - height;
            if (height < 2) height = textHeight(display);
            if (diff > .001 || diff < -.001) {
                updateLineHeight(cur.line, height);
                updateWidgetHeight(cur.line);
                if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
                    updateWidgetHeight(cur.rest[j]);
            }
        }
    }

    // Read and store the height of line widgets associated with the
    // given line.
    function updateWidgetHeight(line) {
        if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
            line.widgets[i].height = line.widgets[i].node.offsetHeight;
    }

    // Do a bulk-read of the DOM positions and sizes needed to draw the
    // view, so that we don't interleave reading and writing to the DOM.
    function getDimensions(cm) {
        var d = cm.display, left = {}, width = {};
        var gutterLeft = d.gutters.clientLeft;
        for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
            left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
            width[cm.options.gutters[i]] = n.clientWidth;
        }
        return {
            fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth
        };
    }

    // Sync the actual display DOM structure with display.view, removing
    // nodes for lines that are no longer in view, and creating the ones
    // that are not there yet, and updating the ones that are out of
    // date.
    function patchDisplay(cm, updateNumbersFrom, dims) {
        var display = cm.display, lineNumbers = cm.options.lineNumbers;
        var container = display.lineDiv, cur = container.firstChild;

        function rm(node) {
            var next = node.nextSibling;
            // Works around a throw-scroll bug in OS X Webkit
            if (webkit && mac && cm.display.currentWheelTarget == node)
                node.style.display = "none";
            else
                node.parentNode.removeChild(node);
            return next;
        }

        var view = display.view, lineN = display.viewFrom;
        // Loop over the elements in the view, syncing cur (the DOM nodes
        // in display.lineDiv) with the view as we go.
        for (var i = 0; i < view.length; i++) {
            var lineView = view[i];
            if (lineView.hidden) {
            } else if (!lineView.node) { // Not drawn yet
                var node = buildLineElement(cm, lineView, lineN, dims);
                container.insertBefore(node, cur);
            } else { // Already drawn
                while (cur != lineView.node) cur = rm(cur);
                var updateNumber = lineNumbers && updateNumbersFrom != null &&
                  updateNumbersFrom <= lineN && lineView.lineNumber;
                if (lineView.changes) {
                    if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
                    updateLineForChanges(cm, lineView, lineN, dims);
                }
                if (updateNumber) {
                    removeChildren(lineView.lineNumber);
                    lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
                }
                cur = lineView.node.nextSibling;
            }
            lineN += lineView.size;
        }
        while (cur) cur = rm(cur);
    }

    // When an aspect of a line changes, a string is added to
    // lineView.changes. This updates the relevant part of the line's
    // DOM structure.
    function updateLineForChanges(cm, lineView, lineN, dims) {
        for (var j = 0; j < lineView.changes.length; j++) {
            var type = lineView.changes[j];
            if (type == "text") updateLineText(cm, lineView);
            else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
            else if (type == "class") updateLineClasses(lineView);
            else if (type == "widget") updateLineWidgets(lineView, dims);
        }
        lineView.changes = null;
    }

    // Lines with gutter elements, widgets or a background class need to
    // be wrapped, and have the extra elements added to the wrapper div
    function ensureLineWrapped(lineView) {
        if (lineView.node == lineView.text) {
            lineView.node = elt("div", null, null, "position: relative");
            if (lineView.text.parentNode)
                lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
            lineView.node.appendChild(lineView.text);
            if (ie && ie_version < 8) lineView.node.style.zIndex = 2;
        }
        return lineView.node;
    }

    function updateLineBackground(lineView) {
        var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
        if (cls) cls += " CodeMirror-linebackground";
        if (lineView.background) {
            if (cls) lineView.background.className = cls;
            else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
        } else if (cls) {
            var wrap = ensureLineWrapped(lineView);
            lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
        }
    }

    // Wrapper around buildLineContent which will reuse the structure
    // in display.externalMeasured when possible.
    function getLineContent(cm, lineView) {
        var ext = cm.display.externalMeasured;
        if (ext && ext.line == lineView.line) {
            cm.display.externalMeasured = null;
            lineView.measure = ext.measure;
            return ext.built;
        }
        return buildLineContent(cm, lineView);
    }

    // Redraw the line's text. Interacts with the background and text
    // classes because the mode may output tokens that influence these
    // classes.
    function updateLineText(cm, lineView) {
        var cls = lineView.text.className;
        var built = getLineContent(cm, lineView);
        if (lineView.text == lineView.node) lineView.node = built.pre;
        lineView.text.parentNode.replaceChild(built.pre, lineView.text);
        lineView.text = built.pre;
        if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
            lineView.bgClass = built.bgClass;
            lineView.textClass = built.textClass;
            updateLineClasses(lineView);
        } else if (cls) {
            lineView.text.className = cls;
        }
    }

    function updateLineClasses(lineView) {
        updateLineBackground(lineView);
        if (lineView.line.wrapClass)
            ensureLineWrapped(lineView).className = lineView.line.wrapClass;
        else if (lineView.node != lineView.text)
            lineView.node.className = "";
        var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
        lineView.text.className = textClass || "";
    }

    function updateLineGutter(cm, lineView, lineN, dims) {
        if (lineView.gutter) {
            lineView.node.removeChild(lineView.gutter);
            lineView.gutter = null;
        }
        var markers = lineView.line.gutterMarkers;
        if (cm.options.lineNumbers || markers) {
            var wrap = ensureLineWrapped(lineView);
            var gutterWrap = lineView.gutter =
              wrap.insertBefore(elt("div", null, "CodeMirror-gutter-wrapper", "left: " +
                                    (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) +
                                    "px; width: " + dims.gutterTotalWidth + "px"),
                                lineView.text);
            if (lineView.line.gutterClass)
                gutterWrap.className += " " + lineView.line.gutterClass;
            if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
                lineView.lineNumber = gutterWrap.appendChild(
                  elt("div", lineNumberFor(cm.options, lineN),
                      "CodeMirror-linenumber CodeMirror-gutter-elt",
                      "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
                      + cm.display.lineNumInnerWidth + "px"));
            if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
                var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
                if (found)
                    gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
                                               dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
            }
        }
    }

    function updateLineWidgets(lineView, dims) {
        if (lineView.alignable) lineView.alignable = null;
        for (var node = lineView.node.firstChild, next; node; node = next) {
            var next = node.nextSibling;
            if (node.className == "CodeMirror-linewidget")
                lineView.node.removeChild(node);
        }
        insertLineWidgets(lineView, dims);
    }

    // Build a line's DOM representation from scratch
    function buildLineElement(cm, lineView, lineN, dims) {
        var built = getLineContent(cm, lineView);
        lineView.text = lineView.node = built.pre;
        if (built.bgClass) lineView.bgClass = built.bgClass;
        if (built.textClass) lineView.textClass = built.textClass;

        updateLineClasses(lineView);
        updateLineGutter(cm, lineView, lineN, dims);
        insertLineWidgets(lineView, dims);
        return lineView.node;
    }

    // A lineView may contain multiple logical lines (when merged by
    // collapsed spans). The widgets for all of them need to be drawn.
    function insertLineWidgets(lineView, dims) {
        insertLineWidgetsFor(lineView.line, lineView, dims, true);
        if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
            insertLineWidgetsFor(lineView.rest[i], lineView, dims, false);
    }

    function insertLineWidgetsFor(line, lineView, dims, allowAbove) {
        if (!line.widgets) return;
        var wrap = ensureLineWrapped(lineView);
        for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
            var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
            if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true");
            positionLineWidget(widget, node, lineView, dims);
            if (allowAbove && widget.above)
                wrap.insertBefore(node, lineView.gutter || lineView.text);
            else
                wrap.appendChild(node);
            signalLater(widget, "redraw");
        }
    }

    function positionLineWidget(widget, node, lineView, dims) {
        if (widget.noHScroll) {
            (lineView.alignable || (lineView.alignable = [])).push(node);
            var width = dims.wrapperWidth;
            node.style.left = dims.fixedPos + "px";
            if (!widget.coverGutter) {
                width -= dims.gutterTotalWidth;
                node.style.paddingLeft = dims.gutterTotalWidth + "px";
            }
            node.style.width = width + "px";
        }
        if (widget.coverGutter) {
            node.style.zIndex = 5;
            node.style.position = "relative";
            if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
        }
    }

    // POSITION OBJECT

    // A Pos instance represents a position within the text.
    var Pos = CodeMirror.Pos = function (line, ch) {
        if (!(this instanceof Pos)) return new Pos(line, ch);
        this.line = line; this.ch = ch;
    };

    // Compare two positions, return 0 if they are the same, a negative
    // number when a is less, and a positive number otherwise.
    var cmp = CodeMirror.cmpPos = function (a, b) { return a.line - b.line || a.ch - b.ch; };

    function copyPos(x) { return Pos(x.line, x.ch); }
    function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
    function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }

    // SELECTION / CURSOR

    // Selection objects are immutable. A new one is created every time
    // the selection changes. A selection is one or more non-overlapping
    // (and non-touching) ranges, sorted, and an integer that indicates
    // which one is the primary selection (the one that's scrolled into
    // view, that getCursor returns, etc).
    function Selection(ranges, primIndex) {
        this.ranges = ranges;
        this.primIndex = primIndex;
    }

    Selection.prototype = {
        primary: function () { return this.ranges[this.primIndex]; },
        equals: function (other) {
            if (other == this) return true;
            if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
            for (var i = 0; i < this.ranges.length; i++) {
                var here = this.ranges[i], there = other.ranges[i];
                if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
            }
            return true;
        },
        deepCopy: function () {
            for (var out = [], i = 0; i < this.ranges.length; i++)
                out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
            return new Selection(out, this.primIndex);
        },
        somethingSelected: function () {
            for (var i = 0; i < this.ranges.length; i++)
                if (!this.ranges[i].empty()) return true;
            return false;
        },
        contains: function (pos, end) {
            if (!end) end = pos;
            for (var i = 0; i < this.ranges.length; i++) {
                var range = this.ranges[i];
                if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
                    return i;
            }
            return -1;
        }
    };

    function Range(anchor, head) {
        this.anchor = anchor; this.head = head;
    }

    Range.prototype = {
        from: function () { return minPos(this.anchor, this.head); },
        to: function () { return maxPos(this.anchor, this.head); },
        empty: function () {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
        }
    };

    // Take an unsorted, potentially overlapping set of ranges, and
    // build a selection out of it. 'Consumes' ranges array (modifying
    // it).
    function normalizeSelection(ranges, primIndex) {
        var prim = ranges[primIndex];
        ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
        primIndex = indexOf(ranges, prim);
        for (var i = 1; i < ranges.length; i++) {
            var cur = ranges[i], prev = ranges[i - 1];
            if (cmp(prev.to(), cur.from()) >= 0) {
                var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
                var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
                if (i <= primIndex)--primIndex;
                ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
            }
        }
        return new Selection(ranges, primIndex);
    }

    function simpleSelection(anchor, head) {
        return new Selection([new Range(anchor, head || anchor)], 0);
    }

    // Most of the external API clips given positions to make sure they
    // actually exist within the document.
    function clipLine(doc, n) { return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1)); }
    function clipPos(doc, pos) {
        if (pos.line < doc.first) return Pos(doc.first, 0);
        var last = doc.first + doc.size - 1;
        if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
        return clipToLen(pos, getLine(doc, pos.line).text.length);
    }
    function clipToLen(pos, linelen) {
        var ch = pos.ch;
        if (ch == null || ch > linelen) return Pos(pos.line, linelen);
        else if (ch < 0) return Pos(pos.line, 0);
        else return pos;
    }
    function isLine(doc, l) { return l >= doc.first && l < doc.first + doc.size; }
    function clipPosArray(doc, array) {
        for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
        return out;
    }

    // SELECTION UPDATES

    // The 'scroll' parameter given to many of these indicated whether
    // the new cursor position should be scrolled into view after
    // modifying the selection.

    // If shift is held or the extend flag is set, extends a range to
    // include a given position (and optionally a second position).
    // Otherwise, simply returns the range between the given positions.
    // Used for cursor motion and such.
    function extendRange(doc, range, head, other) {
        if (doc.cm && doc.cm.display.shift || doc.extend) {
            var anchor = range.anchor;
            if (other) {
                var posBefore = cmp(head, anchor) < 0;
                if (posBefore != (cmp(other, anchor) < 0)) {
                    anchor = head;
                    head = other;
                } else if (posBefore != (cmp(head, other) < 0)) {
                    head = other;
                }
            }
            return new Range(anchor, head);
        } else {
            return new Range(other || head, head);
        }
    }

    // Extend the primary selection range, discard the rest.
    function extendSelection(doc, head, other, options) {
        setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
    }

    // Extend all selections (pos is an array of selections with length
    // equal the number of selections)
    function extendSelections(doc, heads, options) {
        for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
            out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
        var newSel = normalizeSelection(out, doc.sel.primIndex);
        setSelection(doc, newSel, options);
    }

    // Updates a single range in the selection.
    function replaceOneSelection(doc, i, range, options) {
        var ranges = doc.sel.ranges.slice(0);
        ranges[i] = range;
        setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
    }

    // Reset the selection to a single range.
    function setSimpleSelection(doc, anchor, head, options) {
        setSelection(doc, simpleSelection(anchor, head), options);
    }

    // Give beforeSelectionChange handlers a change to influence a
    // selection update.
    function filterSelectionChange(doc, sel) {
        var obj = {
            ranges: sel.ranges,
            update: function (ranges) {
                this.ranges = [];
                for (var i = 0; i < ranges.length; i++)
                    this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                               clipPos(doc, ranges[i].head));
            }
        };
        signal(doc, "beforeSelectionChange", doc, obj);
        if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
        if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
        else return sel;
    }

    function setSelectionReplaceHistory(doc, sel, options) {
        var done = doc.history.done, last = lst(done);
        if (last && last.ranges) {
            done[done.length - 1] = sel;
            setSelectionNoUndo(doc, sel, options);
        } else {
            setSelection(doc, sel, options);
        }
    }

    // Set a new selection.
    function setSelection(doc, sel, options) {
        setSelectionNoUndo(doc, sel, options);
        addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
    }

    function setSelectionNoUndo(doc, sel, options) {
        if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
            sel = filterSelectionChange(doc, sel);

        var bias = options && options.bias ||
          (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
        setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

        if (!(options && options.scroll === false) && doc.cm)
            ensureCursorVisible(doc.cm);
    }

    function setSelectionInner(doc, sel) {
        if (sel.equals(doc.sel)) return;

        doc.sel = sel;

        if (doc.cm) {
            doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
            signalCursorActivity(doc.cm);
        }
        signalLater(doc, "cursorActivity", doc);
    }

    // Verify that the selection does not partially select any atomic
    // marked ranges.
    function reCheckSelection(doc) {
        setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
    }

    // Return a selection that does not partially select any atomic
    // ranges.
    function skipAtomicInSelection(doc, sel, bias, mayClear) {
        var out;
        for (var i = 0; i < sel.ranges.length; i++) {
            var range = sel.ranges[i];
            var newAnchor = skipAtomic(doc, range.anchor, bias, mayClear);
            var newHead = skipAtomic(doc, range.head, bias, mayClear);
            if (out || newAnchor != range.anchor || newHead != range.head) {
                if (!out) out = sel.ranges.slice(0, i);
                out[i] = new Range(newAnchor, newHead);
            }
        }
        return out ? normalizeSelection(out, sel.primIndex) : sel;
    }

    // Ensure a given position is not inside an atomic range.
    function skipAtomic(doc, pos, bias, mayClear) {
        var flipped = false, curPos = pos;
        var dir = bias || 1;
        doc.cantEdit = false;
        search: for (; ;) {
            var line = getLine(doc, curPos.line);
            if (line.markedSpans) {
                for (var i = 0; i < line.markedSpans.length; ++i) {
                    var sp = line.markedSpans[i], m = sp.marker;
                    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= curPos.ch : sp.from < curPos.ch)) &&
                        (sp.to == null || (m.inclusiveRight ? sp.to >= curPos.ch : sp.to > curPos.ch))) {
                        if (mayClear) {
                            signal(m, "beforeCursorEnter");
                            if (m.explicitlyCleared) {
                                if (!line.markedSpans) break;
                                else { --i; continue; }
                            }
                        }
                        if (!m.atomic) continue;
                        var newPos = m.find(dir < 0 ? -1 : 1);
                        if (cmp(newPos, curPos) == 0) {
                            newPos.ch += dir;
                            if (newPos.ch < 0) {
                                if (newPos.line > doc.first) newPos = clipPos(doc, Pos(newPos.line - 1));
                                else newPos = null;
                            } else if (newPos.ch > line.text.length) {
                                if (newPos.line < doc.first + doc.size - 1) newPos = Pos(newPos.line + 1, 0);
                                else newPos = null;
                            }
                            if (!newPos) {
                                if (flipped) {
                                    // Driven in a corner -- no valid cursor position found at all
                                    // -- try again *with* clearing, if we didn't already
                                    if (!mayClear) return skipAtomic(doc, pos, bias, true);
                                    // Otherwise, turn off editing until further notice, and return the start of the doc
                                    doc.cantEdit = true;
                                    return Pos(doc.first, 0);
                                }
                                flipped = true; newPos = pos; dir = -dir;
                            }
                        }
                        curPos = newPos;
                        continue search;
                    }
                }
            }
            return curPos;
        }
    }

    // SELECTION DRAWING

    // Redraw the selection and/or cursor
    function drawSelection(cm) {
        var display = cm.display, doc = cm.doc, result = {};
        var curFragment = result.cursors = document.createDocumentFragment();
        var selFragment = result.selection = document.createDocumentFragment();

        for (var i = 0; i < doc.sel.ranges.length; i++) {
            var range = doc.sel.ranges[i];
            var collapsed = range.empty();
            if (collapsed || cm.options.showCursorWhenSelecting)
                drawSelectionCursor(cm, range, curFragment);
            if (!collapsed)
                drawSelectionRange(cm, range, selFragment);
        }

        // Move the hidden textarea near the cursor to prevent scrolling artifacts
        if (cm.options.moveInputWithCursor) {
            var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
            var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
            result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                                headPos.top + lineOff.top - wrapOff.top));
            result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                                 headPos.left + lineOff.left - wrapOff.left));
        }

        return result;
    }

    function showSelection(cm, drawn) {
        removeChildrenAndAdd(cm.display.cursorDiv, drawn.cursors);
        removeChildrenAndAdd(cm.display.selectionDiv, drawn.selection);
        if (drawn.teTop != null) {
            cm.display.inputDiv.style.top = drawn.teTop + "px";
            cm.display.inputDiv.style.left = drawn.teLeft + "px";
        }
    }

    function updateSelection(cm) {
        showSelection(cm, drawSelection(cm));
    }

    // Draws a cursor for the given range
    function drawSelectionCursor(cm, range, output) {
        var pos = cursorCoords(cm, range.head, "div", null, null, !cm.options.singleCursorHeightPerLine);

        var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
        cursor.style.left = pos.left + "px";
        cursor.style.top = pos.top + "px";
        cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

        if (pos.other) {
            // Secondary cursor, shown when on a 'jump' in bi-directional text
            var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
            otherCursor.style.display = "";
            otherCursor.style.left = pos.other.left + "px";
            otherCursor.style.top = pos.other.top + "px";
            otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
        }
    }

    // Draws the given range as a highlighted selection
    function drawSelectionRange(cm, range, output) {
        var display = cm.display, doc = cm.doc;
        var fragment = document.createDocumentFragment();
        var padding = paddingH(cm.display), leftSide = padding.left;
        var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;

        function add(left, top, width, bottom) {
            if (top < 0) top = 0;
            top = Math.round(top);
            bottom = Math.round(bottom);
            fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
                                     "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
                                     "px; height: " + (bottom - top) + "px"));
        }

        function drawForLine(line, fromArg, toArg) {
            var lineObj = getLine(doc, line);
            var lineLen = lineObj.text.length;
            var start, end;
            function coords(ch, bias) {
                return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
            }

            iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir) {
                var leftPos = coords(from, "left"), rightPos, left, right;
                if (from == to) {
                    rightPos = leftPos;
                    left = right = leftPos.left;
                } else {
                    rightPos = coords(to - 1, "right");
                    if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
                    left = leftPos.left;
                    right = rightPos.right;
                }
                if (fromArg == null && from == 0) left = leftSide;
                if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
                    add(left, leftPos.top, null, leftPos.bottom);
                    left = leftSide;
                    if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
                }
                if (toArg == null && to == lineLen) right = rightSide;
                if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
                    start = leftPos;
                if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
                    end = rightPos;
                if (left < leftSide + 1) left = leftSide;
                add(left, rightPos.top, right - left, rightPos.bottom);
            });
            return { start: start, end: end };
        }

        var sFrom = range.from(), sTo = range.to();
        if (sFrom.line == sTo.line) {
            drawForLine(sFrom.line, sFrom.ch, sTo.ch);
        } else {
            var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
            var singleVLine = visualLine(fromLine) == visualLine(toLine);
            var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
            var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
            if (singleVLine) {
                if (leftEnd.top < rightStart.top - 2) {
                    add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
                    add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
                } else {
                    add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
                }
            }
            if (leftEnd.bottom < rightStart.top)
                add(leftSide, leftEnd.bottom, null, rightStart.top);
        }

        output.appendChild(fragment);
    }

    // Cursor-blinking
    function restartBlink(cm) {
        if (!cm.state.focused) return;
        var display = cm.display;
        clearInterval(display.blinker);
        var on = true;
        display.cursorDiv.style.visibility = "";
        if (cm.options.cursorBlinkRate > 0)
            display.blinker = setInterval(function () {
                display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
            }, cm.options.cursorBlinkRate);
        else if (cm.options.cursorBlinkRate < 0)
            display.cursorDiv.style.visibility = "hidden";
    }

    // HIGHLIGHT WORKER

    function startWorker(cm, time) {
        if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
            cm.state.highlight.set(time, bind(highlightWorker, cm));
    }

    function highlightWorker(cm) {
        var doc = cm.doc;
        if (doc.frontier < doc.first) doc.frontier = doc.first;
        if (doc.frontier >= cm.display.viewTo) return;
        var end = +new Date + cm.options.workTime;
        var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
        var changedLines = [];

        doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
            if (doc.frontier >= cm.display.viewFrom) { // Visible
                var oldStyles = line.styles;
                var highlighted = highlightLine(cm, line, state, true);
                line.styles = highlighted.styles;
                var oldCls = line.styleClasses, newCls = highlighted.classes;
                if (newCls) line.styleClasses = newCls;
                else if (oldCls) line.styleClasses = null;
                var ischange = !oldStyles || oldStyles.length != line.styles.length ||
                  oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
                for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
                if (ischange) changedLines.push(doc.frontier);
                line.stateAfter = copyState(doc.mode, state);
            } else {
                processLine(cm, line.text, state);
                line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
            }
            ++doc.frontier;
            if (+new Date > end) {
                startWorker(cm, cm.options.workDelay);
                return true;
            }
        });
        if (changedLines.length) runInOp(cm, function () {
            for (var i = 0; i < changedLines.length; i++)
                regLineChange(cm, changedLines[i], "text");
        });
    }

    // Finds the line to start with when starting a parse. Tries to
    // find a line with a stateAfter, so that it can start with a
    // valid state. If that fails, it returns the line with the
    // smallest indentation, which tends to need the least context to
    // parse correctly.
    function findStartLine(cm, n, precise) {
        var minindent, minline, doc = cm.doc;
        var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
        for (var search = n; search > lim; --search) {
            if (search <= doc.first) return doc.first;
            var line = getLine(doc, search - 1);
            if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
            var indented = countColumn(line.text, null, cm.options.tabSize);
            if (minline == null || minindent > indented) {
                minline = search - 1;
                minindent = indented;
            }
        }
        return minline;
    }

    function getStateBefore(cm, n, precise) {
        var doc = cm.doc, display = cm.display;
        if (!doc.mode.startState) return true;
        var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos - 1).stateAfter;
        if (!state) state = startState(doc.mode);
        else state = copyState(doc.mode, state);
        doc.iter(pos, n, function (line) {
            processLine(cm, line.text, state);
            var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
            line.stateAfter = save ? copyState(doc.mode, state) : null;
            ++pos;
        });
        if (precise) doc.frontier = pos;
        return state;
    }

    // POSITION MEASUREMENT

    function paddingTop(display) { return display.lineSpace.offsetTop; }
    function paddingVert(display) { return display.mover.offsetHeight - display.lineSpace.offsetHeight; }
    function paddingH(display) {
        if (display.cachedPaddingH) return display.cachedPaddingH;
        var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
        var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
        var data = { left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight) };
        if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
        return data;
    }

    function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth; }
    function displayWidth(cm) {
        return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
    }
    function displayHeight(cm) {
        return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
    }

    // Ensure the lineView.wrapping.heights array is populated. This is
    // an array of bottom offsets for the lines that make up a drawn
    // line. When lineWrapping is on, there might be more than one
    // height.
    function ensureLineHeights(cm, lineView, rect) {
        var wrapping = cm.options.lineWrapping;
        var curWidth = wrapping && displayWidth(cm);
        if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
            var heights = lineView.measure.heights = [];
            if (wrapping) {
                lineView.measure.width = curWidth;
                var rects = lineView.text.firstChild.getClientRects();
                for (var i = 0; i < rects.length - 1; i++) {
                    var cur = rects[i], next = rects[i + 1];
                    if (Math.abs(cur.bottom - next.bottom) > 2)
                        heights.push((cur.bottom + next.top) / 2 - rect.top);
                }
            }
            heights.push(rect.bottom - rect.top);
        }
    }

    // Find a line map (mapping character offsets to text nodes) and a
    // measurement cache for the given line number. (A line view might
    // contain multiple lines when collapsed ranges are present.)
    function mapFromLineView(lineView, line, lineN) {
        if (lineView.line == line)
            return { map: lineView.measure.map, cache: lineView.measure.cache };
        for (var i = 0; i < lineView.rest.length; i++)
            if (lineView.rest[i] == line)
                return { map: lineView.measure.maps[i], cache: lineView.measure.caches[i] };
        for (var i = 0; i < lineView.rest.length; i++)
            if (lineNo(lineView.rest[i]) > lineN)
                return { map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true };
    }

    // Render a line into the hidden node display.externalMeasured. Used
    // when measurement is needed for a line that's not in the viewport.
    function updateExternalMeasurement(cm, line) {
        line = visualLine(line);
        var lineN = lineNo(line);
        var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
        view.lineN = lineN;
        var built = view.built = buildLineContent(cm, view);
        view.text = built.pre;
        removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
        return view;
    }

    // Get a {top, bottom, left, right} box (in line-local coordinates)
    // for a given character.
    function measureChar(cm, line, ch, bias) {
        return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
    }

    // Find a line view that corresponds to the given line number.
    function findViewForLine(cm, lineN) {
        if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
            return cm.display.view[findViewIndex(cm, lineN)];
        var ext = cm.display.externalMeasured;
        if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
            return ext;
    }

    // Measurement can be split in two steps, the set-up work that
    // applies to the whole line, and the measurement of the actual
    // character. Functions like coordsChar, that need to do a lot of
    // measurements in a row, can thus ensure that the set-up work is
    // only done once.
    function prepareMeasureForLine(cm, line) {
        var lineN = lineNo(line);
        var view = findViewForLine(cm, lineN);
        if (view && !view.text)
            view = null;
        else if (view && view.changes)
            updateLineForChanges(cm, view, lineN, getDimensions(cm));
        if (!view)
            view = updateExternalMeasurement(cm, line);

        var info = mapFromLineView(view, line, lineN);
        return {
            line: line, view: view, rect: null,
            map: info.map, cache: info.cache, before: info.before,
            hasHeights: false
        };
    }

    // Given a prepared measurement object, measures the position of an
    // actual character (or fetches it from the cache).
    function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
        if (prepared.before) ch = -1;
        var key = ch + (bias || ""), found;
        if (prepared.cache.hasOwnProperty(key)) {
            found = prepared.cache[key];
        } else {
            if (!prepared.rect)
                prepared.rect = prepared.view.text.getBoundingClientRect();
            if (!prepared.hasHeights) {
                ensureLineHeights(cm, prepared.view, prepared.rect);
                prepared.hasHeights = true;
            }
            found = measureCharInner(cm, prepared, ch, bias);
            if (!found.bogus) prepared.cache[key] = found;
        }
        return {
            left: found.left, right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom
        };
    }

    var nullRect = { left: 0, right: 0, top: 0, bottom: 0 };

    function measureCharInner(cm, prepared, ch, bias) {
        var map = prepared.map;

        var node, start, end, collapse;
        // First, search the line map for the text node corresponding to,
        // or closest to, the target character.
        for (var i = 0; i < map.length; i += 3) {
            var mStart = map[i], mEnd = map[i + 1];
            if (ch < mStart) {
                start = 0; end = 1;
                collapse = "left";
            } else if (ch < mEnd) {
                start = ch - mStart;
                end = start + 1;
            } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
                end = mEnd - mStart;
                start = end - 1;
                if (ch >= mEnd) collapse = "right";
            }
            if (start != null) {
                node = map[i + 2];
                if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
                    collapse = bias;
                if (bias == "left" && start == 0)
                    while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
                        node = map[(i -= 3) + 2];
                        collapse = "left";
                    }
                if (bias == "right" && start == mEnd - mStart)
                    while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
                        node = map[(i += 3) + 2];
                        collapse = "right";
                    }
                break;
            }
        }

        var rect;
        if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
            for (var i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
                while (start && isExtendingChar(prepared.line.text.charAt(mStart + start)))--start;
                while (mStart + end < mEnd && isExtendingChar(prepared.line.text.charAt(mStart + end)))++end;
                if (ie && ie_version < 9 && start == 0 && end == mEnd - mStart) {
                    rect = node.parentNode.getBoundingClientRect();
                } else if (ie && cm.options.lineWrapping) {
                    var rects = range(node, start, end).getClientRects();
                    if (rects.length)
                        rect = rects[bias == "right" ? rects.length - 1 : 0];
                    else
                        rect = nullRect;
                } else {
                    rect = range(node, start, end).getBoundingClientRect() || nullRect;
                }
                if (rect.left || rect.right || start == 0) break;
                end = start;
                start = start - 1;
                collapse = "right";
            }
            if (ie && ie_version < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect);
        } else { // If it is a widget, simply get the box for the whole widget.
            if (start > 0) collapse = bias = "right";
            var rects;
            if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
                rect = rects[bias == "right" ? rects.length - 1 : 0];
            else
                rect = node.getBoundingClientRect();
        }
        if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
            var rSpan = node.parentNode.getClientRects()[0];
            if (rSpan)
                rect = { left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom };
            else
                rect = nullRect;
        }

        var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
        var mid = (rtop + rbot) / 2;
        var heights = prepared.view.measure.heights;
        for (var i = 0; i < heights.length - 1; i++)
            if (mid < heights[i]) break;
        var top = i ? heights[i - 1] : 0, bot = heights[i];
        var result = {
            left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
            right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
            top: top, bottom: bot
        };
        if (!rect.left && !rect.right) result.bogus = true;
        if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

        return result;
    }

    // Work around problem with bounding client rects on ranges being
    // returned incorrectly when zoomed on IE10 and below.
    function maybeUpdateRectForZooming(measure, rect) {
        if (!window.screen || screen.logicalXDPI == null ||
            screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
            return rect;
        var scaleX = screen.logicalXDPI / screen.deviceXDPI;
        var scaleY = screen.logicalYDPI / screen.deviceYDPI;
        return {
            left: rect.left * scaleX, right: rect.right * scaleX,
            top: rect.top * scaleY, bottom: rect.bottom * scaleY
        };
    }

    function clearLineMeasurementCacheFor(lineView) {
        if (lineView.measure) {
            lineView.measure.cache = {};
            lineView.measure.heights = null;
            if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
                lineView.measure.caches[i] = {};
        }
    }

    function clearLineMeasurementCache(cm) {
        cm.display.externalMeasure = null;
        removeChildren(cm.display.lineMeasure);
        for (var i = 0; i < cm.display.view.length; i++)
            clearLineMeasurementCacheFor(cm.display.view[i]);
    }

    function clearCaches(cm) {
        clearLineMeasurementCache(cm);
        cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
        if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
        cm.display.lineNumChars = null;
    }

    function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
    function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

    // Converts a {top, bottom, left, right} box from line-local
    // coordinates into another coordinate system. Context may be one of
    // "line", "div" (display.lineDiv), "local"/null (editor), "window",
    // or "page".
    function intoCoordSystem(cm, lineObj, rect, context) {
        if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
            var size = widgetHeight(lineObj.widgets[i]);
            rect.top += size; rect.bottom += size;
        }
        if (context == "line") return rect;
        if (!context) context = "local";
        var yOff = heightAtLine(lineObj);
        if (context == "local") yOff += paddingTop(cm.display);
        else yOff -= cm.display.viewOffset;
        if (context == "page" || context == "window") {
            var lOff = cm.display.lineSpace.getBoundingClientRect();
            yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
            var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
            rect.left += xOff; rect.right += xOff;
        }
        rect.top += yOff; rect.bottom += yOff;
        return rect;
    }

    // Coverts a box from "div" coords to another coordinate system.
    // Context may be "window", "page", "div", or "local"/null.
    function fromCoordSystem(cm, coords, context) {
        if (context == "div") return coords;
        var left = coords.left, top = coords.top;
        // First move into "page" coordinate system
        if (context == "page") {
            left -= pageScrollX();
            top -= pageScrollY();
        } else if (context == "local" || !context) {
            var localBox = cm.display.sizer.getBoundingClientRect();
            left += localBox.left;
            top += localBox.top;
        }

        var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
        return { left: left - lineSpaceBox.left, top: top - lineSpaceBox.top };
    }

    function charCoords(cm, pos, context, lineObj, bias) {
        if (!lineObj) lineObj = getLine(cm.doc, pos.line);
        return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
    }

    // Returns a box for a given cursor position, which may have an
    // 'other' property containing the position of the secondary cursor
    // on a bidi boundary.
    function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
        lineObj = lineObj || getLine(cm.doc, pos.line);
        if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
        function get(ch, right) {
            var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
            if (right) m.left = m.right; else m.right = m.left;
            return intoCoordSystem(cm, lineObj, m, context);
        }
        function getBidi(ch, partPos) {
            var part = order[partPos], right = part.level % 2;
            if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
                part = order[--partPos];
                ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
                right = true;
            } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
                part = order[++partPos];
                ch = bidiLeft(part) - part.level % 2;
                right = false;
            }
            if (right && ch == part.to && ch > part.from) return get(ch - 1);
            return get(ch, right);
        }
        var order = getOrder(lineObj), ch = pos.ch;
        if (!order) return get(ch);
        var partPos = getBidiPartAt(order, ch);
        var val = getBidi(ch, partPos);
        if (bidiOther != null) val.other = getBidi(ch, bidiOther);
        return val;
    }

    // Used to cheaply estimate the coordinates for a position. Used for
    // intermediate scroll updates.
    function estimateCoords(cm, pos) {
        var left = 0, pos = clipPos(cm.doc, pos);
        if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
        var lineObj = getLine(cm.doc, pos.line);
        var top = heightAtLine(lineObj) + paddingTop(cm.display);
        return { left: left, right: left, top: top, bottom: top + lineObj.height };
    }

    // Positions returned by coordsChar contain some extra information.
    // xRel is the relative x position of the input coordinates compared
    // to the found position (so xRel > 0 means the coordinates are to
    // the right of the character position, for example). When outside
    // is true, that means the coordinates lie outside the line's
    // vertical range.
    function PosWithInfo(line, ch, outside, xRel) {
        var pos = Pos(line, ch);
        pos.xRel = xRel;
        if (outside) pos.outside = true;
        return pos;
    }

    // Compute the character position closest to the given coordinates.
    // Input must be lineSpace-local ("div" coordinate system).
    function coordsChar(cm, x, y) {
        var doc = cm.doc;
        y += cm.display.viewOffset;
        if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
        var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
        if (lineN > last)
            return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
        if (x < 0) x = 0;

        var lineObj = getLine(doc, lineN);
        for (; ;) {
            var found = coordsCharInner(cm, lineObj, lineN, x, y);
            var merged = collapsedSpanAtEnd(lineObj);
            var mergedPos = merged && merged.find(0, true);
            if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
                lineN = lineNo(lineObj = mergedPos.to.line);
            else
                return found;
        }
    }

    function coordsCharInner(cm, lineObj, lineNo, x, y) {
        var innerOff = y - heightAtLine(lineObj);
        var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
        var preparedMeasure = prepareMeasureForLine(cm, lineObj);

        function getX(ch) {
            var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
            wrongLine = true;
            if (innerOff > sp.bottom) return sp.left - adjust;
            else if (innerOff < sp.top) return sp.left + adjust;
            else wrongLine = false;
            return sp.left;
        }

        var bidi = getOrder(lineObj), dist = lineObj.text.length;
        var from = lineLeft(lineObj), to = lineRight(lineObj);
        var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

        if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
        // Do a binary search between these bounds.
        for (; ;) {
            if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
                var ch = x < fromX || x - fromX <= toX - x ? from : to;
                var xDiff = x - (ch == from ? fromX : toX);
                while (isExtendingChar(lineObj.text.charAt(ch)))++ch;
                var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
                                      xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
                return pos;
            }
            var step = Math.ceil(dist / 2), middle = from + step;
            if (bidi) {
                middle = from;
                for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
            }
            var middleX = getX(middle);
            if (middleX > x) { to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step; }
            else { from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step; }
        }
    }

    var measureText;
    // Compute the default text height.
    function textHeight(display) {
        if (display.cachedTextHeight != null) return display.cachedTextHeight;
        if (measureText == null) {
            measureText = elt("pre");
            // Measure a bunch of lines, for browsers that compute
            // fractional heights.
            for (var i = 0; i < 49; ++i) {
                measureText.appendChild(document.createTextNode("x"));
                measureText.appendChild(elt("br"));
            }
            measureText.appendChild(document.createTextNode("x"));
        }
        removeChildrenAndAdd(display.measure, measureText);
        var height = measureText.offsetHeight / 50;
        if (height > 3) display.cachedTextHeight = height;
        removeChildren(display.measure);
        return height || 1;
    }

    // Compute the default character width.
    function charWidth(display) {
        if (display.cachedCharWidth != null) return display.cachedCharWidth;
        var anchor = elt("span", "xxxxxxxxxx");
        var pre = elt("pre", [anchor]);
        removeChildrenAndAdd(display.measure, pre);
        var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
        if (width > 2) display.cachedCharWidth = width;
        return width || 10;
    }

    // OPERATIONS

    // Operations are used to wrap a series of changes to the editor
    // state in such a way that each change won't have to update the
    // cursor and display (which would be awkward, slow, and
    // error-prone). Instead, display updates are batched and then all
    // combined and executed at once.

    var operationGroup = null;

    var nextOpId = 0;
    // Start a new operation.
    function startOperation(cm) {
        cm.curOp = {
            cm: cm,
            viewChanged: false,      // Flag that indicates that lines might need to be redrawn
            startHeight: cm.doc.height, // Used to detect need to update scrollbar
            forceUpdate: false,      // Used to force a redraw
            updateInput: null,       // Whether to reset the input textarea
            typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
            changeObjs: null,        // Accumulated changes, for firing change events
            cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
            cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
            selectionChanged: false, // Whether the selection needs to be redrawn
            updateMaxLine: false,    // Set when the widest line needs to be determined anew
            scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
            scrollToPos: null,       // Used to scroll to a specific position
            id: ++nextOpId           // Unique ID
        };
        if (operationGroup) {
            operationGroup.ops.push(cm.curOp);
        } else {
            cm.curOp.ownsGroup = operationGroup = {
                ops: [cm.curOp],
                delayedCallbacks: []
            };
        }
    }

    function fireCallbacksForOps(group) {
        // Calls delayed callbacks and cursorActivity handlers until no
        // new ones appear
        var callbacks = group.delayedCallbacks, i = 0;
        do {
            for (; i < callbacks.length; i++)
                callbacks[i]();
            for (var j = 0; j < group.ops.length; j++) {
                var op = group.ops[j];
                if (op.cursorActivityHandlers)
                    while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
                        op.cursorActivityHandlers[op.cursorActivityCalled++](op.cm);
            }
        } while (i < callbacks.length);
    }

    // Finish an operation, updating the display and signalling delayed events
    function endOperation(cm) {
        var op = cm.curOp, group = op.ownsGroup;
        if (!group) return;

        try { fireCallbacksForOps(group); }
        finally {
            operationGroup = null;
            for (var i = 0; i < group.ops.length; i++)
                group.ops[i].cm.curOp = null;
            endOperations(group);
        }
    }

    // The DOM updates done when an operation finishes are batched so
    // that the minimum number of relayouts are required.
    function endOperations(group) {
        var ops = group.ops;
        for (var i = 0; i < ops.length; i++) // Read DOM
            endOperation_R1(ops[i]);
        for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
            endOperation_W1(ops[i]);
        for (var i = 0; i < ops.length; i++) // Read DOM
            endOperation_R2(ops[i]);
        for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
            endOperation_W2(ops[i]);
        for (var i = 0; i < ops.length; i++) // Read DOM
            endOperation_finish(ops[i]);
    }

    function endOperation_R1(op) {
        var cm = op.cm, display = cm.display;
        maybeClipScrollbars(cm);
        if (op.updateMaxLine) findMaxLine(cm);

        op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
          op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                             op.scrollToPos.to.line >= display.viewTo) ||
          display.maxLineChanged && cm.options.lineWrapping;
        op.update = op.mustUpdate &&
          new DisplayUpdate(cm, op.mustUpdate && { top: op.scrollTop, ensure: op.scrollToPos }, op.forceUpdate);
    }

    function endOperation_W1(op) {
        op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
    }

    function endOperation_R2(op) {
        var cm = op.cm, display = cm.display;
        if (op.updatedDisplay) updateHeightsInViewport(cm);

        op.barMeasure = measureForScrollbars(cm);

        // If the max line changed since it was last measured, measure it,
        // and ensure the document's width matches it.
        // updateDisplay_W2 will use these properties to do the actual resizing
        if (display.maxLineChanged && !cm.options.lineWrapping) {
            op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
            cm.display.sizerWidth = op.adjustWidthTo;
            op.barMeasure.scrollWidth =
              Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
            op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
        }

        if (op.updatedDisplay || op.selectionChanged)
            op.newSelectionNodes = drawSelection(cm);
    }

    function endOperation_W2(op) {
        var cm = op.cm;

        if (op.adjustWidthTo != null) {
            cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
            if (op.maxScrollLeft < cm.doc.scrollLeft)
                setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
            cm.display.maxLineChanged = false;
        }

        if (op.newSelectionNodes)
            showSelection(cm, op.newSelectionNodes);
        if (op.updatedDisplay)
            setDocumentHeight(cm, op.barMeasure);
        if (op.updatedDisplay || op.startHeight != cm.doc.height)
            updateScrollbars(cm, op.barMeasure);

        if (op.selectionChanged) restartBlink(cm);

        if (cm.state.focused && op.updateInput)
            resetInput(cm, op.typing);
    }

    function endOperation_finish(op) {
        var cm = op.cm, display = cm.display, doc = cm.doc;

        if (op.updatedDisplay) postUpdateDisplay(cm, op.update);

        // Abort mouse wheel delta measurement, when scrolling explicitly
        if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
            display.wheelStartX = display.wheelStartY = null;

        // Propagate the scroll position to the actual DOM scroller
        if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
            doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
            display.scrollbars.setScrollTop(doc.scrollTop);
            display.scroller.scrollTop = doc.scrollTop;
        }
        if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
            doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - displayWidth(cm), op.scrollLeft));
            display.scrollbars.setScrollLeft(doc.scrollLeft);
            display.scroller.scrollLeft = doc.scrollLeft;
            alignHorizontally(cm);
        }
        // If we need to scroll a specific position into view, do so.
        if (op.scrollToPos) {
            var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                           clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
            if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
        }

        // Fire events for markers that are hidden/unidden by editing or
        // undoing
        var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
        if (hidden) for (var i = 0; i < hidden.length; ++i)
            if (!hidden[i].lines.length) signal(hidden[i], "hide");
        if (unhidden) for (var i = 0; i < unhidden.length; ++i)
            if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

        if (display.wrapper.offsetHeight)
            doc.scrollTop = cm.display.scroller.scrollTop;

        // Fire change events, and delayed event handlers
        if (op.changeObjs)
            signal(cm, "changes", cm, op.changeObjs);
    }

    // Run the given function in an operation
    function runInOp(cm, f) {
        if (cm.curOp) return f();
        startOperation(cm);
        try { return f(); }
        finally { endOperation(cm); }
    }
    // Wraps a function in an operation. Returns the wrapped function.
    function operation(cm, f) {
        return function () {
            if (cm.curOp) return f.apply(cm, arguments);
            startOperation(cm);
            try { return f.apply(cm, arguments); }
            finally { endOperation(cm); }
        };
    }
    // Used to add methods to editor and doc instances, wrapping them in
    // operations.
    function methodOp(f) {
        return function () {
            if (this.curOp) return f.apply(this, arguments);
            startOperation(this);
            try { return f.apply(this, arguments); }
            finally { endOperation(this); }
        };
    }
    function docMethodOp(f) {
        return function () {
            var cm = this.cm;
            if (!cm || cm.curOp) return f.apply(this, arguments);
            startOperation(cm);
            try { return f.apply(this, arguments); }
            finally { endOperation(cm); }
        };
    }

    // VIEW TRACKING

    // These objects are used to represent the visible (currently drawn)
    // part of the document. A LineView may correspond to multiple
    // logical lines, if those are connected by collapsed ranges.
    function LineView(doc, line, lineN) {
        // The starting line
        this.line = line;
        // Continuing lines, if any
        this.rest = visualLineContinued(line);
        // Number of logical lines in this visual line
        this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
        this.node = this.text = null;
        this.hidden = lineIsHidden(doc, line);
    }

    // Create a range of LineView objects for the given lines.
    function buildViewArray(cm, from, to) {
        var array = [], nextPos;
        for (var pos = from; pos < to; pos = nextPos) {
            var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
            nextPos = pos + view.size;
            array.push(view);
        }
        return array;
    }

    // Updates the display.view data structure for a given change to the
    // document. From and to are in pre-change coordinates. Lendiff is
    // the amount of lines added or subtracted by the change. This is
    // used for changes that span multiple lines, or change the way
    // lines are divided into visual lines. regLineChange (below)
    // registers single-line changes.
    function regChange(cm, from, to, lendiff) {
        if (from == null) from = cm.doc.first;
        if (to == null) to = cm.doc.first + cm.doc.size;
        if (!lendiff) lendiff = 0;

        var display = cm.display;
        if (lendiff && to < display.viewTo &&
            (display.updateLineNumbers == null || display.updateLineNumbers > from))
            display.updateLineNumbers = from;

        cm.curOp.viewChanged = true;

        if (from >= display.viewTo) { // Change after
            if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
                resetView(cm);
        } else if (to <= display.viewFrom) { // Change before
            if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
                resetView(cm);
            } else {
                display.viewFrom += lendiff;
                display.viewTo += lendiff;
            }
        } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
            resetView(cm);
        } else if (from <= display.viewFrom) { // Top overlap
            var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
            if (cut) {
                display.view = display.view.slice(cut.index);
                display.viewFrom = cut.lineN;
                display.viewTo += lendiff;
            } else {
                resetView(cm);
            }
        } else if (to >= display.viewTo) { // Bottom overlap
            var cut = viewCuttingPoint(cm, from, from, -1);
            if (cut) {
                display.view = display.view.slice(0, cut.index);
                display.viewTo = cut.lineN;
            } else {
                resetView(cm);
            }
        } else { // Gap in the middle
            var cutTop = viewCuttingPoint(cm, from, from, -1);
            var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
            if (cutTop && cutBot) {
                display.view = display.view.slice(0, cutTop.index)
                  .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
                  .concat(display.view.slice(cutBot.index));
                display.viewTo += lendiff;
            } else {
                resetView(cm);
            }
        }

        var ext = display.externalMeasured;
        if (ext) {
            if (to < ext.lineN)
                ext.lineN += lendiff;
            else if (from < ext.lineN + ext.size)
                display.externalMeasured = null;
        }
    }

    // Register a change to a single line. Type must be one of "text",
    // "gutter", "class", "widget"
    function regLineChange(cm, line, type) {
        cm.curOp.viewChanged = true;
        var display = cm.display, ext = cm.display.externalMeasured;
        if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
            display.externalMeasured = null;

        if (line < display.viewFrom || line >= display.viewTo) return;
        var lineView = display.view[findViewIndex(cm, line)];
        if (lineView.node == null) return;
        var arr = lineView.changes || (lineView.changes = []);
        if (indexOf(arr, type) == -1) arr.push(type);
    }

    // Clear the view.
    function resetView(cm) {
        cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
        cm.display.view = [];
        cm.display.viewOffset = 0;
    }

    // Find the view element corresponding to a given line. Return null
    // when the line isn't visible.
    function findViewIndex(cm, n) {
        if (n >= cm.display.viewTo) return null;
        n -= cm.display.viewFrom;
        if (n < 0) return null;
        var view = cm.display.view;
        for (var i = 0; i < view.length; i++) {
            n -= view[i].size;
            if (n < 0) return i;
        }
    }

    function viewCuttingPoint(cm, oldN, newN, dir) {
        var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
        if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
            return { index: index, lineN: newN };
        for (var i = 0, n = cm.display.viewFrom; i < index; i++)
            n += view[i].size;
        if (n != oldN) {
            if (dir > 0) {
                if (index == view.length - 1) return null;
                diff = (n + view[index].size) - oldN;
                index++;
            } else {
                diff = n - oldN;
            }
            oldN += diff; newN += diff;
        }
        while (visualLineNo(cm.doc, newN) != newN) {
            if (index == (dir < 0 ? 0 : view.length - 1)) return null;
            newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
            index += dir;
        }
        return { index: index, lineN: newN };
    }

    // Force the view to cover a given range, adding empty view element
    // or clipping off existing ones as needed.
    function adjustView(cm, from, to) {
        var display = cm.display, view = display.view;
        if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
            display.view = buildViewArray(cm, from, to);
            display.viewFrom = from;
        } else {
            if (display.viewFrom > from)
                display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
            else if (display.viewFrom < from)
                display.view = display.view.slice(findViewIndex(cm, from));
            display.viewFrom = from;
            if (display.viewTo < to)
                display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
            else if (display.viewTo > to)
                display.view = display.view.slice(0, findViewIndex(cm, to));
        }
        display.viewTo = to;
    }

    // Count the number of lines in the view whose DOM representation is
    // out of date (or nonexistent).
    function countDirtyView(cm) {
        var view = cm.display.view, dirty = 0;
        for (var i = 0; i < view.length; i++) {
            var lineView = view[i];
            if (!lineView.hidden && (!lineView.node || lineView.changes))++dirty;
        }
        return dirty;
    }

    // INPUT HANDLING

    // Poll for input changes, using the normal rate of polling. This
    // runs as long as the editor is focused.
    function slowPoll(cm) {
        if (cm.display.pollingFast) return;
        cm.display.poll.set(cm.options.pollInterval, function () {
            readInput(cm);
            if (cm.state.focused) slowPoll(cm);
        });
    }

    // When an event has just come in that is likely to add or change
    // something in the input textarea, we poll faster, to ensure that
    // the change appears on the screen quickly.
    function fastPoll(cm) {
        var missed = false;
        cm.display.pollingFast = true;
        function p() {
            var changed = readInput(cm);
            if (!changed && !missed) { missed = true; cm.display.poll.set(60, p); }
            else { cm.display.pollingFast = false; slowPoll(cm); }
        }
        cm.display.poll.set(20, p);
    }

    // This will be set to an array of strings when copying, so that,
    // when pasting, we know what kind of selections the copied text
    // was made out of.
    var lastCopied = null;

    // Read input from the textarea, and update the document to match.
    // When something is selected, it is present in the textarea, and
    // selected (unless it is huge, in which case a placeholder is
    // used). When nothing is selected, the cursor sits after previously
    // seen text (can be empty), which is stored in prevInput (we must
    // not reset the textarea when typing, because that breaks IME).
    function readInput(cm) {
        var input = cm.display.input, prevInput = cm.display.prevInput, doc = cm.doc;
        // Since this is called a *lot*, try to bail out as cheaply as
        // possible when it is clear that nothing happened. hasSelection
        // will be the case when there is a lot of text in the textarea,
        // in which case reading its value would be expensive.
        if (!cm.state.focused || (hasSelection(input) && !prevInput) || isReadOnly(cm) || cm.options.disableInput || cm.state.keySeq)
            return false;
        // See paste handler for more on the fakedLastChar kludge
        if (cm.state.pasteIncoming && cm.state.fakedLastChar) {
            input.value = input.value.substring(0, input.value.length - 1);
            cm.state.fakedLastChar = false;
        }
        var text = input.value;
        // If nothing changed, bail.
        if (text == prevInput && !cm.somethingSelected()) return false;
        // Work around nonsensical selection resetting in IE9/10, and
        // inexplicable appearance of private area unicode characters on
        // some key combos in Mac (#2689).
        if (ie && ie_version >= 9 && cm.display.inputHasSelection === text ||
            mac && /[\uf700-\uf7ff]/.test(text)) {
            resetInput(cm);
            return false;
        }

        var withOp = !cm.curOp;
        if (withOp) startOperation(cm);
        cm.display.shift = false;

        if (text.charCodeAt(0) == 0x200b && doc.sel == cm.display.selForContextMenu && !prevInput)
            prevInput = "\u200b";
        // Find the part of the input that is actually new
        var same = 0, l = Math.min(prevInput.length, text.length);
        while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same))++same;
        var inserted = text.slice(same), textLines = splitLines(inserted);

        // When pasing N lines into N selections, insert one line per selection
        var multiPaste = null;
        if (cm.state.pasteIncoming && doc.sel.ranges.length > 1) {
            if (lastCopied && lastCopied.join("\n") == inserted)
                multiPaste = doc.sel.ranges.length % lastCopied.length == 0 && map(lastCopied, splitLines);
            else if (textLines.length == doc.sel.ranges.length)
                multiPaste = map(textLines, function (l) { return [l]; });
        }

        // Normal behavior is to insert the new text into every selection
        for (var i = doc.sel.ranges.length - 1; i >= 0; i--) {
            var range = doc.sel.ranges[i];
            var from = range.from(), to = range.to();
            // Handle deletion
            if (same < prevInput.length)
                from = Pos(from.line, from.ch - (prevInput.length - same));
                // Handle overwrite
            else if (cm.state.overwrite && range.empty() && !cm.state.pasteIncoming)
                to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
            var updateInput = cm.curOp.updateInput;
            var changeEvent = {
                from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
                origin: cm.state.pasteIncoming ? "paste" : cm.state.cutIncoming ? "cut" : "+input"
            };
            makeChange(cm.doc, changeEvent);
            signalLater(cm, "inputRead", cm, changeEvent);
            // When an 'electric' character is inserted, immediately trigger a reindent
            if (inserted && !cm.state.pasteIncoming && cm.options.electricChars &&
                cm.options.smartIndent && range.head.ch < 100 &&
                (!i || doc.sel.ranges[i - 1].head.line != range.head.line)) {
                var mode = cm.getModeAt(range.head);
                var end = changeEnd(changeEvent);
                if (mode.electricChars) {
                    for (var j = 0; j < mode.electricChars.length; j++)
                        if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
                            indentLine(cm, end.line, "smart");
                            break;
                        }
                } else if (mode.electricInput) {
                    if (mode.electricInput.test(getLine(doc, end.line).text.slice(0, end.ch)))
                        indentLine(cm, end.line, "smart");
                }
            }
        }
        ensureCursorVisible(cm);
        cm.curOp.updateInput = updateInput;
        cm.curOp.typing = true;

        // Don't leave long text in the textarea, since it makes further polling slow
        if (text.length > 1000 || text.indexOf("\n") > -1) input.value = cm.display.prevInput = "";
        else cm.display.prevInput = text;
        if (withOp) endOperation(cm);
        cm.state.pasteIncoming = cm.state.cutIncoming = false;
        return true;
    }

    // Reset the input to correspond to the selection (or to be empty,
    // when not typing and nothing is selected)
    function resetInput(cm, typing) {
        if (cm.display.contextMenuPending) return;
        var minimal, selected, doc = cm.doc;
        if (cm.somethingSelected()) {
            cm.display.prevInput = "";
            var range = doc.sel.primary();
            minimal = hasCopyEvent &&
              (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
            var content = minimal ? "-" : selected || cm.getSelection();
            cm.display.input.value = content;
            if (cm.state.focused) selectInput(cm.display.input);
            if (ie && ie_version >= 9) cm.display.inputHasSelection = content;
        } else if (!typing) {
            cm.display.prevInput = cm.display.input.value = "";
            if (ie && ie_version >= 9) cm.display.inputHasSelection = null;
        }
        cm.display.inaccurateSelection = minimal;
    }

    function focusInput(cm) {
        if (cm.options.readOnly != "nocursor" && (!mobile || activeElt() != cm.display.input)) {
            try { cm.display.input.focus(); }
            catch (e) { } // IE8 will throw if the textarea is display: none or not in DOM
        }
    }

    function ensureFocus(cm) {
        if (!cm.state.focused) { focusInput(cm); onFocus(cm); }
    }

    function isReadOnly(cm) {
        return cm.options.readOnly || cm.doc.cantEdit;
    }

    // EVENT HANDLERS

    // Attach the necessary event handlers when initializing the editor
    function registerEventHandlers(cm) {
        var d = cm.display;
        on(d.scroller, "mousedown", operation(cm, onMouseDown));
        // Older IE's will not fire a second mousedown for a double click
        if (ie && ie_version < 11)
            on(d.scroller, "dblclick", operation(cm, function (e) {
                if (signalDOMEvent(cm, e)) return;
                var pos = posFromMouse(cm, e);
                if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
                e_preventDefault(e);
                var word = cm.findWordAt(pos);
                extendSelection(cm.doc, word.anchor, word.head);
            }));
        else
            on(d.scroller, "dblclick", function (e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
        // Prevent normal selection in the editor (we handle our own)
        on(d.lineSpace, "selectstart", function (e) {
            if (!eventInWidget(d, e)) e_preventDefault(e);
        });
        // Some browsers fire contextmenu *after* opening the menu, at
        // which point we can't mess with it anymore. Context menu is
        // handled in onMouseDown for these browsers.
        if (!captureRightClick) on(d.scroller, "contextmenu", function (e) { onContextMenu(cm, e); });

        // Sync scrolling between fake scrollbars and real scrollable
        // area, ensure viewport is updated when scrolling.
        on(d.scroller, "scroll", function () {
            if (d.scroller.clientHeight) {
                setScrollTop(cm, d.scroller.scrollTop);
                setScrollLeft(cm, d.scroller.scrollLeft, true);
                signal(cm, "scroll", cm);
            }
        });

        // Listen to wheel events in order to try and update the viewport on time.
        on(d.scroller, "mousewheel", function (e) { onScrollWheel(cm, e); });
        on(d.scroller, "DOMMouseScroll", function (e) { onScrollWheel(cm, e); });

        // Prevent wrapper from ever scrolling
        on(d.wrapper, "scroll", function () { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

        on(d.input, "keyup", function (e) { onKeyUp.call(cm, e); });
        on(d.input, "input", function () {
            if (ie && ie_version >= 9 && cm.display.inputHasSelection) cm.display.inputHasSelection = null;
            readInput(cm);
        });
        on(d.input, "keydown", operation(cm, onKeyDown));
        on(d.input, "keypress", operation(cm, onKeyPress));
        on(d.input, "focus", bind(onFocus, cm));
        on(d.input, "blur", bind(onBlur, cm));

        function drag_(e) {
            if (!signalDOMEvent(cm, e)) e_stop(e);
        }
        if (cm.options.dragDrop) {
            on(d.scroller, "dragstart", function (e) { onDragStart(cm, e); });
            on(d.scroller, "dragenter", drag_);
            on(d.scroller, "dragover", drag_);
            on(d.scroller, "drop", operation(cm, onDrop));
        }
        on(d.scroller, "paste", function (e) {
            if (eventInWidget(d, e)) return;
            cm.state.pasteIncoming = true;
            focusInput(cm);
            fastPoll(cm);
        });
        on(d.input, "paste", function () {
            // Workaround for webkit bug https://bugs.webkit.org/show_bug.cgi?id=90206
            // Add a char to the end of textarea before paste occur so that
            // selection doesn't span to the end of textarea.
            if (webkit && !cm.state.fakedLastChar && !(new Date - cm.state.lastMiddleDown < 200)) {
                var start = d.input.selectionStart, end = d.input.selectionEnd;
                d.input.value += "$";
                // The selection end needs to be set before the start, otherwise there
                // can be an intermediate non-empty selection between the two, which
                // can override the middle-click paste buffer on linux and cause the
                // wrong thing to get pasted.
                d.input.selectionEnd = end;
                d.input.selectionStart = start;
                cm.state.fakedLastChar = true;
            }
            cm.state.pasteIncoming = true;
            fastPoll(cm);
        });

        function prepareCopyCut(e) {
            if (cm.somethingSelected()) {
                lastCopied = cm.getSelections();
                if (d.inaccurateSelection) {
                    d.prevInput = "";
                    d.inaccurateSelection = false;
                    d.input.value = lastCopied.join("\n");
                    selectInput(d.input);
                }
            } else {
                var text = [], ranges = [];
                for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
                    var line = cm.doc.sel.ranges[i].head.line;
                    var lineRange = { anchor: Pos(line, 0), head: Pos(line + 1, 0) };
                    ranges.push(lineRange);
                    text.push(cm.getRange(lineRange.anchor, lineRange.head));
                }
                if (e.type == "cut") {
                    cm.setSelections(ranges, null, sel_dontScroll);
                } else {
                    d.prevInput = "";
                    d.input.value = text.join("\n");
                    selectInput(d.input);
                }
                lastCopied = text;
            }
            if (e.type == "cut") cm.state.cutIncoming = true;
        }
        on(d.input, "cut", prepareCopyCut);
        on(d.input, "copy", prepareCopyCut);

        // Needed to handle Tab key in KHTML
        if (khtml) on(d.sizer, "mouseup", function () {
            if (activeElt() == d.input) d.input.blur();
            focusInput(cm);
        });
    }

    // Called when the window resizes
    function onResize(cm) {
        var d = cm.display;
        if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
            return;
        // Might be a text scaling operation, clear size caches.
        d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
        d.scrollbarsClipped = false;
        cm.setSize();
    }

    // MOUSE EVENTS

    // Return true when the given mouse event happened in a widget
    function eventInWidget(display, e) {
        for (var n = e_target(e) ; n != display.wrapper; n = n.parentNode) {
            if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
                (n.parentNode == display.sizer && n != display.mover))
                return true;
        }
    }

    // Given a mouse event, find the corresponding position. If liberal
    // is false, it checks whether a gutter or scrollbar was clicked,
    // and returns null if it was. forRect is used by rectangular
    // selections, and tries to estimate a character position even for
    // coordinates beyond the right of the text.
    function posFromMouse(cm, e, liberal, forRect) {
        var display = cm.display;
        if (!liberal && e_target(e).getAttribute("not-content") == "true") return null;

        var x, y, space = display.lineSpace.getBoundingClientRect();
        // Fails unpredictably on IE[67] when mouse is dragged around quickly.
        try { x = e.clientX - space.left; y = e.clientY - space.top; }
        catch (e) { return null; }
        var coords = coordsChar(cm, x, y), line;
        if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
            var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
            coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
        }
        return coords;
    }

    // A mouse down can be a single click, double click, triple click,
    // start of selection drag, start of text drag, new cursor
    // (ctrl-click), rectangle drag (alt-drag), or xwin
    // middle-click-paste. Or it might be a click on something we should
    // not interfere with, such as a scrollbar or widget.
    function onMouseDown(e) {
        if (signalDOMEvent(this, e)) return;
        var cm = this, display = cm.display;
        display.shift = e.shiftKey;

        if (eventInWidget(display, e)) {
            if (!webkit) {
                // Briefly turn off draggability, to allow widgets to do
                // normal dragging things.
                display.scroller.draggable = false;
                setTimeout(function () { display.scroller.draggable = true; }, 100);
            }
            return;
        }
        if (clickInGutter(cm, e)) return;
        var start = posFromMouse(cm, e);
        window.focus();

        switch (e_button(e)) {
            case 1:
                if (start)
                    leftButtonDown(cm, e, start);
                else if (e_target(e) == display.scroller)
                    e_preventDefault(e);
                break;
            case 2:
                if (webkit) cm.state.lastMiddleDown = +new Date;
                if (start) extendSelection(cm.doc, start);
                setTimeout(bind(focusInput, cm), 20);
                e_preventDefault(e);
                break;
            case 3:
                if (captureRightClick) onContextMenu(cm, e);
                break;
        }
    }

    var lastClick, lastDoubleClick;
    function leftButtonDown(cm, e, start) {
        setTimeout(bind(ensureFocus, cm), 0);

        var now = +new Date, type;
        if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
            type = "triple";
        } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
            type = "double";
            lastDoubleClick = { time: now, pos: start };
        } else {
            type = "single";
            lastClick = { time: now, pos: start };
        }

        var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained;
        if (cm.options.dragDrop && dragAndDrop && !isReadOnly(cm) &&
            type == "single" && (contained = sel.contains(start)) > -1 &&
            !sel.ranges[contained].empty())
            leftButtonStartDrag(cm, e, start, modifier);
        else
            leftButtonSelect(cm, e, start, type, modifier);
    }

    // Start a text drag. When it ends, see if any dragging actually
    // happen, and treat as a click if it didn't.
    function leftButtonStartDrag(cm, e, start, modifier) {
        var display = cm.display;
        var dragEnd = operation(cm, function (e2) {
            if (webkit) display.scroller.draggable = false;
            cm.state.draggingText = false;
            off(document, "mouseup", dragEnd);
            off(display.scroller, "drop", dragEnd);
            if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
                e_preventDefault(e2);
                if (!modifier)
                    extendSelection(cm.doc, start);
                focusInput(cm);
                // Work around unexplainable focus problem in IE9 (#2127)
                if (ie && ie_version == 9)
                    setTimeout(function () { document.body.focus(); focusInput(cm); }, 20);
            }
        });
        // Let the drag handler handle this.
        if (webkit) display.scroller.draggable = true;
        cm.state.draggingText = dragEnd;
        // IE's approach to draggable
        if (display.scroller.dragDrop) display.scroller.dragDrop();
        on(document, "mouseup", dragEnd);
        on(display.scroller, "drop", dragEnd);
    }

    // Normal selection, as opposed to text dragging.
    function leftButtonSelect(cm, e, start, type, addNew) {
        var display = cm.display, doc = cm.doc;
        e_preventDefault(e);

        var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
        if (addNew && !e.shiftKey) {
            ourIndex = doc.sel.contains(start);
            if (ourIndex > -1)
                ourRange = ranges[ourIndex];
            else
                ourRange = new Range(start, start);
        } else {
            ourRange = doc.sel.primary();
        }

        if (e.altKey) {
            type = "rect";
            if (!addNew) ourRange = new Range(start, start);
            start = posFromMouse(cm, e, true, true);
            ourIndex = -1;
        } else if (type == "double") {
            var word = cm.findWordAt(start);
            if (cm.display.shift || doc.extend)
                ourRange = extendRange(doc, ourRange, word.anchor, word.head);
            else
                ourRange = word;
        } else if (type == "triple") {
            var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
            if (cm.display.shift || doc.extend)
                ourRange = extendRange(doc, ourRange, line.anchor, line.head);
            else
                ourRange = line;
        } else {
            ourRange = extendRange(doc, ourRange, start);
        }

        if (!addNew) {
            ourIndex = 0;
            setSelection(doc, new Selection([ourRange], 0), sel_mouse);
            startSel = doc.sel;
        } else if (ourIndex == -1) {
            ourIndex = ranges.length;
            setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
                         { scroll: false, origin: "*mouse" });
        } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single") {
            setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0));
            startSel = doc.sel;
        } else {
            replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
        }

        var lastPos = start;
        function extendTo(pos) {
            if (cmp(lastPos, pos) == 0) return;
            lastPos = pos;

            if (type == "rect") {
                var ranges = [], tabSize = cm.options.tabSize;
                var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
                var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
                var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
                for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line)) ;
                     line <= end; line++) {
                    var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
                    if (left == right)
                        ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
                    else if (text.length > leftPos)
                        ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
                }
                if (!ranges.length) ranges.push(new Range(start, start));
                setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                             { origin: "*mouse", scroll: false });
                cm.scrollIntoView(pos);
            } else {
                var oldRange = ourRange;
                var anchor = oldRange.anchor, head = pos;
                if (type != "single") {
                    if (type == "double")
                        var range = cm.findWordAt(pos);
                    else
                        var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
                    if (cmp(range.anchor, anchor) > 0) {
                        head = range.head;
                        anchor = minPos(oldRange.from(), range.anchor);
                    } else {
                        head = range.anchor;
                        anchor = maxPos(oldRange.to(), range.head);
                    }
                }
                var ranges = startSel.ranges.slice(0);
                ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
                setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
            }
        }

        var editorSize = display.wrapper.getBoundingClientRect();
        // Used to ensure timeout re-tries don't fire when another extend
        // happened in the meantime (clearTimeout isn't reliable -- at
        // least on Chrome, the timeouts still happen even when cleared,
        // if the clear happens after their scheduled firing time).
        var counter = 0;

        function extend(e) {
            var curCount = ++counter;
            var cur = posFromMouse(cm, e, true, type == "rect");
            if (!cur) return;
            if (cmp(cur, lastPos) != 0) {
                ensureFocus(cm);
                extendTo(cur);
                var visible = visibleLines(display, doc);
                if (cur.line >= visible.to || cur.line < visible.from)
                    setTimeout(operation(cm, function () { if (counter == curCount) extend(e); }), 150);
            } else {
                var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
                if (outside) setTimeout(operation(cm, function () {
                    if (counter != curCount) return;
                    display.scroller.scrollTop += outside;
                    extend(e);
                }), 50);
            }
        }

        function done(e) {
            counter = Infinity;
            e_preventDefault(e);
            focusInput(cm);
            off(document, "mousemove", move);
            off(document, "mouseup", up);
            doc.history.lastSelOrigin = null;
        }

        var move = operation(cm, function (e) {
            if (!e_button(e)) done(e);
            else extend(e);
        });
        var up = operation(cm, done);
        on(document, "mousemove", move);
        on(document, "mouseup", up);
    }

    // Determines whether an event happened in the gutter, and fires the
    // handlers for the corresponding event.
    function gutterEvent(cm, e, type, prevent, signalfn) {
        try { var mX = e.clientX, mY = e.clientY; }
        catch (e) { return false; }
        if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
        if (prevent) e_preventDefault(e);

        var display = cm.display;
        var lineBox = display.lineDiv.getBoundingClientRect();

        if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
        mY -= lineBox.top - display.viewOffset;

        for (var i = 0; i < cm.options.gutters.length; ++i) {
            var g = display.gutters.childNodes[i];
            if (g && g.getBoundingClientRect().right >= mX) {
                var line = lineAtHeight(cm.doc, mY);
                var gutter = cm.options.gutters[i];
                signalfn(cm, type, cm, line, gutter, e);
                return e_defaultPrevented(e);
            }
        }
    }

    function clickInGutter(cm, e) {
        return gutterEvent(cm, e, "gutterClick", true, signalLater);
    }

    // Kludge to work around strange IE behavior where it'll sometimes
    // re-fire a series of drag-related events right after the drop (#1551)
    var lastDrop = 0;

    function onDrop(e) {
        var cm = this;
        if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
            return;
        e_preventDefault(e);
        if (ie) lastDrop = +new Date;
        var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
        if (!pos || isReadOnly(cm)) return;
        // Might be a file drop, in which case we simply extract the text
        // and insert it.
        if (files && files.length && window.FileReader && window.File) {
            var n = files.length, text = Array(n), read = 0;
            var loadFile = function (file, i) {
                var reader = new FileReader;
                reader.onload = operation(cm, function () {
                    text[i] = reader.result;
                    if (++read == n) {
                        pos = clipPos(cm.doc, pos);
                        var change = { from: pos, to: pos, text: splitLines(text.join("\n")), origin: "paste" };
                        makeChange(cm.doc, change);
                        setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
                    }
                });
                reader.readAsText(file);
            };
            for (var i = 0; i < n; ++i) loadFile(files[i], i);
        } else { // Normal drop
            // Don't do a replace if the drop happened inside of the selected text.
            if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
                cm.state.draggingText(e);
                // Ensure the editor is re-focused
                setTimeout(bind(focusInput, cm), 20);
                return;
            }
            try {
                var text = e.dataTransfer.getData("Text");
                if (text) {
                    if (cm.state.draggingText && !(mac ? e.metaKey : e.ctrlKey))
                        var selected = cm.listSelections();
                    setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
                    if (selected) for (var i = 0; i < selected.length; ++i)
                        replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
                    cm.replaceSelection(text, "around", "paste");
                    focusInput(cm);
                }
            }
            catch (e) { }
        }
    }

    function onDragStart(cm, e) {
        if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
        if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

        e.dataTransfer.setData("Text", cm.getSelection());

        // Use dummy image instead of default browsers image.
        // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
        if (e.dataTransfer.setDragImage && !safari) {
            var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
            img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            if (presto) {
                img.width = img.height = 1;
                cm.display.wrapper.appendChild(img);
                // Force a relayout, or Opera won't use our image for some obscure reason
                img._top = img.offsetTop;
            }
            e.dataTransfer.setDragImage(img, 0, 0);
            if (presto) img.parentNode.removeChild(img);
        }
    }

    // SCROLL EVENTS

    // Sync the scrollable area and scrollbars, ensure the viewport
    // covers the visible area.
    function setScrollTop(cm, val) {
        if (Math.abs(cm.doc.scrollTop - val) < 2) return;
        cm.doc.scrollTop = val;
        if (!gecko) updateDisplaySimple(cm, { top: val });
        if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
        cm.display.scrollbars.setScrollTop(val);
        if (gecko) updateDisplaySimple(cm);
        startWorker(cm, 100);
    }
    // Sync scroller and scrollbar, ensure the gutter elements are
    // aligned.
    function setScrollLeft(cm, val, isScroller) {
        if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
        val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
        cm.doc.scrollLeft = val;
        alignHorizontally(cm);
        if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
        cm.display.scrollbars.setScrollLeft(val);
    }

    // Since the delta values reported on mouse wheel events are
    // unstandardized between browsers and even browser versions, and
    // generally horribly unpredictable, this code starts by measuring
    // the scroll effect that the first few mouse wheel events have,
    // and, from that, detects the way it can convert deltas to pixel
    // offsets afterwards.
    //
    // The reason we want to know the amount a wheel event will scroll
    // is that it gives us a chance to update the display before the
    // actual scrolling happens, reducing flickering.

    var wheelSamples = 0, wheelPixelsPerUnit = null;
    // Fill in a browser-detected starting value on browsers where we
    // know one. These don't have to be accurate -- the result of them
    // being wrong would just be a slight flicker on the first wheel
    // scroll (if it is large enough).
    if (ie) wheelPixelsPerUnit = -.53;
    else if (gecko) wheelPixelsPerUnit = 15;
    else if (chrome) wheelPixelsPerUnit = -.7;
    else if (safari) wheelPixelsPerUnit = -1 / 3;

    var wheelEventDelta = function (e) {
        var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
        if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
        if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
        else if (dy == null) dy = e.wheelDelta;
        return { x: dx, y: dy };
    };
    CodeMirror.wheelEventPixels = function (e) {
        var delta = wheelEventDelta(e);
        delta.x *= wheelPixelsPerUnit;
        delta.y *= wheelPixelsPerUnit;
        return delta;
    };

    function onScrollWheel(cm, e) {
        var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

        var display = cm.display, scroll = display.scroller;
        // Quit if there's nothing to scroll here
        if (!(dx && scroll.scrollWidth > scroll.clientWidth ||
              dy && scroll.scrollHeight > scroll.clientHeight)) return;

        // Webkit browsers on OS X abort momentum scrolls when the target
        // of the scroll event is removed from the scrollable element.
        // This hack (see related code in patchDisplay) makes sure the
        // element is kept around.
        if (dy && mac && webkit) {
            outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
                for (var i = 0; i < view.length; i++) {
                    if (view[i].node == cur) {
                        cm.display.currentWheelTarget = cur;
                        break outer;
                    }
                }
            }
        }

        // On some browsers, horizontal scrolling will cause redraws to
        // happen before the gutter has been realigned, causing it to
        // wriggle around in a most unseemly way. When we have an
        // estimated pixels/delta value, we just handle horizontal
        // scrolling entirely here. It'll be slightly off from native, but
        // better than glitching out.
        if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
            if (dy)
                setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
            setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
            e_preventDefault(e);
            display.wheelStartX = null; // Abort measurement, if in progress
            return;
        }

        // 'Project' the visible viewport to cover the area that is being
        // scrolled into view (if we know enough to estimate it).
        if (dy && wheelPixelsPerUnit != null) {
            var pixels = dy * wheelPixelsPerUnit;
            var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
            if (pixels < 0) top = Math.max(0, top + pixels - 50);
            else bot = Math.min(cm.doc.height, bot + pixels + 50);
            updateDisplaySimple(cm, { top: top, bottom: bot });
        }

        if (wheelSamples < 20) {
            if (display.wheelStartX == null) {
                display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
                display.wheelDX = dx; display.wheelDY = dy;
                setTimeout(function () {
                    if (display.wheelStartX == null) return;
                    var movedX = scroll.scrollLeft - display.wheelStartX;
                    var movedY = scroll.scrollTop - display.wheelStartY;
                    var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
                      (movedX && display.wheelDX && movedX / display.wheelDX);
                    display.wheelStartX = display.wheelStartY = null;
                    if (!sample) return;
                    wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
                    ++wheelSamples;
                }, 200);
            } else {
                display.wheelDX += dx; display.wheelDY += dy;
            }
        }
    }

    // KEY EVENTS

    // Run a handler that was bound to a key.
    function doHandleBinding(cm, bound, dropShift) {
        if (typeof bound == "string") {
            bound = commands[bound];
            if (!bound) return false;
        }
        // Ensure previous input has been read, so that the handler sees a
        // consistent view of the document
        if (cm.display.pollingFast && readInput(cm)) cm.display.pollingFast = false;
        var prevShift = cm.display.shift, done = false;
        try {
            if (isReadOnly(cm)) cm.state.suppressEdits = true;
            if (dropShift) cm.display.shift = false;
            done = bound(cm) != Pass;
        } finally {
            cm.display.shift = prevShift;
            cm.state.suppressEdits = false;
        }
        return done;
    }

    function lookupKeyForEditor(cm, name, handle) {
        for (var i = 0; i < cm.state.keyMaps.length; i++) {
            var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
            if (result) return result;
        }
        return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
          || lookupKey(name, cm.options.keyMap, handle, cm);
    }

    var stopSeq = new Delayed;
    function dispatchKey(cm, name, e, handle) {
        var seq = cm.state.keySeq;
        if (seq) {
            if (isModifierKey(name)) return "handled";
            stopSeq.set(50, function () {
                if (cm.state.keySeq == seq) {
                    cm.state.keySeq = null;
                    resetInput(cm);
                }
            });
            name = seq + " " + name;
        }
        var result = lookupKeyForEditor(cm, name, handle);

        if (result == "multi")
            cm.state.keySeq = name;
        if (result == "handled")
            signalLater(cm, "keyHandled", cm, name, e);

        if (result == "handled" || result == "multi") {
            e_preventDefault(e);
            restartBlink(cm);
        }

        if (seq && !result && /\'$/.test(name)) {
            e_preventDefault(e);
            return true;
        }
        return !!result;
    }

    // Handle a key from the keydown event.
    function handleKeyBinding(cm, e) {
        var name = keyName(e, true);
        if (!name) return false;

        if (e.shiftKey && !cm.state.keySeq) {
            // First try to resolve full name (including 'Shift-'). Failing
            // that, see if there is a cursor-motion command (starting with
            // 'go') bound to the keyname without 'Shift-'.
            return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
                || dispatchKey(cm, name, e, function (b) {
                    if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                        return doHandleBinding(cm, b);
                });
        } else {
            return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); });
        }
    }

    // Handle a key from the keypress event
    function handleCharBinding(cm, e, ch) {
        return dispatchKey(cm, "'" + ch + "'", e,
                           function (b) { return doHandleBinding(cm, b, true); });
    }

    var lastStoppedKey = null;
    function onKeyDown(e) {
        var cm = this;
        ensureFocus(cm);
        if (signalDOMEvent(cm, e)) return;
        // IE does strange things with escape.
        if (ie && ie_version < 11 && e.keyCode == 27) e.returnValue = false;
        var code = e.keyCode;
        cm.display.shift = code == 16 || e.shiftKey;
        var handled = handleKeyBinding(cm, e);
        if (presto) {
            lastStoppedKey = handled ? code : null;
            // Opera has no cut event... we try to at least catch the key combo
            if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
                cm.replaceSelection("", null, "cut");
        }

        // Turn mouse into crosshair when Alt is held on Mac.
        if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
            showCrossHair(cm);
    }

    function showCrossHair(cm) {
        var lineDiv = cm.display.lineDiv;
        addClass(lineDiv, "CodeMirror-crosshair");

        function up(e) {
            if (e.keyCode == 18 || !e.altKey) {
                rmClass(lineDiv, "CodeMirror-crosshair");
                off(document, "keyup", up);
                off(document, "mouseover", up);
            }
        }
        on(document, "keyup", up);
        on(document, "mouseover", up);
    }

    function onKeyUp(e) {
        if (e.keyCode == 16) this.doc.sel.shift = false;
        signalDOMEvent(this, e);
    }

    function onKeyPress(e) {
        var cm = this;
        if (signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) return;
        var keyCode = e.keyCode, charCode = e.charCode;
        if (presto && keyCode == lastStoppedKey) { lastStoppedKey = null; e_preventDefault(e); return; }
        if (((presto && (!e.which || e.which < 10)) || khtml) && handleKeyBinding(cm, e)) return;
        var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
        if (handleCharBinding(cm, e, ch)) return;
        if (ie && ie_version >= 9) cm.display.inputHasSelection = null;
        fastPoll(cm);
    }

    // FOCUS/BLUR EVENTS

    function onFocus(cm) {
        if (cm.options.readOnly == "nocursor") return;
        if (!cm.state.focused) {
            signal(cm, "focus", cm);
            cm.state.focused = true;
            addClass(cm.display.wrapper, "CodeMirror-focused");
            // The prevInput test prevents this from firing when a context
            // menu is closed (since the resetInput would kill the
            // select-all detection hack)
            if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
                resetInput(cm);
                if (webkit) setTimeout(bind(resetInput, cm, true), 0); // Issue #1730
            }
        }
        slowPoll(cm);
        restartBlink(cm);
    }
    function onBlur(cm) {
        if (cm.state.focused) {
            signal(cm, "blur", cm);
            cm.state.focused = false;
            rmClass(cm.display.wrapper, "CodeMirror-focused");
        }
        clearInterval(cm.display.blinker);
        setTimeout(function () { if (!cm.state.focused) cm.display.shift = false; }, 150);
    }

    // CONTEXT MENU HANDLING

    // To make the context menu work, we need to briefly unhide the
    // textarea (making it as unobtrusive as possible) to let the
    // right-click take effect on it.
    function onContextMenu(cm, e) {
        if (signalDOMEvent(cm, e, "contextmenu")) return;
        var display = cm.display;
        if (eventInWidget(display, e) || contextMenuInGutter(cm, e)) return;

        var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
        if (!pos || presto) return; // Opera is difficult.

        // Reset the current text selection only if the click is done outside of the selection
        // and 'resetSelectionOnContextMenu' option is true.
        var reset = cm.options.resetSelectionOnContextMenu;
        if (reset && cm.doc.sel.contains(pos) == -1)
            operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);

        var oldCSS = display.input.style.cssText;
        display.inputDiv.style.position = "absolute";
        display.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
          "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: " +
          (ie ? "rgba(255, 255, 255, .05)" : "transparent") +
          "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
        if (webkit) var oldScrollY = window.scrollY; // Work around Chrome issue (#2712)
        focusInput(cm);
        if (webkit) window.scrollTo(null, oldScrollY);
        resetInput(cm);
        // Adds "Select all" to context menu in FF
        if (!cm.somethingSelected()) display.input.value = display.prevInput = " ";
        display.contextMenuPending = true;
        display.selForContextMenu = cm.doc.sel;
        clearTimeout(display.detectingSelectAll);

        // Select-all will be greyed out if there's nothing to select, so
        // this adds a zero-width space so that we can later check whether
        // it got selected.
        function prepareSelectAllHack() {
            if (display.input.selectionStart != null) {
                var selected = cm.somethingSelected();
                var extval = display.input.value = "\u200b" + (selected ? display.input.value : "");
                display.prevInput = selected ? "" : "\u200b";
                display.input.selectionStart = 1; display.input.selectionEnd = extval.length;
                // Re-set this, in case some other handler touched the
                // selection in the meantime.
                display.selForContextMenu = cm.doc.sel;
            }
        }
        function rehide() {
            display.contextMenuPending = false;
            display.inputDiv.style.position = "relative";
            display.input.style.cssText = oldCSS;
            if (ie && ie_version < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);
            slowPoll(cm);

            // Try to detect the user choosing select-all
            if (display.input.selectionStart != null) {
                if (!ie || (ie && ie_version < 9)) prepareSelectAllHack();
                var i = 0, poll = function () {
                    if (display.selForContextMenu == cm.doc.sel && display.input.selectionStart == 0)
                        operation(cm, commands.selectAll)(cm);
                    else if (i++ < 10) display.detectingSelectAll = setTimeout(poll, 500);
                    else resetInput(cm);
                };
                display.detectingSelectAll = setTimeout(poll, 200);
            }
        }

        if (ie && ie_version >= 9) prepareSelectAllHack();
        if (captureRightClick) {
            e_stop(e);
            var mouseup = function () {
                off(window, "mouseup", mouseup);
                setTimeout(rehide, 20);
            };
            on(window, "mouseup", mouseup);
        } else {
            setTimeout(rehide, 50);
        }
    }

    function contextMenuInGutter(cm, e) {
        if (!hasHandler(cm, "gutterContextMenu")) return false;
        return gutterEvent(cm, e, "gutterContextMenu", false, signal);
    }

    // UPDATING

    // Compute the position of the end of a change (its 'to' property
    // refers to the pre-change end).
    var changeEnd = CodeMirror.changeEnd = function (change) {
        if (!change.text) return change.to;
        return Pos(change.from.line + change.text.length - 1,
                   lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
    };

    // Adjust a position to refer to the post-change position of the
    // same text, or the end of the change if the change covers it.
    function adjustForChange(pos, change) {
        if (cmp(pos, change.from) < 0) return pos;
        if (cmp(pos, change.to) <= 0) return changeEnd(change);

        var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
        if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
        return Pos(line, ch);
    }

    function computeSelAfterChange(doc, change) {
        var out = [];
        for (var i = 0; i < doc.sel.ranges.length; i++) {
            var range = doc.sel.ranges[i];
            out.push(new Range(adjustForChange(range.anchor, change),
                               adjustForChange(range.head, change)));
        }
        return normalizeSelection(out, doc.sel.primIndex);
    }

    function offsetPos(pos, old, nw) {
        if (pos.line == old.line)
            return Pos(nw.line, pos.ch - old.ch + nw.ch);
        else
            return Pos(nw.line + (pos.line - old.line), pos.ch);
    }

    // Used by replaceSelections to allow moving the selection to the
    // start or around the replaced test. Hint may be "start" or "around".
    function computeReplacedSel(doc, changes, hint) {
        var out = [];
        var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
        for (var i = 0; i < changes.length; i++) {
            var change = changes[i];
            var from = offsetPos(change.from, oldPrev, newPrev);
            var to = offsetPos(changeEnd(change), oldPrev, newPrev);
            oldPrev = change.to;
            newPrev = to;
            if (hint == "around") {
                var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
                out[i] = new Range(inv ? to : from, inv ? from : to);
            } else {
                out[i] = new Range(from, from);
            }
        }
        return new Selection(out, doc.sel.primIndex);
    }

    // Allow "beforeChange" event handlers to influence a change
    function filterChange(doc, change, update) {
        var obj = {
            canceled: false,
            from: change.from,
            to: change.to,
            text: change.text,
            origin: change.origin,
            cancel: function () { this.canceled = true; }
        };
        if (update) obj.update = function (from, to, text, origin) {
            if (from) this.from = clipPos(doc, from);
            if (to) this.to = clipPos(doc, to);
            if (text) this.text = text;
            if (origin !== undefined) this.origin = origin;
        };
        signal(doc, "beforeChange", doc, obj);
        if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

        if (obj.canceled) return null;
        return { from: obj.from, to: obj.to, text: obj.text, origin: obj.origin };
    }

    // Apply a change to a document, and add it to the document's
    // history, and propagating it to all linked documents.
    function makeChange(doc, change, ignoreReadOnly) {
        if (doc.cm) {
            if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
            if (doc.cm.state.suppressEdits) return;
        }

        if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
            change = filterChange(doc, change, true);
            if (!change) return;
        }

        // Possibly split or suppress the update based on the presence
        // of read-only spans in its range.
        var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
        if (split) {
            for (var i = split.length - 1; i >= 0; --i)
                makeChangeInner(doc, { from: split[i].from, to: split[i].to, text: i ? [""] : change.text });
        } else {
            makeChangeInner(doc, change);
        }
    }

    function makeChangeInner(doc, change) {
        if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
        var selAfter = computeSelAfterChange(doc, change);
        addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

        makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
        var rebased = [];

        linkedDocs(doc, function (doc, sharedHist) {
            if (!sharedHist && indexOf(rebased, doc.history) == -1) {
                rebaseHist(doc.history, change);
                rebased.push(doc.history);
            }
            makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
        });
    }

    // Revert a change stored in a document's history.
    function makeChangeFromHistory(doc, type, allowSelectionOnly) {
        if (doc.cm && doc.cm.state.suppressEdits) return;

        var hist = doc.history, event, selAfter = doc.sel;
        var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

        // Verify that there is a useable event (so that ctrl-z won't
        // needlessly clear selection events)
        for (var i = 0; i < source.length; i++) {
            event = source[i];
            if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
                break;
        }
        if (i == source.length) return;
        hist.lastOrigin = hist.lastSelOrigin = null;

        for (; ;) {
            event = source.pop();
            if (event.ranges) {
                pushSelectionToHistory(event, dest);
                if (allowSelectionOnly && !event.equals(doc.sel)) {
                    setSelection(doc, event, { clearRedo: false });
                    return;
                }
                selAfter = event;
            }
            else break;
        }

        // Build up a reverse change object to add to the opposite history
        // stack (redo when undoing, and vice versa).
        var antiChanges = [];
        pushSelectionToHistory(selAfter, dest);
        dest.push({ changes: antiChanges, generation: hist.generation });
        hist.generation = event.generation || ++hist.maxGeneration;

        var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

        for (var i = event.changes.length - 1; i >= 0; --i) {
            var change = event.changes[i];
            change.origin = type;
            if (filter && !filterChange(doc, change, false)) {
                source.length = 0;
                return;
            }

            antiChanges.push(historyChangeFromChange(doc, change));

            var after = i ? computeSelAfterChange(doc, change) : lst(source);
            makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
            if (!i && doc.cm) doc.cm.scrollIntoView({ from: change.from, to: changeEnd(change) });
            var rebased = [];

            // Propagate to the linked documents
            linkedDocs(doc, function (doc, sharedHist) {
                if (!sharedHist && indexOf(rebased, doc.history) == -1) {
                    rebaseHist(doc.history, change);
                    rebased.push(doc.history);
                }
                makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
            });
        }
    }

    // Sub-views need their line numbers shifted when text is added
    // above or below them in the parent document.
    function shiftDoc(doc, distance) {
        if (distance == 0) return;
        doc.first += distance;
        doc.sel = new Selection(map(doc.sel.ranges, function (range) {
            return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
                             Pos(range.head.line + distance, range.head.ch));
        }), doc.sel.primIndex);
        if (doc.cm) {
            regChange(doc.cm, doc.first, doc.first - distance, distance);
            for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
                regLineChange(doc.cm, l, "gutter");
        }
    }

    // More lower-level change function, handling only a single document
    // (not linked ones).
    function makeChangeSingleDoc(doc, change, selAfter, spans) {
        if (doc.cm && !doc.cm.curOp)
            return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

        if (change.to.line < doc.first) {
            shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
            return;
        }
        if (change.from.line > doc.lastLine()) return;

        // Clip the change to the size of this doc
        if (change.from.line < doc.first) {
            var shift = change.text.length - 1 - (doc.first - change.from.line);
            shiftDoc(doc, shift);
            change = {
                from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                text: [lst(change.text)], origin: change.origin
            };
        }
        var last = doc.lastLine();
        if (change.to.line > last) {
            change = {
                from: change.from, to: Pos(last, getLine(doc, last).text.length),
                text: [change.text[0]], origin: change.origin
            };
        }

        change.removed = getBetween(doc, change.from, change.to);

        if (!selAfter) selAfter = computeSelAfterChange(doc, change);
        if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
        else updateDoc(doc, change, spans);
        setSelectionNoUndo(doc, selAfter, sel_dontScroll);
    }

    // Handle the interaction of a change to a document with the editor
    // that this document is part of.
    function makeChangeSingleDocInEditor(cm, change, spans) {
        var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

        var recomputeMaxLength = false, checkWidthStart = from.line;
        if (!cm.options.lineWrapping) {
            checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
            doc.iter(checkWidthStart, to.line + 1, function (line) {
                if (line == display.maxLine) {
                    recomputeMaxLength = true;
                    return true;
                }
            });
        }

        if (doc.sel.contains(change.from, change.to) > -1)
            signalCursorActivity(cm);

        updateDoc(doc, change, spans, estimateHeight(cm));

        if (!cm.options.lineWrapping) {
            doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
                var len = lineLength(line);
                if (len > display.maxLineLength) {
                    display.maxLine = line;
                    display.maxLineLength = len;
                    display.maxLineChanged = true;
                    recomputeMaxLength = false;
                }
            });
            if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
        }

        // Adjust frontier, schedule worker
        doc.frontier = Math.min(doc.frontier, from.line);
        startWorker(cm, 400);

        var lendiff = change.text.length - (to.line - from.line) - 1;
        // Remember that these lines changed, for updating the display
        if (change.full)
            regChange(cm);
        else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
            regLineChange(cm, from.line, "text");
        else
            regChange(cm, from.line, to.line + 1, lendiff);

        var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
        if (changeHandler || changesHandler) {
            var obj = {
                from: from, to: to,
                text: change.text,
                removed: change.removed,
                origin: change.origin
            };
            if (changeHandler) signalLater(cm, "change", cm, obj);
            if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
        }
        cm.display.selForContextMenu = null;
    }

    function replaceRange(doc, code, from, to, origin) {
        if (!to) to = from;
        if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
        if (typeof code == "string") code = splitLines(code);
        makeChange(doc, { from: from, to: to, text: code, origin: origin });
    }

    // SCROLLING THINGS INTO VIEW

    // If an editor sits on the top or bottom of the window, partially
    // scrolled out of view, this ensures that the cursor is visible.
    function maybeScrollWindow(cm, coords) {
        if (signalDOMEvent(cm, "scrollCursorIntoView")) return;

        var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
        if (coords.top + box.top < 0) doScroll = true;
        else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
        if (doScroll != null && !phantom) {
            var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
                                 (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
                                 (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " +
                                 coords.left + "px; width: 2px;");
            cm.display.lineSpace.appendChild(scrollNode);
            scrollNode.scrollIntoView(doScroll);
            cm.display.lineSpace.removeChild(scrollNode);
        }
    }

    // Scroll a given position into view (immediately), verifying that
    // it actually became visible (as line heights are accurately
    // measured, the position of something may 'drift' during drawing).
    function scrollPosIntoView(cm, pos, end, margin) {
        if (margin == null) margin = 0;
        for (var limit = 0; limit < 5; limit++) {
            var changed = false, coords = cursorCoords(cm, pos);
            var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
            var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
                                               Math.min(coords.top, endCoords.top) - margin,
                                               Math.max(coords.left, endCoords.left),
                                               Math.max(coords.bottom, endCoords.bottom) + margin);
            var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
            if (scrollPos.scrollTop != null) {
                setScrollTop(cm, scrollPos.scrollTop);
                if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
            }
            if (scrollPos.scrollLeft != null) {
                setScrollLeft(cm, scrollPos.scrollLeft);
                if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
            }
            if (!changed) break;
        }
        return coords;
    }

    // Scroll a given set of coordinates into view (immediately).
    function scrollIntoView(cm, x1, y1, x2, y2) {
        var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
        if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
        if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
    }

    // Calculate a new scroll position needed to scroll the given
    // rectangle into view. Returns an object with scrollTop and
    // scrollLeft properties. When these are undefined, the
    // vertical/horizontal position does not need to be adjusted.
    function calculateScrollPos(cm, x1, y1, x2, y2) {
        var display = cm.display, snapMargin = textHeight(cm.display);
        if (y1 < 0) y1 = 0;
        var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
        var screen = displayHeight(cm), result = {};
        if (y2 - y1 > screen) y2 = y1 + screen;
        var docBottom = cm.doc.height + paddingVert(display);
        var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
        if (y1 < screentop) {
            result.scrollTop = atTop ? 0 : y1;
        } else if (y2 > screentop + screen) {
            var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
            if (newTop != screentop) result.scrollTop = newTop;
        }

        var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
        var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
        var tooWide = x2 - x1 > screenw;
        if (tooWide) x2 = x1 + screenw;
        if (x1 < 10)
            result.scrollLeft = 0;
        else if (x1 < screenleft)
            result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10));
        else if (x2 > screenw + screenleft - 3)
            result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw;
        return result;
    }

    // Store a relative adjustment to the scroll position in the current
    // operation (to be applied when the operation finishes).
    function addToScrollPos(cm, left, top) {
        if (left != null || top != null) resolveScrollToPos(cm);
        if (left != null)
            cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
        if (top != null)
            cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
    }

    // Make sure that at the end of the operation the current cursor is
    // shown.
    function ensureCursorVisible(cm) {
        resolveScrollToPos(cm);
        var cur = cm.getCursor(), from = cur, to = cur;
        if (!cm.options.lineWrapping) {
            from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
            to = Pos(cur.line, cur.ch + 1);
        }
        cm.curOp.scrollToPos = { from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true };
    }

    // When an operation has its scrollToPos property set, and another
    // scroll action is applied before the end of the operation, this
    // 'simulates' scrolling that position into view in a cheap way, so
    // that the effect of intermediate scroll commands is not ignored.
    function resolveScrollToPos(cm) {
        var range = cm.curOp.scrollToPos;
        if (range) {
            cm.curOp.scrollToPos = null;
            var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
            var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
                                          Math.min(from.top, to.top) - range.margin,
                                          Math.max(from.right, to.right),
                                          Math.max(from.bottom, to.bottom) + range.margin);
            cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
        }
    }

    // API UTILITIES

    // Indent the given line. The how parameter can be "smart",
    // "add"/null, "subtract", or "prev". When aggressive is false
    // (typically set to true for forced single-line indents), empty
    // lines are not indented, and places where the mode returns Pass
    // are left alone.
    function indentLine(cm, n, how, aggressive) {
        var doc = cm.doc, state;
        if (how == null) how = "add";
        if (how == "smart") {
            // Fall back to "prev" when the mode doesn't have an indentation
            // method.
            if (!doc.mode.indent) how = "prev";
            else state = getStateBefore(cm, n);
        }

        var tabSize = cm.options.tabSize;
        var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
        if (line.stateAfter) line.stateAfter = null;
        var curSpaceString = line.text.match(/^\s*/)[0], indentation;
        if (!aggressive && !/\S/.test(line.text)) {
            indentation = 0;
            how = "not";
        } else if (how == "smart") {
            indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
            if (indentation == Pass || indentation > 150) {
                if (!aggressive) return;
                how = "prev";
            }
        }
        if (how == "prev") {
            if (n > doc.first) indentation = countColumn(getLine(doc, n - 1).text, null, tabSize);
            else indentation = 0;
        } else if (how == "add") {
            indentation = curSpace + cm.options.indentUnit;
        } else if (how == "subtract") {
            indentation = curSpace - cm.options.indentUnit;
        } else if (typeof how == "number") {
            indentation = curSpace + how;
        }
        indentation = Math.max(0, indentation);

        var indentString = "", pos = 0;
        if (cm.options.indentWithTabs)
            for (var i = Math.floor(indentation / tabSize) ; i; --i) { pos += tabSize; indentString += "\t"; }
        if (pos < indentation) indentString += spaceStr(indentation - pos);

        if (indentString != curSpaceString) {
            replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
        } else {
            // Ensure that, if the cursor was in the whitespace at the start
            // of the line, it is moved to the end of that space.
            for (var i = 0; i < doc.sel.ranges.length; i++) {
                var range = doc.sel.ranges[i];
                if (range.head.line == n && range.head.ch < curSpaceString.length) {
                    var pos = Pos(n, curSpaceString.length);
                    replaceOneSelection(doc, i, new Range(pos, pos));
                    break;
                }
            }
        }
        line.stateAfter = null;
    }

    // Utility for applying a change to a line by handle or number,
    // returning the number and optionally registering the line as
    // changed.
    function changeLine(doc, handle, changeType, op) {
        var no = handle, line = handle;
        if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
        else no = lineNo(handle);
        if (no == null) return null;
        if (op(line, no) && doc.cm) regLineChange(doc.cm, no, changeType);
        return line;
    }

    // Helper for deleting text near the selection(s), used to implement
    // backspace, delete, and similar functionality.
    function deleteNearSelection(cm, compute) {
        var ranges = cm.doc.sel.ranges, kill = [];
        // Build up a set of ranges to kill first, merging overlapping
        // ranges.
        for (var i = 0; i < ranges.length; i++) {
            var toKill = compute(ranges[i]);
            while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
                var replaced = kill.pop();
                if (cmp(replaced.from, toKill.from) < 0) {
                    toKill.from = replaced.from;
                    break;
                }
            }
            kill.push(toKill);
        }
        // Next, remove those actual ranges.
        runInOp(cm, function () {
            for (var i = kill.length - 1; i >= 0; i--)
                replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
            ensureCursorVisible(cm);
        });
    }

    // Used for horizontal relative motion. Dir is -1 or 1 (left or
    // right), unit can be "char", "column" (like char, but doesn't
    // cross line boundaries), "word" (across next word), or "group" (to
    // the start of next group of word or non-word-non-whitespace
    // chars). The visually param controls whether, in right-to-left
    // text, direction 1 means to move towards the next index in the
    // string, or towards the character to the right of the current
    // position. The resulting position will have a hitSide=true
    // property if it reached the end of the document.
    function findPosH(doc, pos, dir, unit, visually) {
        var line = pos.line, ch = pos.ch, origDir = dir;
        var lineObj = getLine(doc, line);
        var possible = true;
        function findNextLine() {
            var l = line + dir;
            if (l < doc.first || l >= doc.first + doc.size) return (possible = false);
            line = l;
            return lineObj = getLine(doc, l);
        }
        function moveOnce(boundToLine) {
            var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
            if (next == null) {
                if (!boundToLine && findNextLine()) {
                    if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
                    else ch = dir < 0 ? lineObj.text.length : 0;
                } else return (possible = false);
            } else ch = next;
            return true;
        }

        if (unit == "char") moveOnce();
        else if (unit == "column") moveOnce(true);
        else if (unit == "word" || unit == "group") {
            var sawType = null, group = unit == "group";
            var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
            for (var first = true; ; first = false) {
                if (dir < 0 && !moveOnce(!first)) break;
                var cur = lineObj.text.charAt(ch) || "\n";
                var type = isWordChar(cur, helper) ? "w"
                  : group && cur == "\n" ? "n"
                  : !group || /\s/.test(cur) ? null
                  : "p";
                if (group && !first && !type) type = "s";
                if (sawType && sawType != type) {
                    if (dir < 0) { dir = 1; moveOnce(); }
                    break;
                }

                if (type) sawType = type;
                if (dir > 0 && !moveOnce(!first)) break;
            }
        }
        var result = skipAtomic(doc, Pos(line, ch), origDir, true);
        if (!possible) result.hitSide = true;
        return result;
    }

    // For relative vertical movement. Dir may be -1 or 1. Unit can be
    // "page" or "line". The resulting position will have a hitSide=true
    // property if it reached the end of the document.
    function findPosV(cm, pos, dir, unit) {
        var doc = cm.doc, x = pos.left, y;
        if (unit == "page") {
            var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
        } else if (unit == "line") {
            y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
        }
        for (; ;) {
            var target = coordsChar(cm, x, y);
            if (!target.outside) break;
            if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
            y += dir * 5;
        }
        return target;
    }

    // EDITOR METHODS

    // The publicly visible API. Note that methodOp(f) means
    // 'wrap f in an operation, performed on its `this` parameter'.

    // This is not the complete set of editor methods. Most of the
    // methods defined on the Doc type are also injected into
    // CodeMirror.prototype, for backwards compatibility and
    // convenience.

    CodeMirror.prototype = {
        constructor: CodeMirror,
        focus: function () {
            window.focus();
            //focusInput(this); //Commented this because it was causing an issue: https://3dcart.atlassian.net/browse/NEWADMIN-2169
            fastPoll(this);
        },

        setOption: function (option, value) {
            var options = this.options, old = options[option];
            if (options[option] == value && option != "mode") return;
            options[option] = value;
            if (optionHandlers.hasOwnProperty(option))
                operation(this, optionHandlers[option])(this, value, old);
        },

        getOption: function (option) { return this.options[option]; },
        getDoc: function () { return this.doc; },

        addKeyMap: function (map, bottom) {
            this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
        },
        removeKeyMap: function (map) {
            var maps = this.state.keyMaps;
            for (var i = 0; i < maps.length; ++i)
                if (maps[i] == map || maps[i].name == map) {
                    maps.splice(i, 1);
                    return true;
                }
        },

        addOverlay: methodOp(function (spec, options) {
            var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
            if (mode.startState) throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({ mode: mode, modeSpec: spec, opaque: options && options.opaque });
            this.state.modeGen++;
            regChange(this);
        }),
        removeOverlay: methodOp(function (spec) {
            var overlays = this.state.overlays;
            for (var i = 0; i < overlays.length; ++i) {
                var cur = overlays[i].modeSpec;
                if (cur == spec || typeof spec == "string" && cur.name == spec) {
                    overlays.splice(i, 1);
                    this.state.modeGen++;
                    regChange(this);
                    return;
                }
            }
        }),

        indentLine: methodOp(function (n, dir, aggressive) {
            if (typeof dir != "string" && typeof dir != "number") {
                if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
                else dir = dir ? "add" : "subtract";
            }
            if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
        }),
        indentSelection: methodOp(function (how) {
            var ranges = this.doc.sel.ranges, end = -1;
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (!range.empty()) {
                    var from = range.from(), to = range.to();
                    var start = Math.max(end, from.line);
                    end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
                    for (var j = start; j < end; ++j)
                        indentLine(this, j, how);
                    var newRanges = this.doc.sel.ranges;
                    if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
                        replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
                } else if (range.head.line > end) {
                    indentLine(this, range.head.line, how, true);
                    end = range.head.line;
                    if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
                }
            }
        }),

        // Fetch the parser token for a given character. Useful for hacks
        // that want to inspect the mode state (say, for completion).
        getTokenAt: function (pos, precise) {
            return takeToken(this, pos, precise);
        },

        getLineTokens: function (line, precise) {
            return takeToken(this, Pos(line), precise, true);
        },

        getTokenTypeAt: function (pos) {
            pos = clipPos(this.doc, pos);
            var styles = getLineStyles(this, getLine(this.doc, pos.line));
            var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
            var type;
            if (ch == 0) type = styles[2];
            else for (; ;) {
                var mid = (before + after) >> 1;
                if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
                else if (styles[mid * 2 + 1] < ch) before = mid + 1;
                else { type = styles[mid * 2 + 2]; break; }
            }
            var cut = type ? type.indexOf("cm-overlay ") : -1;
            return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
        },

        getModeAt: function (pos) {
            var mode = this.doc.mode;
            if (!mode.innerMode) return mode;
            return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
        },

        getHelper: function (pos, type) {
            return this.getHelpers(pos, type)[0];
        },

        getHelpers: function (pos, type) {
            var found = [];
            if (!helpers.hasOwnProperty(type)) return helpers;
            var help = helpers[type], mode = this.getModeAt(pos);
            if (typeof mode[type] == "string") {
                if (help[mode[type]]) found.push(help[mode[type]]);
            } else if (mode[type]) {
                for (var i = 0; i < mode[type].length; i++) {
                    var val = help[mode[type][i]];
                    if (val) found.push(val);
                }
            } else if (mode.helperType && help[mode.helperType]) {
                found.push(help[mode.helperType]);
            } else if (help[mode.name]) {
                found.push(help[mode.name]);
            }
            for (var i = 0; i < help._global.length; i++) {
                var cur = help._global[i];
                if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
                    found.push(cur.val);
            }
            return found;
        },

        getStateAfter: function (line, precise) {
            var doc = this.doc;
            line = clipLine(doc, line == null ? doc.first + doc.size - 1 : line);
            return getStateBefore(this, line + 1, precise);
        },

        cursorCoords: function (start, mode) {
            var pos, range = this.doc.sel.primary();
            if (start == null) pos = range.head;
            else if (typeof start == "object") pos = clipPos(this.doc, start);
            else pos = start ? range.from() : range.to();
            return cursorCoords(this, pos, mode || "page");
        },

        charCoords: function (pos, mode) {
            return charCoords(this, clipPos(this.doc, pos), mode || "page");
        },

        coordsChar: function (coords, mode) {
            coords = fromCoordSystem(this, coords, mode || "page");
            return coordsChar(this, coords.left, coords.top);
        },

        lineAtHeight: function (height, mode) {
            height = fromCoordSystem(this, { top: height, left: 0 }, mode || "page").top;
            return lineAtHeight(this.doc, height + this.display.viewOffset);
        },
        heightAtLine: function (line, mode) {
            var end = false, last = this.doc.first + this.doc.size - 1;
            if (line < this.doc.first) line = this.doc.first;
            else if (line > last) { line = last; end = true; }
            var lineObj = getLine(this.doc, line);
            return intoCoordSystem(this, lineObj, { top: 0, left: 0 }, mode || "page").top +
              (end ? this.doc.height - heightAtLine(lineObj) : 0);
        },

        defaultTextHeight: function () { return textHeight(this.display); },
        defaultCharWidth: function () { return charWidth(this.display); },

        setGutterMarker: methodOp(function (line, gutterID, value) {
            return changeLine(this.doc, line, "gutter", function (line) {
                var markers = line.gutterMarkers || (line.gutterMarkers = {});
                markers[gutterID] = value;
                if (!value && isEmpty(markers)) line.gutterMarkers = null;
                return true;
            });
        }),

        clearGutter: methodOp(function (gutterID) {
            var cm = this, doc = cm.doc, i = doc.first;
            doc.iter(function (line) {
                if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
                    line.gutterMarkers[gutterID] = null;
                    regLineChange(cm, i, "gutter");
                    if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
                }
                ++i;
            });
        }),

        addLineWidget: methodOp(function (handle, node, options) {
            return addLineWidget(this, handle, node, options);
        }),

        removeLineWidget: function (widget) { widget.clear(); },

        lineInfo: function (line) {
            if (typeof line == "number") {
                if (!isLine(this.doc, line)) return null;
                var n = line;
                line = getLine(this.doc, line);
                if (!line) return null;
            } else {
                var n = lineNo(line);
                if (n == null) return null;
            }
            return {
                line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
                textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
                widgets: line.widgets
            };
        },

        getViewport: function () { return { from: this.display.viewFrom, to: this.display.viewTo }; },

        addWidget: function (pos, node, scroll, vert, horiz) {
            var display = this.display;
            pos = cursorCoords(this, clipPos(this.doc, pos));
            var top = pos.bottom, left = pos.left;
            node.style.position = "absolute";
            node.setAttribute("cm-ignore-events", "true");
            display.sizer.appendChild(node);
            if (vert == "over") {
                top = pos.top;
            } else if (vert == "above" || vert == "near") {
                var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
                hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
                // Default to positioning above (if specified and possible); otherwise default to positioning below
                if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
                    top = pos.top - node.offsetHeight;
                else if (pos.bottom + node.offsetHeight <= vspace)
                    top = pos.bottom;
                if (left + node.offsetWidth > hspace)
                    left = hspace - node.offsetWidth;
            }
            node.style.top = top + "px";
            node.style.left = node.style.right = "";
            if (horiz == "right") {
                left = display.sizer.clientWidth - node.offsetWidth;
                node.style.right = "0px";
            } else {
                if (horiz == "left") left = 0;
                else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
                node.style.left = left + "px";
            }
            if (scroll)
                scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
        },

        triggerOnKeyDown: methodOp(onKeyDown),
        triggerOnKeyPress: methodOp(onKeyPress),
        triggerOnKeyUp: onKeyUp,

        execCommand: function (cmd) {
            if (commands.hasOwnProperty(cmd))
                return commands[cmd](this);
        },

        findPosH: function (from, amount, unit, visually) {
            var dir = 1;
            if (amount < 0) { dir = -1; amount = -amount; }
            for (var i = 0, cur = clipPos(this.doc, from) ; i < amount; ++i) {
                cur = findPosH(this.doc, cur, dir, unit, visually);
                if (cur.hitSide) break;
            }
            return cur;
        },

        moveH: methodOp(function (dir, unit) {
            var cm = this;
            cm.extendSelectionsBy(function (range) {
                if (cm.display.shift || cm.doc.extend || range.empty())
                    return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
                else
                    return dir < 0 ? range.from() : range.to();
            }, sel_move);
        }),

        deleteH: methodOp(function (dir, unit) {
            var sel = this.doc.sel, doc = this.doc;
            if (sel.somethingSelected())
                doc.replaceSelection("", null, "+delete");
            else
                deleteNearSelection(this, function (range) {
                    var other = findPosH(doc, range.head, dir, unit, false);
                    return dir < 0 ? { from: other, to: range.head } : { from: range.head, to: other };
                });
        }),

        findPosV: function (from, amount, unit, goalColumn) {
            var dir = 1, x = goalColumn;
            if (amount < 0) { dir = -1; amount = -amount; }
            for (var i = 0, cur = clipPos(this.doc, from) ; i < amount; ++i) {
                var coords = cursorCoords(this, cur, "div");
                if (x == null) x = coords.left;
                else coords.left = x;
                cur = findPosV(this, coords, dir, unit);
                if (cur.hitSide) break;
            }
            return cur;
        },

        moveV: methodOp(function (dir, unit) {
            var cm = this, doc = this.doc, goals = [];
            var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
            doc.extendSelectionsBy(function (range) {
                if (collapse)
                    return dir < 0 ? range.from() : range.to();
                var headPos = cursorCoords(cm, range.head, "div");
                if (range.goalColumn != null) headPos.left = range.goalColumn;
                goals.push(headPos.left);
                var pos = findPosV(cm, headPos, dir, unit);
                if (unit == "page" && range == doc.sel.primary())
                    addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
                return pos;
            }, sel_move);
            if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
                doc.sel.ranges[i].goalColumn = goals[i];
        }),

        // Find the word at the given position (as returned by coordsChar).
        findWordAt: function (pos) {
            var doc = this.doc, line = getLine(doc, pos.line).text;
            var start = pos.ch, end = pos.ch;
            if (line) {
                var helper = this.getHelper(pos, "wordChars");
                if ((pos.xRel < 0 || end == line.length) && start)--start; else ++end;
                var startChar = line.charAt(start);
                var check = isWordChar(startChar, helper)
                  ? function (ch) { return isWordChar(ch, helper); }
                  : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
                  : function (ch) { return !/\s/.test(ch) && !isWordChar(ch); };
                while (start > 0 && check(line.charAt(start - 1)))--start;
                while (end < line.length && check(line.charAt(end)))++end;
            }
            return new Range(Pos(pos.line, start), Pos(pos.line, end));
        },

        toggleOverwrite: function (value) {
            if (value != null && value == this.state.overwrite) return;
            if (this.state.overwrite = !this.state.overwrite)
                addClass(this.display.cursorDiv, "CodeMirror-overwrite");
            else
                rmClass(this.display.cursorDiv, "CodeMirror-overwrite");

            signal(this, "overwriteToggle", this, this.state.overwrite);
        },
        hasFocus: function () { return activeElt() == this.display.input; },

        scrollTo: methodOp(function (x, y) {
            if (x != null || y != null) resolveScrollToPos(this);
            if (x != null) this.curOp.scrollLeft = x;
            if (y != null) this.curOp.scrollTop = y;
        }),
        getScrollInfo: function () {
            var scroller = this.display.scroller;
            return {
                left: scroller.scrollLeft, top: scroller.scrollTop,
                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this), clientWidth: displayWidth(this)
            };
        },

        scrollIntoView: methodOp(function (range, margin) {
            if (range == null) {
                range = { from: this.doc.sel.primary().head, to: null };
                if (margin == null) margin = this.options.cursorScrollMargin;
            } else if (typeof range == "number") {
                range = { from: Pos(range, 0), to: null };
            } else if (range.from == null) {
                range = { from: range, to: null };
            }
            if (!range.to) range.to = range.from;
            range.margin = margin || 0;

            if (range.from.line != null) {
                resolveScrollToPos(this);
                this.curOp.scrollToPos = range;
            } else {
                var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
                                              Math.min(range.from.top, range.to.top) - range.margin,
                                              Math.max(range.from.right, range.to.right),
                                              Math.max(range.from.bottom, range.to.bottom) + range.margin);
                this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
            }
        }),

        setSize: methodOp(function (width, height) {
            var cm = this;
            function interpret(val) {
                return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
            }
            if (width != null) cm.display.wrapper.style.width = interpret(width);
            if (height != null) cm.display.wrapper.style.height = interpret(height);
            if (cm.options.lineWrapping) clearLineMeasurementCache(this);
            var lineNo = cm.display.viewFrom;
            cm.doc.iter(lineNo, cm.display.viewTo, function (line) {
                if (line.widgets) for (var i = 0; i < line.widgets.length; i++)
                    if (line.widgets[i].noHScroll) { regLineChange(cm, lineNo, "widget"); break; }
                ++lineNo;
            });
            cm.curOp.forceUpdate = true;
            signal(cm, "refresh", this);
        }),

        operation: function (f) { return runInOp(this, f); },

        refresh: methodOp(function () {
            var oldHeight = this.display.cachedTextHeight;
            regChange(this);
            this.curOp.forceUpdate = true;
            clearCaches(this);
            this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
            updateGutterSpace(this);
            if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
                estimateLineHeights(this);
            signal(this, "refresh", this);
        }),

        swapDoc: methodOp(function (doc) {
            var old = this.doc;
            old.cm = null;
            attachDoc(this, doc);
            clearCaches(this);
            resetInput(this);
            this.scrollTo(doc.scrollLeft, doc.scrollTop);
            this.curOp.forceScroll = true;
            signalLater(this, "swapDoc", this, old);
            return old;
        }),

        getInputField: function () { return this.display.input; },
        getWrapperElement: function () { return this.display.wrapper; },
        getScrollerElement: function () { return this.display.scroller; },
        getGutterElement: function () { return this.display.gutters; }
    };
    eventMixin(CodeMirror);

    // OPTION DEFAULTS

    // The default configuration options.
    var defaults = CodeMirror.defaults = {};
    // Functions to run when options are changed.
    var optionHandlers = CodeMirror.optionHandlers = {};

    function option(name, deflt, handle, notOnInit) {
        CodeMirror.defaults[name] = deflt;
        if (handle) optionHandlers[name] =
          notOnInit ? function (cm, val, old) { if (old != Init) handle(cm, val, old); } : handle;
    }

    // Passed to option handlers when there is no old value.
    var Init = CodeMirror.Init = { toString: function () { return "CodeMirror.Init"; } };

    // These two are, on init, called from the constructor because they
    // have to be initialized before the editor can start at all.
    option("value", "", function (cm, val) {
        cm.setValue(val);
    }, true);
    option("mode", null, function (cm, val) {
        cm.doc.modeOption = val;
        loadMode(cm);
    }, true);

    option("indentUnit", 2, loadMode, true);
    option("indentWithTabs", false);
    option("smartIndent", true);
    option("tabSize", 4, function (cm) {
        resetModeState(cm);
        clearCaches(cm);
        regChange(cm);
    }, true);
    option("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val) {
        cm.options.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
        cm.refresh();
    }, true);
    option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { cm.refresh(); }, true);
    option("electricChars", true);
    option("rtlMoveVisually", !windows);
    option("wholeLineUpdateBefore", true);

    option("theme", "default", function (cm) {
        themeChanged(cm);
        guttersChanged(cm);
    }, true);
    option("keyMap", "default", function (cm, val, old) {
        var next = getKeyMap(val);
        var prev = old != CodeMirror.Init && getKeyMap(old);
        if (prev && prev.detach) prev.detach(cm, next);
        if (next.attach) next.attach(cm, prev || null);
    });
    option("extraKeys", null);

    option("lineWrapping", false, wrappingChanged, true);
    option("gutters", [], function (cm) {
        setGuttersForLineNumbers(cm.options);
        guttersChanged(cm);
    }, true);
    option("fixedGutter", true, function (cm, val) {
        cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
        cm.refresh();
    }, true);
    option("coverGutterNextToScrollbar", false, function (cm) { updateScrollbars(cm); }, true);
    option("scrollbarStyle", "native", function (cm) {
        initScrollbars(cm);
        updateScrollbars(cm);
        cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
        cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
    }, true);
    option("lineNumbers", false, function (cm) {
        setGuttersForLineNumbers(cm.options);
        guttersChanged(cm);
    }, true);
    option("firstLineNumber", 1, guttersChanged, true);
    option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true);
    option("showCursorWhenSelecting", false, updateSelection, true);

    option("resetSelectionOnContextMenu", true);

    option("readOnly", false, function (cm, val) {
        if (val == "nocursor") {
            onBlur(cm);
            cm.display.input.blur();
            cm.display.disabled = true;
        } else {
            cm.display.disabled = false;
            if (!val) resetInput(cm);
        }
    });
    option("disableInput", false, function (cm, val) { if (!val) resetInput(cm); }, true);
    option("dragDrop", true);

    option("cursorBlinkRate", 530);
    option("cursorScrollMargin", 0);
    option("cursorHeight", 1, updateSelection, true);
    option("singleCursorHeightPerLine", true, updateSelection, true);
    option("workTime", 100);
    option("workDelay", 100);
    option("flattenSpans", true, resetModeState, true);
    option("addModeClass", false, resetModeState, true);
    option("pollInterval", 100);
    option("undoDepth", 200, function (cm, val) { cm.doc.history.undoDepth = val; });
    option("historyEventDelay", 1250);
    option("viewportMargin", 10, function (cm) { cm.refresh(); }, true);
    option("maxHighlightLength", 10000, resetModeState, true);
    option("moveInputWithCursor", true, function (cm, val) {
        if (!val) cm.display.inputDiv.style.top = cm.display.inputDiv.style.left = 0;
    });

    option("tabindex", null, function (cm, val) {
        cm.display.input.tabIndex = val || "";
    });
    option("autofocus", null);

    // MODE DEFINITION AND QUERYING

    // Known modes, by name and by MIME
    var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

    // Extra arguments are stored as the mode's dependencies, which is
    // used by (legacy) mechanisms like loadmode.js to automatically
    // load a mode. (Preferred mechanism is the require/define calls.)
    CodeMirror.defineMode = function (name, mode) {
        if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
        if (arguments.length > 2)
            mode.dependencies = Array.prototype.slice.call(arguments, 2);
        modes[name] = mode;
    };

    CodeMirror.defineMIME = function (mime, spec) {
        mimeModes[mime] = spec;
    };

    // Given a MIME type, a {name, ...options} config object, or a name
    // string, return a mode config object.
    CodeMirror.resolveMode = function (spec) {
        if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
            spec = mimeModes[spec];
        } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
            var found = mimeModes[spec.name];
            if (typeof found == "string") found = { name: found };
            spec = createObj(found, spec);
            spec.name = found.name;
        } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
            return CodeMirror.resolveMode("application/xml");
        }
        if (typeof spec == "string") return { name: spec };
        else return spec || { name: "null" };
    };

    // Given a mode spec (anything that resolveMode accepts), find and
    // initialize an actual mode object.
    CodeMirror.getMode = function (options, spec) {
        var spec = CodeMirror.resolveMode(spec);
        var mfactory = modes[spec.name];
        if (!mfactory) return CodeMirror.getMode(options, "text/plain");
        var modeObj = mfactory(options, spec);
        if (modeExtensions.hasOwnProperty(spec.name)) {
            var exts = modeExtensions[spec.name];
            for (var prop in exts) {
                if (!exts.hasOwnProperty(prop)) continue;
                if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
                modeObj[prop] = exts[prop];
            }
        }
        modeObj.name = spec.name;
        if (spec.helperType) modeObj.helperType = spec.helperType;
        if (spec.modeProps) for (var prop in spec.modeProps)
            modeObj[prop] = spec.modeProps[prop];

        return modeObj;
    };

    // Minimal default mode.
    CodeMirror.defineMode("null", function () {
        return { token: function (stream) { stream.skipToEnd(); } };
    });
    CodeMirror.defineMIME("text/plain", "null");

    // This can be used to attach properties to mode objects from
    // outside the actual mode definition.
    var modeExtensions = CodeMirror.modeExtensions = {};
    CodeMirror.extendMode = function (mode, properties) {
        var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
        copyObj(properties, exts);
    };

    // EXTENSIONS

    CodeMirror.defineExtension = function (name, func) {
        CodeMirror.prototype[name] = func;
    };
    CodeMirror.defineDocExtension = function (name, func) {
        Doc.prototype[name] = func;
    };
    CodeMirror.defineOption = option;

    var initHooks = [];
    CodeMirror.defineInitHook = function (f) { initHooks.push(f); };

    var helpers = CodeMirror.helpers = {};
    CodeMirror.registerHelper = function (type, name, value) {
        if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = { _global: [] };
        helpers[type][name] = value;
    };
    CodeMirror.registerGlobalHelper = function (type, name, predicate, value) {
        CodeMirror.registerHelper(type, name, value);
        helpers[type]._global.push({ pred: predicate, val: value });
    };

    // MODE STATE HANDLING

    // Utility functions for working with state. Exported because nested
    // modes need to do this for their inner modes.

    var copyState = CodeMirror.copyState = function (mode, state) {
        if (state === true) return state;
        if (mode.copyState) return mode.copyState(state);
        var nstate = {};
        for (var n in state) {
            var val = state[n];
            if (val instanceof Array) val = val.concat([]);
            nstate[n] = val;
        }
        return nstate;
    };

    var startState = CodeMirror.startState = function (mode, a1, a2) {
        return mode.startState ? mode.startState(a1, a2) : true;
    };

    // Given a mode and a state (for that mode), find the inner mode and
    // state at the position that the state refers to.
    CodeMirror.innerMode = function (mode, state) {
        while (mode.innerMode) {
            var info = mode.innerMode(state);
            if (!info || info.mode == mode) break;
            state = info.state;
            mode = info.mode;
        }
        return info || { mode: mode, state: state };
    };

    // STANDARD COMMANDS

    // Commands are parameter-less actions that can be performed on an
    // editor, mostly used for keybindings.
    var commands = CodeMirror.commands = {
        selectAll: function (cm) { cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll); },
        singleSelection: function (cm) {
            cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
        },
        killLine: function (cm) {
            deleteNearSelection(cm, function (range) {
                if (range.empty()) {
                    var len = getLine(cm.doc, range.head.line).text.length;
                    if (range.head.ch == len && range.head.line < cm.lastLine())
                        return { from: range.head, to: Pos(range.head.line + 1, 0) };
                    else
                        return { from: range.head, to: Pos(range.head.line, len) };
                } else {
                    return { from: range.from(), to: range.to() };
                }
            });
        },
        deleteLine: function (cm) {
            deleteNearSelection(cm, function (range) {
                return {
                    from: Pos(range.from().line, 0),
                    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
                };
            });
        },
        delLineLeft: function (cm) {
            deleteNearSelection(cm, function (range) {
                return { from: Pos(range.from().line, 0), to: range.from() };
            });
        },
        delWrappedLineLeft: function (cm) {
            deleteNearSelection(cm, function (range) {
                var top = cm.charCoords(range.head, "div").top + 5;
                var leftPos = cm.coordsChar({ left: 0, top: top }, "div");
                return { from: leftPos, to: range.from() };
            });
        },
        delWrappedLineRight: function (cm) {
            deleteNearSelection(cm, function (range) {
                var top = cm.charCoords(range.head, "div").top + 5;
                var rightPos = cm.coordsChar({ left: cm.display.lineDiv.offsetWidth + 100, top: top }, "div");
                return { from: range.from(), to: rightPos };
            });
        },
        undo: function (cm) { cm.undo(); },
        redo: function (cm) { cm.redo(); },
        undoSelection: function (cm) { cm.undoSelection(); },
        redoSelection: function (cm) { cm.redoSelection(); },
        goDocStart: function (cm) { cm.extendSelection(Pos(cm.firstLine(), 0)); },
        goDocEnd: function (cm) { cm.extendSelection(Pos(cm.lastLine())); },
        goLineStart: function (cm) {
            cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
                                  { origin: "+move", bias: 1 });
        },
        goLineStartSmart: function (cm) {
            cm.extendSelectionsBy(function (range) {
                return lineStartSmart(cm, range.head);
            }, { origin: "+move", bias: 1 });
        },
        goLineEnd: function (cm) {
            cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
                                  { origin: "+move", bias: -1 });
        },
        goLineRight: function (cm) {
            cm.extendSelectionsBy(function (range) {
                var top = cm.charCoords(range.head, "div").top + 5;
                return cm.coordsChar({ left: cm.display.lineDiv.offsetWidth + 100, top: top }, "div");
            }, sel_move);
        },
        goLineLeft: function (cm) {
            cm.extendSelectionsBy(function (range) {
                var top = cm.charCoords(range.head, "div").top + 5;
                return cm.coordsChar({ left: 0, top: top }, "div");
            }, sel_move);
        },
        goLineLeftSmart: function (cm) {
            cm.extendSelectionsBy(function (range) {
                var top = cm.charCoords(range.head, "div").top + 5;
                var pos = cm.coordsChar({ left: 0, top: top }, "div");
                if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head);
                return pos;
            }, sel_move);
        },
        goLineUp: function (cm) { cm.moveV(-1, "line"); },
        goLineDown: function (cm) { cm.moveV(1, "line"); },
        goPageUp: function (cm) { cm.moveV(-1, "page"); },
        goPageDown: function (cm) { cm.moveV(1, "page"); },
        goCharLeft: function (cm) { cm.moveH(-1, "char"); },
        goCharRight: function (cm) { cm.moveH(1, "char"); },
        goColumnLeft: function (cm) { cm.moveH(-1, "column"); },
        goColumnRight: function (cm) { cm.moveH(1, "column"); },
        goWordLeft: function (cm) { cm.moveH(-1, "word"); },
        goGroupRight: function (cm) { cm.moveH(1, "group"); },
        goGroupLeft: function (cm) { cm.moveH(-1, "group"); },
        goWordRight: function (cm) { cm.moveH(1, "word"); },
        delCharBefore: function (cm) { cm.deleteH(-1, "char"); },
        delCharAfter: function (cm) { cm.deleteH(1, "char"); },
        delWordBefore: function (cm) { cm.deleteH(-1, "word"); },
        delWordAfter: function (cm) { cm.deleteH(1, "word"); },
        delGroupBefore: function (cm) { cm.deleteH(-1, "group"); },
        delGroupAfter: function (cm) { cm.deleteH(1, "group"); },
        indentAuto: function (cm) { cm.indentSelection("smart"); },
        indentMore: function (cm) { cm.indentSelection("add"); },
        indentLess: function (cm) { cm.indentSelection("subtract"); },
        insertTab: function (cm) { cm.replaceSelection("\t"); },
        insertSoftTab: function (cm) {
            var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
            for (var i = 0; i < ranges.length; i++) {
                var pos = ranges[i].from();
                var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
                spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
            }
            cm.replaceSelections(spaces);
        },
        defaultTab: function (cm) {
            if (cm.somethingSelected()) cm.indentSelection("add");
            else cm.execCommand("insertTab");
        },
        transposeChars: function (cm) {
            runInOp(cm, function () {
                var ranges = cm.listSelections(), newSel = [];
                for (var i = 0; i < ranges.length; i++) {
                    var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
                    if (line) {
                        if (cur.ch == line.length) cur = new Pos(cur.line, cur.ch - 1);
                        if (cur.ch > 0) {
                            cur = new Pos(cur.line, cur.ch + 1);
                            cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                                            Pos(cur.line, cur.ch - 2), cur, "+transpose");
                        } else if (cur.line > cm.doc.first) {
                            var prev = getLine(cm.doc, cur.line - 1).text;
                            if (prev)
                                cm.replaceRange(line.charAt(0) + "\n" + prev.charAt(prev.length - 1),
                                                Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
                        }
                    }
                    newSel.push(new Range(cur, cur));
                }
                cm.setSelections(newSel);
            });
        },
        newlineAndIndent: function (cm) {
            runInOp(cm, function () {
                var len = cm.listSelections().length;
                for (var i = 0; i < len; i++) {
                    var range = cm.listSelections()[i];
                    cm.replaceRange("\n", range.anchor, range.head, "+input");
                    cm.indentLine(range.from().line + 1, null, true);
                    ensureCursorVisible(cm);
                }
            });
        },
        toggleOverwrite: function (cm) { cm.toggleOverwrite(); }
    };


    // STANDARD KEYMAPS

    var keyMap = CodeMirror.keyMap = {};

    keyMap.basic = {
        "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
        "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
        "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
        "Tab": "defaultTab", "Shift-Tab": "indentAuto",
        "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
        "Esc": "singleSelection"
    };
    // Note that the save and find-related commands aren't defined by
    // default. User code or addons can define them. Unknown commands
    // are simply ignored.
    keyMap.pcDefault = {
        "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
        "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
        fallthrough: "basic"
    };
    // Very basic readline/emacs-style bindings, which are standard on Mac.
    keyMap.emacsy = {
        "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
    };
    keyMap.macDefault = {
        "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
        "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
    };
    keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

    // KEYMAP DISPATCH

    function normalizeKeyName(name) {
        var parts = name.split(/-(?!$)/), name = parts[parts.length - 1];
        var alt, ctrl, shift, cmd;
        for (var i = 0; i < parts.length - 1; i++) {
            var mod = parts[i];
            if (/^(cmd|meta|m)$/i.test(mod)) cmd = true;
            else if (/^a(lt)?$/i.test(mod)) alt = true;
            else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
            else if (/^s(hift)$/i.test(mod)) shift = true;
            else throw new Error("Unrecognized modifier name: " + mod);
        }
        if (alt) name = "Alt-" + name;
        if (ctrl) name = "Ctrl-" + name;
        if (cmd) name = "Cmd-" + name;
        if (shift) name = "Shift-" + name;
        return name;
    }

    // This is a kludge to keep keymaps mostly working as raw objects
    // (backwards compatibility) while at the same time support features
    // like normalization and multi-stroke key bindings. It compiles a
    // new normalized keymap, and then updates the old object to reflect
    // this.
    CodeMirror.normalizeKeyMap = function (keymap) {
        var copy = {};
        for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
            var value = keymap[keyname];
            if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
            if (value == "...") { delete keymap[keyname]; continue; }

            var keys = map(keyname.split(" "), normalizeKeyName);
            for (var i = 0; i < keys.length; i++) {
                var val, name;
                if (i == keys.length - 1) {
                    name = keyname;
                    val = value;
                } else {
                    name = keys.slice(0, i + 1).join(" ");
                    val = "...";
                }
                var prev = copy[name];
                if (!prev) copy[name] = val;
                else if (prev != val) throw new Error("Inconsistent bindings for " + name);
            }
            delete keymap[keyname];
        }
        for (var prop in copy) keymap[prop] = copy[prop];
        return keymap;
    };

    var lookupKey = CodeMirror.lookupKey = function (key, map, handle, context) {
        map = getKeyMap(map);
        var found = map.call ? map.call(key, context) : map[key];
        if (found === false) return "nothing";
        if (found === "...") return "multi";
        if (found != null && handle(found)) return "handled";

        if (map.fallthrough) {
            if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
                return lookupKey(key, map.fallthrough, handle, context);
            for (var i = 0; i < map.fallthrough.length; i++) {
                var result = lookupKey(key, map.fallthrough[i], handle, context);
                if (result) return result;
            }
        }
    };

    // Modifier key presses don't count as 'real' key presses for the
    // purpose of keymap fallthrough.
    var isModifierKey = CodeMirror.isModifierKey = function (value) {
        var name = typeof value == "string" ? value : keyNames[value.keyCode];
        return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
    };

    // Look up the name of a key as indicated by an event object.
    var keyName = CodeMirror.keyName = function (event, noShift) {
        if (presto && event.keyCode == 34 && event["char"]) return false;
        var base = keyNames[event.keyCode], name = base;
        if (name == null || event.altGraphKey) return false;
        if (event.altKey && base != "Alt") name = "Alt-" + name;
        if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name;
        if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name;
        if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name;
        return name;
    };

    function getKeyMap(val) {
        return typeof val == "string" ? keyMap[val] : val;
    }

    // FROMTEXTAREA

    CodeMirror.fromTextArea = function (textarea, options) {
        options = options ? copyObj(options) : {};
        options.value = textarea.value;
        if (!options.tabindex && textarea.tabindex)
            options.tabindex = textarea.tabindex;
        if (!options.placeholder && textarea.placeholder)
            options.placeholder = textarea.placeholder;
        // Set autofocus to true if this textarea is focused, or if it has
        // autofocus and no other element is focused.
        if (options.autofocus == null) {
            var hasFocus = activeElt();
            options.autofocus = hasFocus == textarea ||
              textarea.getAttribute("autofocus") != null && hasFocus == document.body;
        }

        function save() { textarea.value = cm.getValue(); }
        if (textarea.form) {
            on(textarea.form, "submit", save);
            // Deplorable hack to make the submit method do the right thing.
            if (!options.leaveSubmitMethodAlone) {
                var form = textarea.form, realSubmit = form.submit;
                try {
                    var wrappedSubmit = form.submit = function () {
                        save();
                        form.submit = realSubmit;
                        form.submit();
                        form.submit = wrappedSubmit;
                    };
                } catch (e) { }
            }
        }

        options.finishInit = function (cm) {
            cm.save = save;
            cm.getTextArea = function () { return textarea; };
            cm.toTextArea = function () {
                cm.toTextArea = isNaN; // Prevent this from being ran twice
                save();
                textarea.parentNode.removeChild(cm.getWrapperElement());
                textarea.style.display = "";
                if (textarea.form) {
                    off(textarea.form, "submit", save);
                    if (typeof textarea.form.submit == "function")
                        textarea.form.submit = realSubmit;
                }
            };
        };

        textarea.style.display = "none";
        var cm = CodeMirror(function (node) {
            textarea.parentNode.insertBefore(node, textarea.nextSibling);
        }, options);
        return cm;
    };

    // STRING STREAM

    // Fed to the mode parsers, provides helper functions to make
    // parsers more succinct.

    var StringStream = CodeMirror.StringStream = function (string, tabSize) {
        this.pos = this.start = 0;
        this.string = string;
        this.tabSize = tabSize || 8;
        this.lastColumnPos = this.lastColumnValue = 0;
        this.lineStart = 0;
    };

    StringStream.prototype = {
        eol: function () { return this.pos >= this.string.length; },
        sol: function () { return this.pos == this.lineStart; },
        peek: function () { return this.string.charAt(this.pos) || undefined; },
        next: function () {
            if (this.pos < this.string.length)
                return this.string.charAt(this.pos++);
        },
        eat: function (match) {
            var ch = this.string.charAt(this.pos);
            if (typeof match == "string") var ok = ch == match;
            else var ok = ch && (match.test ? match.test(ch) : match(ch));
            if (ok) { ++this.pos; return ch; }
        },
        eatWhile: function (match) {
            var start = this.pos;
            while (this.eat(match)) { }
            return this.pos > start;
        },
        eatSpace: function () {
            var start = this.pos;
            while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;
            return this.pos > start;
        },
        skipToEnd: function () { this.pos = this.string.length; },
        skipTo: function (ch) {
            var found = this.string.indexOf(ch, this.pos);
            if (found > -1) { this.pos = found; return true; }
        },
        backUp: function (n) { this.pos -= n; },
        column: function () {
            if (this.lastColumnPos < this.start) {
                this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
                this.lastColumnPos = this.start;
            }
            return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        },
        indentation: function () {
            return countColumn(this.string, null, this.tabSize) -
              (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        },
        match: function (pattern, consume, caseInsensitive) {
            if (typeof pattern == "string") {
                var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
                var substr = this.string.substr(this.pos, pattern.length);
                if (cased(substr) == cased(pattern)) {
                    if (consume !== false) this.pos += pattern.length;
                    return true;
                }
            } else {
                var match = this.string.slice(this.pos).match(pattern);
                if (match && match.index > 0) return null;
                if (match && consume !== false) this.pos += match[0].length;
                return match;
            }
        },
        current: function () { return this.string.slice(this.start, this.pos); },
        hideFirstChars: function (n, inner) {
            this.lineStart += n;
            try { return inner(); }
            finally { this.lineStart -= n; }
        }
    };

    // TEXTMARKERS

    // Created with markText and setBookmark methods. A TextMarker is a
    // handle that can be used to clear or find a marked position in the
    // document. Line objects hold arrays (markedSpans) containing
    // {from, to, marker} object pointing to such marker objects, and
    // indicating that such a marker is present on that line. Multiple
    // lines may point to the same marker when it spans across lines.
    // The spans will have null for their from/to properties when the
    // marker continues beyond the start/end of the line. Markers have
    // links back to the lines they currently touch.

    var TextMarker = CodeMirror.TextMarker = function (doc, type) {
        this.lines = [];
        this.type = type;
        this.doc = doc;
    };
    eventMixin(TextMarker);

    // Clear the marker.
    TextMarker.prototype.clear = function () {
        if (this.explicitlyCleared) return;
        var cm = this.doc.cm, withOp = cm && !cm.curOp;
        if (withOp) startOperation(cm);
        if (hasHandler(this, "clear")) {
            var found = this.find();
            if (found) signalLater(this, "clear", found.from, found.to);
        }
        var min = null, max = null;
        for (var i = 0; i < this.lines.length; ++i) {
            var line = this.lines[i];
            var span = getMarkedSpanFor(line.markedSpans, this);
            if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
            else if (cm) {
                if (span.to != null) max = lineNo(line);
                if (span.from != null) min = lineNo(line);
            }
            line.markedSpans = removeMarkedSpan(line.markedSpans, span);
            if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
                updateLineHeight(line, textHeight(cm.display));
        }
        if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
            var visual = visualLine(this.lines[i]), len = lineLength(visual);
            if (len > cm.display.maxLineLength) {
                cm.display.maxLine = visual;
                cm.display.maxLineLength = len;
                cm.display.maxLineChanged = true;
            }
        }

        if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
        this.lines.length = 0;
        this.explicitlyCleared = true;
        if (this.atomic && this.doc.cantEdit) {
            this.doc.cantEdit = false;
            if (cm) reCheckSelection(cm.doc);
        }
        if (cm) signalLater(cm, "markerCleared", cm, this);
        if (withOp) endOperation(cm);
        if (this.parent) this.parent.clear();
    };

    // Find the position of the marker in the document. Returns a {from,
    // to} object by default. Side can be passed to get a specific side
    // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
    // Pos objects returned contain a line object, rather than a line
    // number (used to prevent looking up the same line twice).
    TextMarker.prototype.find = function (side, lineObj) {
        if (side == null && this.type == "bookmark") side = 1;
        var from, to;
        for (var i = 0; i < this.lines.length; ++i) {
            var line = this.lines[i];
            var span = getMarkedSpanFor(line.markedSpans, this);
            if (span.from != null) {
                from = Pos(lineObj ? line : lineNo(line), span.from);
                if (side == -1) return from;
            }
            if (span.to != null) {
                to = Pos(lineObj ? line : lineNo(line), span.to);
                if (side == 1) return to;
            }
        }
        return from && { from: from, to: to };
    };

    // Signals that the marker's widget changed, and surrounding layout
    // should be recomputed.
    TextMarker.prototype.changed = function () {
        var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
        if (!pos || !cm) return;
        runInOp(cm, function () {
            var line = pos.line, lineN = lineNo(pos.line);
            var view = findViewForLine(cm, lineN);
            if (view) {
                clearLineMeasurementCacheFor(view);
                cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
            }
            cm.curOp.updateMaxLine = true;
            if (!lineIsHidden(widget.doc, line) && widget.height != null) {
                var oldHeight = widget.height;
                widget.height = null;
                var dHeight = widgetHeight(widget) - oldHeight;
                if (dHeight)
                    updateLineHeight(line, line.height + dHeight);
            }
        });
    };

    TextMarker.prototype.attachLine = function (line) {
        if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
                (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(line);
    };
    TextMarker.prototype.detachLine = function (line) {
        this.lines.splice(indexOf(this.lines, line), 1);
        if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
        }
    };

    // Collapsed markers have unique ids, in order to be able to order
    // them, which is needed for uniquely determining an outer marker
    // when they overlap (they may nest, but not partially overlap).
    var nextMarkerId = 0;

    // Create a marker, wire it up to the right lines, and
    function markText(doc, from, to, options, type) {
        // Shared markers (across linked documents) are handled separately
        // (markTextShared will call out to this again, once per
        // document).
        if (options && options.shared) return markTextShared(doc, from, to, options, type);
        // Ensure we are in an operation.
        if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

        var marker = new TextMarker(doc, type), diff = cmp(from, to);
        if (options) copyObj(options, marker, false);
        // Don't connect empty markers unless clearWhenEmpty is false
        if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
            return marker;
        if (marker.replacedWith) {
            // Showing up as a widget implies collapsed (widget replaces text)
            marker.collapsed = true;
            marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
            if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true");
            if (options.insertLeft) marker.widgetNode.insertLeft = true;
        }
        if (marker.collapsed) {
            if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
                from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
                throw new Error("Inserting collapsed marker partially overlapping an existing one");
            sawCollapsedSpans = true;
        }

        if (marker.addToHistory)
            addChangeToHistory(doc, { from: from, to: to, origin: "markText" }, doc.sel, NaN);

        var curLine = from.line, cm = doc.cm, updateMaxLine;
        doc.iter(curLine, to.line + 1, function (line) {
            if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
                updateMaxLine = true;
            if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
            addMarkedSpan(line, new MarkedSpan(marker,
                                               curLine == from.line ? from.ch : null,
                                               curLine == to.line ? to.ch : null));
            ++curLine;
        });
        // lineIsHidden depends on the presence of the spans, so needs a second pass
        if (marker.collapsed) doc.iter(from.line, to.line + 1, function (line) {
            if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
        });

        if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function () { marker.clear(); });

        if (marker.readOnly) {
            sawReadOnlySpans = true;
            if (doc.history.done.length || doc.history.undone.length)
                doc.clearHistory();
        }
        if (marker.collapsed) {
            marker.id = ++nextMarkerId;
            marker.atomic = true;
        }
        if (cm) {
            // Sync editor state
            if (updateMaxLine) cm.curOp.updateMaxLine = true;
            if (marker.collapsed)
                regChange(cm, from.line, to.line + 1);
            else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
                for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
            if (marker.atomic) reCheckSelection(cm.doc);
            signalLater(cm, "markerAdded", cm, marker);
        }
        return marker;
    }

    // SHARED TEXTMARKERS

    // A shared marker spans multiple linked documents. It is
    // implemented as a meta-marker-object controlling multiple normal
    // markers.
    var SharedTextMarker = CodeMirror.SharedTextMarker = function (markers, primary) {
        this.markers = markers;
        this.primary = primary;
        for (var i = 0; i < markers.length; ++i)
            markers[i].parent = this;
    };
    eventMixin(SharedTextMarker);

    SharedTextMarker.prototype.clear = function () {
        if (this.explicitlyCleared) return;
        this.explicitlyCleared = true;
        for (var i = 0; i < this.markers.length; ++i)
            this.markers[i].clear();
        signalLater(this, "clear");
    };
    SharedTextMarker.prototype.find = function (side, lineObj) {
        return this.primary.find(side, lineObj);
    };

    function markTextShared(doc, from, to, options, type) {
        options = copyObj(options);
        options.shared = false;
        var markers = [markText(doc, from, to, options, type)], primary = markers[0];
        var widget = options.widgetNode;
        linkedDocs(doc, function (doc) {
            if (widget) options.widgetNode = widget.cloneNode(true);
            markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
            for (var i = 0; i < doc.linked.length; ++i)
                if (doc.linked[i].isParent) return;
            primary = lst(markers);
        });
        return new SharedTextMarker(markers, primary);
    }

    function findSharedMarkers(doc) {
        return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
                             function (m) { return m.parent; });
    }

    function copySharedMarkers(doc, markers) {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i], pos = marker.find();
            var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
            if (cmp(mFrom, mTo)) {
                var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
                marker.markers.push(subMark);
                subMark.parent = marker;
            }
        }
    }

    function detachSharedMarkers(markers) {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i], linked = [marker.primary.doc];;
            linkedDocs(marker.primary.doc, function (d) { linked.push(d); });
            for (var j = 0; j < marker.markers.length; j++) {
                var subMarker = marker.markers[j];
                if (indexOf(linked, subMarker.doc) == -1) {
                    subMarker.parent = null;
                    marker.markers.splice(j--, 1);
                }
            }
        }
    }

    // TEXTMARKER SPANS

    function MarkedSpan(marker, from, to) {
        this.marker = marker;
        this.from = from; this.to = to;
    }

    // Search an array of spans for a span matching the given marker.
    function getMarkedSpanFor(spans, marker) {
        if (spans) for (var i = 0; i < spans.length; ++i) {
            var span = spans[i];
            if (span.marker == marker) return span;
        }
    }
    // Remove a span from an array, returning undefined if no spans are
    // left (we don't store arrays for lines without spans).
    function removeMarkedSpan(spans, span) {
        for (var r, i = 0; i < spans.length; ++i)
            if (spans[i] != span) (r || (r = [])).push(spans[i]);
        return r;
    }
    // Add a span to a line.
    function addMarkedSpan(line, span) {
        line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
        span.marker.attachLine(line);
    }

    // Used for the algorithm that adjusts markers for a change in the
    // document. These functions cut an array of spans at a given
    // character position, returning an array of remaining chunks (or
    // undefined if nothing remains).
    function markedSpansBefore(old, startCh, isInsert) {
        if (old) for (var i = 0, nw; i < old.length; ++i) {
            var span = old[i], marker = span.marker;
            var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
            if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
                var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
                (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
            }
        }
        return nw;
    }
    function markedSpansAfter(old, endCh, isInsert) {
        if (old) for (var i = 0, nw; i < old.length; ++i) {
            var span = old[i], marker = span.marker;
            var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
            if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
                var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
                (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                                      span.to == null ? null : span.to - endCh));
            }
        }
        return nw;
    }

    // Given a change object, compute the new set of marker spans that
    // cover the line in which the change took place. Removes spans
    // entirely within the change, reconnects spans belonging to the
    // same marker that appear on both sides of the change, and cuts off
    // spans partially within the change. Returns an array of span
    // arrays with one element for each line in (after) the change.
    function stretchSpansOverChange(doc, change) {
        if (change.full) return null;
        var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
        var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
        if (!oldFirst && !oldLast) return null;

        var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
        // Get the spans that 'stick out' on both sides
        var first = markedSpansBefore(oldFirst, startCh, isInsert);
        var last = markedSpansAfter(oldLast, endCh, isInsert);

        // Next, merge those two ends
        var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
        if (first) {
            // Fix up .to properties of first
            for (var i = 0; i < first.length; ++i) {
                var span = first[i];
                if (span.to == null) {
                    var found = getMarkedSpanFor(last, span.marker);
                    if (!found) span.to = startCh;
                    else if (sameLine) span.to = found.to == null ? null : found.to + offset;
                }
            }
        }
        if (last) {
            // Fix up .from in last (or move them into first in case of sameLine)
            for (var i = 0; i < last.length; ++i) {
                var span = last[i];
                if (span.to != null) span.to += offset;
                if (span.from == null) {
                    var found = getMarkedSpanFor(first, span.marker);
                    if (!found) {
                        span.from = offset;
                        if (sameLine) (first || (first = [])).push(span);
                    }
                } else {
                    span.from += offset;
                    if (sameLine) (first || (first = [])).push(span);
                }
            }
        }
        // Make sure we didn't create any zero-length spans
        if (first) first = clearEmptySpans(first);
        if (last && last != first) last = clearEmptySpans(last);

        var newMarkers = [first];
        if (!sameLine) {
            // Fill gap with whole-line-spans
            var gap = change.text.length - 2, gapMarkers;
            if (gap > 0 && first)
                for (var i = 0; i < first.length; ++i)
                    if (first[i].to == null)
                        (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
            for (var i = 0; i < gap; ++i)
                newMarkers.push(gapMarkers);
            newMarkers.push(last);
        }
        return newMarkers;
    }

    // Remove spans that are empty and don't have a clearWhenEmpty
    // option of false.
    function clearEmptySpans(spans) {
        for (var i = 0; i < spans.length; ++i) {
            var span = spans[i];
            if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
                spans.splice(i--, 1);
        }
        if (!spans.length) return null;
        return spans;
    }

    // Used for un/re-doing changes from the history. Combines the
    // result of computing the existing spans with the set of spans that
    // existed in the history (so that deleting around a span and then
    // undoing brings back the span).
    function mergeOldSpans(doc, change) {
        var old = getOldSpans(doc, change);
        var stretched = stretchSpansOverChange(doc, change);
        if (!old) return stretched;
        if (!stretched) return old;

        for (var i = 0; i < old.length; ++i) {
            var oldCur = old[i], stretchCur = stretched[i];
            if (oldCur && stretchCur) {
                spans: for (var j = 0; j < stretchCur.length; ++j) {
                    var span = stretchCur[j];
                    for (var k = 0; k < oldCur.length; ++k)
                        if (oldCur[k].marker == span.marker) continue spans;
                    oldCur.push(span);
                }
            } else if (stretchCur) {
                old[i] = stretchCur;
            }
        }
        return old;
    }

    // Used to 'clip' out readOnly ranges when making a change.
    function removeReadOnlyRanges(doc, from, to) {
        var markers = null;
        doc.iter(from.line, to.line + 1, function (line) {
            if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
                var mark = line.markedSpans[i].marker;
                if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
                    (markers || (markers = [])).push(mark);
            }
        });
        if (!markers) return null;
        var parts = [{ from: from, to: to }];
        for (var i = 0; i < markers.length; ++i) {
            var mk = markers[i], m = mk.find(0);
            for (var j = 0; j < parts.length; ++j) {
                var p = parts[j];
                if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
                var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
                if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
                    newParts.push({ from: p.from, to: m.from });
                if (dto > 0 || !mk.inclusiveRight && !dto)
                    newParts.push({ from: m.to, to: p.to });
                parts.splice.apply(parts, newParts);
                j += newParts.length - 1;
            }
        }
        return parts;
    }

    // Connect or disconnect spans from a line.
    function detachMarkedSpans(line) {
        var spans = line.markedSpans;
        if (!spans) return;
        for (var i = 0; i < spans.length; ++i)
            spans[i].marker.detachLine(line);
        line.markedSpans = null;
    }
    function attachMarkedSpans(line, spans) {
        if (!spans) return;
        for (var i = 0; i < spans.length; ++i)
            spans[i].marker.attachLine(line);
        line.markedSpans = spans;
    }

    // Helpers used when computing which overlapping collapsed span
    // counts as the larger one.
    function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
    function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }

    // Returns a number indicating which of two overlapping collapsed
    // spans is larger (and thus includes the other). Falls back to
    // comparing ids when the spans cover exactly the same range.
    function compareCollapsedMarkers(a, b) {
        var lenDiff = a.lines.length - b.lines.length;
        if (lenDiff != 0) return lenDiff;
        var aPos = a.find(), bPos = b.find();
        var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
        if (fromCmp) return -fromCmp;
        var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
        if (toCmp) return toCmp;
        return b.id - a.id;
    }

    // Find out whether a line ends or starts in a collapsed span. If
    // so, return the marker for that span.
    function collapsedSpanAtSide(line, start) {
        var sps = sawCollapsedSpans && line.markedSpans, found;
        if (sps) for (var sp, i = 0; i < sps.length; ++i) {
            sp = sps[i];
            if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
                (!found || compareCollapsedMarkers(found, sp.marker) < 0))
                found = sp.marker;
        }
        return found;
    }
    function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
    function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }

    // Test whether there exists a collapsed span that partially
    // overlaps (covers the start or end, but not both) of a new span.
    // Such overlap is not allowed.
    function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
        var line = getLine(doc, lineNo);
        var sps = sawCollapsedSpans && line.markedSpans;
        if (sps) for (var i = 0; i < sps.length; ++i) {
            var sp = sps[i];
            if (!sp.marker.collapsed) continue;
            var found = sp.marker.find(0);
            var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
            var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
            if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
            if (fromCmp <= 0 && (cmp(found.to, from) > 0 || (sp.marker.inclusiveRight && marker.inclusiveLeft)) ||
                fromCmp >= 0 && (cmp(found.from, to) < 0 || (sp.marker.inclusiveLeft && marker.inclusiveRight)))
                return true;
        }
    }

    // A visual line is a line as drawn on the screen. Folding, for
    // example, can cause multiple logical lines to appear on the same
    // visual line. This finds the start of the visual line that the
    // given line is part of (usually that is the line itself).
    function visualLine(line) {
        var merged;
        while (merged = collapsedSpanAtStart(line))
            line = merged.find(-1, true).line;
        return line;
    }

    // Returns an array of logical lines that continue the visual line
    // started by the argument, or undefined if there are no such lines.
    function visualLineContinued(line) {
        var merged, lines;
        while (merged = collapsedSpanAtEnd(line)) {
            line = merged.find(1, true).line;
            (lines || (lines = [])).push(line);
        }
        return lines;
    }

    // Get the line number of the start of the visual line that the
    // given line number is part of.
    function visualLineNo(doc, lineN) {
        var line = getLine(doc, lineN), vis = visualLine(line);
        if (line == vis) return lineN;
        return lineNo(vis);
    }
    // Get the line number of the start of the next visual line after
    // the given line.
    function visualLineEndNo(doc, lineN) {
        if (lineN > doc.lastLine()) return lineN;
        var line = getLine(doc, lineN), merged;
        if (!lineIsHidden(doc, line)) return lineN;
        while (merged = collapsedSpanAtEnd(line))
            line = merged.find(1, true).line;
        return lineNo(line) + 1;
    }

    // Compute whether a line is hidden. Lines count as hidden when they
    // are part of a visual line that starts with another line, or when
    // they are entirely covered by collapsed, non-widget span.
    function lineIsHidden(doc, line) {
        var sps = sawCollapsedSpans && line.markedSpans;
        if (sps) for (var sp, i = 0; i < sps.length; ++i) {
            sp = sps[i];
            if (!sp.marker.collapsed) continue;
            if (sp.from == null) return true;
            if (sp.marker.widgetNode) continue;
            if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
                return true;
        }
    }
    function lineIsHiddenInner(doc, line, span) {
        if (span.to == null) {
            var end = span.marker.find(1, true);
            return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
        }
        if (span.marker.inclusiveRight && span.to == line.text.length)
            return true;
        for (var sp, i = 0; i < line.markedSpans.length; ++i) {
            sp = line.markedSpans[i];
            if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
                (sp.to == null || sp.to != span.from) &&
                (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
                lineIsHiddenInner(doc, line, sp)) return true;
        }
    }

    // LINE WIDGETS

    // Line widgets are block elements displayed above or below a line.

    var LineWidget = CodeMirror.LineWidget = function (cm, node, options) {
        if (options) for (var opt in options) if (options.hasOwnProperty(opt))
            this[opt] = options[opt];
        this.cm = cm;
        this.node = node;
    };
    eventMixin(LineWidget);

    function adjustScrollWhenAboveVisible(cm, line, diff) {
        if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
            addToScrollPos(cm, null, diff);
    }

    LineWidget.prototype.clear = function () {
        var cm = this.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
        if (no == null || !ws) return;
        for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
        if (!ws.length) line.widgets = null;
        var height = widgetHeight(this);
        runInOp(cm, function () {
            adjustScrollWhenAboveVisible(cm, line, -height);
            regLineChange(cm, no, "widget");
            updateLineHeight(line, Math.max(0, line.height - height));
        });
    };
    LineWidget.prototype.changed = function () {
        var oldH = this.height, cm = this.cm, line = this.line;
        this.height = null;
        var diff = widgetHeight(this) - oldH;
        if (!diff) return;
        runInOp(cm, function () {
            cm.curOp.forceUpdate = true;
            adjustScrollWhenAboveVisible(cm, line, diff);
            updateLineHeight(line, line.height + diff);
        });
    };

    function widgetHeight(widget) {
        if (widget.height != null) return widget.height;
        if (!contains(document.body, widget.node)) {
            var parentStyle = "position: relative;";
            if (widget.coverGutter)
                parentStyle += "margin-left: -" + widget.cm.display.gutters.offsetWidth + "px;";
            if (widget.noHScroll)
                parentStyle += "width: " + widget.cm.display.wrapper.clientWidth + "px;";
            removeChildrenAndAdd(widget.cm.display.measure, elt("div", [widget.node], null, parentStyle));
        }
        return widget.height = widget.node.offsetHeight;
    }

    function addLineWidget(cm, handle, node, options) {
        var widget = new LineWidget(cm, node, options);
        if (widget.noHScroll) cm.display.alignWidgets = true;
        changeLine(cm.doc, handle, "widget", function (line) {
            var widgets = line.widgets || (line.widgets = []);
            if (widget.insertAt == null) widgets.push(widget);
            else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
            widget.line = line;
            if (!lineIsHidden(cm.doc, line)) {
                var aboveVisible = heightAtLine(line) < cm.doc.scrollTop;
                updateLineHeight(line, line.height + widgetHeight(widget));
                if (aboveVisible) addToScrollPos(cm, null, widget.height);
                cm.curOp.forceUpdate = true;
            }
            return true;
        });
        return widget;
    }

    // LINE DATA STRUCTURE

    // Line objects. These hold state related to a line, including
    // highlighting info (the styles array).
    var Line = CodeMirror.Line = function (text, markedSpans, estimateHeight) {
        this.text = text;
        attachMarkedSpans(this, markedSpans);
        this.height = estimateHeight ? estimateHeight(this) : 1;
    };
    eventMixin(Line);
    Line.prototype.lineNo = function () { return lineNo(this); };

    // Change the content (text, markers) of a line. Automatically
    // invalidates cached information and tries to re-estimate the
    // line's height.
    function updateLine(line, text, markedSpans, estimateHeight) {
        line.text = text;
        if (line.stateAfter) line.stateAfter = null;
        if (line.styles) line.styles = null;
        if (line.order != null) line.order = null;
        detachMarkedSpans(line);
        attachMarkedSpans(line, markedSpans);
        var estHeight = estimateHeight ? estimateHeight(line) : 1;
        if (estHeight != line.height) updateLineHeight(line, estHeight);
    }

    // Detach a line from the document tree and its markers.
    function cleanUpLine(line) {
        line.parent = null;
        detachMarkedSpans(line);
    }

    function extractLineClasses(type, output) {
        if (type) for (; ;) {
            var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!lineClass) break;
            type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
            var prop = lineClass[1] ? "bgClass" : "textClass";
            if (output[prop] == null)
                output[prop] = lineClass[2];
            else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
                output[prop] += " " + lineClass[2];
        }
        return type;
    }

    function callBlankLine(mode, state) {
        if (mode.blankLine) return mode.blankLine(state);
        if (!mode.innerMode) return;
        var inner = CodeMirror.innerMode(mode, state);
        if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
    }

    function readToken(mode, stream, state, inner) {
        for (var i = 0; i < 10; i++) {
            if (inner) inner[0] = CodeMirror.innerMode(mode, state).mode;
            var style = mode.token(stream, state);
            if (stream.pos > stream.start) return style;
        }
        throw new Error("Mode " + mode.name + " failed to advance stream.");
    }

    // Utility for getTokenAt and getLineTokens
    function takeToken(cm, pos, precise, asArray) {
        function getObj(copy) {
            return {
                start: stream.start, end: stream.pos,
                string: stream.current(),
                type: style || null,
                state: copy ? copyState(doc.mode, state) : state
            };
        }

        var doc = cm.doc, mode = doc.mode, style;
        pos = clipPos(doc, pos);
        var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise);
        var stream = new StringStream(line.text, cm.options.tabSize), tokens;
        if (asArray) tokens = [];
        while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
            stream.start = stream.pos;
            style = readToken(mode, stream, state);
            if (asArray) tokens.push(getObj(true));
        }
        return asArray ? tokens : getObj();
    }

    // Run the given mode's parser over a line, calling f for each token.
    function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
        var flattenSpans = mode.flattenSpans;
        if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
        var curStart = 0, curStyle = null;
        var stream = new StringStream(text, cm.options.tabSize), style;
        var inner = cm.options.addModeClass && [null];
        if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
        while (!stream.eol()) {
            if (stream.pos > cm.options.maxHighlightLength) {
                flattenSpans = false;
                if (forceToEnd) processLine(cm, text, state, stream.pos);
                stream.pos = text.length;
                style = null;
            } else {
                style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses);
            }
            if (inner) {
                var mName = inner[0].name;
                if (mName) style = "m-" + (style ? mName + " " + style : mName);
            }
            if (!flattenSpans || curStyle != style) {
                while (curStart < stream.start) {
                    curStart = Math.min(stream.start, curStart + 50000);
                    f(curStart, curStyle);
                }
                curStyle = style;
            }
            stream.start = stream.pos;
        }
        while (curStart < stream.pos) {
            // Webkit seems to refuse to render text nodes longer than 57444 characters
            var pos = Math.min(stream.pos, curStart + 50000);
            f(pos, curStyle);
            curStart = pos;
        }
    }

    // Compute a style array (an array starting with a mode generation
    // -- for invalidation -- followed by pairs of end positions and
    // style strings), which is used to highlight the tokens on the
    // line.
    function highlightLine(cm, line, state, forceToEnd) {
        // A styles array always starts with a number identifying the
        // mode/overlays that it is based on (for easy invalidation).
        var st = [cm.state.modeGen], lineClasses = {};
        // Compute the base array of styles
        runMode(cm, line.text, cm.doc.mode, state, function (end, style) {
            st.push(end, style);
        }, lineClasses, forceToEnd);

        // Run overlays, adjust style array.
        for (var o = 0; o < cm.state.overlays.length; ++o) {
            var overlay = cm.state.overlays[o], i = 1, at = 0;
            runMode(cm, line.text, overlay.mode, true, function (end, style) {
                var start = i;
                // Ensure there's a token end at the current position, and that i points at it
                while (at < end) {
                    var i_end = st[i];
                    if (i_end > end)
                        st.splice(i, 1, end, st[i + 1], i_end);
                    i += 2;
                    at = Math.min(end, i_end);
                }
                if (!style) return;
                if (overlay.opaque) {
                    st.splice(start, i - start, end, "cm-overlay " + style);
                    i = start + 2;
                } else {
                    for (; start < i; start += 2) {
                        var cur = st[start + 1];
                        st[start + 1] = (cur ? cur + " " : "") + "cm-overlay " + style;
                    }
                }
            }, lineClasses);
        }

        return { styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null };
    }

    function getLineStyles(cm, line, updateFrontier) {
        if (!line.styles || line.styles[0] != cm.state.modeGen) {
            var result = highlightLine(cm, line, line.stateAfter = getStateBefore(cm, lineNo(line)));
            line.styles = result.styles;
            if (result.classes) line.styleClasses = result.classes;
            else if (line.styleClasses) line.styleClasses = null;
            if (updateFrontier === cm.doc.frontier) cm.doc.frontier++;
        }
        return line.styles;
    }

    // Lightweight form of highlight -- proceed over this line and
    // update state, but don't save a style array. Used for lines that
    // aren't currently visible.
    function processLine(cm, text, state, startAt) {
        var mode = cm.doc.mode;
        var stream = new StringStream(text, cm.options.tabSize);
        stream.start = stream.pos = startAt || 0;
        if (text == "") callBlankLine(mode, state);
        while (!stream.eol() && stream.pos <= cm.options.maxHighlightLength) {
            readToken(mode, stream, state);
            stream.start = stream.pos;
        }
    }

    // Convert a style as returned by a mode (either null, or a string
    // containing one or more styles) to a CSS style. This is cached,
    // and also looks for line-wide styles.
    var styleToClassCache = {}, styleToClassCacheWithMode = {};
    function interpretTokenStyle(style, options) {
        if (!style || /^\s*$/.test(style)) return null;
        var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
        return cache[style] ||
          (cache[style] = style.replace(/\S+/g, "cm-$&"));
    }

    // Render the DOM representation of the text of a line. Also builds
    // up a 'line map', which points at the DOM nodes that represent
    // specific stretches of text, and is used by the measuring code.
    // The returned object contains the DOM node, this map, and
    // information about line-wide styles that were set by the mode.
    function buildLineContent(cm, lineView) {
        // The padding-right forces the element to have a 'border', which
        // is needed on Webkit to be able to get line-level bounding
        // rectangles for it (in measureChar).
        var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
        var builder = { pre: elt("pre", [content]), content: content, col: 0, pos: 0, cm: cm };
        lineView.measure = {};

        // Iterate over the logical lines that make up this visual line.
        for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0) ; i++) {
            var line = i ? lineView.rest[i - 1] : lineView.line, order;
            builder.pos = 0;
            builder.addToken = buildToken;
            // Optionally wire in some hacks into the token-rendering
            // algorithm, to deal with browser quirks.
            if ((ie || webkit) && cm.getOption("lineWrapping"))
                builder.addToken = buildTokenSplitSpaces(builder.addToken);
            if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
                builder.addToken = buildTokenBadBidi(builder.addToken, order);
            builder.map = [];
            var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
            insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
            if (line.styleClasses) {
                if (line.styleClasses.bgClass)
                    builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
                if (line.styleClasses.textClass)
                    builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
            }

            // Ensure at least a single node is present, for measuring.
            if (builder.map.length == 0)
                builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));

            // Store the map and a cache object for the current logical line
            if (i == 0) {
                lineView.measure.map = builder.map;
                lineView.measure.cache = {};
            } else {
                (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
                (lineView.measure.caches || (lineView.measure.caches = [])).push({});
            }
        }

        // See issue #2901
        if (webkit && /\bcm-tab\b/.test(builder.content.lastChild.className))
            builder.content.className = "cm-tab-wrap-hack";

        signal(cm, "renderLine", cm, lineView.line, builder.pre);
        if (builder.pre.className)
            builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");

        return builder;
    }

    function defaultSpecialCharPlaceholder(ch) {
        var token = elt("span", "\u2022", "cm-invalidchar");
        token.title = "\\u" + ch.charCodeAt(0).toString(16);
        return token;
    }

    // Build up the DOM representation for a single token, and add it to
    // the line map. Takes care to render special characters separately.
    function buildToken(builder, text, style, startStyle, endStyle, title, css) {
        if (!text) return;
        var special = builder.cm.options.specialChars, mustWrap = false;
        if (!special.test(text)) {
            builder.col += text.length;
            var content = document.createTextNode(text);
            builder.map.push(builder.pos, builder.pos + text.length, content);
            if (ie && ie_version < 9) mustWrap = true;
            builder.pos += text.length;
        } else {
            var content = document.createDocumentFragment(), pos = 0;
            while (true) {
                special.lastIndex = pos;
                var m = special.exec(text);
                var skipped = m ? m.index - pos : text.length - pos;
                if (skipped) {
                    var txt = document.createTextNode(text.slice(pos, pos + skipped));
                    if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
                    else content.appendChild(txt);
                    builder.map.push(builder.pos, builder.pos + skipped, txt);
                    builder.col += skipped;
                    builder.pos += skipped;
                }
                if (!m) break;
                pos += skipped + 1;
                if (m[0] == "\t") {
                    var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
                    var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
                    builder.col += tabWidth;
                } else {
                    var txt = builder.cm.options.specialCharPlaceholder(m[0]);
                    if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
                    else content.appendChild(txt);
                    builder.col += 1;
                }
                builder.map.push(builder.pos, builder.pos + 1, txt);
                builder.pos++;
            }
        }
        if (style || startStyle || endStyle || mustWrap || css) {
            var fullStyle = style || "";
            if (startStyle) fullStyle += startStyle;
            if (endStyle) fullStyle += endStyle;
            var token = elt("span", [content], fullStyle, css);
            if (title) token.title = title;
            return builder.content.appendChild(token);
        }
        builder.content.appendChild(content);
    }

    function buildTokenSplitSpaces(inner) {
        function split(old) {
            var out = " ";
            for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
            out += " ";
            return out;
        }
        return function (builder, text, style, startStyle, endStyle, title) {
            inner(builder, text.replace(/ {3,}/g, split), style, startStyle, endStyle, title);
        };
    }

    // Work around nonsense dimensions being reported for stretches of
    // right-to-left text.
    function buildTokenBadBidi(inner, order) {
        return function (builder, text, style, startStyle, endStyle, title) {
            style = style ? style + " cm-force-border" : "cm-force-border";
            var start = builder.pos, end = start + text.length;
            for (; ;) {
                // Find the part that overlaps with the start of this text
                for (var i = 0; i < order.length; i++) {
                    var part = order[i];
                    if (part.to > start && part.from <= start) break;
                }
                if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title);
                inner(builder, text.slice(0, part.to - start), style, startStyle, null, title);
                startStyle = null;
                text = text.slice(part.to - start);
                start = part.to;
            }
        };
    }

    function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
        var widget = !ignoreWidget && marker.widgetNode;
        if (widget) {
            builder.map.push(builder.pos, builder.pos + size, widget);
            builder.content.appendChild(widget);
        }
        builder.pos += size;
    }

    // Outputs a number of spans to make up a line, taking highlighting
    // and marked text into account.
    function insertLineContent(line, builder, styles) {
        var spans = line.markedSpans, allText = line.text, at = 0;
        if (!spans) {
            for (var i = 1; i < styles.length; i += 2)
                builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i + 1], builder.cm.options));
            return;
        }

        var len = allText.length, pos = 0, i = 1, text = "", style, css;
        var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
        for (; ;) {
            if (nextChange == pos) { // Update current marker set
                spanStyle = spanEndStyle = spanStartStyle = title = css = "";
                collapsed = null; nextChange = Infinity;
                var foundBookmarks = [];
                for (var j = 0; j < spans.length; ++j) {
                    var sp = spans[j], m = sp.marker;
                    if (sp.from <= pos && (sp.to == null || sp.to > pos)) {
                        if (sp.to != null && nextChange > sp.to) { nextChange = sp.to; spanEndStyle = ""; }
                        if (m.className) spanStyle += " " + m.className;
                        if (m.css) css = m.css;
                        if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
                        if (m.endStyle && sp.to == nextChange) spanEndStyle += " " + m.endStyle;
                        if (m.title && !title) title = m.title;
                        if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
                            collapsed = sp;
                    } else if (sp.from > pos && nextChange > sp.from) {
                        nextChange = sp.from;
                    }
                    if (m.type == "bookmark" && sp.from == pos && m.widgetNode) foundBookmarks.push(m);
                }
                if (collapsed && (collapsed.from || 0) == pos) {
                    buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                                       collapsed.marker, collapsed.from == null);
                    if (collapsed.to == null) return;
                }
                if (!collapsed && foundBookmarks.length) for (var j = 0; j < foundBookmarks.length; ++j)
                    buildCollapsedSpan(builder, 0, foundBookmarks[j]);
            }
            if (pos >= len) break;

            var upto = Math.min(len, nextChange);
            while (true) {
                if (text) {
                    var end = pos + text.length;
                    if (!collapsed) {
                        var tokenText = end > upto ? text.slice(0, upto - pos) : text;
                        builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                                         spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
                    }
                    if (end >= upto) { text = text.slice(upto - pos); pos = upto; break; }
                    pos = end;
                    spanStartStyle = "";
                }
                text = allText.slice(at, at = styles[i++]);
                style = interpretTokenStyle(styles[i++], builder.cm.options);
            }
        }
    }

    // DOCUMENT DATA STRUCTURE

    // By default, updates that start and end at the beginning of a line
    // are treated specially, in order to make the association of line
    // widgets and marker elements with the text behave more intuitive.
    function isWholeLineUpdate(doc, change) {
        return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
          (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
    }

    // Perform a change on the document data structure.
    function updateDoc(doc, change, markedSpans, estimateHeight) {
        function spansFor(n) { return markedSpans ? markedSpans[n] : null; }
        function update(line, text, spans) {
            updateLine(line, text, spans, estimateHeight);
            signalLater(line, "change", line, change);
        }
        function linesFor(start, end) {
            for (var i = start, result = []; i < end; ++i)
                result.push(new Line(text[i], spansFor(i), estimateHeight));
            return result;
        }

        var from = change.from, to = change.to, text = change.text;
        var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
        var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

        // Adjust the line structure
        if (change.full) {
            doc.insert(0, linesFor(0, text.length));
            doc.remove(text.length, doc.size - text.length);
        } else if (isWholeLineUpdate(doc, change)) {
            // This is a whole-line replace. Treated specially to make
            // sure line objects move the way they are supposed to.
            var added = linesFor(0, text.length - 1);
            update(lastLine, lastLine.text, lastSpans);
            if (nlines) doc.remove(from.line, nlines);
            if (added.length) doc.insert(from.line, added);
        } else if (firstLine == lastLine) {
            if (text.length == 1) {
                update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
            } else {
                var added = linesFor(1, text.length - 1);
                added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
                update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
                doc.insert(from.line + 1, added);
            }
        } else if (text.length == 1) {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
            doc.remove(from.line + 1, nlines);
        } else {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
            update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
            var added = linesFor(1, text.length - 1);
            if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
            doc.insert(from.line + 1, added);
        }

        signalLater(doc, "change", doc, change);
    }

    // The document is represented as a BTree consisting of leaves, with
    // chunk of lines in them, and branches, with up to ten leaves or
    // other branch nodes below them. The top node is always a branch
    // node, and is the document object itself (meaning it has
    // additional methods and properties).
    //
    // All nodes have parent links. The tree is used both to go from
    // line numbers to line objects, and to go from objects to numbers.
    // It also indexes by height, and is used to convert between height
    // and line object, and to find the total height of the document.
    //
    // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

    function LeafChunk(lines) {
        this.lines = lines;
        this.parent = null;
        for (var i = 0, height = 0; i < lines.length; ++i) {
            lines[i].parent = this;
            height += lines[i].height;
        }
        this.height = height;
    }

    LeafChunk.prototype = {
        chunkSize: function () { return this.lines.length; },
        // Remove the n lines at offset 'at'.
        removeInner: function (at, n) {
            for (var i = at, e = at + n; i < e; ++i) {
                var line = this.lines[i];
                this.height -= line.height;
                cleanUpLine(line);
                signalLater(line, "delete");
            }
            this.lines.splice(at, n);
        },
        // Helper used to collapse a small branch into a single leaf.
        collapse: function (lines) {
            lines.push.apply(lines, this.lines);
        },
        // Insert the given array of lines at offset 'at', count them as
        // having the given height.
        insertInner: function (at, lines, height) {
            this.height += height;
            this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
            for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
        },
        // Used to iterate over a part of the tree.
        iterN: function (at, n, op) {
            for (var e = at + n; at < e; ++at)
                if (op(this.lines[at])) return true;
        }
    };

    function BranchChunk(children) {
        this.children = children;
        var size = 0, height = 0;
        for (var i = 0; i < children.length; ++i) {
            var ch = children[i];
            size += ch.chunkSize(); height += ch.height;
            ch.parent = this;
        }
        this.size = size;
        this.height = height;
        this.parent = null;
    }

    BranchChunk.prototype = {
        chunkSize: function () { return this.size; },
        removeInner: function (at, n) {
            this.size -= n;
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (at < sz) {
                    var rm = Math.min(n, sz - at), oldHeight = child.height;
                    child.removeInner(at, rm);
                    this.height -= oldHeight - child.height;
                    if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
                    if ((n -= rm) == 0) break;
                    at = 0;
                } else at -= sz;
            }
            // If the result is smaller than 25 lines, ensure that it is a
            // single leaf node.
            if (this.size - n < 25 &&
                (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
                var lines = [];
                this.collapse(lines);
                this.children = [new LeafChunk(lines)];
                this.children[0].parent = this;
            }
        },
        collapse: function (lines) {
            for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
        },
        insertInner: function (at, lines, height) {
            this.size += lines.length;
            this.height += height;
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (at <= sz) {
                    child.insertInner(at, lines, height);
                    if (child.lines && child.lines.length > 50) {
                        while (child.lines.length > 50) {
                            var spilled = child.lines.splice(child.lines.length - 25, 25);
                            var newleaf = new LeafChunk(spilled);
                            child.height -= newleaf.height;
                            this.children.splice(i + 1, 0, newleaf);
                            newleaf.parent = this;
                        }
                        this.maybeSpill();
                    }
                    break;
                }
                at -= sz;
            }
        },
        // When a node has grown, check whether it should be split.
        maybeSpill: function () {
            if (this.children.length <= 10) return;
            var me = this;
            do {
                var spilled = me.children.splice(me.children.length - 5, 5);
                var sibling = new BranchChunk(spilled);
                if (!me.parent) { // Become the parent node
                    var copy = new BranchChunk(me.children);
                    copy.parent = me;
                    me.children = [copy, sibling];
                    me = copy;
                } else {
                    me.size -= sibling.size;
                    me.height -= sibling.height;
                    var myIndex = indexOf(me.parent.children, me);
                    me.parent.children.splice(myIndex + 1, 0, sibling);
                }
                sibling.parent = me.parent;
            } while (me.children.length > 10);
            me.parent.maybeSpill();
        },
        iterN: function (at, n, op) {
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (at < sz) {
                    var used = Math.min(n, sz - at);
                    if (child.iterN(at, used, op)) return true;
                    if ((n -= used) == 0) break;
                    at = 0;
                } else at -= sz;
            }
        }
    };

    var nextDocId = 0;
    var Doc = CodeMirror.Doc = function (text, mode, firstLine) {
        if (!(this instanceof Doc)) return new Doc(text, mode, firstLine);
        if (firstLine == null) firstLine = 0;

        BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
        this.first = firstLine;
        this.scrollTop = this.scrollLeft = 0;
        this.cantEdit = false;
        this.cleanGeneration = 1;
        this.frontier = firstLine;
        var start = Pos(firstLine, 0);
        this.sel = simpleSelection(start);
        this.history = new History(null);
        this.id = ++nextDocId;
        this.modeOption = mode;

        if (typeof text == "string") text = splitLines(text);
        updateDoc(this, { from: start, to: start, text: text });
        setSelection(this, simpleSelection(start), sel_dontScroll);
    };

    Doc.prototype = createObj(BranchChunk.prototype, {
        constructor: Doc,
        // Iterate over the document. Supports two forms -- with only one
        // argument, it calls that for each line in the document. With
        // three, it iterates over the range given by the first two (with
        // the second being non-inclusive).
        iter: function (from, to, op) {
            if (op) this.iterN(from - this.first, to - from, op);
            else this.iterN(this.first, this.first + this.size, from);
        },

        // Non-public interface for adding and removing lines.
        insert: function (at, lines) {
            var height = 0;
            for (var i = 0; i < lines.length; ++i) height += lines[i].height;
            this.insertInner(at - this.first, lines, height);
        },
        remove: function (at, n) { this.removeInner(at - this.first, n); },

        // From here, the methods are part of the public interface. Most
        // are also available from CodeMirror (editor) instances.

        getValue: function (lineSep) {
            var lines = getLines(this, this.first, this.first + this.size);
            if (lineSep === false) return lines;
            return lines.join(lineSep || "\n");
        },
        setValue: docMethodOp(function (code) {
            var top = Pos(this.first, 0), last = this.first + this.size - 1;
            makeChange(this, {
                from: top, to: Pos(last, getLine(this, last).text.length),
                text: splitLines(code), origin: "setValue", full: true
            }, true);
            setSelection(this, simpleSelection(top));
        }),
        replaceRange: function (code, from, to, origin) {
            from = clipPos(this, from);
            to = to ? clipPos(this, to) : from;
            replaceRange(this, code, from, to, origin);
        },
        getRange: function (from, to, lineSep) {
            var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
            if (lineSep === false) return lines;
            return lines.join(lineSep || "\n");
        },

        getLine: function (line) { var l = this.getLineHandle(line); return l && l.text; },

        getLineHandle: function (line) { if (isLine(this, line)) return getLine(this, line); },
        getLineNumber: function (line) { return lineNo(line); },

        getLineHandleVisualStart: function (line) {
            if (typeof line == "number") line = getLine(this, line);
            return visualLine(line);
        },

        lineCount: function () { return this.size; },
        firstLine: function () { return this.first; },
        lastLine: function () { return this.first + this.size - 1; },

        clipPos: function (pos) { return clipPos(this, pos); },

        getCursor: function (start) {
            var range = this.sel.primary(), pos;
            if (start == null || start == "head") pos = range.head;
            else if (start == "anchor") pos = range.anchor;
            else if (start == "end" || start == "to" || start === false) pos = range.to();
            else pos = range.from();
            return pos;
        },
        listSelections: function () { return this.sel.ranges; },
        somethingSelected: function () { return this.sel.somethingSelected(); },

        setCursor: docMethodOp(function (line, ch, options) {
            setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
        }),
        setSelection: docMethodOp(function (anchor, head, options) {
            setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
        }),
        extendSelection: docMethodOp(function (head, other, options) {
            extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
        }),
        extendSelections: docMethodOp(function (heads, options) {
            extendSelections(this, clipPosArray(this, heads, options));
        }),
        extendSelectionsBy: docMethodOp(function (f, options) {
            extendSelections(this, map(this.sel.ranges, f), options);
        }),
        setSelections: docMethodOp(function (ranges, primary, options) {
            if (!ranges.length) return;
            for (var i = 0, out = []; i < ranges.length; i++)
                out[i] = new Range(clipPos(this, ranges[i].anchor),
                                   clipPos(this, ranges[i].head));
            if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
            setSelection(this, normalizeSelection(out, primary), options);
        }),
        addSelection: docMethodOp(function (anchor, head, options) {
            var ranges = this.sel.ranges.slice(0);
            ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
            setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
        }),

        getSelection: function (lineSep) {
            var ranges = this.sel.ranges, lines;
            for (var i = 0; i < ranges.length; i++) {
                var sel = getBetween(this, ranges[i].from(), ranges[i].to());
                lines = lines ? lines.concat(sel) : sel;
            }
            if (lineSep === false) return lines;
            else return lines.join(lineSep || "\n");
        },
        getSelections: function (lineSep) {
            var parts = [], ranges = this.sel.ranges;
            for (var i = 0; i < ranges.length; i++) {
                var sel = getBetween(this, ranges[i].from(), ranges[i].to());
                if (lineSep !== false) sel = sel.join(lineSep || "\n");
                parts[i] = sel;
            }
            return parts;
        },
        replaceSelection: function (code, collapse, origin) {
            var dup = [];
            for (var i = 0; i < this.sel.ranges.length; i++)
                dup[i] = code;
            this.replaceSelections(dup, collapse, origin || "+input");
        },
        replaceSelections: docMethodOp(function (code, collapse, origin) {
            var changes = [], sel = this.sel;
            for (var i = 0; i < sel.ranges.length; i++) {
                var range = sel.ranges[i];
                changes[i] = { from: range.from(), to: range.to(), text: splitLines(code[i]), origin: origin };
            }
            var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
            for (var i = changes.length - 1; i >= 0; i--)
                makeChange(this, changes[i]);
            if (newSel) setSelectionReplaceHistory(this, newSel);
            else if (this.cm) ensureCursorVisible(this.cm);
        }),
        undo: docMethodOp(function () { makeChangeFromHistory(this, "undo"); }),
        redo: docMethodOp(function () { makeChangeFromHistory(this, "redo"); }),
        undoSelection: docMethodOp(function () { makeChangeFromHistory(this, "undo", true); }),
        redoSelection: docMethodOp(function () { makeChangeFromHistory(this, "redo", true); }),

        setExtending: function (val) { this.extend = val; },
        getExtending: function () { return this.extend; },

        historySize: function () {
            var hist = this.history, done = 0, undone = 0;
            for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges)++done;
            for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges)++undone;
            return { undo: done, redo: undone };
        },
        clearHistory: function () { this.history = new History(this.history.maxGeneration); },

        markClean: function () {
            this.cleanGeneration = this.changeGeneration(true);
        },
        changeGeneration: function (forceSplit) {
            if (forceSplit)
                this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
            return this.history.generation;
        },
        isClean: function (gen) {
            return this.history.generation == (gen || this.cleanGeneration);
        },

        getHistory: function () {
            return {
                done: copyHistoryArray(this.history.done),
                undone: copyHistoryArray(this.history.undone)
            };
        },
        setHistory: function (histData) {
            var hist = this.history = new History(this.history.maxGeneration);
            hist.done = copyHistoryArray(histData.done.slice(0), null, true);
            hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
        },

        addLineClass: docMethodOp(function (handle, where, cls) {
            return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
                var prop = where == "text" ? "textClass"
                         : where == "background" ? "bgClass"
                         : where == "gutter" ? "gutterClass" : "wrapClass";
                if (!line[prop]) line[prop] = cls;
                else if (classTest(cls).test(line[prop])) return false;
                else line[prop] += " " + cls;
                return true;
            });
        }),
        removeLineClass: docMethodOp(function (handle, where, cls) {
            return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
                var prop = where == "text" ? "textClass"
                         : where == "background" ? "bgClass"
                         : where == "gutter" ? "gutterClass" : "wrapClass";
                var cur = line[prop];
                if (!cur) return false;
                else if (cls == null) line[prop] = null;
                else {
                    var found = cur.match(classTest(cls));
                    if (!found) return false;
                    var end = found.index + found[0].length;
                    line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
                }
                return true;
            });
        }),

        markText: function (from, to, options) {
            return markText(this, clipPos(this, from), clipPos(this, to), options, "range");
        },
        setBookmark: function (pos, options) {
            var realOpts = {
                replacedWith: options && (options.nodeType == null ? options.widget : options),
                insertLeft: options && options.insertLeft,
                clearWhenEmpty: false, shared: options && options.shared
            };
            pos = clipPos(this, pos);
            return markText(this, pos, pos, realOpts, "bookmark");
        },
        findMarksAt: function (pos) {
            pos = clipPos(this, pos);
            var markers = [], spans = getLine(this, pos.line).markedSpans;
            if (spans) for (var i = 0; i < spans.length; ++i) {
                var span = spans[i];
                if ((span.from == null || span.from <= pos.ch) &&
                    (span.to == null || span.to >= pos.ch))
                    markers.push(span.marker.parent || span.marker);
            }
            return markers;
        },
        findMarks: function (from, to, filter) {
            from = clipPos(this, from); to = clipPos(this, to);
            var found = [], lineNo = from.line;
            this.iter(from.line, to.line + 1, function (line) {
                var spans = line.markedSpans;
                if (spans) for (var i = 0; i < spans.length; i++) {
                    var span = spans[i];
                    if (!(lineNo == from.line && from.ch > span.to ||
                          span.from == null && lineNo != from.line ||
                          lineNo == to.line && span.from > to.ch) &&
                        (!filter || filter(span.marker)))
                        found.push(span.marker.parent || span.marker);
                }
                ++lineNo;
            });
            return found;
        },
        getAllMarks: function () {
            var markers = [];
            this.iter(function (line) {
                var sps = line.markedSpans;
                if (sps) for (var i = 0; i < sps.length; ++i)
                    if (sps[i].from != null) markers.push(sps[i].marker);
            });
            return markers;
        },

        posFromIndex: function (off) {
            var ch, lineNo = this.first;
            this.iter(function (line) {
                var sz = line.text.length + 1;
                if (sz > off) { ch = off; return true; }
                off -= sz;
                ++lineNo;
            });
            return clipPos(this, Pos(lineNo, ch));
        },
        indexFromPos: function (coords) {
            coords = clipPos(this, coords);
            var index = coords.ch;
            if (coords.line < this.first || coords.ch < 0) return 0;
            this.iter(this.first, coords.line, function (line) {
                index += line.text.length + 1;
            });
            return index;
        },

        copy: function (copyHistory) {
            var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first);
            doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
            doc.sel = this.sel;
            doc.extend = false;
            if (copyHistory) {
                doc.history.undoDepth = this.history.undoDepth;
                doc.setHistory(this.getHistory());
            }
            return doc;
        },

        linkedDoc: function (options) {
            if (!options) options = {};
            var from = this.first, to = this.first + this.size;
            if (options.from != null && options.from > from) from = options.from;
            if (options.to != null && options.to < to) to = options.to;
            var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from);
            if (options.sharedHist) copy.history = this.history;
            (this.linked || (this.linked = [])).push({ doc: copy, sharedHist: options.sharedHist });
            copy.linked = [{ doc: this, isParent: true, sharedHist: options.sharedHist }];
            copySharedMarkers(copy, findSharedMarkers(this));
            return copy;
        },
        unlinkDoc: function (other) {
            if (other instanceof CodeMirror) other = other.doc;
            if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
                var link = this.linked[i];
                if (link.doc != other) continue;
                this.linked.splice(i, 1);
                other.unlinkDoc(this);
                detachSharedMarkers(findSharedMarkers(this));
                break;
            }
            // If the histories were shared, split them again
            if (other.history == this.history) {
                var splitIds = [other.id];
                linkedDocs(other, function (doc) { splitIds.push(doc.id); }, true);
                other.history = new History(null);
                other.history.done = copyHistoryArray(this.history.done, splitIds);
                other.history.undone = copyHistoryArray(this.history.undone, splitIds);
            }
        },
        iterLinkedDocs: function (f) { linkedDocs(this, f); },

        getMode: function () { return this.mode; },
        getEditor: function () { return this.cm; }
    });

    // Public alias.
    Doc.prototype.eachLine = Doc.prototype.iter;

    // Set up methods on CodeMirror's prototype to redirect to the editor's document.
    var dontDelegate = "iter insert remove copy getEditor".split(" ");
    for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
        CodeMirror.prototype[prop] = (function (method) {
            return function () { return method.apply(this.doc, arguments); };
        })(Doc.prototype[prop]);

    eventMixin(Doc);

    // Call f for all linked documents.
    function linkedDocs(doc, f, sharedHistOnly) {
        function propagate(doc, skip, sharedHist) {
            if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
                var rel = doc.linked[i];
                if (rel.doc == skip) continue;
                var shared = sharedHist && rel.sharedHist;
                if (sharedHistOnly && !shared) continue;
                f(rel.doc, shared);
                propagate(rel.doc, doc, shared);
            }
        }
        propagate(doc, null, true);
    }

    // Attach a document to an editor.
    function attachDoc(cm, doc) {
        if (doc.cm) throw new Error("This document is already in use.");
        cm.doc = doc;
        doc.cm = cm;
        estimateLineHeights(cm);
        loadMode(cm);
        if (!cm.options.lineWrapping) findMaxLine(cm);
        cm.options.mode = doc.modeOption;
        regChange(cm);
    }

    // LINE UTILITIES

    // Find the line object corresponding to the given line number.
    function getLine(doc, n) {
        n -= doc.first;
        if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
        for (var chunk = doc; !chunk.lines;) {
            for (var i = 0; ; ++i) {
                var child = chunk.children[i], sz = child.chunkSize();
                if (n < sz) { chunk = child; break; }
                n -= sz;
            }
        }
        return chunk.lines[n];
    }

    // Get the part of a document between two positions, as an array of
    // strings.
    function getBetween(doc, start, end) {
        var out = [], n = start.line;
        doc.iter(start.line, end.line + 1, function (line) {
            var text = line.text;
            if (n == end.line) text = text.slice(0, end.ch);
            if (n == start.line) text = text.slice(start.ch);
            out.push(text);
            ++n;
        });
        return out;
    }
    // Get the lines between from and to, as array of strings.
    function getLines(doc, from, to) {
        var out = [];
        doc.iter(from, to, function (line) { out.push(line.text); });
        return out;
    }

    // Update the height of a line, propagating the height change
    // upwards to parent nodes.
    function updateLineHeight(line, height) {
        var diff = height - line.height;
        if (diff) for (var n = line; n; n = n.parent) n.height += diff;
    }

    // Given a line object, find its line number by walking up through
    // its parent links.
    function lineNo(line) {
        if (line.parent == null) return null;
        var cur = line.parent, no = indexOf(cur.lines, line);
        for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
            for (var i = 0; ; ++i) {
                if (chunk.children[i] == cur) break;
                no += chunk.children[i].chunkSize();
            }
        }
        return no + cur.first;
    }

    // Find the line at the given vertical position, using the height
    // information in the document tree.
    function lineAtHeight(chunk, h) {
        var n = chunk.first;
        outer: do {
            for (var i = 0; i < chunk.children.length; ++i) {
                var child = chunk.children[i], ch = child.height;
                if (h < ch) { chunk = child; continue outer; }
                h -= ch;
                n += child.chunkSize();
            }
            return n;
        } while (!chunk.lines);
        for (var i = 0; i < chunk.lines.length; ++i) {
            var line = chunk.lines[i], lh = line.height;
            if (h < lh) break;
            h -= lh;
        }
        return n + i;
    }


    // Find the height above the given line.
    function heightAtLine(lineObj) {
        lineObj = visualLine(lineObj);

        var h = 0, chunk = lineObj.parent;
        for (var i = 0; i < chunk.lines.length; ++i) {
            var line = chunk.lines[i];
            if (line == lineObj) break;
            else h += line.height;
        }
        for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
            for (var i = 0; i < p.children.length; ++i) {
                var cur = p.children[i];
                if (cur == chunk) break;
                else h += cur.height;
            }
        }
        return h;
    }

    // Get the bidi ordering for the given line (and cache it). Returns
    // false for lines that are fully left-to-right, and an array of
    // BidiSpan objects otherwise.
    function getOrder(line) {
        var order = line.order;
        if (order == null) order = line.order = bidiOrdering(line.text);
        return order;
    }

    // HISTORY

    function History(startGen) {
        // Arrays of change events and selections. Doing something adds an
        // event to done and clears undo. Undoing moves events from done
        // to undone, redoing moves them in the other direction.
        this.done = []; this.undone = [];
        this.undoDepth = Infinity;
        // Used to track when changes can be merged into a single undo
        // event
        this.lastModTime = this.lastSelTime = 0;
        this.lastOp = this.lastSelOp = null;
        this.lastOrigin = this.lastSelOrigin = null;
        // Used by the isClean() method
        this.generation = this.maxGeneration = startGen || 1;
    }

    // Create a history change event from an updateDoc-style change
    // object.
    function historyChangeFromChange(doc, change) {
        var histChange = { from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to) };
        attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
        linkedDocs(doc, function (doc) { attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
        return histChange;
    }

    // Pop all selection events off the end of a history array. Stop at
    // a change event.
    function clearSelectionEvents(array) {
        while (array.length) {
            var last = lst(array);
            if (last.ranges) array.pop();
            else break;
        }
    }

    // Find the top change event in the history. Pop off selection
    // events that are in the way.
    function lastChangeEvent(hist, force) {
        if (force) {
            clearSelectionEvents(hist.done);
            return lst(hist.done);
        } else if (hist.done.length && !lst(hist.done).ranges) {
            return lst(hist.done);
        } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
            hist.done.pop();
            return lst(hist.done);
        }
    }

    // Register a change in the history. Merges changes that are within
    // a single operation, ore are close together with an origin that
    // allows merging (starting with "+") into a single event.
    function addChangeToHistory(doc, change, selAfter, opId) {
        var hist = doc.history;
        hist.undone.length = 0;
        var time = +new Date, cur;

        if ((hist.lastOp == opId ||
             hist.lastOrigin == change.origin && change.origin &&
             ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
              change.origin.charAt(0) == "*")) &&
            (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
            // Merge this change into the last event
            var last = lst(cur.changes);
            if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
                // Optimized case for simple insertion -- don't want to add
                // new changesets for every character typed
                last.to = changeEnd(change);
            } else {
                // Add new sub-event
                cur.changes.push(historyChangeFromChange(doc, change));
            }
        } else {
            // Can not be merged, start a new event.
            var before = lst(hist.done);
            if (!before || !before.ranges)
                pushSelectionToHistory(doc.sel, hist.done);
            cur = {
                changes: [historyChangeFromChange(doc, change)],
                generation: hist.generation
            };
            hist.done.push(cur);
            while (hist.done.length > hist.undoDepth) {
                hist.done.shift();
                if (!hist.done[0].ranges) hist.done.shift();
            }
        }
        hist.done.push(selAfter);
        hist.generation = ++hist.maxGeneration;
        hist.lastModTime = hist.lastSelTime = time;
        hist.lastOp = hist.lastSelOp = opId;
        hist.lastOrigin = hist.lastSelOrigin = change.origin;

        if (!last) signal(doc, "historyAdded");
    }

    function selectionEventCanBeMerged(doc, origin, prev, sel) {
        var ch = origin.charAt(0);
        return ch == "*" ||
          ch == "+" &&
          prev.ranges.length == sel.ranges.length &&
          prev.somethingSelected() == sel.somethingSelected() &&
          new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
    }

    // Called whenever the selection changes, sets the new selection as
    // the pending selection in the history, and pushes the old pending
    // selection into the 'done' array when it was significantly
    // different (in number of selected ranges, emptiness, or time).
    function addSelectionToHistory(doc, sel, opId, options) {
        var hist = doc.history, origin = options && options.origin;

        // A new event is started when the previous origin does not match
        // the current, or the origins don't allow matching. Origins
        // starting with * are always merged, those starting with + are
        // merged when similar and close together in time.
        if (opId == hist.lastSelOp ||
            (origin && hist.lastSelOrigin == origin &&
             (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
              selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
            hist.done[hist.done.length - 1] = sel;
        else
            pushSelectionToHistory(sel, hist.done);

        hist.lastSelTime = +new Date;
        hist.lastSelOrigin = origin;
        hist.lastSelOp = opId;
        if (options && options.clearRedo !== false)
            clearSelectionEvents(hist.undone);
    }

    function pushSelectionToHistory(sel, dest) {
        var top = lst(dest);
        if (!(top && top.ranges && top.equals(sel)))
            dest.push(sel);
    }

    // Used to store marked span information in the history.
    function attachLocalSpans(doc, change, from, to) {
        var existing = change["spans_" + doc.id], n = 0;
        doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
            if (line.markedSpans)
                (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
            ++n;
        });
    }

    // When un/re-doing restores text containing marked spans, those
    // that have been explicitly cleared should not be restored.
    function removeClearedSpans(spans) {
        if (!spans) return null;
        for (var i = 0, out; i < spans.length; ++i) {
            if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
            else if (out) out.push(spans[i]);
        }
        return !out ? spans : out.length ? out : null;
    }

    // Retrieve and filter the old marked spans stored in a change event.
    function getOldSpans(doc, change) {
        var found = change["spans_" + doc.id];
        if (!found) return null;
        for (var i = 0, nw = []; i < change.text.length; ++i)
            nw.push(removeClearedSpans(found[i]));
        return nw;
    }

    // Used both to provide a JSON-safe object in .getHistory, and, when
    // detaching a document, to split the history in two
    function copyHistoryArray(events, newGroup, instantiateSel) {
        for (var i = 0, copy = []; i < events.length; ++i) {
            var event = events[i];
            if (event.ranges) {
                copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
                continue;
            }
            var changes = event.changes, newChanges = [];
            copy.push({ changes: newChanges });
            for (var j = 0; j < changes.length; ++j) {
                var change = changes[j], m;
                newChanges.push({ from: change.from, to: change.to, text: change.text });
                if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
                    if (indexOf(newGroup, Number(m[1])) > -1) {
                        lst(newChanges)[prop] = change[prop];
                        delete change[prop];
                    }
                }
            }
        }
        return copy;
    }

    // Rebasing/resetting history to deal with externally-sourced changes

    function rebaseHistSelSingle(pos, from, to, diff) {
        if (to < pos.line) {
            pos.line += diff;
        } else if (from < pos.line) {
            pos.line = from;
            pos.ch = 0;
        }
    }

    // Tries to rebase an array of history events given a change in the
    // document. If the change touches the same lines as the event, the
    // event, and everything 'behind' it, is discarded. If the change is
    // before the event, the event's positions are updated. Uses a
    // copy-on-write scheme for the positions, to avoid having to
    // reallocate them all on every rebase, but also avoid problems with
    // shared position objects being unsafely updated.
    function rebaseHistArray(array, from, to, diff) {
        for (var i = 0; i < array.length; ++i) {
            var sub = array[i], ok = true;
            if (sub.ranges) {
                if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
                for (var j = 0; j < sub.ranges.length; j++) {
                    rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
                    rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
                }
                continue;
            }
            for (var j = 0; j < sub.changes.length; ++j) {
                var cur = sub.changes[j];
                if (to < cur.from.line) {
                    cur.from = Pos(cur.from.line + diff, cur.from.ch);
                    cur.to = Pos(cur.to.line + diff, cur.to.ch);
                } else if (from <= cur.to.line) {
                    ok = false;
                    break;
                }
            }
            if (!ok) {
                array.splice(0, i + 1);
                i = 0;
            }
        }
    }

    function rebaseHist(hist, change) {
        var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
        rebaseHistArray(hist.done, from, to, diff);
        rebaseHistArray(hist.undone, from, to, diff);
    }

    // EVENT UTILITIES

    // Due to the fact that we still support jurassic IE versions, some
    // compatibility wrappers are needed.

    var e_preventDefault = CodeMirror.e_preventDefault = function (e) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
    };
    var e_stopPropagation = CodeMirror.e_stopPropagation = function (e) {
        if (e.stopPropagation) e.stopPropagation();
        else e.cancelBubble = true;
    };
    function e_defaultPrevented(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
    }
    var e_stop = CodeMirror.e_stop = function (e) { e_preventDefault(e); e_stopPropagation(e); };

    function e_target(e) { return e.target || e.srcElement; }
    function e_button(e) {
        var b = e.which;
        if (b == null) {
            if (e.button & 1) b = 1;
            else if (e.button & 2) b = 3;
            else if (e.button & 4) b = 2;
        }
        if (mac && e.ctrlKey && b == 1) b = 3;
        return b;
    }

    // EVENT HANDLING

    // Lightweight event framework. on/off also work on DOM nodes,
    // registering native DOM handlers.

    var on = CodeMirror.on = function (emitter, type, f) {
        if (emitter.addEventListener)
            emitter.addEventListener(type, f, false);
        else if (emitter.attachEvent)
            emitter.attachEvent("on" + type, f);
        else {
            var map = emitter._handlers || (emitter._handlers = {});
            var arr = map[type] || (map[type] = []);
            arr.push(f);
        }
    };

    var off = CodeMirror.off = function (emitter, type, f) {
        if (emitter.removeEventListener)
            emitter.removeEventListener(type, f, false);
        else if (emitter.detachEvent)
            emitter.detachEvent("on" + type, f);
        else {
            var arr = emitter._handlers && emitter._handlers[type];
            if (!arr) return;
            for (var i = 0; i < arr.length; ++i)
                if (arr[i] == f) { arr.splice(i, 1); break; }
        }
    };

    var signal = CodeMirror.signal = function (emitter, type /*, values...*/) {
        var arr = emitter._handlers && emitter._handlers[type];
        if (!arr) return;
        var args = Array.prototype.slice.call(arguments, 2);
        for (var i = 0; i < arr.length; ++i) arr[i].apply(null, args);
    };

    var orphanDelayedCallbacks = null;

    // Often, we want to signal events at a point where we are in the
    // middle of some work, but don't want the handler to start calling
    // other methods on the editor, which might be in an inconsistent
    // state or simply not expect any other events to happen.
    // signalLater looks whether there are any handlers, and schedules
    // them to be executed when the last operation ends, or, if no
    // operation is active, when a timeout fires.
    function signalLater(emitter, type /*, values...*/) {
        var arr = emitter._handlers && emitter._handlers[type];
        if (!arr) return;
        var args = Array.prototype.slice.call(arguments, 2), list;
        if (operationGroup) {
            list = operationGroup.delayedCallbacks;
        } else if (orphanDelayedCallbacks) {
            list = orphanDelayedCallbacks;
        } else {
            list = orphanDelayedCallbacks = [];
            setTimeout(fireOrphanDelayed, 0);
        }
        function bnd(f) { return function () { f.apply(null, args); }; };
        for (var i = 0; i < arr.length; ++i)
            list.push(bnd(arr[i]));
    }

    function fireOrphanDelayed() {
        var delayed = orphanDelayedCallbacks;
        orphanDelayedCallbacks = null;
        for (var i = 0; i < delayed.length; ++i) delayed[i]();
    }

    // The DOM events that CodeMirror handles can be overridden by
    // registering a (non-DOM) handler on the editor for the event name,
    // and preventDefault-ing the event in that handler.
    function signalDOMEvent(cm, e, override) {
        if (typeof e == "string")
            e = { type: e, preventDefault: function () { this.defaultPrevented = true; } };
        signal(cm, override || e.type, cm, e);
        return e_defaultPrevented(e) || e.codemirrorIgnore;
    }

    function signalCursorActivity(cm) {
        var arr = cm._handlers && cm._handlers.cursorActivity;
        if (!arr) return;
        var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
        for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
            set.push(arr[i]);
    }

    function hasHandler(emitter, type) {
        var arr = emitter._handlers && emitter._handlers[type];
        return arr && arr.length > 0;
    }

    // Add on and off methods to a constructor's prototype, to make
    // registering events on such objects more convenient.
    function eventMixin(ctor) {
        ctor.prototype.on = function (type, f) { on(this, type, f); };
        ctor.prototype.off = function (type, f) { off(this, type, f); };
    }

    // MISC UTILITIES

    // Number of pixels added to scroller and sizer to hide scrollbar
    var scrollerGap = 30;

    // Returned or thrown by various protocols to signal 'I'm not
    // handling this'.
    var Pass = CodeMirror.Pass = { toString: function () { return "CodeMirror.Pass"; } };

    // Reused option objects for setSelection & friends
    var sel_dontScroll = { scroll: false }, sel_mouse = { origin: "*mouse" }, sel_move = { origin: "+move" };

    function Delayed() { this.id = null; }
    Delayed.prototype.set = function (ms, f) {
        clearTimeout(this.id);
        this.id = setTimeout(f, ms);
    };

    // Counts the column offset in a string, taking tabs into account.
    // Used mostly to find indentation.
    var countColumn = CodeMirror.countColumn = function (string, end, tabSize, startIndex, startValue) {
        if (end == null) {
            end = string.search(/[^\s\u00a0]/);
            if (end == -1) end = string.length;
        }
        for (var i = startIndex || 0, n = startValue || 0; ;) {
            var nextTab = string.indexOf("\t", i);
            if (nextTab < 0 || nextTab >= end)
                return n + (end - i);
            n += nextTab - i;
            n += tabSize - (n % tabSize);
            i = nextTab + 1;
        }
    };

    // The inverse of countColumn -- find the offset that corresponds to
    // a particular column.
    function findColumn(string, goal, tabSize) {
        for (var pos = 0, col = 0; ;) {
            var nextTab = string.indexOf("\t", pos);
            if (nextTab == -1) nextTab = string.length;
            var skipped = nextTab - pos;
            if (nextTab == string.length || col + skipped >= goal)
                return pos + Math.min(skipped, goal - col);
            col += nextTab - pos;
            col += tabSize - (col % tabSize);
            pos = nextTab + 1;
            if (col >= goal) return pos;
        }
    }

    var spaceStrs = [""];
    function spaceStr(n) {
        while (spaceStrs.length <= n)
            spaceStrs.push(lst(spaceStrs) + " ");
        return spaceStrs[n];
    }

    function lst(arr) { return arr[arr.length - 1]; }

    var selectInput = function (node) { node.select(); };
    if (ios) // Mobile Safari apparently has a bug where select() is broken.
        selectInput = function (node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
    else if (ie) // Suppress mysterious IE10 errors
        selectInput = function (node) { try { node.select(); } catch (_e) { } };

    function indexOf(array, elt) {
        for (var i = 0; i < array.length; ++i)
            if (array[i] == elt) return i;
        return -1;
    }
    function map(array, f) {
        var out = [];
        for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
        return out;
    }

    function createObj(base, props) {
        var inst;
        if (Object.create) {
            inst = Object.create(base);
        } else {
            var ctor = function () { };
            ctor.prototype = base;
            inst = new ctor();
        }
        if (props) copyObj(props, inst);
        return inst;
    };

    function copyObj(obj, target, overwrite) {
        if (!target) target = {};
        for (var prop in obj)
            if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
                target[prop] = obj[prop];
        return target;
    }

    function bind(f) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () { return f.apply(null, args); };
    }

    var nonASCIISingleCaseWordChar = /[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    var isWordCharBasic = CodeMirror.isWordChar = function (ch) {
        return /\w/.test(ch) || ch > "\x80" &&
          (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
    };
    function isWordChar(ch, helper) {
        if (!helper) return isWordCharBasic(ch);
        if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true;
        return helper.test(ch);
    }

    function isEmpty(obj) {
        for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
        return true;
    }

    // Extending unicode characters. A series of a non-extending char +
    // any number of extending chars is treated as a single unit as far
    // as editing and measuring is concerned. This is not fully correct,
    // since some scripts/fonts/browsers also treat other configurations
    // of code points as a group.
    var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }

    // DOM UTILITIES

    function elt(tag, content, className, style) {
        var e = document.createElement(tag);
        if (className) e.className = className;
        if (style) e.style.cssText = style;
        if (typeof content == "string") e.appendChild(document.createTextNode(content));
        else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
        return e;
    }

    var range;
    if (document.createRange) range = function (node, start, end) {
        var r = document.createRange();
        r.setEnd(node, end);
        r.setStart(node, start);
        return r;
    };
    else range = function (node, start, end) {
        var r = document.body.createTextRange();
        try { r.moveToElementText(node.parentNode); }
        catch (e) { return r; }
        r.collapse(true);
        r.moveEnd("character", end);
        r.moveStart("character", start);
        return r;
    };

    function removeChildren(e) {
        for (var count = e.childNodes.length; count > 0; --count)
            e.removeChild(e.firstChild);
        return e;
    }

    function removeChildrenAndAdd(parent, e) {
        return removeChildren(parent).appendChild(e);
    }

    var contains = CodeMirror.contains = function (parent, child) {
        if (parent.contains)
            return parent.contains(child);
        while (child = child.parentNode) {
            if (child.nodeType == 11) child = child.host;
            if (child == parent) return true;
        }
    };

    function activeElt() { return document.activeElement; }
    // Older versions of IE throws unspecified error when touching
    // document.activeElement in some cases (during loading, in iframe)
    if (ie && ie_version < 11) activeElt = function () {
        try { return document.activeElement; }
        catch (e) { return document.body; }
    };

    function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*"); }
    var rmClass = CodeMirror.rmClass = function (node, cls) {
        var current = node.className;
        var match = classTest(cls).exec(current);
        if (match) {
            var after = current.slice(match.index + match[0].length);
            node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
        }
    };
    var addClass = CodeMirror.addClass = function (node, cls) {
        var current = node.className;
        if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
    };
    function joinClasses(a, b) {
        var as = a.split(" ");
        for (var i = 0; i < as.length; i++)
            if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
        return b;
    }

    // WINDOW-WIDE EVENTS

    // These must be handled carefully, because naively registering a
    // handler for each editor will cause the editors to never be
    // garbage collected.

    function forEachCodeMirror(f) {
        if (!document.body.getElementsByClassName) return;
        var byClass = document.body.getElementsByClassName("CodeMirror");
        for (var i = 0; i < byClass.length; i++) {
            var cm = byClass[i].CodeMirror;
            if (cm) f(cm);
        }
    }

    var globalsRegistered = false;
    function ensureGlobalHandlers() {
        if (globalsRegistered) return;
        registerGlobalHandlers();
        globalsRegistered = true;
    }
    function registerGlobalHandlers() {
        // When the window resizes, we need to refresh active editors.
        var resizeTimer;
        on(window, "resize", function () {
            if (resizeTimer == null) resizeTimer = setTimeout(function () {
                resizeTimer = null;
                forEachCodeMirror(onResize);
            }, 100);
        });
        // When the window loses focus, we want to show the editor as blurred
        on(window, "blur", function () {
            forEachCodeMirror(onBlur);
        });
    }

    // FEATURE DETECTION

    // Detect drag-and-drop
    var dragAndDrop = function () {
        // There is *some* kind of drag-and-drop support in IE6-8, but I
        // couldn't get it to work yet.
        if (ie && ie_version < 9) return false;
        var div = elt('div');
        return "draggable" in div || "dragDrop" in div;
    }();

    var zwspSupported;
    function zeroWidthElement(measure) {
        if (zwspSupported == null) {
            var test = elt("span", "\u200b");
            removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
            if (measure.firstChild.offsetHeight != 0)
                zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
        }
        if (zwspSupported) return elt("span", "\u200b");
        else return elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
    }

    // Feature-detect IE's crummy client rect reporting for bidi text
    var badBidiRects;
    function hasBadBidiRects(measure) {
        if (badBidiRects != null) return badBidiRects;
        var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
        var r0 = range(txt, 0, 1).getBoundingClientRect();
        if (!r0 || r0.left == r0.right) return false; // Safari returns null in some cases (#2780)
        var r1 = range(txt, 1, 2).getBoundingClientRect();
        return badBidiRects = (r1.right - r0.right < 3);
    }

    // See if "".split is the broken IE version, if so, provide an
    // alternative way to split lines.
    var splitLines = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function (string) {
        var pos = 0, result = [], l = string.length;
        while (pos <= l) {
            var nl = string.indexOf("\n", pos);
            if (nl == -1) nl = string.length;
            var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
            var rt = line.indexOf("\r");
            if (rt != -1) {
                result.push(line.slice(0, rt));
                pos += rt + 1;
            } else {
                result.push(line);
                pos = nl + 1;
            }
        }
        return result;
    } : function (string) { return string.split(/\r\n?|\n/); };

    var hasSelection = window.getSelection ? function (te) {
        try { return te.selectionStart != te.selectionEnd; }
        catch (e) { return false; }
    } : function (te) {
        try { var range = te.ownerDocument.selection.createRange(); }
        catch (e) { }
        if (!range || range.parentElement() != te) return false;
        return range.compareEndPoints("StartToEnd", range) != 0;
    };

    var hasCopyEvent = (function () {
        var e = elt("div");
        if ("oncopy" in e) return true;
        e.setAttribute("oncopy", "return;");
        return typeof e.oncopy == "function";
    })();

    var badZoomedRects = null;
    function hasBadZoomedRects(measure) {
        if (badZoomedRects != null) return badZoomedRects;
        var node = removeChildrenAndAdd(measure, elt("span", "x"));
        var normal = node.getBoundingClientRect();
        var fromRange = range(node, 0, 1).getBoundingClientRect();
        return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
    }

    // KEY NAMES

    var keyNames = {
        3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
        19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
        36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
        46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 107: "=", 109: "-", 127: "Delete",
        173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
        221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
        63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
    };
    CodeMirror.keyNames = keyNames;
    (function () {
        // Number keys
        for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
        // Alphabetic keys
        for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
        // Function keys
        for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
    })();

    // BIDI HELPERS

    function iterateBidiSections(order, from, to, f) {
        if (!order) return f(from, to, "ltr");
        var found = false;
        for (var i = 0; i < order.length; ++i) {
            var part = order[i];
            if (part.from < to && part.to > from || from == to && part.to == from) {
                f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
                found = true;
            }
        }
        if (!found) f(from, to, "ltr");
    }

    function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
    function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

    function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
    function lineRight(line) {
        var order = getOrder(line);
        if (!order) return line.text.length;
        return bidiRight(lst(order));
    }

    function lineStart(cm, lineN) {
        var line = getLine(cm.doc, lineN);
        var visual = visualLine(line);
        if (visual != line) lineN = lineNo(visual);
        var order = getOrder(visual);
        var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
        return Pos(lineN, ch);
    }
    function lineEnd(cm, lineN) {
        var merged, line = getLine(cm.doc, lineN);
        while (merged = collapsedSpanAtEnd(line)) {
            line = merged.find(1, true).line;
            lineN = null;
        }
        var order = getOrder(line);
        var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
        return Pos(lineN == null ? lineNo(line) : lineN, ch);
    }
    function lineStartSmart(cm, pos) {
        var start = lineStart(cm, pos.line);
        var line = getLine(cm.doc, start.line);
        var order = getOrder(line);
        if (!order || order[0].level == 0) {
            var firstNonWS = Math.max(0, line.text.search(/\S/));
            var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
            return Pos(start.line, inWS ? 0 : firstNonWS);
        }
        return start;
    }

    function compareBidiLevel(order, a, b) {
        var linedir = order[0].level;
        if (a == linedir) return true;
        if (b == linedir) return false;
        return a < b;
    }
    var bidiOther;
    function getBidiPartAt(order, pos) {
        bidiOther = null;
        for (var i = 0, found; i < order.length; ++i) {
            var cur = order[i];
            if (cur.from < pos && cur.to > pos) return i;
            if ((cur.from == pos || cur.to == pos)) {
                if (found == null) {
                    found = i;
                } else if (compareBidiLevel(order, cur.level, order[found].level)) {
                    if (cur.from != cur.to) bidiOther = found;
                    return i;
                } else {
                    if (cur.from != cur.to) bidiOther = i;
                    return found;
                }
            }
        }
        return found;
    }

    function moveInLine(line, pos, dir, byUnit) {
        if (!byUnit) return pos + dir;
        do pos += dir;
        while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
        return pos;
    }

    // This is needed in order to move 'visually' through bi-directional
    // text -- i.e., pressing left should make the cursor go left, even
    // when in RTL text. The tricky part is the 'jumps', where RTL and
    // LTR text touch each other. This often requires the cursor offset
    // to move more than one unit, in order to visually move one unit.
    function moveVisually(line, start, dir, byUnit) {
        var bidi = getOrder(line);
        if (!bidi) return moveLogically(line, start, dir, byUnit);
        var pos = getBidiPartAt(bidi, start), part = bidi[pos];
        var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

        for (; ;) {
            if (target > part.from && target < part.to) return target;
            if (target == part.from || target == part.to) {
                if (getBidiPartAt(bidi, target) == pos) return target;
                part = bidi[pos += dir];
                return (dir > 0) == part.level % 2 ? part.to : part.from;
            } else {
                part = bidi[pos += dir];
                if (!part) return null;
                if ((dir > 0) == part.level % 2)
                    target = moveInLine(line, part.to, -1, byUnit);
                else
                    target = moveInLine(line, part.from, 1, byUnit);
            }
        }
    }

    function moveLogically(line, start, dir, byUnit) {
        var target = start + dir;
        if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
        return target < 0 || target > line.text.length ? null : target;
    }

    // Bidirectional ordering algorithm
    // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
    // that this (partially) implements.

    // One-char codes used for character types:
    // L (L):   Left-to-Right
    // R (R):   Right-to-Left
    // r (AL):  Right-to-Left Arabic
    // 1 (EN):  European Number
    // + (ES):  European Number Separator
    // % (ET):  European Number Terminator
    // n (AN):  Arabic Number
    // , (CS):  Common Number Separator
    // m (NSM): Non-Spacing Mark
    // b (BN):  Boundary Neutral
    // s (B):   Paragraph Separator
    // t (S):   Segment Separator
    // w (WS):  Whitespace
    // N (ON):  Other Neutrals

    // Returns null if characters are ordered as they appear
    // (left-to-right), or an array of sections ({from, to, level}
    // objects) in the order in which they occur visually.
    var bidiOrdering = (function () {
        // Character types for codepoints 0 to 0xff
        var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
        // Character types for codepoints 0x600 to 0x6ff
        var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
        function charType(code) {
            if (code <= 0xf7) return lowTypes.charAt(code);
            else if (0x590 <= code && code <= 0x5f4) return "R";
            else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
            else if (0x6ee <= code && code <= 0x8ac) return "r";
            else if (0x2000 <= code && code <= 0x200b) return "w";
            else if (code == 0x200c) return "b";
            else return "L";
        }

        var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
        var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
        // Browsers seem to always treat the boundaries of block elements as being L.
        var outerType = "L";

        function BidiSpan(level, from, to) {
            this.level = level;
            this.from = from; this.to = to;
        }

        return function (str) {
            if (!bidiRE.test(str)) return false;
            var len = str.length, types = [];
            for (var i = 0, type; i < len; ++i)
                types.push(type = charType(str.charCodeAt(i)));

            // W1. Examine each non-spacing mark (NSM) in the level run, and
            // change the type of the NSM to the type of the previous
            // character. If the NSM is at the start of the level run, it will
            // get the type of sor.
            for (var i = 0, prev = outerType; i < len; ++i) {
                var type = types[i];
                if (type == "m") types[i] = prev;
                else prev = type;
            }

            // W2. Search backwards from each instance of a European number
            // until the first strong type (R, L, AL, or sor) is found. If an
            // AL is found, change the type of the European number to Arabic
            // number.
            // W3. Change all ALs to R.
            for (var i = 0, cur = outerType; i < len; ++i) {
                var type = types[i];
                if (type == "1" && cur == "r") types[i] = "n";
                else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
            }

            // W4. A single European separator between two European numbers
            // changes to a European number. A single common separator between
            // two numbers of the same type changes to that type.
            for (var i = 1, prev = types[0]; i < len - 1; ++i) {
                var type = types[i];
                if (type == "+" && prev == "1" && types[i + 1] == "1") types[i] = "1";
                else if (type == "," && prev == types[i + 1] &&
                         (prev == "1" || prev == "n")) types[i] = prev;
                prev = type;
            }

            // W5. A sequence of European terminators adjacent to European
            // numbers changes to all European numbers.
            // W6. Otherwise, separators and terminators change to Other
            // Neutral.
            for (var i = 0; i < len; ++i) {
                var type = types[i];
                if (type == ",") types[i] = "N";
                else if (type == "%") {
                    for (var end = i + 1; end < len && types[end] == "%"; ++end) { }
                    var replace = (i && types[i - 1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
                    for (var j = i; j < end; ++j) types[j] = replace;
                    i = end - 1;
                }
            }

            // W7. Search backwards from each instance of a European number
            // until the first strong type (R, L, or sor) is found. If an L is
            // found, then change the type of the European number to L.
            for (var i = 0, cur = outerType; i < len; ++i) {
                var type = types[i];
                if (cur == "L" && type == "1") types[i] = "L";
                else if (isStrong.test(type)) cur = type;
            }

            // N1. A sequence of neutrals takes the direction of the
            // surrounding strong text if the text on both sides has the same
            // direction. European and Arabic numbers act as if they were R in
            // terms of their influence on neutrals. Start-of-level-run (sor)
            // and end-of-level-run (eor) are used at level run boundaries.
            // N2. Any remaining neutrals take the embedding direction.
            for (var i = 0; i < len; ++i) {
                if (isNeutral.test(types[i])) {
                    for (var end = i + 1; end < len && isNeutral.test(types[end]) ; ++end) { }
                    var before = (i ? types[i - 1] : outerType) == "L";
                    var after = (end < len ? types[end] : outerType) == "L";
                    var replace = before || after ? "L" : "R";
                    for (var j = i; j < end; ++j) types[j] = replace;
                    i = end - 1;
                }
            }

            // Here we depart from the documented algorithm, in order to avoid
            // building up an actual levels array. Since there are only three
            // levels (0, 1, 2) in an implementation that doesn't take
            // explicit embedding into account, we can build up the order on
            // the fly, without following the level-based algorithm.
            var order = [], m;
            for (var i = 0; i < len;) {
                if (countsAsLeft.test(types[i])) {
                    var start = i;
                    for (++i; i < len && countsAsLeft.test(types[i]) ; ++i) { }
                    order.push(new BidiSpan(0, start, i));
                } else {
                    var pos = i, at = order.length;
                    for (++i; i < len && types[i] != "L"; ++i) { }
                    for (var j = pos; j < i;) {
                        if (countsAsNum.test(types[j])) {
                            if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
                            var nstart = j;
                            for (++j; j < i && countsAsNum.test(types[j]) ; ++j) { }
                            order.splice(at, 0, new BidiSpan(2, nstart, j));
                            pos = j;
                        } else ++j;
                    }
                    if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
                }
            }
            if (order[0].level == 1 && (m = str.match(/^\s+/))) {
                order[0].from = m[0].length;
                order.unshift(new BidiSpan(0, 0, m[0].length));
            }
            if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
                lst(order).to -= m[0].length;
                order.push(new BidiSpan(0, len - m[0].length, len));
            }
            if (order[0].level != lst(order).level)
                order.push(new BidiSpan(order[0].level, len, len));

            return order;
        };
    })();

    // THE END

    CodeMirror.version = "4.12.1";

    return CodeMirror;
});

/*
 * Tracelytics PageGuide
 *
 * Copyright 2013 Tracelytics
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Contributing Author: Tracelytics Team
 */
tl = window.tl || {};
tl.pg = tl.pg || {};
tl.pg.interval = {};

(function ($) {
    /**
     * default preferences. can be overridden by user settings passed into
     * tl.pg.init().
     **/
    tl.pg.default_prefs = {
        'auto_show_first': true,
        'loading_selector': '#loading',
        'track_events_cb': function () { return; },
        'handle_doc_switch': null,
        'custom_open_button': null,
        'pg_caption': 'page guide',
        'tourtitle': 'Open Page Guide for help',
        'check_welcome_dismissed': function () {
            var key = 'tlypageguide_welcome_shown_' + tl.pg.hashUrl();
            // first, try to use localStorage
            try {
                if (localStorage.getItem(key)) {
                    return true;
                }
                // cookie fallback for older browsers
            } catch (e) {
                if (document.cookie.indexOf(key) > -1) {
                    return true;
                }
            }
            return false;
        },
        'dismiss_welcome': function () {
            var key = 'tlypageguide_welcome_shown_' + tl.pg.hashUrl();
            try {
                localStorage.setItem(key, true);
            } catch (e) {
                var exp = new Date();
                exp.setDate(exp.getDate() + 365);
                document.cookie = (key + '=true; expires=' + exp.toUTCString());
            }
        },
        'ready_callback': null,
        'pointer_fallback': true,
        'default_zindex': 100,
        'steps_element': '#tlyPageGuide',
        'auto_refresh': false,
        'refresh_welcome': false,
        'refresh_interval': 500
    };

    // boilerplate markup for the message display element and shadow/index bubble container.
    tl.pg.wrapper_markup =
        '<div id="tlyPageGuideWrapper">' +
            '<div id="tlyPageGuideOverlay"></div>' +
            '<div id="tlyPageGuideMessages">' +
                '<a href="#" class="tlypageguide_close" title="Close Guide">close</a>' +
                '<span class="tlypageguide_index"></span>' +
                '<div class="tlypageguide_text"></div>' +
                '<a href="#" class="tlypageguide_back" title="Previous">Previous</a>' +
                '<a href="#" class="tlypageguide_fwd" title="Next">Next</a>' +
            '</div>' +
            '<div id="tlyPageGuideContent"></div>' +
            '<div id="tlyPageGuideToggles"></div>' +
        '</div>';

    // boilerplate markup for the toggle element.
    tl.pg.toggle_markup =
        '<div class="tlypageguide_toggle" title="Launch Page Guide">' +
            '<div><span class="tlypageguide_toggletitle"></span></div>' +
        '</div>';

    /**
     * initiates the pageguide using the given preferences. must be idempotent, that is,
     * able to run multiple times without changing state.
     * preferences (object): any preferences the user wishes to override.
     **/
    tl.pg.init = function (preferences) {
        preferences = $.extend({}, tl.pg.default_prefs, preferences);
        var $guide = $(preferences.steps_element);
        var uuid = tl.pg.hashCode(preferences.steps_element);
        clearInterval(tl.pg.interval[uuid]);

        /* page guide object, for pages that have one */
        if ($guide.length === 0) {
            return;
        }

        // only worry about pointer_fallback if pointers are not supported in
        // the user's browser
        if (preferences.pointer_fallback && tl.pg.pointerEventSupport()) {
            preferences.pointer_fallback = false;
        }

        var $wrapper = $('#tlyPageGuideWrapper');
        var wrapperExists = true;
        if (!$wrapper.length) {
            wrapperExists = false;
            $wrapper = $(tl.pg.wrapper_markup);
        }

        if (preferences.custom_open_button == null &&
            $('#tlyPageGuideToggle' + uuid).length < 1) {
            var tourtitle = $guide.data('tourtitle') || preferences.tourtitle;
            var $toggle = $(tl.pg.toggle_markup)
                .attr('id', ('tlyPageGuideToggle' + uuid))
                .prepend(preferences.pg_caption);

            $toggle.find('.tlypageguide_toggletitle').text(tourtitle);
            $wrapper.find('#tlyPageGuideToggles').append($toggle);
        }

        if (!wrapperExists) {
            $('body').prepend($wrapper);
        }

        var pg = new tl.pg.PageGuide($('#tlyPageGuideWrapper'), preferences);

        pg.ready(function () {
            pg.setup_welcome();
            // start (neverending) welcome watch timer if preference is enabled
            if (pg.preferences.welcome_refresh) {
                pg.updateTimer(function () {
                    pg.setup_welcome();
                }, 'welcome');
            }
            pg.setup_handlers();
            pg.$base.find(".tlypageguide_toggle").animate({ "right": "-120px" }, 250);
            if (typeof (preferences.ready_callback) === 'function') {
                preferences.ready_callback();
            }
        });
        return pg;
    };

    /**
     * constructor for the base PageGuide object. contains: relevant elements,
     * user-defined preferences, and state information. all of this data is public.
     * pg_elem (jQuery element): the base wrapper element which contains all the pg
     *     elements
     * preferences (object): combined user-defined and default preferences.
     **/
    tl.pg.PageGuide = function (pg_elem, preferences) {
        this.preferences = preferences;
        this.$base = pg_elem;
        this.$message = this.$base.find('#tlyPageGuideMessages');
        this.$fwd = this.$base.find('a.tlypageguide_fwd');
        this.$back = this.$base.find('a.tlypageguide_back');
        this.$content = this.$base.find('#tlyPageGuideContent');
        this.$steps = $(preferences.steps_element);
        this.uuid = tl.pg.hashCode(preferences.steps_element);
        this.$toggle = this.$base.find('#tlyPageGuideToggle' + this.uuid);
        this.cur_idx = 0;
        this.cur_selector = null;
        this.track_event = this.preferences.track_events_cb;
        this.handle_doc_switch = this.preferences.handle_doc_switch;
        this.custom_open_button = this.preferences.custom_open_button;
        this.is_open = false;
        this.targetData = {};
        this.hashTable = {};
        this.changeQueue = [];
        this.visibleTargets = [];
        this.timer = {
            overlay: null,
            welcome: null
        };
    };

    /**
     * hash the current page's url. used in the default check_welcome_dismissed
     * and dismiss_welcome functions
     **/
    tl.pg.hashUrl = function () {
        return tl.pg.hashCode(window.location.href);
    };

    /**
     * generate a random numeric hash for a given string. originally from:
     * http://stackoverflow.com/a/7616484/1135244
     * str (string): the string to be hashed
     **/
    tl.pg.hashCode = function (str) {
        var hash = 0, i, c;
        if (str == null || str.length === 0) {
            return hash;
        }
        for (i = 0; i < str.length; i++) {
            c = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + c;
            hash = hash & hash;
        }
        return hash.toString();
    };

    /**
     * check whether the element targeted by the given selector is within the
     * currently scrolled viewport.
     * elem (string): selector for the element in question
     **/
    tl.pg.isScrolledIntoView = function (elem) {
        var dvtop = $(window).scrollTop(),
            dvbtm = dvtop + $(window).height(),
            eltop = $(elem).offset().top,
            elbtm = eltop + $(elem).height();

        return (elbtm >= dvtop) && (eltop <= dvbtm - 100);
    };

    /**
     * remove all traces of pageguide from the DOM.
     **/
    tl.pg.destroy = function () {
        $('#tlyPageGuideWrapper').remove();
        $('body').removeClass('tlypageguide-open');
        $('body').removeClass('tlyPageGuideWelcomeOpen');
        for (var k in tl.pg.interval) {
            if (tl.pg.interval.hasOwnProperty(k)) {
                clearInterval(tl.pg.interval[k]);
            }
        }
    };

    /**
     * check whether pointer events are supported in the user's browser.
     * from http://stackoverflow.com/a/8898475/1135244
     **/
    tl.pg.pointerEventSupport = function () {
        var element = document.createElement('x');
        var documentElement = document.documentElement;
        var getComputedStyle = window.getComputedStyle;
        var supports = null;
        if (!('pointerEvents' in element.style)) {
            return false;
        }
        element.style.pointerEvents = 'auto';
        element.style.pointerEvents = 'x';
        documentElement.appendChild(element);
        supports = getComputedStyle && getComputedStyle(element, '').pointerEvents === 'auto';
        documentElement.removeChild(element);
        return !!supports;
    };

    /**
     * check for a welcome message. if it exists, determine whether or not to show it,
     * using self.preferences.check_welcome_dismissed. then, bind relevant handlers to
     * the buttons included in the welcome message element.
     **/
    tl.pg.PageGuide.prototype.setup_welcome = function () {
        var $welcome = $('.tlyPageGuideWelcome, #tlyPageGuideWelcome')
            .not('#tlyPageGuideWrapper > .tlyPageGuideWelcome, #tlyPageGuideWrapper > #tlyPageGuideWelcome')
            .eq(0);
        var self = this;
        if ($welcome.length > 0) {
            self.preferences.show_welcome = !self.preferences.check_welcome_dismissed();
            if (self.preferences.show_welcome) {
                $welcome.appendTo(self.$base);
            }

            if ($welcome.find('.tlypageguide_ignore').length) {
                $welcome.on('click', '.tlypageguide_ignore', function () {
                    self.close_welcome();
                    self.track_event('PG.ignoreWelcome');
                });
            }
            if ($welcome.find('.tlypageguide_dismiss').length) {
                $welcome.on('click', '.tlypageguide_dismiss', function () {
                    self.close_welcome();
                    self.preferences.dismiss_welcome();
                    self.track_event('PG.dismissWelcome');
                });
            }
            $welcome.on('click', '.tlypageguide_start', function () {
                self.open();
                jQuery('#quickSetup').slideToggle();
                self.track_event('PG.startFromWelcome');
            });

            if (self.preferences.show_welcome) {
                self.pop_welcome();
            }
        }
    };

    /**
     * timer function. will poll the DOM at 250ms intervals until the user-defined
     * self.preferences.loading_selector becomes visible, at which point it will
     * execute the given callback. useful in cases where the DOM elements pageguide
     * depends on are loaded asynchronously.
     * callback (function): executes when loading selector is visible
     **/
    tl.pg.PageGuide.prototype.ready = function (callback) {
        var self = this;
        tl.pg.interval[self.uuid] = window.setInterval(function () {
            if (!$(self.preferences.loading_selector).is(':visible')) {
                callback();
                clearInterval(tl.pg.interval[self.uuid]);
            }
        }, 250);
        return this;
    };

    /**
     * grab any pageguide steps on the page that have not yet been added
     * to the pg object. for each one, append a shadow element and corresponding
     * index bubble to #tlyPageGuideContent.
     **/
    tl.pg.PageGuide.prototype.addSteps = function () {
        var self = this;
        self.$steps.find('li').each(function (i, el) {
            var $el = $(el);
            var tourTarget = $el.data('tourtarget');
            var positionClass = $el.attr('class');
            if (self.targetData[tourTarget] == null) {
                self.targetData[tourTarget] = {
                    targetStyle: {},
                    content: $el.html()
                };
                var hashCode = tl.pg.hashCode(tourTarget) + '';
                self.hashTable[hashCode] = tourTarget;
                self.$content.append(
                    '<div class="tlypageguide_shadow tlypageguide_shadow' + hashCode +
                    '" data-selectorhash="' + hashCode + '">' +
                        '<span class="tlyPageGuideStepIndex ' + positionClass + '"></span>' +
                    '</div>'
                );
            }
        });
    };

    /**
     * go through all the current targets and check whether the elements are
     * on the page and visible. if so, record all appropriate css data in self.targetData.
     * any changes in each self.targetData element get pushed to self.changeQueue.
     **/
    tl.pg.PageGuide.prototype.checkTargets = function () {
        var self = this;
        var visibleIndex = 0;
        var newVisibleTargets = [];
        for (var target in self.targetData) {
            var $elements = $(target);
            var $el;
            // assume all invisible
            var newTargetData = {
                targetStyle: {
                    display: 'none'
                }
            };
            // find first visible instance of target selector per issue #4798
            for (var i = 0; i < $elements.length; i++) {
                if ($($elements[i]).is(':visible')) {
                    $el = $($elements[i]); // is it weird to '$($x)'?
                    newTargetData.targetStyle.display = 'block';
                    var offset = $el.offset();
                    $.extend(newTargetData.targetStyle, {
                        top: offset.top,
                        left: offset.left,
                        width: $el.outerWidth(),
                        height: $el.outerHeight(),
                        'z-index': $el.css('z-index')
                    });
                    visibleIndex++;
                    newTargetData.index = visibleIndex;
                    newVisibleTargets.push(target);
                    break;
                }
            }
            var diff = {
                target: target
            };
            // compare new styles with existing ones
            for (var prop in newTargetData.targetStyle) {
                if (newTargetData.targetStyle[prop] !== self.targetData[target][prop]) {
                    if (diff.targetStyle == null) {
                        diff.targetStyle = {};
                    }
                    diff.targetStyle[prop] = newTargetData.targetStyle[prop];
                }
            }
            // compare index with existing index
            if (newTargetData.index !== self.targetData[target].index) {
                diff.index = newTargetData.index;
            }
            // push diff onto changequeue if changes have been made
            if (diff.targetStyle != null || diff.index != null) {
                self.changeQueue.push(diff);
            }
            $.extend(self.targetData[target], newTargetData);
        }
        self.visibleTargets = newVisibleTargets;
    };

    /**
     * position the shadow elements (and their attached index bubbles) in their
     * appropriate places over the visible targets. executes by iterating through
     * all the changes that have been pushed to changeQueue
     **/
    tl.pg.PageGuide.prototype.positionOverlays = function () {
        for (var i = 0; i < this.changeQueue.length; i++) {
            var changes = this.changeQueue[i];
            var selector = '.tlypageguide_shadow' + tl.pg.hashCode(changes.target);
            var $el = this.$content.find(selector);
            if (changes.targetStyle != null) {
                var style = $.extend({}, changes.targetStyle);
                for (var prop in style) {
                    // fix this
                    if (prop === 'z-index') {
                        style[prop] = (typeof style[prop] === 'number') ?
                            style[prop] + 1 : this.preferences.default_zindex;
                    }
                }
                $el.css(style);
            }
            if (changes.index != null) {
                $el.find('.tlyPageGuideStepIndex').text(changes.index);
            }
        }
        this.changeQueue = [];
    };

    /**
     * find all pageguide steps and appropriately position their corresponding pageguide
     * elements. ideal to run on its own whenever pageguide is opened, or when a DOM
     * change takes place that will not affect the visibility of the target elements
     * (e.g. resize)
     **/
    tl.pg.PageGuide.prototype.refreshVisibleSteps = function () {
        this.addSteps();
        this.checkTargets();
        this.positionOverlays();
    };

    /**
     * update visible steps on page, and also navigate to the next available step if
     * necessary. this is especially useful when DOM changes take place while the
     * pageguide is open, meaning its target elements may be affected.
     **/
    tl.pg.PageGuide.prototype.updateVisible = function () {
        this.refreshVisibleSteps();
        if (this.cur_selector != null && this.cur_selector !== this.visibleTargets[this.cur_idx]) {
            // mod by target length in case user was viewing last target and it got removed
            var newIndex = this.cur_idx % this.visibleTargets.length;
            this.show_message(newIndex);
        }
    };

    /**
     * show the step specified by either a numeric index or a selector.
     * index (number): index of the currently visible step to show.
     **/
    tl.pg.PageGuide.prototype.show_message = function (index) {
        var targetKey = this.visibleTargets[index];
        var target = this.targetData[targetKey];
        if (target != null) {
            var selector = '.tlypageguide_shadow' + tl.pg.hashCode(targetKey);

            if (this.handle_doc_switch) {
                var len = this.visibleTargets.length;
                var prevTargetKey = this.visibleTargets[(index - 1 + len) % len];
                this.handle_doc_switch(targetKey, prevTargetKey);
            }

            this.$content.find('.tlypageguide-active').removeClass('tlypageguide-active');
            this.$content.find(selector).addClass('tlypageguide-active');

            this.$message.find('.tlypageguide_text').html(target.content);
            this.cur_idx = index;
            this.cur_selector = targetKey;

            // DOM stuff
            var defaultHeight = 100;
            var oldHeight = parseFloat(this.$message.css("height"));
            this.$message.css("height", "auto");
            var height = parseFloat(this.$message.outerHeight());
            this.$message.css("height", oldHeight);
            if (height < defaultHeight) {
                height = defaultHeight;
            }
            if (height > $(window).height() / 2) {
                height = $(window).height() / 2;
            }

            if (!tl.pg.isScrolledIntoView($(targetKey))) {
                $('html,body').animate({ scrollTop: target.targetStyle.top - 50 }, 500);
            }
            this.$message.show().animate({ 'height': height }, 500);
            this.roll_number(this.$message.find('span'), target.index);
        }
    };

    /**
     * navigate to the previous step. if at the first step, loop around to the last.
     **/
    tl.pg.PageGuide.prototype.navigateBack = function () {
        /*
         * If -n < x < 0, then the result of x % n will be x, which is
         * negative. To get a positive remainder, compute (x + n) % n.
         */
        var new_index = (this.cur_idx + this.visibleTargets.length - 1) % this.visibleTargets.length;

        this.track_event('PG.back');
        this.show_message(new_index, true);
        return false;
    };

    /**
     * navigate to the next step. if at last step, loop back to the first.
     **/
    tl.pg.PageGuide.prototype.navigateForward = function () {
        var new_index = (this.cur_idx + 1) % this.visibleTargets.length;

        this.track_event('PG.fwd');
        this.show_message(new_index, true);
        return false;
    };

    /**
     * open the pageguide! can be fired at any time, though it's usually done via
     * the toggle element (either boilerplate or user-specified) or the welcome
     * modal.
     **/
    tl.pg.PageGuide.prototype.open = function () {
        if (this.is_open) {
            return;
        } else {
            this._open();
        }
    };

    tl.pg.PageGuide.prototype._open = function () {
        if (this.preferences.show_welcome) {
            this.preferences.dismiss_welcome();
            this.close_welcome();
        }
        this.is_open = true;
        this.track_event('PG.open');

        this.refreshVisibleSteps();

        if (this.preferences.auto_show_first && this.visibleTargets.length) {
            this.show_message(0);
        }
        $('body').addClass('tlypageguide-open');
        this.$toggle.addClass('tlyPageGuideToggleActive');
        jQuery('#quickSetup').slideToggle();

        var self = this;
        if (self.preferences.auto_refresh) {
            self.updateTimer(function () {
                self.updateVisible();
            }, 'overlay');
        }
    };

    tl.pg.PageGuide.prototype.updateTimer = function (cb, prop) {
        var self = this;
        cb();
        self.timer[prop] = setTimeout(function () {
            self.updateTimer(cb, prop);
        }, self.preferences.refresh_interval);
    };

    /**
     * close the pageguide. can also be fired at any time, though usually done via
     * the toggle or the close button.
     **/
    tl.pg.PageGuide.prototype.close = function () {
        if (!this.is_open) {
            return;
        } else {
            this._close();
        }
    };

    tl.pg.PageGuide.prototype._close = function () {
        this.is_open = false;
        this.track_event('PG.close');
        if (this.preferences.auto_refresh) {
            clearTimeout(this.timer.overlay);
        }

        this.$content.find('.tlypageguide_shadow').css('display', 'none');
        this.$content.find('.tlypageguide-active').removeClass('tlypageguide-active');
        this.$message.animate({ height: "0" }, 500, function () {
            $(this).hide();
        });

        $('body').removeClass('tlypageguide-open');
        this.$toggle.removeClass('tlyPageGuideToggleActive');
        jQuery('#quickSetup').slideToggle();
    };

    /**
     * bind all relevant event handlers within the document.
     **/
    tl.pg.PageGuide.prototype.setup_handlers = function () {
        var self = this;

        /* interaction: open/close PG interface */
        var interactor = (self.custom_open_button == null) ?
                        self.$base.find('#tlyPageGuideToggle' + self.uuid) :
                        $(self.custom_open_button);
        interactor.off();
        interactor.on('click', function () {
            if (self.is_open) {
                self.close();
            } else if (self.preferences.show_welcome &&
                      !self.preferences.check_welcome_dismissed() &&
                      !$('body').hasClass('tlyPageGuideWelcomeOpen')) {
                self.pop_welcome();
            } else {
                self.open();
            }
        });

        /* close guide */
        $('.tlypageguide_close', self.$message.add($('.tlypageguide_toggle')))
            .on('click', function () {
                self.close();
                jQuery('#quickSetup').slideToggle();
                return false;
            });

        /* interaction: item click */
        self.$base.on('click', '.tlyPageGuideStepIndex', function () {
            var selector = self.hashTable[$(this).parent().data('selectorhash')];
            var target = self.targetData[selector];
            var index = (target) ? target.index : 1;
            self.track_event('PG.specific_elt');
            self.show_message(index - 1);
        });

        /* interaction: fwd/back click */
        self.$fwd.on('click', function () {
            if (self.is_open) {
                self.navigateForward();
            }
            return false;
        });

        self.$back.on('click', function () {
            if (self.is_open) {
                self.navigateBack();
            }
            return false;
        });

        // pass through click events on overlays if necessary
        if (self.preferences.pointer_fallback) {
            self.$base.on('click', '.tlypageguide_shadow', function (e) {
                $(this).hide();
                var $bottomElement = $(document.elementFromPoint(e.clientX, e.clientY));
                if ($bottomElement.is('a')) {
                    $bottomElement.get(0).click(); // required for anchor click
                } else {
                    $bottomElement.trigger(e.type);
                }
                $(this).show();
            });
        }

        /* register resize callback */
        $(window).resize(function () {
            if (self.is_open) {
                self.refreshVisibleSteps();
            }
        });
    };

    /**
     * animate a given number to roll to the side.
     * num_wrapper (jQuery element): the element whose number to roll
     * new_text (string): the new text to roll across the element
     * left (boolean): whether or not to roll to the left-hand side
     **/
    tl.pg.PageGuide.prototype.roll_number = function (num_wrapper, new_text, left) {
        num_wrapper.animate({ 'text-indent': (left ? '' : '-') + '50px' }, 'fast', function () {
            num_wrapper.html(new_text);
            num_wrapper.css({ 'text-indent': (left ? '-' : '') + '50px' }, 'fast').animate({ 'text-indent': "0" }, 'fast');
        });
    };

    /**
     * pop up the welcome modal.
     **/
    tl.pg.PageGuide.prototype.pop_welcome = function () {
        $('body').addClass('tlyPageGuideWelcomeOpen');
        this.track_event('PG.welcomeShown');
    };

    /**
     * close the welcome modal.
     **/
    tl.pg.PageGuide.prototype.close_welcome = function () {
        $('body').removeClass('tlyPageGuideWelcomeOpen');
    };
}(jQuery));

/************************************************************************************************************
*	DHTML modal dialog box
*
*	Created:						August, 26th, 2006
*	@class Purpose of class:		Display a modal dialog box on the screen.
*			
*	Css files used by this script:	modal-message.css
*
*	Demos of this class:			demo-modal-message-1.html
*
* 	modal-message.js
*
************************************************************************************************************/


/**
* @constructor
*/

DHTML_modalMessage = function () {
    var url;								// url of modal message
    var htmlOfModalMessage;					// html of modal message

    var divs_transparentDiv;				// Transparent div covering page content
    var divs_content;						// Modal message div.
    var layoutCss;							// Name of css file;
    var width;								// Width of message box
    var height;								// Height of message box

    var existingBodyOverFlowStyle;			// Existing body overflow css
    var dynContentObj;						// Reference to dynamic content object
    var cssClassOfMessageBox;				// Alternative css class of message box - in case you want a different appearance on one of them
    var shadowDivVisible;					// Shadow div visible ? 
    var shadowOffset; 						// X and Y offset of shadow(pixels from content box)

    this.url = '';							// Default url is blank
    this.htmlOfModalMessage = '';			// Default message is blank
    this.layoutCss = 'modal-message.css';	// Default CSS file
    this.height = 200;						// Default height of modal message
    this.width = 400;						// Default width of modal message
    this.cssClassOfMessageBox = false;		// Default alternative css class for the message box
    this.shadowDivVisible = true;			// Shadow div is visible by default
    this.shadowOffset = 5;					// Default shadow offset.



}

DHTML_modalMessage.prototype = {
    // {{{ setSource(urlOfSource)
    /**
     *	Set source of the modal dialog box
     * 	
     *
     * @public	
     */
    setSource: function (urlOfSource) {
        this.url = urlOfSource;

    }
    // }}}	
	,
    // {{{ setHtmlContent(newHtmlContent)
    /**
     *	Setting static HTML content for the modal dialog box.
     * 	
     *	@param String newHtmlContent = Static HTML content of box
     *
     * @public	
     */
    setHtmlContent: function (newHtmlContent) {
        this.htmlOfModalMessage = newHtmlContent;

    }
    // }}}		
	,
    // {{{ setSize(width,height)
    /**
     *	Set the size of the modal dialog box
     * 	
     *	@param int width = width of box
     *	@param int height = height of box
     *
     * @public	
     */
    setSize: function (width, height) {
        if (width) this.width = width;
        if (height) this.height = height;
    }
    // }}}		
	,
    // {{{ setCssClassMessageBox(newCssClass)
    /**
     *	Assign the message box to a new css class.(in case you wants a different appearance on one of them)
     * 	
     *	@param String newCssClass = Name of new css class (Pass false if you want to change back to default)
     *
     * @public	
     */
    setCssClassMessageBox: function (newCssClass) {
        this.cssClassOfMessageBox = newCssClass;
        if (this.divs_content) {
            if (this.cssClassOfMessageBox)
                this.divs_content.className = this.cssClassOfMessageBox;
            else
                this.divs_content.className = 'modalDialog_contentDiv';
        }

    }
    // }}}		
	,
    // {{{ setShadowOffset(newShadowOffset)
    /**
     *	Specify the size of shadow
     * 	
     *	@param Int newShadowOffset = Offset of shadow div(in pixels from message box - x and y)
     *
     * @public	
     */
    setShadowOffset: function (newShadowOffset) {
        this.shadowOffset = newShadowOffset

    }
    // }}}		
	,
    // {{{ display()
    /**
     *	Display the modal dialog box
     * 	
     *
     * @public	
     */
    display: function () {



        if (!this.divs_transparentDiv) {
            this.__createDivs();
        }




        // Redisplaying divs
        this.divs_transparentDiv.style.display = 'block';
        this.divs_content.style.display = 'block';
        this.divs_shadow.style.display = 'block';



        this.__resizeDivs();



        /* Call the __resizeDivs method twice in case the css file has changed. The first execution of this method may not catch these changes */
        window.refToThisModalBoxObj = this;
        setTimeout('window.refToThisModalBoxObj.__resizeDivs()', 150);

        this.__insertContent();	// Calling method which inserts content into the message div.
    }
    // }}}		
	,
    // {{{ ()
    /**
     *	Display the modal dialog box
     * 	
     *
     * @public	
     */
    setShadowDivVisible: function (visible) {
        this.shadowDivVisible = visible;
    }
    // }}}	
	,
    // {{{ close()
    /**
     *	Close the modal dialog box
     * 	
     *
     * @public	
     */
    close: function () {
        document.documentElement.style.overflow = '';	// Setting the CSS overflow attribute of the <html> tag back to default.
        /* Hiding divs */
        this.divs_transparentDiv.style.display = 'none';
        this.divs_content.style.display = 'none';
        this.divs_shadow.style.display = 'none';

    }
    // }}}	
	,
    // {{{ __createDivs()
    /**
     *	Create the divs for the modal dialog box
     * 	
     *
     * @private	
     */
    __createDivs: function () {
        // Creating transparent div
        this.divs_transparentDiv = document.createElement('DIV');
        this.divs_transparentDiv.className = 'modalDialog_transparentDivs';
        this.divs_transparentDiv.style.left = '0px';
        this.divs_transparentDiv.style.top = '0px';
        document.body.appendChild(this.divs_transparentDiv);
        // Creating content div
        this.divs_content = document.createElement('DIV');
        this.divs_content.className = 'modalDialog_contentDiv';
        this.divs_content.id = 'DHTMLSuite_modalBox_contentDiv';
        document.body.appendChild(this.divs_content);
        // Creating shadow div
        this.divs_shadow = document.createElement('DIV');
        this.divs_shadow.className = 'modalDialog_contentDiv_shadow';
        document.body.appendChild(this.divs_shadow);

    }
    // }}}	
	,
    // {{{ __resizeDivs()
    /**
     *	Resize the message divs
     * 	
     *
     * @private	
     */
    __resizeDivs: function () {

        var topOffset = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

        if (this.cssClassOfMessageBox)
            this.divs_content.className = this.cssClassOfMessageBox;
        else
            this.divs_content.className = 'modalDialog_contentDiv';



        if (!this.divs_transparentDiv) return;
        document.documentElement.style.overflow = 'hidden';

        var bodyWidth = document.documentElement.clientWidth;
        var bodyHeight = document.documentElement.clientHeight;
        if (bodyWidth == 0) { bodyWidth = document.body.clientWidth; }
        if (bodyHeight == 0) { bodyHeight = document.body.clientHeight; }


        // Setting width and height of content div
        this.divs_content.style.width = this.width + 'px';
        this.divs_content.style.height = this.height + 'px';

        // Creating temporary width variables since the actual width of the content div could be larger than this.width and this.height(i.e. padding and border)
        var tmpWidth = this.divs_content.offsetWidth;
        var tmpHeight = this.divs_content.offsetHeight;


        // Setting width and height of left transparent div

        this.divs_transparentDiv.style.width = Math.ceil((bodyWidth - tmpWidth) / 2) + 'px';
        this.divs_transparentDiv.style.height = bodyHeight + 'px';



        // Setting size extremely large for bottom, left and right side transparent divs.
        this.divs_transparentDiv.style.height = bodyHeight + 'px'; //'4000px';   
        this.divs_transparentDiv.style.width = bodyWidth + 'px'; //'4000px';   
        //this.divs_transparentDiv.style.overflow = 'hidden';   



        this.divs_content.style.left = Math.ceil((bodyWidth - tmpWidth) / 2) + 'px';;
        this.divs_content.style.top = (Math.ceil((bodyHeight - tmpHeight) / 2) + topOffset) + 'px';


        this.divs_shadow.style.left = (this.divs_content.style.left.replace('px', '') / 1 + this.shadowOffset) + 'px';
        this.divs_shadow.style.top = (this.divs_content.style.top.replace('px', '') / 1 + this.shadowOffset) + 'px';
        this.divs_shadow.style.height = tmpHeight + 'px';
        this.divs_shadow.style.width = tmpWidth + 'px';



        if (!this.shadowDivVisible) this.divs_shadow.style.display = 'none';	// Hiding shadow if it has been disabled


    }
    // }}}	
	,
    // {{{ __insertContent()
    /**
     *	Insert content into the content div
     * 	
     *
     * @private	
     */
    __insertContent: function () {
        if (this.url) {	// url specified - load content dynamically
            ajax_loadContent('DHTMLSuite_modalBox_contentDiv', this.url);

        } else {	// no url set, put static content inside the message box
            this.divs_content.innerHTML = this.htmlOfModalMessage;
        }
    }
}

/*
	// ajaxUtilities.js
*/

function ajaxPostJson(urlpage, frmid, funcValidate) {

    var bolResult
    var dataq;
    dataq = jQuery('#' + frmid).serialize() + '&ajaxsubmit=1';
    document.body.style.cursor = 'wait';
    bolResult = true;
    //alert(dataq);
    //alert(urlpage);
    //alert(frmid);
    //window.location = urlpage + '&' + dataq;
    //return;

    jQuery("#divMessageSuccess").text('');
    jQuery("#divMessageErrorTxt").text('');

    jQuery.ajax({
        url: urlpage,
        dataType: 'json',
        type: 'POST',
        data: dataq,
        cache: false,
        async: false,
        beforeSend: funcValidate,
        statusCode: {
            301: function () { alert('301 - Reload the page.'); },
            302: function () { alert('302 - Reload the page.'); }
        },
        success: function (strResult) {
            try {
                var strErrors = "";
                jQuery.each(strResult.errorMsg, function (index, value) {
                    if (value != null)
                        strErrors += value + "<hr>";
                })

                //simulate error:
                //strErrors = "Error Status Message";

                if (strErrors != '') {
                    jQuery("#divMessageErrorTxt").html("<i class='icon-remove-sign'></i>" + strErrors);
                    jQuery("#divMessageError").fadeIn(1000);
                    bolResult = false;
                }
            }
            catch (e) { alert('Missing strResult.errorMsg'); }

            try {
                if (strResult.validateMsg != '') {
                    jQuery("#divMessageSuccess").html("<i class='icon-ok-sign'></i>" + strResult.validateMsg);
                    jQuery("#divMessageSuccess").fadeIn(500).delay(1000).fadeOut(1000);
                }
            }
            catch (e) { alert('Missing strResult.validateMsg'); }

            document.body.style.cursor = '';
        },

        error: function (jqXHR, textStatus) {
            jQuery.modal.close();
            document.body.style.cursor = '';
            if (jqXHR.statusCode > 0) {
                alert("Error processing request " + jqXHR.statusCode + " - " + jqXHR);
                alert(jqXHR.responseText);
                document.write(jqXHR.responseText);
                bolResult = false;
            }
        }
    });

    document.body.style.cursor = '';
    return (bolResult);

}

function ajaxPostHtml(urlpage, dataq, divtoReplace, meth) {
    var bolResult
    document.body.style.cursor = 'wait';
    bolResult = true;

    jQuery.ajax({
        url: urlpage,
        dataType: 'html',
        type: meth,
        data: dataq + '&ajaxsubmit=1',
        cache: false,
        async: true,
        statusCode: {
            301: function () { alert('301 - Reload the page.'); },
            302: function () { alert('302 - Reload the page.'); }
        },
        success: function (strResult) {
            try {
                if (strResult != '') {
                    if (divtoReplace != '')
                        jQuery("#" + divtoReplace).html(strResult);
                }
            }
            catch (e) {
                bolResult = false;
            }
            document.body.style.cursor = '';
        },

        error: function (jqXHR, textStatus) {
            document.body.style.cursor = '';
        }
    });

    document.body.style.cursor = '';
    return (bolResult);
}

var temp = window.location.href.split("?");
var splitUrl = temp[0].split("/");
var domain = temp[2];

function checkDoubleSlashURL() {
    var strUrl = window.location.toString().toLowerCase();
    var strUrl2 = strUrl;
    strUrl2 = strUrl2.replace("http://", "");
    strUrl2 = strUrl2.replace("https://", "");

    if (strUrl2.indexOf("//") >= 0) {
        strUrl = strUrl.replace(new RegExp(/\/\//gi), "/");
        strUrl = strUrl.replace("http:/", "http://");
        strUrl = strUrl.replace("https:/", "https://");
        window.location = strUrl;
    }
}

function getPageName() {
	
	var strPageName = splitUrl[splitUrl.length - 1];

    return strPageName;
}

/* 
     * 3dcart.js
*/

function addLoadEvent(func) {
    //Add event to the onload stack
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return '';
    }
    else {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}


function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function validIP(IPvalue) {
    errorString = "";
    theName = "IPaddress";

    var ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    var ipArray = IPvalue.match(ipPattern);

    if (IPvalue == "0.0.0.0")
        errorString = errorString + theName + ': ' + IPvalue + ' is a special IP address and cannot be used here.';
    else if (IPvalue == "255.255.255.255")
        errorString = errorString + theName + ': ' + IPvalue + ' is a special IP address and cannot be used here.';
    if (ipArray == null)
        errorString = errorString + theName + ': ' + IPvalue + ' is not a valid IP address.';
    else {
        for (i = 0; i < 4; i++) {
            thisSegment = ipArray[i];
            if (thisSegment > 255) {
                errorString = errorString + theName + ': ' + IPvalue + ' is not a valid IP address.';
                i = 4;
            }
            if ((i == 0) && (thisSegment > 255)) {
                errorString = errorString + theName + ': ' + IPvalue + ' is a special IP address and cannot be used here.';
                i = 4;
            }
        }
    }
    extensionLength = 3;
    if (errorString == "")
        return true;
    else
        return false;
}

function addJavascript(jsname) {
    var th = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', jsname);
    th.appendChild(s);
}

//addJavascript('templates/js/securityToken.asp');

//ajax-dynamic-content

var enableCache = true;
var jsCache = new Array();
var loginbox;

var dynamicContent_ajaxObjects = new Array();

function ajax_showContent(divId, ajaxIndex, url) {
    document.getElementById(divId).innerHTML = dynamicContent_ajaxObjects[ajaxIndex].response;
    if (enableCache) {
        jsCache[url] = dynamicContent_ajaxObjects[ajaxIndex].response;
    }
    dynamicContent_ajaxObjects[ajaxIndex] = false;
}

function ajax_loadContent(divId, url) {
    if (enableCache && jsCache[url]) {
        document.getElementById(divId).innerHTML = jsCache[url];
        return;
    }

    var ajaxIndex = dynamicContent_ajaxObjects.length;
    document.getElementById(divId).innerHTML = '<p style="vertical-align: middle"><img src="/admin/templates/images/ajax_busy.gif"></p>';
    dynamicContent_ajaxObjects[ajaxIndex] = new sack();

    dynamicContent_ajaxObjects[ajaxIndex].requestFile = url;	// Specifying which file to get
    dynamicContent_ajaxObjects[ajaxIndex].onCompletion = function () { ajax_showContent(divId, ajaxIndex, url); };	// Specify function that will be executed after file has been found
    dynamicContent_ajaxObjects[ajaxIndex].runAJAX();		// Execute AJAX function	


}

function ajax_loadContent_help(divId, url) {
    if (enableCache && jsCache[url]) {
        document.getElementById(divId).innerHTML = jsCache[url];
        ajax_tooltipObj.style.display = 'block';
        return;
    }

    var ajaxIndex = dynamicContent_ajaxObjects.length;
    document.getElementById(divId).innerHTML = '';
    dynamicContent_ajaxObjects[ajaxIndex] = new sack();

    dynamicContent_ajaxObjects[ajaxIndex].requestFile = url;	// Specifying which file to get
    dynamicContent_ajaxObjects[ajaxIndex].onCompletion = function () { ajax_showContent(divId, ajaxIndex, url); ajax_tooltipObj.style.display = 'block'; };	// Specify function that will be executed after file has been found
    dynamicContent_ajaxObjects[ajaxIndex].runAJAX();		// Execute AJAX function	


}

function fadelogin() {

    document.getElementById("loginbox").style.display = "none";
    document.getElementById("loginbox").innerHTML = loginbox;
    //Effect.Appear('loginbox');
    jQuery('#loginbox').fadeIn();
}

function returnlogin() {
    //document.getElementById("errorbox").style.display="none";
    //Effect.Fade("errorbox");
    jQuery('#errorbox').fadeOut();
    var t = setTimeout("fadelogin();", 1000);
    doLogin = 0;
    //document.getElementById("loginbox").innerHTML=loginbox;
}

function fadefp() {

    document.getElementById("forgotpass").style.display = "none";
    //document.getElementById("forgotpass").innerHTML=forgotpass;
    //Effect.Appear('forgotpass');
    jQuery('#forgotpass').fadeIn();
}

function returnfp() {
    //Effect.Fade("errorbox");
    jQuery('#errorbox').fadeOut();
    jQuery('#recaptcha_reload').click();
    var t = setTimeout("fadefp();", 1000)

}

function ajax_dologinaction(loginajax, login) {
    var content;
    content = loginajax.response;
    handleLoginResponse(content);

}

function handleLoginResponse(responseCode) {

    document.getElementById("errorbox").style.display = "none";
    loginbox = document.getElementById("loginbox").innerHTML;

    if (responseCode == "0") {
        document.getElementById("error").innerHTML = "<div class='alert alert-danger alert-block'><h4 class='alert-heading'>Error!</h4>Login or Password is Incorrect! <a href='#' onClick='javascript:returnlogin();'>Click here</a> to try again.</div>";
        var t = setTimeout("jQuery('#errorbox').fadeIn();", 1000)
    }
    if (responseCode == "1") {
        if (document.getElementById("remember_me") != null) {
            if (document.getElementById("remember_me").checked) {
                jQuery.cookie("save_user", document.getElementById("username").value.trim());
            }
            else {
                jQuery.removeCookie("save_user");
            }
        }
        var t = setTimeout("document.location.href='admin-home.asp';", 500);
    }
    if (responseCode == "-1") {
        document.getElementById("error").innerHTML = "<div class='alert alert-danger alert-block'><h4 class='alert-heading'>Error!</h4>Account is Locked! An email was sent to the email associated with this account with unlock details. <a href='login.asp'>Click here to return</a>.</div>";
        document.getElementById("errorbox").style.display = "block";
    }

    if (responseCode == "-2") {
        document.getElementById("error").innerHTML = "<div class='alert alert-danger alert-block'><h4 class='alert-heading'>Error!</h4>Account is IP Restricted and your IP does not match the IP restriction policy.  <a href='login.asp'>Click here to return</a>.</div>";
        document.getElementById("errorbox").style.display = "block";
    }

    if (responseCode == "-3") {
        var t = setTimeout("document.location.href='change_password.asp?username=" + login + "';", 500);
    }

    if (responseCode == "-4") {
        document.getElementById("error").innerHTML = "<div class='alert alert-danger alert-block'><h4 class='alert-heading'>Error!</h4>Username and Password cannot be blank. <a href='login.asp'>Click here to return</a>.</div>";
        document.getElementById("errorbox").style.display = "block";
    }

}

function ajax_dosentpassword(loginajax) {
    var content, arrContent, email;

    content = loginajax.response;
    //Effect.Fade("forgotpass");
    jQuery('#forgotpass').fadeOut();
    document.getElementById("errorbox").style.display = "none";
    loginbox = document.getElementById("loginbox").innerHTML;

    if (content.indexOf("|") > 0) {
        arrContent = content.split("|");
        content = arrContent[0];
        email = arrContent[1];
    }

    if (content == "0") {
        document.getElementById("error").innerHTML = "<div class='alert alert-danger alert-block'><h4 class='alert-heading'>Error!</h4>Username is Incorrect! <a href='#' onClick='returnfp();'>Click here</a> to try again.</div>";
        var t = setTimeout("jQuery('#errorbox').fadeIn();", 1000)
    }

    if (content == "1") {
        document.getElementById("error").innerHTML = "<div class='alert alert-success alert-block'><h4 class='alert-heading'>Email Sent</h4>An email was sent to the email associated with this account (" + email + ") with instructions to reset the password. <a href='login.asp'>Click here to return</a>.</div>";
        var t = setTimeout("jQuery('#errorbox').fadeIn();", 1000)
    }

    if (content == "2") {
        document.getElementById("error").innerHTML = "<div class='alert alert-danger alert-block'><h4 class='alert-heading'>Error!</h4>Auth. Code is Incorrect! <a href='#' onClick='returnfp();'>Click here</a> to try again.</div>";
        var t = setTimeout("jQuery('#errorbox').fadeIn();", 1000)
    }
}

function ajax_adminlogin(login, pass) {
    if ((login == '') || (pass == '')) {
        alert('Username and Password cannot be blank');
    }
    else {
        //Effect.Fade("loginbox");
        jQuery('#loginbox').fadeOut();
        var loginajax;

        loginajax = new sack();
        loginajax.method = "POST";
        loginajax.setVar("action", "login");
        loginajax.setVar("username", login);
        loginajax.setVar("password", pass);
        loginajax.requestFile = "login.asp";
        loginajax.onCompletion = function () { ajax_dologinaction(loginajax, login); };	// Specify function that will be executed after file has been found
        loginajax.runAJAX();		// Execute AJAX function	
    }
}



function ajax_adminfp(login, recaptcha_challenge_field, recaptcha_response_field) {

    if ((login == '') || (recaptcha_response_field == '') || (login == 'User Name') || (recaptcha_response_field == 'Type the text')) {
        alert('Username and Auth. Code cannot be blank');
    }
    else {
        //Effect.Fade("loginbox");
        jQuery('#loginbox').fadeOut();
        var loginajax;

        //document.getElementById(divId).innerHTML = '<center><img src="/admin/templates/images/ajax_busy.gif"></center>';
        loginajax = new sack();

        loginajax.requestFile = "forgot_password.asp?action=forgot&username=" + login + "&recaptcha_challenge_field=" + recaptcha_challenge_field + "&recaptcha_response_field=" + recaptcha_response_field; // Specifying which file to get

        loginajax.onCompletion = function () { ajax_dosentpassword(loginajax); }; // Specify function that will be executed after file has been found
        loginajax.runAJAX(); 	// Execute AJAX function	

    }
}


//ajax.js

function sack(file) {
    this.AjaxFailedAlert = "Your browser does not support the enhanced functionality of this website, and therefore you will have an experience that differs from the intended one.\n";
    this.requestFile = file;
    this.method = "POST";
    this.URLString = "";
    this.encodeURIString = true;
    this.execute = false;

    this.onLoading = function () { };
    this.onLoaded = function () { };
    this.onInteractive = function () { };
    this.onCompletion = function () { };

    this.createAJAX = function () {
        try {
            this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (err) {
                this.xmlhttp = null;
            }
        }
        if (!this.xmlhttp && typeof XMLHttpRequest != "undefined")
            this.xmlhttp = new XMLHttpRequest();
        if (!this.xmlhttp) {
            this.failed = true;
        }
    };

    this.setVar = function (name, value) {
        if (this.URLString.length < 3) {
            this.URLString = name + "=" + value;
        } else {
            this.URLString += "&" + name + "=" + value;
        }
    }

    this.encVar = function (name, value) {
        var varString = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return varString;
    }

    this.encodeURLString = function (string) {
        varArray = string.split('&');
        for (i = 0; i < varArray.length; i++) {
            urlVars = varArray[i].split('=');
            if (urlVars[0].indexOf('amp;') != -1) {
                urlVars[0] = urlVars[0].substring(4);
            }
            varArray[i] = this.encVar(urlVars[0], urlVars[1]);
        }
        return varArray.join('&');
    }

    this.runResponse = function () {
        eval(this.response);
    }

    this.runAJAX = function (urlstring) {
        this.responseStatus = new Array(2);
        if (this.failed && this.AjaxFailedAlert) {
            alert(this.AjaxFailedAlert);
        } else {
            if (urlstring) {
                if (this.URLString.length) {
                    this.URLString = this.URLString + "&" + urlstring;
                } else {
                    this.URLString = urlstring;
                }
            }
            if (this.encodeURIString) {
                var timeval = new Date().getTime();
                this.URLString = this.encodeURLString(this.URLString);
                this.setVar("rndval", timeval);
            }
            if (this.element) { this.elementObj = document.getElementById(this.element); }
            if (this.xmlhttp) {
                var self = this;
                if (this.method == "GET") {
                    var totalurlstring = this.requestFile + "?" + this.URLString;
                    this.xmlhttp.open(this.method, totalurlstring, true);
                } else {
                    this.xmlhttp.open(this.method, this.requestFile, true);
                }
                if (this.method == "POST") {
                    try {
                        this.xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                    } catch (e) { }
                }

                this.xmlhttp.send(this.URLString);
                this.xmlhttp.onreadystatechange = function () {
                    switch (self.xmlhttp.readyState) {
                        case 1:
                            self.onLoading();
                            break;
                        case 2:
                            self.onLoaded();
                            break;
                        case 3:
                            self.onInteractive();
                            break;
                        case 4:
                            self.response = self.xmlhttp.responseText;
                            self.responseXML = self.xmlhttp.responseXML;
                            self.responseStatus[0] = self.xmlhttp.status;
                            self.responseStatus[1] = self.xmlhttp.statusText;
                            self.onCompletion();
                            if (self.execute) { self.runResponse(); }
                            if (self.elementObj) {
                                var elemNodeName = self.elementObj.nodeName;
                                elemNodeName.toLowerCase();
                                if (elemNodeName == "input" || elemNodeName == "select" || elemNodeName == "option" || elemNodeName == "textarea") {
                                    self.elementObj.value = self.response;
                                } else {
                                    self.elementObj.innerHTML = self.response;
                                }
                            }
                            self.URLString = "";
                            break;
                    }
                };
            }
        }
    };
    this.createAJAX();
}




//ajax-tooltip

/* Custom variables */

/* Offset position of tooltip */
var x_offset_tooltip = 5;
var y_offset_tooltip = 0;

/* Don't change anything below here */
var ajax_tooltipObj = false;
var ajax_tooltipObj_iframe = false;

//Global variables used for tooltiphelp
var ajax_tooltipTimeOut;
var externalFile_tooltip;
var inputObj_tooltip;


var ajax_tooltip_MSIE = false;
if (navigator.userAgent.indexOf('MSIE') >= 0) ajax_tooltip_MSIE = true;


function ajax_showTooltip(externalFile, inputObj) {
    //addLoadEvent(ajax_showTooltip_Function(externalFile,inputObj));
    externalFile_tooltip = externalFile;
    inputObj_tooltip = inputObj;
    ajax_tooltipTimeOut = setTimeout("ajax_showTooltipTimeOut()", 500);
}

function ajax_showTooltipTimeOut() {

    var externalFile = externalFile_tooltip;
    var inputObj = inputObj_tooltip;

    if (!ajax_tooltipObj)	/* Tooltip div not created yet ? */ {
        ajax_tooltipObj = document.createElement('DIV');
        ajax_tooltipObj.style.position = 'absolute';
        ajax_tooltipObj.id = 'ajax_tooltipObj';
        document.body.appendChild(ajax_tooltipObj);
        //alert(document.element);


        var leftDiv = document.createElement('DIV'); /* Create arrow div */
        leftDiv.className = 'ajax_tooltip_arrow';
        leftDiv.id = 'ajax_tooltip_arrow';
        ajax_tooltipObj.appendChild(leftDiv);

        var contentDiv = document.createElement('DIV'); /* Create tooltip content div */
        contentDiv.className = 'ajax_tooltip_content';
        contentDiv.id = 'ajax_tooltip_content';
        ajax_tooltipObj.appendChild(contentDiv);




        if (ajax_tooltip_MSIE) {	/* Create iframe object for MSIE in order to make the tooltip cover select boxes */

            ajax_tooltipObj_iframe = document.createElement('<IFRAME>');
            ajax_tooltipObj_iframe.style.position = 'absolute';
            ajax_tooltipObj_iframe.border = '0';
            ajax_tooltipObj_iframe.frameborder = 0;
            ajax_tooltipObj_iframe.style.backgroundColor = '#FFFFFF';
            ajax_tooltipObj_iframe.src = '/admin/templates/blank.html';
            contentDiv.appendChild(ajax_tooltipObj_iframe);
            ajax_tooltipObj_iframe.style.left = '100px';
            ajax_tooltipObj_iframe.style.top = '100px';
            ajax_tooltipObj_iframe.style.zIndex = 1000000;
        }


    }
    // Find position of tooltip
    ajax_tooltipObj.style.display = 'none';
    ajax_loadContent('ajax_tooltip_content', externalFile);
    if (ajax_tooltip_MSIE) {
        ajax_tooltipObj_iframe.style.width = ajax_tooltipObj.clientWidth + 'px';
        ajax_tooltipObj_iframe.style.height = ajax_tooltipObj.clientHeight + 'px';
    }

    ajax_tooltipObj.style.display = 'block';
    ajax_positionTooltip(inputObj);
}

function ajax_showTooltip_help(externalFile, inputObj) {
    externalFile_tooltip = externalFile;
    inputObj_tooltip = inputObj;
    ajax_tooltipTimeOut = setTimeout("ajax_showTooltip_helpTimeOut()", 150);
}

function ajax_showTooltip_helpTimeOut() {
    var externalFile = externalFile_tooltip;
    var inputObj = inputObj_tooltip;

    if (!ajax_tooltipObj)	/* Tooltip div not created yet ? */ {
        ajax_tooltipObj = document.createElement('DIV');
        ajax_tooltipObj.style.position = 'absolute';
        ajax_tooltipObj.id = 'ajax_tooltipObj';
        document.body.appendChild(ajax_tooltipObj);

        var leftDiv = document.createElement('DIV'); /* Create arrow div */
        leftDiv.className = 'ajax_tooltip_arrow';
        leftDiv.id = 'ajax_tooltip_arrow';
        ajax_tooltipObj.appendChild(leftDiv);

        var contentDiv = document.createElement('DIV'); /* Create tooltip content div */
        contentDiv.className = 'ajax_tooltip_content_help';
        contentDiv.id = 'ajax_tooltip_content';
        ajax_tooltipObj.appendChild(contentDiv);

        if (ajax_tooltip_MSIE) {	/* Create iframe object for MSIE in order to make the tooltip cover select boxes */
            ajax_tooltipObj_iframe = document.createElement('<IFRAME>');
            ajax_tooltipObj_iframe.style.position = 'absolute';
            ajax_tooltipObj_iframe.border = '0';
            ajax_tooltipObj_iframe.frameborder = 0;
            ajax_tooltipObj_iframe.style.backgroundColor = '#FFFFFF';
            ajax_tooltipObj_iframe.src = '/admin/templates/blank.html';
            contentDiv.appendChild(ajax_tooltipObj_iframe);
            ajax_tooltipObj_iframe.style.left = '100px';
            ajax_tooltipObj_iframe.style.top = '100px';
            ajax_tooltipObj_iframe.style.zIndex = 1000000;
        }


    }
    // Find position of tooltip
    ajax_tooltipObj.style.display = 'none';
    ajax_loadContent_help('ajax_tooltip_content', externalFile);
    if (ajax_tooltip_MSIE) {
        ajax_tooltipObj_iframe.style.width = ajax_tooltipObj.clientWidth + 'px';
        ajax_tooltipObj_iframe.style.height = ajax_tooltipObj.clientHeight + 'px';
    }

    ajax_positionTooltip(inputObj);
}


function ajax_positionTooltip(inputObj) {
    var leftPos = (ajaxTooltip_getLeftPos(inputObj) + inputObj.offsetWidth) - 10;
    var topPos = ajaxTooltip_getTopPos(inputObj) + 10;

    if (leftPos < 0) leftPos = 0;

    var totalDocWith = jQuery(document).width();
    var widthTreshold = totalDocWith * 0.7;

    if (leftPos > widthTreshold)
        leftPos = leftPos - (281 + 20); //281 is defined in the ajax_tooltip_content_help class (global.css)

    ajax_tooltipObj.style.left = leftPos + 'px';
    ajax_tooltipObj.style.top = topPos + 'px';
}

function ajax_hideTooltip() {
    clearTimeout(ajax_tooltipTimeOut); //Cancel the timeout created on ajax_showTooltip_help()
    if (ajax_tooltipObj)
        ajax_tooltipObj.style.display = 'none';
}

function ajaxTooltip_getTopPos(inputObj) {
    var returnValue = inputObj.offsetTop + 15;
    while ((inputObj = inputObj.offsetParent) != null) {
        if (inputObj.tagName != 'HTML') returnValue += inputObj.offsetTop;
    }
    return returnValue;
}

function ajaxTooltip_getLeftPos(inputObj) {
    var returnValue = inputObj.offsetLeft;
    while ((inputObj = inputObj.offsetParent) != null) {
        if (inputObj.tagName != 'HTML') returnValue += inputObj.offsetLeft;
    }
    return returnValue;
}

function ajaxTooltip_getRightPos(inputObj) {
    var returnValue = inputObj.offsetRight;
    while ((inputObj = inputObj.offsetParent) != null) {
        if (inputObj.tagName != 'HTML') returnValue += inputObj.offsetRight;
    }
    return returnValue;
}

function VerifyStrongPass(obj) {

    var pctStrong = 0;
    var pwd = obj.value;

    if (pwd.match(new RegExp(/(?=^.{8,16}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/)))
        pctStrong = 100;
    else {
        pctStrong += (pwd.match(new RegExp(/(?=.*\d).*$/)) ? 3 : 0);
        pctStrong += (pwd.match(new RegExp(/(?=.*[a-z]).*$/)) ? 3 : 0);
        pctStrong += (pwd.match(new RegExp(/(?=.*[A-Z]).*$/)) ? 4 : 0);
        pctStrong += (pwd.match(new RegExp(/(?=.*[\W]+).*$/)) ? 3 : 0);

        pctStrong = pctStrong * pwd.length;
    }

    document.getElementById('divStrong').style.width = (100 - pctStrong) + '%';

}

/** 
 * Name:    Highslide JS
 * Version: 4.1.13 (2011-10-06)
 * Config:  default +inline +ajax +iframe +flash +packed
 * Author:  Torstein HÃ¸nsi
 * Support: www.highslide.com/support
 * License: www.highslide.com/#license
 */
eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) { d[e(c)] = k[c] || e(c) } k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) { if (k[c]) { p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) } } return p }('q(!m){u m={1e:{89:\'8H\',8K:\'co...\',8G:\'6Q 2h cA\',9s:\'6Q 2h cB 2h c1\',9Y:\'bX 2h bT G (f)\',ag:\'c7 by <i>8g 8f</i>\',9F:\'d3 2h d6 8g 8f dg\',91:\'8n\',8W:\'8e\',8R:\'9g\',8V:\'8j\',8U:\'8j (di)\',93:\'dj\',dd:\'8h\',d2:\'8h 8m (8l)\',cM:\'8k\',bR:\'8k 8m (8l)\',90:\'8n (6L 1f)\',8X:\'8e (6L 2G)\',8S:\'9g\',b8:\'1:1\',7h:\'6Q 2h 28 2D, aR 8Y aL 2h 3I. aH 6L aT W 1M 8Y 5n.\'},56:\'U/aN/\',5v:\'bG.6E\',4E:\'bB.6E\',7c:6j,a7:6j,4j:15,6m:15,3N:15,6f:15,4l:bt,8N:0.75,7m:J,71:5,3g:2,aZ:3,4M:1h,9Z:\'3E 2G\',9U:1,a1:J,9y:\'b2://U.b4/\',9E:\'aO\',8C:J,7B:[\'a\'],5D:1h,5A:J,48:J,31:\'4K\',82:J,7b:J,3O:8Z,4s:8Z,4I:J,1x:\'aS-aP\',8A:{8B:\'<1i 3n="U-aU"><92>\'+\'<3u 3n="U-5n">\'+\'<a 2v="#" 2u="{m.1e.90}" 2M="D m.5n(k)">\'+\'<2p>{m.1e.91}</2p></a>\'+\'</3u>\'+\'<3u 3n="U-1M">\'+\'<a 2v="#" 2u="{m.1e.8X}" 2M="D m.1M(k)">\'+\'<2p>{m.1e.8W}</2p></a>\'+\'</3u>\'+\'<3u 3n="U-3I">\'+\'<a 2v="#" 2u="{m.1e.8S}" 2M="D 1h">\'+\'<2p>{m.1e.8R}</2p></a>\'+\'</3u>\'+\'<3u 3n="U-28">\'+\'<a 2v="#" 2u="{m.1e.8U}" 2M="D m.28(k)">\'+\'<2p>{m.1e.8V}</2p></a>\'+\'</3u>\'+\'</92></1i>\'+\'<1i 3n="U-V"></1i>\'+\'<1i 3n="U-b0"><1i>\'+\'<2p 3n="U-3q" 2u="{m.1e.93}"><2p></2p></2p>\'+\'</1i></1i>\'},4P:[],6n:J,P:[],6s:[\'4I\',\'2K\',\'1x\',\'3g\',\'b5\',\'bc\',\'aG\',\'9e\',\'aM\',\'b3\',\'bQ\',\'9c\',\'9K\',\'7b\',\'K\',\'M\',\'7f\',\'5D\',\'5A\',\'48\',\'bD\',\'bC\',\'bH\',\'2f\',\'82\',\'3i\',\'3J\',\'31\',\'7I\',\'78\',\'3O\',\'4s\',\'5X\',\'6N\',\'8d\',\'4h\',\'2g\',\'an\',\'am\',\'T\'],1Q:[],4y:0,bI:{x:[\'ad\',\'1f\',\'6H\',\'2G\',\'ac\'],y:[\'4U\',\'18\',\'6q\',\'3E\',\'6a\']},5R:{},9c:{},9e:{},7I:{al:{},1E:{},ay:{}},3t:[],3G:{},3C:[],5b:[],4o:[],5J:{},7k:{},6h:[],26:/bM\\/4\\.0/.16(46.5V)?8:6t((46.5V.5x().2Z(/.+(?:9f|bJ|bK|1L)[\\/: ]([\\d.]+)/)||[0,\'0\'])[1]),1L:(N.4F&&!1y.30),4X:/bL/.16(46.5V),7V:/bx.+9f:1\\.[0-8].+bi/.16(46.5V),$:B(1j){q(1j)D N.6F(1j)},20:B(1P,2R){1P[1P.1c]=2R},14:B(9b,3h,3l,4r,95){u C=N.14(9b);q(3h)m.3e(C,3h);q(95)m.Q(C,{6z:0,ap:\'24\',6V:0});q(3l)m.Q(C,3l);q(4r)4r.1G(C);D C},3e:B(C,3h){W(u x 3A 3h)C[x]=3h[x];D C},Q:B(C,3l){W(u x 3A 3l){q(m.2Y&&x==\'1B\'){q(3l[x]>0.99)C.F.bp(\'4C\');L C.F.4C=\'97(1B=\'+(3l[x]*2A)+\')\'}L C.F[x]=3l[x]}},41:B(C,1a,2P){u 3S,3Y,3P;q(1t 2P!=\'6W\'||2P===I){u 2S=aE;2P={3w:2S[2],2g:2S[3],83:2S[4]}}q(1t 2P.3w!=\'42\')2P.3w=6j;2P.2g=1r[2P.2g]||1r.8M;2P.5d=m.3e({},1a);W(u 2z 3A 1a){u e=1w m.1C(C,2P,2z);3S=6t(m.79(C,2z))||0;3Y=6t(1a[2z]);3P=2z!=\'1B\'?\'E\':\'\';e.2O(3S,3Y,3P)}},79:B(C,1a){q(C.F[1a]){D C.F[1a]}L q(N.87){D N.87.9k(C,I).9i(1a)}L{q(1a==\'1B\')1a=\'4C\';u 2R=C.4u[1a.2i(/\\-(\\w)/g,B(a,b){D b.bo()})];q(1a==\'4C\')2R=2R.2i(/97\\(1B=([0-9]+)\\)/,B(a,b){D b/2A});D 2R===\'\'?1:2R}},5y:B(){u d=N,w=1y,58=d.5G&&d.5G!=\'6M\'?d.44:d.V,2Y=m.1L&&(m.26<9||1t 8y==\'1X\');u K=2Y?58.8Q:(d.44.8Q||5o.bv),M=2Y?58.bu:5o.bm;m.3k={K:K,M:M,5T:2Y?58.5T:8y,5U:2Y?58.5U:bf};D m.3k},85:B(C){u p={x:C.8x,y:C.6G};3T(C.8p){C=C.8p;p.x+=C.8x;p.y+=C.6G;q(C!=N.V&&C!=N.44){p.x-=C.5T;p.y-=C.5U}}D p},53:B(a,1E,2O,R){q(!a)a=m.14(\'a\',I,{1O:\'24\'},m.1S);q(1t a.4V==\'B\')D 1E;q(R==\'2Q\'){W(u i=0;i<m.3C.1c;i++){q(m.3C[i]&&m.3C[i].a==a){m.3C[i].a8();m.3C[i]=I;D 1h}}m.8O=J}1m{1w m.4S(a,1E,2O,R);D 1h}1l(e){D J}},8D:B(a,1E,2O){D m.53(a,1E,2O,\'2Q\')},7E:B(){D m.14(\'1i\',{1p:\'U-2Q-O\',2n:m.8w(m.8A.8B)})},4d:B(C,4c,1p){u 1k=C.3x(4c);W(u i=0;i<1k.1c;i++){q((1w 5P(1p)).16(1k[i].1p)){D 1k[i]}}D I},8w:B(s){s=s.2i(/\\s/g,\' \');u 2t=/{m\\.1e\\.([^}]+)\\}/g,55=s.2Z(2t),1e;q(55)W(u i=0;i<55.1c;i++){1e=55[i].2i(2t,"$1");q(1t m.1e[1e]!=\'1X\')s=s.2i(55[i],m.1e[1e])}D s},7t:B(a){W(u i=0;i<m.4o.1c;i++){q(m.4o[i][0]==a){u c=m.4o[i][1];m.4o[i][1]=c.61(1);D c}}D I},af:B(e){u 1P=m.4Z();W(u i=0;i<1P.4q.1c;i++){u a=1P.4q[i];q(m.3U(a,\'2f\')==\'2x\'&&m.3U(a,\'82\'))m.20(m.5b,a)}m.7r(0)},7r:B(i){q(!m.5b[i])D;u a=m.5b[i];u 51=m.3z(m.3U(a,\'7f\'));q(!51)51=m.7E();u 2x=1w m.5j(a,51,1);2x.7v=B(){};2x.2J=B(){m.20(m.4o,[a,51]);m.7r(i+1)};2x.7y()},8L:B(){u 7n=0,5g=-1,P=m.P,A,1u;W(u i=0;i<P.1c;i++){A=P[i];q(A){1u=A.Y.F.1u;q(1u&&1u>7n){7n=1u;5g=i}}}q(5g==-1)m.2q=-1;L P[5g].3d()},3U:B(a,4R){a.4V=a.2M;u p=a.4V?a.4V():I;a.4V=I;D(p&&1t p[4R]!=\'1X\')?p[4R]:(1t m[4R]!=\'1X\'?m[4R]:I)},5m:B(a){u T=m.3U(a,\'T\');q(T)D T;D a.2v},3z:B(1j){u 1D=m.$(1j),3M=m.7k[1j],a={};q(!1D&&!3M)D I;q(!3M){3M=1D.61(J);3M.1j=\'\';m.7k[1j]=3M;D 1D}L{D 3M.61(J)}},3j:B(d){q(d)m.7g.1G(d);m.7g.2n=\'\'},8t:B(7F,A){u 3r=A||m.3v();A=3r;q(m.3B)D 1h;L m.3r=3r;m.4g(N,1y.30?\'5i\':\'5h\',m.4D);1m{m.3B=7F;7F.2M()}1l(e){m.3r=m.3B=I}1m{A.28()}1l(e){}D 1h},5k:B(C,2w){u A=m.3v(C);q(A)D m.8t(A.6B(2w),A);L D 1h},5n:B(C){D m.5k(C,-1)},1M:B(C){D m.5k(C,1)},4D:B(e){q(!e)e=1y.1Y;q(!e.2j)e.2j=e.6p;q(1t e.2j.7O!=\'1X\')D J;u A=m.3v();u 2w=I;8T(e.aI){1J 70:q(A)A.7i();D J;1J 32:1J 34:1J 39:1J 40:2w=1;7N;1J 8:1J 33:1J 37:1J 38:2w=-1;7N;1J 27:1J 13:2w=0}q(2w!==I){m.4g(N,1y.30?\'5i\':\'5h\',m.4D);q(!m.8C)D J;q(e.65)e.65();L e.aY=1h;q(A){q(2w==0){A.28()}L{m.5k(A.S,2w)}D 1h}}D J},b1:B(19){m.20(m.1Q,m.3e(19,{2F:\'2F\'+m.4y++}))},7S:B(7C,5M){u C,2t=/^U-Y-([0-9]+)$/;C=7C;3T(C.3a){q(C.1j&&2t.16(C.1j))D C.1j.2i(2t,"$1");C=C.3a}q(!5M){C=7C;3T(C.3a){q(C.4c&&m.5W(C)){W(u S=0;S<m.P.1c;S++){u A=m.P[S];q(A&&A.a==C)D S}}C=C.3a}}D I},3v:B(C,5M){q(1t C==\'1X\')D m.P[m.2q]||I;q(1t C==\'42\')D m.P[C]||I;q(1t C==\'7L\')C=m.$(C);D m.P[m.7S(C,5M)]||I},5W:B(a){D(a.2M&&a.2M.9C().2i(/\\s/g,\' \').2Z(/m.(aV|e)b7/))},ab:B(){W(u i=0;i<m.P.1c;i++)q(m.P[i]&&m.P[i].4e)m.8L()},7K:B(e){q(!e)e=1y.1Y;q(e.aJ>1)D J;q(!e.2j)e.2j=e.6p;u C=e.2j;3T(C.3a&&!(/U-(2D|3I|2Q|3q)/.16(C.1p))){C=C.3a}u A=m.3v(C);q(A&&(A.4z||!A.4e))D J;q(A&&e.R==\'7H\'){q(e.2j.7O)D J;u 2Z=C.1p.2Z(/U-(2D|3I|3q)/);q(2Z){m.2a={A:A,R:2Z[1],1f:A.x.H,K:A.x.G,18:A.y.H,M:A.y.G,8J:e.5Q,8F:e.5f};m.1R(N,\'6o\',m.8a);q(e.65)e.65();q(/U-(2D|2Q)-7s/.16(A.O.1p)){A.3d();m.7p=J}D 1h}L q(/U-2Q/.16(C.1p)&&m.2q!=A.S){A.3d();A.4a(\'1n\')}}L q(e.R==\'9t\'){m.4g(N,\'6o\',m.8a);q(m.2a){q(m.4i&&m.2a.R==\'2D\')m.2a.A.O.F.3L=m.4i;u 3f=m.2a.3f;q(!3f&&!m.7p&&!/(3I|3q)/.16(m.2a.R)){A.28()}L q(3f||(!3f&&m.8O)){m.2a.A.4a(\'1n\')}q(m.2a.A.2W)m.2a.A.2W.F.1O=\'24\';m.7p=1h;m.2a=I}L q(/U-2D-7s/.16(C.1p)){C.F.3L=m.4i}}D 1h},8a:B(e){q(!m.2a)D J;q(!e)e=1y.1Y;u a=m.2a,A=a.A;q(A.11){q(!A.2W)A.2W=m.14(\'1i\',I,{1d:\'22\',K:A.x.G+\'E\',M:A.y.G+\'E\',1f:A.x.cb+\'E\',18:A.y.cb+\'E\',1u:4,94:(m.2Y?\'bh\':\'24\'),1B:0.cD},A.Y,J);q(A.2W.F.1O==\'24\')A.2W.F.1O=\'\'}a.5q=e.5Q-a.8J;a.5r=e.5f-a.8F;u 6A=1r.cU(1r.8E(a.5q,2)+1r.8E(a.5r,2));q(!a.3f)a.3f=(a.R!=\'2D\'&&6A>0)||(6A>(m.cR||5));q(a.3f&&e.5Q>5&&e.5f>5){q(a.R==\'3q\')A.3q(a);L{A.7x(a.1f+a.5q,a.18+a.5r);q(a.R==\'2D\')A.O.F.3L=\'3I\'}}D 1h},8c:B(e){1m{q(!e)e=1y.1Y;u 67=/cW/i.16(e.R);q(!e.2j)e.2j=e.6p;q(!e.6l)e.6l=67?e.cZ:e.cY;u A=m.3v(e.2j);q(!A.4e)D;q(!A||!e.6l||m.3v(e.6l,J)==A||m.2a)D;W(u i=0;i<A.1Q.1c;i++)(B(){u o=m.$(\'2F\'+A.1Q[i]);q(o&&o.5Z){q(67)m.Q(o,{1q:\'2l\',1O:\'\'});m.41(o,{1B:67?o.1B:0},o.3b)}})()}1l(e){}},1R:B(C,1Y,35){q(C==N&&1Y==\'3p\'){m.20(m.6h,35)}1m{C.1R(1Y,35,1h)}1l(e){1m{C.8I(\'4Q\'+1Y,35);C.cX(\'4Q\'+1Y,35)}1l(e){C[\'4Q\'+1Y]=35}}},4g:B(C,1Y,35){1m{C.4g(1Y,35,1h)}1l(e){1m{C.8I(\'4Q\'+1Y,35)}1l(e){C[\'4Q\'+1Y]=I}}},68:B(i){q(m.6n&&m.4P[i]&&m.4P[i]!=\'1X\'){u 1v=N.14(\'1v\');1v.3H=B(){1v=I;m.68(i+1)};1v.T=m.4P[i]}},9u:B(42){q(42&&1t 42!=\'6W\')m.71=42;u 1P=m.4Z();W(u i=0;i<1P.3Z.1c&&i<m.71;i++){m.20(m.4P,m.5m(1P.3Z[i]))}q(m.1x)1w m.4L(m.1x,B(){m.68(0)});L m.68(0);q(m.4E)u 6E=m.14(\'1v\',{T:m.56+m.4E})},5N:B(){q(!m.1S){m.3F=m.1L&&m.26<7;m.2Y=m.1L&&m.26<9;m.5y();m.9z=m.3F&&7T.cI==\'cH:\';W(u x 3A m.5z){q(1t m[x]!=\'1X\')m.1e[x]=m[x];L q(1t m.1e[x]==\'1X\'&&1t m.5z[x]!=\'1X\')m.1e[x]=m.5z[x]}m.1S=m.14(\'1i\',{1p:\'U-1S\'},{1d:\'22\',1f:0,18:0,K:\'2A%\',1u:m.4l,8b:\'8H\'},N.V,J);m.21=m.14(\'a\',{1p:\'U-21\',2u:m.1e.8G,2n:m.1e.8K,2v:\'9X:;\'},{1d:\'22\',18:\'-3R\',1B:m.8N,1u:1},m.1S);m.7g=m.14(\'1i\',I,{1O:\'24\'},m.1S);m.2I=m.14(\'1i\',I,{ar:\'aw\',cF:\'cJ\'},I,J);1r.cK=B(t,b,c,d){D c*t/d+b};1r.8M=B(t,b,c,d){D c*(t/=d)*t+b};m.9m=m.3F;m.9l=((1y.30&&m.26<9)||46.ai==\'ah\'||(m.3F&&m.26<5.5))}},3p:B(){q(m.6Z)D;m.6Z=J;W(u i=0;i<m.6h.1c;i++)m.6h[i]()},8u:B(){u C,1k,4F=[],3Z=[],4q=[],3m={},2t;W(u i=0;i<m.7B.1c;i++){1k=N.3x(m.7B[i]);W(u j=0;j<1k.1c;j++){C=1k[j];2t=m.5W(C);q(2t){m.20(4F,C);q(2t[0]==\'m.53\')m.20(3Z,C);L q(2t[0]==\'m.8D\')m.20(4q,C);u g=m.3U(C,\'4h\')||\'24\';q(!3m[g])3m[g]=[];m.20(3m[g],C)}}}m.5K={4F:4F,3m:3m,3Z:3Z,4q:4q};D m.5K},4Z:B(){D m.5K||m.8u()},28:B(C){u A=m.3v(C);q(A)A.28();D 1h}};m.1C=B(2k,1N,1a){k.1N=1N;k.2k=2k;k.1a=1a;q(!1N.8s)1N.8s={}};m.1C.54={7Q:B(){(m.1C.3o[k.1a]||m.1C.3o.8z)(k);q(k.1N.3o)k.1N.3o.8v(k.2k,k.3Q,k)},2O:B(8q,2h,3P){k.84=(1w 5s()).59();k.3S=8q;k.3Y=2h;k.3P=3P;k.3Q=k.3S;k.H=k.80=0;u 5o=k;B t(5e){D 5o.3o(5e)}t.2k=k.2k;q(t()&&m.3t.20(t)==1){m.8r=dk(B(){u 3t=m.3t;W(u i=0;i<3t.1c;i++)q(!3t[i]())3t.dh(i--,1);q(!3t.1c){df(m.8r)}},13)}},3o:B(5e){u t=(1w 5s()).59();q(5e||t>=k.1N.3w+k.84){k.3Q=k.3Y;k.H=k.80=1;k.7Q();k.1N.5d[k.1a]=J;u 86=J;W(u i 3A k.1N.5d)q(k.1N.5d[i]!==J)86=1h;q(86){q(k.1N.83)k.1N.83.8v(k.2k)}D 1h}L{u n=t-k.84;k.80=n/k.1N.3w;k.H=k.1N.2g(n,0,1,k.1N.3w);k.3Q=k.3S+((k.3Y-k.3S)*k.H);k.7Q()}D J}};m.3e(m.1C,{3o:{1B:B(1C){m.Q(1C.2k,{1B:1C.3Q})},8z:B(1C){1m{q(1C.2k.F&&1C.2k.F[1C.1a]!=I)1C.2k.F[1C.1a]=1C.3Q+1C.3P;L 1C.2k[1C.1a]=1C.3Q}1l(e){}}}});m.4L=B(1x,2J){k.2J=2J;k.1x=1x;u v=m.26,5O;k.6C=m.1L&&m.26<7;q(!1x){q(2J)2J();D}m.5N();k.2m=m.14(\'2m\',{d7:0},{1q:\'1n\',1d:\'22\',d8:\'dc\',K:0},m.1S,J);u 7W=m.14(\'7W\',I,I,k.2m,1);k.29=[];W(u i=0;i<=8;i++){q(i%3==0)5O=m.14(\'5O\',I,{M:\'1H\'},7W,J);k.29[i]=m.14(\'29\',I,I,5O,J);u F=i!=4?{db:0,da:0}:{1d:\'3K\'};m.Q(k.29[i],F)}k.29[4].1p=1x+\' U-1o\';k.8P()};m.4L.54={8P:B(){u T=m.56+(m.d9||"cL/")+k.1x+".cE";u 98=m.4X&&m.26<8i?m.1S:I;k.2X=m.14(\'1v\',I,{1d:\'22\',18:\'-3R\'},98,J);u 36=k;k.2X.3H=B(){36.96()};k.2X.T=T},96:B(){u o=k.1s=k.2X.K/4,H=[[0,0],[0,-4],[-2,0],[0,-8],0,[-2,-8],[0,-2],[0,-6],[-2,-2]],1F={M:(2*o)+\'E\',K:(2*o)+\'E\'};W(u i=0;i<=8;i++){q(H[i]){q(k.6C){u w=(i==1||i==7)?\'2A%\':k.2X.K+\'E\';u 1i=m.14(\'1i\',I,{K:\'2A%\',M:\'2A%\',1d:\'3K\',1W:\'1n\'},k.29[i],J);m.14(\'1i\',I,{4C:"c6:c5.9M.c4(c8=c9, T=\'"+k.2X.T+"\')",1d:\'22\',K:w,M:k.2X.M+\'E\',1f:(H[i][0]*o)+\'E\',18:(H[i][1]*o)+\'E\'},1i,J)}L{m.Q(k.29[i],{94:\'6X(\'+k.2X.T+\') \'+(H[i][0]*o)+\'E \'+(H[i][1]*o)+\'E\'})}q(1y.30&&(i==3||i==5))m.14(\'1i\',I,1F,k.29[i],J);m.Q(k.29[i],1F)}}k.2X=I;q(m.3G[k.1x])m.3G[k.1x].5l();m.3G[k.1x]=k;q(k.2J)k.2J()},4B:B(H,1s,9a,3b,2g){u A=k.A,4A=A.Y.F,1s=1s||0,H=H||{x:A.x.H+1s,y:A.y.H+1s,w:A.x.1b(\'1K\')-2*1s,h:A.y.1b(\'1K\')-2*1s};q(9a)k.2m.F.1q=(H.h>=4*k.1s)?\'2l\':\'1n\';m.Q(k.2m,{1f:(H.x-k.1s)+\'E\',18:(H.y-k.1s)+\'E\',K:(H.w+2*k.1s)+\'E\'});H.w-=2*k.1s;H.h-=2*k.1s;m.Q(k.29[4],{K:H.w>=0?H.w+\'E\':0,M:H.h>=0?H.h+\'E\':0});q(k.6C)k.29[3].F.M=k.29[5].F.M=k.29[4].F.M},5l:B(9d){q(9d)k.2m.F.1q=\'1n\';L m.3j(k.2m)}};m.5t=B(A,1F){k.A=A;k.1F=1F;k.2H=1F==\'x\'?\'cd\':\'cc\';k.2C=k.2H.5x();k.4J=1F==\'x\'?\'ca\':\'c3\';k.6J=k.4J.5x();k.6P=1F==\'x\'?\'c2\':\'bV\';k.bU=k.6P.5x();k.1V=k.2U=0};m.5t.54={1b:B(S){8T(S){1J\'7R\':D k.1A+k.2s+(k.t-m.21[\'1s\'+k.2H])/2;1J\'1K\':D k.G+2*k.cb+k.1V+k.2U;1J\'4b\':D k.5E-k.3y-k.5F;1J\'6K\':D k.1b(\'4b\')-2*k.cb-k.1V-k.2U;1J\'4w\':D k.H-(k.A.1o?k.A.1o.1s:0);1J\'88\':D k.1b(\'1K\')+(k.A.1o?2*k.A.1o.1s:0);1J\'5u\':D k.1T?1r.5Y((k.G-k.1T)/2):0}},6v:B(){k.cb=(k.A.O[\'1s\'+k.2H]-k.t)/2;k.5F=m[\'6V\'+k.6P]},6y:B(){k.t=k.A.C[k.2C]?49(k.A.C[k.2C]):k.A.C[\'1s\'+k.2H];k.1A=k.A.1A[k.1F];k.2s=(k.A.C[\'1s\'+k.2H]-k.t)/2;q(k.1A==0||k.1A==-1){k.1A=(m.3k[k.2C]/2)+m.3k[\'3s\'+k.4J]}},6u:B(){u A=k.A;k.3X=\'1H\';k.H=k.1A-k.cb+k.2s;q(k.6N&&k.1F==\'x\')A.5X=1r.2L(A.5X||k.Z,A.6N*k.Z/A.y.Z);k.G=1r.2L(k.Z,A[\'7l\'+k.2H]||k.Z);k.2E=A.4I?1r.2L(A[\'2L\'+k.2H],k.Z):k.Z;q(A.2o&&A.2K){k.G=A[k.2C];k.1T=k.Z}q(k.1F==\'x\'&&m.4M)k.2E=A.3O;k.3y=m[\'6V\'+k.4J];k.3s=m.3k[\'3s\'+k.4J];k.5E=m.3k[k.2C]},7J:B(i){u A=k.A;q(A.2o&&(A.2K||m.4M)){k.1T=i;k.G=1r.7l(k.G,k.1T);A.O.F[k.6J]=k.1b(\'5u\')+\'E\'}L k.G=i;A.O.F[k.2C]=i+\'E\';A.Y.F[k.2C]=k.1b(\'1K\')+\'E\';q(A.1o)A.1o.4B();q(A.2W)A.2W.F[k.2C]=i+\'E\';q(k.1F==\'y\'&&A.4v&&A.V.F.M!=\'1H\')1m{A.4v.V.F.1W=\'1H\'}1l(e){}q(A.1Z){u d=A.2c;q(k.7a===1X)k.7a=A.1g[\'1s\'+k.2H]-d[\'1s\'+k.2H];d.F[k.2C]=(k.G-k.7a)+\'E\';q(k.1F==\'x\')A.3D.F.K=\'1H\';q(A.V)A.V.F[k.2C]=\'1H\'}q(k.1F==\'x\'&&A.1z)A.4m(J)},7j:B(i){k.H=i;k.A.Y.F[k.6J]=i+\'E\';q(k.A.1o)k.A.1o.4B()}};m.4S=B(a,1E,2O,2B){q(N.9r&&m.1L&&!m.6Z){m.1R(N,\'3p\',B(){1w m.4S(a,1E,2O,2B)});D}k.a=a;k.2O=2O;k.2B=2B||\'2D\';k.1Z=(2B==\'2Q\');k.2o=!k.1Z;m.6n=1h;k.1Q=[];m.5N();u S=k.S=m.P.1c;W(u i=0;i<m.6s.1c;i++){u 2z=m.6s[i];k[2z]=1E&&1t 1E[2z]!=\'1X\'?1E[2z]:m[2z]}q(!k.T)k.T=a.2v;u C=(1E&&1E.6O)?m.$(1E.6O):a;C=k.8o=C.3x(\'1v\')[0]||C;k.6b=C.1j||a.1j;W(u i=0;i<m.P.1c;i++){q(m.P[i]&&m.P[i].a==a){m.P[i].3d();D 1h}}q(!m.cf)W(u i=0;i<m.P.1c;i++){q(m.P[i]&&m.P[i].8o!=C&&!m.P[i].6e){m.P[i].6w()}}m.P[S]=k;q(!m.7m&&!m.3B){q(m.P[S-1])m.P[S-1].28();q(1t m.2q!=\'1X\'&&m.P[m.2q])m.P[m.2q].28()}k.C=C;k.1A=k.8d||m.85(C);m.5y();u x=k.x=1w m.5t(k,\'x\');x.6y();u y=k.y=1w m.5t(k,\'y\');y.6y();k.Y=m.14(\'1i\',{1j:\'U-Y-\'+k.S,1p:\'U-Y \'+k.78},{1q:\'1n\',1d:\'22\',1u:m.4l+=2},I,J);k.Y.cg=k.Y.cw=m.8c;q(k.2B==\'2D\'&&k.3g==2)k.3g=0;q(!k.1x){k[k.2B+\'7P\']()}L q(m.3G[k.1x]){k.81();k[k.2B+\'7P\']()}L{k.4t();u A=k;1w m.4L(k.1x,B(){A.81();A[A.2B+\'7P\']()})}D J};m.4S.54={7w:B(e){q(m.cv)cu(\'ct \'+e.cx+\': \'+e.cy);L 1y.7T.2v=k.T},81:B(){u 1o=k.1o=m.3G[k.1x];1o.A=k;1o.2m.F.1u=k.Y.F.1u-1;m.3G[k.1x]=I},4t:B(){q(k.6e||k.21)D;k.21=m.21;u A=k;k.21.2M=B(){A.6w()};u A=k,l=k.x.1b(\'7R\')+\'E\',t=k.y.1b(\'7R\')+\'E\';4T(B(){q(A.21)m.Q(A.21,{1f:l,18:t,1u:m.4l++})},2A)},cz:B(){u A=k;u 1v=N.14(\'1v\');k.O=1v;1v.3H=B(){q(m.P[A.S])A.4x()};q(m.cs)1v.cr=B(){D 1h};1v.1p=\'U-2D\';m.Q(1v,{1q:\'1n\',1O:\'4H\',1d:\'22\',5X:\'3R\',1u:3});1v.2u=m.1e.7h;q(m.4X&&m.26<8i)m.1S.1G(1v);q(m.1L&&m.ch)1v.T=I;1v.T=k.T;k.4t()},cl:B(){k.O=m.7t(k.a);q(!k.O)k.O=m.3z(k.7f);q(!k.O)k.O=m.7E();k.77([\'6i\']);q(k.6i){u V=m.4d(k.O,\'1i\',\'U-V\');q(V)V.1G(k.6i);k.6i.F.1O=\'4H\'}u 1g=k.1g=k.O;q(/(3c|11)/.16(k.2f))k.7d(1g);m.1S.1G(k.Y);m.Q(k.Y,{1d:\'cp\',6z:\'0 \'+m.6m+\'E 0 \'+m.4j+\'E\'});k.O=m.14(\'1i\',{1p:\'U-2Q\'},{1d:\'3K\',1u:3,M:0,1W:\'1n\'},k.Y);k.3D=m.14(\'1i\',I,I,k.O,1);k.3D.1G(1g);m.Q(1g,{1d:\'3K\',1O:\'4H\',8b:m.1e.89||\'\'});q(k.K)1g.F.K=k.K+\'E\';q(k.M)m.Q(1g,{M:k.M+\'E\',1W:\'1n\'});q(1g.2e<k.3O)1g.F.K=k.3O+\'E\';q(k.2f==\'2x\'&&!m.7t(k.a)){k.4t();u A=k;u 2x=1w m.5j(k.a,1g);2x.T=k.T;2x.2J=B(){q(m.P[A.S])A.4x()};2x.7v=B(){7T.2v=A.T};2x.7y()}L q(k.2f==\'11\'&&k.31==\'4K\'){k.5S()}L k.4x()},4x:B(){1m{q(!k.O)D;k.O.3H=I;q(k.6e)D;L k.6e=J;u x=k.x,y=k.y;q(k.21){m.Q(k.21,{18:\'-3R\'});k.21=I}q(k.2o){x.Z=k.O.K;y.Z=k.O.M;m.Q(k.O,{K:x.t+\'E\',M:y.t+\'E\'});k.Y.1G(k.O);m.1S.1G(k.Y)}L q(k.76)k.76();x.6v();y.6v();m.Q(k.Y,{1f:(x.1A+x.2s-x.cb)+\'E\',18:(y.1A+x.2s-y.cb)+\'E\'});k.aa();u 2d=x.Z/y.Z;x.6u();k.3X(x);y.6u();k.3X(y);q(k.1Z)k.aq();q(k.1z)k.4m(0,1);q(k.4I){q(k.2o)k.aA(2d);L k.6Y();q(k.2o&&k.x.Z>(k.x.1T||k.x.G)){k.9W();q(k.1Q.1c==1)k.4m()}}k.7M()}1l(e){k.7w(e)}},7d:B(4r,1H){u c=m.4d(4r,\'5H\',\'U-V\');q(/(11|3c)/.16(k.2f)){q(k.3i)c.F.K=k.3i+\'E\';q(k.3J)c.F.M=k.3J+\'E\'}},5S:B(){q(k.av)D;u A=k;k.V=m.4d(k.1g,\'5H\',\'U-V\');q(k.2f==\'11\'){k.4t();u 4n=m.2I.61(1);k.V.1G(4n);k.cn=k.1g.2e;q(!k.3i)k.3i=4n.2e;u 45=k.1g.1I-k.V.1I,h=k.3J||m.3k.M-45-m.3N-m.6f,3H=k.31==\'4K\'?\' 3H="q (m.P[\'+k.S+\']) m.P[\'+k.S+\'].4x()" \':\'\';k.V.2n+=\'<11 2z="m\'+(1w 5s()).59()+\'" cq="0" S="\'+k.S+\'" \'+\' F="K:\'+k.3i+\'E; M:\'+h+\'E" \'+3H+\' T="\'+k.T+\'" ></11>\';k.4n=k.V.3x(\'1i\')[0];k.11=k.V.3x(\'11\')[0];q(k.31==\'4O\')k.6S()}q(k.2f==\'3c\'){k.V.1j=k.V.1j||\'m-cm-1j-\'+k.S;u a=k.7I;q(!a.1E)a.1E={};q(1t a.1E.aF==\'1X\')a.1E.aF=\'ci\';q(7D)7D.cj(k.T,k.V.1j,k.3i,k.3J,a.ck||\'7\',a.cC,a.al,a.1E,a.ay)}k.av=J},76:B(){q(k.11&&!k.3J){k.11.F.M=k.V.F.M=k.at()+\'E\'}k.1g.1G(m.2I);q(!k.x.Z)k.x.Z=k.1g.2e;k.y.Z=k.1g.1I;k.1g.aj(m.2I);q(m.1L&&k.au>49(k.1g.4u.M)){k.au=49(k.1g.4u.M)}m.Q(k.Y,{1d:\'22\',6z:\'0\'});m.Q(k.O,{K:k.x.t+\'E\',M:k.y.t+\'E\'})},at:B(){u h;1m{u 1U=k.4v=k.11.6r||k.11.52.N;u 2I=1U.14(\'1i\');2I.F.ar=\'aw\';1U.V.1G(2I);h=2I.6G;q(m.1L)h+=49(1U.V.4u.3N)+49(1U.V.4u.6f)-1}1l(e){h=bY}D h},6S:B(){u 4k=k.1g.2e-k.4n.2e;m.3j(k.4n);q(4k<0)4k=0;u 45=k.1g.1I-k.11.1I;q(k.4v&&!k.3J&&!k.M&&k.y.G==k.y.Z)1m{k.4v.V.F.1W=\'1n\'}1l(e){}m.Q(k.11,{K:1r.7u(k.x.G-4k)+\'E\',M:1r.7u(k.y.G-45)+\'E\'});m.Q(k.V,{K:k.11.F.K,M:k.11.F.M});k.4p=k.11;k.2c=k.4p},aq:B(){k.7d(k.1g);q(k.2f==\'3c\'&&k.31==\'4K\')k.5S();q(k.x.G<k.x.Z&&!k.5D)k.x.G=k.x.Z;q(k.y.G<k.y.Z&&!k.5A)k.y.G=k.y.Z;k.2c=k.1g;m.Q(k.3D,{1d:\'3K\',K:k.x.G+\'E\'});m.Q(k.1g,{ap:\'24\',K:\'1H\',M:\'1H\'});u 1D=m.4d(k.1g,\'5H\',\'U-V\');q(1D&&!/(11|3c)/.16(k.2f)){u 47=1D;1D=m.14(47.bZ,I,{1W:\'1n\'},I,J);47.3a.c0(1D,47);1D.1G(m.2I);1D.1G(47);u 4k=k.1g.2e-1D.2e;u 45=k.1g.1I-1D.1I;1D.aj(m.2I);u 5C=m.4X||46.ai==\'ah\'?1:0;m.Q(1D,{K:(k.x.G-4k-5C)+\'E\',M:(k.y.G-45)+\'E\',1W:\'1H\',1d:\'3K\'});q(5C&&47.1I>1D.1I){1D.F.K=(49(1D.F.K)+5C)+\'E\'}k.4p=1D;k.2c=k.4p}q(k.11&&k.31==\'4K\')k.6S();q(!k.4p&&k.y.G<k.3D.1I)k.2c=k.O;q(k.2c==k.O&&!k.5D&&!/(11|3c)/.16(k.2f)){k.x.G+=17}q(k.2c&&k.2c.1I>k.2c.3a.1I){4T("1m { m.P["+k.S+"].2c.F.1W = \'1H\'; } 1l(e) {}",m.7c)}},3X:B(p,3W){u bW,bS=p.2j,1F=p==k.x?\'x\':\'y\';u 6R=1h;u 3V=p.A.4I;p.H=1r.5Y(p.H-((p.1b(\'1K\')-p.t)/2));q(p.H<p.3s+p.3y){p.H=p.3s+p.3y;6R=J}q(!3W&&p.G<p.2E){p.G=p.2E;3V=1h}q(p.H+p.1b(\'1K\')>p.3s+p.5E-p.5F){q(!3W&&6R&&3V){p.G=1r.2L(p.G,p.1b(1F==\'y\'?\'4b\':\'6K\'))}L q(p.1b(\'1K\')<p.1b(\'4b\')){p.H=p.3s+p.5E-p.5F-p.1b(\'1K\')}L{p.H=p.3s+p.3y;q(!3W&&3V)p.G=p.1b(1F==\'y\'?\'4b\':\'6K\')}}q(!3W&&p.G<p.2E){p.G=p.2E;3V=1h}q(p.H<p.3y){u ao=p.H;p.H=p.3y;q(3V&&!3W)p.G=p.G-(p.H-ao)}},aA:B(2d){u x=k.x,y=k.y,2V=1h,2r=1r.2L(x.Z,x.G),2N=1r.2L(y.Z,y.G),2K=(k.2K||m.4M);q(2r/2N>2d){ 2r=2N*2d;q(2r<x.2E){2r=x.2E;2N=2r/2d}2V=J}L q(2r/2N<2d){ 2N=2r/2d;2V=J}q(m.4M&&x.Z<x.2E){x.1T=x.Z;y.G=y.1T=y.Z}L q(k.2K){x.1T=2r;y.1T=2N}L{x.G=2r;y.G=2N}2V=k.6Y(k.2K?I:2d,2V);q(2K&&y.G<y.1T){y.1T=y.G;x.1T=y.G*2d}q(2V||2K){x.H=x.1A-x.cb+x.2s;x.2E=x.G;k.3X(x,J);y.H=y.1A-y.cb+y.2s;y.2E=y.G;k.3X(y,J);q(k.1z)k.4m()}},6Y:B(2d,2V){u x=k.x,y=k.y;q(k.1z&&(k.2o||k.5A)){3T(y.G>k.4s&&x.G>k.3O&&y.1b(\'1K\')>y.1b(\'4b\')){y.G-=10;q(2d)x.G=y.G*2d;k.4m(0,1);2V=J}}D 2V},7M:B(){u x=k.x,y=k.y;k.4a(\'1n\');k.7z(1,{Y:{K:x.1b(\'1K\'),M:y.1b(\'1K\'),1f:x.H,18:y.H},O:{1f:x.1V+x.1b(\'5u\'),18:y.1V+y.1b(\'5u\'),K:x.1T||x.G,M:y.1T||y.G}},m.7c)},7z:B(2y,2h,3b){q(k.1o&&!k.3g){q(2y)k.1o.4B();L k.1o.5l((k.1Z&&k.48))}q(!2y)k.9V();u A=k,x=A.x,y=A.y,2g=k.2g;q(!2y)2g=k.an||2g;u 4O=2y?B(){q(A.1o)A.1o.2m.F.1q="2l";4T(B(){A.aC()},50)}:B(){A.7A()};q(2y)m.Q(k.Y,{K:x.t+\'E\',M:y.t+\'E\'});q(2y&&k.1Z){m.Q(k.Y,{1f:(x.1A-x.cb+x.2s)+\'E\',18:(y.1A-y.cb+y.2s)+\'E\'})}q(k.am){m.Q(k.Y,{1B:2y?0:1});m.3e(2h.Y,{1B:2y})}m.41(k.Y,2h.Y,{3w:3b,2g:2g,3o:B(2R,2S){q(A.1o&&A.3g&&2S.1a==\'18\'){u 4G=2y?2S.H:1-2S.H;u H={w:x.t+(x.1b(\'1K\')-x.t)*4G,h:y.t+(y.1b(\'1K\')-y.t)*4G,x:x.1A+(x.H-x.1A)*4G,y:y.1A+(y.H-y.1A)*4G};A.1o.4B(H,0,1)}q(A.1Z){q(2S.1a==\'1f\')A.3D.F.1f=(x.H-2R)+\'E\';q(2S.1a==\'18\')A.3D.F.18=(y.H-2R)+\'E\'}}});m.41(k.O,2h.O,3b,2g,4O);q(2y){k.Y.F.1q=\'2l\';k.O.F.1q=\'2l\';q(k.1Z)k.1g.F.1q=\'2l\';k.a.1p+=\' U-9T-9O\'}},aC:B(){k.4e=J;k.3d();q(k.1Z&&k.31==\'4O\')k.5S();q(k.11){1m{u A=k,1U=k.11.6r||k.11.52.N;m.1R(1U,\'7H\',B(){q(m.2q!=A.S)A.3d()})}1l(e){}q(m.1L&&1t k.4z!=\'ce\')k.11.F.K=(k.3i-1)+\'E\'}q(m.3B&&m.3B==k.a)m.3B=I;k.ax();u p=m.3k,6I=m.5R.x+p.5T,6D=m.5R.y+p.5U;k.6x=k.x.H<6I&&6I<k.x.H+k.x.1b(\'1K\')&&k.y.H<6D&&6D<k.y.H+k.y.1b(\'1K\');q(k.1z)k.9N()},ax:B(){u S=k.S;u 1x=k.1x;1w m.4L(1x,B(){1m{m.P[S].9h()}1l(e){}})},9h:B(){u 1M=k.6B(1);q(1M&&1M.2M.9C().2Z(/m\\.53/))u 1v=m.14(\'1v\',{T:m.5m(1M)})},6B:B(2w){u 9B=k.9A(),as=m.5K.3m[k.4h||\'24\'];D(as&&as[9B+2w])||I},9A:B(){u 1P=m.4Z().3m[k.4h||\'24\'];q(1P)W(u i=0;i<1P.1c;i++){q(1P[i]==k.a)D i}D I},6w:B(){m.3j(k.Y);m.P[k.S]=I;q(k.21)m.21.F.1f=\'-3R\'},a0:B(){k.7e=m.14(\'a\',{2v:m.9y,2j:m.9E,1p:\'U-7e\',2n:m.1e.ag,2u:m.1e.9F});k.4W({60:k.7e,1d:k.9K||\'18 1f\'})},77:B(7X,9x){W(u i=0;i<7X.1c;i++){u R=7X[i],s=I;q(!k[R+\'43\']&&k.6b)k[R+\'43\']=R+\'-W-\'+k.6b;q(k[R+\'43\'])k[R]=m.3z(k[R+\'43\']);q(!k[R]&&!k[R+\'7Z\']&&k[R+\'9I\'])1m{s=d4(k[R+\'9I\'])}1l(e){}q(!k[R]&&k[R+\'7Z\']){s=k[R+\'7Z\']}q(!k[R]&&!s){k[R]=m.3z(k.a[\'9G\'+R+\'43\']);q(!k[R]){u 1M=k.a.9H;3T(1M&&!m.5W(1M)){q((1w 5P(\'U-\'+R)).16(1M.1p||I)){q(!1M.1j)k.a[\'9G\'+R+\'43\']=1M.1j=\'2F\'+m.4y++;k[R]=m.3z(1M.1j);7N}1M=1M.9H}}}q(!k[R]&&s)k[R]=m.14(\'1i\',{1p:\'U-\'+R,2n:s});q(9x&&k[R]){u o={1d:(R==\'66\')?\'4U\':\'6a\'};W(u x 3A k[R+\'9w\'])o[x]=k[R+\'9w\'][x];o.60=k[R];k.4W(o)}}},4a:B(1q){q(m.9m)k.5a(\'d5\',1q);q(m.9l)k.5a(\'de\',1q);q(m.7V)k.5a(\'*\',1q)},5a:B(4c,1q){u 1k=N.3x(4c);u 1a=4c==\'*\'?\'1W\':\'1q\';W(u i=0;i<1k.1c;i++){q(1a==\'1q\'||(N.87.9k(1k[i],"").9i(\'1W\')==\'1H\'||1k[i].9j(\'1n-by\')!=I)){u 23=1k[i].9j(\'1n-by\');q(1q==\'2l\'&&23){23=23.2i(\'[\'+k.S+\']\',\'\');1k[i].4N(\'1n-by\',23);q(!23)1k[i].F[1a]=1k[i].7q}L q(1q==\'1n\'){u 2T=m.85(1k[i]);2T.w=1k[i].2e;2T.h=1k[i].1I;u 9o=(2T.x+2T.w<k.x.1b(\'4w\')||2T.x>k.x.1b(\'4w\')+k.x.1b(\'88\'));u 9p=(2T.y+2T.h<k.y.1b(\'4w\')||2T.y>k.y.1b(\'4w\')+k.y.1b(\'88\'));u 5c=m.7S(1k[i]);q(!9o&&!9p&&5c!=k.S){q(!23){1k[i].4N(\'1n-by\',\'[\'+k.S+\']\');1k[i].7q=1k[i].F[1a];1k[i].F[1a]=\'1n\'}L q(23.9v(\'[\'+k.S+\']\')==-1){1k[i].4N(\'1n-by\',23+\'[\'+k.S+\']\')}}L q((23==\'[\'+k.S+\']\'||m.2q==5c)&&5c!=k.S){1k[i].4N(\'1n-by\',\'\');1k[i].F[1a]=1k[i].7q||\'\'}L q(23&&23.9v(\'[\'+k.S+\']\')>-1){1k[i].4N(\'1n-by\',23.2i(\'[\'+k.S+\']\',\'\'))}}}}},3d:B(){k.Y.F.1u=m.4l+=2;W(u i=0;i<m.P.1c;i++){q(m.P[i]&&i==m.2q){u 4f=m.P[i];4f.O.1p+=\' U-\'+4f.2B+\'-7s\';q(4f.2o){4f.O.F.3L=m.3F?\'9q\':\'5w\';4f.O.2u=m.1e.9s}}}q(k.1o)k.1o.2m.F.1u=k.Y.F.1u-1;k.O.1p=\'U-\'+k.2B;q(k.2o){k.O.2u=m.1e.7h;q(m.4E){m.4i=1y.30?\'5w\':\'6X(\'+m.56+m.4E+\'), 5w\';q(m.3F&&m.26<6)m.4i=\'9q\';k.O.F.3L=m.4i}}m.2q=k.S;m.1R(N,1y.30?\'5i\':\'5h\',m.4D)},7x:B(x,y){k.x.7j(x);k.y.7j(y)},3q:B(e){u w,h,r=e.K/e.M;w=1r.7l(e.K+e.5q,1r.2L(k.3O,k.x.Z));q(k.2o&&1r.7u(w-k.x.Z)<12)w=k.x.Z;h=k.1Z?e.M+e.5r:w/r;q(h<1r.2L(k.4s,k.y.Z)){h=1r.2L(k.4s,k.y.Z);q(k.2o)w=h*r}k.7G(w,h)},7G:B(w,h){k.y.7J(h);k.x.7J(w);k.Y.F.M=k.y.1b(\'1K\')+\'E\'},28:B(){q(k.4z||!k.4e)D;k.4z=J;m.4g(N,1y.30?\'5i\':\'5h\',m.4D);1m{q(k.1Z)k.a5();k.O.F.3L=\'d1\';k.7z(0,{Y:{K:k.x.t,M:k.y.t,1f:k.x.1A-k.x.cb+k.x.2s,18:k.y.1A-k.y.cb+k.y.2s},O:{1f:0,18:0,K:k.x.t,M:k.y.t}},m.a7)}1l(e){k.7A()}},a5:B(){q(m.7V){q(!m.57)m.57=m.14(\'1i\',I,{1d:\'22\'},m.1S);m.Q(m.57,{K:k.x.G+\'E\',M:k.y.G+\'E\',1f:k.x.H+\'E\',18:k.y.H+\'E\',1O:\'4H\'})}q(k.2f==\'3c\')1m{m.$(k.V.1j).cN()}1l(e){}q(k.31==\'4O\'&&!k.48)k.a4();q(k.2c&&k.2c!=k.4p)k.2c.F.1W=\'1n\'},a4:B(){q(m.1L&&k.11)1m{k.11.52.N.V.2n=\'\'}1l(e){}q(k.2f==\'3c\')7D.cO(k.V.1j);k.V.2n=\'\'},9S:B(){q(k.1o)k.1o.2m.F.1O=\'24\';k.2W=I;k.Y.F.1O=\'24\';k.4e=1h;m.20(m.3C,k)},a8:B(){1m{m.P[k.S]=k;q(!m.7m&&m.2q!=k.S){1m{m.P[m.2q].28()}1l(e){}}u z=m.4l++,4A={1O:\'\',1u:z};m.Q(k.Y,4A);k.4z=1h;u o=k.1o||0;q(o){q(!k.3g)4A.1q=\'1n\';m.Q(o.2m,4A)}k.7M()}1l(e){}},4W:B(o){u C=o.60;q(1t C==\'7L\')C=m.3z(C);q(o.2Q)C=m.14(\'1i\',{2n:o.2Q});q(!C||1t C==\'7L\')D;C.F.1O=\'4H\';k.9Q();u K=o.K&&/^[0-9]+(E|%)$/.16(o.K)?o.K:\'1H\';q(/^(1f|2G)73$/.16(o.1d)&&!/^[0-9]+E$/.16(o.K))K=\'cG\';u 19=m.14(\'1i\',{1j:\'2F\'+m.4y++,2F:o.2F},{1d:\'22\',1q:\'1n\',K:K,8b:m.1e.89||\'\',1B:0},k.1z,J);19.1G(C);m.3e(19,{1B:1,a9:0,ae:0,3b:(o.7U===0||o.7U===1h||(o.7U==2&&m.1L))?0:6j});m.3e(19,o);q(k.9R){k.5p(19);q(!19.5Z||k.6x)m.41(19,{1B:19.1B},19.3b)}m.20(k.1Q,m.4y-1)},5p:B(19){u p=19.1d||\'6q 6H\',64=19.a9,62=19.ae;q(19.3a!=k.1z)k.1z.1G(19);q(/1f$/.16(p))19.F.1f=64+\'E\';q(/6H$/.16(p))m.Q(19,{1f:\'50%\',4j:(64-1r.5Y(19.2e/2))+\'E\'});q(/2G$/.16(p))19.F.2G=-64+\'E\';q(/^ad$/.16(p)){m.Q(19,{2G:\'2A%\',6m:k.x.cb+\'E\',18:-k.y.cb+\'E\',3E:-k.y.cb+\'E\',1W:\'1H\'});k.x.1V=19.2e}L q(/^ac$/.16(p)){m.Q(19,{1f:\'2A%\',4j:k.x.cb+\'E\',18:-k.y.cb+\'E\',3E:-k.y.cb+\'E\',1W:\'1H\'});k.x.2U=19.2e}q(/^18/.16(p))19.F.18=62+\'E\';q(/^6q/.16(p))m.Q(19,{18:\'50%\',3N:(62-1r.5Y(19.1I/2))+\'E\'});q(/^3E/.16(p))19.F.3E=-62+\'E\';q(/^4U$/.16(p)){m.Q(19,{1f:(-k.x.1V-k.x.cb)+\'E\',2G:(-k.x.2U-k.x.cb)+\'E\',3E:\'2A%\',6f:k.y.cb+\'E\',K:\'1H\'});k.y.1V=19.1I}L q(/^6a$/.16(p)){m.Q(19,{1d:\'3K\',1f:(-k.x.1V-k.x.cb)+\'E\',2G:(-k.x.2U-k.x.cb)+\'E\',18:\'2A%\',3N:k.y.cb+\'E\',K:\'1H\'});k.y.2U=19.1I;19.F.1d=\'22\'}},aa:B(){k.77([\'66\',\'cP\'],J);q(k.66&&k.7b)k.66.1p+=\' U-3I\';q(m.a1)k.a0();W(u i=0;i<m.1Q.1c;i++){u o=m.1Q[i],63=o.6O,6d=o.4h;q((!63&&!6d)||(63&&63==k.6b)||(6d&&6d===k.4h)){q(k.2o||(k.1Z&&o.cQ))k.4W(o)}}u 6g=[];W(u i=0;i<k.1Q.1c;i++){u o=m.$(\'2F\'+k.1Q[i]);q(/73$/.16(o.1d))k.5p(o);L m.20(6g,o)}W(u i=0;i<6g.1c;i++)k.5p(6g[i]);k.9R=J},9Q:B(){q(!k.1z)k.1z=m.14(\'1i\',{1p:k.78},{1d:\'22\',K:(k.x.G||(k.2K?k.K:I)||k.x.Z)+\'E\',M:(k.y.G||k.y.Z)+\'E\',1q:\'1n\',1W:\'1n\',1u:m.1L?4:\'1H\'},m.1S,J)},4m:B(74,9P){u 1z=k.1z,x=k.x,y=k.y;m.Q(1z,{K:x.G+\'E\',M:y.G+\'E\'});q(74||9P){W(u i=0;i<k.1Q.1c;i++){u o=m.$(\'2F\'+k.1Q[i]);u 72=(m.3F||N.5G==\'6M\');q(o&&/^(4U|6a)$/.16(o.1d)){q(72){o.F.K=(1z.2e+2*x.cb+x.1V+x.2U)+\'E\'}y[o.1d==\'4U\'?\'1V\':\'2U\']=o.1I}q(o&&72&&/^(1f|2G)73$/.16(o.1d)){o.F.M=(1z.1I+2*y.cb)+\'E\'}}}q(74){m.Q(k.O,{18:y.1V+\'E\'});m.Q(1z,{18:(y.1V+y.cb)+\'E\'})}},9N:B(){u b=k.1z;b.1p=\'\';m.Q(b,{18:(k.y.1V+k.y.cb)+\'E\',1f:(k.x.1V+k.x.cb)+\'E\',1W:\'2l\'});q(m.4X)b.F.1q=\'2l\';k.Y.1G(b);W(u i=0;i<k.1Q.1c;i++){u o=m.$(\'2F\'+k.1Q[i]);o.F.1u=o.1u||4;q(!o.5Z||k.6x){o.F.1q=\'2l\';m.Q(o,{1q:\'2l\',1O:\'\'});m.41(o,{1B:o.1B},o.3b)}}},9V:B(){q(!k.1Q.1c)D;q(k.1Z&&k.48){k.1z.F.18=\'-3R\';m.1S.1G(k.1z)}L m.3j(k.1z)},9W:B(){k.69=m.14(\'a\',{2v:\'9X:m.P[\'+k.S+\'].7i();\',2u:m.1e.9Y,1p:\'U-Z-53\'});k.4W({60:k.69,1d:m.9Z,5Z:J,1B:m.9U})},7i:B(){1m{q(k.69)m.3j(k.69);k.3d();u 2r=k.x.G,2N=k.y.G;k.7G(k.x.Z,k.y.Z);u 6k=k.x.H-(k.x.G-2r)/2;q(6k<m.4j)6k=m.4j;u 6c=k.y.H-(k.y.G-2N)/2;q(6c<m.3N)6c=m.3N;k.7x(6k,6c);k.4a(\'1n\')}1l(e){k.7w(e)}},7A:B(){k.a.1p=k.a.1p.2i(\'U-9T-9O\',\'\');k.4a(\'2l\');q(k.1Z&&k.48){k.9S()}L{q(k.1o&&k.3g)k.1o.5l();m.3j(k.Y)}q(m.57)m.57.F.1O=\'24\';m.P[k.S]=I;m.ab()}};m.5j=B(a,O,5L){k.a=a;k.O=O;k.5L=5L};m.5j.54={7y:B(){u 2b;q(!k.T)k.T=m.5m(k.a);q(k.T.2Z(\'#\')){u 1P=k.T.az(\'#\');k.T=1P[0];k.1j=1P[1]}q(m.5J[k.T]){k.9D=m.5J[k.T];q(k.1j)k.7Y();L k.4Y();D}1m{2b=1w 9n()}1l(e){1m{2b=1w a6("bE.9L")}1l(e){1m{2b=1w a6("9M.9L")}1l(e){k.7v()}}}u 36=k;2b.bF=B(){q(36.2b.9r==4){q(36.1j)36.7Y();L 36.4Y()}};u T=k.T;k.2b=2b;q(m.bd)T=T.2i(/$/,(/\\?/.16(T)?\'&\':\'?\')+\'bz=\'+(1w 5s()).59());2b.ak(\'bA\',T,J);2b.9J(\'X-bP-bN\',\'9n\');2b.9J(\'bw-bj\',\'bk/x-bl-7O-be\');2b.bg(I)},7Y:B(){m.5N();u 3h=1y.30||m.9z?{T:\'bs:br\'}:I;k.11=m.14(\'11\',3h,{1d:\'22\',18:\'-3R\'},m.1S);k.4Y()},4Y:B(){u s=k.9D||k.2b.bq,5I;q(k.5L)m.5J[k.T]=s;q(!m.1L||m.26>=5.5){s=s.2i(1w 5P(\'<bn[^>]*>\',\'aB\'),\'\').2i(1w 5P(\'<aD[^>]*>.*?</aD>\',\'aB\'),\'\');q(k.11){u 1U=k.11.6r;q(!1U&&k.11.52)1U=k.11.52.N;q(!1U){u 36=k;4T(B(){36.4Y()},25);D}1U.ak();1U.bO(s);1U.28();1m{s=1U.6F(k.1j).2n}1l(e){1m{s=k.11.N.6F(k.1j).2n}1l(e){}}m.3j(k.11)}L{5I=/(<V[^>]*>|<\\/V>)/ba;q(5I.16(s))s=s.az(5I)[m.2Y?1:2]}}m.4d(k.O,\'5H\',\'U-V\').2n=s;k.2J();W(u x 3A k)k[x]=I}};m.5z=m.1e;u b6=m.4S;q(m.1L&&1y==1y.18){(B(){1m{N.44.aW(\'1f\')}1l(e){4T(aE.aX,50);D}m.3p()})()}m.1R(N,\'b9\',m.3p);m.1R(1y,\'7o\',m.3p);m.1R(N,\'3p\',B(){q(m.5v){u F=m.14(\'F\',{R:\'aK/79\'},I,N.3x(\'aQ\')[0]),a2=N.5G==\'6M\';B 5B(6U,6T){q(m.1L&&(m.26<9||a2)){u 3r=N.a3[N.a3.1c-1];q(1t(3r.5B)=="6W")3r.5B(6U,6T)}L{F.1G(N.bb(6U+" {"+6T+"}"))}}B cT(1a){D\'cS( ( ( cV = N.44.\'+1a+\' ? N.44.\'+1a+\' : N.V.\'+1a+\' ) ) + \\\'E\\\' );\'}q(m.5v)5B(\'.U 1v\',\'3L: 6X(\'+m.56+m.5v+\'), 5w !d0;\')}});m.1R(1y,\'3q\',B(){m.5y()});m.1R(N,\'6o\',B(e){m.5R={x:e.5Q,y:e.5f}});m.1R(N,\'7H\',m.7K);m.1R(N,\'9t\',m.7K);m.1R(N,\'3p\',m.4Z);m.1R(1y,\'7o\',m.9u);m.1R(1y,\'7o\',m.af)}', 62, 827, '||||||||||||||||||||this||hs||||if||||var||||||exp|function|el|return|px|style|size|pos|null|true|width|else|height|document|content|expanders|setStyles|type|key|src|highslide|body|for||wrapper|full||iframe|||createElement||test||top|overlay|prop|get|length|position|lang|left|innerContent|false|div|id|els|catch|try|hidden|outline|className|visibility|Math|offset|typeof|zIndex|img|new|outlineType|window|overlayBox|tpos|opacity|fx|node|params|dim|appendChild|auto|offsetHeight|case|wsize|ie|next|options|display|arr|overlays|addEventListener|container|imgSize|doc|p1|overflow|undefined|event|isHtml|push|loading|absolute|hiddenBy|none||uaVersion||close|td|dragArgs|xhr|scrollerDiv|ratio|offsetWidth|objectType|easing|to|replace|target|elem|visible|table|innerHTML|isImage|span|focusKey|xSize|tb|re|title|href|op|ajax|up|name|100|contentType|wh|image|minSize|hsId|right|ucwh|clearing|onLoad|useBox|min|onclick|ySize|custom|opt|html|val|args|elPos|p2|changed|releaseMask|graphic|ieLt9|match|opera|objectLoadTime||||func|pThis||||parentNode|dur|swf|focus|extend|hasDragged|outlineWhileAnimating|attribs|objectWidth|discardElement|page|styles|groups|class|step|ready|resize|last|scroll|timers|li|getExpander|duration|getElementsByTagName|marginMin|getNode|in|upcoming|sleeping|mediumContent|bottom|ieLt7|pendingOutlines|onload|move|objectHeight|relative|cursor|clone|marginTop|minWidth|unit|now|9999px|start|while|getParam|allowReduce|moveOnly|justify|end|images||animate|number|Id|documentElement|hDiff|navigator|cNode|preserveContent|parseInt|doShowHide|fitsize|tagName|getElementByClass|isExpanded|blurExp|removeEventListener|slideshowGroup|styleRestoreCursor|marginLeft|wDiff|zIndexCounter|sizeOverlayBox|ruler|cacheBindings|scrollingContent|htmls|parent|minHeight|showLoading|currentStyle|iDoc|opos|contentLoaded|idCounter|isClosing|stl|setPosition|filter|keyHandler|restoreCursor|all|fac|block|allowSizeReduction|uclt|before|Outline|padToMinWidth|setAttribute|after|preloadTheseImages|on|param|Expander|setTimeout|above|getParams|createOverlay|safari|loadHTML|getAnchors||cache|contentWindow|expand|prototype|matches|graphicsDir|mask|iebody|getTime|showHideElements|preloadTheseAjax|wrapperKey|curAnim|gotoEnd|clientY|topmostKey|keydown|keypress|Ajax|previousOrNext|destroy|getSrc|previous|self|positionOverlay|dX|dY|Date|Dimension|imgPad|expandCursor|pointer|toLowerCase|getPageSize|langDefaults|allowHeightReduction|addRule|kdeBugCorr|allowWidthReduction|clientSize|marginMax|compatMode|DIV|regBody|cachedGets|anchors|pre|expOnly|init|tr|RegExp|clientX|mouse|writeExtendedContent|scrollLeft|scrollTop|userAgent|isHsAnchor|maxWidth|round|hideOnMouseOut|overlayId|cloneNode|offY|tId|offX|preventDefault|heading|over|preloadFullImage|fullExpandLabel|below|thumbsUserSetId|ypos|sg|onLoadStarted|marginBottom|os|onReady|maincontent|250|xpos|relatedTarget|marginRight|continuePreloading|mousemove|srcElement|middle|contentDocument|overrides|parseFloat|calcExpanded|calcBorders|cancelLoading|mouseIsOver|calcThumb|padding|distance|getAdjacentAnchor|hasAlphaImageLoader|mY|cur|getElementById|offsetTop|center|mX|lt|maxsize|arrow|BackCompat|maxHeight|thumbnailId|ucrb|Click|hasMovedMin|correctIframeSize|dec|sel|margin|object|url|fitOverlayBox|isReady||numberOfImagesToPreload|ie6|panel|doWrapper||htmlGetSize|getInline|wrapperClassName|css|sizeDiff|dragByHeading|expandDuration|setObjContainerSize|credits|contentId|garbageBin|restoreTitle|doFullExpand|setPos|clones|max|allowMultipleInstances|topZ|load|hasFocused|origProp|preloadAjaxElement|blur|getCacheBinding|abs|onError|error|moveTo|run|changeSize|afterClose|openerTagNames|element|swfobject|getSelfRendered|adj|resizeTo|mousedown|swfOptions|setSize|mouseClickHandler|string|show|break|form|Create|update|loadingPos|getWrapperKey|location|fade|geckoMac|tbody|types|getElementContent|Text|state|connectOutline|cacheAjax|complete|startTime|getPosition|done|defaultView|osize|cssDirection|dragHandler|direction|wrapperMouseHandler|pageOrigin|Next|JS|Highslide|Play|525|Close|Pause|spacebar|slideshow|Previous|thumb|offsetParent|from|timerId|orig|transit|updateAnchors|call|replaceLang|offsetLeft|pageXOffset|_default|skin|contentWrapper|enableKeyListener|htmlExpand|pow|clickY|loadingTitle|ltr|detachEvent|clickX|loadingText|focusTopmost|easeInQuad|loadingOpacity|hasHtmlExpanders|preloadGraphic|clientWidth|moveText|moveTitle|switch|closeTitle|closeText|nextText|nextTitle|and|200|previousTitle|previousText|ul|resizeTitle|background|nopad|onGraphicLoad|alpha|appendTo||vis|tag|headingOverlay|hide|captionOverlay|rv|Move|preloadNext|getPropertyValue|getAttribute|getComputedStyle|hideIframes|hideSelects|XMLHttpRequest|clearsX|clearsY|hand|readyState|focusTitle|mouseup|preloadImages|indexOf|Overlay|addOverlay|creditsHref|ie6SSL|getAnchorIndex|current|toString|cachedGet|creditsTarget|creditsTitle|_|nextSibling|Eval|setRequestHeader|creditsPosition|XMLHTTP|Microsoft|showOverlays|anchor|doPanels|genOverlayBox|gotOverlays|sleep|active|fullExpandOpacity|destroyOverlays|createFullExpand|javascript|fullExpandTitle|fullExpandPosition|writeCredits|showCredits|backCompat|styleSheets|destroyObject|htmlPrepareClose|ActiveXObject|restoreDuration|awake|offsetX|getOverlays|reOrder|rightpanel|leftpanel|offsetY|preloadAjax|creditsText|KDE|vendor|removeChild|open|flashvars|fadeInOut|easingClose|tmpMin|border|htmlSizeOperations|clear||getIframePageHeight|newHeight|hasExtendedContent|both|prepareNextOutline|attributes|split|correctRatio|gi|afterExpand|script|arguments|wmode|captionEval|Use|keyCode|button|text|drag|headingId|graphics|_self|shadow|HEAD|click|drop|keys|header|htmlE|doScroll|callee|returnValue|outlineStartOffset|footer|registerOverlay|http|headingText|com|captionId|HsExpander|xpand|fullExpandText|DOMContentLoaded|ig|createTextNode|captionText|forceAjaxReload|urlencoded|pageYOffset|send|white|Gecko|Type|application|www|innerHeight|link|toUpperCase|removeAttribute|responseText|blank|about|1001|clientHeight|innerWidth|Content|Macintosh||dummy|GET|zoomout|maincontentText|maincontentId|Msxml2|onreadystatechange|zoomin|maincontentEval|oPos|it|ra|Safari|Trident|With|write|Requested|headingEval|pauseTitle|tgt|actual|rb|Bottom|tgtArr|Expand|300|nodeName|insertBefore|front|Right|Top|AlphaImageLoader|DXImageTransform|progid|Powered|sizingMethod|scale|Left||Height|Width|boolean|allowSimultaneousLoading|onmouseover|flushImgSize|transparent|embedSWF|version|htmlCreate|flash|newWidth|Loading|static|frameborder|oncontextmenu|blockRightClick|Line|alert|debug|onmouseout|lineNumber|message|imageCreate|cancel|bring|expressInstallSwfurl|01|png|paddingTop|200px|https|protocol|1px|linearTween|outlines|pauseText|StopPlay|removeSWF|caption|useOnHtml|dragSensitivity|expression|fix|sqrt|ignoreMe|mouseover|attachEvent|toElement|fromElement|important|default|playTitle|Go|eval|SELECT|the|cellSpacing|borderCollapse|outlinesDir|fontSize|lineHeight|collapse|playText|IFRAME|clearInterval|homepage|splice|esc|Resize|setInterval'.split('|'), 0, {}))

/** 
 * Name:    Listen Form
 * Version: 1.1
 * Author:  Joel Edwards
 * listenForm("Form ID", "Save Button ID");
 */
function listenForm(strFormId, elmButton) {
    jQuery('#' + strFormId + ' input, #' + strFormId + ' textarea, #' + strFormId + ' select').each(function () {
        jQuery(this).change(function () {
            jQuery(function (e) {
            	jQuery('#frm_SaveBtn').removeClass('disabled');
            	jQuery('#frm_SaveBtn').addClass('btn-save');
            })
        });
    });

    jQuery('.redactor-editor').bind("DOMSubtreeModified", function () {
    	jQuery('#frm_SaveBtn').removeClass('disabled');
    	jQuery('#frm_SaveBtn').addClass('btn-save');
    });
}

/*
 * SimpleModal @VERSION - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2014 Eric Martin
 * Licensed under MIT and GPL
 * Date:
 */

/**
 * SimpleModal is a lightweight jQuery plugin that provides a simple
 * interface to create a modal dialog.
 *
 * The goal of SimpleModal is to provide developers with a cross-browser
 * overlay and container that will be populated with data provided to
 * SimpleModal.
 *
 * There are two ways to call SimpleModal:
 * 1) As a chained function on a jQuery object, like $('#myDiv').modal();.
 * This call would place the DOM object, #myDiv, inside a modal dialog.
 * Chaining requires a jQuery object. An optional options object can be
 * passed as a parameter.
 *
 * @example $('<div>my data</div>').modal({options});
 * @example $('#myDiv').modal({options});
 * @example jQueryObject.modal({options});
 *
 * 2) As a stand-alone function, like $.modal(data). The data parameter
 * is required and an optional options object can be passed as a second
 * parameter. This method provides more flexibility in the types of data
 * that are allowed. The data could be a DOM object, a jQuery object, HTML
 * or a string.
 *
 * @example $.modal('<div>my data</div>', {options});
 * @example $.modal('my data', {options});
 * @example $.modal($('#myDiv'), {options});
 * @example $.modal(jQueryObject, {options});
 * @example $.modal(document.getElementById('myDiv'), {options});
 *
 * A SimpleModal call can contain multiple elements, but only one modal
 * dialog can be created at a time. Which means that all of the matched
 * elements will be displayed within the modal container.
 *
 * SimpleModal internally sets the CSS needed to display the modal dialog
 * properly in all browsers, yet provides the developer with the flexibility
 * to easily control the look and feel. The styling for SimpleModal can be
 * done through external stylesheets, or through SimpleModal, using the
 * overlayCss, containerCss, and dataCss options.
 *
 * SimpleModal has been tested in the following browsers:
 * - IE 6+
 * - Firefox 2+
 * - Opera 9+
 * - Safari 3+
 * - Chrome 1+
 *
 * @name SimpleModal
 * @type jQuery
 * @requires jQuery v1.3
 * @cat Plugins/Windows and Overlays
 * @author Eric Martin (http://ericmmartin.com)
 * @version @VERSION
 */

; (function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
}
(function ($) {
	var d = [],
		doc = $(document),
		ua = navigator.userAgent.toLowerCase(),
		wndw = $(window),
		w = [];

	var browser = {
		ieQuirks: null,
		msie: /msie/.test(ua) && !/opera/.test(ua),
		opera: /opera/.test(ua)
	};
	browser.ie6 = browser.msie && /msie 6./.test(ua) && typeof window['XMLHttpRequest'] !== 'object';
	browser.ie7 = browser.msie && /msie 7.0/.test(ua);
	browser.boxModel = (document.compatMode === "CSS1Compat");

	/*
	 * Create and display a modal dialog.
	 *
	 * @param {string, object} data A string, jQuery object or DOM object
	 * @param {object} [options] An optional object containing options overrides
	 */
	$.modal = function (data, options) {
		return $.modal.impl.init(data, options);
	};

	/*
	 * Close the modal dialog.
	 */
	$.modal.close = function () {
		$.modal.impl.close();
	};

	/*
	 * Set focus on first or last visible input in the modal dialog. To focus on the last
	 * element, call $.modal.focus('last'). If no input elements are found, focus is placed
	 * on the data wrapper element.
	 */
	$.modal.focus = function (pos) {
		$.modal.impl.focus(pos);
	};

	/*
	 * Determine and set the dimensions of the modal dialog container.
	 * setPosition() is called if the autoPosition option is true.
	 */
	$.modal.setContainerDimensions = function () {
		$.modal.impl.setContainerDimensions();
	};

	/*
	 * Re-position the modal dialog.
	 */
	$.modal.setPosition = function () {
		$.modal.impl.setPosition();
	};

	/*
	 * Update the modal dialog. If new dimensions are passed, they will be used to determine
	 * the dimensions of the container.
	 *
	 * setContainerDimensions() is called, which in turn calls setPosition(), if enabled.
	 * Lastly, focus() is called is the focus option is true.
	 */
	$.modal.update = function (height, width) {
		$.modal.impl.update(height, width);
	};

	/*
	 * Chained function to create a modal dialog.
	 *
	 * @param {object} [options] An optional object containing options overrides
	 */
	$.fn.modal = function (options) {
		return $.modal.impl.init(this, options);
	};

	/*
	 * SimpleModal default options
	 *
	 * appendTo:		(String:'body') The jQuery selector to append the elements to. For .NET, use 'form'.
	 * focus:			(Boolean:true) Focus in the first visible, enabled element?
	 * opacity:			(Number:50) The opacity value for the overlay div, from 0 - 100
	 * overlayId:		(String:'simplemodal-overlay') The DOM element id for the overlay div
	 * overlayCss:		(Object:{}) The CSS styling for the overlay div
	 * containerId:		(String:'simplemodal-container') The DOM element id for the container div
	 * containerCss:	(Object:{}) The CSS styling for the container div
	 * dataId:			(String:'simplemodal-data') The DOM element id for the data div
	 * dataCss:			(Object:{}) The CSS styling for the data div
	 * minHeight:		(Number:null) The minimum height for the container
	 * minWidth:		(Number:null) The minimum width for the container
	 * maxHeight:		(Number:null) The maximum height for the container. If not specified, the window height is used.
	 * maxWidth:		(Number:null) The maximum width for the container. If not specified, the window width is used.
	 * autoResize:		(Boolean:false) Automatically resize the container if it exceeds the browser window dimensions?
	 * autoPosition:	(Boolean:true) Automatically position the container upon creation and on window resize?
	 * zIndex:			(Number: 1000) Starting z-index value
	 * close:			(Boolean:true) If true, closeHTML, escClose and overClose will be used if set.
	 							If false, none of them will be used.
	 * closeHTML:		(String:'<a class="modalCloseImg" title="Close"></a>') The HTML for the default close link.
								SimpleModal will automatically add the closeClass to this element.
	 * closeClass:		(String:'simplemodal-close') The CSS class used to bind to the close event
	 * escClose:		(Boolean:true) Allow Esc keypress to close the dialog?
	 * overlayClose:	(Boolean:false) Allow click on overlay to close the dialog?
	 * fixed:			(Boolean:true) If true, the container will use a fixed position. If false, it will use a
								absolute position (the dialog will scroll with the page)
	 * position:		(Array:null) Position of container [top, left]. Can be number of pixels or percentage
	 * persist:			(Boolean:false) Persist the data across modal calls? Only used for existing
								DOM elements. If true, the data will be maintained across modal calls, if false,
								the data will be reverted to its original state.
	 * modal:			(Boolean:true) User will be unable to interact with the page below the modal or tab away from the dialog.
								If false, the overlay, iframe, and certain events will be disabled allowing the user to interact
								with the page below the dialog.
	 * onOpen:			(Function:null) The callback function used in place of SimpleModal's open
	 * onShow:			(Function:null) The callback function used after the modal dialog has opened
	 * onClose:			(Function:null) The callback function used in place of SimpleModal's close
	 */
	$.modal.defaults = {
		appendTo: 'body',
		focus: true,
		opacity: 50,
		overlayId: 'simplemodal-overlay',
		overlayCss: {},
		containerId: 'simplemodal-container',
		containerCss: {},
		dataId: 'simplemodal-data',
		dataCss: {},
		minHeight: null,
		minWidth: null,
		maxHeight: null,
		maxWidth: null,
		autoResize: false,
		autoPosition: true,
		zIndex: 1000,
		close: true,
		closeHTML: '<a class="modalCloseImg" title="Close"></a>',
		closeClass: 'simplemodal-close',
		escClose: true,
		overlayClose: false,
		fixed: true,
		position: null,
		persist: false,
		modal: true,
		onOpen: null,
		onShow: null,
		onClose: null
	};

	/*
	 * Main modal object
	 * o = options
	 */
	$.modal.impl = {
		/*
		 * Contains the modal dialog elements and is the object passed
		 * back to the callback (onOpen, onShow, onClose) functions
		 */
		d: {},
		/*
		 * Initialize the modal dialog
		 */
		init: function (data, options) {
			var s = this;

			// don't allow multiple calls
			if (s.d.data) {
				return false;
			}

			browser.ieQuirks = browser.msie && !browser.boxModel;

			// merge defaults and user options
			s.o = $.extend({}, $.modal.defaults, options);

			// keep track of z-index
			s.zIndex = s.o.zIndex;

			// set the onClose callback flag
			s.occb = false;

			// determine how to handle the data based on its type
			if (typeof data === 'object') {
				// convert DOM object to a jQuery object
				data = data instanceof $ ? data : $(data);
				s.d.placeholder = false;

				// if the object came from the DOM, keep track of its parent
				if (data.parent().parent().size() > 0) {
					data.before($('<span></span>')
						.attr('id', 'simplemodal-placeholder')
						.css({ display: 'none' }));

					s.d.placeholder = true;
					s.display = data.css('display');

					// persist changes? if not, make a clone of the element
					if (!s.o.persist) {
						s.d.orig = data.clone(true);
					}
				}
			}
			else if (typeof data === 'string' || typeof data === 'number') {
				// just insert the data as innerHTML
				data = $('<div></div>').html(data);
			}
			else {
				// unsupported data type!
				alert('SimpleModal Error: Unsupported data type: ' + typeof data);
				return s;
			}

			// create the modal overlay, container and, if necessary, iframe
			s.create(data);
			data = null;

			// display the modal dialog
			s.open();

			// useful for adding events/manipulating data in the modal dialog
			if ($.isFunction(s.o.onShow)) {
				s.o.onShow.apply(s, [s.d]);
			}

			// don't break the chain =)
			return s;
		},
		/*
		 * Create and add the modal overlay and container to the page
		 */
		create: function (data) {
			var s = this;

			// get the window properties
			s.getDimensions();

			// add an iframe to prevent select options from bleeding through
			if (s.o.modal && browser.ie6) {
				s.d.iframe = $('<iframe src="javascript:false;"></iframe>')
					.css($.extend(s.o.iframeCss, {
						display: 'none',
						opacity: 0,
						position: 'fixed',
						height: w[0],
						width: w[1],
						zIndex: s.o.zIndex,
						top: 0,
						left: 0
					}))
					.appendTo(s.o.appendTo);
			}

			// create the overlay
			s.d.overlay = $('<div></div>')
				.attr('id', s.o.overlayId)
				.addClass('simplemodal-overlay')
				.css($.extend(s.o.overlayCss, {
					display: 'none',
					opacity: s.o.opacity / 100,
					height: s.o.modal ? d[0] : 0,
					width: s.o.modal ? d[1] : 0,
					position: 'fixed',
					left: 0,
					top: 0,
					zIndex: s.o.zIndex + 1
				}))
				.appendTo(s.o.appendTo);

			// create the container
			s.d.container = $('<div></div>')
				.attr('id', s.o.containerId)
				.addClass('simplemodal-container')
				.css($.extend(
					{ position: s.o.fixed ? 'fixed' : 'absolute' },
					s.o.containerCss,
					{ display: 'none', zIndex: s.o.zIndex + 2 }
				))
				.append(s.o.close && s.o.closeHTML
					? $(s.o.closeHTML).addClass(s.o.closeClass)
					: '')
				.appendTo(s.o.appendTo);

			s.d.wrap = $('<div></div>')
				.attr('tabIndex', -1)
				.addClass('simplemodal-wrap')
				.css({ height: '100%', outline: 0, width: '100%' })
				.appendTo(s.d.container);

			// add styling and attributes to the data
			// append to body to get correct dimensions, then move to wrap
			s.d.data = data
				.attr('id', data.attr('id') || s.o.dataId)
				.addClass('simplemodal-data')
				.css($.extend(s.o.dataCss, {
					display: 'none'
				}))
				.appendTo('body');
			data = null;

			s.setContainerDimensions();
			s.d.data.appendTo(s.d.wrap);

			// fix issues with IE
			if (browser.ie6 || browser.ieQuirks) {
				s.fixIE();
			}
		},
		/*
		 * Bind events
		 */
		bindEvents: function () {
			var s = this;

			// bind the close event to any element with the closeClass class
			$('.' + s.o.closeClass).bind('click.simplemodal', function (e) {
				e.preventDefault();
				s.close();
			});

			// bind the overlay click to the close function, if enabled
			if (s.o.modal && s.o.close && s.o.overlayClose) {
				s.d.overlay.bind('click.simplemodal', function (e) {
					e.preventDefault();
					s.close();
				});
			}

			// bind keydown events
			doc.bind('keydown.simplemodal', function (e) {
				if (s.o.modal && e.keyCode === 9) { // TAB
					s.watchTab(e);
				}
				else if ((s.o.close && s.o.escClose) && e.keyCode === 27) { // ESC
					e.preventDefault();
					s.close();
				}
			});

			// update window size
			wndw.bind('resize.simplemodal orientationchange.simplemodal', function () {
				// redetermine the window width/height
				s.getDimensions();

				// reposition the dialog
				s.o.autoResize ? s.setContainerDimensions() : s.o.autoPosition && s.setPosition();

				if (browser.ie6 || browser.ieQuirks) {
					s.fixIE();
				}
				else if (s.o.modal) {
					// update the iframe & overlay
					s.d.iframe && s.d.iframe.css({ height: w[0], width: w[1] });
					s.d.overlay.css({ height: d[0], width: d[1] });
				}
			});
		},
		/*
		 * Unbind events
		 */
		unbindEvents: function () {
			$('.' + this.o.closeClass).unbind('click.simplemodal');
			doc.unbind('keydown.simplemodal');
			wndw.unbind('.simplemodal');
			this.d.overlay.unbind('click.simplemodal');
		},
		/*
		 * Fix issues in IE6 and IE7 in quirks mode
		 */
		fixIE: function () {
			var s = this, p = s.o.position;

			// simulate fixed position - adapted from BlockUI
			$.each([s.d.iframe || null, !s.o.modal ? null : s.d.overlay, s.d.container.css('position') === 'fixed' ? s.d.container : null], function (i, el) {
				if (el) {
					var bch = 'document.body.clientHeight', bcw = 'document.body.clientWidth',
						bsh = 'document.body.scrollHeight', bsl = 'document.body.scrollLeft',
						bst = 'document.body.scrollTop', bsw = 'document.body.scrollWidth',
						ch = 'document.documentElement.clientHeight', cw = 'document.documentElement.clientWidth',
						sl = 'document.documentElement.scrollLeft', st = 'document.documentElement.scrollTop',
						s = el[0].style;

					s.position = 'absolute';
					if (i < 2) {
						s.removeExpression('height');
						s.removeExpression('width');
						s.setExpression('height', '' + bsh + ' > ' + bch + ' ? ' + bsh + ' : ' + bch + ' + "px"');
						s.setExpression('width', '' + bsw + ' > ' + bcw + ' ? ' + bsw + ' : ' + bcw + ' + "px"');
					}
					else {
						var te, le;
						if (p && p.constructor === Array) {
							var top = p[0]
								? typeof p[0] === 'number' ? p[0].toString() : p[0].replace(/px/, '')
								: el.css('top').replace(/px/, '');
							te = top.indexOf('%') === -1
								? top + ' + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"'
								: parseInt(top.replace(/%/, '')) + ' * ((' + ch + ' || ' + bch + ') / 100) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';

							if (p[1]) {
								var left = typeof p[1] === 'number' ? p[1].toString() : p[1].replace(/px/, '');
								le = left.indexOf('%') === -1
									? left + ' + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"'
									: parseInt(left.replace(/%/, '')) + ' * ((' + cw + ' || ' + bcw + ') / 100) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
							}
						}
						else {
							te = '(' + ch + ' || ' + bch + ') / 2 - (this.offsetHeight / 2) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';
							le = '(' + cw + ' || ' + bcw + ') / 2 - (this.offsetWidth / 2) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
						}
						s.removeExpression('top');
						s.removeExpression('left');
						s.setExpression('top', te);
						s.setExpression('left', le);
					}
				}
			});
		},
		/*
		 * Place focus on the first or last visible input
		 */
		focus: function (pos) {
			var s = this, p = pos && $.inArray(pos, ['first', 'last']) !== -1 ? pos : 'first';

			// focus on dialog or the first visible/enabled input element
			var input = $(':input:enabled:visible:' + p, s.d.wrap);
			setTimeout(function () {
				input.length > 0 ? input.focus() : s.d.wrap.focus();
			}, 10);
		},
		getDimensions: function () {
			// fix a jQuery bug with determining the window height - use innerHeight if available
			var s = this,
				h = typeof window.innerHeight === 'undefined' ? wndw.height() : window.innerHeight;

			d = [doc.height(), doc.width()];
			w = [h, wndw.width()];
		},
		getVal: function (v, d) {
			return v ? (typeof v === 'number' ? v
					: v === 'auto' ? 0
					: v.indexOf('%') > 0 ? ((parseInt(v.replace(/%/, '')) / 100) * (d === 'h' ? w[0] : w[1]))
					: parseInt(v.replace(/px/, '')))
				: null;
		},
		/*
		 * Update the container. Set new dimensions, if provided.
		 * Focus, if enabled. Re-bind events.
		 */
		update: function (height, width) {
			var s = this;

			// prevent update if dialog does not exist
			if (!s.d.data) {
				return false;
			}

			// reset orig values
			s.d.origHeight = s.getVal(height, 'h');
			s.d.origWidth = s.getVal(width, 'w');

			// hide data to prevent screen flicker
			s.d.data.hide();
			height && s.d.container.css('height', height);
			width && s.d.container.css('width', width);
			s.setContainerDimensions();
			s.d.data.show();
			s.o.focus && s.focus();

			// rebind events
			s.unbindEvents();
			s.bindEvents();
		},
		setContainerDimensions: function () {
			var s = this,
				badIE = browser.ie6 || browser.ie7;

			// get the dimensions for the container and data
			var ch = s.d.origHeight ? s.d.origHeight : browser.opera ? s.d.container.height() : s.getVal(badIE ? s.d.container[0].currentStyle['height'] : s.d.container.css('height'), 'h'),
				cw = s.d.origWidth ? s.d.origWidth : browser.opera ? s.d.container.width() : s.getVal(badIE ? s.d.container[0].currentStyle['width'] : s.d.container.css('width'), 'w'),
				dh = s.d.data.outerHeight(true), dw = s.d.data.outerWidth(true);

			s.d.origHeight = s.d.origHeight || ch;
			s.d.origWidth = s.d.origWidth || cw;

			// mxoh = max option height, mxow = max option width
			var mxoh = s.o.maxHeight ? s.getVal(s.o.maxHeight, 'h') : null,
				mxow = s.o.maxWidth ? s.getVal(s.o.maxWidth, 'w') : null,
				mh = mxoh && mxoh < w[0] ? mxoh : w[0],
				mw = mxow && mxow < w[1] ? mxow : w[1];

			// moh = min option height
			var moh = s.o.minHeight ? s.getVal(s.o.minHeight, 'h') : 'auto';
			if (!ch) {
				if (!dh) { ch = moh; }
				else {
					if (dh > mh) { ch = mh; }
					else if (s.o.minHeight && moh !== 'auto' && dh < moh) { ch = moh; }
					else { ch = dh; }
				}
			}
			else {
				ch = s.o.autoResize && ch > mh ? mh : ch < moh ? moh : ch;
			}

			// mow = min option width
			var mow = s.o.minWidth ? s.getVal(s.o.minWidth, 'w') : 'auto';
			if (!cw) {
				if (!dw) { cw = mow; }
				else {
					if (dw > mw) { cw = mw; }
					else if (s.o.minWidth && mow !== 'auto' && dw < mow) { cw = mow; }
					else { cw = dw; }
				}
			}
			else {
				cw = s.o.autoResize && cw > mw ? mw : cw < mow ? mow : cw;
			}

			s.d.container.css({ height: ch, width: cw });
			s.d.wrap.css({ overflow: (dh > ch || dw > cw) ? 'auto' : 'visible' });
			s.o.autoPosition && s.setPosition();
		},
		setPosition: function () {
			var s = this, top, left,
				hc = (w[0] / 2) - (s.d.container.outerHeight(true) / 2),
				vc = (w[1] / 2) - (s.d.container.outerWidth(true) / 2),
				st = s.d.container.css('position') !== 'fixed' ? wndw.scrollTop() : 0;

			if (s.o.position && Object.prototype.toString.call(s.o.position) === '[object Array]') {
				top = st + (s.o.position[0] || hc);
				left = s.o.position[1] || vc;
			} else {
				top = st + hc;
				left = vc;
			}
			s.d.container.css({ left: left, top: top });
		},
		watchTab: function (e) {
			var s = this;

			if ($(e.target).parents('.simplemodal-container').length > 0) {
				// save the list of inputs
				s.inputs = $(':input:enabled:visible:first, :input:enabled:visible:last', s.d.data[0]);

				// if it's the first or last tabbable element, refocus
				if ((!e.shiftKey && e.target === s.inputs[s.inputs.length - 1]) ||
						(e.shiftKey && e.target === s.inputs[0]) ||
						s.inputs.length === 0) {
					e.preventDefault();
					var pos = e.shiftKey ? 'last' : 'first';
					s.focus(pos);
				}
			}
			else {
				// might be necessary when custom onShow callback is used
				e.preventDefault();
				s.focus();
			}
		},
		/*
		 * Open the modal dialog elements
		 * - Note: If you use the onOpen callback, you must "show" the
		 *         overlay and container elements manually
		 *         (the iframe will be handled by SimpleModal)
		 */
		open: function () {
			var s = this;
			// display the iframe
			s.d.iframe && s.d.iframe.show();

			if ($.isFunction(s.o.onOpen)) {
				// execute the onOpen callback
				s.o.onOpen.apply(s, [s.d]);
			}
			else {
				// display the remaining elements
				s.d.overlay.show();
				s.d.container.show();
				s.d.data.show();
			}

			s.o.focus && s.focus();

			// bind default events
			s.bindEvents();
		},
		/*
		 * Close the modal dialog
		 * - Note: If you use an onClose callback, you must remove the
		 *         overlay, container and iframe elements manually
		 *
		 * @param {boolean} external Indicates whether the call to this
		 *     function was internal or external. If it was external, the
		 *     onClose callback will be ignored
		 */
		close: function () {
			var s = this;

			// prevent close when dialog does not exist
			if (!s.d.data) {
				return false;
			}

			// remove the default events
			s.unbindEvents();

			if ($.isFunction(s.o.onClose) && !s.occb) {
				// set the onClose callback flag
				s.occb = true;

				// execute the onClose callback
				s.o.onClose.apply(s, [s.d]);
			}
			else {
				// if the data came from the DOM, put it back
				if (s.d.placeholder) {
					var ph = $('#simplemodal-placeholder');
					// save changes to the data?
					if (s.o.persist) {
						// insert the (possibly) modified data back into the DOM
						ph.replaceWith(s.d.data.removeClass('simplemodal-data').css('display', s.display));
					}
					else {
						// remove the current and insert the original,
						// unmodified data back into the DOM
						s.d.data.hide().remove();
						ph.replaceWith(s.d.orig);
					}
				}
				else {
					// otherwise, remove it
					s.d.data.hide().remove();
				}

				// remove the remaining elements
				s.d.container.hide().remove();
				s.d.overlay.hide();
				s.d.iframe && s.d.iframe.hide().remove();
				s.d.overlay.remove();

				// reset the dialog object
				s.d = {};
			}
		}
	};
}));

/*
 AngularJS v1.4.4
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,W,t){'use strict';function L(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.4/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Ya(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===pa&&a?!0:I(b)||G(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(C(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(G(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(lc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)Na.call(b,d)&&a.call(c,b[d],d,b);return b}function mc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function nc(b){return function(a,c){b(c,a)}}function Ud(){return++mb}function oc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Mb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(D(g)||C(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var n=h[l],q=g[n];c&&D(q)?ca(q)?b[n]=new Date(q.valueOf()):Oa(q)?
b[n]=new RegExp(q):(D(b[n])||(b[n]=G(q)?[]:{}),Mb(b[n],[q],!0)):b[n]=q}}oc(b,d);return b}function Q(b){return Mb(b,xa.call(arguments,1),!1)}function Vd(b){return Mb(b,xa.call(arguments,1),!0)}function Y(b){return parseInt(b,10)}function Nb(b,a){return Q(Object.create(b),a)}function v(){}function Za(b){return b}function qa(b){return function(){return b}}function pc(b){return C(b.toString)&&b.toString!==Object.prototype.toString}function y(b){return"undefined"===typeof b}function x(b){return"undefined"!==
typeof b}function D(b){return null!==b&&"object"===typeof b}function lc(b){return null!==b&&"object"===typeof b&&!qc(b)}function I(b){return"string"===typeof b}function X(b){return"number"===typeof b}function ca(b){return"[object Date]"===sa.call(b)}function C(b){return"function"===typeof b}function Oa(b){return"[object RegExp]"===sa.call(b)}function Ya(b){return b&&b.window===b}function $a(b){return b&&b.$evalAsync&&b.$watch}function ab(b){return"boolean"===typeof b}function rc(b){return!(!b||!(b.nodeName||
b.prop&&b.attr&&b.find))}function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return M(b.nodeName||b[0]&&b[0].nodeName)}function bb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Ya(b)||$a(b))throw Ea("cpws");if(sc.test(sa.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];D(b)&&(c.push(b),d.push(a));var e;if(G(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;G(a)?
a.length=0:m(a,function(b,c){delete a[c]});if(lc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=fa(b[e],null,c,d));else for(e in b)Na.call(b,e)&&(a[e]=fa(b[e],null,c,d));oc(a,f)}}else if(a=b,D(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(G(b))return fa(b,[],c,d);if(sc.test(sa.call(b)))a=new b.constructor(b);else if(ca(b))a=new Date(b.getTime());else if(Oa(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=
b.lastIndex;else return e=Object.create(qc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(G(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(D(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(G(b)){if(!G(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(ca(b))return ca(a)?
ka(b.getTime(),a.getTime()):!1;if(Oa(b))return Oa(a)?b.toString()==a.toString():!1;if($a(b)||$a(a)||Ya(b)||Ya(a)||G(a)||ca(a)||Oa(a))return!1;c=ga();for(d in b)if("$"!==d.charAt(0)&&!C(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===t||C(a[d])))return!1;return!0}return!1}function cb(b,a,c){return b.concat(xa.call(a,c))}function tc(b,a){var c=2<arguments.length?xa.call(arguments,2):[];return!C(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,cb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ya(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":$a(a)&&(c="$SCOPE");return c}function db(b,a){if("undefined"===typeof b)return t;X(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function uc(b){return I(b)?JSON.parse(b):b}function vc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Ob(b,
a,c){c=c?-1:1;var d=vc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ua(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return b[0].nodeType===Pa?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(d){return M(c)}}function wc(b){try{return decodeURIComponent(b)}catch(a){}}function xc(b){var a={};m((b||"").split("&"),function(b){var d,e,f;b&&(e=
b=b.replace(/\+/g,"%20"),d=b.indexOf("="),-1!==d&&(e=b.substring(0,d),f=b.substring(d+1)),e=wc(e),x(e)&&(f=x(f)?wc(f):!0,Na.call(a,e)?G(a[e])?a[e].push(f):a[e]=[a[e],f]:a[e]=f))});return a}function Pb(b){var a=[];m(b,function(b,d){G(b)?m(b,function(b){a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))});return a.length?a.join("&"):""}function nb(b){return ma(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Qa.length;for(d=0;d<e;++d)if(c=Qa[d]+a,I(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Qa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Qa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),
a(c,d?[d]:[],e))}function yc(b,a,c){D(c)||(c={});c=Q({strictDi:!1},c);var d=function(){b=z(b);if(b.injector()){var d=b[0]===W?"document":ua(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");aa.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};C(aa.resumeDeferredBootstrap)&&aa.resumeDeferredBootstrap()}function $d(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function ae(b){b=aa.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}
function zc(b,a){a=a||"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Ac){var a=ob();la=O.jQuery;x(a)&&(la=null===a?t:O[a]);la&&la.fn.on?(z=la,Q(la.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Qb)Qb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):z=R;aa.element=
z;Ac=!0}}function pb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&G(b)&&(b=b[b.length-1]);pb(C(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ta(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Bc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&C(b)?tc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;
if(!a)break;c.push(a)}while(a!==b);return z(c)}function ga(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=L("$injector"),d=L("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||L;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return B}}function b(a,c){return function(b,
e){e&&C(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return B}}if(!g)throw c("nomod",f);var d=[],e=[],r=[],u=a("$injector","invoke","push",e),B={_invokeQueue:d,_configBlocks:e,_runBlocks:r,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),config:u,run:function(a){r.push(a);return this}};h&&u(h);return B})}})}function ee(b){Q(b,{bootstrap:yc,copy:fa,extend:Q,merge:Vd,equals:ka,element:z,forEach:m,injector:eb,noop:v,bind:tc,toJson:db,fromJson:uc,identity:Za,isUndefined:y,isDefined:x,isString:I,isFunction:C,isObject:D,isNumber:X,isElement:rc,isArray:G,version:fe,isDate:ca,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:ae,$$minErr:L,$$csp:Fa,reloadWithDebugInfo:$d});
Rb=de(O);Rb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Cc).directive({a:he,input:Dc,textarea:Dc,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,
ngList:Le,ngChange:Me,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(sb).directive(Ic);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,$filter:Jc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,
$httpBackend:ff,$location:gf,$log:hf,$parse:jf,$rootScope:kf,$q:lf,$$q:mf,$sce:nf,$sceDelegate:of,$sniffer:pf,$templateCache:qf,$templateRequest:rf,$$testability:sf,$timeout:tf,$window:uf,$$rAF:vf,$$jqLite:wf,$$HashMap:xf,$$cookieReader:yf})}])}function fb(b){return b.replace(zf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Af,"Moz$1")}function Kc(b){b=b.nodeType;return b===pa||!b||9===b}function Lc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));
d=(Bf.exec(b)||["",""])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Cf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=cb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;I(b)&&(b=T(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=W;var c;b=(c=Df.exec(b))?[a.createElement(c[1])]:
(c=Lc(b,a))?c.childNodes:[]}Mc(this,b)}function Ub(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Nc(b,a,c,d){if(x(d))throw Tb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(x(c)){var d=e[a];bb(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,
a){var c=b.ng339,d=c&&gb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Nc(b)),delete gb[c],b.ng339=t))}function vb(b,a){var c=b.ng339,c=c&&gb[c];a&&!c&&(b.ng339=c=++Ef,c=gb[c]={events:{},data:{},handle:t});return c}function Vb(b,a,c){if(Kc(b)){var d=x(c),e=!d&&a&&!D(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];Q(b,a)}}}function wb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+
a+" "):!1}function xb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function yb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",T(c))}}function Mc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==
a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Oc(b,a){return zb(b,"$"+(a||"ngController")+"Controller")}function zb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=G(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=z.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Pc(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Wb(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ff(b,a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);
else z(a).on("load",b)}function Qc(b,a){var c=Ab[a.toLowerCase()];return c&&Rc[ta(b)]&&c}function Gf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Sc[a]}function Hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function wf(){this.$get=function(){return Q(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==
c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Ua(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function If(b){return(b=b.toString().replace(Tc,"").match(Uc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(b,a){function c(a){return function(b,c){if(D(b))m(b,nc(a));else return a(b,c)}}function d(a,b){Ta(a,"service");if(C(b)||G(b))b=r.instantiate(b);if(!b.$get)throw Ha("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=
B.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){pb(y(a)||G(a),"modulesToLoad","not an array");var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{I(a)?(c=Rb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(r.invoke(a)):G(a)?b.push(r.invoke(a)):Sa(a,"module")}catch(e){throw G(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(b,a,g),l,r,n;r=0;for(l=k.length;r<l;r++){n=k[r];if("string"!==
typeof n)throw Ha("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}G(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((G(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return D(a)||C(a)?a:d},get:d,annotate:eb.$$annotate,has:function(a){return q.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Ua([],!0),q={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,qa(b),!1)}),constant:c(function(a,b){Ta(a,"constant");q[a]=b;u[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a})}}}},r=q.$injector=h(q,function(a,b){aa.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),u={},B=u.$injector=h(u,function(a,b){var c=r.get(a+"Provider",b);return B.invoke(c.$get,c,t,a)});m(g(b),function(a){a&&B.invoke(a)});return B}function Qe(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;C(c)?c=c():rc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):X(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=I(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):
(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ff(function(){d.$evalAsync(g)})});return g}]}function hb(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;G(b)&&(b=b.join(" "));G(a)&&(a=a.join(" "));return b+" "+a}function Jf(b){I(b)&&(b=b.split(" "));var a=ga();m(b,function(b){b.length&&(a[b]=!0)});return a}function Ia(b){return D(b)?b:{}}function Kf(b,a,c,d){function e(a){try{a.apply(null,xa.call(arguments,
1))}finally{if(B--,0===B)for(;K.length;)try{K.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{w=n.state;break a}catch(a){}w=void 0}w=y(w)?null:w;ka(w,F)&&(w=F);F=w}function h(){if(A!==l.url()||p!==w)A=l.url(),p=w,m(N,function(a){a(l.url(),w)})}var l=this,k=b.location,n=b.history,q=b.setTimeout,r=b.clearTimeout,u={};l.isMock=!1;var B=0,K=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=function(){B++};l.notifyWhenNoOutstandingRequests=function(a){0===B?a():
K.push(a)};var w,p,A=k.href,s=a.find("base"),H=null;g();p=w;l.url=function(a,c,e){y(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=p===e;if(A===a&&(!d.history||f))return l;var h=A&&Ja(A)===Ja(a);A=a;p=e;if(!d.history||h&&f){if(!h||H)H=a;c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):k.href=a}else n[c?"replaceState":"pushState"](e,"",a),g(),p=w;return l}return H||k.href.replace(/%27/g,"'")};l.state=function(){return w};var N=[],J=!1,F=
null;l.onUrlChange=function(a){if(!J){if(d.history)z(b).on("popstate",f);z(b).on("hashchange",f);J=!0}N.push(a);return a};l.$$applicationDestroyed=function(){z(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=s.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;B++;c=q(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};l.defer.cancel=function(a){return u[a]?(delete u[a],r(a),e(v),!0):!1}}function Ve(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new Kf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=q&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw L("$cacheFactory")("iid",b);var g=0,h=Q({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},q=null,r=null;return a[b]={put:function(a,b){if(!y(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(r.key);
return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==q&&(q=b.p);b==r&&(r=b.n);f(b.n,b.p);delete n[a]}delete l[a];g--},removeAll:function(){l={};g=0;n={};q=r=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return Q({},h,{size:g})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function qf(){this.$get=
["$cacheFactory",function(b){return b("templates")}]}function Cc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==M(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function r(a,f){Ta(a,"directive");I(a)?(d(a),pb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);C(h)?h={compile:qa(h)}:!h.compile&&h.link&&(h.compile=qa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,r=h.name,n={isolateScope:null,bindToController:null};D(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,r,!0),n.isolateScope={}):n.isolateScope=c(l.scope,r,!1));D(l.bindToController)&&(n.bindToController=c(l.bindToController,r,!0));if(D(n.bindToController)){var S=l.controller,B=l.controllerAs;if(!S)throw ea("noctrl",r);var ha;a:if(B&&I(B))ha=B;else{if(I(S)){var m=Vc.exec(S);if(m){ha=m[3];break a}}ha=void 0}if(!ha)throw ea("noident",
r);}var s=k.$$bindings=n;D(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(t){d(t)}});return f}])),e[a].push(f)):m(a,nc(r));return this};this.aHrefSanitizationWhitelist=function(b){return x(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return x(a)?
(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,w,p,A,s,H,N,J){function F(a,b){try{a.addClass(b)}catch(c){}}function V(a,b,c,d,e){a instanceof z||(a=z(a));m(a,function(b,c){b.nodeType==Pa&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);V.$$addScopeClass(a);var g=null;return function(b,c,d){pb(b,"scope");d=d||{};
var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?z(Xb(g,z("<div>").append(a).html())):c?Ra.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);V.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,r,n,u,N;if(p)for(N=Array(c.length),r=0;r<
h.length;r+=3)f=h[r],N[f]=c[f];else N=c;r=0;for(n=h.length;r<n;)if(l=N[h[r++]],c=h[r++],f=h[r++],c){if(c.scope){if(k=a.$new(),V.$$addScopeInfo(z(l),k),u=c.$$destroyBindings)c.$$destroyBindings=null,k.$on("$destroyed",u)}else k=a;u=c.transcludeOnThisElement?P(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null;c(f,k,l,d,u,c)}else f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,r,n,p,u=0;u<a.length;u++){l=new aa;k=ha(a[u],[],l,0===u?d:t,e);(f=k.length?E(k,a[u],l,b,c,null,[],[],f):null)&&f.scope&&
V.$$addScopeClass(l.$$element);l=f&&f.terminal||!(r=a[u].childNodes)||!r.length?null:S(r,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(u,f,l),n=!0,p=p||f;f=null}return n?g:null}function P(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,l;switch(a.nodeType){case pa:x(b,va(ta(a)),"E",d,e);for(var k,r,n,p=a.attributes,
u=0,N=p&&p.length;u<N;u++){var K=!1,J=!1;k=p[u];l=k.name;r=T(k.value);k=va(l);if(n=ia.test(k))l=l.replace(Xc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var S=k.replace(/(Start|End)$/,"");L(S)&&k===S+"Start"&&(K=l,J=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=va(l.toLowerCase());h[k]=l;if(n||!c.hasOwnProperty(k))c[k]=r,Qc(a,k)&&(c[k]=!0);X(a,b,r,k,n);x(b,k,"A",d,e,K,J)}a=a.className;D(a)&&(a=a.animVal);if(I(a)&&""!==a)for(;l=g.exec(a);)k=va(l[2]),x(b,k,"C",d,
e)&&(c[k]=T(l[3])),a=a.substr(l.index+l[0].length);break;case Pa:if(11===Va)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Pa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);wa(b,a.nodeValue);break;case 8:try{if(l=f.exec(a.nodeValue))k=va(l[1]),x(b,k,"M",d,e)&&(c[k]=T(l[2]))}catch(B){}}b.sort(za);return b}function ya(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);a.nodeType==pa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&
e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function Wc(a,b,c){return function(d,e,f,g,h){e=ya(e[0],b,c);return a(d,e,f,g,h)}}function E(a,b,d,e,f,g,h,k,r){function n(a,b,c,d){if(a){c&&(a=Wc(a,c,d));a.require=E.require;a.directiveName=x;if(P===E||E.$$isolateScope)a=Z(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Wc(b,c,d));b.require=E.require;b.directiveName=x;if(P===E||E.$$isolateScope)b=Z(b,{isolateScope:!0});k.push(b)}}function u(a,b,c,d){var e;if(I(b)){var f=b.match(l);b=
b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea("ctreq",b,a);}else if(G(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=u(a,b[g],c,d);return e||null}function N(a,b,c,d,e,f){var g=ga(),h;for(h in d){var l=d[h],k={$scope:l===P||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},r=l.controller;"@"==r&&(r=b[l.name]);k=p(r,k,!0,l.controllerAs);g[l.name]=k;s||a.data("$"+l.name+
"Controller",k.instance)}return g}function K(a,c,e,f,g,l){function r(a,b,c){var d;$a(a)||(c=b,b=a,a=t);s&&(d=A);c||(c=s?ja.parent():ja);return g(a,b,d,c,ya)}var n,p,J,B,A,ha,ja;b===e?(f=d,ja=d.$$element):(ja=z(e),f=new aa(ja,d));P&&(B=c.$new(!0));g&&(ha=r,ha.$$boundTransclude=g);w&&(A=N(ja,f,ha,w,B,c));P&&(V.$$addScopeInfo(ja,B,!0,!(F&&(F===P||F===P.$$originalDirective))),V.$$addScopeClass(ja,!0),B.$$isolateBindings=P.$$isolateBindings,Y(c,f,B,B.$$isolateBindings,P,B));if(A){var m=P||S,H;m&&A[m.name]&&
(p=m.$$bindings.bindToController,(J=A[m.name])&&J.identifier&&p&&(H=J,l.$$destroyBindings=Y(c,f,J.instance,p,m)));for(n in A){J=A[n];var E=J();E!==J.instance&&(J.instance=E,ja.data("$"+n+"Controller",E),J===H&&(l.$$destroyBindings(),l.$$destroyBindings=Y(c,f,E,p,m)))}}n=0;for(l=h.length;n<l;n++)p=h[n],$(p,p.isolateScope?B:c,ja,f,p.require&&u(p.directiveName,p.require,ja,A),ha);var ya=c;P&&(P.template||null===P.templateUrl)&&(ya=B);a&&a(ya,e.childNodes,t,g);for(n=k.length-1;0<=n;n--)p=k[n],$(p,p.isolateScope?
B:c,ja,f,p.require&&u(p.directiveName,p.require,ja,A),ha)}r=r||{};for(var J=-Number.MAX_VALUE,S=r.newScopeDirective,w=r.controllerDirectives,P=r.newIsolateScopeDirective,F=r.templateDirective,A=r.nonTlbTranscludeDirective,m=!1,H=!1,s=r.hasElementTranscludeDirective,ba=d.$$element=z(b),E,x,v,y=e,za,wa=0,L=a.length;wa<L;wa++){E=a[wa];var Bb=E.$$start,M=E.$$end;Bb&&(ba=ya(b,Bb,M));v=t;if(J>E.priority)break;if(v=E.scope)E.templateUrl||(D(v)?(O("new/isolated scope",P||S,E,ba),P=E):O("new/isolated scope",
P,E,ba)),S=S||E;x=E.name;!E.templateUrl&&E.controller&&(v=E.controller,w=w||ga(),O("'"+x+"' controller",w[x],E,ba),w[x]=E);if(v=E.transclude)m=!0,E.$$tlb||(O("transclusion",A,E,ba),A=E),"element"==v?(s=!0,J=E.priority,v=ba,ba=d.$$element=z(W.createComment(" "+x+": "+d[x]+" ")),b=ba[0],U(f,xa.call(v,0),b),y=V(v,e,J,g&&g.name,{nonTlbTranscludeDirective:A})):(v=z(Ub(b)).contents(),ba.empty(),y=V(v,e));if(E.template)if(H=!0,O("template",F,E,ba),F=E,v=C(E.template)?E.template(ba,d):E.template,v=fa(v),
E.replace){g=E;v=Sb.test(v)?Yc(Xb(E.templateNamespace,T(v))):[];b=v[0];if(1!=v.length||b.nodeType!==pa)throw ea("tplrt",x,"");U(f,ba,b);L={$attr:{}};v=ha(b,[],L);var Q=a.splice(wa+1,a.length-(wa+1));P&&Zc(v);a=a.concat(v).concat(Q);$c(d,L);L=a.length}else ba.html(v);if(E.templateUrl)H=!0,O("template",F,E,ba),F=E,E.replace&&(g=E),K=Lf(a.splice(wa,a.length-wa),ba,d,f,m&&y,h,k,{controllerDirectives:w,newScopeDirective:S!==E&&S,newIsolateScopeDirective:P,templateDirective:F,nonTlbTranscludeDirective:A}),
L=a.length;else if(E.compile)try{za=E.compile(ba,d,y),C(za)?n(null,za,Bb,M):za&&n(za.pre,za.post,Bb,M)}catch(R){c(R,ua(ba))}E.terminal&&(K.terminal=!0,J=Math.max(J,E.priority))}K.scope=S&&!0===S.scope;K.transcludeOnThisElement=m;K.templateOnThisElement=H;K.transclude=y;r.hasElementTranscludeDirective=s;return K}function Zc(a){for(var b=0,c=a.length;b<c;b++)a[b]=Nb(a[b],{$$isolateScope:!0})}function x(b,d,f,g,h,l,k){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var p=
0,u=d.length;p<u;p++)try{n=d[p],(g===t||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(l&&(n=Nb(n,{$$start:l,$$end:k})),b.push(n),h=n)}catch(J){c(J)}}return h}function L(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function $c(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==f?(F(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Lf(a,b,c,e,f,g,h,l){var k=[],r,n,p=b[0],u=a.shift(),J=Nb(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),N=C(u.templateUrl)?u.templateUrl(b,c):u.templateUrl,B=u.templateNamespace;b.empty();d(N).then(function(d){var K,w;d=fa(d);if(u.replace){d=Sb.test(d)?Yc(Xb(B,T(d))):[];K=d[0];if(1!=d.length||K.nodeType!==
pa)throw ea("tplrt",u.name,N);d={$attr:{}};U(e,b,K);var A=ha(K,[],d);D(u.scope)&&Zc(A);a=A.concat(a);$c(c,d)}else K=p,b.html(d);a.unshift(J);r=E(a,K,c,f,b,u,g,h,l);m(e,function(a,c){a==K&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);k.length;){d=k.shift();w=k.shift();var H=k.shift(),V=k.shift(),A=b[0];if(!d.$$destroyed){if(w!==p){var ya=w.className;l.hasElementTranscludeDirective&&u.replace||(A=Ub(K));U(H,z(w),A);F(z(A),ya)}w=r.transcludeOnThisElement?P(d,r.transclude,V):V;r(n,d,A,e,w,r)}}k=null});return function(a,
b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(r.transcludeOnThisElement&&(a=P(b,r.transclude,e)),r(n,b,c,d,a,r)))}}function za(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function O(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function wa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&V.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||V.$$addBindingClass(e);V.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return H.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return H.RESOURCE_URL}function X(a,c,d,e,
f){var g=R(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");var r=h[e];r!==d&&(l=r&&b(r,!0,g,f),d=r);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,
f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);z.hasData(d)&&(z(c).data(z(d).data()),la?(Qb=!0,la.cleanData([d])):delete z.cache[d[z.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return Q(function(){return a.apply(null,
arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function Y(a,c,d,e,f,g){var h;m(e,function(e,g){var l=e.attrName,k=e.optional,r,n,p,K;switch(e.mode){case "@":k||Na.call(c,l)||(d[g]=c[l]=void 0);c.$observe(l,function(a){I(a)&&(d[g]=a)});c.$$observers[l].$$scope=a;I(c[l])&&(d[g]=b(c[l])(a));break;case "=":if(!Na.call(c,l)){if(k)break;c[l]=void 0}if(k&&!c[l])break;n=w(c[l]);K=n.literal?ka:function(a,b){return a===b||a!==a&&b!==b};p=n.assign||function(){r=d[g]=n(a);throw ea("nonassign",
c[l],f.name);};r=d[g]=n(a);k=function(b){K(b,d[g])||(K(b,r)?p(a,b=d[g]):d[g]=b);return r=b};k.$stateful=!0;k=e.collection?a.$watchCollection(c[l],k):a.$watch(w(c[l],k),null,n.literal);h=h||[];h.push(k);break;case "&":n=c.hasOwnProperty(l)?w(c[l]):v;if(n===v&&k)break;d[g]=function(b){return n(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on("$destroy",e),v):e}var aa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};aa.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&N.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&N.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Qc(f,a),h=Gf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=zc(a,"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=J(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=T(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var r=2*k,g=g+J(T(h[r]),!0),g=g+(" "+T(h[r+1]));h=T(h[2*k]).split(/\s/);g+=J(T(h[0]),!0);2===h.length&&(g+=" "+T(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
m(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);A.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){bb(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Za:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;V.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",
c)}:v;V.$$addBindingClass=n?function(a){F(a,"ng-binding")}:v;V.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;V.$$addScopeClass=n?function(a,b){F(a,b?"ng-isolate-scope":"ng-scope")}:v;return V}]}function va(b){return fb(b.replace(Xc,""))}function ad(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Yc(b){b=z(b);var a=b.length;
if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Mf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ta(a,"controller");D(a)?Q(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!D(a.$scope))throw L("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,n,q;h=!0===h;l&&I(l)&&(q=l);if(I(f)){l=f.match(Vc);if(!l)throw Nf("ctrlfmt",f);n=l[1];q=q||l[3];f=b.hasOwnProperty(n)?b[n]:Bc(g.$scope,
n,!0)||(a?Bc(d,n,!0):t);Sa(f,n,!0)}if(h)return h=(G(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),q&&e(g,q,k,n||f.name),Q(function(){var a=c.invoke(f,k,g,n);a!==k&&(D(a)||C(a))&&(k=a,q&&e(g,q,k,n||f.name));return k},{instance:k,identifier:q});k=c.instantiate(f,g,n);q&&e(g,q,k,n||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return z(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b){return D(b)?
ca(b)?b.toISOString():db(b):b}function df(){this.$get=function(){return function(b){if(!b)return"";var a=[];mc(b,function(b,d){null===b||y(b)||(G(b)?m(b,function(b,c){a.push(ma(d)+"="+ma(Yb(b)))}):a.push(ma(d)+"="+ma(Yb(b))))});return a.join("&")}}}function ef(){this.$get=function(){return function(b){function a(b,e,f){null===b||y(b)||(G(b)?m(b,function(b,c){a(b,e+"["+(D(b)?c:"")+"]")}):D(b)&&!ca(b)?mc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ma(e)+"="+ma(Yb(b))))}if(!b)return"";var c=
[];a(b,"",!0);return c.join("&")}}}function Zb(b,a){if(I(b)){var c=b.replace(Of,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(bd))||(d=(d=c.match(Pf))&&Qf[d[0]].test(c));d&&(b=uc(c))}}return b}function cd(b){var a=ga(),c;I(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=M(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):D(b)&&m(b,function(b,c){var f=M(c),g=T(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function dd(b){var a;return function(c){a||(a=cd(b));return c?
(c=a[M(c)],void 0===c&&(c=null),c):a}}function ed(b,a,c,d){if(C(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function cf(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return D(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia($b),put:ia($b),patch:ia($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},
a=!1;this.useApplyAsync=function(b){return x(b)?(a=!!b,this):a};var c=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(c=!!a,this):c};var d=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,l,k){function n(a){function d(a){var b=Q({},a);b.data=a.data?ed(a.data,a.headers,a.status,f.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:l.reject(b)}function e(a,b){var c,d={};m(a,function(a,e){C(a)?(c=a(b),null!=
c&&(d[e]=c)):d[e]=a});return d}if(!aa.isObject(a))throw L("$http")("badreq",a);var f=Q({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);f.headers=function(a){var c=b.headers,d=Q({},a.headers),f,g,h,c=Q({},c.common,c[M(a.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,ia(a))}(a);f.method=rb(f.method);f.paramSerializer=I(f.paramSerializer)?k.get(f.paramSerializer):f.paramSerializer;var g=
[function(a){var c=a.headers,e=ed(a.data,dd(c),t,a.transformRequest);y(e)&&m(c,function(a,b){"content-type"===M(b)&&delete c[b]});y(a.withCredentials)&&!y(b.withCredentials)&&(a.withCredentials=b.withCredentials);return q(a,e).then(d,d)},t],h=l.when(f);for(m(B,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var r=g.shift(),h=h.then(a,r)}c?(h.success=function(a){Sa(a,"fn");h.then(function(b){a(b.data,
b.status,b.headers,f)});return h},h.error=function(a){Sa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function q(c,d){function g(b,c,d,e){function f(){k(c,b,d,e)}F&&(200<=b&&300>b?F.put(P,[b,c,cd(d),e]):F.remove(P));a?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function k(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?N.resolve:N.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function q(a){k(a.data,a.status,
ia(a.headers()),a.statusText)}function B(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var N=l.defer(),J=N.promise,F,m,S=c.headers,P=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);J.then(B,B);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(F=D(c.cache)?c.cache:D(b.cache)?b.cache:u);F&&(m=F.get(P),x(m)?m&&C(m.then)?m.then(q,q):G(m)?k(m[1],m[0],ia(m[2]),m[3]):k(m,200,{},"OK"):F.put(P,J));y(m)&&((m=gd(c.url)?f()[c.xsrfCookieName||
b.xsrfCookieName]:t)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=m),e(c.method,P,d,g,S,c.timeout,c.withCredentials,c.responseType));return J}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var u=g("$http");b.paramSerializer=I(b.paramSerializer)?k.get(b.paramSerializer):b.paramSerializer;var B=[];m(d,function(a){B.unshift(I(a)?k.get(a):k.invoke(a))});n.pendingRequests=[];(function(a){m(arguments,function(a){n[a]=function(b,c){return n(Q({},c||{},{method:a,url:b}))}})})("get","delete",
"head","jsonp");(function(a){m(arguments,function(a){n[a]=function(b,c,d){return n(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=b;return n}]}function Rf(){return new O.XMLHttpRequest}function ff(){this.$get=["$browser","$window","$document",function(b,a,c){return Sf(b,Rf,b.defer,a.angular.callbacks,c[0])}]}function Sf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",
n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,q,r,u){function B(){p&&p();A&&A.abort()}function K(a,d,e,f,g){H!==t&&c.cancel(H);p=A=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==
M(e)){var w="_"+(d.counter++).toString(36);d[w]=function(a){d[w].data=a;d[w].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+w),w,function(a,b){K(k,a,d[w].data,"",b);d[w]=v})}else{var A=a();A.open(e,h,!0);m(n,function(a,b){x(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);K(k,c,b,A.getAllResponseHeaders(),a)};e=function(){K(k,-1,null,null,
"")};A.onerror=e;A.onabort=e;r&&(A.withCredentials=!0);if(u)try{A.responseType=u}catch(s){if("json"!==u)throw s;}A.send(l)}if(0<q)var H=c(B,q);else q&&C(q.then)&&q.then(B)}}function af(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,b).replace(q,a)}function h(f,h,n,q){function w(a){try{var b=a;a=n?e.getTrusted(n,
b):e.valueOf(b);var c;if(q&&!x(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}q=!!q;for(var p,m,s=0,H=[],N=[],J=f.length,F=[],V=[];s<J;)if(-1!=(p=f.indexOf(b,s))&&-1!=(m=f.indexOf(a,p+l)))s!==p&&F.push(g(f.substring(s,p))),s=f.substring(p+l,m),H.push(s),N.push(c(s,w)),s=m+k,V.push(F.length),F.push("");else{s!==J&&F.push(g(f.substring(s)));break}n&&1<F.length&&Ka.throwNoconcat(f);if(!h||H.length){var S=
function(a){for(var b=0,c=H.length;b<c;b++){if(q&&y(a[b]))return;F[V[b]]=a[b]}return F.join("")};return Q(function(a){var b=0,c=H.length,e=Array(c);try{for(;b<c;b++)e[b]=N[b](a);return S(e)}catch(g){d(Ka.interr(f,g))}},{exp:f,expressions:H,$$watchDelegate:function(a,b){var c;return a.$watchGroup(N,function(d,e){var f=S(d);C(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,f),"g"),q=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=
function(){return a};return h}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=4<arguments.length,q=n?xa.call(arguments,4):[],r=a.setInterval,u=a.clearInterval,B=0,K=x(k)&&!k,w=(K?d:c).defer(),p=w.promise;l=x(l)?l:0;p.then(null,null,n?function(){e.apply(null,q)}:e);p.$$intervalId=r(function(){w.notify(B++);0<l&&B>=l&&(w.resolve(B),u(p.$$intervalId),delete f[p.$$intervalId]);K||b.$apply()},h);f[p.$$intervalId]=w;return p}var f={};e.cancel=function(b){return b&&
b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function hd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=Y(c.port)||Tf[c.protocol]||null}function id(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=
xc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Cb(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b,a,c){this.$$html5=!0;c=c||"";hd(b,this);this.$$parse=function(b){var c=ra(a,b);if(!I(c))throw Db("ipthprfx",b,a);id(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=
Pb(this.$$search),c=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ra(b,d))!==t?(g=f,g=(f=ra(c,f))!==t?a+(ra("/",f)||f):b+g):(f=ra(a,d))!==t?g=a+f:a==d+"/"&&(g=a);g&&this.$$parse(g);return!!g}}function cc(b,a,c){hd(b,this);this.$$parse=function(d){var e=ra(b,d)||ra(a,d),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(b=d,this.replace())):
(f=ra(c,e),y(f)&&(f=e));id(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function jd(b,a,c){this.$$html5=!0;cc.apply(this,arguments);this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ja(d)?f=d:(g=ra(a,d))?f=b+c+g:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Eb(b){return function(){return this[b]}}function kd(b,a){return function(c){if(y(c))return this[b];this[b]=a(c);this.$$compose();return this}}function gf(){var b="",a={enabled:!1,requireBase:!0,
rewriteLinks:!0};this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return ab(b)?(a.enabled=b,this):D(b)?(ab(b.enabled)&&(a.enabled=b.enabled),ab(b.requireBase)&&(a.requireBase=b.requireBase),ab(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,
b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var q=d.url(),r;if(a.enabled){if(!n&&a.requireBase)throw Db("nobase");r=q.substring(0,q.indexOf("/",q.indexOf("//")+2))+(n||"/");n=e.history?bc:jd}else r=Ja(q),n=cc;var u=r.substr(0,Ja(r).lastIndexOf("/")+1);k=new n(r,u,"#"+b);k.$$parseLinkUrl(q,q);k.$$state=d.state();var B=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=
z(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);B.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Cb(k.absUrl())!=Cb(q)&&d.url(k.absUrl(),!0);var K=!0;d.onUrlChange(function(a,b){y(ra(u,a))?g.location.href=a:(c.$evalAsync(function(){var d=
k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(K=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Cb(d.url()),b=Cb(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(K||n)K=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=
f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function hf(){var b=!0,a=this;this.debugEnabled=function(a){return x(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=
[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Wa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw da("isecfld",a);return b}function Ba(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b.window===b)throw da("isecwindow",
a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw da("isecdom",a);if(b===Object)throw da("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b===Uf||b===Vf||b===Wf)throw da("isecff",a);}}function Xf(b,a){return"undefined"!==typeof b?b:a}function md(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case s.Program:c=!0;m(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=
c;break;case s.Literal:b.constant=!0;b.toWatch=[];break;case s.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case s.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case s.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case s.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,
a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case s.Identifier:b.constant=!1;b.toWatch=[b];break;case s.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case s.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&
!a(b.callee.name).$stateful?d:[b];break;case s.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case s.ArrayExpression:c=!0;d=[];m(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case s.ObjectExpression:c=!0;d=[];m(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case s.ThisExpression:b.constant=
!1,b.toWatch=[]}}function nd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function od(b){return b.type===s.Identifier||b.type===s.MemberExpression}function pd(b){if(1===b.body.length&&od(b.body[0].expression))return{type:s.AssignmentExpression,left:b.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function qd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===s.Literal||b.body[0].expression.type===s.ArrayExpression||
b.body[0].expression.type===s.ObjectExpression)}function rd(b,a){this.astBuilder=b;this.$filter=a}function sd(b,a){this.astBuilder=b;this.$filter=a}function Fb(b){return"constructor"==b}function dc(b){return C(b.valueOf)?b.valueOf():Yf.call(b)}function jf(){var b=ga(),a=ga();this.$get=["$filter",function(c){function d(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=dc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,c,e,f){var g=e.inputs,h;if(1===g.length){var l=d,g=g[0];return a.$watch(function(a){var b=
g(a);d(b,l)||(h=e(a,t,t,[b]),l=b&&dc(b));return h},b,c,f)}for(var k=[],n=[],q=0,m=g.length;q<m;q++)k[q]=d,n[q]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!d(l,k[c])))n[c]=l,k[c]=l&&dc(l)}b&&(h=e(a,t,t,n));return h},b,c,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;C(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;m(a,function(a){x(a)||
(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;C(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){C(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==g&&c!==f?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,c.inputs=a.inputs?a.inputs:[a]);return c}var k=Fa().noUnsafeEval,n={csp:k,expensiveChecks:!1},q={csp:k,expensiveChecks:!0};return function(d,k,B){var m,w,p;switch(typeof d){case "string":p=d=d.trim();var s=B?a:b;m=s[p];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),B=B?q:n,m=new ec(B),m=(new fc(m,c,B)).parse(d),m.constant?m.$$watchDelegate=h:w?m.$$watchDelegate=m.literal?g:f:m.inputs&&(m.$$watchDelegate=e),
s[p]=m);return l(m,k);case "function":return l(d,k);default:return v}}}]}function lf(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return td(function(a){b.$evalAsync(a)},a)}]}function mf(){this.$get=["$browser","$exceptionHandler",function(b,a){return td(function(a){b.defer(a)},a)}]}function td(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}
function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{C(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=L("$q",TypeError);Q(d.prototype,{then:function(a,b,c){if(y(a)&&
y(b)&&y(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});Q(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,
this.$$reject);try{if(D(b)||C(b))d=b&&b.then;C(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,
e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(C(b)?b(c):c)}catch(h){a(h)}}})}});var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return l(e,!1)}return d&&C(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},q=function u(a){if(!C(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;
a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};q.defer=function(){return new g};q.reject=function(a){var b=new g;b.reject(a);return b.promise};q.when=n;q.resolve=n;q.all=function(a){var b=new g,c=0,d=G(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return q}function vf(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=
0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=n.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}
function kf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++mb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=L("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++mb;this.$$phase=
this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function q(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function u(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function K(){for(;H.length;)try{H.shift()()}catch(a){g(a)}e=
null}function w(){null===e&&(e=l.defer(function(){p.$apply(K)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,
a);var g=this,l=g.$$watchers,k={fn:b,last:s,get:f,exp:e||a,eq:!!c};d=null;C(b)||(k.fn=v);l||(l=g.$$watchers=[]);l.unshift(k);r(this,1);return function(){0<=bb(l,k)&&r(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,
b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(D(e))if(Da(e))for(f!==q&&(f=q,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==r&&(f=r={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,
k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,n=h(a,c),q=[],r={},p=!0,u=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(D(e))if(Da(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Na.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,n,r,u=a,m,w=[],E,H;q("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),K());d=
null;do{r=!1;for(m=this;t.length;){try{H=t.shift(),H.scope.$eval(H.expression,H.locals)}catch(v){g(v)}d=null}a:do{if(k=m.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(m))!==(h=b.last)&&!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))r=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===s?f:h,m),5>u&&(E=4-u,w[E]||(w[E]=[]),w[E].push({msg:C(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){r=!1;break a}}catch(y){g(y)}if(!(k=m.$$watchersCount&&
m.$$childHead||m!==this&&m.$$nextSibling))for(;m!==this&&!(k=m.$$nextSibling);)m=m.$parent}while(m=k);if((r||t.length)&&!u--)throw p.$$phase=null,c("infdig",a,w);}while(r||t.length);for(p.$$phase=null;x.length;)try{x.shift()()}catch(z){g(z)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)u(this,this.$$listenerCount[b],b);a&&a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=
null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){p.$$phase||t.length||l.defer(function(){t.length&&p.$digest()});t.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{q("$apply");try{return this.$eval(a)}finally{p.$$phase=null}}catch(b){g(b)}finally{try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&H.push(b);w()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=cb([h],arguments,1),k,n;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(n=d.length;k<n;k++)if(d[k])try{d[k].apply(null,l)}catch(q){g(q)}else d.splice(k,
1),k--,n--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&
c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new n,t=p.$$asyncQueue=[],x=p.$$postDigestQueue=[],H=p.$$applyAsyncQueue=[];return p}]}function ge(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;
return""===f||f.match(e)?c:"unsafe:"+f}}}function Zf(b){if("self"===b)return b;if(I(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=ud(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Oa(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function vd(b){var a=[];x(b)&&m(b,function(b){a.push(Zf(b))});return a}function of(){this.SCE_CONTEXTS=oa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=vd(a));return b};this.resourceUrlBlacklist=
function(b){arguments.length&&(a=vd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[oa.HTML]=
e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===oa.RESOURCE_URL){var g=Aa(e.toString()),q,r,u=!1;q=0;for(r=b.length;q<r;q++)if(d(b[q],
g)){u=!0;break}if(u)for(q=0,r=a.length;q<r;q++)if(d(a[q],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===oa.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function nf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Va)throw Ca("iequirks");var d=ia(oa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=
c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Za);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;m(oa,function(a,b){var c=M(b);d[fb("parse_as_"+c)]=function(b){return e(a,b)};d[fb("get_trusted_"+c)]=function(b){return f(a,b)};d[fb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function pf(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(M((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var q in l)if(k=h.exec(q)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=I(l.webkitTransition),n=I(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Va)return!1;if(y(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Fa(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function rf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;I(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=a.defaults&&a.defaults.transformResponse;G(h)?h=h.filter(function(a){return a!==Zb}):h===Zb&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,
a.data);return a.data},function(a){if(!g)throw ea("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function sf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];m(a,function(a){var d=aa.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function tf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){C(f)||(k=l,l=f,f=v);var n=xa.call(arguments,3),q=x(k)&&!k,r=(q?d:c).defer(),
u=r.promise,m;m=a.defer(function(){try{r.resolve(f.apply(null,n))}catch(a){r.reject(a),e(a)}finally{delete g[u.$$timeoutId]}q||b.$apply()},l);u.$$timeoutId=m;g[m]=r;return u}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Va&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,
search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function gd(b){b=I(b)?Aa(b):b;return b.protocol===wd.protocol&&b.host===wd.host}function uf(){this.$get=qa(O)}function xd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=
b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===t&&(d[k]=a(g.substring(l+1))));return d}}function yf(){this.$get=xd}function Jc(b){function a(c,d){if(D(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",yd);a("date",zd);a("filter",$f);a("json",ag);a("limitTo",bg);a("lowercase",cg);a("number",Ad);a("orderBy",Bd);a("uppercase",dg)}function $f(){return function(b,
a,c){if(!Da(b)){if(null==b)return b;throw L("filter")("notarray",b);}var d;switch(gc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=eg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function eg(b,a,c){var d=D(b)&&"$"in b;!0===a?a=ka:C(a)||(a=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!pc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!D(e)?La(e,
b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=gc(b),g=gc(a);if("string"===g&&"!"===a.charAt(0))return!La(b,a.substring(1),c,d);if(G(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!C(e)&&!y(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function gc(b){return null===
b?"null":typeof b}function yd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){y(d)&&(d=a.CURRENCY_SYM);y(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Cd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Ad(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Cd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Cd(b,a,c,d,e){if(D(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,n=[];g&&(l="\u221e");
if(!g&&-1!==h.indexOf("e")){var q=h.match(/([\d\.]+)e(-?)(\d+)/);q&&"-"==q[2]&&q[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Dd)[1]||"").length;y(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Dd),h=g[0],g=g[1]||"",q=0,r=a.lgSize,u=a.gSize;if(h.length>=r+u)for(q=h.length-r,k=0;k<q;k++)0===(q-k)%u&&0!==k&&(l+=c),l+=h.charAt(k);for(k=q;k<h.length;k++)0===(h.length-k)%r&&0!==k&&
(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=
(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function hc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function zd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),g=Y(b[9]+b[11]));h.call(a,Y(b[1]),
Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;g=Y(b[5]||0)-g;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;I(c)&&(c=fg.test(c)?Y(c):a(c));X(c)&&(c=new Date(c));if(!ca(c)||!isFinite(c.getTime()))return c;for(;e;)(k=gg.exec(e))?(h=cb(h,k,1),e=h.pop()):(h.push(e),e=null);var n=c.getTimezoneOffset();
f&&(n=vc(f,c.getTimezoneOffset()),c=Ob(c,f,!0));m(h,function(a){l=hg[a];g+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ag(){return function(b,a){y(a)&&(a=2);return db(b,a)}}function bg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(isNaN(a))return b;X(b)&&(b=b.toString());if(!G(b)&&!I(b))return b;c=!c||isNaN(c)?0:Y(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,
c+a),c)}}function Bd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,h=Za;if(C(a))h=a;else if(I(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(h=b(a),h.constant))var l=h(),h=function(a){return a[l]}}return{get:h,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(b,e,f){if(!Da(b))return b;G(e)||(e=[e]);0===e.length&&(e=["+"]);var g=a(e,f);g.push({get:function(){return{}},
descending:f?-1:1});b=Array.prototype.map.call(b,function(a,b){return{value:a,predicateValues:g.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(pc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});b.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],u=0;c.type===f.type?c.value!==
f.value&&(u=c.value<f.value?-1:1):u=c.type<f.type?-1:1;if(c=u*g[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Ma(b){C(b)&&(b={link:b});b.restrict=b.restrict||"AC";return qa(b)}function Gd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Ib;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){m(g,
function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){m(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ta(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,
a)});bb(g,a)};Hd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Xa);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Xa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;m(g,function(a){a.$setPristine()})};f.$setUntouched=function(){m(g,function(a){a.$setUntouched()})};
f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=M(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&
d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){var b=d.$isEmpty(d.$viewValue)?"":d.$viewValue;a.val()!==b&&a.val(b)}}function Kb(b,a){return function(c,d){var e,f;if(ca(c))return c;if(I(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-
1)&&(c=c.substring(1,c.length-1));if(ig.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,f,g,h,l,k,n){function q(a){return a&&!(a.getTime&&
a.getTime()!==a.getTime())}function r(a){return x(a)?ca(a)?a:c(a):t}Id(e,f,g,h);ib(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,m;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,m),u&&(b=Ob(b,u)),b):t});h.$formatters.push(function(a){if(a&&!ca(a))throw kb("datefmt",a);if(q(a))return(m=a)&&u&&(m=Ob(m,u,!0)),n("date")(a,d,u);m=null;return""});if(x(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!q(a)||y(s)||c(a)>=s};g.$observe("min",function(a){s=
r(a);h.$validate()})}if(x(g.max)||g.ngMax){var w;h.$validators.max=function(a){return!q(a)||y(w)||c(a)<=w};g.$observe("max",function(a){w=r(a);h.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=D(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function Jd(b,a,c,d,e){if(x(d)){b=b(d);if(!b.constant)throw kb("constexpr",c,d);return b(a)}return e}function jc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=
[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return G(a)?(m(a,function(a){b=b.concat(e(a))}),b):I(a)?a.split(" "):D(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||ga(),d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%
2===a){var k=e(b||[]);if(!n){var m=l(k,1);h.$addClass(m)}else if(!ka(b,n)){var s=e(n),m=d(k,s),k=d(s,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(g,m);k&&k.length&&c.removeClass(g,k)}}n=ia(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&
f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+zc(b,"-"):"";a(lb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Kd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=t));ab(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=
d.$invalid=t,c("",null)):(a(Md,!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var jg=/^\/(.+)\/([a-z]*)$/,M=function(b){return I(b)?b.toLowerCase():b},Na=Object.prototype.hasOwnProperty,rb=function(b){return I(b)?b.toUpperCase():b},Va,z,la,xa=[].slice,Mf=[].splice,kg=[].push,sa=Object.prototype.toString,qc=Object.getPrototypeOf,
Ea=L("ng"),aa=O.angular||(O.angular={}),Rb,mb=0;Va=W.documentMode;v.$inject=[];Za.$inject=[];var G=Array.isArray,sc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return I(b)?b.trim():b},ud=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!x(Fa.rules)){var b=W.querySelector("[ng-csp]")||W.querySelector("[data-ng-csp]");if(b){var a=b.getAttribute("ng-csp")||b.getAttribute("data-ng-csp");
Fa.rules={noUnsafeEval:!a||-1!==a.indexOf("no-unsafe-eval"),noInlineStyle:!a||-1!==a.indexOf("no-inline-style")}}else{b=Fa;try{new Function(""),a=!1}catch(c){a=!0}b.rules={noUnsafeEval:a,noInlineStyle:!1}}}return Fa.rules},ob=function(){if(x(ob.name_))return ob.name_;var b,a,c=Qa.length,d,e;for(a=0;a<c;++a)if(d=Qa[a],b=W.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return ob.name_=e},Qa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Ac=!1,Qb,pa=1,Pa=3,fe={full:"1.4.4",
major:1,minor:4,dot:4,codeName:"pylon-requirement"};R.expando="ng339";var gb=R.cache={},Ef=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var zf=/([\:\-\_]+(.))/g,Af=/^moz([A-Z])/,lg={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=L("jqLite"),Df=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,Bf=/<([\w:]+)/,Cf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;na.th=na.td;var Ra=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(O).on("load",a))},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?z(this[b]):z(this[this.length+b])},length:0,push:kg,sort:[].sort,splice:[].splice},Ab={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Ab[M(b)]=b});var Rc={};m("input select option textarea button form details".split(" "),function(b){Rc[b]=!0});var Sc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};m({data:Vb,removeData:ub,hasData:function(b){for(var a in gb[b.ng339])return!0;return!1}},function(b,a){R[a]=b});m({data:Vb,
inheritedData:zb,scope:function(b){return z.data(b,"$scope")||zb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z.data(b,"$isolateScope")||z.data(b,"$isolateScopeNoTemplate")},controller:Oc,injector:function(b){return zb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:wb,css:function(b,a,c){a=fb(a);if(x(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Pa&&2!==d&&8!==d)if(d=M(a),Ab[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,
d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:t;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(y(b)){var d=a.nodeType;return d===pa||d===Pa?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(y(a)){if(b.multiple&&"select"===ta(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||
a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(y(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Pc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Pc&&(2==b.length&&b!==wb&&b!==Oc?a:d)===t){if(D(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});m({removeData:ub,
on:function a(c,d,e,f){if(x(f))throw Tb("onargs");if(Kc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Hf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,lg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Nc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,
c){var d,e=a.parentNode;tb(a);m(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===pa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===pa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===pa){var d=a.firstChild;m(new R(c),function(c){a.insertBefore(c,d)})}},
wrap:function(a,c){c=z(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Wb,detach:function(a){Wb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:yb,removeClass:xb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=d;y(f)&&(f=!wb(a,c));(f?yb:xb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=Q(e,
c)),c=ia(h),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)y(g)?(g=a(this[h],c,e,f),x(g)&&(g=z(g))):Mc(g,a(this[h],c,e,f));return x(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Ua.prototype={put:function(a,c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];
return c}};var xf=[function(){this.$get=[function(){return Ua}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,mg=/,/,ng=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=L("$injector");eb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw I(d)&&d||(d=a.name||If(a)),Ha("strictdi",d);c=a.toString().replace(Tc,"");c=c.match(Uc);m(c[1].split(mg),function(a){a.replace(ng,function(a,c,d){e.push(d)})})}a.$inject=e}}else G(a)?(c=a.length-1,Sa(a[c],"fn"),
e=a.slice(0,c)):Sa(a,"fn",!0);return e};var Nd=L("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Te=function(){var a=new Ua,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));d=function(a,c){var d=!1;a&&(a=I(a)?a.split(" "):G(a)?a:[],m(a,function(a){a&&
(d=!0,k[a]=c)}));return d};f=d(f,!0);l=d(l,!1);!f&&!l||1<c.length||e.$$postDigest(function(){m(c,function(c){var d=a.get(c);if(d){var e=Jf(c.attr("class")),f="",g="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});m(c,function(a){f&&yb(a,f);g&&xb(a,g)});a.remove(c)}});c.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},
Re=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",
function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=g&&z(g);h=h&&z(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ia(l))},move:function(f,g,h,l){g=g&&z(g);h=h&&z(h);g=g||h.parent();c(f,g,h);return a.push(f,"move",Ia(l))},leave:function(c,
e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,h){h=Ia(h);h.addClass=hb(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ia(h);h.removeClass=hb(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ia(l);l.addClass=hb(l.addClass,e);l.removeClass=hb(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ia(k);k.from=k.from?Q(k.from,e):e;k.to=k.to?Q(k.to,h):h;k.tempClasses=hb(k.tempClasses,l||
"ng-inline-animate");return a.push(c,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,c){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=c.defer());return this.defer.promise},then:function(a,c){return this.getPromise().then(a,c)},"catch":function(a){return this.getPromise().catch(a)},"finally":function(a){return this.getPromise().finally(a)}};
return function(c,f){function g(){a(function(){f.addClass&&(c.addClass(f.addClass),f.addClass=null);f.removeClass&&(c.removeClass(f.removeClass),f.removeClass=null);f.to&&(c.css(f.to),f.to=null);h||l.done();h=!0});return l}f.from&&(c.css(f.from),f.from=null);var h,l=new d;return{start:g,end:g}}}]},ea=L("$compile");Cc.$inject=["$provide","$$sanitizeUriProvider"];var Xc=/^((?:x|data)[\:\-_])/i,Nf=L("$controller"),Vc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(c){c?
!c.nodeType&&c instanceof z&&(c=c[0]):c=a[0].body;return c.offsetWidth+1}}]},bd="application/json",$b={"Content-Type":bd+";charset=utf-8"},Pf=/^\[|^\{(?!\{)/,Qf={"[":/]$/,"{":/}$/},Of=/^\)\]\}',?\n/,og=L("$http"),fd=function(a){return function(){throw og("legacy",a);}},Ka=aa.$interpolateMinErr=L("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",a,c.toString())};var pg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Tf={http:80,https:443,ftp:21},Db=
L("$location"),qg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var c=pg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Eb("$$protocol"),host:Eb("$$host"),port:Eb("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||X(a))a=
a.toString(),this.$$search=xc(a);else if(D(a))a=fa(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Db("isrcharg");break;default:y(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([jd,cc,bc],function(a){a.prototype=Object.create(qg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==bc||!this.$$html5)throw Db("nostate");
this.$$state=y(c)?null:c;return this}});var da=L("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,Lb=ga();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var rg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},ec=function(a){this.options=a};ec.prototype={constructor:ec,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);
else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Lb[c],f=Lb[d];Lb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=x(c)?"s "+c+"-"+
this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw da("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=rg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var s=function(a,c){this.lexer=a;this.options=c};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";
s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
c;c=this.expect("+","-");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:s.MemberExpression,object:a,property:this.expression(),
computed:!0},this.consume("]")):"."===c.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||
this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:s.Property,kind:"init"};this.peek().constant?
c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,c){throw da("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw da("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw da("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,
value:null},undefined:{type:s.Literal,value:t},"this":{type:s.ThisExpression}}};rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=pd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=nd(e.body);d.stage="inputs";m(g,function(a,c){var e=
"fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Wa,Ba,ld,Xf,md,a);this.state=
this.stage=t;f.literal=qd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?
"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,n,q;e=e||v;if(!g&&x(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case s.Program:m(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,
";"):k.return_(l)});break;case s.Literal:q=this.escape(a.value);this.assign(c,q);e(q);break;case s.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});q=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,q);e(q);break;case s.BinaryExpression:this.recurse(a.left,t,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});q="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,q);e(q);break;case s.LogicalExpression:c=
c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case s.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case s.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Wa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),
function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case s.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if_(k.notNull(h),function(){if(a.computed)l=
k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),q=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,q),d&&(d.computed=!0,d.name=l);else{Wa(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));q=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))q=k.ensureSafeObject(q);k.assign(c,
q);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case s.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),q=l+"("+n.join(",")+")",k.assign(c,q),e(c)):(l=k.nextId(),h={},n=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(k.ensureSafeObject(a))})});
h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),q=k.member(h.context,h.name,h.computed)+"("+n.join(",")+")"):q=l+"("+n.join(",")+")";q=k.ensureSafeObject(q);k.assign(c,q)},function(){k.assign(c,"undefined")});e(c)}));break;case s.AssignmentExpression:l=this.nextId();h={};if(!od(a.left))throw da("lval");this.recurse(a.left,t,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));q=k.member(h.context,h.name,
h.computed)+a.operator+l;k.assign(c,q);e(c||q)})},1);break;case s.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(a)})});q="["+n.join(",")+"]";this.assign(c,q);e(q);break;case s.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,k.nextId(),t,function(c){n.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+c)})});q="{"+n.join(",")+"}";this.assign(c,q);e(q);break;case s.ThisExpression:this.assign(c,"s");e("s");break;case s.NGValueParameter:this.assign(c,
"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",
a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(I(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(X(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw da("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=pd(e))g=this.recurse(f);f=nd(e.body);var h;f&&(h=[],m(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=
h);f.literal=qd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,c);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case s.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case s.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case s.Identifier:return Wa(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),c,d,g.expression);case s.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Wa(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,
g.expensiveChecks,c,d,g.expression);case s.CallExpression:return h=[],m(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var r=[],m=0;m<h.length;++m)r.push(h[m](a,d,e,g));a=f.apply(t,r,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,q){var r=f(a,d,e,q),m;if(null!=r.value){Ba(r.context,g.expression);ld(r.value,g.expression);m=[];for(var s=0;s<h.length;++s)m.push(Ba(h[s](a,d,e,q),
g.expression));m=Ba(r.value.apply(r.context,m),g.expression)}return c?{value:m}:m};case s.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,q){var m=e(a,d,h,q);a=f(a,d,h,q);Ba(m.value,g.expression);m.context[m.name]=a;return c?{value:a}:a};case s.ArrayExpression:return h=[],m(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],m=0;m<h.length;++m)g.push(h[m](a,d,e,f));return c?{value:g}:g};case s.ObjectExpression:return h=[],m(a.properties,
function(a){h.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},m=0;m<h.length;++m)g[h[m].key]=h[m].value(a,d,e,f);return c?{value:g}:g};case s.ThisExpression:return function(a){return c?{value:a}:a};case s.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=x(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);
d=x(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=md(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(x(l)?l:0)-(x(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=
a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&Ba(h,f);return d?{context:g,name:a,value:h}:h}},
computedMember:function(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),q,m;null!=n&&(q=c(g,h,l,k),Wa(q,f),e&&1!==e&&n&&!n[q]&&(n[q]={}),m=n[q],Ba(m,f));return d?{context:n,name:q,value:m}:m}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,n){h=a(h,l,k,n);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:t;(d||Fb(c))&&Ba(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var fc=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new sd(this.ast,c):new rd(this.ast,c)};fc.prototype={constructor:fc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Yf=Object.prototype.valueOf,Ca=L("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ea=L("$compile"),Z=W.createElement("a"),wd=Aa(O.location.href);xd.$inject=["$document"];Jc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];
var Dd=".",hg={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":
"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:hc,GG:hc,GGG:hc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},gg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,fg=/^\-?\d+$/;zd.$inject=["$locale"];var cg=qa(M),dg=qa(rb);Bd.$inject=["$parse"];var he=qa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===sa.call(c.prop("href"))?
"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),sb={};m(Ab,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=va("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});sb[e]=function(){return{restrict:"A",priority:100,link:f}}}});m(Sc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(jg))){f.$set("ngPattern",
new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=va("ng-"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Va&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,
$setDirty:v,$setPristine:v,$setSubmitted:v};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout","$parse",function(c,d){function e(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",controller:Gd,compile:function(d,g){d.addClass(Xa).addClass(lb);var h=g.name?"name":a&&g.ngForm?"ngForm":!1;return{pre:function(a,d,f,g){if(!("action"in f)){var m=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});
c.preventDefault()};d[0].addEventListener("submit",m,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var s=g.$$parentForm,B=h?e(g.$name):v;h&&(B(a,g),f.$observe(h,function(c){g.$name!==c&&(B(a,t),s.$$renameControl(g,c),B=e(g.$name),B(a,g))}));d.on("$destroy",function(){s.$removeControl(g);B(a,t);Q(g,Ib)})}}}}}]},ie=Od(),ve=Od(!0),ig=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,sg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
tg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ug=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,Rd=/^(\d{4})-(\d\d)$/,Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e)},date:jb("date",Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",Qd,Kb(Qd,
"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",kc,function(a,c){if(ca(a))return a;if(I(a)){kc.lastIndex=0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Id(a,
c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ug.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!X(a))throw kb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||y(h)||a>=h};d.$observe("min",function(a){x(a)&&!X(a)&&(a=parseFloat(a,10));h=X(a)&&!isNaN(a)?a:t;e.$validate()})}if(x(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||
y(l)||a<=l};d.$observe("max",function(a){x(a)&&!X(a)&&(a=parseFloat(a,10));l=X(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},email:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||tg.test(d)}},radio:function(a,c,d,e){y(d.name)&&c.attr("name",++mb);c.on("click",function(a){c[0].checked&&
e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:v,
button:v,submit:v,reset:v,file:v},Dc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Td[M(h.type)]||Td.text)(f,g,h,l[0],c,a,d,e)}}}}],vg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,c){return vg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",
compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",
compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Me=qa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),qe=jc("",!0),se=jc("Odd",0),re=jc("Even",1),te=Ma({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",
scope:!0,controller:"@",priority:500}}],Ic={},wg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=va("ng-"+a);Ic[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};wg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",
function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=qb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,
terminal:!0,transclude:"element",controller:aa.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,m,r,s){var t=0,v,w,p,A=function(){w&&(w.remove(),w=null);v&&(v.$destroy(),v=null);p&&(d.leave(p).then(function(){w=null}),w=p,p=null)};e.$watch(g,function(g){var m=function(){!x(l)||l&&!e.$eval(l)||c()},q=++t;g?(a(g,!0).then(function(a){if(q===t){var c=e.$new();r.template=a;a=s(c,function(a){A();d.enter(a,null,f).then(m)});v=c;p=a;v.$emit("$includeContentLoaded",
g);e.$eval(h)}},function(){q===t&&(A(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(A(),r.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(f.template,W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Ma({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!y(a)){var c=[];a&&m(a.split(h),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return G(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",Kd="ng-invalid",Xa="ng-pristine",Jb="ng-dirty",Md="ng-pending",kb=L("ngModel"),xg=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var q=f(d.ngModel),r=q.assign,s=q,B=r,
K=null,w,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");s=function(a){var d=q(a);C(d)&&(d=c(a));return d};B=function(a,c){C(q(a))?g(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!q.assign)throw kb("nonassign",d.ngModel,ua(e));};this.$render=v;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};var A=e.inheritedData("$formController")||Ib,z=0;Hd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
c){delete a[c]},parentForm:A,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Xa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Xa);g.addClass(e,Jb);A.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(K);p.$viewValue=
p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!X(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;m(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(m(p.$asyncValidators,function(a,
c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!C(k.then))throw kb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===z&&p.$setValidity(a,c)}function h(a){l===z&&d(a)}z++;var l=z;(function(){var a=p.$$parserName||"parse";if(w===t)g(a,null);else return w||(m(p.$validators,function(a,c){g(c,null)}),m(p.$asyncValidators,function(a,c){g(c,
null)})),g(a,w),w;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(K);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(w=y(c)?t:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),y(c)){w=!1;break}X(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=s(a));var e=p.$modelValue,
f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:t,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){B(a,p.$modelValue);m(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
function(c){var d=0,e=p.$options;e&&x(e.debounce)&&(e=e.debounce,X(e)?d=e:X(e[c])?d=e[c]:X(e["default"])&&(d=e["default"]));h.cancel(K);d?K=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=s(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;w=t;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),
p.$$runValidators(c,f,v))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:xg,priority:1,compile:function(c){c.addClass(Xa).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&
h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],yg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(yg,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Ma({terminal:!0,priority:1E3}),zg=L("ngOptions"),Ag=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}
function n(a){var c;if(!s&&Da(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(Ag);if(!m)throw zg("iexp",a,ua(d));var r=m[5]||m[7],s=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:r);var v=a&&c(a)||d,w=t&&c(t),p=t?function(a,c){return w(e,c)}:function(a){return Ga(a)},A=function(a,c){return p(a,C(a,c))},x=c(m[2]||m[1]),z=c(m[3]||""),y=c(m[4]||""),J=c(m[8]),F={},C=s?function(a,c){F[s]=c;F[r]=a;return F}:function(a){F[r]=a;return F};return{trackBy:t,
getTrackByValue:A,getWatchables:c(J,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=C(a[h],h),h=p(a[h],k);c.push(h);if(m[2]||m[1])h=x(e,k),c.push(h);m[4]&&(k=y(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=J(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var q=d===g?m:g[m],r=C(d[q],q),s=v(e,r),q=p(s,r),u=x(e,r),w=z(e,r),r=y(e,r),s=new f(q,s,u,w,r);a.push(s);c[q]=s}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[A(a)]},
getViewValueFromOption:function(a){return t?aa.copy(a.viewValue):a.viewValue}}}}}var e=W.createElement("option"),f=W.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function q(a,c,d,e){c&&M(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=
a.nextSibling,Wb(a),a=c}function s(a){var c=p&&p[0],d=J&&J[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function t(){var a=F&&w.readValue();F=D.getOptions();var c={},d=h[0].firstChild;N&&h.prepend(p);d=s(d);F.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=q(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=q(g.groupElement,g.currentOptionElement,"option",e),n(a,k),g.currentOptionElement=k.nextSibling):
(k=q(h[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var g=w.readValue();(D.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var w=k[0];k=l.multiple;for(var p,x=0,y=h.children(),C=y.length;x<C;x++)if(""===y[x].value){p=y.eq(x);break}var N=!!p,J=z(e.cloneNode(!1));J.val("?");var F,D=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},w.writeValue=function(a){F.items.forEach(function(a){a.element.selected=
!1});a&&a.forEach(function(a){(a=F.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},w.readValue=function(){var a=h.val()||[],c=[];m(a,function(a){(a=F.selectValueMap[a])&&!a.disabled&&c.push(F.getViewValueFromOption(a))});return c},D.trackBy&&c.$watchCollection(function(){if(G(v.$viewValue))return v.$viewValue.map(function(a){return D.getTrackByValue(a)})},function(){v.$render()})):(w.writeValue=function(a){var c=F.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&
(J.remove(),N||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||N?(J.remove(),N||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(N||p.remove(),h.prepend(J),h.val("?"),J.prop("selected",!0),J.attr("selected",!0))},w.readValue=function(){var a=F.selectValueMap[h.val()];return a&&!a.disabled?(N||p.remove(),J.remove(),F.getViewValueFromOption(a)):null},D.trackBy&&c.$watch(function(){return D.getTrackByValue(v.$viewValue)},
function(){v.$render()}));N?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=z(e.cloneNode(!1));t();c.$watchCollection(D.getWatchables,t)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var n=l.count,q=l.$attr.when&&h.attr(l.$attr.when),r=l.offset||0,s=g.$eval(q)||{},t={},x=c.startSymbol(),w=c.endSymbol(),p=x+n+"-"+r+w,A=aa.noop,z;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+M(d[2]),s[d]=h.attr(l.$attr[c]))});
m(s,function(a,d){t[d]=c(a.replace(e,p))});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in s||(e=a.pluralCat(e-r));e===z||f&&X(z)&&isNaN(z)||(A(),f=t[e],y(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+q),A=v,k()):A=g.$watch(f,k),z=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=L("ngRepeat"),e=function(a,c,d,e,k,n,m){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],q=k[2],r=k[3],s=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var v=k[3]||k[1],x=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",
r);var w,p,A,y,C={$id:Ga};s?w=a(s):(A=function(a,c){return Ga(c)},y=function(a){return a});return function(a,f,g,k,n){w&&(p=function(c,d,e){x&&(C[x]=c);C[v]=d;C.$index=e;return w(a,C)});var s=ga();a.$watchCollection(q,function(g){var k,q,u=f[0],w,C=ga(),D,F,I,G,L,H,M;r&&(a[r]=g);if(Da(g))L=g,q=p||A;else for(M in q=p||y,L=[],g)g.hasOwnProperty(M)&&"$"!==M.charAt(0)&&L.push(M);D=L.length;M=Array(D);for(k=0;k<D;k++)if(F=g===L?k:L[k],I=g[F],G=q(F,I,k),s[G])H=s[G],delete s[G],C[G]=H,M[k]=H;else{if(C[G])throw m(M,
function(a){a&&a.scope&&(s[a.id]=a)}),d("dupes",h,G,I);M[k]={id:G,scope:t,clone:t};C[G]=!0}for(w in s){H=s[w];G=qb(H.clone);c.leave(G);if(G[0].parentNode)for(k=0,q=G.length;k<q;k++)G[k].$$NG_REMOVED=!0;H.scope.$destroy()}for(k=0;k<D;k++)if(F=g===L?k:L[k],I=g[F],H=M[k],H.scope){w=u;do w=w.nextSibling;while(w&&w.$$NG_REMOVED);H.clone[0]!=w&&c.move(qb(H.clone),null,z(u));u=H.clone[H.clone.length-1];e(H.scope,k,v,I,x,F,D)}else n(function(a,d){H.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,z(u));u=f;H.clone=a;C[H.id]=H;e(H.scope,k,v,I,x,F,D)});s=C})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Ma(function(a,c,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=qb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&m(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw L("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Bg={$setViewValue:v,$render:v},Cg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ua;e.ngModelCtrl=Bg;e.unknownOption=z(W.createElement("option"));
e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};
e.addOption=function(a,c){Ta(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=t)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Cg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});
if(d.multiple){g.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Ua(a);m(c.find("option"),function(a){a.selected=x(d.get(a.value))})};var h,l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",
priority:100,compile:function(d,e){if(y(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],le=qa({restrict:"E",
terminal:!1}),Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw L("ngPattern")("noregexp",g,a,ua(c));f=a||t;e.$validate()});
e.$validators.pattern=function(a){return e.$isEmpty(a)||y(f)||f.test(a)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=Y(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Y(a)||0;e.$validate()});e.$validators.minlength=function(a,
c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(aa),aa.module("ngLocale",[],["$provide",function(a){function c(a){a+="";var c=a.indexOf(".");return-1==c?0:a.length-c-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,
maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,e){var f=a|0,g=e;t===g&&(g=Math.min(c(a),3));Math.pow(10,g);return 1==f&&0==g?"one":"other"}})}]),z(W).ready(function(){Zd(W,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.2.0rc1
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (p, b, E) {
	'use strict'; function u(b, d) { return l(new (l(function () { }, { prototype: b })), d) } var v = b.copy, A = b.equals, l = b.extend, t = b.forEach, n = b.isDefined, w = b.isFunction, x = b.isString, B = b.element; p = b.module("ngRoute", ["ng"]).provider("$route", function () {
		function b(c, q) {
			var d = q.caseInsensitiveMatch, m = { originalPath: c, regexp: c }, l = m.keys = []; c = c.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g, function (c, b, q, d) {
				c = "?" === d ? d : null; d = "*" === d ? d : null; l.push({ name: q, optional: !!c }); b = b || ""; return "" +
				(c ? "" : b) + "(?:" + (c ? b : "") + (d && "(.+)?" || "([^/]+)?") + ")" + (c || "")
			}).replace(/([\/$\*])/g, "\\$1"); m.regexp = RegExp("^" + c + "$", d ? "i" : ""); return m
		} var d = {}; this.when = function (c, q) { d[c] = l({ reloadOnSearch: !0 }, q, c && b(c, q)); if (c) { var h = "/" == c[c.length - 1] ? c.substr(0, c.length - 1) : c + "/"; d[h] = l({ redirectTo: c }, b(h, q)) } return this }; this.otherwise = function (c) { this.when(null, c); return this }; this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function (c, b, h, m, y, p, C, D) {
			function r() {
				var a =
				s(), e = k.current; if (a && e && a.$$route === e.$$route && A(a.pathParams, e.pathParams) && !a.reloadOnSearch && !f) e.params = a.params, v(e.params, h), c.$broadcast("$routeUpdate", e); else if (a || e) f = !1, c.$broadcast("$routeChangeStart", a, e), (k.current = a) && a.redirectTo && (x(a.redirectTo) ? b.path(g(a.redirectTo, a.params)).search(a.params).replace() : b.url(a.redirectTo(a.pathParams, b.path(), b.search())).replace()), m.when(a).then(function () {
					if (a) {
						var c = l({}, a.resolve), b, e; t(c, function (a, b) { c[b] = x(a) ? y.get(a) : y.invoke(a) }); n(b =
						a.template) ? w(b) && (b = b(a.params)) : n(e = a.templateUrl) && (w(e) && (e = e(a.params)), e = D.getTrustedResourceUrl(e), n(e) && (a.loadedTemplateUrl = e, b = p.get(e, { cache: C }).then(function (a) { return a.data }))); n(b) && (c.$template = b); return m.all(c)
					}
				}).then(function (b) { a == k.current && (a && (a.locals = b, v(a.params, h)), c.$broadcast("$routeChangeSuccess", a, e)) }, function (b) { a == k.current && c.$broadcast("$routeChangeError", a, e, b) })
			} function s() {
				var a, c; t(d, function (d, k) {
					var f; if (f = !c) {
						var g = b.path(); f = d.keys; var m = {}; if (d.regexp) if (g =
						d.regexp.exec(g)) { for (var h = 1, p = g.length; h < p; ++h) { var r = f[h - 1], n = "string" == typeof g[h] ? decodeURIComponent(g[h]) : g[h]; r && n && (m[r.name] = n) } f = m } else f = null; else f = null; f = a = f
					} f && (c = u(d, { params: l({}, b.search(), a), pathParams: a }), c.$$route = d)
				}); return c || d[null] && u(d[null], { params: {}, pathParams: {} })
			} function g(a, c) { var b = []; t((a || "").split(":"), function (a, d) { if (0 == d) b.push(a); else { var f = a.match(/(\w+)(.*)/), g = f[1]; b.push(c[g]); b.push(f[2] || ""); delete c[g] } }); return b.join("") } var f = !1, k = {
				routes: d, reload: function () {
					f =
					!0; c.$evalAsync(r)
				}
			}; c.$on("$locationChangeSuccess", r); return k
		}]
	}); p.provider("$routeParams", function () { this.$get = function () { return {} } }); var z = 500; p.directive("ngView", ["$route", "$anchorScroll", "$compile", "$controller", "$animate", function (b, d, c, q, h) {
		return {
			restrict: "ECA", terminal: !0, priority: z, compile: function (m, l) {
				var p = l.onload || ""; m.html(""); var n = B(document.createComment(" ngView ")); m.replaceWith(n); return function (l) {
					function r() { g && (g.$destroy(), g = null); f && (h.leave(f), f = null) } function s() {
						var k =
						b.current && b.current.locals, a = k && k.$template; if (a) { r(); g = l.$new(); f = m.clone(); f.html(a); h.enter(f, null, n); var a = c(f, !1, z - 1), e = b.current; e.controller && (k.$scope = g, k = q(e.controller, k), e.controllerAs && (g[e.controllerAs] = k), f.data("$ngControllerController", k), f.children().data("$ngControllerController", k)); e.scope = g; a(g); g.$emit("$viewContentLoaded"); g.$eval(p); d() } else r()
					} var g, f; l.$on("$routeChangeSuccess", s); s()
				}
			}
		}
	}])
})(window, window.angular);
/*
//# sourceMappingURL=angular-route.min.js.map
*/

/*
	// 3dcart Cancellation: app.js

*/
function get3dcartTime() {

	//EST
	offset = -4.0

	clientDate = new Date();
	utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
	serverDate = new Date(utc + (3600000 * offset));

	hours = serverDate.getHours();
	mins = serverDate.getMinutes();


	if ($.inArray(serverDate.getDay(), [1, 2, 3, 4, 5]) && hours >= 11 && (hours < 18)) {
		return true;
	}
}

var app = angular.module('cancelAcc', ['ngRoute']);

app.config(function ($routeProvider) {

	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'templates/cancellation/home.html'
	})
	.when('/freeze', {
		controller: 'FreezeController',
		templateUrl: 'templates/cancellation/freeze-1.html'
	})
	.when('/help', {
		controller: 'HelpController',
		templateUrl: 'templates/cancellation/help-1.html'
	})
	.when('/help2', {
		controller: 'HelpController',
		templateUrl: 'templates/cancellation/help-2.html'
	})
	.when('/cancel/step1', {
		controller: 'CancelController',
		templateUrl: 'templates/cancellation/cancel-1.html'
	})
	.when('/cancel/step2', {
		controller: 'CancelController',
		templateUrl: 'templates/cancellation/cancel-2.html'
	})
	.when('/cancel/step3', {
		controller: 'CancelController',
		templateUrl: 'templates/cancellation/cancel-3.html'
	})
	.otherwise({
		redirectTo: '/'
	});

});

app.factory('cancelAccFac', ['$http', function ($http) {

	var cancelReason = {

	}

	function set(data) {
		cancelReason = data;
	}
	function get() {
		return cancelReason;
	}

	return {
		set: set,
		get: get
	}
}]);
app.controller('HomeController', ['$scope', 'cancelAccFac', '$routeParams', function ($scope, cancelAccFac, $routeParams) {
    //$scope.isWorkingHour = get3dcartTime();
    $scope.isWorkingHour = false;
}]);

app.controller('FreezeController', ['$http', '$scope', 'cancelAccFac', '$routeParams', function ($http, $scope, cancelAccFac, $routeParams) {

	$scope.accData = accData;

	$scope.domainName = $scope.accData.domain;
	$scope.name = $scope.accData.customerName;
	$scope.email = $scope.accData.email;
	$scope.phone = $scope.accData.phone;

	var data = {
	    "viewAction": "Freeze",
	    "hdnSecurityToken": accData.securityToken,
	    "nextbillingdate": accData.nextbillingdate,
	    "domain": accData.domain,
	    "price": accData.price,
	    "agreement": accData.agreement,
	    "plan": accData.plan,
	    "customername": accData.customerName,
	    "email": accData.email,
	    "phone": accData.phone,
	    "customerid": accData.customerId,
	    "storeid": accData.storeId
    };

	jQuery.post("billing_cancel.asp", data).done(function (data) {
        console.log();
    });

	$scope.freezeSubmit = function () {

		if (!$scope.domainName || !$scope.name || !$scope.email || !$scope.phone || !$scope.comments) {
			alert('Please fill all fields above to proceed.');
			return false;
		}
	}

}]);

app.controller('HelpController', ['$scope', 'cancelAccFac', '$routeParams', function ($scope, cancelAccFac, $routeParams) {
	$scope.accData = accData;
	$scope.cancelReason = cancelAccFac.get();

	$scope.domainName = $scope.accData.domain;
	$scope.name = $scope.accData.customerName;
	$scope.email = $scope.accData.email;
	$scope.phone = $scope.accData.phone;

	var data = {
	    "viewAction": "Help",
	    "hdnSecurityToken": accData.securityToken,
	    "nextbillingdate": accData.nextbillingdate,
	    "domain": accData.domain,
	    "price": accData.price,
	    "agreement": accData.agreement,
	    "plan": accData.plan,
	    "customername": accData.customerName,
	    "email": accData.email,
	    "phone": accData.phone,
	    "customerid": accData.customerId,
	    "storeid": accData.storeId
	};

	jQuery.post("billing_cancel.asp", data).done(function (data) {
	    console.log();
	});

	$scope.freezeSubmit = function () {

		if (!$scope.domainName || !$scope.name || !$scope.email || !$scope.phone || !$scope.comments) {
			alert('Please fill all fields above to proceed.');
			return false;
		}
	}

}]);

app.controller('CancelController', ['$scope', 'cancelAccFac', '$routeParams', function ($scope, cancelAccFac, $routeParams) {

	$scope.accData = accData;

	$scope.domainName = $scope.accData.domain;
	$scope.service = $scope.accData.serviceId;
	$scope.name = $scope.accData.customerName;
	$scope.email = $scope.accData.email;
	$scope.phone = $scope.accData.phone;

	var data = {
	    "viewAction": "Cancel",
	    "hdnSecurityToken": accData.securityToken,
	    "nextbillingdate": accData.nextbillingdate,
	    "domain": accData.domain,
	    "price": accData.price,
	    "agreement": accData.agreement,
	    "plan": accData.plan,
	    "customername": accData.customerName,
	    "email": accData.email,
	    "phone": accData.phone,
	    "customerid": accData.customerId,
	    "storeid": accData.storeId
	};

	jQuery.post("billing_cancel.asp", data).done(function (data) {
	    console.log();
	});

	$scope.reasonOptions = [
		{
			"optionName": "Bandwidth overages",
			"optionValue": 1
		},
		{
			"optionName": "Customer service was unsatisfactory",
			"optionValue": 2
		},
		{
			"optionName": "Low conversion rate",
			"optionValue": 3
		},
		{
			"optionName": "Missing feature",
			"optionValue": 4
		},
		{
			"optionName": "My business is seasonal - be back later",
			"optionValue": 5
		},
		{
			"optionName": "My Company is out of business",
			"optionValue": 6
		},
		{
			"optionName": "No longer need an online store",
			"optionValue": 7
		},
		{
			"optionName": "No time to set up the store",
			"optionValue": 8
		},
		{
			"optionName": "Not enough visitors/sales",
			"optionValue": 9
		},
		{
			"optionName": "Not happy with the look of the site",
			"optionValue": 10
		},
		{
			"optionName": "Not using it",
			"optionValue": 11
		},
		{
			"optionName": "Service is too expensive",
			"optionValue": 12
		},
		{
			"optionName": "Too difficult to use",
			"optionValue": 13
		},
		{
		    "optionName": "Other",
		    "optionValue": 14
		}
	];

	$scope.cancelReason = cancelAccFac.get();

	$scope.updateCancelReason = function () {
		cancelAccFac.set($scope.cancelReason);
	};

	$scope.validateTerms = function () {

	    if (!$scope.cancelReason.optionValue) {
	        alert('Please select a reason for cancellation.');
	    }
		else if (!$scope.cancelReason || !$scope.AccData || !$scope.AccFees || !$scope.AccSeo || !$scope.AccRefunds) {
			alert('Please read carefully and check all options above to proceed.');
		}
		else {
			window.location.href = '#/cancel/step2';
		}
	};

	$scope.validateCancelForm = function () {
		if (!$scope.domainName || !$scope.service || !$scope.name || !$scope.email || !$scope.phone || !$scope.cancelReason.optionName || !$scope.question || !$scope.understand) {
			alert('Please fill all fields above to continue.');
		}
	};

}]);

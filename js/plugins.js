;
window.Modernizr = function (a, b, c) {
		function x(a) {
			j.cssText = a
		}

		function y(a, b) {
			return x(prefixes.join(a + ";") + (b || ""))
		}

		function z(a, b) {
			return typeof a === b
		}

		function A(a, b) {
			return !!~("" + a).indexOf(b)
		}

		function B(a, b) {
			for (var d in a) {
				var e = a[d];
				if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
			}
			return !1
		}

		function C(a, b, d) {
			for (var e in a) {
				var f = b[a[e]];
				if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
			}
			return !1
		}

		function D(a, b, c) {
			var d = a.charAt(0).toUpperCase() + a.slice(1),
				e = (a + " " + n.join(d + " ") + d).split(" ");
			return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
		}
		var d = "2.6.2",
			e = {},
			f = !0,
			g = b.documentElement,
			h = "modernizr",
			i = b.createElement(h),
			j = i.style,
			k, l = {}.toString,
			m = "Webkit Moz O ms",
			n = m.split(" "),
			o = m.toLowerCase().split(" "),
			p = {},
			q = {},
			r = {},
			s = [],
			t = s.slice,
			u, v = {}.hasOwnProperty,
			w;
		!z(v, "undefined") && !z(v.call, "undefined") ? w = function (a, b) {
			return v.call(a, b)
		} : w = function (a, b) {
			return b in a && z(a.constructor.prototype[b], "undefined")
		}, Function.prototype.bind || (Function.prototype.bind = function (b) {
			var c = this;
			if (typeof c != "function") throw new TypeError;
			var d = t.call(arguments, 1),
				e = function () {
					if (this instanceof e) {
						var a = function () {};
						a.prototype = c.prototype;
						var f = new a,
							g = c.apply(f, d.concat(t.call(arguments)));
						return Object(g) === g ? g : f
					}
					return c.apply(b, d.concat(t.call(arguments)))
				};
			return e
		}), p.csstransitions = function () {
			return D("transition")
		};
		for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
		return e.addTest = function (a, b) {
				if (typeof a == "object")
					for (var d in a) w(a, d) && e.addTest(d, a[d]);
				else {
					a = a.toLowerCase();
					if (e[a] !== c) return e;
					b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
				}
				return e
			}, x(""), i = k = null,
			function (a, b) {
				function k(a, b) {
					var c = a.createElement("p"),
						d = a.getElementsByTagName("head")[0] || a.documentElement;
					return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
				}

				function l() {
					var a = r.elements;
					return typeof a == "string" ? a.split(" ") : a
				}

				function m(a) {
					var b = i[a[g]];
					return b || (b = {}, h++, a[g] = h, i[h] = b), b
				}

				function n(a, c, f) {
					c || (c = b);
					if (j) return c.createElement(a);
					f || (f = m(c));
					var g;
					return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
				}

				function o(a, c) {
					a || (a = b);
					if (j) return a.createDocumentFragment();
					c = c || m(a);
					var d = c.frag.cloneNode(),
						e = 0,
						f = l(),
						g = f.length;
					for (; e < g; e++) d.createElement(f[e]);
					return d
				}

				function p(a, b) {
					b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
						return r.shivMethods ? n(c, a, b) : b.createElem(c)
					}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
						return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
					}) + ");return n}")(r, b.frag)
				}

				function q(a) {
					a || (a = b);
					var c = m(a);
					return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
				}
				var c = a.html5 || {},
					d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					f, g = "_html5shiv",
					h = 0,
					i = {},
					j;
				(function () {
					try {
						var a = b.createElement("a");
						a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
							b.createElement("a");
							var a = b.createDocumentFragment();
							return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
						}()
					} catch (c) {
						f = !0, j = !0
					}
				})();
				var r = {
					elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: c.shivCSS !== !1,
					supportsUnknownElements: j,
					shivMethods: c.shivMethods !== !1,
					type: "default",
					shivDocument: q,
					createElement: n,
					createDocumentFragment: o
				};
				a.html5 = r, q(b)
			}(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) {
				return B([a])
			}, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
	}(this, this.document),
	function (a, b, c) {
		function d(a) {
			return "[object Function]" == o.call(a)
		}

		function e(a) {
			return "string" == typeof a
		}

		function f() {}

		function g(a) {
			return !a || "loaded" == a || "complete" == a || "uninitialized" == a
		}

		function h() {
			var a = p.shift();
			q = 1, a ? a.t ? m(function () {
				("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
			}, 0) : (a(), h()) : q = 0
		}

		function i(a, c, d, e, f, i, j) {
			function k(b) {
				if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
					"img" != a && m(function () {
						t.removeChild(l)
					}, 50);
					for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
				}
			}
			var j = j || B.errorTimeout,
				l = b.createElement(a),
				o = 0,
				r = 0,
				u = {
					t: d,
					s: c,
					e: f,
					a: i,
					x: j
				};
			1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
				k.call(this, r)
			}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
		}

		function j(a, b, c, d, f) {
			return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
		}

		function k() {
			var a = B;
			return a.loader = {
				load: j,
				i: 0
			}, a
		}
		var l = b.documentElement,
			m = a.setTimeout,
			n = b.getElementsByTagName("script")[0],
			o = {}.toString,
			p = [],
			q = 0,
			r = "MozAppearance" in l.style,
			s = r && !!b.createRange().compareNode,
			t = s ? l : n.parentNode,
			l = a.opera && "[object Opera]" == o.call(a.opera),
			l = !!b.attachEvent && !l,
			u = r ? "object" : l ? "script" : "img",
			v = l ? "script" : u,
			w = Array.isArray || function (a) {
				return "[object Array]" == o.call(a)
			},
			x = [],
			y = {},
			z = {
				timeout: function (a, b) {
					return b.length && (a.timeout = b[0]), a
				}
			},
			A, B;
		B = function (a) {
			function b(a) {
				var a = a.split("!"),
					b = x.length,
					c = a.pop(),
					d = a.length,
					c = {
						url: c,
						origUrl: c,
						prefixes: a
					},
					e, f, g;
				for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
				for (f = 0; f < b; f++) c = x[f](c);
				return c
			}

			function g(a, e, f, g, h) {
				var i = b(a),
					j = i.autoCallback;
				i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
					k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
				})))
			}

			function h(a, b) {
				function c(a, c) {
					if (a) {
						if (e(a)) c || (j = function () {
							var a = [].slice.call(arguments);
							k.apply(this, a), l()
						}), g(a, j, b, 0, h);
						else if (Object(a) === a)
							for (n in m = function () {
									var b = 0,
										c;
									for (c in a) a.hasOwnProperty(c) && b++;
									return b
								}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
								var a = [].slice.call(arguments);
								k.apply(this, a), l()
							} : j[n] = function (a) {
								return function () {
									var b = [].slice.call(arguments);
									a && a.apply(this, b), l()
								}
							}(k[n])), g(a[n], j, b, n, h))
					} else !c && l()
				}
				var h = !!a.test,
					i = a.load || a.both,
					j = a.callback || f,
					k = j,
					l = a.complete || f,
					m, n;
				c(h ? a.yep : a.nope, !!i), i && c(i)
			}
			var i, j, l = this.yepnope.loader;
			if (e(a)) g(a, 0, l, 0);
			else if (w(a))
				for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
			else Object(a) === a && h(a, l)
		}, B.addPrefix = function (a, b) {
			z[a] = b
		}, B.addFilter = function (a) {
			x.push(a)
		}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
			b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
		}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
			var k = b.createElement("script"),
				l, o, e = e || B.errorTimeout;
			k.src = a;
			for (o in d) k.setAttribute(o, d[o]);
			c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
				!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
			}, m(function () {
				l || (l = 1, c(1))
			}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
		}, a.yepnope.injectCss = function (a, c, d, e, g, i) {
			var e = b.createElement("link"),
				j, c = i ? h : c || f;
			e.href = a, e.rel = "stylesheet", e.type = "text/css";
			for (j in d) e.setAttribute(j, d[j]);
			g || (n.parentNode.insertBefore(e, n), m(c, 0))
		}
	}(this, document), Modernizr.load = function () {
		yepnope.apply(window, [].slice.call(arguments, 0))
	};
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (e, f, a, h, g) {
		return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
	},
	easeInQuad: function (e, f, a, h, g) {
		return h * (f /= g) * f + a
	},
	easeOutQuad: function (e, f, a, h, g) {
		return -h * (f /= g) * (f - 2) + a
	},
	easeInOutQuad: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f + a
		}
		return -h / 2 * ((--f) * (f - 2) - 1) + a
	},
	easeInCubic: function (e, f, a, h, g) {
		return h * (f /= g) * f * f + a
	},
	easeOutCubic: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f + 1) + a
	},
	easeInOutCubic: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f + 2) + a
	},
	easeInQuart: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f + a
	},
	easeOutQuart: function (e, f, a, h, g) {
		return -h * ((f = f / g - 1) * f * f * f - 1) + a
	},
	easeInOutQuart: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f + a
		}
		return -h / 2 * ((f -= 2) * f * f * f - 2) + a
	},
	easeInQuint: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f * f + a
	},
	easeOutQuint: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f * f * f + 1) + a
	},
	easeInOutQuint: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
	},
	easeInSine: function (e, f, a, h, g) {
		return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
	},
	easeOutSine: function (e, f, a, h, g) {
		return h * Math.sin(f / g * (Math.PI / 2)) + a
	},
	easeInOutSine: function (e, f, a, h, g) {
		return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
	},
	easeInExpo: function (e, f, a, h, g) {
		return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
	},
	easeOutExpo: function (e, f, a, h, g) {
		return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
	},
	easeInOutExpo: function (e, f, a, h, g) {
		if (f == 0) {
			return a
		}
		if (f == g) {
			return a + h
		}
		if ((f /= g / 2) < 1) {
			return h / 2 * Math.pow(2, 10 * (f - 1)) + a
		}
		return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
	},
	easeInCirc: function (e, f, a, h, g) {
		return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
	},
	easeOutCirc: function (e, f, a, h, g) {
		return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
	},
	easeInOutCirc: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
		}
		return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
	},
	easeInElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
	},
	easeOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
	},
	easeInOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k / 2) == 2) {
			return e + l
		}
		if (!j) {
			j = k * (0.3 * 1.5)
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		if (h < 1) {
			return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
		}
		return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
	},
	easeInBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * (f /= h) * f * ((g + 1) * f - g) + a
	},
	easeOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
	},
	easeInOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		if ((f /= h / 2) < 1) {
			return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
		}
		return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
	},
	easeInBounce: function (e, f, a, h, g) {
		return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
	},
	easeOutBounce: function (e, f, a, h, g) {
		if ((f /= g) < (1 / 2.75)) {
			return h * (7.5625 * f * f) + a
		} else {
			if (f < (2 / 2.75)) {
				return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
			} else {
				if (f < (2.5 / 2.75)) {
					return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
				} else {
					return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
				}
			}
		}
	},
	easeInOutBounce: function (e, f, a, h, g) {
		if (f < g / 2) {
			return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
		}
		return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
	}
});

/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
! function (a, b, c, d) {
	"use strict";

	function e(b, d) {
		if (this.el = b, this.$el = a(b), this.s = a.extend({}, f, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
		return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in c.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
	}
	var f = {
		mode: "lg-slide",
		cssEasing: "ease",
		easing: "linear",
		speed: 600,
		height: "100%",
		width: "100%",
		addClass: "",
		startClass: "lg-start-zoom",
		backdropDuration: 150,
		hideBarsDelay: 6e3,
		useLeft: !1,
		closable: !0,
		loop: !0,
		escKey: !0,
		keyPress: !0,
		controls: !0,
		slideEndAnimatoin: !0,
		hideControlOnEnd: !1,
		mousewheel: !0,
		getCaptionFromTitleOrAlt: !0,
		appendSubHtmlTo: ".lg-sub-html",
		subHtmlSelectorRelative: !1,
		preload: 1,
		showAfterLoad: !0,
		selector: "",
		selectWithin: "",
		nextHtml: "",
		prevHtml: "",
		index: !1,
		iframeMaxWidth: "100%",
		download: !0,
		counter: !0,
		appendCounterTo: ".lg-toolbar",
		swipeThreshold: 50,
		enableSwipe: !0,
		enableDrag: !0,
		dynamic: !1,
		dynamicEl: [],
		galleryId: 1
	};
	e.prototype.init = function () {
		var c = this;
		c.s.preload > c.$items.length && (c.s.preload = c.$items.length);
		var d = b.location.hash;
		d.indexOf("lg=" + this.s.galleryId) > 0 && (c.index = parseInt(d.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function () {
			c.build(c.index)
		}), a("body").addClass("lg-on"))), c.s.dynamic ? (c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function () {
			c.build(c.index), a("body").addClass("lg-on")
		})) : c.$items.on("click.lgcustom", function (b) {
			try {
				b.preventDefault(), b.preventDefault()
			} catch (a) {
				b.returnValue = !1
			}
			c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || c.$items.index(this), a("body").hasClass("lg-on") || (c.build(c.index), a("body").addClass("lg-on"))
		})
	}, e.prototype.build = function (b) {
		var c = this;
		c.structure(), a.each(a.fn.lightGallery.modules, function (b) {
			c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
		}), c.slide(b, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 && (c.arrow(), setTimeout(function () {
			c.enableDrag(), c.enableSwipe()
		}, 50), c.s.mousewheel && c.mousewheel()), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
			c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function () {
				c.$outer.addClass("lg-hide-items")
			}, c.s.hideBarsDelay)
		})
	}, e.prototype.structure = function () {
		var c, d = "",
			e = "",
			f = 0,
			g = "",
			h = this;
		for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), f = 0; f < this.$items.length; f++) d += '<div class="lg-item"></div>';
		if (this.s.controls && this.$items.length > 1 && (e = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (g = '<div class="lg-sub-html"></div>'), c = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + d + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + e + g + "</div></div>", a("body").append(c), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), h.setTop(), a(b).on("resize.lg orientationchange.lg", function () {
				setTimeout(function () {
					h.setTop()
				}, 100)
			}), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
			var i = this.$outer.find(".lg-inner");
			i.css("transition-timing-function", this.s.cssEasing), i.css("transition-duration", this.s.speed + "ms")
		}
		a(".lg-backdrop").addClass("in"), setTimeout(function () {
			h.$outer.addClass("lg-visible")
		}, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(b).scrollTop()
	}, e.prototype.setTop = function () {
		if ("100%" !== this.s.height) {
			var c = a(b).height(),
				d = (c - parseInt(this.s.height, 10)) / 2,
				e = this.$outer.find(".lg");
			c >= parseInt(this.s.height, 10) ? e.css("top", d + "px") : e.css("top", "0px")
		}
	}, e.prototype.doCss = function () {
		var a = function () {
			var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
				b = c.documentElement,
				d = 0;
			for (d = 0; d < a.length; d++)
				if (a[d] in b.style) return !0
		};
		return !!a()
	}, e.prototype.isVideo = function (a, b) {
		var c;
		if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a && c) return {
			html5: !0
		};
		var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
			e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
			f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
			g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
		return d ? {
			youtube: d
		} : e ? {
			vimeo: e
		} : f ? {
			dailymotion: f
		} : g ? {
			vk: g
		} : void 0
	}, e.prototype.counter = function () {
		this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
	}, e.prototype.addHtml = function (b) {
		var c, d, e = null;
		if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
			if ("undefined" != typeof e && null !== e) {
				var f = e.substring(0, 1);
				"." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
			} else e = "";
		".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
	}, e.prototype.preload = function (a) {
		var b = 1,
			c = 1;
		for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
		for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
	}, e.prototype.loadContent = function (c, d, e) {
		var f, g, h, i, j, k, l = this,
			m = !1,
			n = function (c) {
				for (var d = [], e = [], f = 0; f < c.length; f++) {
					var h = c[f].split(" ");
					"" === h[0] && h.splice(0, 1), e.push(h[0]), d.push(h[1])
				}
				for (var i = a(b).width(), j = 0; j < d.length; j++)
					if (parseInt(d[j], 10) > i) {
						g = e[j];
						break
					}
			};
		if (l.s.dynamic) {
			if (l.s.dynamicEl[c].poster && (m = !0, h = l.s.dynamicEl[c].poster), k = l.s.dynamicEl[c].html, g = l.s.dynamicEl[c].src, l.s.dynamicEl[c].responsive) {
				var o = l.s.dynamicEl[c].responsive.split(",");
				n(o)
			}
			i = l.s.dynamicEl[c].srcset, j = l.s.dynamicEl[c].sizes
		} else {
			if (l.$items.eq(c).attr("data-poster") && (m = !0, h = l.$items.eq(c).attr("data-poster")), k = l.$items.eq(c).attr("data-html"), g = l.$items.eq(c).attr("href") || l.$items.eq(c).attr("data-src"), l.$items.eq(c).attr("data-responsive")) {
				var p = l.$items.eq(c).attr("data-responsive").split(",");
				n(p)
			}
			i = l.$items.eq(c).attr("data-srcset"), j = l.$items.eq(c).attr("data-sizes")
		}
		var q = !1;
		l.s.dynamic ? l.s.dynamicEl[c].iframe && (q = !0) : "true" === l.$items.eq(c).attr("data-iframe") && (q = !0);
		var r = l.isVideo(g, c);
		if (!l.$slide.eq(c).hasClass("lg-loaded")) {
			if (q) l.$slide.eq(c).prepend('<div class="lg-video-cont" style="max-width:' + l.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + g + '"  allowfullscreen="true"></iframe></div></div>');
			else if (m) {
				var s = "";
				s = r && r.youtube ? "lg-has-youtube" : r && r.vimeo ? "lg-has-vimeo" : "lg-has-html5", l.$slide.eq(c).prepend('<div class="lg-video-cont ' + s + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + h + '" /></div></div>')
			} else r ? (l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.$el.trigger("hasVideo.lg", [c, g, k])) : l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + g + '" /></div>');
			if (l.$el.trigger("onAferAppendSlide.lg", [c]), f = l.$slide.eq(c).find(".lg-object"), j && f.attr("sizes", j), i) {
				f.attr("srcset", i);
				try {
					picturefill({
						elements: [f[0]]
					})
				} catch (a) {
					console.error("Make sure you have included Picturefill version 2")
				}
			}
			".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(c), l.$slide.eq(c).addClass("lg-loaded")
		}
		l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function () {
			var b = 0;
			e && !a("body").hasClass("lg-from-hash") && (b = e), setTimeout(function () {
				l.$slide.eq(c).addClass("lg-complete"), l.$el.trigger("onSlideItemLoad.lg", [c, e || 0])
			}, b)
		}), r && r.html5 && !m && l.$slide.eq(c).addClass("lg-complete"), d === !0 && (l.$slide.eq(c).hasClass("lg-complete") ? l.preload(c) : l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function () {
			l.preload(c)
		}))
	}, e.prototype.slide = function (b, c, d) {
		var e = this.$outer.find(".lg-current").index(),
			f = this;
		if (!f.lGalleryOn || e !== b) {
			var g = this.$slide.length,
				h = f.lGalleryOn ? this.s.speed : 0,
				i = !1,
				j = !1;
			if (!f.lgBusy) {
				if (this.s.download) {
					var k;
					k = f.s.dynamic ? f.s.dynamicEl[b].downloadUrl !== !1 && (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src) : "false" !== f.$items.eq(b).attr("data-download-url") && (f.$items.eq(b).attr("data-download-url") || f.$items.eq(b).attr("href") || f.$items.eq(b).attr("data-src")), k ? (a("#lg-download").attr("href", k), f.$outer.removeClass("lg-hide-download")) : f.$outer.addClass("lg-hide-download")
				}
				if (this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]), f.lgBusy = !0, clearTimeout(f.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
						f.addHtml(b)
					}, h), this.arrowDisable(b), c) {
					var l = b - 1,
						m = b + 1;
					0 === b && e === g - 1 ? (m = 0, l = g - 1) : b === g - 1 && 0 === e && (m = 0, l = g - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), f.$slide.eq(l).addClass("lg-prev-slide"), f.$slide.eq(m).addClass("lg-next-slide"), f.$slide.eq(b).addClass("lg-current")
				} else f.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), b < e ? (j = !0, 0 !== b || e !== g - 1 || d || (j = !1, i = !0)) : b > e && (i = !0, b !== g - 1 || 0 !== e || d || (j = !0, i = !1)), j ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")) : i && (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(e).addClass("lg-prev-slide")), setTimeout(function () {
					f.$slide.removeClass("lg-current"), f.$slide.eq(b).addClass("lg-current"), f.$outer.removeClass("lg-no-trans")
				}, 50);
				f.lGalleryOn ? (setTimeout(function () {
					f.loadContent(b, !0, 0)
				}, this.s.speed + 50), setTimeout(function () {
					f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])
				}, this.s.speed)) : (f.loadContent(b, !0, f.s.backdropDuration), f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])), f.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
			}
		}
	}, e.prototype.goToNextSlide = function (a) {
		var b = this;
		b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-right-end"), setTimeout(function () {
			b.$outer.removeClass("lg-right-end")
		}, 400)))
	}, e.prototype.goToPrevSlide = function (a) {
		var b = this;
		b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-left-end"), setTimeout(function () {
			b.$outer.removeClass("lg-left-end")
		}, 400)))
	}, e.prototype.keyPress = function () {
		var c = this;
		this.$items.length > 1 && a(b).on("keyup.lg", function (a) {
			c.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), c.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), c.goToNextSlide()))
		}), a(b).on("keydown.lg", function (a) {
			c.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), c.$outer.hasClass("lg-thumb-open") ? c.$outer.removeClass("lg-thumb-open") : c.destroy())
		})
	}, e.prototype.arrow = function () {
		var a = this;
		this.$outer.find(".lg-prev").on("click.lg", function () {
			a.goToPrevSlide()
		}), this.$outer.find(".lg-next").on("click.lg", function () {
			a.goToNextSlide()
		})
	}, e.prototype.arrowDisable = function (a) {
		!this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
	}, e.prototype.setTranslate = function (a, b, c) {
		this.s.useLeft ? a.css("left", b) : a.css({
			transform: "translate3d(" + b + "px, " + c + "px, 0px)"
		})
	}, e.prototype.touchMove = function (b, c) {
		var d = c - b;
		Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
	}, e.prototype.touchEnd = function (a) {
		var b = this;
		"lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
			b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
		}), setTimeout(function () {
			b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
		}, b.s.speed + 100)
	}, e.prototype.enableSwipe = function () {
		var a = this,
			b = 0,
			c = 0,
			d = !1;
		a.s.enableSwipe && a.isTouch && a.doCss() && (a.$slide.on("touchstart.lg", function (c) {
			a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
		}), a.$slide.on("touchmove.lg", function (e) {
			a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
		}), a.$slide.on("touchend.lg", function () {
			a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
		}))
	}, e.prototype.enableDrag = function () {
		var c = this,
			d = 0,
			e = 0,
			f = !1,
			g = !1;
		c.s.enableDrag && !c.isTouch && c.doCss() && (c.$slide.on("mousedown.lg", function (b) {
			c.$outer.hasClass("lg-zoomed") || (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && (b.preventDefault(), c.lgBusy || (c.manageSwipeClass(), d = b.pageX, f = !0, c.$outer.scrollLeft += 1, c.$outer.scrollLeft -= 1, c.$outer.removeClass("lg-grab").addClass("lg-grabbing"), c.$el.trigger("onDragstart.lg")))
		}), a(b).on("mousemove.lg", function (a) {
			f && (g = !0, e = a.pageX, c.touchMove(d, e), c.$el.trigger("onDragmove.lg"))
		}), a(b).on("mouseup.lg", function (b) {
			g ? (g = !1, c.touchEnd(e - d), c.$el.trigger("onDragend.lg")) : (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && c.$el.trigger("onSlideClick.lg"), f && (f = !1, c.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
		}))
	}, e.prototype.manageSwipeClass = function () {
		var a = this.index + 1,
			b = this.index - 1,
			c = this.$slide.length;
		this.s.loop && (0 === this.index ? b = c - 1 : this.index === c - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
	}, e.prototype.mousewheel = function () {
		var a = this;
		a.$outer.on("mousewheel.lg", function (b) {
			b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
		})
	}, e.prototype.closeGallery = function () {
		var b = this,
			c = !1;
		this.$outer.find(".lg-close").on("click.lg", function () {
			b.destroy()
		}), b.s.closable && (b.$outer.on("mousedown.lg", function (b) {
			c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
		}), b.$outer.on("mouseup.lg", function (d) {
			(a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
		}))
	}, e.prototype.destroy = function (c) {
		var d = this;
		c || d.$el.trigger("onBeforeClose.lg"), a(b).scrollTop(d.prevScrollTop), c && (d.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(d.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function (a) {
			d.modules[a] && d.modules[a].destroy()
		}), this.lGalleryOn = !1, clearTimeout(d.hideBartimeout), this.hideBartimeout = !1, a(b).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), d.$outer && d.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function () {
			d.$outer && d.$outer.remove(), a(".lg-backdrop").remove(), c || d.$el.trigger("onCloseAfter.lg")
		}, d.s.backdropDuration + 50)
	}, a.fn.lightGallery = function (b) {
		return this.each(function () {
			if (a.data(this, "lightGallery")) try {
				a(this).data("lightGallery").init()
			} catch (a) {
				console.error("lightGallery has not initiated properly")
			} else a.data(this, "lightGallery", new e(this, b))
		})
	}, a.fn.lightGallery.modules = {}
}(jQuery, window, document);
/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
! function (a, b, c, d) {
	"use strict";
	var e = {
			scale: 1,
			zoom: !0,
			actualSize: !0,
			enableZoomAfter: 300
		},
		f = function (c) {
			return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, e, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(b).width() / 2, this.pageY = a(b).height() / 2 + a(b).scrollTop()), this
		};
	f.prototype.init = function () {
		var c = this,
			d = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
		c.core.s.actualSize && (d += '<span id="lg-actual-size" class="lg-icon"></span>'), this.core.$outer.find(".lg-toolbar").append(d), c.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (b, d, e) {
			var f = c.core.s.enableZoomAfter + e;
			a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), c.zoomabletimeout = setTimeout(function () {
				c.core.$slide.eq(d).addClass("lg-zoomable")
			}, f + 30)
		});
		var e = 1,
			f = function (d) {
				var e, f, g = c.core.$outer.find(".lg-current .lg-image"),
					h = (a(b).width() - g.width()) / 2,
					i = (a(b).height() - g.height()) / 2 + a(b).scrollTop();
				e = c.pageX - h, f = c.pageY - i;
				var j = (d - 1) * e,
					k = (d - 1) * f;
				g.css("transform", "scale3d(" + d + ", " + d + ", 1)").attr("data-scale", d), g.parent().css({
					left: -j + "px",
					top: -k + "px"
				}).attr("data-x", j).attr("data-y", k)
			},
			g = function () {
				e > 1 ? c.core.$outer.addClass("lg-zoomed") : c.resetZoom(), e < 1 && (e = 1), f(e)
			},
			h = function (d, f, h, i) {
				var j, k = f.width();
				j = c.core.s.dynamic ? c.core.s.dynamicEl[h].width || f[0].naturalWidth || k : c.core.$items.eq(h).attr("data-width") || f[0].naturalWidth || k;
				var l;
				c.core.$outer.hasClass("lg-zoomed") ? e = 1 : j > k && (l = j / k, e = l || 2), i ? (c.pageX = a(b).width() / 2, c.pageY = a(b).height() / 2 + a(b).scrollTop()) : (c.pageX = d.pageX || d.originalEvent.targetTouches[0].pageX, c.pageY = d.pageY || d.originalEvent.targetTouches[0].pageY), g(), setTimeout(function () {
					c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
				}, 10)
			},
			i = !1;
		c.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, b) {
			var d = c.core.$slide.eq(b).find(".lg-image");
			d.on("dblclick", function (a) {
				h(a, d, b)
			}), d.on("touchstart", function (a) {
				i ? (clearTimeout(i), i = null, h(a, d, b)) : i = setTimeout(function () {
					i = null
				}, 300), a.preventDefault()
			})
		}), a(b).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function () {
			c.pageX = a(b).width() / 2, c.pageY = a(b).height() / 2 + a(b).scrollTop(), f(e)
		}), a("#lg-zoom-out").on("click.lg", function () {
			c.core.$outer.find(".lg-current .lg-image").length && (e -= c.core.s.scale, g())
		}), a("#lg-zoom-in").on("click.lg", function () {
			c.core.$outer.find(".lg-current .lg-image").length && (e += c.core.s.scale, g())
		}), a("#lg-actual-size").on("click.lg", function (a) {
			h(a, c.core.$slide.eq(c.core.index).find(".lg-image"), c.core.index, !0)
		}), c.core.$el.on("onBeforeSlide.lg.tm", function () {
			e = 1, c.resetZoom()
		}), c.core.isTouch || c.zoomDrag(), c.core.isTouch && c.zoomSwipe()
	}, f.prototype.resetZoom = function () {
		this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(b).width() / 2, this.pageY = a(b).height() / 2 + a(b).scrollTop()
	}, f.prototype.zoomSwipe = function () {
		var a = this,
			b = {},
			c = {},
			d = !1,
			e = !1,
			f = !1;
		a.core.$slide.on("touchstart.lg", function (c) {
			if (a.core.$outer.hasClass("lg-zoomed")) {
				var d = a.core.$slide.eq(a.core.index).find(".lg-object");
				f = d.outerHeight() * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.outerWidth() * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = {
					x: c.originalEvent.targetTouches[0].pageX,
					y: c.originalEvent.targetTouches[0].pageY
				})
			}
		}), a.core.$slide.on("touchmove.lg", function (g) {
			if (a.core.$outer.hasClass("lg-zoomed")) {
				var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
				g.preventDefault(), d = !0, c = {
					x: g.originalEvent.targetTouches[0].pageX,
					y: g.originalEvent.targetTouches[0].pageY
				}, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && j.css({
					left: h + "px",
					top: i + "px"
				})
			}
		}), a.core.$slide.on("touchend.lg", function () {
			a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f))
		})
	}, f.prototype.zoomDrag = function () {
		var c = this,
			d = {},
			e = {},
			f = !1,
			g = !1,
			h = !1,
			i = !1;
		c.core.$slide.on("mousedown.lg.zoom", function (b) {
			var e = c.core.$slide.eq(c.core.index).find(".lg-object");
			i = e.outerHeight() * e.attr("data-scale") > c.core.$outer.find(".lg").height(), h = e.outerWidth() * e.attr("data-scale") > c.core.$outer.find(".lg").width(), c.core.$outer.hasClass("lg-zoomed") && a(b.target).hasClass("lg-object") && (h || i) && (b.preventDefault(), d = {
				x: b.pageX,
				y: b.pageY
			}, f = !0, c.core.$outer.scrollLeft += 1, c.core.$outer.scrollLeft -= 1, c.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
		}), a(b).on("mousemove.lg.zoom", function (a) {
			if (f) {
				var b, j, k = c.core.$slide.eq(c.core.index).find(".lg-img-wrap");
				g = !0, e = {
					x: a.pageX,
					y: a.pageY
				}, c.core.$outer.addClass("lg-zoom-dragging"), j = i ? -Math.abs(k.attr("data-y")) + (e.y - d.y) : -Math.abs(k.attr("data-y")), b = h ? -Math.abs(k.attr("data-x")) + (e.x - d.x) : -Math.abs(k.attr("data-x")), k.css({
					left: b + "px",
					top: j + "px"
				})
			}
		}), a(b).on("mouseup.lg.zoom", function (a) {
			f && (f = !1, c.core.$outer.removeClass("lg-zoom-dragging"), !g || d.x === e.x && d.y === e.y || (e = {
				x: a.pageX,
				y: a.pageY
			}, c.touchendZoom(d, e, h, i)), g = !1), c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
		})
	}, f.prototype.touchendZoom = function (a, b, c, d) {
		var e = this,
			f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
			g = e.core.$slide.eq(e.core.index).find(".lg-object"),
			h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
			i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
			j = (e.core.$outer.find(".lg").height() - g.outerHeight()) / 2,
			k = Math.abs(g.outerHeight() * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
			l = (e.core.$outer.find(".lg").width() - g.outerWidth()) / 2,
			m = Math.abs(g.outerWidth() * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
		(Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), f.css({
			left: h + "px",
			top: i + "px"
		}))
	}, f.prototype.destroy = function () {
		var c = this;
		c.core.$el.off(".lg.zoom"), a(b).off(".lg.zoom"), c.core.$slide.off(".lg.zoom"), c.core.$el.off(".lg.tm.zoom"), c.resetZoom(), clearTimeout(c.zoomabletimeout), c.zoomabletimeout = !1
	}, a.fn.lightGallery.modules.zoom = f
}(jQuery, window, document);

/*!  lightGallery */
! function (e, o, i, l) {
	"use strict";
	var a = {
			videoMaxWidth: "855px",
			youtubePlayerParams: !1,
			vimeoPlayerParams: !1,
			dailymotionPlayerParams: !1,
			videojs: !1
		},
		s = function (o) {
			return this.core = e(o).data("lightGallery"), this.$el = e(o), this.core.s = e.extend({}, a, this.core.s), this.videoLoaded = !1, this.init(), this
		};
	s.prototype.init = function () {
		var o = this;
		o.core.$el.on("hasVideo.lg.tm", function (e, i, l, a) {
			if (o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(l, "lg-object", !0, i, a)), a)
				if (o.core.s.videojs) try {
					videojs(o.core.$slide.eq(i).find(".lg-html5").get(0), {}, function () {
						o.videoLoaded || this.play()
					})
				} catch (s) {
					console.error("Make sure you have included videojs")
				} else o.core.$slide.eq(i).find(".lg-html5").get(0).play()
		}), o.core.$el.on("onAferAppendSlide.lg.tm", function (e, i) {
			o.core.$slide.eq(i).find(".lg-video-cont").css("max-width", o.core.s.videoMaxWidth), o.videoLoaded = !0
		});
		var i = function (e) {
			if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
				if (e.hasClass("lg-has-video")) {
					var i = e.find(".lg-youtube").get(0),
						l = e.find(".lg-vimeo").get(0),
						a = e.find(".lg-dailymotion").get(0),
						s = e.find(".lg-html5").get(0);
					if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
					else if (l) try {
							$f(l).api("play")
						} catch (r) {
							console.error("Make sure you have included froogaloop2 js")
						} else if (a) a.contentWindow.postMessage("play", "*");
						else if (s)
						if (o.core.s.videojs) try {
							videojs(s).play()
						} catch (r) {
							console.error("Make sure you have included videojs")
						} else s.play();
					e.addClass("lg-video-palying")
				} else {
					e.addClass("lg-video-palying lg-has-video");
					var t, d, c = function (i, l) {
						if (e.find(".lg-video").append(o.loadVideo(i, "", !1, o.core.index, l)), l)
							if (o.core.s.videojs) try {
								videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0), {}, function () {
									this.play()
								})
							} catch (a) {
								console.error("Make sure you have included videojs")
							} else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()
					};
					o.core.s.dynamic ? (t = o.core.s.dynamicEl[o.core.index].src, d = o.core.s.dynamicEl[o.core.index].html, c(t, d)) : (t = o.core.$items.eq(o.core.index).attr("href") || o.core.$items.eq(o.core.index).attr("data-src"), d = o.core.$items.eq(o.core.index).attr("data-html"), c(t, d));
					var n = e.find(".lg-object");
					e.find(".lg-video").append(n), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", function () {
						e.addClass("lg-complete")
					}))
				}
		};
		o.core.doCss() && o.core.$items.length > 1 && (o.core.s.enableSwipe && o.core.isTouch || o.core.s.enableDrag && !o.core.isTouch) ? o.core.$el.on("onSlideClick.lg.tm", function () {
			var e = o.core.$slide.eq(o.core.index);
			i(e)
		}) : o.core.$slide.on("click.lg", function () {
			i(e(this))
		}), o.core.$el.on("onBeforeSlide.lg.tm", function (e, i, l) {
			var a = o.core.$slide.eq(i),
				s = a.find(".lg-youtube").get(0),
				r = a.find(".lg-vimeo").get(0),
				t = a.find(".lg-dailymotion").get(0),
				d = a.find(".lg-html5").get(0);
			if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
			else if (r) try {
					$f(r).api("pause")
				} catch (c) {
					console.error("Make sure you have included froogaloop2 js")
				} else if (t) t.contentWindow.postMessage("pause", "*");
				else if (d)
				if (o.core.s.videojs) try {
					videojs(d).pause()
				} catch (c) {
					console.error("Make sure you have included videojs")
				} else d.pause();
			var n;
			n = o.core.s.dynamic ? o.core.s.dynamicEl[l].src : o.core.$items.eq(l).attr("href") || o.core.$items.eq(l).attr("data-src");
			var m = o.core.isVideo(n, l) || {};
			(m.youtube || m.vimeo || m.dailymotion) && o.core.$outer.addClass("lg-hide-download")
		}), o.core.$el.on("onAfterSlide.lg.tm", function (e, i) {
			o.core.$slide.eq(i).removeClass("lg-video-palying")
		})
	}, s.prototype.loadVideo = function (o, i, l, a, s) {
		var r = "",
			t = 1,
			d = "",
			c = this.core.isVideo(o, a) || {};
		if (l && (t = this.videoLoaded ? 0 : 1), c.youtube) d = "?wmode=opaque&autoplay=" + t + "&enablejsapi=1", this.core.s.youtubePlayerParams && (d = d + "&" + e.param(this.core.s.youtubePlayerParams)), r = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + c.youtube[1] + d + '" frameborder="0" allowfullscreen></iframe>';
		else if (c.vimeo) d = "?autoplay=" + t + "&api=1", this.core.s.vimeoPlayerParams && (d = d + "&" + e.param(this.core.s.vimeoPlayerParams)), r = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="http://player.vimeo.com/video/' + c.vimeo[1] + d + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		else if (c.dailymotion) d = "?wmode=opaque&autoplay=" + t + "&api=postMessage", this.core.s.dailymotionPlayerParams && (d = d + "&" + e.param(this.core.s.dailymotionPlayerParams)), r = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + c.dailymotion[1] + d + '" frameborder="0" allowfullscreen></iframe>';
		else if (c.html5) {
			var n = s.substring(0, 1);
			("." === n || "#" === n) && (s = e(s).html()), r = s
		}
		return r
	}, s.prototype.destroy = function () {
		this.videoLoaded = !1
	}, e.fn.lightGallery.modules.video = s
}(jQuery, window, document);


/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
! function (a) {
	function b() {}

	function c(a) {
		function c(b) {
			b.prototype.option || (b.prototype.option = function (b) {
				a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
			})
		}

		function e(b, c) {
			a.fn[b] = function (e) {
				if ("string" == typeof e) {
					for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
						var j = this[h],
							k = a.data(j, b);
						if (k)
							if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
								var l = k[e].apply(k, g);
								if (void 0 !== l) return l
							} else f("no such method '" + e + "' for " + b + " instance");
						else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
					}
					return this
				}
				return this.each(function () {
					var d = a.data(this, b);
					d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
				})
			}
		}
		if (a) {
			var f = "undefined" == typeof console ? b : function (a) {
				console.error(a)
			};
			return a.bridget = function (a, b) {
				c(b), e(a, b)
			}, a.bridget
		}
	}
	var d = Array.prototype.slice;
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function (a) {
	function b(b) {
		var c = a.event;
		return c.target = c.target || c.srcElement || b, c
	}
	var c = document.documentElement,
		d = function () {};
	c.addEventListener ? d = function (a, b, c) {
		a.addEventListener(b, c, !1)
	} : c.attachEvent && (d = function (a, c, d) {
		a[c + d] = d.handleEvent ? function () {
			var c = b(a);
			d.handleEvent.call(d, c)
		} : function () {
			var c = b(a);
			d.call(a, c)
		}, a.attachEvent("on" + c, a[c + d])
	});
	var e = function () {};
	c.removeEventListener ? e = function (a, b, c) {
		a.removeEventListener(b, c, !1)
	} : c.detachEvent && (e = function (a, b, c) {
		a.detachEvent("on" + b, a[b + c]);
		try {
			delete a[b + c]
		} catch (d) {
			a[b + c] = void 0
		}
	});
	var f = {
		bind: d,
		unbind: e
	};
	"function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function () {
	"use strict";

	function a() {}

	function b(a, b) {
		for (var c = a.length; c--;)
			if (a[c].listener === b) return c;
		return -1
	}

	function c(a) {
		return function () {
			return this[a].apply(this, arguments)
		}
	}
	var d = a.prototype,
		e = this,
		f = e.EventEmitter;
	d.getListeners = function (a) {
		var b, c, d = this._getEvents();
		if (a instanceof RegExp) {
			b = {};
			for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
		} else b = d[a] || (d[a] = []);
		return b
	}, d.flattenListeners = function (a) {
		var b, c = [];
		for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
		return c
	}, d.getListenersAsObject = function (a) {
		var b, c = this.getListeners(a);
		return c instanceof Array && (b = {}, b[a] = c), b || c
	}, d.addListener = function (a, c) {
		var d, e = this.getListenersAsObject(a),
			f = "object" == typeof c;
		for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
			listener: c,
			once: !1
		});
		return this
	}, d.on = c("addListener"), d.addOnceListener = function (a, b) {
		return this.addListener(a, {
			listener: b,
			once: !0
		})
	}, d.once = c("addOnceListener"), d.defineEvent = function (a) {
		return this.getListeners(a), this
	}, d.defineEvents = function (a) {
		for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
		return this
	}, d.removeListener = function (a, c) {
		var d, e, f = this.getListenersAsObject(a);
		for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
		return this
	}, d.off = c("removeListener"), d.addListeners = function (a, b) {
		return this.manipulateListeners(!1, a, b)
	}, d.removeListeners = function (a, b) {
		return this.manipulateListeners(!0, a, b)
	}, d.manipulateListeners = function (a, b, c) {
		var d, e, f = a ? this.removeListener : this.addListener,
			g = a ? this.removeListeners : this.addListeners;
		if ("object" != typeof b || b instanceof RegExp)
			for (d = c.length; d--;) f.call(this, b, c[d]);
		else
			for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
		return this
	}, d.removeEvent = function (a) {
		var b, c = typeof a,
			d = this._getEvents();
		if ("string" === c) delete d[a];
		else if (a instanceof RegExp)
			for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
		else delete this._events;
		return this
	}, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
		var c, d, e, f, g = this.getListenersAsObject(a);
		for (e in g)
			if (g.hasOwnProperty(e))
				for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
		return this
	}, d.trigger = c("emitEvent"), d.emit = function (a) {
		var b = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(a, b)
	}, d.setOnceReturnValue = function (a) {
		return this._onceReturnValue = a, this
	}, d._getOnceReturnValue = function () {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, d._getEvents = function () {
		return this._events || (this._events = {})
	}, a.noConflict = function () {
		return e.EventEmitter = f, a
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
		return a
	}) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
	function (a) {
		function b(a) {
			if (a) {
				if ("string" == typeof d[a]) return a;
				a = a.charAt(0).toUpperCase() + a.slice(1);
				for (var b, e = 0, f = c.length; f > e; e++)
					if (b = c[e] + a, "string" == typeof d[b]) return b
			}
		}
		var c = "Webkit Moz ms Ms O".split(" "),
			d = document.documentElement.style;
		"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
			return b
		}) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
	}(window),
	function (a, b) {
		function c(a) {
			var b = parseFloat(a),
				c = -1 === a.indexOf("%") && !isNaN(b);
			return c && b
		}

		function d() {}

		function e() {
			for (var a = {
					width: 0,
					height: 0,
					innerWidth: 0,
					innerHeight: 0,
					outerWidth: 0,
					outerHeight: 0
				}, b = 0, c = h.length; c > b; b++) {
				var d = h[b];
				a[d] = 0
			}
			return a
		}

		function f(b) {
			function d() {
				if (!m) {
					m = !0;
					var d = a.getComputedStyle;
					if (j = function () {
							var a = d ? function (a) {
								return d(a, null)
							} : function (a) {
								return a.currentStyle
							};
							return function (b) {
								var c = a(b);
								return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
							}
						}(), k = b("boxSizing")) {
						var e = document.createElement("div");
						e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
						var f = document.body || document.documentElement;
						f.appendChild(e);
						var h = j(e);
						l = 200 === c(h.width), f.removeChild(e)
					}
				}
			}

			function f(a) {
				if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
					var b = j(a);
					if ("none" === b.display) return e();
					var f = {};
					f.width = a.offsetWidth, f.height = a.offsetHeight;
					for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
						var o = h[m],
							p = b[o];
						p = i(a, p);
						var q = parseFloat(p);
						f[o] = isNaN(q) ? 0 : q
					}
					var r = f.paddingLeft + f.paddingRight,
						s = f.paddingTop + f.paddingBottom,
						t = f.marginLeft + f.marginRight,
						u = f.marginTop + f.marginBottom,
						v = f.borderLeftWidth + f.borderRightWidth,
						w = f.borderTopWidth + f.borderBottomWidth,
						x = g && l,
						y = c(b.width);
					y !== !1 && (f.width = y + (x ? 0 : r + v));
					var z = c(b.height);
					return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
				}
			}

			function i(b, c) {
				if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
				var d = b.style,
					e = d.left,
					f = b.runtimeStyle,
					g = f && f.left;
				return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
			}
			var j, k, l, m = !1;
			return f
		}
		var g = "undefined" == typeof console ? d : function (a) {
				console.error(a)
			},
			h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
	}(window),
	function (a) {
		function b(a) {
			"function" == typeof a && (b.isReady ? a() : g.push(a))
		}

		function c(a) {
			var c = "readystatechange" === a.type && "complete" !== f.readyState;
			b.isReady || c || d()
		}

		function d() {
			b.isReady = !0;
			for (var a = 0, c = g.length; c > a; a++) {
				var d = g[a];
				d()
			}
		}

		function e(e) {
			return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
		}
		var f = a.document,
			g = [];
		b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
	}(window),
	function (a) {
		"use strict";

		function b(a, b) {
			return a[g](b)
		}

		function c(a) {
			if (!a.parentNode) {
				var b = document.createDocumentFragment();
				b.appendChild(a)
			}
		}

		function d(a, b) {
			c(a);
			for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
				if (d[e] === a) return !0;
			return !1
		}

		function e(a, d) {
			return c(a), b(a, d)
		}
		var f, g = function () {
			if (a.matches) return "matches";
			if (a.matchesSelector) return "matchesSelector";
			for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
				var e = b[c],
					f = e + "MatchesSelector";
				if (a[f]) return f
			}
		}();
		if (g) {
			var h = document.createElement("div"),
				i = b(h, "div");
			f = i ? b : e
		} else f = d;
		"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
			return f
		}) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
	}(Element.prototype),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
			return b(a, c, d)
		}) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
	}(window, function (a, b, c) {
		var d = {};
		d.extend = function (a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}, d.modulo = function (a, b) {
			return (a % b + b) % b
		};
		var e = Object.prototype.toString;
		d.isArray = function (a) {
			return "[object Array]" == e.call(a)
		}, d.makeArray = function (a) {
			var b = [];
			if (d.isArray(a)) b = a;
			else if (a && "number" == typeof a.length)
				for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
			else b.push(a);
			return b
		}, d.indexOf = Array.prototype.indexOf ? function (a, b) {
			return a.indexOf(b)
		} : function (a, b) {
			for (var c = 0, d = a.length; d > c; c++)
				if (a[c] === b) return c;
			return -1
		}, d.removeFrom = function (a, b) {
			var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
		}, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
			return a instanceof HTMLElement
		} : function (a) {
			return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
		}, d.setText = function () {
			function a(a, c) {
				b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
			}
			var b;
			return a
		}(), d.getParent = function (a, b) {
			for (; a != document.body;)
				if (a = a.parentNode, c(a, b)) return a
		}, d.getQueryElement = function (a) {
			return "string" == typeof a ? document.querySelector(a) : a
		}, d.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, d.filterFindElements = function (a, b) {
			a = d.makeArray(a);
			for (var e = [], f = 0, g = a.length; g > f; f++) {
				var h = a[f];
				if (d.isElement(h))
					if (b) {
						c(h, b) && e.push(h);
						for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
					} else e.push(h)
			}
			return e
		}, d.debounceMethod = function (a, b, c) {
			var d = a.prototype[b],
				e = b + "Timeout";
			a.prototype[b] = function () {
				var a = this[e];
				a && clearTimeout(a);
				var b = arguments,
					f = this;
				this[e] = setTimeout(function () {
					d.apply(f, b), delete f[e]
				}, c || 100)
			}
		}, d.toDashed = function (a) {
			return a.replace(/(.)([A-Z])/g, function (a, b, c) {
				return b + "-" + c
			}).toLowerCase()
		};
		var f = a.console;
		return d.htmlInit = function (c, e) {
			b(function () {
				for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
					var k, l = g[i],
						m = l.getAttribute(h);
					try {
						k = m && JSON.parse(m)
					} catch (n) {
						f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
						continue
					}
					var o = new c(l, k),
						p = a.jQuery;
					p && p.data(l, e, o)
				}
			})
		}, d
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
			return b(a, c, d, e, f)
		}) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
	}(window, function (a, b, c, d, e) {
		"use strict";

		function f(a) {
			for (var b in a) return !1;
			return b = null, !0
		}

		function g(a, b) {
			a && (this.element = a, this.layout = b, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}

		function h(a) {
			return a.replace(/([A-Z])/g, function (a) {
				return "-" + a.toLowerCase()
			})
		}
		var i = a.getComputedStyle,
			j = i ? function (a) {
				return i(a, null)
			} : function (a) {
				return a.currentStyle
			},
			k = d("transition"),
			l = d("transform"),
			m = k && l,
			n = !!d("perspective"),
			o = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "otransitionend",
				transition: "transitionend"
			} [k],
			p = ["transform", "transition", "transitionDuration", "transitionProperty"],
			q = function () {
				for (var a = {}, b = 0, c = p.length; c > b; b++) {
					var e = p[b],
						f = d(e);
					f && f !== e && (a[e] = f)
				}
				return a
			}();
		e.extend(g.prototype, b.prototype), g.prototype._create = function () {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, g.prototype.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, g.prototype.getSize = function () {
			this.size = c(this.element)
		}, g.prototype.css = function (a) {
			var b = this.element.style;
			for (var c in a) {
				var d = q[c] || c;
				b[d] = a[c]
			}
		}, g.prototype.getPosition = function () {
			var a = j(this.element),
				b = this.layout.options,
				c = b.isOriginLeft,
				d = b.isOriginTop,
				e = a[c ? "left" : "right"],
				f = a[d ? "top" : "bottom"],
				g = this.layout.size,
				h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
				i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
			h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
		}, g.prototype.layoutPosition = function () {
			var a = this.layout.size,
				b = this.layout.options,
				c = {},
				d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
				e = b.isOriginLeft ? "left" : "right",
				f = b.isOriginLeft ? "right" : "left",
				g = this.position.x + a[d];
			c[e] = this.getXValue(g), c[f] = "";
			var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
				i = b.isOriginTop ? "top" : "bottom",
				j = b.isOriginTop ? "bottom" : "top",
				k = this.position.y + a[h];
			c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
		}, g.prototype.getXValue = function (a) {
			var b = this.layout.options;
			return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
		}, g.prototype.getYValue = function (a) {
			var b = this.layout.options;
			return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
		}, g.prototype._transitionTo = function (a, b) {
			this.getPosition();
			var c = this.position.x,
				d = this.position.y,
				e = parseInt(a, 10),
				f = parseInt(b, 10),
				g = e === this.position.x && f === this.position.y;
			if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
			var h = a - c,
				i = b - d,
				j = {};
			j.transform = this.getTranslate(h, i), this.transition({
				to: j,
				onTransitionEnd: {
					transform: this.layoutPosition
				},
				isCleaning: !0
			})
		}, g.prototype.getTranslate = function (a, b) {
			var c = this.layout.options;
			return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
		}, g.prototype.goTo = function (a, b) {
			this.setPosition(a, b), this.layoutPosition()
		}, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
			this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
		}, g.prototype._nonTransition = function (a) {
			this.css(a.to), a.isCleaning && this._removeStyles(a.to);
			for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
		}, g.prototype._transition = function (a) {
			if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
			var b = this._transn;
			for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
			for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
			if (a.from) {
				this.css(a.from);
				var d = this.element.offsetHeight;
				d = null
			}
			this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
		};
		var r = "opacity," + h(q.transform || "transform");
		g.prototype.enableTransition = function () {
			this.isTransitioning || (this.css({
				transitionProperty: r,
				transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(o, this, !1))
		}, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
			this.ontransitionend(a)
		}, g.prototype.onotransitionend = function (a) {
			this.ontransitionend(a)
		};
		var s = {
			"-webkit-transform": "transform",
			"-moz-transform": "transform",
			"-o-transform": "transform"
		};
		g.prototype.ontransitionend = function (a) {
			if (a.target === this.element) {
				var b = this._transn,
					c = s[a.propertyName] || a.propertyName;
				if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
					var d = b.onEnd[c];
					d.call(this), delete b.onEnd[c]
				}
				this.emitEvent("transitionEnd", [this])
			}
		}, g.prototype.disableTransition = function () {
			this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
		}, g.prototype._removeStyles = function (a) {
			var b = {};
			for (var c in a) b[c] = "";
			this.css(b)
		};
		var t = {
			transitionProperty: "",
			transitionDuration: ""
		};
		return g.prototype.removeTransitionStyles = function () {
			this.css(t)
		}, g.prototype.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.css({
				display: ""
			}), this.emitEvent("remove", [this])
		}, g.prototype.remove = function () {
			if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
			var a = this;
			this.once("transitionEnd", function () {
				a.removeElem()
			}), this.hide()
		}, g.prototype.reveal = function () {
			delete this.isHidden, this.css({
				display: ""
			});
			var a = this.layout.options,
				b = {},
				c = this.getHideRevealTransitionEndProperty("visibleStyle");
			b[c] = this.onRevealTransitionEnd, this.transition({
				from: a.hiddenStyle,
				to: a.visibleStyle,
				isCleaning: !0,
				onTransitionEnd: b
			})
		}, g.prototype.onRevealTransitionEnd = function () {
			this.isHidden || this.emitEvent("reveal")
		}, g.prototype.getHideRevealTransitionEndProperty = function (a) {
			var b = this.layout.options[a];
			if (b.opacity) return "opacity";
			for (var c in b) return c
		}, g.prototype.hide = function () {
			this.isHidden = !0, this.css({
				display: ""
			});
			var a = this.layout.options,
				b = {},
				c = this.getHideRevealTransitionEndProperty("hiddenStyle");
			b[c] = this.onHideTransitionEnd, this.transition({
				from: a.visibleStyle,
				to: a.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: b
			})
		}, g.prototype.onHideTransitionEnd = function () {
			this.isHidden && (this.css({
				display: "none"
			}), this.emitEvent("hide"))
		}, g.prototype.destroy = function () {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, g
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
			return b(a, c, d, e, f, g)
		}) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
	}(window, function (a, b, c, d, e, f) {
		"use strict";

		function g(a, b) {
			var c = e.getQueryElement(a);
			if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
			this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
			var d = ++k;
			this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
		}
		var h = a.console,
			i = a.jQuery,
			j = function () {},
			k = 0,
			l = {};
		return g.namespace = "outlayer", g.Item = f, g.defaults = {
			containerStyle: {
				position: "relative"
			},
			isInitLayout: !0,
			isOriginLeft: !0,
			isOriginTop: !0,
			isResizeBound: !0,
			isResizingContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		}, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
			e.extend(this.options, a)
		}, g.prototype._create = function () {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
		}, g.prototype.reloadItems = function () {
			this.items = this._itemize(this.element.children)
		}, g.prototype._itemize = function (a) {
			for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
				var g = b[e],
					h = new c(g, this);
				d.push(h)
			}
			return d
		}, g.prototype._filterFindItemElements = function (a) {
			return e.filterFindElements(a, this.options.itemSelector)
		}, g.prototype.getItemElements = function () {
			for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
			return a
		}, g.prototype.layout = function () {
			this._resetLayout(), this._manageStamps();
			var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			this.layoutItems(this.items, a), this._isLayoutInited = !0
		}, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
			this.getSize()
		}, g.prototype.getSize = function () {
			this.size = d(this.element)
		}, g.prototype._getMeasurement = function (a, b) {
			var c, f = this.options[a];
			f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
		}, g.prototype.layoutItems = function (a, b) {
			a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
		}, g.prototype._getItemsForLayout = function (a) {
			for (var b = [], c = 0, d = a.length; d > c; c++) {
				var e = a[c];
				e.isIgnored || b.push(e)
			}
			return b
		}, g.prototype._layoutItems = function (a, b) {
			if (this._emitCompleteOnItems("layout", a), a && a.length) {
				for (var c = [], d = 0, e = a.length; e > d; d++) {
					var f = a[d],
						g = this._getItemLayoutPosition(f);
					g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
				}
				this._processLayoutQueue(c)
			}
		}, g.prototype._getItemLayoutPosition = function () {
			return {
				x: 0,
				y: 0
			}
		}, g.prototype._processLayoutQueue = function (a) {
			for (var b = 0, c = a.length; c > b; b++) {
				var d = a[b];
				this._positionItem(d.item, d.x, d.y, d.isInstant)
			}
		}, g.prototype._positionItem = function (a, b, c, d) {
			d ? a.goTo(b, c) : a.moveTo(b, c)
		}, g.prototype._postLayout = function () {
			this.resizeContainer()
		}, g.prototype.resizeContainer = function () {
			if (this.options.isResizingContainer) {
				var a = this._getContainerSize();
				a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
			}
		}, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
			if (void 0 !== a) {
				var c = this.size;
				c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
			}
		}, g.prototype._emitCompleteOnItems = function (a, b) {
			function c() {
				e.dispatchEvent(a + "Complete", null, [b])
			}

			function d() {
				g++, g === f && c()
			}
			var e = this,
				f = b.length;
			if (!b || !f) return void c();
			for (var g = 0, h = 0, i = b.length; i > h; h++) {
				var j = b[h];
				j.once(a, d)
			}
		}, g.prototype.dispatchEvent = function (a, b, c) {
			var d = b ? [b].concat(c) : c;
			if (this.emitEvent(a, d), i)
				if (this.$element = this.$element || i(this.element), b) {
					var e = i.Event(b);
					e.type = a, this.$element.trigger(e, c)
				} else this.$element.trigger(a, c)
		}, g.prototype.ignore = function (a) {
			var b = this.getItem(a);
			b && (b.isIgnored = !0)
		}, g.prototype.unignore = function (a) {
			var b = this.getItem(a);
			b && delete b.isIgnored
		}, g.prototype.stamp = function (a) {
			if (a = this._find(a)) {
				this.stamps = this.stamps.concat(a);
				for (var b = 0, c = a.length; c > b; b++) {
					var d = a[b];
					this.ignore(d)
				}
			}
		}, g.prototype.unstamp = function (a) {
			if (a = this._find(a))
				for (var b = 0, c = a.length; c > b; b++) {
					var d = a[b];
					e.removeFrom(this.stamps, d), this.unignore(d)
				}
		}, g.prototype._find = function (a) {
			return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
		}, g.prototype._manageStamps = function () {
			if (this.stamps && this.stamps.length) {
				this._getBoundingRect();
				for (var a = 0, b = this.stamps.length; b > a; a++) {
					var c = this.stamps[a];
					this._manageStamp(c)
				}
			}
		}, g.prototype._getBoundingRect = function () {
			var a = this.element.getBoundingClientRect(),
				b = this.size;
			this._boundingRect = {
				left: a.left + b.paddingLeft + b.borderLeftWidth,
				top: a.top + b.paddingTop + b.borderTopWidth,
				right: a.right - (b.paddingRight + b.borderRightWidth),
				bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
			}
		}, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
			var b = a.getBoundingClientRect(),
				c = this._boundingRect,
				e = d(a),
				f = {
					left: b.left - c.left - e.marginLeft,
					top: b.top - c.top - e.marginTop,
					right: c.right - b.right - e.marginRight,
					bottom: c.bottom - b.bottom - e.marginBottom
				};
			return f
		}, g.prototype.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, g.prototype.bindResize = function () {
			this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
		}, g.prototype.unbindResize = function () {
			this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
		}, g.prototype.onresize = function () {
			function a() {
				b.resize(), delete b.resizeTimeout
			}
			this.resizeTimeout && clearTimeout(this.resizeTimeout);
			var b = this;
			this.resizeTimeout = setTimeout(a, 100)
		}, g.prototype.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, g.prototype.needsResizeLayout = function () {
			var a = d(this.element),
				b = this.size && a;
			return b && a.innerWidth !== this.size.innerWidth
		}, g.prototype.addItems = function (a) {
			var b = this._itemize(a);
			return b.length && (this.items = this.items.concat(b)), b
		}, g.prototype.appended = function (a) {
			var b = this.addItems(a);
			b.length && (this.layoutItems(b, !0), this.reveal(b))
		}, g.prototype.prepended = function (a) {
			var b = this._itemize(a);
			if (b.length) {
				var c = this.items.slice(0);
				this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
			}
		}, g.prototype.reveal = function (a) {
			this._emitCompleteOnItems("reveal", a);
			for (var b = a && a.length, c = 0; b && b > c; c++) {
				var d = a[c];
				d.reveal()
			}
		}, g.prototype.hide = function (a) {
			this._emitCompleteOnItems("hide", a);
			for (var b = a && a.length, c = 0; b && b > c; c++) {
				var d = a[c];
				d.hide()
			}
		}, g.prototype.revealItemElements = function (a) {
			var b = this.getItems(a);
			this.reveal(b)
		}, g.prototype.hideItemElements = function (a) {
			var b = this.getItems(a);
			this.hide(b)
		}, g.prototype.getItem = function (a) {
			for (var b = 0, c = this.items.length; c > b; b++) {
				var d = this.items[b];
				if (d.element === a) return d
			}
		}, g.prototype.getItems = function (a) {
			a = e.makeArray(a);
			for (var b = [], c = 0, d = a.length; d > c; c++) {
				var f = a[c],
					g = this.getItem(f);
				g && b.push(g)
			}
			return b
		}, g.prototype.remove = function (a) {
			var b = this.getItems(a);
			if (this._emitCompleteOnItems("remove", b), b && b.length)
				for (var c = 0, d = b.length; d > c; c++) {
					var f = b[c];
					f.remove(), e.removeFrom(this.items, f)
				}
		}, g.prototype.destroy = function () {
			var a = this.element.style;
			a.height = "", a.position = "", a.width = "";
			for (var b = 0, c = this.items.length; c > b; b++) {
				var d = this.items[b];
				d.destroy()
			}
			this.unbindResize();
			var e = this.element.outlayerGUID;
			delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
		}, g.data = function (a) {
			a = e.getQueryElement(a);
			var b = a && a.outlayerGUID;
			return b && l[b]
		}, g.create = function (a, b) {
			function c() {
				g.apply(this, arguments)
			}
			return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
				f.apply(this, arguments)
			}, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
		}, g.Item = f, g
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
	}(window, function (a) {
		"use strict";

		function b() {
			a.Item.apply(this, arguments)
		}
		b.prototype = new a.Item, b.prototype._create = function () {
			this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
		}, b.prototype.updateSortData = function () {
			if (!this.isIgnored) {
				this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
				var a = this.layout.options.getSortData,
					b = this.layout._sorters;
				for (var c in a) {
					var d = b[c];
					this.sortData[c] = d(this.element, this)
				}
			}
		};
		var c = b.prototype.destroy;
		return b.prototype.destroy = function () {
			c.apply(this, arguments), this.css({
				display: ""
			})
		}, b
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
	}(window, function (a, b) {
		"use strict";

		function c(a) {
			this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
		}
		return function () {
			function a(a) {
				return function () {
					return b.prototype[a].apply(this.isotope, arguments)
				}
			}
			for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
				var g = d[e];
				c.prototype[g] = a(g)
			}
		}(), c.prototype.needsVerticalResizeLayout = function () {
			var b = a(this.isotope.element),
				c = this.isotope.size && b;
			return c && b.innerHeight != this.isotope.size.innerHeight
		}, c.prototype._getMeasurement = function () {
			this.isotope._getMeasurement.apply(this, arguments)
		}, c.prototype.getColumnWidth = function () {
			this.getSegmentSize("column", "Width")
		}, c.prototype.getRowHeight = function () {
			this.getSegmentSize("row", "Height")
		}, c.prototype.getSegmentSize = function (a, b) {
			var c = a + b,
				d = "outer" + b;
			if (this._getMeasurement(c, d), !this[c]) {
				var e = this.getFirstItemSize();
				this[c] = e && e[d] || this.isotope.size["inner" + b]
			}
		}, c.prototype.getFirstItemSize = function () {
			var b = this.isotope.filteredItems[0];
			return b && b.element && a(b.element)
		}, c.prototype.layout = function () {
			this.isotope.layout.apply(this.isotope, arguments)
		}, c.prototype.getSize = function () {
			this.isotope.getSize(), this.size = this.isotope.size
		}, c.modes = {}, c.create = function (a, b) {
			function d() {
				c.apply(this, arguments)
			}
			return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
		}, c
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
	}(window, function (a, b, c) {
		var d = a.create("masonry");
		return d.prototype._resetLayout = function () {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
			var a = this.cols;
			for (this.colYs = []; a--;) this.colYs.push(0);
			this.maxY = 0
		}, d.prototype.measureColumns = function () {
			if (this.getContainerWidth(), !this.columnWidth) {
				var a = this.items[0],
					c = a && a.element;
				this.columnWidth = c && b(c).outerWidth || this.containerWidth
			}
			var d = this.columnWidth += this.gutter,
				e = this.containerWidth + this.gutter,
				f = e / d,
				g = d - e % d,
				h = g && 1 > g ? "round" : "floor";
			f = Math[h](f), this.cols = Math.max(f, 1)
		}, d.prototype.getContainerWidth = function () {
			var a = this.options.isFitWidth ? this.element.parentNode : this.element,
				c = b(a);
			this.containerWidth = c && c.innerWidth
		}, d.prototype._getItemLayoutPosition = function (a) {
			a.getSize();
			var b = a.size.outerWidth % this.columnWidth,
				d = b && 1 > b ? "round" : "ceil",
				e = Math[d](a.size.outerWidth / this.columnWidth);
			e = Math.min(e, this.cols);
			for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
					x: this.columnWidth * h,
					y: g
				}, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
			return i
		}, d.prototype._getColGroup = function (a) {
			if (2 > a) return this.colYs;
			for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
				var e = this.colYs.slice(d, d + a);
				b[d] = Math.max.apply(Math, e)
			}
			return b
		}, d.prototype._manageStamp = function (a) {
			var c = b(a),
				d = this._getElementOffset(a),
				e = this.options.isOriginLeft ? d.left : d.right,
				f = e + c.outerWidth,
				g = Math.floor(e / this.columnWidth);
			g = Math.max(0, g);
			var h = Math.floor(f / this.columnWidth);
			h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
			for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
		}, d.prototype._getContainerSize = function () {
			this.maxY = Math.max.apply(Math, this.colYs);
			var a = {
				height: this.maxY
			};
			return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
		}, d.prototype._getContainerFitWidth = function () {
			for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
			return (this.cols - a) * this.columnWidth - this.gutter
		}, d.prototype.needsResizeLayout = function () {
			var a = this.containerWidth;
			return this.getContainerWidth(), a !== this.containerWidth
		}, d
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
	}(window, function (a, b) {
		"use strict";

		function c(a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}
		var d = a.create("masonry"),
			e = d.prototype._getElementOffset,
			f = d.prototype.layout,
			g = d.prototype._getMeasurement;
		c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
		var h = d.prototype.measureColumns;
		d.prototype.measureColumns = function () {
			this.items = this.isotope.filteredItems, h.call(this)
		};
		var i = d.prototype._manageStamp;
		return d.prototype._manageStamp = function () {
			this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
		}, d
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
	}(window, function (a) {
		"use strict";
		var b = a.create("fitRows");
		return b.prototype._resetLayout = function () {
			this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
		}, b.prototype._getItemLayoutPosition = function (a) {
			a.getSize();
			var b = a.size.outerWidth + this.gutter,
				c = this.isotope.size.innerWidth + this.gutter;
			0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
			var d = {
				x: this.x,
				y: this.y
			};
			return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
		}, b.prototype._getContainerSize = function () {
			return {
				height: this.maxY
			}
		}, b
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
	}(window, function (a) {
		"use strict";
		var b = a.create("vertical", {
			horizontalAlignment: 0
		});
		return b.prototype._resetLayout = function () {
			this.y = 0
		}, b.prototype._getItemLayoutPosition = function (a) {
			a.getSize();
			var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
				c = this.y;
			return this.y += a.size.outerHeight, {
				x: b,
				y: c
			}
		}, b.prototype._getContainerSize = function () {
			return {
				height: this.y
			}
		}, b
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
			return b(a, c, d, e, f, g, h)
		}) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
	}(window, function (a, b, c, d, e, f, g) {
		function h(a, b) {
			return function (c, d) {
				for (var e = 0, f = a.length; f > e; e++) {
					var g = a[e],
						h = c.sortData[g],
						i = d.sortData[g];
					if (h > i || i > h) {
						var j = void 0 !== b[g] ? b[g] : b,
							k = j ? 1 : -1;
						return (h > i ? 1 : -1) * k
					}
				}
				return 0
			}
		}
		var i = a.jQuery,
			j = String.prototype.trim ? function (a) {
				return a.trim()
			} : function (a) {
				return a.replace(/^\s+|\s+$/g, "")
			},
			k = document.documentElement,
			l = k.textContent ? function (a) {
				return a.textContent
			} : function (a) {
				return a.innerText
			},
			m = b.create("isotope", {
				layoutMode: "masonry",
				isJQueryFiltering: !0,
				sortAscending: !0
			});
		m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
			this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
			for (var a in g.modes) this._initLayoutMode(a)
		}, m.prototype.reloadItems = function () {
			this.itemGUID = 0, b.prototype.reloadItems.call(this)
		}, m.prototype._itemize = function () {
			for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
				var e = a[c];
				e.id = this.itemGUID++
			}
			return this._updateItemsSortData(a), a
		}, m.prototype._initLayoutMode = function (a) {
			var b = g.modes[a],
				c = this.options[a] || {};
			this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
		}, m.prototype.layout = function () {
			return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
		}, m.prototype._layout = function () {
			var a = this._getIsInstant();
			this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
		}, m.prototype.arrange = function (a) {
			function b() {
				d.reveal(c.needReveal), d.hide(c.needHide)
			}
			this.option(a), this._getIsInstant();
			var c = this._filter(this.items);
			this.filteredItems = c.matches;
			var d = this;
			this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
		}, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
			var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			return this._isInstant = a, a
		}, m.prototype._bindArrangeComplete = function () {
			function a() {
				b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
			}
			var b, c, d, e = this;
			this.once("layoutComplete", function () {
				b = !0, a()
			}), this.once("hideComplete", function () {
				c = !0, a()
			}), this.once("revealComplete", function () {
				d = !0, a()
			})
		}, m.prototype._filter = function (a) {
			var b = this.options.filter;
			b = b || "*";
			for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
				var i = a[g];
				if (!i.isIgnored) {
					var j = f(i);
					j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
				}
			}
			return {
				matches: c,
				needReveal: d,
				needHide: e
			}
		}, m.prototype._getFilterTest = function (a) {
			return i && this.options.isJQueryFiltering ? function (b) {
				return i(b.element).is(a)
			} : "function" == typeof a ? function (b) {
				return a(b.element)
			} : function (b) {
				return d(b.element, a)
			}
		}, m.prototype.updateSortData = function (a) {
			var b;
			a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
		}, m.prototype._getSorters = function () {
			var a = this.options.getSortData;
			for (var b in a) {
				var c = a[b];
				this._sorters[b] = n(c)
			}
		}, m.prototype._updateItemsSortData = function (a) {
			for (var b = a && a.length, c = 0; b && b > c; c++) {
				var d = a[c];
				d.updateSortData()
			}
		};
		var n = function () {
			function a(a) {
				if ("string" != typeof a) return a;
				var c = j(a).split(" "),
					d = c[0],
					e = d.match(/^\[(.+)\]$/),
					f = e && e[1],
					g = b(f, d),
					h = m.sortDataParsers[c[1]];
				return a = h ? function (a) {
					return a && h(g(a))
				} : function (a) {
					return a && g(a)
				}
			}

			function b(a, b) {
				var c;
				return c = a ? function (b) {
					return b.getAttribute(a)
				} : function (a) {
					var c = a.querySelector(b);
					return c && l(c)
				}
			}
			return a
		}();
		m.sortDataParsers = {
			parseInt: function (a) {
				return parseInt(a, 10)
			},
			parseFloat: function (a) {
				return parseFloat(a)
			}
		}, m.prototype._sort = function () {
			var a = this.options.sortBy;
			if (a) {
				var b = [].concat.apply(a, this.sortHistory),
					c = h(b, this.options.sortAscending);
				this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
			}
		}, m.prototype._mode = function () {
			var a = this.options.layoutMode,
				b = this.modes[a];
			if (!b) throw new Error("No layout mode: " + a);
			return b.options = this.options[a], b
		}, m.prototype._resetLayout = function () {
			b.prototype._resetLayout.call(this), this._mode()._resetLayout()
		}, m.prototype._getItemLayoutPosition = function (a) {
			return this._mode()._getItemLayoutPosition(a)
		}, m.prototype._manageStamp = function (a) {
			this._mode()._manageStamp(a)
		}, m.prototype._getContainerSize = function () {
			return this._mode()._getContainerSize()
		}, m.prototype.needsResizeLayout = function () {
			return this._mode().needsResizeLayout()
		}, m.prototype.appended = function (a) {
			var b = this.addItems(a);
			if (b.length) {
				var c = this._filterRevealAdded(b);
				this.filteredItems = this.filteredItems.concat(c)
			}
		}, m.prototype.prepended = function (a) {
			var b = this._itemize(a);
			if (b.length) {
				this._resetLayout(), this._manageStamps();
				var c = this._filterRevealAdded(b);
				this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
			}
		}, m.prototype._filterRevealAdded = function (a) {
			var b = this._filter(a);
			return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
		}, m.prototype.insert = function (a) {
			var b = this.addItems(a);
			if (b.length) {
				var c, d, e = b.length;
				for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
				var f = this._filter(b).matches;
				for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
				for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
				this.reveal(f)
			}
		};
		var o = m.prototype.remove;
		return m.prototype.remove = function (a) {
			a = e.makeArray(a);
			var b = this.getItems(a);
			o.call(this, a);
			var c = b && b.length;
			if (c)
				for (var d = 0; c > d; d++) {
					var f = b[d];
					e.removeFrom(this.filteredItems, f)
				}
		}, m.prototype.shuffle = function () {
			for (var a = 0, b = this.items.length; b > a; a++) {
				var c = this.items[a];
				c.sortData.random = Math.random()
			}
			this.options.sortBy = "random", this._sort(), this._layout()
		}, m.prototype._noTransition = function (a) {
			var b = this.options.transitionDuration;
			this.options.transitionDuration = 0;
			var c = a.call(this);
			return this.options.transitionDuration = b, c
		}, m.prototype.getFilteredItemElements = function () {
			for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
			return a
		}, m
	});

(function () {
	function e() {}

	function t(e, t) {
		for (var n = e.length; n--;)
			if (e[n].listener === t) return n;
		return -1
	}

	function n(e) {
		return function () {
			return this[e].apply(this, arguments)
		}
	}
	var i = e.prototype,
		r = this,
		o = r.EventEmitter;
	i.getListeners = function (e) {
		var t, n, i = this._getEvents();
		if ("object" == typeof e) {
			t = {};
			for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
		} else t = i[e] || (i[e] = []);
		return t
	}, i.flattenListeners = function (e) {
		var t, n = [];
		for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
		return n
	}, i.getListenersAsObject = function (e) {
		var t, n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n), t || n
	}, i.addListener = function (e, n) {
		var i, r = this.getListenersAsObject(e),
			o = "object" == typeof n;
		for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
			listener: n,
			once: !1
		});
		return this
	}, i.on = n("addListener"), i.addOnceListener = function (e, t) {
		return this.addListener(e, {
			listener: t,
			once: !0
		})
	}, i.once = n("addOnceListener"), i.defineEvent = function (e) {
		return this.getListeners(e), this
	}, i.defineEvents = function (e) {
		for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
		return this
	}, i.removeListener = function (e, n) {
		var i, r, o = this.getListenersAsObject(e);
		for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
		return this
	}, i.off = n("removeListener"), i.addListeners = function (e, t) {
		return this.manipulateListeners(!1, e, t)
	}, i.removeListeners = function (e, t) {
		return this.manipulateListeners(!0, e, t)
	}, i.manipulateListeners = function (e, t, n) {
		var i, r, o = e ? this.removeListener : this.addListener,
			s = e ? this.removeListeners : this.addListeners;
		if ("object" != typeof t || t instanceof RegExp)
			for (i = n.length; i--;) o.call(this, t, n[i]);
		else
			for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
		return this
	}, i.removeEvent = function (e) {
		var t, n = typeof e,
			i = this._getEvents();
		if ("string" === n) delete i[e];
		else if ("object" === n)
			for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
		else delete this._events;
		return this
	}, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
		var n, i, r, o, s = this.getListenersAsObject(e);
		for (r in s)
			if (s.hasOwnProperty(r))
				for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
		return this
	}, i.trigger = n("emitEvent"), i.emit = function (e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	}, i.setOnceReturnValue = function (e) {
		return this._onceReturnValue = e, this
	}, i._getOnceReturnValue = function () {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, i._getEvents = function () {
		return this._events || (this._events = {})
	}, e.noConflict = function () {
		return r.EventEmitter = o, e
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
		return e
	}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
	function (e) {
		function t(t) {
			var n = e.event;
			return n.target = n.target || n.srcElement || t, n
		}
		var n = document.documentElement,
			i = function () {};
		n.addEventListener ? i = function (e, t, n) {
			e.addEventListener(t, n, !1)
		} : n.attachEvent && (i = function (e, n, i) {
			e[n + i] = i.handleEvent ? function () {
				var n = t(e);
				i.handleEvent.call(i, n)
			} : function () {
				var n = t(e);
				i.call(e, n)
			}, e.attachEvent("on" + n, e[n + i])
		});
		var r = function () {};
		n.removeEventListener ? r = function (e, t, n) {
			e.removeEventListener(t, n, !1)
		} : n.detachEvent && (r = function (e, t, n) {
			e.detachEvent("on" + t, e[t + n]);
			try {
				delete e[t + n]
			} catch (i) {
				e[t + n] = void 0
			}
		});
		var o = {
			bind: i,
			unbind: r
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
	}(this),
	function (e, t) {
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
			return t(e, n, i)
		}) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
	}(window, function (e, t, n) {
		function i(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function r(e) {
			return "[object Array]" === d.call(e)
		}

		function o(e) {
			var t = [];
			if (r(e)) t = e;
			else if ("number" == typeof e.length)
				for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
			else t.push(e);
			return t
		}

		function s(e, t, n) {
			if (!(this instanceof s)) return new s(e, t);
			"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
			var r = this;
			setTimeout(function () {
				r.check()
			})
		}

		function f(e) {
			this.img = e
		}

		function c(e) {
			this.src = e, v[e] = this
		}
		var a = e.jQuery,
			u = e.console,
			h = u !== void 0,
			d = Object.prototype.toString;
		s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () {
			this.images = [];
			for (var e = 0, t = this.elements.length; t > e; e++) {
				var n = this.elements[e];
				"IMG" === n.nodeName && this.addImage(n);
				var i = n.nodeType;
				if (i && (1 === i || 9 === i || 11 === i))
					for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
						var f = r[o];
						this.addImage(f)
					}
			}
		}, s.prototype.addImage = function (e) {
			var t = new f(e);
			this.images.push(t)
		}, s.prototype.check = function () {
			function e(e, r) {
				return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
			}
			var t = this,
				n = 0,
				i = this.images.length;
			if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
			for (var r = 0; i > r; r++) {
				var o = this.images[r];
				o.on("confirm", e), o.check()
			}
		}, s.prototype.progress = function (e) {
			this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
			var t = this;
			setTimeout(function () {
				t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
			})
		}, s.prototype.complete = function () {
			var e = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var t = this;
			setTimeout(function () {
				if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
					var n = t.hasAnyBroken ? "reject" : "resolve";
					t.jqDeferred[n](t)
				}
			})
		}, a && (a.fn.imagesLoaded = function (e, t) {
			var n = new s(this, e, t);
			return n.jqDeferred.promise(a(this))
		}), f.prototype = new t, f.prototype.check = function () {
			var e = v[this.img.src] || new c(this.img.src);
			if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
			if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
			var t = this;
			e.on("confirm", function (e, n) {
				return t.confirm(e.isLoaded, n), !0
			}), e.check()
		}, f.prototype.confirm = function (e, t) {
			this.isLoaded = e, this.emit("confirm", this, t)
		};
		var v = {};
		return c.prototype = new t, c.prototype.check = function () {
			if (!this.isChecked) {
				var e = new Image;
				n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
			}
		}, c.prototype.handleEvent = function (e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, c.prototype.onload = function (e) {
			this.confirm(!0, "onload"), this.unbindProxyEvents(e)
		}, c.prototype.onerror = function (e) {
			this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
		}, c.prototype.confirm = function (e, t) {
			this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
		}, c.prototype.unbindProxyEvents = function (e) {
			n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
		}, s
	});
/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
! function (a, b, c, d) {
	"use strict";

	function e(b, d) {
		if (this.el = b, this.$el = a(b), this.s = a.extend({}, f, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
		return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in c.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
	}
	var f = {
		mode: "lg-slide",
		cssEasing: "ease",
		easing: "linear",
		speed: 600,
		height: "100%",
		width: "100%",
		addClass: "",
		startClass: "lg-start-zoom",
		backdropDuration: 150,
		hideBarsDelay: 6e3,
		useLeft: !1,
		closable: !0,
		loop: !0,
		escKey: !0,
		keyPress: !0,
		controls: !0,
		slideEndAnimatoin: !0,
		hideControlOnEnd: !1,
		mousewheel: !0,
		getCaptionFromTitleOrAlt: !0,
		appendSubHtmlTo: ".lg-sub-html",
		subHtmlSelectorRelative: !1,
		preload: 1,
		showAfterLoad: !0,
		selector: "",
		selectWithin: "",
		nextHtml: "",
		prevHtml: "",
		index: !1,
		iframeMaxWidth: "100%",
		download: !0,
		counter: !0,
		appendCounterTo: ".lg-toolbar",
		swipeThreshold: 50,
		enableSwipe: !0,
		enableDrag: !0,
		dynamic: !1,
		dynamicEl: [],
		galleryId: 1
	};
	e.prototype.init = function () {
		var c = this;
		c.s.preload > c.$items.length && (c.s.preload = c.$items.length);
		var d = b.location.hash;
		d.indexOf("lg=" + this.s.galleryId) > 0 && (c.index = parseInt(d.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function () {
			c.build(c.index)
		}), a("body").addClass("lg-on"))), c.s.dynamic ? (c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function () {
			c.build(c.index), a("body").addClass("lg-on")
		})) : c.$items.on("click.lgcustom", function (b) {
			try {
				b.preventDefault(), b.preventDefault()
			} catch (a) {
				b.returnValue = !1
			}
			c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || c.$items.index(this), a("body").hasClass("lg-on") || (c.build(c.index), a("body").addClass("lg-on"))
		})
	}, e.prototype.build = function (b) {
		var c = this;
		c.structure(), a.each(a.fn.lightGallery.modules, function (b) {
			c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
		}), c.slide(b, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 && (c.arrow(), setTimeout(function () {
			c.enableDrag(), c.enableSwipe()
		}, 50), c.s.mousewheel && c.mousewheel()), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
			c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function () {
				c.$outer.addClass("lg-hide-items")
			}, c.s.hideBarsDelay)
		})
	}, e.prototype.structure = function () {
		var c, d = "",
			e = "",
			f = 0,
			g = "",
			h = this;
		for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), f = 0; f < this.$items.length; f++) d += '<div class="lg-item"></div>';
		if (this.s.controls && this.$items.length > 1 && (e = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (g = '<div class="lg-sub-html"></div>'), c = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + d + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + e + g + "</div></div>", a("body").append(c), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), h.setTop(), a(b).on("resize.lg orientationchange.lg", function () {
				setTimeout(function () {
					h.setTop()
				}, 100)
			}), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
			var i = this.$outer.find(".lg-inner");
			i.css("transition-timing-function", this.s.cssEasing), i.css("transition-duration", this.s.speed + "ms")
		}
		a(".lg-backdrop").addClass("in"), setTimeout(function () {
			h.$outer.addClass("lg-visible")
		}, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(b).scrollTop()
	}, e.prototype.setTop = function () {
		if ("100%" !== this.s.height) {
			var c = a(b).height(),
				d = (c - parseInt(this.s.height, 10)) / 2,
				e = this.$outer.find(".lg");
			c >= parseInt(this.s.height, 10) ? e.css("top", d + "px") : e.css("top", "0px")
		}
	}, e.prototype.doCss = function () {
		var a = function () {
			var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
				b = c.documentElement,
				d = 0;
			for (d = 0; d < a.length; d++)
				if (a[d] in b.style) return !0
		};
		return !!a()
	}, e.prototype.isVideo = function (a, b) {
		var c;
		if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a && c) return {
			html5: !0
		};
		var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
			e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
			f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
			g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
		return d ? {
			youtube: d
		} : e ? {
			vimeo: e
		} : f ? {
			dailymotion: f
		} : g ? {
			vk: g
		} : void 0
	}, e.prototype.counter = function () {
		this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
	}, e.prototype.addHtml = function (b) {
		var c, d, e = null;
		if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
			if ("undefined" != typeof e && null !== e) {
				var f = e.substring(0, 1);
				"." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
			} else e = "";
		".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
	}, e.prototype.preload = function (a) {
		var b = 1,
			c = 1;
		for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
		for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
	}, e.prototype.loadContent = function (c, d, e) {
		var f, g, h, i, j, k, l = this,
			m = !1,
			n = function (c) {
				for (var d = [], e = [], f = 0; f < c.length; f++) {
					var h = c[f].split(" ");
					"" === h[0] && h.splice(0, 1), e.push(h[0]), d.push(h[1])
				}
				for (var i = a(b).width(), j = 0; j < d.length; j++)
					if (parseInt(d[j], 10) > i) {
						g = e[j];
						break
					}
			};
		if (l.s.dynamic) {
			if (l.s.dynamicEl[c].poster && (m = !0, h = l.s.dynamicEl[c].poster), k = l.s.dynamicEl[c].html, g = l.s.dynamicEl[c].src, l.s.dynamicEl[c].responsive) {
				var o = l.s.dynamicEl[c].responsive.split(",");
				n(o)
			}
			i = l.s.dynamicEl[c].srcset, j = l.s.dynamicEl[c].sizes
		} else {
			if (l.$items.eq(c).attr("data-poster") && (m = !0, h = l.$items.eq(c).attr("data-poster")), k = l.$items.eq(c).attr("data-html"), g = l.$items.eq(c).attr("href") || l.$items.eq(c).attr("data-src"), l.$items.eq(c).attr("data-responsive")) {
				var p = l.$items.eq(c).attr("data-responsive").split(",");
				n(p)
			}
			i = l.$items.eq(c).attr("data-srcset"), j = l.$items.eq(c).attr("data-sizes")
		}
		var q = !1;
		l.s.dynamic ? l.s.dynamicEl[c].iframe && (q = !0) : "true" === l.$items.eq(c).attr("data-iframe") && (q = !0);
		var r = l.isVideo(g, c);
		if (!l.$slide.eq(c).hasClass("lg-loaded")) {
			if (q) l.$slide.eq(c).prepend('<div class="lg-video-cont" style="max-width:' + l.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + g + '"  allowfullscreen="true"></iframe></div></div>');
			else if (m) {
				var s = "";
				s = r && r.youtube ? "lg-has-youtube" : r && r.vimeo ? "lg-has-vimeo" : "lg-has-html5", l.$slide.eq(c).prepend('<div class="lg-video-cont ' + s + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + h + '" /></div></div>')
			} else r ? (l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.$el.trigger("hasVideo.lg", [c, g, k])) : l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + g + '" /></div>');
			if (l.$el.trigger("onAferAppendSlide.lg", [c]), f = l.$slide.eq(c).find(".lg-object"), j && f.attr("sizes", j), i) {
				f.attr("srcset", i);
				try {
					picturefill({
						elements: [f[0]]
					})
				} catch (a) {
					console.error("Make sure you have included Picturefill version 2")
				}
			}
			".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(c), l.$slide.eq(c).addClass("lg-loaded")
		}
		l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function () {
			var b = 0;
			e && !a("body").hasClass("lg-from-hash") && (b = e), setTimeout(function () {
				l.$slide.eq(c).addClass("lg-complete"), l.$el.trigger("onSlideItemLoad.lg", [c, e || 0])
			}, b)
		}), r && r.html5 && !m && l.$slide.eq(c).addClass("lg-complete"), d === !0 && (l.$slide.eq(c).hasClass("lg-complete") ? l.preload(c) : l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function () {
			l.preload(c)
		}))
	}, e.prototype.slide = function (b, c, d) {
		var e = this.$outer.find(".lg-current").index(),
			f = this;
		if (!f.lGalleryOn || e !== b) {
			var g = this.$slide.length,
				h = f.lGalleryOn ? this.s.speed : 0,
				i = !1,
				j = !1;
			if (!f.lgBusy) {
				if (this.s.download) {
					var k;
					k = f.s.dynamic ? f.s.dynamicEl[b].downloadUrl !== !1 && (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src) : "false" !== f.$items.eq(b).attr("data-download-url") && (f.$items.eq(b).attr("data-download-url") || f.$items.eq(b).attr("href") || f.$items.eq(b).attr("data-src")), k ? (a("#lg-download").attr("href", k), f.$outer.removeClass("lg-hide-download")) : f.$outer.addClass("lg-hide-download")
				}
				if (this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]), f.lgBusy = !0, clearTimeout(f.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
						f.addHtml(b)
					}, h), this.arrowDisable(b), c) {
					var l = b - 1,
						m = b + 1;
					0 === b && e === g - 1 ? (m = 0, l = g - 1) : b === g - 1 && 0 === e && (m = 0, l = g - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), f.$slide.eq(l).addClass("lg-prev-slide"), f.$slide.eq(m).addClass("lg-next-slide"), f.$slide.eq(b).addClass("lg-current")
				} else f.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), b < e ? (j = !0, 0 !== b || e !== g - 1 || d || (j = !1, i = !0)) : b > e && (i = !0, b !== g - 1 || 0 !== e || d || (j = !0, i = !1)), j ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")) : i && (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(e).addClass("lg-prev-slide")), setTimeout(function () {
					f.$slide.removeClass("lg-current"), f.$slide.eq(b).addClass("lg-current"), f.$outer.removeClass("lg-no-trans")
				}, 50);
				f.lGalleryOn ? (setTimeout(function () {
					f.loadContent(b, !0, 0)
				}, this.s.speed + 50), setTimeout(function () {
					f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])
				}, this.s.speed)) : (f.loadContent(b, !0, f.s.backdropDuration), f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])), f.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
			}
		}
	}, e.prototype.goToNextSlide = function (a) {
		var b = this;
		b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-right-end"), setTimeout(function () {
			b.$outer.removeClass("lg-right-end")
		}, 400)))
	}, e.prototype.goToPrevSlide = function (a) {
		var b = this;
		b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-left-end"), setTimeout(function () {
			b.$outer.removeClass("lg-left-end")
		}, 400)))
	}, e.prototype.keyPress = function () {
		var c = this;
		this.$items.length > 1 && a(b).on("keyup.lg", function (a) {
			c.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), c.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), c.goToNextSlide()))
		}), a(b).on("keydown.lg", function (a) {
			c.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), c.$outer.hasClass("lg-thumb-open") ? c.$outer.removeClass("lg-thumb-open") : c.destroy())
		})
	}, e.prototype.arrow = function () {
		var a = this;
		this.$outer.find(".lg-prev").on("click.lg", function () {
			a.goToPrevSlide()
		}), this.$outer.find(".lg-next").on("click.lg", function () {
			a.goToNextSlide()
		})
	}, e.prototype.arrowDisable = function (a) {
		!this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
	}, e.prototype.setTranslate = function (a, b, c) {
		this.s.useLeft ? a.css("left", b) : a.css({
			transform: "translate3d(" + b + "px, " + c + "px, 0px)"
		})
	}, e.prototype.touchMove = function (b, c) {
		var d = c - b;
		Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
	}, e.prototype.touchEnd = function (a) {
		var b = this;
		"lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
			b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
		}), setTimeout(function () {
			b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
		}, b.s.speed + 100)
	}, e.prototype.enableSwipe = function () {
		var a = this,
			b = 0,
			c = 0,
			d = !1;
		a.s.enableSwipe && a.isTouch && a.doCss() && (a.$slide.on("touchstart.lg", function (c) {
			a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
		}), a.$slide.on("touchmove.lg", function (e) {
			a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
		}), a.$slide.on("touchend.lg", function () {
			a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
		}))
	}, e.prototype.enableDrag = function () {
		var c = this,
			d = 0,
			e = 0,
			f = !1,
			g = !1;
		c.s.enableDrag && !c.isTouch && c.doCss() && (c.$slide.on("mousedown.lg", function (b) {
			c.$outer.hasClass("lg-zoomed") || (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && (b.preventDefault(), c.lgBusy || (c.manageSwipeClass(), d = b.pageX, f = !0, c.$outer.scrollLeft += 1, c.$outer.scrollLeft -= 1, c.$outer.removeClass("lg-grab").addClass("lg-grabbing"), c.$el.trigger("onDragstart.lg")))
		}), a(b).on("mousemove.lg", function (a) {
			f && (g = !0, e = a.pageX, c.touchMove(d, e), c.$el.trigger("onDragmove.lg"))
		}), a(b).on("mouseup.lg", function (b) {
			g ? (g = !1, c.touchEnd(e - d), c.$el.trigger("onDragend.lg")) : (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && c.$el.trigger("onSlideClick.lg"), f && (f = !1, c.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
		}))
	}, e.prototype.manageSwipeClass = function () {
		var a = this.index + 1,
			b = this.index - 1,
			c = this.$slide.length;
		this.s.loop && (0 === this.index ? b = c - 1 : this.index === c - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
	}, e.prototype.mousewheel = function () {
		var a = this;
		a.$outer.on("mousewheel.lg", function (b) {
			b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
		})
	}, e.prototype.closeGallery = function () {
		var b = this,
			c = !1;
		this.$outer.find(".lg-close").on("click.lg", function () {
			b.destroy()
		}), b.s.closable && (b.$outer.on("mousedown.lg", function (b) {
			c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
		}), b.$outer.on("mouseup.lg", function (d) {
			(a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
		}))
	}, e.prototype.destroy = function (c) {
		var d = this;
		c || d.$el.trigger("onBeforeClose.lg"), a(b).scrollTop(d.prevScrollTop), c && (d.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(d.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function (a) {
			d.modules[a] && d.modules[a].destroy()
		}), this.lGalleryOn = !1, clearTimeout(d.hideBartimeout), this.hideBartimeout = !1, a(b).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), d.$outer && d.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function () {
			d.$outer && d.$outer.remove(), a(".lg-backdrop").remove(), c || d.$el.trigger("onCloseAfter.lg")
		}, d.s.backdropDuration + 50)
	}, a.fn.lightGallery = function (b) {
		return this.each(function () {
			if (a.data(this, "lightGallery")) try {
				a(this).data("lightGallery").init()
			} catch (a) {
				console.error("lightGallery has not initiated properly")
			} else a.data(this, "lightGallery", new e(this, b))
		})
	}, a.fn.lightGallery.modules = {}
}(jQuery, window, document);
/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
! function (a, b, c, d) {
	"use strict";
	var e = {
			scale: 1,
			zoom: !0,
			actualSize: !0,
			enableZoomAfter: 300
		},
		f = function (c) {
			return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, e, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(b).width() / 2, this.pageY = a(b).height() / 2 + a(b).scrollTop()), this
		};
	f.prototype.init = function () {
		var c = this,
			d = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
		c.core.s.actualSize && (d += '<span id="lg-actual-size" class="lg-icon"></span>'), this.core.$outer.find(".lg-toolbar").append(d), c.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (b, d, e) {
			var f = c.core.s.enableZoomAfter + e;
			a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), c.zoomabletimeout = setTimeout(function () {
				c.core.$slide.eq(d).addClass("lg-zoomable")
			}, f + 30)
		});
		var e = 1,
			f = function (d) {
				var e, f, g = c.core.$outer.find(".lg-current .lg-image"),
					h = (a(b).width() - g.width()) / 2,
					i = (a(b).height() - g.height()) / 2 + a(b).scrollTop();
				e = c.pageX - h, f = c.pageY - i;
				var j = (d - 1) * e,
					k = (d - 1) * f;
				g.css("transform", "scale3d(" + d + ", " + d + ", 1)").attr("data-scale", d), g.parent().css({
					left: -j + "px",
					top: -k + "px"
				}).attr("data-x", j).attr("data-y", k)
			},
			g = function () {
				e > 1 ? c.core.$outer.addClass("lg-zoomed") : c.resetZoom(), e < 1 && (e = 1), f(e)
			},
			h = function (d, f, h, i) {
				var j, k = f.width();
				j = c.core.s.dynamic ? c.core.s.dynamicEl[h].width || f[0].naturalWidth || k : c.core.$items.eq(h).attr("data-width") || f[0].naturalWidth || k;
				var l;
				c.core.$outer.hasClass("lg-zoomed") ? e = 1 : j > k && (l = j / k, e = l || 2), i ? (c.pageX = a(b).width() / 2, c.pageY = a(b).height() / 2 + a(b).scrollTop()) : (c.pageX = d.pageX || d.originalEvent.targetTouches[0].pageX, c.pageY = d.pageY || d.originalEvent.targetTouches[0].pageY), g(), setTimeout(function () {
					c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
				}, 10)
			},
			i = !1;
		c.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, b) {
			var d = c.core.$slide.eq(b).find(".lg-image");
			d.on("dblclick", function (a) {
				h(a, d, b)
			}), d.on("touchstart", function (a) {
				i ? (clearTimeout(i), i = null, h(a, d, b)) : i = setTimeout(function () {
					i = null
				}, 300), a.preventDefault()
			})
		}), a(b).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function () {
			c.pageX = a(b).width() / 2, c.pageY = a(b).height() / 2 + a(b).scrollTop(), f(e)
		}), a("#lg-zoom-out").on("click.lg", function () {
			c.core.$outer.find(".lg-current .lg-image").length && (e -= c.core.s.scale, g())
		}), a("#lg-zoom-in").on("click.lg", function () {
			c.core.$outer.find(".lg-current .lg-image").length && (e += c.core.s.scale, g())
		}), a("#lg-actual-size").on("click.lg", function (a) {
			h(a, c.core.$slide.eq(c.core.index).find(".lg-image"), c.core.index, !0)
		}), c.core.$el.on("onBeforeSlide.lg.tm", function () {
			e = 1, c.resetZoom()
		}), c.core.isTouch || c.zoomDrag(), c.core.isTouch && c.zoomSwipe()
	}, f.prototype.resetZoom = function () {
		this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(b).width() / 2, this.pageY = a(b).height() / 2 + a(b).scrollTop()
	}, f.prototype.zoomSwipe = function () {
		var a = this,
			b = {},
			c = {},
			d = !1,
			e = !1,
			f = !1;
		a.core.$slide.on("touchstart.lg", function (c) {
			if (a.core.$outer.hasClass("lg-zoomed")) {
				var d = a.core.$slide.eq(a.core.index).find(".lg-object");
				f = d.outerHeight() * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.outerWidth() * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = {
					x: c.originalEvent.targetTouches[0].pageX,
					y: c.originalEvent.targetTouches[0].pageY
				})
			}
		}), a.core.$slide.on("touchmove.lg", function (g) {
			if (a.core.$outer.hasClass("lg-zoomed")) {
				var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
				g.preventDefault(), d = !0, c = {
					x: g.originalEvent.targetTouches[0].pageX,
					y: g.originalEvent.targetTouches[0].pageY
				}, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && j.css({
					left: h + "px",
					top: i + "px"
				})
			}
		}), a.core.$slide.on("touchend.lg", function () {
			a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f))
		})
	}, f.prototype.zoomDrag = function () {
		var c = this,
			d = {},
			e = {},
			f = !1,
			g = !1,
			h = !1,
			i = !1;
		c.core.$slide.on("mousedown.lg.zoom", function (b) {
			var e = c.core.$slide.eq(c.core.index).find(".lg-object");
			i = e.outerHeight() * e.attr("data-scale") > c.core.$outer.find(".lg").height(), h = e.outerWidth() * e.attr("data-scale") > c.core.$outer.find(".lg").width(), c.core.$outer.hasClass("lg-zoomed") && a(b.target).hasClass("lg-object") && (h || i) && (b.preventDefault(), d = {
				x: b.pageX,
				y: b.pageY
			}, f = !0, c.core.$outer.scrollLeft += 1, c.core.$outer.scrollLeft -= 1, c.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
		}), a(b).on("mousemove.lg.zoom", function (a) {
			if (f) {
				var b, j, k = c.core.$slide.eq(c.core.index).find(".lg-img-wrap");
				g = !0, e = {
					x: a.pageX,
					y: a.pageY
				}, c.core.$outer.addClass("lg-zoom-dragging"), j = i ? -Math.abs(k.attr("data-y")) + (e.y - d.y) : -Math.abs(k.attr("data-y")), b = h ? -Math.abs(k.attr("data-x")) + (e.x - d.x) : -Math.abs(k.attr("data-x")), k.css({
					left: b + "px",
					top: j + "px"
				})
			}
		}), a(b).on("mouseup.lg.zoom", function (a) {
			f && (f = !1, c.core.$outer.removeClass("lg-zoom-dragging"), !g || d.x === e.x && d.y === e.y || (e = {
				x: a.pageX,
				y: a.pageY
			}, c.touchendZoom(d, e, h, i)), g = !1), c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
		})
	}, f.prototype.touchendZoom = function (a, b, c, d) {
		var e = this,
			f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
			g = e.core.$slide.eq(e.core.index).find(".lg-object"),
			h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
			i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
			j = (e.core.$outer.find(".lg").height() - g.outerHeight()) / 2,
			k = Math.abs(g.outerHeight() * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
			l = (e.core.$outer.find(".lg").width() - g.outerWidth()) / 2,
			m = Math.abs(g.outerWidth() * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
		(Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), f.css({
			left: h + "px",
			top: i + "px"
		}))
	}, f.prototype.destroy = function () {
		var c = this;
		c.core.$el.off(".lg.zoom"), a(b).off(".lg.zoom"), c.core.$slide.off(".lg.zoom"), c.core.$el.off(".lg.tm.zoom"), c.resetZoom(), clearTimeout(c.zoomabletimeout), c.zoomabletimeout = !1
	}, a.fn.lightGallery.modules.zoom = f
}(jQuery, window, document);
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
! function (t, e, i, s) {
	function n(e, i) {
		this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function (t, e) {
			this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
		}, this)), t.each(n.Pipe, t.proxy(function (e, i) {
			this._pipe.push({
				filter: i.filter,
				run: t.proxy(i.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}

	function o(t) {
		if (t.touches !== s) return {
			x: t.touches[0].pageX,
			y: t.touches[0].pageY
		};
		if (t.touches === s) {
			if (t.pageX !== s) return {
				x: t.pageX,
				y: t.pageY
			};
			if (t.pageX === s) return {
				x: t.clientX,
				y: t.clientY
			}
		}
	}

	function r(t) {
		var e, s, n = i.createElement("div"),
			o = t;
		for (e in o)
			if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e];
		return [!1]
	}

	function a() {
		return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
	}

	function h() {
		return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
	}

	function l() {
		return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
	}

	function c() {
		return "ontouchstart" in e || !!navigator.msMaxTouchPoints
	}

	function d() {
		return e.navigator.msPointerEnabled
	}
	var p, u, g;
	p = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	}, u = {
		isTouch: !1,
		isScrolling: !1,
		isSwiping: !1,
		direction: !1,
		inMotion: !1
	}, g = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	}, n.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: e,
		responsiveClass: !1,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		themeClass: "owl-theme",
		baseClass: "owl-carousel",
		itemClass: "owl-item",
		centerClass: "center",
		activeClass: "active"
	}, n.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, n.Plugins = {}, n.Pipe = [{
		filter: ["width", "items", "settings"],
		run: function (t) {
			t.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var t = this._clones,
				e = this.$stage.children(".cloned");
			(e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var t, e, i = this._clones,
				s = this._items,
				n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
			for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var t, e, i, s = this.settings.rtl ? 1 : -1,
				n = (this.width() / this.settings.items).toFixed(3),
				o = 0;
			for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var e, i, s = (this.width() / this.settings.items).toFixed(3),
				n = {
					width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
					"padding-left": this.settings.stagePadding || "",
					"padding-right": this.settings.stagePadding || ""
				};
			if (this.$stage.css(n), n = {
					width: this.settings.autoWidth ? "auto" : s - this.settings.margin
				}, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
					return t > 1
				}).length > 0)
				for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
			else this.$stage.children().css(n)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (t) {
			t.current && this.reset(this.$stage.children().index(t.current))
		}
	}, {
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var t, e, i, s, n = this.settings.rtl ? 1 : -1,
				o = 2 * this.settings.stagePadding,
				r = this.coordinates(this.current()) + o,
				a = r + this.width() * n,
				h = [];
			for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
			this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
		}
	}], n.prototype.initialize = function () {
		if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
			var e, i, n;
			if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1
		}
		this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
	}, n.prototype.setup = function () {
		var e = this.viewport(),
			i = this.options.responsive,
			s = -1,
			n = null;
		i ? (t.each(i, function (t) {
			e >= t && t > s && (s = Number(t))
		}), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function (t, e) {
			return e.replace(/\b owl-responsive-\S+/g, "")
		}).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
			property: {
				name: "settings",
				value: n
			}
		}), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		}))
	}, n.prototype.optionsLogic = function () {
		this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, n.prototype.prepare = function (e) {
		var i = this.trigger("prepare", {
			content: e
		});
		return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
			content: i.data
		}), i.data
	}, n.prototype.update = function () {
		for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
				return this[t]
			}, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
		this._invalidated = {}
	}, n.prototype.width = function (t) {
		switch (t = t || n.Width.Default) {
			case n.Width.Inner:
			case n.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, n.prototype.refresh = function () {
		if (0 === this._items.length) return !1;
		(new Date).getTime();
		this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
	}, n.prototype.eventsCall = function () {
		this.e._onDragStart = t.proxy(function (t) {
			this.onDragStart(t)
		}, this), this.e._onDragMove = t.proxy(function (t) {
			this.onDragMove(t)
		}, this), this.e._onDragEnd = t.proxy(function (t) {
			this.onDragEnd(t)
		}, this), this.e._onResize = t.proxy(function (t) {
			this.onResize(t)
		}, this), this.e._transitionEnd = t.proxy(function (t) {
			this.transitionEnd(t)
		}, this), this.e._preventClick = t.proxy(function (t) {
			this.preventClick(t)
		}, this)
	}, n.prototype.onThrottledResize = function () {
		e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
	}, n.prototype.onResize = function () {
		return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
	}, n.prototype.eventsRouter = function (t) {
		var e = t.type;
		"mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
	}, n.prototype.internalEvents = function () {
		var i = (c(), d());
		this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
			this.eventsRouter(t)
		}, this)), this.$stage.on("dragstart", function () {
			return !1
		}), this.$stage.get(0).onselectstart = function () {
			return !1
		}) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
			this.eventsRouter(t)
		}, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
	}, n.prototype.onDragStart = function (s) {
		var n, r, a, h;
		if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1;
		if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;
		else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
		this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
			this.eventsRouter(t)
		}, this))
	}, n.prototype.onDragMove = function (t) {
		var i, n, r, a, h, l;
		this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), h = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
	}, n.prototype.onDragEnd = function (e) {
		var s, n, o;
		if (this.state.isTouch) {
			if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
			this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
		}
	}, n.prototype.removeClick = function (i) {
		this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
			t(i).off("click.preventClick")
		}, 300)
	}, n.prototype.preventClick = function (e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
	}, n.prototype.getTransformProperty = function () {
		var t, i;
		return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
	}, n.prototype.closest = function (e) {
		var i = -1,
			s = 30,
			n = this.width(),
			o = this.coordinates();
		return this.settings.freeDrag || t.each(o, t.proxy(function (t, r) {
			return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
		}, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
	}, n.prototype.animate = function (e) {
		this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
			transform: "translate3d(" + e + "px,0px, 0px)",
			transition: this.speed() / 1e3 + "s"
		}) : this.state.isTouch ? this.$stage.css({
			left: e + "px"
		}) : this.$stage.animate({
			left: e
		}, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
			this.state.inMotion && this.transitionEnd()
		}, this))
	}, n.prototype.current = function (t) {
		if (t === s) return this._current;
		if (0 === this._items.length) return s;
		if (t = this.normalize(t), this._current !== t) {
			var e = this.trigger("change", {
				property: {
					name: "position",
					value: t
				}
			});
			e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, n.prototype.invalidate = function (t) {
		this._invalidated[t] = !0
	}, n.prototype.reset = function (t) {
		t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
	}, n.prototype.normalize = function (e, i) {
		var n = i ? this._items.length : this._items.length + this._clones.length;
		return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
	}, n.prototype.relative = function (t) {
		return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
	}, n.prototype.maximum = function (t) {
		var e, i, s, n = 0,
			o = this.settings;
		if (t) return this._items.length - 1;
		if (!o.loop && o.center) e = this._items.length - 1;
		else if (o.loop || o.center)
			if (o.loop || o.center) e = this._items.length + o.items;
			else {
				if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
				for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
					(s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
			}
		else e = this._items.length - o.items;
		return e
	}, n.prototype.minimum = function (t) {
		return t ? 0 : this._clones.length / 2
	}, n.prototype.items = function (t) {
		return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
	}, n.prototype.mergers = function (t) {
		return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
	}, n.prototype.clones = function (e) {
		var i = this._clones.length / 2,
			n = i + this._items.length,
			o = function (t) {
				return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2
			};
		return e === s ? t.map(this._clones, function (t, e) {
			return o(e)
		}) : t.map(this._clones, function (t, i) {
			return t === e ? o(i) : null
		})
	}, n.prototype.speed = function (t) {
		return t !== s && (this._speed = t), this._speed
	}, n.prototype.coordinates = function (e) {
		var i = null;
		return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
			return this.coordinates(e)
		}, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
	}, n.prototype.duration = function (t, e, i) {
		return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
	}, n.prototype.to = function (i, s) {
		if (this.settings.loop) {
			var n = i - this.relative(this.current()),
				o = this.current(),
				r = this.current(),
				a = this.current() + n,
				h = 0 > r - a ? !0 : !1,
				l = this._clones.length + this._items.length;
			a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
				this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update()
			}, this), 30)
		} else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
	}, n.prototype.next = function (t) {
		t = t || !1, this.to(this.relative(this.current()) + 1, t)
	}, n.prototype.prev = function (t) {
		t = t || !1, this.to(this.relative(this.current()) - 1, t)
	}, n.prototype.transitionEnd = function (t) {
		return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
	}, n.prototype.viewport = function () {
		var s;
		if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
		else if (e.innerWidth) s = e.innerWidth;
		else {
			if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
			s = i.documentElement.clientWidth
		}
		return s
	}, n.prototype.replace = function (e) {
		this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
			return 1 === this.nodeType
		}).each(t.proxy(function (t, e) {
			e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, n.prototype.add = function (t, e) {
		e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
			content: t,
			position: e
		}), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
			content: t,
			position: e
		})
	}, n.prototype.remove = function (t) {
		t = this.normalize(t, !0), t !== s && (this.trigger("remove", {
			content: this._items[t],
			position: t
		}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: t
		}))
	}, n.prototype.addTriggerableEvents = function () {
		var e = t.proxy(function (e, i) {
			return t.proxy(function (t) {
				t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
			}, this)
		}, this);
		t.each({
			next: this.next,
			prev: this.prev,
			to: this.to,
			destroy: this.destroy,
			refresh: this.refresh,
			replace: this.replace,
			add: this.add,
			remove: this.remove
		}, t.proxy(function (t, i) {
			this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
		}, this))
	}, n.prototype.watchVisibility = function () {
		function i(t) {
			return t.offsetWidth > 0 && t.offsetHeight > 0
		}

		function s() {
			i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
		}
		i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
	}, n.prototype.preloadAutoWidthImages = function (e) {
		var i, s, n, o;
		i = 0, s = this, e.each(function (r, a) {
			n = t(a), o = new Image, o.onload = function () {
				i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
			}, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
		})
	}, n.prototype.destroy = function () {
		this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		for (var s in this._plugins) this._plugins[s].destroy();
		(this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
			return !1
		})), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
	}, n.prototype.op = function (t, e, i) {
		var s = this.settings.rtl;
		switch (e) {
			case "<":
				return s ? t > i : i > t;
			case ">":
				return s ? i > t : t > i;
			case ">=":
				return s ? i >= t : t >= i;
			case "<=":
				return s ? t >= i : i >= t
		}
	}, n.prototype.on = function (t, e, i, s) {
		t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
	}, n.prototype.off = function (t, e, i, s) {
		t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
	}, n.prototype.trigger = function (e, i, s) {
		var n = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			o = t.camelCase(t.grep(["on", e, s], function (t) {
				return t
			}).join("-").toLowerCase()),
			r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
				relatedTarget: this
			}, n, i));
		return this._supress[e] || (t.each(this._plugins, function (t, e) {
			e.onTrigger && e.onTrigger(r)
		}), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
	}, n.prototype.suppress = function (e) {
		t.each(e, t.proxy(function (t, e) {
			this._supress[e] = !0
		}, this))
	}, n.prototype.release = function (e) {
		t.each(e, t.proxy(function (t, e) {
			delete this._supress[e]
		}, this))
	}, n.prototype.browserSupport = function () {
		if (this.support3d = l(), this.support3d) {
			this.transformVendor = h();
			var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
			this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
		}
		this.state.orientation = e.orientation
	}, t.fn.owlCarousel = function (e) {
		return this.each(function () {
			t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
		})
	}, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, s) {
	var n = function (e) {
		this._core = e, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
				if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
					for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function (t, e) {
							this.load(e)
						}, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
			}, this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	n.Defaults = {
		lazyLoad: !1
	}, n.prototype.load = function (i) {
		var s = this._core.$stage.children().eq(i),
			n = s && s.find(".owl-lazy");
		!n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function (i, s) {
			var n, o = t(s),
				r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
			this._core.trigger("load", {
				element: o,
				url: r
			}, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
				o.css("opacity", 1), this._core.trigger("loaded", {
					element: o,
					url: r
				}, "lazy")
			}, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function () {
				o.css({
					"background-image": "url(" + r + ")",
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: o,
					url: r
				}, "lazy")
			}, this), n.src = r)
		}, this)), this._loaded.push(s.get(0)))
	}, n.prototype.destroy = function () {
		var t, e;
		for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, s) {
	var n = function (e) {
		this._core = e, this._handlers = {
			"initialized.owl.carousel": t.proxy(function () {
				this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": t.proxy(function (t) {
				this._core.settings.autoHeight && "position" == t.property.name && this.update()
			}, this),
			"loaded.owl.lazy": t.proxy(function (t) {
				this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
			}, this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	n.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, n.prototype.update = function () {
		this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
	}, n.prototype.destroy = function () {
		var t, e;
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, s) {
	var n = function (e) {
		this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
			"change.owl.carousel": t.proxy(function (t) {
				"position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
				this.swapping = "translated" == t.type
			}, this),
			"translate.owl.carousel": t.proxy(function (t) {
				this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	n.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, n.prototype.swap = function () {
		if (1 === this.core.settings.items && this.core.support3d) {
			this.core.speed(0);
			var e, i = t.proxy(this.clear, this),
				s = this.core.$stage.children().eq(this.previous),
				n = this.core.$stage.children().eq(this.next),
				o = this.core.settings.animateIn,
				r = this.core.settings.animateOut;
			this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({
				left: e + "px"
			}).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
		}
	}, n.prototype.clear = function (e) {
		t(e.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
	}, n.prototype.destroy = function () {
		var t, e;
		for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, s) {
	var n = function (e) {
		this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {
			"translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
				this.autoplay()
			}, this),
			"play.owl.autoplay": t.proxy(function (t, e, i) {
				this.play(e, i)
			}, this),
			"stop.owl.autoplay": t.proxy(function () {
				this.stop()
			}, this),
			"mouseover.owl.autoplay": t.proxy(function () {
				this.core.settings.autoplayHoverPause && this.pause()
			}, this),
			"mouseleave.owl.autoplay": t.proxy(function () {
				this.core.settings.autoplayHoverPause && this.autoplay()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	n.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, n.prototype.autoplay = function () {
		this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
			this.play()
		}, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
	}, n.prototype.play = function (t, s) {
		return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
	}, n.prototype.stop = function () {
		e.clearInterval(this.interval)
	}, n.prototype.pause = function () {
		e.clearInterval(this.interval)
	}, n.prototype.destroy = function () {
		var t, i;
		e.clearInterval(this.interval);
		for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
		for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, s) {
	"use strict";
	var n = function (e) {
		this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": t.proxy(function (e) {
				this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
			}, this),
			"add.owl.carousel": t.proxy(function (e) {
				this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
			}, this),
			"remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
				this._core.settings.dotsData && this._templates.splice(t.position, 1)
			}, this),
			"change.owl.carousel": t.proxy(function (t) {
				if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
					var e = this._core.current(),
						i = this._core.maximum(),
						s = this._core.minimum();
					t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
				}
			}, this),
			"changed.owl.carousel": t.proxy(function (t) {
				"position" == t.property.name && this.draw()
			}, this),
			"refreshed.owl.carousel": t.proxy(function () {
				this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
			}, this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	n.Defaults = {
		nav: !1,
		navRewind: !0,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotData: !1,
		dotsSpeed: !1,
		dotsContainer: !1,
		controlsClass: "owl-controls"
	}, n.prototype.initialize = function () {
		var e, i, s = this._core.settings;
		s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
			var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
			e.preventDefault(),
				this.to(i, s.dotsSpeed)
		}, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function (t) {
			this.prev(s.navSpeed)
		}, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function (t) {
			this.next(s.navSpeed)
		}, this));
		for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
	}, n.prototype.destroy = function () {
		var t, e, i, s;
		for (t in this._handlers) this.$element.off(t, this._handlers[t]);
		for (e in this._controls) this._controls[e].remove();
		for (s in this.overides) this._core[s] = this._overrides[s];
		for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
	}, n.prototype.update = function () {
		var t, e, i, s = this._core.settings,
			n = this._core.clones().length / 2,
			o = n + this._core.items().length,
			r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
		if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
			for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({
				start: t - n,
				end: t - n + r - 1
			}), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
	}, n.prototype.draw = function () {
		var e, i, s = "",
			n = this._core.settings,
			o = (this._core.$stage.children(), this._core.relative(this._core.current()));
		if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
			if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
				this._controls.$indicators.html(s)
			} else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
			this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
		}
		this._controls.$indicators.toggle(n.dots)
	}, n.prototype.onTrigger = function (e) {
		var i = this._core.settings;
		e.page = {
			index: t.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
		}
	}, n.prototype.current = function () {
		var e = this._core.relative(this._core.current());
		return t.grep(this._pages, function (t) {
			return t.start <= e && t.end >= e
		}).pop()
	}, n.prototype.getPosition = function (e) {
		var i, s, n = this._core.settings;
		return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
	}, n.prototype.next = function (e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
	}, n.prototype.prev = function (e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
	}, n.prototype.to = function (e, i, s) {
		var n;
		s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
	}, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, s) {
	"use strict";
	var n = function (i) {
		this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": t.proxy(function () {
				"URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": t.proxy(function (e) {
				var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
				this._hashes[i] = e.content
			}, this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
			var t = e.location.hash.substring(1),
				i = this._core.$stage.children(),
				s = this._hashes[t] && i.index(this._hashes[t]) || 0;
			return t ? void this._core.to(s, !1, !0) : !1
		}, this))
	};
	n.Defaults = {
		URLhashListener: !1
	}, n.prototype.destroy = function () {
		var i, s;
		t(e).off("hashchange.owl.navigation");
		for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
		for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document);


/*!
 * Packery layout mode PACKAGED v1.1.3
 * sub-classes Packery
 * http://packery.metafizzy.co
 */

! function (a) {
	function b(a) {
		return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
	}

	function c(a, b) {
		var c = d(a, b) ? f : e;
		c(a, b)
	}
	var d, e, f;
	"classList" in document.documentElement ? (d = function (a, b) {
		return a.classList.contains(b)
	}, e = function (a, b) {
		a.classList.add(b)
	}, f = function (a, b) {
		a.classList.remove(b)
	}) : (d = function (a, c) {
		return b(c).test(a.className)
	}, e = function (a, b) {
		d(a, b) || (a.className = a.className + " " + b)
	}, f = function (a, c) {
		a.className = a.className.replace(b(c), " ")
	});
	var g = {
		hasClass: d,
		addClass: e,
		removeClass: f,
		toggleClass: c,
		has: d,
		add: e,
		remove: f,
		toggle: c
	};
	"function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g
}(window),
function (a, b) {
	"function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
}(window, function () {
	function a(b) {
		for (var c in a.defaults) this[c] = a.defaults[c];
		for (c in b) this[c] = b[c]
	}
	var b = window.Packery = function () {};
	return b.Rect = a, a.defaults = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}, a.prototype.contains = function (a) {
		var b = a.width || 0,
			c = a.height || 0;
		return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
	}, a.prototype.overlaps = function (a) {
		var b = this.x + this.width,
			c = this.y + this.height,
			d = a.x + a.width,
			e = a.y + a.height;
		return this.x < d && b > a.x && this.y < e && c > a.y
	}, a.prototype.getMaximalFreeRects = function (b) {
		if (!this.overlaps(b)) return !1;
		var c, d = [],
			e = this.x + this.width,
			f = this.y + this.height,
			g = b.x + b.width,
			h = b.y + b.height;
		return this.y < b.y && (c = new a({
			x: this.x,
			y: this.y,
			width: this.width,
			height: b.y - this.y
		}), d.push(c)), e > g && (c = new a({
			x: g,
			y: this.y,
			width: e - g,
			height: this.height
		}), d.push(c)), f > h && (c = new a({
			x: this.x,
			y: h,
			width: this.width,
			height: f - h
		}), d.push(c)), this.x < b.x && (c = new a({
			x: this.x,
			y: this.y,
			width: b.x - this.x,
			height: this.height
		}), d.push(c)), d
	}, a.prototype.canFit = function (a) {
		return this.width >= a.width && this.height >= a.height
	}, a
}),
function (a, b) {
	if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
	else if ("object" == typeof exports) module.exports = b(require("./rect"));
	else {
		var c = a.Packery = a.Packery || {};
		c.Packer = b(c.Rect)
	}
}(window, function (a) {
	function b(a, b, c) {
		this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
	}
	b.prototype.reset = function () {
		this.spaces = [], this.newSpaces = [];
		var b = new a({
			x: 0,
			y: 0,
			width: this.width,
			height: this.height
		});
		this.spaces.push(b), this.sorter = c[this.sortDirection] || c.downwardLeftToRight
	}, b.prototype.pack = function (a) {
		for (var b = 0, c = this.spaces.length; c > b; b++) {
			var d = this.spaces[b];
			if (d.canFit(a)) {
				this.placeInSpace(a, d);
				break
			}
		}
	}, b.prototype.placeInSpace = function (a, b) {
		a.x = b.x, a.y = b.y, this.placed(a)
	}, b.prototype.placed = function (a) {
		for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
			var e = this.spaces[c],
				f = e.getMaximalFreeRects(a);
			f ? b.push.apply(b, f) : b.push(e)
		}
		this.spaces = b, this.mergeSortSpaces()
	}, b.prototype.mergeSortSpaces = function () {
		b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
	}, b.prototype.addSpace = function (a) {
		this.spaces.push(a), this.mergeSortSpaces()
	}, b.mergeRects = function (a) {
		for (var b = 0, c = a.length; c > b; b++) {
			var d = a[b];
			if (d) {
				var e = a.slice(0);
				e.splice(b, 1);
				for (var f = 0, g = 0, h = e.length; h > g; g++) {
					var i = e[g],
						j = b > g ? 0 : 1;
					d.contains(i) && (a.splice(g + j - f, 1), f++)
				}
			}
		}
		return a
	};
	var c = {
		downwardLeftToRight: function (a, b) {
			return a.y - b.y || a.x - b.x
		},
		rightwardTopToBottom: function (a, b) {
			return a.x - b.x || a.y - b.y
		}
	};
	return b
}),
function (a, b) {
	"function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : "object" == typeof exports ? module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect)
}(window, function (a, b, c) {
	var d = a("transform"),
		e = function () {
			b.Item.apply(this, arguments)
		};
	e.prototype = new b.Item;
	var f = e.prototype._create;
	return e.prototype._create = function () {
		f.call(this), this.rect = new c, this.placeRect = new c
	}, e.prototype.dragStart = function () {
		this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
	}, e.prototype.dragMove = function (a, b) {
		this.didDrag = !0;
		var c = this.layout.size;
		a -= c.paddingLeft, b -= c.paddingTop, this.positionPlaceRect(a, b)
	}, e.prototype.dragStop = function () {
		this.getPosition();
		var a = this.position.x != this.placeRect.x,
			b = this.position.y != this.placeRect.y;
		this.needsPositioning = a || b, this.didDrag = !1
	}, e.prototype.positionPlaceRect = function (a, b, c) {
		this.placeRect.x = this.getPlaceRectCoord(a, !0), this.placeRect.y = this.getPlaceRectCoord(b, !1, c)
	}, e.prototype.getPlaceRectCoord = function (a, b, c) {
		var d = b ? "Width" : "Height",
			e = this.size["outer" + d],
			f = this.layout[b ? "columnWidth" : "rowHeight"],
			g = this.layout.size["inner" + d];
		b || (g = Math.max(g, this.layout.maxY), this.layout.rowHeight || (g -= this.layout.gutter));
		var h;
		if (f) {
			f += this.layout.gutter, g += b ? this.layout.gutter : 0, a = Math.round(a / f);
			var i;
			i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil";
			var j = Math[i](g / f);
			j -= Math.ceil(e / f), h = j
		} else h = g - e;
		return a = c ? a : Math.min(a, h), a *= f || 1, Math.max(0, a)
	}, e.prototype.copyPlaceRectPosition = function () {
		this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
	}, e.prototype.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
	}, e
}),
function (a, b) {
	"function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof exports ? module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window, function (a, b, c, d, e, f) {
	function g(a, b) {
		return a.position.y - b.position.y || a.position.x - b.position.x
	}

	function h(a, b) {
		return a.position.x - b.position.x || a.position.y - b.position.y
	}
	d.prototype.canFit = function (a) {
		return this.width >= a.width - 1 && this.height >= a.height - 1
	};
	var i = c.create("packery");
	return i.Item = f, i.prototype._create = function () {
		c.prototype._create.call(this), this.packer = new e, this.stamp(this.options.stamped);
		var a = this;
		this.handleDraggabilly = {
			dragStart: function () {
				a.itemDragStart(this.element)
			},
			dragMove: function () {
				a.itemDragMove(this.element, this.position.x, this.position.y)
			},
			dragEnd: function () {
				a.itemDragEnd(this.element)
			}
		}, this.handleUIDraggable = {
			start: function (b) {
				a.itemDragStart(b.currentTarget)
			},
			drag: function (b, c) {
				a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
			},
			stop: function (b) {
				a.itemDragEnd(b.currentTarget)
			}
		}
	}, i.prototype._resetLayout = function () {
		this.getSize(), this._getMeasurements();
		var a = this.packer;
		this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY, a.height = this.size.innerHeight + this.gutter, a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter, a.height = Number.POSITIVE_INFINITY, a.sortDirection = "downwardLeftToRight"), a.reset(), this.maxY = 0, this.maxX = 0
	}, i.prototype._getMeasurements = function () {
		this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
	}, i.prototype._getItemLayoutPosition = function (a) {
		return this._packItem(a), a.rect
	}, i.prototype._packItem = function (a) {
		this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect)
	}, i.prototype._setMaxXY = function (a) {
		this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
	}, i.prototype._setRectSize = function (a, c) {
		var d = b(a),
			e = d.outerWidth,
			f = d.outerHeight;
		(e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height)
	}, i.prototype._applyGridGutter = function (a, b) {
		if (!b) return a + this.gutter;
		b += this.gutter;
		var c = a % b,
			d = c && 1 > c ? "round" : "ceil";
		return a = Math[d](a / b) * b
	}, i.prototype._getContainerSize = function () {
		return this.options.isHorizontal ? {
			width: this.maxX - this.gutter
		} : {
			height: this.maxY - this.gutter
		}
	}, i.prototype._manageStamp = function (a) {
		var b, c = this.getItem(a);
		if (c && c.isPlacing) b = c.placeRect;
		else {
			var e = this._getElementOffset(a);
			b = new d({
				x: this.options.isOriginLeft ? e.left : e.right,
				y: this.options.isOriginTop ? e.top : e.bottom
			})
		}
		this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
	}, i.prototype.sortItemsByPosition = function () {
		var a = this.options.isHorizontal ? h : g;
		this.items.sort(a)
	}, i.prototype.fit = function (a, b, c) {
		var d = this.getItem(a);
		d && (this._getMeasurements(), this.stamp(d.element), d.getSize(), d.isPlacing = !0, b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, d.positionPlaceRect(b, c, !0), this._bindFitEvents(d), d.moveTo(d.placeRect.x, d.placeRect.y), this.layout(), this.unstamp(d.element), this.sortItemsByPosition(), d.isPlacing = !1, d.copyPlaceRectPosition())
	}, i.prototype._bindFitEvents = function (a) {
		function b() {
			d++, 2 == d && c.emitEvent("fitComplete", [a])
		}
		var c = this,
			d = 0;
		a.on("layout", function () {
			return b(), !0
		}), this.on("layoutComplete", function () {
			return b(), !0
		})
	}, i.prototype.resize = function () {
		var a = b(this.element),
			c = this.size && a,
			d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
		c && a[d] == this.size[d] || this.layout()
	}, i.prototype.itemDragStart = function (a) {
		this.stamp(a);
		var b = this.getItem(a);
		b && b.dragStart()
	}, i.prototype.itemDragMove = function (a, b, c) {
		function d() {
			f.layout(), delete f.dragTimeout
		}
		var e = this.getItem(a);
		e && e.dragMove(b, c);
		var f = this;
		this.clearDragTimeout(), this.dragTimeout = setTimeout(d, 40)
	}, i.prototype.clearDragTimeout = function () {
		this.dragTimeout && clearTimeout(this.dragTimeout)
	}, i.prototype.itemDragEnd = function (b) {
		var c, d = this.getItem(b);
		if (d && (c = d.didDrag, d.dragStop()), !d || !c && !d.needsPositioning) return void this.unstamp(b);
		a.add(d.element, "is-positioning-post-drag");
		var e = this._getDragEndLayoutComplete(b, d);
		d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout()
	}, i.prototype._getDragEndLayoutComplete = function (b, c) {
		var d = c && c.needsPositioning,
			e = 0,
			f = d ? 2 : 1,
			g = this;
		return function () {
			return e++, e != f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), c.isPlacing = !1, c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [c]), !0)
		}
	}, i.prototype.bindDraggabillyEvents = function (a) {
		a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd)
	}, i.prototype.bindUIDraggableEvents = function (a) {
		a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
	}, i.Rect = d, i.Packer = e, i
}),
function (a, b) {
	"function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], b) : "object" == typeof exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")) : b(a.Isotope.LayoutMode, a.Packery, a.getSize)
}(window, function (a, b, c) {
	function d(a, b) {
		for (var c in b) a[c] = b[c];
		return a
	}
	var e = a.create("packery"),
		f = e.prototype._getElementOffset,
		g = e.prototype._getMeasurement;
	d(e.prototype, b.prototype), e.prototype._getElementOffset = f, e.prototype._getMeasurement = g;
	var h = e.prototype._resetLayout;
	e.prototype._resetLayout = function () {
		this.packer = this.packer || new b.Packer, h.apply(this, arguments)
	};
	var i = e.prototype._getItemLayoutPosition;
	e.prototype._getItemLayoutPosition = function (a) {
		return a.rect = a.rect || new b.Rect, i.call(this, a)
	};
	var j = e.prototype._manageStamp;
	return e.prototype._manageStamp = function () {
		this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, j.apply(this, arguments)
	}, e.prototype.needsResizeLayout = function () {
		var a = c(this.element),
			b = this.size && a,
			d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
		return b && a[d] != this.size[d]
	}, e
});

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}

	function c() {
		f = null
	}

	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.11",
		setup: function () {
			if (this.addEventListener)
				for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function (b) {
			var c = a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return c.length || (c = a("body")), parseInt(c.css("fontSize"), 10)
		},
		getPageHeight: function (b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function (a) {
			return this.unbind("mousewheel", a)
		}
	})
});



/**
 * jQuery.share - social media sharing plugin
 * ---
 * @author Carol Skelly (http://in1.com)
 * @version 1.0
 * @license MIT license (http://opensource.org/licenses/mit-license.php)
 * ---
 */

! function (t, e) {
	var s = e.document;
	t.fn.share = function (i) {
		var r = {
				init: function (i) {
					this.share.settings = t.extend({}, this.share.defaults, i);
					var r = (this.share.settings, this.share.settings.networks),
						o = this.share.settings.theme,
						a = this.share.settings.orientation,
						u = this.share.settings.affix,
						h = this.share.settings.margin,
						l = this.share.settings.title || t(s).attr("title"),
						c = this.share.settings.urlToShare || t(location).attr("href"),
						p = "";
					return t.each(t(s).find('meta[name="description"]'), function (e, s) {
						p = t(s).attr("content")
					}), this.each(function () {
						var s, i = t(this),
							m = i.attr("id"),
							d = encodeURIComponent(c),
							f = l.replace("|", ""),
							g = p.substring(0, 250);
						r.forEach(function (e) {
							s = n.networkDefs[e].url, s = s.replace("|u|", d).replace("|t|", f).replace("|d|", g).replace("|140|", f.substring(0, 130)), t("<a href='" + s + "' title='Share this page on " + e + "' class='pop share-" + o + " share-" + o + "-" + e + "'></a>").appendTo(i)
						}), t("#" + m + ".share-" + o).css("margin", h), "horizontal" != a ? t("#" + m + " a.share-" + o).css("display", "block") : t("#" + m + " a.share-" + o).css("display", "inline-block"), "undefined" != typeof u && (i.addClass("share-affix"), -1 != u.indexOf("right") ? (i.css("left", "auto"), i.css("right", "0px"), -1 != u.indexOf("center") && i.css("top", "40%")) : -1 != u.indexOf("left center") && i.css("top", "40%"), -1 != u.indexOf("bottom") && (i.css("bottom", "0px"), i.css("top", "auto"), -1 != u.indexOf("center") && i.css("left", "40%"))), t(".pop").click(function () {
							return e.open(t(this).attr("href"), "t", "toolbar=0,resizable=1,status=0,width=640,height=528"), !1
						})
					})
				}
			},
			n = {
				networkDefs: {
					facebook: {
						url: "http://www.facebook.com/share.php?u=|u|"
					},
					twitter: {
						url: "https://twitter.com/share?via=in1.com&text=|140|"
					},
					linkedin: {
						url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com"
					},
					in1: {
						url: "http://www.in1.com/cast?u=|u|",
						w: "490",
						h: "529"
					},
					tumblr: {
						url: "http://www.tumblr.com/share?v=3&u=|u|"
					},
					digg: {
						url: "http://digg.com/submit?url=|u|&title=|t|"
					},
					googleplus: {
						url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|"
					},
					reddit: {
						url: "http://reddit.com/submit?url=|u|"
					},
					pinterest: {
						url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|"
					},
					posterous: {
						url: "http://posterous.com/share?linkto=|u|&title=|t|"
					},
					stumbleupon: {
						url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|"
					},
					email: {
						url: "mailto:?subject=|t|"
					}
				}
			};
		return r[i] ? r[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error('Method "' + i + '" does not exist in social plugin') : r.init.apply(this, arguments)
	}, t.fn.share.defaults = {
		networks: ["in1", "facebook", "twitter", "linkedin"],
		theme: "icon",
		autoShow: !0,
		margin: "3px",
		orientation: "horizontal",
		useIn1: !0
	}, t.fn.share.settings = {}
}(jQuery, window);

/** video**/
"function" != typeof Object.create && (Object.create = function (e) {
		function t() {}
		return t.prototype = e, new t
	}),
	function (e, t, o) {
		var a = function (e) {
				var t = o.createElement("script"),
					a = o.getElementsByTagName("head")[0];
				t.src = location.protocol + "//www.youtube.com/iframe_api", a.appendChild(t), a = null, t = null, n(e)
			},
			n = function (o) {
				"undefined" == typeof YT && "undefined" == typeof t.loadingPlayer ? (t.loadingPlayer = !0, t.dfd = e.Deferred(), t.onYouTubeIframeAPIReady = function () {
					t.onYouTubeIframeAPIReady = null, t.dfd.resolve("John"), o()
				}) : t.dfd.done(function (e) {
					o()
				})
			};
		YTPlayer = {
			player: null,
			defaults: {
				ratio: 16 / 9,
				videoId: "LSmgKRx5pBo",
				mute: !0,
				repeat: !0,
				width: e(t).width(),
				playButtonClass: "YTPlayer-play",
				pauseButtonClass: "YTPlayer-pause",
				muteButtonClass: "YTPlayer-mute",
				volumeUpClass: "YTPlayer-volume-up",
				volumeDownClass: "YTPlayer-volume-down",
				start: 0,
				pauseOnScroll: !1,
				fitToBackground: !0,
				playerVars: {
					modestbranding: 1,
					autoplay: 1,
					controls: 0,
					showinfo: 0,
					wmode: "transparent",
					branding: 0,
					rel: 0,
					autohide: 0,
					origin: t.location.origin
				},
				events: null
			},
			init: function (o, n) {
				var i = this;
				return i.userOptions = n, i.$body = e("body"), i.$node = e(o), i.$window = e(t), i.defaults.events = {
					onReady: function (e) {
						i.onPlayerReady(e), i.options.pauseOnScroll && i.pauseOnScroll(), "function" == typeof i.options.callback && i.options.callback.call(this)
					},
					onStateChange: function (e) {
						1 === e.data ? i.$node.addClass("loaded") : 0 === e.data && i.options.repeat && i.player.seekTo(i.options.start)
					}
				}, i.options = e.extend(!0, {}, i.defaults, i.userOptions), i.ID = (new Date).getTime(), i.holderID = "YTPlayer-ID-" + i.ID, i.options.fitToBackground ? i.createBackgroundVideo() : i.createContainerVideo(), i.$window.on("resize.YTplayer" + i.ID, function () {
					i.resize(i)
				}), a(i.onYouTubeIframeAPIReady.bind(i)), i.resize(i), i
			},
			pauseOnScroll: function () {
				var e = this;
				e.$window.on("scroll.YTplayer" + e.ID, function () {
					var t = e.player.getPlayerState();
					1 === t && e.player.pauseVideo()
				}), e.$window.scrollStopped(function () {
					var t = e.player.getPlayerState();
					2 === t && e.player.playVideo()
				})
			},
			createContainerVideo: function () {
				var t = this,
					o = e('<div id="ytplayer-container' + t.ID + '" >                                    <div id="' + t.holderID + '" class="ytplayer-player"></div>                                     </div>                                     <div id="ytplayer-shield"></div>');
				t.$node.append(o), t.$YTPlayerString = o, o = null
			},
			createBackgroundVideo: function () {
				var t = this,
					o = e('<div id="ytplayer-container' + t.ID + '" class="ytplayer-container background">                                    <div id="' + t.holderID + '" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield"></div>');
				t.$node.append(o), t.$YTPlayerString = o, o = null
			},
			resize: function (t) {
				var o = e(".media-container");
				t.options.fitToBackground || (o = t.$node);
				var a, n, i = o.width(),
					r = o.height(),
					l = e("#" + t.holderID);
				i / t.options.ratio < r ? (a = Math.ceil(r * t.options.ratio), l.width(a).height(r).css({
					left: (i - a) / 2,
					top: 0
				})) : (n = Math.ceil(i / t.options.ratio), l.width(i).height(n).css({
					left: 0,
					top: 0
				})), l = null, o = null
			},
			onYouTubeIframeAPIReady: function () {
				var e = this;
				e.player = new t.YT.Player(e.holderID, {
					width: e.options.width,
					height: Math.ceil(e.options.width / e.options.ratio),
					videoId: e.options.videoId,
					playerVars: e.options.playerVars,
					events: e.options.events
				})
			},
			onPlayerReady: function (e) {
				this.options.mute && e.target.mute(), e.target.playVideo()
			},
			getPlayer: function () {
				return this.player
			},
			destroy: function () {
				var o = this;
				o.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"), o.$YTPlayerString.remove(), e(t).off("resize.YTplayer" + o.ID), e(t).off("scroll.YTplayer" + o.ID), o.$body = null, o.$node = null, o.$YTPlayerString = null, o.player.destroy(), o.player = null
			}
		}, e.fn.scrollStopped = function (t) {
			var o = e(this),
				a = this;
			o.scroll(function () {
				o.data("scrollTimeout") && clearTimeout(o.data("scrollTimeout")), o.data("scrollTimeout", setTimeout(t, 250, a))
			})
		}, e.fn.YTPlayer = function (t) {
			return this.each(function () {
				var o = this;
				e(o).data("yt-init", !0);
				var a = Object.create(YTPlayer);
				a.init(o, t), e.data(o, "ytPlayer", a)
			})
		}
	}(jQuery, window, document);

/*! OwlCarousel2Thumbs - v0.1.3 | (c) 2015 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
! function (a) {
	"use strict";
	var b = function (c) {
		this.owl = c, this._thumbcontent = [], this.owl_currentitem = this.owl.options.startPosition, this.$element = this.owl.$element, this._handlers = {
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace && this.owl._options.thumbs && !this.owl._options.thumbImage) this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"));
				else if (b.namespace && this.owl._options.thumbs && this.owl._options.thumbImage) {
					var c = a(b.content).find("img");
					this._thumbcontent.push(c)
				}
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this.owl._options.thumbs && (this.initialize(), this.currentslide(), this.draw())
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" === a.property.name && this.owl._options.thumbs && (this.currentslide(), this.draw())
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._initialized && this.draw()
			}, this)
		}, this.owl._options = a.extend(b.Defaults, this.owl.options), this.owl.$element.on(this._handlers)
	};
	b.Defaults = {
		thumbs: !0,
		thumbImage: !1,
		thumbContainerClass: "owl-thumbs",
		thumbItemClass: "owl-thumb-item"
	}, b.prototype.currentslide = function () {
		this.owl_currentitem = this.owl._current - this.owl._clones.length / 2, this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0)
	}, b.prototype.draw = function () {
		a(this._thumbcontent._thumbcontainer).children().filter(".active").removeClass("active"), a(this._thumbcontent._thumbcontainer).children().eq(this.owl_currentitem).addClass("active")
	}, b.prototype.initialize = function () {
		var b = this.owl._options;
		this._thumbcontent._thumbcontainer = a("<div>").addClass(b.thumbContainerClass).appendTo(this.$element);
		var c;
		if (this.owl._options.thumbImage)
			for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<button class=" + b.thumbItemClass + '><img src="' + this._thumbcontent[c].attr("src") + '" alt="' + this._thumbcontent[c].attr("alt") + '" /></button>');
		else
			for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<div class=" + b.thumbItemClass + ">" + this._thumbcontent[c] + "</div>");
		a(this._thumbcontent._thumbcontainer).on("click", "button", a.proxy(function (c) {
			var d = a(c.target).parent().is(this._thumbcontent._thumbcontainer) ? a(c.target).index() : a(c.target).parent().index();
			c.preventDefault(), this.owl.to(d, 300)
		}, this))
	}, b.prototype.destroy = function () {
		var a, b;
		for (a in this._handlers) this.owl.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Thumbs = b
}(window.Zepto || window.jQuery, window, document);

/*!  lightGallery */
! function (e, o, i, l) {
	"use strict";
	var a = {
			videoMaxWidth: "855px",
			youtubePlayerParams: !1,
			vimeoPlayerParams: !1,
			dailymotionPlayerParams: !1,
			videojs: !1
		},
		s = function (o) {
			return this.core = e(o).data("lightGallery"), this.$el = e(o), this.core.s = e.extend({}, a, this.core.s), this.videoLoaded = !1, this.init(), this
		};
	s.prototype.init = function () {
		var o = this;
		o.core.$el.on("hasVideo.lg.tm", function (e, i, l, a) {
			if (o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(l, "lg-object", !0, i, a)), a)
				if (o.core.s.videojs) try {
					videojs(o.core.$slide.eq(i).find(".lg-html5").get(0), {}, function () {
						o.videoLoaded || this.play()
					})
				} catch (s) {
					console.error("Make sure you have included videojs")
				} else o.core.$slide.eq(i).find(".lg-html5").get(0).play()
		}), o.core.$el.on("onAferAppendSlide.lg.tm", function (e, i) {
			o.core.$slide.eq(i).find(".lg-video-cont").css("max-width", o.core.s.videoMaxWidth), o.videoLoaded = !0
		});
		var i = function (e) {
			if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
				if (e.hasClass("lg-has-video")) {
					var i = e.find(".lg-youtube").get(0),
						l = e.find(".lg-vimeo").get(0),
						a = e.find(".lg-dailymotion").get(0),
						s = e.find(".lg-html5").get(0);
					if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
					else if (l) try {
							$f(l).api("play")
						} catch (r) {
							console.error("Make sure you have included froogaloop2 js")
						} else if (a) a.contentWindow.postMessage("play", "*");
						else if (s)
						if (o.core.s.videojs) try {
							videojs(s).play()
						} catch (r) {
							console.error("Make sure you have included videojs")
						} else s.play();
					e.addClass("lg-video-palying")
				} else {
					e.addClass("lg-video-palying lg-has-video");
					var t, d, c = function (i, l) {
						if (e.find(".lg-video").append(o.loadVideo(i, "", !1, o.core.index, l)), l)
							if (o.core.s.videojs) try {
								videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0), {}, function () {
									this.play()
								})
							} catch (a) {
								console.error("Make sure you have included videojs")
							} else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()
					};
					o.core.s.dynamic ? (t = o.core.s.dynamicEl[o.core.index].src, d = o.core.s.dynamicEl[o.core.index].html, c(t, d)) : (t = o.core.$items.eq(o.core.index).attr("href") || o.core.$items.eq(o.core.index).attr("data-src"), d = o.core.$items.eq(o.core.index).attr("data-html"), c(t, d));
					var n = e.find(".lg-object");
					e.find(".lg-video").append(n), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", function () {
						e.addClass("lg-complete")
					}))
				}
		};
		o.core.doCss() && o.core.$items.length > 1 && (o.core.s.enableSwipe && o.core.isTouch || o.core.s.enableDrag && !o.core.isTouch) ? o.core.$el.on("onSlideClick.lg.tm", function () {
			var e = o.core.$slide.eq(o.core.index);
			i(e)
		}) : o.core.$slide.on("click.lg", function () {
			i(e(this))
		}), o.core.$el.on("onBeforeSlide.lg.tm", function (e, i, l) {
			var a = o.core.$slide.eq(i),
				s = a.find(".lg-youtube").get(0),
				r = a.find(".lg-vimeo").get(0),
				t = a.find(".lg-dailymotion").get(0),
				d = a.find(".lg-html5").get(0);
			if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
			else if (r) try {
					$f(r).api("pause")
				} catch (c) {
					console.error("Make sure you have included froogaloop2 js")
				} else if (t) t.contentWindow.postMessage("pause", "*");
				else if (d)
				if (o.core.s.videojs) try {
					videojs(d).pause()
				} catch (c) {
					console.error("Make sure you have included videojs")
				} else d.pause();
			var n;
			n = o.core.s.dynamic ? o.core.s.dynamicEl[l].src : o.core.$items.eq(l).attr("href") || o.core.$items.eq(l).attr("data-src");
			var m = o.core.isVideo(n, l) || {};
			(m.youtube || m.vimeo || m.dailymotion) && o.core.$outer.addClass("lg-hide-download")
		}), o.core.$el.on("onAfterSlide.lg.tm", function (e, i) {
			o.core.$slide.eq(i).removeClass("lg-video-palying")
		})
	}, s.prototype.loadVideo = function (o, i, l, a, s) {
		var r = "",
			t = 1,
			d = "",
			c = this.core.isVideo(o, a) || {};
		if (l && (t = this.videoLoaded ? 0 : 1), c.youtube) d = "?wmode=opaque&autoplay=" + t + "&enablejsapi=1", this.core.s.youtubePlayerParams && (d = d + "&" + e.param(this.core.s.youtubePlayerParams)), r = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + c.youtube[1] + d + '" frameborder="0" allowfullscreen></iframe>';
		else if (c.vimeo) d = "?autoplay=" + t + "&api=1", this.core.s.vimeoPlayerParams && (d = d + "&" + e.param(this.core.s.vimeoPlayerParams)), r = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="http://player.vimeo.com/video/' + c.vimeo[1] + d + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		else if (c.dailymotion) d = "?wmode=opaque&autoplay=" + t + "&api=postMessage", this.core.s.dailymotionPlayerParams && (d = d + "&" + e.param(this.core.s.dailymotionPlayerParams)), r = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + c.dailymotion[1] + d + '" frameborder="0" allowfullscreen></iframe>';
		else if (c.html5) {
			var n = s.substring(0, 1);
			("." === n || "#" === n) && (s = e(s).html()), r = s
		}
		return r
	}, s.prototype.destroy = function () {
		this.videoLoaded = !1
	}, e.fn.lightGallery.modules.video = s
}(jQuery, window, document);
/**
 *  Parallax Scrolling Library

 *
 */
(function (e) {
	"function" === typeof define && define.amd ? define(["jquery"], e) : "undefined" !== typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
})(function (e) {
	function W(a) {
		if (console && console.warn) console.warn("Scrollax: " + a);
		else throw "Scrollax: " + a;
	}

	function ka(a) {
		var g = !!("pageYOffset" in a);
		return {
			width: g ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a.offsetWidth,
			height: g ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a.offsetHeight,
			left: a[g ? "pageXOffset" : "scrollLeft"],
			top: a[g ? "pageYOffset" : "scrollTop"]
		}
	}

	function X(a) {
		return (a = a.data("scrollax")) && eval("({" + a + "})") || {}
	}

	function Y(a) {
		var g, c;
		return !!(a && "object" === typeof a && "object" === typeof a.window && a.window == a && a.setTimeout && a.alert && (g = a.document) && "object" === typeof g && (c = g.defaultView || g.parentWindow) && "object" === typeof c && c == a)
	}
	var v = Array.prototype,
		C = v.push,
		Z = v.splice,
		aa = Object.prototype.hasOwnProperty,
		la = /[-+]?\d+(\.\d+)?/g,
		ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
		ba = e(window),
		ca = e(document.body),
		da, ea, L, M, N, q = function (a, g, c) {
			function k() {
				O = fa ? ca.find(ga) : P.find(ga);
				x.length = 0;
				r = !!t.horizontal;
				O.each(na);
				d();
				t.performanceTrick && (F = fa ? ca : P);
				u("load");
				return f
			}

			function l() {
				G && (G = clearTimeout(G));
				G = setTimeout(function () {
					f.reload()
				})
			}

			function d() {
				var ha = x.length;
				t.performanceTrick && F && (clearTimeout(ia), Q || (F.addClass("scrollax-performance"), Q = !0), ia = setTimeout(function () {
					F.removeClass("scrollax-performance");
					Q = !1
				}, 100));
				if (ha) {
					H = ka(a);
					for (var c = 0; c < ha; c++) I = x[c],
						y = L(I.element, a), 0 > y[r ? "right" : "bottom"] || y[r ? "left" : "top"] > H[r ? "width" : "height"] || (ja = I.options, R = ja.offset || t.offset || 0, J = y[r ? "right" : "bottom"], z = y[r ? "width" : "height"], A = (z - J + R) / z, 0 > A && (J = y[r ? "left" : "top"], z = H[r ? "width" : "height"], A = -1 + (z - J + R) / z), 1 < A || -1 > A || b(I, A, r));
					u("scroll", H)
				}
			}

			function b(a, b) {
				S = a.parallaxElements;
				var c = S.length;
				if (c)
					for (var f = 0; f < c; f++) {
						T = S[f];
						var g = oa = T.element,
							d = b;
						U = T.properties || (r ? {
							translateX: "100%"
						} : {
							translateY: "100%"
						});
						D = "";
						for (B in U) {
							n = U[B];
							if ("number" === typeof n) n *=
								d;
							else if ("string" === typeof n)
								for (K = n.match(la), m = 0, E = K.length; m < E; m++) n = n.replace(K[m], parseFloat(K[m] * d));
							if (-1 !== e.inArray(B, ma)) D += B + "(" + n + ")";
							else {
								var k = g.style,
									l = B,
									h;
								"opacity" === B ? (h = 0 > d ? 1 + n : 1 - n, h = 0 > h ? 0 : 1 < h ? 1 : h) : h = n;
								k[l] = h
							}
						}
						D && (g.style[da] = ea + D)
					}
			}

			function pa(a) {
				return "undefined" !== typeof a ? "number" !== typeof a && "string" !== typeof a || "" === a || isNaN(a) ? O.index(a) : 0 <= a && a < x.length ? a : -1 : -1
			}

			function u(a, b) {
				if (h[a]) {
					E = h[a].length;
					for (m = V.length = 0; m < E; m++) C.call(V, h[a][m]);
					for (m = 0; m < E; m++) V[m].call(f,
						a, b)
				}
			}

			function p(a, b) {
				for (var c = 0, f = h[a].length; c < f; c++)
					if (h[a][c] === b) return c;
				return -1
			}
			var f = this,
				P = a && e(a).eq(0) || ba,
				w = q.instances,
				v = null;
			a = P[0];
			e.each(w, function (b, c) {
				b && b.frame === a && (v = !0)
			});
			if (!a || v) v ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");
			else {
				var t = e.extend({}, q.defaults, g),
					x = [],
					O = null,
					ga = t.parentSelector || "[data-scrollax-parent]",
					qa = t.elementsSelector || "[data-scrollax]",
					h = {},
					V = [],
					G, fa = Y(a),
					m, E, F, ia, Q, H, r, R, y, I, ja, A, J, z, S, T, oa, U,
					B, n, D, K;
				f.frame = a;
				f.options = t;
				f.parents = x;
				f.initialized = !1;
				f.reload = k;
				var na = function (a, b) {
					var c = e(b),
						f = X(e(b)),
						d = {};
					d.element = b;
					d.options = f;
					d.parallaxElements = [];
					c.find(qa).each(function (a, b) {
						var c = X(e(b));
						c.element = b;
						C.call(d.parallaxElements, c)
					});
					C.call(x, d)
				};
				f.scroll = d;
				f.getIndex = pa;
				f.one = function (a, b) {
					function c() {
						b.apply(f, arguments);
						f.off(a, c)
					}
					f.on(a, c);
					return f
				};
				f.on = function (a, b) {
					if ("object" === typeof a)
						for (var c in a) {
							if (aa.call(a, c)) f.on(c, a[c])
						} else if ("function" === typeof b) {
							c = a.split(" ");
							for (var d = 0, g = c.length; d < g; d++) h[c[d]] = h[c[d]] || [], -1 === p(c[d], b) && C.call(h[c[d]], b)
						} else if ("array" === typeof b)
						for (c = 0, d = b.length; c < d; c++) f.on(a, b[c]);
					return f
				};
				f.off = function (a, c) {
					if (c instanceof Array)
						for (var b = 0, d = c.length; b < d; b++) f.off(a, c[b]);
					else
						for (var b = a.split(" "), d = 0, g = b.length; d < g; d++)
							if (h[b[d]] = h[b[d]] || [], "undefined" === typeof c) h[b[d]].length = 0;
							else {
								var k = p(b[d], c); - 1 !== k && Z.call(h[b[d]], k, 1)
							} return f
				};
				f.set = function (a, b) {
					e.isPlainObject(a) ? e.extend(t, a) : aa.call(t, a) && (t[a] = b);
					k();
					return f
				};
				f.destroy = function () {
					N(window, "resize", l);
					N(a, "scroll", d);
					e.each(w, function (b, c) {
						b && b.frame === a && Z.call(q.instances, c, 1)
					});
					x.length = 0;
					f.initialized = !1;
					u("destroy");
					return f
				};
				f.init = function () {
					if (!f.initialized) return f.on(c), k(), M(window, "resize", l), M(a, "scroll", d), C.call(q.instances, f), f.initialized = !0, u("initialized"), f
				}
			}
		};
	q.instances = [];
	(function () {
		var a, g, c, k, l, d, b, e;
		L = function (u, p) {
			g = u.ownerDocument || u;
			c = g.documentElement;
			k = Y(p) ? p : g.defaultView || window;
			p = p && p !== g ? p : c;
			l = (k.pageYOffset ||
				c.scrollTop) - c.clientTop;
			d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
			b = {
				top: 0,
				left: 0
			};
			if (u && u.getBoundingClientRect) {
				var f = {},
					q = u.getBoundingClientRect();
				for (a in q) f[a] = q[a];
				b = f;
				b.width = b.right - b.left;
				b.height = b.bottom - b.top
			} else return null;
			if (p === k) return b;
			b.top += l;
			b.left += d;
			b.right += d;
			b.bottom += l;
			if (p === c) return b;
			e = L(p);
			b.left -= e.left;
			b.right -= e.left;
			b.top -= e.top;
			b.bottom -= e.top;
			return b
		}
	})();
	(function () {
		function a() {
			this.returnValue = !1
		}

		function g() {
			this.cancelBubble = !0
		}
		M = window.addEventListener ?
			function (a, g, e, d) {
				a.addEventListener(g, e, d || !1);
				return e
			} : function (c, e, l) {
				var d = e + l;
				c[d] = c[d] || function () {
					var b = window.event;
					b.target = b.srcElement;
					b.preventDefault = a;
					b.stopPropagation = g;
					l.call(c, b)
				};
				c.attachEvent("on" + e, c[d]);
				return l
			};
		N = window.removeEventListener ? function (a, g, e, d) {
			a.removeEventListener(g, e, d || !1);
			return e
		} : function (a, g, e) {
			var d = g + e;
			a.detachEvent("on" + g, a[d]);
			try {
				delete a[d]
			} catch (b) {
				a[d] = void 0
			}
			return e
		}
	})();
	(function () {
		function a(a) {
			for (var e = 0, d = g.length; e < d; e++) {
				var b = g[e] ? g[e] +
					a.charAt(0).toUpperCase() + a.slice(1) : a;
				if (null != c.style[b]) return b
			}
		}
		var g = ["", "webkit", "moz", "ms", "o"],
			c = document.createElement("div");
		da = a("transform");
		ea = a("perspective") ? "translateZ(0) " : ""
	})();
	q.defaults = {
		horizontal: !1,
		offset: 0,
		parentSelector: null,
		elementsSelector: null,
		performanceTrick: !1
	};
	window.Scrollax = q;
	e.fn.Scrollax = function (a, g) {
		var c, k;
		if (!e.isPlainObject(a)) {
			if ("string" === typeof a || !1 === a) c = !1 === a ? "destroy" : a, k = slice.call(arguments, 1);
			a = {}
		}
		return this.each(function (l, d) {
			var b = e.data(d,
				"scrollax");
			b || c ? b && c && b[c] && b[c].apply(b, k) : e.data(d, "scrollax", (new q(d, a, g)).init())
		})
	};
	e.Scrollax = function (a, e) {
		ba.Scrollax(a, e)
	};
	var v = document.head || document.getElementsByTagName("head")[0],
		w = document.createElement("style");
	w.type = "text/css";
	w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" :
		w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
	v.appendChild(w);
	return q
});

(function ($) {
	$.fn.appear = function (f, o) {
		var s = $.extend({
			one: true
		}, o);
		return this.each(function () {
			var t = $(this);
			t.appeared = false;
			if (!f) {
				t.trigger('appear', s.data);
				return;
			}
			var w = $(window);
			var c = function () {
				if (!t.is(':visible')) {
					t.appeared = false;
					return;
				}
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;
				if (y + t.height() >= b && y <= b + w.height() && x + t.width() >= a && x <= a + w.width()) {
					if (!t.appeared) t.trigger('appear', s.data);
				} else {
					t.appeared = false;
				}
			};
			var m = function () {
				t.appeared = true;
				if (s.one) {
					w.unbind('scroll', c);
					var i = $.inArray(c, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}
				f.apply(this, arguments);
			};
			if (s.one) t.one('appear', s.data, m);
			else t.bind('appear', s.data, m);
			w.scroll(c);
			$.fn.appear.checks.push(c);
			(c)();
		});
	};
	$.extend($.fn.appear, {
		checks: [],
		timeout: null,
		checkAll: function () {
			var l = $.fn.appear.checks.length;
			if (l > 0)
				while (l--)($.fn.appear.checks[l])();
		},
		run: function () {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});
	$.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function (i, n) {
		var u = $.fn[n];
		if (u) {
			$.fn[n] = function () {
				var r = u.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});
})(jQuery);

/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.2.0
 */

// Utility
if (typeof Object.create !== 'function') {
	Object.create = function (obj) {
		function F() {}
		F.prototype = obj;
		return new F()
	}
}(function ($, window, document, undefined) {
	"use strict";
	var SinglePageNav = {
		init: function (options, container) {
			this.options = $.extend({}, $.fn.singlePageNav.defaults, options);
			this.container = container;
			this.$container = $(container);
			this.$links = this.$container.find('a');
			if (this.options.filter !== '') {
				this.$links = this.$links.filter(this.options.filter)
			}
			this.$window = $(window);
			this.$htmlbody = $('html, body');
			this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));
			this.didScroll = false;
			this.checkPosition();
			this.setTimer()
		},
		handleClick: function (e) {
			var self = this,
				link = e.currentTarget,
				$elem = $(link.hash);
			e.preventDefault();
			if ($elem.length) {
				self.clearTimer();
				if (typeof self.options.beforeStart === 'function') {
					self.options.beforeStart()
				}
				self.setActiveLink(link.hash);
				self.scrollTo($elem, function () {
					if (self.options.updateHash && history.pushState) {
						history.pushState(null, null, link.hash)
					}
					self.setTimer();
					if (typeof self.options.onComplete === 'function') {
						self.options.onComplete()
					}
				})
			}
		},
		scrollTo: function ($elem, callback) {
			var self = this;
			var target = self.getCoords($elem).top;
			var called = false;
			self.$htmlbody.stop().animate({
				scrollTop: target
			}, {
				duration: self.options.speed,
				easing: self.options.easing,
				complete: function () {
					if (typeof callback === 'function' && !called) {
						callback()
					}
					called = true
				}
			})
		},
		setTimer: function () {
			var self = this;
			self.$window.on('scroll.singlePageNav', function () {
				self.didScroll = true
			});
			self.timer = setInterval(function () {
				if (self.didScroll) {
					self.didScroll = false;
					self.checkPosition()
				}
			}, 250)
		},
		clearTimer: function () {
			clearInterval(this.timer);
			this.$window.off('scroll.singlePageNav');
			this.didScroll = false
		},
		checkPosition: function () {
			var scrollPos = this.$window.scrollTop();
			var currentSection = this.getCurrentSection(scrollPos);
			if (currentSection !== null) {
				this.setActiveLink(currentSection)
			}
		},
		getCoords: function ($elem) {
			return {
				top: Math.round($elem.offset().top) - this.options.offset
			}
		},
		setActiveLink: function (href) {
			var $activeLink = this.$container.find("a[href$='" + href + "']");
			if (!$activeLink.hasClass(this.options.currentClass)) {
				this.$links.removeClass(this.options.currentClass);
				$activeLink.addClass(this.options.currentClass);
				if ($(".scroll-nav  a").hasClass("act-link")) $(".scroll-nav  a.act-link").each(function () {
					var a = $(this).data("bgscr"),
						b = $(this).data("bgtex");
					var ua = window.navigator.userAgent;
					var msie = ua.indexOf("MSIE ");
					if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
						$(".bg-title span").html(b)
					} else {
						$(".bg-title span").html(b).shuffleLetters({})
					}
					$(".column-image").addClass("scrbg");
					setTimeout(function () {
						$(".bg-scroll").css("background-image", "url(" + a + ")");
						$(".column-image").removeClass("scrbg")
					}, 700)
				})
			}
		},
		getCurrentSection: function (scrollPos) {
			var i, hash, coords, section;
			for (i = 0; i < this.$links.length; i++) {
				hash = this.$links[i].hash;
				if ($(hash).length) {
					coords = this.getCoords($(hash));
					if (scrollPos >= coords.top - this.options.threshold) {
						section = hash
					}
				}
			}
			return section || ((this.$links.length === 0) ? (null) : (this.$links[0].hash))
		}
	};
	$.fn.singlePageNav = function (options) {
		return this.each(function () {
			var singlePageNav = Object.create(SinglePageNav);
			singlePageNav.init(options, this)
		})
	};
	$.fn.singlePageNav.defaults = {
		offset: 0,
		threshold: 120,
		speed: 400,
		currentClass: 'current',
		easing: 'swing',
		updateHash: false,
		filter: '',
		onComplete: false,
		beforeStart: false
	}
})(jQuery, window, document);


/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */

(function (e) {
	function t(e) {
		var t = "";
		if (e == "lowerLetter") {
			t = "abcdefghijklmnopqrstuvwxyz0123456789"
		} else if (e == "upperLetter") {
			t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
		} else if (e == "symbol") {
			t = "0123456789"
		}
		var n = t.split("");
		return n[Math.floor(Math.random() * n.length)]
	}
	e.fn.shuffleLetters = function (n) {
		var r = e.extend({
			step: 8,
			fps: 25,
			text: "",
			callback: function () {}
		}, n);
		return this.each(function () {
			var n = e(this),
				i = "";
			if (n.data("animated")) {
				return true
			}
			n.data("animated", true);
			if (r.text) {
				i = r.text.split("")
			} else {
				i = n.text().split("")
			}
			var s = [],
				o = [];
			for (var u = 0; u < i.length; u++) {
				var a = i[u];
				if (a == " ") {
					s[u] = "space";
					continue
				} else if (/[a-z]/.test(a)) {
					s[u] = "lowerLetter"
				} else if (/[A-Z]/.test(a)) {
					s[u] = "upperLetter"
				} else {
					s[u] = "symbol"
				}
				o.push(u)
			}
			n.html("");
			(function f(e) {
				var u, a = o.length,
					l = i.slice(0);
				if (e > a) {
					n.data("animated", false);
					r.callback(n);
					return
				}
				for (u = Math.max(e, 0); u < a; u++) {
					if (u < e + r.step) {
						l[o[u]] = t(s[o[u]])
					} else {
						l[o[u]] = ""
					}
				}
				n.text(l.join(""));
				setTimeout(function () {
					f(e + 1)
				}, 1e3 / r.fps)
			})(-r.step)
		})
	}
})(jQuery);



(function (a) {
	a.isScrollToFixed = function (b) {
		return !!a(b).data("ScrollToFixed")
	};
	a.ScrollToFixed = function (d, i) {
		var l = this;
		l.$el = a(d);
		l.el = d;
		l.$el.data("ScrollToFixed", l);
		var c = false;
		var G = l.$el;
		var H;
		var E;
		var e;
		var y;
		var D = 0;
		var q = 0;
		var j = -1;
		var f = -1;
		var t = null;
		var z;
		var g;

		function u() {
			G.trigger("preUnfixed.ScrollToFixed");
			k();
			G.trigger("unfixed.ScrollToFixed");
			f = -1;
			D = G.offset().top;
			q = G.offset().left;
			if (l.options.offsets) {
				q += (G.offset().left - G.position().left)
			}
			if (j == -1) {
				j = q
			}
			H = G.css("position");
			c = true;
			if (l.options.bottom != -1) {
				G.trigger("preFixed.ScrollToFixed");
				w();
				G.trigger("fixed.ScrollToFixed")
			}
		}

		function n() {
			var I = l.options.limit;
			if (!I) {
				return 0
			}
			if (typeof (I) === "function") {
				return I.apply(G)
			}
			return I
		}

		function p() {
			return H === "fixed"
		}

		function x() {
			return H === "absolute"
		}

		function h() {
			return !(p() || x())
		}

		function w() {
			if (!p()) {
				t.css({
					display: G.css("display"),
					width: G.outerWidth(true),
					height: G.outerHeight(true),
					"float": G.css("float")
				});
				cssOptions = {
					"z-index": l.options.zIndex,
					position: "fixed",
					top: l.options.bottom == -1 ? s() : "",
					bottom: l.options.bottom == -1 ? "" : l.options.bottom,
					"margin-left": "0px"
				};
				if (!l.options.dontSetWidth) {
					cssOptions.width = G.width()
				}
				G.css(cssOptions);
				G.addClass(l.options.baseClassName);
				if (l.options.className) {
					G.addClass(l.options.className)
				}
				H = "fixed"
			}
		}

		function b() {
			var J = n();
			var I = q;
			if (l.options.removeOffsets) {
				I = "";
				J = J - D
			}
			cssOptions = {
				position: "absolute",
				top: J,
				left: I,
				"margin-left": "0px",
				bottom: ""
			};
			if (!l.options.dontSetWidth) {
				cssOptions.width = G.width()
			}
			G.css(cssOptions);
			H = "absolute"
		}

		function k() {
			if (!h()) {
				f = -1;
				t.css("display", "none");
				G.css({
					"z-index": y,
					width: "",
					position: E,
					left: "",
					top: e,
					"margin-left": ""
				});
				G.removeClass("scroll-to-fixed-fixed");
				if (l.options.className) {
					G.removeClass(l.options.className)
				}
				H = null
			}
		}

		function v(I) {
			if (I != f) {
				G.css("left", q - I);
				f = I
			}
		}

		function s() {
			var I = l.options.marginTop;
			if (!I) {
				return 0
			}
			if (typeof (I) === "function") {
				return I.apply(G)
			}
			return I
		}

		function A() {
			if (!a.isScrollToFixed(G)) {
				return
			}
			var K = c;
			if (!c) {
				u()
			} else {
				if (h()) {
					D = G.offset().top;
					q = G.offset().left
				}
			}
			var I = a(window).scrollLeft();
			var L = a(window).scrollTop();
			var J = n();
			if (l.options.minWidth && a(window).width() < l.options.minWidth) {
				if (!h() || !K) {
					o();
					G.trigger("preUnfixed.ScrollToFixed");
					k();
					G.trigger("unfixed.ScrollToFixed")
				}
			} else {
				if (l.options.maxWidth && a(window).width() > l.options.maxWidth) {
					if (!h() || !K) {
						o();
						G.trigger("preUnfixed.ScrollToFixed");
						k();
						G.trigger("unfixed.ScrollToFixed")
					}
				} else {
					if (l.options.bottom == -1) {
						if (J > 0 && L >= J - s()) {
							if (!x() || !K) {
								o();
								G.trigger("preAbsolute.ScrollToFixed");
								b();
								G.trigger("unfixed.ScrollToFixed")
							}
						} else {
							if (L >= D - s()) {
								if (!p() || !K) {
									o();
									G.trigger("preFixed.ScrollToFixed");
									w();
									f = -1;
									G.trigger("fixed.ScrollToFixed")
								}
								v(I)
							} else {
								if (!h() || !K) {
									o();
									G.trigger("preUnfixed.ScrollToFixed");
									k();
									G.trigger("unfixed.ScrollToFixed")
								}
							}
						}
					} else {
						if (J > 0) {
							if (L + a(window).height() - G.outerHeight(true) >= J - (s() || -m())) {
								if (p()) {
									o();
									G.trigger("preUnfixed.ScrollToFixed");
									if (E === "absolute") {
										b()
									} else {
										k()
									}
									G.trigger("unfixed.ScrollToFixed")
								}
							} else {
								if (!p()) {
									o();
									G.trigger("preFixed.ScrollToFixed");
									w()
								}
								v(I);
								G.trigger("fixed.ScrollToFixed")
							}
						} else {
							v(I)
						}
					}
				}
			}
		}

		function m() {
			if (!l.options.bottom) {
				return 0
			}
			return l.options.bottom
		}

		function o() {
			var I = G.css("position");
			if (I == "absolute") {
				G.trigger("postAbsolute.ScrollToFixed")
			} else {
				if (I == "fixed") {
					G.trigger("postFixed.ScrollToFixed")
				} else {
					G.trigger("postUnfixed.ScrollToFixed")
				}
			}
		}
		var C = function (I) {
			if (G.is(":visible")) {
				c = false;
				A()
			}
		};
		var F = function (I) {
			(!!window.requestAnimationFrame) ? requestAnimationFrame(A): A()
		};
		var B = function () {
			var J = document.body;
			if (document.createElement && J && J.appendChild && J.removeChild) {
				var L = document.createElement("div");
				if (!L.getBoundingClientRect) {
					return null
				}
				L.innerHTML = "x";
				L.style.cssText = "position:fixed;top:100px;";
				J.appendChild(L);
				var M = J.style.height,
					N = J.scrollTop;
				J.style.height = "3000px";
				J.scrollTop = 500;
				var I = L.getBoundingClientRect().top;
				J.style.height = M;
				var K = (I === 100);
				J.removeChild(L);
				J.scrollTop = N;
				return K
			}
			return null
		};
		var r = function (I) {
			I = I || window.event;
			if (I.preventDefault) {
				I.preventDefault()
			}
			I.returnValue = false
		};
		l.init = function () {
			l.options = a.extend({}, a.ScrollToFixed.defaultOptions, i);
			y = G.css("z-index");
			l.$el.css("z-index", l.options.zIndex);
			t = a("<div />");
			H = G.css("position");
			E = G.css("position");
			e = G.css("top");
			if (h()) {
				l.$el.after(t)
			}
			a(window).bind("resize.ScrollToFixed", C);
			a(window).bind("scroll.ScrollToFixed", F);
			if ("ontouchmove" in window) {
				a(window).bind("touchmove.ScrollToFixed", A)
			}
			if (l.options.preFixed) {
				G.bind("preFixed.ScrollToFixed", l.options.preFixed)
			}
			if (l.options.postFixed) {
				G.bind("postFixed.ScrollToFixed", l.options.postFixed)
			}
			if (l.options.preUnfixed) {
				G.bind("preUnfixed.ScrollToFixed", l.options.preUnfixed)
			}
			if (l.options.postUnfixed) {
				G.bind("postUnfixed.ScrollToFixed", l.options.postUnfixed)
			}
			if (l.options.preAbsolute) {
				G.bind("preAbsolute.ScrollToFixed", l.options.preAbsolute)
			}
			if (l.options.postAbsolute) {
				G.bind("postAbsolute.ScrollToFixed", l.options.postAbsolute)
			}
			if (l.options.fixed) {
				G.bind("fixed.ScrollToFixed", l.options.fixed)
			}
			if (l.options.unfixed) {
				G.bind("unfixed.ScrollToFixed", l.options.unfixed)
			}
			if (l.options.spacerClass) {
				t.addClass(l.options.spacerClass)
			}
			G.bind("resize.ScrollToFixed", function () {
				t.height(G.height())
			});
			G.bind("scroll.ScrollToFixed", function () {
				G.trigger("preUnfixed.ScrollToFixed");
				k();
				G.trigger("unfixed.ScrollToFixed");
				A()
			});
			G.bind("detach.ScrollToFixed", function (I) {
				r(I);
				G.trigger("preUnfixed.ScrollToFixed");
				k();
				G.trigger("unfixed.ScrollToFixed");
				a(window).unbind("resize.ScrollToFixed", C);
				a(window).unbind("scroll.ScrollToFixed", F);
				G.unbind(".ScrollToFixed");
				t.remove();
				l.$el.removeData("ScrollToFixed")
			});
			C()
		};
		l.init()
	};
	a.ScrollToFixed.defaultOptions = {
		marginTop: 0,
		limit: 0,
		bottom: -1,
		zIndex: 1000,
		baseClassName: "scroll-to-fixed-fixed"
	};
	a.fn.scrollToFixed = function (b) {
		return this.each(function () {
			(new a.ScrollToFixed(this, b))
		})
	}
})(jQuery);



/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.1
 **/
(function (e, t) {
	if (typeof exports === "object") {
		module.exports = t(require("jquery"))
	} else if (typeof define === "function" && define.amd) {
		define("EasyPieChart", ["jquery"], t)
	} else {
		t(e.jQuery)
	}
})(this, function (e) {
	var t = function (e, t) {
		var n;
		var r = document.createElement("canvas");
		if (typeof G_vmlCanvasManager !== "undefined") {
			G_vmlCanvasManager.initElement(r)
		}
		var i = r.getContext("2d");
		r.width = r.height = t.size;
		e.appendChild(r);
		var s = 1;
		if (window.devicePixelRatio > 1) {
			s = window.devicePixelRatio;
			r.style.width = r.style.height = [t.size, "px"].join("");
			r.width = r.height = t.size * s;
			i.scale(s, s)
		}
		i.translate(t.size / 2, t.size / 2);
		i.rotate((-1 / 2 + t.rotate / 180) * Math.PI);
		var o = (t.size - t.lineWidth) / 2;
		if (t.scaleColor && t.scaleLength) {
			o -= t.scaleLength + 2
		}
		Date.now = Date.now || function () {
			return +(new Date)
		};
		var u = function (e, t, n) {
			n = Math.min(Math.max(0, n || 1), 1);
			i.beginPath();
			i.arc(0, 0, o, 0, Math.PI * 2 * n, false);
			i.strokeStyle = e;
			i.lineWidth = t;
			i.stroke()
		};
		var a = function () {
			var e;
			var n;
			var r = 24;
			i.lineWidth = 1;
			i.fillStyle = t.scaleColor;
			i.save();
			for (var r = 24; r > 0; --r) {
				if (r % 6 === 0) {
					n = t.scaleLength;
					e = 0
				} else {
					n = t.scaleLength * .6;
					e = t.scaleLength - n
				}
				i.fillRect(-t.size / 2 + e, 0, n, 1);
				i.rotate(Math.PI / 12)
			}
			i.restore()
		};
		var f = function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
				window.setTimeout(e, 1e3 / 60)
			}
		}();
		var l = function () {
			t.scaleColor && a();
			t.trackColor && u(t.trackColor, t.lineWidth)
		};
		this.clear = function () {
			i.clearRect(t.size / -2, t.size / -2, t.size, t.size)
		};
		this.draw = function (e) {
			if (!!t.scaleColor || !!t.trackColor) {
				if (i.getImageData && i.putImageData) {
					if (!n) {
						l();
						n = i.getImageData(0, 0, t.size * s, t.size * s)
					} else {
						i.putImageData(n, 0, 0)
					}
				} else {
					this.clear();
					l()
				}
			} else {
				this.clear()
			}
			i.lineCap = t.lineCap;
			var r;
			if (typeof t.barColor === "function") {
				r = t.barColor(e)
			} else {
				r = t.barColor
			}
			if (e > 0) {
				u(r, t.lineWidth, e / 100)
			}
		}.bind(this);
		this.animate = function (e, n) {
			var r = Date.now();
			t.onStart(e, n);
			var i = function () {
				var s = Math.min(Date.now() - r, t.animate);
				var o = t.easing(this, s, e, n - e, t.animate);
				this.draw(o);
				t.onStep(e, n, o);
				if (s >= t.animate) {
					t.onStop(e, n)
				} else {
					f(i)
				}
			}.bind(this);
			f(i)
		}.bind(this)
	};
	var n = function (e, n) {
		var r = {
			barColor: "#F54A4B",
			trackColor: "#ccc",
			scaleColor: "#ccc",
			scaleLength: 0,
			lineCap: "round",
			lineWidth: 10,
			size: 152,
			rotate: 0,
			animate: 4e3,
			easing: function (e, t, n, r, i) {
				t = t / (i / 2);
				if (t < 1) {
					return r / 2 * t * t + n
				}
				return -r / 2 * (--t * (t - 2) - 1) + n
			},
			onStart: function (e, t) {
				return
			},
			onStep: function (e, t, n) {
				return
			},
			onStop: function (e, t) {
				return
			}
		};
		if (typeof t !== "undefined") {
			r.renderer = t
		} else if (typeof SVGRenderer !== "undefined") {
			r.renderer = SVGRenderer
		} else {
			throw new Error("Please load either the SVG- or the CanvasRenderer")
		}
		var i = {};
		var s = 0;
		var o = function () {
			this.el = e;
			this.options = i;
			for (var t in r) {
				if (r.hasOwnProperty(t)) {
					i[t] = n && typeof n[t] !== "undefined" ? n[t] : r[t];
					if (typeof i[t] === "function") {
						i[t] = i[t].bind(this)
					}
				}
			}
			if (typeof i.easing === "string" && typeof jQuery !== "undefined" && jQuery.isFunction(jQuery.easing[i.easing])) {
				i.easing = jQuery.easing[i.easing]
			} else {
				i.easing = r.easing
			}
			this.renderer = new i.renderer(e, i);
			this.renderer.draw(s);
			if (e.dataset && e.dataset.percent) {
				this.update(parseFloat(e.dataset.percent))
			} else if (e.getAttribute && e.getAttribute("data-percent")) {
				this.update(parseFloat(e.getAttribute("data-percent")))
			}
		}.bind(this);
		this.update = function (e) {
			e = parseFloat(e);
			if (i.animate) {
				this.renderer.animate(s, e)
			} else {
				this.renderer.draw(e)
			}
			s = e;
			return this
		}.bind(this);
		o()
	};
	e.fn.easyPieChart = function (t) {
		return this.each(function () {
			if (!e.data(this, "easyPieChart")) {
				e.data(this, "easyPieChart", new n(this, t))
			}
		})
	}
});

// Snap.svg 0.3.0
//
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2014-06-03
! function (a) {
	var b, c, d = "0.4.2",
		e = "hasOwnProperty",
		f = /[\.\/]/,
		g = /\s*,\s*/,
		h = "*",
		i = function (a, b) {
			return a - b
		},
		j = {
			n: {}
		},
		k = function () {
			for (var a = 0, b = this.length; b > a; a++)
				if ("undefined" != typeof this[a]) return this[a]
		},
		l = function () {
			for (var a = this.length; --a;)
				if ("undefined" != typeof this[a]) return this[a]
		},
		m = function (a, d) {
			a = String(a);
			var e, f = c,
				g = Array.prototype.slice.call(arguments, 2),
				h = m.listeners(a),
				j = 0,
				n = [],
				o = {},
				p = [],
				q = b;
			p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
			for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
			for (n.sort(i); n[j] < 0;)
				if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
			for (r = 0; s > r; r++)
				if (e = h[r], "zIndex" in e)
					if (e.zIndex == n[j]) {
						if (p.push(e.apply(d, g)), c) break;
						do
							if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break; while (e)
					} else o[e.zIndex] = e;
			else if (p.push(e.apply(d, g)), c) break;
			return c = f, b = q, p
		};
	m._events = j, m.listeners = function (a) {
		var b, c, d, e, g, i, k, l, m = a.split(f),
			n = j,
			o = [n],
			p = [];
		for (e = 0, g = m.length; g > e; e++) {
			for (l = [], i = 0, k = o.length; k > i; i++)
				for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
			o = l
		}
		return p
	}, m.on = function (a, b) {
		if (a = String(a), "function" != typeof b) return function () {};
		for (var c = a.split(g), d = 0, e = c.length; e > d; d++) ! function (a) {
			for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
				n: {}
			});
			for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
				if (e.f[g] == b) {
					c = !0;
					break
				}! c && e.f.push(b)
		}(c[d]);
		return function (a) {
			+a == +a && (b.zIndex = +a)
		}
	}, m.f = function (a) {
		var b = [].slice.call(arguments, 1);
		return function () {
			m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
		}
	}, m.stop = function () {
		c = 1
	}, m.nt = function (a) {
		return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
	}, m.nts = function () {
		return b.split(f)
	}, m.off = m.unbind = function (a, b) {
		if (!a) return void(m._events = j = {
			n: {}
		});
		var c = a.split(g);
		if (c.length > 1)
			for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b);
		else {
			c = a.split(f);
			var k, l, n, d, i, o, p, q = [j];
			for (d = 0, i = c.length; i > d; d++)
				for (o = 0; o < q.length; o += n.length - 2) {
					if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]);
					else
						for (l in k) k[e](l) && n.push(k[l]);
					q.splice.apply(q, n)
				}
			for (d = 0, i = q.length; i > d; d++)
				for (k = q[d]; k.n;) {
					if (b) {
						if (k.f) {
							for (o = 0, p = k.f.length; p > o; o++)
								if (k.f[o] == b) {
									k.f.splice(o, 1);
									break
								}! k.f.length && delete k.f
						}
						for (l in k.n)
							if (k.n[e](l) && k.n[l].f) {
								var r = k.n[l].f;
								for (o = 0, p = r.length; p > o; o++)
									if (r[o] == b) {
										r.splice(o, 1);
										break
									}! r.length && delete k.n[l].f
							}
					} else {
						delete k.f;
						for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
					}
					k = k.n
				}
		}
	}, m.once = function (a, b) {
		var c = function () {
			return m.unbind(a, c), b.apply(this, arguments)
		};
		return m.on(a, c)
	}, m.version = d, m.toString = function () {
		return "You are running Eve " + d
	}, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function () {
		return m
	}) : a.eve = m
}(this),
function (a, b) {
	"function" == typeof define && define.amd ? define(["eve"], function (c) {
		return b(a, c)
	}) : b(a, a.eve)
}(this, function (a, b) {
	var c = function (b) {
			var c = {},
				d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
					setTimeout(a, 16)
				},
				e = Array.isArray || function (a) {
					return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
				},
				f = 0,
				g = "M" + (+new Date).toString(36),
				h = function () {
					return g + (f++).toString(36)
				},
				i = Date.now || function () {
					return +new Date
				},
				j = function (a) {
					var b = this;
					if (null == a) return b.s;
					var c = b.s - a;
					b.b += b.dur * c, b.B += b.dur * c, b.s = a
				},
				k = function (a) {
					var b = this;
					return null == a ? b.spd : void(b.spd = a)
				},
				l = function (a) {
					var b = this;
					return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
				},
				m = function () {
					var a = this;
					delete c[a.id], a.update(), b("mina.stop." + a.id, a)
				},
				n = function () {
					var a = this;
					a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
				},
				o = function () {
					var a = this;
					a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
				},
				p = function () {
					var a, b = this;
					if (e(b.start)) {
						a = [];
						for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
					} else a = +b.start + (b.end - b.start) * b.easing(b.s);
					b.set(a)
				},
				q = function () {
					var a = 0;
					for (var e in c)
						if (c.hasOwnProperty(e)) {
							var f = c[e],
								g = f.get();
							a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function (a) {
								setTimeout(function () {
									b("mina.finish." + a.id, a)
								})
							}(f)), f.update()
						} a && d(q)
				},
				r = function (a, b, e, f, g, i, s) {
					var t = {
						id: h(),
						start: a,
						end: b,
						b: e,
						s: 0,
						dur: f - e,
						spd: 1,
						get: g,
						set: i,
						easing: s || r.linear,
						status: j,
						speed: k,
						duration: l,
						stop: m,
						pause: n,
						resume: o,
						update: p
					};
					c[t.id] = t;
					var u, v = 0;
					for (u in c)
						if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
					return 1 == v && d(q), t
				};
			return r.time = i, r.getById = function (a) {
				return c[a] || null
			}, r.linear = function (a) {
				return a
			}, r.easeout = function (a) {
				return Math.pow(a, 1.7)
			}, r.easein = function (a) {
				return Math.pow(a, .48)
			}, r.easeinout = function (a) {
				if (1 == a) return 1;
				if (0 == a) return 0;
				var b = .48 - a / 1.04,
					c = Math.sqrt(.1734 + b * b),
					d = c - b,
					e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
					f = -c - b,
					g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
					h = e + g + .5;
				return 3 * (1 - h) * h * h + h * h * h
			}, r.backin = function (a) {
				if (1 == a) return 1;
				var b = 1.70158;
				return a * a * ((b + 1) * a - b)
			}, r.backout = function (a) {
				if (0 == a) return 0;
				a -= 1;
				var b = 1.70158;
				return a * a * ((b + 1) * a + b) + 1
			}, r.elastic = function (a) {
				return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
			}, r.bounce = function (a) {
				var b, c = 7.5625,
					d = 2.75;
				return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
			}, a.mina = r, r
		}("undefined" == typeof b ? function () {} : b),
		d = function () {
			function d(a, b) {
				if (a) {
					if (a.tagName) return y(a);
					if (f(a, "array") && d.set) return d.set.apply(d, a);
					if (a instanceof u) return a;
					if (null == b) return a = z.doc.querySelector(a), y(a)
				}
				return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new x(a, b)
			}

			function e(a, b) {
				if (b) {
					if ("#text" == a && (a = z.doc.createTextNode(b.text || "")), "string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(W, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(X, b.substring(4)) : a.getAttribute(b);
					for (var c in b)
						if (b[A](c)) {
							var d = B(b[c]);
							d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(W, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(X, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c)
						}
				} else a = z.doc.createElementNS(X, a);
				return a
			}

			function f(a, b) {
				return b = B.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || L.call(a).slice(8, -1).toLowerCase() == b
			}

			function h(a) {
				if ("function" == typeof a || Object(a) !== a) return a;
				var b = new a.constructor;
				for (var c in a) a[A](c) && (b[c] = h(a[c]));
				return b
			}

			function i(a, b) {
				for (var c = 0, d = a.length; d > c; c++)
					if (a[c] === b) return a.push(a.splice(c, 1)[0])
			}

			function j(a, b, c) {
				function d() {
					var e = Array.prototype.slice.call(arguments, 0),
						f = e.join("␀"),
						g = d.cache = d.cache || {},
						h = d.count = d.count || [];
					return g[A](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
				}
				return d
			}

			function k(a, b, c, d, e, f) {
				if (null == e) {
					var g = a - c,
						h = b - d;
					return g || h ? (180 + 180 * E.atan2(-h, -g) / I + 360) % 360 : 0
				}
				return k(a, b, e, f) - k(c, d, e, f)
			}

			function l(a) {
				return a % 360 * I / 180
			}

			function m(a) {
				return 180 * a / I % 360
			}

			function n(a) {
				var b = [];
				return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
					return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, E.tan(l(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, E.tan(l(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
				}), b
			}

			function o(a, b) {
				var c = eb(a),
					e = new d.Matrix;
				if (c)
					for (var f = 0, g = c.length; g > f; f++) {
						var h, i, j, k, l, m = c[f],
							n = m.length,
							o = B(m[0]).toLowerCase(),
							p = m[0] != o,
							q = p ? e.invert() : 0;
						"t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
					}
				return e
			}

			function p(a, b) {
				if (null == b) {
					var c = !0;
					if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b) return new d.Matrix;
					b = n(b)
				} else b = d._.rgTransform.test(b) ? B(b).replace(/\.{3}|\u2026/g, a._.transform || J) : n(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : B(b)), a._.transform = b;
				var e = o(b, a.getBBox(1));
				return c ? e : void(a.matrix = e)
			}

			function q(a) {
				var b = a.node.ownerSVGElement && y(a.node.ownerSVGElement) || a.node.parentNode && y(a.node.parentNode) || d.select("svg") || d(0, 0),
					c = b.select("defs"),
					e = null == c ? !1 : c.node;
				return e || (e = w("defs", b.node).node), e
			}

			function r(a) {
				return a.node.ownerSVGElement && y(a.node.ownerSVGElement) || d.select("svg")
			}

			function s(a, b, c) {
				function d(a) {
					if (null == a) return J;
					if (a == +a) return a;
					e(j, {
						width: a
					});
					try {
						return j.getBBox().width
					} catch (b) {
						return 0
					}
				}

				function f(a) {
					if (null == a) return J;
					if (a == +a) return a;
					e(j, {
						height: a
					});
					try {
						return j.getBBox().height
					} catch (b) {
						return 0
					}
				}

				function g(d, e) {
					null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
				}
				var h = r(a).node,
					i = {},
					j = h.querySelector(".svg---mgr");
				switch (j || (j = e("rect"), e(j, {
					x: -9e9,
					y: -9e9,
					width: 10,
					height: 10,
					"class": "svg---mgr",
					fill: "none"
				}), h.appendChild(j)), a.type) {
					case "rect":
						g("rx", d), g("ry", f);
					case "image":
						g("width", d), g("height", f);
					case "text":
						g("x", d), g("y", f);
						break;
					case "circle":
						g("cx", d), g("cy", f), g("r", d);
						break;
					case "ellipse":
						g("cx", d), g("cy", f), g("rx", d), g("ry", f);
						break;
					case "line":
						g("x1", d), g("x2", d), g("y1", f), g("y2", f);
						break;
					case "marker":
						g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
						break;
					case "radialGradient":
						g("fx", d), g("fy", f);
						break;
					case "tspan":
						g("dx", d), g("dy", f);
						break;
					default:
						g(b, d)
				}
				return h.removeChild(j), i
			}

			function t(a) {
				f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
				for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
				for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function (a) {
					d.appendChild(a.node)
				}) : d.appendChild(a[b].node);
				var e = d.childNodes;
				for (b = 0; b < e.length; b++) this[c++] = y(e[b]);
				return this
			}

			function u(a) {
				if (a.snap in Y) return Y[a.snap];
				var b, c = this.id = V();
				try {
					b = a.ownerSVGElement
				} catch (d) {}
				if (this.node = a, b && (this.paper = new x(b)), this.type = a.tagName, this.anims = {}, this._ = {
						transform: []
					}, a.snap = c, Y[c] = this, "g" == this.type && (this.add = t), this.type in {
						g: 1,
						mask: 1,
						pattern: 1
					})
					for (var e in x.prototype) x.prototype[A](e) && (this[e] = x.prototype[e])
			}

			function v(a) {
				this.node = a
			}

			function w(a, b) {
				var c = e(a);
				b.appendChild(c);
				var d = y(c);
				return d
			}

			function x(a, b) {
				var c, d, f, g = x.prototype;
				if (a && "svg" == a.tagName) {
					if (a.snap in Y) return Y[a.snap];
					var h = a.ownerDocument;
					c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
					for (var i in g) g[A](i) && (c[i] = g[i]);
					c.paper = c.root = c
				} else c = w("svg", z.doc.body), e(c.node, {
					height: b,
					version: 1.1,
					width: a,
					xmlns: X
				});
				return c
			}

			function y(a) {
				return a ? a instanceof u || a instanceof v ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new x(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new x(a.contentDocument.getElementsByTagName("svg")[0]) : new u(a) : a
			}
			d.version = "0.3.0", d.toString = function () {
				return "Snap v" + this.version
			}, d._ = {};
			var z = {
				win: a,
				doc: a.document
			};
			d._.glob = z;
			var A = "hasOwnProperty",
				B = String,
				C = parseFloat,
				D = parseInt,
				E = Math,
				F = E.max,
				G = E.min,
				H = E.abs,
				I = (E.pow, E.PI),
				J = (E.round, ""),
				K = " ",
				L = Object.prototype.toString,
				M = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
				N = "	\n\f\r   ᠎             　\u2028\u2029",
				O = (d._.separator = new RegExp("[," + N + "]+"), new RegExp("[" + N + "]", "g"), new RegExp("[" + N + "]*,[" + N + "]*")),
				P = {
					hs: 1,
					rg: 1
				},
				Q = new RegExp("([a-z])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
				R = new RegExp("([rstm])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
				S = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + N + "]*,?[" + N + "]*", "ig"),
				T = 0,
				U = "S" + (+new Date).toString(36),
				V = function () {
					return U + (T++).toString(36)
				},
				W = "http://www.w3.org/1999/xlink",
				X = "http://www.w3.org/2000/svg",
				Y = {},
				Z = d.url = function (a) {
					return "url('#" + a + "')"
				};
			d._.$ = e, d._.id = V, d.format = function () {
				var a = /\{([^\}]+)\}/g,
					b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
					c = function (a, c, d) {
						var e = d;
						return c.replace(b, function (a, b, c, d, f) {
							b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
						}), e = (null == e || e == d ? a : e) + ""
					};
				return function (b, d) {
					return B(b).replace(a, function (a, b) {
						return c(a, b, d)
					})
				}
			}(), d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function (a, b, c) {
				if (c = f(c, "finite") ? c : 10, f(a, "array")) {
					for (var d = a.length; d--;)
						if (H(a[d] - b) <= c) return a[d]
				} else {
					a = +a;
					var e = b % a;
					if (c > e) return b - e;
					if (e > a - c) return b - e + a
				}
				return b
			}, d.getRGB = j(function (a) {
				if (!a || (a = B(a)).indexOf("-") + 1) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: bb
				};
				if ("none" == a) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					toString: bb
				};
				if (!(P[A](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = $(a)), !a) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: bb
				};
				var b, c, e, g, h, i, j = a.match(M);
				return j ? (j[2] && (e = D(j[2].substring(5), 16), c = D(j[2].substring(3, 5), 16), b = D(j[2].substring(1, 3), 16)), j[3] && (e = D((h = j[3].charAt(3)) + h, 16), c = D((h = j[3].charAt(2)) + h, 16), b = D((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = C(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = C(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = G(E.round(b), 255), c = G(E.round(c), 255), e = G(E.round(e), 255), g = G(F(g, 0), 1), j = {
					r: b,
					g: c,
					b: e,
					toString: bb
				}, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: bb
				}
			}, d), d.hsb = j(function (a, b, c) {
				return d.hsb2rgb(a, b, c).hex
			}), d.hsl = j(function (a, b, c) {
				return d.hsl2rgb(a, b, c).hex
			}), d.rgb = j(function (a, b, c, d) {
				if (f(d, "finite")) {
					var e = E.round;
					return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")"
				}
				return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
			});
			var $ = function (a) {
					var b = z.doc.getElementsByTagName("head")[0] || z.doc.getElementsByTagName("svg")[0],
						c = "rgb(255, 0, 0)";
					return ($ = j(function (a) {
						if ("red" == a.toLowerCase()) return c;
						b.style.color = c, b.style.color = a;
						var d = z.doc.defaultView.getComputedStyle(b, J).getPropertyValue("color");
						return d == c ? null : d
					}))(a)
				},
				_ = function () {
					return "hsb(" + [this.h, this.s, this.b] + ")"
				},
				ab = function () {
					return "hsl(" + [this.h, this.s, this.l] + ")"
				},
				bb = function () {
					return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
				},
				cb = function (a, b, c) {
					if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
						var e = d.getRGB(a);
						a = e.r, b = e.g, c = e.b
					}
					return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c]
				},
				db = function (a, b, c, e) {
					a = E.round(255 * a), b = E.round(255 * b), c = E.round(255 * c);
					var g = {
						r: a,
						g: b,
						b: c,
						opacity: f(e, "finite") ? e : 1,
						hex: d.rgb(a, b, c),
						toString: bb
					};
					return f(e, "finite") && (g.opacity = e), g
				};
			d.color = function (a) {
				var b;
				return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = {
					hex: "none"
				}, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = bb, a
			}, d.hsb2rgb = function (a, b, c, d) {
				f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
				var e, g, h, i, j;
				return a = a % 360 / 60, j = c * b, i = j * (1 - H(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
			}, d.hsl2rgb = function (a, b, c, d) {
				f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
				var e, g, h, i, j;
				return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - H(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
			}, d.rgb2hsb = function (a, b, c) {
				c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
				var d, e, f, g;
				return f = F(a, b, c), g = f - G(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
					h: d,
					s: e,
					b: f,
					toString: _
				}
			}, d.rgb2hsl = function (a, b, c) {
				c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
				var d, e, f, g, h, i;
				return g = F(a, b, c), h = G(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
					h: d,
					s: e,
					l: f,
					toString: ab
				}
			}, d.parsePathString = function (a) {
				if (!a) return null;
				var b = d.path(a);
				if (b.arr) return d.path.clone(b.arr);
				var c = {
						a: 7,
						c: 6,
						o: 2,
						h: 1,
						l: 2,
						m: 2,
						r: 4,
						q: 4,
						s: 4,
						t: 2,
						v: 1,
						u: 3,
						z: 0
					},
					e = [];
				return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || B(a).replace(Q, function (a, b, d) {
					var f = [],
						g = b.toLowerCase();
					if (d.replace(S, function (a, b) {
							b && f.push(+b)
						}), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g) e.push([b].concat(f));
					else
						for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]););
				}), e.toString = d.path.toString, b.arr = d.path.clone(e), e
			};
			var eb = d.parseTransformString = function (a) {
				if (!a) return null;
				var b = [];
				return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || B(a).replace(R, function (a, c, d) {
					{
						var e = [];
						c.toLowerCase()
					}
					d.replace(S, function (a, b) {
						b && e.push(+b)
					}), b.push([c].concat(e))
				}), b.toString = d.path.toString, b
			};
			d._.svgTransform2string = n, d._.rgTransform = new RegExp("^[a-z][" + N + "]*-?\\.?\\d", "i"), d._.transform2matrix = o, d._unit2px = s;
			z.doc.contains || z.doc.compareDocumentPosition ? function (a, b) {
				var c = 9 == a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)
					for (; b;)
						if (b = b.parentNode, b == a) return !0;
				return !1
			};
			d._.getSomeDefs = q, d._.getSomeSVG = r, d.select = function (a) {
					return y(z.doc.querySelector(a))
				}, d.selectAll = function (a) {
					for (var b = z.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
					return c
				}, setInterval(function () {
					for (var a in Y)
						if (Y[A](a)) {
							var b = Y[a],
								c = b.node;
							("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete Y[a]
						}
				}, 1e4),
				function (a) {
					function g(a) {
						function b(a, b) {
							var c = e(a.node, b);
							c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function (c) {
								var d = {};
								d[b] = Z(c), e(a.node, d)
							})))
						}

						function c(a) {
							var b = e(a.node, "xlink:href");
							b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function (b) {
								a.attr("xlink:href", "#" + b)
							})))
						}
						for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
							d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
							var l = e(d.node, "id");
							l && (e(d.node, {
								id: d.id
							}), h.push({
								old: l,
								id: d.id
							}))
						}
						for (j = 0, k = h.length; k > j; j++) {
							var m = i[h[j].old];
							if (m)
								for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id)
						}
					}

					function h(a, b, c) {
						return function (d) {
							var e = d.slice(a, b);
							return 1 == e.length && (e = e[0]), c ? c(e) : e
						}
					}

					function i(a) {
						return function () {
							var b = a ? "<" + this.type : "",
								c = this.node.attributes,
								d = this.node.childNodes;
							if (a)
								for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
							if (d.length) {
								for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += y(d[e]).toString());
								a && (b += "</" + this.type + ">")
							} else a && (b += "/>");
							return b
						}
					}
					a.attr = function (a, c) {
						{
							var d = this;
							d.node
						}
						if (!a) return d;
						if (f(a, "string")) {
							if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
							var e = {};
							e[a] = c, a = e
						}
						for (var g in a) a[A](g) && b("snap.util.attr." + g, d, a[g]);
						return d
					}, a.getBBox = function (a) {
						if (!d.Matrix || !d.path) return this.node.getBBox();
						var b = this,
							c = new d.Matrix;
						if (b.removed) return d._.box();
						for (;
							"use" == b.type;)
							if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
							else {
								var e = b.attr("xlink:href");
								b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
							} var f = b._,
							g = d.path.get[b.type] || d.path.get.deflt;
						try {
							return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
						} catch (h) {
							return d._.box()
						}
					};
					var j = function () {
						return this.string
					};
					a.transform = function (a) {
						var b = this._;
						if (null == a) {
							for (var c, f = this, g = new d.Matrix(this.node.getCTM()), h = p(this), i = [h], k = new d.Matrix, l = h.toTransformString(), m = B(h) == B(this.matrix) ? B(b.transform) : l;
								"svg" != f.type && (f = f.parent());) i.push(p(f));
							for (c = i.length; c--;) k.add(i[c]);
							return {
								string: m,
								globalMatrix: g,
								totalMatrix: k,
								localMatrix: h,
								diffMatrix: g.clone().add(h.invert()),
								global: g.toTransformString(),
								total: k.toTransformString(),
								local: l,
								toString: j
							}
						}
						return a instanceof d.Matrix ? this.matrix = a : p(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, {
							gradientTransform: this.matrix
						}) : "pattern" == this.type ? e(this.node, {
							patternTransform: this.matrix
						}) : e(this.node, {
							transform: this.matrix
						})), this
					}, a.parent = function () {
						return y(this.node.parentNode)
					}, a.append = a.add = function (a) {
						if (a) {
							if ("set" == a.type) {
								var b = this;
								return a.forEach(function (a) {
									b.add(a)
								}), this
							}
							a = y(a), this.node.appendChild(a.node), a.paper = this.paper
						}
						return this
					}, a.appendTo = function (a) {
						return a && (a = y(a), a.append(this)), this
					}, a.prepend = function (a) {
						if (a) {
							if ("set" == a.type) {
								var b, c = this;
								return a.forEach(function (a) {
									b ? b.after(a) : c.prepend(a), b = a
								}), this
							}
							a = y(a);
							var d = a.parent();
							this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
						}
						return this
					}, a.prependTo = function (a) {
						return a = y(a), a.prepend(this), this
					}, a.before = function (a) {
						if ("set" == a.type) {
							var b = this;
							return a.forEach(function (a) {
								var c = a.parent();
								b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
							}), this.parent().add(), this
						}
						a = y(a);
						var c = a.parent();
						return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
					}, a.after = function (a) {
						a = y(a);
						var b = a.parent();
						return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
					}, a.insertBefore = function (a) {
						a = y(a);
						var b = this.parent();
						return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
					}, a.insertAfter = function (a) {
						a = y(a);
						var b = this.parent();
						return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
					}, a.remove = function () {
						var a = this.parent();
						return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
					}, a.select = function (a) {
						return y(this.node.querySelector(a))
					}, a.selectAll = function (a) {
						for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
						return c
					}, a.asPX = function (a, b) {
						return null == b && (b = this.attr(a)), +s(this, a, b)
					}, a.use = function () {
						var a, b = this.node.id;
						return b || (b = this.id, e(this.node, {
							id: b
						})), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? w(this.type, this.node.parentNode) : w("use", this.node.parentNode), e(a.node, {
							"xlink:href": "#" + b
						}), a.original = this, a
					};
					var k = /\S+/g;
					a.addClass = function (a) {
						var b, c, d, e, f = (a || "").match(k) || [],
							g = this.node,
							h = g.className.baseVal,
							i = h.match(k) || [];
						if (f.length) {
							for (b = 0; d = f[b++];) c = i.indexOf(d), ~c || i.push(d);
							e = i.join(" "), h != e && (g.className.baseVal = e)
						}
						return this
					}, a.removeClass = function (a) {
						var b, c, d, e, f = (a || "").match(k) || [],
							g = this.node,
							h = g.className.baseVal,
							i = h.match(k) || [];
						if (i.length) {
							for (b = 0; d = f[b++];) c = i.indexOf(d), ~c && i.splice(c, 1);
							e = i.join(" "), h != e && (g.className.baseVal = e)
						}
						return this
					}, a.hasClass = function (a) {
						var b = this.node,
							c = b.className.baseVal,
							d = c.match(k) || [];
						return !!~d.indexOf(a)
					}, a.toggleClass = function (a, b) {
						if (null != b) return b ? this.addClass(a) : this.removeClass(a);
						var c, d, e, f, g = (a || "").match(k) || [],
							h = this.node,
							i = h.className.baseVal,
							j = i.match(k) || [];
						for (c = 0; e = g[c++];) d = j.indexOf(e), ~d ? j.splice(d, 1) : j.push(e);
						return f = j.join(" "), i != f && (h.className.baseVal = f), this
					}, a.clone = function () {
						var a = y(this.node.cloneNode(!0));
						return e(a.node, "id") && e(a.node, {
							id: a.id
						}), g(a), a.insertAfter(this), a
					}, a.toDefs = function () {
						var a = q(this);
						return a.appendChild(this.node), this
					}, a.pattern = a.toPattern = function (a, b, c, d) {
						var g = w("pattern", q(this));
						return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(g.node, {
							x: a,
							y: b,
							width: c,
							height: d,
							patternUnits: "userSpaceOnUse",
							id: g.id,
							viewBox: [a, b, c, d].join(" ")
						}), g.node.appendChild(this.node), g
					}, a.marker = function (a, b, c, d, g, h) {
						var i = w("marker", q(this));
						return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, g = a.refX || a.cx, h = a.refY || a.cy, a = a.x), e(i.node, {
							viewBox: [a, b, c, d].join(K),
							markerWidth: c,
							markerHeight: d,
							orient: "auto",
							refX: g || 0,
							refY: h || 0,
							id: i.id
						}), i.node.appendChild(this.node), i
					};
					var l = function (a, b, d, e) {
						"function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
					};
					d._.Animation = l, d.animation = function (a, b, c, d) {
						return new l(a, b, c, d)
					}, a.inAnim = function () {
						var a = this,
							b = [];
						for (var c in a.anims) a.anims[A](c) && ! function (a) {
							b.push({
								anim: new l(a._attrs, a.dur, a.easing, a._callback),
								mina: a,
								curStatus: a.status(),
								status: function (b) {
									return a.status(b)
								},
								stop: function () {
									a.stop()
								}
							})
						}(a.anims[c]);
						return b
					}, d.animate = function (a, d, e, f, g, h) {
						"function" != typeof g || g.length || (h = g, g = c.linear);
						var i = c.time(),
							j = c(a, d, i, i + f, c.time, e, g);
						return h && b.once("mina.finish." + j.id, h), j
					}, a.stop = function () {
						for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
						return this
					}, a.animate = function (a, d, e, g) {
						"function" != typeof e || e.length || (g = e, e = c.linear), a instanceof l && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);
						var i, j, k, m, n = [],
							o = [],
							p = {},
							q = this;
						for (var r in a)
							if (a[A](r)) {
								q.equal ? (m = q.equal(r, B(a[r])), i = m.from, j = m.to, k = m.f) : (i = +q.attr(r), j = +a[r]);
								var s = f(i, "array") ? i.length : 1;
								p[r] = h(n.length, n.length + s, k), n = n.concat(i), o = o.concat(j)
							} var t = c.time(),
							u = c(n, o, t, t + d, c.time, function (a) {
								var b = {};
								for (var c in p) p[A](c) && (b[c] = p[c](a));
								q.attr(b)
							}, e);
						return q.anims[u.id] = u, u._attrs = a, u._callback = g, b("snap.animcreated." + q.id, u), b.once("mina.finish." + u.id, function () {
							delete q.anims[u.id], g && g.call(q)
						}), b.once("mina.stop." + u.id, function () {
							delete q.anims[u.id]
						}), q
					};
					var m = {};
					a.data = function (a, c) {
						var e = m[this.id] = m[this.id] || {};
						if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
						if (1 == arguments.length) {
							if (d.is(a, "object")) {
								for (var f in a) a[A](f) && this.data(f, a[f]);
								return this
							}
							return b("snap.data.get." + this.id, this, e[a], a), e[a]
						}
						return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
					}, a.removeData = function (a) {
						return null == a ? m[this.id] = {} : m[this.id] && delete m[this.id][a], this
					}, a.outerSVG = a.toString = i(1), a.innerSVG = i()
				}(u.prototype), d.parse = function (a) {
					var b = z.doc.createDocumentFragment(),
						c = !0,
						d = z.doc.createElement("div");
					if (a = B(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
						if (c) b = a;
						else
							for (; a.firstChild;) b.appendChild(a.firstChild);
					return d.innerHTML = J, new v(b)
				}, v.prototype.select = u.prototype.select, v.prototype.selectAll = u.prototype.selectAll, d.fragment = function () {
					for (var a = Array.prototype.slice.call(arguments, 0), b = z.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
						var f = a[c];
						f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node)
					}
					return new v(b)
				}, d._.make = w, d._.wrap = y, x.prototype.el = function (a, b) {
					var c = w(a, this.node);
					return b && c.attr(b), c
				}, b.on("snap.util.getattr", function () {
					var a = b.nt();
					a = a.substring(a.lastIndexOf(".") + 1);
					var c = a.replace(/[A-Z]/g, function (a) {
						return "-" + a.toLowerCase()
					});
					return fb[A](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a)
				});
			var fb = {
				"alignment-baseline": 0,
				"baseline-shift": 0,
				clip: 0,
				"clip-path": 0,
				"clip-rule": 0,
				color: 0,
				"color-interpolation": 0,
				"color-interpolation-filters": 0,
				"color-profile": 0,
				"color-rendering": 0,
				cursor: 0,
				direction: 0,
				display: 0,
				"dominant-baseline": 0,
				"enable-background": 0,
				fill: 0,
				"fill-opacity": 0,
				"fill-rule": 0,
				filter: 0,
				"flood-color": 0,
				"flood-opacity": 0,
				font: 0,
				"font-family": 0,
				"font-size": 0,
				"font-size-adjust": 0,
				"font-stretch": 0,
				"font-style": 0,
				"font-variant": 0,
				"font-weight": 0,
				"glyph-orientation-horizontal": 0,
				"glyph-orientation-vertical": 0,
				"image-rendering": 0,
				kerning: 0,
				"letter-spacing": 0,
				"lighting-color": 0,
				marker: 0,
				"marker-end": 0,
				"marker-mid": 0,
				"marker-start": 0,
				mask: 0,
				opacity: 0,
				overflow: 0,
				"pointer-events": 0,
				"shape-rendering": 0,
				"stop-color": 0,
				"stop-opacity": 0,
				stroke: 0,
				"stroke-dasharray": 0,
				"stroke-dashoffset": 0,
				"stroke-linecap": 0,
				"stroke-linejoin": 0,
				"stroke-miterlimit": 0,
				"stroke-opacity": 0,
				"stroke-width": 0,
				"text-anchor": 0,
				"text-decoration": 0,
				"text-rendering": 0,
				"unicode-bidi": 0,
				visibility: 0,
				"word-spacing": 0,
				"writing-mode": 0
			};
			b.on("snap.util.attr", function (a) {
					var c = b.nt(),
						d = {};
					c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;
					var f = c.replace(/-(\w)/gi, function (a, b) {
							return b.toUpperCase()
						}),
						g = c.replace(/[A-Z]/g, function (a) {
							return "-" + a.toLowerCase()
						});
					fb[A](g) ? this.node.style[f] = null == a ? J : a : e(this.node, d)
				}),
				function () {}(x.prototype), d.ajax = function (a, c, d, e) {
					var g = new XMLHttpRequest,
						h = V();
					if (g) {
						if (f(c, "function")) e = d, d = c, c = null;
						else if (f(c, "object")) {
							var i = [];
							for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
							c = i.join("&")
						}
						return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function () {
							4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g)
						}, 4 == g.readyState ? g : (g.send(c), g)
					}
				}, d.load = function (a, b, c) {
					d.ajax(a, function (a) {
						var e = d.parse(a.responseText);
						c ? b.call(c, e) : b(e)
					})
				};
			var gb = function (a) {
				var b = a.getBoundingClientRect(),
					c = a.ownerDocument,
					d = c.body,
					e = c.documentElement,
					f = e.clientTop || d.clientTop || 0,
					h = e.clientLeft || d.clientLeft || 0,
					i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
					j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
				return {
					y: i,
					x: j
				}
			};
			return d.getElementByPoint = function (a, b) {
				var c = this,
					d = (c.canvas, z.doc.elementFromPoint(a, b));
				if (z.win.opera && "svg" == d.tagName) {
					var e = gb(d),
						f = d.createSVGRect();
					f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
					var g = d.getIntersectionList(f, null);
					g.length && (d = g[g.length - 1])
				}
				return d ? y(d) : null
			}, d.plugin = function (a) {
				a(d, u, x, z, v)
			}, z.win.Snap = d, d
		}();
	return d.plugin(function (a) {
		function b(a, b, d, e, f, g) {
			return null == b && "[object SVGMatrix]" == c.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +d, this.d = +e, this.e = +f, this.f = +g) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
		}
		var c = Object.prototype.toString,
			d = String,
			e = Math,
			f = "";
		! function (c) {
			function g(a) {
				return a[0] * a[0] + a[1] * a[1]
			}

			function h(a) {
				var b = e.sqrt(g(a));
				a[0] && (a[0] /= b), a[1] && (a[1] /= b)
			}
			c.add = function (a, c, d, e, f, g) {
				var h, i, j, k, l = [
						[],
						[],
						[]
					],
					m = [
						[this.a, this.c, this.e],
						[this.b, this.d, this.f],
						[0, 0, 1]
					],
					n = [
						[a, d, f],
						[c, e, g],
						[0, 0, 1]
					];
				for (a && a instanceof b && (n = [
						[a.a, a.c, a.e],
						[a.b, a.d, a.f],
						[0, 0, 1]
					]), h = 0; 3 > h; h++)
					for (i = 0; 3 > i; i++) {
						for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
						l[h][i] = k
					}
				return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
			}, c.invert = function () {
				var a = this,
					c = a.a * a.d - a.b * a.c;
				return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c)
			}, c.clone = function () {
				return new b(this.a, this.b, this.c, this.d, this.e, this.f)
			}, c.translate = function (a, b) {
				return this.add(1, 0, 0, 1, a, b)
			}, c.scale = function (a, b, c, d) {
				return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
			}, c.rotate = function (b, c, d) {
				b = a.rad(b), c = c || 0, d = d || 0;
				var f = +e.cos(b).toFixed(9),
					g = +e.sin(b).toFixed(9);
				return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
			}, c.x = function (a, b) {
				return a * this.a + b * this.c + this.e
			}, c.y = function (a, b) {
				return a * this.b + b * this.d + this.f
			}, c.get = function (a) {
				return +this[d.fromCharCode(97 + a)].toFixed(4)
			}, c.toString = function () {
				return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
			}, c.offset = function () {
				return [this.e.toFixed(4), this.f.toFixed(4)]
			}, c.determinant = function () {
				return this.a * this.d - this.b * this.c
			}, c.split = function () {
				var b = {};
				b.dx = this.e, b.dy = this.f;
				var c = [
					[this.a, this.c],
					[this.b, this.d]
				];
				b.scalex = e.sqrt(g(c[0])), h(c[0]), b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1], c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear], b.scaley = e.sqrt(g(c[1])), h(c[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
				var d = -c[0][1],
					f = c[1][1];
				return 0 > f ? (b.rotate = a.deg(e.acos(f)), 0 > d && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(e.asin(d)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
			}, c.toTransformString = function (a) {
				var b = a || this.split();
				return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f))
			}
		}(b.prototype), a.Matrix = b, a.matrix = function (a, c, d, e, f, g) {
			return new b(a, c, d, e, f, g)
		}
	}), d.plugin(function (a, c, d, e, f) {
		function g(d) {
			return function (e) {
				if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
					if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
						e.node.id || p(e.node, {
							id: e.id
						});
						var g = q(e.node.id)
					} else g = e.attr(d);
				else if (g = a.color(e), g.error) {
					var h = a(n(this).ownerSVGElement).gradient(e);
					h ? (h.node.id || p(h.node, {
						id: h.id
					}), g = q(h.node.id)) : g = e
				} else g = r(g);
				var i = {};
				i[d] = g, p(this.node, i), this.node.style[d] = t
			}
		}

		function h(a) {
			b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
		}

		function i(a) {
			for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
				var f = c[d];
				3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f))
			}
			return b
		}

		function j() {
			return b.stop(), this.node.style.fontSize
		}
		var k = a._.make,
			l = a._.wrap,
			m = a.is,
			n = a._.getSomeDefs,
			o = /^url\(#?([^)]+)\)$/,
			p = a._.$,
			q = a.url,
			r = String,
			s = a._.separator,
			t = "";
		b.on("snap.util.attr.mask", function (a) {
				if (a instanceof c || a instanceof f) {
					if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
					else d = k("mask", n(this)), d.node.appendChild(a.node);
					!d.node.id && p(d.node, {
						id: d.id
					}), p(this.node, {
						mask: q(d.id)
					})
				}
			}),
			function (a) {
				b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
			}(function (a) {
				if (a instanceof c || a instanceof f) {
					if (b.stop(), "clipPath" == a.type) var d = a;
					else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
						id: d.id
					});
					p(this.node, {
						"clip-path": q(d.id)
					})
				}
			}), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
		var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
		b.on("snap.util.grad.parse", function (a) {
				a = r(a);
				var b = a.match(u);
				if (!b) return null;
				var c = b[1],
					d = b[2],
					e = b[3];
				return d = d.split(/\s*,\s*/).map(function (a) {
					return +a == a ? +a : a
				}), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function (a) {
					a = a.split(":");
					var b = {
						color: a[0]
					};
					return a[1] && (b.offset = parseFloat(a[1])), b
				}), {
					type: c,
					params: d,
					stops: e
				}
			}), b.on("snap.util.attr.d", function (c) {
				b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
					d: c
				})
			})(-1), b.on("snap.util.attr.#text", function (a) {
				b.stop(), a = r(a);
				for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
				this.node.appendChild(c)
			})(-1), b.on("snap.util.attr.path", function (a) {
				b.stop(), this.attr({
					d: a
				})
			})(-1), b.on("snap.util.attr.class", function (a) {
				b.stop(), this.node.className.baseVal = a
			})(-1), b.on("snap.util.attr.viewBox", function (a) {
				var c;
				c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
					viewBox: c
				}), b.stop()
			})(-1), b.on("snap.util.attr.transform", function (a) {
				this.transform(a), b.stop()
			})(-1), b.on("snap.util.attr.r", function (a) {
				"rect" == this.type && (b.stop(), p(this.node, {
					rx: a,
					ry: a
				}))
			})(-1), b.on("snap.util.attr.textpath", function (a) {
				if (b.stop(), "text" == this.type) {
					var d, e, f;
					if (!a && this.textPath) {
						for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
						return e.remove(), void delete this.textPath
					}
					if (m(a, "string")) {
						var g = n(this),
							h = l(g.parentNode).path(a);
						g.appendChild(h.node), d = h.id, h.attr({
							id: d
						})
					} else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
						id: d
					})));
					if (d)
						if (e = this.textPath, f = this.node, e) e.attr({
							"xlink:href": "#" + d
						});
						else {
							for (e = p("textPath", {
									"xlink:href": "#" + d
								}); f.firstChild;) e.appendChild(f.firstChild);
							f.appendChild(e), this.textPath = l(e)
						}
				}
			})(-1), b.on("snap.util.attr.text", function (a) {
				if ("text" == this.type) {
					for (var c = this.node, d = function (a) {
							var b = p("tspan");
							if (m(a, "array"))
								for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
							else b.appendChild(e.doc.createTextNode(a));
							return b.normalize && b.normalize(), b
						}; c.firstChild;) c.removeChild(c.firstChild);
					for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
				}
				b.stop()
			})(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function () {
				return b.stop(), this.transform()
			})(-1), b.on("snap.util.getattr.textpath", function () {
				return b.stop(), this.textPath
			})(-1),
			function () {
				function c(c) {
					return function () {
						b.stop();
						var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
						return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
					}
				}

				function d(a) {
					return function (c) {
						b.stop();
						var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
						if ("" == c || !c) return void(this.node.style[d] = "none");
						if ("marker" == c.type) {
							var e = c.node.id;
							return e || p(c.node, {
								id: c.id
							}), void(this.node.style[d] = q(e))
						}
					}
				}
				b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
			}(), b.on("snap.util.getattr.r", function () {
				return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
			})(-1), b.on("snap.util.getattr.text", function () {
				if ("text" == this.type || "tspan" == this.type) {
					b.stop();
					var a = i(this.node);
					return 1 == a.length ? a[0] : a
				}
			})(-1), b.on("snap.util.getattr.#text", function () {
				return this.node.textContent
			})(-1), b.on("snap.util.getattr.viewBox", function () {
				b.stop();
				var c = p(this.node, "viewBox");
				return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
			})(-1), b.on("snap.util.getattr.points", function () {
				var a = p(this.node, "points");
				return b.stop(), a ? a.split(s) : void 0
			})(-1), b.on("snap.util.getattr.path", function () {
				var a = p(this.node, "d");
				return b.stop(), a
			})(-1), b.on("snap.util.getattr.class", function () {
				return this.node.className.baseVal
			})(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
	}), d.plugin(function () {
		function a(a) {
			return a
		}

		function c(a) {
			return function (b) {
				return +b.toFixed(3) + a
			}
		}
		var d = {
				"+": function (a, b) {
					return a + b
				},
				"-": function (a, b) {
					return a - b
				},
				"/": function (a, b) {
					return a / b
				},
				"*": function (a, b) {
					return a * b
				}
			},
			e = String,
			f = /[a-z]+$/i,
			g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
		b.on("snap.util.attr", function (a) {
			var c = e(a).match(g);
			if (c) {
				var h = b.nt(),
					i = h.substring(h.lastIndexOf(".") + 1),
					j = this.attr(i),
					k = {};
				b.stop();
				var l = c[3] || "",
					m = j.match(f),
					n = d[c[1]];
				if (m && m == l ? a = n(parseFloat(j), +c[2]) : (j = this.asPX(i), a = n(this.asPX(i), this.asPX(i, c[2] + l))), isNaN(j) || isNaN(a)) return;
				k[i] = a, this.attr(k)
			}
		})(-10), b.on("snap.util.equal", function (h, i) {
			var j = e(this.attr(h) || ""),
				k = e(i).match(g);
			if (k) {
				b.stop();
				var l = k[3] || "",
					m = j.match(f),
					n = d[k[1]];
				return m && m == l ? {
					from: parseFloat(j),
					to: n(parseFloat(j), +k[2]),
					f: c(m)
				} : (j = this.asPX(h), {
					from: j,
					to: n(j, this.asPX(h, k[2] + l)),
					f: a
				})
			}
		})(-10)
	}), d.plugin(function (a, c, d, e) {
		var f = d.prototype,
			g = a.is;
		f.rect = function (a, b, c, d, e, f) {
			var h;
			return null == f && (f = e), g(a, "object") && "[object Object]" == a ? h = a : null != a && (h = {
				x: a,
				y: b,
				width: c,
				height: d
			}, null != e && (h.rx = e, h.ry = f)), this.el("rect", h)
		}, f.circle = function (a, b, c) {
			var d;
			return g(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
				cx: a,
				cy: b,
				r: c
			}), this.el("circle", d)
		};
		var h = function () {
			function a() {
				this.parentNode.removeChild(this)
			}
			return function (b, c) {
				var d = e.doc.createElement("img"),
					f = e.doc.body;
				d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function () {
					c.call(d), d.onload = d.onerror = null, f.removeChild(d)
				}, d.onerror = a, f.appendChild(d), d.src = b
			}
		}();
		f.image = function (b, c, d, e, f) {
				var i = this.el("image");
				if (g(b, "object") && "src" in b) i.attr(b);
				else if (null != b) {
					var j = {
						"xlink:href": b,
						preserveAspectRatio: "none"
					};
					null != c && null != d && (j.x = c, j.y = d), null != e && null != f ? (j.width = e, j.height = f) : h(b, function () {
						a._.$(i.node, {
							width: this.offsetWidth,
							height: this.offsetHeight
						})
					}), a._.$(i.node, j)
				}
				return i
			}, f.ellipse = function (a, b, c, d) {
				var e;
				return g(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
					cx: a,
					cy: b,
					rx: c,
					ry: d
				}), this.el("ellipse", e)
			}, f.path = function (a) {
				var b;
				return g(a, "object") && !g(a, "array") ? b = a : a && (b = {
					d: a
				}), this.el("path", b)
			}, f.group = f.g = function (a) {
				var b = this.el("g");
				return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
			}, f.svg = function (a, b, c, d, e, f, h, i) {
				var j = {};
				return g(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])), this.el("svg", j)
			}, f.mask = function (a) {
				var b = this.el("mask");
				return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
			}, f.ptrn = function (a, b, c, d, e, f, h, i) {
				if (g(a, "object")) var j = a;
				else arguments.length ? (j = {}, null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])) : j = {
					patternUnits: "userSpaceOnUse"
				};
				return this.el("pattern", j)
			}, f.use = function (a) {
				if (null != a) {
					{
						make("use", this.node)
					}
					return a instanceof c && (a.attr("id") || a.attr({
						id: ID()
					}), a = a.attr("id")), this.el("use", {
						"xlink:href": a
					})
				}
				return c.prototype.use.call(this)
			}, f.text = function (a, b, c) {
				var d = {};
				return g(a, "object") ? d = a : null != a && (d = {
					x: a,
					y: b,
					text: c || ""
				}), this.el("text", d)
			}, f.line = function (a, b, c, d) {
				var e = {};
				return g(a, "object") ? e = a : null != a && (e = {
					x1: a,
					x2: c,
					y1: b,
					y2: d
				}), this.el("line", e)
			}, f.polyline = function (a) {
				arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
				var b = {};
				return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {
					points: a
				}), this.el("polyline", b)
			}, f.polygon = function (a) {
				arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
				var b = {};
				return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {
					points: a
				}), this.el("polygon", b)
			},
			function () {
				function c() {
					return this.selectAll("stop")
				}

				function d(b, c) {
					var d = j("stop"),
						e = {
							offset: +c + "%"
						};
					return b = a.color(b), e["stop-color"] = b.hex, b.opacity < 1 && (e["stop-opacity"] = b.opacity), j(d, e), this.node.appendChild(d), this
				}

				function e() {
					if ("linearGradient" == this.type) {
						var b = j(this.node, "x1") || 0,
							c = j(this.node, "x2") || 1,
							d = j(this.node, "y1") || 0,
							e = j(this.node, "y2") || 0;
						return a._.box(b, d, math.abs(c - b), math.abs(e - d))
					}
					var f = this.node.cx || .5,
						g = this.node.cy || .5,
						h = this.node.r || 0;
					return a._.box(f - h, g - h, 2 * h, 2 * h)
				}

				function g(a, c) {
					function d(a, b) {
						for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
						m = a, l = b
					}
					var e, f = b("snap.util.grad.parse", null, c).firstDefined();
					if (!f) return null;
					f.params.unshift(a), e = "l" == f.type.toLowerCase() ? h.apply(0, f.params) : i.apply(0, f.params), f.type != f.type.toLowerCase() && j(e.node, {
						gradientUnits: "userSpaceOnUse"
					});
					var g = f.stops,
						k = g.length,
						l = 0,
						m = 0;
					k--;
					for (var n = 0; k > n; n++) "offset" in g[n] && d(n, g[n].offset);
					for (g[k].offset = g[k].offset || 100, d(k, g[k].offset), n = 0; k >= n; n++) {
						var o = g[n];
						e.addStop(o.color, o.offset)
					}
					return e
				}

				function h(b, f, g, h, i) {
					var k = a._.make("linearGradient", b);
					return k.stops = c, k.addStop = d, k.getBBox = e, null != f && j(k.node, {
						x1: f,
						y1: g,
						x2: h,
						y2: i
					}), k
				}

				function i(b, f, g, h, i, k) {
					var l = a._.make("radialGradient", b);
					return l.stops = c, l.addStop = d, l.getBBox = e, null != f && j(l.node, {
						cx: f,
						cy: g,
						r: h
					}), null != i && null != k && j(l.node, {
						fx: i,
						fy: k
					}), l
				}
				var j = a._.$;
				f.gradient = function (a) {
					return g(this.defs, a)
				}, f.gradientLinear = function (a, b, c, d) {
					return h(this.defs, a, b, c, d)
				}, f.gradientRadial = function (a, b, c, d, e) {
					return i(this.defs, a, b, c, d, e)
				}, f.toString = function () {
					var b, c = this.node.ownerDocument,
						d = c.createDocumentFragment(),
						e = c.createElement("div"),
						f = this.node.cloneNode(!0);
					return d.appendChild(e), e.appendChild(f), a._.$(f, {
						xmlns: "http://www.w3.org/2000/svg"
					}), b = e.innerHTML, d.removeChild(d.firstChild), b
				}, f.clear = function () {
					for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : f.clear.call({
						node: b
					}), b = a
				}
			}()
	}), d.plugin(function (a, b) {
		function c(a) {
			var b = c.ps = c.ps || {};
			return b[a] ? b[a].sleep = 100 : b[a] = {
				sleep: 100
			}, setTimeout(function () {
				for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
			}), b[a]
		}

		function d(a, b, c, d) {
			return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
				x: a,
				y: b,
				width: c,
				w: c,
				height: d,
				h: d,
				x2: a + c,
				y2: b + d,
				cx: a + c / 2,
				cy: b + d / 2,
				r1: N.min(c, d) / 2,
				r2: N.max(c, d) / 2,
				r0: N.sqrt(c * c + d * d) / 2,
				path: w(a, b, c, d),
				vb: [a, b, c, d].join(" ")
			}
		}

		function e() {
			return this.join(",").replace(L, "$1")
		}

		function f(a) {
			var b = J(a);
			return b.toString = e, b
		}

		function g(a, b, c, d, e, f, g, h, j) {
			return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
		}

		function h(c, d) {
			function e(a) {
				return +(+a).toFixed(3)
			}
			return a._.cacher(function (a, f, h) {
				a instanceof b && (a = a.attr("d")), a = E(a);
				for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
					if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
					else {
						if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
							if (d && !p.start) {
								if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
								p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
								continue
							}
							if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
						}
						q += m, j = +l[5], k = +l[6]
					}
					o += l.shift() + l
				}
				return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
			}, null, a._.clone)
		}

		function i(a, b, c, d, e, f, g, h, i) {
			var j = 1 - i,
				k = R(j, 3),
				l = R(j, 2),
				m = i * i,
				n = m * i,
				o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
				p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
				q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
				r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
				s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
				t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
				u = j * a + i * c,
				v = j * b + i * d,
				w = j * e + i * g,
				x = j * f + i * h,
				y = 90 - 180 * N.atan2(q - s, r - t) / O;
			return {
				x: o,
				y: p,
				m: {
					x: q,
					y: r
				},
				n: {
					x: s,
					y: t
				},
				start: {
					x: u,
					y: v
				},
				end: {
					x: w,
					y: x
				},
				alpha: y
			}
		}

		function j(b, c, e, f, g, h, i, j) {
			a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
			var k = D.apply(null, b);
			return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
		}

		function k(a, b, c) {
			return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
		}

		function l(a, b) {
			return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
		}

		function m(a, b, c, d, e) {
			var f = -3 * b + 9 * c - 9 * d + 3 * e,
				g = a * f + 6 * b - 12 * c + 6 * d;
			return a * g - 3 * b + 3 * c
		}

		function n(a, b, c, d, e, f, g, h, i) {
			null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
			for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
				var q = j * l[p] + j,
					r = m(q, a, c, e, g),
					s = m(q, b, d, f, h),
					t = r * r + s * s;
				o += n[p] * N.sqrt(t)
			}
			return j * o
		}

		function o(a, b, c, d, e, f, g, h, i) {
			if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
				var j, k = 1,
					l = k / 2,
					m = k - l,
					o = .01;
				for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
				return m
			}
		}

		function p(a, b, c, d, e, f, g, h) {
			if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
				var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
					j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
					k = (a - c) * (f - h) - (b - d) * (e - g);
				if (k) {
					var l = i / k,
						m = j / k,
						n = +l.toFixed(2),
						o = +m.toFixed(2);
					if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
						x: l,
						y: m
					}
				}
			}
		}

		function q(a, b, c) {
			var d = j(a),
				e = j(b);
			if (!l(d, e)) return c ? 0 : [];
			for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 8), k = ~~(g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
				var t = i.apply(0, a.concat(s / h));
				m.push({
					x: t.x,
					y: t.y,
					t: s / h
				})
			}
			for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
				x: t.x,
				y: t.y,
				t: s / k
			});
			for (s = 0; h > s; s++)
				for (var u = 0; k > u; u++) {
					var v = m[s],
						w = m[s + 1],
						x = o[u],
						y = o[u + 1],
						z = S(w.x - v.x) < .001 ? "y" : "x",
						A = S(y.x - x.x) < .001 ? "y" : "x",
						B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
					if (B) {
						if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
						q[B.x.toFixed(4)] = B.y.toFixed(4);
						var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
							D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
						C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
							x: B.x,
							y: B.y,
							t1: C,
							t2: D
						}))
					}
				}
			return r
		}

		function r(a, b) {
			return t(a, b)
		}

		function s(a, b) {
			return t(a, b, 1)
		}

		function t(a, b, c) {
			a = E(a), b = E(b);
			for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
				var r = a[o];
				if ("M" == r[0]) d = h = r[1], e = i = r[2];
				else {
					"C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
					for (var s = 0, t = b.length; t > s; s++) {
						var u = b[s];
						if ("M" == u[0]) f = j = u[1], g = k = u[2];
						else {
							"C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
							var v = q(l, m, c);
							if (c) n += v;
							else {
								for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
								n = n.concat(v)
							}
						}
					}
				}
			}
			return n
		}

		function u(a, b, c) {
			var d = v(a);
			return k(d, b, c) && t(a, [
				["M", b, c],
				["H", d.x2 + 10]
			], 1) % 2 == 1
		}

		function v(a) {
			var b = c(a);
			if (b.bbox) return J(b.bbox);
			if (!a) return d();
			a = E(a);
			for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
				if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
				else {
					var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
					h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
				} var m = P.apply(0, h),
				n = P.apply(0, i),
				o = Q.apply(0, h),
				p = Q.apply(0, i),
				q = d(m, n, o - m, p - n);
			return b.bbox = J(q), q
		}

		function w(a, b, c, d, f) {
			if (f) return [
				["M", +a + +f, b],
				["l", c - 2 * f, 0],
				["a", f, f, 0, 0, 1, f, f],
				["l", 0, d - 2 * f],
				["a", f, f, 0, 0, 1, -f, f],
				["l", 2 * f - c, 0],
				["a", f, f, 0, 0, 1, -f, -f],
				["l", 0, 2 * f - d],
				["a", f, f, 0, 0, 1, f, -f],
				["z"]
			];
			var g = [
				["M", a, b],
				["l", c, 0],
				["l", 0, d],
				["l", -c, 0],
				["z"]
			];
			return g.toString = e, g
		}

		function x(a, b, c, d, f) {
			if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
				h = a + c * Math.cos(-d * g),
				i = a + c * Math.cos(-f * g),
				j = b + c * Math.sin(-d * g),
				k = b + c * Math.sin(-f * g),
				l = [
					["M", h, j],
					["A", c, c, 0, +(f - d > 180), 0, i, k]
				];
			else l = [
				["M", a, b],
				["m", 0, -d],
				["a", c, d, 0, 1, 1, 0, 2 * d],
				["a", c, d, 0, 1, 1, 0, -2 * d],
				["z"]
			];
			return l.toString = e, l
		}

		function y(b) {
			var d = c(b),
				g = String.prototype.toLowerCase;
			if (d.rel) return f(d.rel);
			a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
			var h = [],
				i = 0,
				j = 0,
				k = 0,
				l = 0,
				m = 0;
			"M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
			for (var n = m, o = b.length; o > n; n++) {
				var p = h[n] = [],
					q = b[n];
				if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
					case "a":
						p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
						break;
					case "v":
						p[1] = +(q[1] - j).toFixed(3);
						break;
					case "m":
						k = q[1], l = q[2];
					default:
						for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
				} else {
					p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
					for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
				}
				var v = h[n].length;
				switch (h[n][0]) {
					case "z":
						i = k, j = l;
						break;
					case "h":
						i += +h[n][v - 1];
						break;
					case "v":
						j += +h[n][v - 1];
						break;
					default:
						i += +h[n][v - 2], j += +h[n][v - 1]
				}
			}
			return h.toString = e, d.rel = f(h), h
		}

		function z(b) {
			var d = c(b);
			if (d.abs) return f(d.abs);
			if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
				["M", 0, 0]
			];
			var g, h = [],
				i = 0,
				j = 0,
				k = 0,
				l = 0,
				m = 0;
			"M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
			for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
				if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
						case "A":
							n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
							break;
						case "V":
							n[1] = +o[1] + j;
							break;
						case "H":
							n[1] = +o[1] + i;
							break;
						case "R":
							for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
							h.pop(), h = h.concat(G(s, p));
							break;
						case "O":
							h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
							break;
						case "U":
							h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
							break;
						case "M":
							k = +o[1] + i, l = +o[2] + j;
						default:
							for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
					} else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2));
					else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
				else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
				else
					for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
				if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
					case "Z":
						i = +k, j = +l;
						break;
					case "H":
						i = n[1];
						break;
					case "V":
						j = n[1];
						break;
					case "M":
						k = n[n.length - 2], l = n[n.length - 1];
					default:
						i = n[n.length - 2], j = n[n.length - 1]
				}
			}
			return h.toString = e, d.abs = f(h), h
		}

		function A(a, b, c, d) {
			return [a, b, c, d, c, d]
		}

		function B(a, b, c, d, e, f) {
			var g = 1 / 3,
				h = 2 / 3;
			return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
		}

		function C(b, c, d, e, f, g, h, i, j, k) {
			var l, m = 120 * O / 180,
				n = O / 180 * (+f || 0),
				o = [],
				p = a._.cacher(function (a, b, c) {
					var d = a * N.cos(c) - b * N.sin(c),
						e = a * N.sin(c) + b * N.cos(c);
					return {
						x: d,
						y: e
					}
				});
			if (k) y = k[0], z = k[1], w = k[2], x = k[3];
			else {
				l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
				var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2),
					r = (c - j) / 2,
					s = q * q / (d * d) + r * r / (e * e);
				s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
				var t = d * d,
					u = e * e,
					v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
					w = v * d * r / e + (b + i) / 2,
					x = v * -e * q / d + (c + j) / 2,
					y = N.asin(((c - x) / e).toFixed(9)),
					z = N.asin(((j - x) / e).toFixed(9));
				y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
			}
			var A = z - y;
			if (S(A) > m) {
				var B = z,
					D = i,
					E = j;
				z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
			}
			A = z - y;
			var F = N.cos(y),
				G = N.sin(y),
				H = N.cos(z),
				I = N.sin(z),
				J = N.tan(A / 4),
				K = 4 / 3 * d * J,
				L = 4 / 3 * e * J,
				M = [b, c],
				P = [b + K * G, c - L * F],
				Q = [i + K * I, j - L * H],
				R = [i, j];
			if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
			o = [P, Q, R].concat(o).join().split(",");
			for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
			return T
		}

		function D(a, b, c, d, e, f, g, h) {
			for (var i, j, k, l, m, n, o, p, q = [], r = [
					[],
					[]
				], s = 0; 2 > s; ++s)
				if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
					if (S(j) < 1e-12) continue;
					l = -k / j, l > 0 && 1 > l && q.push(l)
				} else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
			for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
			return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
				min: {
					x: P.apply(0, r[0]),
					y: P.apply(0, r[1])
				},
				max: {
					x: Q.apply(0, r[0]),
					y: Q.apply(0, r[1])
				}
			}
		}

		function E(a, b) {
			var d = !b && c(a);
			if (!b && d.curve) return f(d.curve);
			for (var e = z(a), g = b && z(b), h = {
					x: 0,
					y: 0,
					bx: 0,
					by: 0,
					X: 0,
					Y: 0,
					qx: null,
					qy: null
				}, i = {
					x: 0,
					y: 0,
					bx: 0,
					by: 0,
					X: 0,
					Y: 0,
					qx: null,
					qy: null
				}, j = (function (a, b, c) {
					var d, e;
					if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
					switch (!(a[0] in {
						T: 1,
						Q: 1
					}) && (b.qx = b.qy = null), a[0]) {
						case "M":
							b.X = a[1], b.Y = a[2];
							break;
						case "A":
							a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
							break;
						case "S":
							"C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
							break;
						case "T":
							"Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
							break;
						case "Q":
							b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
							break;
						case "L":
							a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
							break;
						case "H":
							a = ["C"].concat(A(b.x, b.y, a[1], b.y));
							break;
						case "V":
							a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
							break;
						case "Z":
							a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
					}
					return a
				}), k = function (a, b) {
					if (a[b].length > 7) {
						a[b].shift();
						for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
						a.splice(b, 1), r = Q(e.length, g && g.length || 0)
					}
				}, l = function (a, b, c, d, f) {
					a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
				}, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
				e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
				var s = e[q],
					t = g && g[q],
					u = s.length,
					v = g && t.length;
				h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
			}
			return g || (d.curve = f(e)), g ? [e, g] : e
		}

		function F(a, b) {
			if (!b) return a;
			var c, d, e, f, g, h, i;
			for (a = E(a), e = 0, g = a.length; g > e; e++)
				for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
			return a
		}

		function G(a, b) {
			for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
				var f = [{
					x: +a[d - 2],
					y: +a[d - 1]
				}, {
					x: +a[d],
					y: +a[d + 1]
				}, {
					x: +a[d + 2],
					y: +a[d + 3]
				}, {
					x: +a[d + 4],
					y: +a[d + 5]
				}];
				b ? d ? e - 4 == d ? f[3] = {
					x: +a[0],
					y: +a[1]
				} : e - 2 == d && (f[2] = {
					x: +a[0],
					y: +a[1]
				}, f[3] = {
					x: +a[2],
					y: +a[3]
				}) : f[0] = {
					x: +a[e - 2],
					y: +a[e - 1]
				} : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
					x: +a[d],
					y: +a[d + 1]
				}), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
			}
			return c
		}
		var H = b.prototype,
			I = a.is,
			J = a._.clone,
			K = "hasOwnProperty",
			L = /,?([a-z]),?/gi,
			M = parseFloat,
			N = Math,
			O = N.PI,
			P = N.min,
			Q = N.max,
			R = N.pow,
			S = N.abs,
			T = h(1),
			U = h(),
			V = h(0, 1),
			W = a._unit2px,
			X = {
				path: function (a) {
					return a.attr("path")
				},
				circle: function (a) {
					var b = W(a);
					return x(b.cx, b.cy, b.r)
				},
				ellipse: function (a) {
					var b = W(a);
					return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
				},
				rect: function (a) {
					var b = W(a);
					return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
				},
				image: function (a) {
					var b = W(a);
					return w(b.x || 0, b.y || 0, b.width, b.height)
				},
				line: function (a) {
					return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
				},
				polyline: function (a) {
					return "M" + a.attr("points")
				},
				polygon: function (a) {
					return "M" + a.attr("points") + "z"
				},
				deflt: function (a) {
					var b = a.node.getBBox();
					return w(b.x, b.y, b.width, b.height)
				}
			};
		a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function (a, b, c) {
			if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
			var d = V(a, c, 1);
			return b ? V(d, b).end : d
		}, H.getTotalLength = function () {
			return this.node.getTotalLength ? this.node.getTotalLength() : void 0
		}, H.getPointAtLength = function (a) {
			return U(this.attr("d"), a)
		}, H.getSubpath = function (b, c) {
			return a.path.getSubpath(this.attr("d"), b, c)
		}, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
	}), d.plugin(function (a) {
		var d = Math.max,
			e = Math.min,
			f = function (a) {
				if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
					for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
			},
			g = f.prototype;
		g.push = function () {
			for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
			return this
		}, g.pop = function () {
			return this.length && delete this[this.length--], this.items.pop()
		}, g.forEach = function (a, b) {
			for (var c = 0, d = this.items.length; d > c; c++)
				if (a.call(b, this.items[c], c) === !1) return this;
			return this
		}, g.animate = function (d, e, f, g) {
			"function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
			var h = arguments;
			if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
			var j, k = function () {
					j ? this.b = j : j = this.b
				},
				l = 0,
				m = g && function () {
					l++ == this.length && g.call(this)
				};
			return this.forEach(function (a, c) {
				b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, m)
			})
		}, g.remove = function () {
			for (; this.length;) this.pop().remove();
			return this
		}, g.bind = function (a, b, c) {
			var d = {};
			if ("function" == typeof b) this.bindings[a] = b;
			else {
				var e = c || a;
				this.bindings[a] = function (a) {
					d[e] = a, b.attr(d)
				}
			}
			return this
		}, g.attr = function (a) {
			var b = {};
			for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
			for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
			return this
		}, g.clear = function () {
			for (; this.length;) this.pop()
		}, g.splice = function (a, b) {
			a = 0 > a ? d(this.length + a, 0) : a, b = d(0, e(this.length - a, b));
			var c, g = [],
				h = [],
				i = [];
			for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
			for (c = 0; b > c; c++) h.push(this[a + c]);
			for (; c < this.length - a; c++) g.push(this[a + c]);
			var j = i.length;
			for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
			for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
			return new f(h)
		}, g.exclude = function (a) {
			for (var b = 0, c = this.length; c > b; b++)
				if (this[b] == a) return this.splice(b, 1), !0;
			return !1
		}, g.insertAfter = function (a) {
			for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
			return this
		}, g.getBBox = function () {
			for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;)
				if (!this.items[g].removed) {
					var h = this.items[g].getBBox();
					a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height)
				} return a = e.apply(0, a), b = e.apply(0, b), c = d.apply(0, c), f = d.apply(0, f), {
				x: a,
				y: b,
				x2: c,
				y2: f,
				width: c - a,
				height: f - b,
				cx: a + (c - a) / 2,
				cy: b + (f - b) / 2
			}
		}, g.clone = function (a) {
			a = new f;
			for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
			return a
		}, g.toString = function () {
			return "Snap‘s set"
		}, g.type = "set", a.set = function () {
			var a = new f;
			return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
		}
	}), d.plugin(function (a, c) {
		function d(a) {
			var b = a[0];
			switch (b.toLowerCase()) {
				case "t":
					return [b, 0, 0];
				case "m":
					return [b, 1, 0, 0, 1, 0, 0];
				case "r":
					return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
				case "s":
					return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
			}
		}

		function e(b, c, e) {
			c = m(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
			for (var f, g, h, k, l = Math.max(b.length, c.length), n = [], o = [], p = 0; l > p; p++) {
				if (h = b[p] || d(c[p]), k = c[p] || d(h), h[0] != k[0] || "r" == h[0].toLowerCase() && (h[2] != k[2] || h[3] != k[3]) || "s" == h[0].toLowerCase() && (h[3] != k[3] || h[4] != k[4])) {
					b = a._.transform2matrix(b, e()), c = a._.transform2matrix(c, e()), n = [
						["m", b.a, b.b, b.c, b.d, b.e, b.f]
					], o = [
						["m", c.a, c.b, c.c, c.d, c.e, c.f]
					];
					break
				}
				for (n[p] = [], o[p] = [], f = 0, g = Math.max(h.length, k.length); g > f; f++) f in h && (n[p][f] = h[f]), f in k && (o[p][f] = k[f])
			}
			return {
				from: j(n),
				to: j(o),
				f: i(n)
			}
		}

		function f(a) {
			return a
		}

		function g(a) {
			return function (b) {
				return +b.toFixed(3) + a
			}
		}

		function h(b) {
			return a.rgb(b[0], b[1], b[2])
		}

		function i(a) {
			var b, c, d, e, f, g, h = 0,
				i = [];
			for (b = 0, c = a.length; c > b; b++) {
				for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
				f += g + "]", i[b] = f
			}
			return Function("val", "return Snap.path.toString.call([" + i + "])")
		}

		function j(a) {
			for (var b = [], c = 0, d = a.length; d > c; c++)
				for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
			return b
		}
		var k = {},
			l = /[a-z]+$/i,
			m = String;
		k.stroke = k.fill = "colour", c.prototype.equal = function (a, c) {
			return b("snap.util.equal", this, a, c).firstDefined()
		}, b.on("snap.util.equal", function (b, c) {
			var d, n, o = m(this.attr(b) || ""),
				p = this;
			if (o == +o && c == +c) return {
				from: +o,
				to: +c,
				f: f
			};
			if ("colour" == k[b]) return d = a.color(o), n = a.color(c), {
				from: [d.r, d.g, d.b, d.opacity],
				to: [n.r, n.g, n.b, n.opacity],
				f: h
			};
			if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), e(o, c, function () {
				return p.getBBox(1)
			});
			if ("d" == b || "path" == b) return d = a.path.toCubic(o, c), {
				from: j(d[0]),
				to: j(d[1]),
				f: i(d[0])
			};
			if ("points" == b) return d = m(o).split(a._.separator), n = m(c).split(a._.separator), {
				from: d,
				to: n,
				f: function (a) {
					return a
				}
			};
			aUnit = o.match(l);
			var q = m(c).match(l);
			return aUnit && aUnit == q ? {
				from: parseFloat(o),
				to: parseFloat(c),
				f: g(aUnit)
			} : {
				from: this.asPX(b),
				to: this.asPX(b, c),
				f: f
			}
		})
	}), d.plugin(function (a, c, d, e) {
		for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
				mousedown: "touchstart",
				mousemove: "touchmove",
				mouseup: "touchend"
			}, k = (function (a, b) {
				var c = "y" == a ? "scrollTop" : "scrollLeft",
					d = b && b.node ? b.node.ownerDocument : e.doc;
				return d[c in d.documentElement ? "documentElement" : "body"][c]
			}), l = function () {
				this.returnValue = !1
			}, m = function () {
				return this.originalEvent.preventDefault()
			}, n = function () {
				this.cancelBubble = !0
			}, o = function () {
				return this.originalEvent.stopPropagation()
			}, p = function () {
				return e.doc.addEventListener ? function (a, b, c, d) {
					var e = h && j[b] ? j[b] : b,
						f = function (e) {
							var f = k("y", d),
								i = k("x", d);
							if (h && j[g](b))
								for (var l = 0, n = e.targetTouches && e.targetTouches.length; n > l; l++)
									if (e.targetTouches[l].target == a || a.contains(e.targetTouches[l].target)) {
										var p = e;
										e = e.targetTouches[l], e.originalEvent = p, e.preventDefault = m, e.stopPropagation = o;
										break
									} var q = e.clientX + i,
								r = e.clientY + f;
							return c.call(d, e, q, r)
						};
					return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
						function () {
							return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
						}
				} : e.doc.attachEvent ? function (a, b, c, d) {
					var e = function (a) {
						a = a || d.node.ownerDocument.window.event;
						var b = k("y", d),
							e = k("x", d),
							f = a.clientX + e,
							g = a.clientY + b;
						return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, f, g)
					};
					a.attachEvent("on" + b, e);
					var f = function () {
						return a.detachEvent("on" + b, e), !0
					};
					return f
				} : void 0
			}(), q = [], r = function (a) {
				for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = q.length; i--;) {
					if (c = q[i], h) {
						for (var j, l = a.touches && a.touches.length; l--;)
							if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
								d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
								break
							}
					} else a.preventDefault(); {
						var m = c.el.node;
						m.nextSibling, m.parentNode, m.style.display
					}
					d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
				}
			}, s = function (c) {
				a.unmousemove(r).unmouseup(s);
				for (var d, e = q.length; e--;) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
				q = []
			}, t = i.length; t--;) ! function (b) {
			a[b] = f[b] = function (c, d) {
				return a.is(c, "function") && (this.events = this.events || [], this.events.push({
					name: b,
					f: c,
					unbind: p(this.node || document, b, c, d || this)
				})), this
			}, a["un" + b] = f["un" + b] = function (a) {
				for (var c = this.events || [], d = c.length; d--;)
					if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
				return this
			}
		}(i[t]);
		f.hover = function (a, b, c, d) {
			return this.mouseover(a, c).mouseout(b, d || c)
		}, f.unhover = function (a, b) {
			return this.unmouseover(a).unmouseout(b)
		};
		var u = [];
		f.drag = function (c, d, e, f, g, h) {
			function i(i, j, k) {
				(i.originalEvent || i).preventDefault(), this._drag.x = j, this._drag.y = k, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({
					el: this,
					move_scope: f,
					start_scope: g,
					end_scope: h
				}), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, j, k, i)
			}
			if (!arguments.length) {
				var j;
				return this.drag(function (a, b) {
					this.attr({
						transform: j + (j ? "T" : "t") + [a, b]
					})
				}, function () {
					j = this.transform().local
				})
			}
			return this._drag = {}, u.push({
				el: this,
				start: i
			}), this.mousedown(i), this
		}, f.undrag = function () {
			for (var c = u.length; c--;) u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id));
			return !u.length && a.unmousemove(r).unmouseup(s), this
		}
	}), d.plugin(function (a, c, d) {
		var e = (c.prototype, d.prototype),
			f = /^\s*url\((.+)\)/,
			g = String,
			h = a._.$;
		a.filter = {}, e.filter = function (b) {
			var d = this;
			"svg" != d.type && (d = d.paper);
			var e = a.parse(g(b)),
				f = a._.id(),
				i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
			return h(i, {
				id: f,
				filterUnits: "userSpaceOnUse"
			}), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
		}, b.on("snap.util.getattr.filter", function () {
			b.stop();
			var c = h(this.node, "filter");
			if (c) {
				var d = g(c).match(f);
				return d && a.select(d[1])
			}
		}), b.on("snap.util.attr.filter", function (d) {
			if (d instanceof c && "filter" == d.type) {
				b.stop();
				var e = d.node.id;
				e || (h(d.node, {
					id: d.id
				}), e = d.id), h(this.node, {
					filter: a.url(e)
				})
			}
			d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
		}), a.filter.blur = function (b, c) {
			null == b && (b = 2);
			var d = null == c ? b : [b, c];
			return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
				def: d
			})
		}, a.filter.blur.toString = function () {
			return this()
		}, a.filter.shadow = function (b, c, d, e, f) {
			return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
				color: e,
				dx: b,
				dy: c,
				blur: d,
				opacity: f
			})
		}, a.filter.shadow.toString = function () {
			return this()
		}, a.filter.grayscale = function (b) {
			return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
				a: .2126 + .7874 * (1 - b),
				b: .7152 - .7152 * (1 - b),
				c: .0722 - .0722 * (1 - b),
				d: .2126 - .2126 * (1 - b),
				e: .7152 + .2848 * (1 - b),
				f: .0722 - .0722 * (1 - b),
				g: .2126 - .2126 * (1 - b),
				h: .0722 + .9278 * (1 - b)
			})
		}, a.filter.grayscale.toString = function () {
			return this()
		}, a.filter.sepia = function (b) {
			return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
				a: .393 + .607 * (1 - b),
				b: .769 - .769 * (1 - b),
				c: .189 - .189 * (1 - b),
				d: .349 - .349 * (1 - b),
				e: .686 + .314 * (1 - b),
				f: .168 - .168 * (1 - b),
				g: .272 - .272 * (1 - b),
				h: .534 - .534 * (1 - b),
				i: .131 + .869 * (1 - b)
			})
		}, a.filter.sepia.toString = function () {
			return this()
		}, a.filter.saturate = function (b) {
			return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
				amount: 1 - b
			})
		}, a.filter.saturate.toString = function () {
			return this()
		}, a.filter.hueRotate = function (b) {
			return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
				angle: b
			})
		}, a.filter.hueRotate.toString = function () {
			return this()
		}, a.filter.invert = function (b) {
			return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
				amount: b,
				amount2: 1 - b
			})
		}, a.filter.invert.toString = function () {
			return this()
		}, a.filter.brightness = function (b) {
			return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
				amount: b
			})
		}, a.filter.brightness.toString = function () {
			return this()
		}, a.filter.contrast = function (b) {
			return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
				amount: b,
				amount2: .5 - b / 2
			})
		}, a.filter.contrast.toString = function () {
			return this()
		}
	}), d
});

/**
 * main4.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function () {
	var bodyEl = document.body,
		content = document.querySelector('.content-wrap'),
		openbtn = document.getElementById('open-button'),
		closebtn = document.getElementById('close-button'),
		isOpen = false,
		morphEl = document.getElementById('morph-shape'),
	isAnimating = false;

	function toggleMenu() {
		if (isAnimating) return false;
		isAnimating = true;
		if (isOpen) {
			classie.remove(bodyEl, 'show-menu');
			setTimeout(function () {
				path.attr('d', initialPath);
				isAnimating = false
			}, 300)
		} else {
			classie.add(bodyEl, 'show-menu');
			var pos = 0,
				nextStep = function (pos) {
					if (pos > stepsTotal - 1) {
						isAnimating = false;
						return
					}
					path.animate({
						'path': steps[pos]
					}, pos === 0 ? 400 : 500, pos === 0 ? mina.easein : mina.elastic, function () {
						nextStep(pos)
					});
					pos++
				};
			nextStep(pos)
		}
		isOpen = !isOpen
	}
})();


/**
	/*
	 *
	 *	jQuery Sliding Menu Plugin
	 *	Mobile app list-style navigation in the browser
	 *
	 *	Written by Ali Zahid
	 *	http://alizahid.github.io/jquery-sliding-menu/
	 *
	 */
(function ($) {
	var usedIds = [];
	$.fn.menu = function (options) {
		var selector = this.selector;
		var settings = $.extend({
			dataJSON: false,
			backLabel: 'Back'
		}, options);
		return this.each(function () {
			var self = this,
				menu = $(self),
				data;
			if (menu.hasClass('sliding-menu')) {
				return
			}
			var menuWidth = menu.width();
			if (settings.dataJSON) {
				data = processJSON(settings.dataJSON)
			} else {
				data = process(menu)
			}
			menu.empty().addClass('sliding-menu');
			var rootPanel;
			if (settings.dataJSON) {
				$(data).each(function (index, item) {
					var panel = $('<ul></ul>');
					if (item.root) {
						rootPanel = '#' + item.id
					}
					panel.attr('id', item.id);
					panel.addClass('menu-panel');
					panel.width(menuWidth);
					$(item.children).each(function (index, item) {
						var link = $('<a></a>');
						link.attr('class', item.styleClass);
						link.attr('href', item.href);
						link.text(item.label);
						var li = $('<li></li>');
						li.append(link);
						panel.append(li)
					});
					menu.append(panel)
				})
			} else {
				$(data).each(function (index, item) {
					var panel = $(item);
					if (panel.hasClass('menu-panel-root')) {
						rootPanel = '#' + panel.attr('id')
					}
					panel.width(menuWidth);
					menu.append(item)
				})
			}
			rootPanel = $(rootPanel);
			rootPanel.addClass('menu-panel-root');
			var currentPanel = rootPanel;
			menu.height(rootPanel.height());
			var wrapper = $('<div></div>').addClass('sliding-menu-wrapper').width(data.length * menuWidth);
			menu.wrapInner(wrapper);
			wrapper = $('.sliding-menu-wrapper', menu);
			$('a', self).on('click', function (e) {
				var href = $(this).attr('href'),
					label = $(this).text();
				if (wrapper.is(':animated')) {
					e.preventDefault();
					return
				}
				if (href == '#') {
					e.preventDefault()
				} else if (href.indexOf('#menu-panel') == 0) {
					var target = $(href),
						isBack = $(this).hasClass('back'),
						marginLeft = parseInt(wrapper.css('margin-left'));
					if (isBack) {
						if (href == '#menu-panel-back') {
							target = currentPanel.prev()
						}
						wrapper.stop(true, true).animate({
							marginLeft: marginLeft + menuWidth
						}, 'fast')
					} else {
						target.insertAfter(currentPanel);
						if (settings.backLabel === true) {
							$('.back', target).text(label)
						} else {
							$('.back', target).text(settings.backLabel)
						}
						wrapper.stop(true, true).animate({
							marginLeft: marginLeft - menuWidth
						}, 'fast')
					}
					currentPanel = target;
					menu.stop(true, true).animate({
						height: target.height()
					}, 'fast');
					e.preventDefault()
				}
			});
			return this
		});

		function process(data) {
			var ul = $('ul', data),
				panels = [];
			$(ul).each(function (index, item) {
				var panel = $(item),
					handler = panel.prev(),
					id = getNewId();
				if (handler.length == 1) {
					handler.addClass('nav').attr('href', '#menu-panel-' + id)
				}
				panel.attr('id', 'menu-panel-' + id);
				if (index == 0) {
					panel.addClass('menu-panel-root')
				} else {
					panel.addClass('menu-panel');
					var li = $('<li></li>'),
						back = $('<a></a>').addClass('back').attr('href', '#menu-panel-back');
					panel.prepend(back)
				}
				panels.push(item)
			});
			return panels
		}

		function processJSON(data, parent) {
			var root = {
					id: 'menu-panel-' + getNewId(),
					children: [],
					root: (parent ? false : true)
				},
				panels = [];
			if (parent) {
				root.children.push({
					styleClass: 'back',
					href: '#' + parent.id
				})
			}
			$(data).each(function (index, item) {
				root.children.push(item);
				if (item.children) {
					var panel = processJSON(item.children, root);
					item.href = '#' + panel[0].id;
					item.styleClass = 'nav';
					panels = panels.concat(panel)
				}
			});
			return [root].concat(panels)
		}

		function getNewId() {
			var id;
			do {
				id = Math.random().toString(36).substring(3, 8)
			} while (usedIds.indexOf(id) >= 0);
			usedIds.push(id);
			return id
		}
	}
}(jQuery));


/*
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
! function (a, b) {
	function c(b) {
		var c, d = a("<div></div>").css({
			width: "100%"
		});
		return b.append(d), c = b.width() - d.width(), d.remove(), c
	}

	function d(e, f) {
		var g = e.getBoundingClientRect(),
			h = g.top,
			i = g.bottom,
			j = g.left,
			k = g.right,
			l = a.extend({
				tolerance: 0,
				viewport: b
			}, f),
			m = !1,
			n = l.viewport.jquery ? l.viewport : a(l.viewport);
		n.length || (console.warn("isInViewport: The viewport selector you have provided matches no element on page."), console.warn("isInViewport: Defaulting to viewport as window"), n = a(b));
		var o = n.height(),
			p = n.width(),
			q = n.get(0).toString();
		if (n[0] !== b && "[object Window]" !== q && "[object DOMWindow]" !== q) {
			var r = n.get(0).getBoundingClientRect();
			h -= r.top, i -= r.top, j -= r.left, k = j + p, d.scrollBarWidth = d.scrollBarWidth || c(n), p -= d.scrollBarWidth
		}
		return l.tolerance = ~~Math.round(parseFloat(l.tolerance)), l.tolerance < 0 && (l.tolerance = o + l.tolerance), Math.abs(j) >= p ? m : m = l.tolerance ? !!(h <= l.tolerance && i >= l.tolerance) : !!(i > 0 && o >= h)
	}
	String.prototype.hasOwnProperty("trim") || (String.prototype.trim = function () {
		return this.replace(/^\s*(.*?)\s*$/, "$1")
	});
	var e = function (b) {
		if (1 === arguments.length && "function" == typeof b && (b = [b]), !(b instanceof Array)) throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");
		for (var c = 0; c < b.length; c++)
			if ("function" == typeof b[c])
				for (var d = 0; d < this.length; d++) b[c].call(a(this[d]));
			else console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"), console.warn("isInViewport: Ignoring non-function values in array and moving on");
		return this
	};
	a.fn["do"] = function (a) {
		return console.warn("isInViewport: .do causes issues in IE and some browsers since its a reserved. Use $.fn.run instead i.e., $(el).run(fn)."), e(a)
	}, a.fn.run = e, a.extend(a.expr[":"], {
		"in-viewport": function (a, b, c) {
			if (c[3]) {
				var e = c[3].split(",");
				return 1 === e.length && isNaN(e[0]) && (e[1] = e[0], e[0] = void 0), d(a, {
					tolerance: e[0] ? e[0].trim() : void 0,
					viewport: e[1] ? e[1].trim() : void 0
				})
			}
			return d(a)
		}
	})
}(window.jQuery, window);

(function ($) {
	$.fn.ctscroll = function (options) {
		var $settings = $.extend({
			'theme': 'orange',
			'text': '',
			'scrollDuration': 1300,
			'scrollOffset': 5,
			'html5Hash': true
		}, options);
		var $targets = this;
		var $dotActiveClass = 'cts-dot-' + $settings.theme;
		var $arActiveClass = 'cts-ar-' + $settings.theme;
		var $prevScrollTop = 90;

		function appendBasicElements() {
			$('.arrowpagenav').append('<div id="ctsElsWrapper"><a target="_self" title="" class="cts-arrow cts-up cts-smsc"></a><p class="cts-text">' + $settings.text + '</p><a target="_self" title="" class="cts-arrow cts-down cts-smsc"></a><div>');
			$targets.each(function () {
				if ($(this).attr('id') !== false && $(this).attr('id') !== undefined) {
					var $elId = $(this).attr('id')
				} else {
					var $elId = 'ctsAddedId' + $($targets).index(this);
					$(this).attr('id', $elId)
				}
				$('#ctsElsWrapper').append('<a href="#' + $elId + '" target="_self" title="" class="cts-dot cts-smsc"></a>')
			})
		}

		function init() {
			appendBasicElements();
			checkViewport()
		}
		init();

		function setActiveDot($index) {
			if ($index > -1) {
				$('.' + $dotActiveClass).removeClass($dotActiveClass);
				var $el = $('.cts-dot').eq($index);
				if ($el !== false && $el !== undefined) {
					if (!$el.hasClass($dotActiveClass)) {
						$el.addClass($dotActiveClass);
						setPrevNextLinks($index)
					}
				}
			}
		}

		function checkViewport() {
			if ($targets.filter(':in-viewport').length > 0) {
				var $firstEl = $targets.filter(':in-viewport:first');
				var $index = $targets.index($firstEl);
				setActiveDot($index)
			}
		}

		function detectScrollDirection() {
			var $scrollTop = $(this).scrollTop();
			($scrollTop < 0) ? $scrollTop = 0: null;
			($scrollTop > $('body').height() - $(window).height()) ? $scrollTop = $('body').height() - $(window).height(): null;
			($scrollTop >= $prevScrollTop && $scrollTop) ? $(window).trigger('scrollDown'): $(window).trigger('scrollUp');
			$prevScrollTop = $scrollTop
		}

		function moveToTarget($id) {
			var $targetOffset = $($id).offset().top + $settings.scrollOffset;
			$('html, body').stop(true, true).animate({
				'scrollTop': $targetOffset
			}, $settings.scrollDuration, 'swing', function () {})
		}

		function setPrevNextLinks($currIndex) {
			var $maxIndex = $('.cts-dot').length;
			var $nextIndex = ($currIndex <= $maxIndex) ? 1 + $currIndex : null;
			var $prevIndex = ($currIndex <= 0) ? null : -1 + $currIndex;
			var $prevHash = ($prevIndex !== null) ? $('a.cts-dot').eq($prevIndex).attr('href') : null;
			var $nextHash = ($nextIndex !== null) ? $('a.cts-dot').eq($nextIndex).attr('href') : null;
			$('a.cts-up').attr('href', $prevHash);
			$('a.cts-down').attr('href', $nextHash)
		}
		$(window).on('scrollUp', function () {
			$('.cts-up').addClass($arActiveClass);
			$('.cts-down').removeClass($arActiveClass)
		});
		$(window).on('scrollDown', function () {
			$('.cts-down').addClass($arActiveClass);
			$('.cts-up').removeClass($arActiveClass)
		});
		$(window).scroll(function () {
			detectScrollDirection();
			checkViewport()
		});
		$('.cts-smsc').on('click', function (event) {
			event.preventDefault();
			var $id = $(this).attr('href');
			moveToTarget($id)
		});
		return this
	}
}(jQuery));
/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
! function (t, e, o) {
	"use strict";
	t.HoverDir = function (e, o) {
		this.$el = t(o), this._init(e)
	}, t.HoverDir.defaults = {
		speed: 300,
		easing: "ease",
		hoverDelay: 0,
		inverse: !1
	}, t.HoverDir.prototype = {
		_init: function (e) {
			this.options = t.extend(!0, {}, t.HoverDir.defaults, e), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = Modernizr.csstransitions, this._loadEvents()
		},
		_loadEvents: function () {
			var e = this;
			this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (o) {
				var i = t(this),
					n = i.find("div.hd-box"),
					s = e._getDir(i, {
						x: o.pageX,
						y: o.pageY
					}),
					r = e._getStyle(s);
				"mouseenter" === o.type ? (n.hide().css(r.from), clearTimeout(e.tmhover), e.tmhover = setTimeout(function () {
					n.show(0, function () {
						var o = t(this);
						e.support && o.css("transition", e.transitionProp), e._applyAnimation(o, r.to, e.options.speed)
					})
				}, e.options.hoverDelay)) : (e.support && n.css("transition", e.transitionProp), clearTimeout(e.tmhover), e._applyAnimation(n, r.from, e.options.speed))
			})
		},
		_getDir: function (t, e) {
			var o = t.width(),
				i = t.height(),
				n = (e.x - t.offset().left - o / 2) * (o > i ? i / o : 1),
				s = (e.y - t.offset().top - i / 2) * (i > o ? o / i : 1),
				r = Math.round((Math.atan2(s, n) * (180 / Math.PI) + 180) / 90 + 3) % 4;
			return r
		},
		_getStyle: function (t) {
			var e, o, i = {
					left: "0px",
					top: "-100%"
				},
				n = {
					left: "0px",
					top: "100%"
				},
				s = {
					left: "-100%",
					top: "0px"
				},
				r = {
					left: "100%",
					top: "0px"
				},
				a = {
					top: "0px"
				},
				p = {
					left: "0px"
				};
			switch (t) {
				case 0:
					e = this.options.inverse ? n : i, o = a;
					break;
				case 1:
					e = this.options.inverse ? s : r, o = p;
					break;
				case 2:
					e = this.options.inverse ? i : n, o = a;
					break;
				case 3:
					e = this.options.inverse ? r : s, o = p
			}
			return {
				from: e,
				to: o
			}
		},
		_applyAnimation: function (e, o, i) {
			t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate, e.stop().applyStyle(o, t.extend(!0, [], {
				duration: i + "ms"
			}))
		}
	};
	var i = function (t) {
		e.console && e.console.error(t)
	};
	t.fn.hoverdir = function (e) {
		var o = t.data(this, "hoverdir");
		if ("string" == typeof e) {
			var n = Array.prototype.slice.call(arguments, 1);
			this.each(function () {
				return o ? t.isFunction(o[e]) && "_" !== e.charAt(0) ? void o[e].apply(o, n) : void i("no such method '" + e + "' for hoverdir instance") : void i("cannot call methods on hoverdir prior to initialization; attempted to call method '" + e + "'")
			})
		} else this.each(function () {
			o ? o._init() : o = t.data(this, "hoverdir", new t.HoverDir(e, this))
		});
		return o
	}
}(jQuery, window);

(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		return $(this).each(function () {
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from: $(this).data('from'),
				to: $(this).data('num'),
				speed: $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals: $(this).data('decimals')
			}, options);
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			$self.data('countTo', data);
			if (data.interval) {
				clearInterval(data.interval)
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;
				render(value);
				if (typeof (settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value)
				}
				if (loopCount >= loops) {
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					if (typeof (settings.onComplete) == 'function') {
						settings.onComplete.call(self, value)
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue)
			}
		})
	};
	$.fn.countTo.defaults = {
		from: 0,
		to: 0,
		speed: 2500,
		refreshInterval: 100,
		decimals: 0,
		formatter: formatter,
		onUpdate: null,
		onComplete: null
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals)
	}
}(jQuery));

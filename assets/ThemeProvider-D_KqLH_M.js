import{g as u,r as p,R as x}from"./index-Dl6G-zuu.js";var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var o={}.hasOwnProperty;function e(){for(var t="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(t=a(t,f(n)))}return t}function f(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return e.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var n in t)o.call(t,n)&&t[n]&&(r=a(r,n));return r}function a(t,r){return r?t?t+" "+r:t+r:t}s.exports?(e.default=e,s.exports=e):window.classNames=e})()})(c);var l=c.exports;const v=u(l);var i=x.createContext({});i.Consumer;i.Provider;function y(s,o){var e=p.useContext(i);return s||e[o]||o}export{v as c,y as u};

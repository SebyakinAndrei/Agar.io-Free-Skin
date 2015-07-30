// ==UserScript==
// @name       Free Skin
// @namespace	 agarmods
// @version      1.0.2
// @description  Your skin in agar.io!!!
// @author       Sebyakin Andrei
// @match        http://agar.io/
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.src = "https://cdn.rawgit.com/SebyakinAndrei/Agar.io-Free-Skin/180f80acd378163b332d5e09865394dd2ef5ab0a/addon.js";
(document.body || document.head || document.documentElement).appendChild(script);

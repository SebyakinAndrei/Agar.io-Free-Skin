// ==UserScript==
// @name       Free Skin
// @namespace	 agarmods
// @version      1.0.0
// @description  Your skin in agar.io!!!
// @author       Sebyakin Andrei
// @match        http://agar.io/
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.src = "http://cdn.rawgit.com/SebyakinAndrei/Agar.io-Free-Skin/master/addon.js";
(document.body || document.head || document.documentElement).appendChild(script);

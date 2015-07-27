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
script.src = "https://cdn.rawgit.com/SebyakinAndrei/Agar.io-Free-Skin/f111de0b4aecb80ebe2006abf9f80fb4cb5bed44/addon.js";
(document.body || document.head || document.documentElement).appendChild(script);

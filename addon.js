
var gamejs = "", modBlocking = true;
var tester = document.getElementsByTagName("script");
var i = 0, main_out_url = "http://agar.io/main_out.js", discovered_mainouturl = 0;

var ourskin = prompt("Введите ник, на который хотите поставить скин: ", "");
ourskin = ourskin.toLowerCase();
var skinurl = prompt("Введите прямую ссылку на скин (например http://i.imgur.com/jjtfCXI.jpg): ", ""); 
 

for (i=0; i<tester.length; i++ ){
	src = tester[i].src;
	if (src.substring(0, main_out_url.length ) == main_out_url) {
		discovered_mainouturl = src.replace("http://agar.io/","");
	}
}

if(discovered_mainouturl != 0) {
	httpGet(discovered_mainouturl, function(data) {
		gamejs = "window.agariomods = " + data.replace("socket open","socket open (agariomods.com mod in place)");
		gamejs = gamejs.replace(/\n/g, "");
		agariomodsRuntimeInjection();
	});
}

// XMLHttp, because apparently raven is doing funky stuff with jQuery
function httpGet(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, true);
	xmlHttp.send(null);
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			callback(xmlHttp.responseText);
		}
	};
}
function agariomodsRuntimeInjection() {
	var script = document.createElement("script");
	agariomodsRuntimePatches();
	script.innerHTML = gamejs;
	document.head.appendChild(script);
}

function agariomodsRuntimePatches() {
	//var ourskin = "twilight";
	//var skinurl = "http://i.imgur.com/jjtfCXI.jpg";
    gamejs = gamejs.replace(';reddit;',';reddit;'+ourskin+';');
    gamejs = gamejs.replace('d=this.name.toLowerCase();', 'd=this.name.toLowerCase();var agariomods = "";if (d == "'+ourskin+'") {agariomods="'+skinurl+'";} else {agariomods="http://agar.io/skins/" + d + ".png";}');
    gamejs = gamejs.replace('K[d].src="skins/"+d+".png"', 'K[d].src=agariomods');
	agariomodsRuntimeHacks();
}


function agariomodsRuntimeHacks() {
	var playBtn = jQuery('#playBtn');
	var nodeLinks = document.createElement("div");
	nodeLinks.innerHTML = "<a href='http://vk.com/supersebyakin' target='_blank'>Sebyakin Andrei in VK</a>";
	nodeLinks.style.position = "absolute";
	nodeLinks.style.top = "4em";	
	jQuery(playBtn).parent().get(0).appendChild(nodeLinks);
}


var styles = {
	heading: {font:"20px Ubuntu", spacing: 41, alpha: 1},
	subheading: {font:"18px Ubuntu", spacing: 31, alpha: 1},
	normal: {font:"12px Ubuntu", spacing: 21, alpha: 0.6}
}



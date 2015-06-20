
var gamejs = "", modBlocking = true;
var tester = document.getElementsByTagName("script");
var i = 0, main_out_url = "http://agar.io/main_out.js", discovered_mainouturl = 0;

var W = '';
var b = '';
var offset;

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
		gamejs = "window.agariomods = " + data.replace("socket open","socket open");
		gamejs = gamejs.replace(/\n/g, "");
		offset = gamejs.search(".....src=\"skins");
		b = gamejs.substr(offset + 2, 1);
		offset = gamejs.search(".."+b+"..src");
		W = gamejs.substr(offset, 1);
		agariomodsRuntimeInjection();
	});
}

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
    gamejs = gamejs.replace(b+'=this.name.toLowerCase();', b+'=this.name.toLowerCase();var agariomods = "";if ('+b+' == "'+ourskin+'") {agariomods="'+skinurl+'";} else {agariomods="http://agar.io/skins/" + '+b+' + ".png";}');
    gamejs = gamejs.replace(W+'['+b+'].src="skins/"+'+b+'+".png"', W+'['+b+'].src=agariomods');
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

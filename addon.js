// Original code - agariomods.com (electronoob)
// Cut and edit - Sebyakin Andrei
// Contacts: vk.com/supersebyakin

var ourskin = prompt("Введите ник, на который хотите поставить скин: ", "");
ourskin = ourskin.toLowerCase();
var skinurl = prompt("Введите прямую ссылку на скин (например http://i.imgur.com/jjtfCXI.jpg): ", ""); 

try {
    (function() {   
        document.getElementById("overlays").style.display = 'none';
        document.getElementById("connecting").style.display = 'none';
        var showsh = false;
        var showt = localStorage.getItem("showt") == "true";
        window.extToggled = false;
        window.server = {
            ip: "",
            i: "",
            location: ""
        };
        var gamejs = "",
            modBlocking = true;
        var tester = document.getElementsByTagName("script");
        var i = 0;
        var W = '';
        var Ja = '';
        var b = '';
        var sk = '';
        var c3eg2 = '';
        var in_game = false;
        var pandb = '';
    
        var test = 1;
        var passed = 0;
        var failed = 0;
        var sd = '';
        var mainout = window.location.protocol + "//agar.io/main_out.js";
        httpGet(mainout, function(data) {
            winvar = data.substr(10, 1);
            gamejs = data.replace("socket open", "socket open (agariomods.com mod in place)");
            gamejs = gamejs.replace(/\n/g, "");
            sd = gamejs.substr(gamejs.search(/\w.send/), 1);
            offset = gamejs.search("..=\"poland;");
            Ja = gamejs.substr(offset, 2);
            offset = gamejs.search(".....src=\"skins");
            b = gamejs.substr(offset + 2, 1);
            offset = gamejs.search(/\w+\.indexOf\(.\)\?/);
            sk = gamejs.substr(offset, 2);
            offset = gamejs.search(".." + b + "..src");
            W = gamejs.substr(offset, 1);
            mycells = gamejs.match(/1==(\w+)\.length&&\(/)[1];
            var components = /this\.(.)&&.\.strokeText/.exec(gamejs);
            pandb = components[1];
            var components = /(\w)\.strokeText\((.{1,14})\);/.exec(gamejs);
            c3eg2 = components[2];
            bdot = components[1];
            agariomodsRuntimeInjection();
        });

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
        window.connect2 = (window.connect ? window.connect : function() {
            return
        });

        function agariomodsRuntimeInjection() {
            var tester = document.getElementsByTagName("head");
            var script = document.createElement("script");
            script.id = "agariomods";
            agariomodsRuntimePatches();
            if (document.getElementById("agariomods")) {
                alert("You are currently running multiple instances of Agariomods simultaneously!\nCheck that you dont have Tampermonkey Script and the Chrome Extension running at the same time if you're on Chrome;\nYou will see visual glicthes until YOU fix this.");
            }
            script.innerHTML = gamejs;
			var oc = document.getElementById("canvas");
            var nc = document.createElement("canvas");
            nc.id = "canvas";
            nc.width = oc.width;
            nc.height = oc.height;
			oc.clearRect(0, 0, oc.width, oc.height);
            oc.parentNode.replaceChild(nc, oc);
			nc.clearRect(0, 0, nc.width, nc.height);
            document.head.appendChild(script);
            agariomodsRuntimeHacks();
        }

        function agariomodsRuntimePatches() {
            gamejs_patch(/\((\w+\?)/, '(OnDeath(),$1', 'add ondeath hook');
            gamejs = gamejs.split("#region").join(".region");
            gamejs_patch(';reddit;', ';reddit;' + ourskin + ';', "add our skin to the original game skinlist.");
            gamejs_patch(b+'=this.name.toLowerCase();', b+'=this.name.toLowerCase();var agariomods = "";if ('+b+' == "'+ourskin+'") {agariomods="'+skinurl+'";} else {agariomods="http://agar.io/skins/" + '+b+' + ".png";}', "our skin goes here");
            gamejs_patch('=1E4,', '=1E4,' + 'show_name=true,zz=!1,yq=!1,xx=!1,xz=!1,ts=!1,custom=!1,opv=!1,pcs=!1,pcsrc=""' + ',', "adding variables");
            gamejs_patch(W + '[' + b + '].src="skins/"+' + b + '+".png"', W + '[' + b + '].src=agariomods', "check for agariomods img src variable");
			gamejs_patch(".googletag.pubads&&", ".googletag.pubads&&window.googletag.pubads.clear&&", "Fix for users with Ghostery");
			gamejs_patch(/(\w)\[0\]\.name\)\)/, "$1[0].name.search(/^(i\\/|\\*.|\\+.)/)==-1?$1[0].name:''))", "Trying to fix nodes not being removed.");
			gamejs_patch("this." + pandb + "&&" + bdot + ".strokeText(" + c3eg2 + ");" + bdot + ".fillText(" + c3eg2 + ")", "if (String(" + c3eg2.substr(0, 1) + ") != "ourskin" || !show_name) {this." + pandb + "&&" + bdot + ".strokeText(" + c3eg2 + ");" + bdot + ".fillText(" + c3eg2 + ")}", "add imgur skins check for hiding username when using imgur id aka c3eg2");
            gamejs = addSkinHook(gamejs);  
			gamejs = addCanvasBGHook(gamejs);
			gamejs = addConnectHook(gamejs);
			gamejs = addFunc(gamejs);
            console.log("Testing complete, " + passed + " units passed and " + failed + " units failed.");
            if (failed) {
                if (window.debug) console.log(new Error("UNIT FAILED"));
                else window.onmoderror()
            };
        }
		
		function addFunc(script) {
			var match = script.match(/((\w)\.setAcid)/);
			match = match[0];
			var g = '', i = 0;
			while(i != '.') {
				g += match[i];
				i++;
			}
			script = script.replace(match, g + ".setShowName = function(){show_name = !show_name};" + match);
			return script;
		}

        function gamejs_patch(search, replace, purpose) {
            testCondition(typeof search == "string" ? ~gamejs.indexOf(search) : search.test(gamejs), test++, purpose, search);
            gamejs = gamejs.replace(search, replace);
        }

        function testCondition(condition, id, comment, search) {
            if (condition) {
                window.debug && console.log("test: #" + id + " PASSED - " + comment);
                passed++;
            } else {
                console.error("test: #" + id + " FAILED - " + comment + "\n Could not find: " + search.toString());
                failed++;
            }
        }

        function agariomodsRuntimeHacks() {
            
		}
		
		function addConnectHook(script) {
            var match = script.match(/console\.log\("Connecting to "\+a\);/);
            var split = script.split(match[0]);
            return split[0] + ('try{connect2("...")}catch(a){};') + match[0] + 'if(a.indexOf(window.server.ip)==-1){window.server = {ip:"",i:"",location:""};closeChat();}' + split[1];
        }

        function addSkinHook(script) {
            var match = script.match(/(\w+)=null\)\):\w+=null;/);
            var split = script.split(match[0]);
            return split[0] + match[1] + '=null)):' + match[1] + '=null;if(custom&&(' + b + '.substring(0,2).match(/^(i\\/|\\*.)$/))){' + match[1] + '=null;}' + split[1];
        }
		
		function addCanvasBGHook(script) {
            var match = script.match(/(\w)\.clearRect\(0,0,(\w),(\w)\)/);
            var split = script.split(match[0]);
            script = split[0] + match[1] + '.clearRect(0,0,' + match[2] + ',' + match[3] + ');xx&&!xz?' + match[1] + '.clearRect(0,0,' + match[2] + ',' + match[3] + '):' + split[1].substr(1);
            var match2 = script.match(/BFF";/);
            var split = script.split(match2[0]);
            return split[0] + 'BFF";xx&&xz?' + match[1] + '.clearRect(0,0,' + match[2] + ',' + match[3] + '):' + split[1];
        }

        var styles = {
            heading: {
                font: "20px Ubuntu",
                spacing: 41,
                alpha: 1
            },
            subheading: {
                font: "18px Ubuntu",
                spacing: 31,
                alpha: 1
            },
            normal: {
                font: "12px Ubuntu",
                spacing: 21,
                alpha: 0.6
            }
        }

        window.OnDeath = function() {
            showsh = false;
            in_game = false;
            $("#helloContainer").show();
			document.getElementById("overlays").style.display = "block";
            document.getElementById("overlays").style.pointerEvents = "auto";
            $("#helloContainer").show();
            document.getElementById("helloContainer").style.display = "block";
        }
    })();
} catch (e) {
    $(document).off("onbeforeunload");
    window.onmoderror()
}

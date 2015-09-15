// Original code - agariomods.com
// Cut and edit - Sebyakin Andrei

var ourskin = prompt("Введите ник, на который хотите поставить скин: ", "");
ourskin = ourskin.toLowerCase();
var skinurl = prompt("Введите прямую ссылку на скин (например http://i.imgur.com/jjtfCXI.jpg): ", ""); 

try {
    (function() {   
        document.getElementById("overlays").style.display = 'none';
        document.getElementById("connecting").style.display = 'none';
        var ourskins = "0chan;18-25;1up;360nati0n;8ball;UmguwJ0;aa9skillz;ace;adamzonetopmarks;advertisingmz;agar youtube;agariomods.com;al sahim;alaska;albania;alchestbreach;alexelcapo;algeria;am3nlc;amoodiesqueezie;amway921wot;amyleethirty3;anarchy;android;angrybirdsnest;angryjoeshow;animebromii;anonymous;antvenom;aperture;apple;arcadego;assassinscreed;atari;athenewins;authenticgames;avatar;aviatorgaming;awesome;awwmuffin;aypierre;baka;balenaproductions;bandaid;bane;baseball;bashurverse;basketball;bateson87;batman;battlefield;bdoubleo100;beats;bebopvox;belarus;belgium;bender;benderchat;bereghostgames;bert;bestcodcomedy;bielarus;bitcoin;bjacau1;bjacau2;black widow;blackiegonth;blitzwinger;blobfish;bluexephos;bluh;blunty3000;bobross;bobsaget;bodil30;bodil40;bohemianeagle;boo;boogie2988;borg;bowserbikejustdance;bp;breakfast;breizh;brksedu;buckballs;burgundy;butters;buzzbean11;bystaxx;byzantium;calfreezy;callofduty;captainsparklez;casaldenerd;catalonia;catalunya;catman;cavemanfilms;celopand;chaboyyhd;chaika;chaosxsilencer;chaoticmonki;charlie615119;charmander;chechenya;checkpointplus;cheese;chickfila;chimneyswift11;chocolate;chrisandthemike;chrisarchieprods;chrome;chucknorris;chuggaaconroy;cicciogamer89;cinnamontoastken;cirno;cj;ckaikd0021;clanlec;clashofclansstrats;cling on;cobanermani456;coca cola;codqg;coisadenerd;cokacola;colombia;colombiaa;commanderkrieger;communitygame;concrafter;consolesejogosbrasil;controless ;converse;cookie;coolifegame;coookie;cornella;cornella;coruja;craftbattleduty;creeper;creepydoll;criken2;criousgamers;crispyconcords;cristian4games;csfb;cuba;cubex55;cyberman65;cypriengaming;cyprus;czech;czechia;czechrepublic;d7297ut;d7oomy999;dagelijkshaadee;daithidenogla;darduinmymenlon;darksideofmoon;darksydephil;darkzerotv;dashiegames;day9tv;deadloxmc;deadpool;deal with it;deathly hallows;deathstar;debitorlp;deigamer;demon;derp;desu;dhole;diabl0x9;dickbutt;dilleron;dilleronplay;direwolf20;dissidiuswastaken;dnb;dnermc;doge;doggie;dolan;domo;domokun;donald;dong;donut;doraemon;dotacinema;douglby;dpjsc08;dreamcast;drift0r;drunken;dspgaming;dusdavidgames;dykgaming;ea;easports;easportsfootball;eatmydiction1;eavision;ebin;eeoneguy;egg;egoraptor;eguri89games;egypt;eksi;electrokitty;electronicartsde;elementanimation;elezwarface;eligorko;elrubiusomg;enzoknol;eowjdfudshrghk;epicface;ethoslab;exetrizegamer;expand;eye;facebook;fantabobgames;fast forward;fastforward;favijtv;fazeclan;fbi;fer0m0nas;fernanfloo;fgteev;fidel;fiji;finn;fir4sgamer;firefox;fishies;flash;florida;fnatic;fnaticc;foe;folagor03;forcesc2strategy;forocoches;frankieonpcin1080p;freeman;freemason;friesland;frigiel;frogout;fuckfacebook;fullhdvideos4me;funkyblackcat;gaben;gabenn;gagatunfeed;gamebombru;gamefails;gamegrumps;gamehelper;gameloft;gamenewsofficial;gameplayrj;gamerspawn;games;gameshqmedia;gamespot;gamestarde;gametrailers;gametube;gamexplain;garenavietnam;garfield;gassymexican;gaston;geilkind;generikb;germanletsfail;getinmybelly;getinthebox;ghostrobo;giancarloparimango11;gimper;gimperr;github;giygas;gizzy14gazza;gnomechild;gocalibergaming;godsoncoc;gogomantv;gokoutv;goldglovetv;gommehd;gona89;gonzo;gonzossm;grammar nazi;grayhat;grima;gronkh;grumpy;gtamissions;gtaseriesvideos;guccinoheya;guilhermegamer;guilhermeoss;gurren lagann;h2odelirious;haatfilms;hagrid;halflife;halflife3;halo;handicapped;hap;hassanalhajry;hatty;hawaii;hawkeye;hdluh;hdstarcraft;heartrockerchannel;hebrew;heisenburg;helix;helldogmadness;hikakingames;hikeplays;hipsterwhale;hispachan;hitler;homestuck;honeycomb;hosokawa;hue;huskymudkipz;huskystarcraft;hydro;iballisticsquid;iceland;ie;igameplay1337;ignentertainment;ihascupquake;illuminati;illuminatiii;ilvostrocarodexter;imaqtpie;imgur;immortalhdfilms;imperial japan;imperialists;imperialjapan;imvuinc;insanegaz;insidegaming;insidersnetwork;instagram;instalok;inthelittlewood;ipodmail;iron man;isaac;isamuxpompa;isis;isreal;itchyfeetleech;itsjerryandharry;itsonbtv;iulitm;ivysaur;izuniy;jackfrags;jacksepticeye;jahovaswitniss;jahrein;jaidefinichon;james bond;jamesnintendonerd;jamonymow;java;jellyyt;jeromeasf;jew;jewnose;jibanyan;jimmies;jjayjoker;joeygraceffagames;johnsju;jontronshow;josemicod5;joueurdugrenier;juegagerman;jumpinthepack;jupiter;kalmar union;kame;kappa;karamba728;kenny;keralis;kiloomobile;kingdomoffrance;kingjoffrey;kinnpatuhikaru;kirby;kitty;kjragaming;klingon;knekrogamer;knights templar;knightstemplar;knowyourmeme;kootra;kripparrian;ksiolajidebt;ksiolajidebthd;kuplinovplay;kurdistan;kwebbelkop;kyle;kyokushin4;kyrsp33dy;ladle;laggerfeed;lazuritnyignom;ldshadowlady;le snake;lenny;letsplay;letsplayshik;letstaddl;level5ch;levelcapgaming;lgbt;liberland;libertyy;liechtenstien;lifesimmer;linux;lisbug;littlelizardgaming;llessur;loadingreadyrun;loki;lolchampseries;lonniedos;love;lpmitkev;luigi;luke4316;m3rkmus1c;macedonia;machinimarealm;machinimarespawn;magdalenamariamonika;mahalovideogames;malena010102;malta;mario;mario11168;markiplier;markipliergame;mars;maryland;masterball;mastercheif;mateiformiga;matroix;matthdgamer;matthewpatrick13;mattshea;maxmoefoegames;mcdonalds;meatboy;meatwad;meatwagon22;megamilk;messyourself;mickey;mike tyson;mike;miles923;minecraftblow;minecraftfinest;minecraftuniverse;miniladdd;miniminter;minnesotaburns;minnie;mkiceandfire;mlg;mm7games;mmohut;mmoxreview;mod3rnst3pny;moldova;morealia;mortalkombat;mr burns;mr.bean;mr.popo;mrchesterccj;mrdalekjd;mredxwx;mrlev12;mrlololoshka;mrvertez;mrwoofless;multirawen;munchingorange;n64;naga;namcobandaigameseu;nasa;natusvinceretv;nauru;nazi;nbgi;needforspeed;nepenthez;nextgentactics;nextgenwalkthroughs;ngtzombies;nick fury;nick;nickelodeon;niichts;nintendo;nintendocaprisun;nintendowiimovies;nipple;nislt;nobodyepic;node;noobfromua;northbrabant;northernlion;norunine;nosmoking;notch;nsa;obama;obey;officialclashofclans;officialnerdcubed;oficialmundocanibal;olafvids;omfgcata;onlyvgvids;opticnade;osu;ouch;outsidexbox;p3rvduxa;packattack04082;palau;paluten;pandaexpress;paulsoaresjr;pauseunpause;pazudoraya;pdkfilms;peanutbuttergamer;pedo;pedobear;peinto1008;peka;penguin;penguinz0;pepe;pepsi;perpetuumworld;pewdiepie;pi;pietsmittie;pig;piggy;pika;pimpnite;pinkfloyd;pinkstylist;pirate;piratebay;pizza;pizzaa;plagasrz;plantsvszombies;playclashofclans;playcomedyclub;playscopetrailers;playstation;playstation3gaminghd;pockysweets;poketlwewt;pooh;poop;popularmmos;potato;prestonplayz;protatomonster;prowrestlingshibatar;pt;pur3pamaj;quantum leap;question;rageface;rajmangaminghd;retard smile;rewind;rewinside;rezendeevil;reziplaygamesagain;rfm767;riffer333;robbaz;rockalone2k;rockbandprincess1;rockstar;rockstargames;rojov13;rolfharris;roomba;roosterteeth;roviomobile;rspproductionz;rss;rusgametactics;ryukyu;s.h.e.i.l.d;sah4rshow;samoa;sara12031986;sarazarlp;satan;saudi arabia;scream;screwattack;seal;seananners;serbia;serbiangamesbl;sethbling;sharingan;shell;shine;shofu;shrek;shufflelp;shurikworld;shuuya007;sinistar;siphano13;sir;skillgaming;skinspotlights;skkf;skull;skydoesminecraft;skylandersgame;skype;skyrim;slack;slovakia;slovenia;slowpoke;smash;smikesmike05;smoothmcgroove;smoove7182954;smoshgames;snafu;snapchat;snoop dogg;soccer;soliare;solomid;somalia;sp4zie;space ace;space;sparklesproduction;sparkofphoenix;spawn;speedyw03;speirstheamazinghd;spiderman;spongegar;spore;spqr;spy;squareenix;squirtle;ssohpkc;sssniperwolf;ssundee;stalinjr;stampylonghead;star wars rebel;starbucks;starchild;starrynight;staxxcraft;stitch;stupid;summit1g;sunface;superevgexa;superman;superskarmory;swiftor;swimmingbird941;syria;t3ddygames;tackle4826;taco;taltigolt;tasselfoot;tazercraft;tbnrfrags;tctngaming;teamfortress;teamgarrymoviethai;teammojang;terrorgamesbionic;tetraninja;tgn;the8bittheater;thealvaro845;theatlanticcraft;thebajancanadian;thebraindit;thecraftanos;thedanirep;thedeluxe4;thediamondminecart;theescapistmagazine;thefantasio974;thegaminglemon;thegrefg;thejoves;thejwittz;themasterov;themaxmurai;themediacows;themrsark;thepolishpenguinpl;theradbrad;therelaxingend;therpgminx;therunawayguys;thesims;theskylanderboy;thesw1tcher;thesyndicateproject;theuselessmouth;thewillyrex;thnxcya;thor;tintin;tmartn;tmartn2;tobygames;tomo0723sw;tonga;topbestappsforkids;totalhalibut;touchgameplay;transformer;transformers;trickshotting;triforce;trollarchoffice;trollface;trumpsc;tubbymcfatfuck;turkey;tv;tvddotty;tvongamenet;twitch;twitter;twosyncfifa;typicalgamer;uberdanger;uberhaxornova;ubisoft;uguu;ukip;ungespielt;uppercase;uruguay;utorrent;vanossgaming;vatican;venomextreme;venturiantale;videogamedunkey;videogames;vietnam;vikkstar123;vikkstar123hd;vintagebeef;virus;vladnext3;voat;voyager;vsauce3;w1ldc4t43;wakawaka;wales;walrus;wazowski;wewlad;white  light;whiteboy7thst;whoyourenemy;wiiriketopray;willyrex;windows;wingsofredemption;wit my woes;woodysgamertag;worldgamingshows;worldoftanks;worldofwarcraft;wowcrendor;wqlfy;wroetoshaw;wwf;wykop;xalexby11;xbox;xboxviewtv;xbulletgtx;xcalizorz;xcvii007r1;xjawz;xmandzio;xpertthief;xrpmx13;xsk;yamimash;yarikpawgames;ycm;yfrosta;yinyang;ylilauta;ylilautaa;yoba;yobaa;yobaaa;yogscast2;yogscastlalna;yogscastsips;yogscastsjin;yoteslaya;youalwayswin;yourheroes;yourmom;youtube;zackscottgames;zangado;zazinombies;zeecrazyatheist;zeon;zerkaahd;zerkaaplays;zexyzek;zimbabwe;zng;zoella;zoidberg;zombey;zoomingames";
        var skinblacklist = "boob,kuntt,tentacle porn,cake,boobs,naked,girl,*,porn,0*,pussy,censorship,tits,tits*,chotalarga,****";
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
            offset = gamejs.search("=this.name.toLowerCase()");
            b = gamejs.substr(offset - 1, 1);
			console.log('b = ' + b);
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
            oc.parentNode.replaceChild(nc, oc);
            document.head.appendChild(script);
            agariomodsRuntimeHacks();
        }

        function agariomodsRuntimePatches() {
            gamejs_patch(/\((\w+\?)/, '(OnDeath(),$1', 'add ondeath hook');
            gamejs = gamejs.split("#region").join(".region");
            gamejs_patch(';reddit;', ';reddit;' + ourskin + ';', "add our skin to the original game skinlist.");
            gamejs_patch(b+'=this.name.toLowerCase();', b+'=this.name.toLowerCase();var agariomods = "";if ('+b+' == "'+ourskin+'") {agariomods="'+skinurl+'";} else {agariomods="http://agar.io/skins/" + '+b+' + ".png";}', "our skin goes here");
            gamejs_patch('=1E4,', '=1E4,' + 'zz=!1,yq=!1,xx=!1,xz=!1,ts=!1,custom=!1,opv=!1,pcs=!1,pcsrc=""' + ',', "adding variables");
            gamejs_patch(W + '[' + b + '].src="skins/"+' + b + '+".png"', W + '[' + b + '].src=agariomods', "check for agariomods img src variable");
			gamejs_patch(".googletag.pubads&&", ".googletag.pubads&&window.googletag.pubads.clear&&", "Fix for users with Ghostery");
            gamejs = addSkinHook(gamejs);  
			gamejs = addConnectHook(gamejs);
            console.log("Testing complete, " + passed + " units passed and " + failed + " units failed.");
            if (failed) {
                if (window.debug) console.log(new Error("UNIT FAILED"));
                else window.onmoderror()
            };
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

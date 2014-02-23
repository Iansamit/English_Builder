var allCats = new Array("actions", "animals", "clothes", "describing", "food", "free time", "occupations", "places and transport", "body", "school", "time");

var audArray = new Array("");
var audDLRemaining;
var audObj;
var audReady = new Array(false);
var availCats = new Array("");
var cmnErrs = new Array(["", 0], ["", 0], ["", 0]);
var countTime = 180;
var currentCat = "actions";
var currentLev = "P1";
var currentPhonUnit="1";
var currentTitle = "Actions";
var fbImInd = 0;
var fbMode = "common";
var finalC="all";
var finAudio;
var finished;
var iIndex;
var imChHeight = "270px";
var imChWidth = "452px";
var imgArray = new Array(new Image());
var initC="all";
var inds;
var penalty = false;
var penaltyTCol;
var penaltyTic;
var penaltyTime;
var pImgInd;
var points = 0;
var recErrIm = new Array("", "", "");
var recErrTx = new Array("", "", "");
var stopCount = false;
var stopDL = false;
var tickFast;
var tickTock="tick";
var uMode = "r_1word4pic";
var vocArray = new Array("close", "come", "cook", "count", "cry", "cut", "dig", "drink", "eat", "go", "jump", "open", "play", "read", "run", "sing", "sit", "sleep", "speak", "stand", "walk", "write");
var vowel="all";

var vIndex;
var vSpecIndex;
var fIndex;
var eCompIndex;
var iArray=new Array("m","s","p","t","");
var vArray=new Array("a","i","o");
var fArray=new Array("m","s","p","t","");
var vSpecArray=new Array("e","i");
var eCompArray=new Array ("e","");
var syll;
var tabSylls = new Array ("fuck", "pis", "cock", "tit");



if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
      if ( this === undefined || this === null ) {
        throw new TypeError( '"this" is null or not defined' );
  }

  var length = this.length >>> 0; // Hack to convert object.length to a UInt32

      fromIndex = +fromIndex || 0;

      if (Math.abs(fromIndex) === Infinity) {
        fromIndex = 0;
      }

      if (fromIndex < 0) {
        fromIndex += length;
        if (fromIndex < 0) {
          fromIndex = 0;
        }
      }

      for (;fromIndex < length; fromIndex++) {
        if (this[fromIndex] === searchElement) {
          return fromIndex;
        }
      }

      return -1;
    };
  }

function init() {
	initAudio();
	resize();
	selectLev("P1");

	var plImg1 = new Image();
	plImg1.src = "images/vocab/titles/actions.jpg";
	var plImg2 = new Image();
	plImg2.src = "images/vocab/titles/animals.jpg";
	var plImg3 = new Image();
	plImg3.src = "images/vocab/titles/body.jpg";
	var plImg4 = new Image();
	plImg4.src = "images/vocab/titles/describing.jpg";
	var plImg5 = new Image();
	plImg5.src = "images/vocab/titles/food.jpg";
	var plImg6 = new Image();
	plImg6.src = "images/vocab/titles/free time.jpg";
	var plImg7 = new Image();
	plImg7.src = "images/vocab/titles/occupations.jpg";
	var plImg8 = new Image();
	plImg8.src = "images/vocab/titles/places and transport.jpg";
	var plImg9 = new Image();
	plImg9.src = "images/vocab/titles/school.jpg";
	var plImg10 = new Image();
	plImg10.src = "images/vocab/titles/time.jpg";
	var plImg11 = new Image();
	plImg11.src = "images/vocab/titles/clothes.jpg";
}


function resize() {
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	var bodFontsize = Math.floor((w / 1600) * 60);
	document.body.style.cssText = "background: none repeat scroll 0% 0% rgb(69, 62, 42); font: " + bodFontsize + "px 'Nunito',sans-serif;";

	var x = Math.floor(w * 0.28 * 597 / 1000) + "px";
	document.getElementById("fbTxt1").style.height = x;
	document.getElementById("fbTxt2").style.height = x;
	document.getElementById("fbTxt3").style.height = x;
	document.getElementById("fbTxt4").style.height = x;

	var y = Math.floor((w / 1600) * 30) + "px";
	document.getElementById("dLProgBar").style.height = y;
	document.getElementById("dLProgBar_end").style.height = y;
	document.getElementById("dLProgBarAud").style.height = y;
	document.getElementById("dLProgBarAud_end").style.height = y;

	var z = Math.floor((w / 1600) * 35) + "px";
	document.getElementById("spacer").style.height = z;

	var mainDH = Math.floor((w / 1600) * 610) + "px";
	document.getElementById("imageDiv").style.height = mainDH;
	document.getElementById("phonDisplay").style.height = mainDH;

}

function initAudio() {
	if (window.Audio) {
		finAudio = new Audio("audio/klaxon_short.mp3");
		var mp3Check = finAudio.canPlayType("audio/mp3");
		if (mp3Check != "") {
			tickFast = new Audio("audio/clock_ticking_fast.mp3");
			tickFast.loop = true;
			tick = new Audio("audio/tick_slow.mp3");
			tock = new Audio("audio/tock_slow.mp3");
			aclick = new Audio("audio/click.mp3");
			aswitch = new Audio("audio/switch.mp3");
		} else {
			finAudio = new Audio("audio/klaxon_short.ogg");
			tickFast = new Audio("audio/clock_ticking_fast.ogg");
			tickFast.loop = true;
			aclick = new Audio("audio/click.ogg");
			aswitch = new Audio("audio/switch.ogg");
		}
	} else {
		finAudio = 0;
		tickFast = 1;
	}
}

function audCtrls(aud, cont) {
	if (window.Audio) {

		if (cont == "play") {
			aud.play();

		} else if (cont == "pause") {
			aud.pause();
		} else if (cont == "rewind") {
			aud.currentTime = 0;
		}
	} else {
		var audInd;
		if (cont == "play") {
			window.document.embeds[aud].Play();
		} else if (cont == "pause") {
			window.document.embeds[aud].Stop();
		} else if (cont == "rewind") {
			//window.document.embeds[aud].Rewind()
		}
	}
}

function chFeature() {
	isSupp = finAudio.canPlayType("audio/ogg");
	if (isSupp == "") {
		isSupp = "No";
	}
	alert(isSupp);
}

function optionsDiv(disp) {
	resetScore();
	document.getElementById("optDiv").style.display = disp;
	document.getElementById("contentSelect").style.display = "none";
}

function categoryDiv(disp) {
	resetScore();
	document.getElementById("contentSelect").style.display = disp;
	document.getElementById("optDiv").style.display = "none";
}

function newCount() {
	finished = false;
	stopCount = false;
	countDown();
	function countDown() {
		if (stopCount == false) {
			if (penalty && countTime > 1) {
				countTime = countTime - 2;
			} else {
				countTime--;
			}
			var remMin = Math.floor(countTime / 60);
			var remSec = countTime % 60;

			//add a zero in front of numbers<10
			remMin = leadZero(remMin);
			remSec = leadZero(remSec);
			document.getElementById('timer').innerHTML = "&nbsp;" + remMin + ":" + remSec + "&nbsp;";
			if (countTime > 0) {
				if (tickTock=="tick") {
					audCtrls(tick, "play");
					tickTock="tock";
				}
				else if (tickTock=="tock") {
					audCtrls(tock, "play");
					tickTock="tick";
				}
				setTimeout(function() {countDown();}, 1000);
			} else {
				audCtrls(tickFast, "pause");
				audCtrls(finAudio, "play");
				finished = "nearly";
				setTimeout(function() {
					document.getElementById("yes-no").style.display = "none";
					document.getElementById("finishedButton").style.display = "block";
					document.getElementById("b_replay").style.display = "none";
					finished = true;
				}, 5000);
			}
		}
	}

}

function leadZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function setCountDown() {
	countTime = parseInt(cDSelect.value);
	var initMin = Math.floor(countTime / 60);
	;
	initMin = leadZero(initMin);
	document.getElementById('timer').innerHTML = "&nbsp;" + initMin + ":00" + "&nbsp;";
}

function resetScore() {

	points = 0;
	stopCount = true;
	finished = true;
	setTimeout(function() {
	}, 100);
	audCtrls(tickFast, "pause");
	setTimeout(function() {
		audCtrls(tickFast, "rewind");
	}, 100);
	setCountDown();

	document.getElementById("timer").style.color = "#fff";
	document.getElementById("score").innerHTML = "&nbsp;Score: " + points + "&nbsp;";
	document.getElementById("finishedButton").style.display = "none";
	document.getElementById("b_replay").style.display = "none";
	document.getElementById("imChoiceDev").style.display = "none";
	document.getElementById("b_start").style.display = "block";

	document.getElementById("yes-no").style.display = "none";
	document.getElementById("mainImage").src = "images/vocab/titles/" + currentCat + ".jpg";
	document.getElementById("phonDisplay").style.fontSize="300%";
	document.getElementById("phonDisplay").innerHTML = "</br>Phonics Unit <img src='images/labels/U"+currentPhonUnit+".png' />";
	document.getElementById("ch1").innerHTML = "";
	document.getElementById("ch2").innerHTML = "";
	document.getElementById("ch3").innerHTML = "";
	document.getElementById("ch4").innerHTML = "";
}

function b_press(b, dir, origw) {
	if (dir == "down") {
		var w = parseFloat(origw) * 0.96;
		document.getElementById(b).style.width = w + "%";
		if (b != "b_replay") {
			audCtrls(aclick, "play");
		}
	} else {
		document.getElementById(b).style.width = origw;
	}
}


function selectMode(mode) {
	if (mode != uMode) {
		var prevMode = uMode;

		document.getElementById("b_" + mode).style.width = "94%";
		document.getElementById("b_" + mode).style.border = "outset #aa8b3f";
		document.getElementById("b_" + prevMode).style.width = "100%";
		document.getElementById("b_" + prevMode).style.border = "none";
		uMode = mode;
		audCtrls(aclick, "play");

		if (mode!="r_phonics"){
		  	document.getElementById("imageDiv").style.display="block";
  			document.getElementById("phonDisplay").style.display="none";
  			document.getElementById("errDiv").style.display="block";
  			document.getElementById("levels").style.display="table-row";
  			document.getElementById("vocSelect").style.display="table-row";
  			document.getElementById("phonUSelect").style.display="none";
  		}

		if (mode == "r_1pic4word") {
			document.getElementById("choiceDev").style.display = "block";
		}
		else if (mode == "r_1word4pic") {
			document.getElementById("choiceDev").style.display = "none";
			document.getElementById("vocdisplay").style.display = "block";
		}
		else if (mode == "sp_teacher") {
			document.getElementById("choiceDev").style.display = "none";
		}
		else if (mode == "l_4pic") {
			document.getElementById("choiceDev").style.display = "none";
			document.getElementById("vocdisplay").style.display = "none";
		}
		else if (mode=="r_phonics"){
		  	document.getElementById("imageDiv").style.display="none";
		  	document.getElementById("choiceDev").style.display = "none";
  			document.getElementById("phonDisplay").style.display="block";
  			document.getElementById("errDiv").style.display="none";
  			document.getElementById("levels").style.display="none";
  			document.getElementById("vocSelect").style.display="none";
  			document.getElementById("phonUSelect").style.display="table-row";
		}
	}
}

function selectPhonUnit(unit) {
		if (unit != currentPhonUnit) {
		var prevUnit = currentPhonUnit;

			document.getElementById("b_phon_u" + unit).style.width = "94%";
			document.getElementById("b_phon_u" + unit).style.border = "outset #aa8b3f";
			document.getElementById("b_phon_u" + prevUnit).style.width = "100%";
			document.getElementById("b_phon_u" + prevUnit).style.border = "none";


		if (parseInt(unit) < 8) {
			currentPhonUnit=unit;
			document.getElementById("phonDisplay").style.fontSize = "300%";
			document.getElementById("phonDisplay").innerHTML = "</br>Phonics Unit <img src='images/labels/U"+unit+".png' />";
			setPhonicsArrays();
			resetScore();
		}
		else {
			document.getElementById("u"+currentPhonUnit).checked=true;
			document.getElementById("phonDisplay").innerHTML = "&nbsp;<span style='font-size:40px'>Sorry, this unit is not ready yet. </ span>&nbsp;";
		}
	}
}

function iSet (setting) {
	initC=setting;
}

function vSet (setting) {
	vowel=setting;
}

function fSet (setting) {
	finalC=setting;
}


function selectLev(level) {
	currentLev = level;
	setVocArrays();
	setTitle();
	resetScore();
	audCtrls(aswitch, "play");
	preloadAudio();
	preLoadImages();
	monPreload();

	for (var i = 0, len = allCats.length; i < len; i++) {
		if (availCats.indexOf(allCats[i]) == -1) {
			document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + "_g.jpg";
		} else {
			document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + ".jpg";
		}
	}
	if (availCats.indexOf(currentCat) == -1) {
		selectCat(availCats[0]);
	}
}

function selectCat(category) {

	if ((availCats.indexOf(category) != -1) && category != currentCat) {
		var prevCat = currentCat;
		document.getElementById("b_" + category).style.width = "94%";
		document.getElementById("b_" + category).style.border = "outset #f62";
		document.getElementById("b_" + prevCat).style.width = "100%";
		document.getElementById("b_" + prevCat).style.border = "none";
		currentCat = category;
		setVocArrays();
		setTitle();
		resetScore();
		audCtrls(aclick, "play");
		preloadAudio();
		preLoadImages();
		monPreload();
	}
}

function setTitle() {
	switch (currentCat) {
		case "actions":
			currentTitle = "Actions";
			break;
		case "animals":
			currentTitle = "Animals";
			break;
		case "body":
			currentTitle = "Parts of the Body";
			break;
		case "clothes":
			currentTitle = "Clothes";
			break;
		case "describing":
			currentTitle = "Describing";
			break;
		case "food":
			currentTitle = "Food and Drinks";
			break;
		case "free time":
			currentTitle = "Free Time";
			break;
		case "occupations":
			currentTitle = "Occupations";
			break;
		case "places and transport":
			currentTitle = "Places and Transport";
			break;
		case "school":
			currentTitle = "School";
			break;
		case "time":
			currentTitle = "Time";
			break;
	}
}

function selectFB(mode) {
	fbMode = mode;
	if (mode == "recent") {
		document.getElementById("errTitle").innerHTML = "Recent Errors";
	} else {
		document.getElementById("errTitle").innerHTML = "Common Errors";
	}
}

function setVocArrays() {
	if (currentLev == "A2") {
		availCats = new Array("actions", "animals", "clothes", "describing", "occupations", "school");
		switch (currentCat) {
			case "actions":
				vocArray = new Array("close", "cook", "count", "cry", "cut", "drink", "eat", "hop", "jump", "listen", "look", "open", "run", "sing", "sit down", "sleep", "stand up", "stop", "swim", "walk");
				break;
			case "animals":
				vocArray = new Array("ant", "bat", "bird", "cat", "cow", "dog", "duck", "elephant", "fish", "horse", "lion", "monkey", "pig", "rabbit", "snake", "tiger", "zebra");
				break;
			case "clothes":
				vocArray = new Array("belt", "cap", "dress", "glasses", "gloves", "hat", "jeans", "ring", "shirt", "shoes", "shorts", "skirt", "socks", "t-shirt");
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "new car", "new house", "old car", "old house", "old man", "old woman", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "young man", "young woman");
				break;
			case "occupations":
				vocArray = new Array("barber", "butcher", "cook", "dentist", "doctor", "farmer", "fisherman", "monk", "nurse", "policeman", "student", "teacher");
				break;
			case "school":
				vocArray = new Array("bag", "bin", "book", "chair", "door", "eraser", "fan", "pen", "pencil", "ruler", "table", "window");
				break;
		}
	} else if (currentLev == "P1") {
		availCats = new Array("actions", "animals", "clothes", "food", "occupations", "body", "school", "time");

		switch (currentCat) {
			case "actions":
				vocArray = new Array("close", "come", "cook", "count", "cry", "cut", "dig", "drink", "eat", "go", "jump", "open", "play", "read", "run", "sing", "sit", "sleep", "speak", "stand", "walk", "write");
				break;
			case "animals":
				vocArray = new Array("ant", "bird", "cat", "cow", "dog", "duck", "fish", "horse", "lion", "pig", "snake", "tiger");
				break;
			case "body":
				vocArray = new Array("arm", "arms", "ears", "eyes", "face", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "knee", "leg", "legs", "mouth", "neck", "nose", "shoulder", "shoulders", "toe", "toes");
				break;
			case "clothes":
				vocArray = new Array("cap", "dress", "glasses", "hat", "jeans", "shirt", "shorts", "shoes", "skirt", "socks");
				break;
			case "food":
				vocArray = new Array("apple", "banana", "cake", "candy", "durian", "egg", "mangoes", "milk", "orange", "papayas", "rice", "tea");
				break;
			case "occupations":
				vocArray = new Array("dentist", "doctor", "farmer", "fisherman", "nurse", "policeman", "postman", "singer", "student", "teacher");
				break;
			case "school":
				vocArray = new Array("bag", "bin", "blackboard", "book", "box", "broom", "chair", "chalk", "clock", "desk", "door", "fan", "flower", "map", "mat", "pen", "pencil", "rubber", "ruler", "school");
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				break;
		}
	} else if (currentLev == "P4") {
		availCats = new Array("actions", "animals", "clothes", "describing", "food", "free time", "occupations", "places and transport", "body", "school", "time");

		switch (currentCat) {
			case "actions":
				vocArray = new Array("close", "come", "cook", "count", "cut", "drink", "drive", "eat", "go", "jump", "like", "listen", "look", "open", "play", "read", "ride", "run", "say", "sing", "sit down", "sleep", "smile", "stand up", "stop", "swim", "walk", "write");
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "buffalo", "cat", "chicken", "cow", "crab", "deer", "dog", "duck", "elephant", "fish", "fly", "frog", "goat", "hen", "horse", "kangaroo", "lion", "monkey", "mouse", "panda", "pig", "rabbit", "rat", "shark", "sheep", "snake", "tiger", "whale", "zebra");
				break;
			case "clothes":
				vocArray = new Array("belt", "blouse", "cap", "dress", "earrings", "glasses", "handbag", "hat", "jacket", "jeans", "pyjamas", "ring", "shirt", "shoes", "shorts", "skirt", "socks", "sweater", "bathing suit", "t-shirt", "watch");
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "body", "ear", "ears", "eye", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "knee", "leg", "legs", "mouth", "neck", "nose", "shoulder", "shoulders", "teeth", "toe", "toes", "tooth");
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "black bag", "black shirt", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "narrow road", "new car", "new house", "old car", "old house", "old man", "old woman", "pink bag", "pink shirt", "pretty girl", "red bag", "red shirt", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "white shirt", "wide road", "young man", "young woman");
				break;
			case "food":
				vocArray = new Array("apple", "banana", "cake", "candy", "carrots", "durian", "egg", "jam", "mangoes", "milk", "noodles", "orange", "papayas", "pineapple", "rambutans", "rice", "soup", "tea", "watermelon");
				break;
			case "free time":
				vocArray = new Array("collect stamps", "cook", "dance", "go camping", "go fishing", "go horse riding", "go shopping", "listen to music", "paint", "play computer games", "play football", "play games", "read comic books", "read", "ride a bike", "sing", "watch TV");
				break;
			case "occupations":
				vocArray = new Array("barber", "butcher", "cook", "dentist", "doctor", "dressmaker", "farmer", "fisherman", "hairdresser", "merchants", "monk", "nurse", "policeman", "postman", "student", "taxi driver", "chef", "teacher");
				break;
			case "places and transport":
				vocArray = new Array("Bandar Seri Begawan", "Bangkok", "beach", "behind", "between", "bicycle", "boat", "Brunei", "bus", "Cambodia", "car", "coffee shop", "factory", "farm", "Hanoi", "helicopter", "hill", "hospital", "in", "in front of", "Indonesia", "Jakarta", "Kuala Lumpur", "Laos", "Malaysia", "Manila", "market", "motorbike", "motorbike taxi", "Myanmar", "Naypyidaw", "near", "next to", "on", "on foot", "on the left of", "on the right of", "Philippines", "Phnom Penh", "plane", "police station", "post office", "railway station", "restaurant", "rice paddy", "school", "sea", "ship", "shop", "Singapore", "studio", "supermarket", "swimming pool", "taxi", "temple", "Thailand", "that", "this", "train", "truck", "tuk-tuk", "under", "van", "Vientiene", "Vietnam", "zoo");
				break;
			case "school":
				vocArray = new Array("backpack", "bin", "book", "broom", "chair", "clock", "classroom", "desk", "eraser", "pen", "pencil", "scissors", "table");
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				break;
		}
	} else if (currentLev == "all") {
		availCats = new Array("actions", "animals", "clothes", "describing", "food", "free time", "occupations", "places and transport", "body", "school", "time");
		switch (currentCat) {
			case "actions":
				vocArray = new Array("close", "fly", "play", "cook", "drink", "listen", "sleep", "hop", "look", "read", "cry", "eat", "jump", "open");
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "buffalo", "butterfly", "calf", "cat", "cheetah", "chicken", "chick", "cow", "crab", "crocodile", "deer", "dog", "dolphin", "duck", "duckling", "elephant", "fish", "fly", "fox", "frog", "gecko", "geese", "giraffe", "goat", "goose", "grasshopper", "hen", "hippopotamus", "horse", "jellyfish", "kangaroo", "kitten", "lamb", "lion", "meow", "monkey", "moo", "mosquito", "mouse", "neigh", "octopus", "oink", "panda", "parrot", "peacock", "pig", "piglet", "quack", "rabbit", "rat", "rhinoceros", "seal", "shark", "sheep", "snail", "snake", "spider", "squirrel", "starfish", "tiger", "turtle", "whale", "woof", "zebra");
				break;
			case "body":
				vocArray = new Array("arm", "fingers", "head", "legs", "nose", "toe", "arms", "eyes", "foot", "mouth", "shoulder", "toes", "face", "hair", "shoulders", "ears", "hand", "knee", "finger", "hands", "leg", "neck");
				break;
			case "clothes":
				vocArray = new Array("bathing suit", "belt", "blouse", "cap", "checked", "dress", "earrings", "flowered", "glasses", "gloves", "handbag", "hat", "jacket", "jeans", "necklace", "nightdress", "plain", "pyjamas", "raincoat", "ring", "rings", "scarf", "shirt", "shoe", "shoes", "shorts", "skirt", "socks", "spotted", "striped", "sweater", "t-shirt", "tie", "trainers", "trousers", "underwear", "wallet", "watch", "wig", "zip");
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "black bag", "black shirt", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "narrow road", "new car", "new house", "old car", "old house", "old man", "old woman", "pink bag", "pink shirt", "pretty girl", "red bag", "red shirt", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "white shirt", "wide road", "young man", "young woman");
				break;
			case "food":
				vocArray = new Array("apple", "banana", "cake", "candy", "durian", "egg", "mangoes", "milk", "orange", "papayas", "rice", "tea");
				break;
			case "free time":
				vocArray = new Array("collect stamps", "cook", "dance", "do gardening", "do gymnastics", "do jisaw puzzles", "draw", "fly a kite", "go camping", "go climbing", "go fishing", "go for a picnic", "go horse riding", "go jogging", "go shopping", "go skating", "go swimming", "judo", "karate", "listen to music", "listen to the radio", "paint", "play badminton", "play basketball", "play cards", "play chess", "play computer games", "play darts", "play football", "play games", "play ping-pong", "play the guitar", "play volleyball", "read comic books", "read", "ride a bike", "sing", "watch TV");
				break;
			case "places and transport":
				vocArray = new Array("Bandar Seri Begawan", "Bangkok", "beach", "behind", "between", "bicycle", "boat", "Brunei", "bus", "Cambodia", "car", "coffee shop", "factory", "farm", "Hanoi", "helicopter", "hill", "hospital", "in", "in front of", "Indonesia", "Jakarta", "Kuala Lumpur", "Laos", "Malaysia", "Manila", "market", "motorbike", "motorbike taxi", "Myanmar", "Naypyidaw", "near", "next to", "on", "on foot", "on the left of", "on the right of", "Philippines", "Phnom Penh", "plane", "police station", "post office", "railway station", "restaurant", "rice paddy", "school", "sea", "ship", "shop", "Singapore", "studio", "supermarket", "swimming pool", "taxi", "temple", "Thailand", "that", "this", "train", "truck", "tuk-tuk", "under", "van", "Vientiene", "Vietnam", "zoo");
				break;
			case "school":
				vocArray = new Array("art", "backpack", "bag", "basket", "bell", "bin", "blackboard", "book", "bookshelf", "bottle", "box", "broom", "calculator", "calendar", "can", "canteen", "chair", "chalk", "classroom", "clock", "coloured pencils", "computer room", "computer", "crayons", "desk", "door", "eraser", "fan", "floor", "flower", "globe", "glue", "homework", "ink", "key", "library", "lock", "lunchbox", "map", "mat", "music", "music room", "notebook", "paper", "PE", "pen", "pencil", "pencil case", "pencil sharpener", "playground", "room", "ruler", "school", "science", "scissors", "social studies", "table", "toilet", "umbrella", "violin", "wall", "waste paper basket", "whiteboard", "window");
				break;
			case "occupations":
				vocArray = new Array("barber", "boxer", "bus driver", "carpenter", "dancer", "dentist", "fisherman", "fruit seller", "gardener", "policeman", "postman", "singer", "soldier", "vet");
				break;
			case "time":
				vocArray = new Array("at night", "at noon", "Christmas", "in the afternoon", "in the evening", "in the morning", "Loi Krathong", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				break;
		}
	} else if (currentLev == "scratchpad") {
		availCats = new Array("actions", "animals", "clothes", "describing", "food", "free time", "occupations", "places and transport", "body", "school", "time");
		switch (currentCat) {
			case "actions":
				vocArray = new Array("close", "fly", "play", "cook");
				break;
			case "animals":
				vocArray = new Array("ant", "bird", "cat", "cow", "dog", "duck", "fish", "horse", "pig", "lion", "snake", "tiger");
				break;
			case "body":
				vocArray = new Array("arm", "fingers", "head", "legs", "nose", "toe", "arms", "eyes", "foot", "mouth", "shoulder", "toes", "face", "hair", "shoulders", "ears", "hand", "knee", "finger", "hands", "leg", "neck");
				break;
			case "clothes":
				vocArray = new Array("bathing suit", "belt", "blouse", "cap", "checked", "dress", "earrings", "flowered", "glasses", "gloves", "handbag", "hat", "jacket", "jeans", "necklace", "nightdress", "plain", "pyjamas", "raincoat", "ring", "rings", "scarf", "shirt", "shoe", "shoes", "shorts", "skirt", "socks", "spotted", "striped", "sweater", "t-shirt", "tie", "trainers", "trousers", "underwear", "wallet", "watch", "wig", "zip");
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "black bag", "black shirt", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "narrow road", "new car", "new house", "old car", "old house", "old man", "old woman", "pink bag", "pink shirt", "pretty girl", "red bag", "red shirt", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "white shirt", "wide road", "young man", "young woman");
				break;
			case "food":
				vocArray = new Array("apple", "banana", "cake", "candy", "durian", "egg", "mangoes", "milk", "orange", "papayas", "rice", "tea");
				break;
			case "free time":
				vocArray = new Array("collect stamps", "cook", "dance", "do gardening", "do gymnastics", "do jisaw puzzles", "draw", "fly a kite", "go camping", "go climbing", "go fishing", "go for a picnic", "go horse riding", "go jogging", "go shopping", "go skating", "go swimming", "judo", "karate", "listen to music", "listen to the radio", "paint", "play badminton", "play basketball", "play cards", "play chess", "play computer games", "play darts", "play football", "play games", "play ping-pong", "play the guitar", "play volleyball", "read comic books", "read", "ride a bike", "sing", "watch TV");
				break;
			case "places and transport":
				vocArray = new Array("Bandar Seri Begawan", "Bangkok", "beach", "behind", "between", "bicycle", "boat", "Brunei", "bus", "Cambodia", "car", "coffee shop", "factory", "farm", "Hanoi", "helicopter", "hill", "hospital", "in", "in front of", "Indonesia", "Jakarta", "Kuala Lumpur", "Laos", "Malaysia", "Manila", "market", "motorbike", "motorbike taxi", "Myanmar", "Naypyidaw", "near", "next to", "on", "on foot", "on the left of", "on the right of", "Philippines", "Phnom Penh", "plane", "police station", "post office", "railway station", "restaurant", "rice paddy", "school", "sea", "ship", "shop", "Singapore", "studio", "supermarket", "swimming pool", "taxi", "temple", "Thailand", "that", "this", "train", "truck", "tuk-tuk", "under", "van", "Vientiene", "Vietnam", "zoo");
				break;
			case "school":
				vocArray = new Array("backpack", "bell", "bin", "blackboard", "book", "box", "calculator", "calendar", "chair", "chalk", "classroom", "desk", "door", "eraser", "fan", "notebook", "pen", "pencil case", "pencil", "ruler", "table", "whiteboard");
				break;
			case "occupations":
				vocArray = new Array("barber", "boxer", "bus driver", "carpenter", "dancer", "dentist", "fisherman", "fruit seller", "gardener", "policeman", "postman", "singer", "soldier", "vet");

				break;
			case "time":
				vocArray = new Array("at night", "at noon", "Christmas", "in the afternoon", "in the evening", "in the morning", "Loi Krathong", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				break;
		}
	}
}


function setPhonicsArrays () {
		switch (currentPhonUnit) {
			case "1":
			iArray=["m","s","p","t",""];
			vArray=["a","i","o"];
			fArray=["m","s","p","t",""];
			break;
		case "2":
			iArray=["m","s","p","t","n","f","h",""];
			vArray=["a","i","o","e","u"];
			fArray=["m","s","p","t","n","f",""];
			break;
		case "3":
			iArray=["m","s","p","t","n","f","h","b","d","z",""];
			vArray=["a","e","i","o","u"];
			fArray=["m","s","p","t","n","f","b","d","z",""];
			break;
		case "4":
			iArray=["m","s","p","t","n","f","h","b","d","z","c","k",""];
			vArray=["a","e","i","o","u"];
			fArray=["m","s","p","t","n","f","b","d","z","ck",""];
			vSpecArray["e","i"];
			break;
		case "5":
			iArray=["m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu",""];
			vArray=["a","e","i","o","u"];
			fArray=["m","s","p","t","n","f","b","d","z","ck","g","j",""];
			vSpecArray["e","i"];
			break;
		case "6":
			iArray=["m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu",""];
			vArray=["a","e","i","o","u","ee"];
			fArray=["m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu",""];
			vSpecArray=["e","i","ee"];
			break;
		case "7":
			iArray=["m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu",""];
			vArray=["a","e","i","o","u","ee"];
			fArray=["m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","nc","nk",""];
			vSpecArray=["e","i","ee"];
			//alert (vArray[5]);
			break;

		}

}



function preloadAudio() {
	if (currentCat == "occupations" || currentCat == "animals") {
		audDLRemaining = vocArray.length;
		var audFile;

		for (var i = 0; i < vocArray.length; i++) {
			audFile = "audio/vocab/" + currentCat + "/" + vocArray[i] + ".mp3";
			audArray[i] = new Audio(audFile);
			audReady[i] = false;
			audArray[i].addEventListener('canplaythrough', monPreloadAudio, false);
		}
	} else {
		document.getElementById('dLProgCompAud').colSpan = 2;
		document.getElementById('dLProgRemAud').style.display = "none";
		document.getElementById('dLProgCompAud').style.border = "ridge #f60";
		document.getElementById('dLProgCompAud').style.color = "#f60";
		document.getElementById('dLProgCompAud').innerHTML = "No Audio Available.";
		document.getElementById('dLProgBarAud').style.width = "0%";
		document.getElementById('dLProgBarAud_end').style.display = "none";
	}
}

function monPreloadAudio() {
	audDLRemaining--;
	var audDLComplete = vocArray.length - audDLRemaining;
	y = ((audDLComplete / vocArray.length) * 98.4) + "%";
	document.getElementById('dLProgBarAud').style.width = y;
	document.getElementById('dLProgBarAud_end').style.display = "inline";

	if (audDLRemaining > 0) {
		document.getElementById('dLProgCompAud').colSpan = 1;
		document.getElementById('dLProgRemAud').style.display = "table-cell";
		document.getElementById('dLProgCompAud').style.border = "ridge #393";
		document.getElementById('dLProgCompAud').style.color = "#393";
		document.getElementById('dLProgCompAud').innerHTML = audDLComplete;
		document.getElementById('dLProgRemAud').innerHTML = audDLRemaining;
	} else {
		document.getElementById('dLProgCompAud').colSpan = 2;
		document.getElementById('dLProgRemAud').style.display = "none";
		document.getElementById('dLProgCompAud').innerHTML = "Download Complete!";
	}
}

function cancelDL() {
	stopDL = true;
}

function preLoadImages() {
	for (var i = 0; i < vocArray.length; i++) {
		imgArray[i] = new Image();
		imgArray[i].src = "images/vocab/" + currentCat + "/" + vocArray[i] + ".jpg";
	}
}

function monPreload() {
	document.getElementById('dLProgCat').src = "images/buttons/" + currentCat + ".jpg";
	var dLRemaining = vocArray.length;
	var dLComplete = 0;

	if (stopDL === false) {

		for (var j = 0; j < vocArray.length; j++) {
			if (noErr(imgArray[j])) {
				dLComplete++;
				dLRemaining--;
			}
		}

		x = ((dLComplete / vocArray.length) * 98.4) + "%";
		document.getElementById('dLProgComp').colSpan = 1;
		document.getElementById('dLProgRem').style.display = "table-cell";
		document.getElementById('dLProgComp').innerHTML = dLComplete;
		document.getElementById('dLProgRem').innerHTML = dLRemaining;
		document.getElementById('dLProgBar').style.width = x;
		document.getElementById('dlStatus').innerHTML = "Downloading ...";

		if (dLRemaining > 0) {
			setTimeout(function() {
				monPreload();
			}, 100);
		} else {
			document.getElementById('dLProgComp').colSpan = 2;
			document.getElementById('dLProgRem').style.display = "none";
			document.getElementById('dLProgComp').innerHTML = "Download Complete!";
			document.getElementById('dlStatus').innerHTML = "Ready to Play!";
		}
	} else {
		dLProgCompdocument.getElementById('dLProgress').innerHTML = "Download Cancelled!";
	}

	function noErr(img) {
		if (!img.complete) {
			return false;
		}
		if (img.naturalWidth === 0) {
			return false;
		}
		return true;
	}

}

function choices(imgInd) {
	var i2;
	var i3;
	var i4;
	var ch2;
	var ch3;
	var ch4;

	inds = new Array;

	inds[0] = imgInd;

	while (ch2 != -1) {
		i2 = Math.floor(Math.random() * vocArray.length);
		ch2 = inds.indexOf(i2);
	}
	inds[1] = i2;

	while (ch3 != -1) {
		i3 = Math.floor(Math.random() * vocArray.length);
		ch3 = inds.indexOf(i3);
	}
	inds[2] = i3;

	while (ch4 != -1) {
		i4 = Math.floor(Math.random() * vocArray.length);
		ch4 = inds.indexOf(i4);
	}
	inds[3] = i4;

	inds.sort(function() {
		return Math.random() - 0.5;
	});

	var choice1 = vocArray[inds[0]];
	var choice2 = vocArray[inds[1]];
	var choice3 = vocArray[inds[2]];
	var choice4 = vocArray[inds[3]];

	if (uMode == "r_1pic4word") {
		document.getElementById("ch1").innerHTML = "<a href='javascript:chAnswer(0);'>" + choice1 + "</a>";
		document.getElementById("ch2").innerHTML = "<a href='javascript:chAnswer(1);'>" + choice2 + "</a>";
		document.getElementById("ch3").innerHTML = "<a href='javascript:chAnswer(2);'>" + choice3 + "</a>";
		document.getElementById("ch4").innerHTML = "<a href='javascript:chAnswer(3);'>" + choice4 + "</a>";
	} else if (uMode == "r_1word4pic" || uMode == "l_4pic") {
		document.getElementById("imCh1").src = "images/vocab/" + currentCat + "/" + choice1 + ".jpg";
		document.getElementById("imCh2").src = "images/vocab/" + currentCat + "/" + choice2 + ".jpg";
		document.getElementById("imCh3").src = "images/vocab/" + currentCat + "/" + choice3 + ".jpg";
		document.getElementById("imCh4").src = "images/vocab/" + currentCat + "/" + choice4 + ".jpg";

		document.getElementById("fbHi1").style.display = "none";
		document.getElementById("fbHi2").style.display = "none";
		document.getElementById("fbHi3").style.display = "none";
		document.getElementById("fbHi4").style.display = "none";

		document.getElementById("fbTxt1").innerHTML = "";
		document.getElementById("fbTxt2").innerHTML = "";
		document.getElementById("fbTxt3").innerHTML = "";
		document.getElementById("fbTxt4").innerHTML = "";
	}

	if (uMode == "r_1word4pic") {
		document.getElementById("vocdisplay").innerHTML = vocArray[imgInd];
	} else if (uMode == "l_4pic") {
		audObj = audArray[imgInd];
		audArray[imgInd].play();
	} else if (uMode == "r_1word4pic") {
	}
}

function playVocab() {
	audObj.pause();
	audObj.currentTime = 0;
	audObj.play();
}

function chAnswer(ch) {
	if (finished != true) {
		var aIndex = inds[ch];
		var answer = vocArray[aIndex];
		if (answer == RImg && finished == false) {
			newImage('yes');
		} else if (answer != RImg && finished == false) {
			feedback(ch, answer);
		} else if (finished == "nearly") {
			finished = true;
			document.getElementById("yes-no").style.display = "none";
			document.getElementById("finishedButton").style.display = "block";
			document.getElementById("b_replay").style.display = "none";
			if (answer == RImg) {
				points++;
				document.getElementById("score").innerHTML = "&nbsp;Score: " + points + "&nbsp;";
			}
		}
	}

}

function feedback(ch, answer) {

	if (uMode == "r_1word4pic" || uMode == "l_4pic") {
		var fBHi = "fbHi" + (ch + 1);
		var fbTxt = "fbTxt" + (ch + 1);

		document.getElementById(fBHi).style.display = "inline";
		document.getElementById(fbTxt).innerHTML = answer;

	}

	if (uMode == "r_1pic4word") {
		var fBDiv = "ch" + (ch + 1);
		document.getElementById(fBDiv).innerHTML = "<span class='choiceDevFeedback'>" + answer + "</span>";

	}
	if (uMode!="r_phonics"){
		recentErrors(answer);
		upcmnErrs(answer);
	}



	document.getElementById("timer").style.color = "#f00";
	if (penalty == false) {
		penalty = true;
	} else {
		clearTimeout(penaltyTime);
		clearTimeout(penaltyTCol);
		clearTimeout(penaltyTic);
	}
	penaltyTCol = setTimeout(function() {
		document.getElementById("timer").style.color = "#fff";
	}, 5000);
	penaltyTime = setTimeout(function() {
		penalty = false;
	}, 5000);
	penaltyTic = setTimeout(function() {
		if (!finished) {
			tickTock="tick";
		}
		audCtrls(tickFast, "pause");
		audCtrls(tickFast, "rewind");
	}, 5000);

	tickTock="pause";
	audCtrls(tickFast, "play");

}

function upcmnErrs(vocItem) {
	vocItem = currentCat + "/" + vocItem;
	if (cmnErrs [0][0] == "") {
		cmnErrs[0] = [vocItem, 1];
	} else {
		var vocOnly = new Array("");
		for (var i = 0; i < cmnErrs.length; i++) {
			vocOnly[i] = cmnErrs[i][0];
		}
		var ind = vocOnly.indexOf(vocItem);
		if (ind == -1) {
			cmnErrs.push([vocItem, 1]);
		} else {
			cmnErrs[ind][1]++;
		}
		sortCmnErrs();
	}

	if (fbMode == "common") {
		var errTx2 = "";
		var errTx3 = "";
		var errIm1 = cmnErrs[0][0];
		var n = (cmnErrs[0][0]).indexOf("/") + 1;
		var errTx1 = (cmnErrs[0][0]).slice(n);

		//alert (errTx1)

		if (cmnErrs[1][0] != "") {
			var errIm2 = cmnErrs[1][0];
			n = (cmnErrs[1][0]).indexOf("/") + 1;
			errTx2 = (cmnErrs[1][0]).slice(n);
			//alert (errTx1 + "," + errTx2);
		}

		if (cmnErrs[2][0] != "") {
			var errIm3 = cmnErrs[2][0];
			var n = (cmnErrs[2][0]).indexOf("/") + 1;
			errTx3 = (cmnErrs[2][0]).slice(n);
			//alert (errTx1 + "," + errTx2 +"," +errTx3);
		}
		displayErrors(errIm1, errTx1, errIm2, errTx2, errIm3, errTx3);
	}

	function sortCmnErrs() {
		var errTemp = new Array(["", 0], []);
		var x = 0;
		var y = 0;
		var z = cmnErrs.length;

		for (var j = 0; j < z; j++) {

			x = 0;
			for (var i = 0; i < cmnErrs.length; i++) {
				if ((cmnErrs [i][1]) >= x) {
					x = cmnErrs [i][1];
					y = i;
				}
			}
			errTemp[j] = cmnErrs[y];
			cmnErrs.splice(y, 1);
		}
		cmnErrs = errTemp;
		errTemp = new Array(["", 0]);
	}

}

function recentErrors(answer) {

	recErrIm[2] = recErrIm[1];
	recErrTx[2] = recErrTx[1];

	recErrIm[1] = recErrIm[0];
	recErrTx[1] = recErrTx[0];

	recErrIm[0] = currentCat + "/" + answer;
	recErrTx[0] = answer;

	if (fbMode == "recent") {
		var errIm1 = recErrIm[0];
		var errTx1 = answer;
		var errIm2 = recErrIm[1];
		var errTx2 = recErrTx[1];
		var errIm3 = recErrIm[2];
		var errTx3 = recErrTx[2];
		displayErrors(errIm1, errTx1, errIm2, errTx2, errIm3, errTx3);
	}

	if (fbImInd < 2) {
		fbImInd++;
	} else {
		fbImInd = 0;
	}
}

function displayErrors(errIm1, errTx1, errIm2, errTx2, errIm3, errTx3) {

	document.getElementById("fBIm0").innerHTML = "<div align='center' style='border: ridge red;'><img src='images/vocab/" + errIm1 + ".jpg' alt='Loading - please wait.' style='width:100%' ondragstart='return false;' /><br />" + errTx1 + "</div>";

	if (errTx2 != "") {
		document.getElementById("fBIm1").innerHTML = "<div align='center' style='border: ridge red;'><img src='images/vocab/" + errIm2 + ".jpg' alt='Loading - please wait.' style='width:100%' ondragstart='return false;' /><br />" + errTx2 + "</div>";
	}
	if (errTx3 != "") {
		document.getElementById("fBIm2").innerHTML = "<div align='center' style='border: ridge red;'><img src='images/vocab/" + errIm3 + ".jpg' alt='Loading - please wait.' style='width:100%' ondragstart='return false;' /><br />" + errTx3 + "</div>";
	}
}

function activity(button){
	if (uMode=="r_phonics"){
		newSyllable(button);
	}
	else{
		newImage(button);
	}
}

function newSyllable(button) {
	if (button == "start") {
		document.getElementById("phonDisplay").style.fontSize = "763%";
		newCount();
		document.getElementById("b_start").style.display = "none";
		document.getElementById("optDiv").style.display = "none";
		document.getElementById("contentSelect").style.display = "none";
		document.getElementById("yes-no").style.display = "block";
	}
	else if (button == "yes") {
		points++;
	}
	else if (button == "no") {
		feedback();
	}


	switch (currentPhonUnit) {
	case "1":
		unit1();
		break;
	case "2":
		unit2();
		break;
	case "3":
		unit3();
		break;
	case "4":
		unit4();
		break;
	case "5":
		unit5();
		break;
	case "6":
		unit6();
		break;
	case "7":
		unit7();
		break;
	}
	tabooCheck();
	document.getElementById("score").innerHTML = "&nbsp;Score: " + points + "&nbsp;";
	document.getElementById("phonDisplay").innerHTML = syll;
}


function setIndices (iLen, vLen, fLen, iNLen, vNLen, fNLen, vSLen) {
	// set index of initial consonant
	if (initC=="all") {
		iIndex=Math.floor(Math.random()*iLen);
	}
	else if (initC=="new") {
		iIndex=Math.floor(Math.random()*iNLen+(iLen-iNLen));
	}
	else {
		iIndex=iLen;
	}

	//set index of vowel
	if (vowel=="all") {
		vIndex=Math.floor(Math.random()*vLen);
	}
	else {
		vIndex=Math.floor(Math.random()*vNLen+(vLen-vNLen));
	}

	//set index of final consonant
	if (initC=="all") {
		fIndex=Math.floor(Math.random()*fLen);
	}
	else if (initC=="new") {
		fIndex=Math.floor(Math.random()*fNLen+(fLen-fNLen));
	}
	else {
		fIndex=fLen;
	}

	//alert (vSLen);
	//set index of "e" or "i" in case of "k" or "gu"
	vSpecIndex=Math.floor(Math.random()*vSLen);

	//set index of final "e" in compound vowels
	if (vIndex==5) {
		eCompIndex=1;
	}
	else if (vowel=="new" && vIndex!=5) {
		eCompIndex=0;
	}
	else {
		eCompIndex=Math.floor(Math.random()*2);
	}
}


function tabooCheck() {
	var check = tabSylls.indexOf(syll);
	if (check != -1) {
	points--;
	newSyllable();
	}
}


	function unit1() {

		setIndices (4,3,4,4,3,4);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];

		syll=igraph.concat (vgraph,fgraph);
	}

	function unit2() {

		setIndices (7,5,6,3,2,2);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];

		syll=igraph.concat (vgraph,fgraph);
	}

	function unit3() {

		setIndices (10,5,9,3,5,3);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];

		syll=igraph.concat (vgraph,fgraph);
	}

	function unit4() {

		setIndices (12,5,10,2,5,1,2);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];

		if (igraph=="k") {
			vgraph=vSpecArray[vSpecIndex];
		}

		syll=igraph.concat (vgraph,fgraph);
	}

	function unit5() {

		setIndices (15,5,12,5,5,3,2);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];

		if (igraph=="k"||igraph=="gu") {
			vgraph=vSpecArray[vSpecIndex];
		}

		syll=igraph.concat (vgraph,fgraph);
	}

	function unit6() {

		setIndices (15,6,15,5,6,5,3);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];
		var eCompGraph=eCompArray[eCompIndex];

		if (igraph=="k"||igraph=="gu") {
			vgraph=vSpecArray[vSpecIndex];
		}


		if ((fgraph=="ck")&&(vgraph=="ee"||eCompGraph=="e")) {
			fgraph="k";
		}
		else if (fgraph=="c" && vgraph=="ee") {
			fgraph="k";
		}
		else if (fgraph=="gu" && vgraph=="ee") {
			fgraph="g";
		}
		else {}


		if (vgraph=="ee"||fgraph=="ck") {
			eCompGraph="";
		}
		else if (fgraph=="c"||fgraph=="k"||fgraph=="gu") {
			eCompGraph="e";
		}
		else {}

		syll=igraph.concat (vgraph,fgraph,eCompGraph);
	}

	function unit7() {

		setIndices (15,6,18,5,6,3,3);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];
		var eCompGraph=eCompArray[eCompIndex];

		if (igraph=="k"||igraph=="gu") {
			vgraph=vSpecArray[vSpecIndex];
		}


		if ((fgraph=="ck")&&(vgraph=="ee"||eCompGraph=="e")) {
			fgraph="k";
		}
		else if (fgraph=="c" && vgraph=="ee") {
			fgraph="k";
		}
		else if (fgraph=="gu" && vgraph=="ee") {
			fgraph="g";
		}
		else {}


		if (vgraph=="ee"||fgraph=="ck") {
			eCompGraph="";
		}
		else if (fgraph=="c"||fgraph=="k"||fgraph=="gu") {
			eCompGraph="e";
		}
		else {}

		syll=igraph.concat (vgraph,fgraph,eCompGraph);
	}


function newImage(button) {
	if (button == "start") {
		newCount();
		document.getElementById("b_start").style.display = "none";
		document.getElementById("optDiv").style.display = "none";
		document.getElementById("contentSelect").style.display = "none";
		if (uMode == "sp_teacher") {
			document.getElementById("yes-no").style.display = "block";
		}
		if (uMode == "r_1word4pic" || uMode == "l_4pic") {
			document.getElementById("imChoiceDev").style.display = "inline";
			document.getElementById("mainImage").src = "images/formatting/1000X597clear_spacer.png";
		}
		if (uMode == "l_4pic") {
			document.getElementById("b_replay").style.display = "block";
		}
	} else if (button == "yes") {
		points++;
	} else if (button == "no") {
		var answer = vocArray[pImgInd];
		feedback(0, answer);

	}
	document.getElementById("score").innerHTML = "&nbsp;Score: " + points + "&nbsp;";

	var imgInd = Math.floor(Math.random() * vocArray.length);
	if (imgInd == pImgInd) {
		newImage();
		return;
	}
	RImg = vocArray[imgInd];
	pImgInd = imgInd;
	choices(imgInd);

	if (uMode == "r_1pic4word" || uMode == "sp_teacher") {
		document.getElementById("mainImage").src = "images/vocab/" + currentCat + "/" + RImg + ".jpg";
	}
}

// =====================================================
// End of functions for Language Builder 				|
// =====================================================



  function setOpacity(obj, opacity) {
    opacity = (opacity == 100)?99.999:opacity;

    // IE/Win
    obj.style.filter = "alpha(opacity:"+opacity+")";

    // Safari<1.2, Konqueror
    obj.style.KHTMLOpacity = opacity/100;

    // Older Mozilla and Firefox
    obj.style.MozOpacity = opacity/100;

    // Safari 1.2, newer Firefox and Mozilla, CSS3
    obj.style.opacity = opacity/100;

  }

  function crossFade(objIdOut,objIdIn) {

    var opacity=100;
    var objOut = document.getElementById(objIdOut);
    var objIn = document.getElementById(objIdIn);
    var fadeOut= function() {
      setOpacity(objOut, opacity);
      opacity -= 10;
    };
    var fadeIn= function() {
      setOpacity(objIn, opacity);
      opacity += 10;
    };
    var displayNone=function() {
    objOut.style.display = "none";
    };
    var displayNorm=function() {
    objIn.style.display = "";
    };
    for (i = 0; i <= 10; i++) {
      setTimeout(fadeOut, (50*i));
    }
    setTimeout(displayNone,500);
    setOpacity(objIn, 0);
   setTimeout(displayNorm,500);
    for (i = 10; i <= 20; i++) {
      setTimeout(fadeIn, (50*i));
    }
  }


  function cut(objIdOut,objIdIn) {
    document.getElementById(objIdOut).style.display = "none";
    document.getElementById(objIdIn).style.display = "";
  }

  function fadeToTh(bilinguals,pageTitle) {
    if (document.getElementById('headerTextTh').style.display == "none"){
      document.title=pageTitle;
      var lastElement = (bilinguals.length)-1;
      for (x=0;x<=lastElement;x++) {
      var objEn = (bilinguals[x]+'En');
      var objTh = (bilinguals[x]+'Th');
      crossFade(objEn,objTh);
      }
    }
  }



  function fadeToEn(bilinguals,pageTitle) {
    if (document.getElementById('headerTextEn').style.display == "none"){
      document.title=pageTitle;
      var lastElement = (bilinguals.length)-1;
      for (x=0;x<=lastElement;x++) {
      var objTh = (bilinguals[x]+'Th');
      var objEn = (bilinguals[x]+'En');
      crossFade(objTh,objEn);
      }
    }
  }

  function cutToTh(bilinguals,pageTitle){
    if (document.getElementById('headerTextTh').style.display == "none"){
      document.title=pageTitle;
      for (x in bilinguals) {
      var objEn = (bilinguals[x]+'En');
      var objTh = (bilinguals[x]+'Th');
      cut(objEn,objTh);
      }
    }
  }

  function showInfo(objId,objHeight,objShow,objHide){

    var currentHeight = parseInt(document.getElementById(objId).style.height);
    var obj = document.getElementById(objId);
    var showButton = (document.getElementById(objId).id+'Sh');
    var hideButton = (document.getElementById(objId).id+'Hi');
    var incHeight= function() {
      obj.style.height = currentHeight +'px';
      currentHeight=currentHeight+1;
    };

    if (currentHeight == 0) {
      obj.style.borderBottom = '1px solid #00cccc';
      for (i = 1; i <= objHeight; i++) {
        setTimeout(incHeight, (3*i));
      }
    }
      crossFade(showButton,hideButton);
  }

  function hideInfo(objId,objHeight){

    var currentHeight = parseInt(document.getElementById(objId).style.height);
    var obj = document.getElementById(objId);
    var showButton = (document.getElementById(objId).id+'Sh');
    var hideButton = (document.getElementById(objId).id+'Hi');
    var decHeight= function() {
      obj.style.height = currentHeight + 'px';
      currentHeight=currentHeight-1;
    };
    var remBorder= function() {
      obj.style.borderBottom = '';
    };
    if (currentHeight != 0) {
      for (i = 1; i <= objHeight; i++) {
        setTimeout(decHeight, (3*i));
      }
      setTimeout(remBorder,(3*objHeight));
    }
      crossFade(hideButton,showButton);
  }


// Function to change large image by clicking thumbnail


  function changeImage(objId1,objId2,imageURL){
    var obj1 = document.getElementById(objId1);
    var obj2 = document.getElementById(objId2);
    var opacity=100;

    obj1.src = imageURL;

    var fadeOut= function() {
      setOpacity(obj2, opacity);
      opacity -= 10;
    };

    var swapObj2 = function() {
      obj2.src = imageURL;
    };

    var makeOpaque= function() {
      setOpacity(obj2, 100);
    };

    for (i = 0; i <= 10; i++) {
      setTimeout(fadeOut, (50*i));
    }

    setTimeout(swapObj2,500);
    setTimeout(makeOpaque,500);

  }

/***********************************************
* Ultimate Fade-In Slideshow (v1.51): © Dynamic Drive (http://www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
***********************************************/
var testimages=new Array();
testimages[0]=["/home/ian/Website/TPFProject/images/schools/btl1.jpg","",""];
testimages[1]=["/home/ian/Website/TPFProject/images/schools/wnk1.jpg","",""];

var fadeimages=new Array();
//SET IMAGE PATHS. Extend or contract array as needed
fadeimages[0]=["images/slideshow/slide001.jpg","",""];
fadeimages[1]=["images/slideshow/slide002.jpg","",""];
fadeimages[2]=["images/slideshow/slide003.jpg","",""];
fadeimages[3]=["images/slideshow/slide004.jpg","",""];
fadeimages[4]=["images/slideshow/slide005.jpg","",""];
fadeimages[5]=["images/slideshow/slide006.jpg","",""];
fadeimages[6]=["images/slideshow/slide007.jpg","",""];
fadeimages[7]=["images/slideshow/slide008.jpg","",""];
fadeimages[8]=["images/slideshow/slide009.jpg","",""];
fadeimages[9]=["images/slideshow/slide010.jpg","",""];
fadeimages[10]=["images/slideshow/slide011.jpg","",""];
fadeimages[11]=["images/slideshow/slide012.jpg","",""];
fadeimages[12]=["images/slideshow/slide013.jpg","",""];
fadeimages[13]=["images/slideshow/slide014.jpg","",""];
fadeimages[14]=["images/slideshow/slide015.jpg","",""];
fadeimages[15]=["images/slideshow/slide016.jpg","",""];
fadeimages[16]=["images/slideshow/slide017.jpg","",""];
fadeimages[17]=["images/slideshow/slide018.jpg","",""];
fadeimages[18]=["images/slideshow/slide019.jpg","",""];
fadeimages[19]=["images/slideshow/slide020.jpg","",""];
fadeimages[20]=["images/slideshow/slide021.jpg","",""];
fadeimages[21]=["images/slideshow/slide022.jpg","",""];
fadeimages[22]=["images/slideshow/slide023.jpg","",""];
fadeimages[23]=["images/slideshow/slide024.jpg","",""];
fadeimages[24]=["images/slideshow/slide025.jpg","",""];
fadeimages[25]=["images/slideshow/slide026.jpg","",""];
fadeimages[26]=["images/slideshow/slide027.jpg","",""];
fadeimages[27]=["images/slideshow/slide028.jpg","",""];
fadeimages[28]=["images/slideshow/slide029.jpg","",""];
fadeimages[29]=["images/slideshow/slide030.jpg","",""];
fadeimages[30]=["images/slideshow/slide031.jpg","",""];
fadeimages[31]=["images/slideshow/slide032.jpg","",""];
fadeimages[32]=["images/slideshow/slide033.jpg","",""];
fadeimages[33]=["images/slideshow/slide034.jpg","",""];
fadeimages[34]=["images/slideshow/slide035.jpg","",""];
fadeimages[35]=["images/slideshow/slide036.jpg","",""];
fadeimages[36]=["images/slideshow/slide037.jpg","",""];
fadeimages[37]=["images/slideshow/slide038.jpg","",""];
fadeimages[38]=["images/slideshow/slide039.jpg","",""];
fadeimages[39]=["images/slideshow/slide040.jpg","",""];
fadeimages[40]=["images/slideshow/slide041.jpg","",""];
fadeimages[41]=["images/slideshow/slide042.jpg","",""];
fadeimages[42]=["images/slideshow/slide043.jpg","",""];
fadeimages[43]=["images/slideshow/slide044.jpg","",""];
fadeimages[44]=["images/slideshow/slide045.jpg","",""];
fadeimages[45]=["images/slideshow/slide046.jpg","",""];
fadeimages[46]=["images/slideshow/slide047.jpg","",""];
fadeimages[47]=["images/slideshow/slide048.jpg","",""];
fadeimages[48]=["images/slideshow/slide049.jpg","",""];
fadeimages[49]=["images/slideshow/slide050.jpg","",""];
fadeimages[50]=["images/slideshow/slide051.jpg","",""];
fadeimages[51]=["images/slideshow/slide052.jpg","",""];
fadeimages[52]=["images/slideshow/slide053.jpg","",""];
fadeimages[53]=["images/slideshow/slide054.jpg","",""];
fadeimages[54]=["images/slideshow/slide055.jpg","",""];
fadeimages[55]=["images/slideshow/slide056.jpg","",""];
fadeimages[56]=["images/slideshow/slide057.jpg","",""];
fadeimages[57]=["images/slideshow/slide058.jpg","",""];
fadeimages[58]=["images/slideshow/slide059.jpg","",""];
fadeimages[59]=["images/slideshow/slide060.jpg","",""];
fadeimages[60]=["images/slideshow/slide061.jpg","",""];
fadeimages[61]=["images/slideshow/slide062.jpg","",""];
fadeimages[62]=["images/slideshow/slide063.jpg","",""];
fadeimages[63]=["images/slideshow/slide064.jpg","",""];
fadeimages[64]=["images/slideshow/slide065.jpg","",""];
fadeimages[65]=["images/slideshow/slide066.jpg","",""];
fadeimages[66]=["images/slideshow/slide067.jpg","",""];
fadeimages[67]=["images/slideshow/slide068.jpg","",""];
fadeimages[68]=["images/slideshow/slide069.jpg","",""];
fadeimages[69]=["images/slideshow/slide070.jpg","",""];
fadeimages[70]=["images/slideshow/slide071.jpg","",""];
fadeimages[71]=["images/slideshow/slide072.jpg","",""];
fadeimages[72]=["images/slideshow/slide073.jpg","",""];
fadeimages[73]=["images/slideshow/slide074.jpg","",""];
fadeimages[74]=["images/slideshow/slide075.jpg","",""];
fadeimages[75]=["images/slideshow/slide076.jpg","",""];
fadeimages[76]=["images/slideshow/slide077.jpg","",""];
fadeimages[77]=["images/slideshow/slide078.jpg","",""];
fadeimages[78]=["images/slideshow/slide079.jpg","",""];
fadeimages[79]=["images/slideshow/slide080.jpg","",""];
fadeimages[80]=["images/slideshow/slide081.jpg","",""];
fadeimages[81]=["images/slideshow/slide082.jpg","",""];
fadeimages[82]=["images/slideshow/slide083.jpg","",""];
fadeimages[83]=["images/slideshow/slide084.jpg","",""];
fadeimages[84]=["images/slideshow/slide085.jpg","",""];
fadeimages[85]=["images/slideshow/slide086.jpg","",""];
fadeimages[86]=["images/slideshow/slide087.jpg","",""];
fadeimages[87]=["images/slideshow/slide088.jpg","",""];
fadeimages[88]=["images/slideshow/slide089.jpg","",""];
fadeimages[89]=["images/slideshow/slide090.jpg","",""];
fadeimages[90]=["images/slideshow/slide091.jpg","",""];
fadeimages[91]=["images/slideshow/slide092.jpg","",""];
fadeimages[92]=["images/slideshow/slide093.jpg","",""];
fadeimages[93]=["images/slideshow/slide094.jpg","",""];

var fadebgcolor="white";

////NO need to edit beyond here/////////////

var fadearray=new Array(); //array to cache fadeshow instances
var fadeclear=new Array(); //array to cache corresponding clearinterval pointers

var dom=(document.getElementById); //modern dom browsers
var iebrowser=document.all;

function fadeshow(theimages, fadewidth, fadeheight, borderwidth, delay, pause, displayorder){
this.pausecheck=pause;
this.mouseovercheck=0;
this.delay=delay;
this.degree=10; //initial opacity degree (10%)
this.curimageindex=0;
this.nextimageindex=1;
fadearray[fadearray.length]=this;
this.slideshowid=fadearray.length-1;
this.canvasbase="canvas"+this.slideshowid;
this.curcanvas=this.canvasbase+"_0";
if (typeof displayorder!="undefined");
theimages.sort(function() {return 0.5 - Math.random();}); //thanks to Mike (aka Mwinter) :)
this.theimages=theimages;
this.imageborder=parseInt(borderwidth);
this.postimages=new Array(); //preload images
for (p=0;p<theimages.length;p++){
this.postimages[p]=new Image();
this.postimages[p].src=theimages[p][0];
}

var fadewidth=fadewidth+this.imageborder*2;
var fadeheight=fadeheight+this.imageborder*2;

if (iebrowser&&dom||dom) //if IE5+ or modern browsers (ie: Firefox)
document.write('<div id="master'+this.slideshowid+'" style="position:relative;width:'+fadewidth+'px;height:'+fadeheight+'px;overflow:hidden;"><div id="'+this.canvasbase+'_0" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:'+fadebgcolor+'"></div><div id="'+this.canvasbase+'_1" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:'+fadebgcolor+'"></div></div>');
else
document.write('<div><img name="defaultslide'+this.slideshowid+'" src="'+this.postimages[0].src+'"></div>');

if (iebrowser&&dom||dom) //if IE5+ or modern browsers such as Firefox
this.startit();
else{
this.curimageindex++;
setInterval("fadearray["+this.slideshowid+"].rotateimage()", this.delay);
}
}

function fadepic(obj){
if (obj.degree<100){
obj.degree+=10;
if (obj.tempobj.filters&&obj.tempobj.filters[0]){
if (typeof obj.tempobj.filters[0].opacity=="number") //if IE6+
obj.tempobj.filters[0].opacity=obj.degree;
else //else if IE5.5-
obj.tempobj.style.filter="alpha(opacity="+obj.degree+")";
}
else if (obj.tempobj.style.MozOpacity)
obj.tempobj.style.MozOpacity=obj.degree/101;
else if (obj.tempobj.style.KhtmlOpacity)
obj.tempobj.style.KhtmlOpacity=obj.degree/100;
else if (obj.tempobj.style.opacity&&!obj.tempobj.filters)
obj.tempobj.style.opacity=obj.degree/101;
}
else{
clearInterval(fadeclear[obj.slideshowid]);
obj.nextcanvas=(obj.curcanvas==obj.canvasbase+"_0")? obj.canvasbase+"_0" : obj.canvasbase+"_1";
obj.tempobj=iebrowser? iebrowser[obj.nextcanvas] : document.getElementById(obj.nextcanvas);
obj.populateslide(obj.tempobj, obj.nextimageindex);
obj.nextimageindex=(obj.nextimageindex<obj.postimages.length-1)? obj.nextimageindex+1 : 0;
setTimeout("fadearray["+obj.slideshowid+"].rotateimage()", obj.delay);
}
}

fadeshow.prototype.populateslide=function(picobj, picindex){
var slideHTML="";
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML='<a href="'+this.theimages[picindex][1]+'" target="'+this.theimages[picindex][2]+'">';
slideHTML+='<img src="'+this.postimages[picindex].src+'" border="'+this.imageborder+'px">';
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML+='</a>';
picobj.innerHTML=slideHTML;
};


fadeshow.prototype.rotateimage=function(){
if (this.pausecheck==1) //if pause onMouseover enabled, cache object
var cacheobj=this;
if (this.mouseovercheck==1)
setTimeout(function(){cacheobj.rotateimage();}, 100);
else if (iebrowser&&dom||dom){
this.resetit();
var crossobj=this.tempobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas);
crossobj.style.zIndex++;
fadeclear[this.slideshowid]=setInterval("fadepic(fadearray["+this.slideshowid+"])",50);
this.curcanvas=(this.curcanvas==this.canvasbase+"_0")? this.canvasbase+"_1" : this.canvasbase+"_0";
}
else{
var ns4imgobj=document.images['defaultslide'+this.slideshowid];
ns4imgobj.src=this.postimages[this.curimageindex].src;
}
this.curimageindex=(this.curimageindex<this.postimages.length-1)? this.curimageindex+1 : 0;
};

fadeshow.prototype.resetit=function(){
this.degree=10;
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas);
if (crossobj.filters&&crossobj.filters[0]){
if (typeof crossobj.filters[0].opacity=="number") //if IE6+
crossobj.filters(0).opacity=this.degree;
else //else if IE5.5-
crossobj.style.filter="alpha(opacity="+this.degree+")";
}
else if (crossobj.style.MozOpacity)
crossobj.style.MozOpacity=this.degree/101;
else if (crossobj.style.KhtmlOpacity)
crossobj.style.KhtmlOpacity=this.degree/100;
else if (crossobj.style.opacity&&!crossobj.filters)
crossobj.style.opacity=this.degree/101;
};


fadeshow.prototype.startit=function(){
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas);
this.populateslide(crossobj, this.curimageindex);
if (this.pausecheck==1){ //IF SLIDESHOW SHOULD PAUSE ONMOUSEOVER
var cacheobj=this;
var crossobjcontainer=iebrowser? iebrowser["master"+this.slideshowid] : document.getElementById("master"+this.slideshowid);
crossobjcontainer.onmouseover=function(){cacheobj.mouseovercheck=1;};
crossobjcontainer.onmouseout=function(){cacheobj.mouseovercheck=0;};
}
this.rotateimage();
};












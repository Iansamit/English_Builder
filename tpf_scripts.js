var allCats = new Array("actions", "asean", "animals", "clothes", "days", "describing", "food", "free time", "grammar", "home", "occupations", "people", "places and transport", "body", "school", "time", "weather");
var audArray = new Array("");
var audDLRemaining;
var audVoc = new Audio ("");
var audReady = new Array(false);
var availAudCats = new Array ("");
var availCats = new Array("");
var cmnErrs = new Array(["", 0], ["", 0], ["", 0]);
var countTime = 180;
var countSet = 3;
var currentBook = "";
var currentCatDir = "all";
var currentCatTitle = "all";
var initErrTime=0;
var currentLev = "P1";
var currentPhonUnit="phon1";
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
var penaltyTime;
var penaltyFinish;
var pImgInd;
var points = 0;
var randomCats=true;
var recErrIm = new Array("", "", "");
var recErrTx = new Array("", "", "");
var stopCount = false;
var stopDL = false;
var substArray = new Array ("?","question.mark","be / is / am / are","to.be", "do / does", "to.do", "go / goes","to.go", "have / has","to.have");
var tablet = false;
var tickFast;
var tickTock="tick";
var topicList="genVocab";
var uMode = "read_choose";
var vocArray = new Array("close", "come", "cook", "count", "cry", "cut", "dig", "drink", "eat", "go", "jump", "open", "play", "read", "run", "sing", "sit", "sleep", "speak", "stand", "walk", "write");
var vowel="all";
var vIndex;
var vSpecIndex;
var fIndex;
var eCompIndex;
var iArray=new Array("m","s","p","t","");
var vArray=new Array("a","i","o","");
var fArray=new Array("m","s","p","t","");
var vSpecArray=new Array("e","i","");
var eCompArray=new Array ("e","");
var syll;
var prevSyll;
var tabSylls = new Array ("fuck", "pis", "cock", "tit", "cunt");



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

function debug (l1,d1,l2,d2,l3,d3,l4,d4,l5,d5) {
	for(i = 0; i < 10;i++){
		if (typeof arguments[i] != "undefined"){
			document.getElementById("debug"+i).innerHTML=arguments[i]+"&nbsp;";
		}
		else {
			document.getElementById("debug"+i).innerHTML = "";
		}
	}
}

function init() {
	window.ondragstart=function(){return false;};
	initAudio();
	resize();
	resetScore();
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
	setTimeout(function(){selectLev("K2");},500);
}


function resize() {
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var h = Math.floor((w/1600)*780);

	var bodFontsize = Math.floor((w / 1600) * 60);
	document.body.style.cssText = "background: none repeat scroll 0% 0% rgb(0, 0, 0); font: " + bodFontsize + "px 'Nunito',sans-serif;";

	document.getElementById("outerDiv").style.width = w+"px";
	document.getElementById("outerDiv").style.height = h+"px";

	var x = Math.floor(w * 0.26 * 597 / 1000) + "px";
	document.getElementById("fbTxt1").style.height = x;
	document.getElementById("fbTxt2").style.height = x;
	document.getElementById("fbTxt3").style.height = x;
	document.getElementById("fbTxt4").style.height = x;

	var y = Math.floor((w / 1600) * 30) + "px";
	document.getElementById("dLProgBar").style.height = y;
	document.getElementById("dLProgBar_end").style.height = y;
	document.getElementById("dLProgBarAud").style.height = y;
	document.getElementById("dLProgBarAud_end").style.height = y;
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
			aud.currentTime = 0;
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
	document.getElementById("optDiv").style.display = disp;

	if (disp=="block") {
		document.getElementById("phonUSelect").style.display = "none";
		document.getElementById("vocSelect").style.display = "none";
	}
	else if (uMode=="read_say") {
		document.getElementById("phonUSelect").style.display = "table";
	}
	else {
		document.getElementById("vocSelect").style.display = "table";
	}

}

function showWelcome(){
	resetScore();
	document.getElementById("welcomeDiv").style.display = "block";
	document.getElementById("imageDiv").style.display = "none";
	document.getElementById("phonDisplay").style.display = "none";
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
	tickTock="tick";
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
				if (tablet==true && audVoc.ended == false) {

				}
				else if (tickTock=="tick" ) {
					audCtrls(tock, "pause");
					audCtrls(tick, "play");
					tickTock="tock";
				}
				else if (tickTock=="tock") {
					audCtrls(tick, "pause");
					audCtrls(tock, "play");
					tickTock="tick";
				}
				setTimeout(function() {countDown();}, 1000);
			} else {
				audCtrls(tickFast, "pause");
				audCtrls(finAudio, "play");
				finished = "nearly";
				setTimeout(function() {
					document.getElementById("yes_cell").style.display = "none";
					document.getElementById("no_cell").style.display = "none";
					document.getElementById("clear_cell").style.display = "none";
					document.getElementById("controls_central").style.display = "table-cell";
					document.getElementById("finishedButton").style.display = "inline";
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

function setCountDown(min) {
	document.getElementById("cDS"+countSet).className = "cDSelect";
	countSet = min;
	countTime = min*60;
	var initMin = Math.floor(countTime / 60);
	initMin = leadZero(initMin);
	document.getElementById('timer').innerHTML = initMin + ":00";
	document.getElementById("cDS"+min).className = "cDSelected";
}

function resetScore() {

	points = 0;
	stopCount = true;
	finished = true;
	penalty=false;

	audCtrls(tickFast, "pause");
	setTimeout(function() {
		audCtrls(tickFast, "rewind");
	}, 100);

	setCountDown(countSet);
	document.getElementById("timer").style.color = "#fff";
	document.getElementById("score").innerHTML = "Score: " + points;
	document.getElementById("finishedButton").style.display = "none";
	document.getElementById("b_replay").style.display = "none";
	document.getElementById("imChoiceDiv").style.display = "none";
	document.getElementById("b_start").style.display = "block";
	document.getElementById("b_reset").style.display = "none";
	document.getElementById("b_help").style.display = "block";
	document.getElementById("controls_central").style.display = "table-cell";
	document.getElementById("yes_cell").style.display = "none";
	document.getElementById("no_cell").style.display = "none";
	document.getElementById("clear_cell").style.display = "none";

	if (randomCats) {
		document.getElementById("mainImage").src = "images/vocab/titles/all.jpg";
	}
	else if (currentCatDir!="dot_and_Ben"){
		document.getElementById("mainImage").src = "images/vocab/titles/" + currentCatTitle + ".jpg";
	}
	else{
		document.getElementById("mainImage").src = "images/vocab/titles/" + currentBook + ".jpg";
	}

	document.getElementById("phonDisplay").style.fontSize="300%";
	document.getElementById("phonDisplay").innerHTML = "</br>Phonics Unit <img src='images/labels/l_"+currentPhonUnit+"_p.png' />";
	document.getElementById("ch1").style.display = "none";
	document.getElementById("ch2").style.display = "none";
	document.getElementById("ch3").style.display = "none";
	document.getElementById("ch4").style.display = "none";
}

function b_press(b, dir, origw) {
	if (dir == "down") {
		var w = parseFloat(origw) * 0.96;
		document.getElementById(b).style.width = w + "%";
		if (b!="b_replay" && b!="b_start") {
			audCtrls(aclick, "play");
		}
	} else {
		document.getElementById(b).style.width = origw;
	}
}




function selectPhonUnit(unit) {
	if (unit != currentPhonUnit) {
	var prevUnit = currentPhonUnit;
		audCtrls(aclick, "play");
		document.getElementById("b_" + unit).style.width = "94%";
		document.getElementById("b_" + unit).style.border = "outset";
		document.getElementById("on_" + unit).style.display = "inline";
		document.getElementById("b_"+currentPhonUnit).style.width = "100%";
		document.getElementById("b_"+currentPhonUnit).style.border = "none";
		document.getElementById("on_"+currentPhonUnit).style.display = "none";
		document.getElementById("panelCont").src="images/buttons/b_"+unit+".png";
		document.getElementById("panelLev").src="images/labels/l_"+unit+"_p.png";

		currentPhonUnit=unit;
		document.getElementById("phonDisplay").style.fontSize = "300%";
		document.getElementById("phonDisplay").innerHTML = "</br>Phonics Unit <img src='images/labels/U"+unit+".png' />";
		setPhonicsArrays();
		newSyllable("ex");
		resetScore();
	}
}

function iSet () {
	if (initC=="all"){
		document.getElementById("b_initC").src="images/buttons/b_new.png";
		initC="new";
	}
	else if (initC=="new"){
		document.getElementById("b_initC").src="images/buttons/b_none.png";
		initC="none";
	}
	else if (initC=="none"){
		document.getElementById("b_initC").src="images/buttons/b_all.png";
		initC="all";
	}
	newSyllable("ex");
}

function vSet () {
	if (vowel=="all"){
		document.getElementById("b_vowel").src="images/buttons/b_new.png";
		vowel="new";
	}
	else if (vowel=="new"){
		document.getElementById("b_vowel").src="images/buttons/b_none.png";
		vowel="none";
	}
	else if (vowel=="none"){
		document.getElementById("b_vowel").src="images/buttons/b_all.png";
		vowel="all";
	}
	newSyllable("ex");
}

function fSet () {
	if (finalC=="all"){
		document.getElementById("b_finalC").src="images/buttons/b_new.png";
		finalC="new";
	}
	else if (finalC=="new"){
		document.getElementById("b_finalC").src="images/buttons/b_none.png";
		finalC="none";
	}
	else if (finalC=="none"){
		document.getElementById("b_finalC").src="images/buttons/b_all.png";
		finalC="all";
	}
	newSyllable("ex");
}

function selectMode(mode) {
	if (mode != uMode) {
		var prevMode = uMode;

		audCtrls(aclick, "play");
		document.getElementById("b_" + mode).style.width = "94%";
		document.getElementById("b_" + mode).style.border = "outset #5bc8e8";
		document.getElementById("b_" + mode).src = "images/buttons/ba_" + mode + "_on.png";
		document.getElementById("panelAct").src = "images/buttons/ba_" + mode + "_off.png";
		document.getElementById("b_" + prevMode).style.width = "100%";
		document.getElementById("b_" + prevMode).style.border = "none";
		document.getElementById("b_" + prevMode).src = "images/buttons/ba_" + prevMode + "_off.png";
		document.getElementById("optDiv").style.display = "none";
		document.getElementById("welcomeDiv").style.display = "none";
		uMode = mode;

		for (var i = 0, len = allCats.length; i < len; i++) {
			if (uMode!="listen_choose"){
				if (availCats.indexOf(allCats[i]) == -1) {
					document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + "_g.jpg";
				} else {
					document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + ".jpg";
				}
			}
			else{
				if (availAudCats.indexOf(allCats[i]) == -1) {
					document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + "_g.jpg";
				}
				else {
					document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + ".jpg";
				}
			}
		}

		if (mode!="read_say"){
		  	document.getElementById("imageDiv").style.display="block";
  			document.getElementById("phonDisplay").style.display="none";
  			document.getElementById("welcomeDiv").style.display="none";
  			document.getElementById("errDiv").style.display="block";
  			document.getElementById("vocSelect").style.display="table";
  			document.getElementById("phonUSelect").style.display="none";
  			if (currentCatDir!="dot_and_Ben"){
  				document.getElementById("panelCont").src="images/buttons/"+currentCatDir+".jpg";
				document.getElementById("panelLev").src="images/buttons/b_"+currentLev+".png";
  			}
  			else{
  				var phonUnit=(parseInt(currentBook.substr(4))+2);
				document.getElementById("panelLev").src="images/buttons/b_phon"+phonUnit+".png";
				document.getElementById("panelCont").src="images/buttons/bc_"+currentBook+".jpg";
			}
  		}

		if (mode == "look_choose") {
			document.getElementById("choiceDiv").style.display = "block";
		}
		else if (mode == "read_choose") {
			document.getElementById("choiceDiv").style.display = "none";
			document.getElementById("vocdisplay").style.display = "block";
		}
		else if (mode == "say_word") {
			document.getElementById("choiceDiv").style.display = "none";
		}
		else if (mode == "listen_choose") {
			document.getElementById("choiceDiv").style.display = "none";
			document.getElementById("vocdisplay").style.display = "none";
		}
		else if (mode=="read_say"){
		  	document.getElementById("imageDiv").style.display="none";
		  	document.getElementById("choiceDiv").style.display = "none";
		  	document.getElementById("welcomeDiv").style.display="none";
  			document.getElementById("phonDisplay").style.display="block";
  			document.getElementById("errDiv").style.display="none";
  			document.getElementById("vocSelect").style.display="none";
  			document.getElementById("phonUSelect").style.display="table";
  			document.getElementById("panelCont").src="images/buttons/b_"+currentPhonUnit+".png";
			document.getElementById("panelLev").src="images/labels/l_"+currentPhonUnit+"_p.png";
		}
	}
}

function selectLev(level) {

	if (level!=currentLev){

		document.getElementById("b_" + level).style.width = "94%";
		document.getElementById("b_" + level).style.border = "outset";
		document.getElementById("on_" + level).style.display = "inline";
		document.getElementById("b_" + currentLev).style.width = "100%";
		document.getElementById("b_" + currentLev).style.border = "none";
		document.getElementById("on_" + currentLev).style.display = "none";
		document.getElementById("panelLev").src="images/buttons/b_"+level+".png";
		currentLev = level;
		setVocArrays();
		setTitle();
		//preloadAudio();
		audCtrls(aswitch, "play");
		preLoadImages();
		monPreload();

		for (var i = 0, len = allCats.length; i < len; i++) {
			if (uMode!="listen_choose"){
				if (availCats.indexOf(allCats[i]) == -1) {
					document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + "_g.jpg";
				} else {
					document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + ".jpg";
				}
			}
			else{
				if (availAudCats.indexOf(allCats[i]) == -1) {
					document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + "_g.jpg";
				}
				else {
					document.getElementById("b_" + allCats[i]).src = "images/buttons/" + allCats[i] + ".jpg";
				}
			}
		}
		if (availCats.indexOf(currentCatDir) == -1) {
			selectCat("all");
		}
	}
}
function selectTopicList(list){
	if (list!=topicList){
		audCtrls(aclick, "play");
		document.getElementById("b_"+list).style.width="75%";
		document.getElementById("b_"+list).style.border = "outset #5bc8e8";
		document.getElementById("b_"+list).src="images/buttons/bs_"+list+"_on.png";
		document.getElementById(list).style.display="table";
		document.getElementById(topicList).style.display="none";
		document.getElementById("b_"+topicList).style.width="80%";
		document.getElementById("b_"+topicList).style.border = "none";
		document.getElementById("b_"+topicList).src="images/buttons/bs_"+topicList+"_off.png";
		topicList=list;
	}
}

function selectDotandBen(book) {
	audCtrls(aclick, "play");
	document.getElementById("b_" + book).style.width = "94%";
	document.getElementById("b_" + book).style.border = "outset";
	document.getElementById("on_" + book).style.display = "inline";
	document.getElementById("welcomeDiv").style.display = "none";
	document.getElementById("imageDiv").style.display = "block";

	if (currentCatDir=="dot_and_Ben") {
		var prevBook=currentBook;
		document.getElementById("b_" + prevBook).style.width = "100%";
		document.getElementById("b_" + prevBook).style.border = "none";
		document.getElementById("on_" + prevBook).style.display = "none";

	}
	else {
		document.getElementById("b_" + currentCatTitle).style.width = "100%";
		document.getElementById("b_" + currentCatTitle).style.border = "none";
		document.getElementById("on_" + currentCatTitle).style.display = "none";
		document.getElementById("b_all").style.width = "100%";
		document.getElementById("b_all").style.border = "none";
		document.getElementById("on_all").style.display = "none";
		randomCats=false;
	}
	var phonUnit=(parseInt(book.substr(4))+2);
	document.getElementById("panelLev").src="images/buttons/b_phon"+phonUnit+".png";
	document.getElementById("panelCont").src="images/buttons/bc_"+book+".jpg";
	currentBook = book;
	currentCatDir="dot_and_Ben";
	setVocArrays();
}


function selectCat(category) {
	if (category=="all"){
		audCtrls(aclick, "play");
		randomCats=true;
		resetScore();
		document.getElementById("b_all").style.width = "94%";
		document.getElementById("b_all").style.border = "outset";
		document.getElementById("on_all").style.display = "inline";
		document.getElementById("panelCont").src="images/buttons/"+category+".jpg";
		if (currentCatDir!="dot_and_Ben") {
			document.getElementById("b_" + currentCatTitle).style.width = "100%";
			document.getElementById("b_" + currentCatTitle).style.border = "none";
			document.getElementById("on_" + currentCatTitle).style.display = "none";
		}
		else {
			document.getElementById("b_" + currentBook).style.width = "100%";
			document.getElementById("b_" + currentBook).style.border = "none";
			document.getElementById("on_" + currentBook).style.display = "none";
		}
	}
	else {
		document.getElementById("b_all").style.width = "100%";
		document.getElementById("b_all").style.border = "none";
		document.getElementById("on_all").style.display = "none";
		if ((availCats.indexOf(category) != -1) && (category != currentCatDir || randomCats==true)) {
			audCtrls(aclick, "play");
			document.getElementById("b_" + category).style.width = "94%";
			document.getElementById("b_" + category).style.border = "outset";
			document.getElementById("on_" + category).style.display = "inline";
			if (randomCats==false){
				if (currentCatDir!="dot_and_Ben") {
					document.getElementById("b_" + currentCatTitle).style.width = "100%";
					document.getElementById("b_" + currentCatTitle).style.border = "none";
					document.getElementById("on_" + currentCatTitle).style.display = "none";
				}
				else {
					document.getElementById("b_" + currentBook).style.width = "100%";
					document.getElementById("b_" + currentBook).style.border = "none";
					document.getElementById("on_" + currentBook).style.display = "none";
				}
			}
			randomCats=false;
			document.getElementById("panelCont").src="images/buttons/"+category+".jpg";
			document.getElementById("panelLev").src="images/buttons/b_"+currentLev+".png";
			currentCatDir = category;
			currentCatTitle = category;
			setVocArrays();
			setTitle();
			resetScore();
			//preloadAudio();
			preLoadImages();
			//monPreload();
		}
	}
}

function setTitle() {
	switch (currentCatTitle) {
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
		document.getElementById("fbRecent").className="fBSelected";
		document.getElementById("fbCommon").className="fBSelect";
		recentErrors("");
	} else {
		document.getElementById("errTitle").innerHTML = "Common Errors";
		document.getElementById("fbRecent").className="fBSelect";
		document.getElementById("fbCommon").className="fBSelected";
		upcmnErrs("");
	}
}

function setVocArrays() {
	if (currentLev == "K2") {
		availCats = new Array("actions", "animals", "body", "clothes","days", "describing", "food", "occupations", "places and transport", "school", "time");
		availAudCats = new Array ("animals", "food", "occupations");
		switch (currentCatDir) {
			case "actions":
				vocArray = new Array("close", "cook", "count", "cry", "cut", "drink", "eat", "hop", "jump", "listen", "look", "open", "run", "sing", "sit down", "sleep", "stand up", "stop", "swim", "walk");
				break;
			case "animals":
				vocArray = new Array("ant", "bat", "bird", "cat", "cow", "dog", "duck", "elephant", "fish", "horse", "lion", "monkey", "pig", "rabbit", "snake", "tiger", "zebra");
				break;
			case "body":
				vocArray = new Array ("arm", "ears", "eyes", "face", "finger", "foot", "hair", "hand", "head", "knee", "leg", "mouth", "nose");
				break;
			case "clothes":
				vocArray = new Array("belt", "cap", "dress", "glasses", "gloves", "hat", "jeans", "ring", "shirt", "shoes", "shorts", "skirt", "socks", "t-shirt");
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				currentCatDir = "time";
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "new car", "new home", "old car", "old home", "old man", "old woman", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "young man", "young woman");
				break;
			case "food":
				vocArray = new Array("apple", "banana", "cake", "candy", "carrots", "durian", "egg", "jam", "mangoes", "milk", "noodles", "orange", "papayas", "pineapple", "rambutans", "rice", "soup", "tea", "watermelon");
				break;
			case "occupations":
				vocArray = new Array("barber", "butcher", "cook", "dentist", "doctor", "farmer", "fisherman", "monk", "nurse", "policeman", "student", "teacher");
				break;
			case "places and transport":
				vocArray = new Array ("beach", "bicycle", "boat", "bus", "car", "farm", "home", "market", "on foot", "plane", "school", "shop", "temple", "train", "van", "zoo");
				break;
			case "school":
				vocArray = new Array("bag", "bin", "book", "chair", "door", "eraser", "fan", "pen", "pencil", "ruler", "table", "window");
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				break;
		}


	} else if (currentLev == "P1") {
		availCats = new Array("actions", "animals", "clothes", "days", "food", "home", "occupations", "body", "people", "school", "time");
		availAudCats = new Array ("animals", "food", "occupations");

		switch (currentCatDir) {
			case "actions":
				vocArray = new Array("cook", "count", "cry", "cut", "dig", "drink", "drive", "eat", "guess", "hop", "jump", "like", "read", "ride", "run", "sing", "sit", "sleep", "stand", "walk", "wear", "write");
				break;
			case "animals":
				vocArray = new Array("ant", "bat", "bee", "bird", "cat", "cow", "dog", "duck", "elephant", "fish", "hen", "horse", "lion", "monkey", "pig", "snake", "tiger");
				break;
			case "clothes":
				vocArray = new Array("cap", "hat", "shirt", "shoe", "shoes", "shorts", "skirt", "sock", "socks");
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				currentCatDir = "time";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "cake", "candy", "durian", "egg", "mangoes", "milk", "orange", "papayas", "rice", "tea");
				break;
			case "home":
				vocArray = new Array("bed", "bin", "chair", "cupboard", "door", "fan", "lamp", "mat", "sofa", "table", "TV");
				break;
			case "occupations":
				vocArray = new Array("bus driver", "cook", "doctor", "farmer", "fisherman", "guide", "monk", "nurse", "policeman", "postman", "student", "teacher");
				break;
			case "body":
				vocArray = new Array("arm", "arms", "ears", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "knee", "knees", "leg", "legs", "mouth", "neck", "nose", "shoulder", "shoulders", "toe", "toes");
				break;
			case "people":
				vocArray = new Array("boy", "brother", "father", "friend", "girl", "mother", "sister");
				break;
			case "school":
				vocArray = new Array("bag", "book", "box", "desk", "rubber", "pen", "pencil", "ruler", "school");
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				break;
		}

	} else if (currentLev == "P2") {
		availCats = new Array("actions", "animals", "asean", "clothes", "days", "food", "grammar", "home", "occupations", "body", "people", "places and transport", "school", "time");
		availAudCats = new Array ("animals", "food", "occupations");

		switch (currentCatDir) {
			case "actions":
				vocArray = new Array("close", "come", "cook", "count", "cry", "cut", "dig", "drink", "drive", "draw", "eat", "give", "guess", "go", "hop", "jump", "like", "open", "play", "read", "ride", "run", "sing", "sit", "sit down", "sleep", "speak", "stand", "stand up", "walk", "wear", "write");
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "cat", "chicken", "cow", "dog", "duck", "elephant", "fish", "gecko", "goat", "hen", "horse", "lion", "monkey", "mouse", "pig", "rabbit", "rat", "sheep", "snake", "tiger", "zebra");
				break;
			case "asean":
				vocArray = new Array("Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam");
				currentCatDir = "places and transport";
				break;
			case "clothes":
				vocArray = new Array("belt", "blouse", "cap", "dress", "earrings", "glasses", "handbag", "hat", "jacket", "jeans", "ring", "shirt", "shoe", "shoes", "shorts", "skirt","sock", "socks", "T-shirt", "watch");
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				currentCatDir = "time";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "bread", "cake", "candy", "carrots", "chicken", "cookies", "corn", "durian", "egg", "food", "ice cream", "jam", "limes", "mangoes", "mangosteens", "milk", "noodles", "orange", "papayas", "pineapple", "pork", "rice", "soup", "tea", "water", "watermelon");
				break;
			case "grammar":
				vocArray = new Array("can", "in", "is", "it", "not", "on", "this", "that", "what", "when", "where", "who");
				break;
			case "home":
				vocArray = new Array("basin", "bathroom", "bed", "bedroom", "bin", "broom", "chair", "cup", "cupboard", "dish", "door", "fan", "flower", "glass", "kitchen", "lamp", "living room", "mat", "pan", "picture", "pot", "room", "sink", "sofa", "stove", "table", "TV", "window", "wok");
				break;
			case "occupations":
				vocArray = new Array("barber", "boxer", "bus driver", "butcher", "chef", "cook", "dancer", "dentist", "doctor", "farmer", "fisherman", "fruit seller", "gardener", "guide", "hairdresser", "home-maker", "nurse", "policeman", "postman", "singer", "soldier", "student", "teacher", "vet");
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "ears", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "hip", "hips", "knee", "leg", "legs", "mouth", "neck", "nose", "shoulder", "shoulders", "teeth", "toe", "toes", "tooth");
				break;
			case "people":
				vocArray = new Array("aunt", "boy", "brother", "daughter", "family", "father", "friend", "girl", "grandfather", "grandmother", "king", "man", "mother", "queen", "sister", "son", "uncle", "woman");
				break;
			case "places and transport":
				vocArray = new Array("bank", "beach", "bike", "boat", "Brunei", "bus", "Cambodia", "car", "farm", "on foot", "home", "Indonesia", "Laos", "Malaysia", "market", "Myanmar", "Philippines", "plane", "school", "Singapore", "temple", "Thailand", "train", "van", "Vietnam", "zoo");
				break;
			case "school":
				vocArray = new Array("Art", "bag", "backpack", "blackboard", "book", "box", "chalk", "classroom", "clock", "computer", "desk", "eraser", "homework", "map", "Music", "notebook", "paper", "P.E.", "pen", "pencil", "ruler", "school", "Science");
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				break;
		}

	} else if (currentLev == "P3" || currentLev == "P4") {
		availCats = new Array("actions", "animals", "asean", "clothes", "days", "food", "grammar", "home", "occupations", "body", "people", "places and transport", "school", "time");
		availAudCats = new Array ("animals", "food", "occupations");

		switch (currentCatDir) {
			case "actions":
				vocArray = new Array("close", "come", "cook", "count", "cry", "cut", "dig", "drink", "drive", "draw", "eat", "give", "guess", "go", "hop", "jump", "like", "open", "play", "read", "ride", "run", "sing", "sit", "sit down", "sleep", "speak", "stand", "stand up", "walk", "wear", "write");
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "cat", "chicken", "cow", "dog", "duck", "elephant", "fish", "gecko", "goat", "hen", "horse", "lion", "monkey", "mouse", "pig", "rabbit", "rat", "sheep", "snake", "tiger", "zebra");
				break;
			case "asean":
				vocArray = new Array("Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam");
				currentCatDir = "places and transport";
				break;
			case "clothes":
				vocArray = new Array("belt", "blouse", "cap", "dress", "earrings", "glasses", "handbag", "hat", "jacket", "jeans", "ring", "shirt", "shoe", "shoes", "shorts", "skirt", "socks", "T-shirt", "watch");
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				currentCatDir = "time";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "bread", "cake", "candy", "carrots", "chicken", "cookies", "corn", "durian", "egg", "food", "ice cream", "jam", "limes", "mangoes", "mangosteens", "milk", "noodles", "orange", "papayas", "pineapple", "pork", "rice", "soup", "tea", "water", "watermelon");
				break;
			case "grammar":
				vocArray = new Array("be / is / am / are", "but", "can", "cannot", "do / does", "how many", "how much", "I", "in", "into", "my", "not", "on", "or", "that", "this", "to", "what", "when", "where", "who", "why", "you");
				break;
			case "home":
				vocArray = new Array("basin", "bathroom", "bed", "bedroom", "bin", "broom", "chair", "cup", "cupboard", "dish", "door", "fan", "flower", "glass", "kitchen", "lamp", "living room", "mat", "pan", "picture", "pot", "room", "sink", "sofa", "stove", "table", "TV", "window", "wok");
				break;
			case "occupations":
				vocArray = new Array("barber", "boxer", "bus driver", "butcher", "chef", "cook", "dancer", "dentist", "doctor", "farmer", "fisherman", "fruit seller", "gardener", "guide", "hairdresser", "home-maker", "nurse", "policeman", "postman", "singer", "soldier", "student", "teacher", "vet");
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "ears", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "hip", "hips", "knee", "leg", "legs", "mouth", "neck", "nose", "shoulder", "shoulders", "teeth", "toe", "toes", "tooth");
				break;
			case "people":
				vocArray = new Array("aunt", "boy", "brother", "daughter", "family", "father", "friend", "girl", "grandfather", "grandmother", "king", "man", "mother", "queen", "sister", "son", "uncle", "woman");
				break;
			case "places and transport":
				vocArray = new Array("bank", "beach", "bike", "boat", "Brunei", "bus", "Cambodia", "car", "farm", "on foot", "home",  "Indonesia", "Laos", "Malaysia", "market", "Myanmar", "Philippines", "plane", "school", "Singapore", "temple", "Thailand", "train", "van", "Vietnam", "zoo");
				break;
			case "school":
				vocArray = new Array("Art", "bag", "backpack", "blackboard", "book", "box", "chalk", "classroom", "clock", "computer", "desk", "eraser", "homework", "map", "Music", "notebook", "paper", "P.E.", "pen", "pencil", "ruler", "school", "Science");
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				break;
		}


	} else if (currentLev == "P5") {
		availCats = new Array("actions", "animals", "asean", "clothes", "days", "describing", "food", "free time", "grammar", "home", "occupations", "body", "people", "places and transport", "school", "time", "weather");
		availAudCats = new Array ("animals", "food", "occupations");
		switch (currentCatDir) {
			case "actions":
				vocArray = new Array("answer", "ask", "buy", "change", "check", "choose", "close", "come", "cook", "count", "cry", "cut", "dig", "discuss", "drink", "drive", "eat", "finish", "forget", "give", "go", "guess", "help", "jump", "like", "listen", "look", "make", "move", "open", "play", "print", "pull", "push", "read", "ride", "run", "say", "sing", "sit", "sit down", "sleep", "smile", "stand", "stand up", "stop", "swim", "think", "walk", "wear", "write");
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "buffalo", "cat", "chicken", "cow", "crab", "deer", "dolphin", "dog", "duck", "elephant", "fish", "fly", "frog","gecko", "goat", "hen", "horse", "jellyfish", "kangaroo", "lion", "monkey", "mouse", "mosquito", "octopus", "panda", "pig", "rabbit", "rat", "shark", "sheep", "snake", "spider", "squirrel", "tiger", "turtle", "whale", "zebra");
				break;
		case "asean":
				vocArray = new Array("Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam");
				currentCatDir = "places and transport";
				break;
		case "clothes":
				vocArray = new Array("belt", "blouse", "cap", "dress", "earrings", "glasses", "handbag", "hat", "jacket", "jeans", "pants", "pyjamas", "ring", "shirt", "shoe", "shoes", "shorts", "skirt", "socks", "sweater", "swimsuit", "T-shirt", "watch");
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				currentCatDir = "time";
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "black bag", "black shirt", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "narrow road", "new car", "new house", "old car", "old house", "old man", "old woman", "pink bag", "pink shirt", "pretty girl", "red bag", "red shirt", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "white shirt", "wide road", "young man", "young woman");
				break;
			case "food":
				vocArray = new Array("apple", "banana", "beans", "beef", "bread", "breakfast", "butter", "cabbage", "cake", "candy", "carrots", "cheese", "chicken", "chilli", "chocolate", "coconuts", "coffee", "coke", "cookies", "corn", "cucumber", "curry", "durian", "egg", "eggplant", "fish", "food", "fried chicken", "fried egg", "fried fish", "fried rice", "fruit", "garlic", "grapes", "guava", "hamburger", "hot dog", "ice cream", "iced coffee", "iced tea", "ice", "jam", "juice", "lemons", "limes", "lollipop", "long beans", "lunch", "mangoes", "mangosteens", "milk", "noodles", "oil", "onion", "orange", "papayas", "pineapple", "pizza", "pomelo", "pork", "pumpkin", "rambutans", "rice", "rose apple", "salad", "salt", "sandwich", "shrimp", "soda", "soft drinks", "soup", "strawberries", "sugar", "sushi", "tea", "tomato", "vinegar", "water", "watermelon", "wine", "yoghurt");
				break;
			case "free time":
				vocArray = new Array("collect stamps", "cook", "dance", "do gardening", "do gymnastics", "draw", "go camping", "go fishing", "go horse riding", "go shopping", "listen to music", "paint", "play badminton", "play basketball", "play computer games", "play football", "play games", "play ping-pong", "play the guitar", "play volleyball", "read comic books", "read", "ride a bike", "sing", "watch TV");
				break;
			case "grammar":
				vocArray = new Array("?", "be / is / am / are", "but", "can", "cannot", "do / does",  "how", "how many", "how much", "I", "in", "into", "my", "not", "on", "or", "that", "this", "to", "what time", "why", "which", "what", "when", "where", "who", "you");
				break;
			case "home":
				vocArray = new Array("basin", "bathroom", "bed", "bedroom", "bin", "broom", "chair", "cup", "cupboard", "dish", "door", "fan", "flower", "glass", "kitchen", "lamp", "living room", "pan", "picture", "pot", "room", "sink", "sofa", "stove", "table", "TV", "wok");
				break;
			case "occupations":
				vocArray = new Array("actor", "actress", "barber", "boxer", "bus driver", "butcher", "carpenter", "chef", "cook", "dancer", "dentist", "doctor", "dressmaker", "farmer", "fisherman", "fruit seller", "gardener", "guide", "hairdresser", "home-maker", "librarian", "merchants", "monk", "nurse", "policeman", "postman", "sailor", "secretary", "singer", "soldier", "student", "taxi driver", "teacher", "vet", "waiter", "waitress");
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "body", "bone", "chest", "chin", "ear", "ears", "eybrows", "eye", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "hip", "hips", "knee", "leg", "legs", "mouth", "nail", "nails", "neck", "nose", "shoulder", "shoulders", "teeth", "thumb", "toe", "toes", "tooth");
				break;
			case "places and transport":
				vocArray = new Array("Bandar Seri Begawan", "Bangkok", "beach", "bicycle", "boat", "Brunei", "bus", "Cambodia", "car", "coffee shop", "factory", "farm", "Hanoi", "helicopter", "hill", "hospital", "Indonesia", "Jakarta", "Kuala Lumpur", "Laos", "Malaysia", "Manila", "market", "motorbike", "motorbike taxi", "Myanmar", "Naypyidaw", "next to", "on foot", "Philippines", "Phnom Penh", "plane", "police station", "post office", "railway station", "restaurant", "rice paddy", "school", "sea", "ship", "shop", "Singapore", "studio", "supermarket", "swimming pool", "taxi", "temple", "Thailand", "train", "truck", "tuk-tuk", "van", "Vientiene", "Vietnam", "zoo");
				break;
			case "school":
				vocArray = new Array("art", "backpack", "bag", "basket", "bell", "bin", "blackboard", "book", "bookshelf", "bottle", "box", "broom", "calculator", "calendar", "can", "canteen", "chair", "chalk", "classroom", "clock", "coloured pencils", "computer room", "computer", "crayons", "desk", "door", "eraser", "fan", "floor", "flower", "globe", "glue", "homework", "ink", "key", "library", "lock", "lunchbox", "map", "mat", "music", "music room", "notebook", "paper", "PE", "pen", "pencil", "pencil case", "pencil sharpener", "playground", "room", "ruler", "school", "science", "scissors", "social studies", "table", "toilet", "umbrella", "violin", "wall", "waste paper basket", "whiteboard", "window");
				break;
			case "time":
				vocArray = new Array("at night", "in the afternoon", "in the morning", "in the evening", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				break;
			case "weather":
				vocArray = new Array("clear", "cloudy", "cold", "foggy", "hot", "rainy", "still", "stormy", "windy");
				break;
		}

	} else if (currentLev == "P6") {
		availCats = new Array("actions", "animals", "asean", "clothes", "days", "describing", "food", "free time", "occupations", "places and transport", "body", "school", "time");
		availAudCats = new Array ("animals", "food", "occupations");
		switch (currentCatDir) {
			case "actions":
				vocArray = new Array("close", "come", "cook", "count", "cry", "cut", "dig", "drink", "drive", "eat", "fly", "go", "guess", "hop", "jump", "leave", "like", "listen", "look", "open", "paint", "play", "point", "read", "ride", "run", "say", "shake", "sing", "sit down", "sit", "skip", "sleep", "smile", "speak", "stand", "stand up", "stop", "swim", "talk", "think", "walk", "write");
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "buffalo", "butterfly", "calf", "cat", "cheetah", "chicken", "chick", "cow", "crab", "crocodile", "deer", "dog", "dolphin", "duck", "duckling", "elephant", "fish", "fly", "fox", "frog", "gecko", "geese", "giraffe", "goat", "goose", "grasshopper", "hen", "hippopotamus", "horse", "jellyfish", "kangaroo", "kitten", "lamb", "lion", "meow", "monkey", "moo", "mosquito", "mouse", "neigh", "octopus", "oink", "panda", "parrot", "peacock", "pig", "piglet", "quack", "rabbit", "rat", "rhinoceros", "seal", "shark", "sheep", "snail", "snake", "spider", "squirrel", "starfish", "tiger", "turtle", "whale", "woof", "zebra");
				break;
			case "asean":
				vocArray = new Array("Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam");
				currentCatDir = "places and transport";
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "body", "bone", "chest", "chin", "ear", "ears", "eybrows", "eye", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "hip", "hips", "knee", "leg", "legs", "mouth", "nail", "nails", "neck", "nose", "shoulder", "shoulders", "teeth", "thumb", "toe", "toes", "tooth");
				break;
			case "clothes":
				vocArray = new Array("bathing suit", "belt", "blouse", "cap", "checked", "dress", "earrings", "flowered", "glasses", "gloves", "handbag", "hat", "jacket", "jeans", "necklace", "nightdress", "plain", "pyjamas", "raincoat", "ring", "rings", "scarf", "shirt", "shoe", "shoes", "shorts", "skirt", "socks", "spotted", "striped", "sweater", "t-shirt", "tie", "trainers", "trousers", "underwear", "wallet", "watch", "wig", "zip");
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				currentCatDir = "time";
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "black bag", "black shirt", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "narrow road", "new car", "new house", "old car", "old house", "old man", "old woman", "pink bag", "pink shirt", "pretty girl", "red bag", "red shirt", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "white shirt", "wide road", "young man", "young woman");
				break;
			case "food":
				vocArray = new Array("apple", "banana", "beans", "beef", "bread", "breakfast", "butter", "cabbage", "cake", "candy", "carrots", "cheese", "chicken", "chilli", "chocolate", "coconuts", "coffee", "coke", "cookies", "corn", "cucumber", "curry", "durian", "egg", "eggplant", "fish", "food", "fried chicken", "fried egg", "fried fish", "fried rice", "fruit", "garlic", "grapes", "guava", "hamburger", "hot dog", "ice cream", "iced coffee", "iced tea", "ice", "jam", "juice", "lemons", "limes", "lollipop", "long beans", "lunch", "mangoes", "mangosteens", "milk", "noodles", "oil", "onion", "orange", "papayas", "pineapple", "pizza", "pomelo", "pork", "pumpkin", "rambutans", "rice", "rose apple", "salad", "salt", "sandwich", "shrimp", "soda", "soft drinks", "soup", "strawberries", "sugar", "sushi", "tea", "tomato", "vinegar", "water", "watermelon", "wine", "yoghurt");
				break;
			case "free time":
				vocArray = new Array("collect stamps", "cook", "dance", "do gardening", "do gymnastics", "do jigsaw puzzles", "draw", "fly a kite", "go camping", "go climbing", "go fishing", "go for a picnic", "go horse riding", "go jogging", "go shopping", "go skating", "go swimming", "judo", "karate", "listen to music", "listen to the radio", "paint", "play badminton", "play basketball", "play cards", "play chess", "play computer games", "play darts", "play football", "play games", "play ping-pong", "play the guitar", "play volleyball", "read comic books", "read", "ride a bike", "sing", "watch TV");
				break;
			case "places and transport":
				vocArray = new Array("Bandar Seri Begawan", "Bangkok", "beach", "behind", "between", "bicycle", "boat", "Brunei", "bus", "Cambodia", "car", "coffee shop", "factory", "farm", "Hanoi", "helicopter", "hill", "hospital", "in", "in front of", "Indonesia", "Jakarta", "Kuala Lumpur", "Laos", "Malaysia", "Manila", "market", "motorbike", "motorbike taxi", "Myanmar", "Naypyidaw", "near", "next to", "on", "on foot", "on the left of", "on the right of", "Philippines", "Phnom Penh", "plane", "police station", "post office", "railway station", "restaurant", "rice paddy", "school", "sea", "ship", "shop", "Singapore", "studio", "supermarket", "swimming pool", "taxi", "temple", "Thailand", "that", "this", "train", "truck", "tuk-tuk", "under", "van", "Vientiene", "Vietnam", "zoo");
				break;
			case "school":
				vocArray = new Array("art", "backpack", "bag", "basket", "bell", "bin", "blackboard", "book", "bookshelf", "bottle", "box", "broom", "calculator", "calendar", "can", "canteen", "chair", "chalk", "classroom", "clock", "coloured pencils", "computer room", "computer", "crayons", "desk", "door", "eraser", "fan", "floor", "flower", "globe", "glue", "homework", "ink", "key", "library", "lock", "lunchbox", "map", "mat", "music", "music room", "notebook", "paper", "PE", "pen", "pencil", "pencil case", "pencil sharpener", "playground", "room", "ruler", "school", "science", "scissors", "social studies", "table", "toilet", "umbrella", "violin", "wall", "waste paper basket", "whiteboard", "window");
				break;
			case "occupations":
				vocArray = new Array("actor", "actress", "barber", "boxer", "bus driver", "butcher", "carpenter", "chef", "cook", "dancer", "dentist", "doctor", "dressmaker", "farmer", "fisherman", "fruit seller", "gardener", "guide", "hairdresser", "home-maker", "librarian", "merchants", "monk", "nurse", "policeman", "postman", "sailor", "secretary", "singer", "soldier", "student", "taxi driver", "teacher", "vet", "waiter", "waitress");
				break;
			case "time":
				vocArray = new Array("at night", "at noon", "Christmas", "in the afternoon", "in the evening", "in the morning", "Loi Krathong", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				break;
		}


	} else if (currentLev == "scratchpad") {
		availCats = new Array("actions", "animals", "clothes", "days", "describing", "food", "free time", "grammar", "occupations", "places and transport", "body", "school", "time");
		availAudCats = new Array ("animals", "food", "occupations");
		switch (currentCatDir) {
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
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				currentCatDir = "time";
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "black bag", "black shirt", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "narrow road", "new car", "new house", "old car", "old house", "old man", "old woman", "pink bag", "pink shirt", "pretty girl", "red bag", "red shirt", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "white shirt", "wide road", "young man", "young woman");
				break;
			case "food":
				vocArray = new Array("apple", "banana", "cake", "candy", "durian", "egg", "mangoes", "milk", "orange", "papayas", "rice", "tea");
				break;
			case "free time":
				vocArray = new Array("collect stamps", "cook", "dance", "do gardening", "do gymnastics", "do jigsaw puzzles", "draw", "fly a kite", "go camping", "go climbing", "go fishing", "go for a picnic", "go horse riding", "go jogging", "go shopping", "go skating", "go swimming", "judo", "karate", "listen to music", "listen to the radio", "paint", "play badminton", "play basketball", "play cards", "play chess", "play computer games", "play darts", "play football", "play games", "play ping-pong", "play the guitar", "play volleyball", "read comic books", "read", "ride a bike", "sing", "watch TV");
				break;
			case "grammar":
				vocArray = new Array("on the left of", "on the right of", "in", "on", "in front of", "next to", "under");
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


	if (currentCatDir == "dot_and_Ben") {
		switch (currentBook) {
			case "d_B_1":
				vocArray = new Array ("and", "bad", "bed", "Ben", "bus", "Dot", "fun", "has", "hop", "hot", "hut", "in", "in bed", "is", "not", "on", "pet", "sad", "sit", "sun", "the");
				break;
			case "d_B_2":
				vocArray = new Array ("and", "back", "bed", "Ben", "but", "can", "cat", "Dot", "duck", "has", "in", "in bed", "is", "it", "not", "of", "on", "sack", "sad", "sick", "sit", "the", "what");
				break;
			case "d_B_3":
				vocArray = new Array ("and", "bad", "bag", "Ben", "big", "Bud", "bus", "can", "cat", "dog", "Dot", "duck", "fog", "gas", "gem", "guess", "Gus", "has", "hot", "hut", "in", "is", "it","Jack", "jam", "jog", "not", "on", "sack", "sit", "the", "what");
				break;
			case "d_B_4":
				vocArray = new Array ("and", "at", "bag", "bake", "BAM", "Ben", "big", "Bud", "bus", "but", "cake", "can", "cane", "cat", "Doctor Zogue", "dog", "Dot", "duck", "feet", "fog", "gem", "guide", "Gus", "has", "hide", "his", "home", "hut", "I", "in", "into", "is", "it", "Jack", "Joe", "jog", "keep", "kick", "lake", "like", "magic", "man", "meet", "mice", "my", "name","nice", "nice to meet you", "not", "on", "pet", "pie", "sack", "sage", "see", "sit", "Sue", "take", "tap", "the", "to", "we", "you");
				break;
			case "d_B_5":
				vocArray = new Array ("bus", "but", "cake", "can", "cane", "cannot", "dance", "Doctor Zogue", "Dot", "eat", "face", "for", "gem", "go / goes", "gong", "Gus", "have / has", "her", "home", "I", "in", "be / is / am / are", "Jack", "Joe", "kick", "lake", "like", "mad", "magic", "make", "meet", "mice", "my", "need", "nice", "no", "not", "of", "on", "or", "pie", "pink", "sad", "sage", "see", "sing", "sink", "sit", "Sue", "sun", "take", "tap", "the", "to", "up", "up to you", "we", "week", "you", "your");
				break;
		}
	}
}


function setPhonicsArrays () {
		switch (currentPhonUnit) {
			case "phon1":
			iArray= new Array ("m","s","p","t","");
			vArray= new Array ("a","i","o","");
			fArray= new Array ("m","s","p","t","");
			break;
		case "phon2":
			iArray= new Array ("m","s","p","t","n","f","h","");
			vArray= new Array ("a","i","o","e","u","");
			fArray= new Array ("m","s","p","t","n","f","");
			break;
		case "phon3":
			iArray= new Array ("m","s","p","t","n","f","h","b","d","z","");
			vArray= new Array ("a","e","i","o","u","");
			fArray= new Array ("m","s","p","t","n","f","b","d","z","");
			break;
		case "phon4":
			iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","");
			vArray= new Array ("a","e","i","o","u","");
			fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","");
			vSpecArray = new Array ("e","i","");
			break;
		case "phon5":
			iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","");
			vArray= new Array ("a","e","i","o","u","");
			fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","");
			vSpecArray = new Array ("e","i","");
			break;
		case "phon6":
			iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","");
			vArray= new Array ("a","e","i","o","u","ee","");
			fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","");
			vSpecArray= new Array ("e","i","ee","");
			break;
		case "phon7":
			iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","");
			vArray= new Array ("a","e","i","o","u","ee","");
			fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","nc","nk","");
			vSpecArray= new Array ("e","i","ee","");
			break;
		case "phon8":
			iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","l","r","");
			vArray= new Array ("a","e","i","o","u","ee","");
			fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","nc","nk","l","");
			vSpecArray= new Array ("e","i","ee","");
			break;
		case "phon9":
			iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","l","r","");
			vArray= new Array ("a","e","i","o","u","ee","");
			fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","nc","nk","l","ft","ld","lk","lp","lt","mp","nd","nt","sp","st","");
			vSpecArray= new Array ("e","i","ee","");
			break;
		case "phon10":
			iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","l","r","bl","br","cl","cr","dr","fl","fr","gl","gr","pl","pr","sl","sm","sn","tr","");
			vArray= new Array ("a","e","i","o","u","ee","");
			fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","nc","nk","l","ft","ld","lk","lp","lt","mp","nd","nt","sp","st","");
			vSpecArray= new Array ("e","i","ee","");
			break;
		}
}



function preloadAudio() {
	if (currentCatDir == "occupations" || currentCatDir == "animals") {
		audDLRemaining = vocArray.length;
		var audFile;

		for (var i = 0; i < vocArray.length; i++) {
			audFile = "audio/vocab/" + currentCatDir + "/" + vocArray[i] + ".mp3";
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
		imgArray[i].src = "images/vocab/" + currentCatDir + "/" + vocArray[i] + ".jpg";
	}
}

function monPreload() {
	document.getElementById('dLProgCat').src = "images/buttons/" + currentCatDir + ".jpg";
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

	//This section checks for vocab items that cannot be filenames and substitutes them
	subst1Ind = substArray.indexOf(choice1);
	if (subst1Ind !=-1) {
		choice1Im = substArray[subst1Ind+1];
	}
	else choice1Im = choice1;

	subst2Ind = substArray.indexOf(choice2);
	if (subst2Ind !=-1) {
		choice2Im = substArray[subst2Ind+1];
	}
	else choice2Im = choice2;

	subst3Ind = substArray.indexOf(choice3);
	if (subst3Ind !=-1) {
		choice3Im = substArray[subst3Ind+1];
	}
	else choice3Im = choice3;

	subst4Ind = substArray.indexOf(choice4);
	if (subst4Ind !=-1) {
		choice4Im = substArray[subst4Ind+1];
	}
	else choice4Im = choice4;


	if (uMode == "look_choose") {
		document.getElementById("ch1").innerHTML = "<div>"+choice1+"</div>";
		document.getElementById("ch2").innerHTML = "<div>"+choice2+"</div>";
		document.getElementById("ch3").innerHTML = "<div>"+choice3+"</div>";
		document.getElementById("ch4").innerHTML = "<div>"+choice4+"</div>";

		document.getElementById("ch1").className = "choiceCell";
		document.getElementById("ch2").className = "choiceCell";
		document.getElementById("ch3").className = "choiceCell";
		document.getElementById("ch4").className = "choiceCell";

		document.getElementById("ch1").onclick = function () { chAnswer(0); };
		document.getElementById("ch1").oncontextmenu = function () { chAnswer(0); };
		document.getElementById("ch2").onclick = function () { chAnswer(1); };
		document.getElementById("ch2").oncontextmenu = function () { chAnswer(1); };
		document.getElementById("ch3").onclick = function () { chAnswer(2); };
		document.getElementById("ch3").oncontextmenu = function () { chAnswer(2); };
		document.getElementById("ch4").onclick = function () { chAnswer(3); };
		document.getElementById("ch4").oncontextmenu = function () { chAnswer(3); };

	} else if (uMode == "read_choose" || uMode == "listen_choose") {
		document.getElementById("imCh1").src = "images/vocab/" + currentCatDir + "/" + choice1Im + ".jpg";
		document.getElementById("imCh2").src = "images/vocab/" + currentCatDir + "/" + choice2Im + ".jpg";
		document.getElementById("imCh3").src = "images/vocab/" + currentCatDir + "/" + choice3Im + ".jpg";
		document.getElementById("imCh4").src = "images/vocab/" + currentCatDir + "/" + choice4Im + ".jpg";

		document.getElementById("fbHi1").style.display = "none";
		document.getElementById("fbHi2").style.display = "none";
		document.getElementById("fbHi3").style.display = "none";
		document.getElementById("fbHi4").style.display = "none";

		document.getElementById("fbTxt1").innerHTML = "";
		document.getElementById("fbTxt2").innerHTML = "";
		document.getElementById("fbTxt3").innerHTML = "";
		document.getElementById("fbTxt4").innerHTML = "";

		document.getElementById("cellCh1").onclick = function () { chAnswer(0); };
		document.getElementById("cellCh1").oncontextmenu = function () { chAnswer(0); };
		document.getElementById("cellCh2").onclick = function () { chAnswer(1); };
		document.getElementById("cellCh2").oncontextmenu = function () { chAnswer(1); };
		document.getElementById("cellCh3").onclick = function () { chAnswer(2); };
		document.getElementById("cellCh3").oncontextmenu = function () { chAnswer(2); };
		document.getElementById("cellCh4").onclick = function () { chAnswer(3); };
		document.getElementById("cellCh4").oncontextmenu = function () { chAnswer(3); };
	}

	if (uMode == "read_choose") {
		document.getElementById("vocdisplay").innerHTML = vocArray[imgInd];
	}
	else if (uMode == "listen_choose") {
		audVoc.pause();
		audVoc.src = "audio/vocab/"+currentCatDir+"/"+vocArray[imgInd]+".mp3";
		audVoc.load();
		if (tablet==true) {
			if (penalty==true) {
				tickFast.pause();
				audVoc.play();
				setTimeout (function() {
					vocDuration = (audVoc.duration * 1000)-400;
				}, 500);
				setTimeout(function(){
					if (penalty==true) {
						tickFast.play();
					}
				}, vocDuration);
			}
			else {
				tick.pause();
				tock.pause();
				audVoc.play();
			}
		}
		else {
			audVoc.play();
		}
	}
	else if (uMode == "read_choose") {
	}
}

function playVocab() {
	audVoc.pause();
	if (penalty==true && tablet==true) {
		tickFast.pause();
		vocDuration = audVoc.duration * 1000;
		setTimeout(function(){
			if (penalty==true) {
				tickFast.play();
			}
		}, vocDuration);
	}
	audVoc.currentTime = 0;
	audVoc.play();
}

function chAnswer(ch) {

	if (finished != true) {
		var aIndex = inds[ch];
		var answer = vocArray[aIndex];
		if (answer == vocEx && finished == false) {
			newImage('yes');
		} else if (answer != vocEx && finished == false) {
			feedback(ch, answer);
		} else if (finished == "nearly") {
			finished = true;
			document.getElementById("yes_cell").style.display = "none";
			document.getElementById("no_cell").style.display = "none";
			document.getElementById("clear_cell").style.display = "none";
			document.getElementById("finishedButton").style.display = "inline";
			document.getElementById("controls_central").style.display = "table-cell";
			document.getElementById("b_replay").style.display = "none";
			if (answer == vocEx) {
				points++;
				document.getElementById("score").innerHTML = "Score: " + points;
			}
		}
	}

}

function feedback(ch, answer) {

	if (uMode == "read_choose" || uMode == "listen_choose") {
		var fBHi = "fbHi" + (ch + 1);
		var fbTxt = "fbTxt" + (ch + 1);
		var fbCell = "cellCh" + (ch + 1);

		document.getElementById(fBHi).style.display = "inline";
		document.getElementById(fbTxt).innerHTML = answer;
		document.getElementById(fbCell).onclick = "";
		document.getElementById(fbCell).oncontextmenu = "";

	}

	if (uMode == "look_choose") {
		var fBDiv = "ch" + (ch + 1);
		document.getElementById(fBDiv).className = "choiceCellFB";
		document.getElementById(fBDiv).onclick = "";
		document.getElementById(fBDiv).oncontextmenu = "";

	}
	if (uMode!="read_say"){
		recentErrors(answer);
		upcmnErrs(answer);
	}

	var errDate = new Date();
	var errTime=errDate.getTime();


	document.getElementById("timer").style.color = "#f60";
	document.getElementById("timer").style.borderColor = "#f60";
	if (penalty == false) {
		penalty = true;
		penaltyFinish=5000;
		initErrTime=errTime;
	} else {
		clearTimeout(penaltyTime);
		penaltyFinish=(penaltyFinish-(errTime-initErrTime)+5000);
		initErrTime=errTime;
	}
	penaltyTime = setTimeout(function() {
		document.getElementById("timer").style.color = "#fff";
		document.getElementById("timer").style.borderColor = "#393";
		penalty = false;
		if (!finished) {
			tickTock="tick";
		}
		audCtrls(tickFast, "pause");
		audCtrls(tickFast, "rewind");
	}, penaltyFinish);

	tickTock="pause";
	audCtrls(tickFast, "play");
}

function upcmnErrs(vocItem) {

	//This section checks for vocab items that cannot be filenames and substitutes them
	substVocItemInd = substArray.indexOf(vocItem);
	if (substVocItemInd !=-1) {
		vocItem = substArray[substVocItemInd+1];
	}

	if (vocItem!="") {
		vocItem = currentCatDir + "/" + vocItem;
		if (cmnErrs [0][0] == "") {
			cmnErrs[0] = [vocItem, 1];
		}
		else {
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
	}


	if (fbMode == "common") {
		var errTx2 = "";
		var errTx3 = "";
		var errIm1 = cmnErrs[0][0];
		var n = (cmnErrs[0][0]).indexOf("/") + 1;
		var errTx1 = (cmnErrs[0][0]).slice(n);

		// Substitute original text for altered
		substErrTx1Ind = substArray.indexOf(errTx1);
		if (substErrTx1Ind !=-1) {
			errTx1 = substArray[substErrTx1Ind-1];
		}
		errTx1 = errTx1+" ("+cmnErrs[0][1]+")";




		if (cmnErrs[1][0] != "") {
			var errIm2 = cmnErrs[1][0];
			n = (cmnErrs[1][0]).indexOf("/") + 1;
			errTx2 = (cmnErrs[1][0]).slice(n);

			// Substitute original text for altered
			substErrTx2Ind = substArray.indexOf(errTx2);
			if (substErrTx2Ind !=-1) {
				errTx2 = substArray[substErrTx2Ind-1];
			}
			errTx2 = errTx2+" ("+cmnErrs[1][1]+")";
		}


		if (cmnErrs[2][0] != "") {
			var errIm3 = cmnErrs[2][0];
			var n = (cmnErrs[2][0]).indexOf("/") + 1;
			errTx3 = (cmnErrs[2][0]).slice(n);

			// Substitute original text for altered
			substErrTx3Ind = substArray.indexOf(errTx3);
			if (substErrTx3Ind !=-1) {
				errTx3 = substArray[substErrTx3Ind-1];
			}
			errTx3 = errTx3+" ("+cmnErrs[2][1]+")";
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
	if (answer!=""){
		recErrIm[2] = recErrIm[1];
		recErrTx[2] = recErrTx[1];

		recErrIm[1] = recErrIm[0];
		recErrTx[1] = recErrTx[0];


		//This section checks for vocabulary items that cannot be filenames and substitutes them
		substAnswerInd = substArray.indexOf(answer);
		if (substAnswerInd !=-1) {
			answerIm = substArray[substAnswerInd+1];
		}
		else answerIm = answer;

		recErrIm[0] = currentCatDir + "/" + answerIm;
		recErrTx[0] = answer;
	}

		if (fbMode == "recent") {
		var errIm1 = recErrIm[0];
		var errTx1 = recErrTx[0];
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

	document.getElementById("errCell0").style.display = "table-cell";
	document.getElementById("errImg0").src = "images/vocab/" + errIm1 + ".jpg";
	document.getElementById("errTxt0").innerHTML = errTx1;

	if (errTx2 != "") {
		document.getElementById("errCell1").style.display = "table-cell";
		document.getElementById("errImg1").src = "images/vocab/" + errIm2 + ".jpg";
		document.getElementById("errTxt1").innerHTML = errTx2;
	}
	if (errTx3 != "") {
		document.getElementById("errCell2").style.display = "table-cell";
		document.getElementById("errImg2").src = "images/vocab/" + errIm3 + ".jpg";
		document.getElementById("errTxt2").innerHTML = errTx3;
	}
}

function activity(button){
	if (uMode=="read_say"){
		newSyllable(button);
	}
	else{
		newImage(button);
	}
}

function newSyllable(button) {
	if (button == "start") {
		document.getElementById("phonDisplay").style.fontSize = "780%";
		newCount();
		document.getElementById("b_help").style.display = "none";
		document.getElementById("b_reset").style.display = "block";
		document.getElementById("b_start").style.display = "none";
		document.getElementById("optDiv").style.display = "none";
		document.getElementById("contentSelect").style.display = "none";
		document.getElementById("yes_cell").style.display = "table-cell";
		document.getElementById("no_cell").style.display = "table-cell";
		document.getElementById("clear_cell").style.display = "table-cell";
		document.getElementById("controls_central").style.display = "none";
		document.getElementById("welcomeDiv").style.display = "none";
		document.getElementById("phonDisplay").style.display = "block";

	}
	else if (button == "yes") {
		points++;
	}
	else if (button == "clear") {
		points++;
		points++;
	}
	else if (button == "no") {
		feedback();
	}


	switch (currentPhonUnit) {
	case "phon1":
		unit1();
		break;
	case "phon2":
		unit2();
		break;
	case "phon3":
		unit3();
		break;
	case "phon4":
		unit4();
		break;
	case "phon5":
		unit5();
		break;
	case "phon6":
		unit6();
		break;
	case "phon7":
		unit7();
		break;
	case "phon8":
		unit8();
		break;
	case "phon9":
		unit9();
		break;
	case "phon10":
		unit10();
		break;
	}

	if (syll==prevSyll){
		newSyllable();
	}
	tabooCheck();
	prevSyll=syll;
	if (button=="ex"){
		document.getElementById("phonExample").innerHTML = syll;
	}
	else{
		document.getElementById("score").innerHTML = "Score: " + points;
		document.getElementById("phonDisplay").innerHTML = syll;
	}

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
	else if (vowel=="new"){
		vIndex=Math.floor(Math.random()*vNLen+(vLen-vNLen));
	}
	else {
		vIndex=vLen;
	}

	//set index of final consonant
	if (finalC=="all") {
		fIndex=Math.floor(Math.random()*fLen);
	}
	else if (finalC=="new") {
		fIndex=Math.floor(Math.random()*fNLen+(fLen-fNLen));
	}
	else {
		fIndex=fLen;
	}

	//alert (vSLen);
	//set index of "e" or "i" in case of "k" or "gu"
	if (vowel!="none") {
		vSpecIndex=Math.floor(Math.random()*vSLen);
	}
	else {
		vSpecIndex=vSLen;
	}
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
		else if ((fgraph=="nk"||fgraph=="ng"||fgraph=="nc")&&vgraph=="ee"){
			vgraph="e";
		}


		if (vgraph=="ee"||fgraph=="ck"||fgraph=="nk") {
			eCompGraph="";
		}
		else if (fgraph=="c"||fgraph=="k"||fgraph=="gu") {
			eCompGraph="e";
		}
		else {}

		syll=igraph.concat (vgraph,fgraph,eCompGraph);
	}

	function unit8() {

		setIndices (17,6,19,2,6,1,3);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];
		var eCompGraph=eCompArray[eCompIndex];

		if (igraph=="k"||igraph=="gu") {
			vgraph=vSpecArray[vSpecIndex];
		}

		//Matching middle vowel with final
		if ((fgraph=="ck")&&(vgraph=="ee"||eCompGraph=="e")) {
			fgraph="k";
		}
		else if (fgraph=="c" && vgraph=="ee") {
			fgraph="k";
		}
		else if (fgraph=="gu" && vgraph=="ee") {
			fgraph="g";
		}
		else if ((fgraph=="nk"||fgraph=="ng"||fgraph=="nc")&&vgraph=="ee"){
			vgraph="e";
		}

		//Compound vowel with "e" depending on final or "ee" vowel
		if (vgraph=="ee"||fgraph=="ck"||fgraph=="nk") {
			eCompGraph="";
		}
		else if (fgraph=="c"||fgraph=="k"||fgraph=="gu") {
			eCompGraph="e";
		}
		else {}

		syll=igraph.concat (vgraph,fgraph,eCompGraph);
	}

	function unit9() {

		setIndices (17,6,29,2,6,14,3);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];
		var eCompGraph=eCompArray[eCompIndex];

		if (igraph=="k"||igraph=="gu") {
			vgraph=vSpecArray[vSpecIndex];
		}

		//Matching middle vowel with final
		if ((fgraph=="ck")&&(vgraph=="ee"||eCompGraph=="e")) {
			fgraph="k";
		}
		else if (fgraph=="c" && vgraph=="ee") {
			fgraph="k";
		}
		else if (fgraph=="gu" && vgraph=="ee") {
			fgraph="g";
		}
		else if ((fgraph=="nk"||fgraph=="ng"||fgraph=="nc")&&vgraph=="ee"){
			vgraph="e";
		}

		//Compound vowel with "e" depending on final or "ee" vowel
		if (vgraph=="ee"||fgraph=="ck"||fgraph=="nk"||fgraph=="ft"||fgraph=="ld"||fgraph=="lk"||fgraph=="lp"||fgraph=="lt"||fgraph=="mp"||fgraph=="nd"||fgraph=="nt"||fgraph=="sp"||fgraph=="st") {
			eCompGraph="";
		}
		else if (fgraph=="c"||fgraph=="k"||fgraph=="gu") {
			eCompGraph="e";
		}
		else {}

		syll=igraph.concat (vgraph,fgraph,eCompGraph);
	}

	function unit10() {

		setIndices (32,6,29,15,6,14,3);

		var igraph=iArray[iIndex];
		var vgraph=vArray[vIndex];
		var fgraph=fArray[fIndex];
		var eCompGraph=eCompArray[eCompIndex];

		if (igraph=="k"||igraph=="gu") {
			vgraph=vSpecArray[vSpecIndex];
		}

		//Matching middle vowel with final
		if ((fgraph=="ck")&&(vgraph=="ee"||eCompGraph=="e")) {
			fgraph="k";
		}
		else if (fgraph=="c" && vgraph=="ee") {
			fgraph="k";
		}
		else if (fgraph=="gu" && vgraph=="ee") {
			fgraph="g";
		}
		else if ((fgraph=="nk"||fgraph=="ng"||fgraph=="nc")&&vgraph=="ee"){
			vgraph="e";
		}

		//Compound vowel with "e" depending on final or "ee" vowel
		if (vgraph=="ee"||fgraph=="ck"||fgraph=="nk"||fgraph=="ft"||fgraph=="ld"||fgraph=="lk"||fgraph=="lp"||fgraph=="lt"||fgraph=="mp"||fgraph=="nd"||fgraph=="nt"||fgraph=="sp"||fgraph=="st") {
			eCompGraph="";
		}
		else if (fgraph=="c"||fgraph=="k"||fgraph=="gu") {
			eCompGraph="e";
		}
		else {}

		syll=igraph.concat (vgraph,fgraph,eCompGraph);
	}



function selectRandomCat(){
	if (uMode!="listen_choose"){
		var catInd = Math.floor(Math.random() * availCats.length);
		currentCatDir=availCats[catInd];
		setVocArrays();
	}
	else {
		var catInd = Math.floor(Math.random() * availAudCats.length);
		currentCatDir=availAudCats[catInd];
		setVocArrays();
	}
}


function newImage(button) {
	if (button == "start") {
		newCount();
		document.getElementById("b_start").style.display = "none";
		document.getElementById("b_help").style.display = "none";
		document.getElementById("b_reset").style.display = "block";
		document.getElementById("optDiv").style.display = "none";
		document.getElementById("contentSelect").style.display = "none";
		document.getElementById("imageDiv").style.display="block";
		document.getElementById("welcomeDiv").style.display="none";
		if (uMode == "say_word") {
			document.getElementById("yes_cell").style.display = "table-cell";
			document.getElementById("no_cell").style.display = "table-cell";
			document.getElementById("clear_cell").style.display = "table-cell";
			document.getElementById("controls_central").style.display = "none";
		}
		if (uMode == "read_choose" || uMode == "listen_choose") {
			document.getElementById("imChoiceDiv").style.display = "block";
			document.getElementById("mainImage").src = "images/formatting/1000X597clear_spacer.png";
		}
		if (uMode == "look_choose"){
			document.getElementById("ch1").style.display = "table-cell";
			document.getElementById("ch2").style.display = "table-cell";
			document.getElementById("ch3").style.display = "table-cell";
			document.getElementById("ch4").style.display = "table-cell";
		}
		if (uMode == "listen_choose") {
			document.getElementById("b_replay").style.display = "inline";
		}
	}
	else if (button == "yes") {
		points++;
	}
	else if (button == "clear") {
		points++;
		points++;
	}
	else if (button == "no") {
		var answer = vocArray[pImgInd];
		feedback(0, answer);
	}
	document.getElementById("score").innerHTML = "Score: " + points;

	if (randomCats){
		selectRandomCat();
	}

	var imgInd = Math.floor(Math.random() * vocArray.length);
	if (imgInd == pImgInd) {
		newImage();
		return;
	}
	vocEx = vocArray[imgInd];

	//This section checks for vocabulary items that cannot be filenames and substitutes them
	substInd = substArray.indexOf(vocEx);
	if (substInd !=-1) {
		vocExIm = substArray[substInd+1];
	}
	else vocExIm = vocEx;

	pImgInd = imgInd;
	choices(imgInd);


	if (uMode == "look_choose" || uMode == "say_word") {
		document.getElementById("mainImage").src = "images/vocab/" + currentCatDir + "/" + vocExIm + ".jpg";
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












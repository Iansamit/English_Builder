var	activity_group ="vocab";
var	all_voc_array = new Array ("");
var anim_glow_on=false;
var	audArray = new Array("");
var	audDLRemaining;
var aud_rv_vol = 0.5;
var	audReady = new Array(false);
var	audVoc = new Audio ();
var	availCats = new Array("");
var	bingArray = new Array ("");
var	bingCalled = new Array ();
var	bingCorrect = new Array ();
var	bingEx = "";
var	bingExAud = "";
var	bingoPoints =50;
var	bingoTime = 0;
var	bingRepeat = 0;
var	bingSheetArray =new Array ();
var	bingTestArray = new Array ("");
var bing_setup=false;
var	bingWords = 25;
var	cmnErrs = new Array(["", 0], ["", 0], ["", 0]);
var	comCats = new Array ("actions", "animals", "body", "clothes", "describing", "food", "occupations", "places_and_transport", "school", "time");
var	comCatsBoxes = "closed";
var	countSet = 3;
var	countTime = 180;
var	currentBook = "";
var curr_attr = "audio";
var	curr_topic_dir = "actions";
var	curr_topic_title = "multi";
var curr_voc_topic = "multi";
var	currentDBEx = "";
var	currentLev = "K2";
var	currentNumUnit="num1";
var	currentPhonUnit="phon1";
var	d_B_ExArray=new Array (5,4,2,1);
var	d_B_Title= "Ben is Bad on the Bus";
var	DBExNum =0;
var	DBPageNum=1;
var	DBStartPage=1;
var	eCompArray=new Array ("e","");
var	eCompIndex;
var electron=false;
var	fArray=new Array("m","s","p","t","");
var	fbImInd = 0;
var	fbMode = "common";
var	finalC="all";
var	finAudio;
var	fIndex;
var	finished;
var	finWarning=true;
var	hideStatus="showBoth";
var	iArray=new Array("m","s","p","t","");
var	iIndex;
var	imChHeight = "270px";
var	imChWidth = "452px";
var	imgArray = new Array(new Image());
var	inds;
var	initC="all";
var	initErrTime=0;
var	lives=10;
var	livesPos="";
var	nIndex;
var	numOp0_9=true;
var	numOp0_99=true;
var	numOp12=false;
var	numOpAll=true;
var	numOpAll2=true;
var	numOpIrreg=false;
var	numOpIrreg2=false;
var	numOpReg=false;
var	numOpReg2=false;
var	numOpZero=true;
var onet_test=new Array();
var multi_part_item =1;
var onet_test_item =0;
var onet_test_set="onet_rand";
var onet_prev_item;
var onet_ready=false;
var	oSCont=true;
var	penalty = false;
var	penaltyFinish;
var	penaltyTime;
var	pImgInd;
var	points = 0;
var	pointsTxt ="";
var	prevSyll;
var	pronPoints = 0;
var	recErrIm = new Array("", "", "");
var	recErrTx = new Array("", "", "");
var	scoreSplit = false;
var	specCats = new Array ("asean", "days", "months", "stationery",  "location");
var	stopCount = false;
var	stopDL = false;
var	strikes = 0;
var	strikesAllowed = true;
var	substArray = new Array ("?", "question.mark", "a / the", "a.the" , "is / are",  "to.be", "is / am / are", "to.be", "be / is / am / are", "to.be", "do / does", "to.do", "go / goes", "to.go", "have / has", "to.have", "A and B are talking about XXXX.", "onet1", "A wants to 'XXX XXX XXX'.", "onet2", "XXXX has ## Baht. What can he buy?", "onet3", "Which word has the same sound as 'XXX'?", "onet4", "You want to buy XXXX and XXXX. How much do you pay?", "onet5", "You want to cook vegetarian food. What can you use for cooking?", "onet6", "Which pair has the different first consonant sound?", "onet7", "Look at the directory. Where can you find 'XXXX'?", "onet8", "Look at the table. Which of the following is correct?", "onet9", "Look at the map. Which sentence is correct?", "onet10", "Look at the pictures. What country are they from?", "onet11", "Which of the following is correct?", "onet12", "Which sentence describes the chart | graph?", "onet13", "Which sign means 'XXXX'?", "onet14", "Which chart | graph describes the sentence, 'XXX XXX'?", "onet15", "What are they doing?", "onet16", "What subject are they studying?", "onet17", "Where are they?", "onet18", "What is the missing word?", "onet19", "When you see this sign, you _____________.", "onet20");
var	syll;
var	tablet = false;
var	tabSylls = new Array ("fuck", "pis", "cock", "tit", "cunt");
var	tempArray = new Array;
var	tickFast;
var	tickTock="tick";
var timbreArray = new Array ("Ian");
var timbreInd=0;
var timbre_select="random";
var	timePenalty=true;
var	topicList="genVocab";
var	topics_all = new Array("actions", "asean", "animals", "beach", "clothes", "days", "easy", "describing", "finding game", "food", "free_time", "grammar", "health", "home", "months", "occupations", "people", "places_and_transport",  "location", "body", "school", "socialising", "stationery", "time", "weather", "onet_pass", "onet_cloze");
var topics_all_editable ="actions,animals,beach,clothes,easy,describing,finding game,food,free_time,grammar,health,home,occupations,people,places_and_transport,location,body,school,socialising,stationery,time,weather"
var topics_no_audio = new Array ("finding game", "location");
var topics_no_multi = new Array ("asean", "beach", "days", "easy", "finding game", "months", "stationery",  "location", "onet_inst", "onet_q_a", "onet_gq", "onet_soc", "onet_voc", "onet_phon", "onet_pass", "onet_cloze", "onet_full");
var topics_no_edit = ["asean", "days", "months"];
var topics_subsets = ["asean", "days",  "location", "months", "stationery"];
var topics_onet = new Array ("onet_voc", "onet_inst", "onet_q_a", "onet_gq", "onet_soc", "onet_phon", "onet_full");
var	uMode = "read_choose";
var undo_obj =  {};
var user_settings= {};
var user_changes=false;
var	vArray=new Array("a","i","o","");
var version_num="0.9200";
var	vIndex;
var	vocArray = new Array("close", "come", "cook", "count", "cry", "cut", "dig", "drink", "eat", "go", "jump", "open", "play", "read", "run", "sing", "sit", "sleep", "speak", "stand", "walk", "write");
var voc_table_state="topics";
var	vocEx="";
var voc_mode="default";
var	vowel="all";
var	vSpecArray=new Array("e","i","");
var	vSpecIndex;


if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
      if ( this === undefined || this === null ) {
        throw new TypeError( '"this" is null or not defined' );
  }
if (!localStorage.version) {
		localStorage.clear();
		localStorage.version=0.91;
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
	if (!localStorage.version) {
		localStorage.clear();
		localStorage.version=0.91;
	}
	document.onkeydown = function(event) {processKey(event);};
	window.ondragstart=function(){return false;};

	var thumbs = document.getElementsByClassName("volThumb");
	for (var i = 0; i < thumbs.length; i++) {
    	thumbs[i].addEventListener("touchstart", touch2Mouse);
    	thumbs[i].addEventListener("touchmove", touch2Mouse);
    	thumbs[i].addEventListener("touchend", touch2Mouse);
	}
	document.getElementById("optGrp_volume").addEventListener("touchmove", function(event){ event.stopPropagation(); event.preventDefault(); });
	document.getElementById("choiceTable").addEventListener("touchstart", function(event){ event.stopPropagation(); event.preventDefault(); });
	document.getElementById("imChoiceDiv").addEventListener("touchstart", function(event){ event.stopPropagation(); event.preventDefault(); });

	initAudio();
	initOptions();
	initUserVocab();
	resize();
	document.getElementById("version_display").innerHTML= version_num;
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
	plImg6.src = "images/vocab/titles/free_time.jpg";
	var plImg7 = new Image();
	plImg7.src = "images/vocab/titles/occupations.jpg";
	var plImg8 = new Image();
	plImg8.src = "images/vocab/titles/places_and_transport.jpg";
	var plImg9 = new Image();
	plImg9.src = "images/vocab/titles/school.jpg";
	var plImg10 = new Image();
	plImg10.src = "images/vocab/titles/time.jpg";
	var plImg11 = new Image();
	plImg11.src = "images/vocab/titles/clothes.jpg";
	var b_save_img = new Image();
	b_save_img.src = "images/buttons/save.png";
	b_save_img.style="width: 3.8em; vertical-align: middle;";
	
	selectLev("K2");
	
	setTimeout(function(){
		if (electron==false){
			audCtrls(startup, "play");
		}
		else{
			var ipc = require('electron').ipcRenderer
			ipc.send('tickVol', 0.6);
		}
		if (electron==true) {
			document.getElementById("bing_dl_notes_norm").style.display="none";
			document.getElementById("bing_dl_notes_electron").style.display="block";
			document.getElementById("bing_dl_normal").style.display="none";
			document.getElementById("bing_dl_electron").style.display="block";
		}
	},400);	
}


function touch2Mouse(e) {
	var theTouch = e.changedTouches[0];
	var mouseEv;

	switch(e.type) {
    	case "touchstart":
	    	mouseEv="mousedown";
    	break;  

	    case "touchend":
    		mouseEv="mouseup";
	    break;

	    case "touchmove":
    		mouseEv="mousemove";
   		break;

	    default: return;
	}

	var mouseEvent = document.createEvent("MouseEvent");
  	mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
  	theTouch.target.dispatchEvent(mouseEvent);

 	e.preventDefault();
 	e.stopPropagation();
}

function initOptions(){

	if (localStorage.settings) {

		var tempArr = new Array ("optGrp_vocab","optGrp_timer","optGrp_scoring","optGrp_feedback","optGrp_book","optGrp_controls","optGrp_volume");

		for (var i=0; i<tempArr.length; i++) {
			if (localStorage.getItem(tempArr[i])=="none"){
				optGrpDisplay(tempArr[i],document.getElementById(tempArr[i]+"_toggle"));
			}
		}

		if (localStorage.user_vocab){
			loadSetup("local");
		}
		if (localStorage.voc_mode) {
			setVocMode(localStorage.voc_mode);
		}
		if (localStorage.timbre_select) {
			setTimbreSelect(localStorage.timbre_select,document.getElementById("timbre_"+localStorage.timbre_select));
		}
		if (localStorage.countTime) {
			setCountDown((localStorage.countTime)/60);
		}
		if (localStorage.timePenalty) {
			selectTimePenalty(Boolean(Number(localStorage.timePenalty)));
		}
		if (localStorage.fbMode) {
			selectFB(localStorage.fbMode);
		}
		document.getElementById("errCell0").style.display = "none";

		if (localStorage.finWarning) {
			setFinWarning(Boolean(Number(localStorage.finWarning)));
		}
		if (localStorage.tAControls) {
			tAControls(localStorage.tAControls);
		}
	}
}

function initUserVocab (mode) {
	var vm=voc_mode;
	var lev=currentLev;
	var top=curr_topic_title;
	voc_mode="default";
	for (var i=1; i<7;i++) {
		if (!localStorage["topics_gen_P"+i] || mode=="no_check") {
			currentLev=("P"+i);
			setAvailCats();
			localStorage["topics_gen_P"+i] =availCats;
		}
		
		tempArray = localStorage["topics_gen_P"+i].split(",");
		currentLev=("P"+i);

		for (var j=0; j<tempArray.length;j++) {
			if (!localStorage["P"+i+"_"+tempArray[j]]  || mode=="no_check"){
				curr_topic_title=tempArray[j];
				setVocArrays();
				localStorage["P"+i+"_"+tempArray[j]] =vocArray;
			}
		}
	}

	if (!localStorage["topics_gen_K2"]  || mode=="no_check") {
		currentLev=("K2");
		setAvailCats();
		localStorage["topics_gen_K2"] =availCats;
		tempArray = localStorage["topics_gen_K2"].split(",");
		for (var k=0; k<tempArray.length;k++) {
			if (!localStorage["K2_"+tempArray[k]]  || mode=="no_check"){
				curr_topic_title=tempArray[k];
				setVocArrays();
				localStorage["K2_"+tempArray[k]] =vocArray;
			}
		}
	}

	setDisplays({imageDiv:"none"});
	tempArray.length=0;
	voc_mode=vm;
	if (mode=="no_check") {
		setVocMode('user');
		currentLev=lev;
		selectTopic(top);
		setVocChoiceTable("topics");
		setMsg("user_voc_reset_complete","success");
	}
}


function setOnetUserVocab () {
	var txt;
	var scr;

	localStorage.user_onet_vocab="";

	for (var i=0;i<vocArray.length;i++) {
		txt=vocArray[i].txt;
		src=vocArray[i].src;
		localStorage.user_onet_vocab+=txt + "|" + src + "#";
	}

	localStorage.user_onet_vocab = localStorage.user_onet_vocab.slice(0,-1);
}


function getOnetUserVocab () {
	var txt_val;
	var src_val;
	var tArray=[];
	var tArray2=[];
	var rArray=[];

	//vocArray=[];
	if (localStorage.user_onet_vocab && localStorage.user_onet_vocab!="") {
		tArray=localStorage.user_onet_vocab.split("#");
		for (var i=0; i<tArray.length; i++) {
			tArray2=tArray[i].split("|");

			txt_val=tArray2[0];
			if (txt_val.indexOf(",")!= -1) {
				txt_val=txt_val.split(",");
			}
			src_val=tArray2[1];
			if (src_val.indexOf(",")!= -1) {
				src_val=src_val.split(",");
			}
			rArray[i]={txt: txt_val, src: src_val};
		}
		return rArray;
	}
	else {
		return [];
	}
}


function processKey(ev) {

	if (document.getElementById("b_start").style.display == "block" && ev.keyCode==32) {
		activity("start");
	}
	else if (finished==true && ev.keyCode==27) {
		audCtrls(aclick, "play");
		resetScore();
	}
	else if (ev.keyCode==73 && ev.ctrlKey && electron) {
		require('remote').getCurrentWindow().toggleDevTools();
	}
	else if (finished==false || finished=="nearly") {
		switch (uMode) {
			case "say_word":
			case "read_say":
			case "numbers":
				if (oSCont==true){
					switch (ev.keyCode) {
						case (39):
							activity("yes");
							audCtrls(aclick, "play");
							break;
						case 40:
							activity("clear");
							audCtrls(aclick, "play");
							break;
						case 37:
							activity("no");
							audCtrls(aclick, "play");
							break;
						case 27:
							audCtrls(aclick, "play");
							resetScore();
							break;							
					}
				}
				break;
			case "read_choose":
			case "listen_choose":
				switch  (ev.keyCode) {
					case 65:
						ev.preventDefault();
						chAnswer(0);
						audCtrls(aclick, "play");
						break;
					case 222:
						ev.preventDefault();
						chAnswer(1);
						audCtrls(aclick, "play");
						break;
					case 90:
						ev.preventDefault();
						chAnswer(2);
						audCtrls(aclick, "play");
						break;
					case 191:
						ev.preventDefault();
						chAnswer(3);
						audCtrls(aclick, "play");
						break;
					case 27:
						ev.preventDefault();
						audCtrls(aclick, "play");
						resetScore();
						break;
					case 32:
						ev.preventDefault();
						if (uMode=="listen_choose") {
							playVocab();
						}
				}
				break;
			case "look_choose":
			case "book_trans":
				switch  (ev.keyCode) {
					case 49:
						chAnswer(0);
						audCtrls(aclick, "play");
						break;
					case 50:
						chAnswer(1);
						audCtrls(aclick, "play");
						break;
					case 51:
						chAnswer(2);
						audCtrls(aclick, "play");
						break;
					case 52:
						chAnswer(3);
						audCtrls(aclick, "play");
						break;
					case 27:
						audCtrls(aclick, "play");
						resetScore();
				}
				break;
			case "voc_bingo":
			case "phon_bingo":
				switch  (ev.keyCode) {
					case 27:
						audCtrls(aclick, "play");
						resetScore();
						break;
					case 32:
						playVocab();
				}
		}
	}
}

function resize() {
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var h = Math.floor((w/1600)*780);


	var bodFontsize = Math.floor((w / 1600) * 60);
	document.body.style.cssText = "background: none repeat scroll 0% 0% rgb(0, 0, 0); font: " + bodFontsize + "px 'Nunito',sans-serif;";
	document.getElementById("outerDiv").style.width = w+"px";
	document.getElementById("outerDiv").style.height = h+"px";

	var x = Math.floor(w * 0.26 * 597 / 1000) + "px";
	if (document.getElementById("fbTxt1")){
		document.getElementById("fbTxt1").style.height = x;
		document.getElementById("fbTxt2").style.height = x;
		document.getElementById("fbTxt3").style.height = x;
		document.getElementById("fbTxt4").style.height = x;
	}
}


function attrResize(){
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	var bodFontsize = Math.floor((w / 1600) * 60);
	document.body.style.cssText = "font: " + bodFontsize + "px 'Nunito',sans-serif;";
}


function initAudio() {
	if (window.Audio) {
		finAudio = new Audio("audio/doom_bell.mp3");
		var mp3Check = finAudio.canPlayType("audio/mp3");
		if (mp3Check != "") {
			tickFast = new Audio("audio/clock_ticking_fast.mp3");
			tickFast.loop = true;
			tick = new Audio("audio/tick_slow.mp3");
			tock = new Audio("audio/tock_slow.mp3");
			aclick = new Audio("audio/click.mp3");
			aswitch = new Audio("audio/switch.mp3");
			fanfare = new Audio("audio/fanfare.mp3");
			msg_sound = new Audio ("audio/msg_sound.mp3");
			success = new Audio ("audio/correct.mp3");
			startup= new Audio ("audio/startup.mp3");
			warning= new Audio ("audio/warning_bells.mp3");
			cheer= new Audio ("audio/cheer.mp3");
			dot_ben_fb= new Audio ();
		} 

		function loadRV() {
			console.log("Trying to load RV");
			inject.js('https://code.responsivevoice.org/responsivevoice.js', function() {
				if (typeof responsiveVoice!="undefined"){
					clearInterval(net_check);
					console.log("RV loaded");

					document.getElementById("vox_Ian_toggle").style.display="table-cell";
					document.getElementById("vox_UK English Female_toggle").style.display="table-cell";
					document.getElementById("vox_UK English Male_toggle").style.display="table-cell";
					document.getElementById("vox_US English Female_toggle").style.display="table-cell";
					document.getElementById("vox_none").style.display="none";					
					if (localStorage.timbreArray){
						timbreArray.length=0;
						
						timbreArray = localStorage.timbreArray.split(",");

					}
					else {
						timbreArray= new Array ("US English Female","UK English Female","UK English Male","Ian");
					}

					for (var i=0;i<timbreArray.length;i++){
						document.getElementById("vox_"+timbreArray[i]+"_toggle").className="optSelected";
					}



					if (localStorage.vox){
						adjustVolume("vox",localStorage.vox*10);
						document.getElementById("sli_vox").style.top=((1-localStorage.vox)*5)+"em";
					}
				}
				else {
					console.log("RV load failed");
				}
			});
		}
		
		var net_check =setInterval(function(){
			loadRV();
		},60000);
		loadRV();

		if (!localStorage.music){
			localStorage.setItem("music", 0.45);
			localStorage.setItem("clicks", 0.23);
			localStorage.setItem("ticktock", 0.27);
			localStorage.setItem("ian", 0.42);
			localStorage.setItem("vox", 0.65);
			localStorage.setItem("bells", 0.65);
		}
		if (!localStorage.dot_ben_fb) {
			localStorage.setItem("dot_ben_fb", 0.65);
		}

		adjustVolume("music",localStorage.music*10);
		document.getElementById("sli_music").style.top=((1-localStorage.music)*5)+"em";

		adjustVolume("clicks",localStorage.clicks*10);
		document.getElementById("sli_clicks").style.top=((1-localStorage.clicks)*5)+"em";

		adjustVolume("ticktock",localStorage.ticktock*10);
		document.getElementById("sli_ticktock").style.top=((1-localStorage.ticktock)*5)+"em";

		adjustVolume("ian",localStorage.ian*10);
		document.getElementById("sli_ian").style.top=((1-localStorage.ian)*5)+"em";

		adjustVolume("bells",localStorage.bells*10);
		document.getElementById("sli_bells").style.top=((1-localStorage.bells)*5)+"em";

		adjustVolume("dot_ben_fb",localStorage.dot_ben_fb*10);
		document.getElementById("sli_dot_ben_fb").style.top=((1-localStorage.dot_ben_fb)*5)+"em";
		
		// Code below could replace responsiveVoice code if/when other browsers get their act together!!!
		/*if (window.speechSynthesis) {
			setTimeout(function(){
				voices = window.speechSynthesis.getVoices();
				if (voices.length>0){
					utterance = new SpeechSynthesisUtterance();
					utterance.rate = 0.7;
					adjustVolume("vox",Math.floor(localStorage.vox*10));
					document.getElementById("sli_vox").defaultValue =Math.floor(localStorage.vox*10);
				}
				else {
					timbreArray.length=0;
					timbreArray[0]="Ian";
					document.getElementById("vox_Ian_toggle").style.display="none";
					document.getElementById("vox_UK English Female_toggle").style.display="none";
					document.getElementById("vox_UK English Male_toggle").style.display="none";
					document.getElementById("vox_US English_toggle").style.display="none";
					document.getElementById("vox_none").style.display="table-cell";
				 }
			},500);
			}
			else {
			  timbreArray.length=0;
			  timbreArray[0]="Ian";
			  document.getElementById("vox_Ian_toggle").style.display="none";
			  document.getElementById("vox_UK English Female_toggle").style.display="none";
			  document.getElementById("vox_UK English Male_toggle").style.display="none";
			  document.getElementById("vox_US English_toggle").style.display="none";
			  document.getElementById("vox_none").style.display="table-cell";
		}*/
	}
	else {
		document.location.href="old_browser.html";
	}
}

function audCtrls(aud, cont, param) {
	if (window.Audio) {
		if (cont == "play") {
			aud.currentTime = 0;
			aud.play();
		}
		else if (cont == "pause") {
			aud.pause();
		}
		else if (cont == "rewind") {
			aud.currentTime = 0;
		}
		else if (cont == "volume") {
			aud.volume = param;
		}
	}
}

function adjustVolume(aud,vol){

	switch (aud){
		case "music":
			audCtrls(fanfare,"volume",(vol*0.1));
			audCtrls(startup,"volume",(vol*0.1));
			document.getElementById("disp_music").innerHTML= Math.floor(vol*10);
		break;
		case "clicks":
			audCtrls(aclick,"volume",(vol*0.1));
			audCtrls(aswitch,"volume",(vol*0.1));
			document.getElementById("disp_clicks").innerHTML= Math.floor(vol*10);
		break;
		case "ticktock":
			audCtrls(tickFast,"volume",(vol*0.1));
			audCtrls(tick,"volume",(vol*0.1));
			audCtrls(tock,"volume",(vol*0.1));
			document.getElementById("disp_ticktock").innerHTML= Math.floor(vol*10);
		break;
		case "bells":
			audCtrls(warning,"volume",(vol*0.05));
			audCtrls(finAudio,"volume",(vol*0.1));
			document.getElementById("disp_bells").innerHTML= Math.floor(vol*10);
		break;
		case "dot_ben_fb":
			audCtrls(dot_ben_fb,"volume",(vol*0.1));
			document.getElementById("disp_dot_ben_fb").innerHTML= Math.floor(vol*10);
		break;
		case "ian":
			audVoc.volume=(vol*0.1);
			document.getElementById("disp_ian").innerHTML= Math.floor(vol*10);
		break;
		case "vox":
			aud_rv_vol=(vol*0.1);
			document.getElementById("disp_vox").innerHTML= Math.floor(vol*10);
			//utterance.volume =(vol*0.1);
		break;
	}
}


function chFeature() {
	isSupp = finAudio.canPlayType("audio/ogg");
	if (isSupp == "") {
		isSupp = "No";
	}
	alert(isSupp);
}

function optGrpDisplay (group,caller){
	if (document.getElementById(group).style.display != "none"){
		document.getElementById(group).style.display = "none";
		caller.className="optGrpSelect";
	}
	else {
		document.getElementById(group).style.display = "block";
		caller.className="optSelected";
		document.getElementById(group).scrollIntoView();
	}
}


function optionsDiv(disp) {

	if (disp=="block") {
		setDisplays ({phonUSelect:"none",vocSelect:"none",numUSelect:"none",readerSelect:"none",ONETSelect:"none",optDiv:"block"});
	}
	else if (activity_group=="phonics") {
		setDisplays ({phonUSelect:"table",optDiv:"none"});
	}
	else if (activity_group=="numbers") {
		setDisplays ({numUSelect:"table",optDiv:"none"});
	}
	else if (activity_group=="vocab"){
		setDisplays ({vocSelect:"block",optDiv:"none"});
	}
	else if (activity_group=="readers"){
		setDisplays ({readerSelect:"block",optDiv:"none"});
	}
	else if (activity_group=="onet"){
		setDisplays ({ONETSelect:"block",optDiv:"none"});
	}
	if (disp!="block") {
		localStorage.setItem("settings", "stored");
		localStorage.setItem("music", fanfare.volume);
		localStorage.setItem("clicks", aclick.volume);
		localStorage.setItem("ticktock", tick.volume);
		localStorage.setItem("dot_ben_fb", dot_ben_fb.volume);
		localStorage.setItem("ian", audVoc.volume);
		localStorage.setItem("vox", aud_rv_vol);
		localStorage.setItem("bells", finAudio.volume);
		localStorage.setItem("optGrp_vocab", document.getElementById("optGrp_vocab").style.display);
		localStorage.setItem("optGrp_timer", document.getElementById("optGrp_timer").style.display);
		localStorage.setItem("optGrp_scoring", document.getElementById("optGrp_scoring").style.display);
		localStorage.setItem("optGrp_feedback", document.getElementById("optGrp_feedback").style.display);
		localStorage.setItem("optGrp_book", document.getElementById("optGrp_book").style.display);
		localStorage.setItem("optGrp_controls", document.getElementById("optGrp_controls").style.display);
		localStorage.setItem("optGrp_volume", document.getElementById("optGrp_volume").style.display);
		localStorage.setItem("voc_mode", voc_mode);
		localStorage.setItem("timbre_select", timbre_select);
		localStorage.setItem("countTime", countTime);
		localStorage.setItem("timePenalty", Number(timePenalty));
		localStorage.setItem("fbMode", fbMode);
		localStorage.setItem("finWarning", Number(finWarning));

		if (typeof responsiveVoice!="undefined") {
			localStorage.timbreArray= timbreArray;
		}
	}
}

function showWelcome(){
	resetScore();
	setDisplays ({welcomeDiv:"block",attributionDiv:"none",imageDiv:"none",phonDisplay:"none",contentSelect:"none"});
}

function showAttribution(caller){
	if (caller=="open"){
		setDisplays({welcomeDiv:"none", attributionDiv:"block"});
		document.getElementById("att_table").data="attribution/audio.html";
	}
	else{
		
		document.getElementById("attr_"+curr_attr).className="attrSelect";
		document.getElementById("att_table").data="attribution/"+caller+".html";
		document.getElementById("attr_"+caller).className="attrSelected";
		document.getElementById("attr_title").innerHTML="Attribution: "+document.getElementById("attr_"+caller).innerHTML;
		curr_attr=caller;
	}
}

function categoryDiv(disp) {
	resetScore();
	setDisplays ({contentSelect:disp,welcomeDiv:"none",attributionDiv:"none"});
	if (uMode!="read_say" && uMode!="phon_bingo" && uMode!="numbers" && uMode!="num_bingo" && uMode!="phon_bingo_class") {
		setDisplays ({imageDiv:"block"});
	}
	if (disp=="block"){
		if (anim_glow_on==false) {
			animateGlow();
			anim_glow_on=true;
		}

	}
}

function tAControls (mode) {
	if (mode=="both") {
		document.getElementById("noButton").style.visibility = "visible";
		document.getElementById("clearButton").style.visibility = "visible";
		document.getElementById("yesButton").style.visibility = "visible";
		document.getElementById("contBoth").className="optSelected";
		document.getElementById("contOS").className="optSelect";
		document.getElementById("contKB").className="optSelect";
		oSCont=true;
	}
	if (mode=="os") {
		document.getElementById("noButton").style.visibility = "visible";
		document.getElementById("clearButton").style.visibility = "visible";
		document.getElementById("yesButton").style.visibility = "visible";
		document.getElementById("contBoth").className="optSelect";
		document.getElementById("contOS").className="optSelected";
		document.getElementById("contKB").className="optSelect";
		oSCont=false;
	}
	else if (mode=="kb"){
		document.getElementById("noButton").style.visibility = "hidden";
		document.getElementById("clearButton").style.visibility = "hidden";
		document.getElementById("yesButton").style.visibility = "hidden";
		document.getElementById("contBoth").className="optSelect";
		document.getElementById("contOS").className="optSelect";
		document.getElementById("contKB").className="optSelected";
		oSCont=true;
	}
	localStorage.setItem("tAControls", mode);
}

		
function countDown(){
	var ipc = require('electron').ipcRenderer
	tick = new Audio("audio/tick_slow.mp3");
	tock = new Audio("audio/tock_slow.mp3");
	audCtrls(tick,"volume",0.1);
	audCtrls(tock,"volume",0.1);
	audCtrls(tick,"play");
	setTimeout(function() {document.getElementById("counter").innerHTML=4; audCtrls(tock,"pause");audCtrls(tick,"play");}, 1000);
	setTimeout(function() {document.getElementById("counter").innerHTML=3; audCtrls(tick,"pause");audCtrls(tock,"play");ipc.send('nearly');}, 2000);
	setTimeout(function() {document.getElementById("counter").innerHTML=2; audCtrls(tock,"pause");audCtrls(tick,"play");}, 3000);
	setTimeout(function() {document.getElementById("counter").innerHTML=1; audCtrls(tick,"pause");audCtrls(tock,"play");}, 4000);
	setTimeout(function() {document.getElementById("counter").innerHTML=0;ipc.send('finished');}, 5000);
}

function newCount() {
	finished = false;
	stopCount = false;
	tickTock="tick";
	countDown();
	function countDown() {
		if (stopCount == false) {
			countTime--;
			
			if (uMode=="phon_bingo" || uMode=="voc_bingo") {
				if (bingoTime>6){
					bingoTime=0;
					bingoPoints--;
					document.getElementById("bingoScore").innerHTML = "Bingo<p>"+bingoPoints+"</p>";
				}
				else {
					if (penalty) {
					bingoTime++;
					}
					bingoTime++;
				}
			}
			var remMin = Math.floor(countTime / 60);
			var remSec = countTime % 60;
			//add a zero in front of numbers<10
			remMin = leadZero(remMin);
			remSec = leadZero(remSec);
			document.getElementById('timer').innerHTML = "&nbsp;" + remMin + ":" + remSec + "&nbsp;";
			if (countTime > 0) {
				if (tickTock=="tick" ) {
					audCtrls(tock, "pause");
					audCtrls(tick, "play");
					tickTock="tock";
				}
				else if (tickTock=="tock") {
					audCtrls(tick, "pause");
					audCtrls(tock, "play");
					tickTock="tick";
				}
				if (finWarning==true && (penalty==false&& (countTime == 8 || countTime == 6 || countTime == 4 || countTime == 2))
					|| (penalty==true && (countTime== 16 || countTime== 12 || countTime == 8 || countTime == 4))){
					audCtrls(warning, "play");
				}
				if (penalty) {
					setTimeout(function() {countDown();}, 500);
				}
				else{
					setTimeout(function() {countDown();}, 1000);
				}
			} else {
				if (finWarning==true){
					audCtrls(tickFast, "pause");
					audCtrls(finAudio, "play");
				}
				finished = "nearly";
				setTimeout(function() {
					if (document.getElementById("b_reset").style.display != "none"){
						setDisplays ({yes_no_div:"none",controls_central:"block",finishedButton:"block",b_replay:"none"});
					}
					audCtrls(tickFast, "pause");
					finished = true;
				}, 3000);
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
	if (min<11 && countSet<11) {
		document.getElementById("cDS"+countSet).className = "optSelect";
		countSet = min;
  	}
	countTime = min*60;	
	var initMin = Math.floor(countTime / 60);
	initMin = leadZero(initMin);
	document.getElementById('timer').innerHTML = initMin + ":00";
 	if (min<11) {
		document.getElementById("cDS"+min).className = "optSelected";
  	}
}


function resetScore(caller) {

	if (caller && caller.id=="b_reset") {
		audCtrls(fanfare, "play");
	}

	if (vocArray.length<4 && localStorage["topics_gen_" + currentLev].split(",").indexOf(curr_topic_title) != -1 && uMode!="phon_bingo_class") {
		modUserAvailTopics(curr_topic_title,"delete");
	}

	points = 0;
	pronPoints = 0;
	stopCount = true;
	finished = true;
	penalty=false;
	DBExNum=0;
	DBPageNum=DBStartPage;

	audCtrls(tickFast, "pause");
	setTimeout(function() {
		audCtrls(tickFast, "rewind");
	}, 100);

	
	setActivityDisplays();
	setDisplays({finishedButton:"none",b_replay:"none",imChoiceDiv:"none",b_start:"block",b_reset:"none",b_help:"block",controls_central:"block", b_submit:"none"});
	document.getElementById("timer").style.color = "#fff";
	document.getElementById("score").innerHTML = "Score: 0";
	document.getElementById("correct").innerHTML = "Words: " + points;
	document.getElementById("clear").innerHTML = "Clear: " + pronPoints;
	document.getElementById("total").innerHTML = "Total: " + 0;

	setDisplays ({back_fwd_div:"none",yes_no_div:"none",bing_class_controls:"none", d_B_Score:"none",order_div:"none",hide_div:"none",voc_tab:"none",mainImage:"inline",voc_choice_controls:"none",
				lev_tab_div:"none",user_settings_data:"none",left_pane:"block",innerDiv:"none",ch1:"none",ch2:"none",ch3:"none",ch4:"none"});
	document.getElementById("voc_tab_div").style.marginLeft="15%";

	if (curr_topic_title == "multi") {
		document.getElementById("mainImage").src = "images/vocab/titles/multi.jpg";
	}
	else if (uMode=="book_trans"){
		document.getElementById("mainImage").src = "images/vocab/titles/" + currentBook + ".jpg";
		document.getElementById("book_overlay").src = "images/formatting/d_B_spacer.png";
		document.getElementById("book_trans_fb_img").src = "images/labels/dot_correct.jpg";
	}
  	else if (curr_topic_title=="onet_full") {
		if (onet_ready==false){
			setupONET(onet_test.length);
			if (onet_test_set=="onet_rand"){
				SetOnetFullRand();
			}
		}
		document.getElementById("mainImage").src = "images/vocab/titles/" + curr_topic_title + ".jpg";
		setCountDown(50);
	}
	else if (curr_topic_dir!="dot_and_Ben"){
		document.getElementById("mainImage").src = "images/vocab/titles/" + curr_topic_title + ".jpg";
	}
	else {
		document.getElementById("mainImage").src = "images/vocab/titles/" + currentBook + ".jpg";
	}
	if (curr_topic_title!="onet_full") {
		setDisplays ({choice_onet:"none"});
		setCountDown(countSet);
  	}
	document.getElementById("phonDisplay").style.fontSize="300%";
	if (uMode=="read_say" || uMode=="phon_bingo" || uMode=="phon_bingo_class") {
		document.getElementById("phonDisplay").innerHTML = "</br>Phonics Unit <img style='width:1em' src='images/labels/l_"+currentPhonUnit+"_p.png' />";
	}
	else if (uMode=="numbers" || uMode == "num_bingo"){
		document.getElementById("phonDisplay").innerHTML = "</br>Numbers Unit <img style='width:1em' src='images/labels/l_"+currentNumUnit+"_p.png' />";
	}

	lives=10;
	for (i = 1; i < 11; i++) {
		document.getElementById("life"+livesPos+i).src="images/labels/lives_rem.png";
	}
	if (uMode=="phon_bingo" || uMode=="voc_bingo" || uMode=="num_bingo" || uMode=="phon_bingo_class") {
		for (i = 0; i < 24; i++) {
			document.getElementById("bing"+i+"X").src="images/formatting/30clear_spacer.png";
		}
		bingCalled = new Array ();
	    bingCorrect = new Array ();
	    bingEx = "";
	    bingExAud="";
	    bingRepeat = 0;
	    bingoPoints =50;
	    bingoTime=0;
	    bingWords=25;
	    setDisplays ({bingoDisplay:"none",bingo_overlay:"none",bing_class_display:"none",imageDiv:"none"});
		document.getElementById("bingoScore").innerHTML = "Bingo<p>50</p>";
  		document.getElementById("bingoWords").innerHTML = "Words<p>25<p>";
  		if (uMode=="phon_bingo" || uMode=="phon_bingo_class"){
  			setBingoArrays();
  			setDisplays ({phonDisplay:"block"});
  		}
  		else if (uMode=="num_bingo"){
  			setNumBingoSheet();
  			setDisplays ({phonDisplay:"block"});
  		}
  		else {
  			setDisplays ({imageDiv:"block"});
  			setVocBingSheet();
  		}
	}
	pointsTxt="";
}


function b_press(b) {

	var w = (parseFloat(b.style.width)*0.96);
	if (b.style.width.substr(-1)=="%") {
		var s ="%";
	}
	else {
		var s = "em";
	}
	b.style.width = w +s;
	if (b.id && b.id!="b_replay" && b.id!="b_start" &&b.id!="bing_play_button") {
		audCtrls(aclick, "play");
	}

	b.onmouseup = function () {
		w = (parseFloat(b.style.width)/0.96);
		b.style.width = w +s;
		b.onmouseout = function () {};
	};
	b.onmouseout = function () {
		w = (parseFloat(b.style.width)/0.96);
		b.style.width = w +s;
		b.onmouseout = function () {};
	};
	b.ontouchend = function () {
		w = (parseFloat(b.style.width)/0.96);
		b.style.width = w +s;
		b.onmouseout = function () {};
		b.click();
	};
}


function selectPhonUnit(unit) {
	if (unit != currentPhonUnit) {
	var prevUnit = currentPhonUnit;
		audCtrls(aclick, "play");
		document.getElementById("b_" + unit).style.width = "94%";
		document.getElementById("b_" + unit).style.border = "0.3em outset";
		document.getElementById("on_" + unit).style.display = "inline";
		document.getElementById("b_"+currentPhonUnit).style.width = "100%";
		document.getElementById("b_"+currentPhonUnit).style.border = "none";
		document.getElementById("on_"+currentPhonUnit).style.display = "none";
		document.getElementById("panelCont").src="images/buttons/b_"+unit+".png";
		document.getElementById("panelCont2").src="images/buttons/b_"+unit+".png";
		document.getElementById("panelLev").src="images/labels/l_"+unit+"_p.png";
		document.getElementById("panelLev2").src="images/labels/l_"+unit+"_p.png";

		currentPhonUnit=unit;
		document.getElementById("phonDisplay").style.fontSize = "300%";
		setPhonicsArrays();
		document.getElementById("b_initC").src="images/buttons/b_all.png";
		initC="all";
		document.getElementById("b_vowel").src="images/buttons/b_all.png";
		vowel="all";
		document.getElementById("b_finalC").src="images/buttons/b_all.png";
		finalC="all";
		newSyllable("ex");
		resetScore();
	}
}

function selectNumUnit(unit) {
	if (unit != currentNumUnit) {
	var prevUnit = currentNumUnit;
		audCtrls(aclick, "play");
		document.getElementById("b_" + unit).style.width = "94%";
		document.getElementById("b_" + unit).style.border = "0.3em outset";
		document.getElementById("on_" + unit).style.display = "inline";
		document.getElementById("b_"+currentNumUnit).style.width = "100%";
		document.getElementById("b_"+currentNumUnit).style.border = "none";
		document.getElementById("on_"+currentNumUnit).style.display = "none";
		document.getElementById("opt_"+currentNumUnit).style.display = "none";
		document.getElementById("opt_"+unit).style.display = "table-cell";
		document.getElementById("panelCont").src="images/buttons/b_"+unit+".png";
		document.getElementById("panelCont2").src="images/buttons/b_"+unit+".png";
		document.getElementById("panelLev").src="images/labels/l_"+unit+"_p.png";
		document.getElementById("panelLev2").src="images/labels/l_"+unit+"_p.png";

		currentNumUnit=unit;
		document.getElementById("phonDisplay").style.fontSize = "300%";
		resetScore();
	}
}

function numOpSet(button) {

	switch (button) {
		case "numOpZero":
		case "numOp12":
		case "numOp0_9":
		case "numOp0_99":
			if (window[button]==true) {
				document.getElementById("b_" + button).src = "images/buttons/no_button.png";
				window[button]=false;
			}
			else {
				document.getElementById("b_" + button).src = "images/buttons/yes_button.png";
				window[button]=true;
			}
			break;
		case "numOpAll":
		case "numOpReg":
		case "numOpIrreg":
			document.getElementById("b_numOpAll").src = "images/buttons/no_button.png";
			document.getElementById("b_numOpReg").src = "images/buttons/no_button.png";
			document.getElementById("b_numOpIrreg").src = "images/buttons/no_button.png";
			document.getElementById("b_" + button).src = "images/buttons/yes_button.png";
			numOpAll=false;
			numOpReg=false;
			numOpIrreg=false;
			window[button]=true;
			break;
		case "numOpAll2":
		case "numOpReg2":
		case "numOpIrreg2":
			document.getElementById("b_numOpAll2").src = "images/buttons/no_button.png";
			document.getElementById("b_numOpReg2").src = "images/buttons/no_button.png";
			document.getElementById("b_numOpIrreg2").src = "images/buttons/no_button.png";
			document.getElementById("b_" + button).src = "images/buttons/yes_button.png";
			numOpAll2=false;
			numOpReg2=false;
			numOpIrreg2=false;
			window[button]=true;
			break;
	}
}

function setVocMode(mode) {
	if (mode==voc_mode) {
		return;
	}

	if (mode=="default") {
		document.getElementById("voc_mode_def").className="optSelected";
		document.getElementById("voc_mode_user").className="optSelect";
	}
	else {
		document.getElementById("voc_mode_def").className="optSelect";
		document.getElementById("voc_mode_user").className="optSelected";
	}
	voc_mode=mode;
	if (curr_topic_title=="multi") {
		setAllVocArray();
	}
	else if (curr_topic_title=="onet_voc") {
		if (voc_mode=="user") {
			vocArray=getOnetUserVocab();
		}
		else {
			setOnetVocab();	
		}
	}
	else {
		setVocArrays();
	}
	setTopicButtons();
}

function iSet () {
	if (parseInt(currentPhonUnit.substring(4))<10 || parseInt(currentPhonUnit.substring(4))>11) {
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
	}
	else {
		if (initC=="all"){
			document.getElementById("b_initC").src="images/buttons/b_cluster.png";
			initC="cluster";
		}
		else if (initC=="cluster"){
			document.getElementById("b_initC").src="images/buttons/b_single.png";
			initC="single";
		}
		else if (initC=="single"){
			document.getElementById("b_initC").src="images/buttons/b_none.png";
			initC="none";
		}
		else if (initC=="none"){
			document.getElementById("b_initC").src="images/buttons/b_all.png";
			initC="all";
		}
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
	if (parseInt(currentPhonUnit.substring(4))<9) {
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
	}
	else {
		if (finalC=="all"){
			document.getElementById("b_finalC").src="images/buttons/b_cluster.png";
			finalC="cluster";
		}
		else if (finalC=="cluster"){
			document.getElementById("b_finalC").src="images/buttons/b_single.png";
			finalC="single";
		}
		else if (finalC=="single"){
			document.getElementById("b_finalC").src="images/buttons/b_none.png";
			finalC="none";
		}
		else if (finalC=="none"){
			document.getElementById("b_finalC").src="images/buttons/b_all.png";
			finalC="all";
		}
	}
	newSyllable("ex");
}

function animateGlow() {

	var glow_img1=document.getElementById("b_" + uMode+"_gl1");
	var glow_img2=document.getElementById("b_" + uMode+"_gl2");
	var fade_in_opacity=0;
	var fade_out_opacity=10;

	if (glow_img1.style.opacity==1) {
		for (i = 0; i < 11; i++) {
	      setTimeout(function(){
	      	fadeIn(glow_img2);
	      	fadeOut(glow_img1);
	      },150*i);
	    }
	}
	else {
		for (i = 0; i < 11; i++) {
	      setTimeout(function(){
	      	fadeIn(glow_img1);
	      	fadeOut(glow_img2);
	      },150*i);
	    }
	}


 	function fadeOut(img_out) {
    	img_out.style.opacity = fade_out_opacity/10;
    	fade_out_opacity--;
    }
    function fadeIn(img_in) {
    	img_in.style.opacity =fade_in_opacity/10;
    	fade_in_opacity ++;
    }

	if (document.getElementById("contentSelect").style.display == "block") {
		setTimeout(function(){animateGlow();},1600);
	}
	else {
		anim_glow_on=false;
	}
}

function selectActivityGroup(group){

	if (group != activity_group){
		audCtrls(aclick, "play");

		document.getElementById("bas_"+group).style.width="97%";
		document.getElementById("bas_"+group).src="images/buttons/bas_"+group+"_on.png";

		document.getElementById("bas_"+activity_group).style.width="100%";
		document.getElementById("bas_"+activity_group).src="images/buttons/bas_"+activity_group+"_off.png";
		activity_group=group;

		if (group=="readers" && curr_topic_title!="dot_and_Ben"){
			curr_voc_topic=curr_topic_title;
		}
		else if (group=="vocab" ){
			selectTopic(curr_voc_topic);
		}

		switch (group){
			case "vocab":
				setDisplays ({phonUSelect:"none",vocSelect:"block",numUSelect:"none",readerSelect:"none",ONETSelect:"none",optDiv:"none",vocab_activities:"block",phonics_activities:"none",numbers_activities:"none",voc_act_title:"block",reader_act_title:"none",onet_act_title:"none",read_choose_icon:"block",book_trans_icon:"none",look_choose_icon:"block",list_choose_icon:"block",play_learn_icon:"block",say_word_icon:"block",voc_bingo_icon:"block",onet_act_icon:"none",onet_voc_set:"none"});
				selectActivity("read_choose");
				document.getElementById("panelLev").src="images/buttons/b_"+currentLev+".png";
				document.getElementById("panelLev2").src="images/buttons/b_"+currentLev+".png";
			break;
			case "phonics":
				setDisplays ({phonUSelect:"table",vocSelect:"none",numUSelect:"none",readerSelect:"none",ONETSelect:"none",optDiv:"none",vocab_activities:"none",phonics_activities:"block",numbers_activities:"none"});
				selectActivity("read_say");
				document.getElementById("panelCont").src="images/buttons/b_"+currentPhonUnit+".png";
				document.getElementById("panelCont2").src="images/buttons/b_"+currentPhonUnit+".png";
				document.getElementById("panelLev").src="images/labels/l_"+currentPhonUnit+"_p.png";
				document.getElementById("panelLev2").src="images/labels/l_"+currentPhonUnit+"_p.png";
			break;
			case "numbers":
				setDisplays ({phonUSelect:"none",vocSelect:"none",numUSelect:"table",readerSelect:"none",ONETSelect:"none",optDiv:"none",vocab_activities:"none",phonics_activities:"none",numbers_activities:"block"});
				selectActivity("numbers");
				document.getElementById("panelCont").src="images/buttons/b_"+currentNumUnit+".png";
				document.getElementById("panelCont2").src="images/buttons/b_"+currentNumUnit+".png";
				document.getElementById("panelLev").src="images/labels/l_"+currentNumUnit+"_p.png";
				document.getElementById("panelLev2").src="images/labels/l_"+currentNumUnit+"_p.png";
			break;
			case "readers":
				setDisplays ({phonUSelect:"none",vocSelect:"none",numUSelect:"none",readerSelect:"block",ONETSelect:"none",optDiv:"none",vocab_activities:"block",phonics_activities:"none",numbers_activities:"none",voc_act_title:"none",reader_act_title:"block",onet_act_title:"none",book_trans_icon:"block",read_choose_icon:"block",look_choose_icon:"block",list_choose_icon:"none",play_learn_icon:"block",say_word_icon:"none",voc_bingo_icon:"block",onet_act_icon:"none",onet_voc_set:"none"});
				selectActivity("book_trans");
			break;
			case "onet":
				setDisplays ({phonUSelect:"none",vocSelect:"none",numUSelect:"none",readerSelect:"none",ONETSelect:"block",optDiv:"none",vocab_activities:"block",phonics_activities:"none",numbers_activities:"none",voc_act_title:"none",reader_act_title:"none",onet_act_title:"block",book_trans_icon:"none",look_choose_icon:"none",list_choose_icon:"none",say_word_icon:"none",voc_bingo_icon:"none"});
				selectTopic("onet_voc");
				selectActivity("read_choose");
				document.getElementById("panelLev").src="images/buttons/b_P6.png";
				document.getElementById("panelLev2").src="images/buttons/b_P6.png";
			break;
		}
	}
}


function selectActivity(mode) {
	if (mode != uMode) {
		audCtrls(aclick, "play");
		document.getElementById("b_" + mode).style.display = "none";
		document.getElementById("b_" + mode+"_gl1").style.display="block";
		document.getElementById("b_" + mode+"_gl2").style.display="block";
		document.getElementById("panelAct").src = "images/buttons/ba_" + mode + "_off.png";
		document.getElementById("panelAct2").src = "images/buttons/ba_" + mode + "_off.png";

		document.getElementById("b_" + uMode).style.display = "block";
		document.getElementById("b_" + uMode+"_gl1").style.display="none";
		document.getElementById("b_" + uMode+"_gl2").style.display="none";

		uMode = mode;

		for (var i = 0; i<topics_all.length; i++) {
			if (uMode!="listen_choose"){
				if (availCats.indexOf(topics_all[i]) == -1) {
					document.getElementById("b_" + topics_all[i]).src = "images/buttons/" + topics_all[i] + "_g.jpg";
				} else {
					document.getElementById("b_" + topics_all[i]).src = "images/buttons/" + topics_all[i] + ".jpg";
				}
			}
			else{
				if (availCats.indexOf(topics_all[i])== -1 || topics_no_audio.indexOf(topics_all[i])!= -1) {
					document.getElementById("b_" + topics_all[i]).src = "images/buttons/" + topics_all[i] + "_g.jpg";
				}
				else {
					document.getElementById("b_" + topics_all[i]).src = "images/buttons/" + topics_all[i] + ".jpg";
				}
			}
		}

		setInfo(uMode,"","#393","11em");

		if (curr_topic_title!="dot_and_Ben"){
			document.getElementById("panelCont").src="images/buttons/"+curr_topic_title+".jpg";
			document.getElementById("panelCont2").src="images/buttons/"+curr_topic_title+".jpg";
			document.getElementById("panelLev").src="images/buttons/b_"+currentLev+".png";
			document.getElementById("panelLev2").src="images/buttons/b_"+currentLev+".png";
		}
		else{
			var phonUnit=(parseInt(currentBook.substr(4))+2);
			document.getElementById("panelLev").src="images/buttons/b_phon"+phonUnit+".png";
			document.getElementById("panelLev2").src="images/buttons/b_phon"+phonUnit+".png";
			document.getElementById("panelCont").src="images/buttons/bc_"+currentBook+".jpg";
			document.getElementById("panelCont2").src="images/buttons/bc_"+currentBook+".jpg";
		}


		switch  (mode) {
			case "play_learn":

			break;

			case "read_choose":
				setDisplays ({choiceTable:"none",livesDispSide:"table"});
				document.getElementById("vocdisplay").style.visibility = "visible";
				document.getElementById("choiceDiv").style.backgroundColor = "white";
				selectScoreSplit(false);
				livesPos="";
			break;

			case "look_choose":
				setDisplays ({choiceTable:"table",livesDispSide:"none"});
				document.getElementById("choiceDiv").style.backgroundColor = "black";
				selectScoreSplit(false);
				livesPos="T";
				switch (curr_topic_title) {
					case "onet_q_a":
						document.getElementById("choice_instructions").innerHTML="Match the answer to the question word:"
					break;

					case "onet_gq":
					case "onet_soc":
					case "onet_phon":
						document.getElementById("choice_instructions").innerHTML="Choose the best answer - 1, 2, 3 or 4:"
					break;

					default:
						document.getElementById("choice_instructions").innerHTML="Click on the word that matches the picture:"
				}
				
			break;

			case "book_trans":
				setDisplays ({choiceTable:"table",livesDispSide:"none"});
				document.getElementById("choiceDiv").style.backgroundColor = "black";
				document.getElementById("choice_instructions").innerHTML="Click on the best translation:"
				selectScoreSplit(false);
				livesPos="T";
				if (curr_topic_title!="dot_and_Ben") {
					selectDotandBen("d_B_1");
				}
				else {
					selectDotandBen(currentBook);
				}
				document.getElementById("ch1").style.font="bold 50% 'Browallia New',sans-serif";
				document.getElementById("ch2").style.font="bold 50% 'Browallia New',sans-serif";
				document.getElementById("ch3").style.font="bold 50% 'Browallia New',sans-serif";
				document.getElementById("ch4").style.font="bold 50% 'Browallia New',sans-serif";
				setDBStartPage(1);
			break;

			case "listen_choose":
				setDisplays ({choiceTable:"none",livesDispSide:"table"});
				document.getElementById("choiceDiv").style.backgroundColor = "white";
				document.getElementById("vocdisplay").style.visibility = "hidden";
				selectScoreSplit(false);
				livesPos="";
			break;

			case "say_word":
			break;

			case "voc_bingo":
				selectScoreSplit(false);
				setVocBingSheet();
			break;

			case "voc_bingo_class":
				selectScoreSplit(false);
			break;

			case "read_say":
				document.getElementById("panelCont").src="images/buttons/b_"+currentPhonUnit+".png";
				document.getElementById("panelCont2").src="images/buttons/b_"+currentPhonUnit+".png";
				document.getElementById("panelLev").src="images/labels/l_"+currentPhonUnit+"_p.png";
				document.getElementById("panelLev2").src="images/labels/l_"+currentPhonUnit+"_p.png";
				selectScoreSplit(false);
			break;

			case "phon_bingo":
				document.getElementById("panelCont").src="images/buttons/b_"+currentPhonUnit+".png";
				document.getElementById("panelCont2").src="images/buttons/b_"+currentPhonUnit+".png";
				document.getElementById("panelLev").src="images/labels/l_"+currentPhonUnit+"_p.png";
				document.getElementById("panelLev2").src="images/labels/l_"+currentPhonUnit+"_p.png";
				selectScoreSplit(false);
				setBingoArrays();
			break;

			case "phon_bingo_class":
				document.getElementById("panelCont").src="images/buttons/b_"+currentPhonUnit+".png";
				document.getElementById("panelCont2").src="images/buttons/b_"+currentPhonUnit+".png";
				document.getElementById("panelLev").src="images/labels/l_"+currentPhonUnit+"_p.png";
				document.getElementById("panelLev2").src="images/labels/l_"+currentPhonUnit+"_p.png";
				selectScoreSplit(false);
				setBingoArrays();
			break;

			case "numbers":
				document.getElementById("panelCont").src="images/buttons/b_"+currentNumUnit+".png";
				document.getElementById("panelCont2").src="images/buttons/b_"+currentNumUnit+".png";
				document.getElementById("panelLev").src="images/labels/l_"+currentNumUnit+"_p.png";
				document.getElementById("panelLev2").src="images/labels/l_"+currentNumUnit+"_p.png";
			break;

			case "num_bingo":
				document.getElementById("panelCont").src="images/buttons/b_"+currentNumUnit+".png";
				document.getElementById("panelCont2").src="images/buttons/b_"+currentNumUnit+".png";
				document.getElementById("panelLev").src="images/labels/l_"+currentNumUnit+"_p.png";
				document.getElementById("panelLev2").src="images/labels/l_"+currentNumUnit+"_p.png";
				selectScoreSplit(false);
				setNumBingoSheet();
			break;
		}
		setActivityDisplays();

		if (curr_topic_title=="multi"){
			setAllVocArray();
		}
		else if (curr_topic_title=="dot_and_Ben"){
			selectDotandBen(currentBook);
		}

		if (uMode!="book_trans") {
			document.getElementById("ch1").style.font="bold 65% 'Nunito',sans-serif";
			document.getElementById("ch2").style.font="bold 65% 'Nunito',sans-serif";
			document.getElementById("ch3").style.font="bold 65% 'Nunito',sans-serif";
			document.getElementById("ch4").style.font="bold 65% 'Nunito',sans-serif";
		}
	}
}


function setActivityDisplays() {
	switch  (uMode) {

		case "play_learn":
			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"none",errDiv:"none",imageDiv:"block",livesDispTop:"none",phonDisplay:"none",bing_class_display:"none",score:"none",timer:"none"});
		break;

		case "read_choose":
			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"block",errDiv:"block",imageDiv:"block",livesDispTop:"none",phonDisplay:"none",bing_class_display:"none",score:"block",timer:"block"});
		break;

		case "look_choose":
      		if (curr_topic_title!="onet_full") {	  
      			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"block",errDiv:"block",imageDiv:"block",livesDispTop:"block",phonDisplay:"none",bing_class_display:"none",score:"block",timer:"block"});
			}
			else {
				setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"block",errDiv:"none",imageDiv:"block",livesDispTop:"none",phonDisplay:"none",bing_class_display:"none",score:"none",timer:"block",choice_onet:"block"});
			}
			if (curr_topic_title=="onet_gq"){
				setDisplays({errDiv:"none"});
			}
		break;

		case "book_trans":
			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"block",book_trans_fb:"block",choiceDiv:"block",errDiv:"none",imageDiv:"block",livesDispTop:"none",phonDisplay:"none",bing_class_display:"none",score:"block",timer:"block"});
		break;

		case "listen_choose":
			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"block",errDiv:"block",imageDiv:"block",livesDispTop:"none",phonDisplay:"none",bing_class_display:"none",score:"block",timer:"block"});
		break;

		case "say_word":
			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"none",errDiv:"block",imageDiv:"block",livesDispTop:"none",phonDisplay:"none",bing_class_display:"none",score:"block",timer:"block"});
			break;
		case "voc_bingo":
			setDisplays({bingoDisplay:"none",bingoScore:"inline",bingoWords:"inline",book_overlay:"none",book_trans_fb:"none",choiceDiv:"none",errDiv:"none",imageDiv:"block",livesDispTop:"none",phonDisplay:"none",bing_class_display:"none",score:"block",timer:"block"});
		break;

		case "voc_bingo_class":
			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"none",errDiv:"none",imageDiv:"block",livesDispTop:"none",phonDisplay:"none",bing_class_display:"none",score:"none",timer:"none"});
		break;

		case "read_say":
			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"none",errDiv:"none",imageDiv:"none",livesDispTop:"block",phonDisplay:"block",bing_class_display:"none",score:"block",timer:"block"});
		break;

		case "phon_bingo":
			setDisplays({bingoDisplay:"none",bingoScore:"inline",bingoWords:"inline",book_overlay:"none",book_trans_fb:"none",choiceDiv:"none",errDiv:"none",imageDiv:"none",livesDispTop:"none",phonDisplay:"block",bing_class_display:"none",score:"block",timer:"block"});
		break;

		case "phon_bingo_class":
			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"none",errDiv:"none",imageDiv:"none",livesDispTop:"none",phonDisplay:"block",bing_class_display:"none",score:"none",timer:"none"});
		break;

		case "numbers":
			setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",book_trans_fb:"none",choiceDiv:"none",errDiv:"none",imageDiv:"none",livesDispTop:"none",phonDisplay:"block",bing_class_display:"none",score:"block",timer:"block"});
		break;

		case "num_bingo":
			setDisplays({bingoDisplay:"none",bingoScore:"inline",bingoWords:"inline",book_overlay:"none",book_trans_fb:"none",choiceDiv:"none",errDiv:"none",imageDiv:"none",livesDispTop:"none",phonDisplay:"block",score:"block",timer:"block"});
		break;
	}
}


function setDisplays(elem,content_sel) {
	var display_name;
	var display_setting;

	for (var i in elem){
		if (elem.hasOwnProperty(i)) {
			display_name=i;
			display_setting=elem[i];
			document.getElementById(display_name).style.display=display_setting;
		}
	}
	if (typeof content_sel !== "undefined") {
		if (document.getElementById("optDiv").style.display=="none"){
			document.getElementById(Object.keys(content_sel)).style.display=content_sel[Object.keys(content_sel)];
		}
	}
}


function selectLev(level, caller) {
	if (level!=currentLev){
		if (caller=="button") {
			audCtrls(aswitch, "play");
		}
		if (level!="Master"){
			document.getElementById("b_" + level).style.width = "94%";
			document.getElementById("lt_b_" + level).style.width = "94%";
			document.getElementById("b_" + level).style.border = "0.3em outset";
			document.getElementById("lt_b_" + level).style.border = "0.3em outset";
			document.getElementById("on_" + level).style.display = "inline";
			document.getElementById("lt_on_" + level).style.display = "inline";
			document.getElementById("b_" + currentLev).style.width = "100%";
			document.getElementById("lt_b_" + currentLev).style.width = "100%";
			document.getElementById("b_" + currentLev).style.border = "none";
			document.getElementById("lt_b_" + currentLev).style.border = "none";
			document.getElementById("on_" + currentLev).style.display = "none";
			document.getElementById("lt_on_" + currentLev).style.display = "none";
			document.getElementById("panelLev").src="images/buttons/b_"+level+".png";
			document.getElementById("panelLev2").src="images/buttons/b_"+level+".png";
		}
		currentLev = level;

		if (curr_topic_title!="multi") {
			setVocArrays();
		}

		setAvailCats();
		setTopicButtons();


		if (availCats.indexOf(curr_topic_title) == -1) {
			selectTopic("multi");
		}

		if (curr_topic_title=="multi"){
			setComCats();
			setTimeout(function(){setAllVocArray();},600);
		}
	}
}


function setTopicButtons(){
	//debugger;
	for (var i = 0; i<topics_all.length; i++) {
		if (uMode!="listen_choose"){
			if (availCats.indexOf(topics_all[i]) == -1 && topics_onet.indexOf(topics_all[i]) == -1)  {
				document.getElementById("b_" + topics_all[i]).src = "images/buttons/" + topics_all[i] + "_g.jpg";
			} else {
				document.getElementById("b_" + topics_all[i]).src = "images/buttons/" + topics_all[i] + ".jpg";
			}
		}
		else{
			if (availCats.indexOf(topics_all[i])== -1 || topics_no_audio.indexOf(topics_all[i])!= -1) {
				document.getElementById("b_" + topics_all[i]).src = "images/buttons/" + topics_all[i] + "_g.jpg";
			}
			else {
				document.getElementById("b_" + topics_all[i]).src = "images/buttons/" + topics_all[i] + ".jpg";
			}
		}
	}
}

function selectUserLev(level) {
	if (level!=currentLev) {
		selectLev(level,"button");
		setVocChoiceTable("topics");
	}
}


function selectTopicList(list,caller){
	if (list!=topicList){
		if (caller=='button') {
			audCtrls(aclick, "play");
		}
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

	if (curr_topic_title=="dot_and_Ben") {
		var prevBook=currentBook;
		document.getElementById("b_" + prevBook).style.width = "100%";
		document.getElementById("b_" + prevBook).style.border = "none";
		document.getElementById("on_" + prevBook).style.display = "none";
	}
	else {
		document.getElementById("b_" + curr_topic_title).style.width = "100%";
		document.getElementById("b_" + curr_topic_title).style.border = "none";
		document.getElementById("on_" + curr_topic_title).style.display = "none";
		document.getElementById("b_multi").style.width = "100%";
		document.getElementById("b_multi").style.border = "none";
		document.getElementById("on_multi").style.display = "none";
	}

	document.getElementById("b_" + book).style.width = "94%";
	document.getElementById("b_" + book).style.border = "0.3em outset";
	document.getElementById("on_" + book).style.display = "inline";

	var phonUnit=(parseInt(book.substr(4))+2);
	document.getElementById("panelLev").src="images/buttons/b_phon"+phonUnit+".png";
	document.getElementById("panelLev2").src="images/buttons/b_phon"+phonUnit+".png";
	document.getElementById("panelCont").src="images/buttons/bc_"+book+".jpg";
	document.getElementById("panelCont2").src="images/buttons/bc_"+book+".jpg";
	currentBook = book;

	curr_topic_title="dot_and_Ben";
	if (uMode!="book_trans"){
		curr_topic_dir="dot_and_Ben";
		currentDBEx="";
	}
	else {
		curr_topic_dir="dot_and_Ben/sentences";
		setDBStartPage(1);
	}
	setVocArrays();
}


function selectTopic(topic,caller) {
	if (topic != curr_topic_title){
		if (caller=="button") {
			audCtrls(aclick, "play");
		}
		if (topic=="multi"){
			document.getElementById("b_multi").style.width = "94%";
			document.getElementById("b_multi").style.border = "0.3em outset";
			document.getElementById("on_multi").style.display = "inline";
			document.getElementById("panelCont").src="images/buttons/"+topic+".jpg";
			document.getElementById("panelCont2").src="images/buttons/"+topic+".jpg";
			if (curr_topic_title!="dot_and_Ben") {
				document.getElementById("b_" + curr_topic_title).style.width = "100%";
				document.getElementById("b_" + curr_topic_title).style.border = "none";
				document.getElementById("on_" + curr_topic_title).style.display = "none";
			}
			else {
				document.getElementById("b_" + currentBook).style.width = "100%";
				document.getElementById("b_" + currentBook).style.border = "none";
				document.getElementById("on_" + currentBook).style.display = "none";
			}
			curr_topic_title="multi";
			setComCats();
			setAllVocArray();
		}
		else {
			document.getElementById("b_multi").style.width = "100%";
			document.getElementById("b_multi").style.border = "none";
			document.getElementById("on_multi").style.display = "none";

			if (availCats.indexOf(topic) != -1 && (uMode != "listen_choose" || topics_no_audio.indexOf(topic)== -1) || topics_onet.indexOf(topic) != -1) {
				document.getElementById("b_" + topic).style.width = "94%";
				document.getElementById("b_" + topic).style.border = "0.3em outset";
				document.getElementById("on_" + topic).style.display = "inline";
				if (curr_topic_title!="dot_and_Ben") {
					document.getElementById("b_" + curr_topic_title).style.width = "100%";
					document.getElementById("b_" + curr_topic_title).style.border = "none";
					document.getElementById("on_" + curr_topic_title).style.display = "none";
				}
				else {
					document.getElementById("b_" + currentBook).style.width = "100%";
					document.getElementById("b_" + currentBook).style.border = "none";
					document.getElementById("on_" + currentBook).style.display = "none";
				}
				document.getElementById("panelCont").src="images/buttons/"+topic+".jpg";
				document.getElementById("panelCont2").src="images/buttons/"+topic+".jpg";
				document.getElementById("panelLev").src="images/buttons/b_"+currentLev+".png";
				document.getElementById("panelLev2").src="images/buttons/b_"+currentLev+".png";

        		curr_topic_title = topic;
				curr_topic_dir=topic;
				      		
        		if (topic=="onet_voc"){
					if (voc_mode=="user") {
						vocArray=getOnetUserVocab();
					}
					else {
						setOnetVocab();	
					}
        		}
        		else {
					setVocArrays();
        		}
        		resetScore();
        		
        		if (topic.slice(0,4)=="onet"){
        			if (topic=="onet_voc"){
						setDisplays ({read_choose_icon:"block",play_learn_icon:"block",onet_act_icon:"none",onet_full_select:"none",onet_voc_set:"block"});
        			}
					else if (topic=="onet_full"){
						setDisplays ({read_choose_icon:"none",play_learn_icon:"none",onet_act_icon:"block",onet_full_select:"block",onet_voc_set:"none"});
						document.getElementById("l_onet_topic").src="images/buttons/"+topic+".jpg";
					}
        			else {
        				setDisplays ({read_choose_icon:"none",play_learn_icon:"none",onet_act_icon:"block",onet_full_select:"none",onet_voc_set:"none"});
        				document.getElementById("l_onet_topic").src="images/buttons/"+topic+".jpg";
        			}
        		}
			}
		}

		if (uMode=="voc_bingo") {
			setVocBingSheet();
		}
		switch (curr_topic_title) {
			case "onet_q_a":
				document.getElementById("choice_instructions").innerHTML="Match the answer to the question word:"
			break;

			case "onet_gq":
			case "onet_soc":
			case "onet_phon":
				document.getElementById("choice_instructions").innerHTML="Choose the best answer - 1, 2, 3 or 4:"
			break;

			default:
				document.getElementById("choice_instructions").innerHTML="Click on the word that matches the picture:"
		}
	}
}

function shuffle(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
    	current = Math.floor(Math.random() * (top + 1));
    	tmp = array[current];
    	array[current] = array[top];
    	array[top] = tmp;
    }

    return array;
}


function setupONET(item_count){

	document.getElementById('onet_answer_sheet').innerHTML ="";

	for (var i=0; i<item_count; i++){
		document.getElementById('onet_answer_sheet').innerHTML += '\
		<div id="onet_num_'+i+'" style="height:1.5em; padding:0.1em; clear:both; font: inherit; font-size: 120%;"\
    		onClick="selectOnetItem(this)">\
			<div  style="float: left; width: 2em; margin-left: 2em; text-align: right" >'+(i+1)+'.</div>\
			<img id="onet_ans_'+i+'_1'+'" style="float: left; width: 1em; margin-left: 0.5em; padding-top:0.2em" src="images/labels/onet_1.png"\
			onClick="chAnswer(\'onet\',\''+i+'_1\',this)" />\
			<img id="onet_ans_'+i+'_2'+'" style="float: left; width: 1em; margin-left: 0.5em; padding-top:0.2em" src="images/labels/onet_2.png"\
			onClick="chAnswer(\'onet\',\''+i+'_2\',this)" />\
			<img id="onet_ans_'+i+'_3'+'" style="float: left; width: 1em; margin-left: 0.5em; padding-top:0.2em" src="images/labels/onet_3.png"\
			onClick="chAnswer(\'onet\',\''+i+'_3\',this)" />\
			<img id="onet_ans_'+i+'_4'+'" style="float: left; width: 1em; margin-left: 0.5em; padding-top:0.2em" src="images/labels/onet_4.png"\
			onClick="chAnswer(\'onet\',\''+i+'_4\',this)" />\
      		<img id="onet_grade_'+i+'" style="float: left; width: 2em; margin-left: 1.5em; margin-top: -0.1em; display:none" src="images/buttons/no_button.png"\
			 />\
		</div>';
	}
	onet_ready=true;
}

function selectOnetItem(item) {
	if (finished==true &&onet_ready==false){
    	document.getElementById("onet_num_"+onet_test_item).style.backgroundColor="";
		onet_test_item=parseInt((item.id.substr(item.id.lastIndexOf("_")+1)));
		document.getElementById("onet_num_"+onet_test_item).style.backgroundColor="yellow";
		newImage();
  	}
}

function submitONET(){

	var j=1;

  	for (var i=0;i<onet_test.length;i++){
  		document.getElementById("onet_grade_"+i).style.display="block";
    	if (document.getElementById("onet_grade_"+i).src.indexOf("yes")!= -1){
    		if (onet_test_set=="onet_53"){
				if (i<20){
					points=points+2;
				}
				else{
					points=points+4;
				}
    		}
    		else {
    			points=points+2.5;
    		}
    	}
    	else{
    		document.getElementById("onet_ans_"+i+"_"+onet_test[i]["a"+j]).src="images/labels/onet_correct.png";
    		if (onet_test[i].qs>j){
        		j++;
      		}
      		else {
        		j=1;
      		}
      		for (k=0;k<4;k++){
        		if (document.getElementById("onet_ans_"+i+"_"+(k+1)).src.indexOf("fill")!= -1){
          			document.getElementById("onet_ans_"+i+"_"+(k+1)).src="images/labels/onet_incorrect.png";
        		}
      		}
    	}
  	}
  	finished=true;
  	stopCount=true;
  
  	document.getElementById("b_submit").style.display="none";
  	document.getElementById("score").innerHTML = "Score: " + points +"%";
  	document.getElementById("score").style.display="block";
  	document.getElementById("b_reset").style.display="block";
  	document.getElementById("onet_num_0").scrollIntoView();
  	onet_prev_item=onet_test_item;
  	onet_ready=false;
}

function moveHelpBox (event,box) {

	var delta_x=0, delta_y=0;
	var mouse_x_init=event.clientX;
	var mouse_y_init=event.clientY;
	var box_x_init=box.offsetLeft;
	var box_y_init=box.offsetTop;
	var box_x_new=0, box_y_new=0;

    box.onmousemove= function(event){
    	delta_x=event.clientX-mouse_x_init;
    	delta_y=event.clientY-mouse_y_init;
		box_x_new=box_x_init+delta_x;
		box_y_new=box_y_init+delta_y;
    	if (box_x_new<0) {
    		box_x_new=0;
    	}
    	if (box_y_new<0) {
    		box_y_new=0;
    	}

		box.style.left = box_x_new +"px";
		box.style.top=box_y_new +"px";
    };

    box.onmouseup = function () {
    	box.onmousemove=function() {};
    };

    box.onmouseout = function () {
    	box.onmousemove=function() {};
    };
}

function processSlider(event,thumb,aud){
	var delta_y=0;
	var mouse_y_init=event.clientY;
	var thumb_y_init=thumb.offsetTop;
	var thumb_y_new=0;

	 thumb.onmousemove= function(event){
    	delta_y=event.clientY-mouse_y_init;
		thumb_y_new=thumb_y_init+delta_y;
    	if (thumb_y_new<0) {
    		thumb_y_new=0;
    	}
    	if (thumb_y_new>(thumb.parentNode.offsetHeight)-thumb.offsetHeight){
    		thumb_y_new=(thumb.parentNode.offsetHeight)-thumb.offsetHeight;
    	}
		thumb.style.top=thumb_y_new +"px";
		var vol=(((thumb_y_new/(thumb.parentNode.offsetHeight-thumb.offsetHeight))*-10)+10).toPrecision(2);
		adjustVolume(aud,vol);
    };

    thumb.onmouseup = function () {
    	thumb.onmousemove=function() {};
    };
    thumb.onmouseout = function () {
    	thumb.onmousemove=function() {};
    }; 
}

function scrollDiv(evt,caller){
	var delta_y=0;
	var touch_y_init=evt.touches[0].clientY;
	var div_y_init=caller.scrollTop;
	var div_y_new=0;

	caller.ontouchmove= function(evt){
    	delta_y=evt.touches[0].clientY-touch_y_init;
		div_y_new=div_y_init+delta_y;
		if (div_y_new<0) {
    		div_y_new=0;
    	}
		caller.scrollTop=-div_y_new;
    };
}


function setMsg(content,response_type,string_1,string_2) {
	if (response_type == "success") {
		audCtrls(success, "play");
	}
	else {
		audCtrls(msg_sound, "play");
	}
	var oK_response = "";
	var msg_box=document.getElementById("msg_box");

	document.getElementById("modal_back").style.display="block";
	document.getElementById("msg_win").style.top ="0.1em";
	document.getElementById("msg_win").style.left ="0.1em";
	document.getElementById("msg_win").style.borderColor = "#f60";

	switch (response_type) {
		case "OK_Cancel":
			setDisplays({msg_close:"none",msg_OK_cancel:"block",msg_box_clone:"none",msg_edit_delete:"none",msg_new_continue:"none"});
		break;

		case "msg_clone":
			setDisplays({msg_box_clone:"block",msg_close:"none",msg_OK_cancel:"none",msg_edit_delete:"none",msg_new_continue:"none"});
		break;

		case "edit_delete":
			setDisplays({msg_box_clone:"none",msg_close:"none",msg_OK_cancel:"none",msg_edit_delete:"block",msg_new_continue:"none"});
		break;

		case "new_continue":
			setDisplays({msg_close:"none",msg_OK_cancel:"none",msg_box_clone:"none",msg_edit_delete:"none",msg_new_continue:"block"});
		break;

		case "success":
			setDisplays({msg_close:"block",msg_OK_cancel:"none",msg_box_clone:"none",msg_edit_delete:"none",msg_new_continue:"none"});
			document.getElementById("msg_win").style.borderColor = "#393";
			msg_box.innerHTML='<p style="text-align:center; margin-bottom:1em;"><span style="padding:0 0.3em 0 0.3em; background-color:#0DDB0D; \
															color:black; border:0.15em grey ridge; \font-weight:bold; font-size:150%">Success</span></p>';
			msg_box.style.display="block";															
		break;

		default:
			setDisplays({msg_close:"block",msg_OK_cancel:"none",msg_box_clone:"none",msg_edit_delete:"none",msg_new_continue:"none"});
		break;
	}

	switch (content) {

		case "bing_back":
			msg_box.innerHTML='<p>Would you like to:</p><p style="text-indent:2em">Start a <span style="color:#64FFFF; font-weight:bold">new</span> game?</p><p style="text-indent:2em">\
								<span style="color:#64FFFF; font-weight:bold">Continue</span> the previous game?</p><p style="text-indent:2em"><span style="color:#64FFFF; font-weight:bold">Load</span> a game from a saved file?</p>';
			document.getElementById("msg_new").onclick= function() {activity("phon_bingo_class_cont");setDisplays({modal_back:'none'})};
			document.getElementById("msg_continue").onclick= function() {bingClassProc("backup");};
			document.getElementById("msg_load").onclick= function() {document.getElementById('input_phon_bingo').click();};
		break;

		case "err_pron_points":
			msg_box.innerHTML="Sorry! Pronunciation points can only be scored for the activities: 'Say the Word' and 'Say the Number'.";
		break;

		case "err_topics":
			msg_box.innerHTML="Sorry! You need at least one topic. Please add another before deleting this one.";
		break;

		case "err_bingo_multi":
			msg_box.innerHTML="Sorry, Vocabulary Bingo needs at least 24 words, and your combination only contains " +all_voc_array.length+". Please add another topic or choose another activity.";
		break;

		case "err_db_start":
			msg_box.innerHTML='Sorry, <span style="background-image: url( \'images/formatting/d_B_TitleL.png \'); background-size:100% 100%">&nbsp</span><span style="color:black;\
								background-image: url( \'images/formatting/d_B_TitleBack.jpg \'); background-size:100% 100%" >'+d_B_Title+'</span><span style="color:black; \
								background-image: url( \'images/formatting/d_B_TitleR.png \'); background-size:100% 100%" >&nbsp'+'</span> only has '+((d_B_ExArray.length*2)-1)+' pages.';
		break;

		case "err_no_topic":
			msg_box.innerHTML='<p style="text-align:center; margin-bottom:1em;"><span style="padding:0 0.3em 0 0.3em; background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%; ">\
								Warning</span></p>'+topicTitle(curr_topic_title)+' for '+currentLev+' does not exist in the file: '+string_1;
		break;

		case "err_file":
			if (string_1.indexOf(".txt")!= -1) {
				string_1=string_1.slice(0,string_1.indexOf(".txt"));
			}
			msg_box.innerHTML='<p style="text-align:center; margin-bottom:1em;"><span style="padding:0 0.3em 0 0.3em; background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%;\
								">Sorry</span></p><p style="margin-bottom: 0.5em"><span style="color:#64FFFF; font-weight:bold">'+string_1+'</span> could not be loaded.</p><p style="margin-bottom: 0.5em">\
								It is <span style="font-weight:bold; color:red">not</span> an English Builder <span style="color:#64FFFF; font-weight:bold">'+string_2+'</span> file.</p>';
		break;

		case "err_version":
			msg_box.innerHTML='<p style="text-align:center; margin-bottom:1em;"><span style="padding:0 0.3em 0 0.3em; background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%; \
								">Sorry</span></p><p style="margin-bottom: 0.5em"><span style="color:cyan">'+string_1+'</span> could not be loaded.</p><p style="margin-bottom: 0.5em">It is a more recent file version than this application can load.\
								<p style="margin-bottom: 0.5em">Please update English Builder to the latest version.</p>';
		break;

		case "err_no_clone":
			msg_box.innerHTML='<p style="text-align:center; margin-bottom:1em;"><span style="padding:0 0.3em 0 0.3em; background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%; ">\
								Sorry</span></p><p style="margin-bottom: 0.5em"><span style="color:#64FFFF; font-weight:bold">'+string_1 + '</span> does not have a <span style="color:#64FFFF; font-weight:bold">'+topicTitle(curr_topic_title)+'</span> \
								topic to clone from.</p>';
			document.getElementById("msg_close_button").onclick= function() {setMsg("choice_clone","msg_clone");};
		break;
			
		case "clone_success":
			msg_box.innerHTML+=topicTitle(curr_topic_title)+' successfully cloned from '+string_1+'.';
		break;

		case "choice_add_topic":
			msg_box.innerHTML="<p style='text-align:center; margin-bottom:1em;'><span style='padding:0 0.3em 0 0.3em; \
								background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%'>Warning</span></p><p style='margin-bottom:\
								0.5em'><span style='color:#64FFFF; font-weight:bold'>"+topicTitle(string_1)+"</span> is not in your list of topics\
								for <span style='color:#64FFFF; font-weight:bold'>"+currentLev+".</span></p><p style='margin-bottom: 0.5em'> Choose <img style='width:4.7em; vertical-align:middle' \
								src= 'images/buttons/continue.png' /> to add it and select vocabulary items.</p>";
			document.getElementById("msg_OK").onclick = function () {document.getElementById('modal_back').style.display='none';modUserAvailTopics(string_1,"add_continue");};
		break;

		case "choice_delete_topic":
			msg_box.innerHTML="<p style='text-align:center; margin-bottom:1em;'><span style='padding:0 0.3em 0 0.3em; \
								background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%'>Warning</span></p><p style='margin-bottom:\
								0.5em'><span style='color:#64FFFF; font-weight:bold'>"+topicTitle(string_1)+"</span> currently has less than \
								4 items, which is not enough for a topic.</p><p style='margin-bottom: 0.5em'>If you choose <img style='width:3.7em; vertical-align:middle' \
								src= 'images/buttons/delete_topic.png' />, <span style='color:#64FFFF; font-weight:bold'>"+topicTitle(string_1)+"</span>\
								<span style='font-weight:bold; color:red'>will be removed</span> from your "+currentLev+" list of topics!</p><p style='margin-bottom: 0.5em'>\
								<p style='margin-bottom:0.5em'>Choose <img style='width:3.7em; vertical-align:middle' src= 'images/buttons/edit_topic.png' /> to add some more items.</p> \
								<p style='margin-bottom:0.5em'>Choose <img style='width:5.6em; vertical-align:middle' src= 'images/buttons/reset_to_default.png' /> to reset \
								<span style='color:#64FFFF; font-weight:bold'>"+topicTitle(string_1)+"</span> to the default.</p>";
			document.getElementById("msg_edit_topic").onclick = function () {setDisplays({modal_back:'none'});setVocChoiceTable("show_all");};
			document.getElementById("msg_default_topic").onclick = function () {setDisplays({modal_back:'none'});setVocChoiceTable("default");};
			document.getElementById("msg_delete_topic").onclick = function () {setDisplays({modal_back:'none'});modUserAvailTopics(string_1,"delete_continue");};
		break;

		case "warn_all_voc_default":
			msg_box.innerHTML='<p style="text-align:center; margin-bottom:1em;"><span style="padding:0 0.3em 0 0.3em; background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%; ">\
								Warning</span></p><p style="margin-bottom: 0.5em">This will return <span style="color:#64FFFF; font-weight:bold">all user vocabulary</span> from <span style="color:#64FFFF; font-weight:bold">\
								all levels</span> to the program\'s default settings.</p><p style="margin-bottom: 0.5em">Are you sure?</p>';
			document.getElementById("msg_OK").onclick = function () {document.getElementById('modal_back').style.display='none';initUserVocab('no_check');};
		break;
		
		case "warn_delete_topic":
			msg_box.innerHTML="<p style='text-align:center; margin-bottom:1em;'><span style='padding:0 0.3em 0 0.3em; \
								background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%'>Warning</span></p><p style='margin-bottom:\
								0.5em'>Are you sure you want to delete <span style='color:#64FFFF; font-weight:bold'>"+topicTitle(string_1)+"</span>?</p>";
			document.getElementById("msg_OK").onclick = function () {setDisplays({modal_back:'none'});modUserAvailTopics(string_1,"delete_continue");};
		break;

		case "choice_clone":
			msg_box.innerHTML='<p style="margin-bottom: 0.5em">Please select a level that you want to clone this topic <span style="font-weight: bold;\
			color: red">from</span>.</p>';
			document.getElementById("msg_close_button").onclick= function() {setDisplays({modal_back:'none'});};
		break;

		case "choice_load":
			msg_box.innerHTML='<p style="text-align:center; margin-bottom:1em;"><span style="padding:0 0.3em 0 0.3em; background-color:orange; color:black; border:0.15em grey ridge;  \
								font-weight:bold; font-size:150%; ">Warning</span></p><p style="margin-bottom: 0.5em">This will change <span style="color:#64FFFF; font-weight:bold">all user vocabulary</span> from \
								<span style="color:#64FFFF; font-weight:bold">all levels</span> to that saved in your file.</p>\
								<p style="margin-bottom: 0.5em">Are you sure you want to continue?';
			document.getElementById("msg_OK").onclick = function () {document.getElementById('modal_back').style.display='none';document.getElementById("reset_all").click();};
		break;

		case "u_c":
			msg_box.innerHTML='<p style="text-align:center; margin-bottom:1em;"><span style="padding:0 0.3em 0 0.3em; background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%; ">\
								Under Construction</span></p><div style="text-align:center"><img style="width: 50%" src="images/labels/under_construction.gif" /></div>Sorry, <span style="color:cyan; font-weight:bold">'+string_1+'</span> \
								is still under construction.';
		break;

		case "load_all_complete":
			msg_box.innerHTML+='<p style="margin-bottom:1em;">The file <span style="color:#64FFFF; font-weight:bold">' +string_1 +'</span> has loaded successfully!</p><p><span style="color:#64FFFF; font-weight:bold">All user vocabulary</span> has been set by that file.</p><br>';
		break;

		case "load_topic_complete":
			msg_box.innerHTML+='<p style="margin-bottom:1em;">The file <span style="color:#64FFFF; font-weight:bold">' +string_1 +'</span> has loaded successfully!</p><p><span style="color:#64FFFF; font-weight:bold">'
								 + topicTitle(curr_topic_title) +' user vocabulary</span> has been set by that file.</p><br>';
		break;

		case "user_voc_reset_complete":
			msg_box.innerHTML+='<p style="margin-bottom:1em;"><span style="color:#64FFFF; font-weight:bold">All topics</span> have been reset to default</p>';
		break;
	}
}

function setInfo(content,action,bCol,w,yPos,xPos) {
	switch (content) {
		case "read_choose":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Read and Choose:</span> develops learners' ability to identify the meaning of vocabulary quickly and accurately. They read the words or phrases at the top of the screen and must select matching images or translations below.</p><p style='padding-top:0.5em'><span style='font-weight:bold; background-color:blue; border:#7bd8e8 ridge; padding:0em 0.2em'>Scoring:</span> 1 point for correct choice on first attempt; 1/2 point on second attempt. Each incorrect choice results in a 5 second penalty.</p><p style='padding-top:0.5em; padding-bottom:0.5em'><span style='font-weight:bold; background-color:#573F06; border:#E49C58 ridge;  padding:0em 0.2em'>Keyboard Shortcuts:</span></p><div style='float:left'><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_A.png' /> top left choice</div><div style='float:right'>top right choice <img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_dub_quote.png' /></div><div style='clear:left; float:left'><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Z.png' /> bottom left choice</div><div style='float:right'>bottom right choice <img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_qm.png' /></div><div style='clear:both'><img style='width: 3.6em; vertical-align:middle' src='images/buttons/key_space.png' /> Start</div><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Esc.png' /> Stop / Reset</p>";
			break;
		case "look_choose":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Look and Choose:</span> is similar to Read and Choose but relates meaning to words, rather than words to meaning. Learners are presented with images or Thai text, and must select corresponding words or phrases from the box on the right.</p><p style='padding-top:0.5em'><span style='font-weight:bold; background-color:blue; border:#7bd8e8 ridge; padding:0em 0.2em'>Scoring:</span> 1 point for correct choice on first attempt; 1/2 point on second attempt. Each incorrect choice results in a 5 second penalty.</p><p style='padding-top:0.5em; padding-bottom:0.5em'><span style='font-weight:bold; background-color:#573F06; border:#E49C58 ridge;  padding:0em 0.2em'>Keyboard Shortcuts:</span></p><p style='padding-top:0.5em'><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_1.png' /> 1st choice</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_2.png' /> 2nd choice</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_3.png' /> 3rd choice</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_4.png' /> 4th choice</p><p><img style='width: 3.6em; vertical-align:middle' src='images/buttons/key_space.png' /> Start</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Esc.png' /> Stop / Reset</p>";
			break;
		case "play_learn":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Play and Learn:</span> is a non-competitive activity which lets learners practise vocabulary in fun ways before trying a scored activity.</p><p style='padding-top:0.5em'>All of the vocabulary items for a topic and level are displayed in a table, which can be either randomised or ordered. There are also options to hide the images or text, depending on whether students need to practice reading or speaking.</p><p style='padding-top:0.5em'>There are many ways to use Play and Learn including:</p> <ul  style='padding-top:0.5em'><li>Look at each image, try saying the corresponding word or phrase before clicking on the image to hear an example.</li><li style='padding-top:0.5em'>Hide the images, read the text and try to remember the meaning before uncovering its image.</li><li style='padding-top:0.5em'>Hide the text, look at each image and try saying or spelling the word before uncovering its text.</li></ul> ";
			break;
		case "book_trans":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Read a Book:</span> \
			develops student's ability to read and understand longer texts. The books follow the Phonics course (see Read and Say), focussing on the letters  and sounds \
			introduced in each corresponding Phonics Unit.</p><p style='padding-top:0.5em'>One sentence at a time is highlighted, and learners must select the best translation \
			from the box on the right.</p><p style='padding-top:0.5em'>Read a Book is in an early stage of development, and just one book has been fully prepared so far.</p>\
			<p style='padding-top:0.5em'><span style='font-weight:bold; background-color:blue; border:#7bd8e8 ridge; padding:0em 0.2em'>Scoring:</span> 1 point for correct \
			choice on first attempt.</p><p style='padding-top:1em; padding-bottom:0.5em'><span style='font-weight:bold; background-color:#573F06; border:#E49C58 ridge;  \
			padding:0em 0.2em'>Keyboard Shortcuts:</span></p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_1.png' /> 1st choice</p>\
			<p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_2.png' /> 2nd choice</p><p><img style='width: 1.7em; vertical-align:middle' \
			src='images/buttons/key_3.png' /> 3rd choice</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_4.png' /> 4th choice</p><p>\
			<img style='width: 3.6em; vertical-align:middle' src='images/buttons/key_space.png' /> Start</p><p><img style='width: 1.7em; vertical-align:middle' \
			src='images/buttons/key_Esc.png' /> Stop / Reset</p>";
			break;
		case "listen_choose":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Listen and Choose:</span> is similar to Read and Choose but develops listening skills rather than reading. Learners listen to words or phrases and must select matching images or translations.</p><p style='padding-top:0.5em'><span style='font-weight:bold; background-color:blue; border:#7bd8e8 ridge; padding:0em 0.2em'>Scoring:</span> 1 point for correct choice on first attempt; 1/2 point on second attempt. Each incorrect choice results in a 5 second penalty.</p><p style='padding-top:0.5em; padding-bottom:0.5em'><span style='font-weight:bold; background-color:#573F06; border:#E49C58 ridge;  padding:0em 0.2em'>Keyboard Shortcuts:</span></p><div style='float:left'><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_A.png' /> top left choice</div><div style='float:right'>top right choice <img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_dub_quote.png' /></div><div style='clear:left; float:left'><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Z.png' /> bottom left choice</div><div style='float:right'>bottom right choice <img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_qm.png' /></div><div style='clear:both'><img style='width: 3.6em; vertical-align:middle' src='images/buttons/key_space.png' /> Start / Repeat Item</div><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Esc.png' /> Stop / Reset</p>";
			break;
		case "say_word":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Say the Word:</span> develops speaking and pronunciation skills. Learners are presented with an image or Thai text, and must say the corresponding word or phrase as clearly as possible.</p><p style='padding-top:0.5em'><span style='font-weight:bold; background-color:blue; border:#7bd8e8 ridge; padding:0em 0.2em'>Scoring:</span> This is a human-assessed activity, meaning that a teacher, parent or more advanced student is needed to award points. Generally, 1 point is given if a word or phrase is vaguely recognisable, and 2 points if it is clear. You can split the points for words and clarity in the <img style='width: 4em; vertical-align:middle' src='images/buttons/options_button.png' /> section. </p><p style='padding-top:0.5em; padding-bottom:0.5em'><span style='font-weight:bold; background-color:#573F06; border:#E49C58 ridge;  padding:0em 0.2em'>Keyboard Shortcuts:</span></p><div style='margin:0.2em 7em 0.5em 7em'><div style='float:left; text-align:center'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_left.png' /></p><p style='color:red'>incorrect</p></div><div style='float:right; text-align:center'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_right.png' /></p><p style='color:#f60'>correct</p><p>(1 point)</p></div><div style='text-align:center; width:50%; margin-left:auto;margin-right:auto'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_down.png' /></p><p style='color:green'>correct and clear</p><p>(2 points)</p></div></div><p><img style='width: 3.6em; vertical-align:middle' src='images/buttons/key_space.png' /> Start</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Esc.png' /> Stop / Reset</p>";
			break;
		case "voc_bingo":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Vocabulary Bingo:</span> is a listening activity, similar to Listen and Choose but in the form of a bingo game. Learners listen to a word or phrase and must select a matching image or translation from the grid. Each item is repeated 3 times before proceeding to the next.</p><p style='padding-top:0.5em'><span style='font-weight:bold; background-color:blue; border:#7bd8e8 ridge; padding:0em 0.2em'>Scoring:</span> 1 point for correct selection while the word is current; 1/2 point if the word was played previously. Selecting a cell that has not been played yet results in a 5 second penalty. </p><p style='padding-top:0.5em'>The Bingo bonus starts at 50 points with 1 point deducted every few seconds. To score Bingo, players must get a complete row, column or diagonal before the time or words run out.</p><p style='padding-top:0.5em; padding-bottom:0.5em'><span style='font-weight:bold; background-color:#573F06; border:#E49C58 ridge;  padding:0em 0.2em'>Keyboard Shortcuts:</span></p><p><img style='width: 3.6em; vertical-align:middle' src='images/buttons/key_space.png' /> Start / Repeat Item</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Esc.png' /> Stop / Reset</p>";
			break;
		case "read_say":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Read and Say:</span> develops reading and pronunciation skills by focussing on the <b>relationship</b> between spelling and pronunciation (Phonics). Learners must say the sound that each letter or group of letters represents, and blend these sounds into syllables.</p><p style='padding-top:0.5em'><span style='font-weight:bold; background-color:blue; border:#7bd8e8 ridge; padding:0em 0.2em'>Scoring:</span> This is a human-assessed activity, meaning that a teacher, parent or more advanced student is needed to award points. Generally, 2 points are given if the student can read the text by themselves, and 1 point if they can read it with some assistance.</p><p style='padding-top:0.5em; padding-bottom:0.5em'><span style='font-weight:bold; background-color:#573F06; border:#E49C58 ridge;  padding:0em 0.2em'>Keyboard Shortcuts:</span></p><div style='margin:0.2em 5em 0.5em 5em'><div style='float:left; text-align:center'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_left.png' /></p><p><span style='color:red'>cannot</span> read</p></div><div style='float:right; text-align:center'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_right.png' /></p><p>read <span style='color:#f60'>with help</span></p><p>(1 point)</p></div><div style='text-align:center; width:50%; margin-left:auto;margin-right:auto'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_down.png' /></p><p>read <span style='color:green'>without help</span></p><p>(2 points)</p></div></div><p><img style='width: 3.6em; vertical-align:middle' src='images/buttons/key_space.png' /> Start</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Esc.png' /> Stop / Reset</p>";
			break;
		case "phon_bingo":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Phonics Bingo:</span> is a listening activity, similar to Vocabulary Bingo, but focussing on the relationship between spelling and pronunciation (Phonics). Learners listen to syllables and words and must select matching text from the grid. Each item is repeated 3 times before proceeding to the next.</p><p style='padding-top:0.5em'><span style='font-weight:bold; background-color:blue; border:#7bd8e8 ridge; padding:0em 0.2em'>Scoring:</span> 1 point for correct selection while the item is current; 1/2 point if the item was played previously. Selecting a cell that has not been played yet results in a 5 second penalty. </p><p style='padding-top:0.5em'>The Bingo bonus starts at 50 points with 1 point deducted every few seconds. To score Bingo, players must get a complete row, column or diagonal before the time or words run out.</p><p style='padding-top:0.5em; padding-bottom:0.5em'><span style='font-weight:bold; background-color:#573F06; border:#E49C58 ridge;  padding:0em 0.2em'>Keyboard Shortcuts:</span></p><p><img style='width: 3.6em; vertical-align:middle' src='images/buttons/key_space.png' /> Start / Repeat Item</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Esc.png' /> Stop / Reset</p>";
			break;
		case "phon_bingo_class":
			document.getElementById("helpBox").innerHTML='<p style="text-align:center; margin-bottom:1em;"><span style="padding:0 0.3em 0 0.3em; background-color:orange; color:black; border:0.15em grey ridge;  font-weight:bold; font-size:150%; ">Under Construction</span></p><div style="text-align:center"><img style="width: 50%" src="images/labels/under_construction.gif" /></div>Sorry, <span style="color:cyan; font-weight:bold">Phonics Bingo: Classroom Version</span> is still under construction.';
			break;
		case "numbers":
			document.getElementById("helpBox").innerHTML="<p><span style='font-weight:bold; background-color:green; border: ridge; padding: 0em 0.2em'>Say the Number:</span> is similar to Say the Word and Read and Say, but focusses on numbers. Learners are presented with a number, and must pronounce it as clearly as possible.</p><p style='padding-top:0.5em'><span style='font-weight:bold; background-color:blue; border:#7bd8e8 ridge; padding:0em 0.2em'>Scoring:</span> This is a human-assessed activity, meaning that a teacher, parent or more advanced student is needed to award points.</p><p style='padding-top:0.5em'>There are two ways to score. When starting a new unit, focus on independence, giving 2 points if students can read the numbers without help (see Read and Say). Once students can generally read without help, move the focus to give 2 points for clarity (see Say the Word).</p><p style='padding-top:0.5em'><span style='font-weight:bold; background-color:#573F06; border:#E49C58 ridge;  padding:0em 0.2em'>Keyboard Shortcuts:</span> Click on <span id='b_method' style='border:#7bd8e8 ridge ; background-color:blue; padding:0em 0.2em; cursor: pointer' onclick='swapScoring()'>Scoring Method 1</span> to see alternative.</p><div id='scoringM1' style='margin:0.5em 5em 0.5em 5em'><div style='float:left; text-align:center'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_left.png' /></p><p><span style='color:red'>cannot</span> read</p></div><div style='float:right; text-align:center'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_right.png' /></p><p>read <span style='color:#f60'>with help</span></p><p>(1 point)</p></div><div style='text-align:center; width:50%; margin-left:auto;margin-right:auto'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_down.png' /></p><p>read <span style='color:green'>without help</span></p><p>(2 points)</p></div></div><div id='scoringM2' style='margin:0.5em 5em 0.5em 5em; display:none'><div style='float:left; text-align:center'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_left.png' /></p><p style='color:red'>incorrect</p></div><div style='float:right; text-align:center'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_right.png' /></p><p style='color:#f60'>correct</p><p>(1 point)</p></div><div style='text-align:center; width:50%; margin-left:auto;margin-right:auto'><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_down.png' /></p><p style='color:green'>correct and clear</p><p>(2 points)</p></div></div><p><img style='width: 3.6em; vertical-align:middle' src='images/buttons/key_space.png' /> Start</p><p><img style='width: 1.7em; vertical-align:middle' src='images/buttons/key_Esc.png' /> Stop / Reset</p>";
			break;
		case "actions":
			document.getElementById("helpBox").innerHTML="Actions";
			break;
		case "animals":
			document.getElementById("helpBox").innerHTML="Animals";
			break;
		case "body":
			document.getElementById("helpBox").innerHTML="Parts of the Body";
			break;
		case "clothes":
			document.getElementById("helpBox").innerHTML="Clothes";
			break;
		case "describing":
			document.getElementById("helpBox").innerHTML="Describing";
			break;
		case "food":
			document.getElementById("helpBox").innerHTML="Food and Drinks";
			break;
		case "free_time":
			document.getElementById("helpBox").innerHTML="Free Time";
			break;
		case "occupations":
			document.getElementById("helpBox").innerHTML="Occupations";
			break;
		case "places_and_transport":
			document.getElementById("helpBox").innerHTML="places_and_transport";
			break;
		case "school":
			document.getElementById("helpBox").innerHTML="School";
			break;
		case "time":
			document.getElementById("helpBox").innerHTML="Time";
			break;

	}
	if (bCol!="") {
		document.getElementById("helpWin").style.borderColor=bCol;
	}
	if (w!="") {
		document.getElementById("helpWin").style.width=w;
	}
	document.getElementById("helpWin").style.top =yPos+"em";
	if (action=="open") {
		document.getElementById("helpWin").style.display="block";
	}
}

function swapScoring() {
	if (document.getElementById("b_method").innerHTML=="Scoring Method 1") {
		document.getElementById("b_method").innerHTML="Scoring Method 2";
		document.getElementById("scoringM1").style.display="none";
		document.getElementById("scoringM2").style.display="block";
	}
	else {
		document.getElementById("b_method").innerHTML="Scoring Method 1";
		document.getElementById("scoringM2").style.display="none";
		document.getElementById("scoringM1").style.display="block";
	}
}

function topicTitle(title) {
	switch (title) {
		case "actions":
			return("Actions");
		break;
		
		case "animals":
			return("Animals");
		break;
		
		case "beach":
			return("At the Beach");
		break;

		case "body":
			return("Parts of the Body");
		break;
		
		case "clothes":
			return("Clothes");
		break;
		
		case "describing":
			return("Describing");
		break;
		
		case "easy":
			return("Easy Reading");
		break;

		case "finding game":
			return("The Finding Game");
		break;

		case "food":
			return("Food and Drinks");
		break;
		
		case "free_time":
			return("Free Time");
		break;
		
		case "grammar":
			return("Grammar and Punctuation");
		break;
		
		case "home":
			return("Home");
		break;
		
		case "location":
			return("Location");
		break;

		case "multi":
			return("Multi Topics");
		break;
		
		case "occupations":
			return("Occupations");
		break;

		case "onet_voc":
			return("ONET");
		break;

		case "people":
			return("People");
		break;
		
		case "places_and_transport":
			return("Places and Transport");
		break;
		
		case "school":
			return("School");
		break;
		
		case "time":
			return("Time");
		break;
		
		case "weather":
			return("Weather and Seasons");
		break;
	}
}

function selectFB(mode) {
	fbMode = mode;
	if (mode == "recent") {
		document.getElementById("errTitle").innerHTML = "Recent Errors";
		document.getElementById("fbRecent").className="optSelected";
		document.getElementById("fbCommon").className="optSelect";
		recentErrors("");
	} else {
		document.getElementById("errTitle").innerHTML = "Common Errors";
		document.getElementById("fbRecent").className="optSelect";
		document.getElementById("fbCommon").className="optSelected";
		upcmnErrs("");
	}
}

function selectTimePenalty(mode) {

	timePenalty=mode;
	if (mode == false) {
		document.getElementById("tPenaltyOff").className="optSelected";
		document.getElementById("tPenaltyOn").className="optSelect";
	}
	else {
		document.getElementById("tPenaltyOn").className="optSelected";
		document.getElementById("tPenaltyOff").className="optSelect";
	}
}

function setFinWarning(mode) {
	finWarning=mode;
	if (mode == false) {
		document.getElementById("finWarningoff").className="optSelected";
		document.getElementById("finWarningOn").className="optSelect";
	}
	else {
		document.getElementById("finWarningOn").className="optSelected";
		document.getElementById("finWarningoff").className="optSelect";
	}
}


function selectScoreSplit(mode) {
	scoreSplit = mode;
	if (mode==true) {
		if (uMode=="say_word" || uMode=="numbers") {
			document.getElementById("scoreClearSplitOn").className="optSelected";
			document.getElementById("scoreClearSplitOff").className="optSelect";
			document.getElementById("score").style.display="none";
			document.getElementById("correct").style.display="inline";
			document.getElementById("clear").style.display="inline";
			document.getElementById("total").style.display="inline";
		}
		else {
			setMsg("err_pron_points");
		}
	}
	else {
		document.getElementById("scoreClearSplitOff").className="optSelected";
		document.getElementById("scoreClearSplitOn").className="optSelect";
		document.getElementById("score").style.display="inline";
		document.getElementById("correct").style.display="none";
		document.getElementById("clear").style.display="none";
		document.getElementById("total").style.display="none";
	}
}

function setDBStartPage(page) {
	if (page > (d_B_ExArray.length*2)-1) {
		setMsg("err_db_start");
	}
	else {
	document.getElementById("setDBPage"+DBStartPage).className = "optSelect";
	document.getElementById("setDBPage"+page).className = "optSelected";
	DBStartPage=page;
	DBPageNum=DBStartPage;
	}
}

function setComCats (){

	comCats.length=0;
	for (var i=0;i<availCats.length;i++) {
		comCats[i] = availCats[i];
	}

	for (var i=0; i<comCats.length;i++){
		if (topics_no_multi.indexOf(comCats[i])!=-1){
			comCats.splice(i,1);
			i--;
		}
	}

	comCatsBoxes="open";
	comCatsSelect();
}


function comCatsSelect(){
	if (curr_topic_title!="multi") {
		selectTopic("multi");
	}
	if (comCatsBoxes=="closed"){
		for (var i=0;i<availCats.length;i++){

			if (topics_no_multi.indexOf(availCats[i])==-1){
				document.getElementById("ch_"+availCats[i]).style.display="inline";
				document.getElementById("in_"+availCats[i]).style.display="inline";
				if (comCats.indexOf(availCats[i])!=-1){
					document.getElementById("ch_"+availCats[i]).src="images/buttons/yes_button.png";
				}
			}
		}
		comCatsBoxes="open";
		document.getElementById("b_comCats_select").src="images/buttons/select-OK_button.png";
	}
	else{
		for (var i=0;i<topics_all.length;i++){
			if (topics_no_multi.indexOf(topics_all[i])==-1){
				document.getElementById("ch_"+topics_all[i]).style.display="none";
				document.getElementById("in_"+topics_all[i]).style.display="none";
				document.getElementById("ch_"+topics_all[i]).src="images/buttons/no_button.png";
			}
		}
		comCatsBoxes="closed";
		document.getElementById("b_comCats_select").src="images/buttons/select_button.png";
	}
}

function modComCats(cat){
	audCtrls(aswitch, "play");
	var catPos = comCats.indexOf(cat);
	if (catPos!=-1){
		if (comCats.length>1){
			comCats.splice(catPos,1);
			document.getElementById("ch_"+cat).src="images/buttons/no_button.png";
		}
		else {
			setMsg("err_topics");
			document.getElementById("ch_"+cat).src="images/buttons/yes_button.png";
		}
	}
	else {
		comCats.splice(0,0,cat);
		document.getElementById("ch_"+cat).src="images/buttons/yes_button.png";
	}
	setAllVocArray();
	if (uMode=="voc_bingo" && all_voc_array.length <24) {
		setMsg("err_bingo_multi");
		comCats.splice(0,0,cat);
		document.getElementById("ch_"+cat).src="images/buttons/yes_button.png";
	}
}

function setButtonStatus(button,action,param1,param2) {
	var click=function() {};
	var down=function() {};
	var ghosted="_g";

	if (action != "") {
		if (param2) {
			click=function() {action(param1,param2);};
		}
		else if (param1) {
			click=function() {action(param1);};
		}
		else {
			click=function() {action();};
		}

		down=function() {b_press(this);};
		ghosted="";
	}
	document.getElementById("b_"+button).src="images/buttons/"+button+ghosted+".png";
	document.getElementById("b_"+button).onclick=click;
	document.getElementById("b_"+button).onmousedown=down;
	document.getElementById("b_"+button).onmouseup=down;
}


function addUndo() {
	var t_array = new Array();

	if (curr_topic_title=="onet_voc") {
		var prop_name=(curr_topic_title);
		var undo_ind=(curr_topic_title+"_pos");
		t_array=getOnetUserVocab();
	}
	else {
		var prop_name=(currentLev+"_"+curr_topic_title);
		var undo_ind=(currentLev+"_"+curr_topic_title+"_pos");
		t_array=localStorage[currentLev+"_"+curr_topic_title].split(",");
	}
	

	if (undo_obj.hasOwnProperty(prop_name)==false) {
		undo_obj[prop_name]= new Array();
		undo_obj[undo_ind]="x";
	}
	if (undo_obj[undo_ind]!="x" && (undo_obj[undo_ind]+1)<undo_obj[prop_name].length) {
		undo_obj[prop_name].splice((undo_obj[undo_ind]+1),(undo_obj[prop_name].length-(undo_obj[undo_ind]+1)));
	}
	undo_obj[prop_name].push(t_array);
	undo_obj[undo_ind]=undo_obj[prop_name].length-1;
	setUndoRedo();
}


function adjustUserTopics(id,action){
	addUndo();
	if (action=="clear") {
		vocArray=new Array ();
		for (var i=0;i<tempArray.length;i++) {
			document.getElementById("b_adj_" + i).src="images/buttons/no_button.png";
			document.getElementById("b_adj_" + i).onclick = function() {adjustUserTopics(this.id,"add");};
		}
	}

	if (action=="delete") {
		if (curr_topic_title!="onet_voc") {
			var voc = (tempArray[id.substr(6)]);
			var ind = vocArray.indexOf(voc);
		}
		else {
			var voc = tempArray[id.substr(6)].txt;
			if (typeof voc == "object") {
				voc = voc.toString();
			}
			var tArray=[];
			for (var j=0; j<vocArray.length; j++) {
				tArray[j]=vocArray[j].txt;
				if (typeof tArray[j] == "object") {
					tArray[j] = tArray[j].toString();
				}
			}

			var ind = tArray.indexOf(voc);
		}
		vocArray.splice(ind,1);
		document.getElementById(id).src="images/buttons/no_button.png";
		document.getElementById(id).onclick = function() {adjustUserTopics(this.id,"add");};
	}
	
	else if (action=="add") {
		document.getElementById(id).src="images/buttons/yes_button.png";
		document.getElementById(id).onclick = function() {adjustUserTopics(this.id,"delete");};
		
		if (curr_topic_title!="onet_voc") {
			var voc = (tempArray[id.substr(6)]);
			vocArray.push(voc);
			vocArray.sort(function (a, b) {
				return a.toLowerCase().localeCompare(b.toLowerCase());
			});
		}
		else {
			var voc = tempArray[id.substr(6)].txt;
			if (typeof voc == "object") {
				voc=voc[0];
			}
			var tArray=[];
			for (var j=0; j<vocArray.length; j++) {
				tArray[j]=vocArray[j].txt;
				if (typeof tArray[j] == "object") {
					tArray[j]= tArray[j][0];
				}
			}
			tArray.push(voc);
			tArray.sort(function (a, b) {
				return a.toLowerCase().localeCompare(b.toLowerCase());
			});
			var ind = tArray.indexOf(voc);
			voc = tempArray[id.substr(6)];
			vocArray.splice(ind, 0, voc); 
		}
	}
	
	if (curr_topic_title!="onet_voc") {
		localStorage[currentLev+"_"+curr_topic_title]=vocArray;
		if (localStorage[currentLev+"_"+curr_topic_title]=="") {
			localStorage[currentLev+"_"+curr_topic_title]=[];
		}
	}
	else {
		setOnetUserVocab();
	}
	setUserData();
}

function setUndoRedo(caller) {

	if (curr_topic_title=="onet_voc") {
		var prop_name=(curr_topic_title);
		var undo_ind=(curr_topic_title+"_pos");
	}
	else if (caller!="topics") {
		var prop_name=(currentLev+"_"+curr_topic_title);
		var undo_ind=(currentLev+"_"+curr_topic_title+"_pos");
	}

	var undo_num = 0;
	var redo_num = 0;

	if (undo_obj.hasOwnProperty(prop_name)) {
		undo_num = (undo_obj[undo_ind]+1);
		redo_num = ((undo_obj[prop_name].length)-(undo_obj[undo_ind])-2);
		if (redo_num<0) {
			redo_num=0;
		}
	}

	if (undo_num>0) {
		setButtonStatus("undo", setVocChoiceTable,"undo");
	}
	else {
		setButtonStatus("undo","");
	}
	if (redo_num>0) {
		setButtonStatus("redo", setVocChoiceTable,"redo");
	}
	else {
		setButtonStatus("redo","");
	}
	document.getElementById("undo_avail").innerHTML="("+undo_num+" available)";
	document.getElementById("redo_avail").innerHTML="("+redo_num+ " available)";
}


function setVocChoiceTable(button, data_1) {
	if (data_1=="voc_bingo") {
		bing_setup=true;
	}
	if (curr_topic_title=="multi") {
		selectTopic(availCats[0]);
	}
	else {
		var dir =curr_topic_dir;
	}

	var cat=curr_topic_title;
	var level=currentLev;
	var vm=voc_mode;
	if (curr_topic_title=="onet_voc") {
		var prop_name=(curr_topic_title);
		var undo_ind=(curr_topic_title+"_pos");
	}
	else {
		var prop_name=(currentLev+"_"+curr_topic_title);
		var undo_ind=(currentLev+"_"+curr_topic_title+"_pos");
	}
		

	switch (button) {

		case "default":
			addUndo();
			setUndoRedo();
			if (curr_topic_title!="onet_voc") {
				voc_mode="default";
				setVocArrays();
				localStorage[currentLev+"_"+curr_topic_title]=vocArray;
				voc_mode=vm;
			}
			else {
				setOnetVocab();
				setOnetUserVocab();
			}
			setVocChoiceTable("show_selected");
			voc_table_state="show_topic";
			return;
		break;

		case "clone_topic":
			setMsg("choice_clone","msg_clone");
			return;
		break;

		case "clone_topic_cont":
			if (currentLev==data_1) {
				return;
			}
			if (localStorage[data_1+"_"+curr_topic_title]) {
				localStorage[currentLev+"_"+curr_topic_title]=localStorage[data_1+"_"+curr_topic_title];
				setMsg("clone_success","success",data_1);
			}
			else {
				setMsg("err_no_clone","",data_1);
				return;
			}

			setVocChoiceTable("show_selected");
		break;

		case "show_selected":
			if (curr_topic_title!= "onet_voc") {
				if (localStorage[currentLev+"_"+curr_topic_title]=="") {
					tempArray= new Array();
				}
				else {
					tempArray=localStorage[currentLev+"_"+curr_topic_title].split(",");
				}
			}
			else {
				tempArray=getOnetUserVocab();
			}
			voc_table_state="show_topic";
		break;

		case "show_topic":
			setUndoRedo();

			if (curr_topic_title!= "onet_voc") {
				voc_mode="default";
				setVocArrays();
				dir=curr_topic_dir;
				voc_mode=vm;
				tempArray=localStorage[currentLev+"_"+curr_topic_title].split(",");
			}
			else {
				setOnetVocab();
				tempArray=getOnetUserVocab();
			}
			
			setButtonStatus("show_all",setVocChoiceTable,"show_all");
			setButtonStatus("show_selected",setVocChoiceTable,"show_selected");
			voc_table_state="show_topic";
		break;

		case "show_all":
			voc_mode="default";
			if (curr_topic_title!="onet_voc") {
				tempArray = masterVoc();
			}
			else {
				setOnetVocab();
				tempArray=[];
				for (var i=0; i<vocArray.length; i++) {
					tempArray[i]=vocArray[i];
				}
				vocArray=getOnetUserVocab();
			}
			voc_mode=vm;
			setButtonStatus("show_all",setVocChoiceTable,"show_all");
			setButtonStatus("show_selected",setVocChoiceTable,"show_selected");
			voc_table_state="show_topic";
		break;

		case "show_all_topics":
			var level=currentLev;
			var dir = "titles";
			vocArray=localStorage["topics_gen_"+currentLev].split(",");
			tempArray=topics_all_editable.split(",");
			voc_table_state="topics";
		break;

		case "topics":
			if (curr_topic_title=="onet_voc") {
				selectTopic(availCats[0]);
			}
			if (vocArray.length<4 && localStorage["topics_gen_" + currentLev].split(",").indexOf(curr_topic_title) != -1) {
				modUserAvailTopics(curr_topic_title,"delete");
				return;
			}
			var prevRows=document.getElementById("voc_tab").rows.length;
			var dir = "titles";

			setUndoRedo("topics");
			tempArray=localStorage["topics_gen_"+currentLev].split(",");
			for (var i=0;i<tempArray.length;i++) {
				if (topics_no_edit.indexOf(tempArray[i])!=-1) {
					tempArray.splice(i,1);
				}
			}

			var num_topics=tempArray.length;

			document.getElementById("voc_tab_div").style.height="8.5em";
			document.getElementById("lev_tab_div").style.display="block";
			setButtonStatus("show_all",setVocChoiceTable,"show_all_topics");
			setButtonStatus("show_selected",setVocChoiceTable,"topics");
			voc_table_state="topics";
		break;

		case "select_all":
			addUndo();

			if (curr_topic_title!="onet_voc") {
				localStorage[currentLev+"_"+curr_topic_title]=tempArray;
				vocArray=localStorage[currentLev+"_"+curr_topic_title].split(",");
			}
			else {
				vocArray=[];
				for (var i=0; i<tempArray.length;i++) {
					vocArray[i]=tempArray[i];
				}
				setOnetUserVocab();
			}
			
			voc_table_state="show_topic";
			break;

		case "undo":
			var x = undo_obj[undo_ind];
			if (x==(undo_obj[prop_name].length)-1) {
				addUndo();
				undo_obj[undo_ind]--;
			}
			if (undo_obj[prop_name][x]=="") {
				undo_obj[prop_name][x]=[];
			}
			localStorage[prop_name]=(undo_obj[prop_name][x]);
			var tempArray2 = (undo_obj[prop_name][x]);
			vocArray= new Array();

			if (curr_topic_title=="onet_voc") {
				var tArray=[];
				for (var j=0; j<tempArray.length; j++) {
					tArray[j]=tempArray[j].txt;
					if (typeof tArray[j] == "object") {
						tArray[j]= tArray[j][0];
					}
				}
			}

			for (var i=0; i<tempArray2.length;i++) {
				vocArray[i]=tempArray2[i];
				
				if (curr_topic_title!="onet_voc") {
					if (tempArray.indexOf(vocArray[i])==-1) {
						tempArray.push(vocArray[i]);
						tempArray.sort(function (a, b) {
							return a.toLowerCase().localeCompare(b.toLowerCase());
						});
					}
				}
				else {
					var voc = vocArray[i].txt;
					if (typeof voc == "object") {
						voc=voc[0];
					}
					if (tArray.indexOf(voc)==-1) {
						tArray.push(voc);
						tArray.sort(function (a, b) {
							return a.toLowerCase().localeCompare(b.toLowerCase());
						});
						var ind = tArray.indexOf(voc);
						tempArray.splice(ind, 0, vocArray[i]); 
					}
				}
			}
			if (curr_topic_title=="onet_voc") {
				setOnetUserVocab();
			}
			undo_obj[undo_ind]--;
			setUndoRedo();
		break;

		case "redo":
			var x = (undo_obj[undo_ind])+2;
			if (undo_obj[prop_name][x]=="") {
				undo_obj[prop_name][x]=[];
			}
			localStorage[prop_name]=(undo_obj[prop_name][x]);
			var tempArray2 = (undo_obj[prop_name][x]);
			undo_obj[undo_ind]++;
			vocArray= new Array();

			if (curr_topic_title=="onet_voc") {
				var tArray=[];
				for (var j=0; j<tempArray.length; j++) {
					tArray[j]=tempArray[j].txt;
					if (typeof tArray[j] == "object") {
						tArray[j]= tArray[j][0];
					}
				}
			}
			for (var i=0; i<tempArray2.length;i++) {
				vocArray[i]=tempArray2[i];

				if (curr_topic_title!="onet_voc") {
					if (tempArray.indexOf(vocArray[i])==-1) {
						tempArray.push(vocArray[i]);
						tempArray.sort(function (a, b) {
							return a.toLowerCase().localeCompare(b.toLowerCase());
						});
					}
				}
				else {
					var voc = vocArray[i].txt;
					if (typeof voc == "object") {
						voc=voc[0];
					}
					if (tArray.indexOf(voc)==-1) {
						tArray.push(voc);
						tArray.sort(function (a, b) {
							return a.toLowerCase().localeCompare(b.toLowerCase());
						});
						var ind = tArray.indexOf(voc);
						tempArray.splice(ind, 0, vocArray[i]); 
					}
				}
			}
			if (curr_topic_title=="onet_voc") {
				setOnetUserVocab();
			}
			setUndoRedo();
		break;
	}

	if (button!="topics" && button!="show_all_topics" && button!="voc_bingo") {
		document.getElementById("voc_tab_div").style.height="10.73em";
		document.getElementById("lev_tab_div").style.display="none";
		document.getElementById("save_load_grp").style.display="none";
		document.getElementById("topic_clone_grp").style.display="block";
		document.getElementById("topic_default_grp").style.display="block";
		document.getElementById("all_default_grp").style.display="none";
		setButtonStatus("select_all",setVocChoiceTable,"select_all");
		setButtonStatus("clear_all",adjustUserTopics,"","clear");
		setButtonStatus("reset_to_default",setVocChoiceTable,"default");
		setButtonStatus("reset_to_saved",loadSetup,document.getElementById("b_reset_to_saved"));
	}
	else {
		setButtonStatus("select_all","");
		setButtonStatus("clear_all","");
		setButtonStatus("reset_to_default","");
		setButtonStatus("reset_to_saved","");
		document.getElementById("save_load_grp").style.display="block";
		document.getElementById("all_default_grp").style.display="block";
		document.getElementById("topic_clone_grp").style.display="none";
		document.getElementById("topic_default_grp").style.display="none";
	}
	
	var imgInd = 0;
	var txt ="";
	var img="";
	var yes_no="";
	var action="";
	var numRows= (Math.ceil(tempArray.length/5));
	var prevRows=document.getElementById("voc_tab").rows.length;

	if (curr_topic_title=="onet_voc") {
		var tempArray3 = new Array();
		for (var p=0; p<vocArray.length; p++) {
			if (typeof vocArray[p]=="object") {
				tempArray3[p]=vocArray[p].txt.toString();
			}
			else {
				tempArray3[p]=vocArray[p].txt;
			}
		}
	}
	

	for (var k=0;k<prevRows; k++) {
		document.getElementById("voc_tab").deleteRow(0);
	}

	for (var i=0;i<numRows;i++){
	 	var imgRow = document.getElementById("voc_tab").insertRow(-1);
	 	var vocRow = document.getElementById("voc_tab").insertRow(-1);
	 	for (var j=0; j<5; j++) {
	 		if (curr_topic_title!="onet_voc") {
	 			txt =tempArray[imgInd];
	 		}
	 		else {
	 			txt =tempArray[imgInd].txt;
	 		}
	 		
			if (curr_topic_title=="multi") {
				var slPos = txt.indexOf("/")+1;
				txt =txt.slice(slPos);
			}
	 		imgRow.insertCell(j);
	 		vocRow.insertCell(j);
	 		if (button!="topics" && button!="show_all_topics") {
	 			vocRow.cells[j].className="vocCell";
	 		}
	 		imgRow.cells[j].className="vocImgCell";
	 		if (button!="topics" && button!="show_all_topics") {
	 			vocRow.cells[j].innerHTML=txt;
	 		}
	 		if (button=="init" || button=="show_all" || button=="undo" || button=="redo" || button=="show_all_topics" ) {
	 			if (curr_topic_title!="onet_voc") {
	 				if (vocArray.indexOf(txt)!=-1){
						yes_no="yes";
						action="'delete'";
					}
					else {
						yes_no="no";
						action="'add'";
					}
	 			}
	 			else {
					if (typeof txt == "string") {
						if (tempArray3.indexOf(txt)!=-1){
							yes_no="yes";
							action="'delete'";
						}
						else {
							yes_no="no";
							action="'add'";
						}
					}
					else {
						if (tempArray3.indexOf(txt.toString())!=-1){
							yes_no="yes";
							action="'delete'";
						}
						else {
							yes_no="no";
							action="'add'";
						}
					}
	 			}
					
		 	}
		 	else {
		 		yes_no="yes";
		 		action="'delete'";
		 	}
		 	img=processSubst(txt);

		 	if (button!="topics" && button!="show_all_topics" && curr_topic_title!="onet_voc") {
		 		imgRow.cells[j].innerHTML='<div style="position: relative"><img id="b_adj_'+((i*5)+j)+'" style="position:absolute;width: 25%;" src="images/buttons/'+yes_no+'_button.png" onclick= "adjustUserTopics(this.id,'+action+')" />\
		 		<img width="100%" src="images/vocab/' + dir +'/' +img+ '.jpg" /></div>';
		 	}
		 	else if (button=="topics" || (button=="show_all_topics" && (vocArray.indexOf(txt)!=-1))) {
		 		imgRow.cells[j].innerHTML='<div style="position: relative"><img id=b_adj_'+((i*5)+j)+' style="position:absolute;width: 25%;" src="images/buttons/'+yes_no+'_button.png" onclick= "setMsg(\'warn_delete_topic\',\'OK_Cancel\',\''+txt+'\')" /><img width="100%" src="images/vocab/' + dir +'/' 
		 		+img+ '.jpg" onclick= "selectTopic(\''+txt+'\');setVocChoiceTable(\'show_topic\')"/></div>';
		 	}
		 	else if (button=="show_all_topics") {
		 		imgRow.cells[j].innerHTML='<div style="position: relative"><img id=b_adj_'+((i*5)+j)+' style="position:absolute;width: 25%;" src="images/buttons/'+yes_no+'_button.png" onclick= "setMsg(\'choice_add_topic\',\'OK_Cancel\',\''+txt+'\')" /><img width="100%" src="images/vocab/' + dir +'/' 
		 		+img+ '.jpg" onclick= "modUserAvailTopics(\''+txt+'\',\'add\')"/></div>';
		 	}
		 	else if (curr_topic_title=="onet_voc") {
		 		img=tempArray[imgInd].src;
		 		if (typeof img == "object") {
		 			img=img[0];
		 		}

				imgRow.cells[j].innerHTML='<div style="position: relative"><img id="b_adj_'+((i*5)+j)+'" style="position:absolute;width: 25%;" src="images/buttons/'+yes_no+'_button.png" onclick= "adjustUserTopics(this.id,'+action+')" />\
				<img width="100%" src ='+ img+' /></div>';
		 	}

	 		if (imgInd<tempArray.length-1) {
		 		imgInd++;
		 	}
		 	else {
		 		break;
		 	}
	 	}
	 }
	setDisplays({bingoDisplay:"none",bingoScore:"none",bingoWords:"none",book_overlay:"none",choiceDiv:"none",errDiv:"none",imageDiv:"block",livesDispTop:"none",phonDisplay:"none",
				phonUSelect:"none",score:"none",timer:"block",mainImage:"none",welcomeDiv:"none",attributionDiv:"none", contentSelect:"none",controls_central:"none",order_div:"none",
				voc_choice_controls:"block", b_reset:"block",user_settings_data:"block",b_help:"none",left_pane:"none",voc_tab:"table",onet_voc_inst:"none",save_onet_grp:"none"});
	if (curr_topic_title=="onet_voc") {
		setDisplays({user_level_data:"none",onet_voc_inst:"block",topic_clone_grp:"none",save_onet_grp:"block"});
	}
	if (bing_setup) {
		setDisplays({bing_class_display:"none",user_level_data:"none",voc_bingo_setup:"block"});
	}
	else{
		setDisplays({user_level_data:"block",voc_bingo_setup:"none"});
	}
	
	document.getElementById("voc_tab_div").style.marginLeft="3%";

	if (tempArray.length<5 && tempArray.length>0) {
		for (var i=tempArray.length; i<5;i++){
			document.getElementById("voc_tab").rows[0].insertCell(i);
			document.getElementById("voc_tab").rows[0].cells[i].innerHTML='<img width="100%" src="images/formatting/1000X597clear_spacer.png" />';
		}
	}
	setUserData(button,num_topics);
}

function makeVocBingoSheets (caller) {

	if (caller=="new") {
		var title="Vocabulary Bingo: "+currentLev+" "+topicTitle(curr_topic_title);
		var doc_title="Vocabulary Bingo - "+topicTitle(curr_topic_title)+" - "+game_code+".pdf";
		var game_code=Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString()+"_"+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString();
		var game_id="VB_"+currentLev+"_"+curr_topic_title+"_"+game_code;

		setVocBingSheet();

		if (!localStorage.voc_bing_games) {
			localStorage.voc_bing_games=game_id;
		}
		else {
			var t_array_games=localStorage.voc_bing_games.split(",");
			t_array_games.push(game_id);
			t_array_games.sort();
			localStorage.voc_bing_games=t_array_games;
		}
		localStorage[game_id]="English Builder Vocabulary Bingo Version: 1.0\ngame_id: ("+game_id+")\nbingArray: ("+bingArray+")";
	}
	else {
		var t_string=localStorage[localStorage.curr_vb_game];
		var t_start=t_string.indexOf("bingArray")+12;
		var t_end=t_string.lastIndexOf(")");
		t_string=t_string.slice(t_start,t_end);
		bingArray=t_string.split(",");

		t_string=localStorage.curr_vb_game;
		var title="Vocabulary Bingo: "+t_string.slice(3,5)+" "+topicTitle(t_string.slice(6,-10));
		var game_id=t_string;
		//alert(title);

		//return;
	}

	var font_sizes={};
	for (var i=0;i<bingArray.length;i++) {
		document.getElementById('voc_width_tester').innerHTML=bingArray[i];
		if (bingArray[i].indexOf(" ")!= -1 || document.getElementById('voc_width_tester').offsetWidth<97) {
			font_sizes[bingArray[i]]=21;
		}
		else {
			font_sizes[bingArray[i]]=Math.round(21*(97/document.getElementById('voc_width_tester').offsetWidth));
		}
	}

	var t_array1 = bingArray.toString().split(",");
	shuffle(t_array1);
	var t_array2 = bingArray.toString().split(",");
	shuffle(t_array2);
	var t_array3 = bingArray.toString().split(",");
	shuffle(t_array3);
	var t_array4 = bingArray.toString().split(",");
	shuffle(t_array4);
	var t_array5 = bingArray.toString().split(",");
	shuffle(t_array5);
	var t_array6 = bingArray.toString().split(",");
	shuffle(t_array6);
	var t_array7 = bingArray.toString().split(",");
	shuffle(t_array7);
	var t_array8 = bingArray.toString().split(",");
	shuffle(t_array8);
	var t_array9 = bingArray.toString().split(",");
	shuffle(t_array9);
	var t_array10 = bingArray.toString().split(",");
	shuffle(t_array10);
	var t_array11 = bingArray.toString().split(",");
	shuffle(t_array11);
	var t_array12 = bingArray.toString().split(",");
	shuffle(t_array12);
	var t_array13 = bingArray.toString().split(",");
	shuffle(t_array13);
	var t_array14 = bingArray.toString().split(",");
	shuffle(t_array14);
	var t_array15 = bingArray.toString().split(",");
	shuffle(t_array15);
	var t_array16 = bingArray.toString().split(",");
	shuffle(t_array16);
	var t_array17 = bingArray.toString().split(",");
	shuffle(t_array17);
	var t_array18 = bingArray.toString().split(",");
	shuffle(t_array18);
	var t_array19 = bingArray.toString().split(",");
	shuffle(t_array19);
	var t_array20 = bingArray.toString().split(",");
	shuffle(t_array20);
	var t_array21 = bingArray.toString().split(",");
	shuffle(t_array21);
	var t_array22 = bingArray.toString().split(",");
	shuffle(t_array22);
	var t_array23 = bingArray.toString().split(",");
	shuffle(t_array23);
	var t_array24 = bingArray.toString().split(",");
	shuffle(t_array24);
	var t_array25 = bingArray.toString().split(",");
	shuffle(t_array25);
	var t_array26 = bingArray.toString().split(",");
	shuffle(t_array26);
	var t_array27 = bingArray.toString().split(",");
	shuffle(t_array27);
	var t_array28 = bingArray.toString().split(",");
	shuffle(t_array28);
	var t_array29 = bingArray.toString().split(",");
	shuffle(t_array29);
	var t_array30 = bingArray.toString().split(",");
	shuffle(t_array30);
	var t_array31 = bingArray.toString().split(",");
	shuffle(t_array31);
	var t_array32 = bingArray.toString().split(",");
	shuffle(t_array32);

	pdfMake.fonts = {
		Nunito: {
			normal: "Nunito-Regular.ttf",
		  	bold: "Nunito-Bold.ttf"
	  	},
	  	Comic: {
	  		normal: "ComicNeue-Regular.ttf",
	  		bold: "ComicNeue-Bold.ttf"
	  	}
	}

	var bing_pdf = { 
		pageSize: 'A4',
		background: {image: 'bing_back.jpg', width:594},
		info: {
			title: title,
			author: 'Ian Smith',
		},
		content: [
			{	table: {
					headerRows: 7,
					widths:[15,"*",15],
					body: [
						[{ text: title, fontSize: 14, margin: [0, 0, 0, 2],fillColor: 'white',colSpan: 3}],
						[{ text: "Game ID: "+game_id, fontSize: 12, margin: [0, 0, 0, 8],fillColor: 'white',colSpan: 3}],
						[{text: "Information here about how to load this game normally.",fontSize: 11, margin: [0, 0, 0, 8],fillColor: 'white',colSpan: 3}],
						[{text: "If this game gets deleted, or if you want to play this game on another computer, copy the following into a new text file:",fillColor: 'white',colSpan: 3}],
						[{fillColor:"#fff"},{text: "English Builder Vocabulary Bingo Version: 1.0\n"+"game_id: ("+game_id+")\nbingArray: ("+bingArray+")",fillColor: "#eee"},{fillColor:"#fff"}],
						[{text: "Then you can load that file into the game.",fillColor: 'white',colSpan: 3}],
						[{text: "",fillColor: '#fff',margin:[0,0,0,500],colSpan: 3}]
					]	
				},
				layout: 'noBorders',
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array1[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[0]]}, {text: t_array1[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[1]]}, {text: t_array1[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[2]]}, {text: t_array1[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[3]]}, {text: t_array1[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[4]]}],
						[ {text: t_array1[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[5]]}, {text: t_array1[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[6]]}, {text: t_array1[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[7]]}, {text: t_array1[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[8]]}, {text: t_array1[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[9]]}],
						[ {text: t_array1[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[10]]}, {text: t_array1[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[11]]}, {text: 'Set 1',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array1[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[12]]}, {text: t_array1[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[13]]}],
						[ {text: t_array1[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[14]]}, {text: t_array1[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[15]]}, {text: t_array1[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[16]]}, {text: t_array1[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[17]]}, {text: t_array1[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[18]]}],
						[ {text: t_array1[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[19]]}, {text: t_array1[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[20]]}, {text: t_array1[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[21]]}, {text: t_array1[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[22]]}, {text: t_array1[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array1[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array2[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[0]]}, {text: t_array2[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[1]]}, {text: t_array2[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[2]]}, {text: t_array2[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[3]]}, {text: t_array2[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[4]]}],
						[ {text: t_array2[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[5]]}, {text: t_array2[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[6]]}, {text: t_array2[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[7]]}, {text: t_array2[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[8]]}, {text: t_array2[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[9]]}],
						[ {text: t_array2[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[10]]}, {text: t_array2[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[11]]}, {text: 'Set 2',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array2[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[12]]}, {text: t_array2[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[13]]}],
						[ {text: t_array2[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[14]]}, {text: t_array2[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[15]]}, {text: t_array2[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[16]]}, {text: t_array2[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[17]]}, {text: t_array2[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[18]]}],
						[ {text: t_array2[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[19]]}, {text: t_array2[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[20]]}, {text: t_array2[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[21]]}, {text: t_array2[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[22]]}, {text: t_array2[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array2[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array3[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[0]]}, {text: t_array3[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[1]]}, {text: t_array3[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[2]]}, {text: t_array3[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[3]]}, {text: t_array3[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[4]]}],
						[ {text: t_array3[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[5]]}, {text: t_array3[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[6]]}, {text: t_array3[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[7]]}, {text: t_array3[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[8]]}, {text: t_array3[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[9]]}],
						[ {text: t_array3[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[10]]}, {text: t_array3[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[11]]}, {text: 'Set 3',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array3[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[12]]}, {text: t_array3[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[13]]}],
						[ {text: t_array3[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[14]]}, {text: t_array3[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[15]]}, {text: t_array3[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[16]]}, {text: t_array3[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[17]]}, {text: t_array3[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[18]]}],
						[ {text: t_array3[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[19]]}, {text: t_array3[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[20]]}, {text: t_array3[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[21]]}, {text: t_array3[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[22]]}, {text: t_array3[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array3[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array4[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[0]]}, {text: t_array4[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[1]]}, {text: t_array4[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[2]]}, {text: t_array4[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[3]]}, {text: t_array4[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[4]]}],
						[ {text: t_array4[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[5]]}, {text: t_array4[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[6]]}, {text: t_array4[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[7]]}, {text: t_array4[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[8]]}, {text: t_array4[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[9]]}],
						[ {text: t_array4[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[10]]}, {text: t_array4[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[11]]}, {text: 'Set 4',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array4[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[12]]}, {text: t_array4[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[13]]}],
						[ {text: t_array4[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[14]]}, {text: t_array4[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[15]]}, {text: t_array4[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[16]]}, {text: t_array4[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[17]]}, {text: t_array4[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[18]]}],
						[ {text: t_array4[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[19]]}, {text: t_array4[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[20]]}, {text: t_array4[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[21]]}, {text: t_array4[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[22]]}, {text: t_array4[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array4[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array5[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[0]]}, {text: t_array5[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[1]]}, {text: t_array5[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[2]]}, {text: t_array5[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[3]]}, {text: t_array5[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[4]]}],
						[ {text: t_array5[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[5]]}, {text: t_array5[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[6]]}, {text: t_array5[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[7]]}, {text: t_array5[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[8]]}, {text: t_array5[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[9]]}],
						[ {text: t_array5[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[10]]}, {text: t_array5[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[11]]}, {text: 'Set 5',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array5[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[12]]}, {text: t_array5[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[13]]}],
						[ {text: t_array5[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[14]]}, {text: t_array5[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[15]]}, {text: t_array5[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[16]]}, {text: t_array5[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[17]]}, {text: t_array5[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[18]]}],
						[ {text: t_array5[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[19]]}, {text: t_array5[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[20]]}, {text: t_array5[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[21]]}, {text: t_array5[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[22]]}, {text: t_array5[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array5[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array6[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[0]]}, {text: t_array6[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[1]]}, {text: t_array6[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[2]]}, {text: t_array6[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[3]]}, {text: t_array6[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[4]]}],
						[ {text: t_array6[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[5]]}, {text: t_array6[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[6]]}, {text: t_array6[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[7]]}, {text: t_array6[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[8]]}, {text: t_array6[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[9]]}],
						[ {text: t_array6[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[10]]}, {text: t_array6[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[11]]}, {text: 'Set 6',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array6[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[12]]}, {text: t_array6[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[13]]}],
						[ {text: t_array6[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[14]]}, {text: t_array6[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[15]]}, {text: t_array6[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[16]]}, {text: t_array6[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[17]]}, {text: t_array6[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[18]]}],
						[ {text: t_array6[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[19]]}, {text: t_array6[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[20]]}, {text: t_array6[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[21]]}, {text: t_array6[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[22]]}, {text: t_array6[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array6[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array7[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[0]]}, {text: t_array7[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[1]]}, {text: t_array7[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[2]]}, {text: t_array7[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[3]]}, {text: t_array7[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[4]]}],
						[ {text: t_array7[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[5]]}, {text: t_array7[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[6]]}, {text: t_array7[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[7]]}, {text: t_array7[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[8]]}, {text: t_array7[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[9]]}],
						[ {text: t_array7[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[10]]}, {text: t_array7[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[11]]}, {text: 'Set 7',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array7[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[12]]}, {text: t_array7[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[13]]}],
						[ {text: t_array7[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[14]]}, {text: t_array7[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[15]]}, {text: t_array7[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[16]]}, {text: t_array7[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[17]]}, {text: t_array7[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[18]]}],
						[ {text: t_array7[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[19]]}, {text: t_array7[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[20]]}, {text: t_array7[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[21]]}, {text: t_array7[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[22]]}, {text: t_array7[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array7[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array8[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[0]]}, {text: t_array8[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[1]]}, {text: t_array8[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[2]]}, {text: t_array8[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[3]]}, {text: t_array8[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[4]]}],
						[ {text: t_array8[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[5]]}, {text: t_array8[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[6]]}, {text: t_array8[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[7]]}, {text: t_array8[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[8]]}, {text: t_array8[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[9]]}],
						[ {text: t_array8[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[10]]}, {text: t_array8[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[11]]}, {text: 'Set 8',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array8[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[12]]}, {text: t_array8[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[13]]}],
						[ {text: t_array8[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[14]]}, {text: t_array8[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[15]]}, {text: t_array8[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[16]]}, {text: t_array8[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[17]]}, {text: t_array8[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[18]]}],
						[ {text: t_array8[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[19]]}, {text: t_array8[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[20]]}, {text: t_array8[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[21]]}, {text: t_array8[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[22]]}, {text: t_array8[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array8[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array9[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[0]]}, {text: t_array9[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[1]]}, {text: t_array9[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[2]]}, {text: t_array9[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[3]]}, {text: t_array9[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[4]]}],
						[ {text: t_array9[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[5]]}, {text: t_array9[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[6]]}, {text: t_array9[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[7]]}, {text: t_array9[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[8]]}, {text: t_array9[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[9]]}],
						[ {text: t_array9[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[10]]}, {text: t_array9[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[11]]}, {text: 'Set 9',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array9[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[12]]}, {text: t_array9[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[13]]}],
						[ {text: t_array9[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[14]]}, {text: t_array9[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[15]]}, {text: t_array9[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[16]]}, {text: t_array9[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[17]]}, {text: t_array9[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[18]]}],
						[ {text: t_array9[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[19]]}, {text: t_array9[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[20]]}, {text: t_array9[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[21]]}, {text: t_array9[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[22]]}, {text: t_array9[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array9[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array10[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[0]]}, {text: t_array10[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[1]]}, {text: t_array10[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[2]]}, {text: t_array10[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[3]]}, {text: t_array10[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[4]]}],
						[ {text: t_array10[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[5]]}, {text: t_array10[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[6]]}, {text: t_array10[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[7]]}, {text: t_array10[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[8]]}, {text: t_array10[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[9]]}],
						[ {text: t_array10[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[10]]}, {text: t_array10[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[11]]}, {text: 'Set 10',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array10[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[12]]}, {text: t_array10[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[13]]}],
						[ {text: t_array10[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[14]]}, {text: t_array10[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[15]]}, {text: t_array10[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[16]]}, {text: t_array10[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[17]]}, {text: t_array10[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[18]]}],
						[ {text: t_array10[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[19]]}, {text: t_array10[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[20]]}, {text: t_array10[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[21]]}, {text: t_array10[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[22]]}, {text: t_array10[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array10[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array11[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[0]]}, {text: t_array11[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[1]]}, {text: t_array11[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[2]]}, {text: t_array11[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[3]]}, {text: t_array11[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[4]]}],
						[ {text: t_array11[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[5]]}, {text: t_array11[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[6]]}, {text: t_array11[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[7]]}, {text: t_array11[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[8]]}, {text: t_array11[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[9]]}],
						[ {text: t_array11[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[10]]}, {text: t_array11[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[11]]}, {text: 'Set 11',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array11[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[12]]}, {text: t_array11[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[13]]}],
						[ {text: t_array11[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[14]]}, {text: t_array11[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[15]]}, {text: t_array11[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[16]]}, {text: t_array11[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[17]]}, {text: t_array11[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[18]]}],
						[ {text: t_array11[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[19]]}, {text: t_array11[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[20]]}, {text: t_array11[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[21]]}, {text: t_array11[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[22]]}, {text: t_array11[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array11[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array12[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[0]]}, {text: t_array12[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[1]]}, {text: t_array12[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[2]]}, {text: t_array12[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[3]]}, {text: t_array12[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[4]]}],
						[ {text: t_array12[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[5]]}, {text: t_array12[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[6]]}, {text: t_array12[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[7]]}, {text: t_array12[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[8]]}, {text: t_array12[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[9]]}],
						[ {text: t_array12[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[10]]}, {text: t_array12[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[11]]}, {text: 'Set 12',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array12[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[12]]}, {text: t_array12[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[13]]}],
						[ {text: t_array12[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[14]]}, {text: t_array12[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[15]]}, {text: t_array12[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[16]]}, {text: t_array12[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[17]]}, {text: t_array12[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[18]]}],
						[ {text: t_array12[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[19]]}, {text: t_array12[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[20]]}, {text: t_array12[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[21]]}, {text: t_array12[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[22]]}, {text: t_array12[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array12[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array13[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[0]]}, {text: t_array13[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[1]]}, {text: t_array13[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[2]]}, {text: t_array13[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[3]]}, {text: t_array13[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[4]]}],
						[ {text: t_array13[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[5]]}, {text: t_array13[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[6]]}, {text: t_array13[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[7]]}, {text: t_array13[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[8]]}, {text: t_array13[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[9]]}],
						[ {text: t_array13[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[10]]}, {text: t_array13[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[11]]}, {text: 'Set 13',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array13[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[12]]}, {text: t_array13[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[13]]}],
						[ {text: t_array13[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[14]]}, {text: t_array13[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[15]]}, {text: t_array13[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[16]]}, {text: t_array13[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[17]]}, {text: t_array13[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[18]]}],
						[ {text: t_array13[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[19]]}, {text: t_array13[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[20]]}, {text: t_array13[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[21]]}, {text: t_array13[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[22]]}, {text: t_array13[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array13[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array14[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[0]]}, {text: t_array14[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[1]]}, {text: t_array14[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[2]]}, {text: t_array14[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[3]]}, {text: t_array14[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[4]]}],
						[ {text: t_array14[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[5]]}, {text: t_array14[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[6]]}, {text: t_array14[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[7]]}, {text: t_array14[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[8]]}, {text: t_array14[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[9]]}],
						[ {text: t_array14[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[10]]}, {text: t_array14[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[11]]}, {text: 'Set 14',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array14[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[12]]}, {text: t_array14[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[13]]}],
						[ {text: t_array14[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[14]]}, {text: t_array14[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[15]]}, {text: t_array14[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[16]]}, {text: t_array14[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[17]]}, {text: t_array14[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[18]]}],
						[ {text: t_array14[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[19]]}, {text: t_array14[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[20]]}, {text: t_array14[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[21]]}, {text: t_array14[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[22]]}, {text: t_array14[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array14[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array15[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[0]]}, {text: t_array15[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[1]]}, {text: t_array15[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[2]]}, {text: t_array15[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[3]]}, {text: t_array15[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[4]]}],
						[ {text: t_array15[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[5]]}, {text: t_array15[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[6]]}, {text: t_array15[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[7]]}, {text: t_array15[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[8]]}, {text: t_array15[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[9]]}],
						[ {text: t_array15[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[10]]}, {text: t_array15[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[11]]}, {text: 'Set 15',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array15[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[12]]}, {text: t_array15[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[13]]}],
						[ {text: t_array15[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[14]]}, {text: t_array15[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[15]]}, {text: t_array15[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[16]]}, {text: t_array15[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[17]]}, {text: t_array15[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[18]]}],
						[ {text: t_array15[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[19]]}, {text: t_array15[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[20]]}, {text: t_array15[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[21]]}, {text: t_array15[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[22]]}, {text: t_array15[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array15[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array16[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[0]]}, {text: t_array16[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[1]]}, {text: t_array16[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[2]]}, {text: t_array16[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[3]]}, {text: t_array16[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[4]]}],
						[ {text: t_array16[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[5]]}, {text: t_array16[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[6]]}, {text: t_array16[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[7]]}, {text: t_array16[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[8]]}, {text: t_array16[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[9]]}],
						[ {text: t_array16[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[10]]}, {text: t_array16[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[11]]}, {text: 'Set 16',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array16[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[12]]}, {text: t_array16[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[13]]}],
						[ {text: t_array16[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[14]]}, {text: t_array16[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[15]]}, {text: t_array16[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[16]]}, {text: t_array16[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[17]]}, {text: t_array16[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[18]]}],
						[ {text: t_array16[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[19]]}, {text: t_array16[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[20]]}, {text: t_array16[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[21]]}, {text: t_array16[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[22]]}, {text: t_array16[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array16[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: "t_array17[0]",style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[0]]}, {text: t_array17[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[1]]}, {text: t_array17[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[2]]}, {text: t_array17[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[3]]}, {text: t_array17[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[4]]}],
						[ {text: t_array17[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[5]]}, {text: t_array17[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[6]]}, {text: t_array17[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[7]]}, {text: t_array17[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[8]]}, {text: t_array17[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[9]]}],
						[ {text: t_array17[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[10]]}, {text: t_array17[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[11]]}, {text: 'Set 17',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array17[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[12]]}, {text: t_array17[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[13]]}],
						[ {text: t_array17[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[14]]}, {text: t_array17[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[15]]}, {text: t_array17[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[16]]}, {text: t_array17[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[17]]}, {text: t_array17[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[18]]}],
						[ {text: t_array17[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[19]]}, {text: t_array17[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[20]]}, {text: t_array17[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[21]]}, {text: t_array17[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[22]]}, {text: t_array17[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array17[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array18[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[0]]}, {text: t_array18[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[1]]}, {text: t_array18[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[2]]}, {text: t_array18[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[3]]}, {text: t_array18[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[4]]}],
						[ {text: t_array18[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[5]]}, {text: t_array18[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[6]]}, {text: t_array18[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[7]]}, {text: t_array18[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[8]]}, {text: t_array18[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[9]]}],
						[ {text: t_array18[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[10]]}, {text: t_array18[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[11]]}, {text: 'Set 18',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array18[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[12]]}, {text: t_array18[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[13]]}],
						[ {text: t_array18[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[14]]}, {text: t_array18[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[15]]}, {text: t_array18[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[16]]}, {text: t_array18[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[17]]}, {text: t_array18[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[18]]}],
						[ {text: t_array18[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[19]]}, {text: t_array18[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[20]]}, {text: t_array18[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[21]]}, {text: t_array18[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[22]]}, {text: t_array18[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array18[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array19[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[0]]}, {text: t_array19[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[1]]}, {text: t_array19[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[2]]}, {text: t_array19[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[3]]}, {text: t_array19[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[4]]}],
						[ {text: t_array19[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[5]]}, {text: t_array19[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[6]]}, {text: t_array19[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[7]]}, {text: t_array19[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[8]]}, {text: t_array19[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[9]]}],
						[ {text: t_array19[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[10]]}, {text: t_array19[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[11]]}, {text: 'Set 19',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array19[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[12]]}, {text: t_array19[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[13]]}],
						[ {text: t_array19[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[14]]}, {text: t_array19[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[15]]}, {text: t_array19[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[16]]}, {text: t_array19[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[17]]}, {text: t_array19[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[18]]}],
						[ {text: t_array19[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[19]]}, {text: t_array19[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[20]]}, {text: t_array19[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[21]]}, {text: t_array19[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[22]]}, {text: t_array19[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array19[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array20[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[0]]}, {text: t_array20[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[1]]}, {text: t_array20[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[2]]}, {text: t_array20[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[3]]}, {text: t_array20[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[4]]}],
						[ {text: t_array20[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[5]]}, {text: t_array20[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[6]]}, {text: t_array20[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[7]]}, {text: t_array20[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[8]]}, {text: t_array20[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[9]]}],
						[ {text: t_array20[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[10]]}, {text: t_array20[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[11]]}, {text: 'Set 20',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array20[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[12]]}, {text: t_array20[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[13]]}],
						[ {text: t_array20[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[14]]}, {text: t_array20[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[15]]}, {text: t_array20[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[16]]}, {text: t_array20[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[17]]}, {text: t_array20[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[18]]}],
						[ {text: t_array20[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[19]]}, {text: t_array20[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[20]]}, {text: t_array20[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[21]]}, {text: t_array20[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[22]]}, {text: t_array20[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array20[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array21[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[0]]}, {text: t_array21[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[1]]}, {text: t_array21[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[2]]}, {text: t_array21[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[3]]}, {text: t_array21[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[4]]}],
						[ {text: t_array21[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[5]]}, {text: t_array21[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[6]]}, {text: t_array21[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[7]]}, {text: t_array21[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[8]]}, {text: t_array21[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[9]]}],
						[ {text: t_array21[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[10]]}, {text: t_array21[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[11]]}, {text: 'Set 21',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array21[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[12]]}, {text: t_array21[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[13]]}],
						[ {text: t_array21[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[14]]}, {text: t_array21[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[15]]}, {text: t_array21[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[16]]}, {text: t_array21[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[17]]}, {text: t_array21[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[18]]}],
						[ {text: t_array21[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[19]]}, {text: t_array21[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[20]]}, {text: t_array21[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[21]]}, {text: t_array21[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[22]]}, {text: t_array21[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array21[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array22[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[0]]}, {text: t_array22[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[1]]}, {text: t_array22[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[2]]}, {text: t_array22[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[3]]}, {text: t_array22[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[4]]}],
						[ {text: t_array22[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[5]]}, {text: t_array22[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[6]]}, {text: t_array22[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[7]]}, {text: t_array22[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[8]]}, {text: t_array22[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[9]]}],
						[ {text: t_array22[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[10]]}, {text: t_array22[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[11]]}, {text: 'Set 22',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array22[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[12]]}, {text: t_array22[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[13]]}],
						[ {text: t_array22[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[14]]}, {text: t_array22[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[15]]}, {text: t_array22[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[16]]}, {text: t_array22[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[17]]}, {text: t_array22[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[18]]}],
						[ {text: t_array22[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[19]]}, {text: t_array22[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[20]]}, {text: t_array22[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[21]]}, {text: t_array22[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[22]]}, {text: t_array22[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array22[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array23[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[0]]}, {text: t_array23[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[1]]}, {text: t_array23[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[2]]}, {text: t_array23[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[3]]}, {text: t_array23[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[4]]}],
						[ {text: t_array23[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[5]]}, {text: t_array23[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[6]]}, {text: t_array23[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[7]]}, {text: t_array23[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[8]]}, {text: t_array23[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[9]]}],
						[ {text: t_array23[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[10]]}, {text: t_array23[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[11]]}, {text: 'Set 23',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array23[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[12]]}, {text: t_array23[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[13]]}],
						[ {text: t_array23[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[14]]}, {text: t_array23[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[15]]}, {text: t_array23[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[16]]}, {text: t_array23[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[17]]}, {text: t_array23[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[18]]}],
						[ {text: t_array23[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[19]]}, {text: t_array23[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[20]]}, {text: t_array23[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[21]]}, {text: t_array23[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[22]]}, {text: t_array23[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array23[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array24[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[0]]}, {text: t_array24[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[1]]}, {text: t_array24[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[2]]}, {text: t_array24[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[3]]}, {text: t_array24[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[4]]}],
						[ {text: t_array24[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[5]]}, {text: t_array24[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[6]]}, {text: t_array24[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[7]]}, {text: t_array24[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[8]]}, {text: t_array24[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[9]]}],
						[ {text: t_array24[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[10]]}, {text: t_array24[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[11]]}, {text: 'Set 24',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array24[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[12]]}, {text: t_array24[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[13]]}],
						[ {text: t_array24[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[14]]}, {text: t_array24[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[15]]}, {text: t_array24[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[16]]}, {text: t_array24[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[17]]}, {text: t_array24[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[18]]}],
						[ {text: t_array24[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[19]]}, {text: t_array24[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[20]]}, {text: t_array24[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[21]]}, {text: t_array24[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[22]]}, {text: t_array24[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array24[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array25[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[0]]}, {text: t_array25[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[1]]}, {text: t_array25[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[2]]}, {text: t_array25[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[3]]}, {text: t_array25[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[4]]}],
						[ {text: t_array25[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[5]]}, {text: t_array25[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[6]]}, {text: t_array25[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[7]]}, {text: t_array25[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[8]]}, {text: t_array25[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[9]]}],
						[ {text: t_array25[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[10]]}, {text: t_array25[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[11]]}, {text: 'Set 25',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array25[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[12]]}, {text: t_array25[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[13]]}],
						[ {text: t_array25[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[14]]}, {text: t_array25[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[15]]}, {text: t_array25[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[16]]}, {text: t_array25[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[17]]}, {text: t_array25[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[18]]}],
						[ {text: t_array25[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[19]]}, {text: t_array25[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[20]]}, {text: t_array25[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[21]]}, {text: t_array25[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[22]]}, {text: t_array25[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array25[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array26[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[0]]}, {text: t_array26[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[1]]}, {text: t_array26[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[2]]}, {text: t_array26[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[3]]}, {text: t_array26[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[4]]}],
						[ {text: t_array26[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[5]]}, {text: t_array26[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[6]]}, {text: t_array26[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[7]]}, {text: t_array26[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[8]]}, {text: t_array26[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[9]]}],
						[ {text: t_array26[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[10]]}, {text: t_array26[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[11]]}, {text: 'Set 26',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array26[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[12]]}, {text: t_array26[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[13]]}],
						[ {text: t_array26[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[14]]}, {text: t_array26[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[15]]}, {text: t_array26[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[16]]}, {text: t_array26[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[17]]}, {text: t_array26[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[18]]}],
						[ {text: t_array26[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[19]]}, {text: t_array26[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[20]]}, {text: t_array26[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[21]]}, {text: t_array26[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[22]]}, {text: t_array26[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array26[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array27[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[0]]}, {text: t_array27[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[1]]}, {text: t_array27[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[2]]}, {text: t_array27[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[3]]}, {text: t_array27[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[4]]}],
						[ {text: t_array27[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[5]]}, {text: t_array27[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[6]]}, {text: t_array27[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[7]]}, {text: t_array27[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[8]]}, {text: t_array27[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[9]]}],
						[ {text: t_array27[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[10]]}, {text: t_array27[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[11]]}, {text: 'Set 27',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array27[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[12]]}, {text: t_array27[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[13]]}],
						[ {text: t_array27[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[14]]}, {text: t_array27[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[15]]}, {text: t_array27[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[16]]}, {text: t_array27[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[17]]}, {text: t_array27[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[18]]}],
						[ {text: t_array27[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[19]]}, {text: t_array27[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[20]]}, {text: t_array27[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[21]]}, {text: t_array27[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[22]]}, {text: t_array27[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array27[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array28[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[0]]}, {text: t_array28[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[1]]}, {text: t_array28[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[2]]}, {text: t_array28[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[3]]}, {text: t_array28[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[4]]}],
						[ {text: t_array28[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[5]]}, {text: t_array28[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[6]]}, {text: t_array28[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[7]]}, {text: t_array28[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[8]]}, {text: t_array28[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[9]]}],
						[ {text: t_array28[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[10]]}, {text: t_array28[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[11]]}, {text: 'Set 28',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array28[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[12]]}, {text: t_array28[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[13]]}],
						[ {text: t_array28[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[14]]}, {text: t_array28[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[15]]}, {text: t_array28[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[16]]}, {text: t_array28[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[17]]}, {text: t_array28[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[18]]}],
						[ {text: t_array28[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[19]]}, {text: t_array28[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[20]]}, {text: t_array28[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[21]]}, {text: t_array28[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[22]]}, {text: t_array28[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array28[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array29[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[0]]}, {text: t_array29[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[1]]}, {text: t_array29[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[2]]}, {text: t_array29[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[3]]}, {text: t_array29[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[4]]}],
						[ {text: t_array29[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[5]]}, {text: t_array29[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[6]]}, {text: t_array29[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[7]]}, {text: t_array29[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[8]]}, {text: t_array29[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[9]]}],
						[ {text: t_array29[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[10]]}, {text: t_array29[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[11]]}, {text: 'Set 29',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array29[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[12]]}, {text: t_array29[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[13]]}],
						[ {text: t_array29[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[14]]}, {text: t_array29[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[15]]}, {text: t_array29[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[16]]}, {text: t_array29[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[17]]}, {text: t_array29[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[18]]}],
						[ {text: t_array29[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[19]]}, {text: t_array29[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[20]]}, {text: t_array29[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[21]]}, {text: t_array29[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[22]]}, {text: t_array29[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array29[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array30[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[0]]}, {text: t_array30[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[1]]}, {text: t_array30[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[2]]}, {text: t_array30[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[3]]}, {text: t_array30[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[4]]}],
						[ {text: t_array30[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[5]]}, {text: t_array30[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[6]]}, {text: t_array30[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[7]]}, {text: t_array30[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[8]]}, {text: t_array30[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[9]]}],
						[ {text: t_array30[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[10]]}, {text: t_array30[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[11]]}, {text: 'Set 30',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array30[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[12]]}, {text: t_array30[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[13]]}],
						[ {text: t_array30[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[14]]}, {text: t_array30[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[15]]}, {text: t_array30[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[16]]}, {text: t_array30[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[17]]}, {text: t_array30[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[18]]}],
						[ {text: t_array30[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[19]]}, {text: t_array30[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[20]]}, {text: t_array30[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[21]]}, {text: t_array30[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[22]]}, {text: t_array30[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array30[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 0, 0, 2], pageBreak: 'before'},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 5, 0, 0], pageBreak: 'before'},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array31[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[0]]}, {text: t_array31[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[1]]}, {text: t_array31[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[2]]}, {text: t_array31[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[3]]}, {text: t_array31[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[4]]}],
						[ {text: t_array31[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[5]]}, {text: t_array31[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[6]]}, {text: t_array31[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[7]]}, {text: t_array31[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[8]]}, {text: t_array31[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[9]]}],
						[ {text: t_array31[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[10]]}, {text: t_array31[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[11]]}, {text: 'Set 31',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array31[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[12]]}, {text: t_array31[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[13]]}],
						[ {text: t_array31[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[14]]}, {text: t_array31[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[15]]}, {text: t_array31[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[16]]}, {text: t_array31[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[17]]}, {text: t_array31[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[18]]}],
						[ {text: t_array31[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[19]]}, {text: t_array31[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[20]]}, {text: t_array31[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[21]]}, {text: t_array31[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[22]]}, {text: t_array31[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array31[23]]}]
					]
				},
			},
			{	columns: [
					{width:"auto",text: title, fontSize: 14, bold: true, alignment:'left', margin: [0, 30, 0, 2]},
					{width:"*",text: "Game ID: "+game_id, fontSize: 9, alignment:'right', margin: [0, 35, 0, 0]},
				]
			},
			{
				table: {
					widths: [ 98, 99, 98, 99, 99 ],
					height:63,
					body: [
						[ {text: t_array32[0],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[0]]}, {text: t_array32[1],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[1]]}, {text: t_array32[2],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[2]]}, {text: t_array32[3],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[3]]}, {text: t_array32[4],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[4]]}],
						[ {text: t_array32[5],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[5]]}, {text: t_array32[6],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[6]]}, {text: t_array32[7],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[7]]}, {text: t_array32[8],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[8]]}, {text: t_array32[9],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[9]]}],
						[ {text: t_array32[10],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[10]]}, {text: t_array32[11],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[11]]}, {text: 'Set 32',style: 'sheet_id',verticalAlign: 'center'}, {text: t_array32[12],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[12]]}, {text: t_array32[13],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[13]]}],
						[ {text: t_array32[14],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[14]]}, {text: t_array32[15],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[15]]}, {text: t_array32[16],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[16]]}, {text: t_array32[17],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[17]]}, {text: t_array32[18],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[18]]}],
						[ {text: t_array32[19],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[19]]}, {text: t_array32[20],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[20]]}, {text: t_array32[21],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[21]]}, {text: t_array32[22],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[22]]}, {text: t_array32[23],style: 't_cell',verticalAlign: 'center',fontSize:font_sizes[t_array32[23]]}]
					]
				},
			},
		],
		pageMargins: [ 28, 46, 28, 28 ],
		styles: {
			t_cell: {
				font: 'Comic',
				fontSize: 21,
				margin: [0,0,0,0],
				bold: true,
				alignment: 'center'
			},
			pad_cell: {
				fontSize:1,
				margin: [0,0,0,64]	
			},
			sheet_id: {
				font: 'Nunito',
				fontSize: 29,
				bold: true,
				alignment: 'center',		
			},
		},
		defaultStyle: {
			font: 'Nunito'
		}
	};
	pdfMake.createPdf(bing_pdf).download(doc_title);
	//pdfMake.createPdf(bing_pdf).open();
}


function setUserData(button,num_topics) {
	var total_items=0;
	var topic_total=0;
	var tArray=[];

	if (curr_topic_title!="onet_voc") {
		availCats=localStorage["topics_gen_"+currentLev].split(",");

		for (var i=0;i<availCats.length;i++) {
			if (localStorage[currentLev+"_"+availCats[i]] && localStorage[currentLev+"_"+availCats[i]]!="" && topics_subsets.indexOf(availCats[i])== -1) {
				tArray=localStorage[currentLev+"_"+availCats[i]].split(",");
			}
			else {
				tArray=[];
			}
			total_items=total_items+tArray.length;
		}
		
		tArray=masterVoc(curr_topic_title);
		topic_total=tArray.length;
		if (localStorage[currentLev+"_"+curr_topic_title] && localStorage[currentLev+"_"+curr_topic_title]!="") {
			vocArray=localStorage[currentLev+"_"+curr_topic_title].split(",");
		}
		else {
			vocArray=[];
		}
		
	}
	else {
		setOnetVocab();
		topic_total=vocArray.length;
		vocArray= getOnetUserVocab();
	}

	document.getElementById("user_level_data").innerHTML="<p><b>Total</b> items for:</p><p><img style='width: 4.5em' src='images/buttons/b_"+currentLev+".png' /></p><div style='width:3em; margin-left:auto; margin-right:auto; background-color:black; color:white; font-size: 130%; border: 0.1em ridge #7bd8e8'>"+total_items+"</div>";
	
	if (button!="topics" && button!="show_all_topics") {
		document.getElementById("user_topics_data").innerHTML="<p>Number of items in <img style='width:55%; margin-top:0.3em; border: 0.1em ridge' src='images/vocab/titles/"+curr_topic_title+ ".jpg' /></p><div style='width:6em; margin-left:auto; margin-right:auto; background-color:black; color:white; font-size: 130%; border: 0.1em ridge #7bd8e8'>"+vocArray.length+" of "+topic_total+"</div>";
	}
	else if (button=="topics") {
		document.getElementById("user_topics_data").innerHTML="<p>Number of topics:</p><p><img style='width: 4.5em' src='images/buttons/b_"+currentLev+".png' /></p><div style='width:3em; margin-left:auto; margin-right:auto; background-color:black; color:white; font-size: 130%; border: 0.1em ridge #7bd8e8'>"+num_topics+"</div>";
	}
}

function masterVoc (title) {
	
	if (typeof title=="undefined") {
		title=curr_topic_title;
	}

	var arr = [];
	switch (title) {

		case "actions":
			arr = "answer,ask,buy,change,check,choose,close,come,cook,count,cry,cut,dig,discuss,draw,drink,drive,eat,finish,fly,forget,give,go,go / goes,guess,help,hop,jump,leave,like,listen,look,make,move,open,paint,play,point,print,pull,push,read,ride,run,say,shake,sing,sit down,sit,skip,sleep,smile,speak,stand,stand up,stop,swim,talk,think,walk,wear,write".split(",");
		break;

		case "animals":
			arr = "animals,ant,bat,bear,bee,bird,buffalo,butterfly,calf,cat,cheetah,chicken,chick,cow,crab,crocodile,deer,dog,dolphin,duck,duckling,elephant,fish,fly,fox,frog,gecko,geese,giraffe,goat,goose,grasshopper,hen,hippopotamus,horse,jellyfish,kangaroo,kitten,lamb,lion,meow,monkey,moo,mosquito,mouse,neigh,octopus,oink,panda,parrot,peacock,pig,piglet,quack,rabbit,rat,rhinoceros,seal,shark,sheep,snail,snake,spider,squirrel,starfish,tiger,turtle,whale,woof,zebra".split(",");
		break;

		case "asean":
			arr = "Brunei,Cambodia,Indonesia,Laos,Malaysia,Myanmar,Philippines,Singapore,Thailand,Vietnam".split(",");
		break;

		case "beach":
			arr = "bench,bin,cement stool,coconut,flag,gazebo,grass,inner tube,island,ladder,light bulb,lighthouse,log,motorbike,palm,pavilion,pier,sand,shell,ship,sign,socket,spirit house,stone circle,stump,swing,table,toilet,tree".split(",");
		break;

		case "clothes":
			arr = "belt,blouse,cap,checked,dress,earrings,floral,glasses,gloves,handbag,hat,jackets,jeans,necklace,nightdress,pants,plain,pyjamas,raincoat,ring,rings,scarf,shirt,shoe,shoes,shorts,skirt,sock,socks,spotted,striped,sweater,swimsuit,tie,trainers,T-shirt,underwear,wallet,watch,wig,zip".split(",");
		break;

		case "days":
			arr = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");
		break;

		case "describing":
			arr = "bad food,bad music,big dog,big eyes,black bag,black shirt,curly hair,fast car,good food,good music,happy student,happy teacher,long hair,narrow road,new car,new home,new house,old car,old home,old house,old man,old woman,pink bag,pink shirt,pretty girl,red bag,red shirt,sad student,sad teacher,short girl,short hair,slow car,small dog,small eyes,straight hair,tall girl,white shirt,wide road,young man,young woman".split(",");
		break;

		case "easy":
			arr = "and,ant,back,bad,bag,bat,bed,bin,book,bus,but,can,cap,cat,cook,cut,dig,dog,duck,fan,foot,fun,has,hat,hen,hop,hot,hut,in,jam,leg,mat,neck,not,on,pen,pet,pig,run,sack,sad,sick,sit,sock,sun,ten,toe,van".split(",");
		break;

		case "finding game":
			arr = "above,aerial,balloon,behind,bottle cap,brushes,button,calendar,drawer,drinking straw,duster,dustpan,file boxes,folder,in front of,in,keyboard,liquid paper,mike,nail,near,next to,on,plastic basket,plasticine,power cord,power socket,printer,scissors,shelves,speakers,that,this,thumbtack,toiletry bag,under".split(",");
		break;

		case  "location":
			arr = "above,behind,in,in front of,near,next to,on,this,that,under".split(",");
		break;

		case "food":
			arr = "apple,banana,beans,beef,bread,breakfast,butter,cabbage,cake,candy,carrots,cheese,chicken,chilli,chocolate,coconuts,coffee,coke,cookies,corn,cucumber,curry,durian,egg,eggplant,fish,food,fried chicken,fried egg,fried fish,fried rice,fruit,garlic,grapes,guava,hamburger,hot dog,ice cream,iced coffee,iced tea,ice,jam,juice,lemons,limes,lollipop,long beans,lunch,mangoes,mangosteens,milk,noodles,oil,onion,orange,papayas,pineapple,pizza,pomelo,pork,pumpkin,rambutans,rice,rose apple,salad,salt,sandwich,shrimp,soda,soft drinks,soup,strawberries,sugar,sushi,tea,tomato,vinegar,water,watermelon,wine,yoghurt".split(",");
		break;

		case "free_time":
			arr = "collect stamps,cook,dance,do gardening,do gymnastics,draw,fly a kite,go camping,go climbing,go fishing,go for a picnic,go horse riding,go jogging,go shopping,go skating,go swimming,listen to music,listen to the radio,paint,play badminton,play basketball,play cards,play chess,play computer games,play darts,play football,play games,play ping-pong,play the guitar,play volleyball,practise judo,practise karate,read comic books,read,ride a bike,sing,watch TV".split(",");
		break;

		case "grammar":
			arr = "?,a / the,and,at,be / is / am / are,back,behind,between,but,can,cannot,comma,do / does,do you want ...,exclamation mark,for,have / has,her,his,how many,how much,how,I,in front of,in,into,is / am / are,is / are,it,my,near,next to,no,not,on the left of,on the right of,on,or,question mark,that,the,this,to,under,up,we,what time,what,when,where,which,who,why,you,your".split(",");
		break;

		case "home":
			arr = "armchair,basin,basket,bathroom,bed,bedroom,bin,bottle,bowl,box,broom,can,CD,chair,closet,comb,cupboard,cup,dining room,dish,doll,door,electric urn,fan,floor,flower,garden,glass,house,jug,key,kitchen,kite,lamp,living room,lock,lotus,mat,mirror,nest,oven,pan,picture,pillow,pot,refrigerator,robot,room,rose,shelf,sink,soap,sofa,stereo,stove,sunflower,table,teddy bear,top,toy car,toy train,TV,vase,VCDs,wall,wardrobe,window,wok,yo-yo".split(",");
		break;

		case "months":
			arr = "January,February,March,April,May,June,July,August,September,October,November,December".split(",");
		break;

		case "occupations":
			arr = "actor,actress,barber,boxer,bus driver,butcher,carpenter,chef,cook,dancer,dentist,doctor,dressmaker,farmer,fisherman,fruit seller,gardener,guide,hairdresser,home-maker,librarian,merchants,monk,nurse,policeman,postman,sailor,secretary,singer,soldier,student,taxi driver,teacher,vet,waiter,waitress".split(",");
		break;

		case "body":
			arr = "arm,arms,back,body,bone,chest,chin,ear,ears,eyebrows,eye,eyes,face,feet,finger,fingers,foot,hair,hand,hands,head,hip,hips,knee,knees,leg,legs,mouth,nail,nails,neck,nose,shoulder,shoulders,teeth,thumb,toe,toes,tooth".split(",");
		break;

		case "people":
			arr = "aunt,baby,boy,brother,cousin,daughter,family,father,friend,girl,granddaughter,grandfather,grandmother,grandson,king,man,mother,nephew,niece,queen,sister,son,uncle,woman".split(",");
		break;

		case "places_and_transport":
			arr = "Bandar Seri Begawan,Bangkok,bank,beach,bike,boat,Brunei,bus,Cambodia,car,coffee shop,factory,farm,Hanoi,helicopter,hill,home,hospital,Indonesia,Jakarta,Kuala Lumpur,Laos,Malaysia,Manila,market,motorbike,motorbike taxi,Myanmar,Naypyidaw,on foot,Philippines,Phnom Penh,plane,police station,post office,railway station,restaurant,rice paddy,school,sea,ship,shop,Singapore,studio,supermarket,swimming pool,taxi,temple,Thailand,train,truck,tuk-tuk,van,Vientiene,Vietnam,zoo".split(",");
		break;

		case "school":
			arr = "Art,backpack,bag,bell,blackboard,book,bookshelf,calculator,calendar,canteen,chalk,classroom,clock,coloured pencils,computer,computer room,crayons,desk,English,eraser,globe,glue,homework,ink,library,lunch box,map,Math,Music,music room,notebook,paper,P.E.,pencil case,pencil,pencil sharpener,pen,playground,rubber,ruler,school,Science,scissors,Social Studies,toilet,umbrella,violin,waste paper basket,whiteboard".split(",");
		break;

		case "stationery":
			arr = "book,chalk,eraser,notebook,paper,pen,pencil,ruler".split(",");
		break;

		case "time":
			arr = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,yesterday,today,tomorrow,week,in the morning,at noon,in the afternoon,in the evening,at night,January,February,March,April,May,June,July,August,September,October,November,December,Christmas,Loi Krathong,มกราคม,กุมภาพันธ์,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",");
		break;

		case "weather":
			arr = "clear,cloudy,cold,foggy,hot,rainy,still,stormy,windy".split(",");
		break;
	}
	return arr;

}


function saveTopic() {
	//fixed!!!???
	if (curr_topic_title=="multi") {
		return;
	}

	var topic=(currentLev+"_"+curr_topic_title);

	if (!user_settings.hasOwnProperty(topic)) {
		user_settings[topic]=new Array();
		return;
	}

	user_settings[topic].length=0;

	for (var i=0;i<vocArray.length;i++) {
		user_settings[topic][i]=vocArray[i];
	}

	user_changes=true;
}


function saveSetup(save_type) {
	if (save_type == "phon_bingo") {
		var file_name = "EB Phonics Bingo";
		var file_elem = document.createElement("a");
		var save_str ="English Builder Phonics Bingo Version: 1.0\n";
		var temp_string ="";
		var tArray = [];
		save_str += "bingArray: ("+bingArray+")\n";
		save_str += "bing_back_ind: (" +localStorage.bing_back_ind+")\n";
		save_str += "bing_back_unit: (" +localStorage.bing_back_unit+")\n";
	}
	else {
		var file_name = "EB Vocabulary";
		var file_elem = document.createElement("a");
		var save_str ="English Builder User Settings Version: 1.0\n";
		var temp_string ="";
		var tArray = [];

		save_str += "ONET_voc(" + localStorage.user_onet_vocab + ")\n";
		save_str += "K2_availCats(" + localStorage.topics_gen_K2 + ")\n";
		tArray= localStorage.topics_gen_K2.split(",");
		for (var i=0;i<tArray.length; i++) {
			save_str += "K2_"+tArray[i]+ "(" + localStorage["K2_"+tArray[i]]+")\n";
		}

		for (var j=0; j<6; j++) {
			save_str += "P"+ (j+1) +"_availCats(" + localStorage["topics_gen_P"+ (j+1)] + ")\n";
			tArray= localStorage["topics_gen_P"+ (j+1)].split(",");
			for (var k=0;k<tArray.length;k++) {
				save_str += "P" + (j+1) +"_"  +tArray[k]+ "(" + localStorage["P" + (j+1)+"_"+tArray[k]]+")\n";
			}
		}
	}
		
	var save_blob = new Blob([save_str], {type:'text/plain'});
	file_elem.download = file_name;
	file_elem.href = window.URL.createObjectURL(save_blob);
	file_elem.style.display = "none";
	document.body.appendChild(file_elem);
	file_elem.click();
	document.body.removeChild(file_elem);

	user_changes=false;
}


function loadSetup(caller) {

	if (caller=="local"){

		var topic="";
		var voc_set="";
		var open_brace=0;
		var close_brace=0;
		var topic_len=0;
		var user_settings_arr= new Array();

		user_settings_arr=localStorage.user_vocab.split("\n");
		for (var i=1;i<user_settings_arr.length;i++) {
			voc_set=(user_settings_arr[i]);
			open_brace=voc_set.indexOf("(");
			close_brace=voc_set.indexOf(")");
			topic_len=(close_brace-open_brace)-1;
			topic=voc_set.substr(0,open_brace);
			voc_set=voc_set.substr(open_brace+1,topic_len);
			voc_set=voc_set.split(",");
			if (user_settings.hasOwnProperty(topic)) {
				user_settings[topic].length=0;
				for (var j=0;j<voc_set.length;j++) {
					user_settings[topic][j]=voc_set[j];
				}
			}
		}
		return;
	}

	if (caller.id=="b_reset_to_saved") {
		document.getElementById("reset_topic").click();
		return;
	}

	else if (caller.id=="b_reset_all") {
		setMsg("choice_load","OK_Cancel");
		return;

	}
	
	var file_reader = new FileReader();
	var file_name = caller.files[0];
	file_reader.readAsText(file_name, "UTF-8");
	caller.value="";

	file_reader.onload = function(fileLoadedEvent) {
		var loaded_text = fileLoadedEvent.target.result;
		var topics="";
		var topic="";
		var open_brace=0;
		var close_brace=0;
		var topic_len=0;
		
		if (caller.id=="input_phon_bingo") {
			if  (loaded_text.indexOf("English Builder Phonics Bingo")== -1) {
				setMsg("err_file","",file_name.name,"Bingo");
				return;
			}
			if (parseFloat(loaded_text.substring(loaded_text.indexOf("Version:")+9, loaded_text.indexOf("\n"))) >1) {
				setMsg("err_version","",file_name.name);
				return;
			}
			topic=loaded_text.substr(loaded_text.indexOf("bingArray"));
			open_brace=topic.indexOf("(");
			close_brace=topic.indexOf(")");
			topic=topic.substring(open_brace+1,close_brace);
			localStorage.bing_back=topic;
			topic=loaded_text.substr(loaded_text.indexOf("bing_back_ind"));
			open_brace=topic.indexOf("(");
			close_brace=topic.indexOf(")");
			topic=topic.substring(open_brace+1,close_brace);
			localStorage.bing_back_ind=topic;
			topic=loaded_text.substr(loaded_text.indexOf("bing_back_unit"));
			open_brace=topic.indexOf("(");
			close_brace=topic.indexOf(")");
			topic=topic.substring(open_brace+1,close_brace);
			localStorage.bing_back_unit=topic;
			bingClassProc("backup");
			return;
		}
		else {
			if  (loaded_text.indexOf("English Builder User Settings")== -1) {
				setMsg("err_file","",file_name.name,"Vocabulary");
				return;
			}

			if (parseFloat(loaded_text.substring(loaded_text.indexOf("Version:")+9, loaded_text.indexOf("\n"))) >1) {
				setMsg("err_version","",file_name.name);
				return;
			}
			loaded_text=loaded_text.replace(/places and transport/g,"places_and_transport");
			loaded_text=loaded_text.replace(/free time/g,"free_time");
		}

		if (caller.id=="reset_all") {
			if (loaded_text.indexOf("ONET_voc")!= -1) {
				topic=loaded_text.substr(loaded_text.indexOf("ONET_voc"));
				open_brace=topic.indexOf("(");
				close_brace=topic.indexOf(")");
				topic=topic.substring(open_brace+1,close_brace);
				localStorage.user_onet_vocab=topic;
			}
			topics=loaded_text.substr(loaded_text.indexOf("K2_availCats"));
			open_brace=topics.indexOf("(");
			close_brace=topics.indexOf(")");
			topics=topics.substring(open_brace+1,close_brace);
			localStorage.topics_gen_K2=topics;
			availCats=localStorage.topics_gen_K2.split(",");
			for (var i=0;i<topics_all.length;i++) {
				if (localStorage["K2_"+topics_all[i]] && availCats.indexOf(topics_all[i]) == -1) {
					localStorage.removeItem("K2_"+topics_all[i]);
				}
				else if (availCats.indexOf(topics_all[i])!= -1) {
					topic=loaded_text.substr(loaded_text.indexOf("K2_"+topics_all[i]));
					open_brace=topic.indexOf("(");
					close_brace=topic.indexOf(")");
					topic=topic.substring(open_brace+1,close_brace);
					localStorage["K2_"+topics_all[i]]=topic;
				}
			}

			for (var j=1;j<7;j++) {
				topics=loaded_text.substr(loaded_text.indexOf("P"+j+"_availCats"));
				open_brace=topics.indexOf("(");
				close_brace=topics.indexOf(")");
				topics=topics.substring(open_brace+1,close_brace);
				localStorage["topics_gen_P"+j]=topics;
				availCats=localStorage["topics_gen_P"+j].split(",");
				for (var k=0;k<topics_all.length;k++) {
					if (localStorage["P"+ j+ "_"+topics_all[k]] && availCats.indexOf(topics_all[k]) == -1) {
						localStorage.removeItem("P"+j+"_"+topics_all[k]);
					}
					else if (availCats.indexOf(topics_all[k])!= -1) {
						topic=loaded_text.substr(loaded_text.indexOf("P"+j+"_"+topics_all[k]));
						open_brace=topic.indexOf("(");
						close_brace=topic.indexOf(")");
						topic=topic.substring(open_brace+1,close_brace);
						localStorage["P"+j+"_"+topics_all[k]]=topic;
					}
				}
			}
			setVocChoiceTable("topics");
			setMsg("load_all_complete","success",file_name.name);
		}
		else if  (caller.id=="reset_topic" && curr_topic_title=="onet_voc") {
			if (loaded_text.indexOf("ONET_voc")!= -1) {
				topic=loaded_text.substr(loaded_text.indexOf("ONET_voc"));
				open_brace=topic.indexOf("(");
				close_brace=topic.indexOf(")");
				topic=topic.substring(open_brace+1,close_brace);
				localStorage.user_onet_vocab=topic;
				setVocChoiceTable("show_selected");
				setMsg("load_topic_complete","success",file_name.name);
			}
		}
		else if (caller.id=="reset_topic") {
			if (loaded_text.indexOf(currentLev+"_"+curr_topic_title)!= -1) {
				topic=loaded_text.substr(loaded_text.indexOf(currentLev+"_"+curr_topic_title));
				open_brace=topic.indexOf("(");
				close_brace=topic.indexOf(")");
				topic=topic.substring(open_brace+1,close_brace);
				localStorage[currentLev+"_"+curr_topic_title]=topic;
				setVocChoiceTable("show_selected");
				setMsg("load_topic_complete","success",file_name.name);
			}
			else {
				setMsg("err_no_topic","",file_name.name);
			}
		}
		else if (caller=="phon_bingo") {

		}
		user_changes=false;
	};
}


function setVocTable(button) {

	if (curr_topic_title=="multi") {
		var dir ="";
	}
	else {
		var dir =curr_topic_dir;
	}

	if (button=="random") {
		var m = 0;
		var n =vocArray.length;

		tempArray.length=0;

		if (curr_topic_title!="multi")  {
			if (curr_topic_title=="onet_voc") {
				if (voc_mode=="user") {
					vocArray=getOnetUserVocab();
				}
				else {
					setOnetVocab();
				}
			}
			else {
				curr_topic_dir= curr_topic_title;
				setVocArrays();
			}
		}
		else {
			setAllVocArray();
		}
		for (var l=0; l<n; l++) {
			m = Math.floor(Math.random() * vocArray.length);
			tempArray[l]=vocArray[m];
			vocArray.splice(m,1);
		}
		if (curr_topic_title!="multi")  {
			if (curr_topic_title=="onet_voc") {
				if (voc_mode=="user") {
					vocArray=getOnetUserVocab();
				}
				else {
					setOnetVocab();	
				}
			}
			else {
				curr_topic_dir= curr_topic_title;
				setVocArrays();
			}
		}
		else {
			setAllVocArray();
		}
		document.getElementById("orderButton").src="images/buttons/order_button.png";
		document.getElementById("orderButton").onclick = function() {
			activity("start");
		};
	}
	else if (button=="start") {
		tempArray.length=0;
		for (var i=0;i<vocArray.length;i++) {
			tempArray[i]=vocArray[i];
		}

		document.getElementById("orderButton").src="images/buttons/random_button.png";
		document.getElementById("orderButton").onclick = function() {
			activity("random");
		};
	}

	var imgInd = 0;
	var txt ="";
	var numRows= (Math.ceil(tempArray.length/5));
	if (button=="start" || button=="random") {
		var prevRows=document.getElementById("voc_tab").rows.length;

		for (var k=0;k<prevRows; k++) {
			document.getElementById("voc_tab").deleteRow(0);
		}

		for (var i=0;i<numRows;i++){
		 	var imgRow = document.getElementById("voc_tab").insertRow(-1);
		 	var vocRow = document.getElementById("voc_tab").insertRow(-1);
		 	for (var j=0; j<5; j++) {
		 		if (typeof tempArray[imgInd]=="object") {
					txt=tempArray[imgInd].txt;
		 		}
		 		else {
		 			txt =tempArray[imgInd];
					if (curr_topic_title=="multi") {
						var slPos = txt.indexOf("/")+1;
						txt =txt.slice(slPos);
					}
		 		}
		 		imgRow.insertCell(j);
				vocRow.insertCell(j);
				vocRow.cells[j].className="vocCell";
				imgRow.cells[j].className="vocImgCell";
				vocRow.cells[j].innerHTML=txt;
		 		if (imgInd<tempArray.length-1) {
			 		imgInd++;
			 	}
			 	else {
			 		break;
			 	}
		 	}
		}
		document.getElementById("mainImage").style.display="none";
		document.getElementById("welcomeDiv").style.display="none";
		document.getElementById("attributionDiv").style.display="none";
		document.getElementById("contentSelect").style.display="none";
		document.getElementById("imageDiv").style.display="block";
		document.getElementById("voc_tab").style.display="table";
		document.getElementById("controls_central").style.display = "none";
		document.getElementById("order_div").style.display = "block";
		document.getElementById("hide_div").style.display = "block";
		document.getElementById("b_reset").style.display = "block";
		document.getElementById("b_help").style.display = "none";
		document.getElementById("voc_tab_div").style.height="10.73em";
		setVocTable(hideStatus);
	}
	else if (button=="hideTxt") {
		document.getElementById("showAllButton").src="images/buttons/no_button.png";
		document.getElementById("hideImgButton").src="images/buttons/no_button.png";
		document.getElementById("hideTxtButton").src="images/buttons/yes_button.png";
		hideStatus="hideTxt";

		var voc="";
		var t_array=[];
		var t_src="";
		for (var i=0;i<numRows*2;i=i+2){
			for (var j=0; j<5; j++) {
				if (typeof document.getElementById("voc_tab").rows[i].cells[j]!="undefined") {
					voc =(tempArray[((i/2)*5)+j]);
					if (typeof voc=="object"){
						if (typeof voc.src == "object") {
							t_array=voc.src.toString().split(",");
							shuffle(t_array);
							t_src=t_array[0];
						}
						else {
							t_src=voc.src;	
						}
						document.getElementById("voc_tab").rows[i].cells[j].innerHTML="<img width='100%' src="+t_src+" />";
					}
					else {
						voc=processSubst(voc);
						document.getElementById("voc_tab").rows[i].cells[j].innerHTML="<img width='100%' src='images/vocab/" + dir +"/" +voc+ ".jpg' />";
					}

					document.getElementById("voc_tab").rows[i].cells[j].onclick = function() {
						voc =(tempArray[((this.parentNode.rowIndex/2)*5)+this.cellIndex]);
						if (typeof voc == "object"){
							audVoc.src="audio"+voc.src.slice(6,-3)+"mp3";
							vocEx=voc.txt;
						}
						else{
							voc= splitSubst(voc);
							audVoc.src="audio/vocab/"+ dir +"/" +voc+ ".mp3";
							vocEx=voc;
						}
						playVocab();
					};
					document.getElementById("voc_tab").rows[i+1].cells[j].className="vocCellHidden";
					document.getElementById("voc_tab").rows[i+1].cells[j].onclick = function() {
					document.getElementById("voc_tab").rows[this.parentNode.rowIndex].cells[this.cellIndex].className="vocCell";
					};
				}
			}
		}
	}
	else if (button=="hideImg") {
		document.getElementById("showAllButton").src="images/buttons/no_button.png";
		document.getElementById("hideImgButton").src="images/buttons/yes_button.png";
		document.getElementById("hideTxtButton").src="images/buttons/no_button.png";
		hideStatus="hideImg";
		var voc="";
		var t_array=[];
		var t_src="";
		for (var i=0;i<numRows*2;i=i+2){
			for (var j=0; j<5; j++) {
				if (typeof document.getElementById("voc_tab").rows[i].cells[j]!="undefined") {
					document.getElementById("voc_tab").rows[i].cells[j].innerHTML="<img width='100%' src='images/formatting/question mark.jpg' />";
					document.getElementById("voc_tab").rows[i+1].cells[j].className="vocCell";
					document.getElementById("voc_tab").rows[i].cells[j].onclick = function() {
						voc =(tempArray[((this.parentNode.rowIndex/2)*5)+this.cellIndex]);
						if (typeof voc=="object"){
							if (typeof voc.src == "object") {
								t_array=voc.src.toString().split(",");
								shuffle(t_array);
								t_src=t_array[0];
							}
							else {
								t_src=voc.src;	
							}
							document.getElementById("voc_tab").rows[this.parentNode.rowIndex].cells[this.cellIndex].innerHTML="<img width='100%' src="+t_src+" />";
						}
						else {
							voc=processSubst(voc);
							document.getElementById("voc_tab").rows[this.parentNode.rowIndex].cells[this.cellIndex].innerHTML="<img width='100%' src='images/vocab/" + dir +"/" +voc+ ".jpg' />";
						}
						document.getElementById("voc_tab").rows[this.parentNode.rowIndex].cells[this.cellIndex].onclick = function() {
							voc =(tempArray[((this.parentNode.rowIndex/2)*5)+this.cellIndex]);
							if (typeof voc == "object"){
								audVoc.src="audio"+voc.src.slice(6,-3)+"mp3";
								vocEx=voc.txt;
							}
							else{
								voc= splitSubst(voc);
								audVoc.src="audio/vocab/"+ dir +"/" +voc+ ".mp3";
								vocEx=voc;
							}
							playVocab();
						};
					};
				}
			}
		}
	}

	else if (button=="showBoth") {
		document.getElementById("showAllButton").src="images/buttons/yes_button.png";
		document.getElementById("hideImgButton").src="images/buttons/no_button.png";
		document.getElementById("hideTxtButton").src="images/buttons/no_button.png";
		hideStatus="showBoth";
		var voc="";
		var t_array=[];
		var t_src="";
		for (var i=0;i<numRows*2;i=i+2){
			for (var j=0; j<5; j++) {
				if (typeof document.getElementById("voc_tab").rows[i].cells[j]!="undefined") {
					voc =(tempArray[((i/2)*5)+j]);
					if (typeof voc=="object"){
						if (typeof voc.src == "object") {
							t_array=voc.src.toString().split(",");
							shuffle(t_array);
							t_src=t_array[0];
						}
						else {
							t_src=voc.src;	
						}
						document.getElementById("voc_tab").rows[i].cells[j].innerHTML="<img width='100%' src="+t_src+" />";
					}
					else {
						voc=processSubst(voc);
						document.getElementById("voc_tab").rows[i].cells[j].innerHTML="<img width='100%' src='images/vocab/" + dir +"/" +voc+ ".jpg' />";

					}
					document.getElementById("voc_tab").rows[i+1].cells[j].className="vocCell";
					document.getElementById("voc_tab").rows[i].cells[j].onclick = function() {
						voc =(tempArray[((this.parentNode.rowIndex/2)*5)+this.cellIndex]);
						if (typeof voc == "object"){
							audVoc.src="audio"+voc.src.slice(6,-3)+"mp3";
							vocEx=voc.txt;
						}
						else{
							voc= splitSubst(voc);
							audVoc.src="audio/vocab/"+ dir +"/" +voc+ ".mp3";
							vocEx=voc;
						}
						playVocab();
					};
				}
			}
					
		}
	}
}

function setUserVocArray() {
	if (localStorage[currentLev+"_"+curr_topic_title]) {
		vocArray=localStorage[currentLev+"_"+curr_topic_title].split(",");
	} 
}


function modUserAvailTopics(topic,action) {
	var user_topic = currentLev+"_availCats";

	if (action=="add") {
		setMsg("choice_add_topic","OK_Cancel",topic);
		return;
	}
	else if (action=="delete" && curr_topic_dir!="onet_gq" && curr_topic_dir!="onet_voc") {
		setMsg("choice_delete_topic","edit_delete",topic);
		return;
	}
	else if (action=="add_continue") {
		availCats.push(topic);
		availCats.sort(function (a, b) {return a.toLowerCase().localeCompare(b.toLowerCase());});
		localStorage["topics_gen_" + currentLev] = availCats;
		localStorage[currentLev+"_"+topic] = [];
		/*user_settings[user_topic].length=0;
		for (var i=0;i<availCats.length;i++) {
			user_settings[user_topic][i]=availCats[i];
		}*/
		selectTopic(topic);
		setVocChoiceTable("show_all");
	}
	else if (action=="delete_continue") {
		availCats.splice(availCats.indexOf(topic),1);
		localStorage["topics_gen_" + currentLev] = availCats;
		localStorage.removeItem(currentLev+"_"+curr_topic_title);
		selectTopic(availCats[0]);
		setVocChoiceTable("topics");
	}
}


function setUserAvailCats() {
	availCats=localStorage["topics_gen_"+currentLev].split(",");
	setTopicButtons();
}


function setAvailCats() {

	if (voc_mode=="user") {
		setUserAvailCats();
		return;
	}

	switch (currentLev) {
		case "K2":
			availCats = new Array("actions", "animals", "beach", "body", "clothes", "days", "describing", "easy", "food", "occupations", "places_and_transport", "school", "time");
			break;
		case "P1":
			availCats = new Array("actions", "animals", "beach", "clothes", "days", "easy", "food", "home", "occupations", "body", "people", "school", "stationery", "time");
			break;
		case "P2":
			availCats = new Array("actions", "animals", "asean", "beach", "clothes", "days", "easy", "food", "grammar", "home", "months", "occupations", "body", "people", "places_and_transport", "school", "stationery", "time");
			break;
		case "P3":
		availCats = new Array("actions", "animals", "asean", "beach", "clothes", "days", "easy", "finding game", "food", "grammar", "home", "months", "occupations", "body", "people", "places_and_transport", "location", "school", "stationery", "time");
			break;
		case "P4":
		availCats = new Array("actions", "animals", "asean", "beach", "clothes", "days", "easy", "finding game", "food", "grammar", "home", "months", "occupations", "body", "people", "places_and_transport",  "location", "school", "stationery", "time");
			break;
		case "P5":
			availCats = new Array("actions", "animals", "asean", "beach", "clothes", "days", "easy", "describing", "finding game",  "location", "food", "free_time", "grammar", "health", "home", "months", "occupations", "body", "people", "places_and_transport", "school", "stationery", "time", "weather");
			break;
		case "P6":
			availCats = new Array("actions", "animals", "asean", "beach", "clothes", "days", "describing", "food", "free_time", "grammar", "health", "home", "months", "occupations", "body", "people", "places_and_transport", "school", "socialising", "stationery", "time", "weather");
			break;
		case "Master":
			availCats = new Array("actions", "animals", "asean", "beach", "clothes", "days", "easy", "describing", "finding game",  "location", "food", "free_time", "grammar", "home", "months", "occupations", "body", "people", "places_and_transport", "school", "stationery", "time", "weather");
			break;
	}
}


function setVocArrays() {

	setAvailCats();

	if (voc_mode=="user" && curr_topic_title!="dot_and_Ben") {
		setUserVocArray();
		return;
	}

	if (currentLev == "K2") {
		switch (curr_topic_title) {
			case "actions":
				vocArray = ["close", "cook", "count", "cry", "cut", "drink", "eat", "hop", "jump", "listen", "look", "open", "run", "sing", "sit down", "sleep", "stand up", "stop", "swim", "walk"];
				curr_topic_dir = "actions";
				break;
			case "animals":
				vocArray = new Array("ant", "bat", "bird", "cat", "cow", "dog", "duck", "elephant", "fish", "horse", "lion", "monkey", "pig", "rabbit", "snake", "tiger", "zebra");
				curr_topic_dir = "animals";
				break;
			case "beach":
				vocArray = new Array ("bench", "bin", "cement stool", "coconut", "flag", "gazebo", "grass", "inner tube", "island", "ladder", "light bulb", "lighthouse", "log", "motorbike", "palm", "pavilion", "pier", "sand", "shell", "ship", "sign", "socket", "spirit house", "stone circle", "stump", "swing", "table", "toilet", "tree");
				curr_topic_dir = "beach";
				break;
			case "body":
				vocArray = new Array ("arm", "ears", "eyes", "face", "finger", "foot", "hair", "hand", "head", "knee", "leg", "mouth", "nose");
				curr_topic_dir = "body";
				break;
			case "clothes":
				vocArray = new Array("belt", "cap", "dress", "glasses", "gloves", "hat", "jeans", "ring", "shirt", "shoes", "shorts", "skirt", "socks", "T-shirt");
				curr_topic_dir = "clothes";
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				curr_topic_dir = "time";
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "new car", "new home", "old car", "old home", "old man", "old woman", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "young man", "young woman");
				curr_topic_dir = "describing";
				break;
			case "easy":
				vocArray = new Array("ant", "back", "bag", "bat", "bed", "bin", "book", "bus", "can", "cap", "cat", "cook", "cut", "dig", "dog", "duck", "fan", "foot", "hat", "hen", "hop", "hut", "jam", "leg", "mat", "neck", "pen", "pet", "pig", "run", "sack", "sit", "sock", "sun", "ten", "toe", "van");
				curr_topic_dir = "easy";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "bread", "candy", "carrots", "durian", "egg", "jam", "mangoes", "milk",  "orange", "papayas", "rice", "tea");
				curr_topic_dir = "food";
				break;
			case "occupations":
				vocArray = new Array("barber", "butcher", "cook", "dentist", "doctor", "farmer", "fisherman", "monk", "nurse", "policeman", "student", "teacher");
				curr_topic_dir = "occupations";
				break;
			case "places_and_transport":
				vocArray = new Array ("beach", "bike", "boat", "bus", "car", "farm", "home", "market", "on foot", "plane", "school", "shop", "temple", "train", "van", "zoo");
				curr_topic_dir = "places_and_transport";
				break;
			case "school":
				vocArray = new Array("bag", "book", "pen", "pencil", "rubber", "ruler");
				curr_topic_dir = "school";
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				curr_topic_dir = "time";
				break;
		}

	} else if (currentLev == "P1") {
		switch (curr_topic_title) {
			case "actions":
				vocArray = new Array("cook", "count", "cry", "cut", "dig", "drink", "drive", "eat", "guess", "hop", "jump", "like", "read", "ride", "run", "sing", "sit", "sleep", "stand", "walk", "write");
				curr_topic_dir = "actions";
				break;
			case "animals":
				vocArray = new Array("ant", "bat", "bee", "bird", "cat", "cow", "dog", "duck", "elephant", "fish", "hen", "horse", "lion", "monkey", "pig", "snake", "tiger");
				curr_topic_dir = "animals";
				break;
			case "beach":
				vocArray = new Array ("bench", "bin", "cement stool", "coconut", "flag", "gazebo", "grass", "inner tube", "island", "ladder", "light bulb", "lighthouse", "log", "motorbike", "palm", "pavilion", "pier", "sand", "shell", "ship", "sign", "socket", "spirit house", "stone circle", "stump", "swing", "table", "toilet", "tree");
				curr_topic_dir = "beach";
				break;
			case "clothes":
				vocArray = new Array("cap", "hat", "shirt", "shoe", "shoes", "shorts", "skirt", "sock", "socks");
				curr_topic_dir = "clothes";
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				curr_topic_dir = "time";
				break;
			case "easy":
				vocArray = new Array("and", "ant", "back", "bad", "bag", "bat", "bed", "bin", "book", "bus", "but", "can", "cap", "cat", "cook", "cut", "dig", "dog", "duck", "fan", "foot", "fun", "has", "hat", "hen", "hop", "hot", "hut", "in", "jam", "leg", "mat", "neck", "not", "on", "pen", "pet", "pig", "run", "sack", "sad", "sick", "sit", "sock", "sun", "ten", "toe", "van");
				curr_topic_dir = "easy";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "cake", "candy", "durian", "egg", "jam", "mangoes", "milk", "orange", "papayas", "rice", "tea");
				curr_topic_dir = "food";
				break;
			case "home":
				vocArray = new Array("bed", "bin", "box", "chair", "cupboard", "door", "fan", "lamp", "mat", "sofa", "table", "TV");
				curr_topic_dir = "home";
				break;
			case "occupations":
				vocArray = new Array("bus driver", "cook", "doctor", "farmer", "fisherman", "guide", "monk", "nurse", "policeman", "postman", "student", "teacher");
				curr_topic_dir = "occupations";
				break;
			case "body":
				vocArray = new Array("arm", "arms", "ears", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "knee", "knees", "leg", "legs", "mouth", "neck", "nose", "shoulder", "shoulders", "toe", "toes");
				curr_topic_dir = "body";
				break;
			case "people":
				vocArray = new Array("boy", "brother", "father", "friend", "girl", "mother", "sister");
				curr_topic_dir = "people";
				break;
			case "school":
				vocArray = new Array("bag", "book", "desk", "rubber", "pen", "pencil", "ruler", "school");
				curr_topic_dir = "school";
				break;
			case "stationery":
				vocArray = new Array("book", "rubber", "pen", "pencil", "ruler");
				curr_topic_dir = "school";
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				curr_topic_dir = "time";
				break;
		}

	} else if (currentLev == "P2") {
		switch (curr_topic_title) {
			case "actions":
				vocArray = new Array("close", "come", "cook", "count", "cry", "cut", "dig", "draw", "drink", "drive", "eat", "give", "go / goes", "guess", "hop", "jump", "like", "open", "play", "read", "ride", "run", "sing", "sit", "sit down", "sleep", "speak", "stand", "stand up", "walk", "write");
				curr_topic_dir = "actions";
				break;
			case "animals":
				vocArray = new Array("ant", "bird", "cat", "cow", "dog", "duck", "fish", "horse", "lion", "pig", "snake", "tiger");
				curr_topic_dir = "animals";
				break;
			case "asean":
				vocArray = new Array("Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam");
				curr_topic_dir = "places_and_transport";
				break;
			case "beach":
				vocArray = new Array ("bench", "bin", "cement stool", "coconut", "flag", "gazebo", "grass", "inner tube", "island", "ladder", "light bulb", "lighthouse", "log", "motorbike", "palm", "pavilion", "pier", "sand", "shell", "ship", "sign", "socket", "spirit house", "stone circle", "stump", "swing", "table", "toilet", "tree");
				curr_topic_dir = "beach";
				break;
			case "clothes":
				vocArray = new Array("belt", "blouse", "cap", "dress", "earrings", "glasses", "handbag", "hat", "jackets", "jeans", "ring", "shirt", "shoe", "shoes", "shorts", "skirt","sock", "socks", "T-shirt", "watch");
				curr_topic_dir = "clothes";
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				curr_topic_dir = "time";
				break;
			case "easy":
				vocArray = new Array("bag", "bat", "bed", "bin", "cap", "cat", "cut", "dog", "duck", "fan", "hat", "hop", "jam", "pen", "pig", "run", "sock", "van");
				curr_topic_dir = "easy";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "bread", "cake", "candy", "carrots", "chicken", "cookies", "corn", "durian", "egg", "food", "ice cream", "jam", "limes", "mangoes", "mangosteens", "milk", "noodles", "orange", "papayas", "pineapple", "pork", "rice", "soup", "tea", "water");
				curr_topic_dir = "food";
				break;
			case "grammar":
				vocArray = new Array("?", "and", "at", "be / is / am / are", "but", "can", "cannot", "how many", "I", "in", "into", "my", "not", "on", "or", "that", "this", "to", "what", "when", "where", "who", "why", "you");
				curr_topic_dir = "grammar";
				break;
			case "home":
				vocArray = new Array("basin", "bathroom", "bed", "bedroom", "bin", "broom", "box", "chair", "cup", "cupboard", "dish", "door", "fan", "flower", "glass", "kitchen", "lamp", "living room", "mat", "pan", "picture", "pot", "room", "sink", "sofa", "stove", "table", "TV", "window", "wok");
				curr_topic_dir = "home";
				break;
			case "months":
				vocArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				curr_topic_dir = "time";
				break;
			case "occupations":
				vocArray = new Array("barber", "boxer", "bus driver", "butcher", "chef", "cook", "dancer", "dentist", "doctor", "farmer", "fisherman", "fruit seller", "gardener", "guide", "hairdresser", "home-maker", "nurse", "policeman", "postman", "singer", "soldier", "student", "teacher", "vet");
				curr_topic_dir = "occupations";
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "ears", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "hip", "hips", "knee", "knees", "leg", "legs", "mouth", "neck", "nose", "shoulder", "shoulders", "teeth", "toe", "toes", "tooth");
				curr_topic_dir = "body";
				break;
			case "people":
				vocArray = new Array("aunt", "baby", "boy", "brother", "daughter", "family", "father", "friend", "girl", "grandfather", "grandmother", "king", "man", "mother", "queen", "sister", "son", "uncle", "woman");
				curr_topic_dir = "people";
				break;
			case "places_and_transport":
				vocArray = new Array("bank", "beach", "bike", "boat", "Brunei", "bus", "Cambodia", "car", "farm", "home", "Indonesia", "Laos", "Malaysia", "market", "motorbike", "Myanmar", "on foot", "Philippines", "plane", "school", "Singapore", "temple", "Thailand", "train", "van", "Vietnam", "zoo");
				curr_topic_dir = "places_and_transport";
				break;
			case "school":
				vocArray = new Array("Art", "bag", "backpack", "blackboard", "book", "chalk", "classroom", "clock", "computer", "desk", "English", "eraser", "homework", "Math", "map", "Music", "notebook", "paper", "P.E.", "pen", "pencil", "ruler", "school", "Science");
				curr_topic_dir = "school";
				break;
			case "stationery":
				vocArray = new Array("book", "chalk", "eraser", "notebook", "paper", "pen", "pencil", "ruler");
				curr_topic_dir = "school";
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				curr_topic_dir = "time";
				break;
		}
	}

	else if (currentLev == "P3") {
		switch (curr_topic_title) {
			case "actions":
				vocArray = new Array("buy", "close", "come", "cook", "count", "cry", "cut", "dig", "draw", "drink", "drive", "eat", "finish", "fly", "give", "go / goes", "guess", "help", "hop", "jump", "like", "listen", "look", "make", "move", "open", "paint", "play", "print", "pull", "push", "put on", "read", "ride", "run", "sing", "sit", "sit down", "sleep", "smile", "speak", "stand", "stand up", "stop", "swim", "walk", "wear", "write");
				curr_topic_dir = "actions";
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "buffalo", "cat", "chicken", "cow", "crab", "crocodile", "dog", "dolphin", "duck", "elephant", "fish", "fly", "frog", "gecko", "goat", "hen", "horse", "lion", "monkey", "mosquito", "mouse", "pig", "rabbit", "rat", "shark", "sheep", "snake", "spider", "tiger", "whale", "zebra");
				curr_topic_dir = "animals";
				break;
			case "asean":
				vocArray = new Array("Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam");
				curr_topic_dir = "places_and_transport";
				break;
			case "beach":
				vocArray = new Array ("bench", "bin", "cement stool", "coconut", "flag", "gazebo", "grass", "inner tube", "island", "ladder", "light bulb", "lighthouse", "log", "motorbike", "palm", "pavilion", "pier", "sand", "shell", "ship", "sign", "socket", "spirit house", "stone circle", "stump", "swing", "table", "toilet", "tree");
				curr_topic_dir = "beach";
				break;
			case "clothes":
				vocArray = new Array("belt", "blouse", "cap", "dress", "earrings", "glasses", "handbag", "hat", "jackets", "jeans", "pyjamas", "raincoat", "ring", "rings", "shirt", "shoe", "shoes", "shorts", "skirt", "sock", "socks", "swimsuit", "T-shirt", "tie", "wallet", "watch");
				curr_topic_dir = "clothes";
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				curr_topic_dir = "time";
				break;
			case "easy":
				vocArray = new Array("bag", "bat", "bed", "bin", "cap", "cat", "cut", "dog", "duck", "fan", "hat", "hop", "jam", "pen", "pig", "run", "sock", "van");
				curr_topic_dir = "easy";
				break;
			case "finding game":
				vocArray = new Array("above", "balloon", "behind", "bottle cap", "brushes", "button", "calendar", "drinking straw", "duster", "dustpan", "folder", "in", "in front of", "keyboard", "liquid paper", "mike", "near", "next to", "on", "plastic basket", "plasticine", "power cord", "power socket", "scissors",  "shelves", "speakers", "this", "that", "toiletry bag", "under");
				curr_topic_dir = "finding game";
				break;
			case  "location":
				vocArray = new Array("above", "behind", "in", "in front of", "near", "next to", "on", "this", "that", "under");
				curr_topic_dir = "location";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "beans", "beef", "bread", "breakfast", "cake", "candy", "carrots", "chicken", "chilli", "chocolate", "coconuts", "coffee", "cookies", "corn", "durian", "egg", "eggplant", "fish", "food", "fried chicken", "fried egg", "fried fish", "fried rice", "fruit", "grapes", "guava", "hamburger", "hot dog", "ice", "ice cream", "iced coffee", "iced tea", "jam", "juice", "limes", "lunch", "mangoes", "mangosteens", "milk", "noodles", "oil", "orange", "papayas", "pineapple", "pizza", "pork", "rambutans", "rice", "rose apple", "salad", "sandwich", "shrimp", "soda", "soup", "sugar", "tea", "tomato", "water", "watermelon", "yoghurt");
				curr_topic_dir = "food";
				break;
			case "grammar":
				vocArray = new Array("a / the", "and", "at", "back", "be / is / am / are", "behind", "between", "but", "can", "cannot", "do / does", "for", "have / has", "her", "his", "how", "how many", "how much", "I", "in", "in front of", "into", "it", "my", "near", "next to", "no", "not", "on", "or", "that", "the", "this", "to", "under", "up", "we", "what", "what time", "when", "where", "which", "who", "why", "you", "your");
				curr_topic_dir = "grammar";
				break;
			case "home":
				vocArray = new Array("basin", "bathroom", "bed", "bedroom", "bin", "bottle", "bowl", "box", "broom", "can", "chair", "comb", "cup", "cupboard", "dish", "door", "electric urn", "fan", "floor", "flower", "garden", "glass", "house", "key", "kitchen", "lamp", "living room", "lock", "mat", "mirror", "pan", "picture", "pillow", "pot", "refrigerator", "room", "sink", "soap", "sofa", "stove", "table", "TV", "vase", "wall", "window", "wok");
				curr_topic_dir = "home";
				break;
			case "months":
				vocArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				curr_topic_dir = "time";
				break;
			case "occupations":
				vocArray = new Array("barber", "boxer", "bus driver", "butcher", "carpenter", "chef", "cook", "dancer", "dentist", "doctor", "farmer", "fisherman", "fruit seller", "gardener", "guide", "hairdresser", "home-maker", "merchants", "monk", "nurse", "policeman", "postman", "sailor", "secretary", "singer", "soldier", "student", "taxi driver", "teacher", "vet");
				curr_topic_dir = "occupations";
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "body", "bone", "chest", "chin", "ear", "ears", "eye", "eyebrows", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "hip", "hips", "knee", "knees", "leg", "legs", "mouth", "nail", "nails", "neck", "nose", "shoulder", "shoulders", "teeth", "thumb", "toe", "toes", "tooth");
				curr_topic_dir = "body";
				break;
			case "people":
				vocArray = new Array("aunt", "baby", "boy", "brother", "cousin", "daughter", "family", "father", "friend", "girl", "granddaughter", "grandfather", "grandmother", "grandson", "king", "man", "mother", "nephew", "niece", "queen", "sister", "son", "uncle", "woman");
				curr_topic_dir = "people";
				break;
			case "places_and_transport":
				vocArray = new Array("Bandar Seri Begawan", "Bangkok", "bank", "beach", "bike", "boat", "Brunei", "bus", "Cambodia", "car", "factory", "farm", "Hanoi", "helicopter", "home", "Indonesia", "Jakarta", "Kuala Lumpur", "Laos", "Malaysia", "Manila", "market", "motorbike", "motorbike taxi", "Myanmar", "Naypyidaw", "on foot", "Philippines", "Phnom Penh", "plane", "police station", "post office", "railway station", "restaurant", "rice paddy", "school", "sea", "ship", "shop", "Singapore", "supermarket", "swimming pool", "taxi", "temple", "Thailand", "train", "truck", "tuk-tuk", "van", "Vientiene", "Vietnam", "zoo");
				curr_topic_dir = "places_and_transport";
				break;
			case "school":
				vocArray = new Array("Art", "backpack", "bag", "bell", "blackboard", "book", "bookshelf", "calculator", "calendar", "canteen", "chalk", "classroom", "clock", "coloured pencils", "computer", "computer room", "crayons", "desk", "English", "eraser", "homework", "ink", "library", "lunch box", "map", "Math", "Music", "music room", "notebook", "P.E.", "paper", "pen", "pencil", "pencil case", "pencil sharpener", "playground", "ruler", "school", "Science", "scissors", "Social Studies", "toilet", "umbrella", "whiteboard");
				curr_topic_dir = "school";
				break;
			case "stationery":
				vocArray = new Array("book", "chalk", "eraser", "notebook", "paper", "pen", "pencil", "ruler");
				curr_topic_dir = "school";
				break;
			case "time":
				vocArray = new Array("April", "at night", "at noon", "August", "Christmas", "December", "February", "Friday", "in the afternoon", "in the evening", "in the morning", "January", "July", "June", "Loi Krathong", "March", "May", "Monday", "November", "October", "Saturday", "September", "Sunday", "Thursday", "today", "tomorrow", "Tuesday", "Wednesday", "week", "yesterday");
				curr_topic_dir = "time";
				break;
		}
	}

	else if (currentLev == "P4") {
		switch (curr_topic_title) {
			case "actions":
				vocArray = new Array("close", "come", "cook", "count", "cry", "cut", "dig", "draw", "drink", "drive", "eat", "give", "go / goes", "guess", "hop", "jump", "like", "open", "play", "read", "ride", "run", "sing", "sit", "sit down", "sleep", "speak", "stand", "stand up", "walk", "write");
				curr_topic_dir = "actions";
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "cat", "chicken", "cow", "dog", "duck", "elephant", "fish", "gecko", "goat", "hen", "horse", "lion", "monkey", "mouse", "pig", "rabbit", "rat", "sheep", "snake", "tiger", "zebra");
				curr_topic_dir = "animals";
				break;
			case "asean":
				vocArray = new Array("Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam");
				curr_topic_dir = "places_and_transport";
				break;
			case "beach":
				vocArray = new Array ("bench", "bin", "cement stool", "coconut", "flag", "gazebo", "grass", "inner tube", "island", "ladder", "light bulb", "lighthouse", "log", "motorbike", "palm", "pavilion", "pier", "sand", "shell", "ship", "sign", "socket", "spirit house", "stone circle", "stump", "swing", "table", "toilet", "tree");
				curr_topic_dir = "beach";
				break;
			case "clothes":
				vocArray = new Array("belt", "blouse", "cap", "dress", "earrings", "glasses", "handbag", "hat", "jackets", "jeans", "ring", "shirt", "shoe", "shoes", "shorts", "skirt", "sock", "socks", "T-shirt", "watch");
				curr_topic_dir = "clothes";
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				curr_topic_dir = "time";
				break;
			case "easy":
				vocArray = new Array("bag", "bat", "bed", "bin", "cap", "cat", "cut", "dog", "duck", "fan", "hat", "hop", "jam", "pen", "pig", "run", "sock", "van");
				curr_topic_dir = "easy";
				break;
			case "finding game":
				vocArray = new Array("above", "balloon", "behind", "bottle cap", "brushes", "button", "calendar", "drinking straw", "duster", "dustpan", "folder", "in", "in front of", "keyboard", "liquid paper", "mike", "near", "next to", "on", "plastic basket", "plasticine", "power cord", "power socket", "scissors",  "shelves", "speakers", "this", "that", "toiletry bag", "under");
				curr_topic_dir = "finding game";
				break;
			case  "location":
				vocArray = new Array("above", "behind", "in", "in front of", "near", "next to", "on", "this", "that", "under");
				curr_topic_dir = "location";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "bread", "cake", "candy", "carrots", "chicken", "cookies", "corn", "durian", "egg", "food", "ice cream", "jam", "limes", "mangoes", "mangosteens", "milk", "noodles", "orange", "papayas", "pineapple", "pork", "rice", "soup", "tea", "water", "watermelon");
				curr_topic_dir = "food";
				break;
			case "grammar":
				vocArray = new Array("be / is / am / are", "but", "can", "cannot", "do / does", "how many", "how much", "I", "in", "into", "my", "not", "on", "or", "that", "this", "to", "what", "when", "where", "who", "why", "you");
				curr_topic_dir = "grammar";
				break;
			case "home":
				vocArray = new Array("basin", "bathroom", "bed", "bedroom", "bin", "broom", "box", "chair", "cup", "cupboard", "dish", "door", "fan", "flower", "glass", "kitchen", "lamp", "living room", "mat", "pan", "picture", "pot", "room", "sink", "sofa", "stove", "table", "TV", "window", "wok");
				curr_topic_dir = "home";
				break;
			case "months":
				vocArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				curr_topic_dir = "time";
				break;
			case "occupations":
				vocArray = new Array("barber", "boxer", "bus driver", "butcher", "chef", "cook", "dancer", "dentist", "doctor", "farmer", "fisherman", "fruit seller", "gardener", "guide", "hairdresser", "home-maker", "nurse", "policeman", "postman", "singer", "soldier", "student", "teacher", "vet");
				curr_topic_dir = "occupations";
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "ears", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "hip", "hips", "knee", "knees", "leg", "legs", "mouth", "neck", "nose", "shoulder", "shoulders", "teeth", "toe", "toes", "tooth");
				curr_topic_dir = "body";
				break;
			case "people":
				vocArray = new Array("aunt", "baby", "boy", "brother", "daughter", "family", "father", "friend", "girl", "grandfather", "grandmother", "king", "man", "mother", "queen", "sister", "son", "uncle", "woman");
				curr_topic_dir = "people";
				break;
			case "places_and_transport":
				vocArray = new Array("bank", "beach", "bike", "boat", "Brunei", "bus", "Cambodia", "car", "farm", "on foot", "home",  "Indonesia", "Laos", "Malaysia", "market", "Myanmar", "Philippines", "plane", "school", "Singapore", "temple", "Thailand", "train", "van", "Vietnam", "zoo");
				curr_topic_dir = "places_and_transport";
				break;
			case "school":
				vocArray = new Array("Art", "bag", "backpack", "blackboard", "book", "chalk", "classroom", "clock", "computer", "desk", "English", "eraser", "homework", "map", "Math", "Music", "notebook", "paper", "P.E.", "pen", "pencil", "ruler", "school", "Science");
				curr_topic_dir = "school";
				break;
			case "stationery":
				vocArray = new Array("book", "chalk", "eraser", "notebook", "paper", "pen", "pencil", "ruler");
				curr_topic_dir = "school";
				break;
			case "time":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				curr_topic_dir = "time";
				break;
		}
	}
	else if (currentLev == "P5") {
		switch (curr_topic_title) {
			case "actions":
				vocArray = new Array("answer", "ask", "buy", "change", "check", "choose", "close", "come", "cook", "count", "cry", "cut", "dig", "discuss", "drink", "drive", "eat", "finish", "forget", "give", "go", "guess", "help", "jump", "like", "listen", "look", "make", "move", "open", "play", "print", "pull", "push", "read", "ride", "run", "say", "sing", "sit", "sit down", "sleep", "smile", "stand", "stand up", "stop", "swim", "think", "walk", "write");
				curr_topic_dir = "actions";
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "buffalo", "cat", "chicken", "cow", "crab", "deer", "dolphin", "dog", "duck", "elephant", "fish", "fly", "frog","gecko", "goat", "hen", "horse", "jellyfish", "kangaroo", "lion", "monkey", "mouse", "mosquito", "octopus", "panda", "pig", "rabbit", "rat", "shark", "sheep", "snake", "spider", "squirrel", "tiger", "turtle", "whale", "zebra");
				curr_topic_dir = "animals";
				break;
			case "asean":
				vocArray = new Array("Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam");
				curr_topic_dir = "places_and_transport";
				break;
			case "beach":
				vocArray = new Array ("bench", "bin", "cement stool", "coconut", "flag", "gazebo", "grass", "inner tube", "island", "ladder", "light bulb", "lighthouse", "log", "motorbike", "palm", "pavilion", "pier", "sand", "shell", "ship", "sign", "socket", "spirit house", "stone circle", "stump", "swing", "table", "toilet", "tree");
				curr_topic_dir = "beach";
				break;
		case "clothes":
				vocArray = new Array("belt", "blouse", "cap", "dress", "earrings", "glasses", "handbag", "hat", "jackets", "jeans", "pants", "pyjamas", "ring", "shirt", "shoe", "shoes", "shorts", "skirt", "sock", "socks", "sweater", "swimsuit", "T-shirt", "watch");
				curr_topic_dir = "clothes";
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				curr_topic_dir = "time";
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "black bag", "black shirt", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "narrow road", "new car", "new house", "old car", "old house", "old man", "old woman", "pink bag", "pink shirt", "pretty girl", "red bag", "red shirt", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "white shirt", "wide road", "young man", "young woman");
				curr_topic_dir = "describing";
				break;
			case "easy":
				vocArray = new Array("bag", "bat", "bed", "bin", "cap", "cat", "cut", "dog", "duck", "fan", "hat", "hop", "jam", "pen", "pig", "run", "sock", "van");
				curr_topic_dir = "easy";
				break;
			case "finding game":
				vocArray = new Array("aerial", "behind", "bottle cap", "calendar", "drawer", "drinking straw", "file boxes", "folder", "in", "in front of", "nail", "near", "next to", "on", "plastic basket", "printer", "shelves", "speakers", "thumbtack", "under");
				curr_topic_dir = "finding game";
				break;
			case  "location":
				vocArray = new Array("above", "behind", "in", "in front of", "near", "next to", "on", "this", "that", "under");
				curr_topic_dir = "location";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "beans", "beef", "bread", "breakfast", "butter", "cabbage", "cake", "candy", "carrots", "cheese", "chicken", "chilli", "chocolate", "coconuts", "coffee", "coke", "cookies", "corn", "cucumber", "curry", "durian", "egg", "eggplant", "fish", "food", "fried chicken", "fried egg", "fried fish", "fried rice", "fruit", "garlic", "grapes", "guava", "hamburger", "hot dog", "ice cream", "iced coffee", "iced tea", "ice", "jam", "juice", "lemons", "limes", "lollipop", "long beans", "lunch", "mangoes", "mangosteens", "milk", "noodles", "oil", "onion", "orange", "papayas", "pineapple", "pizza", "pomelo", "pork", "pumpkin", "rambutans", "rice", "rose apple", "salad", "salt", "sandwich", "shrimp", "soda", "soft drinks", "soup", "strawberries", "sugar", "sushi", "tea", "tomato", "vinegar", "water", "watermelon", "wine", "yoghurt");
				curr_topic_dir = "food";
				break;
			case "free_time":
				vocArray = new Array("collect stamps", "cook", "dance", "do gardening", "do gymnastics", "draw", "go camping", "go fishing", "go horse riding", "go shopping", "listen to music", "paint", "play badminton", "play basketball", "play computer games", "play football", "play games", "play ping-pong", "play the guitar", "play volleyball", "read comic books", "read", "ride a bike", "sing", "watch TV");
				curr_topic_dir = "free_time";
				break;
			case "grammar":
				vocArray = new Array("?", "be / is / am / are", "but", "can", "cannot", "do / does",  "how", "how many", "how much", "I", "in", "into", "my", "not", "on", "or", "that", "this", "to", "what time", "why", "which", "what", "when", "where", "who", "you");
				curr_topic_dir = "grammar";
				break;
			case "health":
			 	vocArray = new Array("backache", "earache", "fever", "flu", "have a cold", "sick", "sore throat", "toothache");
				curr_topic_dir = "health";
				break;
			case "home":
				vocArray = new Array("basin", "bathroom", "bed", "bedroom", "bin", "broom", "box", "chair", "cup", "cupboard", "dish", "door", "fan", "flower", "glass", "kitchen", "lamp", "living room", "mat", "pan", "picture", "pot", "room", "sink", "sofa", "stove", "table", "TV", "window", "wok");
				curr_topic_dir = "home";
				break;
			case "months":
				vocArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				curr_topic_dir = "time";
				break;
			case "occupations":
				vocArray = new Array("actor", "actress", "barber", "boxer", "bus driver", "butcher", "carpenter", "chef", "cook", "dancer", "dentist", "doctor", "dressmaker", "farmer", "fisherman", "fruit seller", "gardener", "guide", "hairdresser", "home-maker", "librarian", "merchants", "monk", "nurse", "policeman", "postman", "sailor", "secretary", "singer", "soldier", "student", "taxi driver", "teacher", "vet", "waiter", "waitress");
				curr_topic_dir = "occupations";
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "body", "bone", "chest", "chin", "ear", "ears", "eyebrows", "eye", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "hip", "hips", "knee", "knees", "leg", "legs", "mouth", "nail", "nails", "neck", "nose", "shoulder", "shoulders", "teeth", "thumb", "toe", "toes", "tooth");
				curr_topic_dir = "body";
				break;
			case "people":
				vocArray = new Array("aunt", "baby", "boy", "brother", "cousin", "daughter", "family", "father", "friend", "girl", "grandfather", "grandmother", "king", "man", "mother", "nephew", "niece", "queen", "sister", "son", "uncle", "woman");
				curr_topic_dir = "people";
				break;
			case "places_and_transport":
				vocArray = new Array("bank", "beach", "bike", "boat", "Brunei", "bus", "Cambodia", "car", "farm", "home", "Indonesia", "Laos", "Malaysia", "market", "motorbike", "Myanmar", "on foot", "Philippines", "plane", "school", "Singapore", "temple", "Thailand", "train", "van", "Vietnam", "zoo");
				curr_topic_dir = "places_and_transport";
				break;
			case "school":
				vocArray = new Array("Art", "bag", "backpack", "blackboard", "book", "chalk", "classroom", "clock", "computer", "desk", "English", "eraser", "homework", "map", "Math", "Music", "notebook", "paper", "P.E.", "pen", "pencil", "rubber", "ruler", "school", "scissors", "Science");
				curr_topic_dir = "school";
				break;
			case "stationery":
				vocArray = new Array("book", "chalk", "eraser","notebook", "paper", "pen", "pencil", "ruler");
				curr_topic_dir = "school";
				break;
			case "time":
				vocArray = new Array("at night", "in the afternoon", "in the morning", "in the evening", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				curr_topic_dir = "time";
				break;
			case "weather":
				vocArray = new Array("clear", "cloudy", "cold", "foggy", "hot", "rainy", "still", "stormy", "windy");
				curr_topic_dir = "weather";
				break;
		}

	}
	else if (currentLev == "P6") {
		switch (curr_topic_title) {
			case "actions":
				vocArray = new Array("answer", "ask", "buy", "change", "check", "choose", "close", "come", "cook", "count", "cry", "cut", "dig", "discuss", "draw", "drink", "drive", "eat", "finish", "fly", "forget", "give", "go", "guess", "help", "hop", "jump", "leave", "like", "listen", "look", "make", "move", "open", "paint", "play", "point", "print", "pull", "push", "read", "ride", "run", "say", "shake", "sing", "sit down", "sit", "skip", "sleep", "smile", "speak", "stand", "stand up", "stop", "swim", "talk", "think", "walk", "wear", "write");
				curr_topic_dir = "actions";
				break;
			case "animals":
				vocArray = new Array("animals", "ant", "bat", "bear", "bee", "bird", "buffalo", "butterfly", "calf", "cat", "cheetah", "chicken", "chick", "cow", "crab", "crocodile", "deer", "dog", "dolphin", "duck", "duckling", "elephant", "fish", "fly", "fox", "frog", "gecko", "geese", "giraffe", "goat", "goose", "grasshopper", "hen", "hippopotamus", "horse", "jellyfish", "kangaroo", "kitten", "lamb", "lion", "meow", "monkey", "moo", "mosquito", "mouse", "neigh", "octopus", "oink", "panda", "parrot", "peacock", "pig", "piglet", "quack", "rabbit", "rat", "rhinoceros", "seal", "shark", "sheep", "snail", "snake", "spider", "squirrel", "starfish", "tiger", "turtle", "whale", "woof", "zebra");
				curr_topic_dir = "animals";
				break;
			case "asean":
				vocArray = new Array("Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam");
				curr_topic_dir = "places_and_transport";
				break;
			case "beach":
				vocArray = new Array ("bench", "bin", "cement stool", "coconut", "flag", "gazebo", "grass", "inner tube", "island", "ladder", "light bulb", "lighthouse", "log", "motorbike", "palm", "pavilion", "pier", "sand", "shell", "ship", "sign", "socket", "spirit house", "stone circle", "stump", "swing", "table", "toilet", "tree");
				curr_topic_dir = "beach";
				break;
			case "body":
				vocArray = new Array("arm", "arms", "back", "body", "bone", "chest", "chin", "ear", "ears", "eyebrows", "eye", "eyes", "face", "feet", "finger", "fingers", "foot", "hair", "hand", "hands", "head", "hip", "hips", "knee", "knees", "leg", "legs", "mouth", "nail", "nails", "neck", "nose", "shoulder", "shoulders", "teeth", "thumb", "toe", "toes", "tooth");
				curr_topic_dir = "body";
				break;
			case "clothes":
				vocArray = new Array("belt", "blouse", "cap", "checked", "dress", "earrings", "floral", "glasses", "gloves", "handbag", "hat", "jackets", "jeans", "necklace", "nightdress", "pants", "plain", "pyjamas", "raincoat", "ring", "rings", "scarf", "shirt", "shoe", "shoes", "shorts", "skirt", "sock", "socks", "spotted", "striped", "sweater", "swimsuit", "tie", "trainers", "T-shirt", "underwear", "wallet", "watch", "wig", "zip");
				curr_topic_dir = "clothes";
				break;
			case "days":
				vocArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
				curr_topic_dir = "time";
				break;
			case "describing":
				vocArray = new Array("bad food", "bad music", "big dog", "big eyes", "black bag", "black shirt", "curly hair", "fast car", "good food", "good music", "happy student", "happy teacher", "long hair", "narrow road", "new car", "new home", "new house", "old car", "old home", "old house", "old man", "old woman", "pink bag", "pink shirt", "pretty girl", "red bag", "red shirt", "sad student", "sad teacher", "short girl", "short hair", "slow car", "small dog", "small eyes", "straight hair", "tall girl", "white shirt", "wide road", "young man", "young woman");
				curr_topic_dir = "describing";
				break;
			case "food":
				vocArray = new Array("apple", "banana", "beans", "beef", "bread", "breakfast", "butter", "cabbage", "cake", "candy", "carrots", "cheese", "chicken", "chilli", "chocolate", "coconuts", "coffee", "coke", "cookies", "corn", "cucumber", "curry", "durian", "egg", "eggplant", "fish", "food", "fried chicken", "fried egg", "fried fish", "fried rice", "fruit", "garlic", "grapes", "guava", "hamburger", "hot dog", "ice cream", "iced coffee", "iced tea", "ice", "jam", "juice", "lemons", "limes", "lollipop", "long beans", "lunch", "mangoes", "mangosteens", "milk", "noodles", "oil", "onion", "orange", "papayas", "pineapple", "pizza", "pomelo", "pork", "pumpkin", "rambutans", "rice", "rose apple", "salad", "salt", "sandwich", "shrimp", "soda", "soft drinks", "soup", "strawberries", "sugar", "sushi", "tea", "tomato", "vinegar", "water", "watermelon", "wine", "yoghurt");
				curr_topic_dir = "food";
				break;
			case "free_time":
				vocArray = new Array("collect stamps", "cook", "dance", "do gardening", "do gymnastics", "draw", "fly a kite", "go camping", "go climbing", "go fishing", "go for a picnic", "go horse riding", "go jogging", "go shopping", "go skating", "go swimming","practise judo", "karate", "listen to music", "listen to the radio", "paint", "play badminton", "play basketball", "play cards", "play chess", "play computer games", "play darts", "play football", "play games", "play ping-pong", "play the guitar", "play volleyball", "read comic books", "read", "ride a bike", "sing", "watch TV");
				curr_topic_dir = "free_time";
				break;
			case "grammar":
			 	vocArray = new Array("?", "and", "at", "be / is / am / are", "behind", "between", "but", "can", "cannot", "do / does", "her", "his", "how", "how many", "how much", "I", "in front of", "in", "into", "it", "my", "near", "next to", "no", "not", "on", "on the left of", "on the right of", "or", "that", "the", "this", "to", "under", "what", "what time", "when", "where", "which", "who", "why", "you", "your");
				curr_topic_dir = "grammar";
				break;
			case "health":
			 	vocArray = new Array("backache", "earache", "fever", "flu", "have a cold", "sick", "sore throat", "toothache");
				curr_topic_dir = "health";
				break;
			case "home":
				vocArray = new Array("armchair", "basin", "basket", "bathroom", "bed", "bedroom", "bin", "bottle", "bowl", "box", "broom", "can", "CD", "chair", "closet", "comb", "cupboard", "cup", "dining room", "dish", "doll", "door", "electric urn", "fan", "floor", "flower", "garden", "glass", "house", "jug", "key", "kitchen", "kite", "lamp", "living room", "lock", "lotus", "mat", "mirror", "nest", "oven", "pan", "picture", "pillow", "pot", "refrigerator", "robot", "room", "rose", "shelf", "sink", "soap", "sofa", "stereo", "stove", "sunflower", "table", "teddy bear", "top", "toy car", "toy train", "TV", "vase", "VCDs", "wall", "wardrobe", "window", "wok", "yo-yo");
				curr_topic_dir = "home";
				break;
			case "months":
				vocArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
				curr_topic_dir = "time";
				break;
			case "occupations":
				vocArray = new Array("actor", "actress", "barber", "boxer", "bus driver", "butcher", "carpenter", "chef", "cook", "dancer", "dentist", "doctor", "dressmaker", "farmer", "fisherman", "fruit seller", "gardener", "guide", "hairdresser", "home-maker", "librarian", "merchants", "monk", "nurse", "policeman", "postman", "sailor", "secretary", "soldier", "student", "taxi driver", "teacher", "vet", "waiter", "waitress");
				curr_topic_dir = "occupations";
				break;
			case "people":
				vocArray = new Array("aunt", "baby", "boy", "brother", "cousin", "daughter", "family", "father", "friend", "girl", "grandfather", "grandmother", "king", "man", "mother", "nephew", "niece", "queen", "sister", "son", "uncle", "woman");
				curr_topic_dir = "people";
				break;
			case "places_and_transport":
				vocArray = new Array("Bandar Seri Begawan", "Bangkok", "bank", "beach", "bike", "boat", "Brunei", "bus", "Cambodia", "car", "coffee shop", "factory", "farm", "Hanoi", "helicopter", "hill", "home", "hospital", "Indonesia", "Jakarta", "Kuala Lumpur", "Laos", "Malaysia", "Manila", "market", "motorbike", "motorbike taxi", "Myanmar", "Naypyidaw", "on foot", "Philippines", "Phnom Penh", "plane", "police station", "post office", "railway station", "restaurant", "rice paddy", "school", "sea", "ship", "shop", "Singapore", "studio", "supermarket", "swimming pool", "taxi", "temple", "Thailand", "train", "truck", "tuk-tuk", "van", "Vientiene", "Vietnam", "zoo");
				curr_topic_dir = "places_and_transport";
				break;
			case "school":
				vocArray = new Array("Art", "backpack", "bag", "bell", "bin", "blackboard", "book", "bookshelf", "calculator", "calendar", "canteen", "chalk", "classroom", "clock", "coloured pencils", "computer", "computer room", "crayons", "desk", "English", "eraser", "globe", "glue", "homework", "ink", "library", "lunch box", "map", "Math", "Music", "music room", "notebook", "paper", "P.E.", "pencil case", "pencil", "pencil sharpener", "pen", "playground", "ruler", "school", "Science", "scissors", "social studies", "toilet", "umbrella", "violin", "waste paper basket", "whiteboard");
				curr_topic_dir = "school";
				break;
			case "socialising":
				vocArray = new Array("all right", "By the way", "Can I help you", "Can I speak to … please", "Can you help me", "Christmas", "Congratulations", "Excuse me", "Good luck", "Halloween", "I'm sorry to hear that", "Is … there", "May I borrow …", "Never mind", "New Year's Day", "New Year's Eve", "No Smoking", "Raise your hand", "Repeat after me", "See you then", "Thanksgiving", "Thank you", "That's lovely", "What happened", "What's the matter", "You're welcome");
				break;
			case "stationery":
				vocArray = new Array("book", "chalk", "eraser", "notebook", "paper", "pen", "pencil", "ruler");
				curr_topic_dir = "school";
				break;
			case "time":
				vocArray = new Array("April", "at night", "at noon", "August", "Christmas", "December", "February", "Friday", "in the afternoon", "in the evening", "in the morning", "January", "July", "June", "Loi Krathong", "March", "May", "Monday", "November", "October", "Saturday", "September", "Sunday", "Thursday", "Tuesday", "Wednesday");
				curr_topic_dir = "time";
				break;
			case "weather":
				vocArray = new Array("clear", "cloudy", "cold", "foggy", "hot", "rainy", "still", "stormy", "windy");
				curr_topic_dir = "weather";
				break;
		}

	}

	if (curr_topic_title.substr(0,5) == "onet_") {
		switch (curr_topic_title) {
			case "onet_inst":
				vocArray = new Array ("A and B are talking about XXXX.", "A wants to 'XXX XXX XXX'.", "XXXX has ## Baht. What can he buy?", "Which word has the same sound as 'XXX'?", "You want to buy XXXX and XXXX. How much do you pay?", "You want to cook vegetarian food. What can you use for cooking?", "Which pair has the different first consonant sound?", "Look at the directory. Where can you find 'XXXX'?", "Look at the table. Which of the following is correct?", "Look at the map. Which sentence is correct?", "Look at the pictures. What country are they from?", "Which of the following is correct?", "Which sentence describes the chart | graph?", "Which sign means 'XXXX'?", "Which chart | graph describes the sentence, 'XXX XXX'?", "What are they doing?", "What subject are they studying?", "Where are they?", "What is the missing word?", "When you see this sign, you _____________.");
			break;

			case "onet_q_a":
				vocArray = new Array (qa_when,qa_where,qa_what_time,qa_who,qa_why,qa_how);
			break;

			case "onet_gq":


				vocArray = new Array(single001, single002, single003, single004, single005, single006, single007, single008, single009, single010, single011,
                                 	single012, single013, single014, single015, single016, single017, single018, single019, single020, single021, single022,
                                 	single023, single024, single025, single026, single027, single028, single029, single030, single031, single032, single033,
                                 	single034, single035, single036, single037, single038, single039, single040, single041, single042, single043, single044,
                                 	single045, single046, single047, single048, single049, single050, single051, single052, single053, single054, single055,
                                 	single056, single057, single058, single059, single060, single061, single062, single063, single064, single065, single066,
                                 	single067, single068, single069, single070, single071, single072, single073, single074, single075, single076, single077,
                                 	single078, single079, single080, single081, single082, single083, single084, single085, single086, single087, single088,
                                 	single089, single090);

			break;

			case "onet_soc":
				vocArray = new Array("onet_2551_02-2", "onet_2551_03-1", "onet_2551_04-4", "onet_2551_05-2", "onet_2551_10-4", "onet_bq015-3", "onet_bq016-2", "onet_bq017-3");
				curr_topic_dir = "onet_gq";
			break;

			case "onet_shop":
				vocArray = new Array("onet_2551_07-4", "onet_bq014-4", "onet_bq021-3", "onet_bq022-1", "onet_bq023-4", "onet_bq024-4");
				curr_topic_dir = "onet_gq";
			break;

			case "onet_phon":
				vocArray = new Array("onet_bq011-2", "onet_bq012-2", "onet_bq013-1", "onet_bq025-2", "onet_bq026-3", "onet_bq027-3", "onet_bq028-2", "onet_bq029-4", "onet_bq030-2", "onet_bq031-2", "onet_bq032-4", "onet_bq033-2", "onet_bq034-1", "onet_bq035-2", "onet_bq036-3");
				curr_topic_dir = "onet_gq";
			break;

      		case "onet_cloze":
        		vocArray = new Array(cloze001,cloze002, cloze003, cloze004, pass001, pass002, pass003, pass004);
			break;

      		case "onet_full":
      			vocArray.length=0;
      			for (var i=0; i<onet_full_array.length; i++) {
					vocArray[i]=onet_full_array[i];
      			}
			break;

      		case "onet_full_2":
      			vocArray.length=0;
      			for (var i=0; i<onet_full2_array.length; i++) {
					vocArray[i]=onet_full2_array[i];
      			}
        		//vocArray = new Array(cloze001,cloze002,cloze003,cloze004,cloze006,cloze007, pass001, pass003, pass004, pass005, pass006);
			break;			
		}
	}

	if (curr_topic_title == "dot_and_Ben") {
		switch (currentBook) {
			case "d_B_1":
				vocArray = new Array ("a / the", "and", "bad", "bed", "Ben", "bus", "Dot", "fun", "has", "hop", "hot", "hut", "in", "in bed", "is", "not", "on", "pet", "sad", "sit", "sun");
				d_B_ExArray = new Array(5,4,2,1);
				d_B_Title= "Ben is Bad on the Bus";
				break;
			case "d_B_2":
				vocArray = new Array ("a / the", "and", "back", "bed", "Ben", "but", "can", "cat", "Dot", "duck", "has", "in", "in bed", "is", "it", "not", "of", "on", "sack", "sad", "sick", "sit", "what");
				d_B_ExArray = new Array(2,4,4,4);
				d_B_Title= "The Duck in the Sack";
				break;
			case "d_B_3":
				vocArray = new Array ("a / the", "and", "bad", "bag", "Ben", "big", "Bud", "bus", "can", "cat", "dog", "Dot", "duck", "fog", "gas", "gem", "guess", "Gus", "has", "hot", "hut", "in", "is / are", "it","Jack", "jam", "jog", "not", "on", "sack", "sit", "what");
				d_B_ExArray = new Array(7,3,6,7);
				d_B_Title= "What is in the Bag?";
				break;
			case "d_B_4":
				vocArray = new Array ("a / the", "and", "at", "bag", "bake", "BAM", "Ben", "big", "Bud", "bus", "but", "cake", "can", "cane", "cat", "Doctor Zogue", "dog", "Dot", "duck", "feet", "fog", "gem", "guide", "Gus", "has", "hide", "his", "home", "hut", "I", "in", "into", "is / am / are", "it", "Jack", "Joe", "jog", "keep", "kick", "lake", "like", "magic", "man", "meet", "mice", "my", "name","nice", "nice to meet you", "not", "on", "pet", "pie", "sack", "sage", "see", "sit", "Sue", "take", "tap", "to", "we", "you");
				d_B_Title= "The Sage in the Gem";
				d_B_ExArray = new Array(10,2,9,11,8);
				break;
			case "d_B_5":
				vocArray = new Array ("a / the", "bang", "bus", "but", "cake", "can", "cane", "cannot", "dance", "Doctor Zogue", "Dot", "eat", "face", "for", "gem", "go / goes", "gong", "Gus", "have / has", "her", "home", "I", "in", "be / is / am / are", "Jack", "Joe", "kick", "lake", "like", "mad", "magic", "make", "meet", "mice", "my", "need", "nice", "no", "not", "of", "on", "or", "pie", "pink", "sad", "sage", "see", "sing", "sink", "sit", "Sue", "sun", "take", "tap", "to", "up", "up to you", "we", "week", "you", "your");
				d_B_ExArray = new Array(10,14,3,9,14,5,5);
				d_B_Title= "Sing or Sink";
				break;
		}
		switch (currentDBEx) {
			case "d_B_1_1_1":
				vocArray = new Array ("Dot  และ  Ben  นั่งในกระท่อม", "Dot  และ  Ben  นั่งในหมวก", "Dot  และ  Ben  ร้อนมาก", "Dot  และ  Ben  นั่งบนเตียง");
				vocEx="Dot  และ  Ben  นั่งในกระท่อม";
				break;
			case "d_B_1_1_2":
				vocArray = new Array ("แสงแดดร้อน", "พระอาทิตย์ร้อน", "อากาศร้อน", "วันอาทิตย์ร้อน");
				vocEx="แสงแดดร้อน";
				break;
			case "d_B_1_1_3":
				vocArray = new Array ("กระท่อมร้อน", "อากาศร้อน", "Dot  และ  Ben  ร้อนมาก", "พระอาทิตย์ร้อน");
				vocEx="กระท่อมร้อน";
				break;
			case "d_B_1_1_4":
				vocArray = new Array ("Dot  มี  สัตว์เลี้ยง", "Dot  มี  สุนัข", "Dot  มี  รถบัส", "Dot  ชอบอาหารรสเผ็ด");
				vocEx="Dot  มี  สัตว์เลี้ยง";
				break;
			case "d_B_1_1_5":
				vocArray = new Array ("Ben  มี  รถบัส", "Ben  มี  สัตว์เลี้ยง", "Ben  มี  สุนัข", "Ben   ชอบรถบัส");
				vocEx="Ben  มี  รถบัส";
				break;
			case "d_B_1_3_1":
				vocArray = new Array ("Dot  และ  Ben  กระโดดขาเดียวที่กลางแจ้ง", "Dot  และ  Ben  กระโดดขาเดียวที่พระอาทิตย์", "Dot  และ  Ben  เล่นที่กลางแจ้ง", "Dot  และ  Ben  เล่นตอนวันอาทิตย์");
				vocEx="Dot  และ  Ben  กระโดดขาเดียวที่กลางแจ้ง";
				break;
			case "d_B_1_3_2":
				vocArray = new Array ("สนุกสนุกสนุก", "กระโดดกระโดดกระโดด", "ร้อนร้อนร้อน", "ดีมากมาก");
				vocEx="สนุกสนุกสนุก";
				break;
			case "d_B_1_3_3":
				vocArray = new Array ("Ben  อยู่บนรถเมล์", "Ben  วิ่งบนรถบัส", "Ben  ยืนบนรถเมล์", "Ben  เล่นบนรถบัส");
				vocEx="Ben  อยู่บนรถเมล์";
				break;
			case "d_B_1_3_4":
				vocArray = new Array ("Ben  ซน", "Ben  ไม่ดี", "Ben  เลว", "Ben  อยู่บนเตียง");
				vocEx="Ben  ซน";
				break;
			case "d_B_1_5_1":
				vocArray = new Array ("Ben  อยู่บนเตียง", "Ben  ซน", "Ben  ไม่สบาย", "Ben  เสียใจ");
				vocEx="Ben  อยู่บนเตียง";
				break;
			case "d_B_1_5_2":
				vocArray = new Array ("Ben  เศร้า", "Ben  ไม่สบาย", "Ben  อยู่บนเตียง", "Ben  ปวดมาก");
				vocEx="Ben  เศร้า";
				break;
			case "d_B_1_7_1":
				vocArray = new Array ("Ben  เศร้าหายแล้ว", "Ben  ชอบสุนัข", "Ben  ไม่สบาย", "Ben  จะไม่ซนต่อไปนี้");
				vocEx="Ben  เศร้าหายแล้ว";
				break;
			//Book 2
			case "d_B_2_1_1":
				vocArray = new Array ("Dot  ป่วย", "Dot  อยู่บนเตียง", "Dot มีถุงผ้า", "Dot  อายุ 6 ขวบ");
				vocEx="Dot  ป่วย";
				break;
			case "d_B_2_1_2":
				vocArray = new Array ("Dot  อยู่บนเตียง", "Dot  ป่วย", "Dot  นอนหลับ", "Dot  เศร้าใจ");
				vocEx="Dot  อยู่บนเตียง";
				break;
			case "d_B_2_3_1":
				vocArray = new Array ("Ben มีถุงผ้า", "Ben  ป่วย", "Ben  อายุ 6 ขวบ", "Ben  ซน");
				vocEx="Ben มีถุงผ้า";
				break;
			case "d_B_2_3_2":
				vocArray = new Array ("มีอะไรอยู่ในถุงผ้า", "Ben  มีอะไร", "มีถุงผ้าสวยงาม", "สุนัขมองดูอะไร");
				vocEx="มีอะไรอยู่ในถุงผ้า";
				break;
			case "d_B_2_3_3":
				vocArray = new Array ("มันคือเป็ด", "มันคือสุนัข", "เป็ดนั่งบนขา  Dot", "สุนัขปวดหัว");
				vocEx="มันคือเป็ด";
				break;
			case "d_B_2_3_4":
				vocArray = new Array ("แต่ว่า  Dot  มีแมว", "รถบัสมี6ล้อ", "แต่ว่าแมวของ  Dot หิว", "แมวของ  Dot  อยากกินเป็ด");
				vocEx="แต่ว่า  Dot  มีแมว";
				break;
			case "d_B_2_5_1":
				vocArray = new Array ("เป็ดกลับขึ้นในถุงผ้า", "เป็ดอยู่หลังถุงผ้า", "เป็ดกลัวแมว", "Dot  ไม่พอใจ");
				vocEx="เป็ดกลับขึ้นในถุงผ้า";
				break;
			case "d_B_2_5_2":
				vocArray = new Array ("Ben  เศร้า  แมวเศร้า", "Ben  เศร้า  เป็ดเศร้า", "Ben  เสียใจ  แมวเอดกินเป็ด", "Ben  ซน  แมวซน");
				vocEx="Ben  เศร้า  แมวเศร้า";
				break;
			case "d_B_2_5_3":
				vocArray = new Array ("เป็ดสามารถนั่งบนแมว", "เป็ดสามารถนั่งบนหลังของแมว", "เป็ดจะนั่งในกระป๋อง", "เป็ดสามารถเล่นกับแมว");
				vocEx="เป็ดสามารถนั่งบนแมว";
				break;
			case "d_B_2_5_4":
				vocArray = new Array ("เป็ดสามารถนั่งบนหลังของแมว", "เป็ดสามารถนั่งบนแมว", "เป็ดกลับขึ้นนั่งบนแมว", "เป็ดจะนั่งในกระป๋อง");
				vocEx="เป็ดสามารถนั่งบนหลังของแมว";
				break;
			case "d_B_2_7_1":
				vocArray = new Array ("Ben  ไม่เศร้า", "Ben  เศร้า", "ฺBen  ร้อนและเศร้า", "Ben  ไม่ซน");
				vocEx="Ben  ไม่เศร้า";
				break;
			case "d_B_2_7_2":
				vocArray = new Array ("แมวไม่เศร้า", "แมวไม่หิว", "แมวเศร้า", "แมวและเป็ดเป็นเพื่อนกัน");
				vocEx="แมวไม่เศร้า";
				break;
			case "d_B_2_7_3":
				vocArray = new Array ("เป็ดไม่เศร้า", "แมวไม่เศร้า", "สุนัขไม่เศร้า", "สุนัขเวียนหัว");
				vocEx="เป็ดไม่เศร้า";
				break;
			case "d_B_2_7_4":
				vocArray = new Array ("Dot  ไม่เศร้า  และ  Dot  ป่วยหาย", "Dot  ไม่เศร้าเพราะเล่นกับเพื่อน", "Dot  ตื่นแล้วเพราะ  Dot  ป่วยหาย", "Dot  ไม่โกรธ  และ  Dot  ป่วยหาย");
				vocEx="Dot  ไม่เศร้า  และ  Dot  ป่วยหาย";
				break;
			//Book 3
			case "d_B_3_1_1":
				vocArray = new Array ("Dot  และ  Ben  นั่งอยู่ในหมอก", "Dot  และ  Ben  นั่งอยู่บนโต๊ะ", "Dot  และ  Ben  นั่งอยู่หน้ากระท่อม", "Dot  และ  Ben  นั่งอยู่ในกบ");
				vocEx="Dot  และ  Ben  นั่งอยู่ในหมอก";
				break;
			case "d_B_3_1_2":
				vocArray = new Array ("Dot  และ  Ben  ไม่ร้อน", "Dot  และ  Ben  ร้อนมาก", "Dot  และ  Ben  ไม่อยู่ในกระท่อม", "Dot  และ  Ben  ไม่ชอบหมอก");
				vocEx="Dot  และ  Ben  ไม่ร้อน";
				break;
			case "d_B_3_1_3":
				vocArray = new Array ("แมวและเป็ดอยู่ในกระท่อม", "แมวและเป็ดไม่ร้อน", "แมวและเป็ดร้อนมาก", "แมวและเป็ดเป็นเพื่อนกัน");
				vocEx="แมวและเป็ดอยู่ในกระท่อม";
				break;
			case "d_B_3_1_4":
				vocArray = new Array ("แมวชื่อ  Jack  และเป็ดชื่อ  Gus", "Jack  เป็นแมวและ  Gus  เป็นเป็ด", "Jack  และ  Gus  เป็นเพื่อนกัน", "แมวชื่อ  Gus  และเป็ดชื่อ  Jack");
				vocEx="แมวชื่อ  Jack  และเป็ดชื่อ  Gus";
				break;
			case "d_B_3_1_5":
				vocArray = new Array ("Jack  และ  Gus  วิ่งเหยาะ  ๆ  ในหมอก", "Jack  และ  Gus  วิ่งเร็ว  ๆ  ในหมอก", "Jack  และ  Gus  ชอบวิ่งในหมอก", "Jack  และ  Gus  วิ่ง  ใกล้  Dot  และ  Ben");
				vocEx="Jack  และ  Gus  วิ่งเหยาะ  ๆ  ในหมอก";
				break;
			case "d_B_3_1_6":
				vocArray = new Array ("Dot  และ  Ben  นั่งบนรถเมล์", "Dot  และ  Ben  นั่งอยู่ในหมอก", "Dot  และ  Ben  ต้องการวิ่งด้วย", "Dot  และ  Ben  ดู  Jack  และ  Gus");
				vocEx="Dot  และ  Ben  นั่งบนรถเมล์";
				break;
			case "d_B_3_1_7":
				vocArray = new Array ("Ben  ไม่สามารถวิ่งเหยาะ  ๆ  ในหมอก", "Ben  ไม่ชอบวิ่งเหยาะ  ๆ  ในหมอก", "Ben  กลัวอุบัติเหตุ", "แม่ห้าม  Ben  วิ่งเหยาะ  ๆ  ในหมอก");
				vocEx="Ben  ไม่สามารถวิ่งเหยาะ  ๆ  ในหมอก";
				break;
			case "d_B_3_3_1":
				vocArray = new Array ("Bud  เป็นหมา", "หมาชื่อ  Bud", "Bud  เป็นม้า", "Bud  มีหมา");
				vocEx="Bud  เป็นหมา";
				break;
			case "d_B_3_3_2":
				vocArray = new Array ("Bud  มีกระเป๋า", "Bud  เจอกระเป๋าแล้ว", "Bud  มีถุงผ้า", "Bud  ถือกระเป๋า");
				vocEx="Bud  มีกระเป๋า";
				break;
			case "d_B_3_3_3":
				vocArray = new Array ("อะไรอยู่ในกระเป๋า  Ben", "Ben  ดูในกระเป๋า", "สุนัขเอาอะไรมา  Ben", "มีหมวกในกระเป๋า  Ben");
				vocEx="อะไรอยู่ในกระเป๋า  Ben";
				break;
			case "d_B_3_5_1":
				vocArray = new Array ("เดา", "เปิด", "ชื่อกัส", "ห่าน");
				vocEx="เดา";
				break;
			case "d_B_3_5_2":
				vocArray = new Array ("มันคือแยมใช่ไหม  Ben  มันคือแยมใช่ไหม", "มันคือแยม  Ben  มันคือแยม", "มันคือขนมปังใช่ไหม  Ben  มันคือขนมปังใช่ไหม", "มันคือขนมปัง  Ben  มันคือขนมปัง");
				vocEx="มันคือแยมใช่ไหม  Ben  มันคือแยมใช่ไหม";
				break;
			case "d_B_3_5_3":
				vocArray = new Array ("มันไม่ใช่แยม  Dot", "Dot  ไม่ชอบ แยม", "มันเป็นแยม  Dot", "มันร้อน  Dot");
				vocEx="มันไม่ใช่แยม  Dot";
				break;
			case "d_B_3_5_4":
				vocArray = new Array ("มันไม่เป็นแยมในกระเป๋า", "มันเป็นแยมในกระเป๋า", "มันเป็นแยมร้อนในกระเป๋า", "มันเป็นแยมในกระเป๋าใช่ไหม");
				vocEx="มันไม่เป็นแยมในกระเป๋า";
				break;
			case "d_B_3_5_5":
				vocArray = new Array ("มันเป็นถุงผ้า", "มันป่วย", "มันเป็นถุงผ้าใช่ไหม", "มันป่วยใช่ไหม");
				vocEx="มันเป็นถุงผ้า";
				break;
			case "d_B_3_5_6":
				vocArray = new Array ("อะไรอยู่ในถุงในกระเป๋า  Dot", "อะไรอยู่ในกระเป๋า  Dot", "มีหมวกในกระเป๋า  Dot", "อะไรอยู่ในถุงผ้า  Dot");
				vocEx="อะไรอยู่ในถุงในกระเป๋า  Dot";
				break;
			case "d_B_3_7_1":
				vocArray = new Array ("เดา", "เปิด", "ชื่อกัส", "ห่านเปิด");
				vocEx="เดา";
				break;
			case "d_B_3_7_2":
				vocArray = new Array ("มันคือแก๊สหรือไม่  Dot", "มันคือแก๊ส  Dot", "มันคือแยมใช่ไหม Dot", "มันคือแยม  Dot");
				vocEx="มันคือแก๊สหรือไม่  Dot";
				break;
			case "d_B_3_7_3":
				vocArray = new Array ("มันคือแก๊สไม่ดีใช่ไหม", "มันคือแก๊สไม่ดี", "มันคือแก๊สสีเขียวใช่ไหม", "มันคือแก๊สสีเขียว");
				vocEx="มันคือแก๊สไม่ดีใช่ไหม";
				break;
			case "d_B_3_7_4":
				vocArray = new Array ("มันไม่ใช่แก๊ส  Ben", "มันเป็นแก๊ส  Ben", "มันคือแก๊สใช่ไหม  Ben", "มันคือแก๊สหรือไม่  Ben");
				vocEx="มันไม่ใช่แก๊ส  Ben";
				break;
			case "d_B_3_7_5":
				vocArray = new Array ("มันไม่ใช่แก๊สไม่ดีในถุงในกระเป๋า", "มันไม่ใช่แก๊สไม่ดีในกระเป๋าในถุง", "มันไม่ใช่แก๊สสีเขียวในถุงในกระเป๋า", "มันคือแก๊สไม่ดีในถุงในกระเป๋าหรือไม่");
				vocEx="มันไม่ใช่แก๊สไม่ดีในถุงในกระเป๋า";
				break;
			case "d_B_3_7_6":
				vocArray = new Array ("มันคืออัญมณี", "มันคือแยม", "มันคืออัญมณีใช่ไหม", "มันไม่ใช่อัญมณี");
				vocEx="มันคืออัญมณี";
				break;
			case "d_B_3_7_7":
				vocArray = new Array ("มันคืออัญมณีเม็ดใหญ่", "มันคืออัญมณีแพงมาก", "มันคืออัญมณีสวยมาก", "มันคืออัญมณีเม็ดใหญ่ใช่ไหม");
				vocEx="มันคืออัญมณีเม็ดใหญ่";
				break;
			//Book 4
			case "d_B_4_1_1":
				vocArray = new Array ("Jack  และ  Gus  วิ่งเหยาะ  ๆ  ในหมอก", "Jack  และ  Gus  วิ่งเร็ว  ๆ  ในหมอก", "Jack  และ  Gus  ชอบวิ่งในหมอก", "Jack  และ  Gus  วิ่งใกล้กระท่อม");
				vocEx="Jack  และ  Gus  วิ่งเหยาะ  ๆ  ในหมอก";
				break;
			case "d_B_4_1_2":
				vocArray = new Array ("Bud  อยู่บนรถเมล์", "Bud  วิ่งบนรถบัส", "Bud  ยืนบนรถเมล์", "Bud  เล่นบนรถบัส");
				vocEx="Bud  อยู่บนรถเมล์";
				break;
			case "d_B_4_1_3":
				vocArray = new Array ("แต่ว่า  Dot  และ  Ben  อยู่ในกระท่อม", "แต่ว่า  Dot  และ  Ben  นั่งบนรถบัส", "แต่  Dot  และ  Ben  ไม่วิ่ง", "แต่  Dot  และ  Ben  ไม่ร้อน");
				vocEx="แต่ว่า  Dot  และ  Ben  อยู่ในกระท่อม";
				break;
			case "d_B_4_1_4":
				vocArray = new Array ("Dot  และ  Ben  ซ่อนเพชรพลอยอยู่ในถุงในกระเป๋า", "Dot  และ  Ben  กลัวขโมย", "Dot  และ  Ben  ซ่อนเพชรพลอยอยู่ในกระเป๋า", "Dot  และ  Ben  ซ่อนในกระท่อม");
				vocEx="Dot  และ  Ben  ซ่อนเพชรพลอยอยู่ในถุงในกระเป๋า"
				break;
			case "d_B_4_1_5":
				vocArray = new Array ("Dot  และ  Ben  นั่งบนกระเป๋า", "Dot  และ  Ben  นั่งในกระท่อม", "Dot  และ  Ben  กลัวขโมย", "Dot  และ  Ben  อยู่บนโต๊ะ");
				vocEx="Dot  และ  Ben  นั่งบนกระเป๋า";
				break;
			case "d_B_4_1_6":
				vocArray = new Array ("มันคืออัญมณีเม็ดใหญ่  Ben", "มันคืออัญมณีแพงมาก  Ben", "มันคืออัญมณีสวยมาก  Ben", "มันคืออัญมณีเม็ดใหญ่ใช่ไหม  Ben");
				vocEx="มันคืออัญมณีเม็ดใหญ่  Ben";
				break;
			case "d_B_4_1_7":
				vocArray = new Array ("ผมสามารถดูมัน  Dot", "ผมดูมันได้ไหม  Dot", "ผมชอบดู  Dot", "ผมมองไม่เห็น  Dot");
				vocEx="ผมสามารถดูมัน  Dot";
				break;
			case "d_B_4_1_8":
				vocArray = new Array ("มันเป็นอัญมณีเม็ดใหญ่ใหญ่ใหญ่", "มันเป็นเพชรพลอยสวยมากมาก  ๆ", "ผมชอบอัญมณีเม็ดใหญ่ใหญ่ใหญ่", "มันคือเพชรพลอยแพงมากมากมาก");
				vocEx="มันเป็นอัญมณีเม็ดใหญ่ใหญ่ใหญ่";
				break;
			case "d_B_4_1_9":
				vocArray = new Array ("พวกเราไม่สามารถรักษาอัญมณี  Ben", "พวกเราสามารถรักษาอัญมณีได้  Ben", "พวกเราต้องการรักษาอัญมณีไหม  Ben", "เราไม่ต้องการรักษาอัญมณี  Ben");
				vocEx="พวกเราไม่สามารถรักษาอัญมณี  Ben";
				break;
			case "d_B_4_1_10":
				vocArray = new Array ("มันสวยแต่เราไม่สามารถรักษามัน", "มันสวยและเราสามารถรักษามัน", "มันสวยมาก  เราสามารถรักษาได้ไหม", "มันสวยแต่ว่าเราไม่ควรจะรักษามัน");
				vocEx="มันสวยแต่เราไม่สามารถรักษามัน";
				break;
			case "d_B_4_3_1":
				vocArray = new Array ("Jack  แมวและ  Gus  เป็ดวิ่งเข้ามากระท่อม", "Jack  เป็นแมวและ  Gus  เป็นเป็ดซึ่งชอบวิ่งกัน", "Jack  แมวและ  Gus  เป็ดชอบวิ่งเล่นในกระท่อม", "Jack  เป็นแมวและ  Gus  เป็นเป็ดซึ่งซนมาก");
				vocEx="Jack  แมวและ  Gus  เป็ดวิ่งเข้ามากระท่อม";
				break;
			case "d_B_4_3_2":
				vocArray = new Array ("Jack  และ  Gus  เตะอัญมณี", "Jack  และ  Gus  สะดุดอัญมณี", "Jack  และ  Gus  สะดุดอัญมณี", "Jack  และ  Gus  ตีอัญมณี");
				vocEx="Jack  และ  Gus  เตะอัญมณี";
				break;
			case "d_B_4_5_1":
				vocArray = new Array ("ผู้ชายอยู่บนอัญมณี", "ผู้ชายนั่งบนอัญมณี", "พ่อเฒ่าประจักษ์บนอัญมณี", "ผู้เฒ่านั่งบนอัญมณี");
				vocEx="ผู้ชายอยู่บนอัญมณี";
				break;
			case "d_B_4_5_2":
				vocArray = new Array ("ผู้ชายมีไม้เท้า  และหนูน่ารัก  2  ตัวอยู่บนเท้า", "ผู้ชายมีน้ำอ้อย  และหนูน่าเกลียด  2  ตัวอยู่บนเท้า", "ผู้ชายมีไม้กายสิทธิ์  และหนูน่ารัก  2  ตัวอยู่บนเท้า", "ผู้ชายมีไม้เท้า  และหนูน่าเกลียด  2  ตัวอยู่บนเท้า");
				vocEx="ผู้ชายมีไม้เท้า  และหนูน่ารัก  2  ตัวอยู่บนเท้า";
				break;
			case "d_B_4_5_3":
				vocArray = new Array ("ชื่อของผม  Doctor Zogue", "ผมเป็นหมอจากประเทศ  Zogue", "ผมเป็นสัตวแพทย์ที่สวนสัตว์", "หนูของฉันชื่อ  Doctor Zogue");
				vocEx="ชื่อของผม  Doctor Zogue";
				break;
			case "d_B_4_5_4":
				vocArray = new Array ("ผมเป็นนักปราชญ์", "ผมปลูกสมุนไพร", "ผมชอบกินสมุนไพร", "ผมมีเวทมนต์");
				vocEx="ผมเป็นนักปราชญ์";
				break;
			case "d_B_4_5_5":
				vocArray = new Array ("หนูน่ารักสัตว์เลี้ยงของผมอยู่บนเท้า", "หนู  2  ตัวของผมอยู่บนเท้า", "หนูสัตว์เลี้ยงของผมอยู่บนนิ้วเท้า", "หนู  2  ตัวของผมอยู่บนนิ้วเท้า");
				vocEx="หนูน่ารักสัตว์เลี้ยงของผมอยู่บนเท้า";
				break;
			case "d_B_4_5_6":
				vocArray = new Array ("ผมชื่อ  Joe", "ฉันชอบ  Joe", "ผมไม่มีชื่อ", "ฉันยินดีที่ได้รู้จักคุณ  Joe");
				vocEx="ผมชื่อ  Joe";
				break;
			case "d_B_4_5_7":
				vocArray = new Array ("ฉันชื่อ  Sue", "ดิฉันชอบ  Sue", "ฉันไม่มีชื่อ", "ดิฉันยินดีที่ได้รู้จักคุณ  Sue");
				vocEx="ฉันชื่อ  Sue";
				break;
			case "d_B_4_5_8":
				vocArray = new Array ("พวกเราเป็นหนูวิเศษ", "พวกเราเป็นหนูซึ่งพูดได้", "เราเป็นหนูน่ารักซึ่งชอบเวทมนต์", "เราเป็นหนูสัตว์เลี้ยงซึ่งมีเวทมนต์");
				vocEx="พวกเราเป็นหนูวิเศษ";
				break;
			case "d_B_4_5_9":
				vocArray = new Array ("เราสามารถอบพายและขนมเค้ก", "เราชอบกินพายและขนมเค้ก", "เราสามารถอบขนมเค้กอร่อยมาก", "เราชอบอบพายและขนมเค้กอร่อย");
				vocEx="เราสามารถอบพายและขนมเค้ก";
				break;
			case "d_B_4_7_1":
				vocArray = new Array ("และผมเป็นนักปราชญ์วิเศษ", "และผมเป็นนักธุรกิจ", "และผมเป็นนักปราชซึ่งชอบกินสมุนไพร", "และผมมีสมุนไพรวิเศษ");
				vocEx="และผมเป็นนักปราชญ์วิเศษ";
				break;
			case "d_B_4_7_2":
				vocArray = new Array ("ยินดีที่ได้รู้จักคุณ  Doctor Zogue  ค่ะ", "Doctor Zogue  ชอบเจอคนสวย  ค่ะ", "Doctor Zogue  ชอบเจอคนอ่อนโยน  ครับ", "เราชอบเจอคนอ่อนโยน  Doctor Zogue  ค่ะ");
				vocEx="ยินดีที่ได้รู้จักคุณ  Doctor Zogue  ค่ะ";
				break;
			case "d_B_4_7_3":
				vocArray = new Array ("ยินดีที่ได้รู้จักคุณ  Sue  และ  Joe", "เราชอบเจอ  Sue  และ  Joe  ซึ่งเป็นตัวอ่อนโยน", "Sue  และ  Joe  ชอบเจอคนสวย", "Sue  และ  Joe  ชอบกินอาหารอร่อย ๆ");
				vocEx="ยินดีที่ได้รู้จักคุณ  Sue  และ  Joe";
				break;
			case "d_B_4_7_4":
				vocArray = new Array ("หนูชื่อ  Dot  ค่ะ", "ดิฉันชื่อ  Ben  ค่ะ", "หนูชื่ออะไรคะ", "น้อง  Dot  ไม่มีเวทมนต์ค่ะ");
				vocEx="หนูชื่อ  Dot  ค่ะ";
				break;
			case "d_B_4_7_5":
				vocArray = new Array ("หนูชื่อ  Ben  ครับ", "ชื่อของผม  Bud  ครับ", "หมาของหนูชื่อ  Ben  ครับ", "หนูของผมชื่อ  Ben  ครับ");
				vocEx="หนูชื่อ  Ben  ครับ";
				break;
			case "d_B_4_7_6":
				vocArray = new Array ("เป็ดชื่อ  Gus  และแมวชื่อ  Jack  ครับ", "Gus  เป็นเป็ดและ  Jack  เป็นแมว  ครับ", "Gus  และ  Jack  เป็ดเป็นเพื่อนกัน  ครับ", "แมวชื่อ  Gus  และเป็ดชื่อ  Jack  ครับ");
				vocEx="เป็ดชื่อ  Gus  และแมวชื่อ  Jack  ครับ";
				break;
			case "d_B_4_7_7":
				vocArray = new Array ("และหมาของหนูชื่อ  Bud  ค่ะ", "และหนูของหมาชื่อ  Bud  ค่ะ", "และหมาของหนูชื่อ  Ben  ค่ะ", "และหนูของหมาชื่อ  Ben  ค่ะ");
				vocEx="และหมาของหนูชื่อ  Bud  ค่ะ";
				break;
			case "d_B_4_7_8":
				vocArray = new Array ("พวกเราไม่มีเวทมนต์ค่ะ", "พวกเรามีเวทมนต์ค่ะ", "พวกเรามีเวทมนต์ใช่ไหมค่ะ", "พวกเราร้อน  ไม่มีเวทมนต์ค่ะ");
				vocEx="พวกเราไม่มีเวทมนต์ค่ะ";
				break;
			case "d_B_4_7_9":
				vocArray = new Array ("ไม้เท้าของผมมีเวทมนต์", "ไม้กายสิทธิ์ของผมมีเวทมนต์", "น้ำอ้อยของผมมีเวทมนต์", "ไม้เท้ามีเวทมนต์");
				vocEx="ไม้เท้าของผมมีเวทมนต์";
				break;
			case "d_B_4_7_10":
				vocArray = new Array ("ผมแตะไม้เท้าของผม  และพวกเราสามารถซ่อนอยู่ในอัญมณี", "ผมแตะไม้เท้าของผม  และคุณสามารถซ่อนอยู่ในกระเป๋า", "ผมเคาะไม้กายสิทธิ์ผม  และคุณซ่อนอยู่ในกระท่อมได้", "ผมแตะไม้เท้าของผม  และมีเสียงระเบิดดัง  ๆ");
				vocEx="ผมแตะไม้เท้าของผม  และพวกเราสามารถซ่อนอยู่ในอัญมณี";
				break;
			case "d_B_4_7_11":
				vocArray = new Array ("หนูเข้าใจค่ะ", "หนูมองไม่เห็นค่ะ", "หนูไม่เข้าใจค่ะ", "ฉันไม่เข้าใจค่ะ");
				vocEx="หนูเข้าใจค่ะ";
				break;
			case "d_B_4_9_1":
				vocArray = new Array ("Sue  และ  Joe  สามารถอบพายและขนมเค้กในกระท่อมได้ไหมครับ", "Sue  และ  Joe  สามารถอบขนมเค้กในกระท่อมได้ไหมครับ", "Sue  และ  Joe  สามารถอบพายในกระท่อมได้ไหมครับ", "Sue  และ  Joe  สามารถอบพายและขนมเค้กเมื่อแสงแดดร้อน");
				vocEx="Sue  และ  Joe  สามารถอบพายและขนมเค้กในกระท่อมได้ไหมครับ";
				break;
			case "d_B_4_9_2":
				vocArray = new Array ("หนูชอบพายและขนมเค้กครับ", "หนูอยากจะกินพายและขนมเค้กครับ", "ผมไม่ชอบพายและขนมเค้กครับ", "ผมไม่อยากจะกินพายและขนมเค้กครับ");
				vocEx="หนูชอบพายและขนมเค้กครับ";
				break;
			case "d_B_4_9_3":
				vocArray = new Array ("พวกเราไม่สามารถอบในกระท่อม", "พวกเราสามารถอบในกระท่อม", "พวกเราสามารถอบในกระท่อมได้ไหม", "พวกเราไม่สามารถกินในกระท่อม");
				vocEx="พวกเราไม่สามารถอบในกระท่อม";
				break;
			case "d_B_4_9_4":
				vocArray = new Array ("แต่ว่าพวกเราสามารถอบที่บ้าน", "แต่ว่าพวกเราชอบอบที่บ้าน", "แต่ว่าพวกเราชอบกินที่บ้าน", "แต่ว่าพวกเราสามารถกินที่บ้าน");
				vocEx="แต่ว่าพวกเราสามารถอบที่บ้าน";
				break;
			case "d_B_4_9_5":
				vocArray = new Array ("บ้านของผมอยู่ที่ทะเลสาบ", "บ้านของผมอยู่ที่เกาะ", "บ้านของผมอยู่ที่แม่น้ำ", "บ้านของพวกเราอยู่ที่ทะเลสาบ");
				vocEx="บ้านของผมอยู่ที่ทะเลสาบ";
				break;
			case "d_B_4_9_6":
				vocArray = new Array ("มันเป็นบ้านสวย", "มันเป็นบ้านแพงมาก", "มันเป็นบ้านที่ทะเลสาบ", "มันเป็นบ้านหลังใหญ่");
				vocEx="มันเป็นบ้านสวย";
				break;
			case "d_B_4_9_7":
				vocArray = new Array ("ผมสามารถส่งคุณไปยังบ้านของผมที่ทะเลสาบ", "ผมสามารถส่งคุณไปยังบ้านของผม", "ผมสามารถส่งคุณไปยังบ้านที่ทะเลสาบ", "ผมอยากจะส่งคุณไปยังบ้านของผมที่ทะเลสาบ");
				vocEx="ผมสามารถส่งคุณไปยังบ้านของผมที่ทะเลสาบ";
				break;
			case "d_B_4_9_8":
				vocArray = new Array ("ผมสามารถนำทางคุณ", "ผมสามารถเป็นมัคคุเทศก์", "ผมสามารถส่งคุณ", "คุณอยากจะไปด้วยไหม");
				vocEx="ผมสามารถนำทางคุณ";
				break;
			//Book 5
			case "d_B_5_1_1":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_1_2":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_1_3":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_1_4":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_1_5":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_1_6":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_1_7":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_1_8":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_1_9":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_1_10":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_3_1":
				vocArray = new Array ("แต่ Sue และ Joe สามารถอบพายและขนมเค้ก", "หรือ Sue และ Joe เอาพายและขนมเค้ก", "และ Sue กับ Joe กินพายและขนมเค้กในกระป๋อง", "แต่ว่า Sue และ Joe ชอบกินพายและขนมเค้ก");
				vocEx="แต่ Sue และ Joe สามารถอบพายและขนมเค้ก";
				break;
			case "d_B_5_3_2":
				vocArray = new Array ("กูชอบพายและขนมเค้ก  Dot", "ฉันสามารถอบพายและขนมเค้ก  Dot", "มีพายและขนมเค้กที่ทะเลสาบ  Dot", "Ben  อยากกินพายและขนมเค้กที่ทะเลสาบ  Dot");
				vocEx="กูชอบพายและขนมเค้ก  Dot";
				break;
			case "d_B_5_3_3":
				vocArray = new Array ("กูสามารถกินพายและขนมเค้กในบ้านที่ทะเลสาบ", "ผมอยากกินพายและขนมเค้กในกกระท่อมที่ทะเลสาบ", "ผมอยากกินพายและขนมเค้กในกกระท่อมที่กลางแจ้ง", "กูสามารถกินข้าวในกกระท่อมที่กลางแจ้ง");
				vocEx="กูสามารถกินพายและขนมเค้กในบ้านที่ทะเลสาบ";
				break;
			case "d_B_5_3_4":
				vocArray = new Array ("Dot โกรธ  ใบหน้าของเขาสีชมพู", "Dot บ้า  ใบหน้าของเขาสีแดง", "Dot อาย  หน้าแตก", "Dot โกรธ  ใบหน้าของเขาดูแย่");
				vocEx="Dot โกรธ  ใบหน้าของเขาสีชมพู";
				break;
			case "d_B_5_3_5":
				vocArray = new Array ("ไม่ Ben  ยินดีที่ได้รู้จักคุณ Doctor Zogue  Sue   และ  Joe", "ไม่ Ben  Sue ดูสวย  และ  Joe ดูหล่อมาก", "ได้ Ben  พบกันใหม่  Doctor Zogue  Sue   และ  Joe", "ไม่ Ben และ Doctor Zogue    Sue และ Joe ทำขนมเค้กอร่อย");
				vocEx="ไม่ Ben  ยินดีที่ได้รู้จักคุณ Doctor Zogue  Sue   และ  Joe";
				break;
			case "d_B_5_3_6":
				vocArray = new Array ("แต่เราไม่มีเวลา  เราไม่สามารถไป", "แต่เราไม่สามารถว่ายน้ำในทะเลสาบ", "แต่ดูนาฬิกา Ben  เราไม่มีเวลา", "แต่เราไม่มีเวลา ต้องอยู่ในกระท่อม");
				vocEx="แต่เราไม่มีเวลา  เราไม่สามารถไป";
				break;
			case "d_B_5_3_7":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_3_8":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_3_9":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_3_10":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_3_11":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_3_12":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_3_13":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_3_14":
				vocArray = new Array ("this one", "not this one", "another one", "filler");
				vocEx="this one";
				break;
			case "d_B_5_5_1":
				vocArray = new Array ("พระอาทิตย์กลับขึ้นใหม่  เป็นเวลาเดิม", "แสงแดดขึ้นสว่าง  นาฬิกาหมุนกลับ", "พระอาทิตขึ้นความร้อน  นาฬิกาหมุนกลับ", "กลางแจ้งขึ้นความร้อน  เป็นเวลาเดิม");
				vocEx="พระอาทิตย์กลับขึ้นใหม่  เป็นเวลาเดิม";
				break;
			case "d_B_5_5_2":
				vocArray = new Array ("ดูซิ Dot", "ผมเห็น  Dot", "เข้าใจหรือยัง  Dot", "กี่โมงแล้ว  Dot");
				vocEx="ดูซิ Dot";
				break;
			case "d_B_5_5_3":
				vocArray = new Array ("คุณสามารถสั่งเวลากลับไปได้  คุณทำได้", "คุณสามารถสั่งเวลากลับไปได้ไหม  คุณทำได้ไหม", "คุณสามารถสั่งเวลากลับไปไม่ได้  คุณทำไม่ได้", "คุณสั่งเวลากลับไปแล้ว  คุณทำแล้ว");
				vocEx="คุณสามารถสั่งเวลากลับไปได้  คุณทำได้";
				break;
			case "d_B_5_7_1":
				vocArray = new Array ("เราสามารถไปได้ไหม  Dot  ไปได้ไหม", "เราสามารถไป  Dot  ไปได้", "เราไม่สามารถไป  Dot  ไปไม่ได้", "ฉันจะไป  Dot  ไปด้วยไหม");
				vocEx="เราสามารถไปได้ไหม  Dot  ไปได้ไหม";
				break;
			case "d_B_5_7_2":
				vocArray = new Array ("Dot  ไม่โกรธ  ใบหน้าของเขาไม่สีชมพู", "Dot  ไม่อาย  ใบหน้าของเขาน่ารัก", "Dot  ยิ้มหน้าน่ารัก  แก้มของเขาสีชมพู", "Dot  โกรธมาก  ใบหน้าของเขาดูแย่");
				vocEx="Dot  ไม่โกรธ  ใบหน้าของเขาไม่สีชมพู";
				break;
			case "d_B_5_7_3":
				vocArray = new Array ("เราสามารถไปได้  Ben", "เราไม่สามารถไป  Ben", "ฉันไปด้วยได้ไหม  Ben", "ฉันสามารถไปด้วย  Ben");
				vocEx="เราสามารถไปได้  Ben";
				break;
			case "d_B_5_7_4":
				vocArray = new Array ("เราสามารถกินพายและขนมเค้กในบ้านที่ทะเลสาบ", "เราชอบกินพายและขนมเค้กในกระท่อมที่อยู่ใกล้ทะเลสาบ", "ฉันสามารถกินพายและขนมเค้กในบ้านที่อยู่ใกล้ทะเลสาบ", "ฉันชอบกินพายและขนมเค้กในพระราชวังที่ทะเลสาบ");
				vocEx="เราสามารถกินพายและขนมเค้กในบ้านที่ทะเลสาบ";
				break;
			case "d_B_5_7_5":
				vocArray = new Array ("เราสามารถไปในรถเมล์ของคุณ  Ben", "เราไปในรถบัสของ  Ben  ได้ไหม", "เราไม่สามารถไปในรถบัสของ  Ben  มันเล็กไป", "รถเมล์ของ  Ben  สวยมาก  ขอดูน้อย");
				vocEx="เราสามารถไปในรถเมล์ของคุณ  Ben";
				break;
			case "d_B_5_7_6":
				vocArray = new Array ("แต่รถบัสของฉันไม่ใหญ่", "รถบัสของฉันเป็นไม่ใหญ่", "รถบัสของฉันเป็นสวยงาม", "แต่ว่ารถเมล์ของคุณไม่ใหญ่");
				vocEx="แต่รถบัสของฉันไม่ใหญ่";
				break;
			case "d_B_5_7_7":
				vocArray = new Array ("ผมเป็นนักปราชญ์วิเศษ", "ผมมีสะระแหน่วิเศษในถุง", "ผมมีปากกาเมจิก", "ผมมีไม้เท้าวิเศษ");
				vocEx="ผมเป็นนักปราชญ์วิเศษ";
				break;
			case "d_B_5_7_8":
				vocArray = new Array ("ผมแตะไม้เท้าและร้องเพลงของผม", "ผมชอบดื่มน้ำอ้อยเมื่อร้องเพลง", "ผมแตะไม้เรียวและเล่นดนตรี", "ผมตีฆ้องและร้องเพลงของผม");
				vocEx="ผมแตะไม้เท้าและร้องเพลงของผม";
				break;
			case "d_B_5_7_9":
				vocArray = new Array ("Sue  และ  Joe  ตีฆ้อง", "Sue  และ  Joe  ออกเสียงระเบิด", "Sue  ตี  Joe  ทำไม", "Sue  และ  Joe  เล่นดนตรี");
				vocEx="Sue  และ  Joe  ตีฆ้อง";
				break;
			case "d_B_5_9_1":
				vocArray = new Array ("Bud  อยู่บนรถเมล์  รถเมล์คันใหญ่", "Bud  ชอบอยู่บนรถบัส  รถบัสคันใหญ่", "Bud  อยู่บนรถเมล์  เขาเป็นตัวเล็ก", "Bud  อยู่บนรถเมล์  ชอบดมอากาศสด");
				vocEx="Bud  อยู่บนรถเมล์  รถเมล์คันใหญ่";
				break;
			case "d_B_5_9_2":
				vocArray = new Array ("Sue  และ  Joe  ใหญ่", "Sue  กับ  Joe  ตัวใหญ่ใช่ไหม", "Sue  และ  Joe  เป็นหมู", "Sue  กับ  Joe  ร้องเพลง");
				vocEx="Sue  และ  Joe  ใหญ่";
				break;
			case "d_B_5_9_3":
				vocArray = new Array ("Gus  Jack  Sue และ  Joe  ร้องเพลงในรถเมล์ที่หลังรถ", "Gus  Jack  Sue และ  Joe  ร้องเพลงในรถบัส", "Gus  Jack  Sue และ  Joe  ร้องเพลงสนุกมากมาก", "Gus  Jack  Sue และ  Joe  ร้องเพลงสนุกในรถบัส");
				vocEx="Gus  Jack  Sue และ  Joe  ร้องเพลงในรถเมล์ที่หลังรถ";
				break;
			case "d_B_5_9_4":
				vocArray = new Array ("Dot  และ  Ben  นั่งในรถบัส", "Dot  และ  Ben  นั่งหลัง  Doctor Zogue", "Dot  และ  Ben  ชอบร้องเพลงในรถบัส", "Dot  และ  Ben  ฟังเพื่อนร้องเพลง");
				vocEx="Dot  และ  Ben  นั่งในรถบัส";
				break;
			case "d_B_5_9_5":
				vocArray = new Array ("แต่ว่า  Dot  และ  Benร้องเพลงไม่เป็น", "ในรถบัส  Dot  และ  Benร้องเพลงด้วย", "แต่ว่า  Dot  และ  Benร้องเพลงไม่เพราะ", "แต่  Dot  และ  Benไม่ชอบร้องเพลง");
				vocEx="แต่ว่า  Dot  และ  Benร้องเพลงไม่เป็น";
				break;
			case "d_B_5_9_6":
				vocArray = new Array ("ดูซิ  บ้านของผมที่ทะเลสาบ", "เห็นบ้านของผมที่ทะเลสาบหรือเปล่า", "บ้านของผมอยู่ที่ทะเลสาบ  สวยไหม", "บ้านของผมอยู่นู่น  อยู่ที่ทะเลสาบ");
				vocEx="ดูซิ  บ้านของผมที่ทะเลสาบ";
				break;
			case "d_B_5_9_7":
				vocArray = new Array ("Bud  อยู่บนรถเมล์แต่รถเมล์ไม่ใหญ่", "Bud  อยู่บนรถเมล์แต่รถเมล์ไม่วิ่ง", "Bud  นอนบนรถบัส  เหนื่อยมาก", "Bud  เศร้าเพราะรถบัสไม่ใหญ่");
				vocEx="Bud  อยู่บนรถเมล์แต่รถเมล์ไม่ใหญ่";
				break;
			case "d_B_5_9_8":
				vocArray = new Array ("Bud  เศร้า", "Bud  เหนื่อย", "Bud  หิวน้ำ", "Bud  ซน");
				vocEx="Bud  เศร้า";
				break;
			case "d_B_5_9_9":
				vocArray = new Array ("Gus  อยู่ในทะเลสาบและ  Jack  อยู่บน  Gus", "Gus  อยู่บน  Jack  ซึ่งว่ายน้ำในทะเลสาบ", "Gus   และ  Jack  ว่ายน้ำในทะเลสาบ", "Gus   และ  Jack  อยู่ในทะเลสาบ");
				vocEx="Gus  อยู่ในทะเลสาบและ  Jack  อยู่บน  Gus";
				break;
			case "d_B_5_9_10":
				vocArray = new Array ("Dot  และ   Ben  นั่งที่ตลิ่ง", "Dot  และ  Ben  นั่งบนธนาคาร", "Dot  และ   Ben  นั่งที่หลัง", "Dot  และ   Ben  ออกเสียงระเบิด");
				vocEx="Dot  และ   Ben  นั่งที่ตลิ่ง";
				break;
			case "d_B_5_9_11":
				vocArray = new Array ("บ้านของผมอยู่ที่ทะเลสาบ", "พระราชวังของผมอยู่ที่ทะเลสาบ", "บ้านอยู่ที่ทะเลสาบ  ชอบไหม", "บ้านของใครอยู่ที่ทะเลสาบ");
				vocEx="บ้านของผมอยู่ที่ทะเลสาบ";
				break;
			case "d_B_5_9_12":
				vocArray = new Array ("เราไม่สามารถไปโดยรถบัส  แต่เราสามารถรำบนทะเลสาป", "รถบัสไม่สามารถลอย  แต่เราสามารถรำบนทะเลสาป", "เราไม่สามารถส่งรถบัส  แต่เราสามารถร้องเพลงบนทะเลสาป", "รถบัสมีเวทมนต์  สามารถรำบนทะเลสาป");
				vocEx="เราไม่สามารถไปโดยรถบัส  แต่เราสามารถรำบนทะเลสาป";
				break;
			case "d_B_5_9_13":
				vocArray = new Array ("ฉันและ  Ben  รำบนทะเลสาปไม่ได้  Doctor Zogue", "ฉันและ  Ben  ไม่อยากรำบนทะเลสาป  Doctor Zogue", "ฉันและ  Ben  ไม่มีเวทมนต์  เราจะจม  Doctor Zogue", "ฉันและ  Ben  ไม่สามารถว่ายน้ำในทะเลสาป  Doctor Zogue");
				vocEx="ฉันและ  Ben  รำบนทะเลสาปไม่ได้  Doctor Zogue";
				break;
			case "d_B_5_9_14":
				vocArray = new Array ("เราไม่ใช่คนวิเศษ", "เรามีเวทมนต์น้อย", "เราไม่กล้าใช้เวทมนต์", "เราไม่มีปากกาเมจิก");
				vocEx="เราไม่ใช่คนวิเศษ";
				break;
			case "d_B_5_11_1":
				vocArray = new Array ("Doctor Zogue  อยู่บนทะเลสาป", "Doctor Zogue  รำบนทะเลสาป", "Doctor Zogue  จะว่ายน้ำในทะเลสาป", "Doctor Zogue  เดินบนทะเลสาป");
				vocEx="Doctor Zogue  อยู่บนทะเลสาป";
				break;
			case "d_B_5_11_2":
				vocArray = new Array ("คุณไม่จำเป็นต้องมีเวทมนตณ์  Dot", "คุณจำเป็นต้องมีเวทมนตณ์  Dot", "คุณไม่จำเป็นต้องมีปากกาเมจิก  Dot", "Dot  ถามว่าฉันจำเป็นต้องมีเวทมนตณ์ไหม");
				vocEx="คุณไม่จำเป็นต้องมีเวทมนตณ์  Dot";
				break;
			case "d_B_5_11_3":
				vocArray = new Array ("คุณร้องเพลงวิเศษและคุณไม่สามารถจม", "คุณร้องเพลง  ผมแตะไม้เท้วิเศษและคุณไม่สามารถจม", "คุณร้องเพลงของผมและคุณไม่สามารถจม", "คุณร้องเพลงวิเศษและคุณสามารถรำบนทะเลสาป");
				vocEx="คุณร้องเพลงวิเศษและคุณไม่สามารถจม";
				break;
			case "d_B_5_11_4":
				vocArray = new Array ("เราร้องเพลงวิเศษหรือ", "เราร้องเพลงวิเศษ", "เราไม่ร้องเพลงวิเศษ", "เราร้องเพลงวิเศษได้ไหม");
				vocEx="เราร้องเพลงวิเศษหรือ";
				break;
			case "d_B_5_11_5":
				vocArray = new Array ("คุณร้องเพลงวิเศษ  Sue  และ  Joe  ตีฆ้องและคุณไม่สามารถจม", "เราร้องเพลงวิเศษ  Sue  และ  Joe  ตีฆ้องและคุณไม่สามารถจม", "คุณร้องเพลงวิเศษ  Sue  และ  Joe  ตีฆ้องและคุณไม่สามารถจม", "ฉันร้องเพลงวิเศษ  Sue  และ  Joe  ตีฆ้องและคุณไม่สามารถจม");
				vocEx="คุณร้องเพลงวิเศษ  Sue  และ  Joe  ตีฆ้องและคุณไม่สามารถจม";
				break;
			case "d_B_5_13_1":
				vocArray = new Array ("แต่ว่าเราไม่สามารถร้องเพลง  Doctor Zogue", "แต่ว่าเราไม่ชอบร้องเพลง  Doctor Zogue", "แต่ว่าเราร้องเพลงไม่เพราะ  Doctor Zogue", "หรือว่าเรารำแทนได้ไหม  Doctor Zogue");
				vocEx="แต่ว่าเราไม่สามารถร้องเพลง  Doctor Zogue";
				break;
			case "d_B_5_13_2":
				vocArray = new Array ("คุณร้องเพลงไม่ได้หรือ", "คุณร้องเพลงไม่ได้", "คุณร้องเพลงได้ไหม", "คุณร้องเพลงได้หรือเปล่า");
				vocEx="คุณร้องเพลงไม่ได้หรือ";
				break;
			case "d_B_5_13_3":
				vocArray = new Array ("ไม่ได้", "ได้ไหม", "ได้", "ได้แต่ไม่เพราะ");
				vocEx="ไม่ได้";
				break;
			case "d_B_5_13_4":
				vocArray = new Array ("คุณร้องเพลงบนทะเลสาปหรือคุณจมใต้ทะเลสาป", "คุณรำบนทะเลสาปหรือคุณจมใต้ทะเลสาป", "คุณว่ายน้ำในทะเลสาปหรือคุณจมใต้ทะเลสาป", "คุณรำบนทะเลสาปหรือคุณล้างจานในอ่าง");
				vocEx="คุณร้องเพลงบนทะเลสาปหรือคุณจมใต้ทะเลสาป";
				break;
			case "d_B_5_13_5":
				vocArray = new Array ("ฅามใจ", "คุณขึ้นไป", "อย่าซน", "ไม่ต้องคิดมาก");
				vocEx="ฅามใจ";
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
				fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","l","nc","nk","ft","ld","lk","lp","lt","mp","nd","nt","sp","st","");
				vSpecArray= new Array ("e","i","ee","");
			break;

			case "phon10":
				iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","l","r","bl","br","cl","cr","dr","fl","fr","gl","gr","pl","pr","sl","sm","sn","tr","");
				vArray= new Array ("a","e","i","o","u","ee","");
				fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","l","nc","nk","ft","ld","lk","lp","lt","mp","nd","nt","sp","st","");
				vSpecArray= new Array ("e","i","ee","");
			break;

			case "phon11":
				iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","l","r","bl","br","cl","cr","dr","fl","fr","gl","gr","pl","pr","sl","sm","sn","tr","");
				vArray= new Array ("a","e","i","o","u","ee","ar","ir","or","ow","oy","oo","");
				fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","l","nc","nk","ft","ld","lk","lp","lt","mp","nd","nt","sp","st","");
				vSpecArray= new Array ("e","i","ee","");
				break;

			case "phon12":
				iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","l","r","bl","br","cl","cr","dr","fl","fr","gl","gr","pl","pr","sl","sm","sn","tr","sc","sch","sk","sp","st","");
				vArray= new Array ("a","e","i","o","u","ee","ar","ir","or","ow","oy","oo","");
				fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","l","nc","nk","ft","ld","lk","lp","lt","mp","nd","nt","sp","st","");
				vSpecArray= new Array ("e","i","ee","");
			break;

			case "phon13":
				iArray= new Array ("m","s","p","t","n","f","h","b","d","z","c","k","g","j","gu","l","r","bl","br","cl","cr","dr","fl","fr","gl","gr","pl","pr","sl","sm","sn","tr","sc","sch","sk","sp","st","w","wh","y","");
				vArray= new Array ("e","i","o","u","ee","ir","ow","oy","oo","a","ar","or","y","");
				fArray= new Array ("m","s","p","t","n","f","b","d","z","ck","g","j","k","c","gu","ng","l","nc","nk","ft","ld","lk","lp","lt","mp","nd","nt","sp","st","");
				vSpecArray= new Array ("e","i","ee","");
			break;
		}
}

function setBingoArrays() {

	var syll = "";
	var syllInd = 0;

	switch (currentPhonUnit) {
		case "phon1":
			bingArray = new Array ("m", "s", "p", "t", "a", "i", "o", "ma", "mi", "mo", "pa", "pi", "po", "ta", "ti", "to", "sa", "si", "so", "mat", "mop", "mis", "sim", "sop", "sat", "pim", "pas", "pot", "tim", "tos", "tap");
			break;
		case "phon2":
			bingArray = new Array ("f", "h", "e", "u", "a", "i", "o", "na", "ni", "fe", "fi", "fo", "ha", "ho", "hu", "mu", "se", "tu", "pe", "nes", "fat", "hef", "map", "sim", "pot", "tuf", "nos", "fun", "hip", "hum", "ten");
			break;
		case "phon3":
			bingArray = new Array ("b", "ba", "bed", "bet", "bo", "bus", "buz", "d", "deb", "di", "du", "f", "h", "hod", "hot", "p", "pa", "pet", "po", "s", "sa", "si", "sip", "t", "tab", "tap", "ti", "tu", "z", "za", "ze", "zip");
			break;
		case "phon4":
			bingArray = new Array ("back", "buck", "ca", "cam", "can", "ce", "ces", "ci", "cis", "co", "cob", "cop", "cu", "cub", "cup", "dock", "duck", "ke", "ken", "kes", "ket", "kez", "ki", "kib", "kid", "kip", "kis", "kit", "pack", "sa", "sack", "zack");
			break;
		case "phon5":
			bingArray = new Array ("cig", "cog", "fog", "fuj", "ga", "ge", "gem", "gi", "gin", "go", "got", "gu", "gues", "guin", "gus", "gut", "hag", "hej", "ja", "jam", "jaz", "jef", "jo", "jock", "jog", "jot", "ju", "jus", "jut", "maj", "pick", "pig");
			break;
		case "phon6":
			bingArray = new Array ("cite", "node", "mace", "keep", "sick", "cede", "sag", "jut", "home", "hid", "back", "toe", "dude", "hide", "fine", "maze", "feed", "cope", "jute", "bike", "ken", "cop", "sue", "feet", "kite", "bake", "pie", "note", "cane", "time", "gape", "sage");
			break;
		case "phon7":
			bingArray = new Array ("ban", "bang", "bank", "con", "don", "dong", "fang", "fun", "funk", "gong", "henge", "honk", "hung", "junk", "mink", "pin", "ping", "pink", "sing", "sink", "song", "sun", "sung", "sunk", "tack", "tan", "tang", "tank", "ting", "tinge", "zinc", "zing");
			break;
		case "phon8":
			bingArray = new Array ("gal", "gel", "lag", "lice", "lid", "lime", "lip", "lob", "lode", "lone", "lope", "luck", "lude", "lung", "lunge", "pal", "pale", "rag", "rage", "reed", "rice", "rid", "rip", "ripe", "rite", "rob", "rode", "rogue", "rope", "rote", "rude", "rung");
			break;
		case "phon9":
			bingArray = new Array ("colt", "cost", "cot", "cusp", "dust", "gent", "guild", "gulp", "had", "hand", "hel", "held", "help", "hulk", "jump", "lamp", "lank", "lift", "lip", "lisp", "list", "lit", "melt", "mil", "milk", "pond", "ramp", "rang", "rank", "soft", "sop", "tent");
			break;
		case "phon10":
			bingArray = new Array ("back", "bank", "black", "blank", "brick", "camp", "cap", "clamp", "clap", "club", "cramp", "crime", "cub", "drag", "flank", "frank", "glaze", "glue", "graze", "log", "pace", "place", "plank", "prank", "rag", "slog", "smack", "smile", "snack", "truck", "trunk", "tuck");
			break;
		case "phon11":
			bingArray = new Array ("bird", "carb", "card", "clown", "cord", "corn", "crowd", "crown", "dirt", "down", "farm", "first", "flint", "flirt", "flit", "floyd", "ford", "fork", "growl", "hood", "hook", "joy", "look", "now", "orb", "ploy", "pork", "rook", "smart", "snarl", "town", "troy");
			break;
		case "phon12":
			bingArray = new Array ("cape", "cold", "cow", "cowl", "coy", "drifting", "park", "plat", "port", "sank", "scale", "scalp", "scape", "scheme", "scold", "scowl", "scrape", "skin", "skirt", "spank", "spilt", "spit", "splat", "sport", "spot", "stank", "stark", "step", "stir", "stood", "tank", "tart");
			break;
		case "phon13":
			bingArray = new Array ("beset", "bisect", "empty", "entry", "first", "lading", "lady", "pi", "pine", "ply", "pry", "slide", "sly", "spite", "sprite", "spry", "spy", "tie", "try", "wad", "want", "ward", "warm", "wart", "wasp", "went", "what", "whirl", "word", "world", "worm", "worst");
			break;			
		default:
			bingArray = new Array ("m", "s", "p", "t", "a", "i", "o", "ma", "mi", "mo", "pa", "pi", "po", "ta", "ti", "to", "sa", "si", "so", "mat", "mop", "mis", "sim", "sop", "sat", "pim", "pas", "pot", "tim", "tos", "tap");
	}

	for (var i = 0; i < 24; i++) {

		syllInd = Math.floor(Math.random() * bingArray.length);

		syll = bingArray[syllInd];
		bingArray.splice(syllInd,1);
		document.getElementById("bing"+i).innerHTML = syll;
		document.getElementById("bing"+i+"Cell").style.backgroundImage = "url('images/formatting/graphemes_back.jpg')";
		document.getElementById("bing"+i+"Cell").style.backgroundSize = "100% 100%";
	}

	switch (currentPhonUnit) {
		case "phon1":
			bingArray = new Array ("m", "s", "p", "t", "a", "i", "o", "ma", "mi", "mo", "pa", "pi", "po", "ta", "ti", "to", "sa", "si", "so", "mat", "mop", "mis", "sim", "sop", "sat", "pim", "pas", "pot", "tim", "tos", "tap");
			break;
		case "phon2":
			bingArray = new Array ("f", "h", "e", "u", "a", "i", "o", "na", "ni", "fe", "fi", "fo", "ha", "ho", "hu", "mu", "se", "tu", "pe", "nes", "fat", "hef", "map", "sim", "pot", "tuf", "nos", "fun", "hip", "hum", "ten");
			break;
		case "phon3":
			bingArray = new Array ("b", "ba", "bed", "bet", "bo", "bus", "buz", "d", "deb", "di", "du", "f", "h", "hod", "hot", "p", "pa", "pet", "po", "s", "sa", "si", "sip", "t", "tab", "tap", "ti", "tu", "z", "za", "ze", "zip");
			break;
		case "phon4":
			bingArray = new Array ("back", "buck", "ca", "cam", "can", "ce", "ces", "ci", "cis", "co", "cob", "cop", "cu", "cub", "cup", "dock", "duck", "ke", "ken", "kes", "ket", "kez", "ki", "kib", "kid", "kip", "kis", "kit", "pack", "sa", "sack", "zack");
			break;
		case "phon5":
			bingArray = new Array ("cig", "cog", "fog", "fuj", "ga", "ge", "gem", "gi", "gin", "go", "got", "gu", "gues", "guin", "gus", "gut", "hag", "hej", "ja", "jam", "jaz", "jef", "jo", "jock", "jog", "jot", "ju", "jus", "jut", "maj", "pick", "pig");
			break;
		case "phon6":
			bingArray = new Array ("cite", "node", "mace", "keep", "sick", "cede", "sag", "jut", "home", "hid", "back", "toe", "dude", "hide", "fine", "maze", "feed", "cope", "jute", "bike", "ken", "cop", "sue", "feet", "kite", "bake", "pie", "note", "cane", "time", "gape", "sage");
			break;
		case "phon7":
			bingArray = new Array ("ban", "bang", "bank", "con", "don", "dong", "fang", "fun", "funk", "gong", "henge", "honk", "hung", "junk", "mink", "pin", "ping", "pink", "sing", "sink", "song", "sun", "sung", "sunk", "tack", "tan", "tang", "tank", "ting", "tinge", "zinc", "zing");
			break;
		case "phon8":
			bingArray = new Array ("gal", "gel", "lag", "lice", "lid", "lime", "lip", "lob", "lode", "lone", "lope", "luck", "lude", "lung", "lunge", "pal", "pale", "rag", "rage", "reed", "rice", "rid", "rip", "ripe", "rite", "rob", "rode", "rogue", "rope", "rote", "rude", "rung");
			break;
		case "phon9":
			bingArray = new Array ("colt", "cost", "cot", "cusp", "dust", "gent", "guild", "gulp", "had", "hand", "hel", "held", "help", "hulk", "jump", "lamp", "lank", "lift", "lip", "lisp", "list", "lit", "melt", "mil", "milk", "pond", "ramp", "rang", "rank", "soft", "sop", "tent");
			break;
		case "phon10":
			bingArray = new Array ("back", "bank", "black", "blank", "brick", "camp", "cap", "clamp", "clap", "club", "cramp", "crime", "cub", "drag", "flank", "frank", "glaze", "glue", "graze", "log", "pace", "place", "plank", "prank", "rag", "slog", "smack", "smile", "snack", "truck", "trunk", "tuck");
			break;
		case "phon11":
			bingArray = new Array ("bird", "carb", "card", "clown", "cord", "corn", "crowd", "crown", "dirt", "down", "farm", "first", "flint", "flirt", "flit", "floyd", "ford", "fork", "growl", "hood", "hook", "joy", "look", "now", "orb", "ploy", "pork", "rook", "smart", "snarl", "town", "troy");
			break;
		case "phon12":
			bingArray = new Array ("cape", "cold", "cow", "cowl", "coy", "drifting", "park", "plat", "port", "sank", "scale", "scalp", "scape", "scheme", "scold", "scowl", "scrape", "skin", "skirt", "spank", "spilt", "spit", "splat", "sport", "spot", "stank", "stark", "step", "stir", "stood", "tank", "tart");
			break;
		case "phon13":
			bingArray = new Array ("beset", "bisect", "empty", "entry", "first", "lading", "lady", "pi", "pine", "ply", "pry", "slide", "sly", "spite", "sprite", "spry", "spy", "tie", "try", "wad", "want", "ward", "warm", "wart", "wasp", "went", "what", "whirl", "word", "world", "worm", "worst");
			break;			
		default:
			bingArray = new Array ("m", "s", "p", "t", "a", "i", "o", "ma", "mi", "mo", "pa", "pi", "po", "ta", "ti", "to", "sa", "si", "so", "mat", "mop", "mis", "sim", "sop", "sat", "pim", "pas", "pot", "tim", "tos", "tap");
	}

	resetBingTestArray();

}


function setNumBingoSheet () {


	switch (currentNumUnit) {

		case "num1":
			if (numOpZero ==true && numOp12==false) {
				bingArray=new Array (0,1,2,3,4,5,6,7,8,9);
			}
			else if (numOpZero ==false && numOp12==false) {
				bingArray=new Array (1,2,3,4,5,6,7,8,9);
			}
			else if (numOpZero ==true && numOp12==true) {
				bingArray=new Array (0,1,2,3,4,5,6,7,8,9,10,11,12);
			}
			else if (numOpZero ==false && numOp12==true) {
				bingArray=new Array (1,2,3,4,5,6,7,8,9,10,11,12);
			}
		break;

		case "num2":
			if (numOpReg==true) {
				bingArray=new Array (40,60,70,80,90);
			}
			else if (numOpIrreg==true) {
				bingArray=new Array (10,20,30,50);
			}
			else {
				bingArray=new Array (10,20,30,40,50,60,70,80,90);
			}
		break;

		case "num3":
			bingArray=new Array ();

			while(bingArray.length<32){
				nIndex=(Math.floor(Math.random()*80))+20;
				if (bingArray.indexOf(nIndex)==-1) {
					bingArray.push(nIndex);
				}
			}
		break;

		case "num4":
			nIndex=(Math.floor(Math.random()*10)+10);
			if (numOpReg2==true) {
				bingArray=new Array (14,16,17,18,19);
			}
			else if (numOpIrreg2==true) {
				bingArray=new Array (10,11,12,13,15);
			}
			else{
				bingArray=new Array (10,11,12,13,14,15,16,17,18,19);
			}
		break;

		case "num5":
			bingArray=new Array (10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90);
		break;

		case "num6":
			bingArray=new Array ();

			while(bingArray.length<32){
				if (numOp0_9==false){
					nIndex=(Math.floor(Math.random()*90)+10);
				}
				else {
					nIndex=Math.floor(Math.random()*100);
				}

				if (bingArray.indexOf(nIndex)==-1) {
					bingArray.push(nIndex);
				}
			}
		break;

		case "num7":
			bingArray=new Array();

			while(bingArray.length<32){
				if (numOp0_99==false){
					nIndex=(Math.floor(Math.random()*900))+100;
				}
				else {
					nIndex=Math.floor(Math.random()*1000);
				}

				if (bingArray.indexOf(nIndex)==-1) {
					bingArray.push(nIndex);
				}
			}
		break;
	}


	while (bingArray.length<24){
		var tempArray = new Array();
		for (var i = 0; i < bingArray.length; i++) {
			tempArray[i]=bingArray[i];
		}

		while (bingArray.length <24 && tempArray.length>1) {
			nIndex = Math.floor(Math.random() * tempArray.length);
			bingArray.push(tempArray[nIndex]);
			tempArray.splice(nIndex,1);
		}
	}

	var tempArray = new Array();
	for (var i = 0; i < bingArray.length; i++) {
		tempArray[i]=bingArray[i];
	}

	for (var j = 0; j < 24; j++) {

		nIndex = Math.floor(Math.random() * tempArray.length);

		var num = tempArray[nIndex];
		tempArray.splice(nIndex,1);
		document.getElementById("bing"+j).innerHTML = num;
		document.getElementById("bing"+j+"Cell").style.backgroundImage = "url('images/formatting/graphemes_back.jpg')";
		document.getElementById("bing"+j+"Cell").style.backgroundSize = "100% 100%";
	}
	resetBingTestArray();
}

function setVocBingSheet () {

	bingArray= new Array();
	for (var k = 0; k < vocArray.length; k++) {
		bingArray[k]=vocArray[k];
	}

	while (bingArray.length >32) {
		imgInd = Math.floor(Math.random() * bingArray.length);
		bingArray.splice(imgInd,1);
	}

	while (bingArray.length<24){
		var tempArray2 = new Array();
		for (var l = 0; l < vocArray.length; l++) {
			tempArray2[l]=vocArray[l];
		}

		while (bingArray.length <24 && tempArray2.length>1) {
			imgInd = Math.floor(Math.random() * tempArray2.length);
			bingArray.push(tempArray2[imgInd]);
			tempArray2.splice(imgInd,1);
		}
	}

	var tempArray = new Array;

	for (var j = 0; j < bingArray.length; j++) {
		tempArray[j]=bingArray[j];
	}

	if (curr_topic_title=="multi") {
		var addr ='images/vocab/';
	}
	else {
		var addr = 'images/vocab/' + curr_topic_title + '/';
	}

	for (var i = 0; i < 24; i++) {
		imgInd = Math.floor(Math.random() * tempArray.length);
		imgEx = tempArray[imgInd];
		tempArray.splice(imgInd,1);
		bingSheetArray[i]=imgEx;
		if (curr_topic_title=="multi") {
			var slPos = imgEx.indexOf("/")+1;
			curr_topic_dir = imgEx.slice(0,slPos);
			imgEx = imgEx.slice(slPos);
			var substInd = substArray.indexOf(imgEx);
			if (substInd !=-1) {
				imgEx = substArray[substInd+1];
			}
			imgEx=curr_topic_dir+imgEx;
		}
		else {
			var substInd = substArray.indexOf(imgEx);
			if (substInd !=-1) {
				imgEx = substArray[substInd+1];
			}
		}
		document.getElementById("bing"+i).innerHTML = "&nbsp;";
		document.getElementById("bing"+i+"Cell").style.backgroundImage = "url('" + addr + imgEx + ".jpg')";
		document.getElementById("bing"+i+"Cell").style.backgroundSize = "85% 100%";
		document.getElementById("bing"+i+"Cell").style.backgroundRepeat = "no-repeat";
		document.getElementById("bing"+i+"Cell").style.backgroundPosition = "center";
	}
	resetBingTestArray();
}

function resetBingTestArray() {
	bingoOut0 = new Array ("bing0", "bing1", "bing2", "bing3", "bing4");
	bingoOut1 = new Array ("bing5", "bing6", "bing7", "bing8", "bing9");
	bingoOut2 = new Array ("bing10", "bing11", "bing12", "bing13");
	bingoOut3 = new Array ("bing14", "bing15", "bing16", "bing17", "bing18");
	bingoOut4 = new Array ("bing19", "bing20", "bing21", "bing22", "bing23");
	bingoOut5 = new Array ("bing0", "bing5", "bing10", "bing14", "bing19");
	bingoOut6 = new Array ("bing1", "bing6", "bing11", "bing15", "bing20");
	bingoOut7 = new Array ("bing2", "bing7", "bing16", "bing21");
	bingoOut8 = new Array ("bing3", "bing8", "bing12", "bing17", "bing22");
	bingoOut9 = new Array ("bing4", "bing9", "bing13", "bing18", "bing23");
	bingoOut10 = new Array ("bing0", "bing6", "bing17", "bing23");
	bingoOut11 = new Array ("bing4", "bing8", "bing15", "bing19");

	bingTestArray = new Array (bingoOut0, bingoOut1, bingoOut2, bingoOut3, bingoOut4, bingoOut5, bingoOut6, bingoOut7, bingoOut8, bingoOut9, bingoOut10, bingoOut11);
}


function processSubst (ex) {
	if (curr_topic_title=="multi") {
		var slPos = ex.indexOf("/")+1;
		var dir = ex.slice(0,slPos);
		ex = ex.slice(slPos);
		var ind = substArray.indexOf(ex);
		if (ind !=-1) {
			ex = substArray[ind+1];
		}
		ex=dir+ex;
	}
	else {
		var ind = substArray.indexOf(ex);
		if (ind !=-1) {
			ex = substArray[ind+1];
		}
	}
	return ex;
}



function preloadAudio() {
	if (curr_topic_dir == "occupations" || curr_topic_dir == "animals") {
		audDLRemaining = vocArray.length;
		var audFile;

		for (var i = 0; i < vocArray.length; i++) {
			audFile = "audio/vocab/" + curr_topic_dir + "/" + vocArray[i] + ".mp3";
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
		imgArray[i].src = "images/vocab/" + curr_topic_dir + "/" + vocArray[i] + ".jpg";
	}
}


function choices(imgInd) {
	var i2;
	var i3;
	var i4;
	var ch2;
	var ch3;
	var ch4;


	if (uMode =="book_trans"){
		imgInd=3;
	}

	if (curr_topic_dir == "onet_gq" ||curr_topic_title=="onet_cloze"){
		var choice1 = "1";
		var choice2 = "2";
		var choice3 = "3";
		var choice4 = "4";

	}
	else {

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

		if (curr_topic_title=="onet_q_a") {

			if (vocEx=="when" || vocEx=="what time"){
				var objNameArray = [];
				for(var i = 0; i < 4;i++){
					objNameArray[i]=(Object.getOwnPropertyNames(vocArray[inds[i]])).toString();
				}
				if (vocEx=="when"&&(objNameArray.indexOf("what time")!= -1)){
					i = objNameArray.indexOf("what time");
					inds[i]=1;
				}
				else if (vocEx=="what time"&&(objNameArray.indexOf("when")!= -1)){
					i = objNameArray.indexOf("when");
					inds[i]=1;
				}

			}


			var objName=Object.getOwnPropertyNames(vocArray[inds[0]]);
			var iTemp = Math.floor(Math.random() * vocArray[inds[0]][objName].length);
			choice1 =vocArray[inds[0]][objName][iTemp];
			objName=Object.getOwnPropertyNames(vocArray[inds[1]]);
			iTemp = Math.floor(Math.random() * vocArray[inds[1]][objName].length);
			choice2 =vocArray[inds[1]][objName][iTemp];
			objName=Object.getOwnPropertyNames(vocArray[inds[2]]);
			iTemp = Math.floor(Math.random() * vocArray[inds[2]][objName].length);
			choice3 =vocArray[inds[2]][objName][iTemp];
			objName=Object.getOwnPropertyNames(vocArray[inds[3]]);
			iTemp = Math.floor(Math.random() * vocArray[inds[3]][objName].length);
			choice4 =vocArray[inds[3]][objName][iTemp];
		}
		else {
			var choice1 = vocArray[inds[0]];
			var choice2 = vocArray[inds[1]];
			var choice3 = vocArray[inds[2]];
			var choice4 = vocArray[inds[3]];
		}

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
		//This section calculates "choice"s and "choiceIm"s if the "multi" topic is selected
		if (curr_topic_title=="multi"){
			var tempVoc;
			var tempDir;
			var slPos = choice1.indexOf("/")+1;
			tempVoc = choice1.slice(slPos);
			tempDir = choice1.slice(0,slPos);
			choice1 = tempVoc;
			substInd = substArray.indexOf(tempVoc);
			if (substInd !=-1) {
				tempVoc = substArray[substInd+1];
				choice1Im = tempDir + tempVoc;
			}

			slPos = choice2.indexOf("/")+1;
			tempVoc = choice2.slice(slPos);
			tempDir = choice2.slice(0,slPos);
			choice2 = tempVoc;
			substInd = substArray.indexOf(tempVoc);
			if (substInd !=-1) {
				tempVoc = substArray[substInd+1];
				choice2Im = tempDir + tempVoc;
			}

			slPos = choice3.indexOf("/")+1;
			tempVoc = choice3.slice(slPos);
			tempDir = choice3.slice(0,slPos);
			choice3 = tempVoc;
			substInd = substArray.indexOf(tempVoc);
			if (substInd !=-1) {
				tempVoc = substArray[substInd+1];
				choice3Im = tempDir + tempVoc;
			}

			slPos = choice4.indexOf("/")+1;
			tempVoc = choice4.slice(slPos);
			tempDir = choice4.slice(0,slPos);
			choice4 = tempVoc;
			substInd = substArray.indexOf(tempVoc);
			if (substInd !=-1) {
				tempVoc = substArray[substInd+1];
				choice4Im = tempDir + tempVoc;
			}
		}
	}

	if (uMode == "look_choose" || uMode == "book_trans") {
		if (uMode=="look_choose"){
			choice1 = splitSubst(choice1);
			choice2 = splitSubst(choice2);
			choice3 = splitSubst(choice3);
			choice4 = splitSubst(choice4);
		}
		document.getElementById("ch1").innerHTML = "<div>"+choice1+"</div>";
		document.getElementById("ch2").innerHTML = "<div>"+choice2+"</div>";
		document.getElementById("ch3").innerHTML = "<div>"+choice3+"</div>";
		document.getElementById("ch4").innerHTML = "<div>"+choice4+"</div>";

		document.getElementById("ch1").className = "choiceCell";
		document.getElementById("ch2").className = "choiceCell";
		document.getElementById("ch3").className = "choiceCell";
		document.getElementById("ch4").className = "choiceCell";

		document.getElementById("ch1").onclick = function () { chAnswer(0,imgInd); };
		document.getElementById("ch1").oncontextmenu = function () { chAnswer(0,imgInd); };
		document.getElementById("ch1").ontouchstart = function () { chAnswer(0,imgInd); document.getElementById("ch1").onclick = "";};
		document.getElementById("ch2").onclick = function () { chAnswer(1,imgInd); };
		document.getElementById("ch2").oncontextmenu = function () { chAnswer(1,imgInd); };
		document.getElementById("ch2").ontouchstart = function () { chAnswer(1,imgInd); document.getElementById("ch2").onclick = "";};
		document.getElementById("ch3").onclick = function () { chAnswer(2,imgInd); };
		document.getElementById("ch3").oncontextmenu = function () { chAnswer(2,imgInd); };
		document.getElementById("ch3").ontouchstart = function () { chAnswer(2,imgInd); document.getElementById("ch3").onclick = "";};
		document.getElementById("ch4").onclick = function () { chAnswer(3,imgInd); };
		document.getElementById("ch4").oncontextmenu = function () { chAnswer(3,imgInd); };
		document.getElementById("ch4").ontouchstart = function () { chAnswer(3,imgInd); document.getElementById("ch4").onclick = "";};
	}
	else if (uMode == "read_choose" || uMode == "listen_choose") {
		if (curr_topic_title=="onet_voc") {
			var tempIm1=[];
			var tempIm2=[];
			var tempIm3=[];
			var tempIm4=[];
			if (typeof choice1Im.src == "object") {
				tempIm1=choice1Im.src.toString().split(",");
				shuffle(tempIm1);
				tempIm1=tempIm1[0];
			}
			else {
				tempIm1=choice1Im.src;
			}
			if (typeof choice2Im.src == "object") {
				tempIm2=choice2Im.src.toString().split(",");
				shuffle(tempIm2);
				tempIm2=tempIm2[0];
			}
			else {
				tempIm2=choice2Im.src;
			}
			if (typeof choice3Im.src == "object") {
				tempIm3=choice3Im.src.toString().split(",");
				shuffle(tempIm3);
				tempIm3=tempIm3[0];
			}
			else {
				tempIm3=choice3Im.src;
			}
			if (typeof choice4Im.src == "object") {
				tempIm4=choice4Im.src.toString().split(",");
				shuffle(tempIm4);
				tempIm4=tempIm4[0];
			}
			else {
				tempIm4=choice4Im.src;
			}

			document.getElementById("imCh1").src = tempIm1;
			document.getElementById("imCh2").src = tempIm2;
			document.getElementById("imCh3").src = tempIm3;
			document.getElementById("imCh4").src = tempIm4;
		}
		else if (curr_topic_title!="multi"){
			document.getElementById("imCh1").src = "images/vocab/" + curr_topic_dir + "/" + choice1Im + ".jpg";
			document.getElementById("imCh2").src = "images/vocab/" + curr_topic_dir + "/" + choice2Im + ".jpg";
			document.getElementById("imCh3").src = "images/vocab/" + curr_topic_dir + "/" + choice3Im + ".jpg";
			document.getElementById("imCh4").src = "images/vocab/" + curr_topic_dir + "/" + choice4Im + ".jpg";
		}
		else {
			document.getElementById("imCh1").src = "images/vocab/" + choice1Im + ".jpg";
			document.getElementById("imCh2").src = "images/vocab/" + choice2Im + ".jpg";
			document.getElementById("imCh3").src = "images/vocab/" + choice3Im + ".jpg";
			document.getElementById("imCh4").src = "images/vocab/" + choice4Im + ".jpg";
		}

		document.getElementById("fbHi1").style.display = "none";
		document.getElementById("fbHi2").style.display = "none";
		document.getElementById("fbHi3").style.display = "none";
		document.getElementById("fbHi4").style.display = "none";

		document.getElementById("fbTxt1").innerHTML = "";
		document.getElementById("fbTxt2").innerHTML = "";
		document.getElementById("fbTxt3").innerHTML = "";
		document.getElementById("fbTxt4").innerHTML = "";

		if (curr_topic_title=="onet_voc") {
			document.getElementById("cellCh1").onclick = function () { chAnswer(choice1Im.txt,0); };
			document.getElementById("cellCh1").oncontextmenu = function () { chAnswer(choice1Im.txt,0); };
			document.getElementById("cellCh1").ontouchstart = function () { chAnswer(choice1Im.txt,0); document.getElementById("cellCh1").onclick = "";};
			document.getElementById("cellCh2").onclick = function () { chAnswer(choice2Im.txt,1); };
			document.getElementById("cellCh2").oncontextmenu = function () { chAnswer(choice2Im.txt,1); };
			document.getElementById("cellCh2").ontouchstart = function () { chAnswer(choice2Im.txt,1);  document.getElementById("cellCh2").onclick = "";};
			document.getElementById("cellCh3").onclick = function () { chAnswer(choice3Im.txt,2); };
			document.getElementById("cellCh3").oncontextmenu = function () { chAnswer(choice3Im.txt,2); };
			document.getElementById("cellCh3").ontouchstart = function () { chAnswer(choice3Im.txt,2);  document.getElementById("cellCh3").onclick = "";};
			document.getElementById("cellCh4").onclick = function () { chAnswer(choice4Im.txt,3); };
			document.getElementById("cellCh4").oncontextmenu = function () { chAnswer(choice4Im.txt,3); };
			document.getElementById("cellCh4").ontouchstart = function () { chAnswer(choice4Im.txt,3);  document.getElementById("cellCh4").onclick = "";};
		}
		else {
			document.getElementById("cellCh1").onclick = function () { chAnswer(0); };
			document.getElementById("cellCh1").oncontextmenu = function () { chAnswer(0); };
			document.getElementById("cellCh1").ontouchstart = function () { chAnswer(0); document.getElementById("cellCh1").onclick = "";};
			document.getElementById("cellCh2").onclick = function () { chAnswer(1); };
			document.getElementById("cellCh2").oncontextmenu = function () { chAnswer(1); };
			document.getElementById("cellCh2").ontouchstart = function () { chAnswer(1);  document.getElementById("cellCh2").onclick = "";};
			document.getElementById("cellCh3").onclick = function () { chAnswer(2); };
			document.getElementById("cellCh3").oncontextmenu = function () { chAnswer(2); };
			document.getElementById("cellCh3").ontouchstart = function () { chAnswer(2);  document.getElementById("cellCh3").onclick = "";};
			document.getElementById("cellCh4").onclick = function () { chAnswer(3); };
			document.getElementById("cellCh4").oncontextmenu = function () { chAnswer(3); };
			document.getElementById("cellCh4").ontouchstart = function () { chAnswer(3);  document.getElementById("cellCh4").onclick = "";};
		}
	}

	if (uMode == "read_choose") {
		if (curr_topic_title!="multi"){
			document.getElementById("vocdisplay").innerHTML = vocEx;
		}
		else {
			var voc = vocArray[imgInd];
			slPos = voc.indexOf("/")+1;
			voc = voc.slice(slPos);
			document.getElementById("vocdisplay").innerHTML = voc;
		}
	}
	else if (uMode == "listen_choose") {
		audVoc.pause();
		if (curr_topic_title!="multi"){
			substInd = substArray.indexOf(vocEx);
			if (substInd== -1){
				audVoc.src = "audio/vocab/"+curr_topic_dir+"/"+vocEx+".mp3";
			}
		}
		else {
			var voc = vocArray[imgInd];
			slPos = voc.indexOf("/")+1;
			voc = voc.slice(slPos);

			substInd = substArray.indexOf(voc);
			if (substInd== -1){
				audVoc.src = "audio/vocab/"+vocEx+".mp3";
			}
		}
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
			//audVoc.play();
			playVocab();
		}
	}
	else if (uMode == "read_choose") {
	}
}

function splitSubst(subst){
	var dir = "";
	if (curr_topic_title=="multi" && uMode!="look_choose"){
		var slPos = subst.indexOf("/")+1;
		curr_topic_dir = subst.slice(0,slPos);
		subst = subst.slice(slPos);
		dir = curr_topic_dir;
	}
	switch (subst) {
		case "a / the":
			var temp = new Array ("a", "the");
			break;
		case "is / are":
			var temp = new Array ("is", "are");
			break;
		case "is / am / are":
			var temp = new Array ("is", "am", "are");
			break;
		case "be / is / am / are":
			var temp = new Array ("be", "is", "am", "are");
			break;
		case "do / does":
			var temp = new Array ("do", "does");
			break;
		case "go / goes":
			var temp = new Array ("go", "goes");
			break;
		case "have / has":
			var temp = new Array ("have", "has");
			break;
		case "?":
			if (uMode=="listen_choose"){
				audVoc.src = "audio/vocab/" +curr_topic_dir+"/"+"question.mark.mp3";
				//audVoc.play();
				playVocab();
			}
			else if (uMode=="voc_bingo" || uMode=="play_learn") {
				return dir+"question.mark";
			}
			var temp = new Array ("");
			break;
		default:
		var temp = new Array ("");
			break;
	}
	if (temp.length>1){
		var sInd=Math.floor(Math.random()*temp.length);
		var s = temp[sInd];
		if (uMode=="read_choose"){
			document.getElementById("vocdisplay").innerHTML = s;
		}
		else if (uMode=="listen_choose"){
			audVoc.src = "audio/vocab/"+curr_topic_dir+"/"+s+".mp3";
			//audVoc.play();
			playVocab();
		}
		else if (uMode=="look_choose" || uMode=="voc_bingo" || uMode=="play_learn"){
			return dir+s;
		}
	}
	else if (uMode=="look_choose" || uMode=="voc_bingo" || uMode=="phon_bingo" || uMode=="play_learn"){
		return dir+subst;
	}
}

function selectVox(vox,caller){
	if (timbreArray.indexOf(vox)==-1){
		timbreArray.push(vox);
		caller.className="optSelected";
	}
	else {
		if (timbreArray.length>1){
			timbreArray.splice([timbreArray.indexOf(vox)],1);
			caller.className="optSelect";
		}
		else {
			alert("You must choose at least one voice.");
		}
	}
}

function setTimbreSelect(mode,caller){
	timbre_select=mode;
	caller.className="optSelected";
	if (mode=="random"){
		document.getElementById("timbre_cycled").className="optSelect";
	}
	else{
		document.getElementById("timbre_random").className="optSelect";
	}
}


function playRV(vE,timbre){
	var rvStarted=false;
	audVoc.pause();
	responsiveVoice.speak(vE,timbre, {volume: aud_rv_vol, rate:0.7, onstart:function(){rvStarted=true;}});

	setTimeout(function(){
		console.log("RV started: "+rvStarted);
		if (rvStarted==false){
			responsiveVoice.cancel();
			audVoc.play();
		}
	},1000);
}


function playVocab() {

	if (uMode!="phon_bingo" && uMode!="voc_bingo" && uMode!="num_bingo") {
		var timbre=setTimbre();
		audVoc.pause();
		if (audVoc.currentTime != 0) {
			audVoc.currentTime = 0;
		}

		if (timbre=="Ian"){
			audVoc.play();
		}
		else {
			if (curr_topic_title!="multi"){
				playRV(vocEx,timbre);
				
				//utterance.text=vocEx;
			}
			else {
				playRV(vocEx.substr(vocEx.indexOf("/")+1),timbre);
				//responsiveVoice.speak(vocEx.substr(vocEx.indexOf("/")+1),timbre, {volume: aud_rv_vol, rate:0.7, onstart:function(){rvStarted=true;}, onerror: function(){audVoc.play();}});
				//utterance.text=vocEx.substr(vocEx.indexOf("/")+1);
			}

			/*window.speechSynthesis.speak(utterance);
			utterance.onerror = function(event) {
				audVoc.play();
			}*/

		}
	}
	else bingoPlay();
}

function setTimbre(){
	if (timbre_select=="random"){
		var i=Math.floor(Math.random()*timbreArray.length);
		var timbre = timbreArray[i];
	}
	else {
		if (timbreInd<timbreArray.length-1){
		timbreInd++;
		}
		else{
			timbreInd=0;
		}
		var timbre=timbreArray[timbreInd];
	}

	/*if (uMode=="num_bingo"&& timbre=="Ian"){
		timbre="UK English Female";
	}*/
	/*if (timbre!="Ian"){
		utterance.voice=voices.filter(function(voice) { return voice.name ==  'Google '+timbre; })[0];
	}*/
	return(timbre);
}

function humanNumPlay(){
	var remPlayed=false;
	audVoc.pause();
	if (typeof responsiveVoice!="undefined") {
		responsiveVoice.cancel();
	}
	var rem=(bingEx-((Math.floor(bingEx/100))*100));
	if (bingEx <100 || rem==0) {
		audVoc.src = "audio/numbers/"+bingEx.toString()+ ".mp3";
		audVoc.play();
	}
	else {
		audVoc.src = "audio/numbers/"+(Math.floor(bingEx/100)).toString()+ "nn.mp3";
		audVoc.play();
		remPlayed=false;
		audVoc.onended = function() {
			if (remPlayed==false){
				audVoc.src = "audio/numbers/"+rem.toString()+ ".mp3";
				audVoc.play();
				remPlayed=true;
			}
		};
	}
}

function bingoPlay() {
	if (stopCount==true){
		return;
	}
	var timbre=setTimbre();

	if (uMode=="num_bingo"){
		var unit = currentNumUnit;
	}
	else if (uMode=="phon_bingo"){
		var unit = currentPhonUnit;
		var audaddr = "audio/phonics/bingo/";
	}
	else {
		var unit = curr_topic_dir;
		if (curr_topic_title=="multi"){
			var audaddr = "audio/vocab/";
		}
		else {
			var audaddr = "audio/vocab/"+curr_topic_dir+"/";
		}
		var nbit =".mp3";
	}

	if (bingRepeat <2 && bingExAud !="") {
		if (uMode=="num_bingo"){		
			if (timbre=="Ian"){
				humanNumPlay();
			}
			else {
				playRV(bingEx.toString(),timbre);
			}
		}
		else {
			audVoc.pause();
			if (uMode=="phon_bingo"){
				var bingTone = tempArray.pop();
				if (currentPhonUnit.slice(4)>12 && bingExAud.length==2 && ["a","e","i","o","u"].indexOf(bingExAud.slice(-1))!= -1) {
					bingTone=bingTone+3;
				}
				audVoc.src = audaddr+bingExAud+(bingTone)+ ".mp3";
				audVoc.play();
			}
			else {
				var i=Math.floor(Math.random()*timbreArray.length);
				var timbre = timbreArray[i];

				if (timbre=="Ian"){
					audVoc.play();
				}
				else {
					if (curr_topic_title!="multi"){
						playRV(bingExAud,timbre);
						//responsiveVoice.speak(bingExAud,timbre, {volume: aud_rv_vol, rate:0.7, onerror: function(){audVoc.play();}});
						//utterance.text=bingExAud;

					}
					else {
						playRV(bingExAud.substr(bingExAud.indexOf("/")+1),timbre);
						//responsiveVoice.speak(bingExAud.substr(bingExAud.indexOf("/")+1),timbre, {volume: aud_rv_vol, rate:0.7, onerror: function(){audVoc.play();}});
						//utterance.text=bingExAud.substr(bingExAud.indexOf("/")+1);
					}
					//window.speechSynthesis.speak(utterance);
				}
			}
		}
		bingRepeat++;
	}
	else if (bingWords > 1) {
		var syllInd = Math.floor(Math.random() * bingArray.length);
		bingEx = bingArray[syllInd];
		bingCalled.push(bingEx.toString());
		bingArray.splice(syllInd,1);

		if (uMode=="num_bingo"){
			bingExAud=bingEx;
			if (timbre=="Ian"){
				humanNumPlay();
			}
			else {
				playRV((bingEx.toString()),timbre);
				/*utterance.text=(bingEx.toString());
				window.speechSynthesis.speak(utterance);*/
			}
		}
		else {
			bingExAud=splitSubst(bingEx);
			audVoc.pause();
	        audVoc.src = audaddr +bingExAud+ nbit;
	        if (audVoc.currentTime != 0) {
				audVoc.currentTime = 0;
			}
			if (uMode=="phon_bingo"){
				tempArray=[1,2,3];
				shuffle (tempArray);
				var bingTone = tempArray.pop();
				if (currentPhonUnit.slice(4)>12 && bingExAud.length==2 && ["a","e","i","o","u"].indexOf(bingExAud.slice(-1))!= -1) {
					bingTone=bingTone+3;
				}
				audVoc.src = audaddr+bingExAud+(bingTone)+ ".mp3";				
				audVoc.play();
			}
			else {
				var i=Math.floor(Math.random()*timbreArray.length);
				var timbre = timbreArray[i];

				if (timbre=="Ian"){
					audVoc.play();
				}
				else {
					if (curr_topic_title!="multi"){
						playRV(bingExAud,timbre);
						/*utterance.text=(bingExAud);
						window.speechSynthesis.speak(utterance);*/
					}
					else {
						playRV(bingExAud.substr(bingExAud.indexOf("/")+1),timbre);
						/*utterance.text=(bingExAud.substr(bingExAud.indexOf("/")+1));
						window.speechSynthesis.speak(utterance);*/

					}
				}
			}
		}

		bingRepeat=0;
		bingWords--;
		document.getElementById("bingoWords").innerHTML = "Words<p>" + bingWords +"<p>";
	}
	else {
		document.getElementById("bingoWords").innerHTML = "Words<p>0<p>";
		countTime=2;
	}
}


function bingoCheck(ch) {
	if (uMode=="phon_bingo" || uMode=="num_bingo") {
		var syllcheck = document.getElementById(ch).innerHTML;
	}
	else {
		var syllcheck =bingSheetArray[parseInt(ch.slice(4))];
	}
	if (bingCorrect.indexOf(ch)!= -1) {
		return;
	}
    if (syllcheck == bingEx) {
    	bingRepeat=2;
		document.getElementById(ch+"X").src="images/formatting/bingoX.png";
		points++;
		document.getElementById("score").innerHTML = "Score: " + Math.floor(points)+pointsTxt;
		bingCorrect.push(ch);
		//bingoPlay();
     }
     else if (bingCalled.indexOf(syllcheck) != -1) {
     	document.getElementById(ch+"X").src="images/formatting/bingoX.png";
 		points = points + 0.5;
		if (Math.floor(points)<points){
			pointsTxt="&frac12;";
		}
		else {
			pointsTxt="";
		}
		document.getElementById("score").innerHTML = "Score: " + Math.floor(points)+pointsTxt;
		bingCorrect.push(ch);
     }
     else {
     	document.getElementById(ch+"X").src="images/formatting/mistake.png";
		points--;
		document.getElementById("score").innerHTML = "Score: " + Math.floor(points)+pointsTxt;
		feedback();
     }
     if (bingCalled.indexOf(syllcheck) != -1) {
		for (var i=0;i<12;i++) {
     	var outInd = bingTestArray[i].indexOf(ch);
			if (outInd != -1) {
				bingTestArray[i].splice(outInd,1);
				if (bingTestArray[i].length<1){
					stopCount = true;
					document.getElementById("bingo_overlay").src = "images/labels/bingo"+i+"win.png";
					document.getElementById("bingo_overlay").style.display = "block";
					points=points+bingoPoints;
					document.getElementById("score").innerHTML = "Score: " + Math.floor(points)+pointsTxt;
					if (typeof responsiveVoice!="undefined"){
						responsiveVoice.cancel();
					}
					//window.speechSynthesis.cancel();
					audVoc.src = "audio/bingo_cheer.mp3";
					audVoc.play();
					resetBingTestArray();
					var temp = bingTestArray[i];
					for (var j=0; j<temp.length; j++) {
						document.getElementById(temp[j]+"X").src="images/formatting/bingoX_red.png";
					}
				}
			}
		}
		bingCalled.splice(bingCalled.indexOf(syllcheck),1);
	}
	if (stopCount == false){
		bingoPlay();
	}
}

function chAnswer(ch,imgInd,caller) {

	if (curr_topic_title=="onet_cloze"){

		if (finished != true){

        	if (ch==vocEx["a"+multi_part_item]-1){
				points++;
				document.getElementById("score").innerHTML = "Score: " + Math.floor(points);
			}
			else{
				feedback(ch,vocEx["a"+multi_part_item]-1);
			}
			if (multi_part_item<(vocEx.qs)){
				document.getElementById(vocEx.name+"_ans_"+(multi_part_item)).style.backgroundColor="";
				document.getElementById(vocEx.name+"_ans_"+(multi_part_item+1)).style.backgroundColor="#f60";
				//document.getElementById(vocEx.name+"_ans_"+(multi_part_item+1)).scrollIntoView();
				if (vocEx.gaps>0){
					document.getElementById(vocEx.name+"_gap_"+(multi_part_item)).style.backgroundColor="";
					document.getElementById(vocEx.name+"_gap_"+(multi_part_item+1)).style.backgroundColor="#f60";
					// document.getElementById(vocEx.name+"_gap_"+(multi_part_item+1)).scrollIntoView();
				}
			}
			multi_part_item++
			if (multi_part_item>(vocEx.qs)) {
  				multi_part_item=1;
  				newImage();
			}
		}
		return;
	}


	if (ch=="onet"){
		if (finished != true){

			var i = imgInd.slice(0,-2);

			if (i==onet_test_item){
				document.getElementById("onet_ans_"+i+"_1").src="images/labels/onet_1.png";
				document.getElementById("onet_ans_"+i+"_2").src="images/labels/onet_2.png";
				document.getElementById("onet_ans_"+i+"_3").src="images/labels/onet_3.png";
				document.getElementById("onet_ans_"+i+"_4").src="images/labels/onet_4.png";
				caller.src="images/labels/onet_filled.png";
			}
			if (imgInd.slice(-1) == vocEx["a"+multi_part_item]){
				document.getElementById("onet_grade_"+i).src="images/buttons/yes_button.png";
			}
			else {
				document.getElementById("onet_grade_"+i).src="images/buttons/no_button.png";
			}
		}
		return;
	}

	if (finished != true) {
		if (curr_topic_title=="onet_q_a") {
			correct_ans=vocEx;
			var response = document.getElementById("ch"+(ch+1)).innerHTML.substr(5,(document.getElementById("ch"+(ch+1)).innerHTML.length-11));
			if (vocArray[imgInd][vocEx].indexOf(response)!= -1) {
				response=vocEx;
			}
		}
		else if (curr_topic_title=="onet_gq") {
			var correct_ans = vocEx.a1;
			var response=ch+1;
		}
		else if (curr_topic_title=="onet_voc") {
			correct_ans=vocEx;
			var response=ch;
		}
		else if (curr_topic_dir != "onet_gq") {
			correct_ans=vocEx;
			var aIndex = inds[ch];
			var response = vocArray[aIndex];
		}
		else {
			var correct_ans = ((vocArray[imgInd].substr(vocArray[imgInd].indexOf("-")+1))-1);
			var response=ch;
		}

		if (((response == correct_ans) || (typeof response=="object" && response.indexOf(vocEx)!= -1)) && finished == false) {
			if (curr_topic_dir == "onet_gq") {
				if (vocArray.length>2) {
					vocArray.splice(imgInd,1);
				}
				else {
					setVocArrays();
				}
			}
			newImage('yes');
		}
		else if (response != correct_ans && finished == false && (uMode == "book_trans" || strikesAllowed==false)){
			newImage('wrong_trans');
		}
		else if (response != correct_ans && finished == false && curr_topic_title=="onet_voc"){
			strikes++;
			feedback(imgInd, response);
			if (strikes>1){
				newImage('no');
			}
		}
		else if (response != correct_ans && finished == false) {
			strikes++;
			feedback(ch, response);
			if (strikes>1){
				newImage('no');
			}
		}
		else if (finished == "nearly") {
			finished = true;
			document.getElementById("yes_no_div").style.display = "none";
			document.getElementById("finishedButton").style.display = "block";
			document.getElementById("controls_central").style.display = "block";
			document.getElementById("b_replay").style.display = "none";
			if (response == correct_ans) {
				points++;
				document.getElementById("score").innerHTML = "Score: " + Math.floor(points)+pointsTxt;
			}
		}
	}

}

function feedback(ch, answer) {

	if (uMode!="phon_bingo" && uMode!="voc_bingo" && uMode!="num_bingo" && uMode!="read_say" && uMode!="numbers"){

		if (curr_topic_title!="multi"){
		answerTxt=answer;
		}
		else{
			var slPos = answer.indexOf("/")+1;
			var answerTxt=answer.slice(slPos);

			//This section checks for vocabulary items that cannot be filenames and substitutes them
			substInd = substArray.indexOf(answerTxt);
			if (substInd !=-1) {
				var answerDir = answer.slice(0,slPos);
				var answerTmp = substArray[substInd+1];
				answer=answerDir+answerTmp;
			}
		}


		if (uMode == "read_choose" || uMode == "listen_choose") {
			var fBHi = "fbHi" + (ch + 1);
			var fbTxt = "fbTxt" + (ch + 1);
			var fbCell = "cellCh" + (ch + 1);

			document.getElementById(fBHi).style.display = "inline";
			document.getElementById(fbTxt).innerHTML = answerTxt;
			document.getElementById(fbCell).onclick = "";
			document.getElementById(fbCell).oncontextmenu = "";
			document.getElementById(fbCell).ontouchstart = "";

		}

		if (uMode == "look_choose" && curr_topic_title!="onet_cloze") {
			var fBDiv = "ch" + (ch + 1);
			document.getElementById(fBDiv).className = "choiceCellFB";
			document.getElementById(fBDiv).onclick = "";
			document.getElementById(fBDiv).oncontextmenu = "";
			document.getElementById(fBDiv).ontouchstart = "";

		}

		if (uMode!="read_say" && curr_topic_dir!="onet_gq" && curr_topic_title!="onet_q_a" && curr_topic_title!="onet_cloze"){
			recentErrors(answer);
			upcmnErrs(answer);
		}
		else if (curr_topic_title=="onet_q_a"){
			recentErrors(vocEx);
			upcmnErrs(vocEx);
		}
	}

	if (timePenalty==true){
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
}

function upcmnErrs(vocItem) {

	//This section checks for vocab items that cannot be filenames and substitutes them
	substVocItemInd = substArray.indexOf(vocItem);
	if (substVocItemInd !=-1) {
		vocItem = substArray[substVocItemInd+1];
	}

	if (vocItem!="") {
		if (curr_topic_title=="onet_voc"){
			var obj = vocArray.filter(function ( obj ) {
				return obj.txt === vocItem;
			})[0];
			if (typeof obj.src == "object") {
				vocItem=obj.src[0];
			}
			else {
				vocItem=obj.src;
			}
			vocItem=vocItem.slice(13);
			var a = vocItem.indexOf(".jpg")
			vocItem=vocItem.substring(0,a);
		}
		else if (curr_topic_title!="multi"){
			vocItem = curr_topic_dir + "/" + vocItem;
		}
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

		recErrIm[0] = curr_topic_dir + "/" + answerIm;
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
  if (errIm1 != "") {
  	document.getElementById("errCell0").style.display = "table-cell";
	  document.getElementById("errImg0").src = "images/vocab/" + errIm1 + ".jpg";
	  document.getElementById("errTxt0").innerHTML = errTx1;
  }
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
	else if (uMode=="numbers") {
		newNumber(button);
	}
	else if (uMode=="play_learn") {
		setVocTable(button);
	}
  	else if (button=="submit"){
    	submitONET();
  	}
	else if (button=="forward"){
		if (onet_test_item>onet_test.length-2){
        	return;
      	}
    	if (onet_test_item<39){
      		document.getElementById("onet_num_"+onet_test_item).style.backgroundColor="";
      		onet_test_item++ ;
      		document.getElementById("onet_num_"+onet_test_item).style.backgroundColor="yellow";
      		document.getElementById("onet_num_"+onet_test_item).scrollIntoView();
    	}
    	if (vocEx.name!= onet_test[onet_test_item].name){
      		newImage();
      		multi_part_item=1;
      		if (vocEx.qs>1){
      		}
    	}
    	else if (vocEx.qs>1){
      		multi_part_item++;
      		document.getElementById(vocEx.name+"_ans_"+(multi_part_item -1)).style.backgroundColor="";
      		document.getElementById(vocEx.name+"_ans_"+(multi_part_item)).style.backgroundColor="#f60";
      		document.getElementById(vocEx.name+"_ans_"+(multi_part_item)).scrollIntoView();
			if (vocEx.gaps>0){
				document.getElementById(vocEx.name+"_gap_"+(multi_part_item -1)).style.backgroundColor="";
				document.getElementById(vocEx.name+"_gap_"+(multi_part_item)).style.backgroundColor="#f60";
				document.getElementById(vocEx.name+"_gap_"+(multi_part_item)).scrollIntoView();
			}
		}
	}


  else if (button=="back"){
  	if (onet_test_item<1){
  		return;
    }
  	if (onet_test_item>0){
    	document.getElementById("onet_num_"+onet_test_item).style.backgroundColor="";
      	onet_test_item-- ;
      	document.getElementById("onet_num_"+onet_test_item).style.backgroundColor="yellow";
      	document.getElementById("onet_num_"+onet_test_item).scrollIntoView();
    }
    if (vocEx.name!= onet_test[onet_test_item].name){
      newImage();
      multi_part_item=1;
      if (vocEx.qs>1){
        multi_part_item=vocEx.qs;
      }
    }

    else if (vocEx.qs>1){
      document.getElementById(vocEx.name+"_ans_"+(multi_part_item)).style.backgroundColor="";
      document.getElementById(vocEx.name+"_ans_"+(multi_part_item-1)).style.backgroundColor="#f60";
      document.getElementById(vocEx.name+"_ans_"+(multi_part_item-1)).scrollIntoView();
      if (vocEx.gaps>0){
        document.getElementById(vocEx.name+"_gap_"+(multi_part_item)).style.backgroundColor="";
        document.getElementById(vocEx.name+"_gap_"+(multi_part_item-1)).style.backgroundColor="#f60";
        document.getElementById(vocEx.name+"_gap_"+(multi_part_item-1)).scrollIntoView();
      }
      multi_part_item--;
    }
  }

	else if (button=="phon_bingo_class_cont") {
		shuffle(bingArray);
		localStorage.bing_back=bingArray;
		tempArray.length=0;
		tempArray[0]=bingArray[0];
		document.getElementById("bing_items_1").innerHTML="";
		document.getElementById("bing_items_2").innerHTML="";
		document.getElementById("bing_items_3").innerHTML="";
		document.getElementById("bing_items_4").innerHTML="";
		document.getElementById("bing_index").innerHTML= "1. ";
		document.getElementById("bing_current").innerHTML=bingArray[0];
		document.getElementById("bing_items_1").innerHTML="<span style='background:yellow; color:black'>"+bingArray[0]+"</span><br>";
		audArray.length=0;
		localStorage.bing_back_ind=0;
		localStorage.bing_back_unit=currentPhonUnit;
	}

  	else if (uMode=="voc_bingo_class") {
  		document.getElementById("bing_class_controls").style.display = "block";
		document.getElementById("b_start").style.display = "none";
		document.getElementById("b_help").style.display = "none";
		document.getElementById("b_reset").style.display = "block";
		document.getElementById("phonDisplay").style.display="none";
		document.getElementById("imageDiv").style.display="none";
		document.getElementById("welcomeDiv").style.display="none";
		document.getElementById("contentSelect").style.display="none";
		document.getElementById("bing_class_phon").style.display="none";
		document.getElementById("bing_class_display").style.display="block";
		document.getElementById("bing_class_voc").style.display="block";
		document.getElementById("bing_items_1").innerHTML="";
		document.getElementById("bing_items_2").innerHTML="";
		document.getElementById("bing_items_3").innerHTML="";
		document.getElementById("bing_items_4").innerHTML="";
		document.getElementById("voc_bing_list").innerHTML="";
		document.getElementById("bing_index").innerHTML="";
		document.getElementById("bing_current").innerHTML="&nbsp;";
		document.getElementById("bing_game_topics").innerHTML=topicTitle(curr_topic_title);

		if (localStorage.show_vb_games) {
			show_vb_games(localStorage.show_vb_games);
		}
		else {
			show_vb_games("all");
		}
  	}
	else if (uMode=="phon_bingo_class") {
		document.getElementById("bing_class_controls").style.display = "block";
		document.getElementById("b_start").style.display = "none";
		document.getElementById("b_help").style.display = "none";
		document.getElementById("b_reset").style.display = "block";
		document.getElementById("phonDisplay").style.display="none";
		document.getElementById("imageDiv").style.display="none";
		document.getElementById("welcomeDiv").style.display="none";
		document.getElementById("contentSelect").style.display="none";
		document.getElementById("bing_class_voc").style.display="none";
		document.getElementById("bing_class_display").style.display="block";
		document.getElementById("bing_class_phon").style.display="block";
		document.getElementById("bing_items_1").innerHTML="";
		document.getElementById("bing_items_2").innerHTML="";
		document.getElementById("bing_items_3").innerHTML="";
		document.getElementById("bing_items_4").innerHTML="";
		document.getElementById("bing_index").innerHTML="";
		document.getElementById("bing_current").innerHTML="&nbsp;";
		if (localStorage.bing_back) {
			setMsg("bing_back","new_continue");
		}
		else {
			activity("phon_bingo_class_cont");
		}
	}

  	else{
		newImage(button);
	}
}

function procVocBingGame(game_id,action) {

	if (game_id!="") {
		localStorage.curr_vb_game=game_id.innerHTML;
		hiVocBingGame();
	}
	if (action=='open') {
		document.getElementById("vb_game_actions").style.display="block";
		document.getElementById("vb_game_instr").style.display="none";
		var t_string=localStorage[game_id.innerHTML];
		var t_start=t_string.indexOf("bingArray")+12;
		var t_end=t_string.lastIndexOf(")");
		t_string=t_string.slice(t_start,t_end);
		bingArray=t_string.split(",");
	}
	else if (action=='start') {
		activity("phon_bingo_class_cont");
	}
	else if (action=='actions') {
		document.getElementById("show_vb_info").className="optSelect";
		document.getElementById("show_vb_actions").className="optSelected";
		document.getElementById("vb_game_actions").style.display="block";
		document.getElementById("vb_game_instr").style.display="none";
	}
	else if (action=='info') {
		document.getElementById("show_vb_actions").className="optSelect";
		document.getElementById("show_vb_info").className="optSelected";
		document.getElementById("vb_game_actions").style.display="none";
		document.getElementById("vb_game_instr").style.display="block";
	}
}


function hiVocBingGame() {
	for (var i=0; i<document.getElementById('voc_bing_list').childNodes.length;i++) {
		if (document.getElementById('voc_bing_list').childNodes[i].innerHTML == localStorage.curr_vb_game) {
			document.getElementById('voc_bing_list').childNodes[i].style.background="#2f5";
		}
		else {
			document.getElementById('voc_bing_list').childNodes[i].style.background="";
		}
	}
}


function show_vb_games(opt){

	var bing_games=localStorage.voc_bing_games.split(",");

	if (opt=="all") {
		document.getElementById("show_vb_games_topic").className="optSelect";
		document.getElementById("show_vb_games_all").className="optSelected";
	}
	else {
		for (var k=bing_games.length-1; k > -1;k--) {
			if (bing_games[k].indexOf(curr_topic_title)==-1) {
				bing_games.splice(bing_games.indexOf(bing_games[k]),1);
			}
		}
		document.getElementById("show_vb_games_all").className="optSelect";
		document.getElementById("show_vb_games_topic").className="optSelected";
	}
	document.getElementById("voc_bing_list").innerHTML="";
	for (var i=0; i<bing_games.length;i++) {
		document.getElementById("voc_bing_list").innerHTML+='<div class="voc_bing_li" onclick="procVocBingGame(this,\'open\')">'+bing_games[i]+'</div>';
	}
	localStorage.show_vb_games=opt;
	hiVocBingGame()
}


function newNumber(button) {
	if (button == "start") {
		document.getElementById("phonDisplay").style.fontSize = "780%";
		newCount();
		document.getElementById("b_help").style.display = "none";
		document.getElementById("b_reset").style.display = "block";
		document.getElementById("b_start").style.display = "none";
		document.getElementById("contentSelect").style.display = "none";
		document.getElementById("yes_no_div").style.display = "block";
		document.getElementById("controls_central").style.display = "block";
		document.getElementById("welcomeDiv").style.display = "none";
		document.getElementById("attributionDiv").style.display = "none";
		document.getElementById("phonDisplay").style.display = "block";

	}
	else if (button == "yes") {
		points++;
	}
	else if (button == "clear") {
		if (scoreSplit==false){
			points++;
			points++;
		}
		else{
			points++;
			pronPoints++;
		}
	}
	else if (button == "no") {
		feedback();
	}


	var prevNIndex=nIndex;
	switch (currentNumUnit) {
		case "num1":
			if (numOpZero ==true && numOp12==false) {
				nIndex=Math.floor(Math.random()*10);
			}
			else if (numOpZero ==false && numOp12==false) {
				nIndex=Math.floor(Math.random()*9)+1;
			}
			else if (numOpZero ==true && numOp12==true) {
				nIndex=Math.floor(Math.random()*13);
			}
			else if (numOpZero ==false && numOp12==true) {
				nIndex=Math.floor(Math.random()*12)+1;
			}
		break;
		case "num2":
			nIndex=(Math.floor(Math.random()*9)+1)*10;

			if ((nIndex==10 ||nIndex==20 || nIndex==30 || nIndex==50)&& numOpReg==true) {
				newNumber();
			}
			else if ((nIndex==40 ||nIndex==60 || nIndex==70 || nIndex==80 || nIndex==90)&& numOpIrreg==true) {
				newNumber();
			}
		break;
		case "num3":
		nIndex=(Math.floor(Math.random()*80))+20;
		break;
		case "num4":
		nIndex=(Math.floor(Math.random()*10)+10);
		if ((nIndex==10 ||nIndex==11 || nIndex==12 || nIndex==13 || nIndex==15)&& numOpReg2==true) {
				newNumber();
			}
			else if ((nIndex==14 ||nIndex==16 || nIndex==17 || nIndex==18 || nIndex==19)&& numOpIrreg2==true) {
				newNumber();
			}
		break;
		case "num5":
			nIndex=Math.floor(Math.random()*2);
			if (nIndex==0){
				nIndex=(Math.floor(Math.random()*9)+1)*10;
			}
			else {
				nIndex=(Math.floor(Math.random()*10)+10);
			}
		break;
		case "num6":
		if (numOp0_9==false){
			nIndex=(Math.floor(Math.random()*90)+10);
		}
		else {
		nIndex=Math.floor(Math.random()*100);
		}
		break;
		case "num7":
		if (numOp0_99==false){
			nIndex=(Math.floor(Math.random()*900))+100;
		}
		else {
			nIndex=Math.floor(Math.random()*1000);
		}
		break;

	}
	if (nIndex==prevNIndex){
		newNumber();
	}

	if (scoreSplit == false) {
		document.getElementById("score").innerHTML = "Score: " + points;
		document.getElementById("phonDisplay").innerHTML =nIndex;
	}
	else {
		document.getElementById("phonDisplay").innerHTML =nIndex;
		document.getElementById("correct").innerHTML = "Words: " + points;
		document.getElementById("clear").innerHTML = "Clear: " + pronPoints;
		var totPoints=points+pronPoints;
		document.getElementById("total").innerHTML = "Total: " + totPoints;
	}
}

function bingClassProc(caller) {
	
	if (caller=="next") {
		if (tempArray.length==bingArray.length) {
			return;
		}

		var n = tempArray.length;

		tempArray[n]=bingArray[n];
		tempArray.sort();
		document.getElementById("bing_index").innerHTML= (n+1) + ". ";
		document.getElementById("bing_current").innerHTML= bingArray[n];
		localStorage.bing_back_ind=n;
	}
	else if (caller=="back") {
		var n= parseInt(document.getElementById("bing_index").innerHTML)-1;
		if (n>0) {
			document.getElementById("bing_index").innerHTML= (n) + ". ";
			document.getElementById("bing_current").innerHTML=bingArray[n-1];
		}
	}
	else if (caller=="fwd") {
		var n= parseInt(document.getElementById("bing_index").innerHTML)-1;
		if (n<tempArray.length-1) {
			document.getElementById("bing_index").innerHTML= (n+2) + ". ";
			document.getElementById("bing_current").innerHTML=bingArray[n+1];
		}
	}
	else if (caller=="backup") {
		audArray=[];
		tempArray=[];
		bingArray=localStorage.bing_back.split(",");
		for (var i=0;i<localStorage.bing_back_ind;i++) {
			tempArray[i]=bingArray[i];
		}
		tempArray.sort();
		setDisplays({modal_back:'none'});
		document.getElementById("panelCont").src="images/buttons/b_"+localStorage.bing_back_unit+".png";
		document.getElementById("panelCont2").src="images/buttons/b_"+localStorage.bing_back_unit+".png";
		document.getElementById("panelLev").src="images/labels/l_"+localStorage.bing_back_unit+"_p.png";
		document.getElementById("panelLev2").src="images/labels/l_"+localStorage.bing_back_unit+"_p.png";
		bingClassProc("next");
	}
	else if (caller=="font_inc") {
		if (parseInt(document.getElementById('bing_font_size').innerHTML)<100) {
			var fs = parseInt(document.getElementById('bing_font_size').innerHTML)+5;
			document.getElementById('bing_font_size').innerHTML= fs;
			document.getElementById('bing_items_1').style.fontSize=fs+"%";
			document.getElementById('bing_items_2').style.fontSize=fs+"%";
			document.getElementById('bing_items_3').style.fontSize=fs+"%";
			document.getElementById('bing_items_4').style.fontSize=fs+"%";
			document.getElementById('bing_index').style.fontSize=fs*1.5+"%";
			document.getElementById('bing_current').style.fontSize=fs*1.5+"%";
		}
	}
	else if (caller=="font_dec") {
		if (parseInt(document.getElementById('bing_font_size').innerHTML)>40) {
			var fs =parseInt(document.getElementById('bing_font_size').innerHTML)-5;
			document.getElementById('bing_font_size').innerHTML= fs;
			document.getElementById('bing_items_1').style.fontSize=fs+"%";
			document.getElementById('bing_items_2').style.fontSize=fs+"%";
			document.getElementById('bing_items_3').style.fontSize=fs+"%";
			document.getElementById('bing_items_4').style.fontSize=fs+"%";
			document.getElementById('bing_index').style.fontSize=fs*1.5+"%";
			document.getElementById('bing_current').style.fontSize=fs*1.5+"%"
		}
	}
	else if (caller=="display") {
		tempArray=bingArray.toString().split(",");
		tempArray.sort();
	}
			
	document.getElementById("bing_items_1").innerHTML="";
	document.getElementById("bing_items_2").innerHTML="";
	document.getElementById("bing_items_3").innerHTML="";
	document.getElementById("bing_items_4").innerHTML="";

	var fl = false;
	for (var i=0; i<tempArray.length;i++) {
		

		if (i<8) {
			if (tempArray[i]==document.getElementById("bing_current").innerHTML && fl==false) {
				document.getElementById("bing_items_1").innerHTML+= "<span style='background:yellow; color:black'>"+tempArray[i]+"</span><br>";
				fl=true;
			}
			else {
				document.getElementById("bing_items_1").innerHTML+= tempArray[i]+"<br>";
			}
		}
		else if (i<16) {
			if (tempArray[i]==document.getElementById("bing_current").innerHTML && fl==false) {
				document.getElementById("bing_items_2").innerHTML+= "<span style='background:yellow; color:black'>"+tempArray[i]+"</span><br>";
				fl=true;
			}
			else {
				document.getElementById("bing_items_2").innerHTML+= tempArray[i]+"<br>";
			}
		}
		else if (i<24) {
			if (tempArray[i]==document.getElementById("bing_current").innerHTML && fl==false) {
				document.getElementById("bing_items_3").innerHTML+= "<span style='background:yellow; color:black'>"+tempArray[i]+"</span><br>";
				fl=true;
			}
			else {
				document.getElementById("bing_items_3").innerHTML+= tempArray[i]+"<br>";
			}
		}
		else {
			if (tempArray[i]==document.getElementById("bing_current").innerHTML && fl==false) {
				document.getElementById("bing_items_4").innerHTML+= "<span style='background:yellow; color:black'>"+tempArray[i]+"</span><br>";
				fl=true;
			}
			else {
				document.getElementById("bing_items_4").innerHTML+= tempArray[i]+"<br>";
			}
		}
	}
}


function BingClassPlay() {
	if (uMode=="phon_bingo_class") {
		if (audArray.length==0) {
			audArray=new Array (1,2,3);
			shuffle (audArray);
		}
		var bingTone = audArray.pop();
		if (currentPhonUnit.slice(4)>12 && document.getElementById("bing_current").innerHTML.length==2 && ["a","e","i","o","u"].indexOf(document.getElementById("bing_current").innerHTML.slice(-1))!= -1) {
			bingTone=bingTone+3;
		}
		audVoc.pause();
		audVoc.src ="audio/phonics/bingo/" + document.getElementById("bing_current").innerHTML + bingTone +".mp3";
	} 
	else {
		var dir=localStorage.curr_vb_game.slice(6,-10);
		audVoc.src ="audio/vocab/" +dir+"/"+document.getElementById("bing_current").innerHTML +".mp3";
	}
	audVoc.play();
}


function newSyllable(button) {
	if (button == "start") {
		document.getElementById("phonDisplay").style.fontSize = "780%";
		newCount();
		document.getElementById("b_help").style.display = "none";
		document.getElementById("b_reset").style.display = "block";
		document.getElementById("b_start").style.display = "none";
		document.getElementById("contentSelect").style.display = "none";
		document.getElementById("yes_no_div").style.display = "block";
		document.getElementById("controls_central").style.display = "block";
		document.getElementById("welcomeDiv").style.display = "none";
		document.getElementById("attributionDiv").style.display = "none";
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
	case "phon11":
		unit11();
		break;
	case "phon12":
		unit12();
		break;
	case "phon13":
		unit13();
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
	else if (initC=="new" || initC=="cluster") {
		iIndex=Math.floor(Math.random()*iNLen+(iLen-iNLen));
	}
	else if (initC=="single") {
		iIndex=Math.floor(Math.random()*(iLen-iNLen));
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
	else if (finalC=="new" || finalC=="cluster") {
		fIndex=Math.floor(Math.random()*fNLen+(fLen-fNLen));
	}
	else if (finalC=="single") {
		fIndex=Math.floor(Math.random()*(fLen-fNLen));
	}
	else {
		fIndex=fLen;
	}

	// (vSLen);
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

		setIndices (17,6,29,2,6,12,3);

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

		setIndices (32,6,29,15,6,12,3);

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

	function unit11() {

		setIndices (32,12,29,15,6,12,3);

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
		if (vgraph=="ee"||vgraph=="ar"||vgraph=="ir"||vgraph=="or"||vgraph=="ow"||vgraph=="oy"||vgraph=="oo"||fgraph=="ck"||fgraph=="nk"||fgraph=="ft"||fgraph=="ld"||fgraph=="lk"||fgraph=="lp"||fgraph=="lt"||fgraph=="mp"||fgraph=="nd"||fgraph=="nt"||fgraph=="sp"||fgraph=="st") {
			eCompGraph="";
		}
		else if (fgraph=="c"||fgraph=="k"||fgraph=="gu") {
			eCompGraph="e";
		}
		else {}

		syll=igraph.concat (vgraph,fgraph,eCompGraph);
	}


	function unit12() {

		setIndices (37,12,29,5,6,12,3);

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
		if (vgraph=="ee"||vgraph=="ar"||vgraph=="ir"||vgraph=="or"||vgraph=="ow"||vgraph=="oy"||vgraph=="oo"||fgraph=="ck"||fgraph=="nk"||fgraph=="ft"||fgraph=="ld"||fgraph=="lk"||fgraph=="lp"||fgraph=="lt"||fgraph=="mp"||fgraph=="nd"||fgraph=="nt"||fgraph=="sp"||fgraph=="st") {
			eCompGraph="";
		}
		else if (fgraph=="c"||fgraph=="k"||fgraph=="gu") {
			eCompGraph="e";
		}
		else {}

		syll=igraph.concat (vgraph,fgraph,eCompGraph);
	}

	function unit13() {

		setIndices (40,13,29,3,4,12,3);

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
		if (vgraph=="ee"||vgraph=="ar"||vgraph=="ir"||vgraph=="or"||vgraph=="ow"||vgraph=="oy"||vgraph=="oo"||fgraph=="ck"||fgraph=="nk"||fgraph=="ft"||fgraph=="ld"||fgraph=="lk"||fgraph=="lp"||fgraph=="lt"||fgraph=="mp"||fgraph=="nd"||fgraph=="nt"||fgraph=="sp"||fgraph=="st") {
			eCompGraph="";
		}
		else if (fgraph=="c"||fgraph=="k"||fgraph=="gu") {
			eCompGraph="e";
		}
		else {}

		syll=igraph.concat (vgraph,fgraph,eCompGraph);
	}


function setAllVocArray(){
	all_voc_array= [];
	
	for (var i=0; i<comCats.length; i++){
		curr_topic_title=comCats[i];
		setVocArrays();

		for (var j=0; j<vocArray.length; j++) {
			all_voc_array.push (curr_topic_title + "/" + vocArray[j]);
		}
	}

	for (var k=0;k<all_voc_array.length;k++) {
		vocArray[k] = all_voc_array[k];
	}
	curr_topic_title="multi";
}


function newImage(trigger) {
	if (trigger == "start") {
		newCount();
		document.getElementById("b_start").style.display = "none";
		document.getElementById("b_help").style.display = "none";
		document.getElementById("b_reset").style.display = "block";
		document.getElementById("contentSelect").style.display = "none";
		if (uMode!="phon_bingo" && uMode!="voc_bingo" && uMode!="num_bingo" && uMode!="phon_bingo_class"){
				document.getElementById("imageDiv").style.display="block";
		}

		document.getElementById("welcomeDiv").style.display="none";
		document.getElementById("attributionDiv").style.display="none";
		if (uMode == "say_word") {
			document.getElementById("yes_no_div").style.display = "block";
			document.getElementById("controls_central").style.display = "block";
		}
		if (uMode == "read_choose" || uMode == "listen_choose") {
			document.getElementById("imChoiceDiv").style.display = "block";
			document.getElementById("mainImage").src = "images/formatting/1000X597clear_spacer.png";
		}
		if ((uMode == "look_choose" && curr_topic_title!="onet_full") || uMode == "book_trans"){
			document.getElementById("ch1").style.display = "table-cell";
			document.getElementById("ch2").style.display = "table-cell";
			document.getElementById("ch3").style.display = "table-cell";
			document.getElementById("ch4").style.display = "table-cell";
		}
		if (curr_topic_title=="onet_full"){
			onet_test_item=0;
			document.getElementById("back_fwd_div").style.display = "block";
			document.getElementById("b_submit").style.display = "block";
			document.getElementById("b_reset").style.display = "none";
			document.getElementById("controls_central").style.display = "block";
			document.getElementById("onet_num_0").style.backgroundColor="yellow";
			document.getElementById("onet_num_"+onet_test_item).scrollIntoView();
			onet_ready=false;
		}
		if (curr_topic_title=="onet_gq"){
			document.getElementById("mainImage").style.display="none";
		  	document.getElementById("innerDiv").style.display="block";
			var html_display=true;
		}
		if (curr_topic_title=="onet_cloze"){
		  document.getElementById("mainImage").style.display="none";
		  document.getElementById("innerDiv").style.display="block";
		  var html_display=true;
		  onet_test_item=0;
		}
		if (uMode == "listen_choose") {
			document.getElementById("b_replay").style.display = "block";
		}
		if (uMode == "phon_bingo" || uMode == "voc_bingo" || uMode == "num_bingo") {
			document.getElementById("b_replay").style.display = "block";
			document.getElementById("phonDisplay").style.display="none";
			document.getElementById("imageDiv").style.display="none";
			document.getElementById("bingoDisplay").style.display="block";
			bingoPlay();
		}
		if (curr_topic_title=="onet_inst") {
			document.getElementById("vocdisplay").style.fontSize="50%";
			document.getElementById("vocdisplay").style.height="2.6em";
			document.getElementById("errTxt0").style.fontSize="60%";
			document.getElementById("errTxt1").style.fontSize="60%";
			document.getElementById("errTxt2").style.fontSize="60%";
			document.getElementById("fbTxt1").style.fontSize="60%";
			document.getElementById("fbTxt2").style.fontSize="60%";
			document.getElementById("fbTxt3").style.fontSize="60%";
			document.getElementById("fbTxt4").style.fontSize="60%";
		}
		else {
			document.getElementById("vocdisplay").style.fontSize="75%";
			document.getElementById("vocdisplay").style.height="1.5em";
			document.getElementById("errTxt0").style.fontSize="100%";
			document.getElementById("errTxt1").style.fontSize="100%";
			document.getElementById("errTxt2").style.fontSize="100%";
			document.getElementById("fbTxt1").style.fontSize="100%";
			document.getElementById("fbTxt2").style.fontSize="100%";
			document.getElementById("fbTxt3").style.fontSize="100%";
			document.getElementById("fbTxt4").style.fontSize="100%";
		}
	}
	else if (trigger == "yes") {
		if (strikes==0) {
			points++;
		}
		else if (strikes==1){
			points = points + 0.5;
			if (Math.floor(points)<points){
				pointsTxt="&frac12;";
			}
			else {
				pointsTxt="";
			}
		}
		strikes = 0;
		if (uMode=="book_trans") {
			dot_ben_fb.pause;
			dot_ben_fb.src = "audio/correct.mp3";
			dot_ben_fb.play();
			if (document.getElementById("book_trans_fb_img").src.indexOf("ben_incorrect")!= -1 || document.getElementById("book_trans_fb_img").src.indexOf("dot_correct")!= -1) {
				document.getElementById("book_trans_fb_img").src="images/labels/ben_correct.jpg";
			}
			else {
				document.getElementById("book_trans_fb_img").src="images/labels/dot_correct.jpg";
			}
		}
	}
	else if (trigger == "clear") {
		if (scoreSplit==false){
			points++;
			points++;
		}
		else{
			points++;
			pronPoints++;
		}
	}
	else if (trigger == "no") {
		if (lives<2){
			countTime=2;
		}
		if (curr_topic_title!="onet_voc"){
			var answer = vocArray[pImgInd];
			feedback(0, answer);
		}
		if (strikes>1){
			strikes=0;
			document.getElementById("life"+livesPos+lives).src = "images/labels/lives_lost.png";
			lives--;
		}
	}
	else if (trigger == "wrong_trans"){
		dot_ben_fb.pause;
		dot_ben_fb.src = "audio/incorrect.mp3";
		dot_ben_fb.play()
		if (document.getElementById("book_trans_fb_img").src.indexOf("ben_correct")!= -1  || document.getElementById("book_trans_fb_img").src.indexOf("dot_incorrect")!= -1 ) {
			document.getElementById("book_trans_fb_img").src="images/labels/ben_incorrect.jpg";
		}
		else {
			document.getElementById("book_trans_fb_img").src="images/labels/dot_incorrect.jpg";
		}
	}

	if (scoreSplit==false){
		if (points<1 && pointsTxt=="&frac12;"){
			document.getElementById("score").innerHTML = "Score: &frac12;";
		}
		else if (curr_topic_title!="onet_full"){
			document.getElementById("score").innerHTML = "Score: " + Math.floor(points)+pointsTxt;
		}

	}
	else {
		document.getElementById("correct").innerHTML = "Words: " + points;
		document.getElementById("clear").innerHTML = "Clear: " + pronPoints;
		var totPoints=points+pronPoints;
		document.getElementById("total").innerHTML = "Total: " + totPoints;
	}

	if (curr_topic_title=="multi" && trigger!="no"){
		if (vocArray.length >5){
			var vInd = vocArray.indexOf(vocEx);
			vocArray.splice(vInd,1);
		}
		else{
			setAllVocArray();
		}
	}
	if (uMode!="book_trans"){
		var imgInd = Math.floor(Math.random() * vocArray.length);
		if (imgInd == pImgInd) {
			newImage();
			return;
		}
		if (curr_topic_title=="onet_full") {
			vocEx=onet_test[onet_test_item];
			if (vocEx.dispType=="img" && vocEx.qs==1){
				var single_img_display=true;
		 	}
			else {
				document.getElementById("mainImage").style.display="none";
				document.getElementById("innerDiv").style.display="block";
				var html_display=true;
			}
		}
		else if (curr_topic_title=="onet_gq"){
		  vocEx = vocArray[imgInd];
		  var html_display=true;
		}
		else if (curr_topic_dir=="onet_gq"){
			vocEx = (vocArray[imgInd].substr(0,vocArray[imgInd].indexOf("-")));
		}
		else if (curr_topic_title=="onet_q_a") {
			vocEx =Object.getOwnPropertyNames(vocArray[imgInd]);
		}
		else if (curr_topic_title=="onet_voc"){
			if (typeof vocArray[imgInd].txt=="object"){
				//alert("object");
				var txt_ind=Math.floor(Math.random() * vocArray[imgInd].txt.length);
				vocEx = vocArray[imgInd].txt[txt_ind];
			}
			else {
				vocEx = vocArray[imgInd].txt;
			}
		}
		else {
			vocEx = vocArray[imgInd];
		}
	}


	//This section checks for vocabulary items that cannot be filenames and substitutes them
	substInd = substArray.indexOf(vocEx);
	if (substInd !=-1) {
		vocExIm = substArray[substInd+1];
	}
	else vocExIm = vocEx;


	if (uMode=="book_trans"){
		DBExNum++;
		var i = ((DBPageNum-1)/2);
		if (DBExNum>(d_B_ExArray[i])){
			DBPageNum++;
			DBPageNum++;
			if (DBPageNum>(d_B_ExArray.length*2)-1){
				document.getElementById("finishedButton").style.display = "block";
				finished = true;
				stopCount= true;
				setTimeout(function() {
					var questions = d_B_ExArray.reduce(function(d_B_ExArray, b) { return d_B_ExArray + b; }, 0);
					var perc = Math.round((points/questions)*100); 
					document.getElementById("score").innerHTML = "Score: " + perc +"%";
					cheer.play();
					document.getElementById("book_trans_fb_img").src = "images/labels/dot_correct.jpg";
					document.getElementById("mainImage").src = "images/vocab/titles/d_B_"+currentBook.substr(4)+"_end.jpg";
					document.getElementById("book_overlay").src = "images/vocab/titles/d_B_congrats.gif";
					document.getElementById("d_B_Score").style.display="block";
					document.getElementById("d_B_Score").innerHTML=points+" points from<br>" + questions+ " questions<br>= "+perc+"%";
				},2500);

				return;
			}
			document.getElementById("mainImage").src = "images/vocab/dot_and_Ben/sentences/d_B_"+currentBook.substr(4)+"_"+DBPageNum+".jpg";
			document.getElementById("book_overlay").src = "images/formatting/d_B_spacer.png";
			DBExNum=1;
			vocExIm="d_B_"+currentBook.substr(4)+"_"+DBPageNum+"_"+DBExNum;
			// fix me
			currentDBEx = vocExIm;
			setVocArrays();
		}
		else{
			vocExIm="d_B_"+currentBook.substr(4)+"_"+DBPageNum+"_"+DBExNum;
			currentDBEx = vocExIm;
			setVocArrays();
		}
	}

	pImgInd = imgInd;
	choices(imgInd);

	//This section calculates "vocExIm" if the "multi" topic is selected
	if (curr_topic_title=="multi"){

		var slPos = vocEx.indexOf("/")+1;
		var tempVoc = vocEx.slice(slPos);
		var tempDir = vocEx.slice(0,slPos);
		vocExIm = vocEx;
		substInd = substArray.indexOf(tempVoc);
		if (substInd !=-1) {
			tempVoc = substArray[substInd+1];
			vocExIm = tempDir + tempVoc;
		}
	}
	if (uMode!="look_choose" && uMode!="book_trans"){
		splitSubst(vocEx);
	}
	if (uMode == "look_choose" || uMode == "say_word" || uMode=="book_trans") {
		if (uMode=="book_trans") {
			document.getElementById("mainImage").src = "images/vocab/dot_and_Ben/sentences/d_B_"+currentBook.substr(4)+"_"+DBPageNum+".jpg";
			document.getElementById("book_overlay").src = "images/vocab/" + curr_topic_dir + "/" + vocExIm + ".png";
		}
		else if (single_img_display){
		  document.getElementById("mainImage").style.display="inline";
		  document.getElementById("innerDiv").style.display="none";
		  document.getElementById("mainImage").src = vocEx.src;
		}
		else if (html_display){
			document.getElementById("innerDiv").innerHTML=vocEx.html;
			if (vocEx.qs>1){
				for (var i=0;i<vocEx.qs;i++){
					document.getElementById(vocEx.name+"_ans_"+(i+1)).innerHTML=onet_test.indexOf(vocEx)+i+1+".";
					if (vocEx.gaps>0){
						document.getElementById(vocEx.name+"_gap_"+(i+1)).innerHTML="("+(onet_test.indexOf(vocEx)+i+1) +")";
					}
				}
				document.getElementById(vocEx.name+"_ans_"+(onet_test_item-onet_test.indexOf(vocEx)+1)).style.backgroundColor="#f60";
				document.getElementById(vocEx.name+"_ans_"+(onet_test_item-onet_test.indexOf(vocEx)+1)).scrollIntoView();
				if (vocEx.gaps>0){
          			document.getElementById(vocEx.name+"_gap_"+(onet_test_item-onet_test.indexOf(vocEx)+1)).style.backgroundColor="#f60";
          			document.getElementById(vocEx.name+"_gap_"+(onet_test_item-onet_test.indexOf(vocEx)+1)).scrollIntoView();
        		}
			}
		}
		else if (curr_topic_title!="multi"){
			document.getElementById("mainImage").src = "images/vocab/" + curr_topic_dir + "/" + vocExIm + ".jpg";
		}
		else{
			document.getElementById("mainImage").src = "images/vocab/" + vocExIm + ".jpg";
		}
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

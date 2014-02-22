

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
      setOpacity(objOut, opacity)
      opacity -= 10;
    };
    var fadeIn= function() {
      setOpacity(objIn, opacity)
      opacity += 10;
    };
    var displayNone=function() {
    objOut.style.display = "none";
    }
    var displayNorm=function() {
    objIn.style.display = "";
    }
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
      setOpacity(obj2, opacity)
      opacity -= 10;
    };

    var swapObj2 = function() {
      obj2.src = imageURL;
    }

    var makeOpaque= function() {
      setOpacity(obj2, 100)
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
var testimages=new Array() 
testimages[0]=["/home/ian/Website/TPFProject/images/schools/btl1.jpg","",""]
testimages[1]=["/home/ian/Website/TPFProject/images/schools/wnk1.jpg","",""]

var fadeimages=new Array()
//SET IMAGE PATHS. Extend or contract array as needed
fadeimages[0]=["images/slideshow/slide001.jpg","",""]
fadeimages[1]=["images/slideshow/slide002.jpg","",""]
fadeimages[2]=["images/slideshow/slide003.jpg","",""]
fadeimages[3]=["images/slideshow/slide004.jpg","",""]
fadeimages[4]=["images/slideshow/slide005.jpg","",""]
fadeimages[5]=["images/slideshow/slide006.jpg","",""]
fadeimages[6]=["images/slideshow/slide007.jpg","",""]
fadeimages[7]=["images/slideshow/slide008.jpg","",""]
fadeimages[8]=["images/slideshow/slide009.jpg","",""]
fadeimages[9]=["images/slideshow/slide010.jpg","",""]
fadeimages[10]=["images/slideshow/slide011.jpg","",""]
fadeimages[11]=["images/slideshow/slide012.jpg","",""]
fadeimages[12]=["images/slideshow/slide013.jpg","",""]
fadeimages[13]=["images/slideshow/slide014.jpg","",""]
fadeimages[14]=["images/slideshow/slide015.jpg","",""]
fadeimages[15]=["images/slideshow/slide016.jpg","",""]
fadeimages[16]=["images/slideshow/slide017.jpg","",""]
fadeimages[17]=["images/slideshow/slide018.jpg","",""]
fadeimages[18]=["images/slideshow/slide019.jpg","",""]
fadeimages[19]=["images/slideshow/slide020.jpg","",""]
fadeimages[20]=["images/slideshow/slide021.jpg","",""]
fadeimages[21]=["images/slideshow/slide022.jpg","",""]
fadeimages[22]=["images/slideshow/slide023.jpg","",""]
fadeimages[23]=["images/slideshow/slide024.jpg","",""]
fadeimages[24]=["images/slideshow/slide025.jpg","",""]
fadeimages[25]=["images/slideshow/slide026.jpg","",""]
fadeimages[26]=["images/slideshow/slide027.jpg","",""]
fadeimages[27]=["images/slideshow/slide028.jpg","",""]
fadeimages[28]=["images/slideshow/slide029.jpg","",""]
fadeimages[29]=["images/slideshow/slide030.jpg","",""]
fadeimages[30]=["images/slideshow/slide031.jpg","",""]
fadeimages[31]=["images/slideshow/slide032.jpg","",""]
fadeimages[32]=["images/slideshow/slide033.jpg","",""]
fadeimages[33]=["images/slideshow/slide034.jpg","",""]
fadeimages[34]=["images/slideshow/slide035.jpg","",""]
fadeimages[35]=["images/slideshow/slide036.jpg","",""]
fadeimages[36]=["images/slideshow/slide037.jpg","",""]
fadeimages[37]=["images/slideshow/slide038.jpg","",""]
fadeimages[38]=["images/slideshow/slide039.jpg","",""]
fadeimages[39]=["images/slideshow/slide040.jpg","",""]
fadeimages[40]=["images/slideshow/slide041.jpg","",""]
fadeimages[41]=["images/slideshow/slide042.jpg","",""]
fadeimages[42]=["images/slideshow/slide043.jpg","",""]
fadeimages[43]=["images/slideshow/slide044.jpg","",""]
fadeimages[44]=["images/slideshow/slide045.jpg","",""]
fadeimages[45]=["images/slideshow/slide046.jpg","",""]
fadeimages[46]=["images/slideshow/slide047.jpg","",""]
fadeimages[47]=["images/slideshow/slide048.jpg","",""]
fadeimages[48]=["images/slideshow/slide049.jpg","",""]
fadeimages[49]=["images/slideshow/slide050.jpg","",""]
fadeimages[50]=["images/slideshow/slide051.jpg","",""]
fadeimages[51]=["images/slideshow/slide052.jpg","",""]
fadeimages[52]=["images/slideshow/slide053.jpg","",""]
fadeimages[53]=["images/slideshow/slide054.jpg","",""]
fadeimages[54]=["images/slideshow/slide055.jpg","",""]
fadeimages[55]=["images/slideshow/slide056.jpg","",""]
fadeimages[56]=["images/slideshow/slide057.jpg","",""]
fadeimages[57]=["images/slideshow/slide058.jpg","",""]
fadeimages[58]=["images/slideshow/slide059.jpg","",""]
fadeimages[59]=["images/slideshow/slide060.jpg","",""]
fadeimages[60]=["images/slideshow/slide061.jpg","",""]
fadeimages[61]=["images/slideshow/slide062.jpg","",""]
fadeimages[62]=["images/slideshow/slide063.jpg","",""]
fadeimages[63]=["images/slideshow/slide064.jpg","",""]
fadeimages[64]=["images/slideshow/slide065.jpg","",""]
fadeimages[65]=["images/slideshow/slide066.jpg","",""]
fadeimages[66]=["images/slideshow/slide067.jpg","",""]
fadeimages[67]=["images/slideshow/slide068.jpg","",""]
fadeimages[68]=["images/slideshow/slide069.jpg","",""]
fadeimages[69]=["images/slideshow/slide070.jpg","",""]
fadeimages[70]=["images/slideshow/slide071.jpg","",""]
fadeimages[71]=["images/slideshow/slide072.jpg","",""]
fadeimages[72]=["images/slideshow/slide073.jpg","",""]
fadeimages[73]=["images/slideshow/slide074.jpg","",""]
fadeimages[74]=["images/slideshow/slide075.jpg","",""]
fadeimages[75]=["images/slideshow/slide076.jpg","",""]
fadeimages[76]=["images/slideshow/slide077.jpg","",""]
fadeimages[77]=["images/slideshow/slide078.jpg","",""]
fadeimages[78]=["images/slideshow/slide079.jpg","",""]
fadeimages[79]=["images/slideshow/slide080.jpg","",""]
fadeimages[80]=["images/slideshow/slide081.jpg","",""]
fadeimages[81]=["images/slideshow/slide082.jpg","",""]
fadeimages[82]=["images/slideshow/slide083.jpg","",""]
fadeimages[83]=["images/slideshow/slide084.jpg","",""]
fadeimages[84]=["images/slideshow/slide085.jpg","",""]
fadeimages[85]=["images/slideshow/slide086.jpg","",""]
fadeimages[86]=["images/slideshow/slide087.jpg","",""]
fadeimages[87]=["images/slideshow/slide088.jpg","",""]
fadeimages[88]=["images/slideshow/slide089.jpg","",""]
fadeimages[89]=["images/slideshow/slide090.jpg","",""]
fadeimages[90]=["images/slideshow/slide091.jpg","",""]
fadeimages[91]=["images/slideshow/slide092.jpg","",""]
fadeimages[92]=["images/slideshow/slide093.jpg","",""]
fadeimages[93]=["images/slideshow/slide094.jpg","",""]

var fadebgcolor="white"

////NO need to edit beyond here/////////////
 
var fadearray=new Array() //array to cache fadeshow instances
var fadeclear=new Array() //array to cache corresponding clearinterval pointers
 
var dom=(document.getElementById) //modern dom browsers
var iebrowser=document.all
 
function fadeshow(theimages, fadewidth, fadeheight, borderwidth, delay, pause, displayorder){
this.pausecheck=pause
this.mouseovercheck=0
this.delay=delay
this.degree=10 //initial opacity degree (10%)
this.curimageindex=0
this.nextimageindex=1
fadearray[fadearray.length]=this
this.slideshowid=fadearray.length-1
this.canvasbase="canvas"+this.slideshowid
this.curcanvas=this.canvasbase+"_0"
if (typeof displayorder!="undefined")
theimages.sort(function() {return 0.5 - Math.random();}) //thanks to Mike (aka Mwinter) :)
this.theimages=theimages
this.imageborder=parseInt(borderwidth)
this.postimages=new Array() //preload images
for (p=0;p<theimages.length;p++){
this.postimages[p]=new Image()
this.postimages[p].src=theimages[p][0]
}
 
var fadewidth=fadewidth+this.imageborder*2
var fadeheight=fadeheight+this.imageborder*2
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers (ie: Firefox)
document.write('<div id="master'+this.slideshowid+'" style="position:relative;width:'+fadewidth+'px;height:'+fadeheight+'px;overflow:hidden;"><div id="'+this.canvasbase+'_0" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:'+fadebgcolor+'"></div><div id="'+this.canvasbase+'_1" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:'+fadebgcolor+'"></div></div>')
else
document.write('<div><img name="defaultslide'+this.slideshowid+'" src="'+this.postimages[0].src+'"></div>')
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers such as Firefox
this.startit()
else{
this.curimageindex++
setInterval("fadearray["+this.slideshowid+"].rotateimage()", this.delay)
}
}

function fadepic(obj){
if (obj.degree<100){
obj.degree+=10
if (obj.tempobj.filters&&obj.tempobj.filters[0]){
if (typeof obj.tempobj.filters[0].opacity=="number") //if IE6+
obj.tempobj.filters[0].opacity=obj.degree
else //else if IE5.5-
obj.tempobj.style.filter="alpha(opacity="+obj.degree+")"
}
else if (obj.tempobj.style.MozOpacity)
obj.tempobj.style.MozOpacity=obj.degree/101
else if (obj.tempobj.style.KhtmlOpacity)
obj.tempobj.style.KhtmlOpacity=obj.degree/100
else if (obj.tempobj.style.opacity&&!obj.tempobj.filters)
obj.tempobj.style.opacity=obj.degree/101
}
else{
clearInterval(fadeclear[obj.slideshowid])
obj.nextcanvas=(obj.curcanvas==obj.canvasbase+"_0")? obj.canvasbase+"_0" : obj.canvasbase+"_1"
obj.tempobj=iebrowser? iebrowser[obj.nextcanvas] : document.getElementById(obj.nextcanvas)
obj.populateslide(obj.tempobj, obj.nextimageindex)
obj.nextimageindex=(obj.nextimageindex<obj.postimages.length-1)? obj.nextimageindex+1 : 0
setTimeout("fadearray["+obj.slideshowid+"].rotateimage()", obj.delay)
}
}
 
fadeshow.prototype.populateslide=function(picobj, picindex){
var slideHTML=""
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML='<a href="'+this.theimages[picindex][1]+'" target="'+this.theimages[picindex][2]+'">'
slideHTML+='<img src="'+this.postimages[picindex].src+'" border="'+this.imageborder+'px">'
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML+='</a>'
picobj.innerHTML=slideHTML
}
 
 
fadeshow.prototype.rotateimage=function(){
if (this.pausecheck==1) //if pause onMouseover enabled, cache object
var cacheobj=this
if (this.mouseovercheck==1)
setTimeout(function(){cacheobj.rotateimage()}, 100)
else if (iebrowser&&dom||dom){
this.resetit()
var crossobj=this.tempobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
crossobj.style.zIndex++
fadeclear[this.slideshowid]=setInterval("fadepic(fadearray["+this.slideshowid+"])",50)
this.curcanvas=(this.curcanvas==this.canvasbase+"_0")? this.canvasbase+"_1" : this.canvasbase+"_0"
}
else{
var ns4imgobj=document.images['defaultslide'+this.slideshowid]
ns4imgobj.src=this.postimages[this.curimageindex].src
}
this.curimageindex=(this.curimageindex<this.postimages.length-1)? this.curimageindex+1 : 0
}
 
fadeshow.prototype.resetit=function(){
this.degree=10
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
if (crossobj.filters&&crossobj.filters[0]){
if (typeof crossobj.filters[0].opacity=="number") //if IE6+
crossobj.filters(0).opacity=this.degree
else //else if IE5.5-
crossobj.style.filter="alpha(opacity="+this.degree+")"
}
else if (crossobj.style.MozOpacity)
crossobj.style.MozOpacity=this.degree/101
else if (crossobj.style.KhtmlOpacity)
crossobj.style.KhtmlOpacity=this.degree/100
else if (crossobj.style.opacity&&!crossobj.filters)
crossobj.style.opacity=this.degree/101
}
 
 
fadeshow.prototype.startit=function(){
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
this.populateslide(crossobj, this.curimageindex)
if (this.pausecheck==1){ //IF SLIDESHOW SHOULD PAUSE ONMOUSEOVER
var cacheobj=this
var crossobjcontainer=iebrowser? iebrowser["master"+this.slideshowid] : document.getElementById("master"+this.slideshowid)
crossobjcontainer.onmouseover=function(){cacheobj.mouseovercheck=1}
crossobjcontainer.onmouseout=function(){cacheobj.mouseovercheck=0}
}
this.rotateimage()
}












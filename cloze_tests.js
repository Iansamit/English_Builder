/* Single Template - Replace nnn with new text number */

var singlennn_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Instructions</b></p>\
      <img style="margin-left:5em;width:15em" src="images/vocab/onet_include/example.png" \>\
      <p style="text-align:left; margin-bottom:0.5em">Situation</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">A:</div>textA</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">B:</div>textB</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">choice</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">choice</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">choice</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">choice</div></p>\
    </div>\
</div>';

var singlennn = {name:"singlennn", dispType:"html", html:singlennn_html, gaps:0, qs:1, a1:0};


/* Cloze Template - Replace nnn with new text number */

var clozennn_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Instructions</b></p><br\>\
      <p style="text-align:center"><b>Title</b></p><br\>\
      <p ><div style="float:left;width:7em">List_Item</div>________<span id="clozennn_gap_1">(n)</span>________</p><br\>\
      <p >text in paragraph</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">A:</div>textA</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">B:</div>textB</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="clozennn_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
        <div id="clozennn_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
        <div id="clozennn_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
        <div id="clozennn_ans_4" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
        <div id="clozennn_ans_5" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
    </div>\
</div>';

var clozennn = {name:"clozennn", dispType:"html", html:clozennn_html, gaps:5, qs:0, a1:0, a2:0, a3:0, a4:0, a5:0};


/* Passage Template - Replace nnn with new text number */

var passnnn_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left"><b>Instructions for questions <span id="passnnn_gap_1">(n)</span> and <span id="passnnn_gap_2">(n)</span>.</b></p><br\>\
        <img style="margin-left:5em;width:15em" src="images/vocab/onet_include/example.png" \>\
        <div style="border: 0.1em solid black; padding:1em; margin:1em">\
            <p style="text-align:left; margin-bottom:0.5em;">text in box</p>\
        </div>\
        <p >text in paragraph</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="passnnn_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>question\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="passnnn_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>question\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="passnnn_ans_3" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>question\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="passnnn_ans_4" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>question\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="passnnn_ans_5" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>question\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">choice1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">choice2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">choice3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">choice4</div><br\>\
        </div>\
    </div>\
</div>';

var passnnn = {name:"passnnn", dispType:"html", html:passnnn_html, gaps:0, qs:5, a1:0, a2:0, a3:0, a4:0, a5:0};

//End of templates


var single001_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Teacher:</div>It\'s very dark in here. Please ___________.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Student:</div>Yes, sir.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">turn on the light</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">close the window</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">switch off the fan</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">clean the blackboard</div></p>\
    </div>\
</div>';

var single001 = {name:"single001", dispType:"html", html:single001_html, gaps:0, qs:1, a1:1};

var single002_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <img style="margin-left:5em;width:15em; margin-bottom:1em" src="images/vocab/onet_include/single002.jpg" \>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Lisa:</div>It\'s very heavy. I can\'t lift it up.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Pete:</div>_________</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">God bless you.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Let me help you.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Show me your hands.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">That\'s very kind of you.</div></p>\
    </div>\
</div>';

var single002 = {name:"single002", dispType:"html", html:single002_html, gaps:0, qs:1, a1:2};

var single003_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Jack:</div>You won the gold medal. Congratulations!</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Rose:</div>___________</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">I\'m sorry.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Thank you.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Never mind.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">You\'re welcome.</div></p>\
    </div>\
</div>';

var single003 = {name:"single003", dispType:"html", html:single003_html, gaps:0, qs:1, a1:2};


var single004_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">You\'re stepping on someone\'s foot. You say, "___________".</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">It\'s OK.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">I\'m sorry!</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Don\'t worry!</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Just a moment!</div></p>\
    </div>\
</div>';

var single004 = {name:"single004", dispType:"html", html:single004_html, gaps:0, qs:1, a1:2};


var single005_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Pam:</div>Thank you very much.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Ali:</div>_________</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">I\'m good.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">That\'s right.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Never mind.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">You\'re welcome.</div></p>\
    </div>\
</div>';

var single005 = {name:"single005", dispType:"html", html:single005_html, gaps:0, qs:1, a1:4};


var single006_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Tom wants to go to the bank.</p>\
      <p ><div style="float:left;width:4em; margin-left:2em; margin-right:1em">Tom:</div>Excuse me. ___________.</p>\
      <p ><div style="float:left;width:4em; margin-left:2em; margin-right:1em">A man:</div>Walk down this street. It\'s on the right corner.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">When is the bank open?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Which bank do you like?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">How can I get to the bank?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Why do you work at the bank?</div></p>\
    </div>\
</div>';

var single006 = {name:"single006", dispType:"html", html:single006_html, gaps:0, qs:1, a1:3};


var single007_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Sue and Kate are walking home.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Sue:</div>It\'s raining!</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Kate:</div>Oh no! I don\'t want to _________.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">dry out</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">get wet</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">warm up</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">keep clean</div></p>\
    </div>\
</div>';

var single007 = {name:"single007", dispType:"html", html:single007_html, gaps:0, qs:1, a1:2};


var single008_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Sarah won the first prize. What does she feel?</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">Glad</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Angry</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Sleepy</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Bored</div></p>\
    </div>\
</div>';

var single008 = {name:"single008", dispType:"html", html:single008_html, gaps:0, qs:1, a1:1};


var single009_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">You can buy _______ at the bakery.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">rice and curry</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">shirts and skirts</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">socks and shoes</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">bread and cakes</div></p>\
    </div>\
</div>';

var single009 = {name:"single009", dispType:"html", html:single009_html, gaps:0, qs:1, a1:4};


var single010_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Nancy has some apples, strawberries, oranges and grapes.</p>\
      <p style="text-align:left; margin-bottom:0.5em">She can make ________.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">tuna soup</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">fruit salad</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">meat sauce</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">green curry</div></p>\
    </div>\
</div>';

var single010 = {name:"single010", dispType:"html", html:single010_html, gaps:0, qs:1, a1:2};


var single011_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Nina:</div>What do you think about my new dress?</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Jane:</div>Wow! it\'s _________.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">easy</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">hard</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">clear</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">great</div></p>\
    </div>\
</div>';

var single011 = {name:"single011", dispType:"html", html:single011_html, gaps:0, qs:1, a1:4};


var single012_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">You\'re going to the beach. What should you bring for your trip?</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">sunglasses, swimsuit and hat</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">wool scarf, suit and trousers</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">jacket, light sweater and gloves</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">swim trunks, raincoat and boots</div></p>\
    </div>\
</div>';

var single012 = {name:"single012", dispType:"html", html:single012_html, gaps:0, qs:1, a1:1};


var single013_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Read the instructions</b></p>\
      <div style="border: 0.1em solid black; padding:1em; margin:1em">\
      <p style="text-align:left; margin-bottom:0.5em;">First, put some water and detergent in the washing bowl.</p>\
      <p style="text-align:left; margin-bottom:0.5em;">Then brush and wash the clothes.</p>\
      <p style="text-align:left; margin-bottom:0.5em;">After that, wash the clothes in clean water.</p>\
      <p style="text-align:left; margin-bottom:0.5em;">Lastly, hang up the clothes on the cloth line.</p>\
      </div>\
      <p style="text-align:left; margin-bottom:0.5em;">These steps are for _________ clothes.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">drying</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">washing</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">hanging</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">soaking</div></p>\
    </div>\
</div>';

var single013 = {name:"single013", dispType:"html", html:single013_html, gaps:0, qs:1, a1:2};


var single014_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Look at the notice.</b></p>\
      <div style="width: 17em; border: 0.1em solid black; padding:1em; margin:1em; text-align:center">\
        WEEKEND ONLY<Br\>\
        BUY 2 GET ONE FREE<Br\>\
        ON ALL SHOES AND CLOTHES<Br\>\
      </div>\
      <p style="text-align:left; margin-bottom:0.5em">You can see this notice at a ___________.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">post office</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">train station</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">fitness centre</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">department store</div></p>\
    </div>\
</div>';

var single014 = {name:"single014", dispType:"html", html:single014_html, gaps:0, qs:1, a1:4};


var single015_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:01em"><b>From the sign, what would you do?</b></p>\
      <img style="margin-left:7em;width:12em" src="images/vocab/onet_include/single015.jpg" \>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">Put a lot of water on the fire</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Use the exit stairways to get out.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Take the elevator to the first floor.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Get into the building very quickly.</div></p>\
    </div>\
</div>';

var single015 = {name:"single015", dispType:"html", html:single015_html, gaps:0, qs:1, a1:2};


var single016_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:01em"><b>Look at the sign.</b></p>\
      <img style="margin-left:5em;width:12em" src="images/vocab/onet_include/single016.jpg" \>\
      <p style="text-align:left; margin-bottom:0.5em; margin-top:1em">When you see the sign, you should ___________.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">keep left</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">keep quiet</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">make noise</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">make a queue</div></p>\
    </div>\
</div>';

var single016 = {name:"single016", dispType:"html", html:single016_html, gaps:0, qs:1, a1:4};


var single017_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:2em"><b>What kind of sports can people usually do alone?</b></p>\
      <img style="width:100%" src="images/vocab/onet_include/single017.jpg" \>\
    </div>\
</div>';

var single017 = {name:"single017", dispType:"html", html:single017_html, gaps:0, qs:1, a1:3};


var single018_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Read the date:</b></p>\
      <p style="text-align:center; margin-bottom:0.5em">December 5 2011</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">December five, twenty eleven</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">December fifth, twenty eleven</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">December the five, two thousand eleven</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">December the fifth, two thousand eleven</div></p>\
    </div>\
</div>';

var single018 = {name:"single018", dispType:"html", html:single018_html, gaps:0, qs:1, a1:4};


var single019_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Which month has thirty days?</b></p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">February</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">March</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">April</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">May</div></p>\
    </div>\
</div>';

var single019 = {name:"single019", dispType:"html", html:single019_html, gaps:0, qs:1, a1:3};


var single020_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">What animal has the same colors as zebra?</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">A tiger</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">A panda</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">A giraffe</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">A buffalo</div></p>\
    </div>\
</div>';

var single020 = {name:"single020", dispType:"html", html:single020_html, gaps:0, qs:1, a1:2};


var single021_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">What is related to Halloween\'s Day?</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">Eggs</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Roses</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">A turkey</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">A pumpkin</div></p>\
    </div>\
</div>';

var single021 = {name:"single021", dispType:"html", html:single021_html, gaps:0, qs:1, a1:4};


var single022_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">When you want to search for information on the Internet. You can ____<span id="single022_gap_1">(n)</span>____ on the icon of each topic in the website.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">hit</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">look</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">click</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">touch</div></p>\
    </div>\
</div>';

var single022 = {name:"single022", dispType:"html", html:single022_html, gaps:1, qs:1, a1:3};


var single023_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">This room is dark. I will ____<span id="single023_gap_1">(n)</span>____ the light.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">turn on</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">pick up</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">take off</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">put away</div></p>\
    </div>\
</div>';

var single023 = {name:"single023", dispType:"html", html:single023_html, gaps:1, qs:1, a1:1};


var single024_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Mike always ____<span id="single024_gap_1">(n)</span>____ to school at 7 a.m.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">go</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">goes</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">gone</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">going</div></p>\
    </div>\
</div>';

var single024 = {name:"single024", dispType:"html", html:single024_html, gaps:1, qs:1, a1:1};


var single025_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Students play basketball every day. They ____<span id="single025_gap_1">(n)</span>____ strong and healthy.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">are</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">did</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">have</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">will</div></p>\
    </div>\
</div>';

var single025 = {name:"single025", dispType:"html", html:single025_html, gaps:1, qs:1, a1:1};


var single026_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Last year there was a flood in Bangkok. School was closed so students ____<span id="single026_gap_1">(n)</span>____.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">do not study</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">did not study</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">have not studied</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">are not studying</div></p>\
    </div>\
</div>';

var single026 = {name:"single026", dispType:"html", html:single026_html, gaps:1, qs:1, a1:2};


var single027_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Which sentence is <b><u>correct</b></u>?</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">How is your father tall?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">How is tall your father?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">How tall is your father?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">How tall your father is?</div></p>\
    </div>\
</div>';

var single027 = {name:"single027", dispType:"html", html:single027_html, gaps:0, qs:1, a1:3};


var single028_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Which sentence has the same meaning as <i>\'Tony has salad for breakfast.\'</i></p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">Tony cooks salad at noon.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Tony eats salad in the morning.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Tony buys salad in the evening.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Tony sells salad in the afternoon.</div></p>\
    </div>\
</div>';

var single028 = {name:"single028", dispType:"html", html:single028_html, gaps:0, qs:1, a1:2};


var single029_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Siri lives in Vientiane. It is near the northeast of Thailand. Siri eats sticky rice and papaya salad (Somtam). What country is Siri from?</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">Laos</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Vietnam</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Thailand</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Myanmar</div></p>\
    </div>\
</div>';

var single029 = {name:"single029", dispType:"html", html:single029_html, gaps:0, qs:1, a1:1};


var single030_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the passage.</b></p>\
      <p style="text-align:left; margin-bottom:0.5em">Bob went camping with friends. Before bedtime, he could not find a toothbrush. He could not see anything in his tent because it was very dark. Bob needed ____<span id="single030_gap_1">(n)</span>____</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">a torch</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">a watch</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">a penknife</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">a toothpaste</div></p>\
    </div>\
</div>';

var single030 = {name:"single030", dispType:"html", html:single030_html, gaps:0, qs:1, a1:1};


var single031_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation.</b></p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">A:</div>How tall are you now?</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">B:</div>I am 137 cm tall. How about you?</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">A:</div>I am 145 cm tall.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">B:</div>You are ____<span id="single031_gap_1">(n)</span>____ than me.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">A:</div>Yes, correct</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">2 cm taller</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">8 cm taller</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">2 cm shorter</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">8 cm shorter</div></p>\
    </div>\
</div>';

var single031 = {name:"single031", dispType:"html", html:single031_html, gaps:1, qs:1, a1:2};


var single032_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation.</b></p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Teacher:</div>____<span id="single032_gap_1">(n)</span>____</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Student:</div>A-Q-U-A-R-I-U-M</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">Can you read "aquarium"?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Can you draw "aquarium"?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Can you write "aquarium"?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Can you spell "aquarium"?</div></p>\
    </div>\
</div>';

var single032 = {name:"single032", dispType:"html", html:single032_html, gaps:0, qs:1, a1:4};


var single033_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the letter.</b></p>\
      <p style="text-align:left; margin-bottom:0.5em">Dear ____<span id="single033_gap_1">(n)</span>____,</p>\
<p style="text-align:left; margin-bottom:0.5em">My name is Jack. I am 10 years old. My house is at 5 King Street. Can I have a new bicycle for Christmas, please?</p>\
<p style="text-align:left; margin-bottom:0.5em">Merry Christmas!</p>\
<p style="text-align:left; margin-bottom:0.5em">Love,</p>\
<p style="text-align:left; margin-bottom:0.5em">Jack</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">God</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Lord</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Santa</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Mom & Dad</div></p>\
    </div>\
</div>';

var single033 = {name:"single033", dispType:"html", html:single033_html, gaps:1, qs:1, a1:3};


var single034_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation.</b></p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">A:</div>_________</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">B:</div>I always play it on the weekend.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">Why do you like tennis?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">What sport do you play?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Where do you play tennis?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">When do you play tennis?</div></p>\
    </div>\
</div>';

var single034 = {name:"single034", dispType:"html", html:single034_html, gaps:0, qs:1, a1:4};


var cloze007_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Read the passage and answer the questions.</b></p><br\>\
      <p >Football, or in the other name _____<span id="cloze007_gap_1">(n)</span>_____, is very popular all around the world. Both boys and girls\
        or men and women can play it. There are _____<span id="cloze007_gap_2">(n)</span>_____ in a football team. When they play football,\
        they have to try to kick the ball into the other\
        team\'s goal. So an important player called _____<span id="cloze007_gap_3">(n)</span>_____ should be skillfull to guard the goal.</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze007_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">futsal</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">soccer</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">freekick</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">midfield</div><br\>\
        </div>\
        <div id="cloze007_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">six players</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">seven players</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">eleven players</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">twenty-two players</div><br\>\
        </div>\
        <div id="cloze007_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">coach</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">referee</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">shooter</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">goalkeeper</div><br\>\
        </div>\
    </div>\
</div>';

var cloze007 = {name:"cloze007", dispType:"html", html:cloze007_html, gaps:3, qs:3, a1:2, a2:3, a3:4};


var cloze006_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Read the passage and answer the questions.</b></p><br\>\
      <p ><div class="conver_name">Ann:</div><div class="conver_cont">_____<span id="cloze006_gap_1">(n)</span>_____, Ann?</div></p>\
      <p ><div class="conver_name">Tina:</div><div class="conver_cont">I\'m finding some information about the butterfly life.</div></p>\
      <p ><div class="conver_name">Ann:</div><div class="conver_cont">Do you like science?</div></p>\
      <p ><div class="conver_name">Tina:</div><div class="conver_cont">Yes, I do. Learning about plants and animals\' life is very _____<span id="cloze006_gap_2">(n)</span>_____ for me. How about you?</div></p>\
      <p ><div class="conver_name">Ann:</div><div class="conver_cont">I don\'t like science. I think it\'s difficult. I like English because it\'s easy for me.</div></p>\
      <p ><div class="conver_name">Pam:</div><div class="conver_cont">Shhhhhh _____<span id="cloze006_gap_3">(n)</span>_____, please. Everyone is reading.</div></p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze006_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">How are you</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">What are you doing</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Where are you going</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Why do you like science</div><br\>\
        </div>\
        <div id="cloze006_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">boring</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">difficult</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">dangerous</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">interesting</div><br\>\
        </div>\
        <div id="cloze006_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Quiet</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Quickly</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Speak up</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Talk louder</div><br\>\
        </div>\
        <div id="cloze006_ans_4" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">In a library</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">In a museum</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">In a science classroom</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">In a computer room</div><br\>\
        </div>\
    </div>\
</div>';

var cloze006 = {name:"cloze006", dispType:"html", html:cloze006_html, gaps:3, qs:4, a1:2, a2:4, a3:1, a4:1};


var cloze005_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p ><div style="float:left">Thai people take off their _____<span id="cloze005_gap_1">(n)</span>_____ in the temple, while British take off\
       their _____<span id="cloze005_gap_2">(n)</span>_____ in the church.</div></p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze005_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">belts</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">rings</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">shoes</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">umbrellas</div><br\>\
        </div>\
        <div id="cloze005_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">hats</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">socks</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">watches</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">eyeglasses</div><br\>\
        </div>\
    </div>\
</div>';

var cloze005 = {name:"cloze005", dispType:"html", html:cloze005_html, gaps:2, qs:2, a1:3, a2:1};


var cloze004_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Complete the conversation.</b></p><br\>\
      <p style="text-align:center"><b>At a stationery shop:</b></p><br\>\
      <p ><div class="conver_name">Seller:</div><div class="conver_cont">Can I help you?</div></p>\
      <p ><div class="conver_name">Ping:</div><div class="conver_cont">______<span id="cloze004_gap_1">(n)</span>______, please.</div></p>\
      <p ><div class="conver_name">Seller:</div><div class="conver_cont">Here you are. It\'s ten baht.</div></p>\
      <p ><div class="conver_name">Ping:</div><div class="conver_cont"> ______<span id="cloze004_gap_2">(n)</span>______ please. I\'ll take one for myself and one for my sister.</div></p>\
      <p ><div class="conver_name">Seller:</div><div class="conver_cont">Do you want anything else?</div></p>\
      <p ><div class="conver_name">Ping:</div><div class="conver_cont">I\'m also looking for watercolor paper. ______<span id="cloze004_gap_3">(n)</span>______</div></p>\
      <p ><div class="conver_name">Seller:</div><div class="conver_cont">It\'s thirty baht. This one is good for painting.</div></p>\
      <p ><div class="conver_name">Ping:</div><div class="conver_cont">I\'ll take it. ______<span id="cloze004_gap_4">(n)</span>______</div></p>\
      <p ><div class="conver_name">Seller:</div><div class="conver_cont">Thank you very much.</div></p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze004_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Yes, you can</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">No, you can\'t</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">I\'d like a 2B pencil</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">I don\'t like a pen</div><br\>\
        </div>\
        <div id="cloze004_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">There it is</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Here it is</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Get them three</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Give me two</div><br\>\
        </div>\
        <div id="cloze004_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">What is the money?</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">How much is it?</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">How many are there?</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">When do you sell them?</div><br\>\
        </div>\
        <div id="cloze004_ans_4" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Here\'s fifty baht.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Here\'s forty baht.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Here\'s fifteen baht.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Here\'s fourteen baht.</div><br\>\
        </div>\
    </div>\
</div>';

var cloze004 = {name:"cloze004", dispType:"html", html:cloze004_html, gaps:4, qs:4, a1:3, a2:4, a3:2, a4:1};


var cloze003_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p  id="top" style="text-align:left"><b>Complete the passage.</b></p><br\>\
      <div style="text-align:center; margin-bottom:1em"><img style="width:10em"  src="images/vocab/onet_cloze/cloze003.jpg" \></div>\
      <p style="text-indent:2em">The nutrition tips tell you the amount of calories per serving. You will get ____<span id="cloze003_gap_1">(n)</span>____ caolories when you eat or drink one serving. One serving has 2g. of fat, ____<span id="cloze003_gap_2">(n)</span>____, and 250 mg. of sodium. We can say that it has low fat, high sugar and medium sodium. It contains no ____<span id="cloze003_gap_3">(n)</span>____. It does not have any protein or carbohydrate at all. So the nutrition tips should be for ____<span id="cloze003_gap_4">(n)</span>____.<\p><br\>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze003_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">two and forty hundred</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">twenty four hundred</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">two hundred and forty</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">twenty hundred and forty</div><br\>\
        </div>\
        <div id="cloze003_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">12 g. of sugar</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">2 g. of calories</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">240 mg. of total fat</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">250 mg. of saturated fat</div><br\>\
        </div>\
        <div id="cloze003_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">sugar</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">sodium</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">total fat</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">saturated fat`</div><br\>\
        </div>\
        <div id="cloze003_ans_4" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">fried fish</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">fruit juice</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">baked beef</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">grilled pork</div><br\>\
        </div>\
    </div>\
</div>';

var cloze003 = {name:"cloze003", dispType:"html", html:cloze003_html, gaps:4, qs:4, a1:3, a2:1, a3:4, a4:2};



var cloze002_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p  id="top" style="text-align:left"><b>Read the letter and fill in the blanks with appropriate choices of a, b, c, or d.</b></p><br\>\
      <p style="text-align:left; margin-left: 12em">187 Chaenwatana Road</p>\
      <p style="text-align:left; margin-left: 12em">Pakkred, Nontaburi</p>\
      <p style="text-align:left; margin-left: 12em">Thailand, 11120</p><br\>\
      <p style="text-align:center">________<span id="cloze002_gap_1">(n)</span>________</p><br\>\
      <p>Dear Mary,</p><br\>\
      <p style="text-indent:2em">Thank you for your ____<span id="cloze002_gap_2">(n)</span>____ asking me about Thailand.</p>\
      <p style="text-indent:2em"> Thailand is in South East Asia. Bangkok is the ____<span id="cloze002_gap_3">(n)</span>____. There are three seasons: hot, cold, and rainy ____<span id="cloze002_gap_4">(n)</span>____ the weather is usually hot. We can wear light clothes allyear round. The best ____<span id="cloze002_gap_5">(n)</span>____ to visit Thailand is December and January. There are a lot of interesting places such as The Emeral Temple and The Royal Palace ____<span id="cloze002_gap_6">(n)</span>____ Bangkok; Doi Suthep in Chiangmai, Pataya in ther East and Phuket in the South. Thai food is hot and spicy but very delicious. Most of Thai peope are Buddists. There are also Chistians, Muslims and other religions. We do not shake hands ____<span id="cloze002_gap_7">(n)</span>____ we gree. We do the "wai" when we meet ____<span id="cloze002_gap_8">(n)</span>____ people as you may have seen in the Thai Airways ads. Wish you could visit Thailand soon. Look forward to hearing from ____<span id="cloze002_gap_9">(n)</span>____ again.</p><br\>\
<p style="text-align:center; margin-left: 12em">____<span id="cloze002_gap_10">(n)</span>____<br\></p>\
<p style="text-align:center; margin-left: 12em">Metta Praneechon<br\></p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze002_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">2015, February 14</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">March 20, 2015</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">20, March 2015</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">February, 2015, 15</div><br\>\
        </div>\
        <div id="cloze002_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">invitation</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">kindness</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">letter</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">call</div><br\>\
        </div>\
        <div id="cloze002_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">city</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">canal</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">town</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">capital</div><br\>\
        </div>\
        <div id="cloze002_ans_4" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">but</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">in</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">on</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">if</div><br\>\
        </div>\
        <div id="cloze002_ans_5" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">way</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">year</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">time</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">watch</div><br\>\
        </div>\
        <div id="cloze002_ans_6" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">in</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">on</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">under</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">at</div><br\>\
        </div>\
        <div id="cloze002_ans_7" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">where</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">when</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">how</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">which</div><br\>\
        </div>\
        <div id="cloze002_ans_8" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">stranger</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">younger</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">older</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">crazy</div><br\>\
        </div>\
        <div id="cloze002_ans_9" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">him</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">her</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">your</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">you</div><br\>\
        </div>\
        <div id="cloze002_ans_10" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Sincerely yours</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Greetings</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Your friend</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Come back again</div><br\>\
        </div>\
    </div>\
</div>';

var cloze002 = {name:"cloze002", dispType:"html", html:cloze002_html, gaps:10, qs:10, a1:3, a2:3, a3:4, a4:1, a5:3, a6:1, a7:2, a8:3, a9:4, a10:1};


var cloze001_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Look at the Sports Club application form. Fill in the blanks with the appropriate choices of a, b, c, d</b></p><br\>\
      <p style="text-align:center"><b>Sports Club Application Form</b></p><br\>\
      <p ><div style="float:left;width:7em">Name</div>Somchai Sangthong</p><br\>\
      <p ><div style="float:left;width:7em">Address</div>________<span id="cloze001_gap_1">(n)</span>________</p><br\>\
      <p ><div style="float:left;width:7em">Date of Birth</div>________<span id="cloze001_gap_2">(n)</span>________</p><br\>\
      <p ><div style="float:left;width:7em">Favorite Sport</div>________<span id="cloze001_gap_3">(n)</span>________</p><br\>\
      <p ><div style="float:left;width:7em">Favorite Color</div>________<span id="cloze001_gap_4">(n)</span>________</p><br\>\
      <p ><div style="float:left;width:7em">Favorite Food</div>________<span id="cloze001_gap_5">(n)</span>________</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze001_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">March 20, 2015</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">187 Paholyothin road, Chattuchak, Bangkok 10900</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">At the townhouse</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">five feet tall</div><br\>\
        </div>\
        <div id="cloze001_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">35 kilos</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">January 24 1996</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Single</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Black eyes</div><br\>\
        </div>\
        <div id="cloze001_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">computer</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">teacher</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">tiger</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">tennis</div><br\>\
        </div>\
        <div id="cloze001_ans_4" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">flowers</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">pencils</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">blue</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">ball</div><br\>\
        </div>\
        <div id="cloze001_ans_5" class="cloze_item_num">\
            12\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">apple juice</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">chicken curry</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">coffee</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">sugar</div><br\>\
        </div>\
    </div>\
</div>';

var cloze001 = {name:"cloze001", dispType:"html", html:cloze001_html, gaps:5, qs:5, a1:2, a2:2, a3:4, a4:3, a5:2};


var pass001_html ='\
<div style="width:100%; height: 100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p id="top">Saturday is our day to clean but Mom turns work into fun. We love singing and dancing. We like to sing when we dust. We like to dance when we mop. We clean the kitchen together. We do the wash together. We both wear our caps. When we finish the work, we hurry to the store. We shop for food. Mom lets me buy the fruits that I like best. We carry the food home. Mom tells stories while we walk. At night, our work is done. Friends come over. We cook dinner. We sing and dance. Saturday is our day to clean but Mom turns work into fun.</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; padding-left:0.3em; overflow:auto">\
        <div style="margin-right:0.5em; text-align: left">\
            <span  id="pass001_ans_1">nn.</span> The main idea of this paragraph is ________.\
        </div>\
        <div style=" width:100%; text-align: left; margin-bottom:1em; margin-left:1.5em">\
            1. Mom likes singing and dancing<br/>\
            2. I love to work, sing and dance<br/>\
            3. Mom turns work into fun<br/>\
            4. Saturday is a singing day<br/>\
        </div>\
        <div style="margin-right:0.5em; text-align: left">\
            <span  id="pass001_ans_2">nn.</span> "We" in line 1 means ________.\
        </div>\
        <div style=" width:75%; text-align: left; margin-bottom:1em; margin-left:1.5em">\
            1. Mom\'s friends<br/>\
            2. Mom and her friends<br/>\
            3. Mom and the writer<br/>\
            4. Mom and Dad<br/>\
        </div>\
        <div style="margin-right:0.5em; text-align: left">\
            <span  id="pass001_ans_3">nn.</span> Mom and the writer both wear ______ while they work.\
        </div>\
        <div style=" width:75%; text-align: left; margin-bottom:1em; margin-left:1.5em">\
            1. mops<br/>\
            2. aprons<br/>\
            3. caps<br/>\
            4. gloves<br/>\
        </div>\
        <div style="margin-right:0.5em; text-align: left">\
            <span  id="pass001_ans_4">nn.</span> The word "hurry" in line 4 means _______.\
        </div>\
        <div style=" width:75%; text-align: left; margin-bottom:1em; margin-left:1.5em">\
            1. walk<br/>\
            2. skip<br/>\
            3. hop<br/>\
            4. rush<br/>\
        </div>\
        <div style="margin-right:0.5em; text-align: left">\
            <span  id="pass001_ans_5">nn.</span> After dinner, they ________.\
        </div>\
        <div style=" width:75%; text-align: left; margin-bottom:1em; margin-left:1.5em">\
            1. do the wash<br/>\
            2. cook and eat<br/>\
            3. sing and dance<br/>\
            4. watch television<br/>\
        </div>\
    </div>\
</div>';
var pass001 = {name:"pass001", dispType:"html", html:pass001_html, gaps:0, qs:5, a1:3, a2:3, a3:3, a4:4, a5:3};


var pass002_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Look at the poster and answer questions <span id="pass002_gap_1">(n)</span> and <span id="pass002_gap_2">(n)</span>.</b></p><br\>\
      <img style="margin-left:5em;width:15em" src="images/vocab/onet_include/pass002.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
          <span  id="pass002_ans_1" style="padding-left: 0.1em;">nn.</span> What does the poster mainly want to tell us?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Save the earth.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Help the children.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Make clean water.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Take care of animals.</div><br\>\
        </div>\
        <div class="pass_item_num">\
          <span  id="pass002_ans_2" style="padding-left: 0.1em;">nn.</span> From the poster, what should you do?\
        </div>\
        <div class="pass_item_num">\
            &nbsp;\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Eat less fish.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Keep more pets.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Grow more trees.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Use less sunlight.</div><br\>\
        </div>\
    </div>\
</div>';

var pass002 = {name:"pass002", dispType:"html", html:pass002_html, gaps:2, qs:2, a1:1, a2:3};


var pass003_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Look at the poster and answer questions <span id="pass003_gap_1">(n)</span>-<span id="pass003_gap_2" style="display:none"></span><span id="pass003_gap_3">(n)</span>.</b></p><br\>\
      <img style="width:100%" src="images/vocab/onet_include/pass003.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
          <span  id="pass003_ans_1" style="padding-left: 0.1em;">nn.</span> Brutus is at lunch. What will he order?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Fish and salad</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Eggs and juice</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Sandwich and chicken</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Ice cream and chocolate</div><br\>\
        </div>\
        <div class="pass_item_num">\
          <span  id="pass003_ans_2" style="padding-left: 0.1em;">nn.</span> Who likes vegetables?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Brutus and Conan</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Conan and Popeye</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Charlie and Brutus</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Popeye and Charlie</div><br\>\
        </div>\
        <div class="pass_item_num">\
          <span  id="pass003_ans_3" style="padding-left: 0.1em;">nn.</span> What do these four people like the most?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Fish and Eggs</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Sandwich and juice</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Salad and chololate</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Chicken and ice cream</div><br\>\
        </div>\
    </div>\
</div>';

var pass003 = {name:"pass003", dispType:"html", html:pass003_html, gaps:3, qs:3, a1:1, a2:3, a3:4};


var pass004_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Read the passage and answer questions <span id="pass004_gap_1">(n)</span>-<span id="pass004_gap_2" style="display:none">(n)</span><span id="pass004_gap_3" style="display:none">(n)</span><span id="pass004_gap_4">(n)</span>.</b></p><br\>\
      <div style="border: 0.1em solid black; padding:1em; margin:1em">\
      <p style="text-align:left; margin-bottom:0.5em;">I\'m Catherine. My birthday is October 11, 2003. My dad takes care of people\'s teeth. I like swimming. I don\'t like vegetables. I have a pet and it always barks at the postman.</p>\
      </div>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
          <span  id="pass004_ans_1" style="padding-left: 0.1em;">nn.</span> How old is Catherine?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Twelve</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Thrteen</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Fourteen</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Fifteen</div><br\>\
        </div>\
        <div class="pass_item_num">\
          <span  id="pass004_ans_2" style="padding-left: 0.1em;">nn.</span> What does Catherine\'s father do?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">A doctor</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">A soldier</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">A dentist</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">A policeman</div><br\>\
        </div>\
        <div class="pass_item_num">\
          <span  id="pass004_ans_3" style="padding-left: 0.1em;">nn.</span> From the passage, which would Catherine choose to eat?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Pork</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Carrot</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Lettuce</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Broccoli</div><br\>\
        </div>\
        <div class="pass_item_num">\
          <span  id="pass004_ans_4" style="padding-left: 0.1em;">nn.</span> What is Catherine\'s pet?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">A little bird</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">A box turtle</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">A white rabbit</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">A brown dog</div><br\>\
        </div>\
    </div>\
</div>';

var pass004 = {name:"pass004", dispType:"html", html:pass004_html, gaps:4, qs:4, a1:1, a2:3, a3:1, a4:4};


var pass005_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left"><b>Read the passage and answer items <span id="pass005_gap_1">(n)</span>-<span id="pass005_gap_2" style="display:none"></span><span id="pass005_gap_3" style="display:none"></span><span id="pass005_gap_4">(n)</span>.</b></p><br\>\
        <div style="margin-left:3em">\
            <p ><i>Suda\'s Schedule</i></p>\
            <p ><div style="float:left; width:3em">8.00</div>Have breakfast with parents</p>\
            <p ><div style="float:left; width:3em">9.00</div>Go to music class</p>\
            <p ><div style="float:left; width:3em">10.30</div>Go to English class</p>\
            <p ><div style="float:left; width:3em">12.00</div>Have lunch with friends</p>\
            <p ><div style="float:left; width:3em">14.00</div>Go swimming</p>\
            <p ><div style="float:left; width:3em">17.00</div>Watch TV with family</p>\
            <p ><div style="float:left; width:3em">18.00</div>Dinner with parents</p>\
            <p ><div style="float:left; width:3em">20.00</div>Go to bed</p>\
        </div>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass005_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Which one is <b><u>correct</b></u>?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Suda has breakfast with friends.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Suda has lunch with parents.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Suda has dinner with family.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Suda has dinner with friends.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass005_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What does Suda do in the afternoon?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Go to bed.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Go swimming</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Go to music class</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Go to English class</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass005_ans_3" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What does Suda do after having dinner?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Sing</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Study</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Sleep</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Watch TV</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass005_ans_4" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What does Suda do?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">A singer</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">A dancer</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">A teacher</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">A student</div><br\>\
        </div>\
    </div>\
</div>';

var pass005 = {name:"pass005", dispType:"html", html:pass005_html, gaps:4, qs:4, a1:3, a2:2, a3:3, a4:4};


var pass006_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left"><b>Look at the map and answer items <span id="pass006_gap_1">(n)</span> and <span id="pass006_gap_2">(n)</span>.</b></p><br\>\
        <img style="width:100%" src="images/vocab/onet_include/pass006.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass006_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>\You are at the bus station. How can you get to the post office?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Go up First Street. Turn right. It\'s on the left.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Go up to the next street. Turn left. It\'s on the right.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Go straight to the junction. It\'s near the coffee shop.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Go along Main "Street. It\'s between the schoool and the temple.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass006_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Where is the cinema?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">It\'s next to the temple.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">It\'s in front of the school.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">It\'s behind the bus station.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">It\'s opposite the coffee shop.</div><br\>\
        </div>\
    </div>\
</div>';

var pass006 = {name:"pass006", dispType:"html", html:pass006_html, gaps:2, qs:2, a1:1, a2:4};


var pass007_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left"><b>Look at the graph and answer items <span id="pass007_gap_1">(n)</span> and <span id="pass007_gap_2">(n)</span>.</b></p><br\>\
        <img style="width:100%" src="images/vocab/onet_include/pass007.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass007_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>\Which fruit does Ana have the most?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">apples</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">bananas</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">mangoes</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">oranges</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass007_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>How many mangoes does Ana have?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Ten</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Fifteeen</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Twenty-five</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Thirty</div><br\>\
        </div>\
    </div>\
</div>';

var pass007 = {name:"pass007", dispType:"html", html:pass007_html, gaps:2, qs:2, a1:4, a2:2};


var cloze999_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
    <p>Hello there. This is a sample close test. And here is a go at ____(<span id="cloze999_gap_1">n</span>)___ gap.</p>\
    <p>The quick brown duck jumped the lazy fox. The fox didn\'t mind so much because ... well  ____(<span id="cloze999_gap_2">n</span>)___ doesn\'t like the idea of fucking a duck???</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze999_ans_1" style="float:left; width:2em; margin-right:0.5em; text-align: right">\
            nn.\
        </div>\
        <div style="float:left; width:75%; text-align: left; margin-bottom:1em">\
            1. the<br/>\
            2. this<br/>\
            3. a<br/>\
            4. thee<br/>\
        </div>\
        <div id="cloze999_ans_2" style="float:left; width:2em; margin-right:0.5em; text-align: right">\
            nn.\
        </div>\
        <div style="float:left; width:75%; text-align: left; margin-bottom:1em">\
            1. Nobody<br/>\
            2. Everybody<br/>\
            3. Most people<br/>\
            4. Only perverts but then who isn\'t?<br/>\
        </div>\
    </div>\
</div>';

var cloze999 = {name:"cloze999", dispType:"html", dispType:"html", html:cloze999_html, gaps:2, qs:2, a1:3, a2:1};


var gq001= {name:"gq001", dispType:"img", src:"images/vocab/onet_gq/onet_2551_01.jpg", qs:1, a1:3};
var gq002= {name:"gq002", dispType:"img", src:"images/vocab/onet_gq/onet_2551_02.jpg", qs:1, a1:2};
var gq003= {name:"gq003", dispType:"img", src:"images/vocab/onet_gq/onet_2551_03.jpg", qs:1, a1:1};
var gq004= {name:"gq004", dispType:"img", src:"images/vocab/onet_gq/onet_2551_04.jpg", qs:1, a1:4};
var gq005= {name:"gq005", dispType:"img", src:"images/vocab/onet_gq/onet_2551_05.jpg", qs:1, a1:2};
var gq006= {name:"gq006", dispType:"img", src:"images/vocab/onet_gq/onet_2551_06.jpg", qs:1, a1:3};
var gq007= {name:"gq007", dispType:"img", src:"images/vocab/onet_gq/onet_2551_07.jpg", qs:1, a1:4};
var gq008= {name:"gq008", dispType:"img", src:"images/vocab/onet_gq/onet_2551_08.jpg", qs:1, a1:3};
var gq009= {name:"gq009", dispType:"img", src:"images/vocab/onet_gq/onet_2551_09.jpg", qs:1, a1:1};
var gq010= {name:"gq010", dispType:"img", src:"images/vocab/onet_gq/onet_2551_10.jpg", qs:1, a1:4};
var gq011= {name:"gq011", dispType:"img", src:"images/vocab/onet_gq/onet_2558_01.jpg", qs:1, a1:1};
var gq012= {name:"gq012", dispType:"img", src:"images/vocab/onet_gq/onet_2558_02.jpg", qs:1, a1:3};
var gq013= {name:"gq013", dispType:"img", src:"images/vocab/onet_gq/onet_2558_03.jpg", qs:1, a1:3};
var gq014= {name:"gq014", dispType:"img", src:"images/vocab/onet_gq/onet_2558_04.jpg", qs:1, a1:2};
var gq015= {name:"gq015", dispType:"img", src:"images/vocab/onet_gq/onet_2558_05.jpg", qs:1, a1:4};
var gq016= {name:"gq016", dispType:"img", src:"images/vocab/onet_gq/onet_2558_06.jpg", qs:1, a1:3};
var gq017= {name:"gq017", dispType:"img", src:"images/vocab/onet_gq/onet_bq011.jpg", qs:1, a1:2};
var gq018= {name:"gq018", dispType:"img", src:"images/vocab/onet_gq/onet_bq012.jpg", qs:1, a1:2};
var gq019= {name:"gq019", dispType:"img", src:"images/vocab/onet_gq/onet_bq013.jpg", qs:1, a1:1};
var gq020= {name:"gq020", dispType:"img", src:"images/vocab/onet_gq/onet_bq014.jpg", qs:1, a1:4};
var gq021= {name:"gq021", dispType:"img", src:"images/vocab/onet_gq/onet_bq015.jpg", qs:1, a1:3};
var gq022= {name:"gq022", dispType:"img", src:"images/vocab/onet_gq/onet_bq016.jpg", qs:1, a1:2};
var gq023= {name:"gq023", dispType:"img", src:"images/vocab/onet_gq/onet_bq017.jpg", qs:1, a1:3};
var gq024= {name:"gq024", dispType:"img", src:"images/vocab/onet_gq/onet_bq018.jpg", qs:1, a1:2};
var gq025= {name:"gq025", dispType:"img", src:"images/vocab/onet_gq/onet_bq019.jpg", qs:1, a1:2};
var gq026= {name:"gq026", dispType:"img", src:"images/vocab/onet_gq/onet_bq020.jpg", qs:1, a1:4};
var gq027= {name:"gq027", dispType:"img", src:"images/vocab/onet_gq/onet_bq021.jpg", qs:1, a1:3};
var gq028= {name:"gq028", dispType:"img", src:"images/vocab/onet_gq/onet_bq022.jpg", qs:1, a1:1};
var gq029= {name:"gq029", dispType:"img", src:"images/vocab/onet_gq/onet_bq023.jpg", qs:1, a1:4};
var gq030= {name:"gq030", dispType:"img", src:"images/vocab/onet_gq/onet_bq024.jpg", qs:1, a1:4};
var gq031= {name:"gq031", dispType:"img", src:"images/vocab/onet_gq/onet_bq025.jpg", qs:1, a1:2};
var gq032= {name:"gq032", dispType:"img", src:"images/vocab/onet_gq/onet_bq026.jpg", qs:1, a1:3};
var gq033= {name:"gq033", dispType:"img", src:"images/vocab/onet_gq/onet_bq027.jpg", qs:1, a1:3};
var gq034= {name:"gq034", dispType:"img", src:"images/vocab/onet_gq/onet_bq028.jpg", qs:1, a1:2};
var gq035= {name:"gq035", dispType:"img", src:"images/vocab/onet_gq/onet_bq029.jpg", qs:1, a1:4};
var gq036= {name:"gq036", dispType:"img", src:"images/vocab/onet_gq/onet_bq030.jpg", qs:1, a1:2};
var gq037= {name:"gq037", dispType:"img", src:"images/vocab/onet_gq/onet_bq031.jpg", qs:1, a1:2};
var gq038= {name:"gq038", dispType:"img", src:"images/vocab/onet_gq/onet_bq032.jpg", qs:1, a1:4};
var gq039= {name:"gq039", dispType:"img", src:"images/vocab/onet_gq/onet_bq033.jpg", qs:1, a1:2};
var gq040= {name:"gq040", dispType:"img", src:"images/vocab/onet_gq/onet_bq034.jpg", qs:1, a1:1};
var gq041= {name:"gq041", dispType:"img", src:"images/vocab/onet_gq/onet_bq035.jpg", qs:1, a1:2};
var gq042= {name:"gq042", dispType:"img", src:"images/vocab/onet_gq/onet_bq036.jpg", qs:1, a1:3};




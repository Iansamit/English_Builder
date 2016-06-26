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
      <img style="margin-left:7em;width:10em" src="images/vocab/onet_include/single015.jpg" \>\
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
      <img style="margin-left:5em;width:10em" src="images/vocab/onet_include/single016.jpg" \>\
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
      <img style="width:87%" src="images/vocab/onet_include/single017.jpg" \>\
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
      <p style="text-align:left; margin-bottom:0.5em">Mike always _______ to school at 7 a.m.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">go</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">goes</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">gone</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">going</div></p>\
    </div>\
</div>';

var single024 = {name:"single024", dispType:"html", html:single024_html, gaps:0, qs:1, a1:2};


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
      <p style="text-align:left; margin-bottom:0.5em">Last year there was a flood in Bangkok.</p>\
      <p> School was closed so students ____<span id="single026_gap_1">(n)</span>____.</p>\
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

var single030 = {name:"single030", dispType:"html", html:single030_html, gaps:1, qs:1, a1:1};


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

var single035_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_01.jpg" \>\
    </div>\
</div>';

var single035 = {name:"single035", dispType:"html", html:single035_html, gaps:0, qs:1, a1:3};


var single036_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_02.jpg" \>\
    </div>\
</div>';

var single036 = {name:"single036", dispType:"html", html:single036_html, gaps:0, qs:1, a1:2};


var single037_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_03.jpg" \>\
    </div>\
</div>';

var single037 = {name:"single037", dispType:"html", html:single037_html, gaps:0, qs:1, a1:1};


var single038_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_04.jpg" \>\
    </div>\
</div>';

var single038 = {name:"single038", dispType:"html", html:single038_html, gaps:0, qs:1, a1:4};


var single039_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_05.jpg" \>\
    </div>\
</div>';

var single039 = {name:"single039", dispType:"html", html:single039_html, gaps:0, qs:1, a1:2};


var single040_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_06.jpg" \>\
    </div>\
</div>';

var single040 = {name:"single040", dispType:"html", html:single040_html, gaps:0, qs:1, a1:3};


var single041_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_07.jpg" \>\
    </div>\
</div>';

var single041 = {name:"single041", dispType:"html", html:single041_html, gaps:0, qs:1, a1:4};


var single042_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_08.jpg" \>\
    </div>\
</div>';

var single042 = {name:"single042", dispType:"html", html:single042_html, gaps:0, qs:1, a1:3};


var single043_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_09.jpg" \>\
    </div>\
</div>';

var single043 = {name:"single043", dispType:"html", html:single043_html, gaps:0, qs:1, a1:1};


var single044_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_2551_10.jpg" \>\
    </div>\
</div>';

var single044 = {name:"single044", dispType:"html", html:single044_html, gaps:0, qs:1, a1:4};


var single045_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-6.7em; margin-left:3.2em; width:65%" src="images/vocab/onet_gq/onet_2558_01.jpg" \>\
    </div>\
</div>';

var single045 = {name:"single045", dispType:"html", html:single045_html, gaps:0, qs:1, a1:1};


var single046_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-1.7em; margin-left:3.2em; width:65%" src="images/vocab/onet_gq/onet_2558_02.jpg" \>\
    </div>\
</div>';

var single046 = {name:"single046", dispType:"html", html:single046_html, gaps:0, qs:1, a1:3};


var single047_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-2.9em; margin-left:2.4em; width:65%" src="images/vocab/onet_gq/onet_2558_03.jpg" \>\
    </div>\
</div>';

var single047 = {name:"single047", dispType:"html", html:single047_html, gaps:0, qs:1, a1:3};


var single048_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-0.9em; margin-left:2.4em; width:65%" src="images/vocab/onet_gq/onet_2558_05.jpg" \>\
    </div>\
</div>';

var single048 = {name:"single048", dispType:"html", html:single048_html, gaps:0, qs:1, a1:4};


var single049_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-4.9em; margin-left:1em; width:65%" src="images/vocab/onet_gq/onet_2558_06.jpg" \>\
    </div>\
</div>';

var single049 = {name:"single049", dispType:"html", html:single049_html, gaps:0, qs:1, a1:3};


var single050_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq011.jpg" \>\
    </div>\
</div>';

var single050 = {name:"single050", dispType:"html", html:single050_html, gaps:0, qs:1, a1:2};


var single051_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq012.jpg" \>\
    </div>\
</div>';

var single051 = {name:"single051", dispType:"html", html:single051_html, gaps:0, qs:1, a1:2};


var single052_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq013.jpg" \>\
    </div>\
</div>';

var single052 = {name:"single052", dispType:"html", html:single052_html, gaps:0, qs:1, a1:1};


var single053_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq014.jpg" \>\
    </div>\
</div>';

var single053 = {name:"single053", dispType:"html", html:single053_html, gaps:0, qs:1, a1:4};


var single054_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq015.jpg" \>\
    </div>\
</div>';

var single054 = {name:"single054", dispType:"html", html:single054_html, gaps:0, qs:1, a1:3};


var single055_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq016.jpg" \>\
    </div>\
</div>';

var single055 = {name:"single055", dispType:"html", html:single055_html, gaps:0, qs:1, a1:2};


var single056_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq017.jpg" \>\
    </div>\
</div>';

var single056 = {name:"single056", dispType:"html", html:single056_html, gaps:0, qs:1, a1:3};


var single057_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq018.jpg" \>\
    </div>\
</div>';

var single057 = {name:"single057", dispType:"html", html:single057_html, gaps:0, qs:1, a1:2};


var single058_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq019.jpg" \>\
    </div>\
</div>';

var single058 = {name:"single058", dispType:"html", html:single058_html, gaps:0, qs:1, a1:2};


var single059_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq020.jpg" \>\
    </div>\
</div>';

var single059 = {name:"single059", dispType:"html", html:single059_html, gaps:0, qs:1, a1:4};


var single060_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq021.jpg" \>\
    </div>\
</div>';

var single060 = {name:"single060", dispType:"html", html:single060_html, gaps:0, qs:1, a1:3};


var single061_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq022.jpg" \>\
    </div>\
</div>';

var single061 = {name:"single061", dispType:"html", html:single061_html, gaps:0, qs:1, a1:1};


var single062_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq023.jpg" \>\
    </div>\
</div>';

var single062 = {name:"single062", dispType:"html", html:single062_html, gaps:0, qs:1, a1:4};


var single063_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq024.jpg" \>\
    </div>\
</div>';

var single063 = {name:"single063", dispType:"html", html:single063_html, gaps:0, qs:1, a1:4};


var single064_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-7em; margin-left:3em; width:65%" src="images/vocab/onet_gq/onet_bq025.jpg" \>\
    </div>\
</div>';

var single064 = {name:"single064", dispType:"html", html:single064_html, gaps:0, qs:1, a1:2};


var single065_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-7em; margin-left:1.5em; width:65%" src="images/vocab/onet_gq/onet_bq026.jpg" \>\
    </div>\
</div>';

var single065 = {name:"single065", dispType:"html", html:single065_html, gaps:0, qs:1, a1:3};


var single066_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-7em; margin-left:1em; width:65%" src="images/vocab/onet_gq/onet_bq029.jpg" \>\
    </div>\
</div>';

var single066 = {name:"single066", dispType:"html", html:single066_html, gaps:0, qs:1, a1:4};


var single067_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-7em; margin-left:1em; width:65%" src="images/vocab/onet_gq/onet_bq030.jpg" \>\
    </div>\
</div>';

var single067 = {name:"single067", dispType:"html", html:single067_html, gaps:0, qs:1, a1:2};


var single068_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-7em; margin-left:2.9em; width:65%" src="images/vocab/onet_gq/onet_bq031.jpg" \>\
    </div>\
</div>';

var single068 = {name:"single068", dispType:"html", html:single068_html, gaps:0, qs:1, a1:2};


var single069_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-6.9em; margin-left:2.9em; width:65%" src="images/vocab/onet_gq/onet_bq032.jpg" \>\
    </div>\
</div>';

var single069 = {name:"single069", dispType:"html", html:single069_html, gaps:0, qs:1, a1:4};


var single070_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-6.9em; margin-left:3.7em; width:65%" src="images/vocab/onet_gq/onet_bq033.jpg" \>\
    </div>\
</div>';

var single070 = {name:"single070", dispType:"html", html:single070_html, gaps:0, qs:1, a1:2};


var single071_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-6.9em; margin-left:3.7em; width:65%" src="images/vocab/onet_gq/onet_bq034.jpg" \>\
    </div>\
</div>';

var single071 = {name:"single071", dispType:"html", html:single071_html, gaps:0, qs:1, a1:1};


var single072_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3.8em; margin-left:3.7em; width:65%" src="images/vocab/onet_gq/onet_bq035.jpg" \>\
    </div>\
</div>';

var single072 = {name:"single072", dispType:"html", html:single072_html, gaps:0, qs:1, a1:2};


var single073_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-3.2em; margin-left:3.7em; width:65%" src="images/vocab/onet_gq/onet_bq036.jpg" \>\
    </div>\
</div>';

var single073 = {name:"single073", dispType:"html", html:single073_html, gaps:0, qs:1, a1:3};


var single074_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:6em; margin-left:2em; margin-right:1em">Mrs. Brown:</div>Mr Smith, this is Mary White, our new teacher.</p>\
      <p ><div style="float:left;width:6em; margin-left:2em; margin-right:1em">Mr. Smith:</div>How do you do, Miss White?</p>\
      <p ><div style="float:left;width:6em; margin-left:2em; margin-right:1em">Miss White:</div>_______________</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">How are you, Mr. Smith?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">How do you do, Mr. Smith?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">It\'s nice to meet you too.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">I\'m fine.</div></p>\
    </div>\
</div>';

var single074 = {name:"single074", dispType:"html", html:single074_html, gaps:0, qs:1, a1:2};


var single075_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Jim:</div>I have to go now. Goodbye James.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">James:</div>______________</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">That\'s all.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Of course.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">I\'m all right.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">See you.</div></p>\
    </div>\
</div>';

var single075 = {name:"single075", dispType:"html", html:single075_html, gaps:0, qs:1, a1:4};


var single076_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Anne:</div>Can I help you wash the dishes?</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Sister:</div>_____________________</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">Thanks. That\'s very nice of you.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Thanks. You\'re very pretty.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Sorry. You\'re very brave.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Sorry to hear that.</div></p>\
    </div>\
</div>';

var single076 = {name:"single076", dispType:"html", html:single076_html, gaps:0, qs:1, a1:1};


var single077_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Tom:</div>_______________. This present is for you.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Malee:</div>Thank you.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">Thank you.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Take care.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Happy birthday.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Have a good day.</div></p>\
    </div>\
</div>';

var single077 = {name:"single077", dispType:"html", html:single077_html, gaps:0, qs:1, a1:3};


var single078_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:4em; margin-left:2em; margin-right:1em">Nan:</div>I have a headache. May I go to the nursing room?</p>\
      <p ><div style="float:left;width:4em; margin-left:2em; margin-right:1em">Teacher:</div>_______________</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">Don\'t mention it.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">No, thank you.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">OK. Thank you.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Yes. Of course.</div></p>\
    </div>\
</div>';

var single078 = {name:"single078", dispType:"html", html:single078_html, gaps:0, qs:1, a1:4};


var single079_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:6em; margin-left:2em; margin-right:1em">Sarah:</div>You look so sad. What\'s the matter?</p>\
      <p ><div style="float:left;width:6em; margin-left:2em; margin-right:1em">Ben:</div>I lost my watch.</p>\
      <p ><div style="float:left;width:6em; margin-left:2em; margin-right:1em">Sarah:</div>_______________.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">It\'s all right</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">That\'s wonderful</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Don\'t worry</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">I don\'t think so</div></p>\
    </div>\
</div>';

var single079 = {name:"single079", dispType:"html", html:single079_html, gaps:0, qs:1, a1:3};


var single080_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">Joe:</div>I forgot to bring my eraser. _______________?</p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">San:</div>Sure.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">Could I borrow one</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Would you like one</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Would you try it</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Could I give it to you</div></p>\
    </div>\
</div>';

var single080 = {name:"single080", dispType:"html", html:single080_html, gaps:0, qs:1, a1:1};


var single081_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">Kim:</div>Dad! I won the singing contest.</p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">Dad:</div>_______________</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">It\'s a good idea.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Congratulations!</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Good luck to you.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Take it easy.</div></p>\
    </div>\
</div>';

var single081 = {name:"single081", dispType:"html", html:single081_html, gaps:0, qs:1, a1:2};


var single082_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">David:</div>I\'m going to Phuket tommorrow.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Oven:</div>_______________.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">That\'s OK</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Have a nice trip</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">I hope to see you</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Sorry to hear that</div></p>\
    </div>\
</div>';

var single082 = {name:"single082", dispType:"html", html:single082_html, gaps:0, qs:1, a1:2};


var single083_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 65%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p style="text-align:left; margin-bottom:0.5em">On the train ...</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Peter:</div>_____________, could you close the window please? It\'s very cold.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">John:</div>Yes, certainly.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">Certainly</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">Not at all</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">You know</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Excuse me</div></p>\
    </div>\
</div>';

var single083 = {name:"single083", dispType:"html", html:single083_html, gaps:0, qs:1, a1:4};


var single084_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">Mary:</div>Sorry, I broke your pencil.</p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">B:</div>_______________.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">That\'s your problem</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">You are wrong</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">That\'s all right</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">You did it</div></p>\
    </div>\
</div>';

var single084 = {name:"single084", dispType:"html", html:single084_html, gaps:0, qs:1, a1:3};


var single085_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p id="top" style="text-align:left; margin-bottom:0.5em"><b>Complete the conversation with the most suitable answer.</b></p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">Joy:</div>Hello. Is that 0 2279 4804?</p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">Jane:</div>No. This is 0 2279 4880.</p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">Joy:</div>I\'m sorry. _______________</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div>\
        <div style="float:left; width:25em;margin-top:1em">I\'m busy.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">What do you mean?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">I\'ve got the wrong number.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Please give me your number.</div></p>\
    </div>\
</div>';

var single085 = {name:"single085", dispType:"html", html:single085_html, gaps:0, qs:1, a1:3};


var single086_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Pet:</div>Pam, why didn\'t you go to school yesterday?</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Pam:</div>I went to see the dentist.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Pet:</div>___________________</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Pam:</div>I had a toothache.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em; margin-top:1em">1.</div><div style="float:left; width:25em;margin-top:1em">What was the matter?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">What did you want?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">What did he do?</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">What was he?</div></p>\
    </div>\
</div>';

var single086 = {name:"single086", dispType:"html", html:single086_html, gaps:0, qs:1, a1:1};


var single087_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">It was midnight when I reached home.</p>\
      <p style="text-align:left; margin-left:3em; margin-top:1em; margin-bottom:0.3em">What does midnight mean?</p>\
      <p ><div style="float:left;width:1em; margin-left:5em">1.</div><div style="float:left; width:25em">6:00 A.M.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">6:00 P.M.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">12:00 A.M.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">12:00 P.M.</div></p>\
    </div>\
</div>';

var single087 = {name:"single087", dispType:"html", html:single087_html, gaps:0, qs:1, a1:4};


var single088_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <p style="text-align:left; margin-bottom:0.5em">Both Joe and Jane like to watch TV and read the comics.</p>\
      <p style="text-align:left; margin-left:3em; margin-top:1em; margin-bottom:0.3em">What does this sentence tell you?</p>\
      <p ><div style="float:left;width:1em; margin-left:5em">1.</div><div style="float:left; width:25em">They like to do the same things.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">They don\'t like to do the same things.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Joe likes to read but Jane likes to watch TV.</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">Jane likes to read but Joe likes to watch TV.</div></p>\
    </div>\
</div>';

var single088 = {name:"single088", dispType:"html", html:single088_html, gaps:0, qs:1, a1:1};


var single089_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <div style="border: 0.1em solid black; padding:1em; margin:1em">\
        <p style="text-align:left; margin-bottom:0.5em;">Last night, we did not watch TV. We played scrabble. Father told us some jokes.\
        We had a lot of fun. Soon it was time for bed. We enjoyed ourselves very much.</p>\
      </div>\
      <p style="text-align:left; margin-left:3em; margin-top:1em; margin-bottom:0.3em">Which is the best title for the above?</p>\
      <p ><div style="float:left;width:1em; margin-left:5em">1.</div><div style="float:left; width:25em">A Night without Television</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">The Broken Television</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">Our Enjoyable Night</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">My Favorite Game</div></p>\
    </div>\
</div>';

var single089 = {name:"single089", dispType:"html", html:single089_html, gaps:0, qs:1, a1:3};


var single090_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; right:0; margin-left:auto; margin-right:auto; height: 100%; width: 60%; overflow-y:auto;">\
      <div style="border: 0.1em solid black; padding:1em; margin:1em">\
        <p style="text-align:left; margin-bottom:0.5em;">Water is important for life. We need about 6-8 glasses a day. \
        Plants need water twice a day. Animals need a lot of water each day.</p>\
      </div>\
      <p style="text-align:left; margin-left:3em; margin-top:1em; margin-bottom:0.3em">This passage is about _____________.</p>\
      <p ><div style="float:left;width:1em; margin-left:5em">1.</div><div style="float:left; width:25em">water</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">2.</div><div style="float:left; width:25em;">plants</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">3.</div><div style="float:left; width:25em;">animals</div></p>\
      <p ><div style="float:left;width:1em; margin-left:5em">4.</div><div style="float:left; width:25em;">glasses</div></p>\
    </div>\
</div>';

var single090 = {name:"single090", dispType:"html", html:single090_html, gaps:0, qs:1, a1:1};

var single091_html ='\
<div style="position:relative; width:100%; height:100%">\
    <div style="position:absolute; left:0; top: 0; height: 100%; width: 100%; overflow-y:auto">\
      <img style="display:block; margin-top:-6.9em; margin-left:2.9em; width:65%" src="images/vocab/onet_gq/onet_bq027.jpg" \>\
    </div>\
</div>';

var single091 = {name:"single091", dispType:"html", html:single091_html, gaps:0, qs:1, a1:3};


//End of singles


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

var cloze002 = {name:"cloze002", dispType:"html", html:cloze002_html, gaps:10, qs:10, a1:2, a2:3, a3:4, a4:1, a5:3, a6:1, a7:2, a8:3, a9:4, a10:1};


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


var cloze008_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p ><div class="conver_name" style="width:6.5em">Mary:</div><div class="conver_cont" style="width: 17em">Hello. I\'m Mary. _____<span id="cloze008_gap_1">(n)</span>_____?</div></p>\
      <p ><div class="conver_name" style="width:6.5em">A new student:</div><div class="conver_cont" style="width: 17em">I\'m Malai.</div></p>\
      <p ><div class="conver_name" style="width:6.5em">Mary:</div><div class="conver_cont" style="width: 17em">Are you new here?</div></p>\
      <p ><div class="conver_name" style="width:6.5em">A new student:</div><div class="conver_cont" style="width: 17em">_____<span id="cloze008_gap_2">(n)</span>_____.</div></p>\
<p ><div class="conver_name" style="width:6.5em">Mary:</div><div class="conver_cont" style="width: 17em">Where are you from?</div></p>\
      <p ><div class="conver_name" style="width:6.5em">A new student:</div><div class="conver_cont" style="width: 17em">America.</div></p>\
<p ><div class="conver_name" style="width:6.5em">Mary:</div><div class="conver_cont" style="width: 17em">What grade are you in?</div></p>\
      <p ><div class="conver_name" style="width:6.5em">A new student:</div><div class="conver_cont" style="width: 17em">_____<span id="cloze008_gap_3">(n)</span>_____.</div></p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze008_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">What am I</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">What are you</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">What do you do</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">What\'s your name</div><br\>\
        </div>\
        <div id="cloze008_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">No. I\'m old.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Yes, you\'re late</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Yes. I\'ve just moved here</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">No. You\'re here for a while</div><br\>\
        </div>\
        <div id="cloze008_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">I\'m in the sixth grade</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">I\'m behind the school</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">I\'m on the first floor</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">I\'m at school</div><br\>\
        </div>\
    </div>\
</div>';

var cloze008 = {name:"cloze008", dispType:"html", html:cloze008_html, gaps:3, qs:3, a1:4, a2:3, a3:1};


var cloze009_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p ><div class="conver_name">Jim:</div><div class="conver_cont">_____<span id="cloze009_gap_1">(n)</span>_____?</div></p>\
      <p ><div class="conver_name">Judy:</div><div class="conver_cont">I\'m making a can telephone. Would you like to play with it?</div></p>\
      <p ><div class="conver_name">Jim:</div><div class="conver_cont">Yes, let\'s play. ... I can\'t hear anything.</div></p>\
      <p ><div class="conver_name">Judy:</div><div class="conver_cont">_____<span id="cloze009_gap_2">(n)</span>_____. OK. It can work now.</div></p>\
      <p ><div class="conver_name">Jim:</div><div class="conver_cont">Hello! Hello! It really works.</div></p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze009_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Judy, can you make a can telephone</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Judy, can you buy a can telephone</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Judy, what can I do for you</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Judy, what are you doing</div><br\>\
        </div>\
        <div id="cloze009_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">It\'s a toy</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Don\'t speak</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Let\'s try again</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">It\'s not good</div><br\>\
        </div>\
    </div>\
</div>';

var cloze009 = {name:"cloze009", dispType:"html", html:cloze009_html, gaps:2, qs:2, a1:4, a2:3};


var cloze010_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p ><div class="conver_name" style="width:5em">Tourist:</div><div class="conver_cont" style="width:18.5em">Excuse me. _____<span id="cloze010_gap_1">(n)</span>_____</div></p>\
      <p ><div class="conver_name" style="width:5em">Policeman:</div><div class="conver_cont" style="width:18.5em">You just walk up the street. It\'s on your left.</div></p>\
      <p ><div class="conver_name" style="width:5em">Tourist:</div><div class="conver_cont" style="width:18.5em">Thank you so much.</div></p>\
      <p ><div class="conver_name" style="width:5em">Policeman:</div><div class="conver_cont" style="width:18.5em">_____<span id="cloze010_gap_2">(n)</span>_____</div></p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze010_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">I like the National Museum.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">I want to see the National Museum.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Do you know the National Museum?</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">How can I get to the National Museum?</div><br\>\
        </div>\
        <div id="cloze010_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">You\'re welcome.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">I don\'t mind.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">That\'s right.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Great!</div><br\>\
        </div>\
    </div>\
</div>';

var cloze010 = {name:"cloze010", dispType:"html", html:cloze010_html, gaps:2, qs:2, a1:4, a2:1};


var cloze011_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
    <img style="margin-left:5em;width:12em; margin-bottom:1em" src="images/vocab/onet_include/cloze011.jpg" \>\
    <p style="text-indent:2em">This is the way to use a computer. ____<span id="cloze011_gap_1">(n)</span>____, \
      you start the computer. Then you choose the program ____<span id="cloze011_gap_2">(n)</span>____ use it. \
      When you finish, close the program. ____<span id="cloze011_gap_3">(n)</span>____ shut down the computer \
      if you do not use it any more. ____<span id="cloze011_gap_4">(n)</span>____ it easy?<\p><br\>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze011_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">To begin</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Once</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">First</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Secondly</div><br\>\
        </div>\
        <div id="cloze011_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">or</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">and</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">as</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">over</div><br\>\
        </div>\
        <div id="cloze011_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">At the end</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Finally</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">At last</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">To</div><br\>\
        </div>\
        <div id="cloze011_ans_4" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Won\'t</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Can\'t</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Isn\'t</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Hasn\'t</div><br\>\
        </div>\
    </div>\
</div>';

var cloze011 = {name:"cloze011", dispType:"html", html:cloze011_html, gaps:4, qs:4, a1:3, a2:2, a3:2, a4:3};


var cloze012_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-indent:2em">It\'s a nice spring day. Susan is taking her dog for a walk in the park.\
        The birds are singing and the leaves are ____<span id="cloze012_gap_1">(n)</span>____ in the wind. \
        She sees some pieces of paper blowing around ____<span id="cloze012_gap_2">(n)</span>____ the street \
        and her dog ____<span id="cloze012_gap_3">(n)</span>____ them and tries to catch them.<\p><br\>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze012_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">blowing</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">hitting</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">touching</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">smelling</div><br\>\
        </div>\
        <div id="cloze012_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">on</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">with</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">between</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">to</div><br\>\
        </div>\
        <div id="cloze012_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">runs away</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">runs off</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">runs after</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">runs out</div><br\>\
        </div>\
    </div>\
</div>';

var cloze012 = {name:"cloze012", dispType:"html", html:cloze012_html, gaps:3, qs:3, a1:1, a2:1, a3:3};


var cloze013_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-indent:2em">\
            Danai gets up at half past seven. He washes his face, has breakfast and walks to school in thirty minutes. He has lunch at a quarter past twelve. \
            At a quarter to one, he plays domino.\
        <\p><br\>\
        <div style="width: 15em; border: 0.1em solid black; padding:0.5em; margin:1em; margin-left: 5em; text-align:center">\
            Note\
            <p style="text-align:left; margin-bottom:0.5em;">25 January <br\>Monday<br\>08:00:&nbsp;&nbsp;&nbsp;____<span id="cloze013_gap_1">(n)</span>____<br\>\
            12:45:&nbsp;&nbsp;&nbsp;____<span id="cloze013_gap_2">(n)</span>____ </p>\
        </div>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze013_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Arrive at school.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Get dressed.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Get up.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Eat.</div><br\>\
        </div>\
        <div id="cloze013_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Lunch time</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Games</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Back home</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Class over</div><br\>\
        </div>\
    </div>\
</div>';

var cloze013 = {name:"cloze013", dispType:"html", html:cloze013_html, gaps:2, qs:2, a1:1, a2:2};


var cloze014_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Sak is writing a letter to introduce himself to a penfriend.</b></p>\
        <div style="border: 0.1em solid black; padding:1em; margin:1em">\
            <p style="text-align:right">234 Sukhumwit Rd. Bangkok</p>\
            <p style="text-align:center">20 November 2015</p>\
            <p style= margin-bottom:1em;">Dear Anna,</p>\
            <p style="margin-bottom:1em; text-indent:3em">I would like to be your friend. I am Thai. ____<span id="cloze014_gap_1">(n)</span>____. \
            I am in Prathom 6. I like English. ____<span id="cloze014_gap_2">(n)</span>____. What do you do in your free time?</p>\
            <p style="margin-bottom:1em; text-indent:3em">I\'m waiting to hear from you.</p>\
             <p style="text-align:center">____<span id="cloze014_gap_3">(n)</span>____,</p>\
              <p style="text-align:center">Sak</p>\
            </div>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze014_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">There are four people</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Suda is Manop\'s friend</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">They like English</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">I am twelve years old</div><br\>\
        </div>\
        <div id="cloze014_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">It is a language</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">You are a penfriend</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Tom is in Prathom 6</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">My hobby is collecting stamps</div><br\>\
        </div>\
        <div id="cloze014_ans_3" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Thank you</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Best wishes</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">See you soon</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">God bless you</div><br\>\
        </div>\
    </div>\
</div>';

var cloze014 = {name:"cloze014", dispType:"html", html:cloze014_html, gaps:3, qs:3, a1:4, a2:4, a3:2};


var cloze015_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p style="margin-bottom:1em">Situation: John is buying a book.</p>\
      <p ><div style="float:left;width:4em; margin-left:2em; margin-right:1em">Salesgirl:</div>This book is eighty baht.</p>\
      <p ><div style="float:left;width:4em; margin-left:2em; margin-right:1em">John:</div>O.K. _____<span id="cloze015_gap_1">(n)</span>_____</p>\
      <p ><div style="float:left;width:4em; margin-left:2em; margin-right:1em">Salesgirl:</div>_____<span id="cloze015_gap_2">(n)</span>_____</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze015_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">This is my money.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Here you are.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">There it is.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">It is.</div><br\>\
        </div>\
        <div id="cloze015_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">How nice.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">All right.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Thank you.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Good.</div><br\>\
        </div>\
    </div>\
</div>';

var cloze015 = {name:"cloze015", dispType:"html", html:cloze015_html, gaps:2, qs:2, a1:2, a2:3};


var cloze016_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p style="margin-bottom:1em">Situation: Jane sees Don and talks to him.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Jane:</div>How are you, Don?</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Don:</div>Fine. Thanks. _____<span id="cloze016_gap_1">(n)</span>_____</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Jane:</div>_____<span id="cloze016_gap_2">(n)</span>_____</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze016_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">What do you do?</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">What are you doing?</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">And you?</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Are you?</div><br\>\
        </div>\
        <div id="cloze016_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Very well, thank you.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">That\'s good.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">It is very nice.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">I\'m sorry to hear that.</div><br\>\
        </div>\
    </div>\
</div>';

var cloze016 = {name:"cloze016", dispType:"html", html:cloze016_html, gaps:2, qs:2, a1:3, a2:1};


var cloze017_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p style="margin-bottom:1em">Situation: Mary is asking Jum to go swimming with her.</p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">Mary:</div>Jum, I\'m going for a swim tomorrow. ____<span id="cloze017_gap_1">(n)</span>____</p>\
      <p ><div style="float:left;width:2em; margin-left:2em; margin-right:1em">Jum:</div>____<span id="cloze017_gap_2">(n)</span>____ I\'ll see you at the pool then.</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze017_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Would you like to come?</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Can you swim?</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">What do you want to do?</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Where do you like to swim?</div><br\>\
        </div>\
        <div id="cloze017_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">I don\'t like swimming.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Swimming is difficult.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">I\'d love to.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Oh no, I can\'t swim.</div><br\>\
        </div>\
    </div>\
</div>';

var cloze017 = {name:"cloze017", dispType:"html", html:cloze017_html, gaps:2, qs:2, a1:1, a2:3};


var cloze018_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p style="margin-bottom:1em">Situation: Fred and Jill are having lunch together.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Jill:</div>Oh, this soup needs salt. Fred, ____<span id="cloze018_gap_1">(n)</span>____</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Fred:</div>____<span id="cloze018_gap_2">(n)</span>____</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Jill:</div>Thank you.</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze018_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">does your soup taste good?</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">do you like soup?</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">will you pass the salt please?</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">do you want more salt?</div><br\>\
        </div>\
        <div id="cloze018_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Yes, I like soup.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Certainly. Here it is.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">I like some more salt too.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Yes, there is some salt here.</div><br\>\
        </div>\
    </div>\
</div>';

var cloze018 = {name:"cloze018", dispType:"html", html:cloze018_html, gaps:2, qs:2, a1:3, a2:2};


var cloze019_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p style="margin-bottom:1em">Situation: Nisa offers Betty some cake.</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Nisa:</div>My mother made a cake for me. _____<span id="cloze019_gap_1">(n)</span>_____</p>\
      <p ><div style="float:left;width:3em; margin-left:2em; margin-right:1em">Betty:</div>_____<span id="cloze019_gap_2">(n)</span>_____ It looks very good.</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze019_ans_1" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Do you eat cake?</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Have you ever eaten this?</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Can you eat cake?</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Would you like some?</div><br\>\
        </div>\
        <div id="cloze019_ans_2" class="cloze_item_num">\
            nn\
        </div>\
         <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">I don\'t like that.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Certainly I will.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Sure, it is.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Yes, please.</div><br\>\
        </div>\
    </div>\
</div>';

var cloze019 = {name:"cloze019", dispType:"html", html:cloze019_html, gaps:2, qs:2, a1:4, a2:4};


var cloze020_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p style="text-indent:2em; margin-bottom:1em">Nut and his friend are driving downtown. Nut is driving very ___<span id="cloze020_gap_1">(n)</span>___.\
      A police car is behind them. "You should stop, Nut," says his friend. The ___<span id="cloze020_gap_2">(n)</span>___ on the police car is flashing.</p>\
      <p style="text-indent:2em; margin-bottom:1em">When Nut stops, the policeman tells him, "The ___<span id="cloze020_gap_3">(n)</span>___ in the city is\
      30 kilometers per hour. You should ___<span id="cloze020_gap_4">(n)</span>___," says the policeman while looking at Nut\'s  ___<span id="cloze020_gap_5">(n)</span>___.\
      "I\'m giving you a ticket. You shouldn\'t drive so fast."</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div id="cloze020_ans_1" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">loudly</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">slowly</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">quickly</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">happily</div><br\>\
        </div>\
        <div id="cloze020_ans_2" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">sign</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">light</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">lamp</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">roof</div><br\>\
        </div>\
        <div id="cloze020_ans_3" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">speed rate</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">time measure</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">time limit</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">speed limit</div><br\>\
        </div>\
        <div id="cloze020_ans_4" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">speed up</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">stand up</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">slow down</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">sit down</div><br\>\
        </div>\
        <div id="cloze020_ans_5" class="cloze_item_num">\
            nn\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">motorcycle</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">photograph</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">student card</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">driving license</div><br\>\
        </div>\
    </div>\
</div>';

var cloze020 = {name:"cloze020", dispType:"html", html:cloze020_html, gaps:5, qs:5, a1:3, a2:2, a3:4, a4:3, a5:4};


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


var pass008_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left"><b>Read the passage and fill in the blanks with the appropriate choices for questions <span id="pass008_gap_1">(n)</span> to\
         <span id="pass008_gap_2" style="display:none">(n)</span> <span id="pass008_gap_3" style="display:none">(n)</span><span id="pass008_gap_4" style="display:none">(n)</span>\
         <span id="pass008_gap_5">(n)</span>.</b></p><br\>\
        <p style="text-indent:2em">May is a time of fun for children, parents, and teachers. Moms and Dads take children to the store to buy school supplies. They buy pencils, paper,\
         crayons, and glue. There will be hard work to do at school, but it will be fun too. The lazy days of summer are over. The busy days of school work and new friends are just beginning!\
          Welcome to school!</p>\
        <p style="margin-top:2em; font-size:75%">Adapted from http://www.manatee.k12.fl.us/sites/elementary/palmasoia/Fr1M15.htm</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass008_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>The main idea of the paragraph is __________________\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Moms and Dads are happy.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">people are lazy in May.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">it is fun at school in May.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">new friends are coming.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass008_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Moms and Dads take their children to the store to _________\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">buy food</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">have fun</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">buy school supplies</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">buy clothes </div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass008_ans_3" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>The children need _________ for school.\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">crayons</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">cats</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">pets</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">cars</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass008_ans_4" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>"They" in line 3 means ______________.\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">pencils and crayons</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">moms and dads</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">teachers</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">children</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass008_ans_5" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>The school work is __________________.\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">hard but fun</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">easy and fun</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">hard and tired</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">not hard but tired</div><br\>\
        </div>\
    </div>\
</div>';

var pass008 = {name:"pass008", dispType:"html", html:pass008_html, gaps:5, qs:5, a1:3, a2:3, a3:1, a4:4, a5:1};


var pass009_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left"><b>Look at the graph and answer questions <span id="pass009_gap_1">(n)</span> to\
         <span id="pass009_gap_2" style="display:none">(n)</span> <span id="pass009_gap_3" style="display:none">(n)</span><span id="pass009_gap_4" style="display:none">(n)</span>\
         <span id="pass009_gap_5">(n)</span>.</b></p><br\>\
         <img style="margin-left:1em;width:25em; margin-top:1em" src="images/vocab/onet_include/pass009.jpg" \>\
        <p style="margin-top:2em; text-align:right; font-size:75%">Adapted from http://www.mathgoodies.com</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass009_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What is the title of this graph?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Degrees in Fahrenheit.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Temperatures in Bangkok.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Low Temperature.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">High Temperature.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass009_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>How many days are there in the graph?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">5 days</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">6 days</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">7 days</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">8 days</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass009_ans_3" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What is the lowest temperature?.\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">43˚ F</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">53˚ F</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">50˚ F</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">57˚ F</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass009_ans_4" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What is the highest temperature?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">50˚ F</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">58˚ F</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">59˚ F</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">67˚ F</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass009_ans_5" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>How many degrees is day 6 higher than day 1?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">10˚ F</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">15˚ F</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">24˚ F</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">30˚ F</div><br\>\
        </div>\
    </div>\
</div>';

var pass009 = {name:"pass009", dispType:"html", html:pass009_html, gaps:5, qs:5, a1:2, a2:2, a3:1, a4:4, a5:3};


var pass010_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left"><b>Look at the graph and answer questions <span id="pass010_gap_1">(n)</span> and \
        <span id="pass010_gap_2">(n)</span>.</b></p><br\>\
        <img style="width: 100%" src="images/vocab/onet_include/pass010.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass010_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Altogether, how many kilos of oranges did we sell?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">150</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">190</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">260</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">320</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass010_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>On what day did we sell the fewest oranges?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Monday</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Tuesday</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Wednesday</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Thursday</div><br\>\
        </div>\
    </div>\
</div>';

var pass010 = {name:"pass010", dispType:"html", html:pass010_html, gaps:2, qs:2, a1:4, a2:3};


var pass011_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Read the poem.</b></p><br\>\
      <div style="width: 16em; border: 0.1em solid black; padding:0.5em; margin:1em; margin-left: 5em; text-align:left">\
            <p style="margin-bottom:0.2em;">It\'s time of joy and cheer.</p>\
            <p style="margin-bottom:0.2em;">It\'s time to visit our parents.</p>\
            <p style="margin-bottom:0.2em;">It\'s time for Santa and _____<span id="pass011_gap_1">(n)</span>_____.<span id="pass011_gap_2" style="display:none">(n)</span></p>\
      </div>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass011_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What is the word that rhymes?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">bread</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">turkeys</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">reindeer</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">pumpkins</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass011_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What festival is the poem about?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Easter</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Christmas</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Halloween</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Thanksgiving</div><br\>\
        </div>\
    </div>\
</div>';

var pass011 = {name:"pass011", dispType:"html", html:pass011_html, gaps:2, qs:2, a1:3, a2:2};


var pass012_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Look at the picture below.</b></p><br\>\
      <img style="margin-left:4em;width:20em" src="images/vocab/onet_include/pass012.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass012_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What is the boy doing?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">He\'s sitting on the bed.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">He\'s writing in his book.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">He\'s looking at his bed.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">He\'s reading a book.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass012_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Where is the boy?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">He\'s at school.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">He\'s in a classrooom.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">He\'s in his bedroom.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">He\'s in his bathroom.</div><br\>\
        </div>\
    </div>\
</div>';

var pass012 = {name:"pass012", dispType:"html", html:pass012_html, gaps:0, qs:2, a1:4, a2:3};


var pass013_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Look at the picture below.</b></p><br\>\
      <img style="margin-left:4em;width:16em" src="images/vocab/onet_include/pass013.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass013_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What does this man do?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">He\'s a man.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">He\'s standing.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">He\'s wearing a hat.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">He\'s a policeman.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass013_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Where does the man work?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">He walks in the street.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">He works at a school.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">He walks to the post office.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">He works at a police station.</div><br\>\
        </div>\
    </div>\
</div>';

var pass013 = {name:"pass013", dispType:"html", html:pass013_html, gaps:0, qs:2, a1:4, a2:4};


var pass014_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Look at the picture below.</b></p><br\>\
      <img style="margin-left:4em;width:12em" src="images/vocab/onet_include/pass014.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass014_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What is the matter with the girl?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">She hurt her head.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">She hurt her hand.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">She has a cold.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">She has a toothache.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass014_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What should she do?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">She should have some ice-cream.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">She should go to see her teacher.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">She should see a dentist.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">She should go swimming.</div><br\>\
        </div>\
    </div>\
</div>';

var pass014 = {name:"pass014", dispType:"html", html:pass014_html, gaps:0, qs:2, a1:4, a2:3};


var pass015_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Look at the picture below.</b></p><br\>\
      <img style="margin-left:4em;width:16em" src="images/vocab/onet_include/pass015.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass015_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What is the boy doing?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">He is talking to the bus driver.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">He is calling a taxi.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">He is looking at a truck.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">He is waiting for the bus.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass015_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Where is the boy?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">He is at the bus stop.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">He is behind the bus.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">He is in a train station.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">He is on a bus.</div><br\>\
        </div>\
    </div>\
</div>';

var pass015 = {name:"pass015", dispType:"html", html:pass015_html, gaps:0, qs:2, a1:4, a2:1};


var pass016_html ='\
<div style="width:100%; height:100%">\
    <div style="float:left; height: 100%; width:49%; overflow-y:auto;">\
      <p id="top" style="text-align:left"><b>Look at the picture below.</b></p><br\>\
      <img style="margin-left:4em;width:18em" src="images/vocab/onet_include/pass016.jpg" \>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass016_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Which sentence is true?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Jane is the shortest of the three.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Betty is shorter than Jane and Tina.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Tina is shorter than Jane.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Jane is shorter than Betty.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass016_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Which sentence is true?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Jane is taller than tina.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Jane is the tallest girl.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Betty is the tallest of all three girls.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Tina is taller than Betty and Jane.</div><br\>\
        </div>\
    </div>\
</div>';

var pass016 = {name:"pass016", dispType:"html", html:pass016_html, gaps:0, qs:2, a1:2, a2:4};


var pass017_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left; margin-bottom:1em"><b>Read the sentence and choose the correct answer to each question.</b>\
        <p style="text-indent:2em">This evening, John and Kathy are going to eat at a Chinese restaurant, and after that they will go to the cinema.</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass017_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Where will they have dinner?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">They will have dinner at home.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">They will have dinner at a restaurant.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">They will have dinner at the cinema.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">They are going to China for dinner.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass017_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What will they do after that?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">They will go home.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">They will watch a film.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">They will eat Chinese food.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">They will read at home.</div><br\>\
        </div>\
    </div>\
</div>';

var pass017 = {name:"pass017", dispType:"html", html:pass017_html, gaps:0, qs:2, a1:2, a2:2};


var pass018_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left; margin-bottom:1em"><b>Read the passage and choose the correct answer to each question.</b>\
        <p style="text-indent:2em">One day Fred went swimming in a canal. He dove to the bottom of the canal and came up with a big wooden box.\
        He opened it and found a jacket, two pairs of trousers, five shirts and three pairs of shoes. He put his hand into the right pocket of the\
        jacket and took out a plastic bag full of coins. In the pocket of one pair of trousers he found a pocket knife. In a pocket of a shirt he found\
        a pair of glasses. He was very happy and took all the things home.</p>\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass018_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Where did Fred get the box?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">He found it while he was swimming.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">He got the box open.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">Someone left it at his house.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">It was floating on the canal.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass018_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>How many shirts did he find?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">1</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">2</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">3</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">5</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass018_ans_3" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What did he do with those things?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">He threw them into the canal.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">He put them back in the box.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">He took them home.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">He left them near the canal.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass018_ans_4" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What was in the pocket of one pair of trousers?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">a knife</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">a plastic bag</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">coins</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">reading glasses</div><br\>\
        </div>\
    </div>\
</div>';

var pass018 = {name:"pass018", dispType:"html", html:pass018_html, gaps:0, qs:4, a1:1, a2:4, a3:3, a4:1};


var pass019_html ='\
<div style="width:100%; height:100%">\
    <div id="top" style="float:left; height: 100%; width:49%; overflow-y:auto;">\
        <p style="text-align:left; margin-bottom:1em"><b>Read the passage and choose the correct answer to each question.</b>\
        <p style="text-indent:2em">It is Maggies birthday. Her mother bought a big cake for her from a bakery near her house. There are twelve candles on it.\
        She is not twelve years old yet. But the baker put one more candle on the cake for good luck. Her mother bought 15 balloons and put them around the room.\
        She gave her a nice bicycle for her birthday.</p>\
        <p style="text-indent:2em">Maggie invited a lot of friends to her party: Joy, Jane, Bob, Mary, Tom, Peter and John. Joy and Jane gave her a box of water colours,\
        Bob and Mary a beautiful basket, Tom a book, and Peter and John a nice music box. She likes all the gifts very much.\
    </div>\
    <div style="float:right; width: 50%; height:100%; border-left:0.1em solid; overflow-y:auto">\
        <div class="pass_item_num">\
            <span  id="pass019_ans_1" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>How old is Maggie?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">She is eleven years old.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">She is twelve years old.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">She is thirteen years old.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">She is fifteen years old.</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass019_ans_2" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>How many boys and girls came to the party?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">3 boys and 4 girls</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">4 boys and 3 girls</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">3 boys and 3 girls</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">4 boys and 4 girls</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass019_ans_3" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>What did her mother give her?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">a basket</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">a new bicycle</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">a music box</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">a box of water colours</div><br\>\
        </div>\
        <div class="pass_item_num">\
            <span  id="pass019_ans_4" style="padding-left: 0.1em; margin-right:0.3em">nn.</span>Where did the cake come from?\
        </div>\
        <div class="cloze_item_num">\
            &nbsp;\
        </div>\
        <div class="cloze_choice_set">\
            <div class="cloze_choice_num">1.</div><div class="cloze_choice_cont">Her mother made it.</div><br\>\
            <div class="cloze_choice_num">2.</div><div class="cloze_choice_cont">Her friends bought it.</div><br\>\
            <div class="cloze_choice_num">3.</div><div class="cloze_choice_cont">It came from a bakery.</div><br\>\
            <div class="cloze_choice_num">4.</div><div class="cloze_choice_cont">Maggie baked it.</div><br\>\
        </div>\
    </div>\
</div>';

var pass019 = {name:"pass019", dispType:"html", html:pass019_html, gaps:0, qs:4, a1:1, a2:2, a3:2, a4:3};



//End of Passages

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

function SetOnetFullRand(){
    if (onet_test.length!=40){
        setupONET(40);
    }
    setCountDown(50);
    onet_test=new Array();
    curr_topic_title="onet_full_2";
    setVocArrays();
    shuffle(vocArray);

    var remaining=39;
    var k=0;

    while (remaining>24) {
        for (var i=remaining;i>remaining-vocArray[k].qs;i--){
          onet_test[i]=vocArray[k];
        }
        remaining=remaining-vocArray[k].qs;
        while (k<vocArray.length-1){

            k++;

            if (((remaining)-(vocArray[k].qs))>24){
                break;
            }
        }
        if (k==vocArray.length-1) {
            break;
        }
    }

    curr_topic_title="onet_full";
    setVocArrays();
    shuffle(vocArray);

    while (remaining >= 0) {
        if (vocArray[0].qs <= remaining || vocArray[0].qs==1) {
            for (var m=vocArray[0].qs;m>0;m--){
                onet_test[remaining]=vocArray[0];
                remaining--;
            }
            vocArray.splice(0,1);
        }
        else {
            vocArray.splice(0,1);
        }
    }
    document.getElementById("b_"+onet_test_set).src="images/buttons/no_button.png";
    onet_test_set="onet_rand";
    document.getElementById("b_"+onet_test_set).src="images/buttons/yes_button.png";
    
}


function SetOnetFull49(){
    if (onet_test.length!=40){
        setupONET(40);
    }
    onet_test=new Array(single074,single075,single076,single077,single078,single079,single080,single081,single082,single083,single084,single085,cloze008,cloze008,cloze008,single086
                        ,cloze009,cloze009,cloze010,cloze010,pass010,pass010,single074,single074,cloze011,cloze011,cloze011,cloze011,cloze012,cloze012,cloze012,cloze013,cloze013
                        ,single087,single088,single089,single090,cloze014,cloze014,cloze014);
    document.getElementById("b_"+onet_test_set).src="images/buttons/no_button.png";
    onet_test_set="onet_49";
    document.getElementById("b_"+onet_test_set).src="images/buttons/yes_button.png";
}


function SetOnetFull51(){
    if (onet_test.length!=40){
        setupONET(40);
    }
    onet_test=new Array(single035,single036,single037,single038,single039,single040,single041,single042,single043,single044,pass008,pass008,pass008,pass008,pass008
                        ,pass001,pass001,pass001,pass001,pass001,pass009,pass009,pass009,pass009,pass009,cloze001,cloze001,cloze001,cloze001,cloze001,cloze002,cloze002,cloze002
                        ,cloze002,cloze002,cloze002,cloze002,cloze002,cloze002,cloze002);
    document.getElementById("b_"+onet_test_set).src="images/buttons/no_button.png";
    onet_test_set="onet_51";
    document.getElementById("b_"+onet_test_set).src="images/buttons/yes_button.png";
}


function SetOnetFull53(){
    if (onet_test.length!=35){
        setupONET(35);
    }
    onet_test=new Array(pass012,pass012,pass013,pass013,pass014,pass014,pass015,pass015,pass016,pass016,cloze015,cloze015,cloze016,cloze016,cloze017,cloze017,cloze018,cloze018
                        ,cloze019,cloze019,cloze020,cloze020,cloze020,cloze020,cloze020,pass017,pass017,pass018,pass018,pass018,pass018,pass019,pass019,pass019,pass019);
    document.getElementById("b_"+onet_test_set).src="images/buttons/no_button.png";
    onet_test_set="onet_53";
    document.getElementById("b_"+onet_test_set).src="images/buttons/yes_button.png";
}


function SetOnetFull55(){
    if (onet_test.length!=40){
        setupONET(40);
    }
    onet_test=new Array(single064,single065,single091,single018,single019,single020,single021,single022,single023,single024,single025,single026,single027,single028,single029
                        ,single030,single031,single032,single033,single034,cloze005,cloze005,pass006,pass006,pass007,pass007,pass005,pass005,pass005,pass005,cloze006,cloze006
                        ,cloze006,cloze006,cloze007,cloze007,cloze007,pass003,pass003,pass003);
    document.getElementById("b_"+onet_test_set).src="images/buttons/no_button.png";
    onet_test_set="onet_55";
    document.getElementById("b_"+onet_test_set).src="images/buttons/yes_button.png";
}


function SetOnetFull58(){
    if (onet_test.length!=40){
        setupONET(40);
    }
    onet_test=new Array(single045,single046,pass011,pass011,single048,single049,single002,single003,single001,single004,single005,single006,single007,single008,single009,single010,
                        single011,single012,single013,single014,single015,single016,single017,pass002,pass002,pass003,pass003,pass003,pass004,pass004,pass004,pass004,cloze003,cloze003,
                        cloze003,cloze003,cloze004,cloze004,cloze004,cloze004);
    document.getElementById("b_"+onet_test_set).src="images/buttons/no_button.png";
    onet_test_set="onet_58";
    document.getElementById("b_"+onet_test_set).src="images/buttons/yes_button.png";
}


function setOnetVocab(){

    vocArray.length=0;
    vocArray= new Array ({txt: "a lot of", src: "images/vocab/grammar/a_lot_of.jpg"},
                         {txt: "accident", src: "images/vocab/socialising/accident.jpg"},
                         {txt: "anthem", src: "images/vocab/socialising/anthem.jpg"},
                         {txt: "April", src: "images/vocab/time/April.jpg"},
                         {txt: "art", src: "images/vocab/school/Art.jpg"},
                         {txt: "artist", src: "images/vocab/occupations/artist.jpg"},
                         {txt: "ask", src: "images/vocab/actions/ask.jpg"},
                         {txt: ["be","am","are","is"], src: "images/vocab/grammar/to.be.jpg"},
                         {txt: "beautiful", src: "images/vocab/describing/beautiful.jpg"},
                         {txt: "bitter", src: "images/vocab/describing/bitter.jpg"},
                         {txt: "blank", src: "images/vocab/describing/blank.jpg"},
                         {txt: "blood", src: "images/vocab/body/blood.jpg"},
                         {txt: "blue", src: "images/vocab/describing/blue.jpg"},
                         {txt: "bored", src: "images/vocab/describing/bored.jpg"},
                         {txt: "bread", src: "images/vocab/food/bread.jpg"},
                         {txt: "breakfast", src: "images/vocab/food/breakfast.jpg"},
                         {txt: "bunny", src: "images/vocab/animals/bunny.jpg"},
                         {txt: "bike", src: "images/vocab/places_and_transport/bike.jpg"},
                         {txt: "beach", src: "images/vocab/places_and_transport/beach.jpg"},
                         {txt: "cabbage", src: "images/vocab/food/cabbage.jpg"},
                         {txt: "Cambodia", src: "images/vocab/places_and_transport/Cambodia.jpg"},
                         {txt: "Congratulations", src: "images/vocab/socialising/congratulations.gif"},
                         {txt: "consonant", src: "images/vocab/grammar/consonant.jpg"},
                         {txt: "choose", src: "images/vocab/actions/choose.jpg"},
                         {txt: "count down", src: "images/vocab/socialising/count_down.gif"},
                         {txt: "country", src: "images/vocab/socialising/country.jpg"},
                         {txt: "cross walk", src: "images/vocab/places_and_transport/cross_walk.jpg"},
                         {txt: "cucumber", src: "images/vocab/food/cucumber.jpg"},
                         {txt: "curly hair", src: "images/vocab/describing/curly_hair.jpg"},
                         {txt: "December", src: "images/vocab/time/December.jpg"},
                         {txt: "dictionary", src: "images/vocab/school/dictionary.jpg"},
                         {txt: ["do","does"], src: "images/vocab/grammar/to.do.jpg"},
                         {txt: "English", src: "images/vocab/school/English.jpg"},
                         {txt: "face", src: "images/vocab/body/face.jpg"},
                         {txt: "fishing", src: "images/vocab/free_time/go_fishing.jpg"},
                         {txt: "flag", src: "images/vocab/beach/flag.jpg"},
                         {txt: "flower", src: "images/vocab/home/flower.jpg"},
                         {txt: "floor", src: "images/vocab/home/floor.jpg"},
                         {txt: "forget", src: "images/vocab/actions/forget.jpg"},
                         {txt: "give", src: "images/vocab/actions/give.jpg"},
                         {txt: "hair", src: "images/vocab/body/hair.jpg"},
                         {txt: ["has","have"], src: "images/vocab/grammar/to.have.jpg"},
                         {txt: "help", src: "images/vocab/actions/help.jpg"},
                         {txt: "homework", src: "images/vocab/school/homework.jpg"},
                         {txt: "how many", src: "images/vocab/grammar/how_many.jpg"},
                         {txt: "how much", src: "images/vocab/grammar/how_much.jpg"},
                         {txt: "January", src: "images/vocab/time/January.jpg"},
                         {txt: "jam", src: "images/vocab/food/jam.jpg"},
                         {txt: "jump", src: "images/vocab/actions/jump.jpg"},
                         {txt: "June", src: "images/vocab/time/June.jpg"},
                         {txt: "justice", src: "images/vocab/socialising/justice.jpg"},
                         {txt: "kick", src: "images/vocab/actions/kick.jpg"},
                         {txt: "kind", src: "images/vocab/describing/kind.jpg"},
                         {txt: "kitchen", src: "images/vocab/home/kitchen.jpg"},
                         {txt: "know", src: "images/vocab/actions/know.jpg"},
                         {txt: "lady", src: "images/vocab/people/lady.jpg"},
                         {txt: "lake", src: "images/vocab/places_and_transport/lake.jpg"},
                         {txt: "less", src: "images/vocab/describing/less.jpg"},
                         {txt: "library", src: "images/vocab/school/library.jpg"},
                         {txt: "life", src: "images/vocab/socialising/life.jpg"},
                         {txt: "line", src: "images/vocab/grammar/line.jpg"},
                         {txt: "listen", src: "images/vocab/actions/listen.jpg"},
                         {txt: "look out!", src: "images/vocab/socialising/look_out.jpg"},
                         {txt: "lunch", src: "images/vocab/food/lunch.jpg"},
                         {txt: "make", src: "images/vocab/actions/make.jpg"},
                         {txt: "Malaysia", src: "images/vocab/places_and_transport/Malaysia.jpg"},
                         {txt: "math", src: "images/vocab/school/Math.jpg"},
                         {txt: "May", src: "images/vocab/time/May.jpg"},
                         {txt: "more", src: "images/vocab/describing/more.jpg"},
                         {txt: "monk", src: "images/vocab/occupations/monk.jpg"},
                         {txt: "music", src: "images/vocab/school/Music.jpg"},
                         {txt: "near", src: "images/vocab/grammar/near.jpg"},
                         {txt: "never mind", src: "images/vocab/socialising/Never_mind.jpg"},
                         {txt: "nice", src: "images/vocab/dot_and_Ben/nice.jpg"},
                         {txt: "of", src: "images/vocab/grammar/of.jpg"},
                         {txt: "on the left of", src: "images/vocab/grammar/on_the_left_of.jpg"},
                         {txt: "on the right of", src: "images/vocab/grammar/on_the_right_of.jpg"},
                         {txt: "onion", src: "images/vocab/food/onion.jpg"},
                         {txt: "paper", src: "images/vocab/school/paper.jpg"},
                         {txt: "picnic", src: "images/vocab/free_time/go_for_a_picnic.jpg"},
                         {txt: "picture", src: "images/vocab/home/picture.jpg"},
                         {txt: "play games", src: "images/vocab/free_time/play_games.jpg"},
                         {txt: "playground", src: "images/vocab/school/playground.jpg"},
                         {txt: "plane", src: "images/vocab/places_and_transport/plane.jpg"},
                         {txt: "railway", src: "images/vocab/places_and_transport/train.jpg"},
                         {txt: "read", src: "images/vocab/actions/read.jpg"},
                         {txt: "refrigerator", src: "images/vocab/home/refrigerator.jpg"},
                         {txt: "ride", src: "images/vocab/actions/ride.jpg"},
                         {txt: "road", src: "images/vocab/places_and_transport/road.jpg"},
                         {txt: "say", src: "images/vocab/actions/say.jpg"},
                         {txt: "science", src: "images/vocab/school/Science.jpg"},
                         {txt: "scissors", src: "images/vocab/school/scissors.jpg"},
                         {txt: "student", src: "images/vocab/occupations/student.jpg"},
                         {txt: "what", src: "images/vocab/grammar/what.jpg"},
                         {txt: "when", src: "images/vocab/grammar/when.jpg"},
                         {txt: "where", src: "images/vocab/grammar/where.jpg"},
                         {txt: "which", src: "images/vocab/grammar/which.jpg"},
                         {txt: "who", src: "images/vocab/grammar/who.jpg"},
                         {txt: "why", src: "images/vocab/grammar/why.jpg"},
                         {txt: "your", src: "images/vocab/grammar/your.jpg"}
                        );
}



var qa_when= {when:["April", "at night", "at noon", "August", "Christmas", "December", "February", "Friday", "in the afternoon",
                "in the evening", "in the morning", "January", "July", "June", "March", "May", "Monday", "November", "October", "Saturday",
                "September", "Sunday", "Thursday", "tomorrow", "today", "Tuesday", "Wednesday", "yesterday", "on the weekend"]};
var qa_where= {where:["It's next to the temple.","It's in front of the school.","It's behind the bus station.","It's opposite the coffee shop.",
                 "go straight", "turn left", "turn right", "Just here, please!", "under the table", "It's in my pocket."]};
var qa_what_time= {"what time":["7:15", "midnight", "lunch time", "half past two", "10:15 a.m.", "three o'clock"]};
var qa_who= {who:["David", "Miss Jones", "my brother", "the teacher", "Khun Samit", "Khru Chanamon", "Mr. Thompson", "you", "him", "me", "us", "her"]};
var qa_why= {why:["because I like it","because it's boring", "because it's difficult", "because it's dangerous", "because it's interesting",
                    "because it's Friday", "because he's my uncle", "because it was very dark", "because it's easy for me"]};
var qa_how={how:["by bus", "I'm OK", "310", "glad", "angry", "sleepy", "bored", "42 kilos", "It's delicious thank you!", "1200 Baht", "165,000,000", "by car", 
                "by train", "I walk", "3 cups please"]};


var onet_full_array = new Array( single001, single002, single003, single004, single005, single006, single007, single008, single009, single010, single011,
                                 single012, single013, single014, single015, single016, single017, single018, single019, single020, single021, single022,
                                 single023, single024, single025, single026, single027, single028, single029, single030, single031, single032, single033,
                                 single034, single035, single036, single037, single038, single039, single040, single041, single042, single043, single044,
                                 single045, single046, single047, single048, single049, single050, single051, single052, single053, single054, single055,
                                 single056, single057, single058, single059, single060, single061, single062, single063, single064, single065, single066,
                                 single067, single068, single069, single070, single071, single072, single073, single074, single075, single076, single077,
                                 single078, single079, single080, single081, single082, single083, single084, single085, cloze005, pass002, pass007);

var onet_full2_array = new Array(cloze001,cloze002,cloze003,cloze004,cloze006,cloze007, pass001, pass003, pass004, pass005, pass006, pass008, pass009);


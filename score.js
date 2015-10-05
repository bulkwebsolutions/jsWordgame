var ThisText = 0;
var correctanswers = 0;

var Words = [ { word: 'Amicable', definition: 'friendly, agreeable.' }, 
              { word: 'Acumen', definition: 'the ability to make good judgments and quick decisions, typically in a particular domain.' }, 
              { word: 'Accoutrements', definition: 'additional items of dress or equipment, or other items carried or worn by a person or used for a particular activity.' },
              { word: 'Abstinence', definition: 'the act of refraining from pleasurable activity, e.g., eating or drinking.' },
              { word: 'Adulation', definition: 'high praise.' },
              { word: 'Adversity', definition: 'misfortune, an unfavorable turn of events.' },
              { word: 'Aesthetic', definition: 'pertaining to beauty or the arts.' },
              { word: 'Anachronistic', definition: 'out-of-date, not attributed to the correct historical period.' },
              { word: 'Anecdote', definition: 'short, usually funny account of an event.' },
              { word: 'Antagonist', definition: 'foe, opponent, adversary.' },
			  { word: 'blue', definition: 'Hello, blue.'},
			  { word: 'green', definition: 'Hello, green,'},
			  { word: 'white', definition: 'Hello, white.' },
			  { word: 'hello', definition: 'Hello, hello.'},
];

$(this).ready(function(){
    onLoad();
             
             $('#correct').click(function(){
                 ShowDesc();
             });
});



function ChangeWordTo(NextWord) {
             var text = "";
             
             text += "<input type='radio' name='options' value='"+NextWord+"'>";
             text += NextWord;
             $('#option1').html(text);
}

 // this grabs the ID description
function ChangeDescriptionTo(NextDescription) {

    document.getElementById('description').innerHTML = NextDescription;

}

// This loads it to the first definition...
function onLoad() {
      switchTo(0);
             correctanswers = 0;
}

// won't work with out
function switchTo(which) {
     ChangeWordTo(Words[which].word);
     ChangeDescriptionTo(Words[which].definition);
}

// This increments as button is click
function ShowDesc() {
    
    var selectedOption = $('input[name="options"]:checked').val();
    var correctOPtion = Words[ThisText].word;
    if(selectedOption == correctOPtion){
        correctanswers++ ;
        alert('correct '+correctanswers);
    }
    else
        alert('wrong');
        
    console.log(selectedOption + "--" + correctOPtion);
    
    ThisText++;
    switchTo(ThisText);

}


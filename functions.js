var ThisText = 0;

var Words = [ { word: '1. Amicable', definition: 'friendly, agreeable.' }, 
              { word: '2. acumen', definition: 'the ability to make good judgments and quick decisions, typically in a particular domain.' }, 
              { word: '3. accoutrements', definition: 'additional items of dress or equipment, or other items carried or worn by a person or used for a particular activity.' },
              { word: '4. Abstinence', definition: 'the act of refraining from pleasurable activity, e.g., eating or drinking.' },
              { word: '5. Adulation', definition: 'high praise.' },
              { word: '6. Adversity', definition: 'misfortune, an unfavorable turn of events.' },
              { word: '7. Aesthetic', definition: 'pertaining to beauty or the arts.' },
              { word: '8. Anachronistic', definition: 'out-of-date, not attributed to the correct historical period.' },
              { word: '9. Anecdote', definition: 'short, usually funny account of an event.' },
              { word: '10. Antagonist', definition: 'foe, opponent, adversary.' },
];


function ChangeWordTo(NextWord) { 
 
    document.getElementById('newword').innerHTML = NextWord;
 
}
    
 
function ChangeDescriptionTo(NextDescription) {
 
    document.getElementById('description').innerHTML = NextDescription;
 
}
 
function onLoad() {
      switchTo(0);
}

function switchTo(which) {
     ChangeWordTo(Words[which].word);
     ChangeDescriptionTo(Words[which].definition);
}

function ShowNext() {
   ThisText++;
   switchTo(ThisText);
   document.getElementById('style_Description').className = 'hidden';
   document.getElementById('clickSwitch').innerHTML = 'I know it';
}
function ShowDesc() {
    document.getElementById('style_Description').className = 'shown';
    document.getElementById('clickSwitch').innerHTML = 'I learned it';

}



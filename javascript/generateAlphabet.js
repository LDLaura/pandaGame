/**
 * Function keyboard() create all alphabet buttons
 * @returns void
 */

function keyboard(){
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
    let gameKeyboard = document.getElementById('game-Keyboard');
        for (let i = 0; i < letters.length; i++) {
            var buttonLetter = document.createElement('button');
                buttonLetter.setAttribute('class', 'alpha');          
                buttonLetter.setAttribute('onclick', 'keyboardLetter(event)');
                buttonLetter.innerText = letters[i];
            gameKeyboard.appendChild(buttonLetter);      
        }
        
}

/**
 * function keyboardLetter() deactivates the keyboard letter just clicked
 * @param event
 * @returns void
 */
function keyboardLetter(event){
    var lettre = event.srcElement.innerHTML;
    compareLetter(lettre);
    event.srcElement.disabled=true;
    dom_game.innerText = visibleWord.join(''); 
}


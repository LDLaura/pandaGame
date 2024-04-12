//Gloabal variable creation
var secretWord;
var dom_game;
var visibleWord = []; 
var tries = 0;
var maxTriesNumber = 8;
var letterFound = true


/**
 * function randomWord() to choose a word at random from dictionary 
 * @returns void
 */

function randomWord(){
    secretWord = dictionnaire[Math.floor(Math.random() * nombreDeMots)];
    console.log(secretWord);
}



/**
 * function init() initalize the secret word : hide the letters except the first and last and "-", "'", " " 
 * and letters with accent which do not appear in the variable letters
 * @returns void
 */
function init(){
    dom_game = document.getElementById('game-secretWord');
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
    for (let i = 0; i < secretWord.length; i++) {
        if(i == 0 || i == secretWord.length - 1){
            visibleWord.push(secretWord.charAt(i));
        }
        else {
            let found = false
            for (let j = 0; j < letters.length; j++){
                if (letters[j] == secretWord[i]){
                visibleWord.push("_")
                found = true
                break
                }
                else {
                    found = false                   
                }
            } 
            if (found == false){
                visibleWord.push(secretWord.charAt(i))
            } 
        } 
    }
     for (let i = 0; i < visibleWord.length; i++) {
        dom_game.innerText += visibleWord[i];  
    }
}


/**
 * function compareLetter() compare the letters of secretWord and visibleWord if you find all the letters you win otherwise you lose.
 * @returns void
 */
function compareLetter(lettre){
    for (let i = 0; i < secretWord.length - 1; i++) {
        if (lettre === secretWord[i]) {
            visibleWord[i] = secretWord[i];
            letterFound = true;
            for (let j = 0; j < secretWord.length - 1; j++) {
                if (lettre === secretWord[j]) {
                    visibleWord[j] = secretWord[j];
               }
            }
            break;
         } else {letterFound = false;}
    }  
    letter();
}


function letter(){
    if (letterFound == true){
        win();
    }
    else {tries++;
        imgPanda();
        lost();
    }
}

/**
 * function imgPanda() change image according to the number of attemps.
 * @returns void
 */
function imgPanda(){
    let pandaPlace = document.getElementById("panda");
    pandaPlace.src = "media/images/p" + tries + ".png";
}


/**
 * function win() opens a pop up with a message indicating that you have won + a replay button
 * @returns void
 */
function win(){
    let modalWin = document.getElementById('modalWin');
    if (secretWord === visibleWord.join("")){
        modalWin.classList.add("block");
    }
}


/**
 * function lost() opens a pop up with a message indicating that you have lost + a replay button
 * @returns void
 */
function lost(){
    let modalLost = document.getElementById('modalLost')
    if (tries >= maxTriesNumber) {
        modalLost.classList.add("block");
    }
}


/**
 * function newWord() allows you to choose a new word to play again
 * @returns void
 */
function newWord(){
    location.reload();
}

window.addEventListener('load',init);

//Available Levels
const levels = {
    easy :5,
    medium:3,
    hard:2
}
//To change levels
const currentLevel = levels.easy;


//Global variables
let time = currentLevel; 
let score = 0;
let isPlaying;


//DOM elemenets
const wordInput =document.querySelector('#word-input');
const currentWord =document.querySelector('#current-word');
const scoreDisplay =document.querySelector('#score');
const timeDisplay =document.querySelector('#time');
const message =document.querySelector('#message');
const seconds =document.querySelector('#seconds');


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];


///INitialise Game
function  init() {
    //Show the number of second in UI
    seconds.innerHTML = currentLevel;

    //Load a Random Word from the array
    showWord(words);

    //Start matching the words with the input
    wordInput.addEventListener('input',startMatch);

    //Call countdown every second
    setInterval(countDown, 1000);

    //Check the status of Game
    setInterval(checkStatus,50);
}


//Start Match
function  startMatch() {
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1; //One above the inital since page loadtakes1sec
        showWord(words);
        wordInput.value = "";
        score++;
        
    }
    //If score is -1
    if(score == -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    } 
}


//match the curr word wth the word input
function  matchWords() {
    if (wordInput.value == currentWord.innerHTML) {
        message.innerHTML = "Correct!!";
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}






//Pick and show the Random words
function  showWord(words) {
    //generate the random index array
    const randIndex  = Math.floor(Math.random() * words.length);
    //Output the random word
    currentWord.innerHTML = words[randIndex];
}





function  countDown(){
    //Make sure time is not run out
    if(time > 0){
        //Decrement time
        time--;
    }else if(time == 0){
        //Game over
        isPlaying = false;
    }
    //Show the time
    timeDisplay.innerHTML = time;
}




//Check the game status over or not
function  checkStatus() {
    if(!isPlaying && time == 0){
        message.innerHTML = "GAME OVER!!!";
        score = -1;
    }
}
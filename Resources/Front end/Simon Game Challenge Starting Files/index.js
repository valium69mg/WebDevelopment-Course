// GAME PATTERN
var gamePattern = [];

// USER CLICK PATTERN 
var userClickedPattern = [];

// DECLARE THE ARRAY WITH THE TILE COLOURS
let buttonColours = ['red','blue','green','yellow'];

// VARUABLE LEVEL
var level = 0;


//FUNCTION THAT CHOOSES THE NEXT TILE TO BE FADED IN SEQUENCE
function nextSequence(){
    // RESET THE USER SEQUENCE EVERY TIME
    userClickedPattern = [];    
    // GENERATE A RANDOM NUMBER BETWEEN 0-3
    var randomNumber = Math.floor(Math.random()*4);
    // RANDOM CHOSEN COLOR
    var randomChosenColour = buttonColours[randomNumber];
    // ADD THE CHOOSEN COLOR TO THE GAME PATTERN 
    gamePattern.push(randomChosenColour);

    // FADE NEXT TILE
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //PLAY AUDIO OF THE TILE
    playSound(randomChosenColour);

    //ANIMATE THE PRESS OF THE RANDOM GENERATED TILE
    animatePress(randomChosenColour);

    // CHANGE THE H1 TO THE CURRENT LEVEL 
    var currentLevel = "Level " + level;
    $("#level-title").text(currentLevel);

    //INCREMENT THE LEVEL BY 1 
    level += 1;

    }

// WHEN THE USER CLICKS THE TILES
$(".btn").on("click",function(){
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer([userClickedPattern.length - 1]);
})

// FUNCTION TO PLAY THE SOUND OF THE TILE
function playSound(name){
    //PLAY AUDIO OF THE TILE
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// FUNCTION TO ANIMATE THE PRESS SOUND
function animatePress(currentColour){
    var currentTile = "." + currentColour;
    $(currentTile).addClass("pressed");
    setTimeout(function(){
         $(currentTile).removeClass("pressed");
    }, 100)
}

// START THE GAME
$(document).keypress(function(event){
    
    if (event.key == 'a'){
       nextSequence();
    }
}
);


function checkAnswer(currentLevel){
    // CHECK IF THE LAST USER SELECTION MATCHES THE GAME PATTERN
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        // CHECK IF THE USER HAS COMPLETED THE SELECTION COMPARING LENGTHS OF THE GAMEPATTERN ARRAY AND THE USERCLICK
        if (userClickedPattern.length === gamePattern.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }

    } else{
        playSound('wrong');
        $(document.body).addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $(document.body).removeClass("game-over");
        },200)
        startOver();
    }
}

function startOver() {
    // reset level values
    level = 0;
    gamePattern = [];
}
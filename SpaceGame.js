var score = 0; 
var lives = 3; 
function Start() { 
  setScreen("loginScreen"); 
  onEvent("nextBtn", "click", function(event) { 
    var nameInput = getText("text_input1"); 
    setScreen("welcomeScreen"); 
    setText("text_area1", "Hi " + nameInput + "! You are an astronaut in space and there are aliens out on the loose! Capture all the aliens to return home safely or else your ship will be destroyed and you may never return home." ); 
    onEvent("playBtn", "click", function(event) { 
      setScreen("playScreen"); 
      setTimeout(function() { 
        setScreen("timeLoseScreen"); 
      }, 20000); 
    }); 
  }); 
} 
function play() { 
  onEvent("alien", "click", function(event) { 
    setPosition("alien", randomNumber(0, 200), randomNumber(0, 200), 100, 100); 
    score = score + 1; 
    setText("scoreDisplay", score); 
    if (score == 15) { 
      setScreen("winScreen"); 
    } 
  }); 
  onEvent("background", "click", function(event) { 
    lives = lives - 1; 
    setText("livesDisplay", lives); 
    if (lives == 0) { 
      setScreen("livesLoseScreen"); 
    } 
  }); 
} 
function redo() { 
  onEvent("playAgainBtn", "click", function(event) { 
    setScreen("loginScreen"); 
    setText("livesDisplay", "3"); 
    setText("scoreDisplay", "0"); 
  }); 
  onEvent("tryAgainBtn", "click", function(event) { 
    setScreen("loginScreen"); 
    setText("livesDisplay", "3"); 
    setText("scoreDisplay", "0"); 
  }); 
  onEvent("tryAgain2", "click", function(event) { 
    setScreen("loginScreen"); 
  }); 
} 
Start(); 
play(); 
redo(); 
function start() {
    document.getElementById('roomButtons').style.display = 'none';
    document.getElementById('inst').style.display = 'none';
    document.getElementById('hide_inst_button').style.display = 'none';
}

function show_instructions() {
    alert ("You have a choice of going to 5 different rooms, 3 of the 5 rooms will have keys. In order to get a key, you must answer a riddle correctly. Each riddle has a one-word answer. If the answer is “dog” typing in “a dog” will not work. Once you collect all three keys, you win the game .You have three lives, so if you guess a riddle wrong, then you lose a life. Once you lose all you lives, game over. If you cannot think of an answer to the riddle, you may click to any other room.");
}

function username(){
    userName=document.getElementById('username').value;
    return "Hello " + userName + ", welcome the the dungeon! Muahahahahaha";
}

function startGame() {
    document.getElementById('gameStarter').style.display = "none";
    document.getElementById('roomButtons').style.display = "block";
}

//chooses riddle for each room


function riddleChooser() {
        return document.getElementById('riddle').innerHTML = chosenriddle1();
}

function riddleChooser2() {
        return document.getElementById('riddle2').innerHTML = chosenriddle2();
}

function riddleChooser3() {
        return document.getElementById('riddle3').innerHTML = chosenriddle3();
}

function riddleChooser4() {
    return document.getElementById('riddle4').innerHTML = chosenriddle4();
}

function riddleChooser5() {
    return document.getElementById('riddle5').innerHTML = chosenriddle5();
}


// functions that allow help with randomness
function RandomNum(low, high) 
{ 
    return Math.random()*(high-low) + low; 
}  
function RandomInt(low, high)  
{ 
    return Math.floor(Math.random()*(high-low+1)) + low; 
}  
function RandomChar(str) 
{  
    return str.charAt(RandomInt(0, str.length-1)); 
}  

function RandomOneOf(list)
{    
    return list[RandomInt(0, list.length-1)]; 
}

// Room changing function

function changeRoom(change) {

    document.getElementById('room1').style.display = 'none';
    document.getElementById('room2').style.display = 'none';
    document.getElementById('room3').style.display = 'none';
    document.getElementById('room4').style.display = 'none';
    document.getElementById('room5').style.display = 'none';
    if (change === 1) {
        document.getElementById('room1').style.display = 'block';
    }
    if (change == 2) {
        document.getElementById('room2').style.display = 'block';
    }
    if (change == 3) {
        document.getElementById('room3').style.display = 'block';
    }
    if (change == 4) {
        document.getElementById('room4').style.display = 'block';
    }
    if (change == 5) {
        document.getElementById('room5').style.display = 'block';
    }  
}

     function user(name,health,keyNumber)
   {
   // creates object storing user data
   this.name = name;
   this.health = health;
   this.keyNumber = keyNumber;
       return name;
       return health;
       return keyNumber;
   }

     function getName(input)
   {
   name = input.value;
   return 'welcome to my dungeon' + name + ' muahahhahahahah';
   }
   var user = new user(name,0,3);

  
  var room1,room2,room3,room4,room5;
  function roomsWithKeys()
 {
// function that determines which rooms will have keys, only three of the five rooms will have keys
  var num1,num2,num3;
  //assigns a random number between 0 and 4 to each num variable
  num1 = Math.floor(5 * Math.random());
  num2 = Math.floor(5 * Math.random());
  num3 = Math.floor(5 * Math.random());
  while (num1 === num2 || num1 === num3 || num2 === num3) 
  {
// ensures that each number is different
    num1 = Math.floor(5 * Math.random());
    num2 = Math.floor(5 * Math.random());
    num3 = Math.floor(5 * Math.random());
  } 
  // assigns rooms with keys or not keys
  num1=0;
  if (num1 === 0 || num2 === 0 || num3 ===0) {
    room1 = true;
  }else{
    room1 = false;
  }
  if (num1 === 1 || num2 === 1 || num3 ===1) {
    room2 = true;
  }else{
    room2 = false;
  }
  if (num1 === 2 || num2 === 2 || num3 ===2) {
    room3 = true;
  }else{
    room3 = false;
  }
  if (num1 === 3 || num2 === 3 || num3 ===3) {
    room4 = true;
  }else{
    room4 = false;
  }
  if (num1 === 4 || num2 === 4 || num3 ===4) {
    room5 = true;
  }else{
    room5 = false;
  } 
  
} 

        var randomNum;
function chosenriddle1() {
        randomNum = Math.floor(3 * Math.random())
        var riddle =['What gets wetter and wetter the more it dries?', 'What can you catch but not throw?', 'What goes around the world but stays in a corner?'];
   return riddle[randomNum];
}

function riddleAnswer1(input){
        // this function takes the user's answr to the riddle and compares it with the actual answer
        var answers=['towel','cold','stamp'];
        var answer = answers[randomNum];
        var userAnswer = input.value.toLowerCase();
        if (answer === userAnswer)
        // if the answer is correct it will show the user "correct"
        {
                var output ='correct, you got another key!';
                if (room1 === true)
                // if the room has a key in it and they answer the riddle correctly then the user will be awarded a key
                {
                    user.keyNumber = user.keyNumber + 1;
                        return output; 
                }else{
                        return output;
                }
        }else{
        // if the user answers incorrectly then userHealth decreses by 1
                var output = 'incorrect';
                user.health = user.health - 1
                        if (user.health === 0)
                        // checks user health if it is 0 then game is over
                        {
                        document.getElementById('gameOverScreen').style.display = 'block';
                        }
                return output;
        } 
        
        
}
function chosenriddle2() {
        randomNum2 = Math.floor(3 * Math.random())
        var riddle =['At night they come without being fetched, and by day they are lost without being stolen. What are they?', 'Tell me, what animal stinks while living but in death smells good?', 'I fly, yet I have no wings. I cry, yet I have no eyes. Darkness follows me; lower light I never see.'];
   return riddle[randomNum2];
   }
   
function riddleAnswer2(input){
        // this function takes the user's answr to the riddle and compares it with the actual answer
        var answers=['stars','pig','cloud'];
        var answer = answers[randomNum2];
        var userAnswer = input.value.toLowerCase();
        if (answer === userAnswer)
        // if the answer is correct it will show the user "correct"
        {
                var output ='correct, you got another key!';
                if (room2 === true)
                // if the room has a key in it and they answer the riddle correctly then the user will be awarded a key
                {
                    user.keyNumber = user.keyNumber + 1;
                        return output 
                }else{
                        return output;
                }
        }else{
        // if the user answers incorrectly then userHealth decreses by 1
                var output = 'incorrect';
                user.health = user.health - 1
                        if (user.health === 0)
                        // checks user health if it is 0 then game is over
                        {
                        document.getElementById('gameOverScreen').style.display = 'block';
                        }
                return output;
        }
        
        
}
function chosenriddle3() {
        randomNum3 = Math.floor(3 * Math.random())
        var riddle =['Poor people have it. Rich people need it. If you eat it you die. What is it?', 'I’m tall when I’m young and I’m short when I’m old. What am I?', 'What goes up when rain comes down?'];
   return riddle[randomNum3];
   }
function riddleAnswer3(input){
        // this function takes the user's answr to the riddle and compares it with the actual answer
        var answers=[ 'nothing','candle','umbrella'];
        var answer = answers[randomNum3];
        var userAnswer = input.value.toLowerCase();
        if (answer === userAnswer)
        // if the answer is correct it will show the user "correct"
        {
                var output ='correct, you got another key!';
                if (room3 === true)
                // if the room has a key in it and they answer the riddle correctly then the user will be awarded a key
                {
                    user.keyNumber = user.keyNumber + 1;
                        return output 
                }else{
                        return output;
                }
        }else{
        // if the user answers incorrectly then userHealth decreses by 1
                var output = 'incorrect';
                user.health = user.health - 1
                        if (user.health === 0)
                        // checks user health if it is 0 then game is over
                        {
                        document.getElementById('gameOverScreen').style.display = 'block';
                        }
                return output;
        }
        
        
}
function chosenriddle4() {
        randomNum4 = Math.floor(3 * Math.random())
        var riddle =['What has 4 eyes but can’t see?', 'What starts with the letter “t”, is filled with “t” and ends in “t”?', 'What is so delicate that saying its name breaks it?.'];
   return riddle[randomNum4];
   }
function riddleAnswer4(input){
        // this function takes the user's answr to the riddle and compares it with the actual answer
        var answers=['mississippi','teapot','silence'];
        var answer = answers[randomNum4];
        var userAnswer = input.value.toLowerCase();
        if (answer === userAnswer)
        // if the answer is correct it will show the user "correct"
        {
                var output ='correct, you got another key!';
                if (room4 === true)
                // if the room has a key in it and they answer the riddle correctly then the user will be awarded a key
                {
                    user.keyNumber = user.keyNumber + 1;
                        return output 
                }else{
                        return output;
                }
        }else{
        // if the user answers incorrectly then userHealth decreses by 1
                var output = 'incorrect';
                user.health = user.health - 1
                        if (user.health === 0)
                        // checks user health if it is 0 then game is over
                        {
                        document.getElementById('gameOverScreen').style.display = 'block';
                        }
                return output;
        }
        
        
}
function chosenriddle5() {
        randomNum5 = Math.floor(3 * Math.random())
        var riddle =['How many months have 28 days?', 'If a blue house is made out of blue bricks, a yellow house is made out of yellow bricks and a pink house is made out of pink bricks, what is a green house made of?', 'What gets broken without being held?'];
   return riddle[randomNum5];
   }
function riddleAnswer5(input){
        // this function takes the user's answr to the riddle and compares it with the actual answer
        var answers=['12','glass','promise'];
        var answer = answers[randomNum5];
        var userAnswer = input.value.toLowerCase();
        if (answer === userAnswer)
        // if the answer is correct it will show the user "correct"
        {
                var output ='correct, you got another key!';
                if (room5 === true)
                // if the room has a key in it and they answer the riddle correctly then the user will be awarded a key
                {
                    user.keyNumber = user.keyNumber + 1;
                        return output 
                }else{
                        return output;
                }
        }else{
        // if the user answers incorrectly then userHealth decreses by 1
                var output = 'incorrect';
                user.health = user.health - 1
                        if (user.health === 0)
                        // checks user health if it is 0 then game is over
                        {
                        document.getElementById('gameOverScreen').style.display = 'block';
                        }
                return output;
        }
        
        
}
 function endGame()
  {
    if (user.keyNumber === 3)
      {
      var output = 'You win!';
      return output;
     }else{
      var output2 = 'You do not have enough keys to leave';
      return output2; 
      }
  }
  function startOver()
{
	location.reload();
}

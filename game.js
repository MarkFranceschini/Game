function start() {
    document.getElementById('roomButtons').style.display = 'none';
}

function username(){
    userName=document.getElementById('username').value;
    return "Hello " + userName + ", welcome the the dungeon! Muahahahahaha";
}

function startGame() {
    document.getElementById('gameStarter').style.display = "none";
    document.getElementById('roomButtons').style.display = "block";
}

function chosenriddle() {
    var riddle = RandomOneOf(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    return riddle;
}

function riddleChooser() {
        return document.getElementById('riddle').innerHTML = chosenriddle();
}

function riddleChooser2() {
        return document.getElementById('riddle2').innerHTML = chosenriddle();
}

function riddleChooser3() {
        return document.getElementById('riddle3').innerHTML = chosenriddle();
}

function riddleChooser4() {
    return document.getElementById('riddle4').innerHTML = chosenriddle();
}

function riddleChooser5() {
    return document.getElementById('riddle5').innerHTML = chosenriddle();
}

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
     //currPage = document.getElementById('page' + curr);
      //nextPage = document.getElementById('page' + next);
    
    //currRoom = document.getElementById('room' + curr);
    //currRoom.style.display = 'none';
    }

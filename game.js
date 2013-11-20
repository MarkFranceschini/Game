function username(){
    userName=document.getElementById('username').value;
    return "Hello " + userName + ", welcome the the dungeon! Muahahahahaha";
}

function startGame() {
    document.getElementById('gameStarter').style.display = "none";
    document.getElementById('roomStart').style.display = "block";
}


function riddleChooser() {
    var chosenRiddle = RandomOneOf(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
        return document.getElementById('riddle').innerHTML = chosenRiddle;
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
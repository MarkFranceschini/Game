function start() {
    document.getElementById('roomStart').style.display = "none";
}

function username(){
    userName=document.getElementById('username').value;
    return "Hello " + userName + ", welcome the the dungeon! Muahahahahaha";
}

function startGame() {
    document.getElementById('gameStarter').style.display = "none";
    document.getElementById('roomStart').style.display = "block";
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

function nextPage(curr) {
      var next, currPage, nextPage;

      next = curr + 1;
      currPage = document.getElementById('page' + curr);
      nextPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      nextPage.style.display = 'block';
    }
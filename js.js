/**
 Instructions
 Player will be guided by the text in textbox on what to roll, they also have a table showing their stats. 
 They dont know the enemy stats as this is normally only known by the DM.
 When either player or enemies health points shown on the screen in red, drops to 0 or below, the game will
 show win or lose and invite them to play again.
 */

 //To-do

      //Start screen
      //Way for them to reset the game
      //Place required button into the textbox rather than along the bottom
      //Style page better
      //Different images that change with each button click
      //Different images for win and lose

 //Possible features to impliment if time allows

      //allow player to manually declare stats for them and enemy
      //allow DM to manually define the statements used in random text generator
      //upon win condition being met, generate random treasure
      //add function to let the player use a finite amount of health potions which will increase the player.health







//Class constructor for game characters

class fighter {
  constructor(health, attack, str, dex, con, wis, int, cha){
    this.health = health
    this.attack = attack
    this.str = str
    this.dex = dex
    this.con = con
    this.wis = wis
    this.int = int
    this.cha = cha

  }

  //Dice roll methods

  diceRollStr() {
    let d20ResultPlayer = document.getElementById("strResultPlayer");
    let d20ResultEnemy = document.getElementById("strResultEnemy");
    let resultTextStr = document.getElementById("resultTextStr");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.str;
    let d20ResultEnemyAdj = d20Enemy + enemy.str;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextStr.innerText = "player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextStr.innerText = "enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollDex() {
    let d20ResultPlayer = document.getElementById("dexResultPlayer");
    let d20ResultEnemy = document.getElementById("dexResultEnemy");
    let resultTextDex = document.getElementById("resultTextDex");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.dex;
    let d20ResultEnemyAdj = d20Enemy + enemy.dex;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextDex.innerText = "player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextDex.innerText = "enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollCon() {
    let d20ResultPlayer = document.getElementById("conResultPlayer");
    let d20ResultEnemy = document.getElementById("conResultEnemy");
    let resultTextCon = document.getElementById("resultTextCon");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.con;
    let d20ResultEnemyAdj = d20Enemy + enemy.con;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextCon.innerText = "player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextCon.innerText = "enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollWis() {
    let d20ResultPlayer = document.getElementById("wisResultPlayer");
    let d20ResultEnemy = document.getElementById("wisResultEnemy");
    let resultTextWis = document.getElementById("resultTextWis");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.wis;
    let d20ResultEnemyAdj = d20Enemy + enemy.wis;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextWis.innerText = "player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextWis.innerText = "enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollInt() {
    let d20ResultPlayer = document.getElementById("intResultPlayer");
    let d20ResultEnemy = document.getElementById("intResultEnemy");
    let resultTextInt = document.getElementById("resultTextInt");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.int;
    let d20ResultEnemyAdj = d20Enemy + enemy.int;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextInt.innerText = "player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextInt.innerText = "enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollCha() {
    let d20ResultPlayer = document.getElementById("chaResultPlayer");
    let d20ResultEnemy = document.getElementById("chaResultEnemy");
    let resultTextCha = document.getElementById("resultTextCha");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.cha;
    let d20ResultEnemyAdj = d20Enemy + enemy.cha;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextCha.innerText = "player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextCha.innerText = "enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  
}
//Player and Enemy Construction

let player = new fighter(10, 5, +2, +2, +1, +1, -1, 0)
let enemy = new fighter(10, 5, +3, +1, +3, -2, 0, 0)


//Player Stats Table - pulls information from class constructor

let strength = document.getElementById('str')
strength.innerHTML = player.str

let dexterity = document.getElementById('dex')
dexterity.innerHTML = player.dex

let constitution = document.getElementById('con')
con.innerHTML = player.con

let wisdom = document.getElementById('wis')
wis.innerHTML = player.wis

let intelligence = document.getElementById('int')
int.innerHTML = player.int

let charisma = document.getElementById('cha')
cha.innerHTML = player.cha

//Player and Enemy Health readouts

let playerHealth = document.getElementById('playerHealth')
let enemyHealth = document.getElementById('enemyHealth')
playerHealth.innerHTML = player.health
enemyHealth.innerHTML = enemy.health

//Win Lose Checker - adds text to top graphic
let winLose = document.getElementById('winLose')

function winLoseCheck (){
  if (player.health <= 0){
    lose()
  } else if (enemy.health <= 0){
      win()
    }
  }

  function win(){
    winLoseText.innerHTML= "you win"
  }
  
  function lose(){
    gameScreen.innerHTML = "you lose" 
  }

//random text generator
let textBox = document.getElementById("textBox");
let strButton = document.getElementById('strengthButton')

function randomTextGen(){

let textArray = [
  'The lead orc runs at you with a rusty battleaxe. ',
  'From the trees above an orc with a box rains arrows down upon you. ',
  'Sparks and lightening shoot from the hands of an orc mage, look out Magic Missles!',
  'One Orc yells to you, telling you to back down!'
]

let rollArray =[
  'Grogg says squash em! - Roll Strength',
  'Grogg says duuuuck! - Roll Dextirity',
  'Grogg says Gotta know how to take a hit! - Roll Constitution',
  'Grogg says member last time?! - Roll Wisdom',
  'Grogg says use yer noggin! - Roll Intelligence',
  'Groog says tell em how pretty they are! - Roll Charisma'
]

//Win lose Checker for text box to display different text on win or lose.

let randomText = Math.floor(Math.random()*textArray.length);
let randomRoll = Math.floor(Math.random()*textArray.length);
textBox.innerHTML = (textArray[randomText] + " " + rollArray[randomRoll])}
let winLoseText = document.getElementById('winLoseText')

function winLoseCheckTB (){
  if (player.health <= 0){
    textBox.innerHTML = "Ooooh thats gotta Hurt"
    createButton()
  } else if (enemy.health <= 0){
      textBox.innerHTML = "The day is yours"
      createButton()
    }
  }

//Updater - automatically updates the text in textbox after a button is press to progress the game.

function update(){
  if (player.health <= 0 || enemy.health <= 0){
  winLoseCheckTB()}else
  randomTextGen()
}

function createButton() {
   // creating button element
  let button = document.createElement('BUTTON');
   
  // creating text to be
  //displayed on button
  let text = document.createTextNode("Wanna go again?");
   
  // appending text to button
  button.appendChild(text);
   
  // appending button to div
  textBox.appendChild(button); ;

  button.setAttribute("id", "reload")
  button.setAttribute("type", "button")
  button.setAttribute("onclick", "window.location.reload()")
 
  
}




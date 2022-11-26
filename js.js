/**
 Instructions
 Player will be guided by the text in textbox on what to roll, they also have a table showing their stats. 
 They dont know the enemy stats as this is normally only known by the DM.
 When either player or enemies health points shown on the screen in red, drops to 0 or below, the game will
 show win or lose and invite them to play again.
 */

 //To-do

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
//Variables for dice roll functions
let d20player = 0
let d20Enemy = 0
let d20ResultPlayer = 0
let d20ResultEnemy = 0
let d20ResultPlayerAdj = null
let d20ResultEnemyAdj = null

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
    this.stat = null
  }

  //Dice roll methods

  // diceRoll(stat) {
  //   let d20ResultPlayer = document.getElementById([str]ResultPlayer);
  //   let d20ResultEnemy = document.getElementById(`${stat}ResultEnemy`);
  //   let resultText = document.getElementById(`resultText${stat}`);
  //   let d20player = Math.floor(Math.random() * 20 + 1);
  //   let d20Enemy = Math.floor(Math.random() * 20 + 1);
  //   this.stat = stat
  //   let d20ResultPlayerAdj = d20player + player[stat];
  //   let d20ResultEnemyAdj = d20Enemy + enemy[stat];
  //   d20ResultPlayer.innerHTML = d20ResultPlayerAdj
  //   d20ResultEnemy.innerHTML = d20ResultEnemyAdj
  //   if (d20ResultPlayerAdj > d20ResultEnemyAdj){
  //     resultText.innerText = "player wins"
  //     enemyHealth.innerHTML = enemy.health -= player.attack
  //   } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
  //     resultText.innerText = "enemy wins"
  //   playerHealth.innerHTML = player.health -= enemy.attack
  //   }
  //   winLoseCheck()
  //   setTimeout(update, 500);
  //   console.log(stat)
  // }

  

  

  diceRollstr() {
    d20ResultPlayer = document.getElementById("strResultPlayer");
    d20ResultEnemy = document.getElementById("strResultEnemy");
    let resultTextStr = document.getElementById("resultTextStr");
    this.randomDiceRoll();
    d20ResultPlayerAdj = d20player + player.str;
    d20ResultEnemyAdj = d20Enemy + enemy.str;
    this.resultUpdater();
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextStr.innerText = "Player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextStr.innerText = "Enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    } else if (d20ResultPlayerAdj == d20ResultEnemyAdj){
      resultTextStr.innerText = "Draw"
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollDex() {
    d20ResultPlayer = document.getElementById("dexResultPlayer");
    d20ResultEnemy = document.getElementById("dexResultEnemy");
    let resultTextDex = document.getElementById("resultTextDex");
    this.randomDiceRoll();
    d20ResultPlayerAdj = d20player + player.dex;
    d20ResultEnemyAdj = d20Enemy + enemy.dex;
    this.resultUpdater();
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextDex.innerText = "Player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextDex.innerText = "Enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }else if (d20ResultPlayerAdj == d20ResultEnemyAdj){
      resultTextDex.innerText = "Draw"
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollCon() {
    d20ResultPlayer = document.getElementById("conResultPlayer");
    d20ResultEnemy = document.getElementById("conResultEnemy");
    let resultTextCon = document.getElementById("resultTextCon");
    this.randomDiceRoll();
    d20ResultPlayerAdj = d20player + player.con;
    d20ResultEnemyAdj = d20Enemy + enemy.con;
    this.resultUpdater();
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextCon.innerText = "Player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextCon.innerText = "Enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }else if (d20ResultPlayerAdj == d20ResultEnemyAdj){
      resultTextCon.innerText = "Draw"
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollWis() {
    d20ResultPlayer = document.getElementById("wisResultPlayer");
    d20ResultEnemy = document.getElementById("wisResultEnemy");
    let resultTextWis = document.getElementById("resultTextWis");
    this.randomDiceRoll();
    d20ResultPlayerAdj = d20player + player.wis;
    d20ResultEnemyAdj = d20Enemy + enemy.wis;
    this.resultUpdater();
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextWis.innerText = "Player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextWis.innerText = "Enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }else if (d20ResultPlayerAdj == d20ResultEnemyAdj){
      resultTextWis.innerText = "Draw"
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollInt() {
    d20ResultPlayer = document.getElementById("intResultPlayer");
    d20ResultEnemy = document.getElementById("intResultEnemy");
    let resultTextInt = document.getElementById("resultTextInt");
    this.randomDiceRoll();
    d20ResultPlayerAdj = d20player + player.int;
    d20ResultEnemyAdj = d20Enemy + enemy.int;
    this.resultUpdater();
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextInt.innerText = "Player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextInt.innerText = "Enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }else if (d20ResultPlayerAdj == d20ResultEnemyAdj){
      resultTextInt.innerText = "Draw"
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  diceRollCha() {
    d20ResultPlayer = document.getElementById("chaResultPlayer");
    d20ResultEnemy = document.getElementById("chaResultEnemy");
    let resultTextCha = document.getElementById("resultTextCha");
    this.randomDiceRoll();
    d20ResultPlayerAdj = d20player + player.cha;
    d20ResultEnemyAdj = d20Enemy + enemy.cha;
    this.resultUpdater();
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextCha.innerText = "Player wins"
      enemyHealth.innerHTML = enemy.health -= player.attack
    } else if (d20ResultPlayerAdj < d20ResultEnemyAdj){
      resultTextCha.innerText = "Enemy wins"
    playerHealth.innerHTML = player.health -= enemy.attack
    }else if (d20ResultPlayerAdj == d20ResultEnemyAdj){
      resultTextCha.innerText = "Draw"
    }
    winLoseCheck()
    setTimeout(update, 500);
  }

  //start roll allows button click to generate random text.

  startRoll() {
     setTimeout(update, 500);
  }

  randomDiceRoll() {
    d20player = Math.floor(Math.random() * 20 + 1);
    d20Enemy = Math.floor(Math.random() * 20 + 1);
  }

  resultUpdater() {
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
  }
}

//Player and Enemy Construction

let player = new fighter(100, 5, +2, +2, +1, +1, -1, 0)
let enemy = new fighter(100, 5, +3, +1, +3, -2, 0, 0)

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
  if (player.health <= 0){lose()} 
  else if (enemy.health <= 0){win()}
  }

  function win(){winLoseText.innerHTML= "You win"}
  function lose(){winLoseText.innerHTML = "You lose"}

//Win lose Checker for text box to display different text on win or lose.

let winLoseText = document.getElementById('winLoseText')
function winLoseCheckTB (){
  if (player.health <= 0){textBox.innerHTML = "Ooooh thats gotta Hurt"
  createButton()
  } else if (enemy.health <= 0){textBox.innerHTML = "Songs will be sang of your victory today"
  createButton()
  }
  }  

//random text generator
let textBox = document.getElementById("textBox");
let strButton = document.getElementById('strengthButton')
function randomTextGen(){
let textArray =
[
  'The lead orc runs at you with a rusty battleaxe. ',
  'From the trees above an orc with a bow rains arrows down upon you. ',
  'Sparks and lightening shoot from the hands of an orc mage, look out Magic Missles!',
  'An Orc licks his lips...you must look tasty',
  'An Orc lets loose with a cry of savage wildness, and throws himself at you.',
  'Orcs swing from the tree, showering you with homemade explosives'
]
let rollArray =
[
  '<b>Roll Strength</b>',
  '<b>Roll Dextirity</b>',
  '<b>Roll Constitution</b>',
  '<b>Roll Wisdom</b>',
  '<b>Roll Intelligence</b>',
  '<b>Roll Charisma</b>'
]

let randomText = Math.floor(Math.random()*textArray.length);
let randomRoll = Math.floor(Math.random()*textArray.length);
textBox.innerHTML = (textArray[randomText] + "<br/><br />" + rollArray[randomRoll])}

//Updater - automatically updates the text in textbox after a button is press to progress the game.

function update(){
  if (player.health <= 0 || enemy.health <= 0){winLoseCheckTB()}
  else randomTextGen()
}

//Creates button within the text box.
function createButton() {
   // creating button element
  let button = document.createElement('BUTTON');
   // creating text to be displayed on button
  let text = document.createTextNode("Wanna go again?");
   // appending text to button
  button.appendChild(text);
   // appending button to div
  textBox.appendChild(button);
   // Adding attributes to button
  button.setAttribute("id", "reload")
  button.setAttribute("type", "button")
  button.setAttribute("onclick", "window.location.reload()")
}
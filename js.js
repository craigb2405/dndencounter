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
      enemyHealthMinus()
    } else resultTextStr.innerText = "enemy wins"
     
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
    } else resultTextDex.innerText = "enemy wins"
   
  }

  diceRollCon() {
    let d20ResultPlayer = document.getElementById("conResultPlayer");
    let d20ResultEnemy = document.getElementById("conResultEnemy");
    let resultTextCon = document.getElementById("resultTextCon");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.str;
    let d20ResultEnemyAdj = d20Enemy + enemy.str;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextCon.innerText = "player wins"
    } else resultTextCon.innerText = "enemy wins"
   
  }

  diceRollWis() {
    let d20ResultPlayer = document.getElementById("wisResultPlayer");
    let d20ResultEnemy = document.getElementById("wisResultEnemy");
    let resultTextWis = document.getElementById("resultTextWis");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.str;
    let d20ResultEnemyAdj = d20Enemy + enemy.str;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextWis.innerText = "player wins"
    } else resultTextWis.innerText = "enemy wins"
   
  }

  diceRollInt() {
    let d20ResultPlayer = document.getElementById("intResultPlayer");
    let d20ResultEnemy = document.getElementById("intResultEnemy");
    let resultTextInt = document.getElementById("resultTextInt");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.str;
    let d20ResultEnemyAdj = d20Enemy + enemy.str;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextInt.innerText = "player wins"
    } else resultTextInt.innerText = "enemy wins"
   
  }

  diceRollCha() {
    let d20ResultPlayer = document.getElementById("chaResultPlayer");
    let d20ResultEnemy = document.getElementById("chaResultEnemy");
    let resultTextCha = document.getElementById("resultTextCha");
    let d20player = Math.floor(Math.random() * 20 + 1);
    let d20Enemy = Math.floor(Math.random() * 20 + 1);
    let d20ResultPlayerAdj = d20player + player.str;
    let d20ResultEnemyAdj = d20Enemy + enemy.str;
    d20ResultPlayer.innerHTML = d20ResultPlayerAdj
    d20ResultEnemy.innerHTML = d20ResultEnemyAdj
    if (d20ResultPlayerAdj > d20ResultEnemyAdj){
      resultTextCha.innerText = "player wins"
    } else resultTextCha.innerText = "enemy wins"
   
  }

  
}

let player = new fighter(100, 5, +2, +1, 0, -1, +1, 0)
let enemy = new fighter(100, 5, +2, +1, 0, -1, +1, 0)



let textBox = document.getElementById("text");

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

let playerHealth = document.getElementById('playerHealth')
let enemyHealth = document.getElementById('enemyHealth')
playerHealth.innerHTML = player.health
enemyHealth.innerHTML = enemy.health

function enemyHealthMinus (){
  enemy.health -= player.attack
}




let rollButton = document.getElementById("playerRoll");
let textBox = document.getElementById("text");
let str = document.getElementById("str").innerText;
let dex = document.getElementById("dex").innerText;
let con = document.getElementById("con").innerText;
let wis = document.getElementById("wis").innerText;
let int = document.getElementById("int").innerText;
let cha = document.getElementById("cha").innerText;

//Enemy
let enemyHealth = 200;
let enemyAttack = 10;

//Hero
let heroHealth = 200;
let heroAttack = 10;

//create arugment which takes the stat
function diceRollStr() {
  var d20Result = document.getElementById("strResult");
  var d20 = Math.floor(Math.random() * 20 + 1);
  d20Result.innerHTML = d20 + str;
}

function diceRollDex() {
  var d20Result = document.getElementById("dexResult");
  var d20 = Math.floor(Math.random() * 20 + 1);
  dexResult.innerHTML = d20 + dex;
}
function diceRollCon() {
  var d20Result = document.getElementById("conResult");
  var d20 = Math.floor(Math.random() * 20 + 1);
  conResult.innerHTML = d20 + con;
}
function diceRollWis() {
  var d20Result = document.getElementById("wisResult");
  var d20 = Math.floor(Math.random() * 20 + 1);
  wisResult.innerHTML = d20 + wis;
}
function diceRollInt() {
  var d20Result = document.getElementById("intResult");
  var d20 = Math.floor(Math.random() * 20 + 1);
  intResult.innerHTML = d20 + int;
}
function diceRollCha() {
  var d20Result = document.getElementById("chaResult");
  var d20 = Math.floor(Math.random() * 20 + 1);
  chaResult.innerHTML = d20 + cha;
}

//enemy has stats randomly generated
//enemy rolls dice
//

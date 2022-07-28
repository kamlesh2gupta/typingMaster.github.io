window.addEventListener("load",init)
const wordInput = document.querySelector("#word-input")
const currentword = document.querySelector("#current-word")
// console.log(currentword)
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const msg= document.querySelector("#message")
   
let score = 0;
let time = 6;
const words = [
    'hat',
    'hello',
    'aman',
    'ram',
    'kamal',
    'raju',
    'ramu', 
    'hum',
    'ravi',
    'prince',
    'elephant',
    'rose',
    'gold',
    'iron',
    'data',
    'string',
    'tuple',
    'float',
    'variable',
    'name',
]; 
function init(){ 
showWord(words)
wordInput.addEventListener("input",startMatch) 
setInterval(countdown,1000)
}
function startMatch()
{
if(matchWords()){
  showWord(words)
wordInput.value =''
score++ 
scoreDisplay.innerHTML = score
time=6
 }
}
function matchWords(){ 
//console.log(currentWord.value)
if(currentword.innerHTML == wordInput.value){
  msg.innerHTML="correct!!"
  msg.style.color="green"
return true;
}
msg.innerHTML="Incorrect!!"
  msg.style.color="green"
return false
}
function showWord(words)
{
    const randomIdx = Math.floor(Math.random() * words.length)
    //console.log(randomIdx)
    currentword.innerHTML = words[randomIdx]
}
function countdown(){
  if(time>0){
    time--;
  }
  timeDisplay.innerHTML = time
  if(time == 0){
    msg.innerHTML = "Game Over!!!"
    msg.style.color = "red"
  }
}
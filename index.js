var player1= prompt("Player One name:")
var player2= prompt("Player One name:")

//for left dice image//
var randomNumber1= Math.floor(Math.random() * 6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImage= document.querySelectorAll("img")[0];
randomImage.setAttribute("src",randomDiceImage);
//for right dice image//
var randomNumber2= Math.floor(Math.random()*6+1);
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImage2= document.querySelectorAll("img")[1];
randomImage2.setAttribute("src", randomDiceImage2);
document.querySelector(".p1").innerHTML=player1;
document.querySelector(".p2").innerHTML=player2;
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🔥Hurrah! You Win "+player1;
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Hurrah! You Win "+player2+" 🔥";
}
else{
  document.querySelector("h1").innerHTML="DRAW 🙁! ";
}
if(player1==="" || player2=== "")
{
  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🔥Hurrah! You Win player1.";
  }
  else if (randomNumber1<randomNumber2) {
      document.querySelector("h1").innerHTML="Hurrah! You Win player2  🔥";
  }
  else{
    document.querySelector("h1").innerHTML="DRAW 🙁! ";
  }
}

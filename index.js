var randomNumber1 = Math.floor(Math.random()*(6))+1;
var randomNumber2 = Math.floor(Math.random()*(6))+1;
var randomDice1 = "./images/dice"+randomNumber1+".png";
var randomDice2 = "./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice1);
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = `<img style="height: 100px; width: 100px;" src="./images/flag.png"/> Player 1 Wins!`;
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = `Player 2 Wins! <img style="height: 100px; width: 100px;" src="./images/flag.png"/>`;
}
else{
    document.querySelector("h1").innerHTML = `Draw!`;
}

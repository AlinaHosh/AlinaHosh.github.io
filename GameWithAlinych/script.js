alert("Your name");
var name=prompt();
if(name==""){
    alert("Input your name!!!");
    var name=prompt();
}
document.getElementById('humanName').innerHTML=name;

let countComputerPoints=0;
let countHumanPoints=0;

function CountPoints(){
    var randHuman1=(Math.random()*(10-1)+1).toFixed();
    var randComputer1=(Math.random()*(10-1)+1).toFixed();

    document.getElementById('pointH').innerHTML="Очки "+ randHuman1;
    document.getElementById('pointC').innerHTML="Очки "+ randComputer1;

    if(randHuman1>randComputer1){
        countHumanPoints++;
        document.getElementById('countH').innerHTML=countHumanPoints;
    }
    if(randComputer1>randHuman1){
        countComputerPoints++;
        document.getElementById('countC').innerHTML=countComputerPoints;
    }
  if(countHumanPoints=='3' || countComputerPoints=='3'){
      if(countComputerPoints<countHumanPoints){
          alert("you are winner!!!");
      }
      if(countComputerPoints>countHumanPoints){
          alert("you lose(( Try again");
      }
        countHumanPoints=0;
        countComputerPoints=0;
        document.getElementById('pointH').innerHTML="";
        document.getElementById('pointC').innerHTML="";
        document.getElementById('countH').innerHTML="";
        document.getElementById('countC').innerHTML="";

  }
}

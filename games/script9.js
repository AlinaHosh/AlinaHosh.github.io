alert("Your name");
var name=prompt();
if(name==""){
    alert("Input your name!!!");
    var name=prompt();
}

document.getElementById('humanName').innerHTML=name;

let countComputerPoints=0;
let countHumanPoints=0;
let iteration=0;

function CountPoints(){
    var cards=[6,7,8,9,10, 2, 3, 4 ,11];
    var randHuman1=Math.floor(Math.random()*9);
    var randComputer1=Math.floor(Math.random()*9);
	//для человека

		if(cards[randHuman1]==6){
let photo=document.getElementById("cardH");
photo.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/18.gif'>";      
        countHumanPoints+=6;
		document.getElementById('countH').innerHTML=countHumanPoints;
    }
    if(cards[randHuman1]==7){
        let photo=document.getElementById("cardH");
photo.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/19.gif' >";      
        countHumanPoints+=7;
			document.getElementById('countH').innerHTML=countHumanPoints;
    }
    if(cards[randHuman1]==8){
        let photo=document.getElementById("cardH");
        photo.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/20.gif'>";      
                countHumanPoints+=8;
					document.getElementById('countH').innerHTML=countHumanPoints;
    }
    if(cards[randHuman1]==9){
        let photo=document.getElementById("cardH");
        photo.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/21.gif'>";      
                countHumanPoints+=9;   		
					document.getElementById('countH').innerHTML=countHumanPoints;
    }
    if(cards[randHuman1]==10){
        let photo=document.getElementById("cardH");
        photo.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/22.gif'>";      
                countHumanPoints+=10;
					document.getElementById('countH').innerHTML=countHumanPoints;
    }
 if(cards[randHuman1]==2){
        let photo=document.getElementById("cardH");
        photo.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/23.gif' >";      
                countHumanPoints+=2;
					document.getElementById('countH').innerHTML=countHumanPoints;
    }
	 if(cards[randHuman1]==3){
        let photo=document.getElementById("cardH");
        photo.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/24.gif'>";      
                countHumanPoints+=3;
					document.getElementById('countH').innerHTML=countHumanPoints;
    }
	 if(cards[randHuman1]==4){
        let photo=document.getElementById("cardH");
        photo.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/25.gif' >";      
                countHumanPoints+=4;
					document.getElementById('countH').innerHTML=countHumanPoints;
    }
	 if(cards[randHuman1]==11){
        let photo=document.getElementById("cardH");
        photo.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/26.gif' >";      
                countHumanPoints+=11;
					document.getElementById('countH').innerHTML=countHumanPoints;
    }
	//для компьютера
	 if(cards[randComputer1]==6){		
let photo1=document.getElementById("cardC");
photo1.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/18.gif'>";      
        countComputerPoints+=6;
		document.getElementById('countC').innerHTML=countComputerPoints;
    }
    if(cards[randComputer1]==7){
        let photo1=document.getElementById("cardC");
photo1.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/19.gif' >";      
         countComputerPoints+=7;
			document.getElementById('countC').innerHTML=countComputerPoints;
    }
    if(cards[randComputer1]==8){
        let photo1=document.getElementById("cardC");
        photo1.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/20.gif'>";      
                countComputerPoints+=8;
					document.getElementById('countC').innerHTML=countComputerPoints;
    }
    if(cards[randComputer1]==9){
        let photo1=document.getElementById("cardC");
        photo1.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/21.gif'>";      
                 countComputerPoints+=9;   			 
					document.getElementById('countC').innerHTML=countComputerPoints;
    }
    if(cards[randComputer1]==10){
        let photo1=document.getElementById("cardC");
        photo1.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/22.gif'>";      
                 countComputerPoints+=10;
					document.getElementById('countC').innerHTML=countComputerPoints;
    }
 if(cards[randComputer1]==2){
        let photo1=document.getElementById("cardC");
        photo1.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/23.gif' >";      
                 countComputerPoints+=2;
					document.getElementById('countC').innerHTML=countComputerPoints;
    }
	 if(cards[randComputer1]==3){
        let photo1=document.getElementById("cardC");
        photo1.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/24.gif'>";      
                 countComputerPoints+=3;
					document.getElementById('countC').innerHTML=countComputerPoints;
    }
	 if(cards[randComputer1]==4){
        let photo1=document.getElementById("cardC");
        photo1.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/25.gif' >";      
                 countComputerPoints+=4;
					document.getElementById('countC').innerHTML=countComputerPoints;
    }
	 if(cards[randComputer1]==11){
        let photo1=document.getElementById("cardC");
        photo1.innerHTML="<img src='https://pogadat-online.ru/wp-content/uploads/2020/05/26.gif' >";      
                 countComputerPoints+=11;
					document.getElementById('countC').innerHTML=countComputerPoints;
    }
iteration++;

	if(countHumanPoints==21 && countComputerPoints==21){
		alert("friendship wins");
        iteration=0;
        countComputerPoints=0;
		countHumanPoints=0;
        document.getElementById('countH').innerHTML="";
        document.getElementById('countC').innerHTML="";
        document.getElementById("cardC").innerHTML="";
        document.getElementById("cardH").innerHTML="";
	}
	if(countHumanPoints==21 && countComputerPoints>21){
		alert("you are winner");
        iteration=0;
        countComputerPoints=0;
		countHumanPoints=0;
        document.getElementById('countH').innerHTML="";
        document.getElementById('countC').innerHTML="";
        document.getElementById("cardC").innerHTML="";
                document.getElementById("cardH").innerHTML="";
	}
	if(countComputerPoints==21 && countComputerPoints>21){
		alert("computer is winner");
        iteration=0;
        countComputerPoints=0;
		countHumanPoints=0;
        document.getElementById('countH').innerHTML="";
        document.getElementById('countC').innerHTML="";
        document.getElementById("cardC").innerHTML="";
                document.getElementById("cardH").innerHTML="";
	}
	if(iteration==4 || iteration==4){
			alert("no one wins");
            iteration=0;          
                countComputerPoints=0;
                countHumanPoints=0;
                document.getElementById('countH').innerHTML="";
                document.getElementById('countC').innerHTML="";
                document.getElementById("cardC").innerHTML="";
                document.getElementById("cardH").innerHTML="";
		}
}


$('#true').css({
  color:" rgb(44, 146, 61)"
});
$('#false').css({
  color:"rgb(226, 48, 48)"
});

var eng=["Augury","Boor","Cardinal","Culpability","Deference",
"Dearth","Dexterity","Equivocation","Glib","Maudlin","Parsimonious",
"Philanthropy","Postulate","Vestige","Visionary","Volatile","Vilify"];
var rus=["Предсказание","Грубиян","Важнейший","Виновность", "Уважение",
"Дефицит","Ловкость","Уклонение","Свободный","Плаксивый",
 "Бережливость","Благотворительность","Аксиома","Частица","Мечтательный","Непостоянный","Чернить"];
let countTrue=0;
let countFalse=0;
var i;
var iteration=1;

$('#but1').click(function(){
  var translate=document.getElementById('translate').value;
 if(translate!=""){
  if(translate==rus[i])
  {
  countTrue++;
  document.getElementById("true").innerHTML=countTrue;
  }
  if(translate!=rus[i])
  {
    if(iteration==1){
      document.getElementById("trOnCard").innerHTML="Space for translation of previous word";
     
       }
    else{
       countFalse++;
      document.getElementById("false").innerHTML=countFalse;   
      document.getElementById("trOnCard").innerHTML="previous: "+rus[i];
   
    }
    }
  }
  else{
    alert("put the word!");
  }

i=Math.floor(Math.random()*eng.length);
document.getElementById('wordOnCard').innerHTML=eng[i];

document.getElementById('translate').value="";
document.getElementById('carousel').innerHTML=iteration+"/10";

if(iteration==11){
alert("Attempts end");
iteration=1;
document.getElementById('carousel').innerHTML=iteration+"/10";
countFalse=0;
countTrue=0;
document.getElementById("true").innerHTML=countTrue;
document.getElementById("false").innerHTML=countFalse;
 
}
iteration++;

})


 





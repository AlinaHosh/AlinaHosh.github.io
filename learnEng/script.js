



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
$(document).ready(function(){
  

  $('#true').css({
    color:" rgb(44, 146, 61)"
  });
  $('#false').css({
    color:"rgb(226, 48, 48)"
  });
  
  $('.but1').click(function(){
 // let input=$("input[type==text]");
 var translate=$('#translate').val();
 //if(translate!=''){
  if(translate==rus[i])
  {
  countTrue++;
  $("#true").text(countTrue);
  }
  else
  //if(translate!=rus[i])
  {
    if(iteration==1){
      $("#trOnCard").text('Space for translation of previous word');   
       }
    else{
       countFalse++;
      $("#false").text(countFalse);   
     $("#trOnCard").text("previous: "+rus[i]);
    }
    }
 //}
  //else
 // {
 //   alert("put the word!");
 // }

i=Math.floor(Math.random()*eng.length);
$('#wordOnCard').text(eng[i]);
$('#translate').val('');

$('#carousel').text(iteration+"/10");

iteration++;
if(iteration==11){
alert("Attempts end");
iteration=1;
$('#carousel').text(iteration+"/10");
countFalse=0;
countTrue=0;
$("#true").text(countTrue);
$("#false").text(countFalse);
 
}

  });
});


 






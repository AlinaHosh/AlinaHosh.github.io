$('.card').css({
  display:"flex",
  flexDirection:"column",
  justifyContent: "center",
alignSelf:"center",
  margin:"auto",
width:"500px",
height:"300px",
marginTop:"40px",
backgroundColor:"white",
  boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px white"
});
$('#true').css({
  color:" rgb(44, 146, 61)"
});
$('#false').css({
  color:"rgb(226, 48, 48)"
});
$(':button').css({
  color:"rgb(171, 171, 201)",   
  border: "4px solid rgb(171, 171, 201)",
  fontSize: "25px",
  textAlign: "center",
  fontWeight: "bolder",
  borderRadius: "150px",
width: "auto",
height: "70px",
margin: "auto",
marginTop: "20px"
});


var eng=["Permission","Map","Translation","Space","Fire",
"Mountain","Rock","Insect","Nephew","Happiness","Attitude",
"Although","Advice","Catch","Disease","Edge","Example"];
var rus=["Разрешение","Карта","Перевод","Пространство", "Огонь",
"Гора","Скала","Насекомое","Племянник","Счастье",
 "Отношение","Хотя","Совет","Ловить","Болезнь","Край","Пример"];
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
$('#wordOnCard:odd').css("color","red")

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



 






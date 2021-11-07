/*
 var h1 =document.createElement('h1');
  h1.id="h1";
  h1.innerHTML="MAGIC BALL";
 document.body.append(h1);

 var h2 =document.createElement('h2');
 h2.id="h2";
 h2.innerHTML="Put your question";
document.body.append(h2);

 var question=document.createElement('input'); 
 question.className='question';  
 question.setAttribute('type','text');
 document.body.append(question);

  var shar=document.createElement("div");
  shar.className='shar';
  //document.body.append(shar);

 // var button=document.createElement('button');
 // button.className='pred';
 // button.innerHTML="click on me";
// shar.appendChild(button);

  //shar.appendChild(button);
  */
 document.body.innerHTML='<h1>MAGIC BALL</h1><h2>Put your question</h2><input class="question" id="question" type="text"><div class="shar"><div class="pred" id="pred"></div><input class="button" type="button" value="click on me" onClick="Prediction();"></div>'
 //button.innerHTML="click on me";

//button.addEventListener('click',Prediction);
 function Prediction() {
    let question=document.getElementById("question").value;
    if(question==""){
       alert("ask a question!!!");
    }
    else{
   var answers=[
      "Yes",
      "Maybe",
      "Definely",
      "Most likely",
      "No", 
      "Try again",
      "It is certain",
      "Don’t count on it",
      "Very doubtful",
      "Outlook not so good",
      "Yes yes yes",
      "Spirits say yes",
      "Never",
      "For sure",
      "Not today"
   ];
    let answer = Math.floor(Math.random() * answers.length);

     let element= document.getElementById("pred");
     element.innerText=answers[answer];
     document.getElementById("pred").innerHTML=answers[answer];
    }
    } 





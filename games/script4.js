 document.body.innerHTML='<div class="field"><div class="game"><h1>MAGIC BALL</h1><h2>Put your question</h2><input class="question" id="question" type="text"><div class="shar"><div class="pred" id="pred"></div><input class="button" type="button" value="click on me" onClick="Prediction();"></div></div><button><a class="button" href="index.html">Back</a></button></div>'
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
    // document.getElementById("pred").innerHTML=answers[answer];
    }
    } 





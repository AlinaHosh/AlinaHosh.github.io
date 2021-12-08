alert("Your name");
var name=prompt();
if(name==""){
    alert("Input your name!!!");
    var name=prompt();
}
document.getElementById('name').innerHTML=name;

var lang=["html","js","css"];
    var check=document.getElementById("button");
    var ph=document.getElementsByClassName("photo");
    let iteration=1;

        check.addEventListener("click",function Play(){
    document.getElementById("res").innerHTML="";
    document.getElementById("attempt").innerHTML="attempt "+iteration;

    for(var i=0;i<3;i++){
        ph[i].style.transform="rotateX(7200deg)";
    }

    for(var i=0;i<3;i++){  
var temp=Math.floor(Math.random()*3);

ph[i].innerHTML=lang[temp];


if(lang[temp]=="css"){
    ph[i].innerHTML="<img src='https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png'>";
}
if(lang[temp]=="html"){
    ph[i].innerHTML="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png'>";
}
if(lang[temp]=="js"){
    ph[i].innerHTML="<img src='https://i.pinimg.com/originals/98/0b/a0/980ba07956ccfdf81b5060b1795cdcad.png'>";
}
}
iteration++;
	if(ph[0].innerHTML==ph[1].innerHTML && ph[1].innerHTML==ph[2].innerHTML){    
       document.getElementById("res").innerHTML="you win";
        iteration=1;       
	}
	 if(iteration>3){
        document.getElementById("res").innerHTML="you loose";
            iteration=1;          
		}   
})

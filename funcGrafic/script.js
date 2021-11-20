var canvas = document.getElementById("canvasPlot");
var ctx = canvas.getContext("2d");

const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

const scaleX = 40; 
const scaleY = 10;

const xAxis = Math.round(canvasWidth/scaleX/2)*scaleX; //центр
const yAxis = Math.round(canvasHeight/scaleY/2)*scaleY;


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(xAxis,0);
ctx.lineTo(xAxis, canvasHeight);
ctx.font = "20px Arial";
ctx.fillText("y", xAxis -20,15);

ctx.moveTo(0,yAxis);
ctx.lineTo(canvasWidth, yAxis);
ctx.fillText("x", canvasWidth -20,yAxis -10);
ctx.fillText("0", xAxis +5 ,yAxis +17);

ctx.stroke();
ctx.closePath();

ctx.fillStyle = "white";
for (let i =0; i <= canvasWidth; i++)
{
    x =(i - xAxis) / scaleX;
    y=Math.pow((Math.pow((Math.sin(2*x)),2)+0.5),0.5);
    ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY *y, 5,5);
}

function tab(){
   var xMIN=parseFloat(document.getElementById("a").value);
  var  bMAX=parseFloat(document.getElementById("b").value);
   var step=parseFloat(document.getElementById("step").value);
var i=0;
let x=xMIN;
    for(let x=xMIN;x<=bMAX;x+=step){
        let y=Math.pow((Math.pow((Math.sin(2*x)),2)+0.5),0.5);
 output1="x= "+x+" y= "+y.toFixed(3);
document.forms[0].tabList.options[i]= new Option(output1) ;  
i++;
    }

    j=0;
    while(x<=bMAX){
        let y=Math.pow((Math.pow((Math.sin(2*x)),2)+0.5),0.5);       
        output2="x= "+x+" y= "+y.toFixed(3);
document.forms[0].tabList1.options[j]= new Option(output2) ;  
x+=step;
j++;
    }

    k=0;
    x=xMIN;
    do{
       let y=Math.pow((Math.pow((Math.sin(2*x)),2)+0.5),0.5);       
       output3="x= "+x+" y= "+y.toFixed(3);
document.forms[0].tabList2.options[k]= new Option(output3) ;  
x+=step;
k++;
    }while(x<=bMAX);

    }







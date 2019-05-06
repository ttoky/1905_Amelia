console.log("test");

var ww = window.innerWidth;
var wh = window.innerHeight;

var canvas_ctx_01=document.getElementById("canvas_01").getContext("2d");
var canvas_ctx_02 =document.getElementById("canvas_02").getContext("2d");

var img = document.createElement('IMG');

var g_v=0.0;
var v= 1;

var text_01;
text01 = document.createElement('div'); 
text01.id ='text_01';
document.getElementById("colum_01").appendChild(text01);

var newT=".....";
var len =0;
var pause;
var t = "*Output the coordinates of the mouse pointer while the mouse pointer moves over an element:";



var init = function(){
animate();
}

var animate = function (){
requestAnimationFrame(animate);
gradientAnimation();

ww = window.innerWidth;
wh = window.innerHeight;

//console.log('animate');
}

img.onload = function () {

var c = document.getElementById("bg_img");
var ctx = c.getContext("2d");

/*
    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 0);
   ctx.lineTo(0, 100);
    ctx.closePath();
   ctx.clip();
   ctx.drawImage(img, 0, 0, img.width, img.height);
   ctx.restore();
   */
}

//-------------------------------


var gradientAnimation= function(){

    g_v+=1*v;
    if((g_v> 600) || (g_v <0)){
        v*=-1;
    }


    var gradient_01 = canvas_ctx_01.createLinearGradient(0, 0,g_v, 0);
    gradient_01.addColorStop(0, 'rgba(255, 6, 81,'+1.0+')');
    gradient_01.addColorStop(0.5 ,'rgba(216,'+ g_v+', 143,0.8)');
    gradient_01.addColorStop(1, 'rgba('+g_v+', 6, 81,0.5)');
    canvas_ctx_01.fillStyle = gradient_01;
    canvas_ctx_01.fillRect(0, 0,  window.innerWidth*0.5, window.innerHeight);


    var gradient_02 = canvas_ctx_02.createLinearGradient(0, 0,0,g_v);
    gradient_02.addColorStop(0, 'rgba(81, 6, 255,0.1)');
    gradient_02.addColorStop(0.5 ,'rgba('+ g_v+'30, 143,0.1)');
    gradient_02.addColorStop(1, 'rgba('+g_v+', 6, 81,0.5)');
    canvas_ctx_02.fillStyle = gradient_02;
    canvas_ctx_02.fillRect(0, 0,  window.innerWidth*0.5, window.innerHeight);



    // text animation
    len +=1;
    newT+=t.charAt(len);


    if (len > t.length-1){
        len=0; 
        newT="";  
    }

    text01.innerHTML = newT;


}

//-------------------------------


init();

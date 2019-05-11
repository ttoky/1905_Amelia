//console.log("test");

var ww = window.innerWidth;
var wh = window.innerHeight;


var div_01= document.getElementById("polish hill");
var canvas = document.createElement('canvas');
canvas.id = "canvas_01";
document.getElementById("polish hill").appendChild(canvas);
var canvas_ctx_01=document.getElementById("canvas_01").getContext("2d");


var div_02= document.getElementById("college town");
var canvas_02 = document.createElement('canvas');
canvas_02.id = "canvas_02";
div_02.appendChild(canvas_02);
var canvas_ctx_02 =document.getElementById("canvas_02").getContext("2d");


var div_03= document.getElementById("prospect hill");
var canvas_03 = document.createElement('canvas');
canvas_03.id = "canvas_03";
div_03.appendChild(canvas_03);
var canvas_ctx_03 =document.getElementById("canvas_03").getContext("2d");

var img = document.createElement('IMG');

var g_v=0.0;
var v= 1;


var text_01;
text01 = document.createElement('div'); 
text01.id ='text_01';
document.getElementById("polish hill").appendChild(text01);

var newT=".....";
var len =0;
var pause;
var t = "*Output the coordinates of the mouse pointer while the mouse pointer moves over an element:";

var text_02;
text02 = document.createElement('div'); 
text02.id ='text_02';
document.getElementById("downtown").appendChild(text02);
text02.innerHTML = "teiaefaneifanie";


// three.js
var container, scene, camera, render;

var icosahedron;
var targetRotation = 0.0;

var div_11= document.getElementById("downtown");
var canvas_11 = document.createElement('canvas');
canvas_11.id = "canvas_11";
//div_11.appendChild(canvas_11);
///var canvas_ctx_11 =document.getElementById("canvas_11").getContext("3d");

var cx = div_11.width/ 2;
var cy = div_11.height / 2;

var init = function(){

     scene = new THREE.Scene();

     //3-3. camera
     //http://threejs.org/docs/#Reference/Cameras/PerspectiveCamera
     camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
     camera.position.x = cx;
     camera.position.y = cy;
     camera.position.z = 500;
 
 
     //3-4. renderer 생성하고 container (div)에 renderer에서 생성한 엘레먼트를 붙힌다.
     // setClearColor는 scene에서 배경색과 투명도를 조절한다.
     //three.js에서는 webGL렌더와 canvas렌더 두가지를 지원한다.
     renderer = new THREE.CanvasRenderer();
     renderer.setSize(div_11.offsetWidth, div_11.offsetHeight);
     renderer.setClearColor(0xF37, 1.0);
     div_11.appendChild(renderer.domElement);
 
 
     //3-5. 오브젝트 만들기
     //http://threejs.org/docs/index.html#Reference/Extras.Geometries/BoxGeometry
     //BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
     // 오브젝트를 만들기 위해서는 1. geometry(형태), 2.material(색)이 필요하다. 
     var geometry = new THREE.IcosahedronGeometry(1, 0);
 
     for (var i = 0; i < geometry.faces.length; i++) {
         geometry.faces[i].color.setHex(Math.random() * 0xffffff);
     }
     var material = new THREE.MeshBasicMaterial({
         vertexColors: THREE.FaceColors
     });
 
     icosahedron = new THREE.Mesh(geometry, material);
     icosahedron.position.x=cx;
     icosahedron.position.y=cy;
     icosahedron.scale.x = cx * 0.5;
     icosahedron.scale.y = cx * 0.5;
     icosahedron.scale.z = cx * 0.5;
     scene.add(icosahedron);
 

}

var animate = function (){
requestAnimationFrame(animate);
gradientAnimation();
render();

ww = window.innerWidth;
wh = window.innerHeight;

//console.log('animate');
}

img.onload = function () {

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
    canvas_ctx_01.fillRect(0, 0,  window.innerWidth, window.innerHeight);


    var gradient_02 = canvas_ctx_02.createLinearGradient(0, 0,0,g_v);
    gradient_02.addColorStop(0, 'rgba(81, 6, 255,0.1)');
    gradient_02.addColorStop(0.5 ,'rgba('+ g_v+'30, 143,0.1)');
    gradient_02.addColorStop(1, 'rgba('+g_v+', 6, 81,0.5)');
    canvas_ctx_02.fillStyle = gradient_02;
    canvas_ctx_02.fillRect(0, 0,  window.innerWidth, window.innerHeight);


    var gradient_03 = canvas_ctx_03.createLinearGradient(0, g_v,0,-g_v);
    gradient_03.addColorStop(0, 'rgba(0,0, 255,0.1)');
    gradient_03.addColorStop(0.5 ,'rgba(30, 143,0.1)');
    gradient_02.addColorStop(1, 'rgba('+g_v*2+', 6,200,0.5)');
    canvas_ctx_03.fillStyle = gradient_03;
    canvas_ctx_03.fillRect(0, 0,  canvas_03.width, canvas_03.height);


    // text animation
    len +=1;
    newT+=t.charAt(len);


    if (len > t.length-1){
        len=0; 
        newT="";  
    }

    text01.innerHTML = newT;

document.getElementById("prospect hill").style.zIndex= Math.random()*10-10;

}

function render() {
    icosahedron.rotation.y += Math.random() * 0.05;
    renderer.render(scene, camera);
};


//-------------------------------


init();
animate();

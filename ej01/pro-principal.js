
//CREACION DE LA ESCENA Y SUS FACTORES.

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

var size = 100;
var arrowSize = 40;
var divisions = 50;
var origin = new THREE.Vector3( 0, 0, 0 );
var x = new THREE.Vector3( 1, 0, 0 );
var y = new THREE.Vector3( 0, 1, 0 );
var z = new THREE.Vector3( 0, 0, 1 );
var color2 = new THREE.Color( 0x333333 );
var colorR = new THREE.Color( 0xAA0000 );
var colorG = new THREE.Color( 0x00AA00 );
var colorB = new THREE.Color( 0x0000AA );

//Creacion de la guia (guilla)
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

//Creacion de los  ejes
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

//Creacion de la camara
var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 30;
camera.position.y = 10;
camera.position.x = 10;
const light = new THREE.AmbientLight(0x404040, 5);
scene.add(camera);
scene.add(light);

//------------------------------------------------------------------------------------------------

//VARIABLE LADO PARA DETERMINAR LAS DIMENSIONES
var lado = 8;
const CUBO_F = cC(lado); //LLAMADO DE LA FUNCION DE CREAR CUBOS

//Escena
scene.add(arrowX);
scene.add(arrowY);
scene.add(arrowZ);
scene.add(gridHelperXZ);
scene.add(CUBO_F); //RETORNO DE LA FUNCION

const controls = new THREE.OrbitControls(camera, renderer.domElement);  
animate();

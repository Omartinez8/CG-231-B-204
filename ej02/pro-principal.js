
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
camera.position.z = 5;
camera.position.y = 3;
camera.position.x = -1;
const light = new THREE.AmbientLight(0x404040, 5);
scene.add(camera);
scene.add(light);

//------------------------------------------------------------------------------------------------

//FACTORES DEL CONO
var b = 1; // BASE DEL CONO
var l = 10;// lADO DE LA BASE, ENTRE MAS GRANDE SEA EL NUMERO, TIENE MAS A UNA CIRCUNFERENCIA
var h = 3; // ALTURA DEL CONO
const cono = cC(b, l); //CREAR CONO

//TRANSFORMADAS APLICADAS AL CONO
cono.scale.y = h;
cono.rotation.z = 3*Math.PI/2; 
cono.rotation.x = Math.PI/2;
cono.rotation.y = -Math.PI/9.7;
cono.position.set((1.75 * b), (b/2.1), 0);

//SE AGREGAN LOS ELEMENTOS A LA ESCENA 
scene.add(cono);
scene.add(arrowX);
scene.add(arrowY);
scene.add(arrowZ);
scene.add(gridHelperXZ);
const controls = new THREE.OrbitControls(camera, renderer.domElement);  
animate();

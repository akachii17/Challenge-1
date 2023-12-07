/*IMPORT MODULES
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


//CONSTANT & VARIABLES
let width = window.innerWidth;
let height = window.innerHeight;
var geometries = [];
let materials = [];
var cubes = [];

//CREATE SCENE AND CAMERA
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 35, width / height, 0.1, 100);
camera.position.set(10, 10, 10);

//CREATE GEOMETRY AND ADD TO THE SCENE
for(let i = 1; i<= 4; i++){
  geometries[i] = new THREE.BoxGeometry (i, i, i);
  materials [i] = new THREE.MeshBasicMaterial ({color: i/100 * 0xffffff});
  cubes[i] = new THREE.Mesh (geometries[i], materials[i]);
  cubes[i].position.set(1, i*i, 1);
}
cubes.forEach(function(element, index){
  scene.add(element);
})

//CREATE A RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const container = document.querySelector('#threejs-container')
container.append(renderer.domElement)

//LIGHTINGS
ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
directionalLight.position.set(2,5,5);
directionalLight.target.position.set(-1,-1,0);
scene.add( directionalLight );
scene.add(directionalLight.target);

//CREATE MOUSE CONTROL
control = new OrbitControls (camera, renderer.domElement);

//ANIMATE AND RENDER
function animate() {
requestAnimationFrame( animate );
controls.update();

renderer.render( scene, camera );

cubes.forEach(function(element, index){
  element.rotation.x += 0.01 * index;
  element.rotation.y += 0.02 * index;

})
}

//RESPONSIVE
function handleResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.render(scene, camera);
}

main();
*/

//IMPORT MODULES
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

//VARIABLES
let width = window.innerWidth;
let height = window.innerHeight;
 
console.log(width, height);
 
//CREATE SCENE AND CAMERA
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 35, width / height, 0.1, 100);
camera.position.set(10, 10, 20)
 
//CREATE GEOMETRY AND ADD TO THE SCENE
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(1,5,0)
scene.add( cube );
 
 // RESPONSIVE
 
 function handleResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.render(scene, camera);
}
 
window.addEventListener('resize', handleResize);
 
//CREATE A RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const container = document.querySelector('#threejs-container');
container.append(renderer.domElement);
 
//CREATE MOUSE CONTROL
const controls = new OrbitControls( camera, renderer.domElement );
 
//RENDER - WITHOUT ANIMATION
//renderer.render(scene, camera)
 
//ANIMATE AND RENDER
function animate() {
	requestAnimationFrame( animate );
 
  controls.update();
 
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
 
	renderer.render( scene, camera );
}
 
animate();
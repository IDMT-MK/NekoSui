// Global Value
var WIDTH      = window.innerWidth;
var HEIGHT     = window.innerHeight;
var VIEW_ANGLE = 45;
var ASPECT     = WIDTH/HEIGHT;
var NEAR       = 1;
var FAR        = 1000;
var MODEL      = '3d/test.blb';

// MAIN
window.onload = function(){

	// RENDER
	var renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( WIDTH, HEIGHT );
	document.body.appendChild( renderer.domElement );
	
	// SCENE
	var scene = new THREE.Scene();
	
	// CAMERA
	var camera = new THREE.PerspectiveCamera( 
					VIEW_ANGLE, ASPECT, NEAR, FAR );
	camera.position.z = 50;
	scene.add( camera );
	
	// MAKE MESH & MATERIALS
	var geometry = new THREE.CubeGeometry(10, 10, 10);
	var material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
	var cube = new THREE.Mesh( geometry, material);
	scene.add( cube );

	// LIGHT
	var light = new THREE.DirectionalLight( 0xffffff, 1.0 );
	light.position.set( 2, 5, 10 );
	scene.add( light );

	// ANIMATION
	function animate() {
		requestAnimationFrame( animate );
		cube.rotation.y += 0.02;
		renderer.render( scene, camera );
	}
	animate();	
}

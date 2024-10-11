// Global Value
var WIDTH      = window.innerWidth;
var HEIGHT     = window.innerHeight;
var VIEW_ANGLE = 45;
var ASPECT     = WIDTH/HEIGHT;
var NEAR       = 1;
var FAR        = 1000;

// // MAIN
// window.onload = function(){

// 	// RENDER
// 	var renderer = new THREE.WebGLRenderer( { antialias: true } );
// 	renderer.setSize( WIDTH, HEIGHT );
// 	const canvas = document.querySelector('#main_canvas');
// 	canvas.appendChild( renderer.domElement );
	
// 	// SCENE
// 	var scene = new THREE.Scene();
	
// 	// CAMERA
// 	var camera = new THREE.PerspectiveCamera( 
// 					VIEW_ANGLE, ASPECT, NEAR, FAR );
// 	camera.position.z = 50;
// 	scene.add( camera );
	
// 	// // MAKE MESH & MATERIALS
// 	// var geometry = new THREE.CubeGeometry(10, 10, 10);
// 	// var material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
// 	// var cube = new THREE.Mesh( geometry, material);
// 	// scene.add( cube );

// 	// 3Dモデルの読み込み
// 	const loader = new THREE.GLTFLoader();
// 	let model = null;
//     loader.load(
// 		 //3Dモデルファイルのパスを指定
//         '/3d/test.glb',
//         function (glb) {
//             model = glb.scene;
//             model.name = "model_castle";
//             model.scale.set(80.0, 80.0, 80.0);
//             model.position.set(0,-200,0);
//             scene.add( glb.scene );
//         },
//         function (error) {
//             console.log(error);
//         }
//     );


// 	// LIGHT
// 	var light = new THREE.DirectionalLight( 0xffffff, 1.0 );
// 	light.position.set( 2, 5, 10 );
// 	scene.add( light );

// 	// ANIMATION
// 	function animate() {
// 		requestAnimationFrame( animate );
// 		cube.rotation.y += 0.02;
// 		renderer.render( scene, camera );
// 	}
// 	animate();	
// }


window.addEventListener("DOMContentLoaded", init);
function init() {
    // レンダラーを作成
    const canvasElement = document.querySelector('#myCanvas');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasElement,
    });
 
    // サイズ指定
    const width = 745;
    const height = 540;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
 
    // シーンを作成
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x87B8C0 );
 
    // 環境光源を作成
    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.intensity = 2;
    scene.add(ambientLight);
 
    // 平行光源を作成
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.intensity = 2;
    directionalLight.position.set(0, 3, 6); //x,y,zの位置を指定
    scene.add(directionalLight);
 
    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, 1500);
 
    // カメラコントローラーを作成
    const controls = new THREE.OrbitControls(camera, canvasElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
 
    // 3Dモデルの読み込み
    const loader = new THREE.GLTFLoader();
	let model = null;
    loader.load(
	  //3Dモデルファイルのパスを指定
        '/test/3d/test.glb',
        function (glb) {
            model = glb.scene;
            model.name = "model_test";
            model.scale.set(80.0, 80.0, 80.0);
            model.position.set(0,-200,0);
            scene.add( glb.scene );
        },
        function (error) {
            console.log(error);
        }
    );
 
    // リアルタイムレンダリング
	tick();
	function tick() {
		controls.update();
		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}
}

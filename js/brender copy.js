
window.addEventListener("DOMContentLoaded", init);
function init() {
    // レンダラーを作成
    const canvasElement = document.querySelector('#myCanvas');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasElement,
    });

    // サイズ指定
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( "rgb(255, 249, 240)" );

    // 環境光源を作成
    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.intensity = 2;
    scene.add(ambientLight);

    // 平行光源を作成
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.intensity = 0.7;
    directionalLight.position.set(1, 1, 1); //x,y,zの位置を指定
    scene.add(directionalLight);

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0, 0, +1000);

    // カメラコントローラーを作成
    const controls = new THREE.OrbitControls(camera, canvasElement);
    // controls.enableDamping = false;
    // controls.dampingFactor = 0.2;

    // 3Dモデルの読み込み
    const loader = new THREE.GLTFLoader();
	let model = null;
    loader.load(
	  //3Dモデルファイルのパスを指定
        '../3d/japanesecat1.glb',
        function (glb) {
            model = glb.scene;
            model.name = "model_test";
            model.scale.set(150.0, 150.0, 150.0);
            model.position.set(-1600,-250,0);
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

    function onResize() {
        // ウィンドウのサイズを取得
        const width = window.innerWidth;
        const height = window.innerHeight;

        // レンダラーのサイズを調整
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        // カメラのアスペクト比を更新
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    // // 初期化のために実行
    // onResize();
    // // リサイズイベント発生時に実行
    // window.addEventListener("resize", onResize);

    // function onResize() {
    //   // サイズを取得
    //   const width = window.innerWidth;
    //   const height = window.innerHeight;

    //   // レンダラーのサイズを調整する
    //   renderer.setPixelRatio(window.devicePixelRatio);
    //   renderer.setSize(width, height);

    //   // カメラのアスペクト比を正す
    //   camera.aspect = width / height;
    //   camera.updateProjectionMatrix();
    // }

}

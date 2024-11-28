
window.addEventListener("DOMContentLoaded", init);
function init() {
    // レンダラーを作成
    const canvasElement = document.querySelector('#myCanvas');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha:true,
        canvas: canvasElement,
    });

    // サイズ指定 (ウィンドウのサイズを取得)
    const container = canvasElement.parentElement; // canvasの親要素
    const width = container.offsetWidth;
    const height = window.innerHeight * 0.6; // ウィンドウの高さの60%を使用
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color( "rgb(255, 249, 240)" );

    // 環境光源を作成
    const ambientLight = new THREE.AmbientLight(0xffffff, 2); // 強度を調整
    scene.add(ambientLight);

    // 平行光源を作成
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5); 
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // カメラコントローラーを作成
    // const controls = new THREE.OrbitControls(camera, canvasElement);
    // controls.screenSpacePanning = false;
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

            const box = new THREE.Box3().setFromObject(model); // モデルのバウンディングボックスを取得
            const center = new THREE.Vector3();
            box.getCenter(center); // 中心点を計算
            model.position.sub(center); // モデル全体を中心に移動
            model.scale.set(1, 1, 1);
            // model.position.set(0,0,0);


            scene.add( glb.scene );
        },
        function (error) {
            console.log(error);
        }
    );

    tick();
    // リアルタイムレンダリング
    function tick() {
        requestAnimationFrame(tick);
        if (model) {
            model.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
    }
    function onResize() {
        const width = container.offsetWidth;  // 親要素の幅
        const height = window.innerHeight * 0.6; // ウィンドウ高さの60%

        // レンダラーのサイズを調整
        renderer.setSize(width, height);

        // カメラのアスペクト比を更新
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    // 初期化時にリサイズ処理を適用
    onResize();

    // リサイズイベントを追加
    window.addEventListener("resize", onResize);
}

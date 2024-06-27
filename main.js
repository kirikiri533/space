let scene,camera,render,cube;

function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    
    renderer = new THREE.WebGLRenderer(); //ブラウザをゲーム画面のように扱う
    
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setClearColor(new THREE.Color("gray"));
    
    document.body.appendChild(renderer.domElement);//rendererをHTMLとして見られる
    
    /BOXのサイズ決定/
    const geometry = new THREE.BoxGeometry(2,2,2) //幅、高さ、奥行き
    // const material = new THREE.MeshBasicMaterial({color:"blue"});　色
    const texture = new THREE.TextureLoader().load("./textures/seaPhot.jpg"); 
    const material = new THREE.MeshBasicMaterial({map:texture})
    cube = new THREE.Mesh(geometry,material);
    scene.add(cube);
    
    camera.position.z = 5;
}


//アニメーション制御

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene,camera);
}

// ウィンドウ変更時にサイズを維持する処理

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}

window.addEventListener("resize",onWindowResize);

init();
animate();
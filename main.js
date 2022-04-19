var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 3;

var renderer = new THREE.WebGLRenderer({antialias : true});

renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

var geometry = new THREE.PlaneGeometry( 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

var geometry = new THREE.CircleGeometry( 2, 22 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh);

var light = new THREE.PointLight(0xFFFFF,1,500)
light.position.set(10,0,55);
scene.add(light);


function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.01;
    renderer.render(scene,camera);
    plane.rotation.x += 0.01;
    plane.rotation.y += 0.02;
}
animate();

requestAnimationFrame(animate);
 

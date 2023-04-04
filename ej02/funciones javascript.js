
//FUNCION PARA CREAR EL CONO
// LAS VARIABLES QUE INGRESAN SON: BASE, LADO Y ALTURA
function cC( b, l) {
    
    const geometry = new THREE.ConeGeometry( b, b, l);
    const material = new THREE.MeshNormalMaterial();
    const con = new THREE.Mesh(geometry, material);
    return con;
    
}

//----------------------------------------------------------------------

//FUNCION ANIMATE

function animate(){

requestAnimationFrame(animate);
controls.update();
renderer.render(scene, camera);

}
//FUNCIONN PARA CREAR LOS CUBOS
//INGRESA LA VARABLE LADO PARA DETERMINAR LAS DIMENSIONES

function cC(lado) {

	const dimensiones = [ [lado, lado, lado], [lado/2, lado/2, lado/2], [lado/4, lado/4, lado/4] ];
	const color = [0x01fbff, 0xffffff, 0xffc801];
	const material = [ new THREE.MeshMatcapMaterial({ color: color[0] }), new THREE.MeshMatcapMaterial({ color: color[1] }), new THREE.MeshMatcapMaterial({ color: color[2] }),];
  
		// SE CREA UN "for" PARA APLICAR LAS DIMENSIONES DE LOS TRES CUBOS SOLICITADOS
		const geometry = [];
		for (let m = 0; m < 3; m++) {
		geometry.push(new THREE.BoxGeometry(...dimensiones[m]));
		}
  
			//SE CREA UN  "for" PARA LA CREACION DE LOS TRES CUBOS
			const c = [];
			for (let m = 0; m < 3; m++) {
			c.push(new THREE.Mesh(geometry[m], material[m]));
			}
  
		////SE CREA UN  "for" PARA EL REPOSICIONAMIENTO DE LOS CUBOS
		for (let m = 0; m < 3; m++) {
		c[m].position.x = lado / 2;
		c[m].position.y = lado / 2;
		c[m].position.z = lado / 2;
		}
	
			//TRASLADAMOS LOS CUBOS 1 Y 2
			c[1].position.y = (5 * lado) / 4;
			c[2].position.y = (13 * lado) / 8;
  
		////SE CREA UN  "for" PARA GRAFICAR...
		for (let m = 0; m < 3; m++) {        
		scene.add (c[m]);
		}
  
	return c; //RETORNA LOS CUBOS
  
  }
   
  //FUNCIÓN ANIMATE
  function animate() {
  
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);   
  
  }
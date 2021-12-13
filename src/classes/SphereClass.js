//1- import three and GLTF loader
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';

class Sphere {
    constructor() {
        this.bind()
        // 2- instantiate GLTF loader
        this.modelLoader = new GLTFLoader();
    }

    init(scene) {
        this.scene = scene

        // 3- load asset
        this.modelLoader.load('./assets/models/furry_orb/scene.gltf', (glb)=>{
            console.log(glb)
            glb.scene.traverse(child => {
                if (child instanceof THREE.Mesh)
                    child.material = new THREE.MeshNormalMaterial
            })

            // 4- add to scene
            this.scene.add(glb.scene)
        });
    }

    update() {

    }
    
    bind() {

    }
}

// 4- dont forget to import and add to scene @ MainThreeScene.js
const _instance = new Sphere()
export default _instance
import * as THREE from 'three';
import React, {useEffect ,useRef } from "react";
import ReactDOM from "react-dom";
import { TextureLoader } from 'three';
// import vertexShader from './shaders/vertex.glsl'
// import fragmentShader from 'raw-loader!glslify-loader!./shaders/fragment.glsl'


const Three=()=>{   
    var mountRef = useRef(null);
    useEffect(()=>{
      // const fragmentShader = glslify(require('./shaders/fragment.glsl'))
      // console.log(fragmentShader)
      const canvas = document.querySelector("canvas.webgl");
      const scene = new THREE.Scene();
      const sizes = {
        width: 400,
        height: 400,
      };
      const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height,0.1,1000);
      
      const img=require('../assets/globe.jpg').default
      const texture=new THREE.TextureLoader()
      const loader=texture.load(img);

      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        // new THREE.ShaderMaterial({
        //   vertexShader,
        //   fragmentShader
        // })
        new THREE.MeshBasicMaterial({ map : loader})
        );
      scene.add(mesh);
      camera.position.z = 10;
      scene.add(camera);

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias:true
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio)

      function animate(){
        requestAnimationFrame(animate)
        renderer.render(scene,camera)
      }
      animate()
    },[]);

    return (
      <canvas className='webgl'>
        </canvas>
    );

}
export default Three;
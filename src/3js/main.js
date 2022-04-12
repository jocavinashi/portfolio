import * as THREE from 'three';
import gsap from 'gsap';
import React, {useEffect ,useRef ,useState ,useMemo} from "react";
import ReactDOM from "react-dom";
import { TextureLoader } from 'three';
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

import atomvertexShader from './shaders/atomvertex.glsl'
import atomfragmentShader from './shaders/atomfragment.glsl'
import marsatomfragmentShader from './shaders/marsatomfragment.glsl'
import moonatomfragmentShader from './shaders/moonatomfragment.glsl'


import { animate } from 'tsparticles/Utils';


const Three=(props)=>{  
  // const data = useMemo(()=>({
  //   x:mouse.x,
  //   y:mouse.y
  //   }), [mouse]);
    const sizes = {
      width: 400,
      height: 400,
    };
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height,0.1,1000)
    const group=new THREE.Group()
    useEffect(()=>{
      const variable=props.img
      const img=require(`../assets/${variable}.jpg`).default
      const texture=new THREE.TextureLoader()
      const loader=texture.load(img);
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms:{
            globeTexture:{
              value: loader
            }
          }
        })
        // new THREE.MeshBasicMaterial({ map : loader})
        );
      // create atmosphere
      const canvas = document.querySelector("canvas.webgl");
      scene.add(sphere);
      if (variable ==='mars'){
        const marsatmosphere = new THREE.Mesh(
          new THREE.SphereGeometry(5, 50, 50),
          new THREE.ShaderMaterial({
            vertexShader:atomvertexShader,
            fragmentShader:marsatomfragmentShader,
            blending:THREE.AdditiveBlending,
            side:THREE.BackSide
          })
          );
        marsatmosphere.scale.set(1.1,1.1,1.1)
        scene.add(marsatmosphere)
      }
      else if(variable === 'moon'){
        const moonatmosphere = new THREE.Mesh(
          new THREE.SphereGeometry(5, 50, 50),
          new THREE.ShaderMaterial({
            vertexShader:atomvertexShader,
            fragmentShader:moonatomfragmentShader,
            blending:THREE.AdditiveBlending,
            side:THREE.BackSide
          })
          );
        moonatmosphere.scale.set(1.1,1.1,1.1)
        scene.add(moonatmosphere)
      }
      else{
        const atmosphere = new THREE.Mesh(
          new THREE.SphereGeometry(5, 50, 50),
          new THREE.ShaderMaterial({
            vertexShader:atomvertexShader,
            fragmentShader:atomfragmentShader,
            blending:THREE.AdditiveBlending,
            side:THREE.BackSide
          })
          );
        atmosphere.scale.set(1.1,1.1,1.1)
        scene.add(atmosphere)
      }
      camera.position.z = 10;
      scene.add(camera);
      group.add(sphere)
      scene.add(group)
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias:true,
        alpha: true
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio)
      const clock = new THREE.Clock();
      const elapsedTime = clock.getElapsedTime();
      const mouse={
        x:0,
        y:0
      }
      function animate(){
        requestAnimationFrame(animate)
        renderer.render(scene,camera)
        sphere.rotation.y +=0.002
        gsap.to(group.rotation,{
          x:-mouse.y * 0.3,
          y:mouse.x*0.5,
          duration:2
        })
      }
      animate()
      canvas.addEventListener('mousemove',(obj)=>{ 
        mouse.x=(obj.clientX/sizes.width)*2-1
        mouse.y=-(obj.clientY/sizes.height)*2-1
      })
    },[props]);
    return ( 
      <canvas className='webgl'>
        </canvas>
    );

}
export default Three;
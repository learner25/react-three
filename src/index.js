import React, { Component } from "react";
import ReactDOM from "react-dom";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);
    renderer.domElement.addEventListener('click',fuck,false);
    function fuck(e)
    {
      console.log(e)
    }
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 ,wireframe:true});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    var controls = new OrbitControls(camera, renderer.domElement);
    scene.add(controls)
    var animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.x+=0.10
      cube.rotation.y+=0.10
      
      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import SweetAlert from 'react-bootstrap-sweetalert';
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
      cube.rotation.x+=0.010
      cube.rotation.y+=0.010
      
      renderer.render(scene, camera);
    };

    animate();
  }
 
 constructor(props) {
   super(props)
    return (
      <div>
        <SweetAlert
  success
  title="Woot!"
  onConfirm={this.hideAlert}
>
  I did it!
</SweetAlert>
      </div>
    )
    }

  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React3 from 'react-three-renderer';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
const OrbitControls = require('three-orbit-controls')(THREE)

const pi = Math.PI;
const rad = pi / 180;
const width = window.innerWidth;
const height = window.innerHeight;

var loader = new THREE.FontLoader();

export default class extends React.Component {
  state = {
    dirZ: -1,
    dirRad: rad,
    planePosition: new THREE.Vector3(0, 0, 0),
    planeRotation: new THREE.Euler(0, 0, 0)
  };

  cameraPosition = new THREE.Vector3(0, 100, 500);
  lightPosition = new THREE.Vector3(0, 100, 30);

  componentDidMount() {
    const controls = new OrbitControls(this.refs.camera);
    this.controls = controls;
    console.log(loader)
  }

  componentWillUnmount() {
    this.controls.dispose();
    delete this.controls;
  }

  onAnimate() {
    this.setState({
      planePosition: new THREE.Vector3(
        this.state.planePosition.x,
        this.state.planePosition.y,
        // this.state.planePosition.z + this.state.dirZ
        this.state.planePosition.z
      ),
      planeRotation: new THREE.Euler(
        this.state.planeRotation.x + this.state.dirRad,
        this.state.planeRotation.y,
        this.state.planeRotation.z + this.state.dirRad
      )
    });
  }

  render() {
    return (
      <React3
        mainCamera="camera"
        width={width}
        height={height}
        clearColor={0x000000}
        pixelRatio={window.devicePixelRatio}
        onAnimate={this.onAnimate.bind(this)}
      >
        <scene>
          <directionalLight position={this.lightPosition} />
          <ambientLight color={0xaaaaaa} />
          <perspectiveCamera
            name="camera"
            ref="camera"
            fov={45}
            aspect={width / height}
            near={1}
            far={2000}
            position={this.cameraPosition}
          />
          <gridHelper size={200} step={50} />
          <axisHelper size={1000} />

          {this.props.texture ?
            <mesh
              position={this.state.planePosition}
              rotation={this.state.planeRotation}
            >
              <planeGeometry
                width={this.props.texture.image.width / 2}
                height={this.props.texture.image.height / 2}
              />
              <meshLambertMaterial
                map={this.props.texture}
                side={THREE.DoubleSide}
              />
            </mesh>
          : 
            <mesh
              position={this.state.planePosition}
              rotation={this.state.planeRotation}
            >
              <boxGeometry
                width={100}
                height={100}
                depth={100}
              />
              <meshBasicMaterial
                color={0x00ff00}
              />
            </mesh>
          }
        </scene>
      </React3>
    );
  }
}
// export default class extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//
//     this.controls = null;
//
//     // construct the position vector here, because if we use 'new' within render,
//     // React will think that things have changed when they have not.
//     this.cameraPosition = new THREE.Vector3(0, 0, 5);
//
//     this.state = {
//       aaa: 'aaa',
//       cubeRotation: new THREE.Euler(),
//       fov: 200
//     };
//
//     this._onAnimate = () => {
//       // we will get this callback every frame
//
//       // pretend cubeRotation is immutable.
//       // this helps with updates and pure rendering.
//       // React will be sure that the rotation has now updated.
//       this.setState({
//         aaa: Math.random() * 100,
//         fov: Math.floor( Math.random() * (100 + 1 - 75) ) + 75,
//         cubeRotation: new THREE.Euler(
//           this.state.cubeRotation.x + 0.1,
//           this.state.cubeRotation.y + 0.1,
//           0
//         ),
//       });
//     };
//   }
//
//   componentDidMount() {
//     console.log('mounted')
//     // this.controls = new OrbitControls(cameraObj);
//     // const controls = new OrbitControls(this.refs.camera);
//     // this.controls = controls;
//   }
//
//   componentDidMount() {
//
//   }
//
//   componentWillUnmount() {
//     // this.controls.dispose();
//
//     // delete this.controls;
//   }
//
//   _onCameraMounted(cameraObj){
//     console.log(cameraObj)
//     console.log('loaded!!')
//     this.controls = new OrbitControls(cameraObj);
//   }
//
//   render() {
//     const width = window.innerWidth; // canvas width
//     const height = window.innerHeight; // canvas height
//
//     return (
//       <div>
//       <p>{this.state.aaa}</p>
//       <React3
//       mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
//       width={width}
//       height={height}
//
//       onAnimate={this._onAnimate}
//     >
//       <scene>
//         <perspectiveCamera
//           ref={this._onCameraMounted}
//           name="camera"
//           fov={75}
//           aspect={width / height}
//           near={0.1}
//           far={1000}
//
//           position={this.cameraPosition}
//         />
//         <mesh
//           rotation={this.state.cubeRotation}
//         >
//           <boxGeometry
//             width={1}
//             height={1}
//             depth={1}
//           />
//           <meshBasicMaterial
//             color={"#cc0000"}
//           />
//         </mesh>
//       </scene>
//     </React3>
//     </div>);
//   }
// }

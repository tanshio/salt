import React3 from 'react-three-renderer';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { EffectComposer, GlitchPass, RenderPass, FilmPass } from "postprocessing";
const OrbitControls = require('three-orbit-controls')(THREE)
import { Clock } from "three";

const pi = Math.PI;
const rad = pi / 180;
const width = window.innerWidth;
const height = window.innerHeight;

var loader = new THREE.FontLoader();

const clock = new Clock();

export default class extends React.Component {
  state = {
    dirZ: -1,
    dirRad: rad,
    planePosition: new THREE.Vector3(0, 0, 0),
    planeRotation: new THREE.Euler(0, 0, 0),
    textPos: new THREE.Vector3(0, 0, 0),
    font: null
  };

  // composer = new EffectComposer(this.renderer);
  dir = new THREE.Vector3( 1, 0, 0 );
  origin = new THREE.Vector3( 0, 0, 0 );
  length = 1;
  hex = 0xffff00;

  cameraPosition = new THREE.Vector3(0, 100, 1000);
  lightPosition = new THREE.Vector3(0, 100, 30);

  componentDidMount() {
    const controls = new OrbitControls(this.refs.mainCamera);
    this.controls = controls;
    console.log(loader)



    console.log('ccc')
    console.log(this.refs.mainScene);

    const that = this
    function setFont(font) {
      that.setState({
        font: font
      })
      // console.log('---')
      // console.log(that.state.font)
    }
    setTimeout(()=>{
      loader.load( 'static/fonts/helvetiker_regular.typeface.json', function ( font ) {

        console.log(font);
        console.log(new THREE.Font( font ));

        setFont(font)

      } );
    },1000)
    // that.composer.addPass(new RenderPass(that.refs.mainScene, that.refs.mainCamera));
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

  _handleRenderUpdated(renderer) {
    if(renderer !== null) {
      console.log(renderer instanceof THREE.WebGLRenderer); // true
      console.log('---')
      console.log(this);


      // const effect = new EffectComposer.ShaderPass(THREE.DotScreenShader);
      // this.composer.addPass(effect);
      //
      // // And another shader, drawing to the screen at this point
      // const effect2 = new EffectComposer.ShaderPass(THREE.RGBShiftShader);
      // effect2.renderToScreen = true;
      // this.composer.addPass(effect2);

      // const pass = new GlitchPass();
      // pass.renderToScreen = true;
      // this.composer.addPass(pass);
      this.renderer = renderer;




      // console.log(new GlitchPass());

      // const pass = new GlitchPass();
      // pass.renderToScreen = true;
      // this.composer.addPass(pass);
      // const pass = new FilmPass({
      //   grayscale: false,
      //   sepia: false,
      //   vignette: false,
      //   eskil: false,
      //   scanlines: true,
      //   noise: true,
      //   noiseIntensity: 0.5,
      //   scanlineIntensity: 0.5,
      //   scanlineDensity: 1.5,
      //   greyscaleIntensity: 1.0,
      //   sepiaIntensity: 1.0,
      //   vignetteOffset: 0.0,
      //   vignetteDarkness: 0.5
      // });
      //
      // pass.renderToScreen = true;
      // // this.filmPass = pass;
      // this.composer.addPass(pass);
      // this.composer.render()
      var that = this;
      let aaa
      setTimeout(function(){
        console.log('下')
        console.log(that.renderer)
        console.log(that.refs.mainScene)
        that.composer = new EffectComposer(that.renderer,{
          stencilBuffer: true,
          depthTexture: true
        });
        that.composer.addPass( new RenderPass( that.refs.mainScene, that.refs.mainCamera ) );
        const pass = new GlitchPass();
        // const pass = new FilmPass({
        //   grayscale: false,
        //   sepia: false,
        //   vignette: false,
        //   eskil: false,
        //   scanlines: true,
        //   noise: true,
        //   noiseIntensity: 0.5,
        //   scanlineIntensity: 0.5,
        //   scanlineDensity: 1.5,
        //   greyscaleIntensity: 1.0,
        //   sepiaIntensity: 1.0,
        //   vignetteOffset: 0.0,
        //   vignetteDarkness: 0.5
        // });

        pass.renderToScreen = true;
        // this.filmPass = pass;
        that.composer.addPass(pass);
        (function render() {

          aaa = requestAnimationFrame(render);
          that.composer.render(clock.getDelta());
          console.log(that.composer)

          // console.log('fff')

        }());
      },3000)

      // setTimeout(function() {
      //   cancelAnimationFrame(aaa)
      //   console.log('cancel')
      // },10000)



      console.log('eee')


      //
      // let rgbEffect = new ShaderPass( THREE.RGBShiftShader );
      // rgbEffect.uniforms[ 'amount' ].value = 0.0015;
      // rgbEffect.renderToScreen = true;
      // composer.addPass( rgbEffect );
      //
      // composer.render()

      // setTimeout(function(){
      //   console.log("aaa")
      //   that.setState({
      //     planePosition: new THREE.Vector3(
      //       that.state.planePosition.x,
      //       that.state.planePosition.y,
      //       // that.state.planePosition.z + that.state.dirZ
      //       that.state.planePosition.z
      //     ),
      //     planeRotation: new THREE.Euler(
      //       that.state.planeRotation.x + that.state.dirRad,
      //       that.state.planeRotation.y,
      //       that.state.planeRotation.z + that.state.dirRad
      //     )
      //   });
      // },3000)

    } else {
      console.log('---')
      console.log(renderer)
      // renderer is just destroyed or will be recreated soon
    }
  }

  _onManualRenderTriggerCreated(e) {
    console.log('bbbbbbb')
    console.log(e);
  }



  render() {
    return (
      <React3
        mainCamera="mainCamera"
        width={width}
        height={height}
        clearColor={0x000000}
        pixelRatio={window.devicePixelRatio}
        onAnimate={this.onAnimate.bind(this)}
        ref="react3"
        onRendererUpdated={this._handleRenderUpdated.bind(this)}
        onManualRenderTriggerCreated={this._onManualRenderTriggerCreated}
        gammaInput
        gammaOutput
        shadowMapEnabled
        // antialias
        clearColor={"#cccccc"}
        clearAlpha="0.6"
        // forceManualRender={true}
      >
        <scene ref="mainScene">
          <directionalLight position={this.lightPosition} />
          <ambientLight color={0xaaaaaa} />
          <perspectiveCamera
            name="mainCamera"
            ref="mainCamera"
            fov={45}
            aspect={width / height}
            near={1}
            far={2000}
            position={this.cameraPosition}
          />
          <gridHelper size={200} step={50} />
          <axisHelper size={1000} />
          <cameraHelper cameraName="mainCamera" position={this.cameraPosition} lookat={this.cameraPosition} />
          <arrowHelper origin={this.origin} dir={this.dir} />
          {/* {this.state.font && this.state.forceManual ?
            <mesh
              position={this.state.planePosition}
              rotation={this.state.planeRotation}
            >

              <textGeometry
                text="SALT"
                font={this.state.font}
                size={100}

              />
              <meshBasicMaterial
                color={0x00ff00}
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
          } */}
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
          <mesh
            position={this.state.planePosition}
            rotation={this.state.planeRotation}
          >

            <boxGeometry
              width={40}
              height={40}
              depth={200}
            />
            <meshBasicMaterial
              color={"#CC0000"}
            />
          </mesh>
        </scene>
      </React3>
    );
  }
}

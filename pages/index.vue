<template lang="pug">
  section.container
    List(:link="'/effect04'" :title="'POLYLINE'" :categories="['Canvas','Animation']" :img="'img02.jpg'")
    List(:link="'/effect03'" :title="'LINE'" :categories="['Canvas','Animation']" :img="'img03.png'")
    List(:link="'/effect02'" :title="'BUBBLE'" :categories="['Canvas','Animation']" :img="'img02.jpg'")
    List(:link="'/effect01'" :title="'BUBBLE'" :categories="['WebGL','Animation']" :img="'img01.png'")
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import List from "~/components/List.vue";
import html2canvas from "html2canvas";
// let PIXI;
// if (process.browser) {
//   PIXI = require("pixi.js");
// }
const source = require("~/assets/common.frag");
@Component({
  components: {
    List
  }
})
export default class extends Vue {

}

// export default {
//   components: {
//     Logo
//   },
//   methods: {
//     setCanvas () {
//       console.log('next')
//       PIXI.filters.MyFilter = class MyFilter extends PIXI.Filter {
//         constructor() {
//           const fragmentSrc = source;
//           // const fragmentSrc = `
//           //   precision mediump float;
//           //   varying vec2 vTextureCoord;
//           //   uniform sampler2D uSampler;
//           //   varying vec4 vColor;
//           //
//           //   uniform float time;
//           //
//           //   void main(void) {
//           //     vec2 cord = vTextureCoord;
//           //     vec4 color = texture2D(uSampler, cord);
//           //     float scanLineInterval = 1300.0; // 大きいほど幅狭く
//           //     float scanLineSpeed = time * 5.0; // 走査線移動速度
//           //
//           //     // 走査線
//           //     float scanLine = max(1.0, sin(vTextureCoord.y * scanLineInterval + scanLineSpeed) * 2.0) * 1.5;
//           //
//           //     color.rgb *= scanLine;
//           //
//           //     gl_FragColor = color;
//           //   }
//           // `
//           super(
//             null, // vertex shader
//             fragmentSrc, // fragment shader
//             {
//               time: { type: "1f", value: 0.0 }
//             } // uniforms
//           );
//         }
//       };
//
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       html2canvas(document.querySelector(".container"), {
//         y: window.pageYOffset,
//         height
//       }).then(canvas => {
//         let app = new PIXI.Application(width, height, { transparent: true });
//         document.querySelector(".js-canvasArea").appendChild(app.view);
//
//         let img = new PIXI.Sprite(PIXI.Texture.fromCanvas(canvas));
//         console.log(img);
//         img.width = width;
//         img.height = height;
//         app.stage.addChild(img);
//
//         const myFilter = new PIXI.filters.MyFilter();
//         app.stage.filters = [myFilter];
//
//         requestAnimationFrame(() => {
//           app.ticker.add(function() {
//             // 時間経過をシェーダに伝える
//             myFilter.uniforms.time += app.ticker.elapsedMS * 0.001;
//           });
//         });
//         // document.querySelector('.js-canvasArea').appendChild(canvas)
//         // console.log(PIXI)
//       });
//     }
//   },
//   mounted() {
//     // let num = 0
//     // const elem = document.querySelector('.load span')
//     //
//     // const loop = ()=> {
//     //   requestAnimationFrame(() => {
//     //     // console.log('aaa')
//     //     num = num + 1
//     //     let calc = num
//     //     if (calc > 360) {
//     //       num = 0
//     //       calc = 0
//     //     }
//     //     elem.style.fontVariationSettings = `"WIND" ${calc}`
//     //     loop()
//     //   })
//     // }
//     // loop()
//   }
// }
</script>

<style lang="scss">
.load {
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  display: block;
}

button {
  margin-top: 1rem;
  & + a {
    margin-top: 2rem;
  }
}
</style>

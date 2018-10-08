<template lang="pug">
  div
    footer.l-footer
      p
        small copyright © tanshio All Rights Reserved.
    .js-canvasArea
</template>

<style lang="scss">
.l-footer {
  position: fixed;
  z-index: 100;
  right: 8px;
  bottom: 0;
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  height: 100%;
  text-align: center;
  mix-blend-mode: exclusion;
  p {
    margin: 0;
    font-size: 12px;
    line-height: 1;
    color: #666666;
    small {
      font-size: 12px;
    }
  }
}

.js-canvasArea {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /*opacity: .4;*/
}

.js-canvasArea canvas {
  pointer-events: none;
}
</style>

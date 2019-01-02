<template>
  <section class="container2" ref="container">
    <div>
      <div class="load" :class="[{isAnim: isAnim}]">LOADING</div>
      <button @click="animToggle">アニメーションのトグル<span>(Chromeではとてつもなく重くなります)</span></button>
    </div>
  </section>
</template>

<style>
/*
  * Webfonts served by typotheque.com
  *
  * To make the font files as small as possible,
  * most glyphs and OpenType features were removed.
  * To edit the fonts, add more language support,
  * log it to your Typotheque account:
  * http://www.typotheque.com/my_account/webfonts
  *
  * The Typotheque Font Software is protected under domestic
  * and international trademark and copyright law.
  * Modifying, reverse engineering or otherwise copying
  * of Typotheque Font Software is illegal.
  * http://www.typotheque.com/licensing/
  *
  * (c) 2018, Typotheque
  * Generated: 2018-10-05 16:12:22
  */

@font-face {
  font-family: 'Wind VF';
  src: url('https://s3-ap-northeast-1.amazonaws.com/fonts-tokyo.typotheque.com/WF-031960-010452-002654-a2be9064d73c1466eeeaf67c6122be0c.woff2')
    format('woff2');
}

.load {
  font-family: 'Wind VF', sans-serif;
  font-size: 18vw;
  color: #999;
  font-variation-settings: "WIND" 0;
  @media (--v-md) {
    font-size: 8vw;
  }
  &.isAnim {
    animation: vanim 5s ease-in-out infinite;
  }
}

@keyframes vanim {
  0% {
    font-variation-settings: "WIND" 0;
  }

  100% {
    font-variation-settings: "WIND" 365;
  }
}

button {
  appearance: none;
  background-color: #1a1a1a;
  color: #fff;
  margin-top: 10px;
  border: 0;
  padding: 0.5rem 1rem;
  & span {
    font-size: 14px;
    display: block;
  }
}
</style>

<script lang="ts">
import json from '~/static/data.json'
import { Component, Vue } from 'nuxt-property-decorator'
let debounce
if (process.browser) {
  debounce = require('lodash-es/debounce').default
}

import Base from '../Base'

@Component({})
export default class Effect07 extends Base {

  isAnim = false

  init() {}

  leave() {}

  animToggle() {
    this.isAnim = !this.isAnim
  }
}
</script>

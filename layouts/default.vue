<template>
  <div>
    <l-header />
    <nuxt/>
    <l-footer />
  </div>
</template>

<style lang="scss">
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

@import url("//hello.myfonts.net/count/37bb08");


@font-face {font-family: 'Celias-Medium';src: url('~assets/webfonts/37BB08_0_0.eot');src: url('~assets/webfonts/37BB08_0_0.eot?#iefix') format('embedded-opentype'),url('~assets/webfonts/37BB08_0_0.woff2') format('woff2'),url('~assets/webfonts/37BB08_0_0.woff') format('woff'),url('~assets/webfonts/37BB08_0_0.ttf') format('truetype');}


@font-face {font-family: 'Celias-Regular';src: url('~assets/webfonts/37BB08_1_0.eot');src: url('~assets/webfonts/37BB08_1_0.eot?#iefix') format('embedded-opentype'),url('~assets/webfonts/37BB08_1_0.woff2') format('woff2'),url('~assets/webfonts/37BB08_1_0.woff') format('woff'),url('~assets/webfonts/37BB08_1_0.ttf') format('truetype');}

/*@font-face {
font-family: "Wind VF";
src: url("https://s3-ap-northeast-1.amazonaws.com/fonts-tokyo.typotheque.com/WF-031960-010452-002654-a2be9064d73c1466eeeaf67c6122be0c.woff2") format("woff2");
}*/

.load {
font-family: "Wind VF", sans-serif;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

/*  height: 100%;*/
  /*overflow: hidden;*/
}

body {
  font-feature-settings: 'palt';
  font-family: Celias-Regular, sans-serif;
  background-color: #ffffff;
/*  height: 100%;
  overflow: hidden;*/
}

h1,
h2,
h3,
h4,
h5,
h6,
strong,
b {
  font-family: Celias-Medium, sans-serif;
  font-weight: normal;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

img {
  width: 100%;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

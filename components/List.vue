<template lang="pug">
  .c-link
    nuxt-link(:to="link")
      .c-imgCotainer(:style="{backgroundImage: `url(${require('@/assets/'+img)})`}")
  
      .c-link__detail
        h1 {{title}}
        ul
          li(v-for="category in categories") {{category}}
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from "nuxt-property-decorator"

  @Component
  export default class extends Vue {
    @Prop()
    link: string
    @Prop()
    img: string
    @Prop()
    title: string
    @Prop()
    categories: string[]
  }
</script>

<style lang="scss">
.c-imgCotainer {
  position: relative;
  padding-bottom: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 1024px) {
    padding-bottom: 33.333%;
  }
  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.c-link {
  position: relative;
  text-align: right;
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      .c-link__detail {
        mix-blend-mode: screen;
        & h1 {
          color: #000;
          animation: color-change 1s alternate;
        }
      }
    }
  }
}


.c-link__detail {
  position: absolute;
  display: inline-block;
  padding: 2vmin 4vmin 4vmin 2vmin;
  bottom: 0;
  right: 0;
  & h1 {
    font-size: 8vmin;
    margin: 0;
    line-height: 0.65;
    background-color: #fff;
    color: rgb(41, 51, 61);
    padding-top: 0.27em;
    letter-spacing: -0.05em;
    padding-right: 0.1em;
    animation: color-back 1s alternate;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: inline-flex;
    justify-content: flex-end;
    font-size: 12px;
    background-color: #ffffff;
    vertical-align: top;
    padding: 0.3em 0.5em 0;
    margin-top: 0.25rem;
    li {
      background-color: #ffffff;
      &:not(:first-of-type) {
        margin-left: 0.5em;
      }
    }
  }
}
</style>

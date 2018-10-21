import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Base extends Vue {
  @Provide() person: 'aaa'

  timer: number| null = null;

  test() {
    console.log('aaa')
  }

  mounted() {

  }

  created() {
    console.log('hello2')
    this.test()
  }
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      // `vm` を通じてコンポーネントインスタンスにアクセス
    })
  }
  beforeRouteLeave (to, from, next) {
    console.log('leave')
    if (this.timer) {
      cancelAnimationFrame(this.timer)
    }
    next()
  }
}


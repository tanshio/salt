import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Base extends Vue {

  timer: number | null = null;

  // 画面が作成されたときに実行
  init() {

  }

  leave() {
    console.log(this.timer)
    if (this.timer) {
      console.log('clear',this.timer)
      cancelAnimationFrame(this.timer)
    }
  }

  mounted() {
    this.init()
  }

  beforeRouteEnter (to, from, next) {
    next((vm) => {
      // `vm` を通じてコンポーネントインスタンスにアクセス
    })
  }
  beforeRouteLeave (to, from, next) {
    this.leave()
    next()
  }
}


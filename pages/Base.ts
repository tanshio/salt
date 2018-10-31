import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Base extends Vue {

  timer: number | null = null;

  // 画面が作成されたときに実行
  init() {

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
    if (this.timer) {
      cancelAnimationFrame(this.timer)
    }
    next()
  }
}


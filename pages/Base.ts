import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Base extends Vue {
  @Provide() person: 'aaa'
  test() {
    console.log('aaa')
  }
  created() {
    console.log('hello2')
    this.test()
  }
}


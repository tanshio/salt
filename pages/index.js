import Link from 'next/link'
// export default () => (
//   <div>
//     <div>Index to next.js!</div>
//     <div>Click <Link href="/about"><a>here</a></Link> to read more</div>
//   </div>
// )
// import React from 'react'
export default class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      aaa: 'test'
    };

  }
  getInitialState() {
    return {
      aaa: "aaa"
    }
  }
  // static async getInitialProps ({ req }) {
  //   return req
  //     ? { userAgent: req.headers['user-agent'] }
  //     : { userAgent: navigator.userAgent }
  // }
  render () {
    return <div>
      Hello World {this.state.aaa}
      <div>Click <Link href="/about"><a>here</a></Link> to read more</div>
    </div>
  }
}

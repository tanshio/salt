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
  componentDidMount() {
    console.log('index mounted')
  }
  // static async getInitialProps ({ req }) {
  //   return req
  //     ? { userAgent: req.headers['user-agent'] }
  //     : { userAgent: navigator.userAgent }
  // }
  render () {
    return <div>
      <style jsx>{`
        h1 {
          position: fixed;
          width: 100%;
          top: 0;
          margin: 0;
          line-height: 0;
          // transform: translateY(5%);
        }
        // h1 span:nth-of-type(3) {
        //   width: 22%;
        // }
        // h1 span:nth-of-type(4) {
        //   width: 28%;
        // }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <h1>
        <svg viewBox="0 0 1283 289">
            <desc>SALT</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" fill="none">
                <path d="M149.090005,10.4 C129.090005,2.8 110.290005,0 89.8900055,0 C36.2900055,0 0.690005493,30.8 0.690005493,75.6 C0.690005493,109.6 15.8900055,130.4 67.8900055,154 C110.290005,172.8 121.890005,186 121.890005,210 C121.890005,237.2 99.0900055,254.8 65.0900055,254.8 C47.8900055,254.8 29.4900055,250.8 7.09000549,239.6 L2.69000549,276.8 C23.0900055,285.2 44.2900055,288.8 67.8900055,288.8 C124.690005,288.8 163.090005,254.4 163.090005,205.6 C163.090005,168.4 142.690005,144.4 94.2900055,123.2 C49.8900055,103.6 41.4900055,90.4 41.4900055,71.6 C41.4900055,49.6 62.2900055,33.2 91.8900055,33.2 C107.490005,33.2 123.890005,36.4 143.890005,45.2 L149.090005,10.4 Z M477.230002,4.8 L598.030002,284 L553.230002,284 L524.030002,213.6 L388.830002,213.6 L360.030002,284 L316.830002,284 L435.630002,4.8 L477.230002,4.8 Z M510.430002,181.2 L474.030002,89.6 C469.230002,78 460.030002,52.8 455.630002,38.8 L454.830002,38.8 C450.430002,52.8 441.230002,77.2 436.430002,89.6 L401.230002,181.2 L510.430002,181.2 Z M811.369998,4.8 L770.569998,4.8 L770.569998,284 L928.169998,284 L928.169998,249.6 L811.369998,249.6 L811.369998,4.8 Z M1197.90999,284 L1197.90999,39.2 L1282.30999,40.4 L1282.30999,4.8 L1070.30999,4.8 L1070.30999,40.4 L1157.10999,39.2 L1157.10999,284 L1197.90999,284 Z" id="SALT" fill="#29333D"></path>
            </g>
        </svg>
      </h1>
      Hello World {this.state.aaa}
      <div>Click <Link href="/about"><a>here</a></Link> to read more</div>
    </div>
  }
}

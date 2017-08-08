import Link from 'next/link'
import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(
  import('../component/three/three01.js'),
  // import('../component/index.js'),
  {
    ssr: false,
    loading: () => (<p>LOADING</p>)
  }
)

export default class extends React.Component {
  render() {
    return <div>
    <div>Click <Link href="/"><a>here</a></Link> index</div>
    <DynamicComponentWithNoSSR />
    <p>HOME PAGE is here!</p>
  </div>
  }
}

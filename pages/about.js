// export default () => (
//   <div>About Page</div>
// )
//
import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(
  import('../component/three/three01.js'),
  { ssr: false }
)

export default () => (
  <div>
    <DynamicComponentWithNoSSR />
    <p>HOME PAGE is here!</p>
  </div>
)

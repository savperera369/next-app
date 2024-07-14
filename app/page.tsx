import Link from 'next/link'
import ProductCard from './components/ProductCard'

// server components cannot
// listen to browser events
// access browser apis like local storage
// maintain state or use effects
// all components in app folder are server components by default

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}

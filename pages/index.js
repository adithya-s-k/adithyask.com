import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Home</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde non vero voluptas laborum et asperiores sunt soluta aut eligendi, provident culpa quam tempora labore, quasi error voluptatibus consectetur incidunt eius.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde non vero voluptas laborum et asperiores sunt soluta aut eligendi, provident culpa quam tempora labore, quasi error voluptatibus consectetur incidunt eius.</p>

      <Link href="items">See Items</Link>
      <Footer/>
    </div>
  )
}

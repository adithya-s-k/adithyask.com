import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
            <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde non vero voluptas laborum et asperiores sunt soluta aut eligendi, provident culpa quam tempora labore, quasi error voluptatibus consectetur incidunt eius.</p>
            <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde non vero voluptas laborum et asperiores sunt soluta aut eligendi, provident culpa quam tempora labore, quasi error voluptatibus consectetur incidunt eius.</p>

      <Link href="items" className={styles.btn}>See Items</Link>
    </div>
  )
}

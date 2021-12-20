import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Link  from 'next/link'
import Feauters from './Feauters'
import About from './About'
import Newsletter from './Newsletter'


export default function Home() {
  return (
    <>
      <section className={styles.home} id={styles.id}>
        <div className={styles.content}>
          <h3>Best mobile app <span>showcase</span></h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Link href='/'><a className={styles.btn}>Download</a></Link>
        </div>

        <div className={styles.image}>
          <img  src='./images/home-img.png' />
        </div>
      </section>

      <Feauters />
      <About />
      <Newsletter />
    </>
  )
}

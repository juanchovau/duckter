import Link from 'next/link'
import Button from '../Componets/Button'
import AppLayout from '../Componets/AppLayout'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <AppLayout>
        <main className={styles.container}>
          <section>
            <img src="/duckLogo.png" />
            <h1>DUkCTER</h1>
            <p>Where you can say what ever you want!! 🐤</p>
            <Button> <img className="githubLogo" src="/github.png" /> Login usando Github </Button>
          </section>
        </main>
      </AppLayout>
  )
}

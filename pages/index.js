import { useState, useEffect } from 'react'

// import Link from 'next/link'

import Button from '../Componets/Button'
import AppLayout from '../Componets/AppLayout'

import { loginWithGithub, setOnAuthStateChanged } from '../firebase/client'
import Avatar from '../Componets/Avatar'

import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'

export default function Home() {
  const [userInfo, setUserInfo] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    setOnAuthStateChanged(setUserInfo)
  }, [])

  useEffect(() => {
    userInfo && router.replace('/home')
  }, [userInfo])

  const loginGithub = () => {
    loginWithGithub().then(user => {
      setUserInfo(user)
    })
      .catch(err => console.error(err))
  }
  return (
    <AppLayout>

      <section className={styles.container}>
        <img src="/duckLogo.png" />
        <h1>DUkCTER</h1>
        <p>Where you can say what ever you want!! 🐤</p>
        <div>
          {
            userInfo !== null ? '' : <Button onClick={() => loginGithub()}> <img className="githubLogo" src="/github.png" /> Login usando Github </Button>
          }
          {
            userInfo === undefined ? <strong>Loading...</strong> : ""
          }
          {
            userInfo && userInfo.userPhoto ? <Avatar imgUrl={userInfo.userPhoto} text={userInfo.userName} alt={userInfo.userName} /> : ''
          }
        </div>
      </section>

    </AppLayout>
  )
}

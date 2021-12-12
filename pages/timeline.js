import Link from 'next/link'
import AppLayout from '../Componets/AppLayout'
import styles from '../styles/Timeline.module.css'

export default function Timeline({userName}) {
    return(
        <AppLayout>
            <div className={styles.container}>
                <Link href="/">← home</Link>
                <h1>Timeline</h1>
                <p>Este es el timeline de {userName}</p>
            </div>
        </AppLayout>

    )
}

Timeline.getInitialProps = () =>{
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())        
}
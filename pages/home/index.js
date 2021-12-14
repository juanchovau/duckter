import AppLayout from "../../Componets/AppLayout"
import Avatar from "../../Componets/Avatar"

import { useState, useEffect } from "react"

import styles from "../../styles/homePage.module.css"
import Entrada from "../../Componets/Entrada"


const HomePage = () => {

    const [timeLine, setTimeLine] = useState([])

    useEffect(() => {
        fetch('api/statuses/home_timeline')
            .then(res => res.json())
            .then(setTimeLine)
    }, [])
    return (
        <AppLayout>
            <section className={styles.container}>
                <header>
                    <h2>Inicio</h2>
                </header>
                <main>
                    {timeLine.map(entrada => {
                        return (
                            <Entrada id={entrada.id} username={entrada.username} message={entrada.message} avatar={entrada.avatar} />
                        )
                    })

                    }
                </main>
                <nav>
                    <h2>Inicio</h2>
                </nav>
            </section>
        </AppLayout>
    )
}

export default HomePage
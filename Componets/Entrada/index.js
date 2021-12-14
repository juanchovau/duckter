import styles from './styles.module.css'
import Avatar from '../Avatar'

const Entrada = ({ id, username, message, avatar }) => {
    return (
        <article className={styles.container} key={id}>
            <Avatar imgUrl={avatar || "/duckLogo.png"} alt={username} />
            <div>
                <strong>{username}</strong>
                <p>{message}</p>
            </div>
        </article>
    )
}

export default Entrada
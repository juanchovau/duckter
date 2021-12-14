
import styles from './styles.module.css'

const Avatar = ({ imgUrl, text, alt }) => {

  return (
    <div className={styles.avatarContainer}>
      <img src={imgUrl} alt={alt} title={alt} />
      {text ? <strong>{text}</strong> : ""}
    </div>
  )
}

export default Avatar

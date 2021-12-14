import styles from '../../styles/Button.module.css'

export default function Button({ children, onClick }) {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

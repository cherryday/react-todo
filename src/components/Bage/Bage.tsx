import { FolderColor } from '../../services/task.service'
import styles from './Bage.module.css'

interface BageProps {
  color: FolderColor;
}

export const Bage = ({ color }: BageProps): JSX.Element => {
  return (
    <div style={{ backgroundColor: color }} className={styles.bage}></div>
  )
}
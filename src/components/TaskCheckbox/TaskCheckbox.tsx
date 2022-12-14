import { ReactComponent as IconCheck } from '../../assets/icons/check.svg'
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg'
import styles from './TaskCheckbox.module.css'

export const TaskCheckbox = (): JSX.Element => {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={styles.input}/>
      <span className={styles.checkbox}>
        <IconCheck/>
      </span>
      Изучить JavaScript
      <IconCross/>
    </label>
  )
}
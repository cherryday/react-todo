import { ReactComponent as IconCheck } from '../../assets/icons/check.svg'
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg'
import styles from './TaskCheckbox.module.css'

interface TaskCheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
}

export const TaskCheckbox = ({ label, checked, onChange }: TaskCheckboxProps): JSX.Element => {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkbox}>
        <IconCheck/>
      </span>
      {label}
      <span className={styles.button}>
        <IconCross/>
      </span>
    </label>
  )
}

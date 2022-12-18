import cn from 'classnames'
import { ReactComponent as IconCheck } from '../../assets/icons/check.svg'
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg'
import styles from './TaskCheckbox.module.css'

interface TaskCheckboxProps {
  label: string
  checked: boolean
  className?: string
  onChange: () => void
}

export const TaskCheckbox = ({ label, checked, className, onChange }: TaskCheckboxProps): JSX.Element => {
  return (
    <label className={cn(styles.label, className)}>
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

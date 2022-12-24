import cn from 'classnames'
import { ReactComponent as IconCheck } from '../../assets/icons/check.svg'
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg'
import styles from './TaskCheckbox.module.css'

export interface TaskCheckboxProps {
  label: string
  checked: boolean
  className?: string
  onChange: () => void
  remove: () => void
}

export const TaskCheckbox = ({ label, checked, className, onChange, remove }: TaskCheckboxProps): JSX.Element => {
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
      <button className={styles.button} onClick={remove}>
        <IconCross/>
      </button>
    </label>
  )
}

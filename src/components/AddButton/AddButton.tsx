import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import { ReactComponent as IconPlus } from '../../assets/icons/plus.svg'
import styles from './AddButton.module.css'

interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const AddButton = ({ variant = 'primary', children, ...props }: AddButtonProps): JSX.Element => {
  return (
    <button className={cn(styles.button, {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
    })} {...props}>
      <IconPlus/>
      {children}
    </button>
  )
}

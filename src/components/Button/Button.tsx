import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
}

export const Button = ({ children, color = 'primary', ...props }: ButtonProps): JSX.Element => {
  return (
    <button {...props} className={cn(styles.button, {
      [styles.primary]: color === 'primary',
      [styles.secondary]: color === 'secondary'
    })}>
      {children}
    </button>
  )
}

import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
}

export const Button = ({ children, color = 'primary', className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={cn(styles.button, className, {
      [styles.primary]: color === 'primary',
      [styles.secondary]: color === 'secondary'
    })} {...props}>
      {children}
    </button>
  )
}

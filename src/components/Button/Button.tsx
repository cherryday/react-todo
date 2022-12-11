import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

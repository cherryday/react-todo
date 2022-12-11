import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <input
      type="text"
      {...props}
      className={styles.input}
    />
  )
}

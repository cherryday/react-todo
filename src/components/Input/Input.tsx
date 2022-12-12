import { InputHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return (
    <input
      type="text"
      className={cn(styles.input, className)}
      {...props}
    />
  )
}

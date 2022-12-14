import cn from 'classnames'
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import { ReactComponent as IconPlus } from '../../assets/icons/plus.svg'
import styles from './AddButton.module.css'

interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const AddButton = forwardRef(({ variant = 'primary', children, ...props }: AddButtonProps, ref: ForwardedRef<HTMLButtonElement>): JSX.Element => {
  return (
    <button ref={ref} className={cn(styles.button, {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
    })} {...props}>
      <IconPlus/>
      {children}
    </button>
  )
})

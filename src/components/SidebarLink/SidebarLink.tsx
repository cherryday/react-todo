import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg'
import styles from './SidebarLink.module.css'

export interface SidebarLinkProps {
  to: string;
  prepend: ReactNode;
  children: ReactNode;
  className?: string;
  remove?: () => void;
}

export const SidebarLink = ({ to, prepend, children, remove, className = '' }: SidebarLinkProps): JSX.Element => {
  return (
    <NavLink to={to} className={({ isActive }) => cn(styles.link, className, {
      [styles.active]: isActive
    })}>
      <span className={styles.prepend}>
        {prepend}
      </span>
      <span className={styles.text}>
        {children}
      </span>
      {remove && <button className={styles.append} onClick={(event) => {
        event.preventDefault()
        remove()
      }}><IconCross/></button>}
    </NavLink>
  )
}

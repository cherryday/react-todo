import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg'
import styles from './SidebarLink.module.css'

interface SidebarLinkProps {
  to: string;
  prepend: ReactNode;
  children: ReactNode;
  append?: boolean;
  className?: string;
}

export const SidebarLink = ({ to, prepend, append, children, className = '' }: SidebarLinkProps): JSX.Element => {
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
      {append && <span className={styles.append}><IconCross/></span>}
    </NavLink>
  )
}

import { ReactNode } from 'react';
import cn from 'classnames'
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg'
import styles from './SidebarLink.module.css'

interface SidebarLinkProps {
  prepend: ReactNode;
  children: ReactNode;
  append?: boolean;
  className?: string;
}

export const SidebarLink = ({ prepend, append, children, className = '' }: SidebarLinkProps): JSX.Element => {
  return (
    <a href="/" className={cn(styles.link, className)}>
      <span className={styles.prepend}>
        {prepend}
      </span>
      <span className={styles.text}>
        {children}
      </span>
      {append && <span className={styles.append}><IconCross/></span>}
    </a>
  )
}

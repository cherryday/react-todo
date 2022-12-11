import cn from 'classnames'
import { HTMLAttributes } from 'react';
import { FolderColor } from '../../services/task.service'
import styles from './Bage.module.css'

interface BageProps extends HTMLAttributes<HTMLDivElement> {
  color: FolderColor;
  size?: 'md' | 'lg';
  selected?: boolean;
}

export const Bage = ({ color, selected, onClick, size = 'md' }: BageProps): JSX.Element => {
  return (
    <div
      className={cn(styles.bage, {
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
        [styles.selected]: selected,
        [styles.selectable]: onClick
      })}
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  )
}
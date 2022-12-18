import { useState } from 'react'
import cn from 'classnames'
import { TaskCreateForm } from '../TaskCreateForm/TaskCreateForm'
import { AddButton } from '../AddButton/AddButton'
import { TaskCheckbox } from '../TaskCheckbox/TaskCheckbox'
import { Folder } from '../../services/todo.service'
import styles from './FolderSection.module.css'

interface FolderSectionProps {
  folder: Folder
  className?: string
}

export const FolderSection = ({ folder, className }: FolderSectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={cn(className)}>
      <h1 className={styles.title} style={{ color: folder.color }}>
        {folder.name}
      </h1>
      <div className={styles.divider}></div>
      <div className={styles.list}>
        {folder.tasks.map(task => (
          <TaskCheckbox
            key={task.id}
            label={task.name}
            className={styles.input}
            checked={task.completed}
            onChange={() => {}}
          />
        ))}
      </div>
      {!isOpen ? <AddButton variant="secondary" onClick={() => setIsOpen(true)}>
        Новая задача
      </AddButton> : <TaskCreateForm folderId={folder.id} cancel={() => setIsOpen(false)}/>}
    </div>
  )
}

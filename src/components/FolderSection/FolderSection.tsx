import { TaskCreateForm } from '../TaskCreateForm/TaskCreateForm'
import { AddButton } from '../AddButton/AddButton'
import { TaskCheckbox } from '../TaskCheckbox/TaskCheckbox'
import { Folder } from '../../services/todo.service'
import styles from './FolderSection.module.css'
import { useState } from 'react'

interface FolderSectionProps {
  folder: Folder
}

export const FolderSection = ({ folder }: FolderSectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <h1 className={styles.title} style={{ color: folder.color }}>
        {folder.name}
      </h1>
      <div className={styles.divider}></div>
      <div className={styles.list}>
        {folder.tasks.map(task => (
          <TaskCheckbox
            key={task.id}
            label={task.name}
            checked={task.completed}
            onChange={() => {}}
          />
        ))}
      </div>
      {!isOpen ? <AddButton variant="secondary" onClick={() => setIsOpen(true)}>
        Новая задача
      </AddButton> : <TaskCreateForm cancel={() => setIsOpen(false)}/>}
    </div>
  )
}
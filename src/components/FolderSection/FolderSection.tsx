import { useState } from 'react'
import cn from 'classnames'
import { TaskCreateForm } from '../TaskCreateForm/TaskCreateForm'
import { AddButton } from '../AddButton/AddButton'
import { TaskCheckbox } from '../TaskCheckbox/TaskCheckbox'
import { Folder } from '../../services/todo.service'
import styles from './FolderSection.module.css'
import { useTodoContext } from '../../context/todo.context'

interface FolderSectionProps {
  folder: Folder
  className?: string
}

export const FolderSection = ({ folder, className }: FolderSectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { deleteTask, updateTask } = useTodoContext()

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
            onChange={() => updateTask(folder.id, { id: task.id, completed: !task.completed })}
            remove={() => deleteTask(folder.id, task.id)}
          />
        ))}
      </div>
      {!isOpen ? <AddButton variant="secondary" onClick={() => setIsOpen(true)}>
        Новая задача
      </AddButton> : <TaskCreateForm folderId={folder.id} cancel={() => setIsOpen(false)}/>}
    </div>
  )
}

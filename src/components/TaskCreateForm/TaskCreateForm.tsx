import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import styles from './TaskCreateForm.module.css'
import { useTodoContext } from '../../context/todo.context'
import { useState } from 'react'

interface TaskCreateFormProps {
  folderId: string
  cancel: () => void
}

export const TaskCreateForm = ({ folderId, cancel }: TaskCreateFormProps): JSX.Element => {
  const [name, setName] = useState<string>('')
  const { createTask } = useTodoContext()

  const handleCreate = () => {
    createTask(folderId, { name })
    setName('')
  }

  return (
    <div className={styles.form}>
      <Input
        placeholder="Текст задачи"
        className={styles.input}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button className={styles.create} onClick={handleCreate}>Добавить задачу</Button>
      <Button color="secondary" onClick={cancel}>Отмена</Button>
    </div>
  )
}

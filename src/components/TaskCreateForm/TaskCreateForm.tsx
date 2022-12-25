import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import styles from './TaskCreateForm.module.css'
import { useTodoContext } from '../../context/todo.context'
import { FormEvent, useState } from 'react'

interface TaskCreateFormProps {
  folderId: string
  cancel: () => void
}

export const TaskCreateForm = ({ folderId, cancel }: TaskCreateFormProps): JSX.Element => {
  const [name, setName] = useState<string>('')
  const { createTask } = useTodoContext()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createTask(folderId, { name })
    setName('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Текст задачи"
        className={styles.input}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button className={styles.create}>Добавить задачу</Button>
      <Button color="secondary" onClick={cancel}>Отмена</Button>
    </form>
  )
}

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import styles from './TaskCreateForm.module.css'

interface TaskCreateFormProps {
  cancel: () => void
}

export const TaskCreateForm = ({ cancel }: TaskCreateFormProps): JSX.Element => {
  return (
    <div className={styles.form}>
      <Input placeholder="Текст задачи" className={styles.input}/>
      <Button className={styles.create}>Добавить задачу</Button>
      <Button color="secondary" onClick={cancel}>Отмена</Button>
    </div>
  )
}

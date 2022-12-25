import { FormEvent, useState } from 'react'
import { Input } from '../Input/Input'
import { Bage } from '../Bage/Bage'
import { Button } from '../Button/Button'
import { FOLDER_COLORS, FolderColor } from '../../services/todo.service'
import { useTodoContext } from '../../context/todo.context'
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg'
import styles from './FolderCreateModal.module.css'

export const FolderCreateModal = (): JSX.Element => {
  const { createFolder } = useTodoContext()
  const [name, setName] = useState<string>('')
  const [color, setColor] = useState<FolderColor>(FOLDER_COLORS[0])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createFolder({ color, name })
    setName('')
    setColor(FOLDER_COLORS[0])
  }

  return (
    <form className={styles.modal} onSubmit={handleSubmit}>
      <button type="button" className={styles.close}>
        <IconCross/>
      </button>

      <Input
        autoFocus
        placeholder="Название папки"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className={styles.list}>
        {FOLDER_COLORS.map(c => (
          <Bage
            key={c}
            color={c}
            size="lg"
            selected={c === color}
            onClick={() => setColor(c)}
          />
        ))}
      </div>

      <Button>Добавить</Button>
    </form>
  )
}

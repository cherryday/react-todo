import { useState } from 'react'
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

  function addFolder() {
    createFolder({ color, name })
    setName('')
    setColor(FOLDER_COLORS[0])
  }

  return (
    <div className={styles.modal}>
      <button className={styles.close}>
        <IconCross/>
      </button>

      <Input
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

      <Button onClick={addFolder}>Добавить</Button>
    </div>
  )
}

import { FormEvent, useState } from 'react'
import { usePopperTooltip } from 'react-popper-tooltip';
import { Input } from '../Input/Input'
import { Bage } from '../Bage/Bage'
import { Button } from '../Button/Button'
import { AddButton } from '../AddButton/AddButton'
import { FOLDER_COLORS, FolderColor } from '../../services/todo.service'
import { useTodoContext } from '../../context/todo.context'
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg'
import styles from './FolderCreateModal.module.css'

export const FolderCreateModal = (): JSX.Element => {
  const { createFolder } = useTodoContext()
  const [name, setName] = useState<string>('')
  const [color, setColor] = useState<FolderColor>(FOLDER_COLORS[0])
  const [controlledVisible, setControlledVisible] = useState<boolean>(false)
  const {
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    offset: [-2, 10],
    placement: 'bottom-start',
    trigger: 'click',
    visible: controlledVisible,
    onVisibleChange: setControlledVisible,
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createFolder({ color, name })
    setName('')
    setColor(FOLDER_COLORS[0])
  }

  return (
    <>
      <AddButton ref={setTriggerRef}>
        Добавить папку
      </AddButton>
    
      {visible &&
        <form
          className={styles.modal}
          ref={setTooltipRef}
          onSubmit={handleSubmit}
          {...getTooltipProps()}
        >
          <button
            type="button"
            className={styles.close}
            onClick={() => setControlledVisible(false)}
          >
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
      }
    </>
  )
}

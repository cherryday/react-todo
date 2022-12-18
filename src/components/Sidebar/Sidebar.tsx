import { SidebarLink } from '../SidebarLink/SidebarLink'
import { Bage } from '../Bage/Bage'
import { AddButton } from '../AddButton/AddButton'
import { FolderCreateModal } from '../FolderCreateModal/FolderCreateModal' 
import { useTodoContext } from '../../context/todo.context'
import { ReactComponent as IconList } from '../../assets/icons/list.svg'
import styles from './Sidebar.module.css'

export const Sidebar = (): JSX.Element => {
  const { folders, deleteFolder } = useTodoContext()

  return (
    <aside className={styles.sidebar}>
      {!!folders.length &&
        <>
          <SidebarLink to="/" prepend={<IconList/>}>
            Все задачи
          </SidebarLink>

          <div className={styles.list}>
            {folders.map(folder => (
              <SidebarLink
                to={folder.id}
                prepend={<Bage color={folder.color}/>}
                append
                key={folder.id}
                remove={() => deleteFolder(folder.id)}
              >
                {folder.name}
              </SidebarLink>
            ))}
          </div>
        </>
      }

      <AddButton>
        Добавить папку
      </AddButton>

      <FolderCreateModal/>
    </aside>
  )
}

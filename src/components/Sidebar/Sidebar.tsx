import { SidebarLink } from '../SidebarLink/SidebarLink'
import { Bage } from '../Bage/Bage'
import { FolderCreateModal } from '../FolderCreateModal/FolderCreateModal' 
import { useTodoContext } from '../../context/todo.context'
import { ReactComponent as IconList } from '../../assets/icons/list.svg'
import styles from './Sidebar.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

export const Sidebar = (): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()
  const { folders, deleteFolder } = useTodoContext()

  const handleRemove = (id: string) => {
    deleteFolder(id)

    if (location.pathname === `/${id}`) {
      navigate('/')
    }
  }

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
                key={folder.id}
                remove={() => handleRemove(folder.id)}
              >
                {folder.name}
              </SidebarLink>
            ))}
          </div>
        </>
      }

      <FolderCreateModal/>
    </aside>
  )
}

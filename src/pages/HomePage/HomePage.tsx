import cn from 'classnames'
import { FolderSection } from '../../components/FolderSection/FolderSection'
import { useTodoContext } from '../../context/todo.context';
import styles from './HomePage.module.css'

export const HomePage = (): JSX.Element => {
  const { folders } = useTodoContext()

  return (
    <div className={cn({
      [styles.empty]: !folders.length
    })}>
      {!!folders.length ? folders.map(folder => (
        <FolderSection
          key={folder.id}
          folder={folder}
        />
      )) : <h1 className={styles.title}>Задачи отсутствуют</h1>}
    </div>
  )
}

import { ReactComponent as IconPlus } from '../../assets/icons/plus.svg'
import styles from './FolderCreateButton.module.css'

export const FolderCreateButton = (): JSX.Element => {
  return (
    <button className={styles.button}>
      <IconPlus/>
      Добавить папку
    </button>
  )
}

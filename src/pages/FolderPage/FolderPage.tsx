import { useParams } from 'react-router-dom';
import { FolderSection } from '../../components/FolderSection/FolderSection'
import { useTodoContext } from '../../context/todo.context';

export const FolderPage = (): JSX.Element => {
  const { folders } = useTodoContext()
  const { folderId } = useParams()
  const currentFolder = folders.find(folder => folder.id === folderId)

  return (
    <div>
      {currentFolder && <FolderSection folder={currentFolder}/>}
    </div>
  )
}

import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { getFolders, createFolder, deleteFolder, createTask, Folder, Task } from '../services/todo.service'

interface ITodoContext {
  folders: Folder[]
  createFolder: (folder: Pick<Folder, 'name' | 'color'>) => void
  deleteFolder: (id: string) => void
  createTask: (folderId: string, task: Pick<Task, 'name'>) => void
}

const TodoContext = createContext<ITodoContext | null>(null)

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [folders, setFolders] = useState<Folder[]>(() => getFolders())

  const value: ITodoContext = {
    folders,
    createFolder(folder) {
      setFolders(createFolder(folder))
    },
    deleteFolder(id) {
      setFolders(deleteFolder(id))
    },
    createTask(folderId, task) {
      setFolders(createTask(folderId, task))
    }
  }
  
  return <TodoContext.Provider value={value}>
    {children}
  </TodoContext.Provider>
}

export function useTodoContext() {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }

  return context
}

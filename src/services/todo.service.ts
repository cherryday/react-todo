import { v4 as uuidv4 } from 'uuid'

const LS_KEY = 'todo'
export const FOLDER_COLORS = [
  '#C9D1D3',
  '#42B883',
  '#64C4ED',
  '#FFBBCC',
  '#B6E6BD',
  '#C355F5',
  '#09011A',
  '#FF6464'
] as const

export type FolderColor = typeof FOLDER_COLORS[number]

export interface Folder {
  id: string;
  name: string;
  color: FolderColor;
  tasks: Task[];
}

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export function createFolder(folder: Pick<Folder, 'name' | 'color'>): Folder[] {
  const folders = getFolders()
  folders.push({
    id: uuidv4(),
    tasks: [],
    ...folder
  })
  setFolders(folders)
  return folders
}

export function deleteFolder(id: string): Folder[] {
  const folders = getFolders().filter(folder => folder.id !== id)
  setFolders(folders)
  return folders
}

export function getFolders(): Folder[] {
  const lsData = localStorage.getItem(LS_KEY)

  if (!lsData) {
    return []
  }
  
  return JSON.parse(lsData)
}

export function createTask(folderId: string, task: Pick<Task, 'name'>): Folder[] {
  const folders = getFolders().map(folder => {
    if (folder.id === folderId) {
      folder.tasks = [
        ...folder.tasks,
        { id: uuidv4(), completed: false, ...task }
      ]
    }

    return folder
  })
  setFolders(folders)
  return folders
}

export function deleteTask(folderId: string, taskId: string): Folder[] {
  const folders = getFolders().map(folder => {
    if (folder.id === folderId) {
      folder.tasks = folder.tasks.filter(task => task.id !== taskId)
    }

    return folder
  })
  setFolders(folders)
  return folders
}

export function updateTask(folderId: string, task: Pick<Task, 'id' | 'completed'>) {
  const folders = getFolders().map(folder => {
    if (folder.id === folderId) {
      folder.tasks = folder.tasks.map(t => {
        if (t.id === task.id) {
          return {
            ...t,
            ...task
          }
        }

        return t
      })
    }

    return folder
  })
  setFolders(folders)
  return folders
}

function setFolders(folders: Folder[]): void {
  localStorage.setItem(LS_KEY, JSON.stringify(folders))
}

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
  id: number;
  name: string;
  color: FolderColor;
  tasks: Task[];
}

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const LS_KEY = ''

export function createFolder(folder: Pick<Folder, 'name' | 'color'>): void {
  const folders = getFolders()
  folders.push({
    id: 1,
    tasks: [],
    ...folder
  })
  setFolders(folders)
}

export function deleteFolder(id: number): void {
  const folders = getFolders().filter(folder => folder.id !== id)
  setFolders(folders)
}

export function getFolders(): Folder[] {
  const lsData = localStorage.getItem(LS_KEY)

  if (!lsData) {
    return []
  }
  
  return JSON.parse(lsData)
}

export function createTask(folderId: number, task: Pick<Task, 'name'>): void {
  const folders = getFolders().map(folder => {
    if (folder.id === folderId) {
      folder.tasks = [
        ...folder.tasks,
        { id: 1, completed: false, ...task }
      ]
    }

    return folder
  })
  setFolders(folders)
}

export function deleteTask(folderId: number, taskId: number) {
  const folders = getFolders().map(folder => {
    if (folder.id === folderId) {
      folder.tasks = folder.tasks.filter(task => task.id !== taskId)
    }

    return folder
  })
  setFolders(folders)
}

function setFolders(folders: Folder[]): void {
  localStorage.setItem(LS_KEY, JSON.stringify(folders))
}

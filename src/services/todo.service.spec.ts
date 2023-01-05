import { v4 } from 'uuid'
import { createMockFolder } from '../test-helpers'
import { getFolders, createFolder, deleteFolder, FOLDER_COLORS, createTask } from './todo.service'

jest.mock('uuid', () => ({
  v4: jest.fn(),
}))

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
  }
})

describe('todo.service', () => {
  const mockV4 = v4 as jest.Mock
  const mockGetItem = localStorage.getItem as jest.Mock
  const mockSetItem = localStorage.setItem as jest.Mock

  it('getFolders', () => {
    expect(getFolders()).toEqual([])

    const folders = [createMockFolder(), createMockFolder()]

    mockGetItem.mockReturnValue(JSON.stringify(folders))

    expect(getFolders()).toEqual(folders)
    expect(localStorage.getItem).toHaveBeenCalledWith('todo')
  })

  it('createFolder', () => {
    const createdFolder = { id: 'id', tasks: [], name: 'name', color: FOLDER_COLORS[0] }
    const folderA = createMockFolder()

    mockV4.mockReturnValue(createdFolder.id)
    mockGetItem.mockReturnValue(JSON.stringify([folderA]))

    expect(createFolder({ name: createdFolder.name, color: createdFolder.color })).toEqual([folderA, createdFolder])
    expect(localStorage.setItem).toHaveBeenCalledWith('todo', JSON.stringify([folderA, createdFolder]))
  })

  it('deleteFolder', () => {
    const folderA = createMockFolder()
    const folderB = createMockFolder()

    mockGetItem.mockReturnValue(JSON.stringify([folderA, folderB]))

    expect(deleteFolder(folderA.id)).toEqual([folderB])
    expect(mockSetItem).toHaveBeenCalledWith('todo', JSON.stringify([folderB]))
  })

  it('createTask', () => {
    const folderA = createMockFolder()
    const folderB = createMockFolder()
    const createdTask = { id: 'id', completed: false, name: 'name' }
    const updatedFolder = { ...folderA, tasks: [createdTask] }

    mockV4.mockReturnValue(createdTask.id)
    mockGetItem.mockReturnValue(JSON.stringify([folderA, folderB]))

    expect(createTask(folderA.id, { name: createdTask.name })).toEqual([updatedFolder, folderB])
    expect(mockSetItem).toHaveBeenCalledWith('todo', JSON.stringify([updatedFolder, folderB]))
  })
})

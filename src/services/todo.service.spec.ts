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
  it('getFolders', () => {
    const mockGetItem = localStorage.getItem as jest.Mock
    const folders = [createMockFolder(), createMockFolder()]
    mockGetItem.mockReturnValue(JSON.stringify(folders))
    expect(getFolders()).toEqual(folders)
    expect(localStorage.getItem).toHaveBeenCalledWith('todo')
  })

  it('createFolder', () => {
    const mockV4 = v4 as jest.Mock
    mockV4.mockReturnValue('id')
    const payload = { name: 'name', color: FOLDER_COLORS[0] }
    expect(createFolder(payload)).toEqual([{ id: 'id', tasks: [], ...payload }])
    expect(localStorage.setItem).toHaveBeenCalledWith('todo', JSON.stringify([{ id: 'id', tasks: [], ...payload }]))
  })

  it('deleteFolder', () => {
    const folderA = createMockFolder()
    const folderB = createMockFolder()
    const mockGetItem = localStorage.getItem as jest.Mock
    const mockSetItem = localStorage.setItem as jest.Mock
    mockGetItem.mockReturnValue(JSON.stringify([folderA, folderB]))
    expect(deleteFolder(folderA.id)).toEqual([folderB])
    expect(mockSetItem).toHaveBeenCalledWith('todo', JSON.stringify([folderB]))
  })

  it('createTask', () => {
    const folderA = createMockFolder()
    const folderB = createMockFolder()
    const mockGetItem = localStorage.getItem as jest.Mock
    const mockV4 = v4 as jest.Mock
    mockV4.mockReturnValue('id')
    mockGetItem.mockReturnValue(JSON.stringify([folderA, folderB]))
    expect(createTask(folderA.id, { name: 'name' })).toEqual([
      { ...folderA, tasks: [{ id: 'id', completed: false, name: 'name' }] },
      folderB
    ])
    expect(localStorage.setItem).toHaveBeenCalledWith('todo', JSON.stringify([{ ...folderA, tasks: [{ id: 'id', completed: false, name: 'name' }] }, folderB]))
  })
})

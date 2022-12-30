import { v4 } from 'uuid'
import { getFolders, createFolder, deleteFolder, FOLDER_COLORS } from './todo.service'

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
    mockGetItem.mockReturnValue('[1, 2, 3]')
    expect(getFolders()).toEqual([1, 2, 3])
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
    const mockGetItem = localStorage.getItem as jest.Mock
    const mockSetItem = localStorage.setItem as jest.Mock
    mockGetItem.mockReturnValue(JSON.stringify([
      {
        id: '1',
        name: 'name',
        color: FOLDER_COLORS[0],
        tasks: [],
      },
      {
        id: '2',
        name: 'name',
        color: FOLDER_COLORS[0],
        tasks: [],
      },
    ]))
    expect(deleteFolder('1')).toEqual([{
      id: '2',
      name: 'name',
      color: FOLDER_COLORS[0],
      tasks: [],
    }])
    expect(mockSetItem).toHaveBeenCalledWith('todo', JSON.stringify([{
      id: '2',
      name: 'name',
      color: FOLDER_COLORS[0],
      tasks: [],
    }]))
  })
})

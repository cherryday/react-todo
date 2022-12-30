import { v4 } from 'uuid'
import { getFolders, createFolder, FOLDER_COLORS } from './todo.service'

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
    getFolders()
    expect(localStorage.getItem).toHaveBeenCalledWith('todo')
  })

  it('createFolder', () => {
    const uuidv4 = v4 as jest.Mock
    uuidv4.mockReturnValue('id')
    const payload = { name: 'name', color: FOLDER_COLORS[0] }
    createFolder(payload)
    console.log(v4);
    expect(localStorage.setItem).toHaveBeenCalledWith('todo', JSON.stringify([{ id: 'id', tasks: [], ...payload }]))
  })
})

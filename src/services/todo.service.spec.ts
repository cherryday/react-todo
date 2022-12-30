import { getFolders } from './todo.service'

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn()
  }
})

describe('todo.service', () => {
  it('getFolders', () => {
    getFolders()
    expect(localStorage.getItem).toHaveBeenCalledWith('todo')
  })
})

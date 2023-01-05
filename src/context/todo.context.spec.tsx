import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMockFolder } from '../test-helpers'
import { getFolders, createFolder, deleteFolder, FOLDER_COLORS } from '../services/todo.service'
import { TodoProvider, TodoContext } from './todo.context'

jest.mock('../services/todo.service', () => {
  const originalModule = jest.requireActual('../services/todo.service')
  return {
    ...originalModule,
    getFolders: jest.fn(),
    createFolder: jest.fn(),
    deleteFolder: jest.fn(),
  }
})

describe('TodoProvider', () => {
  it('should call getFolders', () => {
    (getFolders as jest.Mock).mockReturnValue([
      createMockFolder(),
      createMockFolder(),
      createMockFolder(),
    ])

    render(
      <TodoProvider>
        <TodoContext.Consumer>
          {(value) => <>
            <ul>
              {value?.folders.map(folder => (
                <li key={folder.id}>{folder.name}</li>
              ))}
            </ul>
          </>}
        </TodoContext.Consumer>
      </TodoProvider>
    )

    expect(getFolders).toHaveBeenCalledTimes(1)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('should call createFolder', () => {
    const payload = { name: 'name', color: FOLDER_COLORS[0] }

    render(
      <TodoProvider>
        <TodoContext.Consumer>
          {value => <>
            <button onClick={() => value?.createFolder(payload)}></button>
          </>}
        </TodoContext.Consumer>
      </TodoProvider>
    )

    userEvent.click(screen.getByRole('button'))
    expect(createFolder).toHaveBeenCalledWith(payload)
  })

  it('should call deleteFolder', () => {
    (getFolders as jest.Mock).mockReturnValue([])
    const mockDeleteFolder = deleteFolder as jest.Mock
    mockDeleteFolder.mockReturnValue([
      createMockFolder(),
      createMockFolder(),
      createMockFolder(),
    ])

    render(
      <TodoProvider>
        <TodoContext.Consumer>
          {value => <>
            <ul>
              {value?.folders.map(folder => (
                <li key={folder.id}>{folder.name}</li>
              ))}
            </ul>
            <button onClick={() => value?.deleteFolder('id')}></button>
          </>}
        </TodoContext.Consumer>
      </TodoProvider>
    )

    expect(screen.queryAllByRole('listitem')).toHaveLength(0)

    userEvent.click(screen.getByRole('button'))

    expect(deleteFolder).toHaveBeenCalledWith('id')
    expect(screen.queryAllByRole('listitem')).toHaveLength(3)
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMockTodoContextProps } from '../../test-helpers'
import { TodoContext } from '../../context/todo.context'
import { TaskCreateForm } from './TaskCreateForm'

describe('TaskCreateForm', () => {
  it('should call cancelHandler', () => {
    const cancelHandler = jest.fn()
    render(
      <TodoContext.Provider value={createMockTodoContextProps()}>
        <TaskCreateForm folderId="" cancel={cancelHandler}/>
      </TodoContext.Provider>
    )
    userEvent.click(screen.getByRole('button', { name: /отмена/i }))
    expect(cancelHandler).toHaveBeenCalledTimes(1)
  })

  it('should call createTask', () => {
    const createHandler = jest.fn()
    const folderId = '1'
    const taskName = 'name'
    render(
      <TodoContext.Provider value={{
        ...createMockTodoContextProps(),
        createTask: createHandler
      }}>
        <TaskCreateForm folderId={folderId} cancel={() => {}}/>
      </TodoContext.Provider>
    )
    userEvent.type(screen.getByRole('textbox'), taskName)
    userEvent.click(screen.getByRole('button', { name: /добавить задачу/i }))
    expect(createHandler).toHaveBeenCalledWith(folderId, { name: taskName })
    expect(screen.getByRole('textbox')).toHaveValue('')
  })
})

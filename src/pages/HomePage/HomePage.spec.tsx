import { render, screen } from '@testing-library/react'
import { createMockFolder, createMockTodoContextProps } from '../../test-helpers'
import { TodoContext } from '../../context/todo.context'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('should not render list', () => {
    render(
      <TodoContext.Provider value={createMockTodoContextProps()}>
        <HomePage/>
      </TodoContext.Provider>
    )
    expect(screen.getByText(/задачи отсутствуют/i)).toBeInTheDocument()
  })

  it('should render list of folder', () => {
    const folders = [createMockFolder(), createMockFolder()]
    render(
      <TodoContext.Provider value={{ ...createMockTodoContextProps(), folders }}>
        <HomePage/>
      </TodoContext.Provider>
    )
    expect(screen.queryByText(/задачи отсутствуют/i)).not.toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(folders.length)
  })
})

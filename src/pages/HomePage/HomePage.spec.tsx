import { render, screen } from '@testing-library/react'
import { TodoContext, TodoContextProps } from '../../context/todo.context'
import { createMockFolder } from '../../__tests__/__helpers__/todo'
import { HomePage } from './HomePage'

const mockTodoContext: TodoContextProps = {
  folders: [],
  createFolder: jest.fn(),
  deleteFolder: jest.fn(),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
}

describe('HomePage', () => {
  it('should not render list', () => {
    render(
      <TodoContext.Provider value={mockTodoContext}>
        <HomePage/>
      </TodoContext.Provider>
    )
    expect(screen.getByText(/задачи отсутствуют/i)).toBeInTheDocument()
  })

  it('should render list of folder', () => {
    const folders = [createMockFolder(), createMockFolder()]
    render(
      <TodoContext.Provider value={{ ...mockTodoContext, folders }}>
        <HomePage/>
      </TodoContext.Provider>
    )
    expect(screen.queryByText(/задачи отсутствуют/i)).not.toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(folders.length)
  })
})

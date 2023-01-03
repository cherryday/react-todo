import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { TodoContext, TodoContextProps } from '../../context/todo.context'
import { createMockFolder } from '../../__tests__/__helpers__/todo'
import { FolderPage } from './FolderPage'

const mockTodoContext: TodoContextProps = {
  folders: [],
  createFolder: jest.fn(),
  deleteFolder: jest.fn(),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
}

describe('FolderPage', () => {
  it('should render folder', () => {
    const folder = createMockFolder()
    render(
      <MemoryRouter initialEntries={[`/${folder.id}`]}>
        <TodoContext.Provider value={{ ...mockTodoContext, folders: [folder] }}>
          <Routes>
            <Route path="/:folderId" element={<FolderPage/>}/>
          </Routes>
        </TodoContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText(folder.name)).toBeInTheDocument()
  })
})

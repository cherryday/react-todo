import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { createMockFolder, createMockTodoContextProps } from '../../test-helpers'
import { TodoContext } from '../../context/todo.context'
import { FolderPage } from './FolderPage'

describe('FolderPage', () => {
  it('should render folder', () => {
    const folder = createMockFolder()
    render(
      <MemoryRouter initialEntries={[`/${folder.id}`]}>
        <TodoContext.Provider value={{ ...createMockTodoContextProps(), folders: [folder] }}>
          <Routes>
            <Route path="/:folderId" element={<FolderPage/>}/>
          </Routes>
        </TodoContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText(folder.name)).toBeInTheDocument()
  })
})

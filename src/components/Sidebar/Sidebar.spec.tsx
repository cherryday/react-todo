import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { createMockFolder, createMockTodoContextProps } from '../../test-helpers'
import { TodoContext } from '../../context/todo.context'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('should render', () => {
    render(
      <BrowserRouter>
        <TodoContext.Provider value={createMockTodoContextProps()}>
          <Sidebar/>
        </TodoContext.Provider>
      </BrowserRouter>
    )
    
    expect(screen.queryByRole('link', { name: /все задачи/i })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /добавить папку/i })).toBeInTheDocument()
  })

  it('should render list of link', () => {
    render(
      <BrowserRouter>
        <TodoContext.Provider value={{ ...createMockTodoContextProps(), folders: [createMockFolder(), createMockFolder()] }}>
          <Sidebar/>
        </TodoContext.Provider>
      </BrowserRouter>
    )
    
    expect(screen.getByRole('link', { name: /все задачи/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })
})

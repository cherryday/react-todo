import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMockFolder, createMockTask } from '../../test-helpers'
import { TodoProvider } from '../../context/todo.context'
import { FolderSection } from './FolderSection'

describe('FolderSection', () => {
  it('should render content', () => {
    const folder = createMockFolder()
    folder.tasks = [createMockTask(), createMockTask()]
    render(<FolderSection folder={folder}/>, { wrapper: TodoProvider })
    
    expect(screen.getByRole('heading', { name: folder.name })).toBeInTheDocument()
    expect(screen.getAllByRole('checkbox')).toHaveLength(2)
  })

  it('should open and close form', () => {
    render(<FolderSection folder={createMockFolder()}/>, { wrapper: TodoProvider })
    expect(screen.queryByRole('form')).not.toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /новая задача/i }))
    expect(screen.getByRole('form')).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /отмена/i }))
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })
})

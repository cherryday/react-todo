import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Folder, FOLDER_COLORS } from '../../services/todo.service'
import { TodoProvider } from '../../context/todo.context'
import { FolderSection } from './FolderSection'

describe('FolderSection', () => {
  it('should open and close form', () => {
    const folder: Folder = {
      id: '',
      name: '',
      color: FOLDER_COLORS[0],
      tasks: [],
    }
    render(<FolderSection folder={folder}/>, { wrapper: TodoProvider })
    expect(screen.queryByRole('form')).not.toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /новая задача/i }))
    expect(screen.getByRole('form')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FolderCreateTooltip } from './FolderCreateTooltip'
import { TodoProvider } from '../../context/todo.context'

describe('FolderCreateTooltip', () => {
  it('should open and close form', async () => {
    render(<FolderCreateTooltip/>, { wrapper: TodoProvider })
    expect(screen.queryByRole('form')).not.toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /добавить папку/i }))
    expect(await screen.findByRole('form')).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })
})

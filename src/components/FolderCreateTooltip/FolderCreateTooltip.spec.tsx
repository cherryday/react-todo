import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMockTodoContextProps } from '../../test-helpers'
import { TodoContext } from '../../context/todo.context'
import { FolderCreateTooltip } from './FolderCreateTooltip'

describe('FolderCreateTooltip', () => {
  it('should open and close form', async () => {
    render(
      <TodoContext.Provider value={createMockTodoContextProps()}>
        <FolderCreateTooltip/>
      </TodoContext.Provider>
    )
    expect(screen.queryByRole('form')).not.toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /добавить папку/i }))
    expect(await screen.findByRole('form')).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })

  it('should submit form', async () => {
    const createFolder = jest.fn()
    const inputText = 'text'
    render(
      <TodoContext.Provider value={{ ...createMockTodoContextProps(), createFolder }}>
        <FolderCreateTooltip/>
      </TodoContext.Provider>
    )

    userEvent.click(screen.getByRole('button', { name: /добавить папку/i }))
    const input = await screen.findByRole('textbox')
    userEvent.type(input, inputText)
    userEvent.click(screen.getByRole('button', { name: /^добавить$/i }))

    expect(createFolder).toHaveBeenCalledWith({ name: inputText, color: '#C9D1D3' })
    expect(input).toHaveValue('')
  })
})

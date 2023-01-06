import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { createMockFolder } from './test-helpers'
import { getFolders } from './services/todo.service'
import App from './App'

jest.mock('./services/todo.service', () => {
  const originalModule = jest.requireActual('./services/todo.service')
  return {
    ...originalModule,
    getFolders: jest.fn(),
  }
})

describe('App', () => {
  const mockGetFolders = getFolders as jest.Mock

  it('should render empty', () => {
    mockGetFolders.mockReturnValue([])

    render(<App/>, { wrapper: BrowserRouter })

    expect(screen.getByRole('button', { name: /добавить папку/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /задачи отсутствуют/i })).toBeInTheDocument()
  })

  it('should render folders', () => {
    const folderA = createMockFolder()
    const folderB = createMockFolder()
    mockGetFolders.mockReturnValue([folderA, folderB])

    render(<App/>, { wrapper: BrowserRouter })

    expect(screen.queryByRole('heading', { name: /задачи отсутствуют/i })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: folderA.name })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: folderB.name })).toBeInTheDocument()

    userEvent.click(screen.getByRole('link', { name: new RegExp(folderA.name) }))

    expect(screen.getByRole('heading', { name: folderA.name })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: folderB.name })).not.toBeInTheDocument()
  })
})

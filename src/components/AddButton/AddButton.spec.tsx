import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddButton } from './AddButton'

describe('AddButton', () => {
  it('should render children', () => {
    const children = 'text'
    render(<AddButton>{children}</AddButton>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it('should call onClick', () => {
    const clickHandler = jest.fn()
    render(<AddButton onClick={clickHandler}/>)
    userEvent.click(screen.getByRole('button'))
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})

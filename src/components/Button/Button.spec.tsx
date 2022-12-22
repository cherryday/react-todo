import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('should render children', () => {
    const children = 'text'
    render(<Button>{children}</Button>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it('should call onClick', () => {
    const clickHandler = jest.fn()
    render(<Button onClick={clickHandler}/>)
    userEvent.click(screen.getByRole('button'))
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})

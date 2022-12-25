import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  it('should call changeHandler with value', () => {
    const value = 'value'
    const changeHandler = jest.fn()
    render(<Input onChange={changeHandler}/>)
    const input = screen.getByRole('textbox')
    userEvent.type(input, value)
    expect(changeHandler.mock.lastCall[0].target.value).toBe(value)
  })
})

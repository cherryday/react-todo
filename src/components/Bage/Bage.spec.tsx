import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Bage } from './Bage'

describe('Bage', () => {
  it('should call onClick', () => {
    const clickHandler = jest.fn()
    render(<Bage color="#09011A" onClick={clickHandler}/>)
    userEvent.click(screen.getByRole('radio'))
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})

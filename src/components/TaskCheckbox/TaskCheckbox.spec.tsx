import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaskCheckbox, TaskCheckboxProps } from './TaskCheckbox'

function renderComponent(props?: Partial<TaskCheckboxProps>) {
  render(
    <TaskCheckbox
      label=""
      checked
      onChange={() => {}}
      remove={() => {}}
      {...props}
    ></TaskCheckbox>
  )
}

describe('TaskCheckbox', () => {
  it('should call remove handler', () => {
    const removeHandler = jest.fn()
    renderComponent({ remove: removeHandler })
    userEvent.click(screen.getByRole('button'))
    expect(removeHandler).toHaveBeenCalledTimes(1)
  })

  it('should call change handler', () => {
    const changeHandler = jest.fn()
    renderComponent({ onChange: changeHandler })
    userEvent.click(screen.getByRole('checkbox'))
    expect(changeHandler).toHaveBeenCalledTimes(1)
  })

  it('should render label', () => {
    const label = 'text'
    renderComponent({ label })
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  // it('should checked', () => {
  //   const { rerender } = render(
  //     <TaskCheckbox
  //       label=""
  //       checked={false}
  //       onChange={() => {}}
  //       remove={() => {}}
  //     ></TaskCheckbox>
  //   )

  //   expect(screen.getByRole('checkbox')).not.toBeChecked()

  //   rerender(<TaskCheckbox
  //     label=""
  //     checked={true}
  //     onChange={() => {}}
  //     remove={() => {}}
  //   ></TaskCheckbox>)

  //   expect(screen.getByRole('checkbox')).toBeChecked()
  // })
})

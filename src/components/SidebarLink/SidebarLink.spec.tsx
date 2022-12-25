import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { SidebarLink, SidebarLinkProps } from './SidebarLink'

function renderComponent(props?: Partial<SidebarLinkProps>) {
  render(
    <SidebarLink
      to=""
      prepend=""
      {...props}
    >{props?.children}</SidebarLink>,
    { wrapper: BrowserRouter }
  )
}

describe('SidebarLink', () => {
  it('should render prepend', () => {
    const prepend = 'prepend'
    renderComponent({ prepend })
    expect(screen.getByText(prepend)).toBeInTheDocument()
  })

  it('should render children', () => {
    const children = 'children'
    renderComponent({ children })
    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it('should not render remove button', () => {
    renderComponent()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should call removeHandler', () => {
    const removeHandler = jest.fn()
    renderComponent({ remove: removeHandler })
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(removeHandler).toHaveBeenCalledTimes(1)
  })
})

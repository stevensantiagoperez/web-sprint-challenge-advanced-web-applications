import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'

test('renders spinner when spinnerOn is true', () => {
  // Render the Spinner component with spinnerOn true
  render(<Spinner spinnerOn={true} />)
  
  // Assuming Spinner renders a div with text "Loading..." when active:
  const spinnerElement = screen.getByText(/loading/i)
  expect(spinnerElement).toBeInTheDocument()
})

test('renders nothing when spinnerOn is false', () => {
  // Render the Spinner component with spinnerOn false
  const { container } = render(<Spinner spinnerOn={false} />)
  
  // Expect that nothing is rendered (null)
  expect(container.firstChild).toBeNull()
})

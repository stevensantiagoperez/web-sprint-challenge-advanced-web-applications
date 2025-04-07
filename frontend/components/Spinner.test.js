import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'
import React from 'react'
import '@testing-library/jest-dom'

test('renders spinner when spinnerOn is true', () => {
  render(<Spinner spinnerOn={true} />)
  const loadingText = screen.getByText(/loading/i)
  expect(loadingText).toBeInTheDocument()
})

test('does not render spinner when spinnerOn is false', () => {
  render(<Spinner spinnerOn={false} />)
  const loadingText = screen.queryByText(/loading/i)
  expect(loadingText).not.toBeInTheDocument()
})

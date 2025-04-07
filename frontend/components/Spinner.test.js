import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'
import React from 'react'
import '@testing-library/jest-dom'

test('renders spinner when spinnerOn is true', () => {
  render(<Spinner on={true} />)
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
})

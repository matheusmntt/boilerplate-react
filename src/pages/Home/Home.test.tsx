import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Home } from './Home'

describe('Home', () => {
  it('Should be able to see the initial text on screen', () => {
    const { getByText } = render(<Home />)

    expect(getByText('Ready to code!')).toBeInTheDocument()
    expect(getByText('Template by matheusmntt')).toBeInTheDocument()
  })
})

import React from 'react'

import { render, screen } from '@testing-library/react'
import MockedStore from 'providers/MockedStore'
import DashboardScreen from 'screens/Dashboard/DashboardScreen'

describe('Test DashboardScreen', () => {
  it('should render welcome message', () => {
    render(
      <MockedStore>
        <DashboardScreen />
      </MockedStore>,
    )
    expect(screen.getByText('Get message with success')).toBeInTheDocument()
  })
})

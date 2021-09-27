import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Damian Pokrywka',
    url: '12345'
  }

  const component = render(
    <Blog blog={blog}/>
  )

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library Damian Pokrywka'
  )

})
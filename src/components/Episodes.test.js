import React from 'react'
import Episodes from './Episodes'
import { render } from '@testing-library/react'


// test('Episodes.js is rendering', () => {
//     const { getByTestId } = render(<Episodes />);
//     getByTestId(`episodes`);
// })

test('Episodes render correctly with or without props', () => {
    const mockData = {
        id: '123',
        image: { medium: 'medium_image'},
        name: 'name',
        season: 3,
        number: 2,
        summary: '<p>Summary</p>',
        runtime: 20
    }
    const { queryAllByText, rerender } = render(<Episodes episodes={[]}/>);
    expect(queryAllByText(/season/i)).toHaveLength(0);
    rerender(<Episodes episodes={[mockData]}/>);
    expect(queryAllByText(/name/i)).toHaveLength(1)
})

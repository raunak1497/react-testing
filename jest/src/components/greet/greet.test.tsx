import {render, screen} from '@testing-library/react';
import { Greet } from './greet';

describe('Greet', () => {
    test('Greet renders correctly', ()=> {
    render (<Greet />)
    const textElement = screen.getByText('Hello Guest')
    expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () =>{
            test('Greet renders with name', () =>{
            render(<Greet name='Raunak'/>)
            const textElement = screen.getByText('Hello Raunak')
            expect(textElement).toBeInTheDocument()
        })
    })
})






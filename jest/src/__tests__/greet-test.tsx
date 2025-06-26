import {render, screen} from '@testing-library/react';
import { Greet } from '../components/greet/greet';

describe('Greet', () => {
    test('Greet renders correctly', ()=> {
    render (<Greet />)
    const textElement = screen.getByText('Hello')
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






import {render, screen} from '@testing-library/react';
import { Greet } from './greet';

test('Greet remders correctly', ()=> {
    render (<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

test('Greet renders with name', () =>{
    render(<Greet name='Raunak'/>)
    const textElement = screen.getByText('Hello Raunak')
    expect(textElement).toBeInTheDocument()
})
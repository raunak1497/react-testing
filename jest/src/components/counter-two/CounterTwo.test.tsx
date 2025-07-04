import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counterTwo";
import userEvent from "@testing-library/user-event";

describe('CounterTwo', ()=>{
    test('renders correctly', ()=> {
        render(<CounterTwo count={0}/>);
        const textElement = screen.getByText("Counter Two");
        expect(textElement).toBeInTheDocument()
    });

    test('renders correctly',async ()=> {
        userEvent.setup()
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<CounterTwo count={0}
            handleIncrement={incrementHandler}
            handleDecrement={decrementHandler}
        />);
        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        });
        const decrementButton = screen.getByRole('button', {
            name: "Decrement"
        });
        await userEvent.click(incrementButton);
        await userEvent.click(decrementButton);
        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    });
})
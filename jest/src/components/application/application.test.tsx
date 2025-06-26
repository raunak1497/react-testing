import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
    test('renders Application', () =>{
        render(<Application />);
        const nameElement =screen.getAllByRole('textbox')
        expect(nameElement).toBeInTheDocument

        const jobLocation = screen.getByRole('combobox')
        expect(jobLocation).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    });
});
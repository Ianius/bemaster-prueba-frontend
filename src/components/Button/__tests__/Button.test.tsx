import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Button } from "../Button";

const mockedOnClick = jest.fn();

describe("Button", () => {
    test("should render a button with text", () => {
        render(<Button text={"Click me!"}/>);
        const buttonElement = screen.getByRole("button", { name: "Click me!" });
        expect(buttonElement).toBeInTheDocument();
    });

    test("should be a link instead of a button when provided an href attribute", () => {
        render(
            <BrowserRouter>
                <Button text={"Click me!"} href="/home"/>
            </BrowserRouter>
        );
        const linkElement = screen.getByRole("link", { name: "Click me!" });
        expect(linkElement).toBeInTheDocument();
    });

    test("should call the provided callback on click", () => {
        render(<Button text="Click me!" onClick={mockedOnClick} />);
        const buttonElement = screen.getByRole("button", { name: "Click me!" });
        fireEvent.click(buttonElement);
        expect(mockedOnClick).toHaveBeenCalled();
    });
});

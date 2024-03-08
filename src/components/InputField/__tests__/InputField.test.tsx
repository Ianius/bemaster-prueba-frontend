import { render, screen } from "@testing-library/react";
import { InputField } from "../InputField";

const mockedOnChange = jest.fn();
const mockedOnSubmit = jest.fn();

describe("InputField", () => {
    test("should render a textbox", () => {
        render(
            <InputField
                id="email"
                placeholder="Email"
                value=""
                type="email"
                onChange={mockedOnChange}
                onSubmit={mockedOnSubmit}
            />
        );
        const textboxElement = screen.getByRole("textbox");
        expect(textboxElement).toBeInTheDocument();
    });

    test("should render a placeholder", () => {
        render(
            <InputField
                id="email"
                placeholder="Email"
                value=""
                type="email"
                onChange={mockedOnChange}
                onSubmit={mockedOnSubmit}
            />
        );
        const placeholderElement = screen.getByText("Email");
        expect(placeholderElement).toBeInTheDocument();
    });

    test("should render an error if provided", () => {
        render(
            <InputField
                id="email"
                placeholder="Email"
                value=""
                type="email"
                error="This is an error!"
                onChange={mockedOnChange}
                onSubmit={mockedOnSubmit}
            />
        );
        const placeholderElement = screen.getByText("This is an error!");
        expect(placeholderElement).toBeInTheDocument();
    });
});

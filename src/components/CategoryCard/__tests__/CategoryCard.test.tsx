import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { db } from "../../../data/db";
import { CategoryCard } from "../CategoryCard";

const category = db.categories[0];

describe("CategoryCard", () => {
    test("should render the category name", () => {
        render(
            <BrowserRouter>
                <CategoryCard category={category}/>
            </BrowserRouter>
        );
        const nameElement= screen.getByText(category.name);
        expect(nameElement).toBeInTheDocument();
    });

    test("should have a link", () => {
        render(
            <BrowserRouter>
                <CategoryCard category={category}/>
            </BrowserRouter>
        );
        const linkElement = screen.getByRole("link");
        expect(linkElement).toBeInTheDocument();
    });

    test("should link to the right category", () => {
        render(
            <BrowserRouter>
                <CategoryCard category={category}/>
            </BrowserRouter>
        );
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", `/category/${category.id}`);
    });
});

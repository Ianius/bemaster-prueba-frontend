import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { db } from "../../../data/db";
import { MovieCoverButton } from "../MovieCoverButton";

const movie = db.content[0];

const MockedMovieCoverButton = () => {
    return (
        <BrowserRouter>
            <MovieCoverButton movie={movie} />
        </BrowserRouter>
    );
};

describe("MovieCoverButton", () => {
    test("should render a link", () => {
        render(<MockedMovieCoverButton />);
        const linkElement = screen.getByRole("link");
        expect(linkElement).toBeInTheDocument();
    });

    test("should render an image", () => {
        render(<MockedMovieCoverButton />);
        const imgElement = screen.getByRole("img");
        expect(imgElement).toBeInTheDocument();
    });

    test("should set the image source to the movie thumbnail", () => {
        render(<MockedMovieCoverButton />);
        const imgElement = screen.getByRole("img");
        expect(imgElement).toHaveAttribute("src", movie.thumbnail);
    });

    test("should link to the right movie page", () => {
        render(<MockedMovieCoverButton />);
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", `/movie/${movie.id}`);
    });
});

import { Link } from "react-router-dom";
import { db } from "../../data/db";
import { Movie } from "../../types/db.types";
import "./MovieCoverButton.css";

interface MovieCoverButtonProps {
    movie: Movie;
}

export const MovieCoverButton = ({ movie }: MovieCoverButtonProps) => {
    return (
        <Link
            to={`/movie/${movie.id}`}
            className="movie-cover-button"
        >
            <img 
                className="movie-cover-button__image"
                src={movie.thumbnail}
            />
        </Link>
    );
};

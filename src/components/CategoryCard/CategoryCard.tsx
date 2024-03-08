import { Link } from "react-router-dom";
import { Category } from "../../types/db.types";
import "./CategoryCard.css";

interface CategoryCardProps {
    category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <Link
            to={`/category/${category.id}`}
            className="category-card"
        >
            <div
                className="category-card__background"
            >
                <img
                    alt="Category icon"
                    className="category-card__icon"
                    src={require(`../../images/${category.icon}`)}
                />
            </div>

            <span className="category-card__name">{category.name}</span>
        </Link>
    );
};

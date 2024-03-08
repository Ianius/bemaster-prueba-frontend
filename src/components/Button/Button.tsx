import { Link } from "react-router-dom";
import "./Button.css";

type ButtonColors = "white" | "blue";

interface ButtonProps {
    text:     string;
    href?:    string;
    color?:   ButtonColors;
    onClick?: () => void;
}

export const Button = ({ text, href, color = "blue", onClick }: ButtonProps) => {
    const colorClasses: {[K in ButtonColors]: string} = {
        blue: "button--blue",
        white: "button--white"
    };

    const classes = `button ${colorClasses[color]}`;

    if (href) {
        return (
            <Link
                className={classes}
                onClick={onClick}
                to={href}
            >
                { text }
            </Link>
        );
    }

    return (
        <button
            className={classes}
            onClick={onClick}
            type="button"
        >
            { text }
        </button>
    );
};

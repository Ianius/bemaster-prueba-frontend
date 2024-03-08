import "./SectionHeader.css";

interface SectionHeaderProps {
    title:       string;
    description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
    return (
        <div
            className="section-header"
        >
            <div
                className="section-header__center"
            >
                <div
                    className="section-header__title"
                >
                    { title }
                </div>

                <span
                    className="section-header__description"
                >
                    { description }
                </span>
            </div>
        </div>
    );
};

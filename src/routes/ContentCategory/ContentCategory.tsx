import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { MovieCoverButton } from "../../components/MovieCoverButton/MovieCoverButton";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { db } from "../../data/db";
import "./ContentCategory.css";

export const ContentCategory = () => {
    const { id } = useParams();
    const category = db.categories.find(it => it.id === parseInt(id!))!;
    return (
        <div className="content-category">
            <SectionHeader
                title={category.name}
                description={category.description}
            />

            <Container>
                <div className="content-category__grid">
                    {
                        db.content
                            .filter(it => it.category === category.id)
                            .map(it => (
                                <MovieCoverButton key={it.id} movie={it} />
                            ))
                    }
                </div>
            </Container>
        </div>
    );
};
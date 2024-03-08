import { useContext } from "react";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { Container } from "../../components/Container/Container";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { db } from "../../data/db";
import { PrivateRouteContext } from "../PrivateRoute/PrivateRoute";
import "./Home.css";

export const Home = () => {
    const { user } = useContext(PrivateRouteContext);
    return (
        <div className="home">
            <SectionHeader
                title="Categories"
                description="Select a category too see movies from!"
            />

            <Container>
                <div className="home__category-grid">
                    { user.categories
                        .map(it => db.categories.find(cat => cat.id === it)!)
                        .map(it => <CategoryCard key={it.id} category={it} />) }
                </div>
            </Container>
        </div>
    );
};
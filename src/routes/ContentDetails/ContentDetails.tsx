import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { db } from "../../data/db";
import "./ContentDetails.css";

export const ContentDetails = () => {
    const { id } = useParams();
    const movie  = db.content.find(it => it.id === parseInt(id!))!;
    return (
        <div className="content-details">
            <div className="content-details__header">
                <img 
                    alt="Movie thumbnail"
                    className="content-details__image"
                    src={movie.thumbnail} 
                />

                <div className="content-details__gradient">
                    <Container>
                        <div className="content-details__details">
                            <div className="content-details__name">{movie.title}</div>
                            <div className="content-details__synopsis">{movie.synopsis}</div>
                        </div>
                    </Container>
                </div>
            </div>

            <Container>
                <div className="content-details__trailer">
                    <div>Trailer</div>
                    <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </Container>
        </div>
    );
};
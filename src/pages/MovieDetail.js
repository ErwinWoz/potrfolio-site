import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movie, setMovie] = useState(null);
    const [movies, setMovies] = useState(MovieState);
    
    //Use Effect
    useEffect(() => {
        const currentMovie = movies.filter(stateMoview => stateMoview.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return ( 
        <>
            {movie && (
                <DetailsStyle 
                    variants={pageAnimation}
                    initial='hidden' 
                    animate='show' 
                    exit='exit' 
                >
                    <HeadlineStyle>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie.title}/>
                    </HeadlineStyle>
                    <AwardsStyle>
                        {movie.awards.map(award => (
                            <Award title={award.title} description={award.description} />
                        ))}
                    </AwardsStyle>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt={movie.title}/>
                    </ImageDisplay>
                </DetailsStyle>
            )}
        </>
    );
};

const DetailsStyle = styled(motion.div)`
    color: white;
`;

const HeadlineStyle = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);                                                        
    }
    img {
        width: 100%;
        height:70vh;
        object-fit: cover;
    }
`;

const AwardsStyle = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-between;
`;


//Award component
const Award = ({title, description}) => {
    return ( 
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
     );
};

const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background-color: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;
 

 
export default MovieDetail;
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { api } from "../../services/api"

import { Container } from './style';

const Home: React.FC = () => {
    const [ isLoad, setIsLoad ] = useState(false);
    const [course, setCourse] = useState(); 

    useEffect(() => {
        api
          .get("/")
          .then((response) => setCourse(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    console.log(course);

    return (
        <Container>
            { isLoad ? (
                <div>
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="content">
                    <p className="bar-line">
                        <div className="nav-bar">
                            <h1>Home</h1>
                            <Link to="/criarcurso">Criar Curso|</Link>
                            <Link to="/">Pag3|</Link>
                        </div>
                        <div>
                            <p>dado: {JSON.stringify(course)}</p>
                        </div>
                    </p>
                    <div className="content">

                    </div>
                </div>
            )}
        </Container>
    );
}

export default Home;
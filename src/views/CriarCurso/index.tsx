import React, { FormEvent, useCallback, useState } from 'react';
import { Link } from "react-router-dom";

import { Container } from './style';
import { api } from '../../services/api'

interface IData {
    id: string;
    title: string;
    description: string;
    imageURL: string;
    teacherName: string;
    classLinks: string;
}

const CriarCurso: React.FC = () => {
    const [isLoad, setIsLoad] = useState(false);
    const [data, setData] = useState<IData>({} as IData);
    const [submit, setSubmit] = useState(false);

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('', data).then(response => {
            if (response.status === 200) {
                setSubmit(true);
            }
        });
    }, [data]);

    return (
        <Container>
            {isLoad ? (
                <div>
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="body">
                    <p className="bar-line">
                        <div className="nav-bar">
                            <h1>Criar novo curso</h1>
                            <Link to="/">Home|</Link>
                            <Link to="/">Pag3|</Link>
                        </div>
                    </p>
                    <div className="content">
                        <div className="form-wrapper">
                            {submit ? (
                                <div>
                                    <h1>Informacoes salvas!</h1>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <p>
                                        ID:
                                        <input
                                            type="text"
                                            placeholder="id"
                                            onChange={e => setData({ ...data, id: e.target.value })}
                                        />
                                    </p>

                                    <br />
                                    <p>
                                        Titulo do Curso:
                                        <input
                                            type="text"
                                            placeholder="title"
                                            onChange={e => setData({ ...data, title: e.target.value })}
                                        />
                                    </p>
                                    <br />
                                    <p>
                                        Descricao:
                                        <input
                                            type="text"
                                            placeholder="description"
                                            onChange={e => setData({ ...data, description: e.target.value })}
                                        />
                                    </p>
                                    <br />
                                    <p>
                                        URL da imagem:
                                        <input
                                            type="text"
                                            placeholder="imageURL"
                                            onChange={e => setData({ ...data, imageURL: e.target.value })}
                                        />
                                    </p>
                                    <br />
                                    <p>
                                        Nome do Professor:
                                        <input
                                            type="text"
                                            placeholder="teacherName"
                                            onChange={e => setData({ ...data, teacherName: e.target.value })}
                                        />
                                    </p>
                                    <br />
                                    <p>
                                        Links das aulas:
                                        <input
                                            type="text"
                                            placeholder="classLinks"
                                            onChange={e => setData({ ...data, classLinks: e.target.value })}
                                        />
                                    </p>
                                    <input type="submit" placeholder="submit" />
                                </form>
                            )
                            }

                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default CriarCurso;
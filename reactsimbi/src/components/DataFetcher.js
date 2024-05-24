import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './styleDataFetcher.css';

const DataFetcher = () => {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [liked, setLiked] = useState({}); 
    useEffect(() => {
        axios.get('/dados')
            .then(response => {
                console.log(response.data);
                setDados(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleLikeClick = (index) => {
        setLiked((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const formatCurrency = (value) => {
        const numericValue = Number(value);
        if (isNaN(numericValue)) {
            return value;
        }
        return numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };


    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error.message}</p>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className='conteudo'>
            <div className='caixa'>
                <Slider {...settings} className='lista'>
                    {dados.map((item, index) => (
                        <div className='espacoembaixo'>
                            <div key={index} className='lista-item'>
                                <div className='rouanet'>
                                    <p className='prouanet'>ROUANET</p>
                                </div>
                                <p className='TituloProjeto justificadoDireita'>{item.nome}</p>  
                                <p className='justificadoDireita' >{item.municipio} - {item.uf}</p> 
                                <div className='tooltip'>
                                    <p className='limitandoTexto justificadoDireita'>{item.justificativa}</p>
                                    <span className='tooltiptext'>{item.justificativa}</span> 
                                </div>
                                <div className='displayflex'>
                                    <p className='justificadoDireita black'>Aprovado</p><p className='justificadoDireita'><strong>{formatCurrency(item.valor_aprovado)}</strong></p>
                                </div>
                                <div className='displayflex'>
                                    <p className='justificadoDireita black'> Captado</p><p className='justificadoDireita'><strong>{formatCurrency(item.valor_captado)}</strong></p>
                                </div>
                                <div className='botao'>
                                    <input className='button' type="button" value="Adicionar"/>
                                    <FontAwesomeIcon
                                    icon={faHeart}
                                    size="3x"
                                    style={{
                                        color: liked[index] ? 'red' : 'gray',
                                        marginLeft: '55px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => handleLikeClick(index)}
                                    />
                                </div>    
                            </div>
                            
                        </div>

                    ))}
                </Slider>
            </div>
            <div className='linka'>
                <a href='#'>+ VER TODOS</a>
            </div>
        </div>


    );
};

export default DataFetcher;

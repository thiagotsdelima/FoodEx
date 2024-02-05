import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container } from './styles';
import { Meals } from '../Meals';

export function Carousel({ url }) {
    const [data, setData] = useState([]);
    const carouselRef = useRef(null);
    const autoScrollRef = useRef(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar dados", error);
            });

        // Inicia a rolagem automática
        startAutoScroll(50);

        return () => clearInterval(autoScrollRef.current); // Limpa o intervalo quando o componente é desmontado
    }, [url]);

    const scroll = (direction, scrollAmount = carouselRef.current.offsetWidth / 2) => {
        carouselRef.current.scrollLeft += direction * scrollAmount;
    };

    const startAutoScroll = (speed = 30) => {
        autoScrollRef.current = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollLeft += 1; // Ajuste este valor para controlar a velocidade da rolagem automática
            }
        }, speed);
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollRef.current);
    };

    if (!data.length) return <p>Carregando...</p>;

    return (
        <Container onMouseOver={stopAutoScroll} onMouseOut={startAutoScroll}>
            <div className="carouselContainer">
                <button onClick={() => scroll(-1, 100)}>Esquerda</button> 
                <div className="carousel" ref={carouselRef}>
                    {data.map((item) => (
                        <Meals key={item.id} data={item} />
                    ))}
                </div>
                <button onClick={() => scroll(1, 100)}>Direita</button> 
            </div>
        </Container>
    );
}

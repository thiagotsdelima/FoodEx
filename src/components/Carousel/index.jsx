import React, { useState, useEffect, useRef } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';
import { Meals } from '../Meals';

export function Carousel() {
    const [data, setData] = useState([]);
    const carouselRef = useRef(null);
    const autoScrollRef = useRef(null);

    useEffect(() => {
        api.get('/meals') 
            .then(response => {
                 
                setData(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar dados", error);
            });
    }, []);
    

    const scroll = (direction, scrollAmount = carouselRef.current.offsetWidth / 2) => {
        carouselRef.current.scrollLeft += direction * scrollAmount;
    };

    const startAutoScroll = (speed = 30) => {
        autoScrollRef.current = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollLeft += 1; 
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

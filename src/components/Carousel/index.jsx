import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'; 

export function Carousel({ url }) {
    const [data, setData] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar dados", error);
            });
    }, [url]);

    const scroll = (direction) => {
        const { current: carousel } = carouselRef;
        const scrollAmount = carousel.offsetWidth / 2; 
        carousel.scrollLeft += direction * scrollAmount;
    }

    if (!data.length) return <p>Carregando...</p>;

    return (
        <div className="carouselContainer">
            <button onClick={() => scroll(-1)}>Esquerda</button>
            <div className="carousel" ref={carouselRef}>
                {data.map((item) => (
                    <div className="carouselItem" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>R$ {item.price}</span>
                        {/* Outros elementos que você desejar */}
                    </div>
                ))}
            </div>
            <button onClick={() => scroll(1)}>Direita</button>
        </div>
    );
}



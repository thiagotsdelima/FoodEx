import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container } from './styles';
import { Meals } from '../Meals';

export function Carousel({ data }) {
    
    const carouselRef = useRef(null);
    const autoScrollRef = useRef(null);
    

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

    if (!data.length) return <p>Loading...</p>;

    return (
        <Container onMouseOver={stopAutoScroll} onMouseOut={startAutoScroll}>
            <div className="carouselContainer">
                <div className="arrowContainer arrowLeft" onClick={() => scroll(-1, 100)}>
                    <FiChevronLeft />
                </div>
                <div className="carousel" ref={carouselRef}>
                    {data.map((item) => (
                        <Meals key={item.id} data={item} />
                    ))}
                </div>
                <div className="arrowContainer arrowRight" onClick={() => scroll(1, 100)}>
                    <FiChevronRight />
                </div>
            </div>
        </Container>
    );
}
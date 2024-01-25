import React, { useState, useEffect, useRef } from 'react';
import './styles'; 

export function Carousel() {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/meals") 
        .then((response) => response.json())
        .then(setData)
        .catch((error) => console.error("Erro ao carregar dados", error)); 
    }, []);

    const scrollCarousel = (direction) => {
        const offsetWidth = carousel.current.offsetWidth;
        carousel.current.scrollLeft += direction * offsetWidth;
    }

    if(!data.length) return <p>Carregando...</p>;

    return (
        <div className="carouselContainer">
            <div className="carousel" ref={carousel}>
            <div className="card" key={id}>
              <div className="interactionIcon">
                <HiOutlineHeart className="emptyHeart" size={24}/>
                {/* <HiHeart className="fullHEart"/> */}
                {/* <PiPencilSimple className="pencil"/> */}
              </div>   

              <div className="image">
              <img src={image} alt={name} />
              </div>

              <div className="dishInfos">
                <h1>{name}<span><PiCaretRight size={18}/></span></h1>
                <p>{description} </p>
                <h2>R$ {price} </h2>
              </div>     

              <div className="order">
                <ButtonQuantity/>  
                <Button title="Incluir"/> 
              </div>
            </div>
            </div>
            <button onClick={() => scrollCarousel(-1)}>Esquerda</button>
            <button onClick={() => scrollCarousel(1)}>Direita</button>
        </div>
    );
}

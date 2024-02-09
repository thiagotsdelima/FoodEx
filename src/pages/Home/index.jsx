import { Container } from './styles';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import maskGroupImage from '../../assets/Maskgroup.png';
import { Rings } from 'react-loader-spinner';


export function Home() {
     const [loading, setLoading] = useState(true);

 
     useEffect(() => {
         const timer = setTimeout(() => {
         setLoading(false); 
       }, 2000); 
       return () => clearTimeout(timer); 
     }, []);
return (
<Container>
<Header />
<main>
            <div className="Header">
            <img src={maskGroupImage} alt="flying fruits" />
              <div className="wrapper">
                <h2>Sabores Inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
              </div>
            </div>
        <div>
      {loading ? (
        <div className="loader">
          <Rings color="#065E7C" width="110" height="110" />
        </div>
      ) : (
        <div>
         <Section>
          <h2>Refeições</h2>
          <Carousel category="refeicoes" />
        </Section>
        <Section>
          <h2>Sobremesas</h2>
          <Carousel category="sobremesas" />
        </Section>
        <Section>
          <h2>Bebidas</h2>
          <Carousel category="bebidas" />
        </Section>
        </div>
      )}
    </div>          
</main>
<Footer />
</Container>
);
}
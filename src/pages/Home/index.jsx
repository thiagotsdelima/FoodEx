import { Container } from './styles';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import maskGroupImage from '../../assets/Maskgroup.png';
import { Rings } from 'react-loader-spinner';
import { api } from '../../services/api'; 

export function Home() {
    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState([]);

   
    useEffect(() => {
        api.get('/meals')
            .then(response => {
                setMeals(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar pratos", error);
                setLoading(false);
            });
    }, []);

    
    const filterDishesByCategory = (categoria) => meals.filter(meal => meal.category_name === categoria);

    return (
        <Container>
            <Header />
            <main>
                <div className="Header">
                    <div className="image">
                    <img src={maskGroupImage} alt="flying fruits" />
                    </div>
                    <div className="wrapper">
                        <h2>Sabores Inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
                {loading ? (
                    <div className="loader">
                        <Rings color="#065E7C" width="110" height="110" />
                    </div>
                ) : (
                    <div className='contentWrapper'>
                        <Section>
                            <h2>Refeições</h2>
                            <Carousel meals={filterDishesByCategory('refeicoes')} />
                        </Section>
                        <Section>
                            <h2>Sobremesas</h2>
                            <Carousel meals={filterDishesByCategory('sobremesas')} />
                        </Section>
                        <Section>
                            <h2>Bebidas</h2>
                            <Carousel meals={filterDishesByCategory('bebidas')} />
                        </Section>
                    </div>
                )}
            </main>
            <Footer />
        </Container>
    );
}

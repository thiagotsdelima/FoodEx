import { Container } from './styles';
import { useState, useEffect } from 'react';
import { Header, Carousel, Footer, Section } from '../../components';
import maskGroupImage from '../../assets/Maskgroup.png';
import { Rings } from 'react-loader-spinner';
import { api } from '../../services/api'; 

export function Home() {
    const [loading, setLoading] = useState(true);
    const [pratos, setPratos] = useState([]);

   
    useEffect(() => {
        api.get('/pratos')
            .then(response => {
                setPratos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar pratos", error);
                setLoading(false);
            });
    }, []);

    
    const filterDishesByCategory = (categoria) => pratos.filter(prato => prato.category_name === categoria);

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
                {loading ? (
                    <div className="loader">
                        <Rings color="#065E7C" width="110" height="110" />
                    </div>
                ) : (
                    <div className='contentWrapper'>
                        <Section>
                            <h2>Refeições</h2>
                            <Carousel pratos={filterDishesByCategory('refeicoes')} />
                        </Section>
                        <Section>
                            <h2>Sobremesas</h2>
                            <Carousel pratos={filterDishesByCategory('sobremesas')} />
                        </Section>
                        <Section>
                            <h2>Bebidas</h2>
                            <Carousel pratos={filterDishesByCategory('bebidas')} />
                        </Section>
                    </div>
                )}
            </main>
            <Footer />
        </Container>
    );
}

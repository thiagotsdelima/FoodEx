import { Container } from './styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [orderCount, setOrderCount] = useState(0);
    const navigate = useNavigate();

   
    const filterDishesByCategory = (categoria) => meals.filter(meal => meal.category_id === categoria);
   
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

    
    const refeicoesFiltradas = filterDishesByCategory(1);
    const sobremesasFiltradas = filterDishesByCategory(2);
    const bebidasFiltradas = filterDishesByCategory(3);
  

    const handleOpenCart = () => {
        navigate('/editMeal'); 
    };
    
    const handleAddItemToOrder = () => {
        setOrderCount(prevCount => prevCount + 1); 
    };
    return (
        <Container>
             <Header orderCount={orderCount} />
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
                <Carousel data={refeicoesFiltradas} />
                </Section>
                <Section>
                <h2>Sobremesas</h2>
                <Carousel data={sobremesasFiltradas} />
                </Section>
                <Section>
                <h2>Bebidas</h2>
                <Carousel data={bebidasFiltradas} />
                </Section>
                    </div>
                )}
            </main>
            <Footer />
        </Container>
    );
}

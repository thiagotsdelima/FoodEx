import { Container } from './styles';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/footer';
import { Section } from '../../components/Section';
import maskGroupImage from '../../assets/Maskgroup.png';
import MaskGroup2Image from '../../assets/Maskgroup2.png';
import { Rings } from 'react-loader-spinner';
import { api } from '../../services/api'; 


export function Home() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const response = await api.get('/meals', { params: { search }, withCredentials: true });
        
        setMeals(response.data);
      } catch (error) {
        console.error("Erro ao buscar pratos", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchMeals();
  }, [search]);

  const filterDishesByCategory = (category) => meals.filter(meal => meal.category_id === category);

 
  const filteredMeals = filterDishesByCategory(1);
  const filteredDesserts = filterDishesByCategory(2);
  const filteredDrinks = filterDishesByCategory(3);

    return (
        <Container>
            <Header
        onSearchChange={setSearch}
        valueSearch={search}
        loading={loading}
      />
            <main>
                <div className="Header">
                    <div className="image">
                    <img className="maskGroupImage" src={maskGroupImage} alt="flying fruits" />
                    <img className="MaskGroup2Image" src={MaskGroup2Image} alt="flying fruits" />
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
                      <Carousel data={filteredMeals} />
                        </Section>
                          <Section>
                          <h2 className="mainDesserts">Sobremesas</h2>
                          <h2 className="mainDishe">Pratos principais</h2>
                          <Carousel data={filteredDesserts} />
                        </Section>
                      <Section>
                      <h2 className="mainDrinks">Bebidas</h2>
                      <h2 className="mainDishe">Pratos principais</h2>
                    <Carousel data={filteredDrinks} />
                  </Section>
                  </div>
                )}
            </main>
            <Footer />
        </Container>
    );
}
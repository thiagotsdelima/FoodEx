import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { Container, ButtonBackWrapper } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonBack } from '../../components/ButtonBack';
import { Meals } from '../../components/Meals';
import { Seasoning } from '../../components/Seasoning';

export function Details() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        api.get(`/meals/${id}`)
            .then(response => {
                setMeal(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching meal details", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;

    return (
        <Container>
            <Header />
            <main>
            <ButtonBackWrapper>
                <ButtonBack />
            </ButtonBackWrapper>
            <Meals data={meal} customStyle="meals-custom-style" />
            {meal && meal.seasonings && (
                <Seasoning seasonings={meal.seasonings} />
            )}
            </main>
            <Footer />
        </Container>
    );
}

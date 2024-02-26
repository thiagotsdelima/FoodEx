import { Container } from './styles';
import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { useCart } from '../../hooks/cart';
import { CartItem }from '../../components/CartItem';
import { api } from '../../services/api'; 
import { useAuth } from '../../hooks/auth';
import { Rings } from 'react-loader-spinner';

export function MealOrder() {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const { cart } = useCart();

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
  const totalPrice = cart.reduce((total, item) => total + item.total_price, 0);

return (
<Container>
<Header />
<main>
        <Section title="Meu pedido"/>
        {loading ? (
          <div className="loader">
              <Rings color="#065E7C" width="110" height="110" />
          </div>
        ) : (
          <>
            {cart.map(item => (
  <CartItem key={item.id} data={item} />
))}
            <div>Total: R$ {totalPrice.toFixed(2)}</div>
          </>
        )}
</main>
<Button />
<Footer />
</Container>
);
}
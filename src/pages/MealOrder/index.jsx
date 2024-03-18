import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/footer';
import { Section } from '../../components/section';
import { Button } from '../../components/Button';
import { useCart } from '../../hooks/cart';
import { CartItem } from '../../components/CartItem';
import { api } from '../../services/api';
import { Rings } from 'react-loader-spinner';
import PixSvg from '../../assets/Pix.svg';
import CardSvg from '../../assets/CreditCard.svg';
import ImageQrCodePng from '../../assets/Qrcode.svg';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import PaymentAccept from '../../assets/paymentAccept.svg';


export function MealOrder() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const { cart, setCart } = useCart();
  const [showQrCode, setShowQrCode] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [validity, setValidity] = useState('');
  const [cvcCode, setCvcCode] = useState('');
  const [isNotFinished, setIsNotFinished] = useState(true);
  const navigate = useNavigate();
  

  const fetchDishDetailsId = async () => {
    try {
        const response = await api.get(`/dishDetails/`, { withCredentials: true });
        if (response.status === 200 && response.data.length > 0) {
            const dishDetailsId = response.data[response.data.length - 1].id;
          
            return dishDetailsId;
        } else {
            return newDishDetailsResponse.data.id;
        }
    } catch (error) {
        console.error('Erro ao obter ou criar o dishDetailsId:', error);
        throw error;
    }
};
  
const handleConfirmPayment = async () => {
  const paymentMethod = prompt("Por favor, escolha um método de pagamento: dinheiro, cartão, pix");

  if (!paymentMethod || !['dinheiro', 'cartao', 'pix'].includes(paymentMethod.toLowerCase())) {
      alert("Método de pagamento inválido.");
      return;
  }
 
  try {
    const dishDetailsId = await fetchDishDetailsId();

    await Promise.all(cart.map(async (item) => {
        const response = await api.put(`/dishDetails/${dishDetailsId}`, {
            status: "Preparing",
        }, { withCredentials: true });
    }));

     
        const itemsToSend = cart.map(item => ({
            dishDetails_id: dishDetailsId,
            meal_id: item.id,
            amount: item.amount,
            unit_price: item.price,
        }));
        const response = await api.post('/selected', {
          items: itemsToSend
      }, { withCredentials: true });
      if (paymentMethod === 'Dinheiro') {
          alert("Aguarde o troco e o pedido.");
      } else { 
          alert("Aguarde enquanto processamos seu pagamento.");
      }

      setPaymentCompleted(true);
  } catch (error) {
      console.error("Erro ao confirmar pedido:", error);
      alert("Erro ao confirmar pedido. Por favor, tente novamente.");
  }
};
 
const handleConfirmSelected = async () => {
  try {
   
    const dishDetailsId = await fetchDishDetailsId(); 
    const response = await api.put(`/dishDetails/${dishDetailsId}`, {
      status: "completed",
    }, { withCredentials: true });
    setTimeout(() => {
      alert("Pedido finalizado com sucesso.");
      setIsNotFinished(false);
      setPaymentCompleted(true);
      setCart([]);
    }, 2000); 
  } catch (error) {
    console.error("Erro na ação final do pedido:", error);
    alert("Erro na ação final do pedido.");
  }
};

  


  useEffect(() => {
    api.get('/meals', {
      withCredentials: true,
    })
      .then(response => {
        setMeals(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar pratos", error);
        setLoading(false);
      });
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.total_price, 0);

  const handleShowQrCode = (show) => {
    setShowQrCode(show);
  };


  return (
    <Container>
      <Header />
      <main>
        <div className="completedPayment">
        <div className="accountOrder">
        <Section title="Meu pedido" />
        {loading ? (
          <div className="loader">
            <Rings color="#065E7C" width="110" height="110" />
          </div>
        ) : (
          <>
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  <CartItem data={item} />
                </li>
              ))}
            </ul>
            <div className='priceTotal'>Total: R$ {totalPrice.toFixed(2)}</div>
          </>
        )}
         <Button title="confere" onClick={handleConfirmPayment} />
        </div>
        <div className="columnByPayment">
        <Section title="Pagamento" />
          <table>
            <thead>
              <tr>
                <th colSpan="2">
                  <div className="wrapperPaymentMethod"> 
                    <button type="button" className="buttonPaymentMethod" onClick={() => handleShowQrCode(true)}>
                      <img src={PixSvg} alt="Símbolo do Pix" />
                      Pix
                    </button>
                    <button type="button" className="buttonPaymentMethod" onClick={() => handleShowQrCode(false)}>
                      <img src={CardSvg} alt="Imagem de cartão de crédito/débito" />
                      Cartão
                    </button> 
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
                    <tr>
                      <td className="PaymentContent" colSpan="2">
                      {showQrCode ? (
                            <img src={ImageQrCodePng} alt="Imagem de 'QRcode'." />
                          ) : (
                            <div className="Payment">
                            {
                              isNotFinished?
                              (
                                <form className="cardDetails">
                                <div className="divCardInputs">
                                  <label htmlFor="cardNumber">
                                  Número do Cartão
                                  </label>
                                  <input
                                    type="number"
                                    id="cardNumber"
                                    placeholder="0000 0000 0000 0000"
                                    onChange={e => setCardNumber(e.target.value)}
                                    onKeyPress={e => {
                                        if (e.target.value.length >= 16) {
                                            e.preventDefault();
                                        }
                                      }}
                                  />
                                </div>
                                
                                <div className="expirationAndCvc">
                                  <div className="divExpirationAndCvc">
                                    <label htmlFor="validity">
                                    Validade
                                    </label>
                                    <input
                                      type="data"
                                      id="validity"
                                      placeholder="07/25"
                                      onChange={e => setValidity(e.target.value)}
                                      maxLength="5"
                                    />
                                  </div>
                                <div className="divExpirationAndCvc">
                                  <label htmlFor="cvcCode">
                                    CVC
                                  </label>
                                  <input
                                    type="number"
                                    id="cvcCode"
                                    placeholder="000"
                                    onChange={e => setCvcCode(e.target.value)}
                                    onKeyPress={e => {
                                        if (e.target.value.length >= 3) {
                                            e.preventDefault();
                                        }
                                        }}
                                  />
                                  </div>
                                </div>
                  
                                <div className="wrapperButtonCompletePayment">
                                  <Button
                                  type="button"
                                  className="buttonPayment"
                                  title="Finalizar pagamento"
                                  onClick={handleConfirmSelected}
                                  >
                                     <img src="/sheet.svg" alt="image of a torn sheet" />
                                  </Button>
                                </div>
                              </form>
                              ) : 
                              (
                                <div 
                                
                                className="paymentFinalized">
                                    <AiOutlineCheckCircle/>
                                    <img src={PaymentAccept} alt="Pagamento Aprovado" />
                                    <p>Pagamento aprovado!</p>
                                </div>
                            )
                            }
                            </div>
                          )}
                          
                      </td>
                    </tr>
                  </tbody>
          </table>
        </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
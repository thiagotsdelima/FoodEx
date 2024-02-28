import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
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
  const { cart } = useCart();
  const [showQrCode, setShowQrCode] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [validity, setValidity] = useState('');
  const [cvcCode, setCvcCode] = useState('');
  const [isNotFinished, setIsNotFinished] = useState(true);
  const navigate = useNavigate();

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

  const totalPrice = cart.reduce((total, item) => total + item.total_price, 0);

  const handleShowQrCode = (show) => {
    setShowQrCode(show);
  };

  const handleCompletePayment = () => {
    setTimeout(() => {
      console.log("Pagamento aprovado!");
      setIsNotFinished(false);
      setPaymentCompleted(true); 
    }, 2000); 
  };
  const handleClickFoundMeal = () => {
    navigate('/mealFound'); 
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
                                  onClick={handleCompletePayment}
                                  >
                                     <img src="/sheet.svg" alt="image of a torn sheet" />
                                  </Button>
                                </div>
                              </form>
                              ) : 
                              (
                                <div className="paymentFinalized">
                                    <AiOutlineCheckCircle/>
                                    <img src={PaymentAccept} alt="Pagamento Aprovado" />
                                    <p>Pagamento aprovado!</p>
                                    <Button 
                                    onClick={handleClickFoundMeal}
                                    title="Fila de Entrega"
                                    />
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

import { Container } from './styles';
import { MealPhoto } from '../../components/MealPhoto';

export function CartItem({data = {}, onClick, loading, ...rest}) {
    const { photo_food = '', name = '', price = 0 } = data;
    return (
        <Container {...rest}>
            <div className="cart-item">
                
                <span>
                    {photo_food && <MealPhoto meal={data} alt={name} />}
                </span>
                <div className="wrapper">
                <h3>1 x {name}</h3>              
                <a href="">Excluir</a>
                </div>
                <p>{`R$: ${price}`}</p>
                
            </div>
        </Container>
    );
}

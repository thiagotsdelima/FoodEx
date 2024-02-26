import { Container } from './styles';

export function CartItem({data = {}, onClick, loading, ...rest}) {
    const { photo_food = '', name = '', price = 0 } = data;
    return (
        <Container {...rest}>
            <div className="cart-item">
                <span>
                    {photo_food && <MealPhoto meal={data} alt={name} />}
                </span>
                <div>
                    <h3>{data.name}</h3>
                    <p>{`R$: ${data.price}`}</p>
                </div>
            </div>
        </Container>
    );
}

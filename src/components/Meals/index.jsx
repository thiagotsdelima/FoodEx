import { Container } from './styles';

export function Meals() {
return (
<Container>
<Profile to="/profile">
  <img src={meal.photo_food} alt={meal.name} />
  <div> 
    <strong><h1>{meal.name}</h1></strong>
    <p>{meal.description}</p>
  </div>
</Profile>

</Container>
);
}

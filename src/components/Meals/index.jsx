import { Container } from './styles';
import { useState } from 'react';


export function Meals({ data, ...rest}) {
  const [name, setName] = useState(meal.name);
  const [description, setdescription] = useState(meal.description);

return (
<Container {...rest}>
<div className='main'>
<span>
  {data.imageDish && <img src={data.photo_food} alt="image of meals" />}
</span>
<div className="request">
<strong>
  {data.name && <h1>{data.name}</h1>}
</strong>
    {data && <p>{data.description}</p>}
</div>
</div>

</Container>
);
}

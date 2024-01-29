import { Container } from './styles';

export function Seasoning({ title, ...rest }) {
return (
<Container {...rest}>
{title}
</Container>
);
}
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 10.5rem 1fr 6.6rem;
grid-template-areas:
"header"
"content"
"footer"
;
#wrapperButton {
  margin: 0;
  height :4.8rem;
  width: 18.2rem;
}

@media (min-width: 376px) {

}
`;
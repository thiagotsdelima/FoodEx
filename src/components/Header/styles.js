import styled from 'styled-components';

export const Container = styled.header`
grid-area: header;
height: 10.5rem;
width: 100%;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
display:flex;
justify-content: space-between;
padding: 0 11.3rem;

.searchContainer {
  display: flex;
  align-items: center;
}

@media (min-width: 768px) { 
  .MobileIcon, .MobileStar {
    display: none;
  }
}


@media (max-width: 767px) {
  .MobileIcon, .MobileStar {
    display: block; 
  }
}

@media (min-width: 768px) {
    padding: 0 2rem; 
    height: auto; 
Input {
    display: none;
}
  }
@media (min-width: 370px) {
grid-area: header;
height: 11.4rem;
width: 100%;
Input {
    display: none;
}
}
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  img {
    width: 64px;
    height: 64px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 18px;

    button {
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  }`;
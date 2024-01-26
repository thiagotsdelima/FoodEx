import styled from 'styled-components';

export const Container = styled.header`
grid-area: header;
height: 10.5rem;
width: 100%;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
display:flex;
justify-content: space-between;
padding: 0 11.3rem;

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
  gap: 1.1rem;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 1.8rem;

    button {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  }`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none; 

  @media (max-width: 767px) {
    display: block; 

    a:hover, a:focus {
      
    }
  }
`;

export const MobileStar = styled.div`
  display: none; 

  @media (max-width: 767px) {
    display: block; 
    a:hover, a:focus {
     
    }
  }
  `;
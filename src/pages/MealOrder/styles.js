import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: column; 
 
 
  
  .completePayment { 
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-areas: "accountOrder columnByPayment";
    width: 100%;
    height: 557px;
    margin: -5rem auto 10rem 0;
    padding: 4.4rem;
    gap: 20px;
    place-items: center;
    
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
      grid-template-columns: 1fr; 
      grid-template-areas: 
        "accountOrder"
        "columnByPayment";
    }
  }

  .accountOrder { 
    
    grid-area: accountOrder; 
    img {
        width: 4.5rem;
        height: 4.5rem;
        }

    .priceTotal {
        font-family: ${({ theme }) => theme.FONTS.Poppins200Medium};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-top: 16px;
    }        
    ul {
    list-style-type: none; 
    padding: 0; 

    li {
      margin-bottom: 16px; 

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  }
  .columnByPayment { 
   
    grid-area: columnByPayment;
     
     > table {
      border-collapse: collapse;
      margin-bottom: 2rem;
     
        > thead {
          tr, th {
          border: 0.666px solid var(--light-light-600, #76797B);
          padding: 1.5rem;
          text-align: center;
          }

          th {
            width: 50%; 

            &:hover {
                background: ${({ theme }) => theme.COLORS.GRAY_700};
              }

            cursor: pointer;

            .wrapperPaymentMethod {
              display: flex;
              align-items: center;
              justify-content: center;

              &:hover {
                background: ${({ theme }) => theme.COLORS.GRAY_700};
              }

             

            .buttonPaymentMethod {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1rem;

              border: none;

              color: ${({ theme }) => theme.COLORS.GRAY_100};
              background: transparent;            

              &:hover {
                background: ${({ theme }) => theme.COLORS.GRAY_700};
              }

              
              }   
            }  
          }
        }

        > tbody {
          border: 1px solid var(--light-light-600, #76797B);
          text-align: center;

          tr {
            
            td {
              padding: 2rem 3rem;
              text-align: center;
              vertical-align: middle;

            
              .cardDetails {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                

                justify-content: start;
                align-items: start;

                input {
                  &::-webkit-inner-spin-button,
                  &::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                }

                @media (min-width: 768px) {
                  width: 20rem;              
                }

                @media (min-width: 820px) {
                  width: 28rem;               
                }
                              
                > .divCardInputs {
                  display: flex;
                  flex-direction: column;
                  align-items: start;
                  width: 100%;

                  > input {
                    background: transparent;
                    border-radius: 5px;
                    border: 1px solid #808080;
                    
                    width: 100%;
                
                    height: 3.5rem;
                    padding: 1.2rem 1.4rem;
                    
                    color: ${({ theme }) => theme.COLORS.GRAY_100};
                    background: transparent;

                    &::placeholder {
                      font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
                      color: ${({ theme }) => theme.COLORS.GRAY_500};
                    }

                    &:focus {
                      border: 1px solid var(--light-light-100, #FFF);
                      border-radius: 0.5rem;
                      }                  
                   }                  
                }
              
                > .expirationAndCvc {
                  display: flex;
                  gap: 1rem;

                  width: 100%;

                  padding-bottom: 2rem;

                  justify-content: start;       

                  > .divExpirationAndCvc {
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    text-align: start;

                    > input {
                      background: transparent;
                      border-radius: 5px;
                      border: 1px solid #808080;
                      
                      width: 100%;
                  
                      height: 3.5rem;
                      padding: 1.2rem 1.4rem;
                      
                      color: ${({ theme }) => theme.COLORS.WHITE_100};
                      background: transparent;

                      &::placeholder {
                        font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
                        
                        color: ${({ theme }) => theme.COLORS.GRAY_500};
                      } 

                      &:focus {
                        border: 1px solid var(--light-light-100, #FFF);
                        border-radius: 0.5rem;
                        }
                     }
                    }
              }

              > .wrapperButtonCompletePayment{
                  width: 100%;
                  height: 4.6rem;
                }             
           }
           > .cardPayment {
            > .paymentFinalized {
                > svg {
                  width: 10rem;
                  height: 10rem;
                }
                > p {
                  font-size: 20px;
                  margin-bottom: 1rem;
                }
                > button {         
                  padding: 1.2rem;                 
                }
              }
            }
          }
        }
      }
    }
    }
`;

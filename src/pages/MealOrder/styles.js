import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width:100%;
  height: 100vh;

 

  .completedPayment { 
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-areas: "accountOrder columnByPayment";
    gap: 20px;
    align-items: flex-start;
    
   
    margin: -5rem auto 10rem 0;
    padding: 4.4rem;
    gap: 20px;
    place-items: center;
   
  .accountOrder, .columnByPayment {
   
    }
    
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  
    min-height: 100vh;
    max-width: 356px;
    display: grid;
    grid-template-rows: 1fr 1fr; 
    grid-template-columns: auto;
    grid-template-areas: 
      "accountOrder"
      "columnByPayment";
    justify-content: center; /* Centraliza o grid horizontalmente */
    margin: 0 auto; /* Adicional para garantir que o container esteja centralizado */
    .columnByPayment {
      margin-top: 50px;
    }
}

  


  .accountOrder { 
    margin-bottom: -110px;
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
    height: 450px;
    overflow: auto; 
    max-height: 70vh;

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
     
     
        > thead {
          tr, th {
          border: 0.666px solid var(--light-light-600, #76797B);
          padding: 1.5rem;
          text-align: center;
         
          }

          th {
           

            .wrapperPaymentMethod {
              display: flex;
            	justify-content: space-around;
            
              

             

            .buttonPaymentMethod {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1rem;

              border: none;

              color: ${({ theme }) => theme.COLORS.GRAY_100};
              background: transparent;            

             

              
              }   
            }  
          }
        }

        > tbody {
          border: 1px solid var(--light-light-600, #76797B);
          text-align: center;
         
          tr {
            
            td {
              padding: 1.5rem 1.8rem;
              text-align: center;
              vertical-align: middle;
              
            
              .cardDetails {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                                

                justify-content: start;
                align-items: start;

                .divCardInputs label,
                .divExpirationAndCvc label {
                  font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
                  color: ${({ theme }) => theme.COLORS.GRAY_400};
                }

                input {
                  &::-webkit-inner-spin-button,
                  &::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                }

                @media (min-width: 820px) {
                  width: 23rem;        
                         
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
                    
                    width: 21.8rem;
                
                    height: 3rem;
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
                      
                      width: 10.4rem;
                  
                      height: 3rem;
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
              }

           
              .wrapperButtonCompletePayment .buttonPayment {
                margin-left: 55px;
                display: flex;
                justify-content: center; 
                align-items: center; 
                gap: 10px; 
                margin-top: -1rem;
                font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
                        
                color: ${({ theme }) => theme.COLORS.GRAY_100};
              
                
                padding: .5rem 1.5rem; 
                border: none; 
                
            
               
              }

              
              .wrapperButtonCompletePayment .buttonPayment img {
                margin-top: 0; 
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
  }}
`;

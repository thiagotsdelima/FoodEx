import { Container } from './styles';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { StatusBy } from '../../components/StatusBy';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { Rings } from 'react-loader-spinner';


export function Home() {
     const [loading, setLoading] = useState(true);

 
     useEffect(() => {
         const timer = setTimeout(() => {
         setLoading(false); 
       }, 2000); 
       return () => clearTimeout(timer); 
     }, []);
return (
<Container>
<Header />
<main>
<div>
      {loading ? (
        <div className="loader">
          <Rings color="#065E7C" width="110" height="110" />
        </div>
      ) : (
        <div>
          <StatusBy />
          <Carousel />
        </div>
      )}
    </div>          
</main>
<Footer />
</Container>
);
}
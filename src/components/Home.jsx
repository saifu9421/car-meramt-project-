
import Navbar from './Navbar';

import Banner from './Banner';
import About from './About';
import Footer from './Footer';
import Services from './Services';
import BrowserProduct from './BrowserProduct';
import Time from './Time';

const Home = () => {
    return (
       
        <>

<div>
           <Navbar></Navbar>
        </div>
        
        <div>
            <Banner></Banner>
        </div>
    
  <div>
      <About></About>
  </div>
  <div>
  <BrowserProduct></BrowserProduct>
 
  </div>
  <div>
  <Services></Services>
  </div>
        <div>
       <Time></Time>
        </div>
        </>
       
    );
};

export default Home;
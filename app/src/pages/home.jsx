import '../styles/App.css';
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import Breedsearchblock from '../layouts/breedsearchblock';
import Articleblock from '../layouts/articleblock';
import Gallery from '../layouts/gallery';
import { Container } from '@mui/material';

function Home() {

  return (
    <>
      <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignContent:'center',margin:'0',
      // zIndex:zInd,backgroundColor:bgColor
      }}>
        <Header/>
        <Breedsearchblock /> 
        <Container sx={{width:{xs:'315px',sm:'700px'},display:'flex',flexDirection:{xs:'column',sm:'row'},justifyContent:'space-between',padding:{xs:'0'}}}>
          <Articleblock/>
          <Gallery/>
        </Container>
        <Footer/>
      </div>
    </>

  );
}
export default Home;
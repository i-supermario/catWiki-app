import { Typography } from '@mui/material';
import Container from '@mui/material/Container'
import Footer from '../layouts/footer'
import Header from '../layouts/header'


function TopBreeds(){
    return(
        <>
            <Container disableGutters>
                <Header/>
                <Typography variant='h3' >
                    Top 10 most searched breeds    
                </Typography>    
                <Footer/>             
            </Container>
            
        </>
    )
}
export default TopBreeds;
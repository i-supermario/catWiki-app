import Container from '@mui/material/Container'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/CatwikiLogo.svg'



function Header(){
    return(
        <>
            <Container disableGutters maxWidth="md" sx={{width:{sm:'796px'},paddingTop:'10px',paddingBottom:'10px',paddingLeft:"50px"}}>
                <Link to="/"><Logo fill='black' /></Link>
            </Container>
            
        </>
    )
}

export default Header;
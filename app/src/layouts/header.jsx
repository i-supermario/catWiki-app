import Container from '@mui/material/Container'
import { ReactComponent as Logo } from '../assets/CatwikiLogo.svg'



function Header(){
    return(
        <>
            <Container maxWidth="md" sx={{width:{sm:'796px'},paddingTop:'10px',paddingBottom:'10px'}}>
                <Logo fill='black' />
            </Container>
            
        </>
    )
}

export default Header;
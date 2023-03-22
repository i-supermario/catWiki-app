import Container from '@mui/material/Container'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/CatwikiLogo.svg'

const style = {
    width:{sm:'796px'},
    paddingTop:'10px',
    paddingBottom:'10px',
    paddingLeft:"50px"
}



function Header(){
    return(
        <>
            <Container disableGutters maxWidth="md" sx={style}>
                <Link to="/"><Logo fill='black' /></Link>
            </Container>
            
        </>
    )
}

export default Header;
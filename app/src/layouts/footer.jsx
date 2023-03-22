import { Link, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { ReactComponent as Logo } from '../assets/CatwikiLogo.svg'
import Copyright from '../assets/copyright.svg'

const style = {
    width:{xs:'315px',sm:'750px'},
    display: 'flex',
    flexDirection:{xs:'column',sm:'row'},justifyContent:{xs:'center',sm:'space-between'},
    alignContent:{xs:'left',sm:'center'},bgcolor: '#000000',
    color: 'white',
    borderTopLeftRadius:'20px',borderTopRightRadius: '20px',paddingTop:'10px',
    paddingBottom:'10px',
    paddingLeft:'15px',
    paddingRight:'15px'
}



function Footer(){

    return (
        <>
            <Container sx={style}>
                <Logo fill='white' />
                <Typography variant='caption' sx={{verticalAlign:'middle'}}>
                    <img alt='copyright' src={Copyright} height='20px' width='20px' ></img>
                    created by {' '}
                    <Link sx={{color:'white',textDecorationLine:'none'}} href='https://github.com/i-supermario'>
                        Sarang
                    </Link>
                    - devChallenge.io 2021
                </Typography>
            </Container>
        </>
    )
}

export default Footer;

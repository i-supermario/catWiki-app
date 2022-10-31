import { Typography,Divider, Link } from '@mui/material'
import Container from '@mui/material/Container'

function Articleblock(){
    return(
        <>
            <Container sx={{
                width:{xs:"315px",sm:'350px'},
                display:'flex',
                flexDirection:'column',
                rowGap:'20px',
                paddingTop:'40px',
                marginLeft:'0',
                padding:{xs:'10px 24px 10px 24px',sm:'40px 24px 40px 24px'},
                }}>
                <Divider sx={{width:'50px',borderBottomWidth:'4px',borderColor:'#4d2600',borderRadius:'2px'}}/>
                <Typography variant='h3' sx={{color:'#331a00', fontFamily:'Rockwell',fontSize:'35px',fontWeight:'bold'}} >
                    Why should you have a cat?
                </Typography>
                <Typography variant='h6' sx={{color:'#331a00',fontSize:'17px', fontFamily:'Rockwell'}} >
                    Having a cat around you can actually trigger 
                    the release of calming chemicals in your body 
                    which lower your stress and anxiety levels
                </Typography>
                <Link sx={{color:'#331a00',textDecorationLine:'none'}} href='https://animalkind.org/blog/top-5-reasons-cat/' >
                    READ MORE 
                </Link>
            </Container>
        </>
    )
}
export default Articleblock;

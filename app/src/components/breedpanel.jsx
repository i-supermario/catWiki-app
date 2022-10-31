import { Typography,Divider,Link } from '@mui/material'
import Container from '@mui/material/Container'
import Picturepanel from './picturepanel';

function Breedpanel(){
    return(
        <>
            <Container maxWidth="md" sx={{
                width:{xs:'315px',sm:'750px'},
                display:'flex',
                flexDirection:'column',
                rowGap:'5px',
                padding:{xs:'10px 24px 10px 24px',sm:'40px 48px 40px 48px'},
                bgcolor:'#fff2e6',
                borderBottomLeftRadius:'15px',borderBottomRightRadius:'15px',
                fontFamily:'Rockwell'}}>
                <Typography variant='paragraph' sx={{color:'#331a00',
                // paddingLeft:'10px'
                }}>
                    Most Searched Breeds
                </Typography>
                <Divider sx={{width:'50px',borderBottomWidth:'4px',borderColor:'#4d2600',borderRadius:'2px',
                // marginLeft:'10px'
                }}/>
                <Container maxWidth="md" sx={{display:'flex',justifyContent:'space-between',
                padding:{xs:'0'}
                }}>
                    <Typography variant='h5' sx={{color:'#331a00', fontFamily:'Rockwell',fontWeight:'bold',
                    // paddingLeft:'10px'
                    }} >
                        66+ Breeds For you to discover
                    </Typography>
                    <Link sx={{display:{xs:'none',sm:'block'},color:'#331a00',textDecorationLine:'none'}} href='https://animalkind.org/blog/top-5-reasons-cat/' >
                        SEE MORE 
                    </Link>
                </Container>
                <Picturepanel/>
            </Container>
        </>
    )   
}
export default Breedpanel;
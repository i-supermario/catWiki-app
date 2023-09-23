import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../layouts/footer'
import Header from '../layouts/header'

const catStyle = {
    

}

function Cat(props){
    return(
        <>
            <Container key={props.index} disableGutters sx={{
                    display: 'flex',
                    columnGap:'50px',
                    margin:'15px 0 15px 0',

                }}>
                    <Box>
                        <img key={props.index} src={props.url} alt={props.name} style={{height:'200px',width:'200px',borderRadius: '15px'}} />
                    </Box>
                    <Container key={props.id} disableGutters sx={{
                        display:'flex', 
                        flexDirection:'column',
                    }}>
                        <Typography key={props.id} variant='h4'>
                            {props.index+1}{". "}{props.name}
                        </Typography>
                        <Typography key={props.url} variant='caption' >
                            {props.description}
                        </Typography>
                    </Container>

            </Container>
        </>
    )

}


function TopBreeds(){
    const location = useLocation()
    const data = location.state.data
    // console.log(data)


    return(
        <>
            <Header/>
            <Container maxWidth="md" sx={{
                width:{sm:'796px'},
                paddingTop:'10px',
                paddingBottom:'10px',
                paddingLeft:'30px',
                fontFamily:'Rockwell',
                color:'#331a00'
            }} disableGutters>
                
                <Typography variant='h3' >
                    Top 10 most searched breeds    
                </Typography>
                {
                    data.map((value,i) =>
                    {
                        return <Cat index={i} id={value.breed[0].id} url={value.url} name={value.breed[0].name} description={value.breed[0].description}  />
                    }
                    )
                }             
            </Container>
            <Footer/>
        </>
    )
}
export default TopBreeds;
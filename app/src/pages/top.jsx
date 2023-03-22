import { Typography } from '@mui/material';
import Container from '@mui/material/Container'
import { useEffect, useState, } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../layouts/footer'
import Header from '../layouts/header'


function TopBreeds(){
    const location = useLocation()
    const { data,setData } = useState(location.state)
    useEffect(()=>{
        fetch('http://localhost:3001/app/top')
        .then(res => res.json())

    },[])


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
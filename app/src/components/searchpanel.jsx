import { List, ListItem, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { ReactComponent as Logo } from '../assets/CatwikiLogo.svg'
import Searchbar from './searchbar'
import HeroImagesm from '../assets/HeroImagesm.png'
import HeroImagelg from '../assets/HeroImagelg.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// let data = require('../data/searchdata.json')

function Searchpanel(props){

    const [resultList,setResultList] = useState([])

    async function showSearchResults(evt){
        setResultList([])
        let searchQ = evt.target.value;
        let response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchQ}`)
        let result = await response.json()
        let resultData = []
        Object.values(result).forEach(value => {
            let name = value['name']
            resultData.push(
                <ListItem key={name}>
                    <Link to="/profile" state={{data: value}} style ={{textDecoration:"none",color:"black"}} 
                    >
                    {name} 
                        </Link>
                </ListItem>
            )
        })
        setResultList(resultData)
        // console.log(resultList)
        
    }

    return(
        <>
            <Container maxWidth="md" sx={{
                width:{xs:'315px',sm:'750px'},
                display: 'flex',
                flexDirection:'column',
                justifyContent:'space-around',
                alignContent:'left',gap:{xs:'5px',sm:'25px'},
                backgroundImage:{xs:`url(${HeroImagesm})`,sm:`url(${HeroImagelg})`},
                backgroundSize:{xs:'315px 145px',sm:'750px 250px'},
                bgcolor: '#000000',
                color: 'white',
                borderTopLeftRadius:'20px',borderTopRightRadius: '20px',
                padding:{xs:'10px 24px 10px 24px',sm:'40px 48px 40px 48px'}}}>
                <Logo fill='white' />
                <Typography variant='caption' sx={{width:{xs:'150px',sm:'180px'},verticalAlign:'middle'}}>
                    Get to know more about
                    your cat breed
                </Typography>
                <Searchbar showSearchResults={showSearchResults}/>
                <List sx={{
                    display:'flex',
                    flexDirection:'column',
                    maxHeight:'150px',
                    fontFamily:'Rockwell',
                    position: 'absolute',
                    bgcolor:'white',
                    overflowY:'scroll',
                    borderRadius:'20px',
                    width:{xs:'110px',sm:'210px'},
                    padding:'0',
                    marginLeft:'0px',
                    // marginTop:'-20px',
                    color:'black',
                    top:{xs:'220px',sm:'280px'}
                    }}>
                        {resultList}
                </List>
            </Container>  
        </>
    )
}

export default Searchpanel;
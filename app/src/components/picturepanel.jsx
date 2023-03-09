import { Typography, Grid } from '@mui/material'
import Container from '@mui/material/Container'
import { useEffect, useState } from 'react';

function CatPic(props){
    return(
        <Container disableGutters >
                <Container sx={{width:'auto',height:'auto',padding:{xs:'0'},borderRadius:'20px',textAlign:'center',margin:0}}>
                    <img alt='' src={props.url} style={{width:'150px',height:'150px',borderRadius:'15px'}} />
                </Container>
                <Typography sx={{width:'150px',fontFamily:'Rockwell',paddingLeft:{xs:'0'}}}>
                    {props.title}
                </Typography>
        </Container>
    )
}

function Picturepanel(props){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://api.thecatapi.com/v1/images/search?limit=2`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return(
        <>
            {
                data ? 
                        <Grid container sx={{
                            }}>
                            {
                                Object.values(data.slice(0,4)).map(value => 
                                <>
                                    <Grid item key={value.id} xs={3} sx={{
                                        height:"auto",
                                        width:"auto",
                                        display:'flex',
                                        flexDirection:'column',
                                        }}>
                                        <CatPic url={value.url} title={value.name} />
                                    </Grid>
                                </> )
                            }
                        </Grid>
                :
                <Typography>
                    Oh Shit!
                </Typography>
            }

        </>
    )
}

export default Picturepanel;
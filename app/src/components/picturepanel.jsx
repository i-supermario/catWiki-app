import { Typography, Grid } from '@mui/material'
import Container from '@mui/material/Container'

function CatPic(props){
    return(
        <Container disableGutters >
                <Container sx={{width:'auto',height:'auto',padding:{xs:'0'},borderRadius:'20px',textAlign:'center',margin:0}}>
                    <img alt='' src={props.url} style={{width:'150px',height:'150px',borderRadius:'15px'}} />
                </Container>
                <Typography sx={{width:'150px',fontFamily:'Rockwell',textAlign:'center'}}>
                    {props.title}
                </Typography>
        </Container>
    )
}

function Picturepanel(props){
    return(
        <>
            <Grid container sx={{
                }}>
                {
                    Object.values(props.data.slice(0,4)).map(value => 
                    <>
                        <Grid item key={value.cat.id} xs={3} sx={{
                            height:"auto",
                            width:"auto",
                            display:'flex',
                            flexDirection:'column',
                            }}>
                            <CatPic url={value.cat.url} title={value.cat.name} />
                        </Grid>
                    </> )
                }
            </Grid>
        </>
    )
}

export default Picturepanel;
import { Typography, Grid } from '@mui/material'
import Container from '@mui/material/Container'

function CatPic(props){
    return(
        <>
                <Container sx={{width:'130px',height:'130px',padding:{xs:'0'},borderRadius:'20px',textAlign:'center',margin:0}}>
                    <img alt='' src={props.url} style={{width:'130px',height:'130px',borderRadius:'15px'}} />
                </Container>
                <Typography sx={{width:'150px',fontFamily:'Rockwell',paddingLeft:{xs:'0'}}}>
                    {props.title}
                </Typography>
        </>
    )
}

function Picturepanel(){
    return (
        <>
            <Grid container spacing={0} sx={{margin:0,width:{xs:'300px',sm:'700px'},rowGap:'10px'}}>
                <Grid item xs={6} sm={3} style={{width:'150px',paddingTop:0,paddingLeft:0,textAlign:'left'}}>
                    <CatPic url='https://cdn2.thecatapi.com/images/d4t.jpg' title='first'/>
                </Grid>
                <Grid item xs={6} sm={3} style={{width:'150px',paddingTop:0,paddingLeft:0,textAlign:'left'}}>
                    <CatPic url='https://cdn2.thecatapi.com/images/dmb.jpg' title='second'/>
                </Grid>
                <Grid item xs={6} sm={3} style={{width:'150px',paddingTop:0,paddingLeft:0,textAlign:'left'}}>
                    <CatPic url='https://cdn2.thecatapi.com/images/MTc3MzI4OA.jpg' title='third'/>
                </Grid>
                <Grid item xs={6} sm={3} style={{width:'150px',paddingTop:0,paddingLeft:0,textAlign:'left'}}>
                    <CatPic url='https://cdn2.thecatapi.com/images/MTc5NDU2MQ.jpg' title='fourth'/>
                </Grid>   
            </Grid>
        </>
    )

}

export default Picturepanel;
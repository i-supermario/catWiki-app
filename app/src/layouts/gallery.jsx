import { Grid } from '@mui/material'
import Image1 from '../assets/image 1.png'
import Image2 from '../assets/image 2.png'
import Image3 from '../assets/image 3.png' 

function Gallery(){
    return (
        <>
            <Grid columnSpacing={2} container sx={{width:{xs:'325px',sm:'350px'},paddingLeft:'15px',paddingRight:'20px',paddingTop:'40px',marginBottom:'20px'}} >
                <Grid item xs={7} sx={{height:'300px',display:'flex',flexDirection:'column',rowGap:'15px'}}>
                    <img alt='akf-1' src={Image2} style={{width:'100%'}}></img>
                    <img alt='akf-2' src={Image1} style={{width:'70%',alignSelf:'self-end'}}></img>
                </Grid>
                <Grid item xs={5} sx={{height:'280px'}} >
                    <img alt='akf-3' src={Image3} style={{width:'100%'}}></img>
                </Grid>
            </Grid>
        </>
    )
}
export default Gallery;
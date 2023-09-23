import { Typography, Grid } from '@mui/material'
import Container from '@mui/material/Container'
import { Suspense } from 'react'


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

export default function Picturepanel(props){

    const data = props.data
    // console.log(data.slice(0,4).map(val => console.log(val.breed[0])))

    return(
        <>
                <Grid container sx={{
                }}>
                {
                    data.slice(0,4).map(value => 
                            <>
                                <Grid item key={value.breed[0].id} xs={3} sx={{
                                    height:"auto",
                                    width:"auto",
                                    display:'flex',
                                    flexDirection:'column',
                                    }}>
                                    <CatPic url={value.url} title={value.breed[0].name} />
                                </Grid>
                            </> )
                }
                </Grid>
        </>
    )
}

// export default function Picturepanel(){
//     return(
//         <>
//             <Suspense fallback={<Container>Loading</Container>}>
//                 <Panel/>
//             </Suspense>
//         </>
//     )
// }
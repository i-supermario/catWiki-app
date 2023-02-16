import { Container, Grid, Typography } from "@mui/material";
import { grid } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Details from "../components/details";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

function Profile(){
    const location = useLocation()
    const { data } = location.state
    const [imgUrl,setImgUrl] = useState('')
    // console.log(data)
    useEffect(()=>{
            fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${data.id}&api_key=live_G4JFwgGUOtl41S5SiTwEqbHEvPWQsv7CWktg8TtQnyC3PWZP8SxVgSCPJYffjY9p`)
            .then(res => res.json())
            .then(data => setImgUrl(data[0].url))
            .then(console.log(imgUrl))
        },[])

    return(
        <>
            <Container disableGutters>
                <Header/>
                <Container disableGutters sx={{
                    width:{xs:'315px',sm:'750px'},
                    display:"flex",
                    flexDirection:"column",
                    columnGap:"50px",
                    padding:'40px 20px 40px 20px',
                    rowGap: "30px"
            }}>
                    <Container disableGutters sx={{
                        width:{xs:'315px',sm:'750px'},
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        gap:"0px 25px",
                    }} >
                        <img alt="profile-img" src={imgUrl} style={{
                            width:"250px",
                            height:"200px",
                            borderRadius:"15px"}}></img>
                        <Details data={data}/>
                    </Container>
                    <Typography variant="h6">
                        Other photos
                    </Typography>
                    <Gallery id={data.id}/>
                </Container>
                
                <Footer/>
            </Container>
        </>
    )
}


function Gallery(props){
    const id = props.id;
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}&api_key=live_G4JFwgGUOtl41S5SiTwEqbHEvPWQsv7CWktg8TtQnyC3PWZP8SxVgSCPJYffjY9p`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return(
        <>
            {
                data ? 
                        <Grid columnSpacing={3} rowSpacing={3} container sx={{
                            width:"100%",
                            padding:"",
                            }}>
                            {
                                Object.values(data).map(value => 
                                <>
                                    <Grid item xs={3} sx={{
                                        height:"200px",
                                        width:"200px",
                                        display:'flex',
                                        flexDirection:'column',
                                        }}>
                                        <img 
                                        style={{
                                            minHeight:"100%",width:"auto",
                                            borderRadius:"15px"

                                        }}
                                        key={value.id} src={value.url} alt={value.name}/>
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
export default Profile;
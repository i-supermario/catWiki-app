import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Details from "../components/details";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

function Profile(){
    const location = useLocation()
    const { data } = location.state
    const [imgUrl,setImgUrl] = useState(`https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`)

    // console.log(data)
    useEffect(()=>{
            fetch(`http://localhost:3001/app/post?catID=${data.id}`,{
                method:'POST'
            })   
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
    const id = props.id
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3001/app/images/search?limit=8&id=${id}`)
        .then(res => res.json())
        .then(res => setData(res))
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
                                        key={value.url} src={value.url} alt={value.url}/>
                                    </Grid>
                                </> )
                            }
                        </Grid>
                :
                <Typography>
                    {data}
                </Typography>
            }

        </>
    )
}
export default Profile;
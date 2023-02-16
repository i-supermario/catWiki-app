import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

function Attribute(props){
    return(
        <>
            <Container disableGutters sx={{display:'flex',columnGap:'10px'}}>
                <Typography variant="caption" sx={{fontWeight:'bold'}}>
                    {props.name}:
                </Typography>
                <Typography variant="caption" >
                    {props.detail}
                </Typography>
            </Container>
        </>
    )
}

function QualityLevel(props){
    const value = props.value;
    const total = 5;
    const list = []
    let index = 0;
    for (; index < value; index++) {
        list.push(
            <Box key={index} sx={{
                backgroundColor:'black',
                borderRadius:'10px',
                paddingLeft:'10px',
                paddingRight:'10px',
                height:'5px'
            }}>
                &nbsp;
            </Box>
        )
    }
    for (; index < total; index++) {
        list.push(
            <Box key={index} sx={{
                backgroundColor:'#dee0e0',
                borderRadius:'10px',
                paddingLeft:'10px',
                paddingRight:'10px',
                height:'5px'
            }}>
                &nbsp;
            </Box>
        )
    }
    return(
        <>
            <Container disableGutters sx={{display:'flex',columnGap:'8px',paddingTop:'10px'}}>
                {list}
            </Container>
        </>
    )
}

function Quality(props){
    return(
        <>
            <Container disableGutters sx={{display:'flex',columnGap:'5px'}}>
                <Typography variant="caption" sx={{minWidth:"250px",fontWeight:'bold'}}>
                    {props.name}:
                </Typography>
                <QualityLevel value = {props.value} />
            </Container>
        </>
    )
}

function Details(props){
    const data = props.data
    
    return(
        <>
            <Container disableGutters sx={{
                display:'flex',
                flexDirection:'column',justifyContent:'space-evenly',
                gap:"10px 0"
                }}>
                <Typography variant="h6">
                    {data.name}
                </Typography>
                <Typography variant="caption" sx={{fontStyle:'italic',padding:"0 80px 0 0"}}>
                    {data.description}
                </Typography>
                <Attribute name="Temperament" detail={data.temperament} />
                <Attribute name="Origin" detail={data.origin}/>
                <Attribute name="Life Span" detail={data.life_span}/>
                <Quality name="Adaptibility" value={data.adaptability}/>
                <Quality name="Affection Level" value={data.affection_level}/>
                <Quality name="Child Friendly" value={data.child_friendly}/>
                <Quality name="Grooming" value={data.grooming}/>
                <Quality name="Intelligence" value={data.intelligence}/>
                <Quality name="Health Issues" value={data.health_issues}/>
                <Quality name="Social Needs" value={data.social_needs}/>
                <Quality name="Stranger Friendly" value={data.stranger_friendly}/>

                

                
                
                
            </Container>
        </>
    )
}
export default Details;
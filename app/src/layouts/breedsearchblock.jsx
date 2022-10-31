import { Container } from "@mui/material"
import Searchpanel from "../components/searchpanel"
import Breedpanel from "../components/breedpanel"

function Breedsearchblock(props){
    return(
        <>
            <Container>
                <Searchpanel/>
                <Breedpanel/>
            </Container>
        </>
    )
}

export default Breedsearchblock;
import { Button, TextField } from '@mui/material'
import Container from '@mui/material/Container'
import SearchIcon from '../assets/Searchicon.svg'



function Searchbar(props){
    return(
        <>
            <Container sx={{
                display:'flex',
                justifyContent:'space-between',
                alignContent:'center',
                fontFamily:'Rockwell',
                bgcolor:'white',
                borderRadius:'20px',
                width:{xs:'110px',sm:'210px'},
                height:'30px',
                paddingLeft:'10px',paddingRight:'10px',
                marginLeft:'0px'}}>
                <TextField onChange={(evt)=>{props.showSearchResults(evt)}} variant='standard' type="search" sx={{display: 'absolute',color:'black'}} placeholder="Search"
                InputProps={{ disableUnderline: true }} />
                <Button sx={{maxWidth:'20px',minWidth:'20px',maxHeight:'20px',minHeight:'20px',padding:0,marginTop:'5px'}} disableRipple >
                    <img alt='search-icon' src={SearchIcon} height='15px' width='15px' ></img>
                </Button>
            </Container>
        </>
    )
}
export default Searchbar;
import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import {ArrowUpward, ArrowDownward } from '@mui/icons-material'
import { ButtonBase,Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';


const StyledBadge = styled(Badge)(({ theme , colorval }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: `${colorval}`,
    color: `${colorval}`,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));



const Identifier = ({Styleclass,isonline,isadmin}) => {
  return (

<div className= {`Cflex Cai-c identifier Cjc-sb ${Styleclass}`} >
<section className='Cflex'>
{/* <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        colorval = {isonline ? "rgb(77, 199, 20)" : "rgb(248, 0, 0)"}
      > */}
    <Avatar style={{ height: '35px', width: '35px' }} variant="rounded" /> 
{/* </StyledBadge> */}

    <div  className="Cmar-ly " >
    <p className=""  >hello kumaraswamys</p>
    <p className="" >42</p>
    </div>
  
</section>
{/* {

isadmin ? 

<section>
  
  <ButtonBase>
  <ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
  </ButtonBase>

  <ButtonBase>
  <ArrowDownward style = {{color : 'rgb(248, 0, 0)'}}/>
  </ButtonBase>
    
</section> : null

} */}

    

</div>
  );
};

export default Identifier;
export {
  StyledBadge
}
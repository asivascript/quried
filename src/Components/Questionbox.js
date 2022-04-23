import React from 'react'
import "../Stylesheets/Home.css"
import { useContext } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext";
import { ButtonBase } from '@mui/material';
import { ArrowUpward,ArrowDownward } from "@mui/icons-material"
const Questionbox = () => {
const {setanswerOC} = useContext(OCcontextval)
const {isDark} = useContext(DMcontextval)

return (
    
<div className={ isDark ? 'question Cw100p Cpad Cbgc001 Cc-p Cbrady Cmar-by Cmar-ty' : 'question Cc-p Cw100p Cpad Cbgc005 Cbrady Cmar-by Cmar-ty'} >
<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi.</h3>
<div className="Cflex Cjc-sb" >

<div>
<ButtonBase>
<ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
<p>55</p>
</ButtonBase>

<ButtonBase>
<ArrowDownward style={{color: 'red' ,marginLeft : '10px'}} />
<p>55</p>
</ButtonBase>
</div>

<button className="btnmidsave Cpad " onClick={()=> setanswerOC(prev => !prev)} > Add Answer</button>
</div>
</div>
  )
}

export default Questionbox
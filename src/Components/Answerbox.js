import "../Stylesheets/Home.css"
import Identifier from './Identifier'
import { useContext } from 'react'
import {Avatar,ButtonBase} from '@mui/material';
import {ArrowUpward,ArrowDownward} from "@mui/icons-material"
import {DMcontextval} from "./Context/DMcontext";

const Answerbox = () => {
const {isDark,setisDark} = useContext(DMcontextval)

return (
<div className={isDark ? 'answerbox Cw100p Cpad Cbgc001 Cbrady Cmar-by' : 'answerbox Cw100p Cpad Cbgc005 Cbrady Cmar-by'} >
<Identifier/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet culpa dolorum consequuntur natus quasi modi error animi eum nostrum, praesentium eius qui quam voluptatibus, magnam magni dignissimos. Quidem animi facere reprehenderit quod, repudiandae quos nulla officiis voluptas fugit ipsa libero dolorum itaque assumenda quasi non deleniti nisi ea. Ratione, veritatis inventore magnam aperiam laudantium labore veniam quos quibusdam. Et omnis veritatis dolores, eum dolorum ipsum dolore dolor, quam, blanditiis rerum minima. Iste natus omnis voluptate, sed dolore eaque ea officiis atque accusantium vel enim ut eos incidunt, cupiditate ipsum debitis dignissimos eius nostrum beatae reprehenderit doloribus dolorum ducimus? Sit, nihil?</p>

<div className="Cflex Cmar-t" >
     
<ButtonBase>
<ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
<p className="Cmar-r">55</p>
</ButtonBase>

<ButtonBase>
<ArrowDownward style={{color: 'red'}} />
<p>55</p>
</ButtonBase>

</div>
</div>
  )
}

export default Answerbox
import "../Stylesheets/Home.css"
import "../Stylesheets/Profile.css"
import Answer from "./Answer";
import Question from "./Question";
import Identifier from "./Identifier";
import Answerbox from "./Answerbox";
import Questionbox from "./Questionbox";
import { useContext ,useState } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext";
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom'
import { SearchOutlined,Person,DarkMode,LightMode,StarOutlineOutlined ,QueryBuilder,HomeOutlined } from "@mui/icons-material"

const Profile = () => {
const {answerOC,setanswerOC,questionOC,setquestionOC} = useContext(OCcontextval)
const {isDark,setisDark} = useContext(DMcontextval)
return (
<div className={ isDark ? ' profile Cflex Ccw Cjc-c Cbgc002 Ch100vh Cw100p': ' profile Cflex Ccb Cjc-c Cbgc003 Ch100vh Cw100p' }>

<section className="navbar Cpad Cflex Cjc-sb " >
<button className="btnmidedit" onClick={() => setquestionOC(prev => !prev)} >Ask Question</button>

<div onClick={() => setisDark(prev => !prev) } >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    {isDark ? <LightMode/> : <DarkMode/>}
</Avatar>
</div>

<Link to = "/" >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    <HomeOutlined/>
</Avatar>
</Link>

</section>



<div className="profiledetails Cpad" >
<Identifier/>
</div>



<section className="faq Cmar-t " >


<div className={isDark ? "userdata Cpad Ccw Cbgc001 Cbrad" : "userdata Cpad Ccb Cbgc005 Cbrad"} >
<Identifier/>

<section className="Cflex Cai-c Cjc-sb Cpad-t">
<div>
<p>Total Quest</p>
<h3 className="Cta-c" >45</h3>
</div>

<div>
<p>Likes</p>
<h3 className="Cta-c" >45</h3>
</div>
  
<div>
<p>Total Quest</p>
<h3 className="Cta-c" >45</h3>
</div>

</section>

<section>
<div className="Cflex Cw100p Cjc-sb Cpad-t" >
<p>Change userName</p>
<button className="btnmidedit" >Edit</button>
</div>

</section>


<section>

</section>


</div>

<Questionbox/>
<Questionbox/>
<Questionbox/>
<Questionbox/>
<Questionbox/>
<Questionbox/>
<Questionbox/>





</section>







{/* question */}





<section className='questans faq Cbrady  Cmar-lx Cflex Cai-c Cf-dir Cmar-t'  >

<Questionbox/>



{/* answers */}



<Answerbox/>
<Answerbox/>
<Answerbox/>
<Answerbox/>
<Answerbox/>
<Answerbox/>
<Answerbox/>
<Answerbox/>
<Answerbox/>
<Answerbox/>



{/* faqs */}




</section>



<Answer/>
<Question/>

</div>
)
}

export default Profile
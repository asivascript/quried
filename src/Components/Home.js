import "../Stylesheets/Home.css"
import Answer from "./Answer";
import Question from "./Question";
import Answerbox from "./Answerbox";
import Searchbox from "./Accessories/Searchbox";
import Questionbox from "./Questionbox";
import { useContext ,useState } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext";
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom'
import { SearchOutlined,Person,DarkMode,LightMode,StarOutlineOutlined ,QueryBuilder } from "@mui/icons-material"
const Home = () => {
const [querytype, setquerytype] = useState("popular")
const {answerOC,setanswerOC,questionOC,setquestionOC} = useContext(OCcontextval)
const {isDark,setisDark} = useContext(DMcontextval)
return (
<div className={ isDark ? ' home Cflex Ccw Cjc-c Cbgc002 Ch100vh Cw100p': ' home Cflex Ccb Cjc-c Cbgc003 Ch100vh Cw100p' }>

<section className="navbar Cpad Cflex Cjc-sb " >
<button className="btnmidedit" onClick={() => setquestionOC(prev => !prev)} >Ask Question</button>

<div onClick={() => setisDark(prev => !prev) } >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    {isDark ? <LightMode/> : <DarkMode/>}
</Avatar>
</div>

<Link to = "/profile" >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    <Person/>
</Avatar>
</Link>

</section>











{/* question */}





<section className='questans Cbrady Cflex Cai-c Cf-dir Cmar-t'  >

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


<section className="faq Cmar-lx Cmar-t " >
<div className="Cflex Cjc-sb Cai-c" >
{

querytype ==='search' && <Searchbox/>

}
{

querytype ==='recent' && <h1 className="Cmar-ly" >Most Recent Questions</h1>

}
{

querytype ==='popular' && <h1 className="Cmar-ly" >Most Popular Questions</h1>

}

<section className="Cflex" >

<div onClick={()=> setquerytype("search")} className='Cmar-ly' >
<Avatar style = {{height : '35px',width  : '35px',backgroundColor : 'rgb(35, 34, 36)'}} >
    <SearchOutlined/>
</Avatar>
</div>


<div onClick={()=> setquerytype("popular")}className='Cmar-ly' >
<Avatar style = {{height : '35px',width  : '35px',backgroundColor : 'rgb(35, 34, 36)'}} >
    <StarOutlineOutlined/>
</Avatar>
</div>


<div onClick={()=> setquerytype("recent")}className='Cmar-ly' >
<Avatar style = {{height : '35px',width  : '35px',backgroundColor : 'rgb(35, 34, 36)'}} >
    <QueryBuilder/>
</Avatar>
</div>


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

<Answer/>
<Question/>

</div>

   
)
}

export default Home
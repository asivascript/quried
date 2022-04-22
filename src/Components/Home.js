import "../Stylesheets/Home.css"
import Identifier from "./Identifier";
import Answer from "./Answer";
import Question from "./Question";
import Answerbox from "./Answerbox";
import { useContext } from 'react'
import { OCcontextval } from './Context/OCcontext'
import {Avatar,ButtonBase} from '@mui/material';
import {SearchOutlined,Person,DarkMode,ArrowUpward,ArrowDownward,LightMode} from "@mui/icons-material"
import {DMcontextval} from "./Context/DMcontext";
const Home = () => {
const {answerOC,setanswerOC,questionOC,setquestionOC} = useContext(OCcontextval)
const {isDark,setisDark} = useContext(DMcontextval)
return (
<div className={ isDark ? ' home Cflex Ccw Cjc-c Cbgc002 Ch100vh Cw100p': ' home Cflex Ccb Cjc-c Cbgc003 Ch100vh Cw100p' }>

<section className="navbar Cpad Cflex Cjc-sb " >
<button className="btnmidedit" onClick={() => setquestionOC(prev => !prev)} >Ask Question</button>
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    <SearchOutlined/>
</Avatar>

<div onClick={() => setisDark(prev => !prev) } >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    {isDark ? <LightMode/> : <DarkMode/>}
</Avatar>
</div>


<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    <Person/>
</Avatar>

</section>











{/* question */}





<section className='questans Cbrady Cflex Cai-c Cf-dir Cmar-t'  >

<div className={isDark? 'question Cw100p Cpad Cbgc001 Cbrady Cmar-by' : 'question Cw100p Cpad Cbrady Cbgc005 Cmar-by'} >
<h2> Channel lorem Creator  Lorem ipsum dolor sit amet.</h2>
<div className="Cflex Cjc-sb" >
     
  <ButtonBase>
  <ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
  <p>55</p>
  </ButtonBase>

  <ButtonBase>
  <ArrowDownward style={{color: 'red'}} />
  <p>55</p>
  </ButtonBase>

<button className="btnmidsave Cpad " onClick={()=> setanswerOC(prev => !prev)} > Add Answer</button>
</div>

</div>




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
<h1 className="Cmar-ly" >Most Popular Question</h1>


{/* each faqs */}


<div className={isDark ? 'question Cw100p Cpad Cbgc001 Cbrady Cmar-by Cmar-ty' : 'question Cw100p Cpad Cbgc005 Cbrady Cmar-by Cmar-ty'} >
<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi.</h3>
<div className="Cflex Cjc-sb" >
     
<ButtonBase>
<ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
<p>55</p>
</ButtonBase>

<ButtonBase>
<ArrowDownward style={{color: 'red'}} />
<p>55</p>
</ButtonBase>

<button className="btnmidsave Cpad " onClick={()=> setanswerOC(prev => !prev)} > Add Answer</button>
</div>
</div>



{/* each faqs */}


<div className={isDark ? 'question Cw100p Cpad Cbgc001 Cc-p Cbrady Cmar-by Cmar-ty' : 'question Cw100p Cpad Cc-p Cbgc005 Cbrady Cmar-by Cmar-ty'} >
<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi.</h3>
<div className="Cflex Cjc-sb" >
     
<ButtonBase>
<ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
<p>55</p>
</ButtonBase>

<ButtonBase>
<ArrowDownward style={{color: 'red'}} />
<p>55</p>
</ButtonBase>

<button className="btnmidsave Cpad " onClick={()=> setanswerOC(prev => !prev)} > Add Answer</button>
</div>
</div>

{/* each faqs */}


<div className={isDark ? 'question Cw100p Cpad Cbgc001 Cbrady Cmar-by Cmar-ty' : 'question Cw100p Cpad Cbgc005 Cbrady Cmar-by Cmar-ty'} >
<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi.</h3>
<div className="Cflex Cjc-sb" >
     
<ButtonBase>
<ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
<p>55</p>
</ButtonBase>

<ButtonBase>
<ArrowDownward style={{color: 'red'}} />
<p>55</p>
</ButtonBase>

<button className="btnmidsave Cpad " onClick={()=> setanswerOC(prev => !prev)} > Add Answer</button>
</div>
</div>















</section>

<Answer/>
<Question/>

</div>

   
)
}

export default Home
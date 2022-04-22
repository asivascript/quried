import "../Stylesheets/Answer.css"
import Identifier from "./Identifier"
import { useContext } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext"
const Answer = () => {
const {answerOC,setanswerOC} = useContext(OCcontextval)
const {isDark,setisDark} = useContext(DMcontextval)

const sendData = () => {
    setanswerOC(prev => !prev)
}
if(!answerOC) return null

else return (
<div className='Cmodal-c' >
<div className={isDark ? 'answer Cbgc001 Cbrady Cpad' : 'answer Cbgc005 Cbrady Cpad'} >
<h4 className="Cta-c" >Put Your Answer</h4>
<Identifier/>
<h3>Question Will Show Up Here</h3>

<textarea className="Cw100p Cmar-t" name="" id="" cols="30" rows="10">

</textarea>

<button className="btnmidcancel Cmar-l " onClick={()=> setanswerOC(prev => !prev)} >Cancel</button>

<button className="btnmidsave Cmar-l" onClick={sendData} >Send</button>

</div>

</div>
)
}

export default Answer
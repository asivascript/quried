import Identifier from "./Identifier"
import { useContext } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext"

const Question = () => {

    const {questionOC,setquestionOC} = useContext(OCcontextval)
    const {isDark,setisDark} = useContext(DMcontextval)
    
    const sendData = () => {
        setquestionOC(prev => !prev)
    }
    if(!questionOC) return null
    
    else return (
    <div className='Cmodal-c' >
    <div className={isDark ? 'answer Cbgc001 Cbrady Cpad' : 'answer Cbgc005 Cbrady Cpad'} >
    <h4 className="Cta-c" >Ask Your Question </h4>
    <Identifier/>

    <textarea className="Cw100p Cmar-t" name="" id="" cols="30" rows="10"></textarea>
    
    <button className="btnmidcancel " onClick={()=> setquestionOC(prev => !prev)} >Cancel</button>
    
    <button className="btnmidsave Cmar-l" onClick={sendData} >Send</button>
    
    </div>
    
    </div>
  )
}

export default Question
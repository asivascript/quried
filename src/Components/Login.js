import "../Stylesheets/Login.css"
import { useState } from "react"
import { useContext } from "react"
import {DMcontextval} from "./Context/DMcontext";
import {Avatar,ButtonBase} from '@mui/material';
import {DarkMode,LightMode} from "@mui/icons-material"
const Login = () => {

const {isDark,setisDark} = useContext(DMcontextval)
const [islogin, setislogin] = useState(true)

return (
<div className={isDark ? 'login Ch100vh Cflex Cai-c Cjc-c Ccw Cbgc002 ' : 'login Ch100vh Cflex Cai-c Ccb Cjc-c Cbgc003 '} >

{/* navbar */}

<section className="navbarlogin Cpad Cflex Cjc-sb " >


<div onClick={() => setisDark(prev => !prev) } >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    {isDark ? <LightMode/> : <DarkMode/>}
</Avatar>
</div>


</section>


<section className={isDark ? "loginbox Cflex Cf-dir Cjc-sb Cpad Cbrad Cbgc001 Cai-c" : "loginbox Cflex Cf-dir Cjc-sb Cpad Cbrad Cbgc005 Cai-c "} >
<Avatar style = {{width : '50px',height : '50px'}} />


<h2>{islogin? "Login" : "Signup"}</h2>

<div className="Cmar-ty" >

<input type="text" name="email" placeholder="Enter Email" className={isDark ? "Cbrady Cbgc002 Ccw " : "Cbrady Cbgc003 Ccb"}/>
{
    !islogin ? 
<input type="text" name="username" placeholder="Enter UserName" className={isDark ? "Cbrady Cbgc002 Ccw Cmar-t" : "Cbrady Cbgc003 Ccb Cmar-t"} />
: null
}
<input type="password" name="passowrd" placeholder="Enter Password" className={isDark ? "Cbrady Cbgc002 Ccw Cmar-t" : "Cbrady Cbgc003 Ccb Cmar-t"} />

{
    !islogin ? 
<input type="password" name="Cpassowrd" placeholder="Confirm Password" className={isDark ? "Cbrady Cbgc002 Ccw Cmar-t" : "Cbrady Cbgc003 Ccb Cmar-t"} />
: null
}

</div>

{islogin ?  <button className="btnmidsave" > Login </button> : <button className="btnmidsave Cmar-tx Cmar-bx"  > Sign Up</button> }

<p>Don't Have a Account <a className={isDark ? "link" : "link2"} href="#" onClick={() => setislogin(prev => !prev)} >{!islogin ? "login" : "sign Up"}</a></p>

</section>


</div>
)

}

export default Login
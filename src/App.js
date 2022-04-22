import './App.css';
import "./Stylesheets/Cstyle/Colors.css"
import "./Stylesheets/Cstyle/Flexbox.css"
import "./Stylesheets/Cstyle/Hw.css"
import "./Stylesheets/Cstyle/Marpad.css"
import "./Stylesheets/Cstyle/Bradius.css"
import "./Stylesheets/Cstyle/Button.css"
import "./Stylesheets/Cstyle/Modal.css"
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import PrivateRoute from "./Components/Routercomponent/PrivateRoute"
import OCcontext from './Components/Context/OCcontext';
import DMcontext from './Components/Context/DMcontext';
import Home from './Components/Home'

function App() {
return (
<div> 
<DMcontext>

<OCcontext>
<Router>

<Routes>
<Route exact path="/login" element = {<h1>login</h1>} />
  

<Route exact path="/" element = {
    <PrivateRoute>
<Home/>
</PrivateRoute>
}/>

    
<Route exact path="/profile" element = {
    <PrivateRoute>
<h1>Profile</h1>
</PrivateRoute>
}/>


</Routes>

</Router>


</OCcontext>
</DMcontext>
</div>
);
}

export default App;

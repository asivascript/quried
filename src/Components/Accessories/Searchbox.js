import "./Styles/Searchbox.css"
import { SearchOutlined } from '@mui/icons-material'
import { useContext } from 'react'
import { DMcontextval } from '../Context/DMcontext'
const Searchbox = ({setsearchtext}) => {
const { isDark } = useContext(DMcontextval)
return (
    <div className={isDark ? 'search Cbrad Cbgc001 Cflex Cai-c' : 'search Cbrad Cbgc005 Cflex Cai-c'}  >
    <SearchOutlined style={{height : "35px", marginLeft : "10px"}} />
    <input type="text" placeholder='Search' autoFocus className={isDark ? 'Ccw' : 'Ccb'} /> 
    </div>
  )
}

export default Searchbox
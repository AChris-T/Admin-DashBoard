import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from "react-router-dom" 
import {DarkModeContext} from "../../context/darkModeContext"
import { useContext } from "react";

const Sidebar = () => { 
  const{dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
        <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">FelaDev</span>
          </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="tittle">MAIN</p>
                <li>
                <DashboardIcon className="icon"/>
                <span>DashBoard</span>
                </li>
                <p className="tittle">LISTS</p>
                <Link to="/user" style={{textDecoration:"none"}}>
                <li>
                <PersonOutlineOutlinedIcon className="icon"/>
                <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                <StoreIcon className="icon"/>
                <span>Products</span>
                </li> 
                </Link>
                <li>
                <CreditCardIcon className="icon"/>
                <span>Orders </span>
                </li> 
                <li>
                <LocalShippingIcon className="icon"/>
                <span>Delivery</span>
                </li> 
                <li>
                <InsertChartOutlinedIcon className="icon"/>
                <span>Stats</span>
                </li> 
                <p className="tittle">USEFUL</p>
                <li>
                <NotificationsNoneIcon className="icon"/>
                <span>Notifications</span>
                </li> 
                <p className="tittle">SERVICE</p>
                <li>
                  <SettingsSystemDaydreamIcon className="icon"/>
                <span>System Health</span>
                </li> 
                <li>
                <PsychologyOutlinedIcon className="icon"/>
                <span>Logs</span>
                </li> 
                <li>
                <SettingsApplicationsIcon className="icon"/>
                <span>Settings</span>
                </li>
                <p className="tittle">USER</p> 
                <li>
                <AccountCircleOutlinedIcon className="icon"/>
                <span>Profile</span>
                </li>
                <li>
                <ExitToAppOutlinedIcon className="icon"/>
                <span>Logout</span>
                </li> 
            </ul> 
        </div>
        <div className="bottom">
          <div className="colorOption"
           onClick={()=>dispatch({type:"LIGHT"})}>
           </div>
          <div className="colorOption"
           onClick={()=>dispatch({type:"DARK"})}>
           </div>
        </div>
    </div>
  )
}

export default Sidebar
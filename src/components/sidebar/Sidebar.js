import Userbadge from '../Userbadge/Userbadge';
import './Sidebar.scss';
function Sidebar() {
   return(
    <div className="sidebar-container">
        <div className="sidebar-logo center">
            <div className="title">
                Interviews
            </div> 
        </div>

        <div className="username-container vertical-center">
            <Userbadge username="Akash Bhandwalkar"></Userbadge>
        </div>
    </div>) 
}

export default Sidebar;
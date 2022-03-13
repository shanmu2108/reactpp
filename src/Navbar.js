import main from './main-logo.png'
import teams from './teams.png'
import notification from './notification.png'
import setting from './setting-normal.png'
import logout from './logout-normal.png'
import { Link } from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover'
import { NavLink } from 'react-router-dom'





const Navbar = () => {
    return (
        <div className='nav'>



            <div className='container'>
                <div className='nav-im'>
                    <img src={main} alt="main"  id='ime' width={60} />
                </div>
                <div className='widgets'>
                    <ul>
                        <NavLink className={(isActive)=>
                        (isActive ? "active":"act")} to="/allUsers" id="notlink2" className='tes'>
                            <div id='try'>
                                <img src={teams} alt='team' width={25} />
                            </div>
                            <div id='tryy'>
                                AllUsers
                            </div>
                        </NavLink>

                        <NavLink className={(isActive)=>
                         (isActive ? "active":"act")} to ="/notification" id='notlink'  className='tes' onClick={() => hover}>

                            <div id='try'>
                                <img src={notification} alt='team' width={25} />
                            </div>
                            <div id='tryy'>
                                notification

                    
                            </div>
                        </NavLink>
                        <li className='tes'>
                            <div id='try'>
                                <img src={setting} alt='team' width={25} />
                            </div>
                            <div id='tryy'>
                                setting
                            </div>
                        </li>
                        <Link to="/Login"   id="notlink1" className='tes'>
                            <div id='try'>
                                <img src={logout} alt='team' width={25} />
                            </div>
                            <div id='tryy'>
                                Logout
                            </div>
                        </Link>

                    </ul>
                </div>
            </div>
          
        </div>

    );
}

export default Navbar;
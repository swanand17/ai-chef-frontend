import './header.scss';
import { useNavigate } from 'react-router-dom';
import chefLogo from '../../assets/image.png'
import { NavLink } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();


    return (
        <header>
            <div className="header-content">
                {/* <img src={chefLogo} alt="Chef Logo" className="logo" /> */}
                <h2 className='pointer' onClick={() => navigate('/')}>
                    <i>AI Chef</i>
                </h2>

                <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="/upcoming-features"  className={({ isActive }) => isActive ? "active" : ""}>Upcoming Features</NavLink>
                </nav>
            </div>
        </header>    
    )
} 
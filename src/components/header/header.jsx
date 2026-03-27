import './header.scss';
import chefLogo from '../../assets/image.png'

export default function Header() {
    return (
        <header>
            <div className="logo-name">
                {/* <img src={chefLogo} alt="Chef Logo" className="logo" /> */}
                <h1><i>AI Chef</i></h1>
            </div>
        </header>    
    )
} 
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsm-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/leonardoamaral92">
                        <div className="dsm-contact-container">
                            <GithubIcon />
                            <p className="dsm-contact-link">/leonardoamaral92</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
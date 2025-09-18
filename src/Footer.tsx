import './styles/Footer.css';
import fb from './img/facebook.png';
import gh from './img/github.png';
import li from './img/linkedin.png';

const Footer = ({lang}: {lang: string}) => {
    return (
        <footer className="box">
            <div className="social-media">
                <span>
                    {lang === 'fr' && "Retrouvez-moi sur les réseaux :"}
                    {lang === 'en' && "Find me on social media:"}
                    {lang === 'nb' && "Finn meg på sosiale medier:"}
                </span>
                <a href="https://www.facebook.com/m.dutfoy.prof" target="_blank"><img src={fb} alt="Logo Facebook" /></a>
                <a href="https://github.com/MickaelDutfoy" target="_blank"><img src={gh} alt="Logo GitHub" /></a>
                <a href="https://www.linkedin.com/in/mickaeldutfoy" target="_blank"><img src={li} alt="Logo LinkedIn" /></a>
            </div>
            <p className="notes">
                {lang === 'fr' && "Ce CV a été créé avec React. "}
                {lang === 'en' && "This CV was made with React. "}
                {lang === 'nb' && "Denne CV-en var laget med React. "}
                 &copy; 2025 Mickaël Dutfoy
            </p>
        </footer>
    )
}

export default Footer;
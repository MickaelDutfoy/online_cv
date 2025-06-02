import './styles/Header.css';
import profile from './img/profile.jpg';
import Language from './Language';

const Header = ({lang, setLang}: {lang:string; setLang: (lang: string) => void}) => {
    return (
        <header>
            <img className='profile' src={profile} alt="Photo Mickaël Dutfoy" />
            <h1 className='title name'>Mickaël Dutfoy</h1>
            <h2 className='title desc'>
                {lang === 'fr' && "Développeur TypeScript (React/Express) et Professeur de mathématiques"}
                {lang === 'en' && "TypeScript Developer (React/Express) and Math Teacher"}
                {lang === 'no' && "TypeScript-utvikler (React/Express) og matematikklærer"}
            </h2>
            <div className='box short'>
                {lang === 'fr' && "Développeur en formation, je recherche actuellement un stage afin de mettre en œuvre les connaissances acquises tout en continuant à apprendre auprès de professionnels du secteur. J'ai de réelles compétences en front-end (HTML/CSS/React), de bonnes bases en back-end (SQL/Express), et j'explore Rust à titre personnel par passion technique et curiosité professionnelle."}
                {lang === 'en' && "Currently training as a web developer, I’m actively seeking an internship to apply the skills I’ve acquired while continuing to learn from professionals in the field. I have solid front-end skills (HTML/CSS/React), a good foundation in back-end development (SQL/Express), and I explore Rust on my own — driven by technical passion and professional curiosity."}
                {lang === 'no' && "Denne delen skal legges snart."}
            </div>
            <Language lang={lang} setLang={setLang}/>
        </header>
    )
}

export default Header;
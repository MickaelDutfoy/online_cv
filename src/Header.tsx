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
                {lang === 'fr' && "Développeur en formation, je recherche actuellement un stage en entreprise afin de mettre en œuvre les connaissances acquises tout en continuant à apprendre auprès de professionnels du secteur. Je maîtrise le front-end (HTML/CSS et React) et j'ai des bases en back-end (SQL/Express). J'explore Rust à titre personnel pour élargir mes compétences."}
                {lang === 'en' && "Currently training as a developer, I’m looking for an internship to apply what I’ve learned and continue improving alongside experienced professionals. I’m confident in front-end development (HTML/CSS and React) and have basic knowledge in back-end (SQL/Express). I’m also exploring Rust on my own to broaden my skill set."}
                {lang === 'no' && "Denne delen skal legges snart."}
            </div>
            <Language lang={lang} setLang={setLang}/>
        </header>
    )
}

export default Header;
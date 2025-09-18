import './styles/Header.css';
import profile from './img/profile.jpg';
import Language from './Language';

const Header = ({lang, setLang}: {lang:string; setLang: (lang: string) => void}) => {
    return (
        <header>
            <img className='profile' src={profile} alt="Photo Mickaël Dutfoy" />
            <h1 className='title name'>Mickaël Dutfoy</h1>
            <h2 className='title desc'>
                {lang === 'fr' && "Développeur TypeScript (Next.js) et Professeur de mathématiques"}
                {lang === 'en' && "TypeScript Developer (Next.js) and Math Teacher"}
                {lang === 'nb' && "TypeScript-utvikler (Next.js) og matematikklærer"}
            </h2>
            <div className='box short'>
                {lang === 'fr' && "Développeur stagiaire, je suis actuellement dans ma première recherche d’emploi. Fort de douze années d'expérience comme professeur de mathématiques, j'ai gardé une nature rigoureuse et persévérante. Aujourd'hui, mon choix technique s'est porté sur Next.js pour sa vision d’ensemble, décloisonnée et moderne. Par curiosité, j’explore aussi Rust pour élargir ma culture technologique."}
                {lang === 'en' && "Currently working as a trainee developer, I am preparing for my first job search. With twelve years of experience as a mathematics teacher, I have kept a rigorous and persistent mindset. Today, I have chosen Next.js for its comprehensive, modern, and uncloistered approach. Out of curiosity, I also explore Rust to broaden my technological horizon."}
                {lang === 'nb' && "For tiden jobber jeg som utviklerpraktikant og forbereder meg på mitt første jobbsøk. Med tolv års erfaring som matematikklærer har jeg beholdt en natur preget av nøyaktighet og utholdenhet. I dag har jeg valgt Next.js for dets helhetlige, moderne og åpne tilnærming. Av nysgjerrighet utforsker jeg også Rust for å utvide mitt teknologiske perspektiv."}
            </div>
            <Language lang={lang} setLang={setLang}/>
        </header>
    )
}

export default Header;
import "./styles/Header.css";
import profile from "./img/profile.jpg";
import Language from "./Language";

const Header = ({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (lang: string) => void;
}) => {
  return (
    <header>
      <img className="profile" src={profile} alt="Photo Mickaël Dutfoy" />
      <h1 className="title name">Mickaël Dutfoy</h1>
      <h2 className="title desc">
        {lang === "fr" && "Développeur TypeScript / Next.js"}
        {lang === "en" && "TypeScript / Next.js Developer"}
        {lang === "nb" && "TypeScript / Next.js Utvikler"}
      </h2>
      <div className="box short">
        <p>
          {lang === "fr" &&
            "Développeur full-stack, je recherche actuellement mon premier poste après un stage d’immersion en entreprise. Fort de douze années d'expérience comme professeur de mathématiques, j'ai gardé une nature rigoureuse et persévérante. Aujourd'hui, mon choix technique s'est porté sur Next.js pour sa vision d’ensemble, décloisonnée et moderne. Par curiosité, j’explore aussi Rust pour élargir ma culture technologique."}
        </p>
        <p>
          {lang === "en" &&
            "Full-stack developer, I'm currently looking for my first position following a hands-on internship experience. With twelve years of experience as a mathematics teacher, I have kept a rigorous and persistent mindset. Today, I have chosen Next.js for its comprehensive, modern, and uncloistered approach. Out of curiosity, I also explore Rust to broaden my technological horizon."}
        </p>
        <p>
          {lang === "nb" &&
            "Som fullstack-utvikler søker jeg min første jobb etter et praksisopphold i en bedrift. Med tolv års erfaring som matematikklærer har jeg beholdt et fokus preget av nøyaktighet og utholdenhet. I dag har jeg valgt Next.js for dets helhetlige, moderne og åpne tilnærming. Av nysgjerrighet utforsker jeg også Rust for å utvide mitt teknologiske perspektiv."}
        </p>
      </div>
      <Language lang={lang} setLang={setLang} />
    </header>
  );
};

export default Header;

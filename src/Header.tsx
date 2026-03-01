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
            "Développeur TypeScript / Next.js, je recherche un premier poste après 2 mois d’expérience en entreprise et 12 années d’enseignement des mathématiques. Je développe et maintiens Aster, une application Next.js en production pour les associations de protection animale."}
        </p>
        <p>
          {lang === "en" &&
            "TypeScript / Next.js developer, I am seeking my first full-time position after 2 months of experience in a company and 12 years as a mathematics teacher. I develop and maintain Aster, a Next.js application in production for animal welfare organizations."}
        </p>
        <p>
          {lang === "nb" &&
            "TypeScript / Next.js-utvikler, jeg søker min første faste stilling etter 2 måneders erfaring fra arbeidslivet og 12 års erfaring som matematikklærer. Jeg utvikler og vedlikeholder Aster, en Next.js-applikasjon i produksjon for dyrevernorganisasjoner."}
        </p>
      </div>
      <Language lang={lang} setLang={setLang} />
    </header>
  );
};

export default Header;

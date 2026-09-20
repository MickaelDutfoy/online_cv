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
        {lang === "fr" &&
          "Développeur fullstack et professeur de mathématiques"}
        {lang === "en" &&
          "Full-stack developer and mathematics teacher"}
        {lang === "nb" &&
          "Fullstackutvikler og matematikklærer"}
      </h2>

      <div className="box short">
        <p>
          {lang === "fr" &&
            "Les mathématiques m’ont appris à résoudre des problèmes, l’enseignement à rendre les choses complexes compréhensibles pour les autres, et le développement à construire de vrais produits. Aujourd’hui, je mets tout cela à profit, que ce soit avec des élèves ou des utilisateurs."}

          {lang === "en" &&
            "Mathematics taught me to solve problems, teaching to make complex things understandable to others, and software development to build real products. Today I put all of that to use, whether working with students or users."}

          {lang === "nb" &&
            "Matematikken har lært meg å løse problemer, undervisningen å gjøre komplekse ting forståelige for andre, og utviklerarbeidet å bygge ekte produkter. I dag bruker jeg alt dette, enten med elever eller brukere."}
        </p>
      </div>

      <Language lang={lang} setLang={setLang} />
    </header>
  );
};

export default Header;
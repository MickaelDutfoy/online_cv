import "./styles/Aside.css";

const Aside = ({lang, title}: {lang: string; title: string}) => {

    const generateContent = (lang: string, title: string): {header: string, content: string[]} => {
        let header: string = "";
        let content: string[] = [];
        if (lang === 'fr') {
            if (title === 'contact') {
                header = 'Coordonnées';
            } else if (title === 'skills') {
                header = 'Compétences';
                content = ['Français langue maternelle', 'Anglais certifié C1', 'Norvégien B1', 'TypeScript (Next.js/React) et Prisma', 'Git et Docker', 'Rust (débutant)', 'Mathématiques universitaires'];
            } else if (title === 'hobbies') {
                header = 'Loisirs et passions';
                content = ['Activités de montagne (trail, VTT, ski de randonnée)', 'Jeux (vidéos, de société, de cartes à collectionner)', 'Engagement dans la protection animale'];
            } else if (title === 'remarks') {
                header = 'Remarques';
                content = ['Utilisateur quotidien de Linux (Ubuntu)', 'Handicap visuel (uniquement à longue distance)', "Bénéficiaire de l'obligation d'emploi (RQTH)"];
            }
        } else if (lang === 'en') {
            if (title === 'contact') {
                header = 'Contact information';
            } else if (title === 'skills') {
                header = 'Skills';
                content = ['Native French speaker', 'English certified C1', 'TypeScript (Next.js/React) and Prisma', 'Git and Docker', 'Rust (beginner)', 'University-level mathematics'];
            } else if (title === 'hobbies') {
                header = 'Hobbies and passions';
                content = ['Mountain activities (trail running, mountain biking, ski touring)', 'Games (video games, board games, trading card games)', 'Commitment to animal protection'];
            } else if (title === 'remarks') {
                header = 'Remarks';
                content = ['Daily Linux user (Ubuntu)', 'Visual impairment (only at long distance)'];
            }
        } else if (lang === 'nb') {
            if (title === 'contact') {
                header = 'Kontakt informasjon';
            } else if (title === 'skills') {
                header = 'Ferdigheter';
                content = ['Fransk morsmål', 'Engelsk C1-sertifisert', 'Norsk B1', 'TypeScript (Next.js/React) og Prisma', 'Git og Docker', 'Rust (nybegynner)', 'Universitetsnivå matematikk'];
            } else if (title === 'hobbies') {
                header = 'Hobbyer og lidenskaper';
                content = ['Fjellaktiviteter (løping, terrengsykling, tur på ski)', 'Spill (videospill, brettspill, samlekortspill)', 'Engasjement for dyrevern'];
            } else if (title === 'remarks') {
                header = 'Merknader';
                content = ['Daglig Linux-bruker (Ubuntu)', 'Synshemning (bare på lang avstand)'];
            }
        }
        return {header, content};
    }

    return (
      <aside className={title}>
        <h3 className="title">{generateContent(lang, title).header}</h3>
        {title === 'contact' ?
        <address>
            1 Allée de la Selve<br/>
            05600 Guillestre<br/>
            France<br/>
            <a href="tel:+33682506341">(+33)06.82.50.63.41</a><br/>
            <a href="mailto:m.dutfoy@gmail.com" target="_blank">m.dutfoy@gmail.com</a>
        </address> : <ul className="aside-list">{generateContent(lang, title).content.map(item => <li key={item}>{item}</li>)}</ul>}
      </aside>
    );
  };
  
  export default Aside;
  
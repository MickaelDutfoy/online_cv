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
                content = ['Français langue maternelle', 'Anglais certifié C1', 'Norvégien A2/B1', 'TypeScript (React/Express) + MySQL intermédiaire', 'Rust débutant', 'Bases MongoDB', 'Mathématiques universitaires'];
            } else if (title === 'hobbies') {
                header = 'Loisirs et passions';
                content = ['Activités de montagne (trail, VTT, ski de randonnée)', 'Jeux (vidéos, de société, de cartes à collectionner)', 'Engagement dans la protection animale'];
            } else if (title === 'remarks') {
                header = 'Remarques';
                content = ['Utilisateur quotidien de Linux (Ubuntu)', "Exploration d'outils tels que Docker et Git", 'Handicap visuel (uniquement à longue distance)', "Bénéficiaire de l'obligation d'emploi (RQTH)"];
            }
        } else if (lang === 'en') {
            if (title === 'contact') {
                header = 'Contact information';
            } else if (title === 'skills') {
                header = 'Skills';
                content = ['Native French speaker', 'English certified C1', 'Norwegian A2/B1', 'TypeScript (React/Express) + MySQL intermediate', 'Rust beginner', 'MongoDB basics', 'University-level mathematics'];
            } else if (title === 'hobbies') {
                header = 'Hobbies and passions';
                content = ['Mountain activities (trail running, mountain biking, ski touring)', 'Games (video games, board games, trading card games)', 'Commitment to animal protection'];
            } else if (title === 'remarks') {
                header = 'Remarks';
                content = ['Daily Linux user (Ubuntu)', 'Exploring tools like Docker and Git', 'Visual impairment (only at long distance)'];
            }
        } else if (lang === 'no') {
            if (title === 'contact') {
                header = 'Kontakt informasjon';
            } else if (title === 'skills') {
                header = 'Ferdigheter';
                content = ['Fransk morsmål', 'Engelsk C1-sertifisert', 'Norsk A2/B1', 'TypeScript (React/Express) + MySQL middels nivå', 'Rust nybegynner', 'MongoDB grunnleggende', 'Universitetsnivå matematikk'];
            } else if (title === 'hobbies') {
                header = 'Hobbyer og lidenskaper';
                content = ['Fjellaktiviteter (løping, terrengsykling, tur på ski)', 'Spill (videospill, brettspill, samlekortspill)', 'Engasjement for dyrevern'];
            } else if (title === 'remarks') {
                header = 'Merknader';
                content = ['Daglig Linux-bruker (Ubuntu)', 'Utforsker verktøy som Docker og Git', 'Synshemning (bare på lang avstand)'];
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
  
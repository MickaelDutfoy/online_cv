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
                content = ['Français langue maternelle', 'Norvégien très bon niveau', 'Anglais courant', 'TypeScript, Next.js et React', 'Prisma et PostgreSQL', 'SCSS, Git et Docker', 'Rust (bases)', 'C#/.NET (bases)'];
            } else if (title === 'hobbies') {
                header = 'Loisirs';
                content = ['Activités de montagne', 'Jeux, protection animale et apprentissage des langues', 'Bénévole pour «Hjelp mæ å hjelpe» et «Dyrebeskyttelsen Sør-Trøndelag» (Trondheim)'];
            } else if (title === 'remarks') {
                header = 'Références';
            }
        } else if (lang === 'en') {
            if (title === 'contact') {
                header = 'Contact information';
            } else if (title === 'skills') {
                header = 'Skills';
                content = ['Native French speaker', 'Very good Norwegian', 'Fluent English', 'TypeScript, Next.js and React', 'Prisma and PostgreSQL', 'SCSS, Git and Docker', 'Rust (basics)', 'C#/.NET (basics)'];
            } else if (title === 'hobbies') {
                header = 'Hobbies';
                content = ['Mountain activities', 'Games, animal welfare and language learning', 'Volunteer with «Hjelp mæ å hjelpe» and «Dyrebeskyttelsen Sør-Trøndelag» (Trondheim)'];
            } else if (title === 'remarks') {
                header = 'References';
            }
        } else if (lang === 'nb') {
            if (title === 'contact') {
                header = 'Kontakt';
            } else if (title === 'skills') {
                header = 'Ferdigheter';
                content = ['Fransk morsmål', 'Norsk meget god', 'Engelsk flytende', 'TypeScript, Next.js og React', 'Prisma og PostgreSQL', 'SCSS, Git og Docker', 'Rust (basics)', 'C#/.NET (basics)'];
            } else if (title === 'hobbies') {
                header = 'Hobbyer';
                content = ['Fjellaktiviteter', 'Spill, dyrevern og språklæring', 'Frivillig i «Hjelp mæ å hjelpe» og «Dyrebeskyttelsen Sør-Trøndelag» (Trondheim)'];
            } else if (title === 'remarks') {
                header = 'Referanser';
            }
        }
        return {header, content};
    }

    return (
      <aside className={title}>
        <h3 className="title">{generateContent(lang, title).header}</h3>
        {title === 'contact' ?
        <address>
            Steinanvegen 44<br/>
            7049 Trondheim<br/>
            {lang === 'fr' && "Norvège"}
            {lang === 'en' && "Norway"}
            {lang === 'nb' && "Norge"}
            <br/>
            <a className="aside-link" href="tel:+4748404203">+47 484 04 203</a><br/>
            <a className="aside-link" href="mailto:m.dutfoy@gmail.com" target="_blank">m.dutfoy@gmail.com</a>
        </address> : title === 'remarks' ?
        <ul className="aside-list">
            <li>
                Tom Gueneau – CTO, Marcel SAS –<br/>
                <a className="aside-link" href="mailto:tom@marcel.family">tom@marcel.family</a>
            </li>
            <li>
                Marthe Øyangen – {lang === 'fr' ? 'Directrice' : lang === 'en' ? 'General manager' : 'Daglig leder'}, Hjelp mæ å hjelpe –<br/>
                <a className="aside-link" href="tel:+4741631406">+47 416 31 406</a>
            </li>
        </ul> : <ul className="aside-list">{generateContent(lang, title).content.map(item => <li key={item}>{item}</li>)}</ul>}
      </aside>
    );
  };
  
  export default Aside;
  
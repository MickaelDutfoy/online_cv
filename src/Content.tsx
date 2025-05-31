import './styles/Content.css';
import hautsChatlpins from './img/hauts_chatlpins.png';
import worldroots from './img/worldroots.jpg';
import TabBar from './TabBar';
import { useState, type JSX } from 'react';

const Content = ({lang}: {lang:string}) => {
    const [tab, setTab]: [number, (tab: number) => void] = useState(1);

    const generateContent = (lang: string, tab: number): JSX.Element => {
        if (lang === 'fr' && tab === 1) {
          return (
            <>
                <div className="block">
                    <h3 className="title date">2025</h3><h3 className="title item">Aspirant développeur</h3>
                    <p className="place">Projets personnels<br/>Guillestre (05)</p>
                    <p className="details">Réalisation de plusieurs projets en parallèle de ma formation, afin de consolider ma maîtrise du code. Pour les découvrir, rendez-vous dans la section Portfolio.</p>
                </div>
                <div className="block">
                    <h3 className="title date">2022 - 2024</h3><h3 className="title item">Professeur certifié de mathématiques</h3>
                    <p className="place">Collège Les Écrins<br/>Embrun (05)</p>
                    <p className="details">En charge de tous niveaux de la 5e à la 3e, deux fois professeur principal de 3e.<br/>Animation de diverses actions de soutien aux élèves en difficulté.</p>
                </div>
                <div className="block">
                    <h3 className="title date">2015 - 2022</h3><h3 className="title item">Professeur certifié de mathématiques</h3>
                    <p className="place">Collège du Verney<br/>Sallanches (74)</p>
                    <p className="details">En charge de tous niveaux de la 6e à la 3e, quatre fois professeur principal de 3e.<br/>Animation de diverses actions de soutien aux élèves en difficulté et d'un club de cartes à collectionner (Magic: The Gathering).</p>
                </div>
                <div className="block">
                    <h3 className="title date">2013 - 2015</h3><h3 className="title item">Professeur certifié de mathématiques</h3>
                    <p className="place">Collège Claude Tillier<br/>Cosne-sur-Loire (58)</p>
                    <p className="details">En charge de tous niveaux de la 6e à la 3e, professeur principal de 5e puis de 4e.</p>
                </div>
                <div className="block">
                    <h3 className="title date">2012 - 2013</h3><h3 className="title item">Professeur stagiaire de mathématiques</h3>
                    <p className="place">Collège du Verney<br/>Sallanches (74)</p>
                    <p className="details">En charge de deux classes de 6e et deux de 5e.</p>
                </div>
            </>
          );
        } else if (lang === 'fr' && tab === 2) {
          return (
            <>
                <div className="block">
                    <h3 className="title date">2024 - En cours</h3><h3 className="title item">Titre RNCP "Développeur Web et Web Mobile"</h3>
                    <p className="place">ESECAD (distanciel)<br/>Montrouge (92)</p>
                    <p className="details">Objectif d'obtention du titre début 2026. Technologies abordées : HTML/CSS, JavaScript, PHP, SQL, Python.</p>
                </div>
                <div className="block">
                    <h3 className="title date">2024 - En cours</h3><h3 className="title item">Auto-formation</h3>
                    <p className="place">En autonomie<br/>Guillestre (05)</p>
                    <p className="details">Obtention du <a href='/docs/Mimo.pdf' target="_blank" rel="noopener noreferrer">Certificat "Développeur full-stack"</a> sur <a href="https://mimo.org/" target="_blank">Mimo</a> (mai 2025). Technologies abordées : HTML/CSS, TypeScript, SQL, React, Express.<br/>Apprentissage de Rust à titre personnel avec <a href="https://doc.rust-lang.org/book/" target="_blank">The Rust Book</a> et <a href="https://github.com/rust-lang/rustlings" target="_blank">Rustlings</a>.<br/>Entraînement quotidien sur TypeScript et Rust avec <a href="https://exercism.org/profiles/MickaelDutfoy" target="_blank">Exercism</a>.</p>
                </div>
                <div className="block">
                    <h3 className="title date">2012</h3><h3 className="title item">CAPES de Mathématiques</h3>
                    <p className="place">Université Rennes 2<br/>Rennes (35)</p>
                    <p className="details">Classement : 222<sup>e</sup>.</p>
                </div>
                <div className="block">
                    <h3 className="title date">2012</h3><h3 className="title item">CLES 2 Anglais</h3>
                    <p className="place">Université Rennes 2<br/>Rennes (35)</p>
                    <p className="details">Certification de niveau B2.</p>
                </div>
                <div className="block">
                    <h3 className="title date">2010 - 2012</h3><h3 className="title item">Master MEEF Mathématiques</h3>
                    <p className="place">Université Rennes 2<br/>Rennes (35)</p>
                    <p className="details">Obtention du <a href='/docs/Master.pdf' target="_blank" rel="noopener noreferrer">Master "Métiers de l'Enseignement, de l'Education et de la Formation"</a> en mathématiques.</p>
                </div>
            </>
          );
        } else if (lang === 'fr' && tab === 3) {
            return (
                <div className='text-box'>
                    <p>Après avoir enseigné les mathématiques pendant douze ans, mission que j'ai toujours eue à coeur, j'ai fait le choix d'un vrai virage professionnel avec une rupture conventionnelle et une reconversion dans le monde du développement. J'aime apprendre, évoluer, sortir de ma zone de confort : ce changement de direction me satisfait donc pleinement.</p>
                    <p>Mon expérience professionnelle m'a en outre laissé des <em>soft skills</em> précieuses : pédagogie, patience, organisation, communication... De nature persévérante, l'apprentissage du code est un réel plaisir, d'autant plus que j'y retrouve ce que j'ai toujours aimé dans les mathématiques : la rigueur, la logique pure, l'élégance d'une solution bien construite. En outre, l'enseignement m'a appris à être à la fois autonome et capable de travailler en équipe : des atouts précieux dans un monde où la collaboration est clé, et où l'auto-suffisance est d'or.</p>
                    <p>J'ai le goût de l'effort : que ce soit dans les progrès en trail, en VTT, en norvégien, en TypeScript ou en Rust, j'aime aller au fond des choses et me surpasser en permanence. Je ne me contente pas des bases : j'approfondis, je déconstruis les notions, je fais l'effort de comprendre plutôt que d'apprendre — philosophie que j'ai d'ailleurs toujours eu à coeur de transmettre à mes élèves. À ce titre, je préfère autant que possible concevoir un code <em>vanilla</em>, plus clair et explicite, plutôt qu'empiler bibliothèques et frameworks sur un projet n'en ayant pas vraiment besoin. Ce souci de clarté se retrouve dans tous les outils que j'aime utiliser ou concevoir : le minimalisme, la sobriété et la fluidité sont des piliers pour moi.</p>
                    <p>Je suis quelqu'un qui avance sans prétention mais avec exigence : de l'exigence envers moi-même, envers le code que je construis, envers l'impact que je veux avoir. Mon ambition ? Construire des systèmes élégants, performants et discrets, au service de causes qui m'animent, telles que l'environnement, l'éducation ou la santé.</p>
                </div>
            )
        } else if (lang === 'fr' && tab === 4) {
            return (
                <>
                    <div className='portfolio-item'>
                        <a href="https://www.leshautschatlpins.fr/" target='_blank'><img src={hautsChatlpins} alt="Screenshot Les Hauts Chat'lpins" /></a>
                        <div className='portfolio-desc'>
                            <h3>Les Hauts Chat'lpins</h3>
                            <div>
                                <p>Réalisation d'un site Web simple en HTML/CSS avec quelques fonctions JavaScript (pop-ups on click, formulaire de contact dynamique). Ce projet a été pour moi l'occasion de mettre en pratique des connaissances de base à la fois en termes de code, de design, d'UX ou de SEO, le tout au service de la cause animale qui me tient à coeur.</p>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-item reverse'>
                    <div className='portfolio-desc'>
                        <h3>WorldRoots</h3>
                        <div>
                            <p>Réalisation d'un RPG old-school textuel, 100% JavaScript vanilla en navigateur. On y joue une équipe de trois personnages et le but est d'avancer le plus loin possible. Sorts élémentaires, capacités, potions, buffs/debuffs, et même invocations : j'ai eu à coeur de mettre les mécaniques classiques du genre. Je souhaite dans un avenir proche repenser le code en TypeScript avec de nombreuses optimisations et faire une UI en React, plus dynamique et fun.</p>
                        </div>
                    </div>
                    <a href="https://mickaeldutfoy.github.io/WorldRoots/" target='_blank'><img src={worldroots} alt="Screenshot WorldRoots" /></a>
                </div>
            </>
            )
        } else if (lang === 'en' && tab === 1) {
            return (
              <>
                <div className="block">
                  <h3 className="title date">2025</h3><h3 className="title item">Aspiring developer</h3>
                  <p className="place">Personal projects<br />Guillestre (France)</p>
                  <p className="details">
                    Working on several projects alongside my training to strengthen my coding skills.  
                    Check out the Portfolio section to learn more.
                  </p>
                </div>
                <div className="block">
                  <h3 className="title date">2022 - 2024</h3><h3 className="title item">Certified mathematics teacher</h3>
                  <p className="place">Les Écrins Secondary School<br />Embrun (France)</p>
                  <p className="details">
                    Taught pupils aged 12 to 15 (equivalent to grades 7–9).  
                    Served twice as homeroom teacher for 9th grade.  
                    Led various support initiatives to struggling pupils.
                  </p>
                </div>
                <div className="block">
                  <h3 className="title date">2015 - 2022</h3><h3 className="title item">Certified mathematics teacher</h3>
                  <p className="place">Le Verney Secondary School<br />Sallanches (France)</p>
                  <p className="details">
                    Taught pupils aged 11 to 15 (grades 6–9).  
                    Served four times as homeroom teacher for 9th grade.  
                    Provided support to struggling pupils and ran a trading card game club (Magic: The Gathering).
                  </p>
                </div>
                <div className="block">
                  <h3 className="title date">2013 - 2015</h3><h3 className="title item">Certified mathematics teacher</h3>
                  <p className="place">Claude Tillier Secondary School<br />Cosne-sur-Loire (France)</p>
                  <p className="details">
                    Taught pupils aged 11 to 15.  
                    Served as homeroom teacher for 7th and 8th grade classes.
                  </p>
                </div>
                <div className="block">
                  <h3 className="title date">2012 - 2013</h3><h3 className="title item">Trainee mathematics teacher</h3>
                  <p className="place">Le Verney Secondary School<br />Sallanches (France)</p>
                  <p className="details">
                    Taught two sections of 6th grade and two of 7th grade (pupils aged 11–12).
                  </p>
                </div>
              </>
            );
        } else if (lang === 'en' && tab === 2) {
            return (
              <>
                <div className="block">
                  <h3 className="title date">2024 - Ongoing</h3><h3 className="title item">RNCP Certificate "Web and Mobile Web Developer"</h3>
                  <p className="place">ESECAD (online)<br />Montrouge (France)</p>
                  <p className="details">Target graduation: early 2026. Technologies covered: HTML/CSS, JavaScript, PHP, SQL, Python.</p>
                </div>
                <div className="block">
                  <h3 className="title date">2024 - Ongoing</h3><h3 className="title item">Self-learning</h3>
                  <p className="place">Self-paced<br />Guillestre (France)</p>
                  <p className="details">
                    Earned the <a href='/docs/Mimo.pdf' target="_blank" rel="noopener noreferrer">"Full-stack Developer" certificate</a> from <a href="https://mimo.org/" target="_blank">Mimo</a> (May 2025).
                    Technologies covered: HTML/CSS, TypeScript, SQL, React, Express.<br />
                    Learning Rust independently using <a href="https://doc.rust-lang.org/book/" target="_blank">The Rust Book</a> and <a href="https://github.com/rust-lang/rustlings" target="_blank">Rustlings</a>.<br />
                    Daily practice in TypeScript and Rust via <a href="https://exercism.org/profiles/MickaelDutfoy" target="_blank">Exercism</a>.
                  </p>
                </div>
                <div className="block">
                  <h3 className="title date">2012</h3><h3 className="title item">French Teaching Certificate in Mathematics (CAPES)</h3>
                  <p className="place">University of Rennes 2<br />Rennes (France)</p>
                  <p className="details">National ranking: 222<sup>nd</sup>.</p>
                </div>
                <div className="block">
                  <h3 className="title date">2012</h3><h3 className="title item">English CLES 2</h3>
                  <p className="place">University of Rennes 2<br />Rennes (France)</p>
                  <p className="details">Level B2 certification.</p>
                </div>
                <div className="block">
                  <h3 className="title date">2010 - 2012</h3><h3 className="title item">Master's Degree in Mathematics Education (MEEF)</h3>
                  <p className="place">University of Rennes 2<br />Rennes (France)</p>
                  <p className="details">Earned the <a href='/docs/Master.pdf' target="_blank" rel="noopener noreferrer">Master’s Degree in Teaching, Education, and Training</a> with a specialization in mathematics.</p>
                </div>
              </>
            );
        } else if (lang === 'en' && tab === 3) {
            return (
                <div className='text-box'>
                    <p>After teaching mathematics for twelve years — a mission I always cared deeply about — I made a bold career shift through a mutual agreement and a full reconversion into the world of software development. I love learning, evolving, stepping out of my comfort zone: this new direction truly fulfills me.</p>
                    <p>My previous career has equipped me with valuable soft skills: pedagogy, patience, organization, communication... Naturally persistent, I find real joy in learning to code — especially because it brings back what I’ve always loved in math: rigor, pure logic, and the elegance of a well-crafted solution. Teaching also taught me to be both autonomous and collaborative — two essential assets in a world where collaboration is key and self-sufficiency is golden.</p>
                    <p>I value effort: whether it's progressing in trail running, mountain biking, Norwegian, TypeScript or Rust, I enjoy going deep and pushing myself. I don’t settle for the basics — I explore, deconstruct, and strive to understand rather than memorize. It's the same philosophy I’ve always aimed to pass on to my students. In that spirit, I tend to favor writing clear and explicit vanilla code, rather than piling up libraries and frameworks that may blur simplicity and readability. This drive for clarity shows up in the tools I enjoy using or designing: minimalism, sobriety, and smoothness are key pillars for me.</p>
                    <p>I move forward without pretension, but with high standards — for myself, for the code I write, and for the impact I hope to have. My ambition? To build elegant, efficient, discreet systems in service of causes that matter to me, such as the environment, education, or public health.</p>
                </div>
            )
        } else if (lang === 'en' && tab === 4) {
            return (
              <>
                <div className='portfolio-item'>
                  <a href="https://www.leshautschatlpins.fr/" target='_blank'>
                    <img src={hautsChatlpins} alt="Screenshot Les Hauts Chat'lpins" />
                  </a>
                  <div className='portfolio-desc'>
                    <h3>Les Hauts Chat'lpins</h3>
                    <div>
                      <p>
                        A simple website built with HTML/CSS and a few JavaScript features (click-based popups, dynamic contact form).
                        This project was an opportunity to put into practice fundamental skills in coding, design, UX, and SEO —
                        all in support of an animal welfare cause I deeply care about.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='portfolio-item reverse'>
                  <div className='portfolio-desc'>
                    <h3>WorldRoots</h3>
                    <div>
                      <p>
                        A retro-style text-based RPG built entirely in vanilla JavaScript, playable directly in the browser.
                        You control a team of three characters and try to progress as far as possible.
                        Featuring elemental spells, abilities, potions, buffs/debuffs, and even summons, I aimed to include all the classic mechanics of the genre.
                        I plan to refactor the code in TypeScript, optimize its structure, and rebuild the UI in React to make it more dynamic and engaging.
                      </p>
                    </div>
                  </div>
                  <a href="https://mickaeldutfoy.github.io/WorldRoots/" target='_blank'>
                    <img src={worldroots} alt="Screenshot WorldRoots" />
                  </a>
                </div>
              </>
            );
        } else if (lang === 'no') {
            return <p>Denne delen skal legges snart.</p>
        } else {
            return <p>This section will be added soon.</p>
        }
      };

    return (
        <div className="content">
            <TabBar lang={lang} tab={tab} setTab={setTab} />
            <div className='box'>
                {generateContent(lang, tab)}
            </div>
        </div>
    )
}

export default Content;
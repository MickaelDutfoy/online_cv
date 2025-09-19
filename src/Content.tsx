import './styles/Content.css';
import hautsChatlpins from './img/hauts_chatlpins.png';
import worldroots from './img/worldroots.jpg';
import aster from './img/aster.png'
import TabBar from './TabBar';
import { useState, type JSX } from 'react';

const Content = ({ lang }: { lang: string }) => {
  const [tab, setTab]: [number, (tab: number) => void] = useState(1);

  const generateContent = (lang: string, tab: number): JSX.Element => {
    if (lang === 'fr' && tab === 1) { // Exp FR
      return (
        <>
          <div className="block">
            <h3 className="title date">09/2025 – En cours</h3><h3 className="title item">Développeur web stagiaire</h3>
            <p className="place">Marcel SAS<br />Mulhouse (68)</p>
            <p className="details">
              Participation au développement d'une application web visant à faciliter l'accompagnement des personnes atteintes de troubles cognitifs.<br />
              Stack : Next.js, TypeScript, Prisma, tRPC.<br />
              Liens : <a href="https://www.marcel.family/" target='_blank'>Site web</a>, <a href="https://github.com/Marcel-SAS/Marcel" target='_blank'>GitHub</a>.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">2025</h3><h3 className="title item">Aspirant développeur</h3>
            <p className="place">Projets personnels<br />Guillestre (05)</p>
            <p className="details">Réalisation de plusieurs projets en parallèle de ma formation, afin de consolider ma maîtrise du code. Pour les découvrir, rendez-vous dans la section Portfolio.</p>
          </div>
          <div className="block">
            <h3 className="title date">2012 – 2024</h3><h3 className="title item">Professeur certifié de mathématiques</h3>
            <p className="place">Éducation nationale<br />France</p>
            <p className="details">
              Douze années d’enseignement dans divers collèges (élèves de 11 à 15 ans).<br />
              Cours de mathématiques, suivi de classes comme professeur principal, accompagnement personnalisé d'élèves en difficulté, animation d'ateliers ludiques (jeux de société mathématiques).
            </p>
          </div>
        </>
      );
    } else if (lang === 'fr' && tab === 2) { // School FR
      return (
        <>
          <div className="block">
            <h3 className="title date">2024 – En cours</h3><h3 className="title item">Titre RNCP "Développeur Web et Web Mobile"</h3>
            <p className="place">ESECAD (distanciel)<br />Montrouge (92)</p>
            <p className="details">Objectif d'obtention du titre début 2026. Technologies abordées : HTML/CSS, JavaScript, PHP, SQL, Python.</p>
          </div>
          <div className="block">
            <h3 className="title date">2024 – En cours</h3><h3 className="title item">Auto-formation</h3>
            <p className="place">En autonomie<br />Guillestre (05)</p>
            <p className="details">Obtention du <a href='./docs/Mimo.pdf' target="_blank" rel="noopener noreferrer">Certificat "Développeur full-stack"</a> sur <a href="https://mimo.org/" target="_blank">Mimo</a> (mai 2025). Technologies abordées : HTML/CSS, TypeScript, SQL, React, Express.<br />Apprentissage de Rust à titre personnel avec <a href="https://doc.rust-lang.org/book/" target="_blank">The Rust Book</a> et <a href="https://github.com/rust-lang/rustlings" target="_blank">Rustlings</a>.<br />Entraînement quotidien sur TypeScript et Rust avec <a href="https://exercism.org/profiles/MickaelDutfoy" target="_blank">Exercism</a>.</p>
          </div>
          <div className="block">
            <h3 className="title date">2012</h3><h3 className="title item">CAPES de Mathématiques</h3>
            <p className="place">Université Rennes 2<br />Rennes (35)</p>
            <p className="details">Classement : 222<sup>e</sup>.</p>
          </div>
          <div className="block">
            <h3 className="title date">2010 – 2012</h3><h3 className="title item">Master MEEF Mathématiques</h3>
            <p className="place">Université Rennes 2<br />Rennes (35)</p>
            <p className="details">Obtention du <a href='./docs/Master.pdf' target="_blank" rel="noopener noreferrer">Master "Métiers de l'Enseignement, de l'Education et de la Formation"</a> en mathématiques.</p>
          </div>
        </>
      );
    } else if (lang === 'fr' && tab === 3) { // Bio FR
      return (
        <div className='text-box'>
          <p>Après avoir enseigné les mathématiques pendant douze ans, mission que j'ai toujours eue à coeur, j'ai choisi de donner un nouveau cap à ma vie professionnelle avec une reconversion dans le monde du développement. J'aime apprendre, évoluer, sortir de ma zone de confort : ce changement de direction me satisfait donc pleinement.</p>
          <p>Mon expérience professionnelle m'a laissé des <em>soft skills</em> précieuses : pédagogie, patience, organisation, communication... De nature persévérante, l'apprentissage du code est un réel plaisir, d'autant plus que j'y retrouve ce que j'ai toujours aimé dans les mathématiques : la rigueur, la logique pure, l'élégance d'une solution bien construite. En outre, l'enseignement m'a rendu à la fois autonome et capable de travailler en équipe : des atouts précieux dans un monde où la collaboration est clé, et où l'auto-suffisance est d'or.</p>
          <p>J'ai le goût de l'effort : que ce soit dans les progrès en trail, en VTT, en norvégien, en TypeScript ou en Rust, j'aime aller au fond des choses et me surpasser en permanence. Je ne me contente pas des bases : j'approfondis, je déconstruis les notions, je fais l'effort de comprendre plutôt que d'apprendre — philosophie que j'ai d'ailleurs toujours tenu à transmettre à mes élèves. À ce titre, je préfère développer en adaptant les outils au besoin et garder un code lisible et performant, plutôt qu'empiler bibliothèques et frameworks sans questionner leur pertinence. Ce souci de clarté se retrouve dans tous les outils que j'aime utiliser ou concevoir : le minimalisme, la sobriété et la fluidité sont des piliers pour moi.</p>
          <p>Je suis quelqu'un qui avance sans prétention mais avec exigence : de l'exigence envers moi-même, envers le code que j'écris, envers l'impact que je veux avoir. Mon ambition ? Élaborer des systèmes élégants, performants, discrets, et surtout porteurs de sens.</p>
        </div>
      )
    } else if (lang === 'fr' && tab === 4) { // Portfolio FR
      return (
        <>
          <div className="portfolio-item reverse">
            <div className="portfolio-desc">
              <h3>Aster</h3>
              <p>
                Application web mobile-first dédiée aux associations de protection animale, permettant de gérer les membres, les animaux et les familles d'accueil.
                À travers ce projet, j'ai pu toucher à ce à quoi j'aspire professionellement : une application web full-stack, avec gestion d'authentification, de données, de routes, d'UI, etc, le tout au service de la cause animale qui me tient à cœur.
                Ce projet, initialement écrit en React + Express + PostgreSQL, est en cours de reboot avec Next.js + Prisma. Il s'agit d'un outil concret déjà proposé à des associations et non d'une simple vitrine scolaire.
                Démo hébergée sur Render (démarrage lent, fonctionnalités limitées).
              </p>
            </div>
            <a href="https://aster-05km.onrender.com/" target="_blank"><img src={aster} alt="Screenshot Aster" /></a>
          </div>
          <div className='portfolio-item'>
            <a href="https://www.leshautschatlpins.fr/" target='_blank'><img src={hautsChatlpins} alt="Screenshot Les Hauts Chat'lpins" /></a>
            <div className='portfolio-desc'>
              <h3>Les Hauts Chat'lpins</h3>
              <div>
                <p>Réalisation d'un site Web simple en HTML/CSS avec quelques fonctions JavaScript (pop-ups on click, formulaire de contact dynamique).
                  Ce projet a été pour moi l'occasion de mettre en pratique des connaissances de base à la fois en termes de code, de design, d'UX ou de SEO, toujours au service de la cause animale qui me tient à cœur.</p>
              </div>
            </div>
          </div>
          <div className='portfolio-item reverse'>
            <div className='portfolio-desc'>
              <h3>WorldRoots</h3>
              <div>
                <p>Réalisation d'un RPG old-school textuel, 100% JavaScript vanilla en navigateur. On y joue une équipe de trois personnages et le but est d'avancer le plus loin possible.
                  Sorts élémentaires, capacités, potions, buffs/debuffs, et même invocations : j'ai eu à cœur de mettre les mécaniques classiques du genre. Je souhaite à l'avenir repenser le code en TypeScript avec de nombreuses optimisations et faire une UI en React, plus dynamique et fun.</p>
              </div>
            </div>
            <a href="https://mickaeldutfoy.github.io/WorldRoots/" target='_blank'><img src={worldroots} alt="Screenshot WorldRoots" /></a>
          </div>
        </>
      )
    } else if (lang === 'en' && tab === 1) { // Exp EN
      return (
        <>
          <div className="block">
            <h3 className="title date">09/2025 – Ongoing</h3><h3 className="title item">Web Developer Intern</h3>
            <p className="place">Marcel SAS<br />Mulhouse (France)</p>
            <p className="details">
              Contributing to the development of a web application designed to support people helping those with cognitive impairments.<br />
              Stack: Next.js, TypeScript, Prisma, tRPC.<br />
              Links: <a href="https://www.marcel.family/" target="_blank">Website</a>, <a href="https://github.com/Marcel-SAS/Marcel" target="_blank">GitHub</a>.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">2025</h3><h3 className="title item">Aspiring developer</h3>
            <p className="place">Personal projects<br />Guillestre (France)</p>
            <p className="details">
              Working on several projects alongside my training to strengthen my coding skills.
              Check out the Portfolio section to learn more.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">2012 – 2024</h3><h3 className="title item">Certified Mathematics Teacher</h3>
            <p className="place">French Ministry of Education<br />France</p>
            <p className="details">
              Twelve years of teaching in various middle schools (students aged 11 to 15).<br />
              Mathematics courses, head teacher for some classes, tailored support for struggling students, and facilitation of educational workshops (mathematics-based board games).
            </p>
          </div>
        </>
      );
    } else if (lang === 'en' && tab === 2) { // School EN
      return (
        <>
          <div className="block">
            <h3 className="title date">2024 – Ongoing</h3><h3 className="title item">Web and Mobile Web Developer Certificate</h3>
            <p className="place">ESECAD (online)<br />Montrouge (France)</p>
            <p className="details">Target graduation: early 2026. Technologies covered: HTML/CSS, JavaScript, PHP, SQL, Python.</p>
          </div>
          <div className="block">
            <h3 className="title date">2024 – Ongoing</h3><h3 className="title item">Self-learning</h3>
            <p className="place">Self-paced<br />Guillestre (France)</p>
            <p className="details">
              Earned the <a href='./docs/Mimo.pdf' target="_blank" rel="noopener noreferrer">"Full-stack Developer" certificate</a> from <a href="https://mimo.org/" target="_blank">Mimo</a> (May 2025).
              Technologies covered: HTML/CSS, TypeScript, SQL, React, Express.<br />
              Learning Rust independently using <a href="https://doc.rust-lang.org/book/" target="_blank">The Rust Book</a> and <a href="https://github.com/rust-lang/rustlings" target="_blank">Rustlings</a>.<br />
              Daily practice in TypeScript and Rust via <a href="https://exercism.org/profiles/MickaelDutfoy" target="_blank">Exercism</a>.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">2012</h3><h3 className="title item">National Teaching Certification in Mathematics (CAPES)</h3>
            <p className="place">University of Rennes 2<br />Rennes (France)</p>
            <p className="details">National ranking: 222<sup>nd</sup>.</p>
          </div>
          <div className="block">
            <h3 className="title date">2010 – 2012</h3><h3 className="title item">Master's Degree in Mathematics Education (MEEF)</h3>
            <p className="place">University of Rennes 2<br />Rennes (France)</p>
            <p className="details">Earned the <a href='./docs/Master.pdf' target="_blank" rel="noopener noreferrer">Master’s Degree in Teaching, Education, and Training</a> with a specialization in mathematics.</p>
          </div>
        </>
      );
    } else if (lang === 'en' && tab === 3) { // Bio EN
      return (
        <div className='text-box'>
          <p>After teaching mathematics for twelve years, a mission I always cared deeply about, I chose to give my career a new direction through a reconversion into software development. I love learning, evolving, and stepping out of my comfort zone: this change truly fulfills me.</p>
          <p>My professional experience has given me valuable soft skills: pedagogy, patience, organization, communication... Naturally persistent, I find real joy in coding, especially because it reconnects me with what I always loved in math: rigor, pure logic, and the elegance of a well-crafted solution. Teaching also taught me to be both autonomous and collaborative: two precious assets in a world where teamwork is key and self-sufficiency is golden.</p>
          <p>I value effort: whether it’s progressing in trail running, mountain biking, Norwegian, TypeScript, or Rust, I like to go deep and constantly push myself. I don’t settle for the basics: I explore, deconstruct, and strive to understand rather than just memorize — a philosophy I always aimed to pass on to my students. In that spirit, I prefer adapting tools to the actual needs and keep code clear and efficient, rather than piling up libraries and frameworks without questioning their relevance. This drive for clarity also shapes the tools I enjoy using or designing: minimalism, sobriety, and smoothness are my guiding principles.</p>
          <p>I move forward without pretension but with high standards: for myself, for the code I write, and for the impact I want to have. My ambition? To build elegant, efficient, discreet, and above all meaningful systems.</p>
        </div>

      )
    } else if (lang === 'en' && tab === 4) { // Portfolio EN
      return (
        <>
          <div className="portfolio-item reverse">
            <div className="portfolio-desc">
              <h3>Aster</h3>
              <p>
                Mobile-first web application for animal welfare organizations, allowing to manage members, animals, and foster families.
                With this project, I worked on what I truly aspire to professionally: a full-stack web app covering authentication, data management, routing, UI and so on, all in service of a cause I deeply care about.
                Originally built with React + Express + PostgreSQL, Aster is now being rebooted with Next.js + Prisma. It is a concrete tool already offered to some organizations, not just a school showcase.
                Demo hosted on Render (slow startup, limited features).
              </p>
            </div>
            <a href="https://aster-05km.onrender.com/" target="_blank"><img src={aster} alt="Screenshot Aster" /></a>
          </div>
          <div className='portfolio-item'>
            <a href="https://www.leshautschatlpins.fr/" target='_blank'>
              <img src={hautsChatlpins} alt="Screenshot Les Hauts Chat'lpins" />
            </a>
            <div className='portfolio-desc'>
              <h3>Les Hauts Chat'lpins</h3>
              <div>
                <p>
                  A simple website built with HTML/CSS and a few JavaScript features (click-based popups, dynamic contact form).
                  This project was an opportunity to put into practice fundamental skills in coding, design, UX, and SEO, all in support of an animal welfare cause I deeply care about.
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
    } else if (lang === 'nb' && tab === 1) { // Exp NO
      return (<>
        <div className="block">
          <h3 className="title date">09/2025 – Nå</h3><h3 className="title item">Utviklerpraktikant (web)</h3>
          <p className="place">Marcel SAS<br />Mulhouse (Frankrike)</p>
          <p className="details">
            Bidrar til utviklingen av en webapplikasjon laget for å støtte personer med kognitive utfordringer.<br />
            Stack: Next.js, TypeScript, Prisma, tRPC.<br />
            Lenker: <a href="https://www.marcel.family/" target="_blank">Nettside</a>, <a href="https://github.com/Marcel-SAS/Marcel" target="_blank">GitHub</a>.
          </p>
        </div>
        <div className="block">
          <h3 className="title date">2025</h3><h3 className="title item">Aspirerende utvikler</h3>
          <p className="place">Egne prosjekter<br />Guillestre (Frankrike)</p>
          <p className="details">
            Arbeidet med flere prosjekter parallelt med opplæringen for å styrke mine ferdigheter i koding.
            Se portefølje-delen for mer informasjon.
          </p>
        </div>
        <div className="block">
          <h3 className="title date">2012 – 2024</h3><h3 className="title item">Sertifisert matematikklærer</h3>
          <p className="place">Fransk utdanningsdepartement<br />Frankrike</p>
          <p className="details">
            Tolv år med undervisning i ulike ungdomsskoler (elever 11-15 år).<br />
            Matematikkundervisning, kontaktlærer for flere klasser, individuell oppfølging av elever med utfordringer, ledelse av læringsverksteder (matematiske brettspill).
          </p>
        </div>
      </>)
    } else if (lang === 'nb' && tab === 2) { // School NO
      return (<>
        <div className="block">
          <h3 className="title date">2024 – Nå</h3><h3 className="title item">Web- og Mobilutvikler Sertifikat</h3>
          <p className="place">ESECAD (nettbasert)<br />Montrouge (Frankrike)</p>
          <p className="details">Forventet fullføring: tidlig 2026. Teknologier dekket: HTML/CSS, JavaScript, PHP, SQL, Python.</p>
        </div>
        <div className="block">
          <h3 className="title date">2024 – Nå</h3><h3 className="title item">Selvstudium</h3>
          <p className="place">Egen læring<br />Guillestre (Frankrike)</p>
          <p className="details">
            Fullførte <a href='./docs/Mimo.pdf' target="_blank" rel="noopener noreferrer">«Full-stack Developer»-sertifikatet</a> fra <a href="https://mimo.org/" target="_blank">Mimo</a> (mai 2025).
            Teknologier: HTML/CSS, TypeScript, SQL, React, Express.<br />
            Lærer Rust selvstendig med <a href="https://doc.rust-lang.org/book/" target="_blank">The Rust Book</a> og <a href="https://github.com/rust-lang/rustlings" target="_blank">Rustlings</a>.<br />
            Daglige øvelser i TypeScript og Rust via <a href="https://exercism.org/profiles/MickaelDutfoy" target="_blank">Exercism</a>.
          </p>
        </div>
        <div className="block">
          <h3 className="title date">2012</h3><h3 className="title item">Nasjonal undervisningssertifisering i matematikk (CAPES)</h3>
          <p className="place">Université Rennes 2<br />Rennes (Frankrike)</p>
          <p className="details">Nasjonal rangering: 222.</p>
        </div>

        <div className="block">
          <h3 className="title date">2010 – 2012</h3><h3 className="title item">Master i matematikkdidaktikk (MEEF)</h3>
          <p className="place">Université Rennes 2<br />Rennes (Frankrike)</p>
          <p className="details">
            Fullførte <a href='./docs/Master.pdf' target="_blank" rel="noopener noreferrer">Mastergrad i undervisning, utdanning og opplæring</a> med spesialisering i matematikk.
          </p>
        </div>
      </>)
    } else if (lang === 'nb' && tab === 3) { // Bio NO
      return (<div className='text-box'>
        <p>Etter tolv år som matematikklærer, en oppgave jeg alltid har hatt nært til hjertet, valgte jeg å gi karrieren min en ny retning gjennom en overgang til programvareutvikling. Jeg liker å lære, utvikle meg og gå ut av komfortsonen min: dette skiftet gir meg derfor ekte tilfredshet.</p>
        <p>Min yrkeserfaring har gitt meg verdifulle <em>soft skills</em>: pedagogikk, tålmodighet, organisasjon, kommunikasjon. Som en naturlig utholdende person finner jeg stor glede i koding, spesielt fordi jeg gjenfinner det jeg alltid har elsket i matematikk: nøyaktighet, ren logikk og elegansen i en godt konstruert løsning. Undervisning har også lært meg å være både selvstendig og samarbeidsvillig: to viktige kvaliteter i en verden der samarbeid er nøkkelen og selvstendighet er gull verdt.</p>
        <p>Jeg setter pris på innsats: enten det gjelder framgang i terrengløp, på sykkel, i norsk, TypeScript eller Rust, liker jeg å gå i dybden og stadig utfordre meg selv. Jeg nøyer meg ikke med det grunnleggende: jeg utforsker, dekonstruerer og streber etter å forstå heller enn å pugge — en filosofi jeg alltid har ønsket å formidle til elevene mine. I samme ånd foretrekker jeg å tilpasse verktøy til behovet og holde koden tydelig og effektiv, heller enn å stable biblioteker og rammeverk uten å stille spørsmål ved deres relevans. Dette kravet om klarhet preger også verktøyene jeg liker å bruke eller utvikle: minimalisme, enkelhet og flyt er mine ledestjerner.</p>
        <p>Jeg går frem uten pretensjoner, men med høye standarder: for meg selv, for koden jeg skriver, og for virkningen jeg ønsker å ha. Min ambisjon? Å bygge elegante, effektive, diskrete og fremfor alt meningsfulle systemer.</p>
        <p><em>NB: Jeg lærer fortsatt norsk (B1). Denne teksten er oversatt med litt hjelp — se gjerne den engelske versjonen for presisjon.</em></p>
      </div>)
    } else if (lang === 'nb' && tab === 4) { // Portfolio NO
      return (<>
        <div className="portfolio-item reverse">
          <div className="portfolio-desc">
            <h3>Aster</h3>
            <p>
              Mobiltilpasset webapplikasjon for dyrevernorganisasjoner, som gjør det mulig å administrere medlemmer, dyr og fosterhjem.
              Med dette prosjektet har jeg arbeidet med det jeg virkelig ønsker profesjonelt: en fullstack webapp som dekker autentisering, databehandling, routing, UI osv. — alt i tjeneste for en sak jeg bryr meg dypt om.
              Opprinnelig bygget med React + Express + PostgreSQL, men nå under omarbeiding med Next.js + Prisma. Det er et konkret verktøy allerede tatt i bruk av noen organisasjoner, ikke bare et skoleprosjekt.
              Demo hostet på Render (treg oppstart, begrensede funksjoner).
            </p>
          </div>
          <a href="https://aster-05km.onrender.com/" target="_blank"><img src={aster} alt="Skjermbilde Aster" /></a>
        </div>
        <div className='portfolio-item'>
          <a href="https://www.leshautschatlpins.fr/" target='_blank'>
            <img src={hautsChatlpins} alt="Skjermbilde Les Hauts Chat'lpins" />
          </a>
          <div className='portfolio-desc'>
            <h3>Les Hauts Chat'lpins</h3>
            <div>
              <p>
                En enkel nettside bygget med HTML/CSS og noen få JavaScript-funksjoner (klikkbaserte popup-vinduer, dynamisk kontaktskjema).
                Dette prosjektet var en anledning til å bruke grunnleggende ferdigheter innen koding, design, UX og SEO, alt til støtte for en dyrevernsak jeg bryr meg dypt om.
              </p>
            </div>
          </div>
        </div>
        <div className='portfolio-item reverse'>
          <div className='portfolio-desc'>
            <h3>WorldRoots</h3>
            <div>
              <p>
                Et retro-inspirert tekstbasert rollespill bygget helt i ren JavaScript, spillbart direkte i nettleseren.
                Du styrer et team på tre karakterer og prøver å komme så langt som mulig.
                Med elementære trylleformler, ferdigheter, potions, buffs/debuffs og til og med summons, ønsket jeg å inkludere alle de klassiske mekanikkene i sjangeren.
                Jeg planlegger å refaktorere koden i TypeScript, optimalisere strukturen og bygge om UI-en i React for å gjøre den mer dynamisk og engasjerende.
              </p>
            </div>
          </div>
          <a href="https://mickaeldutfoy.github.io/WorldRoots/" target='_blank'>
            <img src={worldroots} alt="Skjermbilde WorldRoots" />
          </a>
        </div>
      </>)
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
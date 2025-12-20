import "./styles/Content.css";
import hautsChatlpins from "./img/hauts_chatlpins.png";
import worldroots from "./img/worldroots.jpg";
import aster from "./img/aster.png";
import TabBar from "./TabBar";
import { useState, type JSX } from "react";

const Content = ({ lang }: { lang: string }) => {
  const [tab, setTab]: [number, (tab: number) => void] = useState(1);

  const generateContent = (lang: string, tab: number): JSX.Element => {
    if (lang === "fr" && tab === 1) {
      // Exp FR
      return (
        <>
          <div className="block">
            <h3 className="title date">09/2025 – 10/2025</h3>
            <h3 className="title item">Développeur web stagiaire</h3>
            <p className="place">
              Marcel SAS
              <br />
              Mulhouse (68)
            </p>
            <p className="details">
              Participation au développement d'une application web visant à
              faciliter l'accompagnement des personnes atteintes de troubles
              cognitifs.
              <br />
              Stack : Next.js, TypeScript, Prisma, tRPC.
              <br />
              Liens :{" "}
              <a href="https://www.marcel.family/" target="_blank">
                Site web
              </a>
              ,{" "}
              <a href="https://github.com/Marcel-SAS/" target="_blank">
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">2025</h3>
            <h3 className="title item">Aspirant développeur</h3>
            <p className="place">
              Projets personnels
              <br />
              Guillestre (05)
            </p>
            <p className="details">
              Réalisation de plusieurs projets en parallèle de ma formation,
              afin de consolider ma maîtrise du code. Pour les découvrir,
              rendez-vous dans la section Portfolio.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2021 – 08/2025</h3>
            <h3 className="title item">
              Professeur particulier de mathématiques
            </h3>
            <p className="place">
              Auto-entrepreneur
              <br />
              France
            </p>
            <p className="details">
              Quatre ans sous le statut d'auto-entrepreneur agréé "service à la
              personne", pour effectuer des cours de mathématiques à domicile, à
              mon compte.
              <br />
              Lien :{" "}
              <a href="https://www.facebook.com/m.dutfoy.prof" target="_blank">
                Page Facebook
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2012 – 08/2024</h3>
            <h3 className="title item">Professeur certifié de mathématiques</h3>
            <p className="place">
              Éducation Nationale
              <br />
              France
            </p>
            <p className="details">
              Onze années en collège (élèves de 11 à 15 ans) et une en lycée
              (élèves de 16 à 18 ans).
              <br />
              Cours de mathématiques, suivi de classes comme professeur
              principal, accompagnement personnalisé d'élèves en difficulté,
              animation d'ateliers ludiques (jeux de société mathématiques).
            </p>
          </div>
        </>
      );
    } else if (lang === "fr" && tab === 2) {
      // School FR
      return (
        <>
          <div className="block">
            <h3 className="title date">10/2024 – En cours</h3>
            <h3 className="title item">
              Titre RNCP "Développeur Web et Web Mobile"
            </h3>
            <p className="place">
              ESECAD (distanciel)
              <br />
              Montrouge (92)
            </p>
            <p className="details">
              Terminée, en attente de passage de l'examen au premier trimestre 2026. Technologies abordées :
              HTML/CSS, JavaScript, PHP, SQL, Python.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">10/2024 – En cours</h3>
            <h3 className="title item">Auto-formation</h3>
            <p className="place">
              En autonomie
              <br />
              Guillestre (05)
            </p>
            <p className="details">
              Obtention du{" "}
              <a
                href="./docs/Mimo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certificat "Développeur full-stack"
              </a>{" "}
              sur{" "}
              <a href="https://mimo.org/" target="_blank">
                Mimo
              </a>{" "}
              (mai 2025). Technologies abordées : HTML/CSS, TypeScript, SQL,
              React, ExpressJS.
              <br />
              Apprentissage de Rust à titre personnel avec{" "}
              <a href="https://doc.rust-lang.org/book/" target="_blank">
                The Rust Book
              </a>{" "}
              et{" "}
              <a href="https://github.com/rust-lang/rustlings" target="_blank">
                Rustlings
              </a>
              .<br />
              Entraînement régulier sur TypeScript et Rust avec{" "}
              <a
                href="https://exercism.org/profiles/MickaelDutfoy"
                target="_blank"
              >
                Exercism
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">08/2012</h3>
            <h3 className="title item">CAPES de Mathématiques</h3>
            <p className="place">
              Université Rennes 2<br />
              Rennes (35)
            </p>
            <p className="details">
              Classement : 222<sup>e</sup>.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2010 – 08/2012</h3>
            <h3 className="title item">Master MEEF Mathématiques</h3>
            <p className="place">
              Université Rennes 2<br />
              Rennes (35)
            </p>
            <p className="details">
              Obtention du{" "}
              <a
                href="./docs/Master.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Master "Métiers de l'Enseignement, de l'Éducation et de la
                Formation"
              </a>{" "}
              en mathématiques.
            </p>
          </div>
        </>
      );
    } else if (lang === "fr" && tab === 3) {
      // Bio FR
      return (
        <div className="text-box">
          <p>
            Après avoir enseigné les mathématiques pendant douze ans, mission
            que j'ai toujours eue à coeur, j'ai choisi de donner un nouveau cap
            à ma vie professionnelle avec une reconversion dans le monde du
            développement. J'aime apprendre, évoluer, sortir de ma zone de
            confort : ce changement de direction me satisfait donc pleinement.
          </p>
          <p>
            Mon expérience professionnelle m'a laissé des <em>soft skills</em>{" "}
            précieuses : pédagogie, patience, organisation, communication... De
            nature persévérante, l'apprentissage du code est un réel plaisir,
            d'autant plus que j'y retrouve ce que j'ai toujours aimé dans les
            mathématiques : la rigueur, la logique pure, l'élégance d'une
            solution bien construite. En outre, l'enseignement m'a rendu à la
            fois autonome et capable de travailler en équipe : des atouts
            précieux dans un monde où la collaboration est clé, et où
            l'auto-suffisance est d'or.
          </p>
          <p>
            J'ai le goût de l'effort : que ce soit dans les progrès en trail, en
            VTT, en norvégien, en TypeScript ou en Rust, j'aime aller au fond
            des choses et me surpasser en permanence. Je ne me contente pas des
            bases : j'approfondis, je déconstruis les notions, je fais l'effort
            de comprendre plutôt que d'apprendre — philosophie que j'ai
            d'ailleurs toujours tenu à transmettre à mes élèves. À ce titre, je
            préfère développer en adaptant les outils au besoin et garder un
            code lisible et performant, plutôt qu'empiler bibliothèques et
            frameworks sans questionner leur pertinence. Ce souci de clarté se
            retrouve dans tous les outils que j'aime utiliser ou concevoir : le
            minimalisme, la sobriété et la fluidité sont des piliers pour moi.
          </p>
          <p>
            Je suis quelqu'un qui avance sans prétention mais avec exigence : de
            l'exigence envers moi-même, envers le code que j'écris, envers
            l'impact que je veux avoir. Mon ambition ? Élaborer des systèmes
            élégants, performants, discrets, et surtout porteurs de sens.
          </p>
        </div>
      );
    } else if (lang === "fr" && tab === 4) {
      // Portfolio FR
      return (
        <>
          <div className="portfolio-item reverse">
            <div className="portfolio-desc">
              <h3>Aster</h3>
              <p>
                Application web <u>en cours de développement</u> destinée aux
                associations de protection animale, Aster permet de gérer les
                membres, les animaux et les familles d'accueil. Conçu comme un
                outil réel et non un projet scolaire, il est déjà proposé à des
                associations partenaires. Entièrement développé en TypeScript
                avec Next.js et Prisma, Aster allie rigueur et flexibilité dans
                une architecture full-stack moderne (authentification, gestion
                de données, routes, UI). L'application est pensée mobile-first
                et déployée en PWA installable sur Android. Un clic sur la
                miniature ouvre la version de production hébergée sur Vercel
                (Compte de test : demo@aster.app / AsterDemo2026!).
              </p>
            </div>
            <a href="https://aster-pearl.vercel.app" target="_blank">
              <img src={aster} alt="Capture d’écran Aster" />
            </a>
          </div>

          <div className="portfolio-item">
            <a href="https://www.leshautschatlpins.fr/" target="_blank">
              <img src={hautsChatlpins} alt="Screenshot Les Hauts Chat'lpins" />
            </a>
            <div className="portfolio-desc">
              <h3>Les Hauts Chat'lpins</h3>
              <div>
                <p>
                  Réalisation d'un site Web simple en HTML/CSS avec quelques
                  fonctions JavaScript (pop-ups on click, formulaire de contact
                  dynamique). Ce projet a été pour moi l'occasion de mettre en
                  pratique des connaissances de base à la fois en termes de
                  code, de design, d'UX ou de SEO, toujours au service de la
                  cause animale qui me tient à cœur. Cliquez la vignette pour
                  accéder au site.
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-item reverse">
            <div className="portfolio-desc">
              <h3>WorldRoots</h3>
              <div>
                <p>
                  Réalisation d'un RPG old-school textuel, 100% JavaScript
                  vanilla en navigateur. On y joue une équipe de trois
                  personnages et le but est d'avancer le plus loin possible.
                  Sorts élémentaires, capacités, potions, buffs/debuffs, et même
                  invocations : j'ai eu à cœur de mettre les mécaniques
                  classiques du genre. Je souhaite à l'avenir repenser le code
                  en TypeScript avec de nombreuses optimisations et faire une UI
                  en React, plus dynamique et fun. Cliquez et combattez !
                </p>
              </div>
            </div>
            <a
              href="https://mickaeldutfoy.github.io/worldroots/"
              target="_blank"
            >
              <img src={worldroots} alt="Screenshot WorldRoots" />
            </a>
          </div>
        </>
      );
    } else if (lang === "en" && tab === 1) {
      // Exp EN
      return (
        <>
          <div className="block">
            <h3 className="title date">09/2025 – 10/2025</h3>
            <h3 className="title item">Web developer intern</h3>
            <p className="place">
              Marcel SAS
              <br />
              Mulhouse (France)
            </p>
            <p className="details">
              Contributing to the development of a web application designed to
              support people helping those with cognitive impairments.
              <br />
              Stack: Next.js, TypeScript, Prisma, tRPC.
              <br />
              Links:{" "}
              <a href="https://www.marcel.family/" target="_blank">
                Website
              </a>
              ,{" "}
              <a href="https://github.com/Marcel-SAS/" target="_blank">
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">2025</h3>
            <h3 className="title item">Aspiring developer</h3>
            <p className="place">
              Personal projects
              <br />
              Guillestre (France)
            </p>
            <p className="details">
              Working on several projects alongside my training to strengthen my
              coding skills. Check out the Portfolio section to learn more.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2021 – 08/2025</h3>
            <h3 className="title item">Private math tutor</h3>
            <p className="place">
              Self-employed
              <br />
              France
            </p>
            <p className="details">
              Four years as a self-employed, certified "personal-services
              provider", delivering in-home mathematics tutoring.
              <br />
              Link:{" "}
              <a href="https://www.facebook.com/m.dutfoy.prof" target="_blank">
                Facebook Page
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2012 – 08/2024</h3>
            <h3 className="title item">Certified mathematics teacher</h3>
            <p className="place">
              French Ministry of Education
              <br />
              France
            </p>
            <p className="details">
              Eleven years in middle school (students aged 11-15) and one year
              in high school (students aged 16-18).
              <br />
              Mathematics teaching, homeroom teacher responsibilities,
              individual support for struggling students, and facilitation of
              educational board-game workshops.
            </p>
          </div>
        </>
      );
    } else if (lang === "en" && tab === 2) {
      // School EN
      return (
        <>
          <div className="block">
            <h3 className="title date">10/2024 – Ongoing</h3>
            <h3 className="title item">
              Web and Mobile Web Developer Certificate
            </h3>
            <p className="place">
              ESECAD (online)
              <br />
              Montrouge (France)
            </p>
            <p className="details">
              Completed, with final exam scheduled for Q1 2026. Technologies covered: HTML/CSS,
              JavaScript, PHP, SQL, Python.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">10/2024 – Ongoing</h3>
            <h3 className="title item">Self-learning</h3>
            <p className="place">
              Self-paced
              <br />
              Guillestre (France)
            </p>
            <p className="details">
              Earned the{" "}
              <a
                href="./docs/Mimo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Full-stack Developer" certificate
              </a>{" "}
              from{" "}
              <a href="https://mimo.org/" target="_blank">
                Mimo
              </a>{" "}
              (May 2025). Technologies covered: HTML/CSS, TypeScript, SQL,
              React, ExpressJS.
              <br />
              Learning Rust independently using{" "}
              <a href="https://doc.rust-lang.org/book/" target="_blank">
                The Rust Book
              </a>{" "}
              and{" "}
              <a href="https://github.com/rust-lang/rustlings" target="_blank">
                Rustlings
              </a>
              .<br />
              Regular practice in TypeScript and Rust via{" "}
              <a
                href="https://exercism.org/profiles/MickaelDutfoy"
                target="_blank"
              >
                Exercism
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">08/2012</h3>
            <h3 className="title item">
              National Teaching Certification in Mathematics (CAPES)
            </h3>
            <p className="place">
              University of Rennes 2<br />
              Rennes (France)
            </p>
            <p className="details">
              National ranking: 222<sup>nd</sup>.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2010 – 08/2012</h3>
            <h3 className="title item">
              Master's Degree in Mathematics Education (MEEF)
            </h3>
            <p className="place">
              University of Rennes 2<br />
              Rennes (France)
            </p>
            <p className="details">
              Earned the{" "}
              <a
                href="./docs/Master.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Master’s Degree in Teaching, Education, and Training
              </a>{" "}
              with a specialization in mathematics.
            </p>
          </div>
        </>
      );
    } else if (lang === "en" && tab === 3) {
      // Bio EN
      return (
        <div className="text-box">
          <p>
            After teaching mathematics for twelve years, a mission I always
            cared deeply about, I chose to give my career a new direction
            through a reconversion into software development. I love learning,
            evolving, and stepping out of my comfort zone: this change truly
            fulfills me.
          </p>
          <p>
            My professional experience has given me valuable soft skills:
            pedagogy, patience, organization, communication... Naturally
            persistent, I find real joy in coding, especially because it
            reconnects me with what I always loved in mathematics: rigor, pure
            logic, and the elegance of a well-crafted solution. Teaching also
            taught me to be both autonomous and collaborative: two precious
            assets in a world where teamwork is key and self-sufficiency is
            golden.
          </p>
          <p>
            I value effort: whether it’s progressing in trail running, mountain
            biking, Norwegian, TypeScript, or Rust, I like to go deep and
            constantly push myself. I don’t settle for the basics: I explore,
            deconstruct, and strive to understand rather than just memorize — a
            philosophy I always aimed to pass on to my students. In that spirit,
            I prefer adapting tools to the actual needs and keep code clear and
            efficient, rather than piling up libraries and frameworks without
            questioning their relevance. This drive for clarity also shapes the
            tools I enjoy using or designing: minimalism, sobriety, and
            smoothness are my guiding principles.
          </p>
          <p>
            I move forward without pretension but with high standards: for
            myself, for the code I write, and for the impact I want to have. My
            ambition? To build elegant, efficient, discreet, and above all
            meaningful systems.
          </p>
        </div>
      );
    } else if (lang === "en" && tab === 4) {
      // Portfolio EN
      return (
        <>
          <div className="portfolio-item reverse">
            <div className="portfolio-desc">
              <h3>Aster</h3>
              <p>
                A web application <u>currently in development</u> designed for
                animal protection associations, Aster helps manage members,
                animals, and foster families. Built as a real, usable tool
                rather than a school project, it is already being offered to
                partner associations. Fully developed in TypeScript with Next.js
                and Prisma, Aster combines rigor and flexibility within a modern
                full-stack architecture (authentication, data management,
                routes, UI). The app is mobile-first and deployed as a PWA
                installable on Android. Clicking the thumbnail opens the
                production version hosted on Vercel (Test account :
                demo@aster.app / AsterDemo2026!).
              </p>
            </div>
            <a href="https://aster-pearl.vercel.app" target="_blank">
              <img src={aster} alt="Aster screenshot" />
            </a>
          </div>

          <div className="portfolio-item">
            <a href="https://www.leshautschatlpins.fr/" target="_blank">
              <img src={hautsChatlpins} alt="Les Hauts Chat'lpins screenshot" />
            </a>
            <div className="portfolio-desc">
              <h3>Les Hauts Chat'lpins</h3>
              <p>
                Creation of a simple HTML/CSS website with a few JavaScript
                features (on-click popups, dynamic contact form). This project
                allowed me to apply basic knowledge in code, design, UX, and
                SEO, always serving the animal welfare cause I care deeply
                about. Click the thumbnail to visit the site.
              </p>
            </div>
          </div>

          <div className="portfolio-item reverse">
            <div className="portfolio-desc">
              <h3>WorldRoots</h3>
              <p>
                A retro text-based RPG built entirely with vanilla JavaScript in
                the browser. You control a team of three characters and aim to
                progress as far as possible. Elemental spells, abilities,
                potions, buffs/debuffs, even summons: I wanted to recreate the
                classic mechanics of the genre. In the future, I plan to rebuild
                the codebase in TypeScript with major optimizations and a more
                dynamic React UI. Click and fight!
              </p>
            </div>
            <a
              href="https://mickaeldutfoy.github.io/worldroots/"
              target="_blank"
            >
              <img src={worldroots} alt="WorldRoots screenshot" />
            </a>
          </div>
        </>
      );
    } else if (lang === "nb" && tab === 1) {
      // Exp NO
      return (
        <>
          <div className="block">
            <h3 className="title date">09/2025 – 10/2025</h3>
            <h3 className="title item">Utviklerpraktikant (web)</h3>
            <p className="place">
              Marcel SAS
              <br />
              Mulhouse (Frankrike)
            </p>
            <p className="details">
              Bidrar til utviklingen av en webapplikasjon laget for å støtte
              personer med kognitive utfordringer.
              <br />
              Stack: Next.js, TypeScript, Prisma, tRPC.
              <br />
              Lenker:{" "}
              <a href="https://www.marcel.family/" target="_blank">
                Nettside
              </a>
              ,{" "}
              <a href="https://github.com/Marcel-SAS/" target="_blank">
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">2025</h3>
            <h3 className="title item">Utvikler under opplæring</h3>
            <p className="place">
              Egne prosjekter
              <br />
              Guillestre (Frankrike)
            </p>
            <p className="details">
              Arbeidet med flere prosjekter parallelt med opplæringen for å
              styrke mine ferdigheter i programmering. Se portefølje-delen for
              mer informasjon.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2021 – 08/2025</h3>
            <h3 className="title item">Privatlærer i matematikk</h3>
            <p className="place">
              Selvstendig næringsdrivende
              <br />
              Frankrike
            </p>
            <p className="details">
              Fire år som selvstendig næringsdrivende godkjent for
              "privatundervisning", med hjemmeundervisning i matematikk.
              <br />
              Lenke:{" "}
              <a href="https://www.facebook.com/m.dutfoy.prof" target="_blank">
                Facebook-side
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2012 – 08/2024</h3>
            <h3 className="title item">Lektor i matematikk</h3>
            <p className="place">
              Det franske utdannings departementet
              <br />
              Frankrike
            </p>
            <p className="details">
              Elleve år på ungdomsskole (elever 11-15 år) og ett år på
              videregående (elever 16-18 år).
              <br />
              Undervisning i matematikk, ansvar som kontaktlærer, individuell
              støtte for elever med utfordringer, og gjennomføring av faglige
              spillverksteder.
            </p>
          </div>
        </>
      );
    } else if (lang === "nb" && tab === 2) {
      // School NO
      return (
        <>
          <div className="block">
            <h3 className="title date">10/2024 – Nå</h3>
            <h3 className="title item">Web- og Mobilutvikler Sertifikat</h3>
            <p className="place">
              ESECAD (nettbasert)
              <br />
              Montrouge (Frankrike)
            </p>
            <p className="details">
              Fullført, med avsluttende eksamen planlagt i første kvartal 2026. Dekket teknologier: HTML/CSS,
              JavaScript, PHP, SQL, Python.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">10/2024 – Nå</h3>
            <h3 className="title item">Selvstudium</h3>
            <p className="place">
              Egen læring
              <br />
              Guillestre (Frankrike)
            </p>
            <p className="details">
              Fullførte{" "}
              <a
                href="./docs/Mimo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                «Full-stack Developer»-sertifikatet
              </a>{" "}
              fra{" "}
              <a href="https://mimo.org/" target="_blank">
                Mimo
              </a>{" "}
              (mai 2025). Teknologier: HTML/CSS, TypeScript, SQL, React,
              ExpressJS.
              <br />
              Lærer Rust selvstendig med{" "}
              <a href="https://doc.rust-lang.org/book/" target="_blank">
                The Rust Book
              </a>{" "}
              og{" "}
              <a href="https://github.com/rust-lang/rustlings" target="_blank">
                Rustlings
              </a>
              .<br />
              Regelmessige øvelser i TypeScript og Rust via{" "}
              <a
                href="https://exercism.org/profiles/MickaelDutfoy"
                target="_blank"
              >
                Exercism
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">08/2012</h3>
            <h3 className="title item">
              Nasjonal undervisningssertifisering i matematikk (CAPES)
            </h3>
            <p className="place">
              Université Rennes 2<br />
              Rennes (Frankrike)
            </p>
            <p className="details">Nasjonal rangering: 222.</p>
          </div>

          <div className="block">
            <h3 className="title date">09/2010 – 08/2012</h3>
            <h3 className="title item">Master i matematikkdidaktikk (MEEF)</h3>
            <p className="place">
              Université Rennes 2<br />
              Rennes (Frankrike)
            </p>
            <p className="details">
              Fullførte{" "}
              <a
                href="./docs/Master.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mastergrad i undervisning, utdanning og opplæring
              </a>{" "}
              med spesialisering i matematikk.
            </p>
          </div>
        </>
      );
    } else if (lang === "nb" && tab === 3) {
      // Bio NO
      return (
        <div className="text-box">
          <p>
            Etter tolv år som matematikklærer, en rolle jeg alltid har hatt nært
            til hjertet, valgte jeg å gi karrieren min en ny retning gjennom en
            overgang til programvareutvikling. Jeg liker å lære, utvikle meg og
            gå ut av komfortsonen min: Dette skiftet gir meg derfor ekte
            tilfredshet.
          </p>
          <p>
            Min yrkeserfaring har gitt meg verdifulle <em>soft skills</em>:
            pedagogikk, tålmodighet, organisering, kommunikasjon. Som en
            naturlig utholdende person finner jeg stor glede i koding, spesielt
            fordi jeg gjenfinner det jeg alltid har likt best i matematikk:
            nøyaktighet, ren logikk og elegansen i en godt konstruert løsning.
            Undervisning har også lært meg å være både selvstendig og
            samarbeidsvillig: to viktige kvaliteter i en verden der samarbeid er
            nøkkelen og selvstendighet er gull verdt.
          </p>
          <p>
            Jeg setter pris på innsats, enten det gjelder framgang i terrengløp,
            på sykkel, i norsk, TypeScript eller Rust, og liker å gå i dybden og
            stadig utfordre meg selv. Jeg nøyer meg ikke med det grunnleggende:
            Jeg utforsker, dekonstruerer og streber etter å forstå heller enn å
            pugge — en filosofi jeg alltid har ønsket å formidle til elevene
            mine. I samme ånd foretrekker jeg å tilpasse verktøy til behovet og
            holde koden tydelig og effektiv, heller enn å stable biblioteker og
            rammeverk uten å stille spørsmål ved relevansen. Dette kravet om
            klarhet preger også verktøyene jeg liker å bruke eller utvikle:
            Minimalisme, enkelhet og flyt er mine ledestjerner.
          </p>
          <p>
            Jeg jobber uten store ord, men med høye standarder: for meg selv,
            for koden jeg skriver, og for virkningen jeg ønsker å ha. Min
            ambisjon? Å bygge elegante, effektive, diskrete og fremfor alt
            meningsfulle systemer.
          </p>
          <p>
            <em>
              NB: Jeg lærer fortsatt norsk (B1/B2). Denne teksten er oversatt
              med litt hjelp. Se gjerne den engelske versjonen for presisjon.
            </em>
          </p>
        </div>
      );
    } else if (lang === "nb" && tab === 4) {
      // Portfolio NO
      return (
        <>
          <div className="portfolio-item reverse">
            <div className="portfolio-desc">
              <h3>Aster</h3>
              <p>
                En nettapplikasjon <u>under utvikling</u> laget for
                dyrevernorganisasjoner, Aster hjelper med å administrere
                medlemmer, dyr og fosterhjem. Prosjektet er utviklet som et
                reelt verktøy, ikke bare et skoleprosjekt, og tilbys allerede
                til samarbeidende organisasjoner. Fullt utviklet i TypeScript
                med Next.js og Prisma, kombinerer Aster struktur og
                fleksibilitet i en moderne full-stack-arkitektur (autentisering,
                databehandling, ruter, grensesnitt). Appen er mobil-først og
                distribuert som en PWA som kan installeres på Android. Et klikk
                på miniatyren åpner produksjonsversjonen som ligger på Vercel
                (Testkonto : demo@aster.app / AsterDemo2026!).
              </p>
            </div>
            <a href="https://aster-pearl.vercel.app" target="_blank">
              <img src={aster} alt="Skjermbilde av Aster" />
            </a>
          </div>

          <div className="portfolio-item">
            <a href="https://www.leshautschatlpins.fr/" target="_blank">
              <img
                src={hautsChatlpins}
                alt="Skjermbilde av Les Hauts Chat'lpins"
              />
            </a>
            <div className="portfolio-desc">
              <h3>Les Hauts Chat'lpins</h3>
              <p>
                En enkel nettside laget i HTML/CSS med litt
                JavaScript-funksjonalitet (pop-ups ved klikk, dynamisk
                kontaktskjema). Dette prosjektet ga meg muligheten til å bruke
                grunnleggende kunnskap innen kode, design, brukeropplevelse og
                SEO, alltid i tjeneste for dyrevelferdssaken som står meg nær.
                Klikk på miniatyren for å åpne siden.
              </p>
            </div>
          </div>

          <div className="portfolio-item reverse">
            <div className="portfolio-desc">
              <h3>WorldRoots</h3>
              <p>
                Et retro tekstbasert rollespill laget helt i vanilla JavaScript
                i nettleseren. Du styrer et lag på tre figurer og målet er å
                komme så langt som mulig. Elementære trylleformler, evner,
                potions, buffs/debuffs og til og med innkallinger: jeg ønsket å
                gjenskape de klassiske mekanikkene i sjangeren. I fremtiden
                planlegger jeg å skrive om koden i TypeScript med flere
                optimaliseringer og et mer dynamisk React-grensesnitt. Klikk og
                kjemp!
              </p>
            </div>
            <a
              href="https://mickaeldutfoy.github.io/worldroots/"
              target="_blank"
            >
              <img src={worldroots} alt="Skjermbilde av WorldRoots" />
            </a>
          </div>
        </>
      );
    } else {
      return <p>This section will be added soon.</p>;
    }
  };

  return (
    <div className="content">
      <TabBar lang={lang} tab={tab} setTab={setTab} />
      <div className="box">{generateContent(lang, tab)}</div>
    </div>
  );
};

export default Content;

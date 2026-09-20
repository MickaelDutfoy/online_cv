import "./styles/Content.css";
import hautsChatlpins from "./img/hauts_chatlpins.png";
import worldroots from "./img/worldroots.jpg";
import aster from "./img/aster.png";
import nordrail from "./img/nordrail.png";
import elegia from "./img/elegia.png";
import TabBar from "./TabBar";
import { type JSX } from "react";

const Content = ({
  lang,
  tab,
  setTab,
}: {
  lang: string;
  tab: number;
  setTab: (tab: number) => void;
}) => {
  const generateContent = (lang: string, tab: number): JSX.Element => {
    if (lang === "fr" && tab === 1) {
      // Exp FR
      return (
        <>
          <div className="block">
            <h3 className="title date">05/2025 – Aujourd’hui</h3>
            <h3 className="title item">Développeur fullstack</h3>
            <p className="place">Aster (produit personnel)</p>
            <p className="details">
              Développement et maintenance d’Aster, de l’idée à la production :
              une application web et mobile publiée sur Google Play et utilisée
              par des associations de protection animale en France et en
              Norvège.
              <br />
              Responsable du frontend, du backend, du modèle de données, du
              déploiement, des correctifs et des évolutions selon les besoins
              des utilisateurs.
              <br />
              Stack: Next.js, TypeScript, Prisma, PostgreSQL.
              <br />
              Liens :{" "}
              <a
                href="https://aster-app.eu/discover/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site web
              </a>
              ,{" "}
              <a
                href="https://github.com/MickaelDutfoy/aster-next"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2025 – 10/2025</h3>
            <h3 className="title item">Développeur fullstack (stage)</h3>
            <p className="place">
              Marcel SAS
              <br />
              Mulhouse (France)
            </p>
            <p className="details">
              Développement frontend et backend au sein d’une petite équipe
              agile, pour une application accompagnant les personnes atteintes
              de troubles cognitifs et leurs aidants.
              <br />
              Stack: Next.js, TypeScript, Prisma, tRPC.
              <br />
              Liens :{" "}
              <a
                href="https://www.marcel.family/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site web
              </a>
              ,{" "}
              <a
                href="https://github.com/Marcel-SAS/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">
              09/2020 – 08/2025
              <br />
              09/2026 – Aujourd’hui
            </h3>
            <h3 className="title item">
              Cours particuliers de mathématiques et de français
            </h3>
            <p className="place">
              À mon compte
              <br />
              France / Trondheim
            </p>
            <p className="details">
              Cours de mathématiques à domicile en France sous le statut
              d’auto-entrepreneur (09/2020–08/2025). Depuis septembre 2026,
              cours particuliers de mathématiques et de français à Trondheim.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2012 – 08/2025</h3>
            <h3 className="title item">Professeur certifié de mathématiques</h3>
            <p className="place">
              Éducation Nationale
              <br />
              France
            </p>
            <p className="details">
              Treize années d’enseignement des mathématiques au collège et au
              lycée en France (élèves de 11 à 17 ans).
              <br />
              Suivi de classes comme professeur principal, accompagnement
              personnalisé d’élèves en difficulté et animation d’ateliers
              ludiques autour des mathématiques.
            </p>
          </div>
        </>
      );
    } else if (lang === "fr" && tab === 2) {
      // School FR
      return (
        <>
          <div className="block">
            <h3 className="title date">10/2024 – 02/2026</h3>
            <h3 className="title item">Développeur web et web mobile (DWWM)</h3>
            <p className="place">
              ESECAD (distanciel)
              <br />
              Montrouge (France)
            </p>
            <p className="details">
              Titre professionnel français reconnu par l’État (RNCP niveau 5,
              bac+2).
              <br />
              Formation au frontend, au backend et aux bases de données :
              HTML/CSS, JavaScript, PHP, SQL et Python.
              <br />
              Voir le diplôme :{" "}
              <a
                href="./docs/DWWM.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Titre DWWM
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">08/2012</h3>
            <h3 className="title item">CAPES de mathématiques</h3>
            <p className="place">
              Éducation Nationale
              <br />
              France
            </p>
            <p className="details">
              Classement national : 222<sup>e</sup>.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2010 – 06/2012</h3>
            <h3 className="title item">
              Master en mathématiques et applications
            </h3>
            <p className="place">
              Université de Rennes
              <br />
              Rennes (France)
            </p>
            <p className="details">
              Spécialité Mathématiques et métiers de l’enseignement.
              <br />
              Mathématiques avancées, didactique et formation au métier
              d’enseignant : analyse, algèbre, géométrie et stages
              d’enseignement.
              <br />
              Voir le diplôme :{" "}
              <a
                href="./docs/Master.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Master Maths MEEF
              </a>
              .
            </p>
          </div>
        </>
      );
    } else if (lang === "fr" && tab === 3) {
      // Bio FR
      return (
        <div className="text-box">
          <p>
            En tant que développeur, je travaille principalement avec TypeScript
            et React (Next.js). J’ai développé et mis en production Aster, une
            application web et mobile utilisée par des associations de
            protection animale en Norvège et en France. Ce projet m’a amené à
            travailler sur l’ensemble de la stack, à faire des choix techniques
            à partir des retours concrets des utilisateurs et à apprendre à
            explorer de nouvelles problématiques en autonomie. J’utilise
            également des outils d’IA pour explorer différentes approches,
            apprendre et élargir mes compétences, en gardant toujours un regard
            critique sur les résultats.
          </p>

          <p>
            Lors de mon stage chez Marcel en France, j’ai travaillé au sein
            d’une petite équipe agile, sur le frontend et le backend d’une
            application destinée aux personnes atteintes de troubles cognitifs
            et à leurs aidants. On m’a progressivement confié davantage de
            responsabilités : des corrections de bugs et de petites
            modifications les premiers jours, jusqu’au développement d’une
            fonctionnalité fullstack complète en fin de stage. J’ai également
            commencé à explorer les bases de C# et de .NET en autonomie, ces
            technologies étant largement utilisées sur le marché norvégien.
          </p>

          <p>
            Mon parcours de professeur de mathématiques influence ma façon de
            travailler : les mathématiques m’ont appris à résoudre des
            problèmes, tandis que l’enseignement m’a appris à rendre les choses
            complexes compréhensibles pour les autres et à tenir compte des
            besoins de l’utilisateur. À bien des égards, un bon enseignement est
            aussi une forme d’UX !
          </p>

          <p>
            Ma reconversion, mon travail sur Aster, mon stage et l’apprentissage
            du norvégien à partir de zéro reflètent quelque chose de fondamental
            chez moi : apprendre en continu occupe une place centrale dans mon
            évolution, tant professionnelle que personnelle. J’aime aborder de
            nouveaux domaines, les explorer en autonomie et en construire
            progressivement une compréhension plus profonde. C’est aussi cet
            état d’esprit qui m’a conduit à m’installer en Norvège pour y
            construire mon avenir personnel et professionnel.
          </p>
        </div>
      );
    } else if (lang === "fr" && tab === 4) {
      // Portfolio FR
      return (
        <>
          <div className="portfolio-item reverse">
            <a href="https://aster-app.eu" target="_blank">
              <img src={aster} alt="Capture d’écran Aster" />
            </a>
            <div className="portfolio-desc">
              <h3>Aster</h3>
              <p>
                Aster est une application web et mobile pour les associations de
                protection animale. Elle permet de gérer les membres, la
                trésorerie, les animaux et les lieux d’accueil, et même de
                mettre à jour le site d’adoption de l’association depuis son
                téléphone.
              </p>

              <p>
                Développée en TypeScript avec Next.js et Prisma, elle évolue en
                continu, est publiée sur Google Play et utilisée par un nombre
                croissant d’associations en France et en Norvège.
              </p>

              <p>
                Un clic sur la miniature ouvre la version en ligne (compte de
                test : demo@aster.app / AsterDemo2026!).
              </p>
              <p>
                Liens :{" "}
                <a href="https://aster-app.eu/discover" target="_blank">
                  Page de présentation
                </a>
                ,{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.quietforge.aster"
                  target="_blank"
                >
                  Page Google Play
                </a>
                .
              </p>
            </div>
          </div>

          <div className="portfolio-item">
            <a href="https://github.com/MickaelDutfoy/elegia" target="_blank">
              <img src={elegia} alt="Capture d'écran d'Elegia" />
            </a>
            <div className="portfolio-desc">
              <h3>Elegia</h3>
              <p>
                Jeu de plateau tactique actuellement en développement, construit
                entièrement en Rust, avec Macroquad pour l'UI.
              </p>

              <p>
                Ce projet me permet d’explorer de nouvelles problématiques par
                rapport à mes autres projets, notamment l’architecture moteur,
                les tests automatisés, la construction d’un système de règles et
                une approche très différente du rendu graphique.
              </p>

              <p>Un clic sur la miniature ouvre le dépôt GitHub.</p>
            </div>
          </div>

          <div className="portfolio-item reverse">
            <a
              href="https://gray-pebble-0725c0803.7.azurestaticapps.net/"
              target="_blank"
            >
              <img src={nordrail} alt="Capture d'écran de NordRail" />
            </a>
            <div className="portfolio-desc">
              <h3>NordRail</h3>

              <p>
                Application web de démonstration permettant de rechercher des
                trajets ferroviaires fictifs entre plusieurs villes
                norvégiennes, puis de réserver et d’annuler des billets.
              </p>

              <p>
                Développée avec React, TypeScript, C#, ASP.NET Core et Entity
                Framework Core, elle est déployée sur Microsoft Azure avec une
                base de données SQL.
              </p>

              <p>Un clic sur la miniature ouvre la version en ligne.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <a href="https://www.leshautschatlpins.fr/" target="_blank">
              <img src={hautsChatlpins} alt="Screenshot Les Hauts Chat'lpins" />
            </a>
            <div className="portfolio-desc">
              <h3>Les Hauts Chat'lpins</h3>
              <div>
                <p>
                  Réalisation d’un site web vitrine pour une association de
                  protection animale, avec HTML, CSS et JavaScript.
                </p>

                <p>
                  Ce projet m’a permis de mettre en pratique des bases concrètes
                  en intégration, UX et SEO, tout en servant la cause animale.
                </p>
                <p>
                  À noter : le site utilise Aster pour sa page d'animaux à
                  l'adoption.
                </p>
                <p>Un clic sur la miniature ouvre le site en ligne.</p>
              </div>
            </div>
          </div>
          <div className="portfolio-item reverse">
            <a
              href="https://mickaeldutfoy.github.io/worldroots/"
              target="_blank"
            >
              <img src={worldroots} alt="Screenshot WorldRoots" />
            </a>
            <div className="portfolio-desc">
              <h3>WorldRoots</h3>
              <div>
                <p>
                  Développement d’un RPG textuel en JavaScript vanilla, jouable
                  en navigateur, avec mécaniques classiques (combat, sorts,
                  buffs/debuffs).
                </p>

                <p>
                  Ce projet m’a permis de structurer du code côté front et de
                  manipuler le DOM en JavaScript.
                </p>

                <p>Un clic sur la miniature lance le jeu.</p>
              </div>
            </div>
          </div>
        </>
      );
    } else if (lang === "en" && tab === 1) {
      // Exp EN
      return (
        <>
          <div className="block">
            <h3 className="title date">05/2025 – Present</h3>
            <h3 className="title item">Full-stack developer</h3>
            <p className="place">Aster (own product)</p>
            <p className="details">
              Developing and maintaining Aster from idea to production: a web
              and mobile application published on Google Play and used by animal
              welfare organizations in Norway and France.
              <br />
              Responsible for frontend, backend, data modeling, deployment, bug
              fixes and ongoing development based on user needs.
              <br />
              Stack: Next.js, TypeScript, Prisma, PostgreSQL.
              <br />
              Links :{" "}
              <a
                href="https://aster-app.eu/discover/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              ,{" "}
              <a
                href="https://github.com/MickaelDutfoy/aster-next"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2025 – 10/2025</h3>
            <h3 className="title item">Full-stack developer (internship)</h3>
            <p className="place">
              Marcel SAS
              <br />
              Mulhouse (France)
            </p>
            <p className="details">
              Developed frontend and backend features in a small agile team for
              an application supporting people with cognitive impairments and
              their caregivers.
              <br />
              Stack: Next.js, TypeScript, Prisma, tRPC.
              <br />
              Links:{" "}
              <a
                href="https://www.marcel.family/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              ,{" "}
              <a
                href="https://github.com/Marcel-SAS/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">
              09/2020 – 08/2025
              <br />
              09/2026 – Present
            </h3>
            <h3 className="title item">Private mathematics and French tutor</h3>
            <p className="place">
              Independent tutoring
              <br />
              France / Trondheim
            </p>
            <p className="details">
              Provided in-home mathematics tutoring as a registered
              self-employed tutor in France (09/2020–08/2025). Since September
              2026, providing private mathematics and French lessons in
              Trondheim.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2012 – 08/2025</h3>
            <h3 className="title item">Certified mathematics teacher</h3>
            <p className="place">
              French Ministry of Education
              <br />
              France
            </p>
            <p className="details">
              Thirteen years teaching mathematics in French secondary schools
              (students aged 11–17).
              <br />
              Homeroom teacher responsibilities, individual support for
              struggling students and educational mathematics game workshops.
            </p>
          </div>
        </>
      );
    } else if (lang === "en" && tab === 2) {
      // School EN
      return (
        <>
          <div className="block">
            <h3 className="title date">10/2024 – 02/2026</h3>
            <h3 className="title item">Web and mobile web developer (DWWM)</h3>
            <p className="place">
              ESECAD (online)
              <br />
              Montrouge (France)
            </p>
            <p className="details">
              French state-recognized vocational qualification (RNCP level 5,
              bac+2: two years of post-secondary education).
              <br />
              Covered frontend, backend and databases: HTML/CSS, JavaScript,
              PHP, SQL and Python.
              <br />
              View diploma:{" "}
              <a
                href="./docs/DWWM.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                DWWM qualification
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">08/2012</h3>
            <h3 className="title item">
              French national teaching certification in mathematics (CAPES)
            </h3>
            <p className="place">
              French Ministry of Education
              <br />
              France
            </p>
            <p className="details">
              National ranking: 222<sup>nd</sup>.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2010 – 06/2012</h3>
            <h3 className="title item">
              Master’s degree in mathematics and applications
            </h3>
            <p className="place">
              Université de Rennes
              <br />
              Rennes (France)
            </p>
            <p className="details">
              Specialization in mathematics and teacher education.
              <br />
              Advanced mathematics, mathematics education and teacher training:
              analysis, algebra, geometry and teaching placements.
              <br />
              View diploma:{" "}
              <a
                href="./docs/Master.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Master’s degree in Mathematics (MEEF)
              </a>
              .
            </p>
          </div>
        </>
      );
    } else if (lang === "en" && tab === 3) {
      // Bio EN
      return (
        <div className="text-box">
          <p>
            As a developer, I mainly work with TypeScript and React (Next.js). I
            built and launched Aster, a web and mobile application used by
            animal welfare organizations in Norway and France. Through this
            project, I have worked across the entire stack, made technical
            decisions based on real user feedback, and learned to explore new
            challenges independently. I also use AI tools to help me explore
            different approaches, learn, and broaden my skills, while always
            critically assessing their output.
          </p>

          <p>
            During an internship at Marcel in France, I worked in a small agile
            team on both the frontend and backend of an application for people
            with cognitive impairments and their caregivers. I gradually took on
            more responsibility, progressing from bug fixes and small changes in
            the first few days to developing a complete full-stack feature by
            the end of the internship. I have also started exploring the
            fundamentals of C# and .NET independently, as these technologies are
            widely used in the Norwegian market.
          </p>

          <p>
            My background as a mathematics teacher shapes the way I work:
            mathematics taught me to solve problems, while teaching taught me to
            make complex things understandable to others and to consider the
            user’s needs. In many ways, good teaching is also a form of UX!
          </p>

          <p>
            My career change, my work on Aster, my internship, and learning
            Norwegian from scratch all reflect something fundamental about me:
            continuous learning is central to how I grow, both professionally
            and personally. I enjoy venturing into new areas, exploring them
            independently, and gradually building a deeper understanding. That
            same mindset also led me to move to Norway to build my personal and
            professional future here.
          </p>
        </div>
      );
    } else if (lang === "en" && tab === 4) {
      // Portfolio EN
      return (
        <>
          <div className="portfolio-item reverse">
            <a href="https://aster-app.eu" target="_blank">
              <img src={aster} alt="Aster screenshot" />
            </a>
            <div className="portfolio-desc">
              <h3>Aster</h3>
              <p>
                Aster is a web and mobile application for animal welfare
                organizations. It lets them manage members, finances, animals
                and foster locations, and even update their adoption website
                straight from a phone.
              </p>

              <p>
                Built with TypeScript, Next.js and Prisma, it is continuously
                improved, published on Google Play and used by a growing number
                of organizations in France and Norway.
              </p>

              <p>
                Click the preview to open the live version (test account:
                demo@aster.app / AsterDemo2026!).
              </p>
              <p>
                Links:{" "}
                <a href="https://aster-app.eu/discover" target="_blank">
                  Overview page
                </a>
                ,{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.quietforge.aster"
                  target="blank"
                >
                  Google Play page
                </a>
                .
              </p>
            </div>
          </div>
          <div className="portfolio-item">
            <a href="https://github.com/MickaelDutfoy/elegia" target="_blank">
              <img src={elegia} alt="Screenshot of Elegia" />
            </a>

            <div className="portfolio-desc">
              <h3>Elegia</h3>

              <p>
                Tactical board game currently in development, built entirely in
                Rust, with Macroquad for the UI.
              </p>

              <p>
                This project allows me to explore new technical challenges
                compared to my other projects, including engine architecture,
                automated testing, rule systems and a very different approach to
                graphical rendering.
              </p>

              <p>Clicking the preview opens the GitHub repository.</p>
            </div>
          </div>

          <div className="portfolio-item reverse">
            <a
              href="https://gray-pebble-0725c0803.7.azurestaticapps.net/"
              target="_blank"
            >
              <img src={nordrail} alt="Screenshot of NordRail" />
            </a>
            <div className="portfolio-desc">
              <h3>NordRail</h3>

              <p>
                Demonstration web application for searching fictional railway
                journeys between several Norwegian cities, and for booking and
                cancelling tickets.
              </p>

              <p>
                Developed with React, TypeScript, C#, ASP.NET Core and Entity
                Framework Core, it is deployed on Microsoft Azure with a SQL
                database.
              </p>

              <p>Clicking the thumbnail opens the live application.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <a href="https://www.leshautschatlpins.fr/" target="_blank">
              <img src={hautsChatlpins} alt="Les Hauts Chat'lpins screenshot" />
            </a>
            <div className="portfolio-desc">
              <h3>Les Hauts Chat'lpins</h3>
              <div>
                <p>
                  Development of a simple showcase website for an animal welfare
                  organization using HTML, CSS and JavaScript.
                </p>

                <p>
                  This project allowed me to apply practical fundamentals in
                  integration, UX and SEO, while supporting a cause I care
                  about.
                </p>
                <p>Fun fact: the adoption page is powered by Aster.</p>
                <p>Click the preview to open the website.</p>
              </div>
            </div>
          </div>

          <div className="portfolio-item reverse">
            <a
              href="https://mickaeldutfoy.github.io/worldroots/"
              target="_blank"
            >
              <img src={worldroots} alt="WorldRoots screenshot" />
            </a>
            <div className="portfolio-desc">
              <h3>WorldRoots</h3>
              <div>
                <p>
                  Development of a text-based RPG in vanilla JavaScript,
                  playable in the browser, with classic mechanics (combat,
                  spells, buffs/debuffs).
                </p>

                <p>
                  This project helped me structure front-end code and work
                  directly with the DOM in JavaScript.
                </p>

                <p>Click the preview to launch the game.</p>
              </div>
            </div>
          </div>
        </>
      );
    } else if (lang === "nb" && tab === 1) {
      // Exp NO
      return (
        <>
          <div className="block">
            <h3 className="title date">05/2025 – D.D.</h3>
            <h3 className="title item">Fullstackutvikler</h3>
            <p className="place">Aster (eget produkt)</p>
            <p className="details">
              Utvikler og drifter Aster fra idé til produksjon, en web- og
              mobilapplikasjon publisert på Google Play og brukt av
              dyrevernorganisasjoner i Norge og Frankrike.
              <br />
              Ansvar for frontend, backend, datamodell, utrulling, feilretting
              og videreutvikling basert på brukerbehov.
              <br />
              Stack: Next.js, TypeScript, Prisma, PostgreSQL.
              <br />
              Lenker :{" "}
              <a
                href="https://aster-app.eu/discover/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nettside
              </a>
              ,{" "}
              <a
                href="https://github.com/MickaelDutfoy/aster-next"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2025 – 10/2025</h3>
            <h3 className="title item">Fullstackutvikler (praksis)</h3>
            <p className="place">
              Marcel SAS
              <br />
              Mulhouse (Frankrike)
            </p>
            <p className="details">
              Utviklet frontend og backend i et lite agilt team for en løsning
              som støtter personer med kognitive utfordringer og deres
              omsorgspersoner.
              <br />
              Stack: Next.js, TypeScript, Prisma, tRPC.
              <br />
              Lenker:{" "}
              <a
                href="https://www.marcel.family/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nettside
              </a>
              ,{" "}
              <a
                href="https://github.com/Marcel-SAS/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">
              09/2020 – 08/2025
              <br />
              09/2026 – D.D.
            </h3>
            <h3 className="title item">Privatlærer i matematikk og fransk</h3>
            <p className="place">
              Privatlærer
              <br />
              Frankrike / Trondheim
            </p>
            <p className="details">
              Privatundervisning i matematikk hjemme hos elever i Frankrike som
              selvstendig næringsdrivende (09/2020–08/2025). Tilbyr siden
              september 2026 privatundervisning i matematikk og fransk i
              Trondheim.
            </p>
          </div>
          <div className="block">
            <h3 className="title date">09/2012 – 08/2025</h3>
            <h3 className="title item">Matematikklærer</h3>
            <p className="place">
              Éducation Nationale
              <br />
              Frankrike
            </p>
            <p className="details">
              Tretten år med matematikkundervisning på ungdomsskole og
              videregående i Frankrike (elever fra 11 til 17 år).
              <br />
              Ansvar som kontaktlærer, individuell støtte for elever med
              utfordringer og gjennomføring av spillverksteder med matematisk
              innhold.
            </p>
          </div>
        </>
      );
    } else if (lang === "nb" && tab === 2) {
      // School NO
      return (
        <>
          <div className="block">
            <h3 className="title date">10/2024 – 02/2026</h3>
            <h3 className="title item">Web- og mobilutvikler (DWWM)</h3>
            <p className="place">
              ESECAD (nettbasert)
              <br />
              Montrouge (Frankrike)
            </p>
            <p className="details">
              Statlig fransk yrkeskvalifikasjon (RNCP nivå 5). Fransk bac+2-nivå
              (to år etter videregående opplæring).
              <br />
              Omfattet frontend, backend og databaser: HTML/CSS, JavaScript,
              PHP, SQL og Python.
              <br />
              Se vitnemål:{" "}
              <a
                href="./docs/DWWM.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                DWWM-kvalifikasjon
              </a>
              .
            </p>
          </div>
          <div className="block">
            <h3 className="title date">08/2012</h3>
            <h3 className="title item">
              Fransk nasjonal lærerkvalifikasjon i matematikk (CAPES)
            </h3>
            <p className="place">
              Éducation Nationale
              <br />
              Frankrike
            </p>
            <p className="details">Nasjonal rangering: 222.</p>
          </div>
          <div className="block">
            <h3 className="title date">09/2010 – 06/2012</h3>
            <h3 className="title item">Master i matematikk og anvendelser</h3>
            <p className="place">
              Université de Rennes
              <br />
              Rennes (Frankrike)
            </p>
            <p className="details">
              Spesialisering i matematikk og lærerutdanning.
              <br />
              Omfattet avansert matematikk, matematikkdidaktikk og
              lærerutdanning: analyse, algebra, geometri og
              undervisningspraksis.
              <br />
              Se vitnemål:{" "}
              <a
                href="./docs/Master.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Master i matematikk (MEEF)
              </a>
              .
            </p>
          </div>
        </>
      );
    } else if (lang === "nb" && tab === 3) {
      // Bio NO
      return (
        <div className="text-box">
          <p>
            Som utvikler jobber jeg hovedsakelig med TypeScript og React
            (Next.js), og har utviklet og satt i produksjon Aster, en web- og
            mobilapplikasjon som brukes av dyrevernorganisasjoner i Norge og
            Frankrike. Gjennom prosjektet har jeg jobbet med hele stacken, tatt
            tekniske valg basert på faktiske tilbakemeldinger fra brukerne og
            lært å utforske nye problemstillinger selvstendig. Jeg bruker også
            KI-verktøy som støtte for å utforske ulike tilnærminger, lære og
            utvide kompetansen min, alltid med et kritisk blikk på resultatene.
          </p>

          <p>
            Under en praksisperiode hos Marcel i Frankrike jobbet jeg i et lite
            agilt team med både frontend og backend på en applikasjon for
            personer med kognitive utfordringer og deres omsorgspersoner. Jeg
            fikk gradvis mer ansvar: fra feilretting og mindre endringer de
            første dagene til å utvikle en komplett fullstack-funksjonalitet mot
            slutten av perioden. Jeg har også begynt å utforske det
            grunnleggende i C# og .NET på egen hånd, ettersom disse teknologiene
            er mye brukt på det norske markedet.
          </p>

          <p>
            Bakgrunnen min som matematikklærer påvirker måten jeg jobber på:
            matematikken har lært meg å løse problemer, mens undervisningen har
            lært meg å gjøre komplekse ting forståelige for andre og å tenke på
            brukerens behov – på mange måter er god undervisning også en form
            for UX!
          </p>

          <p>
            Karriereskiftet mitt, arbeidet med Aster, praksisperioden og det å
            lære norsk fra bunnen av gjenspeiler noe grunnleggende ved meg:
            kontinuerlig læring er en sentral del av hvordan jeg utvikler meg,
            både faglig og personlig. Jeg liker å gå inn i nye områder, utforske
            dem selvstendig og gradvis bygge en dypere forståelse. Det er også
            denne innstillingen som fikk meg til å flytte til Norge for å bygge
            min personlige og profesjonelle fremtid her.
          </p>
        </div>
      );
    } else if (lang === "nb" && tab === 4) {
      // Portfolio NO
      return (
        <>
          <div className="portfolio-item reverse">
            <a href="https://aster-app.eu" target="_blank">
              <img src={aster} alt="Aster skjermbilde" />
            </a>
            <div className="portfolio-desc">
              <h3>Aster</h3>
              <p>
                Aster er en web- og mobilapplikasjon for dyrevernorganisasjoner.
                Den gjør det mulig å administrere medlemmer, økonomi, dyr og
                omsorgssteder, og til og med oppdatere organisasjonens nettside
                for adopsjon rett fra mobilen.
              </p>

              <p>
                Applikasjonen er utviklet med TypeScript, Next.js og Prisma,
                videreutvikles kontinuerlig, er publisert på Google Play og
                brukes av stadig flere organisasjoner i Norge og Frankrike.
              </p>

              <p>
                Klikk på forhåndsvisningen for å åpne nettversjonen (testkonto:
                demo@aster.app / AsterDemo2026!).
              </p>
              <p>
                Lenker:{" "}
                <a href="https://aster-app.eu/discover" target="_blank">
                  Presentasjonsside
                </a>
                ,{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.quietforge.aster"
                  target="blank"
                >
                  Google Play-side
                </a>
                .
              </p>
            </div>
          </div>

          <div className="portfolio-item">
            <a href="https://github.com/MickaelDutfoy/elegia" target="_blank">
              <img src={elegia} alt="Skjermbilde av Elegia" />
            </a>

            <div className="portfolio-desc">
              <h3>Elegia</h3>

              <p>
                Taktisk brettspill som for tiden er under utvikling, bygget helt
                i Rust, med Macroquad for UI.
              </p>

              <p>
                Dette prosjektet lar meg utforske nye tekniske problemstillinger
                sammenlignet med de andre prosjektene mine, blant annet
                motorarkitektur, automatiserte tester, regelsystemer og en svært
                annerledes tilnærming til grafisk rendering.
              </p>

              <p>Et klikk på forhåndsvisningen åpner repoet på GitHub.</p>
            </div>
          </div>
          <div className="portfolio-item reverse">
            <a
              href="https://gray-pebble-0725c0803.7.azurestaticapps.net/"
              target="_blank"
            >
              <img src={nordrail} alt="Skjermbilde av NordRail" />
            </a>
            <div className="portfolio-desc">
              <h3>NordRail</h3>

              <p>
                Demonstrasjonsapplikasjon for å søke etter fiktive togreiser
                mellom flere norske byer, samt for å bestille og avbestille
                billetter.
              </p>

              <p>
                Utviklet med React, TypeScript, C#, ASP.NET Core og Entity
                Framework Core. Applikasjonen er distribuert på Microsoft Azure
                med en SQL-database.
              </p>

              <p>Et klikk på miniatyrbildet åpner applikasjonen på nett.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <a href="https://www.leshautschatlpins.fr/" target="_blank">
              <img
                src={hautsChatlpins}
                alt="Les Hauts Chat'lpins skjermbilde"
              />
            </a>
            <div className="portfolio-desc">
              <h3>Les Hauts Chat'lpins</h3>
              <div>
                <p>
                  Utvikling av et enkelt presentasjonsnettsted for en
                  dyrevernorganisasjon, med HTML, CSS og JavaScript.
                </p>

                <p>
                  Dette prosjektet lot meg anvende konkrete grunnleggende
                  ferdigheter i integrasjon, UX og SEO, samtidig som det støtter
                  dyrevern.
                </p>
                <p>Forresten: den adopsjonssiden drives av Aster.</p>

                <p>Klikk på forhåndsvisningen for å åpne nettstedet.</p>
              </div>
            </div>
          </div>

          <div className="portfolio-item reverse">
            <a
              href="https://mickaeldutfoy.github.io/worldroots/"
              target="_blank"
            >
              <img src={worldroots} alt="WorldRoots skjermbilde" />
            </a>
            <div className="portfolio-desc">
              <h3>WorldRoots</h3>
              <div>
                <p>
                  Utvikling av et tekstbasert RPG i ren JavaScript, spillbart i
                  nettleseren, med klassiske mekanikker (kamp, trylleformler,
                  buffs/debuffs).
                </p>

                <p>
                  Dette prosjektet lot meg strukturere kode på frontend og
                  manipulere DOM i JavaScript.
                </p>

                <p>Klikk på forhåndsvisningen for å starte spillet.</p>
              </div>
            </div>
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

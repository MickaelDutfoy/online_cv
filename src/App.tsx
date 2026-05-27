import "./styles/App.css";
import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

const App = () => {
  let language = navigator.language.slice(0, 2);
  if (language !== "fr" && language !== "nb") language = "en";

  const getInitialTab = () => {
    switch (window.location.hash) {
      case "#experience":
        return 1;

      case "#education":
        return 2;

      case "#portfolio":
        return 4;

      default:
        return 1;
    }
  };

  const [tab, setTab]: [number, (tab: number) => void] =
    useState(getInitialTab());
  const [lang, setLang]: [string, (lang: string) => void] = useState(language);

  return (
    <>
      <Header lang={lang} setLang={setLang} />
<main>
  <div className="left-asides">
    <Aside lang={lang} title="contact" />
    <Aside lang={lang} title="hobbies" />
  </div>

  <Content lang={lang} tab={tab} setTab={setTab} />

  <div className="right-asides">
    <Aside lang={lang} title="skills" />
    <Aside lang={lang} title="remarks" />
  </div>
</main>
      <Footer lang={lang} />
    </>
  );
};

export default App;

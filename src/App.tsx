import './styles/App.css';
import Aside from './Aside';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';


const App = () => {
  const [lang, setLang]: [string, (lang: string) => void] = useState('fr');

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Aside lang={lang} title="contact" />
        <Aside lang={lang} title="hobbies" />
        <Content lang={lang} />
        <Aside lang={lang} title="skills" />
        <Aside lang={lang} title="remarks" />
      </main>
      <Footer lang={lang} />
    </>
  )
}

export default App;
import './styles/Language.css';
import fr from './img/fr.png';
import no from './img/no.png';
import uk from './img/uk.png';
import { useState } from 'react';

const Language = ({lang, setLang}: {lang:string; setLang: (lang: string) => void}) => {
    const [display, setDisplay]: [boolean, (display: boolean) => void] = useState(false);

    const langSwitch = (lang: string) => {
        if (!display) {
            setDisplay(true);
        } else {
            setLang(lang);
            setDisplay(false);
        }
    }

    return (
        <div className="language">
            <ul>
                <h4>
                    {lang === 'fr' && "Changer de langue :"}
                    {lang === 'en' && "Change language:"}
                    {lang === 'nb' && "Endre språk:"}
                </h4>
                {(display || lang === 'fr') && <li onClick={() => langSwitch('fr')}>
                    <span>{lang === 'fr' && <strong>Français</strong>}{lang === 'en' && "French"}{lang === 'nb' && "Fransk"}</span><img src={fr} alt="Drapeau français" />
                </li>}
                {(display || lang === 'en') && <li onClick={() => langSwitch('en')}>
                    <span>{lang === 'fr' && "Anglais"}{lang === 'en' && <strong>English</strong>}{lang === 'nb' && "Engelsk"}</span><img src={uk} alt="UK flag" />
                </li>}
                {(display || lang === 'nb') && <li onClick={() => langSwitch('nb')}>
                    <span>{lang === 'fr' && "Norvégien"}{lang === 'en' && "Norwegian"}{lang === 'nb' && <strong>Norsk</strong>}</span><img src={no} alt="Norsk flagg" />
                </li>}
            </ul>
        </div>
    )
}

export default Language;
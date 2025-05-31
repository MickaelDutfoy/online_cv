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
                    {lang === 'no' && "Endre språk:"}
                </h4>
                {(display || lang === 'fr') && <li onClick={() => langSwitch('fr')}>
                    <span>{lang === 'fr' && <strong>Français</strong>}{lang === 'en' && "French"}{lang === 'no' && "Fransk"}</span><img src={fr} alt="Drapeau France" />
                </li>}
                {(display || lang === 'en') && <li onClick={() => langSwitch('en')}>
                    <span>{lang === 'fr' && "Anglais"}{lang === 'en' && <strong>English</strong>}{lang === 'no' && "Engelsk"}</span><img src={uk} alt="Drapeau Royaume-Uni" />
                </li>}
                {(display || lang === 'no') && <li onClick={() => langSwitch('no')}>
                    <span>{lang === 'fr' && "Norvégien"}{lang === 'en' && "Norwegian"}{lang === 'no' && <strong>Norsk</strong>}</span><img src={no} alt="Drapeau Norvège" />
                </li>}
            </ul>
        </div>
    )
}

export default Language;
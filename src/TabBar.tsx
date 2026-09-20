import "./styles/TabBar.css";

const TabBar = ({
  lang,
  tab,
  setTab,
}: {
  lang: string;
  tab: number;
  setTab: (tab: number) => void;
}) => {
  return (
    <div className="tabs">
      <button
        onClick={() => setTab(1)}
        className={tab === 1 ? "active-tab" : "unactive-tab"}
      >
        {lang === "fr" && "Expérience"}
        {lang === "en" && "Experience"}
        {lang === "nb" && "Erfaring"}
      </button>
      <button
        onClick={() => setTab(2)}
        className={tab === 2 ? "active-tab" : "unactive-tab"}
      >
        {lang === "fr" && "Formation et diplômes"}
        {lang === "en" && "Training and qualifications"}
        {lang === "nb" && "Opplæring og kvalifikasjoner"}
      </button>
      <button
        onClick={() => setTab(3)}
        className={tab === 3 ? "active-tab" : "unactive-tab"}
      >
        {lang === "fr" && "Qui suis-je ?"}
        {lang === "en" && "Who am I?"}
        {lang === "nb" && "Hvem er jeg?"}
      </button>
      <button
        onClick={() => setTab(4)}
        className={tab === 4 ? "active-tab" : "unactive-tab"}
      >
        Portfolio
      </button>
    </div>
  );
};

export default TabBar;

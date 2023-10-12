import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import tournamentsPl from   "../translations/pl/tournaments.json";
import tournamentsEn from   "../translations/en/tournaments.json";

const resources = {
	en: {
        "tournaments": tournamentsPl,
	},
	pl: {
        "tournaments": tournamentsEn,
	},
};

i18n
	.use(detector)
	.use(initReactI18next) 
	.init({
		resources,
		fallbackLng: "en", 

		keySeparator: false, 

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
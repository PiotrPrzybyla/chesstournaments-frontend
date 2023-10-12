import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import tournamentsPl from   "../translations/pl/tournaments.json";
import tournamentsEn from   "../translations/en/tournaments.json";
import navigationPl from   "../translations/pl/navigation.json";
import navigationEn from   "../translations/en/navigation.json";

const resources = {
	en: {
        "tournaments": tournamentsPl,
		"navigation": navigationPl
	},
	pl: {
        "tournaments": tournamentsEn,
		"navigation": navigationEn
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
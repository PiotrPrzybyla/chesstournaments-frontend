import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import tournamentsPl from   "../translations/pl/tournaments.json";
import tournamentsEn from   "../translations/en/tournaments.json";
import navigationPl from   "../translations/pl/navigation.json";
import navigationEn from   "../translations/en/navigation.json";
import createTournamentEn from   "../translations/en/createTournament.json";
import createTournamentPl from   "../translations/pl/createTournament.json";

const resources = {
	en: {
        "tournaments": tournamentsEn,
		"navigation": navigationEn,
		"createTournament": createTournamentEn
	},
	pl: {
        "tournaments": tournamentsPl,
		"navigation": navigationPl,
		"createTournament": createTournamentPl
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
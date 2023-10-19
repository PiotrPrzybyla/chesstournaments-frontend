import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import tournamentsPl from   "../translations/pl/tournaments.json";
import tournamentsEn from   "../translations/en/tournaments.json";
import navigationPl from   "../translations/pl/navigation.json";
import navigationEn from   "../translations/en/navigation.json";
import createTournamentEn from   "../translations/en/createTournament.json";
import createTournamentPl from   "../translations/pl/createTournament.json";
import tournamentPl from   "../translations/pl/tournament.json";
import tournamentEn from   "../translations/en/tournament.json";
import groupsPl from  "../translations/pl/groups.json";
import groupsEn from  "../translations/en/groups.json";

const resources = {
	en: {
        "tournaments": tournamentsEn,
		"navigation": navigationEn,
		"createTournament": createTournamentEn,
		"tournament": tournamentEn,
		"groups": groupsEn
	},
	pl: {
        "tournaments": tournamentsPl,
		"navigation": navigationPl,
		"createTournament": createTournamentPl,
		"tournament": tournamentPl,
		"groups": groupsPl
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
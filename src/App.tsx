import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TournamentsPage from "./Pages/TournamentsPage";
import TournamentPage from "./Pages/TournamentPage";
import CreateTournamentPage from "./Pages/CreateTournamentPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import OrganizerPage from "./Pages/OrganizerPage";
import GroupsPage from "./Pages/GroupsPage";
import GroupPage from "./Pages/GroupPage";
import RegisterPage from "./Pages/RegisterPage";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./configs/i18n";
interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TournamentsPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route
              path="/tournament:tournament_id"
              element={<TournamentPage />}
            />
            <Route
              path="/createTournament"
              element={<CreateTournamentPage />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile/:user_id" element={<ProfilePage />} />
            <Route path="/organizer:organizer_id" element={<OrganizerPage />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/group/:group_id" element={<GroupPage />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </I18nextProvider>
  );
};

export default App;

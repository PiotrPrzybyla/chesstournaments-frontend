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
import "./configs/i18n";
import ProtectedRoute from "./Routes/PotectedRoute";
import { AuthProvider } from "./context/AuthContext";
interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TournamentsPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route
              path="/tournament/:tournament_id"
              element={
                <ProtectedRoute>
                  <TournamentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/createTournament"
              element={
                <ProtectedRoute>
                  <CreateTournamentPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/profile/:user_id"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/organizer/:organizer_id"
              element={
                <ProtectedRoute>
                  <OrganizerPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/groups"
              element={
                <ProtectedRoute>
                  <GroupsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/group/:group_id"
              element={
                <ProtectedRoute>
                  <GroupPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </I18nextProvider>
  );
};

export default App;

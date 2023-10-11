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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TournamentsPage/>}/>
        <Route path="/torunaments" element={<TournamentsPage/>}/>
        <Route path="tournament:tournament_id" element={<TournamentPage/>}/>
        <Route path="createTorunament" element={<CreateTournamentPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="profile/:user_id" element={<ProfilePage/>}/>
        <Route path="organizer:organizer_id" element={<OrganizerPage/>}/>
        <Route path="groups" element={<GroupsPage/>}/>
        <Route path="group/:group_id" element={<GroupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './components/layout';
import TournamentDetails from './pages/tournamentDetails';
import LoginPage from './pages/login';
import TournamentCreator from './pages/tournamentCreator';
import HomePage from './pages/home';
import Tournaments from './pages/tournaments';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MyTournaments from './pages/myTournaments';
import TournamentEditor from './pages/tournamentEditor';
import TournamentTeams from './pages/tournamentTeams';


function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tournament/:id" element={<TournamentDetails/>} caseSensitive={false}/>
          <Route path="/tournament/edit/:id" element={<ProtectedRoute>
            <TournamentEditor/>
            </ProtectedRoute>}/>
          <Route path="/tournament/teams/:id" element={<ProtectedRoute>
            <TournamentTeams/>
            </ProtectedRoute>}/>
          <Route path="/tournament/create" element={<ProtectedRoute>
            <TournamentCreator/>
            </ProtectedRoute>
          }/>
          <Route path="/mytournaments" element={<ProtectedRoute>
            <MyTournaments/>
            </ProtectedRoute>
          }/>
          <Route path="/tournaments" element={<Tournaments/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
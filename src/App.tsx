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


function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tournament/:id" element={<TournamentDetails/>} caseSensitive={false}/>
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


// return (
//   <Router>
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//     <div className="gradient-custom" >
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage/>} exact/>
//         <Route path="/login" element={<Login/>} exact/>
//         <Route path="/streamers" element={
//           <ProtectedRoute>
//         <Streamers/>
//         </ProtectedRoute>
//         } exact/>
//         <Route path="/dashboard" element={
//           <ProtectedRoute>
//         <Dashboard/>
//         </ProtectedRoute>
//         } exact/>
//         <Route path="/apexDB" element={
//           <ProtectedRoute>
//         <ApexDB/>
//         </ProtectedRoute>
//         } exact/>
//       </Routes>
//     </Layout>
//     </div>
//     </AuthContext.Provider>
//   </Router>
// );
// }

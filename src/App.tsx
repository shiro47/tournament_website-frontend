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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tournament" element={<TournamentDetails/>} caseSensitive={false}/>
          <Route path="/tournament/create" element={<TournamentCreator/>}/>
          <Route path="/tournaments" element={<Tournaments/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        
        
      </Layout>
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

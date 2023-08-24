import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './components/layout';
import TournamentsCards from './components/tournamentsCards';

function App() {
  const tournamentsData = [
    { title: 'Tournament 1', date: '2023-08-16' },
    { title: 'Tournament 2', date: '2023-08-17' },
    { title: 'Tournament 3', date: '2023-08-16' },
    { title: 'Tournament 4', date: '2023-08-17' },
    { title: 'Tournament 5', date: '2023-08-16' },
    { title: 'Tournament 6', date: '2023-08-17' },
    { title: 'Tournament 7', date: '2023-08-16' },
    { title: 'Tournament 8', date: '2023-08-17' },
    { title: 'Tournament 9', date: '2023-08-16' },
    { title: 'Tournament 10', date: '2023-08-17' },
    // ...other tournaments
  ];
  return (
    <Router>
      <Layout>
        <TournamentsCards tournaments={tournamentsData}/>
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

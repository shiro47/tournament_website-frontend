import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <p>asasdasdadsa</p>
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

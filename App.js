import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

const fakeAdmin = {
  username: "admin",
  password: "safar123",
};

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === fakeAdmin.username && password === fakeAdmin.password) {
      onLogin(true);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{display:'flex',height:'100vh',justifyContent:'center',alignItems:'center',background:'#f3f4f6'}}>
      <div style={{width:'400px',padding:'24px',background:'#fff',borderRadius:'8px',boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
        <h2 style={{fontSize:'20px',marginBottom:'16px'}}>Admin Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{width:'100%',marginBottom:'8px',padding:'8px',border:'1px solid #ccc',borderRadius:'4px'}} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:'100%',marginBottom:'8px',padding:'8px',border:'1px solid #ccc',borderRadius:'4px'}} />
        {error && <p style={{color:'red',fontSize:'14px'}}>{error}</p>}
        <button onClick={handleLogin} style={{width:'100%',marginTop:'16px',padding:'10px',background:'#3b82f6',color:'#fff',border:'none',borderRadius:'4px'}}>Login</button>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div style={{padding:'16px'}}>
      <h1 style={{fontSize:'24px',marginBottom:'16px'}}>Welcome, Admin!</h1>
      <p>Here you can manage tours and packages.</p>
    </div>
  );
}

function Home() {
  return (
    <div style={{padding:'16px'}}>
      <h1 style={{fontSize:'28px',marginBottom:'16px'}}>Safar Tour and Travel - Agra</h1>
      <p>Explore the beautiful city of Agra with us!</p>
      <ul style={{marginLeft:'24px',marginTop:'16px'}}>
        <li>Taj Mahal</li>
        <li>Agra Fort</li>
        <li>Fatehpur Sikri</li>
        <li>Mehtab Bagh</li>
      </ul>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<Login onLogin={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
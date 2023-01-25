import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { HashRouter } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <HashRouter>
        <AuthProvider value={{ user }}>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;

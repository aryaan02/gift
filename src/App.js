import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { HashRouter } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <HashRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </AuthContextProvider>
      </HashRouter>
    </div>
  );
}

export default App;

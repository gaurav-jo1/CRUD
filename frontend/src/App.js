import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import TaskPage from './pages/TaskPage';
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/profile/:ProfileTask" element={<TaskPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;

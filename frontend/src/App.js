import Homepage from './pages/Homepage';
import TaskPage from './pages/TaskPage';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from '../../../Instagram_clone/frontend/src/pages/LoginPage';
import SignupPage from '../../../Instagram_clone/frontend/src/pages/SignupPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  exact path="/" element={<Homepage />} />
        <Route exact path="/profile" element={<TaskPage />} />
      </Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </div>
  );
}

export default App;

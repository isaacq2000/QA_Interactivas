import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home.jsx';
import Login from '../pages/login.jsx';
import Profile from '../pages/profile.jsx';
import Statistics from '../pages/statistics.jsx';
import Task from '../components/newTaskPopUp.jsx';
import PasswordRecovery from '../pages/passwordRecovery.jsx';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/password-recovery" element={<PasswordRecovery />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/task" element={<Task />} />
            </Routes>
        </Router>
    );
};
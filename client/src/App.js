import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import Calandar from "./pages/Dashboard/Calandar";
import Classes from "./pages/Dashboard/Classes";
import Dashboard from './pages/Dashboard/Dashboard';
import Notification from './pages/Dashboard/Notification';
import Students from './pages/Dashboard/Students';
import Teachers from './pages/Dashboard/Teachers';
import UserProfile from './pages/Dashboard/UserProfile';

function App() {
  console.log(process.env.REACT_APP_SERVER_API_END_POINT);
  return (
    <div className="App">
      <Routes>
      
      <Route path="*" element={<Dashboard />} >
        <Route path="classes" element={<Classes />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="students" element={<Students />} />
        <Route path="calandar" element={<Calandar />} />
        <Route path="user_profile" element={<UserProfile />} />
        <Route path="notification" element={<Notification />} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/registration" element={<Registration />} />
    </Routes>
      
    </div>
  );
}

export default App;

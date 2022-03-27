import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import Calendar from "./pages/Dashboard/Calendar";
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
      <Route path="/" element={<Dashboard />} >
        <Route path="teachers" element={<Teachers />} />
        <Route path="students" element={<Students />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="user_profile" element={<UserProfile />} />
        <Route path="notification" element={<Notification />} />
        
      </Route>
    </Routes>
      
    </div>
  );
}

export default App;

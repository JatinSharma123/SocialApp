import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import Profile from './pages/profile/Profile.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TimeLine from './components/timeline/TimeLine.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {
            !user ?
              <>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />

              </> :
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/timeline" element={<TimeLine />} />
                <Route exact path="/profile/:id" element={<Profile />} />
                <Route exact path="/homePage" element={<HomePage />} />
              </>
          }



        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;

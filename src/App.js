import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './component/Navbar';
import Account from './pages/Account';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { auth } from "./Firebase"
function App() {
  const [userauth, setUserAuth] = useState('');
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUserAuth(user)
      } else {
        setUserAuth('')
      }
    });
  })
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <>
            {
              userauth ?
                <>
                  <Route path='/account' element={<Account  />} />
                  
                </>
                :
                <>
                  <Route path='/login' element={<Login  />} />
                  <Route path='/signup' element={<SignUp  />} />
                  <Route path='/' element={<Home  />} />
                  
                </>
            }
            <Route path='*' element={<PageNotFound />} />
            </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
import Users from './user/pages/Users.js'
import Auth from './user/pages/Auth';
import Services from './service/pages/Services.js'
import Search from './service/pages/Search.js'
import MainNavigation from './shared/components/Navigation/MainNavigation.js';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/:serviceId/services" element={<Search/>}/>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
  /*
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/users" element={<Users/>}/>
          <Route path="/services"  element={<Services/>} />
          <Route path="/services/:serviceId"  element={<Search/>}/>
        </Routes>
      </main>
    </Router>
  );
  */
};


export default App;

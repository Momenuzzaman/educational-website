import React from 'react';
import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Tutorials from './Components/Home/Tutorials/Tutorials';
import Cart from './Components/Cart/Cart';
import TutorialDetail from './Components/Home/TutorialDetais/TutorialDetail';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Tutorials />} />
        <Route path="/tutorialDetail/:tutorialId" element={<TutorialDetail />} />
        <Route path="/cart" element={
          <RequireAuth>
            <Cart />
          </RequireAuth>} />
        {/* <Route path="/*" element={<PrivateRoute />}>
          <Route path="cart" element={<Cart />} />
        </Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;

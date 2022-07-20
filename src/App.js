
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
import TutorialProvider from './Context/TutorialProvider/TutorialProvider';
function App() {
  return (
    <TutorialProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Tutorials />} />
          <Route path="/tutorialDetail/:tutorialId" element={<TutorialDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </TutorialProvider>
  );
}

export default App;


import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;

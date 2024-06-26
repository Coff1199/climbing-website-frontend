import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ClimbingRoutes from './pages/ClimbingRoutes';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/climbing-routes' element={<ClimbingRoutes />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;

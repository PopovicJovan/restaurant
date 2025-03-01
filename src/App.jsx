import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage.jsx";
function App() {


  return (
      <Router>
        <Routes>
          <Route index={true} path="/" element={<MainPage/>} />
        </Routes>
      </Router>
  );
}

export default App

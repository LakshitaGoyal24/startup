// import logo from './logo.svg';
import './App.css';
import AdminDashboard from './components/admindashboard/AdminDashboard';
import {BrowserRouter ,Router,RouterProvider,Routes,Route} from 'react-router-dom'
import Startup from './components/startup/Startup';
function App() {
 
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path='/startup' element={<Startup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

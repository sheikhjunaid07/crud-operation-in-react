import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Create />}/>
      <Route exact path='/read' element={<Read />}/>
      <Route path='/update' element={<Update />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

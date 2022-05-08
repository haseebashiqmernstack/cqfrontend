import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Books from './views/Books';
import Student from './views/Student';
import Navbar from './components/navbar/navbar';
import BorrowBook from './views/BorrowBook';

function App() {
  return (
    <div className="App">
      {/* <Books/> */}
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Books/>}/>
            <Route exact path="/std" element={<Student/>} />
            <Route exact path="/borrowbook" element={<BorrowBook/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

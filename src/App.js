import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header'
import Detail from './components/Detail'




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

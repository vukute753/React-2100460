
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import {Test1, Test11} from './test1';
import Header from './header'
import Hello from './Hello'
import Car from './car'
import FormLogin from './formLogin';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ul>
            <li><Link to='/login'>Đăng nhập</Link></li>
            <li><Link to='/'>Trang chủ</Link></li>
            <li><Link to='/hello'>Xin chào</Link></li>
            <li><Link to='/car'>Thông tin xe</Link></li>
          </ul>
        </div>
       

        <Routes>
          <Route path="/"/>
          <Route path="/login" element={<FormLogin/>}/>
          <Route path="/hello" element={<Hello/>}/>
          <Route path="/car"element={<Car/>}/>
          <Route path="/"/>
        </Routes>
       
      </header>
    </div>
  );
}

export default App;

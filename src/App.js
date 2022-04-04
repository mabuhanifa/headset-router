import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Component/404/404';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Rechart from './Component/Rechart/Rechart';
import Review from './Component/Review/Review';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<Rechart />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/review" element={<Review />}/>
      <Route path="*" element={<NotFound />}/>
       </Routes>
      </>
  );
}

export default App;

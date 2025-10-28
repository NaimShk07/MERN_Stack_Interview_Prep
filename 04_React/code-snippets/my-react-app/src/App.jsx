import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MainLayout from './layouts/MainLayout';
import ClassComp from './pages/ClassComp';

function App() {
   return (
      <Router>
         <MainLayout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/class" element={<ClassComp />} />
            </Routes>
         </MainLayout>
      </Router>
   );
}

export default App;

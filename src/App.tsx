
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import Auth from '@/pages/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

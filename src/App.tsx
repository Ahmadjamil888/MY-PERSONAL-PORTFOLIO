import { useEffect } from 'react';
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
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://example.com/chatbot.js'; // replace with your actual chatbot script URL
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black text-white relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <div id="chatbot-container" className="fixed bottom-4 right-4 z-50" />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

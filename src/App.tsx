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
    // Inject chatbot config
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.chatbaseConfig = {
        chatbotId: "YOUR_CHATBOT_ID"
      };
    `;
    document.head.appendChild(configScript);

    // Inject chatbot script
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;
    script.id = 'chatbase-script';
    document.head.appendChild(script);
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
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

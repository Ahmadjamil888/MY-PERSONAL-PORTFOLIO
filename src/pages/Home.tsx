
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I build web applications and custom AI systems
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Developing full stack web apps and AI models from scratch.
          </p>
          <div className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            <p className="mb-4">
              Full-stack developer with expertise in artificial intelligence, language modeling, 
              and scalable web applications. Founder of Ameenor and contributor to cutting-edge AI solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg">
                View Projects
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
                About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
              <p className="text-white/70">
                Custom LLMs, computer vision, NLP, and AI-powered applications with real-world impact.
              </p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Full-Stack Development</h3>
              <p className="text-white/70">
                Modern web applications using React, Laravel, Next.js with scalable architecture.
              </p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Research & Innovation</h3>
              <p className="text-white/70">
                Published work in quantum computing education and AI-based automation platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AhmadGPT",
                description: "Custom-built generative language model with multimodal capabilities",
                domain: "Language Modeling"
              },
              {
                title: "Quranic Scholar AI",
                description: "AI platform for exploring and understanding the Quran using NLP",
                domain: "NLP + Religion"
              },
              {
                title: "Crypto AI Trading Bot",
                description: "LSTM-based AI trading bot for cryptocurrency market analysis",
                domain: "Finance + AI"
              }
            ].map((project, index) => (
              <div key={index} className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="text-sm text-white/60 mb-2">{project.domain}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/70">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

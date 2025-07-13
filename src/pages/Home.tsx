import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting AI, SaaS & Surveillance Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build powerful AI tools, SaaS products, full-stack websites — and custom surveillance systems.
          </p>
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

      {/* Services Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What I Build</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Custom SaaS Platforms</h3>
              <p className="text-white/70">From idea to launch — I create scalable software-as-a-service platforms tailored to your business model.</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">AI Systems & Chatbots</h3>
              <p className="text-white/70">LLMs, NLP, vision models, automation tools — AI that actually works, built from scratch.</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Web Apps & Dashboards</h3>
              <p className="text-white/70">Full-stack web apps using React, Next.js, Laravel — responsive, fast, and elegant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Surveillance Solutions */}
      <section className="py-20 px-4 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Surveillance Systems</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            I design and deploy custom surveillance solutions — powered by computer vision, real-time alerts, and smart monitoring tech.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">AI CCTV Integration</h3>
              <p className="text-white/70">Smart object detection, face recognition, behavior monitoring — all in one system.</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Threat Detection Software</h3>
              <p className="text-white/70">Designed for private and government use — real-time analysis with alerting and dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 border-t border-white/10">
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

      {/* Call to Action */}
      <section className="py-20 px-4 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-6">Need a Developer Who Builds Serious Tech?</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Whether it’s SaaS, AI models, custom websites, or a next-gen surveillance system — I’ll build it from scratch for you.
        </p>
        <Link to="/contact">
          <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg">
            Let’s Talk
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

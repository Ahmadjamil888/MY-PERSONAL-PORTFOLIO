
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const featuredProjects = [
    {
      name: "AhmadGPT",
      description: "A custom-built generative language model with support for multimodal capabilities including text, code, and speech.",
      domain: "Language Modeling"
    },
    {
      name: "Quranic Scholar AI",
      description: "An AI-based platform that helps users explore and understand the Quran using natural language understanding and context-based retrieval.",
      domain: "NLP + Religion"
    },
    {
      name: "Sentiment Analysis Model",
      description: "A machine learning model that classifies sentiment in text as positive or negative.",
      domain: "NLP"
    },
    {
      name: "A* Pathfinding Visualizer",
      description: "A visual implementation of the A* pathfinding algorithm with a clean UI.",
      domain: "Algorithms"
    },
    {
      name: "Crypto AI Trading Bot (LSTM)",
      description: "An AI trading bot using LSTM to analyze and predict market trends for cryptocurrencies.",
      domain: "Time Series / Finance"
    },
    {
      name: "Realtime Object Detection Surveillance",
      description: "An AI system for real-time object detection used for surveillance and monitoring environments.",
      domain: "Computer Vision"
    }
  ];

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Ahmadjamil888/repos?sort=updated&per_page=50');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepositories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Error loading projects</div>
          <div className="text-white/70">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A collection of AI, web development, and research projects showcasing innovation and technical expertise.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="text-sm text-white/60 mb-2">{project.domain}</div>
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Repositories */}
        <section>
          <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">
            All GitHub Repositories ({repositories.length})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo) => (
              <div key={repo.id} className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-white/90 transition-colors">
                    {repo.name}
                  </h3>
                  {repo.language && (
                    <span className="text-xs px-2 py-1 bg-white/10 rounded text-white/70">
                      {repo.language}
                    </span>
                  )}
                </div>
                
                {repo.description && (
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {repo.description}
                  </p>
                )}

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.slice(0, 3).map((topic, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-white/5 text-white/60 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center text-xs text-white/60 mb-4">
                  <div className="flex space-x-4">
                    <span>★ {repo.stargazers_count}</span>
                    <span>⟪ {repo.forks_count}</span>
                  </div>
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>

                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                  >
                    View Repository
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Link */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-white/70 mb-4">
            To explore more repositories and contributions
          </p>
          <a 
            href="https://github.com/Ahmadjamil888" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-3">
              Visit GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

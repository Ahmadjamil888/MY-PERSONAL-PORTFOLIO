
import { useAuth } from '@/contexts/AuthContext';

const Blogs = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blogs</h1>
          <p className="text-xl text-white/80">
            Insights, thoughts, and technical articles about AI, development, and innovation.
          </p>
        </div>

        {/* Welcome Message for Authenticated Users */}
        {user && (
          <div className="mb-12 p-6 border border-white/10 rounded-lg bg-white/5">
            <h2 className="text-xl font-semibold mb-2">Welcome back!</h2>
            <p className="text-white/70">
              You're logged in as {user.email}. Blog functionality is coming soon.
            </p>
          </div>
        )}

        {/* Coming Soon Content */}
        <div className="text-center py-20">
          <div className="mb-8">
            <div className="w-24 h-24 border-2 border-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="text-2xl">📝</div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Blog Section Coming Soon</h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              This section will feature technical articles, research insights, project breakdowns, 
              and thoughts on AI development, software engineering, and emerging technologies.
            </p>
          </div>

          {/* Planned Content */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="font-semibold mb-3">Technical Deep Dives</h3>
              <p className="text-white/70 text-sm">
                In-depth articles about AI model development, architecture decisions, and implementation details.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="font-semibold mb-3">Project Breakdowns</h3>
              <p className="text-white/70 text-sm">
                Behind-the-scenes look at major projects, challenges faced, and lessons learned.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <h3 className="font-semibold mb-3">Industry Insights</h3>
              <p className="text-white/70 text-sm">
                Thoughts on AI trends, development practices, and the future of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;


const About = () => {
  const affiliations = [
    "Founder – Ameenor, AI-based development tools",
    "Affiliate – Aurion Softwares, SaaS and enterprise applications",
    "Intern – Aurion Tech Global",
    "Contributor – IRTCoP (International Road Transport Chamber of Pakistan)"
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "PHP"],
    "Web Development": ["HTML", "CSS", "React", "Laravel", "Next.js"],
    "AI & Machine Learning": ["PyTorch", "Scikit-learn", "HuggingFace", "Langchain", "OpenCV", "Flask"],
    "Database Systems": ["MySQL", "PostgreSQL", "MongoDB"],
    "Deployment Tools": ["Docker", "Vercel", "AWS"],
    "UI/UX & Prototyping": ["Figma", "Framer", "Adobe XD"],
    "CMS & ERP Platforms": ["WordPress", "Odoo"]
  };

  const certifications = [
    { title: "Python for Beginners", provider: "Microsoft" },
    { title: "HTML & CSS Development", provider: "W3Schools" },
    { title: "Introduction to Computer Science (CS50)", provider: "Harvard University" },
    { title: "Artificial Intelligence with Python (CS50 AI)", provider: "Harvard University" },
    { title: "Building LLMs from Scratch", provider: "Vizuara AI Labs" },
    { title: "AI for Beginners", provider: "XEVEN Technologies" },
    { title: "AI for Beginners", provider: "HP LIFE" }
  ];

  const researchInterests = [
    "Fine-tuning and optimization of large language models",
    "Integration of AI into legal, educational, and defense applications",
    "Applied research in quantum AI systems",
    "Design of scalable AI-powered SaaS tools",
    "Contribution to ethical and open-source AI development"
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ahmad Jamil</h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Software Developer & AI Researcher
          </p>
        </div>

        {/* Main Description */}
        <section className="mb-16">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Ahmad Jamil is a software developer and researcher with core expertise in full-stack web development, 
              artificial intelligence, and applied data systems. He has contributed to various fields including 
              language modeling, quantum computing education, and legal and religious automation platforms.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              His work integrates frontend design, backend logic, AI integration, and scalable deployment architecture, 
              with a focus on creating practical solutions that bridge the gap between cutting-edge technology and 
              real-world applications.
            </p>
          </div>
        </section>

        {/* Affiliations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Professional Affiliations</h2>
          <div className="space-y-4">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="p-4 border border-white/10 rounded-lg">
                <p className="text-white/80">{affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="p-6 border border-white/10 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white/10 text-white/80 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Learning and Research Interests</h2>
          <div className="space-y-3">
            {researchInterests.map((interest, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 border border-white/10 rounded-lg">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/80">{interest}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Certifications and Academic Credentials</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-white/70 text-sm">{cert.provider}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Contact Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-white/10 rounded-lg">
              <p className="text-white/80">
                <span className="font-semibold">Email:</span> shazabjamildhami@gmail.com
              </p>
            </div>
            <div className="p-4 border border-white/10 rounded-lg">
              <p className="text-white/80">
                <span className="font-semibold">Personal Website:</span> MY-PORTFOLIO
              </p>
            </div>
            <div className="p-4 border border-white/10 rounded-lg">
              <p className="text-white/80">
                <span className="font-semibold">AI Project Hub:</span> Ameenor
              </p>
            </div>
            <div className="p-4 border border-white/10 rounded-lg">
              <p className="text-white/80">
                <span className="font-semibold">GitHub:</span> @Ahmadjamil888
              </p>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className="text-center py-12 border-t border-white/10">
          <blockquote className="text-xl italic text-white/80 mb-4">
            "Indeed, with hardship comes ease."
          </blockquote>
          <p className="text-white/60">— Quran 94:6</p>
          <p className="mt-6 text-white/70">
            Contributions, feedback, and collaborations are welcome.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

import { GraduationCap, Code, Trophy, Users, Calendar, Briefcase, Brain, Globe, Shield, Database, Cloud, Cpu } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState('crt');

  const services = [
    { id: 'crt', name: 'Campus Recruitment Training', icon: <GraduationCap className="w-6 h-6" /> },
    { id: 'workshops', name: 'Technical Workshops', icon: <Code className="w-6 h-6" /> },
    { id: 'hackathons', name: 'Hackathons', icon: <Trophy className="w-6 h-6" /> },
    { id: 'talks', name: 'Guest Lectures', icon: <Users className="w-6 h-6" /> },
    { id: 'conferences', name: 'Tech Conferences', icon: <Calendar className="w-6 h-6" /> },
    { id: 'internships', name: 'Internships & Placements', icon: <Briefcase className="w-6 h-6" /> },
  ];

  const workshopDomains = [
    { name: 'Artificial Intelligence (AI)', icon: <Brain className="w-8 h-8" /> },
    { name: 'Machine Learning (ML)', icon: <Cpu className="w-8 h-8" /> },
    { name: 'Full Stack Web Development', icon: <Globe className="w-8 h-8" /> },
    { name: 'Cybersecurity', icon: <Shield className="w-8 h-8" /> },
    { name: 'Data Science', icon: <Database className="w-8 h-8" /> },
    { name: 'Cloud Computing', icon: <Cloud className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive programs designed to transform students into industry-ready professionals
          </p>
        </div>
      </section>

      <section className="py-8 px-4 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeService === service.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.icon}
                <span>{service.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeService === 'crt' && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Campus Recruitment Training (CRT)
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive program designed to boost placement readiness across engineering, degree, and diploma colleges
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Aptitude Training</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Quantitative Aptitude</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Data Interpretation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Logical Reasoning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Analytical Problem Solving</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Communication & Soft Skills</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Public Speaking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Group Discussions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>JAM Sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Corporate Etiquette</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">Interview Training</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>HR Interview Preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Technical Interview Guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Resume & Portfolio Building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>1:1 Mock Interviews</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Company-Specific Preparation</h3>
              <p className="text-gray-600 mb-6">
                Tailored training modules for top recruiting companies:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['TCS', 'Infosys', 'Wipro', 'Accenture', 'Tech Mahindra', 'Capgemini'].map((company) => (
                  <div key={company} className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center font-semibold text-gray-700">
                    {company}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-blue-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Why Our CRT Works</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Highly structured syllabus aligned with industry requirements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Industry-experienced trainers with proven track records</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Data-driven placement-boosting model</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Individual performance tracking and feedback</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'workshops' && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technical Workshops & Bootcamps
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Highly interactive workshops designed for skill enhancement and hands-on learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {workshopDomains.map((domain, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="text-blue-600 mb-4">{domain.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{domain.name}</h3>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Workshop Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span>Live demonstrations and practical sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span>Hands-on projects and assignments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span>Industry-recognized certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span>Content curated by industry experts</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'hackathons' && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hackathons & Innovation Challenges
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge competitions that inspire creativity, problem-solving, and innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">What We Provide</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <Trophy className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Themes aligned with current industry trends and challenges</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Real-time problem statements from industry partners</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Expert mentorship throughout the event</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Judging panel comprising industry leaders</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Attractive prizes and internship opportunities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Hackathon Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🚀</span>
                    <span>Boosts technical confidence and coding skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">💡</span>
                    <span>Encourages innovative and research-oriented thinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🏆</span>
                    <span>Identifies and rewards top-performing teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">📈</span>
                    <span>Significantly enhances student portfolios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🤝</span>
                    <span>Networking with industry professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'talks' && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Guest Lectures & Industry Expert Talks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn directly from industry leaders, researchers, and successful entrepreneurs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Speakers Include</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Industry Experts from Fortune 500 Companies</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Academic Researchers and Scientists</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Successful Entrepreneurs and Startup Founders</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Corporate HR Leaders and Recruiters</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Topics Covered</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Emerging Technologies and Future Trends</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Career Roadmaps and Industry Pathways</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Industry Expectations from Fresh Graduates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Soft Skills and Leadership Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'conferences' && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tech Conferences & Summits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Large-scale academic events connecting students with industry innovations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'AI & Data Science Summit',
                'National Tech Innovation Conference',
                'Research & Innovation Meets',
                'Industry-Academia Connect Conferences',
              ].map((conf, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{conf}</h3>
                  <p className="text-gray-600">
                    Multi-track conference featuring keynotes, panel discussions, paper presentations, and networking opportunities
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeService === 'internships' && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Internships & Placement Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                End-to-end career support from internships to final placements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-teal-600 mb-6">Internship Program</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Briefcase className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Summer internship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Final year project-based internships</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Real-time industry project exposure</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Mentorship from industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Internship completion certificates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Placement Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">✓</div>
                    <span>Professional resume building assistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">✓</div>
                    <span>Comprehensive interview training programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">✓</div>
                    <span>Campus placement drives through partner companies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">✓</div>
                    <span>Direct corporate connections and referrals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">✓</div>
                    <span>Post-placement career guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Campus Programs?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can customize our services for your institution
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

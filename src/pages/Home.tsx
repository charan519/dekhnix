import { GraduationCap, Users, Trophy, Briefcase, BookOpen, Target } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: 'Industry-Recognized CRT Modules',
      description: 'Comprehensive training programs designed to boost placement success',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: 'Hands-on Technical Training',
      description: 'Practical workshops and bootcamps in cutting-edge technologies',
    },
    {
      icon: <Trophy className="w-12 h-12 text-blue-600" />,
      title: 'National-Level Hackathons',
      description: 'Innovation challenges that inspire creativity and problem-solving',
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: 'Real-Time Internship Opportunities',
      description: 'Industry exposure through structured internship programs',
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Partnerships with Colleges & Companies',
      description: 'Strong academic-industry collaborations for mutual growth',
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Student-Focused Outcomes',
      description: 'Data-driven approach to enhance employability and skills',
    },
  ];

  const offerings = [
    {
      title: 'Campus Recruitment Training (CRT)',
      description: 'Comprehensive placement preparation covering aptitude, technical skills, and interview readiness',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Technical Workshops & Bootcamps',
      description: 'Hands-on training in AI/ML, Full Stack, Cybersecurity, and emerging technologies',
      gradient: 'from-green-500 to-green-700',
    },
    {
      title: 'Hackathons & Innovation Challenges',
      description: 'Real-world problem-solving competitions with mentorship and prizes',
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      title: 'Guest Lectures & Expert Talks',
      description: 'Industry leaders sharing insights on trends, career paths, and best practices',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Tech Conferences & Summits',
      description: 'Large-scale events connecting academia with industry innovations',
      gradient: 'from-red-500 to-red-700',
    },
    {
      title: 'Internships & Placement Support',
      description: 'End-to-end support from internships to final placements',
      gradient: 'from-teal-500 to-teal-700',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Campuses with Industry-Driven<br />Skill Development & Placement Training
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Transforming students into job-ready professionals through CRT, workshops, hackathons, and industry collaborations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Request Collaboration
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                Download Brochure
              </button>
              <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-all transform hover:scale-105 shadow-lg">
                Book Campus Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Dekhnix Technologies?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dekhnix Technologies is a next-generation academic-industry collaboration initiative focused on enhancing student employability through structured skill development, immersive training programs, and real-time industry engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Flagship Offerings
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive programs designed to make students industry-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${offering.gradient} p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105`}
              >
                <h3 className="text-2xl font-bold mb-4">{offering.title}</h3>
                <p className="text-white/90">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Trusted By Leading Institutions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-gray-100 h-24 rounded-lg flex items-center justify-center text-gray-400 font-semibold hover:bg-gray-200 transition-colors"
              >
                College Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Campus?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of institutions already partnering with Dekhnix Technologies
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

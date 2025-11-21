import { Target, Eye, Award, Users, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: 'Quality Training',
      description: 'Delivering excellence in every program with industry-standard curriculum',
    },
    {
      icon: <Heart className="w-10 h-10 text-blue-600" />,
      title: 'Integrity & Transparency',
      description: 'Building trust through honest communication and ethical practices',
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
      title: 'Innovation-Driven Learning',
      description: 'Embracing new technologies and teaching methodologies',
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'Student-Centric Approach',
      description: 'Every decision prioritizes student growth and success',
    },
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: 'Sustainable Partnerships',
      description: 'Creating long-term value for institutions and industry partners',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dekhnix Technologies</h1>
          <p className="text-xl text-blue-100">
            Bridging the gap between academia and industry through impactful skill development programs
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Dekhnix Technologies is an EdTech organization dedicated to bridging the gap between academia and industry by delivering impactful, job-oriented skill development programs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to empower students with the knowledge, experience, and guidance required to excel in the competitive corporate world. We work closely with educational institutions to create industry-ready graduates through structured learning frameworks and real-time training programs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                      To create industry-ready graduates through structured learning frameworks, real-time training programs, and strong institutional collaborations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Eye className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-700">
                      To become India's most trusted academic-industry partner for skill development, innovation, and employability enhancement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Partner Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Workshops Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Placement Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Network
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Be part of a community dedicated to student success and industry excellence
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
}

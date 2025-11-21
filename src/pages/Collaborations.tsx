import { Building2, Handshake, Users, Award } from 'lucide-react';

export default function Collaborations() {
  const collegeTypes = [
    { name: 'Engineering Colleges', count: 25, icon: <Building2 className="w-8 h-8" /> },
    { name: 'Degree Colleges', count: 15, icon: <Building2 className="w-8 h-8" /> },
    { name: 'Diploma Institutions', count: 8, icon: <Building2 className="w-8 h-8" /> },
    { name: 'Autonomous Universities', count: 5, icon: <Building2 className="w-8 h-8" /> },
  ];

  const industryPartners = [
    'IT Services Companies',
    'Product Startups',
    'Training Organizations',
    'Tech Communities',
    'R&D Centers',
    'Corporate Partners',
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Collaborations</h1>
          <p className="text-xl text-blue-100">
            Building bridges between academia and industry for mutual growth and student success
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Institutional Collaborations
            </h2>
            <p className="text-lg text-gray-600">
              Partnering with leading educational institutions across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {collegeTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                <div className="flex justify-center text-blue-600 mb-3">{type.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{type.count}+</div>
                <div className="text-gray-700 font-medium">{type.name}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partner Institutions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((i) => (
                <div
                  key={i}
                  className="bg-white h-32 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                >
                  <span className="text-gray-400 font-semibold">College Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Collaborations
            </h2>
            <p className="text-lg text-gray-600">
              Working with leading companies to provide real-world exposure to students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industryPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <Handshake className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900">{partner}</h3>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Partnership Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Industry Mentors</h4>
                  <p className="text-white/90 text-sm">Expert guidance from working professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Internship Tie-ups</h4>
                  <p className="text-white/90 text-sm">Direct internship opportunities for students</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Corporate Partnership</h4>
                  <p className="text-white/90 text-sm">Collaborative training and placement initiatives</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Knowledge Transfer</h4>
                  <p className="text-white/90 text-sm">Latest industry practices and technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Collaboration Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">MoU Agreements</h3>
              <p className="text-gray-600">
                Formal partnerships with clear deliverables and mutual benefits
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Joint Events</h3>
              <p className="text-gray-600">
                Co-hosted workshops, hackathons, and conferences
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Support</h3>
              <p className="text-gray-600">
                Ongoing collaboration throughout the academic year
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Partner Institution
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our growing network of institutions committed to student excellence
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Initiate Partnership
          </button>
        </div>
      </section>
    </div>
  );
}

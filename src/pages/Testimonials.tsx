import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Principal',
      institution: 'ABC Engineering College',
      content: 'Dekhnix Technologies has been instrumental in improving our placement statistics. Their CRT program is comprehensive and their trainers are exceptional. We saw a 40% increase in placements this year.',
      rating: 5,
    },
    {
      name: 'Prof. Anita Sharma',
      role: 'Head of Department - CSE',
      institution: 'XYZ Institute of Technology',
      content: 'The technical workshops conducted by Dekhnix are world-class. Our students gained practical skills in AI/ML and Full Stack Development that directly translated to better job opportunities.',
      rating: 5,
    },
    {
      name: 'Priya Reddy',
      role: 'Final Year Student',
      institution: 'DEF College of Engineering',
      content: 'The CRT training I received from Dekhnix was a game-changer. I cleared interviews at TCS, Infosys, and Wipro. The mock interviews and aptitude training were particularly helpful.',
      rating: 5,
    },
    {
      name: 'Dr. Venkat Ramanan',
      role: 'Dean - Placements',
      institution: 'GHI University',
      content: 'Dekhnix\'s approach to placement training is systematic and result-oriented. Their industry connections helped us bring in more companies for campus recruitment.',
      rating: 5,
    },
    {
      name: 'Arjun Mehta',
      role: 'Student',
      institution: 'JKL Engineering College',
      content: 'The hackathon organized by Dekhnix was an incredible experience. Not only did we win prizes, but I also got an internship offer from one of the sponsoring companies!',
      rating: 5,
    },
    {
      name: 'Prof. Sanjay Gupta',
      role: 'Training & Placement Officer',
      institution: 'MNO Institute',
      content: 'Working with Dekhnix has been seamless. They understand our requirements and deliver customized programs that fit our academic calendar perfectly.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '50+', label: 'Partner Institutions' },
    { value: '10,000+', label: 'Students Trained' },
    { value: '85%', label: 'Placement Success Rate' },
    { value: '200+', label: 'Events Conducted' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What People Say About Us</h1>
          <p className="text-xl text-blue-100">
            Hear from institutions and students who have experienced the Dekhnix difference
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Read testimonials from our valued partners and students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-10 h-10 text-blue-600 opacity-50" />
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.role}</div>
                  <div className="text-sm text-gray-600">{testimonial.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-8 rounded-xl text-center">
              <div className="text-5xl font-bold mb-2">92%</div>
              <div className="text-lg">Students recommend our programs</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl text-center">
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-lg">Placement success rate</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-xl text-center">
              <div className="text-5xl font-bold mb-2">4.8/5</div>
              <div className="text-lg">Average student rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students and institutions who have transformed their future with Dekhnix
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

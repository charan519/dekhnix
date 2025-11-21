import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      title: 'AI/ML Bootcamp',
      date: '15-17 March 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Online & Campus',
      type: 'Workshop',
      description: '3-day intensive bootcamp covering AI fundamentals, ML algorithms, and practical implementations',
      seats: '50 seats available',
    },
    {
      title: 'Campus Hackathon 2025',
      date: '22-23 March 2025',
      time: '8:00 AM - 8:00 PM',
      location: 'Partner Campuses',
      type: 'Hackathon',
      description: '24-hour innovation challenge with real-world problem statements and industry mentorship',
      seats: 'Teams of 4',
    },
    {
      title: 'Cybersecurity Workshop',
      date: '5-6 April 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Online',
      type: 'Workshop',
      description: 'Hands-on training in ethical hacking, network security, and security best practices',
      seats: '100 seats available',
    },
    {
      title: 'CRT Batch 5 Enrollment',
      date: 'Starting 10 April 2025',
      time: 'Flexible Schedule',
      location: 'Multiple Campuses',
      type: 'Training',
      description: 'Comprehensive Campus Recruitment Training for final year students',
      seats: 'Limited seats',
    },
  ];

  const pastEvents = [
    {
      title: 'National Tech Summit 2024',
      date: '15 December 2024',
      participants: '500+',
      description: 'Large-scale conference featuring industry leaders and emerging technologies',
    },
    {
      title: 'Full Stack Development Workshop',
      date: '20-22 November 2024',
      participants: '150+',
      description: 'MERN stack workshop with hands-on project development',
    },
    {
      title: 'Innovation Hackathon',
      date: '10 October 2024',
      participants: '80 teams',
      description: '36-hour hackathon with focus on sustainable technology solutions',
    },
    {
      title: 'Data Science Bootcamp',
      date: '5-7 September 2024',
      participants: '200+',
      description: 'Comprehensive training in data analysis, visualization, and ML basics',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Programs</h1>
          <p className="text-xl text-blue-100">
            Stay updated with our latest workshops, hackathons, and training programs
          </p>
        </div>
      </section>

      <section className="py-8 px-4 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-4 justify-center">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'past'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'upcoming' && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                        {event.type}
                      </span>
                      <span className="text-sm">{event.seats}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 text-blue-600 mr-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{event.description}</p>

                    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'past' && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
              <p className="text-lg text-gray-600">Highlights from our previous events</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Completed
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="w-5 h-5 text-gray-400 mr-2" />
                    <span>{event.participants} participants</span>
                  </div>

                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Event Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }, (_, i) => i + 1).map((i) => (
                  <div
                    key={i}
                    className="bg-gray-200 h-40 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <span className="text-gray-500">Event Photo {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Host an Event at Your Campus?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              We customize programs to fit your institution's needs and schedule
            </p>
            <button className="bg-white text-orange-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg">
              Request Campus Event
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Linkedin, Github, Mail } from 'lucide-react';
import PramodImage from '../Assets/Profile_win.jpg'; // ✅ imported properly

const Team = () => {
  const teamMembers = [
    {
      name: 'V PRAMOD REDDY',
      role: 'Lead Data Scientist',
      image: PramodImage,
      bio: 'PhD in Data Science with 10+ years in automotive analytics and EV research.',
      linkedin: 'https://www.linkedin.com/in/v-pramod-reddy-01683a29b/',
      github: 'https://github.com/V-PRAMOD-REDDY',
      email: 'vpramodreddy59@gmail.com'
    },
    {
      name: 'VK',
      role: 'Senior Analytics Engineer',
      image: '#',
      bio: 'Specializes in real-time data processing and visualization for EV infrastructure.',
      linkedin: '#',
      github: '#',
      email: '#'
    },
    {
      name: 'VM',
      role: 'Product Manager',
      image: '#',
      bio: 'Former Tesla product manager with expertise in EV market analysis and strategy.',
      linkedin: '#',
      github: '#',
      email: '#'
    },
    {
      name: 'VK',
      role: 'UI/UX Designer',
      image: '#',
      bio: 'Creates intuitive interfaces for complex data visualization and user experiences.',
      linkedin: '#',
      github: '#',
      email: '#'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate experts dedicated to advancing electric vehicle analytics 
            and sustainable transportation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              {member.role && <p className="text-blue-600 font-medium mb-4">{member.role}</p>}
              {member.bio && <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>}
              
              <div className="flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" />
                </a>
                <a
                  href={member.github}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  target="_blank"
                >
                  <Github className="h-4 w-4 text-gray-600" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 text-green-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for 
            sustainable transportation and data-driven innovation.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
  
};

export default Team;

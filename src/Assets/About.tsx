import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To accelerate the transition to sustainable transportation through data-driven insights and analytics.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A future where electric vehicles are the standard, supported by intelligent charging infrastructure.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering world-class analytics and visualization tools for the EV ecosystem.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a community of EV enthusiasts, researchers, and industry professionals.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Electric Vehicle Charge and Range Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing comprehensive analytics and insights 
            for the electric vehicle industry, helping drive informed decisions 
            and accelerate sustainable transportation adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Driving the Future of Electric Mobility
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our platform combines cutting-edge data analytics with intuitive visualization 
                to provide actionable insights into electric vehicle performance, charging 
                infrastructure, and market trends.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time data processing and analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Interactive dashboards and storytelling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Predictive modeling and forecasting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Industry-leading expertise and insights</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50K+</div>
                  <div className="text-blue-100">Data Points</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">EV Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-blue-100">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
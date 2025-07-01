import React from 'react';
import { BarChart3, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Zap className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Electric Vehicle 
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Charge and Range Analysis
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Comprehensive charge and range analysis dashboard with data-driven insights 
            into the future of electric mobility
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Dashboard
            </button>
            <button 
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Story
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <BarChart3 className="h-12 w-12 text-yellow-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-white/80">Live data visualization and comprehensive reporting</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <TrendingUp className="h-12 w-12 text-green-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Trend Analysis</h3>
              <p className="text-white/80">Identify patterns and forecast future trends</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Zap className="h-12 w-12 text-orange-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Performance Insights</h3>
              <p className="text-white/80">Deep dive into charging and range performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
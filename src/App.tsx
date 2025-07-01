import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Story from './components/Story';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Dashboard />
      <Story />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
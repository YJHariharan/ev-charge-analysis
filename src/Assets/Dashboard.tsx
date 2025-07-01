import React, { useEffect } from 'react';
import { BarChart3 } from 'lucide-react';

const Dashboard = () => {
  useEffect(() => {
    // Load Tableau script if not already loaded
    if (!document.querySelector('script[src*="viz_v1.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      document.head.appendChild(script);
    }

    // Initialize Tableau viz
    const initViz = () => {
      const divElement = document.getElementById('viz1751006083672');
      if (divElement && window.tableau) {
        const vizElement = divElement.getElementsByTagName('object')[0];
        if (divElement.offsetWidth > 800) {
          vizElement.style.width = '1320px';
          vizElement.style.height = '2027px';
        } else if (divElement.offsetWidth > 500) {
          vizElement.style.width = '1320px';
          vizElement.style.height = '2027px';
        } else {
          vizElement.style.width = '100%';
          vizElement.style.height = '3227px';
        }
      }
    };

    // Wait for script to load
    const checkTableau = setInterval(() => {
      if (window.tableau) {
        initViz();
        clearInterval(checkTableau);
      }
    }, 100);

    return () => clearInterval(checkTableau);
  }, []);

  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            EV Analytics Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive dashboard providing comprehensive insights into electric vehicle 
            performance, charging patterns, and range analysis
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className='tableauPlaceholder mx-auto' id='viz1751006083672' style={{ position: 'relative', maxWidth: '1320px' }}>
            <noscript>
              <a href='#'>
                <img alt='Dashboard 1' src='https://public.tableau.com/static/images/EV/EVVehicleAnalytics_17510057136920/Dashboard1/1_rss.png' style={{ border: 'none' }} />
              </a>
            </noscript>
            <object className='tableauViz' style={{ display: 'none' }}>
              <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
              <param name='embed_code_version' value='3' />
              <param name='site_root' value='' />
              <param name='name' value='EVVehicleAnalytics_17510057136920/Dashboard1' />
              <param name='tabs' value='no' />
              <param name='toolbar' value='yes' />
              <param name='static_image' value='https://public.tableau.com/static/images/EV/EVVehicleAnalytics_17510057136920/Dashboard1/1.png' />
              <param name='animate_transition' value='yes' />
              <param name='display_static_image' value='yes' />
              <param name='display_spinner' value='yes' />
              <param name='display_overlay' value='yes' />
              <param name='display_count' value='yes' />
              <param name='language' value='en-US' />
              <param name='filter' value='publish=yes' />
            </object>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
import React, { useEffect } from 'react';
import { BookOpen } from 'lucide-react';

const Story = () => {
  useEffect(() => {
    // Initialize second Tableau viz
    const initStoryViz = () => {
      const divElement = document.getElementById('viz1751006977233');
      if (divElement && window.tableau) {
        const vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width = '1016px';
        vizElement.style.height = '991px';
      }
    };

    const checkTableau = setInterval(() => {
      if (window.tableau) {
        initStoryViz();
        clearInterval(checkTableau);
      }
    }, 100);

    return () => clearInterval(checkTableau);
  }, []);

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Electric Vehicle Charge and Range Analysis Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the narrative behind electric vehicle adoption in India through 
            compelling data visualizations and trend analysis
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className='tableauPlaceholder mx-auto' id='viz1751006977233' style={{ position: 'relative', maxWidth: '1016px' }}>
            <noscript>
              <a href='#'>
                <img alt='Story of Electric cars in india' src='https://public.tableau.com/static/images/WD/WD5DHP2RT/1_rss.png' style={{ border: 'none' }} />
              </a>
            </noscript>
            <object className='tableauViz' style={{ display: 'none' }}>
              <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
              <param name='embed_code_version' value='3' />
              <param name='path' value='shared/WD5DHP2RT' />
              <param name='toolbar' value='yes' />
              <param name='static_image' value='https://public.tableau.com/static/images/WD/WD5DHP2RT/1.png' />
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

export default Story;
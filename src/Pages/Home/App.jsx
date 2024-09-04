import React from 'react';

import Animation from './Animation';

const App = () => {
  return (
    <div className='mt-20'>
      <Animation>
        <h1>This content will animate when it comes into view</h1>
      </Animation>
      <Animation>
        <p>Another section of content that animates on scroll.</p>
      </Animation>
      <Animation>
        <h1>This content will animate when it comes into view</h1>
      </Animation>
      <Animation>
        <p>Another section of content that animates on scroll.</p>
      </Animation>
      <Animation>
        <h1>This content will animate when it comes into view</h1>
        <h1>This content will animate when it comes into view</h1>
        <h1>This content will animate when it comes into view</h1>
        <h1>This content will animate when it comes into view</h1>
        <h1>This content will animate when it comes into view</h1>
        <h1>This content will animate when it comes into view</h1>
        <h1>This content will animate when it comes into view</h1>
        <h1>This content will animate when it comes into view</h1>
      </Animation>
      <Animation>
        <p>Another section of content that animates on scroll.</p>
      </Animation>
      <Animation>
        <h1>This content will animate when it comes into view</h1>
      </Animation>
      <Animation>
        <p>Another section of content that animates on scroll.</p>
      </Animation>
      {/* Add more content as needed */}
    </div>
  );
};

export default App;
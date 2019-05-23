import React from 'react';
import './App.css';
import { useState } from 'react';
import marked from 'marked';

const App: React.FC = () => {
  const [text, setText] = useState('');

  function parseMarkdown(text: string) {
    return { '__html': marked(text, { sanitize: true }) };
  }

  return (
    <div className='App'>
      <h1 style={{ color: '#00adb5' }}>Markdown Previewer</h1>
      <div id="body">
        <textarea placeholder='Type Something' style={{ width: '50%', height: window.innerHeight - 100 }} value={text} onChange={(e) => { setText(e.target.value) }} />
        <div id='viewer'>
          <div id='viewerBody' style={{ width: '50%', height: window.innerHeight - 100 }} dangerouslySetInnerHTML={parseMarkdown(text)} />
        </div>
      </div>
    </div>
  );
}

export default App;

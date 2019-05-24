import React from 'react';
import './App.css';
import { useState } from 'react';
import marked from 'marked';
import { Grid, TextField } from '@material-ui/core';

const App: React.FC = () => {
  const [text, setText] = useState('# Type Anything\n * Use Markdown\n * See preview on the right side');

  function parseMarkdown(text: string) {
    return { '__html': marked(text, { sanitize: true }) };
  }

  return (
    <div className='App'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <h1>Markdown</h1>
          <TextField InputProps={{ disableUnderline: true }} fullWidth multiline={true} rows={40} placeholder='Type Something' value={text} onChange={(e) => { setText(e.target.value) }} />
        </Grid>
        <Grid item xs={12} md={6}>
        <h1>Preview</h1>
          <div id='viewerBody' dangerouslySetInnerHTML={parseMarkdown(text)} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

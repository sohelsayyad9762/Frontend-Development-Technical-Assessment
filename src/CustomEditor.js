import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CustomEditor() {
  const [text, setText] = useState('');

  const saveContent = () => {
    console.log('Content Saved:', text);
  };

  const addVariable = () => {
    setText((prev) => prev + '{{variable}}');
  };

  return (
    <div className="custom-editor">
      <ReactQuill value={text} onChange={setText} />
      <button onClick={saveContent}>SAVE</button>
      <button onClick={addVariable}>Variables</button>
    </div>
  );
}

export default CustomEditor;

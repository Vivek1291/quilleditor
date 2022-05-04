import React, { useEffect } from 'react';

import { useQuill } from 'react-quilljs';
// import "quill/dist/quill.snow.css";
import 'quill/dist/quill.bubble.css';

function QuillEditor(props) {
  const theme = 'bubble';
  const { quill, quillRef } = useQuill({theme});
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>Enter your thoughts</h1>');
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('Text change!');
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill, quillRef]);

  return (
    <div style={{ width: 500, height: 300, border: '1px solid #ccc', color: "#000" }}>
      <div ref={quillRef} />
    </div>
  );
};

export default QuillEditor;
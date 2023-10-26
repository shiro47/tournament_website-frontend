import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface CustomEditorProps {
  onEditorChange: (content: string) => void;
  editorValue?: string;
  isRequired?: boolean; // Change required to isRequired
}

const CustomEditor: React.FC<CustomEditorProps> = ({ onEditorChange, editorValue, isRequired }) => {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (editorValue) {
      const blocksFromHTML = convertFromHTML(editorValue);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );
      const newEditorState = EditorState.createWithContent(state);
      setEditorState(newEditorState);
    }
  }, [editorValue]);

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    const contentState = state.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    onEditorChange(htmlContent); // Pass the HTML content to the parent component
  };

  // Validation function
  const validateEditor = (editorState: EditorState) => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    return rawContentState.blocks.length > 0;
  };

  return (
    <div className="container">
      <div className='rich-editor'>
        <Editor
          placeholder='Write here'
          toolbarStyle={{ color: "black" }}
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          toolbar={{
            options: ['inline', 'blockType', 'list', 'textAlign', 'history'],
            inline: { inDropdown: false },
            list: { inDropdown: false },
            textAlign: { inDropdown: true },
          }}
        />
        {isRequired && !validateEditor(editorState) && <span style={{ color: 'red' }}>This field is required</span>}
      </div>
    </div>
  );
};

export default CustomEditor;

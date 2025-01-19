'use client';
import dynamic from 'next/dynamic';
import { Editor } from '@monaco-editor/react';
import { useRef, useState } from 'react';

const MonacoEditor = dynamic(() => import('monaco-editor'), { ssr: false });
export default function CodeEditor() {
  const editorRef = useRef(null); // Correct typing for Monaco editor
  const [value, setValue] = useState(''); // Set correct type for value
  const [fontSize, setFontSize] = useState('20');
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return <div className={'code-editor'}>
    <div className={'code-editor-header'}>
      <select onChange={() => {
      }} value={value}>
        <option>Python</option>
        <option>JavaScript</option>
      </select>
      <button>Run code</button>
    </div>
    <Editor
      width={'100'}
      height={`calc(100% - 60px)`}
      language={'python'}
      theme={'light'}
      onMount={onMount}
      value={value}
      onChange={(newValue) => setValue(newValue || '')}
      options={{
        fontSize: fontSize,
        minimap: { enabled: false },
        wordWrap: 'on',
        lineNumbersMinChars: 2,
      }}
    />
  </div>;
}
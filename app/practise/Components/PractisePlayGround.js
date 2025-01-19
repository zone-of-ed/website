'use client';
import dynamic from 'next/dynamic';
import CodePractiseLeftScreen from '@/app/practise/Components/microComponents/CodePractiseLeftScreen';
import OutputConsole from '@/app/practise/Components/OutputConsole';
import CodeEditor from '@/app/practise/Components/microComponents/CodeEditor';

const SplitPane = dynamic(() => import('react-split-pane'), { ssr: false });

export default function PractisePlayGround() {
  const resizerStyle = {
    background: `$color-mesa-beige`,
    opacity: 1,
    width: '16px',
    cursor: 'col-resize',

  };

  const resizerStyleHorizontal = {
    background: `$color-mesa-beige`,
    opacity: 1,
    height: '12px',
    cursor: 'row-resize',

  };
  return <>
    <SplitPane split="vertical"
               defaultSize={500}
               resizerStyle={resizerStyle}
               className="code-practise"
               resizerClassName={'custom-resizer'}

    >
      <CodePractiseLeftScreen />
      <SplitPane split="horizontal" defaultSize={500} resizerStyle={resizerStyleHorizontal}
                 resizerClassName={'custom-resizer-left-middle'}>
        <CodeEditor />
        <OutputConsole />
      </SplitPane>
    </SplitPane>
  </>;
}
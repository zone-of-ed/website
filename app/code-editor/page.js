import Navigation from '@/app/Components/sections/navigation';
import CodePractise from '@/app/code-editor/Components/microComponents/CodePractise';

export default function Home() {
  return <>
    <Navigation canShowCommunity={false} />
    <CodePractise />
  </>;
}

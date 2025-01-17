import Navigation from '@/app/Components/sections/navigation';
import PractiseTopicCard from '@/app/practise-problems/Components/PractiseTopicCard';

export default function Home() {
  return <>
    <Navigation canShowCommunity={false} />
    <PractiseTopicCard />
  </>;
}

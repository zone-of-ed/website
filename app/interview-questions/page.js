import Navigation from '@/app/Components/sections/navigation';
import Footer from '@/app/Components/sections/footer';
import LeftPanel from '@/app/interview-questions/Components/leftPanel';
import RightPanel from '@/app/interview-questions/Components/rightPanel';

export default function InterviewQuestions() {
  return <>
    <Navigation canShowCommunity={false} />
    <main>
      <section className="interview-questions">
        <LeftPanel />
        <RightPanel />
      </section>
    </main>
    <Footer />
  </>;
}

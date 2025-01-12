import Navigation from '@/app/Components/sections/navigation';
import Footer from '@/app/Components/sections/footer';
import LeftPanel from '@/app/quiz/Components/LeftPanel';
import RightPanel from '@/app/quiz/Components/RightPanel';

export default function QuizPage() {
  return <main>
    <Navigation canShowCommunity={false} />
    <main>
      <section className="quiz">
        <LeftPanel />
        <RightPanel />
      </section>
    </main>
    <Footer />
  </main>;
}
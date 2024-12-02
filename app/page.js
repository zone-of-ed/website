import './scss/main.scss'
import { MuseoModerno } from 'next/font/google'
 
const roboto = MuseoModerno({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
  
})
export default function Home() {
 ;
  return (
    <div >
      <h1 className={roboto.className}>Hello</h1>
      <h3>Hello</h3>
    </div>
  );
}

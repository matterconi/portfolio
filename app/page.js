import Hero from '@/components/Hero';
import { FloatingNavbar } from '@/components/ui/FloatingNavbar';
import { FaHome } from 'react-icons/fa';
import Grid from '@/components/Grid';
import RecentProjects from '@/components/RecentProjects';
import { navItems } from '@/data';
import Motivation from '@/components/Motivation';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">    
      <div className="w-full">
        <FloatingNavbar navItems={navItems}/>
        <Hero />
        <div className='sm:px-10 px-5'>
          <Grid />
          <RecentProjects />
          <Motivation />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </div>
    </main>
  );
}

import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ScheduleSection } from '@/components/ScheduleSection';
import { SpeakersSection } from '@/components/SpeakersSection';
import { VolunteersSection } from '@/components/VolunteersSection';
import { LocationSection } from '@/components/LocationSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <SpeakersSection />
        <VolunteersSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

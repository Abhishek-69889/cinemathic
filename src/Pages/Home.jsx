import Navbar from '../components/Navbar';
import CoachingIntro from '../components/Home/CoachingIntro';
import MentorIntro from '../components/Home/MentorIntro';
import ClassSchedule from '../components/Home/ClassSchedule';
import TestSchedule from '../components/Home/TestSchedule';
import Review from '../components/Home/Review';
import Contact from '../components/Home/Contact';
import Courses from '../components/Home/Courses';
import CourseFeatures from '../components/Home/CourseFeatures';
import ClassGallery from '../components/Home/ClassGallery';
import FAQ from '../components/Home/FAQ';

export default function Home() {


  return (
    <div className="min-h-screen  font-[Inter]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
        .serif { font-family: 'Instrument Serif', serif; }
        .inter { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* NAV */}
      <Navbar/>

      {/* 1. COACHING INTRO */}
      <CoachingIntro/>

      {/* 2. MENTOR INTRO */}
      <MentorIntro/>

      {/* 3.Courses */}
        <Courses/>

        <CourseFeatures/>

        <ClassGallery/>

      {/* 4. CLASS LINK */}
      {/* <ClassSchedule/> */}

      {/* 5. TEST LINK */}
      {/* <TestSchedule/> */}

      {/* 6. REVIEWS */}
      <Review/>

      <FAQ/>

      {/* 7. CONTACT */}
      <Contact/>
    </div>
  );
}

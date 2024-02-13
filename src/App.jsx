import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import ReserveMentor from './components/ReserveMentor';
import AddMentor from './components/AddMentor';
import NavBar from './components/NavBar';
import MentorDetails from './components/MentorDetails';
import RemoveMentorsPage from './pages/RemoveAMentor';
import RemovedMentorsList from './pages/RemovedMentorsList';
import SplashScreen from './pages/SplashScreen';

function App() {
  const location = useLocation();

  return (
    <main className="w-full h-auto md:h-[100vh] flex justify-start items-center border-blue-500">
      {location.pathname !== '/' && <NavBar />}
      <section className="h-full lg:w-[80%] flex">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/mentors" element={<Home />} />
          <Route path="/mentors/:id" element={<MentorDetails />} />
          <Route path="/reserveMentor" element={<ReserveMentor />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/addMentor" element={<AddMentor />} />
          <Route path="/remove_mentor" element={<RemoveMentorsPage />} />
          <Route path="/removed_mentors" element={<RemovedMentorsList />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;

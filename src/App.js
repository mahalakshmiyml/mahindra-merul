import './App.scss';
import TopHeader from './Components/Includes/TopHeader';
import MainSlider from "./Components/Includes/MainSlider";
import About from "./Components/About";
import Amenities from "./Components/Amenities";
import Overview from "./Components/Overview";
import Gallery from './Components/Gallery';
import SideForm from './Components/SideForm';
import Footer from './Components/Includes/Footer';
import Location from './Components/Location';
import Pricing from './Components/Pricing';
import MasterPlan from './Components/MaterPlan/MasterPlan';
// import VirtualTour from './Components/VirtualTour';
import Contact from './Contact';
import FixedIcons from './Components/FixedIcons';
import ProjectHighlights from './Components/ProjectHighlights';

function App() {
  return (
    <>
      <TopHeader />
      <MainSlider />
      <Overview />
      <ProjectHighlights />      
      <Pricing />
      <MasterPlan />
      <Gallery />
      <Amenities />
      {/* <VirtualTour /> */}
      <SideForm />
      {/* <Location />  */}
      <Footer />
      <FixedIcons />
    </>
  );
}

export default App;

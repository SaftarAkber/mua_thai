import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Aboutus from './components/Aboutus';
import Faq from './components/Faq';
import Roadmap from './components/Roadmap';
import Timeline from './components/Timeline';
function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <Aboutus/>
      <Roadmap/>
      <Faq/>
      <Timeline/>
    </div>
  );
}

export default App;
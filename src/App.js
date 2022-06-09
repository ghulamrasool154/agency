import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Whyus from "./components/Whyus/Whyus";
import Advantages from "./components/Advantages/Advantages";
import Aboutus from "./components/Aboutus/Aboutus";
import Service from "./components/Services/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import ProductDiscussion from "./components/Productdiscussion/ProductDiscussion";
import Contactus from "./components/Contactus/Contactus";
import Skills from "./components/Skills/Skills";
import Process from "./components/Process/Process";
import Peopleabout from "./components/Peopleaboutus/Peopleabout";
function App() {
  return <>
    <Header />
    <main>
      <Whyus/>
      <Advantages/>
      <Aboutus/>
      <Service/>
      <Portfolio/>
      <Process/>
      <Peopleabout/>
      <Skills/>
      <ProductDiscussion/>
      <Contactus/>
    </main>
    <Footer/>
  </>;
}

export default App;

// components
import { Navbar } from "./components/Navbar";
import { Herosection } from "./components/herosection/Herosection"
import { Testsection } from "./components/testsection/Testsection"
import { Aboutus } from "./components/aboutus/Aboutus"
import { Counsellingsection } from "./components/counsellingsection/Counsellingsection"
import { Parenting } from "./components/parentingguide/Parenting"
import { Contacthome } from "./components/contact/Contacthome"
import { Footer } from "./components/Footer"
// stylesheet
import "./css/app.css"

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Testsection />
      <Aboutus />
      <Counsellingsection />
      <Parenting />
      <Contacthome />
      <Footer />
    </>
  );
}

export default App;

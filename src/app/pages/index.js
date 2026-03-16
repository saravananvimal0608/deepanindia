// Import all the components that make up your homepage's content
import Partner from '../components/Partner/page';
import Contact from '../components/Contact/page';
import Choose from '../components/Choose/page';
import Details from '../components/details/page';
import SlideShowBar from '../components/slider/page';
import FinancialCalculatorsMUI from '../components/InvestmentCalculators/page';
import CoreService from '../components/CoreService/CoreService/page';
import Faq from '../components/Faq/Faq/page';

// This is your homepage. It only contains the content specific to this page.
export default function HomePage() {
  return (
    // You can use a <main> tag here or a React Fragment <>
    // since the primary <main> can be in the layout.
    <>
      <SlideShowBar />
      <CoreService />
      <Choose />
      <Partner />
      <FinancialCalculatorsMUI />
      <Details />
      <Faq />
      <Contact />
    </>
  );
};
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home/Home';
import NewsLetter from './Pages/Home/NewsLetter/NewsLetter';
import PricingTable from './Pages/Home/PricingTable/PricingTable';
import AllProjects from './Pages/Home/Projects/AllProjects/AllProjects';
import GraphicDesign from './Pages/Home/Projects/graphicDesign/GraphicDesign';
import WebDesign from './Pages/Home/Projects/WebDesign';
import WebDevelopment from './Pages/Home/Projects/WebDevelopment/WebDevelopment';

function App() {
  return (
    <div>
          <Home></Home>



          <Routes>
            <Route path='/all' element={<AllProjects></AllProjects>}> </Route>
            <Route path='/webdesign' element={<WebDesign></WebDesign>}> </Route>
            <Route path='/graphicdesign' element={<GraphicDesign></GraphicDesign>}> </Route>
            <Route path='/webdevelopment' element={<WebDevelopment></WebDevelopment>}> </Route>
          </Routes>
          <div className='mx-8 md:mx-24 lg:mx-28 mt-8'>
              <PricingTable></PricingTable>
          </div>
          <div className='newsBg'>
             <div className='mx-8 md:mx-24 lg:mx-28 mt-8'>
                  <NewsLetter></NewsLetter>
             </div>
          </div>
    </div>
  );
}

export default App;

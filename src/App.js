import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import './App.css'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import AllProjects from './Pages/Home/Projects/AllProjects/AllProjects';
import GraphicDesign from './Pages/Home/Projects/graphicDesign/GraphicDesign';
import WebDesign from './Pages/Home/Projects/WebDesign/WebDesign';
import WebDevelopment from './Pages/Home/Projects/WebDevelopment/WebDevelopment';
import Main from './Pages/Layout/Main';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Services from './Pages/Services/Services';
import Service from './Pages/Services/Service';
import ProjectMain from './Pages/Layout/ProjectMain';
import NotFoundPage from './Pages/NotFound/NotFoundPage';
import ServiceDetails from './Pages/Services/ServiceDetails';
import PrivetRoute from './Pages/Login/PrivetRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Orders from './Pages/Orders/Orders';
import CheckOut from './Pages/CheckOut/CheckOut';
import DashbordLayout from './Pages/Layout/DashbordLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import Pay from './Pages/Dashboard/Pay';
AOS.init();


function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children: [
      {path:'/', element: <Home></Home>},
      {path:'/home', element: <Home></Home>},
      {path:'/aboutus', element: <About></About>},
      {path:'/service', element: <Services></Services>},
      {path:'/services/:serviceId', 
      element: 
      <PrivetRoute>
        <ServiceDetails></ServiceDetails>
      </PrivetRoute>
      },

      {path:'/faq', element: <Service></Service>},
      {path:'/contact', element: <Contact></Contact>},
      {path:'/checkout/:id', 
      element: 
      <PrivetRoute>
        <CheckOut></CheckOut>
      </PrivetRoute>
      },
       // Projects
      {path:'/', element: <ProjectMain></ProjectMain> , children:[
      {path:'/all', element: <AllProjects></AllProjects>},
      {path:'/graphicdesign', element: <GraphicDesign></GraphicDesign>},
      {path:'/webdesign', element: <WebDesign></WebDesign>},
      {path:'/webdevelopment', element: <WebDevelopment></WebDevelopment>},
    ]},
    // Dashboard Routes
      {
        path: '/dashboard',
        element: 
          <PrivetRoute>
          <DashbordLayout></DashbordLayout>
          </PrivetRoute>,
          children: [
            {
              path: '/dashboard',
              element: <Dashboard></Dashboard>
            },
            {path:'/dashboard/orders', 
            element: 
            <PrivetRoute>
              <Orders></Orders>
            </PrivetRoute>
            },
            {
              path: '/dashboard/profile',
              element: <Profile></Profile>
            },
           
            
            
           
          ]
      }
    ]},

    


    // Login Routes
    {path:'/login', element: <Login></Login>},
    {path:'/register', element: <Register></Register>},
    {path:'*', element: <NotFoundPage></NotFoundPage>},
  ])
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;

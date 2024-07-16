import './App.css';
// index.js or App.js || npm install @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Routes, Route } from 'react-router-dom';

 import Header from './componants/headercomponant/header.js';
 import Home from './componants/homecomponant/home.js';
 import Footer from './componants/footercomponant/footer.js';
 
 import About from './componants/aboutcomponant/about.js';
 import Page from './componants/pagescomponant/page.js';
 import Contact from './componants/contactcomponant/contact.js'
 import Login from './componants/logincomponant/login.js'
 import Service from './componants/servicecomponant/service.js'
 import Register from './componants/registercomponant/register.js'
import AdminHome from './componants/AdminHomecomponant/AdminHome.js';
import UserHome from './componants/UserHomecomponent/UserHome.js';
import Logout from './componants/logoutcomponent/logout.js';
import Manageusers from './componants/ManageUserscomponant/ManageUser.js';

function App() {
  return (
    <>

    <Header />

      <Routes>

      <Route path ="/" element={<Home />}> </Route>
      <Route path ="/about" element={<About />}> </Route>
      <Route path ="/page" element={<Page />}> </Route>
      <Route path ="/contact" element={<Contact />}> </Route>
      <Route path ="/service" element={<Service />}> </Route>
      <Route path ="/register" element={<Register />}> </Route>
      
      <Route path ="/login" element={<Login />}> </Route>
      <Route path ="/admin" element={<AdminHome/>}> </Route>
      <Route path ="/manageusers" element={<Manageusers/>}> </Route>
      <Route path ="/user" element={<UserHome/>}> </Route>
      <Route path ="/logout" element={<Logout/>}> </Route>
      


     </Routes>
    <Footer />
    
    
    
      
      <br/>

      
      
    </>
  );
}

export default App;

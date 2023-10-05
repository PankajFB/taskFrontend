
// import 'rsuite/dist/rsuite.min.css'

import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Mainbar from '../src/components/Home/Mainbar';
import Home from '../src/components/Home/Home';
import Address from './components/Address/Address';
import Addressdialoge from './components/Address/Addressdialoge';
import Confirmpage from './components/confirm/Confirmpage';


import Pickup from './components/SchedulePickup/Pickup';

import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import Settings from "./components/Dashboard/Settings";
import Addresssettings from './components/Dashboard/Addresssettings';
import Addaddress from './components/Dashboard/Addaddress';
import Schedule from './components/BuildCart/Schedule';
import Services from './components/services/Services';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Franchise from './components/Franchise/Franchise';
import Login from './components/Authentication/Login';
import { UserAuthContextProvider } from './components/Authentication/UseAuthContext';
import ProtectedRoute from './components/Authentication/ProtectedRoute';
import Signup from './components/Authentication/SignUp'
import Navbar from './components/UserHomePage/Mainbar';
import Userhome from './components/UserHomePage/userhome';
import Admin from './components/AdminPanel/Admin.main';
import LaundryTag from './components/AdminPanel/TagPrinting/LaundryTag';
import Billing from './components/AdminPanel/Billing';
import Customers from './components/AdminPanel/Customers/Customers';
import Products from './components/AdminPanel/Products';
import GoogleMaps from './components/Address/GoogleMap';
import LaundryBill from './components/AdminPanel/Billing/Billing';
import Geolocation from './components/AdminPanel/Geolocation/Geolocation';





function App() {
  return <>
    <div className="App">
     <BrowserRouter>
     <UserAuthContextProvider>
         <Routes>
          <Route element={<Mainbar/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/franchise" element={<Franchise/>}/>
        
          {/* <Route path='/myProfile/:userId' element={<MyProfile/>}/>
          <Route path='/myorders/:userId' element={<MyOrders/>}/>
          <Route path='/mySettings/:userId' element={<Settings/>}/>
          <Route path='/address/settings/:userId' element={<Addresssettings/>}/>
          <Route path='/address/dialogue/:userId' element={<Addaddress/>}/> */}
          </Route>
          <Route element={<Navbar/>}>
              <Route path='/Home' element={<ProtectedRoute><Userhome/></ProtectedRoute>}/>

              <Route path='/myProfile/:userId' element={<ProtectedRoute><MyProfile/></ProtectedRoute>}/>
          <Route path='/myorders/:userId' element={<ProtectedRoute><MyOrders/></ProtectedRoute>}/>
          <Route path='/mySettings/:userId' element={<ProtectedRoute><Settings/></ProtectedRoute>}/>
          <Route path='/address/settings/:userId' element={<ProtectedRoute><Addresssettings/></ProtectedRoute>}/>
          <Route path='/address/dialogue/:userId' element={<ProtectedRoute><Addaddress/></ProtectedRoute>}/>

          </Route>
          </Routes>
         
          <Routes>
          <Route>
          <Route path='/buildCart/:userId' element={<Schedule/>}/>
          <Route path="/schedulepickup/:userId" element={<Pickup/>}/>
          <Route path='/pickaddress/:userId' element={<Address/>}/>
          <Route path='/address/dialoge/:userId' element={<Addressdialoge/>}/>
          <Route path='/order/confirm/:userId' element={<Confirmpage/>}/>
          <Route path='/admin' element={<Admin/>}/>
       </Route>
          </Routes>
         </UserAuthContextProvider>

         <Routes>
          <Route path='/laundrytag' element={<LaundryTag/>}/>
          <Route path='/billing' element={<Billing/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/userlocation' element={<Geolocation/>}/>
          <Route path='/laundry-billing' element={<LaundryBill/>}/>
         </Routes>
       
      </BrowserRouter>
    </div>
    </>;
}

export default App;


{/* <Container >
<Row>
  <Col>
    <UserAuthContextProvider>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}  />
        <Route path="/phonesignup" element={<PhoneSignUp />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/franchise" element={<Franchise/>} />
      </Routes>
    </UserAuthContextProvider>
  </Col>
</Row>
</Container> */}
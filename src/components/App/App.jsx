import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Offline, Online } from 'react-detect-offline';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from '../About/About';
import Detailes from '../Detailes/Detailes';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Masterlayout from '../Masterlayout/Masterlayout';
import Moveies from '../Movies/Moveies';
import Notfound from '../Notfound/Notfound';
import People from '../People/People';
import Protected from '../Protected/Protected';
import Regetier from '../Register/Register';
import Tvshowes from '../Tvshowes/Tvshowes';
import './App.css';

function App() {
  let Logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');  
    setUserData(null)
    return <Navigate to={'login'}></Navigate>
  }
  
  const [userData, setUserData] = useState(null)
  let saveUserData=()=>{
    let encodedToken = localStorage.getItem('token');
    let decodedToken = jwtDecode(encodedToken)
    setUserData(decodedToken);
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      saveUserData();
    }
    else{

    }
   
  }, [])
  
  let routes=createBrowserRouter([
    { path:'', element: <Masterlayout userData={userData} Logout={Logout}/>,
    errorElement:<Notfound/>
    ,children:[
    {index:true, element: <Protected userData={userData} ><Home/></Protected> },
    {path:'about', element:<Protected userData={userData} ><About/></Protected> },
    {path:'movies', element: <Protected userData={userData} ><Moveies/></Protected>},
    {path:'tvshowes', element:<Protected userData={userData} ><Tvshowes/></Protected> },
    {path:'/detailes/:media_type/:id', element:<Protected userData={userData} ><Detailes/></Protected> },

    {path:'people', element: <People/>},
    {path:'register', element: <Regetier/>},
    {path:'login', element: <Login saveUserData={saveUserData}/>},



    ]}
  ]);
  return (
   <>
    <div>
    <RouterProvider router={routes} /> 
    <Online>   </Online>
    <Offline>Only shown offline (surprise!)</Offline>
  </div>
   </>
  );
}

export default App;

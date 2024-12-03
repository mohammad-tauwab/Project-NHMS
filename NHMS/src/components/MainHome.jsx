import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import App from "./App";
import MainDashboard from "./MainDashboard";
import Header from "./header";
import Sidebar from "./sidebar";

function MainHome() {
  const navigate = useNavigate();
  //const authUserDetail = useLoaderData(); // getting the data that we have passed to the loader of the router from the previous page
  const authUserDetail = JSON.parse(sessionStorage.getItem('currentUserDetails'));
  useEffect(() => {
    const handlePopState = (event) => {
      alert("Back button is disabled, Click Logout to return");
      navigate('/main');
    };

    window.onpopstate = handlePopState;

    return () => {
      window.onpopstate = null; // Clean up the event listener
    };
  }, [location]);
  return (
    <>{Object.keys(authUserDetail).length == 0? <App/>:
       <div>
        <Header currentUserDetail={authUserDetail}>
        <Sidebar></Sidebar>
        </Header>   
        
       </div>
      
    }
     
    </>
  );
}
export default MainHome;

import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import App from "./App";

function MainHome() {
  const navigate = useNavigate();
  const authUserDetail = useLoaderData(); // getting the data that we have passed to the loader of the router from the previous page

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
        <h1>This is main home</h1>
        <h2>{authUserDetail.role}</h2>
        <h2>{authUserDetail.contact}</h2>
      </div>
    }
     
    </>
  );
}
export default MainHome;

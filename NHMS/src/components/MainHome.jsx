import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import App from "./App";
import Header from "./header";
import Sidebar from "./sidebar";
import Admindashboard from "./admindashboard";

function MainHome() {
  const navigate = useNavigate();
  //const authUserDetail = useLoaderData(); // getting the data that we have passed to the loader of the router from the previous page
  let  authUserDetail ={};
  sessionStorage.getItem("currentUserDetails")? authUserDetail = JSON.parse(
    sessionStorage.getItem("currentUserDetails")) : alert("Please Login!!")
  useEffect(() => {
    const handlePopState = (event) => {
      alert("Back button is disabled, Click Logout to return");
      navigate("/main");
    };

    window.onpopstate = handlePopState;

    return () => {
      window.onpopstate = null; // Clean up the event listener
    };
  }, [location]);
  return (
    <>
      {Object.keys(authUserDetail).length == 0 ? (
        <App />
      ) : (
        <div className="block">
          <Header currentUserDetail={authUserDetail}>
          </Header>
          <div className="flex flex-row">
              <Sidebar></Sidebar>
              <Admindashboard></Admindashboard>
            </div>
        </div>
      )}
    </>
  );
}
export default MainHome;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import App from "./App";
import Header from "./subcomponent/header";
import Sidebar from "./subcomponent/sidebar";
import BackToTop from "./subcomponent/BackToTop";
import ManageUserDashboard from "./Dashboard/manageuserboard";
import fetchWithTimeOut from "../controller/fetchfromapi";

function ManageUser() {
  let [userdetails, setUserDetails] = useState([]);
  const navigate = useNavigate();
  //const authUserDetail = useLoaderData(); // getting the data that we have passed to the loader of the router from the previous page
  let authUserDetail = {};
  let sessionstoragedata = JSON.parse(
    // get the value stored in the session storage (array of objects) in landing page and store it.
    sessionStorage.getItem("currentUserDetails")
  );
  sessionstoragedata.length != 0
    ? (authUserDetail = sessionstoragedata[0]) //1st object in teh array is the user details
    : alert("Please Login!!");
  useEffect(() => {
    //load the user data to show in the manage user dashboard
    fetchWithTimeOut("http://localhost:7000/fetchuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }, 'JSON', (response,data) => {
      if(response === 'error') console.log("Error in receving data")
        else {
      setUserDetails(data);
        }
    });
    const handlePopState = (event) => {
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
          <Header currentUserDetail={authUserDetail}></Header>
          <div className="flex flex-row">
            <Sidebar></Sidebar>
            <ManageUserDashboard users={userdetails}>
              <BackToTop></BackToTop>
            </ManageUserDashboard>
          </div>
        </div>
      )}
    </>
  );
}
export default ManageUser;

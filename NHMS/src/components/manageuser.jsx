import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import App from "./App";
import Header from "./subcomponent/header";
import Sidebar from "./subcomponent/sidebar";
import BackToTop from "./subcomponent/BackToTop";
import ManageUserDashboard from "./Dashboard/manageuserboard";

function ManageUser() {
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
            <ManageUserDashboard>
              <BackToTop></BackToTop>
            </ManageUserDashboard>
          </div>
        </div>
      )}
    </>
  );
}
export default ManageUser;

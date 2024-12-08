import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import App from "./App";
import Header from "./subcomponent/header";
import Sidebar from "./subcomponent/sidebar";
import Admindashboard from "./Dashboard/admindashboard";
import BackToTop from "./subcomponent//BackToTop";
import GenUserDashBoard from "./Dashboard/genuserdashboard";

function MainHome() {
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
      alert("Back button is disabled, Click Logout to return");
      navigate("/main");
    };

    window.onpopstate = handlePopState;

    return () => {
      window.onpopstate = null; // Clean up the event listener
    };
  }, [location]);
  let roles = sessionstoragedata[1].role.split("-"); //second object in the array is the role details, coverting it to an array so that it can be used in the sidebar as props
  return (
    <>
      {Object.keys(authUserDetail).length == 0 ? (
        <App />
      ) : (
        <div className="block">
          <Header currentUserDetail={authUserDetail}></Header>
          <div className="flex flex-row">
            {authUserDetail.roles == "main admin" ? (
              <>
                <Sidebar></Sidebar>
                <Admindashboard>
                  <BackToTop></BackToTop>
                </Admindashboard>
              </>
            ) : (
              <>
                <Sidebar menuItems={roles}></Sidebar>
                <GenUserDashBoard>
                  <BackToTop></BackToTop>
                </GenUserDashBoard>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default MainHome;

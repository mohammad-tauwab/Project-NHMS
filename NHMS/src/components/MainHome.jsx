import { useEffect } from "react";
import { useLoaderData} from "react-router-dom";

function MainHome() {
  const authUserDetail = useLoaderData(); // getting the data that we have passed to the loader of the router from the previous page

  useEffect(() => { //disabling the back button 
    // Push a new state to history to intercept the back button.
    window.history.pushState(null, '', window.location.href);
    
    // Listen for the popstate event (triggered by the back button).
    const handlePopState = (event) => {
      window.history.pushState(null, '', window.location.href);
    };

    // Add event listener for back button press.
    window.addEventListener('popstate', handlePopState);

    // Clean up the event listener when the component is unmounted.
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  return (<>
  <h1>This is main home</h1>
  <h2>{authUserDetail.role}</h2>
  <h2>{authUserDetail.contact}</h2>
  </>
  )
}
export default MainHome;

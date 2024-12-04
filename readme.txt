Phase - I : Objectives - Building the registration page

DAY-01: (1.1) (Day1 : Update1)
------------------------------
0. Design the landing Page
1. Designing the header for the application 
2. Designing the patient registration page with the input as follow
    i.  Patient ID : To be generated automatically 
    ii. Patient Name
    iii.Date of Birth : Calculate the Age from it 
    iv. Mobile Number 
    v.  Gender
    vi. Location
    vii.Near Relative
    viii. Whats App Number


-------Landing Page-------- (Component-01)
From the landing page we have added a express.Router and have modified the main file to handle the Router
--> At home '/' we are rendering the landing page and when submit button is clicked we will route it to '/main' using 
the router link element
--> on click we will send the user name and password to server for authetication whcih will respond back with the object 
detailing the user. If the object is empty it means the user is not autheticated and ned to retry hence we will redirect 
the user to '/' else we will route to '/main'

--> For main we have main page whcih is to be designed.

-------------------------------------UPADTE (2.1)--------------------------------------------------------
--> Changed the landing page to add an error message.

-------------------------------------UPDATE (2.2)---------------------------------------------------
--> Display the received data in the main page so that it can be used in the Profiel Display [DONE]
--> Restrict the bypass of home to enter main [DONE]
--> Design the page layout : Add header [done]
-------------------------------------UPDATE (3.1) -------------------------------------------
A-We have handled the reload function by storing the crrent user detail in the session storage 
and reading from it at realod so as to keep the user logged in while re-loading the page
B- Handling the logout function : -->clearing the currentUserDetails from session storage and navigate to home
C- Adding the SideBar:: Side bar added and the buttons are rendered dynamically depending on the array passed to it
Side bar added usibg the state we are changing the sidebar class to make it visible or invisible

-------------------------------------ADD (3.2) -----------------------------------------------
A- Adding different mdolues in a separate file and adding the admin module to the admin dashboard.
B- Adding the functionality to the admin dashboard
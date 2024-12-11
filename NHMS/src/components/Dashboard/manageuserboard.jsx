import deleteuser from "../../assets/images/deleteuser.png";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import DropDown from "../subcomponent/dropdown";
import { userRoles } from "../../store/userrole";
import fetchWithTimeOut from "../../controller/fetchfromapi";
import Spinner from "../subcomponent/spinner";


let currentroles = []; // to store the roles array when the item is rendered
function ManageUserDashboard({ users }) { //users is an array of objects
  const [showUsers, setShowUsers] = useState(users) // to update the deleted users
  const [displayrole, setdisplayrole] = useState(false); // to set the role display visible and invisible
  const [activeuser, setactiveuser] = useState(""); //to set the active user name to display the roles
  const [adduser, setadduser] = useState(false); //to set the add user button to the display
  const [addroles, setAddRoles] = useState([]); //this array will be updated with global user role - current user role
  const [spinnervisible, setSpinnerVisible] = useState(false);
  let [rolesarray, setRolesArray] = useState(currentroles);

  const getChecekedItem = (item,add)=>{ // we are getting the checked item ,as well as true for checked and false for unchecked.
    add?setRolesArray([...rolesarray,item]):setRolesArray(rolesarray.filter(element=>{
      return element!=item; //if add is true add the item (role) else filter that item from the existing item
    }))
    setAddRoles(filterRoles(rolesarray));
  }
  useEffect(() => {
    setShowUsers(users);
    setRolesArray(currentroles);
  }, [users])

  return (
    <div
      className={`m-1 p-2 bg-slate-200 w-full rounded-tr-lg relative ${displayrole ? "pointer-events-none" : "pointer-events-auto"
        }`}
    > <span className={`title text-center text-[24px] text-bolder text-blue-500 ${users.length==0?'visible':'hidden'}`}>NO USER TO DISPLAY : ADD USER</span>
      {showUsers.map((user, userindex) => (
        <div
          className="grid grid-cols-1 gap-x-2 gap-y-1 p-1 md:grid-cols-3 lg:grid-cols-6 items-center bg-blue-200 rounded-md cursor-pointer"
          key={userindex}
        >
          {Object.values(user).map((value, index) =>
            index != 5 ? ( //do not render this span when index is 5 at which user role is stored
              <span
                className="text-center border-[1px] border-slate-400 text-slate-800 rounded-md px-2 py-1 bg-slate-200 col-auto cursor-pointer"
                key={index}
                onClick={(e) => {
                  //user name is clicked for dispplaying the roles
                  index == 0 && setdisplayrole(!displayrole);
                  setactiveuser(value); // this will set the state of the class to display the div and dispplay the user name whose role is displayed.
                  setAddRoles(filterRoles(rolesarray)); //to filter the roles to be passed to the dropdown items and update the state
                }}
              >
                {value}
              </span>
            ) : (
              <span className="hidden" key={value}>
                {/**defining this span to store the rolse which is at an index-05 in array so that it can be used in a separate display */}
                {(currentroles = value.split(","))}
              </span>
            )
          )}
          <div className="text-center border-[1px] border-slate-400 text-slate-800 rounded-md px-2 py-1 bg-red-300 col-auto hover:bg-red-500 hover:border-slate-500 flex flex-row items-center cursor-pointer m-auto"
            onClick={(e) => {
              //deletig the element in the dB and fetch the data again and give the user list to the show user
              const isconfirm  = window.confirm('User will be permanently deleted - Do you want to delete');
              if(isconfirm){
                setSpinnerVisible(true);
                fetchWithTimeOut("http://localhost:7000/deleteuser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({id : user.loginid}),
              },"JSON", (response,updateduser)=>{
                console.log('The updated usre is as shown',updateduser);
                (response=='error'?console.log(updateduser):setShowUsers(updateduser))
                setSpinnerVisible(false);
              })}
            }}>
            <img
              src={deleteuser}
              alt="Delete User"
              className="object-contain w-[30px] px-1"
            />
            Delete User
          </div>
        </div>
      ))}
      <div className={`absolute top-[5%] left-[20%] w-[40%] min-h-fit translate-x-[25%] translate-y-[15%]
        ${spinnervisible?'visible':'hidden'}`}>
      <Spinner>/</Spinner>
      </div>
      <div
        className={`absolute top-[5%] left-[20%] w-[40%] min-h-fit translate-x-[25%] translate-y-[15%] bg-blue-200 rounded-xl shadow-lg shadow-black ${displayrole ? "visible" : "invisible"
          } flxe felx-col p-3 text-center text-[20px] mb-2 pointer-events-auto`}
      >
        <div className="flex flex-row justify-between mb-2">
          <span className="flex ">{activeuser.toUpperCase()}'s Roles</span>
          <span className="flex justify-end">
            <TiDelete
              className="cursor-pointer text-red-600"
              onClick={() => { // when the floating display is closed
                setdisplayrole(false);
                setadduser(false);
                //apart from setting the display store the upadted roles in data base
                const isconfirm = window.confirm("Making changes in User Roles.Click OK To Proceede");
                isconfirm && (
                fetchWithTimeOut("http://localhost:7000/updaterole",{
                  method : "POST",
                  headers : {"Content-Type" : "application/JSON"},
                  body : JSON.stringify({role : rolesarray.join(","), id : activeuser})
                },"JSON",(response,data)=>{
                  if(response==='error') console.log(data)
                    else alert("Modification in roles done successfullly");
                }))
              }}
            ></TiDelete>
          </span>
        </div>

        {rolesarray.map((role, index) => {
          return (
            (
              <div
                className="flex flex-row items-center justify-between px-3 py-1 mr-2 border-[1px] border-slate-400  hover:bg-blue-400 hover:border-black"
                key={role}
              >
                <span className="text-center text-[17px] px-3">{role}</span>
                <MdDelete
                  className="cursor-pointer text-red-600"
                  onClick={() => {
                    const userConfirmed = confirm(//when the role is deleted
                      "Are you sure you want to delete this item?"
                    );
                   
                   
                    if (userConfirmed) {
                      rolesarray = rolesarray.filter(element =>{
                        return element != role;
                      })
                      setAddRoles(filterRoles(rolesarray));
                      setRolesArray(rolesarray);
                      
                    } else console.log("item not deleted");
                  }}
                ></MdDelete>
              </div>
            )
          )
        })}

        <div className="text-center mt-3">
          {/* for adding the add roles button */}
          <input
            type="button"
            value={` ${adduser ? "Done Selection" : "Add User Roles"}`}
            className="bg-blue-100 border-[1px] border-slate-400 p-1 px-2 rounded-xl text-[16px] hover:bg-blue-400 hover:border-black cursor-pointer"
            onClick={() => {
              setadduser(!adduser);
            }}
          />
          <div
            className={`text-center h-[40px] text-[16px] mb-9 ${adduser ? "visible" : "hidden"
              }`}
          >
            <DropDown buttonName="Choose Roles" options={addroles} checkedItem={getChecekedItem} ></DropDown>
            {/**Now options for this will be passed when different r oles are read from the database and stored in the sessionstorage as an array at the beginning of this page rendering using useEffect */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUserDashboard;

function filterRoles(currentroles) {
  let addfilterroles = userRoles; // to add the exclusive filter change
  currentroles.forEach(role => {
    addfilterroles = addfilterroles.filter(element => {
      return element != role;
    })
  })
  return addfilterroles;
}


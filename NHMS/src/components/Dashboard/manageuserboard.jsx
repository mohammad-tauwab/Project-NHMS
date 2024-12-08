import deleteuser from "../../assets/images/deleteuser.png";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
function ManageUserDashboard({
  users = [
    {
      name: "sahil",
      login: "logn",
      pwd: "pwd",
      empid: "555",
      conatct: "5255",
      role: "role1-role2-role3-role4-role5-role6-role7",
    },
    {
      name: "sahil",
      login: "logn",
      pwd: "pwd",
      empid: "555",
      conatct: "5255",
      role: "role1-role2-role3-role4-role5-role6-role7",
    },
  ],
}) {
  const [displayrole, setdisplayrole] = useState(false); // to set the role display visible and invisible
  const [activeuser, setactiveuser] = useState(""); //to set the active user name to display the roles

  let rolesarray = []; // to store the roles array when the item is rendered
  return (
    <div
      className={`m-1 p-2 bg-slate-200 w-full rounded-tr-lg relative ${
        displayrole ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {users.map((user, index) => (
        <div
          className="grid grid-cols-1 gap-x-2 gap-y-1 p-1 md:grid-cols-3 lg:grid-cols-6 items-center bg-blue-200 rounded-md cursor-pointer"
          key={index}
        >
          {Object.values(user).map((value, index) =>
            index != 5 ? ( //do not render this span when index is 5 at which user role is stored
              <span
                className="text-center border-[1px] border-slate-400 text-slate-800 rounded-md px-2 py-1 bg-slate-200 col-auto cursor-pointer"
                key={value}
                onClick={(e) => {
                  //user name is clicked for dispplaying the roles
                  index == 0 && setdisplayrole(!displayrole);
                  setactiveuser(value); // this will set the state of the class to display the div and dispplay the user name whose role is displayed.
                }}
              >
                {value}
              </span>
            ) : (
              <span className="hidden" key={value}>
                {/**defining this span to store the rolse which is at an index-05 in array so that it can be used in a separate display */}
                {(rolesarray = value.split("-"))}
              </span>
            )
          )}
          <div className="text-center border-[1px] border-slate-400 text-slate-800 rounded-md px-2 py-1 bg-red-300 col-auto hover:bg-red-500 hover:border-slate-500 flex flex-row items-center cursor-pointer m-auto">
            <img
              src={deleteuser}
              alt="Delete User"
              className="object-contain w-[30px] px-1"
              onClick={(e) => {
                //delete button is clicked
              }}
            />
            Delete User
          </div>
        </div>
      ))}
      <div
        className={`absolute top-[5%] left-[20%] w-[40%] min-h-fit translate-x-[25%] translate-y-[15%] bg-blue-200 rounded-xl shadow-lg shadow-black ${
          displayrole ? "visible" : "invisible"
        } flxe felx-col p-3 text-center text-[20px] mb-2 pointer-events-auto`}
      >
        <div className="flex flex-row justify-between">
          <span className="flex ">{activeuser.toUpperCase()}'s Roles</span>
          <span className="flex justify-end">
            <TiDelete
              className="cursor-pointer text-red-600"
              onClick={() => {
                setdisplayrole(!displayrole);
              }}
            ></TiDelete>
          </span>
        </div>

        {rolesarray.map((role, index) => (
          <div
            className="flex flex-row items-center justify-center p-1 border-[1px] border-slate-400 cursor-pointer hover:bg-blue-400 hover:border-black"
            key={role}
            onClick={() => {
              const userConfirmed = confirm(
                "Are you sure you want to delete this item?"
              );
              if (userConfirmed) {
                console.log("item deleted");
              } else console.log("item not deleted");
            }}
          >
            <span className="text-center text-[17px] px-3">{role}</span>
            <MdDelete></MdDelete>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageUserDashboard;

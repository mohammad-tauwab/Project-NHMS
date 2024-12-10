import addusers from "../../assets/images/addusers.png";
import DropDown from "../subcomponent/dropdown";
import { userRoles } from "../../store/userrole";
import { Form } from "react-router-dom";

function AddUserDashboard() {
  return (
    <>
      <div id="container" className="w-full p-3 m-1 rounded-tr-lg bg-slate-200">
        <div className="block">
          <img
            src={addusers}
            alt="This is an image"
            className="object-contain h-[80px] lg:h-[120px] m-auto mt-[10px] md:mt-[20px]"
          />
          <legend className=" text-xl text-slate-400 leading-6 border-slate-400 text-center text  border-[1px] m-1 p-1 rounded-lg bg-blue-100">
            Add User Details
            <Form action="" method="post" onSubmit={(event)=>{
              const isConfirmed = window.confirm("Do you want to add the user");
              if(!isConfirmed) event.preventDefault();
            }}>
              <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 text-center items-center gap-x-3 gap-y-2 m-2 p-2">
                <span className="text-right text-slate-600 text-lg">
                  Enter User Name :
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="User Name"
                  className="text-start p-2  border-slate-300 rounded-md text-slate-700 text-[16px] bg-slate-100 hover:border-black h-9 hover:bg-white"
                ></input>
                <span className="text-right text-slate-600 text-lg">
                  Create Login ID :
                </span>
                <input
                  type="text"
                  name="loginid"
                  placeholder="Login Id"
                  className="text-start p-2  border-slate-300 rounded-md text-slate-700 text-[16px] bg-slate-100 hover:border-black h-9 hover:bg-white"
                ></input>
                <span className="text-right text-slate-600 text-lg">
                  Create Password :
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Strong Password"
                  className="text-start p-2 border-slate-300 rounded-md text-slate-700 text-[16px] bg-slate-100 hover:border-black h-9 hover:bg-white"
                ></input>
                <span className="text-right text-slate-600 text-lg">
                  Contact Number :
                </span>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="text-start p-2 border-slate-300 rounded-md text-slate-700 text-[16px] bg-slate-100 hover:border-black h-9 hover:bg-white"
                ></input>
                <span className="text-right text-slate-600 text-lg">
                  Enter Employee ID :
                </span>
                <input
                  type="text"
                  name="employeeid"
                  placeholder="Employee Id"
                  className="text-start p-2 border-slate-300 rounded-md text-slate-700 text-[16px] bg-slate-100 hover:border-black h-9 hover:bg-white"
                ></input>
                <span className="text-right text-slate-600 text-lg">
                  Description (if any) :
                </span>
                <textarea
                  type="text"
                  name="descrption"
                  placeholder="Description"
                  className="text-start p-2 border-slate-300 rounded-md text-slate-700 text-[16px] bg-slate-100 hover:border-black hover:bg-white"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 m-1 p-2 text-[17px] items-center">
                <span className="text-right text-slate-600 text-lg">
                  Choose Suitable Role :
                </span>
                <DropDown
                  options={userRoles}
                  buttonName="Choose Roles"
                ></DropDown>
              </div>
              <input
                type="submit"
                value="Add User"
                className="px-3 py-1 border-[1px] cursor-pointer border-slate-300 rounded-xl text-slate-700 text-[16px] bg-slate-100 hover:border-black hover:bg-slate-300 m-auto text-center mt-[60px] mb-3"
              />
            </Form>
          </legend>
        </div>
      </div>
    </>
  );
}

export default AddUserDashboard;

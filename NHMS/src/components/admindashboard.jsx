import deleteuser from '../assets/images/deleteuser.png'
import setting from '../assets/images/setting.png'
import attendance from '../assets/images/attendance.png'
import pharmacy from '../assets/images/pharmacy.png'
import xrays from '../assets/images/xrays.png'
import viewreport from '../assets/images/viewreport.png'
import pathology from '../assets/images/pathology.png'
import billformat from '../assets/images/billformat.png'
import staff from '../assets/images/staff.png'
import finance from '../assets/images/finance.png'
import usermanage from '../assets/images/usermanage.png'
import adduser from '../assets/images/adduser.png'
import dataanalysis from '../assets/images/dataanalysis.png'
import { IoPersonAdd } from "react-icons/io5";
function Admindashboard() {
  return (
    <div className="w-full p-3 m-1 rounded-tr-lg bg-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full p-2 overflow-hidden  m-auto self-center md:mt-[50px]">
        <div
          className={`border-[1px] py-2 px-1 m-2   border-black rounded-xl  text-center justify-stretch shadow-md shadow-blue-500`}
        >
          <img src={adduser} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <div className="px-2 py-1 my-2 flex flex-row  items-center border-[1px] border-slate-400 rounded-xl max-w-fit  m-auto hover:bg-blue-400 hover:border-black cursor-pointer"><IoPersonAdd/>
          <input type="button" value="Add User" className='px-1 cursor-pointer'/>
          </div>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
          <img src={usermanage} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Manage Role" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
        <img src={viewreport} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="View Report" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
         <img src={deleteuser} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Delet User" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
         <img src={finance} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Manage Finance" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
         <img src={staff} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Manage Staff" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
         <img src={billformat} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Manage Bill Format" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
         <img src={pathology} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Manage Lab " className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
         <img src={xrays} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Manage X-Ray" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
         <img src={pharmacy} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Manage Pharmacy" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
         <img src={dataanalysis} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Data Analysis" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
        <img src={attendance} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Manage Attendance" className="my-2"/>
        </div>
        <div
          className={` border-[1px] py-2 px-1 m-2 border-black rounded-xl  text-center shadow-md shadow-blue-500`}
        >
         <img src={setting} alt="Delete User" className={`w-[60px] md:w-[100px] m-auto`}/><hr/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nam saepe eligendi placeat earum aliquid.</p>
          <input type="button" value="Setting" className="my-2"/>
        </div>
      </div>
    </div>
  );
}
export default Admindashboard;

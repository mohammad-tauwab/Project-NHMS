import deleteuser from "../assets/images/deleteuser.png";
import setting from "../assets/images/setting.png";
import attendance from "../assets/images/attendance.png";
import pharmacy from "../assets/images/pharmacy.png";
import xrays from "../assets/images/xrays.png";
import viewreport from "../assets/images/viewreport.png";
import pathology from "../assets/images/pathology.png";
import billformat from "../assets/images/billformat.png";
import staff from "../assets/images/staff.png";
import finance from "../assets/images/finance.png";
import usermanage from "../assets/images/usermanage.png";
import adduser from "../assets/images/adduser.png";
import dataanalysis from "../assets/images/dataanalysis.png";
import { IoPersonAdd } from "react-icons/io5";
import { MdAutoDelete } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { MdLocalPharmacy } from "react-icons/md";
import { FaXRay } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { ImLab } from "react-icons/im";
import { FcDocument } from "react-icons/fc";
import { FaPerson } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaUserCog } from "react-icons/fa";
import { MdDataExploration } from "react-icons/md";

export //defining the admin modules array here anc cnoverting it to JSON string and saving it in a file adminmodules.txt
const adminModules = [
  {
    image: adduser,
    details:
      "Add new users to the system with their respective roles and details",
    iconName: IoPersonAdd,
    buttonname: "Add User",
  },
  {
    image: deleteuser,
    details: "Delete existing users from the system",
    iconName: MdAutoDelete,
    buttonname: "Delete User",
  },
  {
    image: usermanage,
    details:
      "Manage existing users in the system, change their roles, login ID and Password and more",
    iconName: FaPersonDotsFromLine,
    buttonname: "Manage User",
  },
  {
    image: viewreport,
    details:
      "View multiple revenue reports, different financial statements and more ....",
    iconName: TbReportSearch,
    buttonname: "View Report",
  },
  {
    image: finance,
    details:
      "Manage finance of the system such as add charges, unit rate, different charges and more",
    iconName: FcMoneyTransfer,
    buttonname: "Manage Finance",
  },
  {
    image: staff,
    details:
      "Manage staff of the system add staff members, define their salary structure, increment and more and more",
    iconName: FaUserCog,
    buttonname: "HR Management",
  },
  {
    image: billformat,
    details: "Manage billing format of the OPD billing, IPD Billing and more",
    iconName: FcDocument,
    buttonname: "Manage Billing Format",
  },
  {
    image: dataanalysis,
    details:
      "Manage data analysis of the system, see different reports and analysis for more profitable buisiness, see the fields where more effor is required and more",
    iconName: MdDataExploration,
    buttonname: "Manage Data Analysis",
  },
  {
    image: pathology,
    details:
      "Manage pathology module, set report fomrat , reporting of different test and more..",
    iconName: ImLab,
    buttonname: "Manage Pathology",
  },
  {
    image: xrays,
    details:
      "Manage xrays module, set report fomrat , reporting of different test and more..",
    iconName: FaXRay,
    buttonname: "Manage X-rays",
  },
  {
    image: pharmacy,
    details:
      "Manage pharmacy module, set report fomrat , reporting of different test and more..",
    iconName: MdLocalPharmacy,
    buttonname: "Manage Pharmacy",
  },
  {
    image: attendance,
    details:
      "Manage attendance module, set shift of work, reporting of attendance and more..",
    iconName: FaPerson,
    buttonname: "Manage Attendance",
  },
  {
    image: setting,
    details:
      "Manage settings of the system, set different parameters, color, icons, background and more..",
    iconName: IoMdSettings,
    buttonname: "Settings",
  },
];

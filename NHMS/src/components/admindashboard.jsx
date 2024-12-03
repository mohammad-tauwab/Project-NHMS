import { adminModules } from "../store/admimodules";
function Admindashboard(props) {
  return (
    <div className="w-full p-3 m-1 rounded-tr-lg bg-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full p-2 overflow-hidden  m-auto self-center md:mt-[50px]">
        {adminModules.map((module, index) => (
          <div
            className={`border-[1px] py-2 px-1 m-2   border-black rounded-xl  text-center justify-stretch shadow-md shadow-blue-500 items-center`}
            key={index}
          >
            <img
              src={module.image}
              alt="Delete User"
              className={`w-[60px] md:w-[100px] m-auto`}
            />
            <hr />
            <p>{module.details}</p>
            <div className="px-2 py-1 my-2 flex flex-row  items-center border-[1px] border-slate-400 rounded-xl max-w-fit  m-auto hover:bg-blue-400 hover:border-black cursor-pointer">
              <module.iconName />
              <input
                type="button"
                value={module.buttonname}
                className="px-1 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      {props.children}
    </div>
  );
}
export default Admindashboard;

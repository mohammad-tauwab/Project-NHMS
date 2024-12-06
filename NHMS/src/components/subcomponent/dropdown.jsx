import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";


function DropDown({
  buttonName = "Button Name",
  options = ["item1", "item2", "item3 is long"],
}) {
    const [isOpen, setIsOpen] = useState(false);
    let [selectedItem, setSelectedItem]  = useState([]);
    const toggleDropDown = () =>{
        setIsOpen(!isOpen);
    }
    const handleCheckBoxChange = (checkedItem)=>{
      setSelectedItem((currentItemList)=>{
        return currentItemList.includes(checkedItem)?currentItemList.filter(items=>{return items!=checkedItem}):[...currentItemList, checkedItem];
      })
    }
    
  return (
    <div className="my-2 relative max-h-fit mx-3 w-[80%]">
      <div className="flex flex-row border-[1px] border-slate-300 bg-slate-200 rounded-xl px-3 py-1 hover:border-black hover:bg-blue-200 cursor-pointer m-auto" onClick={toggleDropDown}>
        <input type="button" value={buttonName} className="cursor-pointer"/>
        <div className={`m-auto ms-1 bg-transparent ${!isOpen?'visited':'invisible'}`}>
          <IoIosArrowDropdown />
        </div>
      </div>

      <div className={`p-1 absolute top-[100%] left-[2%] w-[80%] ${isOpen?'visited':'invisible'}`}>
        <ul className="bg-blue-100 ">
          {options.map((item, index) => (
            <li
              key={index}
              className="hover:bg-blue-300 border-[1px] border-slate-800 px-3 mb-1 py-[2px] rounded-md cursor-pointer"
              onClick={()=>{
                document.getElementById(item).checked?document.getElementById(item).checked=false:document.getElementById(item).checked=true;
                handleCheckBoxChange(item)
              }}
            >
              <input
                type="checkbox"
                name={item}
                className="mr-2 bg-transparent "
                id={item}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={`p-1 absolute top-[100%] left-[2%] w-full ${!isOpen?'visited':'invisible'}`}>
          Selected Roles - {selectedItem.join(", ")}
      </div>
    </div>
  );
}
export default DropDown;

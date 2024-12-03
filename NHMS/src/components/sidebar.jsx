import { useState } from "react";
import left from '../assets/images/left.png'
import menu from '../assets/images/menu.png'

function Sidebar({ menuItems = ["item1", "item2", "item3","item4"] }) {
    const active = {
        backgroundColor : "rgb(92, 233, 221)",
        borderRadius : "5px",
        border : "1px solid blue",
        color : "black"
    }
    const inactive ={};
    const [clickedindex, setClickedIndex] =useState(-1);
    const [expanded, setExpanded] = useState(true);
  return (
    <div
      className={`border-r-[1px] border-slate-400 p-2 px-3
    flex flex-col ms-2 justify-start  min-h-screen 
    ${expanded?('w-[130px] md:w-[250px]'):('w-[40px]')} relative`}
    >
      <span className={`text-center mb-2 ${expanded?'visible':'invisible'}`}>Sidebar Menu</span>
      <hr />
      <div className={`absolute left-[80%] md:left-[89%] top-[50%] w-8 h-8 cursor-pointer ${!expanded?'invisible':'visible'}`}>
        <img src={left} alt="right" onClick={()=>{
            setExpanded(false);
        }}/>
      </div>
      <div className={`absolute left-[5%] top-[1%] w-6 h-6 md:w-8 md:h-8 cursor-pointer ${expanded?'invisible':'visible'}`}>
        <img src={menu} alt="right" onClick={()=>{
            setExpanded(true);
        }}/>
      </div>
      

      <div className={`flex flex-col justify-start  ${expanded?'visible':'invisible'} `}>
        {menuItems.map((items,index)=>(
                    <input type="button" className="content-start text-start p-1 mb-1 mt-1 hover:bg-blue-300 hover:rounded-[5px] hover:border-[1px] hover:border-blue cursor-pointer" key={index} style={index==clickedindex ?active:inactive} onClick={(e)=>{
                        setClickedIndex(index);
                    }} value={items}>
                    </input> 
            ))}
      
      </div>
    </div>
  );
}
export default Sidebar;

import style from '../assets/css/App.module.css'
import logo from '../assets/images/logo.png'
import user from '../assets/images/user.png'

function Header ({currentUserDetail}){
return(
    <div className="w-full  border-2 border-black container rounded-xl p-2 px-3
              flex flex-row m-auto justify-between
              ">
        <div className="hidden md:block basis-2/12 content-center">
            <img src={logo} alt="LOGO" className="h-[100px] md:h-[110px] m-auto object-cover"/>
        </div>
        <div classNameName="border-2 border-lime-300 md:visible basis-8/12 content-center">
            <span className={`${style.companytitle}`}>COMPANY TITLE</span><br/>
            <span className={`${style.tagline}`}>This is the company sub title</span><br/>
            <span className={`${style.para} text-[15px]`}>The notice will be displayed here</span><br/>
        </div>
        <div className="md:visible basis-4/12 md:basis-2/12 text-center justify-between items-center flex">
            <div className="flex flex-col justify-center">
                <img src={user} alt="Image" className="h-[50px] md:h-[65px] object-contain m-auto rounded-full"/>
                <spna>{currentUserDetail.name} ({currentUserDetail.role})</spna>
            </div>
            <button type="button" className="hover:bg-blue-400 p-1 rounded-lg border-slate-300 border-[1px]">Logout</button>
        </div>
        
    </div>
)
}
export default Header;